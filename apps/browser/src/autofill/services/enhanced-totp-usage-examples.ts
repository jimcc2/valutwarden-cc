/**
 * Enhanced TOTP Usage Examples and Integration Guide
 * 增强 TOTP 功能的使用示例和集成指南
 * 展示如何将新功能集成到现有的 Bitwarden AutofillService 中
 */

// ===========================
// 1. 基础使用示例
// ===========================

/**
 * 示例 1: 增强的 TOTP 字段检测
 */
export function example1_EnhancedTotpFieldDetection() {
  const exampleUsage = `
  // 原始代码 (autofill.service.ts 中的 findTotpField 方法)
  private findTotpField(pageDetails, passwordField, canBeHidden, canBeReadOnly, withoutForm) {
    // 原始的简单检测逻辑...
  }

  // 增强后的代码
  import { EnhancedTotpAutofillExtensions, EnhancedTotpUtils } from './enhanced-totp-extensions';
  
  private findTotpField(pageDetails, passwordField, canBeHidden, canBeReadOnly, withoutForm) {
    // 首先尝试使用增强的检测
    const enhancedField = EnhancedTotpAutofillExtensions.findEnhancedTotpField(
      pageDetails,
      passwordField,
      canBeHidden,
      canBeReadOnly,
      withoutForm
    );
    
    if (enhancedField) {
      const analysis = EnhancedTotpUtils.analyzeTotpField(enhancedField);
      console.log('Enhanced TOTP field found:', {
        field: enhancedField.htmlName || enhancedField.htmlID,
        confidence: analysis.confidence,
        type: analysis.fieldType
      });
      return enhancedField;
    }
    
    // 回退到原始逻辑
    return this.originalFindTotpField(pageDetails, passwordField, canBeHidden, canBeReadOnly, withoutForm);
  }
  `;
  
  return exampleUsage;
}

/**
 * 示例 2: 分段验证码填充
 */
export function example2_SegmentedCodeFilling() {
  const exampleUsage = `
  // 在 generateLoginFillScript 方法中集成分段码支持
  
  // 原始代码中的 TOTP 填充部分
  if (options.allowTotpAutofill) {
    await Promise.all(
      totps.map(async (t, i) => {
        // 原始的单字段填充逻辑...
      })
    );
  }

  // 增强后的代码
  import { EnhancedTotpUtils, EnhancedTotpAutofillExtensions } from './enhanced-totp-extensions';
  
  if (options.allowTotpAutofill) {
    const totpResponse = await firstValueFrom(this.totpService.getCode$(options.cipher.login.totp));
    const totpCode = totpResponse.code;
    
    // 检测分段验证码
    const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(pageDetails.fields);
    
    if (segmentedInfo.isSegmented) {
      // 使用分段填充
      const success = await EnhancedTotpAutofillExtensions.fillSegmentedTotp(
        fillScript,
        pageDetails.fields,
        totpCode,
        this.totpService
      );
      
      if (success) {
        console.log('Successfully filled segmented TOTP with', segmentedInfo.totalSegments, 'segments');
        return fillScript;
      }
    }
    
    // 回退到标准填充
    await Promise.all(
      totps.map(async (t, i) => {
        // 原始填充逻辑...
      })
    );
  }
  `;
  
  return exampleUsage;
}

/**
 * 示例 3: 多语言支持
 */
export function example3_MultiLanguageSupport() {
  const exampleUsage = `
  // 增强的多语言 TOTP 字段识别示例
  
  import { EnhancedTotpConstants } from './enhanced-totp-extensions';
  
  // 支持的多语言字段名称
  const multiLanguageTotpFields = [
    // 中文
    "验证码", "动态验证码", "二次验证", "双因素验证",
    
    // 日文  
    "認証コード", "確認コード", "二段階認証",
    
    // 韩文
    "인증코드", "2단계인증", "보안코드",
    
    // 德文
    "verifizierungscode", "sicherheitscode", "zweifaktor",
    
    // 法文
    "codeverification", "authentification"
  ];
  
  // 字段分析示例
  function analyzeFieldWithMultiLanguage(field) {
    const fieldName = field.htmlName?.toLowerCase() || '';
    const placeholder = field.placeholder?.toLowerCase() || '';
    
    // 检查是否匹配多语言关键词
    for (const keyword of EnhancedTotpConstants.ExtendedTotpFieldNames) {
      if (fieldName.includes(keyword) || placeholder.includes(keyword)) {
        console.log('Multi-language TOTP field detected:', keyword);
        return { confidence: 0.8, language: 'detected' };
      }
    }
    
    return { confidence: 0, language: 'none' };
  }
  `;
  
  return exampleUsage;
}

