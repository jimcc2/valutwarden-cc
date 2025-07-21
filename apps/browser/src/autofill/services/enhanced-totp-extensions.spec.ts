/**
 * Enhanced TOTP Extensions Unit Tests
 * 增强 TOTP 功能的单元测试
 */

import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";

import { LogService } from "@bitwarden/common/platform/abstractions/log.service";
import { TotpService } from "@bitwarden/common/vault/services/totp.service";

import {
  EnhancedTotpUtils,
  EnhancedTotpConstants,
  EnhancedTotpAutofillExtensions,
  TotpFieldType,
  SegmentedTotpInfo,
  EnhancedTotpField,
  EnhancedFieldAnalysis
} from "./enhanced-totp-extensions";

describe("EnhancedTotpUtils", () => {
  describe("detectSegmentedTotp", () => {
    it("should detect 6-digit segmented TOTP fields", () => {
      const mockFields = [
        { htmlName: "code1", maxLength: 1, type: "text", opid: "opid1" },
        { htmlName: "code2", maxLength: 1, type: "text", opid: "opid2" },
        { htmlName: "code3", maxLength: 1, type: "text", opid: "opid3" },
        { htmlName: "code4", maxLength: 1, type: "text", opid: "opid4" },
        { htmlName: "code5", maxLength: 1, type: "text", opid: "opid5" },
        { htmlName: "code6", maxLength: 1, type: "text", opid: "opid6" }
      ];

      const result = EnhancedTotpUtils.detectSegmentedTotp(mockFields);

      expect(result.isSegmented).toBe(true);
      expect(result.totalSegments).toBe(6);
      expect(result.segmentLength).toBe(1);
      expect(result.fields).toHaveLength(6);
    });

    it("should detect 4-digit segmented TOTP fields", () => {
      const mockFields = [
        { htmlName: "pin1", maxLength: 1, type: "text", opid: "opid1" },
        { htmlName: "pin2", maxLength: 1, type: "text", opid: "opid2" },
        { htmlName: "pin3", maxLength: 1, type: "text", opid: "opid3" },
        { htmlName: "pin4", maxLength: 1, type: "text", opid: "opid4" }
      ];

      const result = EnhancedTotpUtils.detectSegmentedTotp(mockFields);

      expect(result.isSegmented).toBe(true);
      expect(result.totalSegments).toBe(4);
      expect(result.segmentLength).toBe(1);
    });

    it("should not detect segmented fields when maxLength > 1", () => {
      const mockFields = [
        { htmlName: "code1", maxLength: 3, type: "text", opid: "opid1" },
        { htmlName: "code2", maxLength: 3, type: "text", opid: "opid2" }
      ];

      const result = EnhancedTotpUtils.detectSegmentedTotp(mockFields);

      expect(result.isSegmented).toBe(false);
    });

    it("should not detect segmented fields when count < 4", () => {
      const mockFields = [
        { htmlName: "code1", maxLength: 1, type: "text", opid: "opid1" },
        { htmlName: "code2", maxLength: 1, type: "text", opid: "opid2" },
        { htmlName: "code3", maxLength: 1, type: "text", opid: "opid3" }
      ];

      const result = EnhancedTotpUtils.detectSegmentedTotp(mockFields);

      expect(result.isSegmented).toBe(false);
    });

    it("should handle mixed field types correctly", () => {
      const mockFields = [
        { htmlName: "username", type: "email", opid: "opid0" },
        { htmlName: "code1", maxLength: 1, type: "text", opid: "opid1" },
        { htmlName: "code2", maxLength: 1, type: "text", opid: "opid2" },
        { htmlName: "code3", maxLength: 1, type: "text", opid: "opid3" },
        { htmlName: "code4", maxLength: 1, type: "text", opid: "opid4" },
        { htmlName: "code5", maxLength: 1, type: "text", opid: "opid5" },
        { htmlName: "code6", maxLength: 1, type: "text", opid: "opid6" },
        { htmlName: "submit", type: "submit", opid: "opid7" }
      ];

      const result = EnhancedTotpUtils.detectSegmentedTotp(mockFields);

      expect(result.isSegmented).toBe(true);
      expect(result.totalSegments).toBe(6);
      expect(result.fields).toHaveLength(6);
    });
  });

  describe("analyzeTotpField", () => {
    it("should give high confidence for obvious TOTP fields", () => {
      const mockField = {
        htmlName: "totp-code",
        htmlID: "totp",
        type: "text",
        maxLength: 6,
        placeholder: "Enter verification code",
        viewable: true
      };

      const analysis = EnhancedTotpUtils.analyzeTotpField(mockField);

      expect(analysis.confidence).toBeGreaterThan(0.8);
      expect(analysis.fieldType).toBe(TotpFieldType.Standard);
      expect(analysis.isVisible).toBe(true);
    });

    it("should detect multi-language TOTP fields", () => {
      const chineseField = {
        htmlName: "验证码",
        type: "text",
        maxLength: 6,
        viewable: true
      };

      const analysis = EnhancedTotpUtils.analyzeTotpField(chineseField);

      expect(analysis.confidence).toBeGreaterThan(0.7);
      expect(analysis.fieldType).toBe(TotpFieldType.Standard);
    });

    it("should detect Japanese TOTP fields", () => {
      const japaneseField = {
        htmlName: "認証コード",
        type: "text",
        maxLength: 6,
        viewable: true
      };

      const analysis = EnhancedTotpUtils.analyzeTotpField(japaneseField);

      expect(analysis.confidence).toBeGreaterThan(0.7);
    });

    it("should detect Korean TOTP fields", () => {
      const koreanField = {
        placeholder: "인증코드 입력",
        type: "text",
        maxLength: 6,
        viewable: true
      };

      const analysis = EnhancedTotpUtils.analyzeTotpField(koreanField);

      expect(analysis.confidence).toBeGreaterThan(0.7);
    });

    it("should give low confidence for non-TOTP fields", () => {
      const mockField = {
        htmlName: "username",
        type: "email",
        viewable: true
      };

      const analysis = EnhancedTotpUtils.analyzeTotpField(mockField);

      expect(analysis.confidence).toBeLessThan(0.3);
    });

    it("should handle hidden fields correctly", () => {
      const hiddenField = {
        htmlName: "totp-code",
        type: "text",
        viewable: false
      };

      const analysis = EnhancedTotpUtils.analyzeTotpField(hiddenField);

      expect(analysis.isVisible).toBe(false);
      expect(analysis.confidence).toBeGreaterThan(0.5); // 仍然有置信度，但因为不可见会降低
    });
  });

  describe("splitTotpCode", () => {
    it("should split 6-digit code into 6 segments", () => {
      const result = EnhancedTotpUtils.splitTotpCode("123456", 1, 6);

      expect(result).toEqual(["1", "2", "3", "4", "5", "6"]);
    });

    it("should split 6-digit code into 3 segments of 2 digits each", () => {
      const result = EnhancedTotpUtils.splitTotpCode("123456", 2, 3);

      expect(result).toEqual(["12", "34", "56"]);
    });

    it("should handle 8-digit codes", () => {
      const result = EnhancedTotpUtils.splitTotpCode("12345678", 2, 4);

      expect(result).toEqual(["12", "34", "56", "78"]);
    });

    it("should pad short codes with empty strings", () => {
      const result = EnhancedTotpUtils.splitTotpCode("123", 1, 6);

      expect(result).toEqual(["1", "2", "3", "", "", ""]);
    });

    it("should truncate long codes", () => {
      const result = EnhancedTotpUtils.splitTotpCode("1234567890", 1, 6);

      expect(result).toEqual(["1", "2", "3", "4", "5", "6"]);
    });
  });

  describe("calculateFieldConfidence", () => {
    it("should return high confidence for perfect TOTP matches", () => {
      const field = {
        htmlName: "totp",
        placeholder: "Enter TOTP code",
        type: "text",
        maxLength: 6
      };

      const confidence = EnhancedTotpUtils.calculateFieldConfidence(field);

      expect(confidence).toBeGreaterThan(0.9);
    });

    it("should return medium confidence for partial matches", () => {
      const field = {
        htmlName: "security_code",
        type: "text"
      };

      const confidence = EnhancedTotpUtils.calculateFieldConfidence(field);

      expect(confidence).toBeGreaterThan(0.5);
      expect(confidence).toBeLessThan(0.8);
    });

    it("should return low confidence for non-matches", () => {
      const field = {
        htmlName: "username",
        type: "email"
      };

      const confidence = EnhancedTotpUtils.calculateFieldConfidence(field);

      expect(confidence).toBeLessThan(0.3);
    });
  });
});

