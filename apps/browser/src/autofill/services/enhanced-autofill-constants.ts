/**
 * Enhanced AutoFill Constants
 * 扩展现有的 AutoFillConstants，参考 1Password 的 MFA 识别模式
 */

import { AutoFillConstants } from "./autofill-constants";

export class EnhancedAutoFillConstants extends AutoFillConstants {
  // 扩展的多语言 TOTP 字段名称
  static readonly ExtendedTotpFieldNames: string[] = [
    ...AutoFillConstants.TotpFieldNames,
    ...AutoFillConstants.AmbiguousTotpFieldNames,
    
    // 中文
    "验证码", "动态验证码", "二次验证", "双因素验证", "安全验证码",
    "手机验证码", "短信验证码", "应用验证码", "动态密码", "校验码",
    
    // 日文
    "認証コード", "確認コード", "ワンタイムパスワード", "二段階認証",
    "セキュリティコード", "動的認証", "認証番号", "確認番号",
    
    // 韩文
    "인증코드", "확인코드", "일회용비밀번호", "2단계인증", "보안코드",
    "동적인증", "인증번호", "휴대폰인증", "문자인증",
    
    // 德文
    "verifizierungscode", "bestätigungscode", "sicherheitscode", "zweifaktor",
    "authentifizierungscode", "einmalpasswort", "tan", "mobiletan", "bestätigung",
    
    // 法文
    "codeverification", "codeconfirmation", "codesecurite", "authentification",
    "facteurvérification", "motdepasseunique", "validationcode", "confirmation",
    
    // 西班牙文
    "codigoverificacion", "codigoconfirmacion", "codigoseguridad", "autenticacion",
    "dosfactores", "clavetemporaria", "codigovalidacion", "verificacion",
    
    // 俄文
    "кодподтверждения", "кодверификации", "кодбезопасности", "двухфакторная",
    "аутентификация", "одноразовыйпароль", "проверочныйкод", "подтверждение",
    
    // 意大利文
    "codiceverifica", "codiceconferma", "codicesicurezza", "autenticazione",
    "fattoredue", "passwordtemporanea", "codicevalidazione", "verifica",
    
    // 葡萄牙文
    "codigoverificacao", "codigoconfirmacao", "codigoseguranca", "autenticacao",
    "doisfatores", "senhatemporal", "codigovalidacao", "verificacao",
    
    // 平台特定的字段名
    "googleauthenticator", "microsoft_authenticator", "duo_mobile",
    "authycode", "lastpassauth", "oktaverify", "rsa_securid", "symantecvip",
    
    // 常见的变体
    "auth_code", "verification_token", "security_token", "temp_code",
    "dynamic_password", "time_password", "rotating_code", "backup_code",
  ];

  // 分段验证码模式 (如 123-456 或 6个单独输入框)
  static readonly SegmentedCodePatterns: RegExp[] = [
    // 标准数字模式 (code1, code2, etc.)
    /^(code|digit|number|input|char)([1-9]|10)$/i,
    /^([1-9]|10)(code|digit|number|input|char)$/i,
    
    // 带分隔符的模式
    /^(code|digit|input)[-_]?([1-9]|10)$/i,
    /^([1-9]|10)[-_]?(code|digit|input)$/i,
    
    // OTP/MFA 相关的分段模式
    /^(otp|mfa|2fa|totp)[-_]?([1-9]|10)$/i,
    /^([1-9]|10)[-_]?(otp|mfa|2fa|totp)$/i,
    
    // 字符和位置相关
    /^(char|character|pos|position)[-_]?([1-9]|10)$/i,
    /^(token|auth|verify)[-_]?([1-9]|10)$/i,
    
    // 特殊命名模式
    /^verification_digit_([1-9]|10)$/i,
    /^security_code_([1-9]|10)$/i,
  ];

  // MFA 页面指示器 (URL、标题、内容)
  static readonly MfaPageIndicators: string[] = [
    // URL 模式
    "mfa", "2fa", "totp", "verify", "verification", "authenticate", "auth",
    "security", "challenge", "confirm", "validation", "otp", "sms",
    "two-factor", "multi-factor", "twofactor", "multifactor",
    
    // 页面标题指示器
    "enter code", "verification code", "security code", "authenticator",
    "two-factor authentication", "multi-factor authentication",
    "additional security", "confirm identity", "verify identity",
    
    // 表单和容器ID
    "mfaform", "verifyform", "authform", "securityform", "challengeform",
    "otpform", "totpform", "codeform", "confirmform", "validationform",
  ];

  // 时间敏感指示器 (表明验证码有时效性)
  static readonly TimeSensitiveIndicators: string[] = [
    "expires", "expire", "expiry", "timeout", "timer", "countdown",
    "remaining", "left", "seconds", "minutes", "time", "valid",
    "validity", "temporary", "temp", "limited", "duration",
    "生效", "有效", "过期", "剩余", "秒", "分钟", "时间",
    "expire", "scade", "ablauf", "temps", "tiempo", "tempo",
  ];

  // 增强的自动完成类型
  static readonly EnhancedAutocompleteTypes: string[] = [
    "one-time-code", "current-password", "new-password",
    "verification-code", "security-code", "sms-otp", "email-otp",
    "totp", "authenticator-code", "backup-code", "recovery-code",
    "challenge-response", "multi-factor", "two-factor",
  ];

  // 常见的验证码长度
  static readonly CommonTotpLengths: number[] = [
    4, 5, 6, 7, 8, 9, 10, 12
  ];

