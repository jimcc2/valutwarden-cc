/**
 * Enhanced TOTP Integration Tests
 * 增强 TOTP 集成功能的基础测试
 */

import { 
  EnhancedTotpIntegration, 
  TotpIntegrationOptions,
  TotpFillResult 
} from "./enhanced-totp-integration";

describe("EnhancedTotpIntegration", () => {
  let integration: EnhancedTotpIntegration;

  beforeEach(() => {
    integration = EnhancedTotpIntegration.getInstance();
    integration.clearHistory(); // 清理测试历史
  });

  describe("Singleton Pattern", () => {
    it("should return the same instance", () => {
      const instance1 = EnhancedTotpIntegration.getInstance();
      const instance2 = EnhancedTotpIntegration.getInstance();
      
      expect(instance1).toBe(instance2);
    });
  });

  describe("MFA Page Detection", () => {
    it("should detect common MFA URLs", () => {
      const mfaUrls = [
        "https://accounts.google.com/signin/v2/challenge/totp",
        "https://login.microsoftonline.com/common/SAS/BeginAuth",
        "https://github.com/sessions/two-factor",
        "https://discord.com/login",
        "https://example.com/2fa/verify"
      ];

      mfaUrls.forEach(url => {
        expect(integration.isMfaPage(url)).toBe(true);
      });
    });

    it("should not detect regular pages as MFA", () => {
      const regularUrls = [
        "https://accounts.google.com/signin",
        "https://github.com/login",
        "https://example.com/login",
        "https://example.com/home"
      ];

      regularUrls.forEach(url => {
        expect(integration.isMfaPage(url)).toBe(false);
      });
    });

    it("should detect MFA pages by title", () => {
      const url = "https://example.com/auth";
      
      expect(integration.isMfaPage(url, "Two-Factor Authentication")).toBe(true);
      expect(integration.isMfaPage(url, "双因素验证")).toBe(true);
      expect(integration.isMfaPage(url, "二段階認証")).toBe(true);
      expect(integration.isMfaPage(url, "Regular Login Page")).toBe(false);
    });
  });

  describe("Fill Statistics", () => {
    it("should track fill attempts", () => {
      const initialStats = integration.getFillStatistics();
      expect(initialStats.totalAttempts).toBe(0);
      expect(initialStats.successfulAttempts).toBe(0);
    });

    it("should provide method breakdown", () => {
      const stats = integration.getFillStatistics();
      expect(stats.methodBreakdown).toBeDefined();
      expect(typeof stats.methodBreakdown).toBe('object');
    });
  });

  describe("Clear History", () => {
    it("should clear fill history", () => {
      integration.clearHistory();
      const stats = integration.getFillStatistics();
      
      expect(stats.totalAttempts).toBe(0);
      expect(stats.successfulAttempts).toBe(0);
      expect(Object.keys(stats.methodBreakdown)).toHaveLength(0);
    });
  });
});

// 工厂函数测试
describe("getEnhancedTotpIntegration", () => {
  it("should return EnhancedTotpIntegration instance", () => {
    const { getEnhancedTotpIntegration } = require("./enhanced-totp-integration");
    const instance = getEnhancedTotpIntegration();
    
    expect(instance).toBeInstanceOf(EnhancedTotpIntegration);
  });
});

// Mock 数据和辅助函数
const createMockPageDetails = (fields: any[] = []) => ({
  url: "https://example.com",
  title: "Test Page",
  fields
});

const createMockSegmentedFields = () => [
  { htmlName: "code1", maxLength: 1, type: "text", opid: "opid1", viewable: true },
  { htmlName: "code2", maxLength: 1, type: "text", opid: "opid2", viewable: true },
  { htmlName: "code3", maxLength: 1, type: "text", opid: "opid3", viewable: true },
  { htmlName: "code4", maxLength: 1, type: "text", opid: "opid4", viewable: true },
  { htmlName: "code5", maxLength: 1, type: "text", opid: "opid5", viewable: true },
  { htmlName: "code6", maxLength: 1, type: "text", opid: "opid6", viewable: true }
];

const createMockSingleTotpField = () => ({
  htmlName: "totp_code",
  type: "text",
  maxLength: 6,
  opid: "totp_opid",
  viewable: true
});

const createMockMultiLanguageFields = () => [
  { htmlName: "验证码", type: "text", maxLength: 6, opid: "zh_opid", viewable: true },
  { htmlName: "認証コード", type: "text", maxLength: 6, opid: "ja_opid", viewable: true },
  { htmlName: "인증코드", type: "text", maxLength: 6, opid: "ko_opid", viewable: true }
];

// 导出测试工具函数供其他测试使用
export const EnhancedTotpTestUtils = {
  createMockPageDetails,
  createMockSegmentedFields,
  createMockSingleTotpField,
  createMockMultiLanguageFields
}; 