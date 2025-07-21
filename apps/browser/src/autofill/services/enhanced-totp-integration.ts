/**
 * Enhanced TOTP Integration Layer
 * 将增强的 TOTP 功能集成到现有的 AutofillService 中
 * 参考 1Password 的 MFA 自动填充机制
 */

import { firstValueFrom } from "rxjs";

import { 
  EnhancedTotpUtils, 
  EnhancedTotpConstants, 
  EnhancedTotpAutofillExtensions,
  TotpFieldType,
  SegmentedTotpInfo 
} from "./enhanced-totp-extensions";

export interface TotpIntegrationOptions {
  enableSegmentedFill?: boolean;
  enableMultiLanguageDetection?: boolean;
  enableTimeSensitiveFill?: boolean;
  customFillDelay?: number;
  fallbackToOriginal?: boolean;
}

export interface TotpFillResult {
  success: boolean;
  method: 'enhanced' | 'segmented' | 'original' | 'failed';
  fieldsFound: number;
  confidence: number;
  fillDelay: number;
  totpCode?: string;
  error?: string;
}

/**
 * Enhanced TOTP Integration Service
 * 为 AutofillService 提供增强的 TOTP 功能
 */
export class EnhancedTotpIntegration {
  private static instance: EnhancedTotpIntegration;
  private fillHistory = new Map<string, { timestamp: number; method: string; success: boolean }>();
  
  private constructor() {}

  static getInstance(): EnhancedTotpIntegration {
    if (!EnhancedTotpIntegration.instance) {
      EnhancedTotpIntegration.instance = new EnhancedTotpIntegration();
    }
    return EnhancedTotpIntegration.instance;
  }

  /**
   * 增强的 TOTP 字段查找 - 替代原有的 findTotpField 方法
   */
  enhancedFindTotpField(
    pageDetails: any,
    passwordField?: any,
    canBeHidden: boolean = false,
    canBeReadOnly: boolean = false,
    withoutForm: boolean = false,
    options: TotpIntegrationOptions = {}
  ): any | null {
    try {
      // 使用增强的字段查找
      const enhancedField = EnhancedTotpAutofillExtensions.findEnhancedTotpField(
        pageDetails,
        passwordField,
        canBeHidden,
        canBeReadOnly,
        withoutForm
      );

      if (enhancedField) {
        const analysis = EnhancedTotpUtils.analyzeTotpField(enhancedField);
        console.log(`Enhanced TOTP field found with confidence: ${analysis.confidence}`, {
          field: enhancedField.htmlName || enhancedField.htmlID,
          type: analysis.fieldType,
          confidence: analysis.confidence
        });
        return enhancedField;
      }

      // 如果启用了回退，使用原始逻辑（这里需要原始的 findTotpField 实现）
      if (options.fallbackToOriginal) {
        return this.originalFindTotpField(pageDetails, passwordField, canBeHidden, canBeReadOnly, withoutForm);
      }

      return null;
    } catch (error) {
      console.error("Enhanced TOTP field finding failed:", error);
      return options.fallbackToOriginal ? 
        this.originalFindTotpField(pageDetails, passwordField, canBeHidden, canBeReadOnly, withoutForm) : 
        null;
    }
  }

  /**
   * 增强的 TOTP 填充逻辑 - 支持分段码和多语言
   */
  async enhancedTotpFill(
    fillScript: any,
    pageDetails: any,
    totpCode: string,
    totpService: any,
    options: TotpIntegrationOptions = {}
  ): Promise<TotpFillResult> {
    const startTime = Date.now();
    const defaultOptions: TotpIntegrationOptions = {
      enableSegmentedFill: true,
      enableMultiLanguageDetection: true,
      enableTimeSensitiveFill: true,
      fallbackToOriginal: true,
      ...options
    };

    try {
      const fields = pageDetails.fields || [];
      if (!fields.length) {
        return this.createFailureResult("No fields found", 0);
      }

      // 1. 尝试检测和填充分段验证码
      if (defaultOptions.enableSegmentedFill) {
        const segmentedResult = await this.trySegmentedTotpFill(
          fillScript, 
          fields, 
          totpCode, 
          totpService,
          defaultOptions
        );
        if (segmentedResult.success) {
          this.recordFillAttempt(pageDetails.url, "segmented", true);
          return segmentedResult;
        }
      }

      // 2. 尝试增强的单字段填充
      const enhancedResult = await this.tryEnhancedSingleFieldFill(
        fillScript,
        pageDetails,
        totpCode,
        totpService,
        defaultOptions
      );
      if (enhancedResult.success) {
        this.recordFillAttempt(pageDetails.url, "enhanced", true);
        return enhancedResult;
      }

      // 3. 回退到原始逻辑
      if (defaultOptions.fallbackToOriginal) {
        const originalResult = await this.tryOriginalTotpFill(
          fillScript,
          pageDetails,
          totpCode,
          totpService,
          defaultOptions
        );
        if (originalResult.success) {
          this.recordFillAttempt(pageDetails.url, "original", true);
          return originalResult;
        }
      }

      // 所有方法都失败
      this.recordFillAttempt(pageDetails.url, "all", false);
      return this.createFailureResult("All fill methods failed", fields.length);

    } catch (error) {
      console.error("Enhanced TOTP fill failed:", error);
      return this.createFailureResult(`Error: ${error.message}`, 0);
    }
  }