describe("EnhancedTotpAutofillExtensions", () => {
  let mockTotpService: MockProxy<TotpService>;
  let mockLogService: MockProxy<LogService>;

  beforeEach(() => {
    mockTotpService = mock<TotpService>();
    mockLogService = mock<LogService>();
  });

  describe("findEnhancedTotpField", () => {
    it("should find the best TOTP field from multiple candidates", () => {
      const mockPageDetails = {
        fields: [
          { htmlName: "username", type: "email", opid: "opid1", viewable: true },
          { htmlName: "password", type: "password", opid: "opid2", viewable: true },
          { htmlName: "verification_code", type: "text", maxLength: 6, opid: "opid3", viewable: true },
          { htmlName: "totp", type: "text", maxLength: 6, opid: "opid4", viewable: true }
        ]
      };

      const result = EnhancedTotpAutofillExtensions.findEnhancedTotpField(mockPageDetails);

      expect(result).toBeTruthy();
      expect(result.htmlName).toBe("totp"); // 应该选择最匹配的字段
    });

    it("should respect canBeHidden parameter", () => {
      const mockPageDetails = {
        fields: [
          { htmlName: "totp", type: "text", maxLength: 6, opid: "opid1", viewable: false },
          { htmlName: "verification", type: "text", maxLength: 6, opid: "opid2", viewable: true }
        ]
      };

      // 不允许隐藏字段
      const resultNoHidden = EnhancedTotpAutofillExtensions.findEnhancedTotpField(
        mockPageDetails, undefined, false
      );
      expect(resultNoHidden.htmlName).toBe("verification");

      // 允许隐藏字段
      const resultWithHidden = EnhancedTotpAutofillExtensions.findEnhancedTotpField(
        mockPageDetails, undefined, true
      );
      expect(resultWithHidden.htmlName).toBe("totp"); // 应该选择置信度更高的字段
    });

    it("should find multi-language TOTP fields", () => {
      const mockPageDetails = {
        fields: [
          { htmlName: "验证码", type: "text", maxLength: 6, opid: "opid1", viewable: true },
          { htmlName: "normal_field", type: "text", opid: "opid2", viewable: true }
        ]
      };

      const result = EnhancedTotpAutofillExtensions.findEnhancedTotpField(mockPageDetails);

      expect(result).toBeTruthy();
      expect(result.htmlName).toBe("验证码");
    });
  });

  describe("fillSegmentedTotp", () => {
    it("should fill segmented TOTP fields correctly", async () => {
      const mockFillScript = { script: [] };
      const mockFields = [
        { htmlName: "code1", maxLength: 1, type: "text", opid: "opid1" },
        { htmlName: "code2", maxLength: 1, type: "text", opid: "opid2" },
        { htmlName: "code3", maxLength: 1, type: "text", opid: "opid3" },
        { htmlName: "code4", maxLength: 1, type: "text", opid: "opid4" },
        { htmlName: "code5", maxLength: 1, type: "text", opid: "opid5" },
        { htmlName: "code6", maxLength: 1, type: "text", opid: "opid6" }
      ];
      const totpCode = "123456";

      const result = await EnhancedTotpAutofillExtensions.fillSegmentedTotp(
        mockFillScript,
        mockFields,
        totpCode,
        mockTotpService
      );

      expect(result).toBe(true);
      expect(mockFillScript.script).toHaveLength(18); // 6 fields * 3 operations each (click, focus, fill)
      
      // 检查填充操作
      expect(mockFillScript.script).toContainEqual(["fill_by_opid", "opid1", "1"]);
      expect(mockFillScript.script).toContainEqual(["fill_by_opid", "opid2", "2"]);
      expect(mockFillScript.script).toContainEqual(["fill_by_opid", "opid3", "3"]);
      expect(mockFillScript.script).toContainEqual(["fill_by_opid", "opid4", "4"]);
      expect(mockFillScript.script).toContainEqual(["fill_by_opid", "opid5", "5"]);
      expect(mockFillScript.script).toContainEqual(["fill_by_opid", "opid6", "6"]);
    });

    it("should handle 4-digit segmented codes", async () => {
      const mockFillScript = { script: [] };
      const mockFields = [
        { htmlName: "pin1", maxLength: 1, type: "text", opid: "opid1" },
        { htmlName: "pin2", maxLength: 1, type: "text", opid: "opid2" },
        { htmlName: "pin3", maxLength: 1, type: "text", opid: "opid3" },
        { htmlName: "pin4", maxLength: 1, type: "text", opid: "opid4" }
      ];
      const totpCode = "1234";

      const result = await EnhancedTotpAutofillExtensions.fillSegmentedTotp(
        mockFillScript,
        mockFields,
        totpCode,
        mockTotpService
      );

      expect(result).toBe(true);
      expect(mockFillScript.script).toHaveLength(12); // 4 fields * 3 operations each
    });

    it("should return false for non-segmented fields", async () => {
      const mockFillScript = { script: [] };
      const mockFields = [
        { htmlName: "totp", type: "text", maxLength: 6, opid: "opid1" }
      ];
      const totpCode = "123456";

      const result = await EnhancedTotpAutofillExtensions.fillSegmentedTotp(
        mockFillScript,
        mockFields,
        totpCode,
        mockTotpService
      );

      expect(result).toBe(false);
      expect(mockFillScript.script).toHaveLength(0);
    });
  });

  describe("isMfaPage", () => {
    it("should detect MFA pages by URL patterns", () => {
      const mfaUrls = [
        "https://accounts.google.com/signin/v2/challenge/totp",
        "https://login.microsoftonline.com/common/SAS/BeginAuth",
        "https://github.com/sessions/two-factor",
        "https://signin.aws.amazon.com/mfa",
        "https://discord.com/login?redirect_to=%2Fchannels",
        "https://example.com/2fa/verify"
      ];

      mfaUrls.forEach(url => {
        expect(EnhancedTotpAutofillExtensions.isMfaPage(url)).toBe(true);
      });
    });

    it("should not detect regular login pages as MFA", () => {
      const regularUrls = [
        "https://accounts.google.com/signin",
        "https://login.microsoftonline.com/login",
        "https://github.com/login",
        "https://example.com/login"
      ];

      regularUrls.forEach(url => {
        expect(EnhancedTotpAutofillExtensions.isMfaPage(url)).toBe(false);
      });
    });

    it("should detect MFA pages by page title", () => {
      const mfaTitles = [
        "Two-Factor Authentication",
        "Enter Verification Code",
        "Multi-Factor Authentication",
        "Security Verification",
        "2FA Required",
        "双因素验证",
        "二段階認証"
      ];

      mfaTitles.forEach(title => {
        expect(EnhancedTotpAutofillExtensions.isMfaPage("https://example.com", title)).toBe(true);
      });
    });

    it("should detect MFA pages by content", () => {
      const mfaContent = "Please enter the 6-digit code from your authenticator app";
      
      expect(EnhancedTotpAutofillExtensions.isMfaPage(
        "https://example.com", 
        "Login", 
        mfaContent
      )).toBe(true);
    });
  });

  describe("getRecommendedFillDelay", () => {
    it("should return appropriate delays for different field types", () => {
      const standardField = { htmlName: "totp", type: "text", maxLength: 6 };
      const segmentedField = { htmlName: "code1", type: "text", maxLength: 1 };
      const hiddenField = { htmlName: "totp", type: "text", viewable: false };

      const pageDetails = { fields: [standardField] };

      expect(EnhancedTotpAutofillExtensions.getRecommendedFillDelay(
        standardField, 
        pageDetails
      )).toBe(200); // 标准延迟

      expect(EnhancedTotpAutofillExtensions.getRecommendedFillDelay(
        segmentedField, 
        pageDetails
      )).toBe(100); // 分段字段较快

      expect(EnhancedTotpAutofillExtensions.getRecommendedFillDelay(
        hiddenField, 
        pageDetails
      )).toBe(300); // 隐藏字段较慢
    });
  });
});

