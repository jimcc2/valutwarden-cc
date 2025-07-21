/**
 * Enhanced TOTP Extensions for Bitwarden Browser
 * 参考 1Password 的 MFA 自动填充机制，为现有 AutofillService 提供增强功能
 */

export interface EnhancedTotpField {
  field: any;
  confidence: number;
  fieldType: TotpFieldType;
  segmentIndex?: number;
  isVisible: boolean;
}

export enum TotpFieldType {
  Standard = "standard",
  Segmented = "segmented",
  Hidden = "hidden",
  TimeSensitive = "time-sensitive"
}

export interface SegmentedTotpInfo {
  isSegmented: boolean;
  fields: any[];
  totalSegments: number;
  segmentLength: number;
}

/**
 * Enhanced TOTP Constants - 扩展的 TOTP 识别常量
 */
export class EnhancedTotpConstants {
  // 扩展的多语言 TOTP 字段名称
  static readonly ExtendedTotpFieldNames: string[] = [
    // 基础英文 TOTP 字段名
    "totp", "totpcode", "totp_code", "totp-code",
    "2facode", "2fa_code", "2fa-code", "twofactor", "two_factor", "two-factor",
    "mfacode", "mfa_code", "mfa-code", "multifactor", "multi_factor", "multi-factor",
    "otpcode", "otp_code", "otp-code", "onetimecode", "onetime_code", "onetime-code",
    "verificationcode", "verification_code", "verification-code", "verifycode",
    "securitycode", "security_code", "security-code", "authcode", "auth_code",
    "authenticatorcode", "authenticator_code", "authenticator-code",
    
    // 移动和短信相关
    "smscode", "sms_code", "sms-code", "textcode", "text_code",
    "mobilecode", "mobile_code", "phonecode", "phone_code",
    
    // 应用相关
    "googleauth", "google_auth", "googleauthenticator", "google_authenticator",
    "microsoftauth", "microsoft_auth", "microsoftauthenticator",
    "authycode", "authy_code", "duo", "duocode", "duo_code",
    
    // 中文
    "验证码", "动态验证码", "二次验证", "双因素验证", "安全验证码",
    "手机验证码", "短信验证码", "应用验证码", "动态密码", "校验码",
    "谷歌验证", "微软验证", "身份验证", "安全码",
    
    // 日文
    "認証コード", "確認コード", "ワンタイムパスワード", "二段階認証",
    "セキュリティコード", "動的認証", "認証番号", "確認番号",
    "グーグル認証", "マイクロソフト認証",
    
    // 韩文
    "인증코드", "확인코드", "일회용비밀번호", "2단계인증", "보안코드",
    "동적인증", "인증번호", "휴대폰인증", "문자인증", "구글인증",
    
    // 其他语言简化版本
    "verificacion", "verificacao", "verifikation", "verification",
    "authentification", "autenticacao", "autenticacion", "autentifikacija",
  ];

  // 分段验证码模式识别
  static readonly SegmentedCodePatterns: RegExp[] = [
    // 标准数字序列 (code1, code2, etc.)
    /^(code|digit|number|input|char)([1-9]|10)$/i,
    /^([1-9]|10)(code|digit|number|input|char)$/i,
    
    // 带分隔符的模式
    /^(code|digit|input|otp|mfa|2fa)[-_]?([1-9]|10)$/i,
    /^([1-9]|10)[-_]?(code|digit|input|otp|mfa|2fa)$/i,
    
    // 位置相关
    /^(pos|position|char|character)[-_]?([1-9]|10)$/i,
    /^(token|auth|verify|security)[-_]?([1-9]|10)$/i,
    
    // 特殊命名模式
    /^verification[-_]?digit[-_]?([1-9]|10)$/i,
    /^security[-_]?code[-_]?([1-9]|10)$/i,
    /^auth[-_]?field[-_]?([1-9]|10)$/i,
  ];

  // 高置信度 TOTP 指示器
  static readonly HighConfidenceTotpIndicators: string[] = [
    "totp", "totpcode", "authenticator", "googleauth", "duo",
    "two-factor", "2fa", "mfa", "securitycode", "verificationcode",
    "一次性密码", "验证码", "动态码", "二次验证", "安全验证码",
  ];

