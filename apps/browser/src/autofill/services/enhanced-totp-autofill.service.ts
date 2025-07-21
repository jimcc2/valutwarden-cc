/**
 * Enhanced TOTP Autofill Service
 * 参考 1Password 的 MFA 自动填充机制，提供更智能和广泛的 TOTP 自动填充
 */

import { firstValueFrom } from "rxjs";

import { LogService } from "@bitwarden/common/platform/abstractions/log.service";
import { TotpService } from "@bitwarden/common/vault/abstractions/totp.service";
import { CipherView } from "@bitwarden/common/vault/models/view/cipher.view";
import { CipherType } from "@bitwarden/common/vault/enums";

import { BrowserApi } from "../../platform/browser/browser-api";
import { AutofillScript } from "../models/autofill-script";
import { EnhancedMfaConstants } from "./enhanced-mfa-constants";

export interface TotpFillOptions {
  tab: chrome.tabs.Tab;
  cipher: CipherView;
  pageDetails: any[];
  fillDelay?: number;
  allowSegmentedFill?: boolean;
  forceOverwrite?: boolean;
  autoSubmit?: boolean;
}

export interface TotpFieldAnalysis {
  field: any;
  confidence: number;
  fieldType: TotpFieldType;
  segmentIndex?: number;
  maxLength?: number;
  isVisible: boolean;
}

export enum TotpFieldType {
  Standard = "standard",
  Segmented = "segmented", 
  Hidden = "hidden",
  Readonly = "readonly",
  Dynamic = "dynamic"
}

export interface SegmentedTotpResult {
  isSegmented: boolean;
  fields: any[];
  totalSegments: number;
  segmentLength: number;
}

export class EnhancedTotpAutofillService {
  private totpFillHistory = new Map<string, number>();
  private segmentedCodeCache = new Map<string, SegmentedTotpResult>();
  private fieldAnalysisCache = new Map<string, TotpFieldAnalysis[]>();

  constructor(
    private logService: LogService,
    private totpService: TotpService,
  ) {}

  /**
   * 增强的 TOTP 自动填充 - 主入口
   */
  async enhancedTotpFill(options: TotpFillOptions): Promise<string | null> {
    try {
      if (!options.cipher?.login?.totp) {
        return null;
      }

      this.logService.info("Starting enhanced TOTP autofill");

      // 生成 TOTP 代码
      const totpResponse = await firstValueFrom(this.totpService.getCode$(options.cipher.login.totp));
      if (!totpResponse?.code) {
        this.logService.error("Failed to generate TOTP code");
        return null;
      }

      const totpCode = totpResponse.code;
      let fillSuccess = false;

      // 多重填充策略
      for (const pageDetail of options.pageDetails) {
        const result = await this.fillTotpInPageDetail(
          pageDetail,
          totpCode,
          options
        );
        if (result) {
          fillSuccess = true;
        }
      }

      if (fillSuccess) {
        this.recordTotpFillSuccess(options.tab.url);
        return totpCode;
      }

      return null;
    } catch (error) {
      this.logService.error("Enhanced TOTP autofill failed", error);
      return null;
    }
  }

  /**
   * 在单个页面详情中填充 TOTP
   */
  private async fillTotpInPageDetail(
    pageDetail: any,
    totpCode: string,
    options: TotpFillOptions
  ): Promise<boolean> {
    const { details, frameId } = pageDetail;
    if (!details?.fields?.length) {
      return false;
    }

    // 分析页面中的 TOTP 字段
    const totpFields = await this.analyzeTotpFields(details.fields);
    if (!totpFields.length) {
      return false;
    }

    // 检测分段验证码
    const segmentedResult = this.detectSegmentedTotp(totpFields);
    if (segmentedResult.isSegmented && options.allowSegmentedFill !== false) {
      return await this.fillSegmentedTotp(
        segmentedResult,
        totpCode,
        options,
        frameId
      );
    }

    // 标准单字段填充
    return await this.fillStandardTotp(
      totpFields,
      totpCode,
      options,
      frameId
    );
  }