  /**
   * 检查页面是否为 MFA 页面
   */
  isMfaPage(url: string, pageTitle?: string, pageContent?: string): boolean {
    return EnhancedTotpAutofillExtensions.isMfaPage(url, pageTitle, pageContent);
  }

  /**
   * 获取填充统计信息
   */
  getFillStatistics(): {
    totalAttempts: number;
    successfulAttempts: number;
    methodBreakdown: { [method: string]: { total: number; successful: number } };
  } {
    const stats = {
      totalAttempts: 0,
      successfulAttempts: 0,
      methodBreakdown: {} as { [method: string]: { total: number; successful: number } }
    };

    for (const [url, record] of this.fillHistory.entries()) {
      stats.totalAttempts++;
      if (record.success) {
        stats.successfulAttempts++;
      }

      if (!stats.methodBreakdown[record.method]) {
        stats.methodBreakdown[record.method] = { total: 0, successful: 0 };
      }
      stats.methodBreakdown[record.method].total++;
      if (record.success) {
        stats.methodBreakdown[record.method].successful++;
      }
    }

    return stats;
  }

  // 私有方法

  /**
   * 尝试分段 TOTP 填充
   */
  private async trySegmentedTotpFill(
    fillScript: any,
    fields: any[],
    totpCode: string,
    totpService: any,
    options: TotpIntegrationOptions
  ): Promise<TotpFillResult> {
    try {
      const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(fields);
      
      if (!segmentedInfo.isSegmented) {
        return this.createFailureResult("No segmented fields detected", fields.length);
      }

      const success = await EnhancedTotpAutofillExtensions.fillSegmentedTotp(
        fillScript,
        fields,
        totpCode,
        totpService
      );

      if (success) {
        return {
          success: true,
          method: 'segmented',
          fieldsFound: segmentedInfo.totalSegments,
          confidence: 0.9, // 分段填充通常置信度很高
          fillDelay: options.customFillDelay || 100,
          totpCode
        };
      }

      return this.createFailureResult("Segmented fill execution failed", segmentedInfo.totalSegments);
    } catch (error) {
      return this.createFailureResult(`Segmented fill error: ${error.message}`, 0);
    }
  }

  /**
   * 尝试增强的单字段填充
   */
  private async tryEnhancedSingleFieldFill(
    fillScript: any,
    pageDetails: any,
    totpCode: string,
    totpService: any,
    options: TotpIntegrationOptions
  ): Promise<TotpFillResult> {
    try {
      const field = this.enhancedFindTotpField(pageDetails, undefined, false, false, false, options);
      
      if (!field) {
        return this.createFailureResult("No enhanced TOTP field found", 0);
      }

      const analysis = EnhancedTotpUtils.analyzeTotpField(field);
      const fillDelay = options.customFillDelay || 
        EnhancedTotpAutofillExtensions.getRecommendedFillDelay(field, pageDetails);

      // 执行填充
      if (field.opid) {
        if (!fillScript.script) {
          fillScript.script = [];
        }
        fillScript.script.push(["click_on_opid", field.opid]);
        fillScript.script.push(["focus_by_opid", field.opid]);
        fillScript.script.push(["fill_by_opid", field.opid, totpCode]);

        return {
          success: true,
          method: 'enhanced',
          fieldsFound: 1,
          confidence: analysis.confidence,
          fillDelay,
          totpCode
        };
      }

      return this.createFailureResult("Field has no opid", 1);
    } catch (error) {
      return this.createFailureResult(`Enhanced single field fill error: ${error.message}`, 0);
    }
  }

  /**
   * 尝试原始 TOTP 填充逻辑
   */
  private async tryOriginalTotpFill(
    fillScript: any,
    pageDetails: any,
    totpCode: string,
    totpService: any,
    options: TotpIntegrationOptions
  ): Promise<TotpFillResult> {
    try {
      // 这里应该调用原始的 TOTP 填充逻辑
      // 由于我们无法直接访问原始实现，这里提供一个简化版本
      const field = this.originalFindTotpField(pageDetails);
      
      if (!field) {
        return this.createFailureResult("No original TOTP field found", 0);
      }

      // 执行原始填充逻辑
      if (field.opid) {
        if (!fillScript.script) {
          fillScript.script = [];
        }
        fillScript.script.push(["fill_by_opid", field.opid, totpCode]);

        return {
          success: true,
          method: 'original',
          fieldsFound: 1,
          confidence: 0.7, // 原始方法的默认置信度
          fillDelay: options.customFillDelay || 200,
          totpCode
        };
      }

      return this.createFailureResult("Original field has no opid", 1);
    } catch (error) {
      return this.createFailureResult(`Original fill error: ${error.message}`, 0);
    }
  }