  // 时间敏感指示器
  static readonly TimeSensitiveIndicators: string[] = [
    "expires", "expire", "expiry", "timeout", "timer", "countdown",
    "remaining", "left", "seconds", "minutes", "time", "valid",
    "validity", "temporary", "temp", "limited", "duration",
    // 多语言版本
    "过期", "剩余", "秒", "分钟", "时间", "有效",
    "expire", "tempo", "temps", "tiempo", "scade",
  ];

  // 常见验证码长度
  static readonly CommonTotpLengths: number[] = [4, 5, 6, 7, 8, 9, 10];

  // 排除字段模式
  static readonly ExcludedPatterns: string[] = [
    "password", "username", "email", "phone", "name", "address",
    "captcha", "recaptcha", "csrf", "session", "search", "query",
    "amount", "price", "date", "time", "year", "month", "day",
  ];

  // 自动完成类型
  static readonly TotpAutocompleteTypes: string[] = [
    "one-time-code", "verification-code", "security-code", "sms-otp",
    "totp", "authenticator-code", "backup-code", "challenge-response",
  ];
}

/**
 * Enhanced TOTP Utilities - TOTP 增强工具类
 */
export class EnhancedTotpUtils {
  /**
   * 分析字段的 TOTP 相关性
   */
  static analyzeTotpField(field: any): EnhancedTotpField {
    const confidence = this.calculateTotpConfidence(field);
    const fieldType = this.determineTotpFieldType(field);
    const isVisible = field.viewable !== false;

    return {
      field,
      confidence,
      fieldType,
      isVisible,
    };
  }

  /**
   * 计算字段的 TOTP 置信度分数
   */
  static calculateTotpConfidence(field: any): number {
    let score = 0;

    // 获取字段的文本属性
    const fieldTexts = this.getFieldTexts(field);

    // 高置信度指示器检查
    for (const text of fieldTexts) {
      for (const indicator of EnhancedTotpConstants.HighConfidenceTotpIndicators) {
        if (this.textContains(text, indicator)) {
          score += 0.8;
          break;
        }
      }
    }

    // 扩展字段名检查
    if (score < 0.5) {
      for (const text of fieldTexts) {
        for (const totpName of EnhancedTotpConstants.ExtendedTotpFieldNames) {
          if (this.textContains(text, totpName)) {
            score += 0.6;
            break;
          }
        }
      }
    }

    // 自动完成类型检查
    if (field.autoCompleteType) {
      for (const acType of EnhancedTotpConstants.TotpAutocompleteTypes) {
        if (field.autoCompleteType.includes(acType)) {
          score += 0.5;
          break;
        }
      }
    }

    // 字段类型检查
    if (field.type && ["text", "number", "tel"].includes(field.type)) {
      score += 0.2;
    }

    // 字段长度检查
    if (field.maxLength && EnhancedTotpConstants.CommonTotpLengths.includes(field.maxLength)) {
      score += 0.3;
    }

    // 分段模式检查
    const fieldName = field.htmlName || field.htmlID || "";
    if (this.isSegmentedCodeField(fieldName)) {
      score += 0.4;
    }

    // 排除明显的非 TOTP 字段
    for (const text of fieldTexts) {
      for (const excluded of EnhancedTotpConstants.ExcludedPatterns) {
        if (this.textContains(text, excluded)) {
          score *= 0.1;
          break;
        }
      }
    }

    return Math.max(0, Math.min(1, score));
  }

  /**
   * 确定字段类型
   */
  static determineTotpFieldType(field: any): TotpFieldType {
    const fieldName = field.htmlName || field.htmlID || "";
    
    // 检查是否为分段字段
    if (this.isSegmentedCodeField(fieldName) || (field.maxLength && field.maxLength <= 2)) {
      return TotpFieldType.Segmented;
    }

    // 检查是否为隐藏字段
    if (field.viewable === false || field.type === "hidden") {
      return TotpFieldType.Hidden;
    }

    // 检查是否为时间敏感字段
    if (this.hasTimeSensitiveContext(field)) {
      return TotpFieldType.TimeSensitive;
    }

    return TotpFieldType.Standard;
  }