  /**
   * 分析页面中的 TOTP 字段
   */
  private async analyzeTotpFields(fields: any[]): Promise<TotpFieldAnalysis[]> {
    const totpFields: TotpFieldAnalysis[] = [];

    for (const field of fields) {
      const analysis = await this.analyzeIndividualField(field);
      if (analysis.confidence > 0.3) { // 降低阈值以捕获更多字段
        totpFields.push(analysis);
      }
    }

    // 按置信度排序
    return totpFields.sort((a, b) => b.confidence - a.confidence);
  }

  /**
   * 分析单个字段
   */
  private async analyzeIndividualField(field: any): Promise<TotpFieldAnalysis> {
    let confidence = 0;
    let fieldType = TotpFieldType.Standard;

    // 基础字段信息
    const fieldName = (field.htmlName || field.htmlID || "").toLowerCase();
    const placeholder = (field.placeholder || "").toLowerCase();
    const labelText = (field["label-tag"] || field["label-aria"] || "").toLowerCase();
    const fieldClass = (field.htmlClass || "").toLowerCase();

    // 主要关键词匹配 (高置信度)
    const primaryKeywords = EnhancedMfaConstants.PrimaryTotpFieldNames;
    for (const keyword of primaryKeywords) {
      if (this.matchesKeyword(fieldName, keyword) ||
          this.matchesKeyword(placeholder, keyword) ||
          this.matchesKeyword(labelText, keyword)) {
        confidence += 0.8;
        break;
      }
    }

    // 次要关键词匹配 (中等置信度)
    if (confidence < 0.5) {
      const secondaryKeywords = EnhancedMfaConstants.SecondaryTotpFieldNames;
      for (const keyword of secondaryKeywords) {
        if (this.matchesKeyword(fieldName, keyword) ||
            this.matchesKeyword(placeholder, keyword) ||
            this.matchesKeyword(labelText, keyword)) {
          confidence += 0.6;
          break;
        }
      }
    }

    // 多语言关键词匹配
    if (confidence < 0.5) {
      const multiLangKeywords = EnhancedMfaConstants.MultiLanguageTotpFieldNames;
      for (const keyword of multiLangKeywords) {
        if (fieldName.includes(keyword) ||
            placeholder.includes(keyword) ||
            labelText.includes(keyword)) {
          confidence += 0.7;
          break;
        }
      }
    }

    // 自动完成属性检查
    if (field.autoCompleteType) {
      const autocompleteTypes = EnhancedMfaConstants.MfaAutocompleteTypes;
      for (const acType of autocompleteTypes) {
        if (field.autoCompleteType.includes(acType)) {
          confidence += 0.5;
          break;
        }
      }
    }

    // 字段类型和属性检查
    if (EnhancedMfaConstants.ValidMfaInputTypes.includes(field.type)) {
      confidence += 0.2;
    }

    // 字段长度模式检查
    if (field.maxLength && EnhancedMfaConstants.CommonCodeLengths.includes(field.maxLength)) {
      confidence += 0.3;
      if (field.maxLength <= 2) {
        fieldType = TotpFieldType.Segmented;
      }
    }

    // 分段码模式检查
    for (const pattern of EnhancedMfaConstants.SegmentedCodePatterns) {
      if (pattern.test(fieldName)) {
        confidence += 0.6;
        fieldType = TotpFieldType.Segmented;
        break;
      }
    }

    // 可见性检查
    const isVisible = field.viewable !== false;
    if (!isVisible) {
      fieldType = TotpFieldType.Hidden;
      confidence *= 0.7; // 隐藏字段降低置信度
    }

    // 只读字段检查
    if (field.readonly) {
      fieldType = TotpFieldType.Readonly;
      confidence *= 0.5; // 只读字段大幅降低置信度
    }

    // 排除明显的非 TOTP 字段
    const excludedKeywords = EnhancedMfaConstants.ExcludedMfaFields;
    for (const excluded of excludedKeywords) {
      if (fieldName.includes(excluded) || 
          placeholder.includes(excluded) ||
          labelText.includes(excluded)) {
        confidence *= 0.1; // 大幅降低置信度
        break;
      }
    }

    return {
      field,
      confidence: Math.max(0, Math.min(1, confidence)),
      fieldType,
      maxLength: field.maxLength,
      isVisible,
    };
  }

