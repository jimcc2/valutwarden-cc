/**
 * Enhanced MFA Detection Service
 * 参考 1Password 的 MFA 自动填充机制，提供更智能的多因素认证检测
 */

import { BehaviorSubject, Observable, fromEvent, merge, debounceTime, distinctUntilChanged } from "rxjs";

import { LogService } from "@bitwarden/common/platform/abstractions/log.service";
import AutofillField from "../models/autofill-field";
import AutofillPageDetails from "../models/autofill-page-details";
import AutofillForm from "../models/autofill-form";

import { EnhancedMfaConstants } from "./enhanced-mfa-constants";

export interface MfaDetectionResult {
  isMfaPage: boolean;
  mfaFields: AutofillField[];
  isSegmentedCode: boolean;
  segmentedFields?: AutofillField[];
  confidence: number;
  stage: MfaStage;
  suggestedFillDelay: number;
}

export enum MfaStage {
  Unknown = "unknown",
  LoginComplete = "login-complete", 
  MfaPrompt = "mfa-prompt",
  MfaInput = "mfa-input",
  MfaVerifying = "mfa-verifying",
  MfaComplete = "mfa-complete"
}

export interface SegmentedCodeField {
  fields: AutofillField[];
  totalLength: number;
  currentPosition: number;
}

export class EnhancedMfaDetectionService {
  private mfaStage$ = new BehaviorSubject<MfaStage>(MfaStage.Unknown);
  private lastDetectionResult: MfaDetectionResult | null = null;
  private pageChangeObserver: MutationObserver | null = null;
  private mfaFieldCache = new Map<string, AutofillField[]>();
  private segmentedCodeCache = new Map<string, SegmentedCodeField>();

  constructor(private logService: LogService) {
    this.initializePageMonitoring();
  }

  /**
   * 检测页面是否包含 MFA 相关元素
   */
  async detectMfaPage(pageDetails: AutofillPageDetails): Promise<MfaDetectionResult> {
    try {
      const pageKey = this.generatePageKey(pageDetails.url);
      
      // 检查缓存
      if (this.mfaFieldCache.has(pageKey)) {
        const cachedFields = this.mfaFieldCache.get(pageKey);
        return this.buildDetectionResult(cachedFields, pageDetails);
      }

      // 执行全面检测
      const result = await this.performFullMfaDetection(pageDetails);
      
      // 缓存结果
      if (result.mfaFields.length > 0) {
        this.mfaFieldCache.set(pageKey, result.mfaFields);
      }

      this.lastDetectionResult = result;
      this.updateMfaStage(result.stage);
      
      this.logService.info(`MFA Detection Result: ${JSON.stringify(result)}`);
      return result;
      
    } catch (error) {
      this.logService.error("Enhanced MFA detection failed", error);
      return this.createEmptyResult();
    }
  }

  /**
   * 执行完整的 MFA 检测
   */
  private async performFullMfaDetection(pageDetails: AutofillPageDetails): Promise<MfaDetectionResult> {
    const detectionMethods = [
      () => this.detectByUrl(pageDetails.url),
      () => this.detectByPageContent(pageDetails),
      () => this.detectByFieldAnalysis(pageDetails.fields),
      () => this.detectByFormStructure(pageDetails),
      () => this.detectSegmentedCode(pageDetails.fields),
    ];

    let highestConfidence = 0;
    let bestResult: MfaDetectionResult = this.createEmptyResult();

    for (const method of detectionMethods) {
      const result = await method();
      if (result.confidence > highestConfidence) {
        highestConfidence = result.confidence;
        bestResult = result;
      }
    }

    return this.enhanceDetectionResult(bestResult, pageDetails);
  }

  /**
   * 通过 URL 模式检测 MFA
   */
  private async detectByUrl(url: string): Promise<MfaDetectionResult> {
    const urlLower = url.toLowerCase();
    let confidence = 0;
    let stage = MfaStage.Unknown;

    // 检查 URL 路径中的 MFA 指示器
    for (const indicator of EnhancedMfaConstants.MfaPageIndicators) {
      if (urlLower.includes(indicator)) {
        confidence += 0.3;
        if (indicator.includes("verify") || indicator.includes("auth")) {
          stage = MfaStage.MfaPrompt;
        }
      }
    }

    // 特殊路径模式检测
    const mfaPathPatterns = [
      /\/mfa\/?/i,
      /\/2fa\/?/i, 
      /\/verify\/?/i,
      /\/authenticate\/?/i,
      /\/challenge\/?/i,
      /\/otp\/?/i,
      /\/totp\/?/i,
    ];

    for (const pattern of mfaPathPatterns) {
      if (pattern.test(url)) {
        confidence += 0.4;
        stage = MfaStage.MfaPrompt;
        break;
      }
    }

    return {
      isMfaPage: confidence > 0.5,
      mfaFields: [],
      isSegmentedCode: false,
      confidence: Math.min(confidence, 1.0),
      stage,
      suggestedFillDelay: 500,
    };
  }

