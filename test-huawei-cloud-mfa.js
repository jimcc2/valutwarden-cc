/**
 * 华为云MFA自动填写功能测试
 * 测试新添加的华为云MFA检测和处理逻辑
 */

// 模拟AutoFillConstants
const AutoFillConstants = {
  TotpFieldNames: [
    "totp", "totpcode", "2facode", "approvals_code", "mfacode",
    "otc-code", "onetimecode", "otp-code", "otpcode", "onetimepassword",
    "security_code", "twofactor", "twofa", "twofactorcode",
    "verificationcode", "verification code",
    // 华为云特有字段
    "input_code", "hwid_code", "hwid_input", "huawei_code", "huawei_input",
  ],
  AmbiguousTotpFieldNames: ["code", "pin", "otc", "otp", "2fa", "mfa"],
  HuaweiCloudClasses: [
    "hwid-input", "hwid_input", "huawei-input", "huawei_input",
    "hcloud-input", "hcloud_input",
  ],
};

// 测试华为云字段检测函数
function isHuaweiCloudField(field) {
  const className = field.htmlClass?.toLowerCase() || "";
  const fieldName = field.htmlName?.toLowerCase() || field.htmlID?.toLowerCase() || "";
  const htAttribute = field["ht"]?.toLowerCase() || "";
  const dataIndex = field["data-index"];

  const hasHuaweiClass = AutoFillConstants.HuaweiCloudClasses.some(cls => 
    className.includes(cls)
  );

  const hasHuaweiAttribute = dataIndex !== undefined ||
                             fieldName.includes('input_code') ||
                             htAttribute.includes('input_code');

  // 检查字段类型（不限制具体长度）
  const isHuaweiFieldType = field.type === "tel" && 
                            (hasHuaweiClass || hasHuaweiAttribute);

  // 模拟URL检查（在实际环境中会检查window.location.href）
  const isHuaweiUrl = true; // 假设在华为云页面

  return hasHuaweiClass || hasHuaweiAttribute || (isHuaweiFieldType && isHuaweiUrl);
}

// 测试字段匹配函数
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

// 测试用例
console.log("🧪 华为云MFA字段检测测试开始...");

// 测试用例1：华为云标准字段（6位验证码）
const huaweiField1 = {
  htmlName: "",
  htmlID: "",
  htmlClass: "hwid-input",
  type: "tel",
  maxLength: 6,
  "data-index": "0",
  "ht": "input_code_1",
  placeholder: "",
  "label-tag": "",
  "label-aria": "",
};

console.log("测试用例1 - 华为云标准字段:");
console.log("字段:", huaweiField1);
console.log("是否为华为云字段:", isHuaweiCloudField(huaweiField1));
console.log("是否匹配TOTP:", fieldIsFuzzyMatch(huaweiField1, AutoFillConstants.TotpFieldNames));

// 测试用例2：华为云字段变体
const huaweiField2 = {
  htmlName: "input_code_2",
  htmlID: "hwid_input",
  htmlClass: "txtbox hwid-input",
  type: "tel",
  maxLength: 7,
  "data-index": "1",
  placeholder: "",
  "label-tag": "",
  "label-aria": "",
};

console.log("\n测试用例2 - 华为云字段变体:");
console.log("字段:", huaweiField2);
console.log("是否为华为云字段:", isHuaweiCloudField(huaweiField2));
console.log("是否匹配TOTP:", fieldIsFuzzyMatch(huaweiField2, AutoFillConstants.TotpFieldNames));

// 测试用例3：普通TOTP字段（应该不匹配华为云）
const normalTotpField = {
  htmlName: "totp",
  htmlID: "totpcode",
  htmlClass: "form-control",
  type: "text",
  maxLength: 6,
  placeholder: "验证码",
  "label-tag": "",
  "label-aria": "",
};

console.log("\n测试用例3 - 普通TOTP字段:");
console.log("字段:", normalTotpField);
console.log("是否为华为云字段:", isHuaweiCloudField(normalTotpField));
console.log("是否匹配TOTP:", fieldIsFuzzyMatch(normalTotpField, AutoFillConstants.TotpFieldNames));