  /**
   * 关键词匹配辅助函数
   */
  private matchesKeyword(text: string, keyword: string): boolean {
    if (!text || !keyword) return false;
    
    // 精确匹配
    if (text === keyword) return true;
    
    // 包含匹配
    if (text.includes(keyword)) return true;
    
    // 模糊匹配 (处理连字符、下划线等)
    const normalizedText = text.replace(/[-_\s]/g, "");
    const normalizedKeyword = keyword.replace(/[-_\s]/g, "");
    return normalizedText.includes(normalizedKeyword);
  }

  /**
   * 检测分段 TOTP 验证码
   */
  private detectSegmentedTotp(totpFields: TotpFieldAnalysis[]): SegmentedTotpResult {
    const segmentedFields = totpFields.filter(f => f.fieldType === TotpFieldType.Segmented);
    
    if (segmentedFields.length >= 4) {
      // 按字段名称中的数字排序
      segmentedFields.sort((a, b) => {
        const aNum = this.extractNumberFromFieldName(a.field);
        const bNum = this.extractNumberFromFieldName(b.field);
        return aNum - bNum;
      });

      return {
        isSegmented: true,
        fields: segmentedFields.map(f => f.field),
        totalSegments: segmentedFields.length,
        segmentLength: segmentedFields[0].maxLength || 1,
      };
    }

    // 检查连续的短字段
    const shortFields = totpFields.filter(f => 
      f.maxLength && f.maxLength <= 2 && f.confidence > 0.3
    );

    if (shortFields.length >= 4) {
      shortFields.sort((a, b) => a.field.elementNumber - b.field.elementNumber);
      
      // 检查是否连续
      let consecutiveCount = 1;
      for (let i = 1; i < shortFields.length; i++) {
        if (shortFields[i].field.elementNumber === shortFields[i-1].field.elementNumber + 1) {
          consecutiveCount++;
        } else {
          break;
        }
      }

      if (consecutiveCount >= 4) {
        return {
          isSegmented: true,
          fields: shortFields.slice(0, consecutiveCount).map(f => f.field),
          totalSegments: consecutiveCount,
          segmentLength: 1,
        };
      }
    }

    return {
      isSegmented: false,
      fields: [],
      totalSegments: 0,
      segmentLength: 0,
    };
  }

