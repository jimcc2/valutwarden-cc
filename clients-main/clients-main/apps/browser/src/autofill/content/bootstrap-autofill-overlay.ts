// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
import { AutofillInlineMenuContentService } from "../overlay/inline-menu/content/autofill-inline-menu-content.service";
import { OverlayNotificationsContentService } from "../overlay/notifications/content/overlay-notifications-content.service";
import { AutofillOverlayContentService } from "../services/autofill-overlay-content.service";
import DomElementVisibilityService from "../services/dom-element-visibility.service";
import { DomQueryService } from "../services/dom-query.service";
import { InlineMenuFieldQualificationService } from "../services/inline-menu-field-qualification.service";
import { setupAutofillInitDisconnectAction } from "../utils";

import AutofillInit from "./autofill-init";

(function (windowContext) {
  if (!windowContext.bitwardenAutofillInit) {
    let inlineMenuContentService: AutofillInlineMenuContentService;
    let overlayNotificationsContentService: OverlayNotificationsContentService;
    if (globalThis.self === globalThis.top) {
      inlineMenuContentService = new AutofillInlineMenuContentService();
      overlayNotificationsContentService = new OverlayNotificationsContentService();
    }

    const domQueryService = new DomQueryService();
    const domElementVisibilityService = new DomElementVisibilityService(inlineMenuContentService);
    const inlineMenuFieldQualificationService = new InlineMenuFieldQualificationService();
    const autofillOverlayContentService = new AutofillOverlayContentService(
      domQueryService,
      domElementVisibilityService,
      inlineMenuFieldQualificationService,
      inlineMenuContentService,
    );

    windowContext.bitwardenAutofillInit = new AutofillInit(
      domQueryService,
      domElementVisibilityService,
      autofillOverlayContentService,
      inlineMenuContentService,
      overlayNotificationsContentService,
    );
    setupAutofillInitDisconnectAction(windowContext);

    windowContext.bitwardenAutofillInit.init();
  }
})(window);

// === 华为云MFA弹窗自动检测与直接填充 ===
(function observeAndFillMfaPopup() {
  let lastFilledCode = '';
  const observer = new MutationObserver(() => {
    // 检测所有 type=tel 且有 data-index 的输入框
    const mfaInputs = document.querySelectorAll('input[type="tel"][data-index]');
    if (mfaInputs.length === 6) {
      console.log('[MFA自动填充] 检测到6个MFA输入框，准备请求验证码');
      chrome.runtime.sendMessage({ command: "getTotpCodeForHuawei" }, (response) => {
        if (response && response.totpCode && response.totpCode !== lastFilledCode) {
          console.log('[MFA自动填充] 获取到验证码:', response.totpCode);
          for (let i = 0; i < 6; i++) {
            const input = mfaInputs[i] as HTMLInputElement;
            input.value = response.totpCode[i] || '';
            input.dispatchEvent(new Event('input', { bubbles: true }));
          }
          lastFilledCode = response.totpCode;
        } else {
          console.log('[MFA自动填充] 未获取到验证码或验证码未变化', response);
        }
      });
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  // 页面初次加载时也主动检测一次
  setTimeout(() => {
    const mfaInputs = document.querySelectorAll('input[type="tel"][data-index]');
    if (mfaInputs.length === 6) {
      console.log('[MFA自动填充] 首次加载检测到6个MFA输入框，准备请求验证码');
      chrome.runtime.sendMessage({ command: "getTotpCodeForHuawei" }, (response) => {
        if (response && response.totpCode && response.totpCode !== lastFilledCode) {
          console.log('[MFA自动填充] 获取到验证码:', response.totpCode);
          for (let i = 0; i < 6; i++) {
            const input = mfaInputs[i] as HTMLInputElement;
            input.value = response.totpCode[i] || '';
            input.dispatchEvent(new Event('input', { bubbles: true }));
          }
          lastFilledCode = response.totpCode;
        } else {
          console.log('[MFA自动填充] 未获取到验证码或验证码未变化', response);
        }
      });
    }
  }, 500);
})();