// 测试用例4：非MFA字段（都不应该匹配）
const normalField = {
  htmlName: "username",
  htmlID: "user",
  htmlClass: "form-input",
  type: "text",
  placeholder: "用户名",
  "label-tag": "",
  "label-aria": "",
};

console.log("\n测试用例4 - 普通字段:");
console.log("字段:", normalField);
console.log("是否为华为云字段:", isHuaweiCloudField(normalField));
console.log("是否匹配TOTP:", fieldIsFuzzyMatch(normalField, AutoFillConstants.TotpFieldNames));

// 测试页面检测
function isHuaweiCloudMfaPage(pageDetails) {
  for (const pd of pageDetails) {
    for (const field of pd.details.fields) {
      if (isHuaweiCloudField(field)) {
        return true;
      }
    }
  }
  return false;
}

// 模拟华为云MFA页面
const huaweiMfaPage = [{
  details: {
    fields: [huaweiField1, huaweiField2, normalField]
  }
}];

console.log("\n📄 页面检测测试:");
console.log("是否为华为云MFA页面:", isHuaweiCloudMfaPage(huaweiMfaPage));

// 模拟普通页面
const normalPage = [{
  details: {
    fields: [normalTotpField, normalField]
  }
}];

console.log("是否为华为云MFA页面（普通页面）:", isHuaweiCloudMfaPage(normalPage));

// 测试智能填充逻辑
function testSmartFillLogic() {
  console.log("\n🔧 智能填充逻辑测试:");
  
  // 模拟不同场景的验证码填充
  const scenarios = [
    {
      name: "6位验证码 → 6个单字符字段",
      totpCode: "123456",
      fieldCount: 6,
      expected: ["1", "2", "3", "4", "5", "6"]
    },
    {
      name: "6位验证码 → 1个完整字段",
      totpCode: "123456", 
      fieldCount: 1,
      expected: ["123456"]
    },
    {
      name: "8位验证码 → 4个字段",
      totpCode: "12345678",
      fieldCount: 4,
      expected: ["12", "34", "56", "78"]
    },
    {
      name: "6位验证码 → 4个字段",
      totpCode: "123456",
      fieldCount: 4,
      expected: ["12", "34", "56", ""]
    }
  ];

  scenarios.forEach(scenario => {
    console.log(`\n  ${scenario.name}:`);
    console.log(`    验证码: ${scenario.totpCode}`);
    console.log(`    字段数: ${scenario.fieldCount}`);
    
    let result = [];
    const totpCode = scenario.totpCode;
    const fieldCount = scenario.fieldCount;
    
    if (fieldCount === 1) {
      // 单个字段：填入完整验证码
      result = [totpCode];
    } else if (fieldCount === totpCode.length) {
      // 字段数量等于验证码长度：每个字段填一位
      result = totpCode.split('');
    } else if (fieldCount < totpCode.length) {
      // 字段数量少于验证码长度：均匀分配
      const charsPerField = Math.ceil(totpCode.length / fieldCount);
      for (let i = 0; i < fieldCount; i++) {
        const start = i * charsPerField;
        const end = Math.min(start + charsPerField, totpCode.length);
        result.push(totpCode.substring(start, end));
      }
    } else {
      // 字段数量多于验证码长度：只填充前N个字段
      result = totpCode.split('').concat(new Array(fieldCount - totpCode.length).fill(''));
    }
    
    console.log(`    填充结果: [${result.map(r => `"${r}"`).join(', ')}]`);
    console.log(`    预期结果: [${scenario.expected.map(r => `"${r}"`).join(', ')}]`);
    console.log(`    ✅ 匹配: ${JSON.stringify(result) === JSON.stringify(scenario.expected)}`);
  });
}

testSmartFillLogic();

console.log("\n✅ 所有测试完成！");

// 输出建议
console.log("\n💡 使用建议:");
console.log("1. 确保在华为云MFA页面上，输入框包含 'hwid-input' 类名");
console.log("2. 字段应该有 'data-index' 属性和 'ht' 属性包含 'input_code'");
console.log("3. 字段类型为 'tel'（不限制具体长度）");
console.log("4. 支持任意长度的验证码（4位、6位、7位、8位等）");
console.log("5. 自动适配分段输入和单字段输入两种模式"); 