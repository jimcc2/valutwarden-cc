/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../libs/common/src/platform/ipc/ipc-message.ts":
/*!*********************************************************!*\
  !*** ../../libs/common/src/platform/ipc/ipc-message.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIpcMessage: function() { return /* binding */ isIpcMessage; }
/* harmony export */ });
function isIpcMessage(message) {
    return message.type === "bitwarden-ipc-message";
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!********************************************************!*\
  !*** ./src/platform/ipc/content/ipc-content-script.ts ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendExtensionMessage: function() { return /* binding */ sendExtensionMessage; }
/* harmony export */ });
/* harmony import */ var _bitwarden_common_platform_ipc_ipc_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/ipc/ipc-message */ "../../libs/common/src/platform/ipc/ipc-message.ts");
// TODO: This content script should be dynamically reloaded when the extension is updated,
// to avoid "Extension context invalidated." errors.

// Web -> Background
function sendExtensionMessage(message) {
    if (typeof browser !== "undefined" &&
        typeof browser.runtime !== "undefined" &&
        typeof browser.runtime.sendMessage !== "undefined") {
        void browser.runtime.sendMessage(message);
        return;
    }
    void chrome.runtime.sendMessage(message);
}
window.addEventListener("message", (event) => {
    if (event.origin !== window.origin) {
        return;
    }
    if ((0,_bitwarden_common_platform_ipc_ipc_message__WEBPACK_IMPORTED_MODULE_0__.isIpcMessage)(event.data)) {
        sendExtensionMessage(event.data);
    }
});
// Background -> Web
function setupMessageListener() {
    function listener(message) {
        if ((0,_bitwarden_common_platform_ipc_ipc_message__WEBPACK_IMPORTED_MODULE_0__.isIpcMessage)(message)) {
            void window.postMessage(message);
        }
    }
    if (typeof browser !== "undefined" &&
        typeof browser.runtime !== "undefined" &&
        typeof browser.runtime.onMessage !== "undefined") {
        browser.runtime.onMessage.addListener(listener);
        return;
    }
    // eslint-disable-next-line no-restricted-syntax -- This doesn't run in the popup but in the content script
    chrome.runtime.onMessage.addListener(listener);
}
setupMessageListener();

}();
/******/ })()
;