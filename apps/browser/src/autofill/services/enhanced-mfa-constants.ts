/**
 * Enhanced MFA (Multi-Factor Authentication) constants for improved TOTP autofill
 * Based on 1Password's comprehensive MFA detection patterns
 */
export class EnhancedMfaConstants {
  // 核心 TOTP 字段名称 - 高优先级精确匹配
  static readonly PrimaryTotpFieldNames: string[] = [
    // English - Standard
    "totp", "totpcode", "totp_code", "totp-code",
    "authenticator", "authenticatorcode", "authenticator_code", "authenticator-code",
    "twofa", "twofactor", "twofactorcode", "two_factor", "two-factor",
    "2fa", "2facode", "2fa_code", "2fa-code",
    "mfa", "mfacode", "mfa_code", "mfa-code",
    "otp", "otpcode", "otp_code", "otp-code",
    "verification", "verificationcode", "verification_code", "verification-code",
    "security", "securitycode", "security_code", "security-code",
    
    // Common specific patterns
    "smsverification", "sms_verification", "sms-verification",
    "emailverification", "email_verification", "email-verification",
    "phoneverification", "phone_verification", "phone-verification",
    "appverification", "app_verification", "app-verification",
    
    // Platform specific
    "googleauth", "google_auth", "google-auth",
    "microsoftauth", "microsoft_auth", "microsoft-auth",
    "authycode", "authy_code", "authy-code",
    "duo", "duocode", "duo_code", "duo-code",
  ];

  // 次要 TOTP 字段名称 - 中等优先级
  static readonly SecondaryTotpFieldNames: string[] = [
    // Generic terms
    "code", "pin", "token", "passcode", "passtoken",
    "challenge", "response", "confirm", "confirmation",
    "validate", "validation", "verify", "auth",
    
    // Numbered variants
    "code1", "code2", "code3", "code4", "code5", "code6",
    "digit1", "digit2", "digit3", "digit4", "digit5", "digit6",
    "number1", "number2", "number3", "number4", "number5", "number6",
    
    // Time-based indicators
    "timebasedcode", "time_based_code", "time-based-code",
    "temporarycode", "temporary_code", "temporary-code",
    "dynamiccode", "dynamic_code", "dynamic-code",
  ];

  // 多语言支持 - 基于主要市场需求
  static readonly MultiLanguageTotpFieldNames: string[] = [
    // 中文 (Chinese)
    "验证码", "动态验证码", "二次验证", "双因素验证", "安全验证码",
    "手机验证码", "短信验证码", "应用验证码", "动态密码",
    
    // 日文 (Japanese)
    "認証コード", "確認コード", "ワンタイムパスワード", "二段階認証",
    "セキュリティコード", "動的認証", "認証番号",
    
    // 韩文 (Korean)
    "인증코드", "확인코드", "일회용비밀번호", "2단계인증", "보안코드",
    "동적인증", "인증번호", "휴대폰인증",
    
    // 德文 (German)
    "verifizierungscode", "bestätigungscode", "sicherheitscode", "zweifaktor",
    "authentifizierungscode", "einmalpasswort", "tan", "mobiletan",
    
    // 法文 (French)
    "codeverification", "codeconfirmation", "codesecurite", "authentification",
    "facteurvérification", "motdepasseunique", "validationcode",
    
    // 西班牙文 (Spanish)
    "codigoverificacion", "codigoconfirmacion", "codigoseguridad", "autenticacion",
    "dosfactores", "clavetemporaria", "codigovalidacion",
    
    // 俄文 (Russian)
    "кодподтверждения", "кодверификации", "кодбезопасности", "двухфакторная",
    "аутентификация", "одноразовыйпароль", "проверочныйкод",
    
    // 意大利文 (Italian)
    "codiceverifica", "codiceconferma", "codicesicurezza", "autenticazione",
    "fattoredue", "passwordtemporanea", "codicevalidazione",
    
    // 葡萄牙文 (Portuguese)
    "codigoverificacao", "codigoconfirmacao", "codigoseguranca", "autenticacao",
    "doisfatores", "senhatemporal", "codigovalidacao",
  ];