  /**
   * 检测分段验证码
   */
  static detectSegmentedTotp(fields: any[]): SegmentedTotpInfo {
    const candidateFields = fields.filter(field => {
      const analysis = this.analyzeTotpField(field);
      return analysis.fieldType === TotpFieldType.Segmented || analysis.confidence > 0.3;
    });

    // 按命名模式检测
    const segmentedByPattern = this.findSegmentedByPattern(candidateFields);
    if (segmentedByPattern.length >= 4) {
      return {
        isSegmented: true,
        fields: segmentedByPattern,
        totalSegments: segmentedByPattern.length,
        segmentLength: this.getSegmentLength(segmentedByPattern),
      };
    }

    // 按连续性检测
    const segmentedBySequence = this.findSegmentedBySequence(candidateFields);
    if (segmentedBySequence.length >= 4) {
      return {
        isSegmented: true,
        fields: segmentedBySequence,
        totalSegments: segmentedBySequence.length,
        segmentLength: 1,
      };
    }

    return {
      isSegmented: false,
      fields: [],
      totalSegments: 0,
      segmentLength: 0,
    };
  }

  /**
   * 拆分 TOTP 代码用于分段填充
   */
  static splitTotpCode(totpCode: string, segmentLength: number, totalSegments: number): string[] {
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
   * 选择最佳的 TOTP 填充延迟
   */
  static getOptimalFillDelay(fieldType: TotpFieldType, hasTimeSensitive: boolean): number {
    if (hasTimeSensitive) return 50;
    
    switch (fieldType) {
      case TotpFieldType.Segmented:
        return 100;
      case TotpFieldType.Hidden:
        return 300;
      case TotpFieldType.TimeSensitive:
        return 50;
      default:
        return 200;
    }
  }

  // 私有辅助方法

  private static getFieldTexts(field: any): string[] {
    return [
      field.htmlName,
      field.htmlID,
      field.placeholder,
      field["label-tag"],
      field["label-aria"],
      field.htmlClass,
    ].filter(Boolean).map(text => text.toLowerCase());
  }

  private static textContains(text: string, keyword: string): boolean {
    if (!text || !keyword) return false;
    return text.includes(keyword.toLowerCase());
  }

  private static isSegmentedCodeField(fieldName: string): boolean {
    if (!fieldName) return false;
    return EnhancedTotpConstants.SegmentedCodePatterns.some(pattern => 
      pattern.test(fieldName.toLowerCase())
    );
  }

  private static hasTimeSensitiveContext(field: any): boolean {
    const fieldTexts = this.getFieldTexts(field);
    return fieldTexts.some(text => 
      EnhancedTotpConstants.TimeSensitiveIndicators.some(indicator => 
        text.includes(indicator)
      )
    );
  }

  private static findSegmentedByPattern(fields: any[]): any[] {
    const patternGroups: { [key: string]: any[] } = {};

    for (const field of fields) {
      const fieldName = field.htmlName || field.htmlID || "";
      for (const pattern of EnhancedTotpConstants.SegmentedCodePatterns) {
        const match = pattern.exec(fieldName.toLowerCase());
        if (match) {
          const basePattern = pattern.source;
          if (!patternGroups[basePattern]) {
            patternGroups[basePattern] = [];
          }
          patternGroups[basePattern].push(field);
          break;
        }
      }
    }

    // 返回最大的组
    let largestGroup: any[] = [];
    for (const group of Object.values(patternGroups)) {
      if (group.length > largestGroup.length) {
        largestGroup = group;
      }
    }

    // 按序号排序
    return largestGroup.sort((a, b) => {
      const aNum = this.extractNumberFromFieldName(a);
      const bNum = this.extractNumberFromFieldName(b);
      return aNum - bNum;
    });
  }

  private static findSegmentedBySequence(fields: any[]): any[] {
    const shortFields = fields.filter(field => 
      field.maxLength && field.maxLength <= 2
    );

    if (shortFields.length < 4) return [];

    // 按DOM顺序排序
    shortFields.sort((a, b) => (a.elementNumber || 0) - (b.elementNumber || 0));

    // 找到最长的连续序列
    let longestSequence: any[] = [];
    let currentSequence: any[] = [shortFields[0]];

    for (let i = 1; i < shortFields.length; i++) {
      const current = shortFields[i];
      const previous = shortFields[i - 1];
      
      if ((current.elementNumber || 0) === (previous.elementNumber || 0) + 1) {
        currentSequence.push(current);
      } else {
        if (currentSequence.length > longestSequence.length) {
          longestSequence = [...currentSequence];
        }
        currentSequence = [current];
      }
    }

    if (currentSequence.length > longestSequence.length) {
      longestSequence = currentSequence;
    }

    return longestSequence.length >= 4 ? longestSequence : [];
  }

  private static extractNumberFromFieldName(field: any): number {
    const name = field.htmlName || field.htmlID || "";
    const match = name.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  private static getSegmentLength(fields: any[]): number {
    const lengths = fields.map(f => f.maxLength).filter(Boolean);
    return lengths.length > 0 ? Math.max(...lengths) : 1;
  }
}

/**
 * Enhanced TOTP Autofill Extensions - 增强的 TOTP 自动填充扩展
 */
export class EnhancedTotpAutofillExtensions {
  /**
   * 增强的 TOTP 字段查找
   * 替代原有的 findTotpField 方法
   */
  static findEnhancedTotpField(
    pageDetails: any,
    passwordField?: any,
    canBeHidden: boolean = false,
    canBeReadOnly: boolean = false,
    withoutForm: boolean = false
  ): any | null {
    const fields = pageDetails.fields || [];
    let bestField: any | null = null;
    let highestConfidence = 0;

    for (const field of fields) {
      // 基本过滤条件
      if (field.disabled) continue;
      if (!canBeReadOnly && field.readonly) continue;
      if (!canBeHidden && field.viewable === false) continue;
      if (!withoutForm && passwordField && field.form !== passwordField.form) continue;

      // 类型检查
      if (!["text", "number", "tel"].includes(field.type)) continue;

      // 使用增强的分析
      const analysis = EnhancedTotpUtils.analyzeTotpField(field);
      
      if (analysis.confidence > highestConfidence && analysis.confidence > 0.3) {
        highestConfidence = analysis.confidence;
        bestField = field;
      }
    }

    return bestField;
  }

  /**
   * 增强的分段 TOTP 填充支持
   */
  static async fillSegmentedTotp(
    fillScript: any,
    fields: any[],
    totpCode: string,
    totpService: any
  ): Promise<boolean> {
    try {
      const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(fields);
      
      if (!segmentedInfo.isSegmented) {
        return false;
      }

      const segments = EnhancedTotpUtils.splitTotpCode(
        totpCode,
        segmentedInfo.segmentLength,
        segmentedInfo.totalSegments
      );

      if (segments.length !== segmentedInfo.fields.length) {
        return false;
      }

      // 填充每个分段
      for (let i = 0; i < segmentedInfo.fields.length; i++) {
        const field = segmentedInfo.fields[i];
        const segment = segments[i];
        
        if (field.opid) {
          // 使用原有的 fillByOpid 方法
          if (fillScript.script) {
            fillScript.script.push(["click_on_opid", field.opid]);
            fillScript.script.push(["focus_by_opid", field.opid]);
            fillScript.script.push(["fill_by_opid", field.opid, segment]);
          }
        }
      }

      return true;
    } catch (error) {
      console.error("Enhanced segmented TOTP fill failed:", error);
      return false;
    }
  }

  /**
   * 检查页面是否为 MFA 页面
   */
  static isMfaPage(url: string, pageTitle?: string, pageContent?: string): boolean {
    const textsToCheck = [url, pageTitle, pageContent].filter(Boolean);
    
    const mfaIndicators = [
      "mfa", "2fa", "totp", "verify", "verification", "authenticate",
      "security", "challenge", "confirm", "validation", "otp",
      "two-factor", "multi-factor", "authenticator",
    ];

    return textsToCheck.some(text => 
      mfaIndicators.some(indicator => 
        text.toLowerCase().includes(indicator)
      )
    );
  }

  /**
   * 获取推荐的填充延迟
   */
  static getRecommendedFillDelay(field: any, pageContext?: any): number {
    const analysis = EnhancedTotpUtils.analyzeTotpField(field);
    const hasTimeSensitive = pageContext && EnhancedTotpConstants.TimeSensitiveIndicators.some(
      indicator => pageContext.toString().toLowerCase().includes(indicator)
    );

    return EnhancedTotpUtils.getOptimalFillDelay(analysis.fieldType, hasTimeSensitive);
  }
} 