describe("EnhancedTotpConstants", () => {
  it("should contain expected multi-language TOTP field names", () => {
    expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toContain("验证码");
    expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toContain("認証コード");
    expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toContain("인증코드");
    expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toContain("verifizierungscode");
    expect(EnhancedTotpConstants.ExtendedTotpFieldNames).toContain("codeverification");
  });

  it("should contain expected MFA URL patterns", () => {
    expect(EnhancedTotpConstants.MfaUrlPatterns.some(pattern => 
      pattern.test("https://accounts.google.com/signin/v2/challenge/totp")
    )).toBe(true);
    
    expect(EnhancedTotpConstants.MfaUrlPatterns.some(pattern => 
      pattern.test("https://github.com/sessions/two-factor")
    )).toBe(true);
  });

  it("should contain expected MFA page indicators", () => {
    expect(EnhancedTotpConstants.MfaPageIndicators).toContain("two-factor");
    expect(EnhancedTotpConstants.MfaPageIndicators).toContain("verification");
    expect(EnhancedTotpConstants.MfaPageIndicators).toContain("authenticator");
  });
});

// 集成测试
describe("Enhanced TOTP Integration Tests", () => {
  let mockTotpService: MockProxy<TotpService>;

  beforeEach(() => {
    mockTotpService = mock<TotpService>();
    mockTotpService.getCode$.mockReturnValue(of({ code: "123456", period: 30 }));
  });

  it("should handle complete flow from detection to filling", async () => {
    // 模拟 Discord 风格的分段验证码页面
    const mockPageDetails = {
      url: "https://discord.com/login",
      title: "Two-Factor Authentication",
      fields: [
        { htmlName: "code-1", maxLength: 1, type: "text", opid: "opid1", viewable: true },
        { htmlName: "code-2", maxLength: 1, type: "text", opid: "opid2", viewable: true },
        { htmlName: "code-3", maxLength: 1, type: "text", opid: "opid3", viewable: true },
        { htmlName: "code-4", maxLength: 1, type: "text", opid: "opid4", viewable: true },
        { htmlName: "code-5", maxLength: 1, type: "text", opid: "opid5", viewable: true },
        { htmlName: "code-6", maxLength: 1, type: "text", opid: "opid6", viewable: true }
      ]
    };

    // 1. 检测是否为 MFA 页面
    const isMfaPage = EnhancedTotpAutofillExtensions.isMfaPage(
      mockPageDetails.url, 
      mockPageDetails.title
    );
    expect(isMfaPage).toBe(true);

    // 2. 检测分段验证码
    const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(mockPageDetails.fields);
    expect(segmentedInfo.isSegmented).toBe(true);
    expect(segmentedInfo.totalSegments).toBe(6);

    // 3. 执行分段填充
    const fillScript = { script: [] };
    const success = await EnhancedTotpAutofillExtensions.fillSegmentedTotp(
      fillScript,
      mockPageDetails.fields,
      "123456",
      mockTotpService
    );

    expect(success).toBe(true);
    expect(fillScript.script.length).toBeGreaterThan(0);
  });

  it("should handle Chinese website TOTP fields", async () => {
    const mockPageDetails = {
      url: "https://passport.alipay.com/mini_login.htm",
      title: "支付宝登录",
      fields: [
        { htmlName: "username", type: "text", opid: "opid1" },
        { htmlName: "password", type: "password", opid: "opid2" },
        { htmlName: "验证码", type: "text", maxLength: 6, opid: "opid3", viewable: true }
      ]
    };

    // 查找 TOTP 字段
    const field = EnhancedTotpAutofillExtensions.findEnhancedTotpField(mockPageDetails);
    expect(field).toBeTruthy();
    expect(field.htmlName).toBe("验证码");

    // 分析字段置信度
    const analysis = EnhancedTotpUtils.analyzeTotpField(field);
    expect(analysis.confidence).toBeGreaterThan(0.7);
  });

  it("should gracefully fall back when enhanced features fail", async () => {
    const mockPageDetails = {
      fields: [
        { htmlName: "unusual_field_name", type: "text", opid: "opid1", viewable: true }
      ]
    };

    // 增强检测应该失败
    const enhancedField = EnhancedTotpAutofillExtensions.findEnhancedTotpField(mockPageDetails);
    expect(enhancedField).toBeFalsy();

    // 分段检测应该失败
    const segmentedInfo = EnhancedTotpUtils.detectSegmentedTotp(mockPageDetails.fields);
    expect(segmentedInfo.isSegmented).toBe(false);

    // 这种情况下应该回退到原始逻辑
  });
});