  /**
   * 原始的 findTotpField 实现（简化版）
   */
  private originalFindTotpField(
    pageDetails: any,
    passwordField?: any,
    canBeHidden: boolean = false,
    canBeReadOnly: boolean = false,
    withoutForm: boolean = false
  ): any | null {
    // 这是原始 AutofillService.findTotpField 的简化实现
    // 在实际集成时，应该调用原始方法
    const fields = pageDetails.fields || [];
    
    for (const field of fields) {
      if (field.disabled) continue;
      if (!canBeReadOnly && field.readonly) continue;
      if (!canBeHidden && field.viewable === false) continue;
      if (!withoutForm && passwordField && field.form !== passwordField.form) continue;

      if (field.type === "text" || field.type === "number") {
        const fieldName = (field.htmlName || field.htmlID || "").toLowerCase();
        const placeholder = (field.placeholder || "").toLowerCase();
        
        // 基础的 TOTP 字段检测
        const totpKeywords = ["totp", "2fa", "mfa", "code", "verification", "security", "auth"];
        for (const keyword of totpKeywords) {
          if (fieldName.includes(keyword) || placeholder.includes(keyword)) {
            return field;
          }
        }
      }
    }

    return null;
  }

  /**
   * 记录填充尝试
   */
  private recordFillAttempt(url: string, method: string, success: boolean): void {
    const domain = this.extractDomain(url);
    this.fillHistory.set(`${domain}_${Date.now()}`, {
      timestamp: Date.now(),
      method,
      success
    });

    // 清理过期记录 (保留最近100条)
    if (this.fillHistory.size > 100) {
      const entries = Array.from(this.fillHistory.entries());
      entries.sort((a, b) => b[1].timestamp - a[1].timestamp);
      
      this.fillHistory.clear();
      entries.slice(0, 100).forEach(([key, value]) => {
        this.fillHistory.set(key, value);
      });
    }
  }

  /**
   * 创建失败结果
   */
  private createFailureResult(error: string, fieldsFound: number): TotpFillResult {
    return {
      success: false,
      method: 'failed',
      fieldsFound,
      confidence: 0,
      fillDelay: 0,
      error
    };
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
   * 清理历史记录
   */
  clearHistory(): void {
    this.fillHistory.clear();
  }
}

/**
 * 工厂函数 - 获取增强 TOTP 集成实例
 */
export function getEnhancedTotpIntegration(): EnhancedTotpIntegration {
  return EnhancedTotpIntegration.getInstance();
}

/**
 * 辅助函数 - 为现有的 AutofillService 提供增强的 TOTP 功能
 */
export class AutofillServiceEnhancer {
  /**
   * 增强现有的 generateLoginFillScript 方法中的 TOTP 部分
   */
  static async enhanceTotpFillInLoginScript(
    fillScript: any,
    pageDetails: any,
    options: any,
    totpService: any
  ): Promise<boolean> {
    if (!options.allowTotpAutofill || !options.cipher?.login?.totp) {
      return false;
    }

    try {
      const totpResponse = await firstValueFrom(totpService.getCode$(options.cipher.login.totp));
      if (!totpResponse?.code) {
        return false;
      }

      const integration = getEnhancedTotpIntegration();
      const fillResult = await integration.enhancedTotpFill(
        fillScript,
        pageDetails,
        totpResponse.code,
        totpService,
        {
          enableSegmentedFill: true,
          enableMultiLanguageDetection: true,
          enableTimeSensitiveFill: true,
          fallbackToOriginal: true
        }
      );

      console.log("Enhanced TOTP fill result:", fillResult);
      return fillResult.success;
    } catch (error) {
      console.error("Enhanced TOTP fill enhancement failed:", error);
      return false;
    }
  }

  /**
   * 检查是否应该使用增强的 TOTP 功能
   */
  static shouldUseEnhancedTotp(pageDetails: any, url: string): boolean {
    const integration = getEnhancedTotpIntegration();
    
    // 检查是否为 MFA 页面
            if (integration.isMfaPage(url, document?.title, document?.body?.textContent)) {
      return true;
    }

    // 检查是否有分段字段
    const fields = pageDetails.fields || [];
    const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(fields);
    if (segmentedInfo.isSegmented) {
      return true;
    }

    // 检查是否有多语言 TOTP 字段
    for (const field of fields) {
      const analysis = EnhancedTotpUtils.analyzeTotpField(field);
      if (analysis.confidence > 0.6) {
        return true;
      }
    }

    return false;
  }
} 