  // 模糊匹配字段名称 - 低优先级，需要上下文确认
  static readonly AmbiguousTotpFieldNames: string[] = [
    "input", "field", "text", "number", "value", "data",
    "step", "next", "continue", "submit", "send", "confirm",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  ];

  // 页面和容器级别的 MFA 指示器
  static readonly MfaPageIndicators: string[] = [
    // URL patterns
    "mfa", "2fa", "totp", "verify", "verification", "authenticate", "auth",
    "security", "challenge", "confirm", "validation", "otp", "sms",
    
    // Page titles and headers
    "two-factor", "twofactor", "multi-factor", "multifactor",
    "authentication", "verification", "security check", "confirm identity",
    "enter code", "verification code", "security code", "authenticator",
    
    // Form names and IDs
    "mfaform", "mfa_form", "mfa-form", "verifyform", "verify_form", "verify-form",
    "authform", "auth_form", "auth-form", "securityform", "security_form",
    "challengeform", "challenge_form", "otpform", "otp_form",
  ];

  // 分段验证码模式识别
  static readonly SegmentedCodePatterns: RegExp[] = [
    // 连续数字输入框 (6位常见)
    /^(code|digit|number|input)([1-6])$/i,
    /^([1-6])(code|digit|number)$/i,
    /^(otp|mfa|2fa)([1-6])$/i,
    
    // 带分隔符的模式
    /^(code|digit)[-_]([1-6])$/i,
    /^([1-6])[-_](code|digit)$/i,
    
    // 特殊命名模式
    /^(char|character)([1-6])$/i,
    /^(token|auth)([1-6])$/i,
  ];

  // MFA 流程阶段识别
  static readonly MfaStageIndicators: string[] = [
    // Step indicators
    "step2", "step 2", "step_2", "step-2", "stepdeux", "stepzwei",
    "phase2", "phase 2", "phase_2", "phase-2",
    "stage2", "stage 2", "stage_2", "stage-2",
    
    // Process indicators  
    "nextstep", "next step", "next_step", "next-step",
    "continue", "proceed", "verify", "confirm", "validate",
    
    // Security level indicators
    "additional", "secondary", "second", "enhanced", "extra",
    "advanced", "secure", "protected", "verified",
  ];

  // 排除字段 - 避免误判
  static readonly ExcludedMfaFields: string[] = [
    // Common false positives
    "search", "query", "find", "filter", "sort",
    "password", "newpassword", "confirmpassword", "currentpassword",
    "username", "email", "phone", "name", "address",
    "captcha", "recaptcha", "csrf", "token", "session",
    
    // Form controls
    "submit", "cancel", "reset", "clear", "back", "previous",
    "checkbox", "radio", "select", "dropdown", "button",
    
    // Content fields
    "description", "comment", "note", "message", "content",
    "title", "subject", "body", "text", "textarea",
  ];

  // 自动完成属性识别
  static readonly MfaAutocompleteTypes: string[] = [
    "one-time-code", "current-password", "new-password",
    "verification-code", "security-code", "sms-otp",
    "totp", "authenticator-code", "backup-code",
  ];

  // 输入类型识别
  static readonly ValidMfaInputTypes: string[] = [
    "text", "number", "tel", "password", "email"
  ];

  // 字段长度模式 (常见的验证码长度)
  static readonly CommonCodeLengths: number[] = [
    4, 5, 6, 7, 8, 9, 10  // 4-10位验证码最常见
  ];

  // 时间敏感性指示器 (用于判断紧急填充需求)
  static readonly TimeSensitiveIndicators: string[] = [
    "expires", "expire", "timeout", "timer", "countdown",
    "remaining", "left", "seconds", "minutes", "time",
    "valid", "validity", "temporary", "temp", "limited",
  ];
}