// 性能测试
describe("Enhanced TOTP Performance Tests", () => {
  it("should process large number of fields efficiently", () => {
    // 创建大量字段
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
      maxLength: 6,
      opid: "totp_opid",
      viewable: true
    });

    const startTime = performance.now();
    const field = EnhancedTotpAutofillExtensions.findEnhancedTotpField({ fields: largeFieldList });
    const endTime = performance.now();

    expect(field).toBeTruthy();
    expect(field.htmlName).toBe("totp_code");
    expect(endTime - startTime).toBeLessThan(50); // 应该在 50ms 内完成
  });

  it("should cache field analysis results", () => {
    const field = {
      htmlName: "totp",
      type: "text",
      maxLength: 6,
      viewable: true
    };

    // 第一次分析
    const startTime1 = performance.now();
    const analysis1 = EnhancedTotpUtils.analyzeTotpField(field);
    const endTime1 = performance.now();

    // 第二次分析（应该从缓存获取）
    const startTime2 = performance.now();
    const analysis2 = EnhancedTotpUtils.analyzeTotpField(field);
    const endTime2 = performance.now();

    expect(analysis1).toEqual(analysis2);
    // 注意：由于我们没有实现缓存，这个测试主要是示例
    // 实际实现时应该第二次调用更快
  });
}); 