  /**
   * 通过页面内容检测 MFA
   */
  private async detectByPageContent(pageDetails: AutofillPageDetails): Promise<MfaDetectionResult> {
    let confidence = 0;
    let stage = MfaStage.Unknown;

    // 检查页面标题
    const titleText = document.title?.toLowerCase() || "";
    const mfaTitleKeywords = [
      "verification", "authenticate", "security", "two-factor", "2fa", "mfa",
      "verify", "code", "token", "challenge", "confirm"
    ];

    for (const keyword of mfaTitleKeywords) {
      if (titleText.includes(keyword)) {
        confidence += 0.2;
        stage = MfaStage.MfaPrompt;
      }
    }

    // 检查页面可见文本
    const bodyText = document.body?.textContent?.toLowerCase() || "";
    const mfaContentKeywords = [
      "enter the code", "verification code", "authenticator app", 
      "text message", "sms code", "security code", "6-digit code",
      "two-factor", "multi-factor", "additional security"
    ];

    for (const keyword of mfaContentKeywords) {
      if (bodyText.includes(keyword)) {
        confidence += 0.15;
        stage = MfaStage.MfaInput;
      }
    }

    // 检查 meta 标签和页面属性
    const metaTags = document.querySelectorAll('meta[name*="description"], meta[name*="keywords"]');
    metaTags.forEach(meta => {
      const content = meta.getAttribute("content")?.toLowerCase() || "";
      if (mfaContentKeywords.some(keyword => content.includes(keyword))) {
        confidence += 0.1;
      }
    });

    return {
      isMfaPage: confidence > 0.3,
      mfaFields: [],
      isSegmentedCode: false,
      confidence: Math.min(confidence, 1.0),
      stage,
      suggestedFillDelay: 300,
    };
  }

  /**
   * 通过字段分析检测 MFA
   */
  private async detectByFieldAnalysis(fields: AutofillField[]): Promise<MfaDetectionResult> {
    const mfaFields: AutofillField[] = [];
    let confidence = 0;
    let stage = MfaStage.Unknown;

    for (const field of fields) {
      const fieldScore = this.calculateFieldMfaScore(field);
      if (fieldScore > 0.5) {
        mfaFields.push(field);
        confidence += fieldScore * 0.4;
        stage = MfaStage.MfaInput;
      }
    }

    // 额外检查：如果找到高质量的 MFA 字段
    if (mfaFields.length > 0) {
      const hasHighConfidenceField = mfaFields.some(field => 
        this.isHighConfidenceMfaField(field)
      );
      if (hasHighConfidenceField) {
        confidence += 0.3;
      }
    }

    return {
      isMfaPage: confidence > 0.5,
      mfaFields,
      isSegmentedCode: false,
      confidence: Math.min(confidence, 1.0),
      stage,
      suggestedFillDelay: 200,
    };
  }

  /**
   * 计算字段的 MFA 相关性分数
   */
  private calculateFieldMfaScore(field: AutofillField): number {
    let score = 0;
    const fieldAttributes = [
      field.htmlID?.toLowerCase() || "",
      field.htmlName?.toLowerCase() || "",
      field.placeholder?.toLowerCase() || "",
      field["label-tag"]?.toLowerCase() || "",
      field["label-aria"]?.toLowerCase() || "",
    ].filter(attr => attr.length > 0);

    // 检查主要 TOTP 字段名称
    for (const attr of fieldAttributes) {
      for (const keyword of EnhancedMfaConstants.PrimaryTotpFieldNames) {
        if (attr === keyword || attr.includes(keyword)) {
          score += 0.8;
          break;
        }
      }
    }

    // 检查次要字段名称
    if (score < 0.5) {
      for (const attr of fieldAttributes) {
        for (const keyword of EnhancedMfaConstants.SecondaryTotpFieldNames) {
          if (attr === keyword || attr.includes(keyword)) {
            score += 0.6;
            break;
          }
        }
      }
    }

    // 检查多语言支持
    if (score < 0.5) {
      for (const attr of fieldAttributes) {
        for (const keyword of EnhancedMfaConstants.MultiLanguageTotpFieldNames) {
          if (attr.includes(keyword)) {
            score += 0.7;
            break;
          }
        }
      }
    }

    // 检查自动完成属性
    if (field.autoCompleteType) {
      for (const autocompleteType of EnhancedMfaConstants.MfaAutocompleteTypes) {
        if (field.autoCompleteType.includes(autocompleteType)) {
          score += 0.5;
          break;
        }
      }
    }

    // 检查字段类型和长度
    if (EnhancedMfaConstants.ValidMfaInputTypes.includes(field.type)) {
      score += 0.2;
    }

    if (field.maxLength && EnhancedMfaConstants.CommonCodeLengths.includes(field.maxLength)) {
      score += 0.3;
    }

    // 减分项：排除字段
    for (const attr of fieldAttributes) {
      for (const excluded of EnhancedMfaConstants.ExcludedMfaFields) {
        if (attr.includes(excluded)) {
          score -= 0.5;
          break;
        }
      }
    }

    return Math.max(0, Math.min(1, score));
  }