// ===========================
// 2. 集成到现有 AutofillService
// ===========================

/**
 * 示例 4: 完整的 AutofillService 集成
 */
export function example4_CompleteIntegration() {
  const integrationGuide = `
  // 1. 在 autofill.service.ts 顶部添加导入
  import { 
    EnhancedTotpUtils, 
    EnhancedTotpAutofillExtensions,
    TotpFieldType 
  } from './enhanced-totp-extensions';
  
  export default class AutofillService implements AutofillServiceInterface {
    // 现有代码...
    
    // 2. 替换原有的 findTotpField 方法
    private findTotpField(
      pageDetails: AutofillPageDetails,
      passwordField: AutofillField,
      canBeHidden: boolean,
      canBeReadOnly: boolean,
      withoutForm: boolean,
    ): AutofillField | null {
      
      // 使用增强的检测逻辑
      const enhancedField = EnhancedTotpAutofillExtensions.findEnhancedTotpField(
        pageDetails,
        passwordField,
        canBeHidden,
        canBeReadOnly,
        withoutForm
      );
      
      if (enhancedField) {
        return enhancedField;
      }
      
      // 保留原始逻辑作为回退
      // ... 原始 findTotpField 实现
      return null;
    }
    
    // 3. 增强 generateLoginFillScript 中的 TOTP 部分
    private async generateLoginFillScript(
      fillScript: AutofillScript,
      pageDetails: AutofillPageDetails,
      filledFields: { [id: string]: AutofillField },
      options: GenerateFillScriptOptions,
    ): Promise<AutofillScript | null> {
      
      // 现有代码...
      
      if (options.allowTotpAutofill && login.totp) {
        // 检查是否应该使用增强功能
        const shouldUseEnhanced = this.shouldUseEnhancedTotp(pageDetails, options.tabUrl);
        
        if (shouldUseEnhanced) {
          const enhancedSuccess = await this.handleEnhancedTotpFill(
            fillScript,
            pageDetails,
            options
          );
          
          if (enhancedSuccess) {
            return fillScript;
          }
        }
        
        // 回退到原始 TOTP 填充逻辑
        await Promise.all(
          totps.map(async (t, i) => {
            // 原始 TOTP 填充代码...
          })
        );
      }
      
      return fillScript;
    }
    
    // 4. 新增的辅助方法
    private shouldUseEnhancedTotp(pageDetails: AutofillPageDetails, url: string): boolean {
      // 检查是否为 MFA 页面
      if (EnhancedTotpAutofillExtensions.isMfaPage(url, document.title, document.body?.textContent)) {
        return true;
      }
      
      // 检查是否有分段字段
      const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(pageDetails.fields);
      if (segmentedInfo.isSegmented) {
        return true;
      }
      
      // 检查是否有高置信度的多语言字段
      const hasHighConfidenceField = pageDetails.fields.some(field => {
        const analysis = EnhancedTotpUtils.analyzeTotpField(field);
        return analysis.confidence > 0.7;
      });
      
      return hasHighConfidenceField;
    }
    
    private async handleEnhancedTotpFill(
      fillScript: AutofillScript,
      pageDetails: AutofillPageDetails,
      options: GenerateFillScriptOptions
    ): Promise<boolean> {
      try {
        const totpResponse = await firstValueFrom(
          this.totpService.getCode$(options.cipher.login.totp)
        );
        
        if (!totpResponse?.code) {
          return false;
        }
        
        const totpCode = totpResponse.code;
        
        // 检测分段验证码
        const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(pageDetails.fields);
        
        if (segmentedInfo.isSegmented) {
          const success = await EnhancedTotpAutofillExtensions.fillSegmentedTotp(
            fillScript,
            pageDetails.fields,
            totpCode,
            this.totpService
          );
          
          if (success) {
            this.logService.info('Enhanced segmented TOTP fill successful');
            return true;
          }
        }
        
        // 单字段增强填充
        const field = EnhancedTotpAutofillExtensions.findEnhancedTotpField(pageDetails);
        if (field && field.opid) {
          AutofillService.fillByOpid(fillScript, field, totpCode);
          this.logService.info('Enhanced single field TOTP fill successful');
          return true;
        }
        
        return false;
      } catch (error) {
        this.logService.error('Enhanced TOTP fill failed', error);
        return false;
      }
    }
  }
  `;
  
  return integrationGuide;
}

// ===========================
// 3. 实际使用场景示例
// ===========================

