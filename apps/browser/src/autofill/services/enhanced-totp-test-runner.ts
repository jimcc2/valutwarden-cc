/**
 * Enhanced TOTP Test Runner
 * 增强 TOTP 功能的简单测试运行器（不依赖 Jest）
 */

import { 
  EnhancedTotpUtils, 
  EnhancedTotpConstants,
  EnhancedTotpAutofillExtensions,
  TotpFieldType 
} from "./enhanced-totp-extensions";

// 简单的测试框架
class SimpleTestRunner {
  private tests: Array<{ name: string; test: () => void | Promise<void> }> = [];
  private results: Array<{ name: string; passed: boolean; error?: string }> = [];

  test(name: string, testFn: () => void | Promise<void>) {
    this.tests.push({ name, test: testFn });
  }

  expect(actual: any) {
    return {
      toBe: (expected: any) => {
        if (actual !== expected) {
          throw new Error(`Expected ${expected}, but got ${actual}`);
        }
      },
      toEqual: (expected: any) => {
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
          throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
        }
      },
      toBeGreaterThan: (expected: number) => {
        if (actual <= expected) {
          throw new Error(`Expected ${actual} to be greater than ${expected}`);
        }
      },
      toBeLessThan: (expected: number) => {
        if (actual >= expected) {
          throw new Error(`Expected ${actual} to be less than ${expected}`);
        }
      },
      toContain: (expected: any) => {
        if (!actual.includes(expected)) {
          throw new Error(`Expected array to contain ${expected}`);
        }
      },
      toHaveLength: (expected: number) => {
        if (actual.length !== expected) {
          throw new Error(`Expected length ${expected}, but got ${actual.length}`);
        }
      },
      toBeTruthy: () => {
        if (!actual) {
          throw new Error(`Expected value to be truthy, but got ${actual}`);
        }
      },
      toBeFalsy: () => {
        if (actual) {
          throw new Error(`Expected value to be falsy, but got ${actual}`);
        }
      }
    };
  }

  async run(): Promise<{ passed: number; failed: number; total: number }> {
    console.log("🧪 Starting Enhanced TOTP Tests...\n");

    for (const { name, test } of this.tests) {
      try {
        await test();
        this.results.push({ name, passed: true });
        console.log(`✅ ${name}`);
      } catch (error) {
        this.results.push({ name, passed: false, error: error.message });
        console.log(`❌ ${name}: ${error.message}`);
      }
    }

    const passed = this.results.filter(r => r.passed).length;
    const failed = this.results.filter(r => !r.passed).length;

    console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed, ${this.tests.length} total`);
    
    if (failed > 0) {
      console.log("\n❌ Failed Tests:");
      this.results.filter(r => !r.passed).forEach(r => {
        console.log(`  - ${r.name}: ${r.error}`);
      });
    }

    return { passed, failed, total: this.tests.length };
  }
}

// 创建测试实例
const testRunner = new SimpleTestRunner();

// 基础字段检测测试
testRunner.test("Should detect segmented TOTP fields", () => {
  const mockFields = [
    { htmlName: "code1", maxLength: 1, type: "text", opid: "opid1" },
    { htmlName: "code2", maxLength: 1, type: "text", opid: "opid2" },
    { htmlName: "code3", maxLength: 1, type: "text", opid: "opid3" },
    { htmlName: "code4", maxLength: 1, type: "text", opid: "opid4" },
    { htmlName: "code5", maxLength: 1, type: "text", opid: "opid5" },
    { htmlName: "code6", maxLength: 1, type: "text", opid: "opid6" }
  ];

  const result = EnhancedTotpUtils.detectSegmentedTotp(mockFields);

  testRunner.expect(result.isSegmented).toBe(true);
  testRunner.expect(result.totalSegments).toBe(6);
  testRunner.expect(result.segmentLength).toBe(1);
});

testRunner.test("Should not detect non-segmented fields", () => {
  const mockFields = [
    { htmlName: "username", type: "email", opid: "opid1" },
    { htmlName: "password", type: "password", opid: "opid2" },
    { htmlName: "totp", type: "text", maxLength: 6, opid: "opid3" }
  ];

  const result = EnhancedTotpUtils.detectSegmentedTotp(mockFields);

  testRunner.expect(result.isSegmented).toBe(false);
});

testRunner.test("Should analyze TOTP field confidence correctly", () => {
  const totpField = {
    htmlName: "totp-code",
    type: "text",
    maxLength: 6,
    placeholder: "Enter verification code",
    viewable: true
  };

  const analysis = EnhancedTotpUtils.analyzeTotpField(totpField);

  testRunner.expect(analysis.confidence).toBeGreaterThan(0.8);
  testRunner.expect(analysis.fieldType).toBe(TotpFieldType.Standard);
  testRunner.expect(analysis.isVisible).toBe(true);
});

testRunner.test("Should detect multi-language TOTP fields", () => {
  const chineseField = {
    htmlName: "验证码",
    type: "text",
    maxLength: 6,
    viewable: true
  };

  const analysis = EnhancedTotpUtils.analyzeTotpField(chineseField);
  testRunner.expect(analysis.confidence).toBeGreaterThan(0.7);

  const japaneseField = {
    htmlName: "認証コード",
    type: "text",
    maxLength: 6,
    viewable: true
  };

  const analysisJa = EnhancedTotpUtils.analyzeTotpField(japaneseField);
  testRunner.expect(analysisJa.confidence).toBeGreaterThan(0.7);
});

testRunner.test("Should split TOTP codes correctly", () => {
  const result6 = EnhancedTotpUtils.splitTotpCode("123456", 1, 6);
  testRunner.expect(result6).toEqual(["1", "2", "3", "4", "5", "6"]);

  const result3 = EnhancedTotpUtils.splitTotpCode("123456", 2, 3);
  testRunner.expect(result3).toEqual(["12", "34", "56"]);

  const resultPad = EnhancedTotpUtils.splitTotpCode("123", 1, 6);
  testRunner.expect(resultPad).toEqual(["1", "2", "3", "", "", ""]);
});

testRunner.test("Should detect MFA pages correctly", () => {
  const mfaUrls = [
    "https://accounts.google.com/signin/v2/challenge/totp",
    "https://github.com/sessions/two-factor",
    "https://discord.com/login",
    "https://example.com/2fa/verify"
  ];

  mfaUrls.forEach(url => {
    const isMfa = EnhancedTotpAutofillExtensions.isMfaPage(url);
    testRunner.expect(isMfa).toBe(true);
  });

  const regularUrls = [
    "https://accounts.google.com/signin",
    "https://github.com/login",
    "https://example.com/login"
  ];

  regularUrls.forEach(url => {
    const isMfa = EnhancedTotpAutofillExtensions.isMfaPage(url);
    testRunner.expect(isMfa).toBe(false);
  });
});

testRunner.test("Should detect MFA pages by title", () => {
  const mfaTitles = [
    "Two-Factor Authentication",
    "双因素验证",
    "二段階認証",
    "Enter Verification Code"
  ];

  mfaTitles.forEach(title => {
    const isMfa = EnhancedTotpAutofillExtensions.isMfaPage("https://example.com", title);
    testRunner.expect(isMfa).toBe(true);
  });
});

testRunner.test("Should find enhanced TOTP fields", () => {
  const mockPageDetails = {
    fields: [
      { htmlName: "username", type: "email", opid: "opid1", viewable: true },
      { htmlName: "password", type: "password", opid: "opid2", viewable: true },
      { htmlName: "verification_code", type: "text", maxLength: 6, opid: "opid3", viewable: true },
      { htmlName: "totp", type: "text", maxLength: 6, opid: "opid4", viewable: true }
    ]
  };

  const result = EnhancedTotpAutofillExtensions.findEnhancedTotpField(mockPageDetails);

  testRunner.expect(result).toBeTruthy();
  testRunner.expect(result.htmlName).toBe("totp"); // 应该选择最匹配的字段
});

testRunner.test("Should contain multi-language field names", () => {
  testRunner.expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toContain("验证码");
  testRunner.expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toContain("認証コード");
  testRunner.expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toContain("인증코드");
  testRunner.expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toContain("verifizierungscode");
});

testRunner.test("Should have expected constants", () => {
  // 测试常量是否存在
  testRunner.expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toBeTruthy();
  testRunner.expect(EnhancedTotpConstants.ExtendedTotpFieldNames.length).toBeGreaterThan(50);
});

// 性能测试
testRunner.test("Should process large field lists efficiently", () => {
  const largeFieldList = Array.from({ length: 100 }, (_, i) => ({
    htmlName: `field_${i}`,
    type: "text",
    opid: `opid_${i}`,
    viewable: true
  }));

  // 添加一个真正的 TOTP 字段
  largeFieldList.push({
    htmlName: "totp_code",
    type: "text",
    opid: "totp_opid",
    viewable: true,
    maxLength: 6
  } as any);

  const startTime = performance.now();
  const field = EnhancedTotpAutofillExtensions.findEnhancedTotpField({ fields: largeFieldList });
  const endTime = performance.now();

  testRunner.expect(field).toBeTruthy();
  testRunner.expect(field.htmlName).toBe("totp_code");
  testRunner.expect(endTime - startTime).toBeLessThan(100); // 应该在 100ms 内完成
});

// 导出测试运行器用于手动执行
export { testRunner as EnhancedTotpTestRunner };

// 如果作为模块直接运行
if (typeof window !== 'undefined') {
  // 浏览器环境
  (window as any).runEnhancedTotpTests = () => {
    return testRunner.run();
  };
  
  console.log("Enhanced TOTP Tests loaded. Run 'runEnhancedTotpTests()' in the console to execute tests.");
} else {
  // Node.js 或其他环境
  console.log("Enhanced TOTP Test Runner loaded. Call testRunner.run() to execute tests.");
} 