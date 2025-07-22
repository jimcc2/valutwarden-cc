// 测试 TOTP 字段检测逻辑
console.log("=== TOTP 字段检测测试 ===");

// 1. 模拟 AutoFillConstants
const AutoFillConstants = {
  TotpFieldNames: [
    "totp", "totpcode", "2facode", "approvals_code", "mfacode",
    "otc-code", "onetimecode", "otp-code", "otpcode", "onetimepassword",
    "security_code", "twofactor", "twofa", "twofactorcode",
    "verificationcode", "verification code",
  ],
  AmbiguousTotpFieldNames: ["code", "pin", "otc", "otp", "2fa", "mfa"],
};

// 2. 模拟您的 2factor_password 字段
const testField = {
  htmlName: "2factor_password",
  htmlID: "2factor_password", 
  htmlClass: "txtbox",
  type: "password",
  autoCompleteType: "off",
  placeholder: "",
  "label-tag": "",
  "label-aria": "",
};

// 3. 字段匹配函数
function fieldIsFuzzyMatch(field, fieldNames) {
  const fieldValues = [
    field.htmlName, field.htmlID, field.placeholder,
    field["label-tag"], field["label-aria"]
  ].filter(v => v && typeof v === 'string').map(v => v.toLowerCase());

  return fieldNames.some(name => 
    fieldValues.some(value => 
      value === name.toLowerCase() || value.includes(name.toLowerCase())
    )
  );
}

// 4. MFA 密码字段检测
function isPasswordTypeMfaField(field) {
  if (field.type !== "password") return false;
  
  const fieldTexts = [
    field.htmlName, field.htmlID, field.placeholder,
    field["label-tag"], field["label-aria"], field.htmlClass,
  ].filter(Boolean).map(text => (text || '').toLowerCase());
  
  const mfaKeywords = [
    "2factor", "twofactor", "two_factor", "two-factor",
    "mfa", "2fa", "totp", "otp", "auth", "verify", "verification",
    "security", "code", "token", "pin"
  ];
  
  return fieldTexts.some(text => 
    mfaKeywords.some(keyword => text.includes(keyword))
  );
}

// 5. 测试
console.log("字段信息:", testField);
console.log("匹配标准 TOTP 关键词:", fieldIsFuzzyMatch(testField, [...AutoFillConstants.TotpFieldNames, ...AutoFillConstants.AmbiguousTotpFieldNames]));
console.log("是否为 MFA 密码字段:", isPasswordTypeMfaField(testField));

// 6. 检查具体关键词匹配
const allTotpNames = [...AutoFillConstants.TotpFieldNames, ...AutoFillConstants.AmbiguousTotpFieldNames];
console.log("\n关键词匹配详情:");
const text = "2factor_password";
allTotpNames.forEach(keyword => {
  if (text.toLowerCase().includes(keyword.toLowerCase())) {
    console.log(`✓ 匹配关键词: "${keyword}"`);
  }
});