/**
 * 示例 5: 常见网站的 TOTP 字段模式
 */
export function example5_CommonWebsitePatterns() {
  const patterns = {
    // Google 2FA
    google: {
      fieldNames: ["totpPin", "idvPreregisteredPhoneChallenge"],
      pattern: "single field, 6 digits",
      confidence: 0.9
    },
    
    // Microsoft 2FA  
    microsoft: {
      fieldNames: ["idTxtBx_SAOTCC_OTC", "otc"],
      pattern: "single field, 6 digits",
      confidence: 0.9
    },
    
    // GitHub 2FA
    github: {
      fieldNames: ["otp", "two-factor-code"],
      pattern: "single field, 6 digits", 
      confidence: 0.8
    },
    
    // Amazon 2FA
    amazon: {
      fieldNames: ["code", "auth-mfa-otpcode"],
      pattern: "single field, 6 digits",
      confidence: 0.8
    },
    
    // Discord 2FA (分段码示例)
    discord: {
      fieldNames: ["code-1", "code-2", "code-3", "code-4", "code-5", "code-6"],
      pattern: "6 separate input fields, 1 digit each",
      confidence: 0.9
    },
    
    // Steam 2FA
    steam: {
      fieldNames: ["authcode", "steamguard_code"],
      pattern: "single field, 5 digits",
      confidence: 0.8
    },
    
    // 中文网站示例
    chineseWebsite: {
      fieldNames: ["验证码", "动态码", "手机验证码"],
      pattern: "单个字段，6位数字",
      confidence: 0.7
    }
  };
  
  return patterns;
}

/**
 * 示例 6: 错误处理和日志记录
 */
export function example6_ErrorHandlingAndLogging() {
  const errorHandlingExample = `
  // 在增强的 TOTP 填充中添加详细的错误处理和日志
  
  private async handleEnhancedTotpFillWithLogging(
    fillScript: AutofillScript,
    pageDetails: AutofillPageDetails,
    options: GenerateFillScriptOptions
  ): Promise<boolean> {
    const startTime = performance.now();
    
    try {
      this.logService.info('Starting enhanced TOTP fill', {
        url: options.tabUrl,
        fieldsCount: pageDetails.fields?.length || 0,
        hasTotp: !!options.cipher?.login?.totp
      });
      
      // 分析页面特征
      const isMfaPage = EnhancedTotpAutofillExtensions.isMfaPage(
        options.tabUrl, 
        document.title, 
        document.body?.textContent
      );
      
      const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(pageDetails.fields);
      
      this.logService.info('Page analysis completed', {
        isMfaPage,
        isSegmented: segmentedInfo.isSegmented,
        segmentCount: segmentedInfo.totalSegments
      });
      
      // 生成 TOTP 代码
      const totpResponse = await firstValueFrom(
        this.totpService.getCode$(options.cipher.login.totp)
      );
      
      if (!totpResponse?.code) {
        this.logService.warn('Failed to generate TOTP code');
        return false;
      }
      
      const totpCode = totpResponse.code;
      this.logService.info('TOTP code generated successfully');
      
      // 尝试分段填充
      if (segmentedInfo.isSegmented) {
        this.logService.info('Attempting segmented TOTP fill', {
          segments: segmentedInfo.totalSegments,
          segmentLength: segmentedInfo.segmentLength
        });
        
        const segmentedSuccess = await EnhancedTotpAutofillExtensions.fillSegmentedTotp(
          fillScript,
          pageDetails.fields,
          totpCode,
          this.totpService
        );
        
        if (segmentedSuccess) {
          const duration = performance.now() - startTime;
          this.logService.info('Segmented TOTP fill successful', { duration });
          return true;
        } else {
          this.logService.warn('Segmented TOTP fill failed, trying single field');
        }
      }
      
      // 尝试单字段填充
      const field = EnhancedTotpAutofillExtensions.findEnhancedTotpField(pageDetails);
      if (field) {
        const analysis = EnhancedTotpUtils.analyzeTotpField(field);
        
        this.logService.info('Single field TOTP fill attempt', {
          fieldName: field.htmlName || field.htmlID,
          confidence: analysis.confidence,
          fieldType: analysis.fieldType
        });
        
        if (field.opid) {
          AutofillService.fillByOpid(fillScript, field, totpCode);
          
          const duration = performance.now() - startTime;
          this.logService.info('Single field TOTP fill successful', { duration });
          return true;
        }
      }
      
      this.logService.warn('No suitable TOTP field found');
      return false;
      
    } catch (error) {
      const duration = performance.now() - startTime;
      this.logService.error('Enhanced TOTP fill failed', {
        error: error.message,
        duration,
        stack: error.stack
      });
      return false;
    }
  }
  `;
  
  return errorHandlingExample;
}