  /**
   * 填充分段 TOTP 验证码
   */
  private async fillSegmentedTotp(
    segmentedResult: SegmentedTotpResult,
    totpCode: string,
    options: TotpFillOptions,
    frameId: number
  ): Promise<boolean> {
    try {
      const { fields, segmentLength } = segmentedResult;
      const fillScript = new AutofillScript();
      
      // 将验证码拆分为段
      const segments = this.splitTotpCode(totpCode, segmentLength, fields.length);
      
      if (segments.length !== fields.length) {
        this.logService.warn(`TOTP code length mismatch: ${segments.length} vs ${fields.length}`);
        return false;
      }

      // 填充每个段
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const segment = segments[i];
        
        if (field.opid) {
          this.fillByOpid(fillScript, field, segment);
        }
      }

      // 执行填充
      await this.executeFillScript(fillScript, options.tab, frameId, options.fillDelay || 100);
      
      this.logService.info(`Successfully filled segmented TOTP with ${fields.length} segments`);
      return true;
      
    } catch (error) {
      this.logService.error("Failed to fill segmented TOTP", error);
      return false;
    }
  }

  /**
   * 填充标准 TOTP 验证码
   */
  private async fillStandardTotp(
    totpFields: TotpFieldAnalysis[],
    totpCode: string,
    options: TotpFillOptions,
    frameId: number
  ): Promise<boolean> {
    try {
      // 选择最佳字段
      const bestField = this.selectBestTotpField(totpFields);
      if (!bestField) {
        return false;
      }

      const fillScript = new AutofillScript();
      this.fillByOpid(fillScript, bestField.field, totpCode);

      // 执行填充
      await this.executeFillScript(fillScript, options.tab, frameId, options.fillDelay || 200);
      
      this.logService.info(`Successfully filled standard TOTP in field: ${bestField.field.htmlName || bestField.field.htmlID}`);
      return true;
      
    } catch (error) {
      this.logService.error("Failed to fill standard TOTP", error);
      return false;
    }
  }

  /**
   * 选择最佳的 TOTP 字段
   */
  private selectBestTotpField(totpFields: TotpFieldAnalysis[]): TotpFieldAnalysis | null {
    if (!totpFields.length) return null;

    // 优先选择可见的高置信度字段
    const visibleFields = totpFields.filter(f => f.isVisible);
    if (visibleFields.length > 0) {
      return visibleFields[0]; // 已按置信度排序
    }

    // 如果没有可见字段，选择最高置信度的字段
    return totpFields[0];
  }

  /**
   * 拆分 TOTP 代码为段
   */
  private splitTotpCode(totpCode: string, segmentLength: number, totalSegments: number): string[] {
    const segments: string[] = [];
    
    if (segmentLength === 1) {
      // 每个字段一个字符
      for (let i = 0; i < Math.min(totpCode.length, totalSegments); i++) {
        segments.push(totpCode.charAt(i));
      }
    } else {
      // 均匀分割
      const charsPerSegment = Math.ceil(totpCode.length / totalSegments);
      for (let i = 0; i < totalSegments; i++) {
        const start = i * charsPerSegment;
        const end = Math.min(start + charsPerSegment, totpCode.length);
        segments.push(totpCode.substring(start, end));
      }
    }

    return segments;
  }

  /**
   * 执行填充脚本
   */
  private async executeFillScript(
    fillScript: AutofillScript,
    tab: chrome.tabs.Tab,
    frameId: number,
    delay: number = 200
  ): Promise<void> {
    if (!fillScript.script || !fillScript.script.length) {
      return;
    }

    // 添加延迟
    fillScript.properties = fillScript.properties || {};
    fillScript.properties.delay_between_operations = delay;

    // 发送填充命令
    await BrowserApi.tabSendMessage(
      tab,
      {
        command: "fillForm",
        fillScript: fillScript,
        url: tab.url,
      },
      { frameId }
    );
  }

  /**
   * 通过 opid 填充字段
   */
  private fillByOpid(fillScript: AutofillScript, field: any, value: string): void {
    if (!field.opid) return;

    fillScript.script = fillScript.script || [];
    fillScript.script.push(["click_on_opid", field.opid]);
    fillScript.script.push(["focus_by_opid", field.opid]);
    fillScript.script.push(["fill_by_opid", field.opid, value]);
  }

  /**
   * 提取字段名称中的数字
   */
  private extractNumberFromFieldName(field: any): number {
    const name = field.htmlName || field.htmlID || "";
    const match = name.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  /**
   * 记录 TOTP 填充成功
   */
  private recordTotpFillSuccess(url: string): void {
    const domain = this.extractDomain(url);
    this.totpFillHistory.set(domain, Date.now());
  }

  /**
   * 检查最近是否成功填充过 TOTP
   */
  public hasRecentTotpFill(url: string, timeWindowMs: number = 30000): boolean {
    const domain = this.extractDomain(url);
    const lastFillTime = this.totpFillHistory.get(domain);
    return lastFillTime && (Date.now() - lastFillTime) < timeWindowMs;
  }

  /**
   * 提取域名
   */
  private extractDomain(url: string): string {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  }

  /**
   * 清理缓存
   */
  public clearCache(): void {
    this.segmentedCodeCache.clear();
    this.fieldAnalysisCache.clear();
    
    // 清理过期的填充历史 (保留24小时)
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
    for (const [domain, timestamp] of this.totpFillHistory.entries()) {
      if (timestamp < oneDayAgo) {
        this.totpFillHistory.delete(domain);
      }
    }
  }

  /**
   * 获取 TOTP 填充统计
   */
  public getTotpFillStats(): { totalFills: number; recentFills: number } {
    const recentFills = Array.from(this.totpFillHistory.values())
      .filter(timestamp => (Date.now() - timestamp) < 3600000) // 1小时内
      .length;

    return {
      totalFills: this.totpFillHistory.size,
      recentFills,
    };
  }
} 