  // 排除的 MFA 字段模式 (避免误判)
  static readonly ExcludedMfaPatterns: string[] = [
    ...AutoFillConstants.FieldIgnoreList,
    "password", "newpassword", "confirmpassword", "currentpassword",
    "username", "email", "phone", "name", "address", "city", "country",
    "zipcode", "postal", "state", "province", "region",
    "captcha", "recaptcha", "csrf", "session", "token",
    "search", "query", "filter", "sort", "page", "limit",
    "amount", "price", "cost", "currency", "money", "payment",
    "date", "time", "year", "month", "day", "hour", "minute",
  ];

  // 高置信度 TOTP 指示器 (几乎确定是 TOTP 字段)
  static readonly HighConfidenceTotpIndicators: string[] = [
    "totp", "totpcode", "authenticator", "googleauth", "duo",
    "two-factor", "2fa", "mfa", "otp", "securitycode",
    "verificationcode", "authcode", "authenticationcode",
    "一次性密码", "验证码", "动态码", "二次验证",
  ];

  // 分段码检测的最小字段数
  static readonly MinSegmentedFields = 4;
  
  // 分段码检测的最大字段数
  static readonly MaxSegmentedFields = 10;

  // 填充延迟配置 (毫秒)
  static readonly FillDelayConfig = {
    standard: 200,      // 标准字段填充延迟
    segmented: 100,     // 分段字段填充延迟
    hidden: 300,        // 隐藏字段填充延迟
    timeSensitive: 50,  // 时间敏感字段填充延迟
    retry: 500,         // 重试延迟
  };

  // 置信度阈值
  static readonly ConfidenceThresholds = {
    minimum: 0.3,       // 最低置信度阈值
    good: 0.6,          // 良好置信度阈值
    high: 0.8,          // 高置信度阈值
    excellent: 0.9,     // 优秀置信度阈值
  };

  /**
   * 检查字段名是否匹配 TOTP 模式
   */
  static isTotpField(fieldName: string, placeholder?: string, label?: string): boolean {
    const testTexts = [fieldName, placeholder, label].filter(Boolean).map(text => text.toLowerCase());
    
    for (const text of testTexts) {
      // 检查高置信度指示器
      for (const indicator of this.HighConfidenceTotpIndicators) {
        if (text.includes(indicator)) {
          return true;
        }
      }
      
      // 检查扩展的 TOTP 字段名
      for (const totpName of this.ExtendedTotpFieldNames) {
        if (text.includes(totpName)) {
          return true;
        }
      }
    }
    
    return false;
  }

  /**
   * 检查字段是否匹配分段验证码模式
   */
  static isSegmentedCodeField(fieldName: string): boolean {
    if (!fieldName) return false;
    
    const name = fieldName.toLowerCase();
    return this.SegmentedCodePatterns.some(pattern => pattern.test(name));
  }

  /**
   * 计算字段的 TOTP 相关性分数
   */
  static calculateTotpFieldScore(field: {
    htmlName?: string;
    htmlID?: string;
    placeholder?: string;
    labelTag?: string;
    labelAria?: string;
    autoCompleteType?: string;
    type?: string;
    maxLength?: number;
  }): number {
    let score = 0;
    
    const fieldTexts = [
      field.htmlName,
      field.htmlID,
      field.placeholder,
      field.labelTag,
      field.labelAria,
    ].filter(Boolean).map(text => text.toLowerCase());

    // 高置信度指示器
    for (const text of fieldTexts) {
      for (const indicator of this.HighConfidenceTotpIndicators) {
        if (text.includes(indicator)) {
          score += 0.8;
          break;
        }
      }
    }

    // 扩展的 TOTP 字段名
    if (score < 0.5) {
      for (const text of fieldTexts) {
        for (const totpName of this.ExtendedTotpFieldNames) {
          if (text.includes(totpName)) {
            score += 0.6;
            break;
          }
        }
      }
    }

    // 自动完成类型
    if (field.autoCompleteType) {
      for (const acType of this.EnhancedAutocompleteTypes) {
        if (field.autoCompleteType.includes(acType)) {
          score += 0.5;
          break;
        }
      }
    }

    // 字段类型
    if (field.type && ["text", "number", "tel"].includes(field.type)) {
      score += 0.2;
    }

    // 字段长度
    if (field.maxLength && this.CommonTotpLengths.includes(field.maxLength)) {
      score += 0.3;
    }

    // 分段模式
    if (field.htmlName && this.isSegmentedCodeField(field.htmlName)) {
      score += 0.4;
    }

    // 排除明显的非 TOTP 字段
    for (const text of fieldTexts) {
      for (const excluded of this.ExcludedMfaPatterns) {
        if (text.includes(excluded)) {
          score *= 0.1;
          break;
        }
      }
    }

    return Math.max(0, Math.min(1, score));
  }

  /**
   * 检查页面是否包含 MFA 指示器
   */
  static hasMfaPageIndicators(url: string, title?: string, content?: string): boolean {
    const textsToCheck = [url, title, content].filter(Boolean).map(text => text.toLowerCase());
    
    for (const text of textsToCheck) {
      for (const indicator of this.MfaPageIndicators) {
        if (text.includes(indicator)) {
          return true;
        }
      }
    }
    
    return false;
  }

  /**
   * 检查是否有时间敏感指示器
   */
  static hasTimeSensitiveIndicators(content: string): boolean {
    if (!content) return false;
    
    const lowerContent = content.toLowerCase();
    return this.TimeSensitiveIndicators.some(indicator => 
      lowerContent.includes(indicator)
    );
  }
} 