// ===========================
// 4. 性能优化和最佳实践
// ===========================

/**
 * 示例 7: 性能优化技巧
 */
export function example7_PerformanceOptimization() {
  const optimizationTips = `
  // 性能优化技巧
  
  1. 缓存字段分析结果
  const fieldAnalysisCache = new Map<string, any>();
  
  private getCachedFieldAnalysis(field: AutofillField) {
    const cacheKey = field.htmlName + field.htmlID + field.placeholder;
    
    if (fieldAnalysisCache.has(cacheKey)) {
      return fieldAnalysisCache.get(cacheKey);
    }
    
    const analysis = EnhancedTotpUtils.analyzeTotpField(field);
    fieldAnalysisCache.set(cacheKey, analysis);
    return analysis;
  }
  
  2. 预先检测页面类型
  private async preAnalyzePage(pageDetails: AutofillPageDetails, url: string) {
    // 在页面加载完成后立即分析，而不是等到填充时
    const isMfaPage = EnhancedTotpAutofillExtensions.isMfaPage(url);
    const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(pageDetails.fields);
    
    // 存储分析结果供后续使用
    this.pageAnalysisCache.set(url, { isMfaPage, segmentedInfo });
  }
  
  3. 智能字段过滤
  private getRelevantFields(fields: AutofillField[]): AutofillField[] {
    // 预先过滤掉明显不相关的字段
    return fields.filter(field => {
      // 排除明显的非 TOTP 字段
      const fieldName = (field.htmlName || field.htmlID || '').toLowerCase();
      const excludePatterns = ['password', 'username', 'email', 'search', 'captcha'];
      
      return !excludePatterns.some(pattern => fieldName.includes(pattern));
    });
  }
  
  4. 延迟填充策略
  private getOptimalFillDelay(analysis: any): number {
    // 根据字段类型和页面特征动态调整填充延迟
    if (analysis.fieldType === TotpFieldType.TimeSensitive) {
      return 50; // 时间敏感字段快速填充
    } else if (analysis.fieldType === TotpFieldType.Segmented) {
      return 100; // 分段字段中等延迟
    } else {
      return 200; // 标准延迟
    }
  }
  `;
  
  return optimizationTips;
}

/**
 * 示例 8: 测试和调试
 */
export function example8_TestingAndDebugging() {
  const testingExample = `
  // 测试增强的 TOTP 功能
  
  // 1. 单元测试示例
  describe('Enhanced TOTP Utils', () => {
    test('should detect segmented TOTP fields', () => {
      const mockFields = [
        { htmlName: 'code1', maxLength: 1, type: 'text' },
        { htmlName: 'code2', maxLength: 1, type: 'text' },
        { htmlName: 'code3', maxLength: 1, type: 'text' },
        { htmlName: 'code4', maxLength: 1, type: 'text' },
        { htmlName: 'code5', maxLength: 1, type: 'text' },
        { htmlName: 'code6', maxLength: 1, type: 'text' }
      ];
      
      const result = EnhancedTotpUtils.detectSegmentedTotp(mockFields);
      
      expect(result.isSegmented).toBe(true);
      expect(result.totalSegments).toBe(6);
      expect(result.segmentLength).toBe(1);
    });
    
    test('should calculate correct field confidence', () => {
      const mockField = {
        htmlName: 'totp-code',
        type: 'text',
        maxLength: 6,
        placeholder: 'Enter verification code'
      };
      
      const analysis = EnhancedTotpUtils.analyzeTotpField(mockField);
      
      expect(analysis.confidence).toBeGreaterThan(0.8);
      expect(analysis.fieldType).toBe(TotpFieldType.Standard);
    });
  });
  
  // 2. 调试工具
  class TotpDebugger {
    static enableDebugMode() {
      // 在控制台中启用详细日志
      window._totpDebug = true;
    }
    
    static logFieldAnalysis(pageDetails: AutofillPageDetails) {
      if (!window._totpDebug) return;
      
      console.group('🔍 TOTP Field Analysis');
      
      pageDetails.fields?.forEach((field, index) => {
        const analysis = EnhancedTotpUtils.analyzeTotpField(field);
        
                 console.log(\`Field \${index}:\`, {
          name: field.htmlName || field.htmlID,
          type: field.type,
          confidence: analysis.confidence,
          fieldType: analysis.fieldType,
          visible: analysis.isVisible
        });
      });
      
      const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(pageDetails.fields);
      console.log('Segmented Analysis:', segmentedInfo);
      
      console.groupEnd();
    }
    
    static testTotpCode(code: string, pageDetails: AutofillPageDetails) {
      if (!window._totpDebug) return;
      
      console.log('🧪 Testing TOTP code:', code);
      
      const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(pageDetails.fields);
      if (segmentedInfo.isSegmented) {
        const segments = EnhancedTotpUtils.splitTotpCode(
          code, 
          segmentedInfo.segmentLength, 
          segmentedInfo.totalSegments
        );
        console.log('Segmented code:', segments);
      }
    }
  }
  
  // 使用调试工具
  // TotpDebugger.enableDebugMode();
  // TotpDebugger.logFieldAnalysis(pageDetails);
  // TotpDebugger.testTotpCode('123456', pageDetails);
  `;
  
  return testingExample;
}