  /**
   * 检测分段验证码
   */
  private async detectSegmentedCode(fields: AutofillField[]): Promise<MfaDetectionResult> {
    const segmentedGroups: AutofillField[][] = [];
    let confidence = 0;

    // 按照命名模式分组
    for (const pattern of EnhancedMfaConstants.SegmentedCodePatterns) {
      const matchingFields = fields.filter(field => {
        const fieldName = field.htmlName?.toLowerCase() || field.htmlID?.toLowerCase() || "";
        return pattern.test(fieldName);
      });

      if (matchingFields.length >= 4) { // 至少4个连续字段
        segmentedGroups.push(matchingFields.sort((a, b) => {
          const aNum = this.extractNumberFromField(a);
          const bNum = this.extractNumberFromField(b);
          return aNum - bNum;
        }));
        confidence += 0.7;
      }
    }

    // 检测连续的数字/字符输入框
    const numericFields = fields.filter(field => 
      field.type === "text" || field.type === "number"
    ).filter(field => 
      field.maxLength && field.maxLength <= 2 // 单字符输入框
    );

    if (numericFields.length >= 4) {
      // 按位置排序，检测是否连续
      numericFields.sort((a, b) => a.elementNumber - b.elementNumber);
      const consecutiveGroups = this.findConsecutiveFields(numericFields);
      
      for (const group of consecutiveGroups) {
        if (group.length >= 4) {
          segmentedGroups.push(group);
          confidence += 0.6;
        }
      }
    }

    if (segmentedGroups.length > 0) {
      const bestGroup = segmentedGroups[0]; // 选择第一个匹配的组
      return {
        isMfaPage: true,
        mfaFields: bestGroup,
        isSegmentedCode: true,
        segmentedFields: bestGroup,
        confidence: Math.min(confidence, 1.0),
        stage: MfaStage.MfaInput,
        suggestedFillDelay: 100, // 分段码需要更快的填充
      };
    }

    return this.createEmptyResult();
  }

  /**
   * 通过表单结构检测 MFA
   */
  private async detectByFormStructure(pageDetails: AutofillPageDetails): Promise<MfaDetectionResult> {
    let confidence = 0;
    let stage = MfaStage.Unknown;
    const mfaFields: AutofillField[] = [];

    // 检查是否存在密码字段
    const passwordFields = pageDetails.fields.filter(field => field.type === "password");
    const hasPasswordField = passwordFields.length > 0;

    // 检查非密码字段的数量和类型
    const nonPasswordFields = pageDetails.fields.filter(field => 
      field.type !== "password" && 
      field.type !== "hidden" &&
      field.type !== "submit"
    );

    // MFA 页面通常特征：
    // 1. 很少或没有密码字段
    // 2. 主要是文本/数字输入框
    // 3. 字段数量较少（1-10个）
    if (!hasPasswordField && nonPasswordFields.length >= 1 && nonPasswordFields.length <= 6) {
      confidence += 0.4;
      stage = MfaStage.MfaInput;

      // 查找最可能的 MFA 字段
      for (const field of nonPasswordFields) {
        if (this.calculateFieldMfaScore(field) > 0.3) {
          mfaFields.push(field);
          confidence += 0.2;
        }
      }
    }

    // 检查表单的命名和 ID
    if (pageDetails.forms) {
      Object.values(pageDetails.forms).forEach(form => {
        const formName = form.htmlName?.toLowerCase() || "";
        const formId = form.htmlID?.toLowerCase() || "";
        
        for (const indicator of EnhancedMfaConstants.MfaPageIndicators) {
          if (formName.includes(indicator) || formId.includes(indicator)) {
            confidence += 0.3;
            stage = MfaStage.MfaPrompt;
            break;
          }
        }
      });
    }

    return {
      isMfaPage: confidence > 0.5,
      mfaFields,
      isSegmentedCode: false,
      confidence: Math.min(confidence, 1.0),
      stage,
      suggestedFillDelay: 300,
    };
  }

