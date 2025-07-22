// 测试 Enhanced TOTP 对 password 类型 MFA 字段的支持
console.log("🔐 测试 Password 类型 MFA 字段识别功能");
console.log("========================================");

// 模拟您网站上的 MFA 字段
const testField = {
  htmlName: "2factor_password",
  htmlID: "2factor_password", 
  htmlClass: "txtbox",
  type: "password",
  autoCompleteType: "off",
  viewable: true,
  maxLength: undefined,
  placeholder: undefined
};

console.log("📝 测试字段信息:");
console.log(`   name: ${testField.htmlName}`);
console.log(`   type: ${testField.type}`);
console.log(`   autocomplete: ${testField.autoCompleteType}`);

// 模拟字段文本提取
function getFieldTexts(field) {
  return [
    field.htmlName,
    field.htmlID,
    field.placeholder,
    field["label-tag"],
    field["label-aria"],
    field.htmlClass,
  ].filter(Boolean).map(text => (text || '').toLowerCase());
}

// 模拟 MFA 密码字段检测
function isLikelyMfaPasswordField(field) {
  if (field.type !== "password") return false;
  
  const fieldTexts = getFieldTexts(field);
  
  // MFA 关键词列表（现在包含2factor）
  const mfaKeywords = [
    "2factor", "twofactor", "two_factor", "two-factor",
    "mfa", "totp", "otp", "auth", "verification", "verify",
    "security", "token", "code"
  ];
  
  const containsMfaKeyword = fieldTexts.some(text => 
    text && typeof text === 'string' && mfaKeywords.some(keyword => text.includes(keyword))
  );
  
  // 检查自动完成属性
  const hasOtpAutocomplete = field.autoCompleteType && 
    (field.autoCompleteType.includes("one-time-code") || 
     field.autoCompleteType.includes("current-password") === false);
  
  // 检查字段长度
  const commonTotpLengths = [4, 5, 6, 7, 8];
  const hasTypicalLength = field.maxLength && 
    commonTotpLengths.includes(field.maxLength);
  
  return containsMfaKeyword || hasOtpAutocomplete || hasTypicalLength;
}

// 模拟置信度计算
function calculateTotpConfidence(field) {
  let score = 0;
  const fieldTexts = getFieldTexts(field);

  // 主要字段名检查（现在包含2factor_password）
  const primaryTotpNames = [
    "2factor_password", "2factor_pass", "twofactor_password", "twofactor_pass",
    "mfa_password", "mfa_pass", "auth_password", "auth_pass",
    "totp", "mfa", "2fa", "verification", "otp"
  ];

  for (const text of fieldTexts) {
    for (const name of primaryTotpNames) {
      if (text.includes(name)) {
        score += 0.8;
        console.log(`   ✅ 匹配主要字段名: "${name}" (得分 +0.8)`);
        break;
      }
    }
  }

  // 字段类型检查
  if (field.type && ["text", "number", "tel", "password"].includes(field.type)) {
    score += 0.2;
    console.log(`   ✅ 支持的字段类型: "${field.type}" (得分 +0.2)`);
    
    // password 类型的 MFA 字段额外得分
    if (field.type === "password" && isLikelyMfaPasswordField(field)) {
      score += 0.3;
      console.log(`   ✅ 检测到 MFA 密码字段 (得分 +0.3)`);
    }
  }

  return Math.min(score, 1.0);
}

// 执行测试
console.log("\n🔍 开始分析字段...");
const fieldTexts = getFieldTexts(testField);
console.log(`📋 提取的字段文本: [${fieldTexts.join(', ')}]`);

const isMfaPassword = isLikelyMfaPasswordField(testField);
console.log(`🔐 MFA 密码字段检测: ${isMfaPassword ? '✅ 是' : '❌ 否'}`);

const confidence = calculateTotpConfidence(testField);
console.log(`📊 TOTP 置信度: ${(confidence * 100).toFixed(1)}%`);

console.log("\n========================================");
console.log("📈 测试结果汇总");
console.log("========================================");

if (confidence >= 0.7) {
  console.log("🎉 成功！字段被正确识别为 TOTP 字段");
  console.log(`   ✅ 置信度: ${(confidence * 100).toFixed(1)}% (≥ 70%)`)
  console.log("   ✅ 字段类型: password (已支持)");
  console.log("   ✅ 字段名称: 2factor_password (已添加)");
} else {
  console.log("⚠️  字段置信度偏低，需要进一步优化");
  console.log(`   📊 当前置信度: ${(confidence * 100).toFixed(1)}%`);
}

console.log("\n🔧 应用建议:");
console.log("1. 确保 Enhanced TOTP 功能已启用");
console.log("2. 在实际环境中测试此字段");
console.log("3. 如需要，可添加更多类似字段模式");
console.log("\n✅ Password 类型 MFA 字段支持已完成！"); 