// ===========================
// 5. 集成检查清单
// ===========================

/**
 * 集成检查清单
 */
export function integrationChecklist() {
  const checklist = `
  ## 增强 TOTP 功能集成检查清单
  
  ### 📋 代码集成
  - [ ] 导入增强的 TOTP 工具类和常量
  - [ ] 替换或增强现有的 findTotpField 方法
  - [ ] 在 generateLoginFillScript 中集成分段码支持
  - [ ] 添加多语言字段检测
  - [ ] 实现错误处理和日志记录
  
  ### 🧪 测试验证
  - [ ] 测试标准单字段 TOTP 填充
  - [ ] 测试分段验证码填充（如 Discord、Steam）
  - [ ] 测试多语言网站 TOTP 字段检测
  - [ ] 测试错误情况和回退逻辑
  - [ ] 性能测试和优化
  
  ### 🌍 多语言支持
  - [ ] 验证中文网站 TOTP 字段检测
  - [ ] 验证日文网站 TOTP 字段检测  
  - [ ] 验证韩文网站 TOTP 字段检测
  - [ ] 验证欧洲语言网站支持
  
  ### 🔧 配置和设置
  - [ ] 添加用户偏好设置（启用/禁用增强功能）
  - [ ] 配置填充延迟参数
  - [ ] 配置置信度阈值
  - [ ] 添加调试模式开关
  
  ### 📊 监控和分析
  - [ ] 实现填充成功率统计
  - [ ] 记录不同填充方法的使用频率
  - [ ] 监控错误和失败情况
  - [ ] 收集用户反馈
  
  ### 🔒 安全考虑
  - [ ] 确保 TOTP 代码不在日志中泄露
  - [ ] 验证分段填充的安全性
  - [ ] 检查字段检测的准确性
  - [ ] 防止在非 TOTP 字段中误填
  `;
  
  return checklist;
}

// 导出所有示例
export const EnhancedTotpExamples = {
  example1_EnhancedTotpFieldDetection,
  example2_SegmentedCodeFilling,
  example3_MultiLanguageSupport,
  example4_CompleteIntegration,
  example5_CommonWebsitePatterns,
  example6_ErrorHandlingAndLogging,
  example7_PerformanceOptimization,
  example8_TestingAndDebugging,
  integrationChecklist
};

/**
 * 快速开始指南
 */
export const QuickStartGuide = `
# 🚀 增强 TOTP 功能快速开始指南

## 1. 安装和导入
\`\`\`typescript
// 在 autofill.service.ts 中添加导入
import { 
  EnhancedTotpUtils, 
  EnhancedTotpAutofillExtensions 
} from './enhanced-totp-extensions';
\`\`\`

## 2. 替换字段检测逻辑
\`\`\`typescript
// 替换现有的 findTotpField 方法
private findTotpField(...args) {
  const enhancedField = EnhancedTotpAutofillExtensions.findEnhancedTotpField(...args);
  return enhancedField || this.originalFindTotpField(...args);
}
\`\`\`

## 3. 添加分段码支持
\`\`\`typescript
// 在 TOTP 填充逻辑中添加
const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(fields);
if (segmentedInfo.isSegmented) {
  await EnhancedTotpAutofillExtensions.fillSegmentedTotp(fillScript, fields, totpCode, totpService);
}
\`\`\`

## 4. 测试和验证
- 测试常见网站的 TOTP 字段
- 验证分段验证码功能
- 检查多语言支持
- 确认错误处理机制

完成以上步骤后，您的 Bitwarden 插件就具备了增强的 TOTP 自动填充功能！
`; 