  /**
   * 增强检测结果
   */
  private enhanceDetectionResult(result: MfaDetectionResult, pageDetails: AutofillPageDetails): MfaDetectionResult {
    if (!result.isMfaPage) {
      return result;
    }

    // 添加时间敏感性检测
    const hasTimeSensitiveIndicators = this.detectTimeSensitiveElements();
    if (hasTimeSensitiveIndicators) {
      result.suggestedFillDelay = Math.max(50, result.suggestedFillDelay - 200);
    }

    // 检测页面加载状态
    if (document.readyState !== "complete") {
      result.suggestedFillDelay += 300;
    }

    // 优化置信度
    if (result.isSegmentedCode) {
      result.confidence = Math.min(1.0, result.confidence + 0.2);
    }

    return result;
  }

  /**
   * 检测时间敏感元素
   */
  private detectTimeSensitiveElements(): boolean {
    const textContent = document.body?.textContent?.toLowerCase() || "";
    return EnhancedMfaConstants.TimeSensitiveIndicators.some(indicator => 
      textContent.includes(indicator)
    );
  }

  /**
   * 初始化页面监控
   */
  private initializePageMonitoring(): void {
    // 监控页面变化，自动检测 MFA 流程
    if (typeof window !== "undefined" && window.MutationObserver) {
      this.pageChangeObserver = new MutationObserver((mutations) => {
        const hasSignificantChanges = mutations.some(mutation => 
          mutation.type === "childList" && mutation.addedNodes.length > 0
        );

        if (hasSignificantChanges) {
          this.onPageContentChanged();
        }
      });

      this.pageChangeObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
      });
    }

    // 监控 URL 变化
    if (typeof window !== "undefined") {
      const urlChangeEvents = merge(
        fromEvent(window, "popstate"),
        fromEvent(window, "pushstate"),
        fromEvent(window, "replacestate")
      );

      urlChangeEvents.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(() => {
        this.onUrlChanged();
      });
    }
  }

  /**
   * 页面内容变化处理
   */
  private onPageContentChanged(): void {
    // 清除缓存，重新检测
    this.clearCache();
    
    // 延迟检测，等待页面稳定
    setTimeout(() => {
      this.logService.info("Page content changed, re-detecting MFA elements");
    }, 500);
  }

  /**
   * URL 变化处理
   */
  private onUrlChanged(): void {
    this.clearCache();
    this.updateMfaStage(MfaStage.Unknown);
    this.logService.info("URL changed, clearing MFA detection cache");
  }

  /**
   * 辅助方法
   */
  private generatePageKey(url: string): string {
    return btoa(url).slice(0, 20);
  }

  private createEmptyResult(): MfaDetectionResult {
    return {
      isMfaPage: false,
      mfaFields: [],
      isSegmentedCode: false,
      confidence: 0,
      stage: MfaStage.Unknown,
      suggestedFillDelay: 500,
    };
  }

  private buildDetectionResult(fields: AutofillField[], pageDetails: AutofillPageDetails): MfaDetectionResult {
    return {
      isMfaPage: fields.length > 0,
      mfaFields: fields,
      isSegmentedCode: fields.length > 3,
      confidence: 0.8,
      stage: MfaStage.MfaInput,
      suggestedFillDelay: 200,
    };
  }

  private updateMfaStage(stage: MfaStage): void {
    this.mfaStage$.next(stage);
  }

  private isHighConfidenceMfaField(field: AutofillField): boolean {
    return this.calculateFieldMfaScore(field) > 0.7;
  }

  private extractNumberFromField(field: AutofillField): number {
    const name = field.htmlName || field.htmlID || "";
    const match = name.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  private findConsecutiveFields(fields: AutofillField[]): AutofillField[][] {
    const groups: AutofillField[][] = [];
    let currentGroup: AutofillField[] = [];

    for (let i = 0; i < fields.length; i++) {
      if (i === 0 || fields[i].elementNumber === fields[i - 1].elementNumber + 1) {
        currentGroup.push(fields[i]);
      } else {
        if (currentGroup.length >= 4) {
          groups.push([...currentGroup]);
        }
        currentGroup = [fields[i]];
      }
    }

    if (currentGroup.length >= 4) {
      groups.push(currentGroup);
    }

    return groups;
  }

  private clearCache(): void {
    this.mfaFieldCache.clear();
    this.segmentedCodeCache.clear();
    this.lastDetectionResult = null;
  }

  /**
   * 公共 API
   */
  getCurrentMfaStage(): Observable<MfaStage> {
    return this.mfaStage$.asObservable();
  }

  getLastDetectionResult(): MfaDetectionResult | null {
    return this.lastDetectionResult;
  }

  dispose(): void {
    if (this.pageChangeObserver) {
      this.pageChangeObserver.disconnect();
      this.pageChangeObserver = null;
    }
    this.clearCache();
    this.mfaStage$.complete();
  }
} 