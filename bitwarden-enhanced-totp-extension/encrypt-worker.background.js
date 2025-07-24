/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../libs/common/src/autofill/constants/index.ts":
/*!*********************************************************!*\
  !*** ../../libs/common/src/autofill/constants/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTOFILL_CARD_ID: () => (/* binding */ AUTOFILL_CARD_ID),
/* harmony export */   AUTOFILL_ID: () => (/* binding */ AUTOFILL_ID),
/* harmony export */   AUTOFILL_IDENTITY_ID: () => (/* binding */ AUTOFILL_IDENTITY_ID),
/* harmony export */   AUTOFILL_OVERLAY_HANDLE_REPOSITION: () => (/* binding */ AUTOFILL_OVERLAY_HANDLE_REPOSITION),
/* harmony export */   AUTOFILL_OVERLAY_HANDLE_SCROLL: () => (/* binding */ AUTOFILL_OVERLAY_HANDLE_SCROLL),
/* harmony export */   AUTOFILL_TRIGGER_FORM_FIELD_SUBMIT: () => (/* binding */ AUTOFILL_TRIGGER_FORM_FIELD_SUBMIT),
/* harmony export */   AutofillOverlayVisibility: () => (/* binding */ AutofillOverlayVisibility),
/* harmony export */   BrowserClientVendors: () => (/* binding */ BrowserClientVendors),
/* harmony export */   BrowserShortcutsUris: () => (/* binding */ BrowserShortcutsUris),
/* harmony export */   CLEAR_NOTIFICATION_LOGIN_DATA_DURATION: () => (/* binding */ CLEAR_NOTIFICATION_LOGIN_DATA_DURATION),
/* harmony export */   COPY_IDENTIFIER_ID: () => (/* binding */ COPY_IDENTIFIER_ID),
/* harmony export */   COPY_PASSWORD_ID: () => (/* binding */ COPY_PASSWORD_ID),
/* harmony export */   COPY_USERNAME_ID: () => (/* binding */ COPY_USERNAME_ID),
/* harmony export */   COPY_VERIFICATION_CODE_ID: () => (/* binding */ COPY_VERIFICATION_CODE_ID),
/* harmony export */   CREATE_CARD_ID: () => (/* binding */ CREATE_CARD_ID),
/* harmony export */   CREATE_IDENTITY_ID: () => (/* binding */ CREATE_IDENTITY_ID),
/* harmony export */   CREATE_LOGIN_ID: () => (/* binding */ CREATE_LOGIN_ID),
/* harmony export */   CardExpiryDateDelimiters: () => (/* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.CardExpiryDateDelimiters),
/* harmony export */   ClearClipboardDelay: () => (/* binding */ ClearClipboardDelay),
/* harmony export */   DelimiterPatternExpression: () => (/* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.DelimiterPatternExpression),
/* harmony export */   DisablePasswordManagerUris: () => (/* binding */ DisablePasswordManagerUris),
/* harmony export */   EVENTS: () => (/* binding */ EVENTS),
/* harmony export */   ExpiryDateDelimitersPattern: () => (/* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.ExpiryDateDelimitersPattern),
/* harmony export */   ExpiryFullYearPattern: () => (/* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.ExpiryFullYearPattern),
/* harmony export */   ExpiryFullYearPatternExpression: () => (/* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.ExpiryFullYearPatternExpression),
/* harmony export */   ExtensionCommand: () => (/* binding */ ExtensionCommand),
/* harmony export */   GENERATE_PASSWORD_ID: () => (/* binding */ GENERATE_PASSWORD_ID),
/* harmony export */   IrrelevantExpiryCharactersPatternExpression: () => (/* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.IrrelevantExpiryCharactersPatternExpression),
/* harmony export */   MAX_DEEP_QUERY_RECURSION_DEPTH: () => (/* binding */ MAX_DEEP_QUERY_RECURSION_DEPTH),
/* harmony export */   MonthPattern: () => (/* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.MonthPattern),
/* harmony export */   MonthPatternExpression: () => (/* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.MonthPatternExpression),
/* harmony export */   NOOP_COMMAND_SUFFIX: () => (/* binding */ NOOP_COMMAND_SUFFIX),
/* harmony export */   NOTIFICATION_BAR_LIFESPAN_MS: () => (/* binding */ NOTIFICATION_BAR_LIFESPAN_MS),
/* harmony export */   ROOT_ID: () => (/* binding */ ROOT_ID),
/* harmony export */   SEPARATOR_ID: () => (/* binding */ SEPARATOR_ID),
/* harmony export */   SHOW_AUTOFILL_BUTTON: () => (/* binding */ SHOW_AUTOFILL_BUTTON),
/* harmony export */   TYPE_CHECK: () => (/* binding */ TYPE_CHECK),
/* harmony export */   UPDATE_PASSKEYS_HEADINGS_ON_SCROLL: () => (/* binding */ UPDATE_PASSKEYS_HEADINGS_ON_SCROLL),
/* harmony export */   UPDATE_PASSWORD: () => (/* binding */ UPDATE_PASSWORD)
/* harmony export */ });
/* harmony import */ var _match_patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match-patterns */ "../../libs/common/src/autofill/constants/match-patterns.ts");
const TYPE_CHECK = {
    FUNCTION: "function",
    NUMBER: "number",
    STRING: "string",
};
const EVENTS = {
    CHANGE: "change",
    INPUT: "input",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    KEYUP: "keyup",
    BLUR: "blur",
    CLICK: "click",
    FOCUS: "focus",
    FOCUSIN: "focusin",
    FOCUSOUT: "focusout",
    SCROLL: "scroll",
    RESIZE: "resize",
    DOMCONTENTLOADED: "DOMContentLoaded",
    LOAD: "load",
    MESSAGE: "message",
    VISIBILITYCHANGE: "visibilitychange",
    MOUSEENTER: "mouseenter",
    MOUSELEAVE: "mouseleave",
    MOUSEUP: "mouseup",
    MOUSEOUT: "mouseout",
    SUBMIT: "submit",
};
const ClearClipboardDelay = {
    Never: null,
    TenSeconds: 10,
    TwentySeconds: 20,
    ThirtySeconds: 30,
    OneMinute: 60,
    TwoMinutes: 120,
    FiveMinutes: 300,
};
/* Ids for context menu items and messaging events */
const AUTOFILL_CARD_ID = "autofill-card";
const AUTOFILL_ID = "autofill";
const SHOW_AUTOFILL_BUTTON = "show-autofill-button";
const AUTOFILL_IDENTITY_ID = "autofill-identity";
const COPY_IDENTIFIER_ID = "copy-identifier";
const COPY_PASSWORD_ID = "copy-password";
const COPY_USERNAME_ID = "copy-username";
const COPY_VERIFICATION_CODE_ID = "copy-totp";
const CREATE_CARD_ID = "create-card";
const CREATE_IDENTITY_ID = "create-identity";
const CREATE_LOGIN_ID = "create-login";
const GENERATE_PASSWORD_ID = "generate-password";
const NOOP_COMMAND_SUFFIX = "noop";
const ROOT_ID = "root";
const SEPARATOR_ID = "separator";
const UPDATE_PASSWORD = "update-password";
const NOTIFICATION_BAR_LIFESPAN_MS = 150000; // 150 seconds
const AUTOFILL_OVERLAY_HANDLE_REPOSITION = "autofill-overlay-handle-reposition-event";
const AUTOFILL_OVERLAY_HANDLE_SCROLL = "autofill-overlay-handle-scroll-event";
const UPDATE_PASSKEYS_HEADINGS_ON_SCROLL = "update-passkeys-headings-on-scroll";
const AUTOFILL_TRIGGER_FORM_FIELD_SUBMIT = "autofill-trigger-form-field-submit";
const AutofillOverlayVisibility = {
    Off: 0,
    OnButtonClick: 1,
    OnFieldFocus: 2,
};
const BrowserClientVendors = {
    Chrome: "Chrome",
    Opera: "Opera",
    Edge: "Edge",
    Vivaldi: "Vivaldi",
    Unknown: "Unknown",
};
const BrowserShortcutsUris = {
    Chrome: "chrome://extensions/shortcuts",
    Opera: "opera://extensions/shortcuts",
    Edge: "edge://extensions/shortcuts",
    Vivaldi: "vivaldi://extensions/shortcuts",
    Unknown: "https://bitwarden.com/help/keyboard-shortcuts",
};
const DisablePasswordManagerUris = {
    Chrome: "chrome://settings/autofill",
    Opera: "opera://settings/autofill",
    Edge: "edge://settings/passwords",
    Vivaldi: "vivaldi://settings/autofill",
    Unknown: "https://bitwarden.com/help/disable-browser-autofill/",
};
const ExtensionCommand = {
    AutofillCommand: "autofill_cmd",
    AutofillCard: "autofill_card",
    AutofillIdentity: "autofill_identity",
    AutofillLogin: "autofill_login",
    OpenAutofillOverlay: "open_autofill_overlay",
    GeneratePassword: "generate_password",
    OpenPopup: "open_popup",
    LockVault: "lock_vault",
    NoopCommand: "noop",
};
const CLEAR_NOTIFICATION_LOGIN_DATA_DURATION = 60 * 1000; // 1 minute
const MAX_DEEP_QUERY_RECURSION_DEPTH = 4;



/***/ }),

/***/ "../../libs/common/src/autofill/constants/match-patterns.ts":
/*!******************************************************************!*\
  !*** ../../libs/common/src/autofill/constants/match-patterns.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardExpiryDateDelimiters: () => (/* binding */ CardExpiryDateDelimiters),
/* harmony export */   DelimiterPatternExpression: () => (/* binding */ DelimiterPatternExpression),
/* harmony export */   ExpiryDateDelimitersPattern: () => (/* binding */ ExpiryDateDelimitersPattern),
/* harmony export */   ExpiryFullYearPattern: () => (/* binding */ ExpiryFullYearPattern),
/* harmony export */   ExpiryFullYearPatternExpression: () => (/* binding */ ExpiryFullYearPatternExpression),
/* harmony export */   IrrelevantExpiryCharactersPatternExpression: () => (/* binding */ IrrelevantExpiryCharactersPatternExpression),
/* harmony export */   MonthPattern: () => (/* binding */ MonthPattern),
/* harmony export */   MonthPatternExpression: () => (/* binding */ MonthPatternExpression)
/* harmony export */ });
const CardExpiryDateDelimiters = ["/", "-", ".", " "];
// `CardExpiryDateDelimiters` is not intended solely for regex consumption,
// so we need to format it here
const ExpiryDateDelimitersPattern = "\\" +
    CardExpiryDateDelimiters.join("\\")
        // replace space character with the regex whitespace character class
        .replace(" ", "s");
const MonthPattern = "(([1]{1}[0-2]{1})|(0?[1-9]{1}))";
// Because we're dealing with expiry dates, we assume the year will be in current or next century (as of 2024)
const ExpiryFullYearPattern = "2[0-1]{1}\\d{2}";
const DelimiterPatternExpression = new RegExp(`[${ExpiryDateDelimitersPattern}]`, "g");
const IrrelevantExpiryCharactersPatternExpression = new RegExp(
// "nor digits" to ensure numbers are removed from guidance pattern, which aren't covered by ^\w
`[^\\d${ExpiryDateDelimitersPattern}]`, "g");
const MonthPatternExpression = new RegExp(`^${MonthPattern}$`);
const ExpiryFullYearPatternExpression = new RegExp(`^${ExpiryFullYearPattern}$`);


/***/ }),

/***/ "../../libs/common/src/autofill/utils.ts":
/*!***********************************************!*\
  !*** ../../libs/common/src/autofill/utils.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCardExpired: () => (/* binding */ isCardExpired),
/* harmony export */   isUrlInList: () => (/* binding */ isUrlInList),
/* harmony export */   normalizeExpiryYearFormat: () => (/* binding */ normalizeExpiryYearFormat),
/* harmony export */   parseYearMonthExpiry: () => (/* binding */ parseYearMonthExpiry)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../../libs/common/src/autofill/constants/index.ts");


/**
 * Takes a string or number value and returns a string value formatted as a valid 4-digit year
 *
 * @param {(string | number)} yearInput
 * @return {*}  {(Year | null)}
 */
function normalizeExpiryYearFormat(yearInput) {
    // The input[type="number"] is returning a number, convert it to a string
    // An empty field returns null, avoid casting `"null"` to a string
    const yearInputIsEmpty = yearInput == null || yearInput === "";
    let expirationYear = yearInputIsEmpty ? null : `${yearInput}`;
    // Exit early if year is already formatted correctly or empty
    if (yearInputIsEmpty || (expirationYear && /^[1-9]{1}\d{3}$/.test(expirationYear))) {
        return expirationYear;
    }
    expirationYear = (expirationYear || "")
        // For safety, because even input[type="number"] will allow decimals
        .replace(/[^\d]/g, "")
        // remove any leading zero padding (leave the last leading zero if it ends the string)
        .replace(/^[0]+(?=.)/, "");
    if (expirationYear === "") {
        expirationYear = null;
    }
    // given the context of payment card expiry, a year character length of 3, or over 4
    // is more likely to be a mistake than an intentional value for the far past or far future.
    if (expirationYear && expirationYear.length !== 4) {
        const paddedYear = ("00" + expirationYear).slice(-2);
        const currentCentury = `${new Date().getFullYear()}`.slice(0, 2);
        expirationYear = currentCentury + paddedYear;
    }
    return expirationYear;
}
/**
 * Takes a cipher card view and returns "true" if the month and year affirmativey indicate
 * the card is expired. Uncertain cases return "false".
 *
 * @param {CardView} cipherCard
 * @return {*}  {boolean}
 */
function isCardExpired(cipherCard) {
    if (cipherCard) {
        const { expMonth = null, expYear = null } = cipherCard;
        if (!expYear) {
            return false;
        }
        const now = new Date();
        const normalizedYear = normalizeExpiryYearFormat(expYear);
        const parsedYear = normalizedYear ? parseInt(normalizedYear, 10) : NaN;
        const expiryYearIsBeforeCurrentYear = parsedYear < now.getFullYear();
        const expiryYearIsAfterCurrentYear = parsedYear > now.getFullYear();
        // If the expiry year is before the current year, skip checking the month, since it must be expired
        if (normalizedYear && expiryYearIsBeforeCurrentYear) {
            return true;
        }
        // If the expiry year is after the current year, skip checking the month, since it cannot be expired
        if (normalizedYear && expiryYearIsAfterCurrentYear) {
            return false;
        }
        if (normalizedYear && expMonth) {
            const parsedMonthInteger = parseInt(expMonth, 10);
            const parsedMonthIsValid = parsedMonthInteger && !isNaN(parsedMonthInteger);
            // If the parsed month value is 0, we don't know when the expiry passes this year, so do not treat it as expired
            if (!parsedMonthIsValid) {
                return false;
            }
            // `Date` months are zero-indexed
            const parsedMonth = parsedMonthInteger - 1;
            // First day of the next month
            const cardExpiry = new Date(parsedYear, parsedMonth + 1, 1);
            return cardExpiry <= now;
        }
    }
    return false;
}
/**
 * Attempt to split a string into date segments on the basis of expected formats and delimiter symbols.
 *
 * @param {string} combinedExpiryValue
 * @return {*}  {string[]}
 */
function splitCombinedDateValues(combinedExpiryValue) {
    var _a;
    let sanitizedValue = combinedExpiryValue
        .replace(_constants__WEBPACK_IMPORTED_MODULE_1__.IrrelevantExpiryCharactersPatternExpression, "")
        .trim();
    // Do this after initial value replace to avoid identifying leading whitespace as delimiter
    const parsedDelimiter = ((_a = sanitizedValue.match(_constants__WEBPACK_IMPORTED_MODULE_1__.DelimiterPatternExpression)) === null || _a === void 0 ? void 0 : _a[0]) || null;
    let dateParts = [sanitizedValue];
    if (parsedDelimiter === null || parsedDelimiter === void 0 ? void 0 : parsedDelimiter.length) {
        // If the parsed delimiter is a whitespace character, assign 's' (character class) instead
        const delimiterPattern = /\s/.test(parsedDelimiter) ? "\\s" : "\\" + parsedDelimiter;
        sanitizedValue = sanitizedValue
            // Remove all other delimiter characters not identified as the delimiter
            .replace(new RegExp(`[^\\d${delimiterPattern}]`, "g"), "")
            // Also de-dupe the delimiter character
            .replace(new RegExp(`[${delimiterPattern}]{2,}`, "g"), parsedDelimiter);
        dateParts = sanitizedValue.split(parsedDelimiter);
    }
    return (dateParts
        // remove values that have no length
        .filter((splitValue) => splitValue === null || splitValue === void 0 ? void 0 : splitValue.length));
}
/**
 * Given an array of split card expiry date parts,
 * returns an array of those values ordered by year then month
 *
 * @param {string[]} splitDateInput
 * @return {*}  {([string | null, string | null])}
 */
function parseDelimitedYearMonthExpiry([firstPart, secondPart]) {
    // Conditionals here are structured to avoid unnecessary evaluations and are ordered
    // from more authoritative checks to checks yielding increasingly inferred conclusions
    // If a 4-digit value is found (when there are multiple parts), it can't be month
    if (_constants__WEBPACK_IMPORTED_MODULE_1__.ExpiryFullYearPatternExpression.test(firstPart)) {
        return [firstPart, secondPart];
    }
    // If a 4-digit value is found (when there are multiple parts), it can't be month
    if (_constants__WEBPACK_IMPORTED_MODULE_1__.ExpiryFullYearPatternExpression.test(secondPart)) {
        return [secondPart, firstPart];
    }
    // If it's a two digit value that doesn't match against month pattern, assume it's a year
    if (/\d{2}/.test(firstPart) && !_constants__WEBPACK_IMPORTED_MODULE_1__.MonthPatternExpression.test(firstPart)) {
        return [firstPart, secondPart];
    }
    // If it's a two digit value that doesn't match against month pattern, assume it's a year
    if (/\d{2}/.test(secondPart) && !_constants__WEBPACK_IMPORTED_MODULE_1__.MonthPatternExpression.test(secondPart)) {
        return [secondPart, firstPart];
    }
    // Values are too ambiguous (e.g. "12/09"). For the most part,
    // a month-looking value likely is, at the time of writing (year 2024).
    let parsedYear = firstPart;
    let parsedMonth = secondPart;
    if (_constants__WEBPACK_IMPORTED_MODULE_1__.MonthPatternExpression.test(firstPart)) {
        parsedYear = secondPart;
        parsedMonth = firstPart;
    }
    return [parsedYear, parsedMonth];
}
/**
 * Given a single string of integers, attempts to identify card expiry date portions within
 * and return values ordered by year then month
 *
 * @param {string} dateInput
 * @return {*}  {([string | null, string | null])}
 */
function parseNonDelimitedYearMonthExpiry(dateInput) {
    if (dateInput.length > 4) {
        // e.g.
        // "052024"
        // "202405"
        // "20245"
        // "52024"
        // If the value is over 5-characters long, it likely has a full year format in it
        const [parsedYear, parsedMonth] = dateInput
            .split(new RegExp(`(?=${_constants__WEBPACK_IMPORTED_MODULE_1__.ExpiryFullYearPattern})|(?<=${_constants__WEBPACK_IMPORTED_MODULE_1__.ExpiryFullYearPattern})`, "g"))
            .sort((current, next) => (current.length > next.length ? -1 : 1));
        return [parsedYear, parsedMonth];
    }
    if (dateInput.length === 4) {
        // e.g.
        // "0524"
        // "2405"
        // If the `sanitizedFirstPart` value is a length of 4, it must be split in half, since
        // neither a year or month will be represented with three characters
        const splitFirstPartFirstHalf = dateInput.slice(0, 2);
        const splitFirstPartSecondHalf = dateInput.slice(-2);
        let parsedYear = splitFirstPartSecondHalf;
        let parsedMonth = splitFirstPartFirstHalf;
        // If the first part doesn't match a month pattern, assume it's a year
        if (!_constants__WEBPACK_IMPORTED_MODULE_1__.MonthPatternExpression.test(splitFirstPartFirstHalf)) {
            parsedYear = splitFirstPartFirstHalf;
            parsedMonth = splitFirstPartSecondHalf;
        }
        return [parsedYear, parsedMonth];
    }
    // e.g.
    // "245"
    // "202"
    // "212"
    // "022"
    // "111"
    // A valid year representation here must be two characters so try to find it first.
    let parsedYear = null;
    let parsedMonth = null;
    // Split if there is a digit with a leading zero
    const splitFirstPartOnLeadingZero = dateInput.split(/(?<=0[1-9]{1})|(?=0[1-9]{1})/);
    // Assume a leading zero indicates a month in ambiguous cases (e.g. "202"), since we're
    // dealing with expiry dates and the next two-digit year with a leading zero will be 2100
    if (splitFirstPartOnLeadingZero.length > 1) {
        parsedYear = splitFirstPartOnLeadingZero[0];
        parsedMonth = splitFirstPartOnLeadingZero[1];
        if (splitFirstPartOnLeadingZero[0].startsWith("0")) {
            parsedMonth = splitFirstPartOnLeadingZero[0];
            parsedYear = splitFirstPartOnLeadingZero[1];
        }
    }
    else {
        // Here, a year has to be two-digits, and a month can't be more than one, so assume the first two digits that are greater than the current year is the year representation.
        parsedYear = dateInput.slice(0, 2);
        parsedMonth = dateInput.slice(-1);
        const currentYear = new Date().getFullYear();
        const normalizedYearFormat = normalizeExpiryYearFormat(parsedYear);
        const normalizedParsedYear = normalizedYearFormat && parseInt(normalizedYearFormat, 10);
        const normalizedExpiryYearFormat = normalizeExpiryYearFormat(dateInput.slice(-2));
        const normalizedParsedYearAlternative = normalizedExpiryYearFormat && parseInt(normalizedExpiryYearFormat, 10);
        if (normalizedParsedYear &&
            normalizedParsedYear < currentYear &&
            normalizedParsedYearAlternative &&
            normalizedParsedYearAlternative >= currentYear) {
            parsedYear = dateInput.slice(-2);
            parsedMonth = dateInput.slice(0, 1);
        }
    }
    return [parsedYear, parsedMonth];
}
/**
 * Attempt to parse year and month parts of a combined expiry date value.
 *
 * @param {string} combinedExpiryValue
 * @return {*}  {([string | null, string | null])}
 */
function parseYearMonthExpiry(combinedExpiryValue) {
    var _a, _b;
    let parsedYear = null;
    let parsedMonth = null;
    const dateParts = splitCombinedDateValues(combinedExpiryValue);
    if (dateParts.length < 1) {
        return [null, null];
    }
    const sanitizedFirstPart = ((_a = dateParts[0]) === null || _a === void 0 ? void 0 : _a.replace(_constants__WEBPACK_IMPORTED_MODULE_1__.IrrelevantExpiryCharactersPatternExpression, "")) || "";
    const sanitizedSecondPart = ((_b = dateParts[1]) === null || _b === void 0 ? void 0 : _b.replace(_constants__WEBPACK_IMPORTED_MODULE_1__.IrrelevantExpiryCharactersPatternExpression, "")) || "";
    // If there is only one date part, no delimiter was found in the passed value
    if (dateParts.length === 1) {
        const [parsedNonDelimitedYear, parsedNonDelimitedMonth] = parseNonDelimitedYearMonthExpiry(sanitizedFirstPart);
        parsedYear = parsedNonDelimitedYear;
        parsedMonth = parsedNonDelimitedMonth;
    }
    // There are multiple date parts
    else {
        const [parsedDelimitedYear, parsedDelimitedMonth] = parseDelimitedYearMonthExpiry([
            sanitizedFirstPart,
            sanitizedSecondPart,
        ]);
        parsedYear = parsedDelimitedYear;
        parsedMonth = parsedDelimitedMonth;
    }
    const normalizedParsedYear = parsedYear ? normalizeExpiryYearFormat(parsedYear) : null;
    const normalizedParsedMonth = parsedMonth === null || parsedMonth === void 0 ? void 0 : parsedMonth.replace(/^0+/, "").slice(0, 2);
    // Set "empty" values to null
    parsedYear = (normalizedParsedYear === null || normalizedParsedYear === void 0 ? void 0 : normalizedParsedYear.length) ? normalizedParsedYear : null;
    parsedMonth = (normalizedParsedMonth === null || normalizedParsedMonth === void 0 ? void 0 : normalizedParsedMonth.length) ? normalizedParsedMonth : null;
    return [parsedYear, parsedMonth];
}
/**
 * Takes a URL string and a NeverDomains object and determines if the passed URL's hostname is in `urlList`
 *
 * @param {string} url - representation of URL to check
 * @param {NeverDomains} urlList - object with hostname key names
 */
function isUrlInList(url = "", urlList = {}) {
    const urlListKeys = urlList && Object.keys(urlList);
    if (urlListKeys.length && (url === null || url === void 0 ? void 0 : url.length)) {
        let tabHostname;
        try {
            tabHostname = _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getHostname(url);
        }
        catch (_a) {
            // If the input was invalid, exit early and return false
            return false;
        }
        if (tabHostname) {
            return urlListKeys.some((blockedHostname) => tabHostname.endsWith(blockedHostname));
        }
    }
    return false;
}


/***/ }),

/***/ "../../libs/common/src/enums/feature-flag.enum.ts":
/*!********************************************************!*\
  !*** ../../libs/common/src/enums/feature-flag.enum.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultFeatureFlagValue: () => (/* binding */ DefaultFeatureFlagValue),
/* harmony export */   FeatureFlag: () => (/* binding */ FeatureFlag),
/* harmony export */   getFeatureFlagValue: () => (/* binding */ getFeatureFlagValue)
/* harmony export */ });
/**
 * Feature flags.
 *
 * Flags MUST be short lived and SHALL be removed once enabled.
 *
 * Flags should be grouped by team to have visibility of ownership and cleanup.
 */
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var FeatureFlag;
(function (FeatureFlag) {
    /* Admin Console Team */
    FeatureFlag["SeparateCustomRolePermissions"] = "pm-19917-separate-custom-role-permissions";
    FeatureFlag["CreateDefaultLocation"] = "pm-19467-create-default-location";
    /* Auth */
    FeatureFlag["PM16117_SetInitialPasswordRefactor"] = "pm-16117-set-initial-password-refactor";
    FeatureFlag["PM16117_ChangeExistingPasswordRefactor"] = "pm-16117-change-existing-password-refactor";
    FeatureFlag["PM9115_TwoFactorExtensionDataPersistence"] = "pm-9115-two-factor-extension-data-persistence";
    FeatureFlag["PM14938_BrowserExtensionLoginApproval"] = "pm-14938-browser-extension-login-approvals";
    /* Autofill */
    FeatureFlag["BlockBrowserInjectionsByDomain"] = "block-browser-injections-by-domain";
    FeatureFlag["EnableNewCardCombinedExpiryAutofill"] = "enable-new-card-combined-expiry-autofill";
    FeatureFlag["NotificationRefresh"] = "notification-refresh";
    FeatureFlag["UseTreeWalkerApiForPageDetailsCollection"] = "use-tree-walker-api-for-page-details-collection";
    FeatureFlag["MacOsNativeCredentialSync"] = "macos-native-credential-sync";
    /* Billing */
    FeatureFlag["TrialPaymentOptional"] = "PM-8163-trial-payment";
    FeatureFlag["PM12276_BreadcrumbEventLogs"] = "pm-12276-breadcrumbing-for-business-features";
    FeatureFlag["PM17772_AdminInitiatedSponsorships"] = "pm-17772-admin-initiated-sponsorships";
    FeatureFlag["PM19956_RequireProviderPaymentMethodDuringSetup"] = "pm-19956-require-provider-payment-method-during-setup";
    FeatureFlag["UseOrganizationWarningsService"] = "use-organization-warnings-service";
    FeatureFlag["AllowTrialLengthZero"] = "pm-20322-allow-trial-length-0";
    /* Data Insights and Reporting */
    FeatureFlag["EnableRiskInsightsNotifications"] = "enable-risk-insights-notifications";
    /* Key Management */
    FeatureFlag["PrivateKeyRegeneration"] = "pm-12241-private-key-regeneration";
    FeatureFlag["PM4154_BulkEncryptionService"] = "PM-4154-bulk-encryption-service";
    FeatureFlag["UseSDKForDecryption"] = "use-sdk-for-decryption";
    FeatureFlag["PM17987_BlockType0"] = "pm-17987-block-type-0";
    FeatureFlag["EnrollAeadOnKeyRotation"] = "enroll-aead-on-key-rotation";
    /* Tools */
    FeatureFlag["DesktopSendUIRefresh"] = "desktop-send-ui-refresh";
    /* Vault */
    FeatureFlag["PM8851_BrowserOnboardingNudge"] = "pm-8851-browser-onboarding-nudge";
    FeatureFlag["PM9111ExtensionPersistAddEditForm"] = "pm-9111-extension-persist-add-edit-form";
    FeatureFlag["PM19941MigrateCipherDomainToSdk"] = "pm-19941-migrate-cipher-domain-to-sdk";
    FeatureFlag["CipherKeyEncryption"] = "cipher-key-encryption";
    FeatureFlag["PM18520_UpdateDesktopCipherForm"] = "pm-18520-desktop-cipher-forms";
    FeatureFlag["EndUserNotifications"] = "pm-10609-end-user-notifications";
    FeatureFlag["RemoveCardItemTypePolicy"] = "pm-16442-remove-card-item-type-policy";
    FeatureFlag["PM19315EndUserActivationMvp"] = "pm-19315-end-user-activation-mvp";
    /* Platform */
    FeatureFlag["IpcChannelFramework"] = "ipc-channel-framework";
})(FeatureFlag || (FeatureFlag = {}));
// Helper to ensure the value is treated as a boolean.
const FALSE = false;
/**
 * Default value for feature flags.
 *
 * DO NOT enable previously disabled flags, REMOVE them instead.
 * We support true as a value as we prefer flags to "enable" not "disable".
 *
 * Flags should be grouped by team to have visibility of ownership and cleanup.
 */
const DefaultFeatureFlagValue = {
    /* Admin Console Team */
    [FeatureFlag.SeparateCustomRolePermissions]: FALSE,
    [FeatureFlag.CreateDefaultLocation]: FALSE,
    /* Autofill */
    [FeatureFlag.BlockBrowserInjectionsByDomain]: FALSE,
    [FeatureFlag.EnableNewCardCombinedExpiryAutofill]: FALSE,
    [FeatureFlag.NotificationRefresh]: FALSE,
    [FeatureFlag.UseTreeWalkerApiForPageDetailsCollection]: FALSE,
    [FeatureFlag.MacOsNativeCredentialSync]: FALSE,
    /* Data Insights and Reporting */
    [FeatureFlag.EnableRiskInsightsNotifications]: FALSE,
    /* Tools */
    [FeatureFlag.DesktopSendUIRefresh]: FALSE,
    /* Vault */
    [FeatureFlag.PM8851_BrowserOnboardingNudge]: FALSE,
    [FeatureFlag.PM9111ExtensionPersistAddEditForm]: FALSE,
    [FeatureFlag.CipherKeyEncryption]: FALSE,
    [FeatureFlag.PM18520_UpdateDesktopCipherForm]: FALSE,
    [FeatureFlag.EndUserNotifications]: FALSE,
    [FeatureFlag.PM19941MigrateCipherDomainToSdk]: FALSE,
    [FeatureFlag.RemoveCardItemTypePolicy]: FALSE,
    [FeatureFlag.PM19315EndUserActivationMvp]: FALSE,
    /* Auth */
    [FeatureFlag.PM16117_SetInitialPasswordRefactor]: FALSE,
    [FeatureFlag.PM16117_ChangeExistingPasswordRefactor]: FALSE,
    [FeatureFlag.PM9115_TwoFactorExtensionDataPersistence]: FALSE,
    [FeatureFlag.PM14938_BrowserExtensionLoginApproval]: FALSE,
    /* Billing */
    [FeatureFlag.TrialPaymentOptional]: FALSE,
    [FeatureFlag.PM12276_BreadcrumbEventLogs]: FALSE,
    [FeatureFlag.PM17772_AdminInitiatedSponsorships]: FALSE,
    [FeatureFlag.PM19956_RequireProviderPaymentMethodDuringSetup]: FALSE,
    [FeatureFlag.UseOrganizationWarningsService]: FALSE,
    [FeatureFlag.AllowTrialLengthZero]: FALSE,
    /* Key Management */
    [FeatureFlag.PrivateKeyRegeneration]: FALSE,
    [FeatureFlag.PM4154_BulkEncryptionService]: FALSE,
    [FeatureFlag.UseSDKForDecryption]: FALSE,
    [FeatureFlag.PM17987_BlockType0]: FALSE,
    [FeatureFlag.EnrollAeadOnKeyRotation]: FALSE,
    /* Platform */
    [FeatureFlag.IpcChannelFramework]: FALSE,
};
function getFeatureFlagValue(serverConfig, flag) {
    if ((serverConfig === null || serverConfig === void 0 ? void 0 : serverConfig.featureStates) == null || serverConfig.featureStates[flag] == null) {
        return DefaultFeatureFlagValue[flag];
    }
    return serverConfig.featureStates[flag];
}


/***/ }),

/***/ "../../libs/common/src/enums/push-technology.enum.ts":
/*!***********************************************************!*\
  !*** ../../libs/common/src/enums/push-technology.enum.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushTechnology: () => (/* binding */ PushTechnology)
/* harmony export */ });
/**
 * The preferred push technology of the server.
 */
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PushTechnology;
(function (PushTechnology) {
    /**
     * Indicates that we should use SignalR over web sockets to receive push notifications from the server.
     */
    PushTechnology[PushTechnology["SignalR"] = 0] = "SignalR";
    /**
     * Indicatates that we should use WebPush to receive push notifications from the server.
     */
    PushTechnology[PushTechnology["WebPush"] = 1] = "WebPush";
})(PushTechnology || (PushTechnology = {}));


/***/ }),

/***/ "../../libs/common/src/key-management/crypto/services/encrypt.service.implementation.ts":
/*!**********************************************************************************************!*\
  !*** ../../libs/common/src/key-management/crypto/services/encrypt.service.implementation.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncryptServiceImplementation: () => (/* binding */ EncryptServiceImplementation)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _bitwarden_common_platform_models_domain_enc_array_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/models/domain/enc-array-buffer */ "../../libs/common/src/platform/models/domain/enc-array-buffer.ts");
/* harmony import */ var _bitwarden_common_platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _bitwarden_common_platform_models_domain_encrypted_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/models/domain/encrypted-object */ "../../libs/common/src/platform/models/domain/encrypted-object.ts");
/* harmony import */ var _bitwarden_common_platform_models_domain_symmetric_crypto_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/platform/models/domain/symmetric-crypto-key */ "../../libs/common/src/platform/models/domain/symmetric-crypto-key.ts");
/* harmony import */ var _bitwarden_sdk_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/sdk-internal */ "../../node_modules/@bitwarden/sdk-internal/bitwarden_wasm_internal_bg.js");
/* harmony import */ var _enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../enums/feature-flag.enum */ "../../libs/common/src/enums/feature-flag.enum.ts");
/* harmony import */ var _platform_abstractions_sdk_sdk_load_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../platform/abstractions/sdk/sdk-load.service */ "../../libs/common/src/platform/abstractions/sdk/sdk-load.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









class EncryptServiceImplementation {
    constructor(cryptoFunctionService, logService, logMacFailures) {
        this.cryptoFunctionService = cryptoFunctionService;
        this.logService = logService;
        this.logMacFailures = logMacFailures;
        this.useSDKForDecryption = _enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_6__.DefaultFeatureFlagValue[_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_6__.FeatureFlag.UseSDKForDecryption];
        this.blockType0 = _enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_6__.DefaultFeatureFlagValue[_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_6__.FeatureFlag.PM17987_BlockType0];
    }
    // Proxy functions; Their implementation are temporary before moving at this level to the SDK
    encryptString(plainValue, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.encrypt(plainValue, key);
        });
    }
    encryptBytes(plainValue, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.encrypt(plainValue, key);
        });
    }
    encryptFileData(plainValue, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.encryptToBytes(plainValue, key);
        });
    }
    decryptString(encString, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.decryptToUtf8(encString, key);
        });
    }
    decryptBytes(encString, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.decryptToBytes(encString, key);
        });
    }
    decryptFileData(encBuffer, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.decryptToBytes(encBuffer, key);
        });
    }
    wrapDecapsulationKey(decapsulationKeyPkcs8, wrappingKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (decapsulationKeyPkcs8 == null) {
                throw new Error("No decapsulation key provided for wrapping.");
            }
            if (wrappingKey == null) {
                throw new Error("No wrappingKey provided for wrapping.");
            }
            return yield this.encryptUint8Array(decapsulationKeyPkcs8, wrappingKey);
        });
    }
    wrapEncapsulationKey(encapsulationKeySpki, wrappingKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (encapsulationKeySpki == null) {
                throw new Error("No encapsulation key provided for wrapping.");
            }
            if (wrappingKey == null) {
                throw new Error("No wrappingKey provided for wrapping.");
            }
            return yield this.encryptUint8Array(encapsulationKeySpki, wrappingKey);
        });
    }
    wrapSymmetricKey(keyToBeWrapped, wrappingKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (keyToBeWrapped == null) {
                throw new Error("No keyToBeWrapped provided for wrapping.");
            }
            if (wrappingKey == null) {
                throw new Error("No wrappingKey provided for wrapping.");
            }
            return yield this.encryptUint8Array(keyToBeWrapped.toEncoded(), wrappingKey);
        });
    }
    unwrapDecapsulationKey(wrappedDecapsulationKey, wrappingKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.decryptBytes(wrappedDecapsulationKey, wrappingKey);
        });
    }
    unwrapEncapsulationKey(wrappedEncapsulationKey, wrappingKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.decryptBytes(wrappedEncapsulationKey, wrappingKey);
        });
    }
    unwrapSymmetricKey(keyToBeUnwrapped, wrappingKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return new _bitwarden_common_platform_models_domain_symmetric_crypto_key__WEBPACK_IMPORTED_MODULE_5__.SymmetricCryptoKey(yield this.decryptBytes(keyToBeUnwrapped, wrappingKey));
        });
    }
    hash(value, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashArray = yield this.cryptoFunctionService.hash(value, algorithm);
            return _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromBufferToB64(hashArray);
        });
    }
    // Handle updating private properties to turn on/off feature flags.
    onServerConfigChange(newConfig) {
        const oldFlagValue = this.useSDKForDecryption;
        this.useSDKForDecryption = (0,_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_6__.getFeatureFlagValue)(newConfig, _enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_6__.FeatureFlag.UseSDKForDecryption);
        this.logService.debug("[EncryptService] Updated sdk decryption flag", oldFlagValue, this.useSDKForDecryption);
        this.blockType0 = (0,_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_6__.getFeatureFlagValue)(newConfig, _enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_6__.FeatureFlag.PM17987_BlockType0);
    }
    encrypt(plainValue, key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (key == null) {
                throw new Error("No encryption key provided.");
            }
            if (this.blockType0) {
                if (key.inner().type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_B64) {
                    throw new Error("Type 0 encryption is not supported.");
                }
            }
            if (plainValue == null) {
                return Promise.resolve(null);
            }
            if (typeof plainValue === "string") {
                return this.encryptUint8Array(_bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromUtf8ToArray(plainValue), key);
            }
            else {
                return this.encryptUint8Array(plainValue, key);
            }
        });
    }
    encryptUint8Array(plainValue, key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (key == null) {
                throw new Error("No encryption key provided.");
            }
            if (this.blockType0) {
                if (key.inner().type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_B64) {
                    throw new Error("Type 0 encryption is not supported.");
                }
            }
            if (plainValue == null) {
                return Promise.resolve(null);
            }
            const innerKey = key.inner();
            if (innerKey.type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_HmacSha256_B64) {
                const encObj = yield this.aesEncrypt(plainValue, innerKey);
                const iv = _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromBufferToB64(encObj.iv);
                const data = _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromBufferToB64(encObj.data);
                const mac = _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromBufferToB64(encObj.mac);
                return new _bitwarden_common_platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_3__.EncString(innerKey.type, data, iv, mac);
            }
            else if (innerKey.type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_B64) {
                const encObj = yield this.aesEncryptLegacy(plainValue, innerKey);
                const iv = _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromBufferToB64(encObj.iv);
                const data = _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromBufferToB64(encObj.data);
                return new _bitwarden_common_platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_3__.EncString(innerKey.type, data, iv);
            }
        });
    }
    encryptToBytes(plainValue, key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (key == null) {
                throw new Error("No encryption key provided.");
            }
            if (this.blockType0) {
                if (key.inner().type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_B64) {
                    throw new Error("Type 0 encryption is not supported.");
                }
            }
            const innerKey = key.inner();
            if (innerKey.type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_HmacSha256_B64) {
                const encValue = yield this.aesEncrypt(plainValue, innerKey);
                const macLen = encValue.mac.length;
                const encBytes = new Uint8Array(1 + encValue.iv.byteLength + macLen + encValue.data.byteLength);
                encBytes.set([innerKey.type]);
                encBytes.set(new Uint8Array(encValue.iv), 1);
                encBytes.set(new Uint8Array(encValue.mac), 1 + encValue.iv.byteLength);
                encBytes.set(new Uint8Array(encValue.data), 1 + encValue.iv.byteLength + macLen);
                return new _bitwarden_common_platform_models_domain_enc_array_buffer__WEBPACK_IMPORTED_MODULE_2__.EncArrayBuffer(encBytes);
            }
            else if (innerKey.type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_B64) {
                const encValue = yield this.aesEncryptLegacy(plainValue, innerKey);
                const encBytes = new Uint8Array(1 + encValue.iv.byteLength + encValue.data.byteLength);
                encBytes.set([innerKey.type]);
                encBytes.set(new Uint8Array(encValue.iv), 1);
                encBytes.set(new Uint8Array(encValue.data), 1 + encValue.iv.byteLength);
                return new _bitwarden_common_platform_models_domain_enc_array_buffer__WEBPACK_IMPORTED_MODULE_2__.EncArrayBuffer(encBytes);
            }
        });
    }
    decryptToUtf8(encString_1, key_1) {
        return __awaiter(this, arguments, void 0, function* (encString, key, decryptContext = "no context") {
            if (this.useSDKForDecryption) {
                this.logService.debug("decrypting with SDK");
                if (encString == null || encString.encryptedString == null) {
                    throw new Error("encString is null or undefined");
                }
                yield _platform_abstractions_sdk_sdk_load_service__WEBPACK_IMPORTED_MODULE_7__.SdkLoadService.Ready;
                return _bitwarden_sdk_internal__WEBPACK_IMPORTED_MODULE_8__.PureCrypto.symmetric_decrypt(encString.encryptedString, key.toEncoded());
            }
            this.logService.debug("decrypting with javascript");
            if (key == null) {
                throw new Error("No key provided for decryption.");
            }
            const innerKey = key.inner();
            if (encString.encryptionType !== innerKey.type) {
                this.logDecryptError("Key encryption type does not match payload encryption type", innerKey.type, encString.encryptionType, decryptContext);
                return null;
            }
            if (innerKey.type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_HmacSha256_B64) {
                const fastParams = this.cryptoFunctionService.aesDecryptFastParameters(encString.data, encString.iv, encString.mac, key);
                const computedMac = yield this.cryptoFunctionService.hmacFast(fastParams.macData, fastParams.macKey, "sha256");
                const macsEqual = yield this.cryptoFunctionService.compareFast(fastParams.mac, computedMac);
                if (!macsEqual) {
                    this.logMacFailed("decryptToUtf8 MAC comparison failed. Key or payload has changed.", innerKey.type, encString.encryptionType, decryptContext);
                    return null;
                }
                return yield this.cryptoFunctionService.aesDecryptFast({
                    mode: "cbc",
                    parameters: fastParams,
                });
            }
            else if (innerKey.type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_B64) {
                const fastParams = this.cryptoFunctionService.aesDecryptFastParameters(encString.data, encString.iv, undefined, key);
                return yield this.cryptoFunctionService.aesDecryptFast({
                    mode: "cbc",
                    parameters: fastParams,
                });
            }
            else {
                throw new Error(`Unsupported encryption type`);
            }
        });
    }
    decryptToBytes(encThing_1, key_1) {
        return __awaiter(this, arguments, void 0, function* (encThing, key, decryptContext = "no context") {
            if (this.useSDKForDecryption) {
                this.logService.debug("[EncryptService] Decrypting bytes with SDK");
                if (encThing.encryptionType == null ||
                    encThing.ivBytes == null ||
                    encThing.dataBytes == null) {
                    throw new Error("Cannot decrypt, missing type, IV, or data bytes.");
                }
                const buffer = _bitwarden_common_platform_models_domain_enc_array_buffer__WEBPACK_IMPORTED_MODULE_2__.EncArrayBuffer.fromParts(encThing.encryptionType, encThing.ivBytes, encThing.dataBytes, encThing.macBytes).buffer;
                yield _platform_abstractions_sdk_sdk_load_service__WEBPACK_IMPORTED_MODULE_7__.SdkLoadService.Ready;
                return _bitwarden_sdk_internal__WEBPACK_IMPORTED_MODULE_8__.PureCrypto.symmetric_decrypt_array_buffer(buffer, key.toEncoded());
            }
            this.logService.debug("[EncryptService] Decrypting bytes with javascript");
            if (key == null) {
                throw new Error("No encryption key provided.");
            }
            if (encThing == null) {
                throw new Error("Nothing provided for decryption.");
            }
            const inner = key.inner();
            if (encThing.encryptionType !== inner.type) {
                this.logDecryptError("Encryption key type mismatch", inner.type, encThing.encryptionType, decryptContext);
                return null;
            }
            if (inner.type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_HmacSha256_B64) {
                if (encThing.macBytes == null) {
                    this.logDecryptError("Mac missing", inner.type, encThing.encryptionType, decryptContext);
                    return null;
                }
                const macData = new Uint8Array(encThing.ivBytes.byteLength + encThing.dataBytes.byteLength);
                macData.set(new Uint8Array(encThing.ivBytes), 0);
                macData.set(new Uint8Array(encThing.dataBytes), encThing.ivBytes.byteLength);
                const computedMac = yield this.cryptoFunctionService.hmac(macData, inner.authenticationKey, "sha256");
                const macsMatch = yield this.cryptoFunctionService.compare(encThing.macBytes, computedMac);
                if (!macsMatch) {
                    this.logMacFailed("MAC comparison failed. Key or payload has changed.", inner.type, encThing.encryptionType, decryptContext);
                    return null;
                }
                return yield this.cryptoFunctionService.aesDecrypt(encThing.dataBytes, encThing.ivBytes, inner.encryptionKey, "cbc");
            }
            else if (inner.type === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_B64) {
                return yield this.cryptoFunctionService.aesDecrypt(encThing.dataBytes, encThing.ivBytes, inner.encryptionKey, "cbc");
            }
        });
    }
    encapsulateKeyUnsigned(sharedKey, encapsulationKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sharedKey == null) {
                throw new Error("No sharedKey provided for encapsulation");
            }
            return yield this.rsaEncrypt(sharedKey.toEncoded(), encapsulationKey);
        });
    }
    decapsulateKeyUnsigned(encryptedSharedKey, decapsulationKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyBytes = yield this.rsaDecrypt(encryptedSharedKey, decapsulationKey);
            return new _bitwarden_common_platform_models_domain_symmetric_crypto_key__WEBPACK_IMPORTED_MODULE_5__.SymmetricCryptoKey(keyBytes);
        });
    }
    /**
     * @deprecated Replaced by BulkEncryptService (PM-4154)
     */
    decryptItems(items, key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (items == null || items.length < 1) {
                return [];
            }
            // don't use promise.all because this task is not io bound
            const results = [];
            for (let i = 0; i < items.length; i++) {
                results.push(yield items[i].decrypt(key));
            }
            return results;
        });
    }
    aesEncrypt(data, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = new _bitwarden_common_platform_models_domain_encrypted_object__WEBPACK_IMPORTED_MODULE_4__.EncryptedObject();
            obj.iv = yield this.cryptoFunctionService.randomBytes(16);
            obj.data = yield this.cryptoFunctionService.aesEncrypt(data, obj.iv, key.encryptionKey);
            const macData = new Uint8Array(obj.iv.byteLength + obj.data.byteLength);
            macData.set(new Uint8Array(obj.iv), 0);
            macData.set(new Uint8Array(obj.data), obj.iv.byteLength);
            obj.mac = yield this.cryptoFunctionService.hmac(macData, key.authenticationKey, "sha256");
            return obj;
        });
    }
    /**
     * @deprecated Removed once AesCbc256_B64 support is removed
     */
    aesEncryptLegacy(data, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = new _bitwarden_common_platform_models_domain_encrypted_object__WEBPACK_IMPORTED_MODULE_4__.EncryptedObject();
            obj.iv = yield this.cryptoFunctionService.randomBytes(16);
            obj.data = yield this.cryptoFunctionService.aesEncrypt(data, obj.iv, key.encryptionKey);
            return obj;
        });
    }
    logDecryptError(msg, keyEncType, dataEncType, decryptContext) {
        this.logService.error(`[Encrypt service] ${msg} Key type ${(0,_bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.encryptionTypeToString)(keyEncType)} Payload type ${(0,_bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.encryptionTypeToString)(dataEncType)} Decrypt context: ${decryptContext}`);
    }
    logMacFailed(msg, keyEncType, dataEncType, decryptContext) {
        if (this.logMacFailures) {
            this.logDecryptError(msg, keyEncType, dataEncType, decryptContext);
        }
    }
    rsaEncrypt(data, publicKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data == null) {
                throw new Error("No data provided for encryption.");
            }
            if (publicKey == null) {
                throw new Error("No public key provided for encryption.");
            }
            const encrypted = yield this.cryptoFunctionService.rsaEncrypt(data, publicKey, "sha1");
            return new _bitwarden_common_platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_3__.EncString(_bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.Rsa2048_OaepSha1_B64, _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromBufferToB64(encrypted));
        });
    }
    rsaDecrypt(data, privateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data == null) {
                throw new Error("[Encrypt service] rsaDecrypt: No data provided for decryption.");
            }
            let algorithm;
            switch (data.encryptionType) {
                case _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.Rsa2048_OaepSha1_B64:
                case _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.Rsa2048_OaepSha1_HmacSha256_B64:
                    algorithm = "sha1";
                    break;
                case _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.Rsa2048_OaepSha256_B64:
                case _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.Rsa2048_OaepSha256_HmacSha256_B64:
                    algorithm = "sha256";
                    break;
                default:
                    throw new Error("Invalid encryption type.");
            }
            if (privateKey == null) {
                throw new Error("[Encrypt service] rsaDecrypt: No private key provided for decryption.");
            }
            return this.cryptoFunctionService.rsaDecrypt(data.dataBytes, privateKey, algorithm);
        });
    }
}


/***/ }),

/***/ "../../libs/common/src/key-management/crypto/services/encrypt.worker.ts":
/*!******************************************************************************!*\
  !*** ../../libs/common/src/key-management/crypto/services/encrypt.worker.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _platform_abstractions_config_server_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/abstractions/config/server-config */ "../../libs/common/src/platform/abstractions/config/server-config.ts");
/* harmony import */ var _platform_models_domain_symmetric_crypto_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/symmetric-crypto-key */ "../../libs/common/src/platform/models/domain/symmetric-crypto-key.ts");
/* harmony import */ var _platform_services_console_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../platform/services/console-log.service */ "../../libs/common/src/platform/services/console-log.service.ts");
/* harmony import */ var _platform_services_container_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../platform/services/container.service */ "../../libs/common/src/platform/services/container.service.ts");
/* harmony import */ var _platform_services_cryptography_get_class_initializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../platform/services/cryptography/get-class-initializer */ "../../libs/common/src/platform/services/cryptography/get-class-initializer.ts");
/* harmony import */ var _types_worker_command_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/worker-command.type */ "../../libs/common/src/key-management/crypto/types/worker-command.type.ts");
/* harmony import */ var _encrypt_service_implementation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encrypt.service.implementation */ "../../libs/common/src/key-management/crypto/services/encrypt.service.implementation.ts");
/* harmony import */ var _web_crypto_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-crypto-function.service */ "../../libs/common/src/key-management/crypto/services/web-crypto-function.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const workerApi = self;
let inited = false;
let encryptService;
let logService;
/**
 * Bootstrap the worker environment with services required for decryption
 */
function init() {
    const cryptoFunctionService = new _web_crypto_function_service__WEBPACK_IMPORTED_MODULE_7__.WebCryptoFunctionService(self);
    logService = new _platform_services_console_log_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleLogService(false);
    encryptService = new _encrypt_service_implementation__WEBPACK_IMPORTED_MODULE_6__.EncryptServiceImplementation(cryptoFunctionService, logService, true);
    const bitwardenContainerService = new _platform_services_container_service__WEBPACK_IMPORTED_MODULE_3__.ContainerService(null, encryptService);
    bitwardenContainerService.attachToGlobal(self);
    inited = true;
}
/**
 * Listen for messages and decrypt their contents
 */
workerApi.addEventListener("message", (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (!inited) {
        init();
    }
    const request = JSON.parse(event.data);
    switch (request.command) {
        case _types_worker_command_type__WEBPACK_IMPORTED_MODULE_5__.DECRYPT_COMMAND:
            return yield handleDecrypt(request);
        case _types_worker_command_type__WEBPACK_IMPORTED_MODULE_5__.SET_CONFIG_COMMAND: {
            const newConfig = request.newConfig;
            return yield handleSetConfig(newConfig);
        }
        default:
            logService.error(`[EncryptWorker] unknown worker command`, request.command, request);
    }
}));
function handleDecrypt(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = _platform_models_domain_symmetric_crypto_key__WEBPACK_IMPORTED_MODULE_1__.SymmetricCryptoKey.fromJSON(request.key);
        const items = request.items.map((jsonItem) => {
            const initializer = (0,_platform_services_cryptography_get_class_initializer__WEBPACK_IMPORTED_MODULE_4__.getClassInitializer)(jsonItem.initializerKey);
            return initializer(jsonItem);
        });
        const result = yield encryptService.decryptItems(items, key);
        workerApi.postMessage({
            id: request.id,
            items: JSON.stringify(result),
        });
    });
}
function handleSetConfig(newConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        encryptService.onServerConfigChange(_platform_abstractions_config_server_config__WEBPACK_IMPORTED_MODULE_0__.ServerConfig.fromJSON(newConfig));
    });
}


/***/ }),

/***/ "../../libs/common/src/key-management/crypto/services/web-crypto-function.service.ts":
/*!*******************************************************************************************!*\
  !*** ../../libs/common/src/key-management/crypto/services/web-crypto-function.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebCryptoFunctionService: () => (/* binding */ WebCryptoFunctionService)
/* harmony export */ });
/* harmony import */ var argon2_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! argon2-browser */ "../../node_modules/argon2-browser/lib/argon2.js");
/* harmony import */ var argon2_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(argon2_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-forge */ "../../node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _platform_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _platform_misc_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class WebCryptoFunctionService {
    constructor(globalContext) {
        var _a;
        if (((_a = globalContext === null || globalContext === void 0 ? void 0 : globalContext.crypto) === null || _a === void 0 ? void 0 : _a.subtle) == null) {
            throw new Error("Could not instantiate WebCryptoFunctionService. Could not locate Subtle crypto.");
        }
        this.crypto = globalContext.crypto;
        this.subtle = this.crypto.subtle;
        this.wasmSupported = this.checkIfWasmSupported();
    }
    pbkdf2(password, salt, algorithm, iterations) {
        return __awaiter(this, void 0, void 0, function* () {
            const wcLen = algorithm === "sha256" ? 256 : 512;
            const passwordBuf = this.toBuf(password);
            const saltBuf = this.toBuf(salt);
            const pbkdf2Params = {
                name: "PBKDF2",
                salt: saltBuf,
                iterations: iterations,
                hash: { name: this.toWebCryptoAlgorithm(algorithm) },
            };
            const impKey = yield this.subtle.importKey("raw", passwordBuf, { name: "PBKDF2" }, false, ["deriveBits"]);
            const buffer = yield this.subtle.deriveBits(pbkdf2Params, impKey, wcLen);
            return new Uint8Array(buffer);
        });
    }
    argon2(password, salt, iterations, memory, parallelism) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.wasmSupported) {
                throw "Webassembly support is required for the Argon2 KDF feature.";
            }
            const passwordArr = new Uint8Array(this.toBuf(password));
            const saltArr = new Uint8Array(this.toBuf(salt));
            const result = yield argon2_browser__WEBPACK_IMPORTED_MODULE_0__.hash({
                pass: passwordArr,
                salt: saltArr,
                time: iterations,
                mem: memory,
                parallelism: parallelism,
                hashLen: 32,
                type: argon2_browser__WEBPACK_IMPORTED_MODULE_0__.ArgonType.Argon2id,
            });
            argon2_browser__WEBPACK_IMPORTED_MODULE_0__.unloadRuntime();
            return result.hash;
        });
    }
    hkdf(ikm, salt, info, outputByteSize, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            const saltBuf = this.toBuf(salt);
            const infoBuf = this.toBuf(info);
            const hkdfParams = {
                name: "HKDF",
                salt: saltBuf,
                info: infoBuf,
                hash: { name: this.toWebCryptoAlgorithm(algorithm) },
            };
            const impKey = yield this.subtle.importKey("raw", ikm, { name: "HKDF" }, false, [
                "deriveBits",
            ]);
            const buffer = yield this.subtle.deriveBits(hkdfParams, impKey, outputByteSize * 8);
            return new Uint8Array(buffer);
        });
    }
    // ref: https://tools.ietf.org/html/rfc5869
    hkdfExpand(prk, info, outputByteSize, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashLen = algorithm === "sha256" ? 32 : 64;
            if (outputByteSize > 255 * hashLen) {
                throw new Error("outputByteSize is too large.");
            }
            const prkArr = new Uint8Array(prk);
            if (prkArr.length < hashLen) {
                throw new Error("prk is too small.");
            }
            const infoBuf = this.toBuf(info);
            const infoArr = new Uint8Array(infoBuf);
            let runningOkmLength = 0;
            let previousT = new Uint8Array(0);
            const n = Math.ceil(outputByteSize / hashLen);
            const okm = new Uint8Array(n * hashLen);
            for (let i = 0; i < n; i++) {
                const t = new Uint8Array(previousT.length + infoArr.length + 1);
                t.set(previousT);
                t.set(infoArr, previousT.length);
                t.set([i + 1], t.length - 1);
                previousT = new Uint8Array(yield this.hmac(t, prk, algorithm));
                okm.set(previousT, runningOkmLength);
                runningOkmLength += previousT.length;
                if (runningOkmLength >= outputByteSize) {
                    break;
                }
            }
            return okm.slice(0, outputByteSize);
        });
    }
    hash(value, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            if (algorithm === "md5") {
                const md = node_forge__WEBPACK_IMPORTED_MODULE_1__.md.md5.create();
                const valueBytes = this.toByteString(value);
                md.update(valueBytes, "raw");
                return _platform_misc_utils__WEBPACK_IMPORTED_MODULE_3__.Utils.fromByteStringToArray(md.digest().data);
            }
            const valueBuf = this.toBuf(value);
            const buffer = yield this.subtle.digest({ name: this.toWebCryptoAlgorithm(algorithm) }, valueBuf);
            return new Uint8Array(buffer);
        });
    }
    hmac(value, key, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            const signingAlgorithm = {
                name: "HMAC",
                hash: { name: this.toWebCryptoAlgorithm(algorithm) },
            };
            const impKey = yield this.subtle.importKey("raw", key, signingAlgorithm, false, ["sign"]);
            const buffer = yield this.subtle.sign(signingAlgorithm, impKey, value);
            return new Uint8Array(buffer);
        });
    }
    // Safely compare two values in a way that protects against timing attacks (Double HMAC Verification).
    // ref: https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/
    // ref: https://paragonie.com/blog/2015/11/preventing-timing-attacks-on-string-comparison-with-double-hmac-strategy
    compare(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            const macKey = yield this.randomBytes(32);
            const signingAlgorithm = {
                name: "HMAC",
                hash: { name: "SHA-256" },
            };
            const impKey = yield this.subtle.importKey("raw", macKey, signingAlgorithm, false, ["sign"]);
            const mac1 = yield this.subtle.sign(signingAlgorithm, impKey, a);
            const mac2 = yield this.subtle.sign(signingAlgorithm, impKey, b);
            if (mac1.byteLength !== mac2.byteLength) {
                return false;
            }
            const arr1 = new Uint8Array(mac1);
            const arr2 = new Uint8Array(mac2);
            for (let i = 0; i < arr2.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        });
    }
    hmacFast(value, key, algorithm) {
        const hmac = node_forge__WEBPACK_IMPORTED_MODULE_1__.hmac.create();
        hmac.start(algorithm, key);
        hmac.update(value);
        const bytes = hmac.digest().getBytes();
        return Promise.resolve(bytes);
    }
    compareFast(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            const rand = yield this.randomBytes(32);
            const bytes = new Uint32Array(rand);
            const buffer = node_forge__WEBPACK_IMPORTED_MODULE_1__.util.createBuffer();
            for (let i = 0; i < bytes.length; i++) {
                buffer.putInt32(bytes[i]);
            }
            const macKey = buffer.getBytes();
            const hmac = node_forge__WEBPACK_IMPORTED_MODULE_1__.hmac.create();
            hmac.start("sha256", macKey);
            hmac.update(a);
            const mac1 = hmac.digest().getBytes();
            hmac.start("sha256", null);
            hmac.update(b);
            const mac2 = hmac.digest().getBytes();
            const equals = mac1 === mac2;
            return equals;
        });
    }
    aesEncrypt(data, iv, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const impKey = yield this.subtle.importKey("raw", key, { name: "AES-CBC" }, false, [
                "encrypt",
            ]);
            const buffer = yield this.subtle.encrypt({ name: "AES-CBC", iv: iv }, impKey, data);
            return new Uint8Array(buffer);
        });
    }
    aesDecryptFastParameters(data, iv, mac, key) {
        const innerKey = key.inner();
        if (innerKey.type === _platform_enums__WEBPACK_IMPORTED_MODULE_2__.EncryptionType.AesCbc256_B64) {
            return {
                iv: node_forge__WEBPACK_IMPORTED_MODULE_1__.util.decode64(iv),
                data: node_forge__WEBPACK_IMPORTED_MODULE_1__.util.decode64(data),
                encKey: node_forge__WEBPACK_IMPORTED_MODULE_1__.util.createBuffer(innerKey.encryptionKey).getBytes(),
            };
        }
        else if (innerKey.type === _platform_enums__WEBPACK_IMPORTED_MODULE_2__.EncryptionType.AesCbc256_HmacSha256_B64) {
            const macData = node_forge__WEBPACK_IMPORTED_MODULE_1__.util.decode64(iv) + node_forge__WEBPACK_IMPORTED_MODULE_1__.util.decode64(data);
            return {
                iv: node_forge__WEBPACK_IMPORTED_MODULE_1__.util.decode64(iv),
                data: node_forge__WEBPACK_IMPORTED_MODULE_1__.util.decode64(data),
                encKey: node_forge__WEBPACK_IMPORTED_MODULE_1__.util.createBuffer(innerKey.encryptionKey).getBytes(),
                macKey: node_forge__WEBPACK_IMPORTED_MODULE_1__.util.createBuffer(innerKey.authenticationKey).getBytes(),
                mac: node_forge__WEBPACK_IMPORTED_MODULE_1__.util.decode64(mac),
                macData,
            };
        }
        else {
            throw new Error("Unsupported encryption type.");
        }
    }
    aesDecryptFast({ mode, parameters, }) {
        const decipher = node_forge__WEBPACK_IMPORTED_MODULE_1__.cipher.createDecipher(this.toWebCryptoAesMode(mode), parameters.encKey);
        const options = {};
        if (mode === "cbc") {
            options.iv = parameters.iv;
        }
        const dataBuffer = node_forge__WEBPACK_IMPORTED_MODULE_1__.util.createBuffer(parameters.data);
        decipher.start(options);
        decipher.update(dataBuffer);
        decipher.finish();
        const val = decipher.output.toString();
        return Promise.resolve(val);
    }
    aesDecrypt(data, iv, key, mode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (mode === "ecb") {
                // Web crypto does not support AES-ECB mode, so we need to do this in forge.
                const parameters = {
                    data: this.toByteString(data),
                    encKey: this.toByteString(key),
                };
                const result = yield this.aesDecryptFast({ mode: "ecb", parameters });
                return _platform_misc_utils__WEBPACK_IMPORTED_MODULE_3__.Utils.fromByteStringToArray(result);
            }
            const impKey = yield this.subtle.importKey("raw", key, { name: "AES-CBC" }, false, [
                "decrypt",
            ]);
            // CBC
            if (iv == null) {
                throw new Error("IV is required for CBC mode.");
            }
            const buffer = yield this.subtle.decrypt({ name: "AES-CBC", iv: iv }, impKey, data);
            return new Uint8Array(buffer);
        });
    }
    rsaEncrypt(data, publicKey, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            // Note: Edge browser requires that we specify name and hash for both key import and decrypt.
            // We cannot use the proper types here.
            const rsaParams = {
                name: "RSA-OAEP",
                hash: { name: this.toWebCryptoAlgorithm(algorithm) },
            };
            const impKey = yield this.subtle.importKey("spki", publicKey, rsaParams, false, ["encrypt"]);
            const buffer = yield this.subtle.encrypt(rsaParams, impKey, data);
            return new Uint8Array(buffer);
        });
    }
    rsaDecrypt(data, privateKey, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            // Note: Edge browser requires that we specify name and hash for both key import and decrypt.
            // We cannot use the proper types here.
            const rsaParams = {
                name: "RSA-OAEP",
                hash: { name: this.toWebCryptoAlgorithm(algorithm) },
            };
            const impKey = yield this.subtle.importKey("pkcs8", privateKey, rsaParams, false, ["decrypt"]);
            const buffer = yield this.subtle.decrypt(rsaParams, impKey, data);
            return new Uint8Array(buffer);
        });
    }
    rsaExtractPublicKey(privateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const rsaParams = {
                name: "RSA-OAEP",
                // Have to specify some algorithm
                hash: { name: this.toWebCryptoAlgorithm("sha1") },
            };
            const impPrivateKey = yield this.subtle.importKey("pkcs8", privateKey, rsaParams, true, [
                "decrypt",
            ]);
            const jwkPrivateKey = yield this.subtle.exportKey("jwk", impPrivateKey);
            const jwkPublicKeyParams = {
                kty: "RSA",
                e: jwkPrivateKey.e,
                n: jwkPrivateKey.n,
                alg: "RSA-OAEP",
                ext: true,
            };
            const impPublicKey = yield this.subtle.importKey("jwk", jwkPublicKeyParams, rsaParams, true, [
                "encrypt",
            ]);
            const buffer = yield this.subtle.exportKey("spki", impPublicKey);
            return new Uint8Array(buffer);
        });
    }
    aesGenerateKey() {
        return __awaiter(this, arguments, void 0, function* (bitLength = 128 | 192 | 256 | 512) {
            if (bitLength === 512) {
                // 512 bit keys are not supported in WebCrypto, so we concat two 256 bit keys
                const key1 = yield this.aesGenerateKey(256);
                const key2 = yield this.aesGenerateKey(256);
                return new Uint8Array([...key1, ...key2]);
            }
            const aesParams = {
                name: "AES-CBC",
                length: bitLength,
            };
            const key = yield this.subtle.generateKey(aesParams, true, ["encrypt", "decrypt"]);
            const rawKey = yield this.subtle.exportKey("raw", key);
            return new Uint8Array(rawKey);
        });
    }
    rsaGenerateKeyPair(length) {
        return __awaiter(this, void 0, void 0, function* () {
            const rsaParams = {
                name: "RSA-OAEP",
                modulusLength: length,
                publicExponent: new Uint8Array([0x01, 0x00, 0x01]), // 65537
                // Have to specify some algorithm
                hash: { name: this.toWebCryptoAlgorithm("sha1") },
            };
            const keyPair = yield this.subtle.generateKey(rsaParams, true, ["encrypt", "decrypt"]);
            const publicKey = yield this.subtle.exportKey("spki", keyPair.publicKey);
            const privateKey = yield this.subtle.exportKey("pkcs8", keyPair.privateKey);
            return [new Uint8Array(publicKey), new Uint8Array(privateKey)];
        });
    }
    randomBytes(length) {
        const arr = new Uint8Array(length);
        this.crypto.getRandomValues(arr);
        return Promise.resolve(arr);
    }
    toBuf(value) {
        let buf;
        if (typeof value === "string") {
            buf = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_3__.Utils.fromUtf8ToArray(value);
        }
        else {
            buf = value;
        }
        return buf;
    }
    toByteString(value) {
        let bytes;
        if (typeof value === "string") {
            bytes = node_forge__WEBPACK_IMPORTED_MODULE_1__.util.encodeUtf8(value);
        }
        else {
            bytes = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_3__.Utils.fromBufferToByteString(value);
        }
        return bytes;
    }
    toWebCryptoAlgorithm(algorithm) {
        if (algorithm === "md5") {
            throw new Error("MD5 is not supported in WebCrypto.");
        }
        return algorithm === "sha1" ? "SHA-1" : algorithm === "sha256" ? "SHA-256" : "SHA-512";
    }
    toWebCryptoAesMode(mode) {
        return mode === "cbc" ? "AES-CBC" : "AES-ECB";
    }
    // ref: https://stackoverflow.com/a/47880734/1090359
    checkIfWasmSupported() {
        try {
            if (typeof WebAssembly === "object" && typeof WebAssembly.instantiate === "function") {
                const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
                if (module instanceof WebAssembly.Module) {
                    return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
                }
            }
        }
        catch (_a) {
            return false;
        }
        return false;
    }
}


/***/ }),

/***/ "../../libs/common/src/key-management/crypto/types/worker-command.type.ts":
/*!********************************************************************************!*\
  !*** ../../libs/common/src/key-management/crypto/types/worker-command.type.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DECRYPT_COMMAND: () => (/* binding */ DECRYPT_COMMAND),
/* harmony export */   SET_CONFIG_COMMAND: () => (/* binding */ SET_CONFIG_COMMAND),
/* harmony export */   buildDecryptMessage: () => (/* binding */ buildDecryptMessage),
/* harmony export */   buildSetConfigMessage: () => (/* binding */ buildSetConfigMessage)
/* harmony export */ });
const DECRYPT_COMMAND = "decrypt";
const SET_CONFIG_COMMAND = "updateConfig";
function buildDecryptMessage(data) {
    return JSON.stringify(Object.assign({ command: DECRYPT_COMMAND }, data));
}
function buildSetConfigMessage(data) {
    return JSON.stringify(Object.assign({ command: SET_CONFIG_COMMAND }, data));
}


/***/ }),

/***/ "../../libs/common/src/models/domain/domain-service.ts":
/*!*************************************************************!*\
  !*** ../../libs/common/src/models/domain/domain-service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UriMatchStrategy: () => (/* binding */ UriMatchStrategy)
/* harmony export */ });
/*
  See full documentation at:
    https://bitwarden.com/help/uri-match-detection/#match-detection-options

  Domain: "the top-level domain and second-level domain of the URI match the detected resource",
  Host: "the hostname and (if specified) port of the URI matches the detected resource",
  StartsWith: "the detected resource starts with the URI, regardless of what follows it",
  Exact: "the URI matches the detected resource exactly",
  RegularExpression: "the detected resource matches a specified regular expression",
  Never: "never offer auto-fill for the item",
*/
const UriMatchStrategy = {
    Domain: 0,
    Host: 1,
    StartsWith: 2,
    Exact: 3,
    RegularExpression: 4,
    Never: 5,
};


/***/ }),

/***/ "../../libs/common/src/models/response/base.response.ts":
/*!**************************************************************!*\
  !*** ../../libs/common/src/models/response/base.response.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseResponse: () => (/* binding */ BaseResponse)
/* harmony export */ });
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
class BaseResponse {
    constructor(response) {
        this.response = response;
    }
    getResponseProperty(propertyName, response = null, exactName = false) {
        if (propertyName == null || propertyName === "") {
            throw new Error("propertyName must not be null/empty.");
        }
        if (response == null && this.response != null) {
            response = this.response;
        }
        if (response == null) {
            return null;
        }
        if (!exactName && response[propertyName] === undefined) {
            let otherCasePropertyName = null;
            if (propertyName.charAt(0) === propertyName.charAt(0).toUpperCase()) {
                otherCasePropertyName = propertyName.charAt(0).toLowerCase();
            }
            else {
                otherCasePropertyName = propertyName.charAt(0).toUpperCase();
            }
            if (propertyName.length > 1) {
                otherCasePropertyName += propertyName.slice(1);
            }
            propertyName = otherCasePropertyName;
            if (response[propertyName] === undefined) {
                propertyName = propertyName.toLowerCase();
            }
            if (response[propertyName] === undefined) {
                propertyName = propertyName.toUpperCase();
            }
        }
        return response[propertyName];
    }
}


/***/ }),

/***/ "../../libs/common/src/platform/abstractions/config/server-config.ts":
/*!***************************************************************************!*\
  !*** ../../libs/common/src/platform/abstractions/config/server-config.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerConfig: () => (/* binding */ ServerConfig)
/* harmony export */ });
/* harmony import */ var _enums_push_technology_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/push-technology.enum */ "../../libs/common/src/enums/push-technology.enum.ts");

const dayInMilliseconds = 24 * 3600 * 1000;
class ServerConfig {
    constructor(serverConfigData) {
        var _a, _b;
        this.featureStates = {};
        this.version = serverConfigData.version;
        this.gitHash = serverConfigData.gitHash;
        this.server = serverConfigData.server;
        this.utcDate = new Date(serverConfigData.utcDate);
        this.environment = serverConfigData.environment;
        this.featureStates = serverConfigData.featureStates;
        this.push =
            serverConfigData.push == null
                ? {
                    pushTechnology: _enums_push_technology_enum__WEBPACK_IMPORTED_MODULE_0__.PushTechnology.SignalR,
                }
                : {
                    pushTechnology: serverConfigData.push.pushTechnology,
                    vapidPublicKey: serverConfigData.push.vapidPublicKey,
                };
        this.settings = serverConfigData.settings;
        if (((_a = this.server) === null || _a === void 0 ? void 0 : _a.name) == null && ((_b = this.server) === null || _b === void 0 ? void 0 : _b.url) == null) {
            this.server = null;
        }
    }
    getAgeInMilliseconds() {
        var _a;
        return new Date().getTime() - ((_a = this.utcDate) === null || _a === void 0 ? void 0 : _a.getTime());
    }
    isValid() {
        return this.getAgeInMilliseconds() <= dayInMilliseconds;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        return new ServerConfig(obj);
    }
}


/***/ }),

/***/ "../../libs/common/src/platform/abstractions/sdk/sdk-load.service.ts":
/*!***************************************************************************!*\
  !*** ../../libs/common/src/platform/abstractions/sdk/sdk-load.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SdkLoadFailedError: () => (/* binding */ SdkLoadFailedError),
/* harmony export */   SdkLoadService: () => (/* binding */ SdkLoadService)
/* harmony export */ });
/* harmony import */ var _bitwarden_sdk_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/sdk-internal */ "../../node_modules/@bitwarden/sdk-internal/bitwarden_wasm_internal_bg.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class SdkLoadFailedError extends Error {
    constructor(error) {
        super(`SDK loading failed: ${error}`);
    }
}
class SdkLoadService {
    /**
     * Load WASM and initalize SDK-JS integrations such as logging.
     * This method should be called once at the start of the application.
     * Raw functions and classes from the SDK can be used after this method resolves.
     */
    loadAndInit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.load();
                (0,_bitwarden_sdk_internal__WEBPACK_IMPORTED_MODULE_0__.init_sdk)();
                SdkLoadService.markAsReady();
            }
            catch (error) {
                SdkLoadService.markAsFailed(error);
            }
        });
    }
}
/**
 * This promise is resolved when the SDK is ready to be used. Use it when your code might run early and/or is not able to use DI.
 * Beware that WASM always requires a load step which makes it tricky to use functions and classes directly, it is therefore recommended
 * to use the SDK through the {@link SdkService}. Only use this promise in advanced scenarios!
 *
 * @example
 * ```typescript
 * import { pureFunction } from "@bitwarden/sdk-internal";
 *
 * async function myFunction() {
 *   await SdkLoadService.Ready;
 *   pureFunction();
 * }
 * ```
 */
SdkLoadService.Ready = new Promise((resolve, reject) => {
    SdkLoadService.markAsReady = resolve;
    SdkLoadService.markAsFailed = (error) => reject(new SdkLoadFailedError(error));
});


/***/ }),

/***/ "../../libs/common/src/platform/enums/encryption-type.enum.ts":
/*!********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/encryption-type.enum.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE: () => (/* binding */ EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE),
/* harmony export */   EncryptionType: () => (/* binding */ EncryptionType),
/* harmony export */   encryptionTypeToString: () => (/* binding */ encryptionTypeToString)
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var EncryptionType;
(function (EncryptionType) {
    // Symmetric encryption types
    EncryptionType[EncryptionType["AesCbc256_B64"] = 0] = "AesCbc256_B64";
    // Type 1 was the unused and removed AesCbc128_HmacSha256_B64
    EncryptionType[EncryptionType["AesCbc256_HmacSha256_B64"] = 2] = "AesCbc256_HmacSha256_B64";
    // Cose is the encoding for the key used, but contained can be:
    // - XChaCha20Poly1305
    EncryptionType[EncryptionType["CoseEncrypt0"] = 7] = "CoseEncrypt0";
    // Asymmetric encryption types. These never occur in the same places that the symmetric ones would
    // and can be split out into a separate enum.
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_B64"] = 3] = "Rsa2048_OaepSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_B64"] = 4] = "Rsa2048_OaepSha1_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_HmacSha256_B64"] = 5] = "Rsa2048_OaepSha256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_HmacSha256_B64"] = 6] = "Rsa2048_OaepSha1_HmacSha256_B64";
})(EncryptionType || (EncryptionType = {}));
function encryptionTypeToString(encryptionType) {
    if (encryptionType in EncryptionType) {
        return EncryptionType[encryptionType];
    }
    else {
        return "Unknown encryption type " + encryptionType;
    }
}
/** The expected number of parts to a serialized EncString of the given encryption type.
 * For example, an EncString of type AesCbc256_B64 will have 2 parts
 *
 * Example of annotated serialized EncStrings:
 * 0.iv|data
 * 2.iv|data|mac
 * 3.data
 * 4.data
 *
 * @see EncString
 * @see EncryptionType
 * @see EncString.parseEncryptedString
 */
const EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE = {
    [EncryptionType.AesCbc256_B64]: 2,
    [EncryptionType.AesCbc256_HmacSha256_B64]: 3,
    [EncryptionType.Rsa2048_OaepSha256_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha1_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha256_HmacSha256_B64]: 2,
    [EncryptionType.Rsa2048_OaepSha1_HmacSha256_B64]: 2,
    [EncryptionType.CoseEncrypt0]: 1,
};


/***/ }),

/***/ "../../libs/common/src/platform/enums/file-upload-type.enum.ts":
/*!*********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/file-upload-type.enum.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploadType: () => (/* binding */ FileUploadType)
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var FileUploadType;
(function (FileUploadType) {
    FileUploadType[FileUploadType["Direct"] = 0] = "Direct";
    FileUploadType[FileUploadType["Azure"] = 1] = "Azure";
})(FileUploadType || (FileUploadType = {}));


/***/ }),

/***/ "../../libs/common/src/platform/enums/hash-purpose.enum.ts":
/*!*****************************************************************!*\
  !*** ../../libs/common/src/platform/enums/hash-purpose.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HashPurpose: () => (/* binding */ HashPurpose)
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var HashPurpose;
(function (HashPurpose) {
    HashPurpose[HashPurpose["ServerAuthorization"] = 1] = "ServerAuthorization";
    HashPurpose[HashPurpose["LocalAuthorization"] = 2] = "LocalAuthorization";
})(HashPurpose || (HashPurpose = {}));


/***/ }),

/***/ "../../libs/common/src/platform/enums/html-storage-location.enum.ts":
/*!**************************************************************************!*\
  !*** ../../libs/common/src/platform/enums/html-storage-location.enum.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlStorageLocation: () => (/* reexport safe */ _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__.HtmlStorageLocation)
/* harmony export */ });
/* harmony import */ var _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/storage-core */ "../../libs/storage-core/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/enums/index.ts":
/*!*****************************************************!*\
  !*** ../../libs/common/src/platform/enums/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE: () => (/* reexport safe */ _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__.EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE),
/* harmony export */   EncryptionType: () => (/* reexport safe */ _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__.EncryptionType),
/* harmony export */   FileUploadType: () => (/* reexport safe */ _file_upload_type_enum__WEBPACK_IMPORTED_MODULE_1__.FileUploadType),
/* harmony export */   HashPurpose: () => (/* reexport safe */ _hash_purpose_enum__WEBPACK_IMPORTED_MODULE_2__.HashPurpose),
/* harmony export */   HtmlStorageLocation: () => (/* reexport safe */ _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_3__.HtmlStorageLocation),
/* harmony export */   KeySuffixOptions: () => (/* reexport safe */ _key_suffix_options_enum__WEBPACK_IMPORTED_MODULE_4__.KeySuffixOptions),
/* harmony export */   LogLevelType: () => (/* reexport safe */ _log_level_type_enum__WEBPACK_IMPORTED_MODULE_5__.LogLevelType),
/* harmony export */   StorageLocation: () => (/* reexport safe */ _storage_location_enum__WEBPACK_IMPORTED_MODULE_6__.StorageLocation),
/* harmony export */   ThemeType: () => (/* reexport safe */ _theme_type_enum__WEBPACK_IMPORTED_MODULE_7__.ThemeType),
/* harmony export */   ThemeTypes: () => (/* reexport safe */ _theme_type_enum__WEBPACK_IMPORTED_MODULE_7__.ThemeTypes),
/* harmony export */   encryptionTypeToString: () => (/* reexport safe */ _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__.encryptionTypeToString)
/* harmony export */ });
/* harmony import */ var _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encryption-type.enum */ "../../libs/common/src/platform/enums/encryption-type.enum.ts");
/* harmony import */ var _file_upload_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload-type.enum */ "../../libs/common/src/platform/enums/file-upload-type.enum.ts");
/* harmony import */ var _hash_purpose_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hash-purpose.enum */ "../../libs/common/src/platform/enums/hash-purpose.enum.ts");
/* harmony import */ var _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-storage-location.enum */ "../../libs/common/src/platform/enums/html-storage-location.enum.ts");
/* harmony import */ var _key_suffix_options_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-suffix-options.enum */ "../../libs/common/src/platform/enums/key-suffix-options.enum.ts");
/* harmony import */ var _log_level_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-level-type.enum */ "../../libs/common/src/platform/enums/log-level-type.enum.ts");
/* harmony import */ var _storage_location_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage-location.enum */ "../../libs/common/src/platform/enums/storage-location.enum.ts");
/* harmony import */ var _theme_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-type.enum */ "../../libs/common/src/platform/enums/theme-type.enum.ts");










/***/ }),

/***/ "../../libs/common/src/platform/enums/key-suffix-options.enum.ts":
/*!***********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/key-suffix-options.enum.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeySuffixOptions: () => (/* binding */ KeySuffixOptions)
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var KeySuffixOptions;
(function (KeySuffixOptions) {
    KeySuffixOptions["Auto"] = "auto";
    KeySuffixOptions["Pin"] = "pin";
})(KeySuffixOptions || (KeySuffixOptions = {}));


/***/ }),

/***/ "../../libs/common/src/platform/enums/log-level-type.enum.ts":
/*!*******************************************************************!*\
  !*** ../../libs/common/src/platform/enums/log-level-type.enum.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevelType: () => (/* reexport safe */ _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__.LogLevel)
/* harmony export */ });
/* harmony import */ var _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/logging */ "../../libs/logging/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/enums/storage-location.enum.ts":
/*!*********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/storage-location.enum.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageLocation: () => (/* reexport safe */ _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__.StorageLocationEnum)
/* harmony export */ });
/* harmony import */ var _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/storage-core */ "../../libs/storage-core/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/enums/theme-type.enum.ts":
/*!***************************************************************!*\
  !*** ../../libs/common/src/platform/enums/theme-type.enum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeType: () => (/* binding */ ThemeType),
/* harmony export */   ThemeTypes: () => (/* binding */ ThemeTypes)
/* harmony export */ });
/**
 * @deprecated prefer the `ThemeTypes` constants and `Theme` type over unsafe enum types
 **/
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var ThemeType;
(function (ThemeType) {
    ThemeType["System"] = "system";
    ThemeType["Light"] = "light";
    ThemeType["Dark"] = "dark";
})(ThemeType || (ThemeType = {}));
const ThemeTypes = {
    System: "system",
    Light: "light",
    Dark: "dark",
};


/***/ }),

/***/ "../../libs/common/src/platform/misc/safe-urls.ts":
/*!********************************************************!*\
  !*** ../../libs/common/src/platform/misc/safe-urls.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeUrls: () => (/* binding */ SafeUrls)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../libs/common/src/platform/misc/utils.ts");

const CanLaunchWhitelist = [
    "https://",
    "http://",
    "ssh://",
    "ftp://",
    "sftp://",
    "irc://",
    "vnc://",
    // https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-uri
    "rdp://", // Legacy RDP URI scheme
    "ms-rd:", // Preferred RDP URI scheme
    "chrome://",
    "iosapp://",
    "androidapp://",
];
class SafeUrls {
    static canLaunch(uri) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isNullOrWhitespace(uri)) {
            return false;
        }
        for (let i = 0; i < CanLaunchWhitelist.length; i++) {
            if (uri.indexOf(CanLaunchWhitelist[i]) === 0) {
                return true;
            }
        }
        return false;
    }
}


/***/ }),

/***/ "../../libs/common/src/platform/misc/utils.ts":
/*!****************************************************!*\
  !*** ../../libs/common/src/platform/misc/utils.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Utils: () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer/ */ "../../node_modules/buffer/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var tldts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tldts */ "../../node_modules/tldts/dist/es6/index.js");
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
/* eslint-disable no-useless-escape */




// FIXME: Remove when updating file. Eslint update
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nodeURL = typeof self === "undefined" ? __webpack_require__(/*! url */ "../../node_modules/url/url.js") : null;
class Utils {
    static init() {
        if (Utils.inited) {
            return;
        }
        Utils.inited = true;
        Utils.isNode =
            typeof process !== "undefined" &&
                process.release != null &&
                process.release.name === "node";
        Utils.isBrowser = typeof window !== "undefined";
        Utils.isMobileBrowser = Utils.isBrowser && this.isMobile(window);
        Utils.isAppleMobileBrowser = Utils.isBrowser && this.isAppleMobile(window);
        if (Utils.isNode) {
            Utils.global = __webpack_require__.g;
        }
        else if (Utils.isBrowser) {
            Utils.global = window;
        }
        else {
            // If it's not browser or node then it must be a service worker
            Utils.global = self;
        }
    }
    static fromB64ToArray(str) {
        if (str == null) {
            return null;
        }
        if (Utils.isNode) {
            return new Uint8Array(Buffer.from(str, "base64"));
        }
        else {
            const binaryString = Utils.global.atob(str);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes;
        }
    }
    static fromUrlB64ToArray(str) {
        return Utils.fromB64ToArray(Utils.fromUrlB64ToB64(str));
    }
    static fromHexToArray(str) {
        if (Utils.isNode) {
            return new Uint8Array(Buffer.from(str, "hex"));
        }
        else {
            const bytes = new Uint8Array(str.length / 2);
            for (let i = 0; i < str.length; i += 2) {
                bytes[i / 2] = parseInt(str.substr(i, 2), 16);
            }
            return bytes;
        }
    }
    static fromUtf8ToArray(str) {
        if (Utils.isNode) {
            return new Uint8Array(Buffer.from(str, "utf8"));
        }
        else {
            const strUtf8 = unescape(encodeURIComponent(str));
            const arr = new Uint8Array(strUtf8.length);
            for (let i = 0; i < strUtf8.length; i++) {
                arr[i] = strUtf8.charCodeAt(i);
            }
            return arr;
        }
    }
    static fromByteStringToArray(str) {
        if (str == null) {
            return null;
        }
        const arr = new Uint8Array(str.length);
        for (let i = 0; i < str.length; i++) {
            arr[i] = str.charCodeAt(i);
        }
        return arr;
    }
    static fromBufferToB64(buffer) {
        if (buffer == null) {
            return null;
        }
        if (Utils.isNode) {
            return Buffer.from(buffer).toString("base64");
        }
        else {
            let binary = "";
            const bytes = new Uint8Array(buffer);
            for (let i = 0; i < bytes.byteLength; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return Utils.global.btoa(binary);
        }
    }
    static fromBufferToUrlB64(buffer) {
        return Utils.fromB64toUrlB64(Utils.fromBufferToB64(buffer));
    }
    static fromB64toUrlB64(b64Str) {
        return b64Str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    static fromBufferToUtf8(buffer) {
        return buffer___WEBPACK_IMPORTED_MODULE_1__.Buffer.from(buffer).toString("utf8");
    }
    static fromBufferToByteString(buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }
    // ref: https://stackoverflow.com/a/40031979/1090359
    static fromBufferToHex(buffer) {
        if (Utils.isNode) {
            return Buffer.from(buffer).toString("hex");
        }
        else {
            const bytes = new Uint8Array(buffer);
            return Array.prototype.map
                .call(bytes, (x) => ("00" + x.toString(16)).slice(-2))
                .join("");
        }
    }
    /**
     * Converts a hex string to an ArrayBuffer.
     * Note: this doesn't need any Node specific code as parseInt() / ArrayBuffer / Uint8Array
     * work the same in Node and the browser.
     * @param {string} hexString - A string of hexadecimal characters.
     * @returns {ArrayBuffer} The ArrayBuffer representation of the hex string.
     */
    static hexStringToArrayBuffer(hexString) {
        // Check if the hexString has an even length, as each hex digit represents half a byte (4 bits),
        // and it takes two hex digits to represent a full byte (8 bits).
        if (hexString.length % 2 !== 0) {
            throw "HexString has to be an even length";
        }
        // Create an ArrayBuffer with a length that is half the length of the hex string,
        // because each pair of hex digits will become a single byte.
        const arrayBuffer = new ArrayBuffer(hexString.length / 2);
        // Create a Uint8Array view on top of the ArrayBuffer (each position represents a byte)
        // as ArrayBuffers cannot be edited directly.
        const uint8Array = new Uint8Array(arrayBuffer);
        // Loop through the bytes
        for (let i = 0; i < uint8Array.length; i++) {
            // Extract two hex characters (1 byte)
            const hexByte = hexString.substr(i * 2, 2);
            // Convert hexByte into a decimal value from base 16. (ex: ff --> 255)
            const byteValue = parseInt(hexByte, 16);
            // Place the byte value into the uint8Array
            uint8Array[i] = byteValue;
        }
        return arrayBuffer;
    }
    static fromUrlB64ToB64(urlB64Str) {
        let output = urlB64Str.replace(/-/g, "+").replace(/_/g, "/");
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += "==";
                break;
            case 3:
                output += "=";
                break;
            default:
                throw new Error("Illegal base64url string!");
        }
        return output;
    }
    static fromUrlB64ToUtf8(urlB64Str) {
        return Utils.fromB64ToUtf8(Utils.fromUrlB64ToB64(urlB64Str));
    }
    static fromUtf8ToB64(utfStr) {
        if (Utils.isNode) {
            return Buffer.from(utfStr, "utf8").toString("base64");
        }
        else {
            return buffer___WEBPACK_IMPORTED_MODULE_1__.Buffer.from(utfStr, "utf8").toString("base64");
        }
    }
    static fromUtf8ToUrlB64(utfStr) {
        return Utils.fromBufferToUrlB64(Utils.fromUtf8ToArray(utfStr));
    }
    static fromB64ToUtf8(b64Str) {
        if (Utils.isNode) {
            return Buffer.from(b64Str, "base64").toString("utf8");
        }
        else {
            return buffer___WEBPACK_IMPORTED_MODULE_1__.Buffer.from(b64Str, "base64").toString("utf8");
        }
    }
    // ref: http://stackoverflow.com/a/2117523/1090359
    static newGuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static isGuid(id) {
        return RegExp(Utils.guidRegex, "i").test(id);
    }
    static getHostname(uriString) {
        if (Utils.isNullOrWhitespace(uriString)) {
            return null;
        }
        uriString = uriString.trim();
        if (uriString.startsWith("data:")) {
            return null;
        }
        if (uriString.startsWith("about:")) {
            return null;
        }
        if (uriString.startsWith("file:")) {
            return null;
        }
        // Does uriString contain invalid characters
        // TODO Needs to possibly be extended, although '!' is a reserved character
        if (uriString.indexOf("!") > 0) {
            return null;
        }
        try {
            const hostname = (0,tldts__WEBPACK_IMPORTED_MODULE_2__.getHostname)(uriString, { validHosts: this.validHosts });
            if (hostname != null) {
                return hostname;
            }
        }
        catch (_a) {
            return null;
        }
        return null;
    }
    static getHost(uriString) {
        const url = Utils.getUrl(uriString);
        try {
            return url != null && url.host !== "" ? url.host : null;
        }
        catch (_a) {
            return null;
        }
    }
    static getDomain(uriString) {
        if (Utils.isNullOrWhitespace(uriString)) {
            return null;
        }
        uriString = uriString.trim();
        if (uriString.startsWith("data:")) {
            return null;
        }
        if (uriString.startsWith("about:")) {
            return null;
        }
        try {
            const parseResult = (0,tldts__WEBPACK_IMPORTED_MODULE_2__.parse)(uriString, {
                validHosts: this.validHosts,
                allowPrivateDomains: true,
            });
            if (parseResult != null && parseResult.hostname != null) {
                if (parseResult.hostname === "localhost" || parseResult.isIp) {
                    return parseResult.hostname;
                }
                if (parseResult.domain != null) {
                    return parseResult.domain;
                }
                return null;
            }
        }
        catch (_a) {
            return null;
        }
        return null;
    }
    static getQueryParams(uriString) {
        const url = Utils.getUrl(uriString);
        if (url == null || url.search == null || url.search === "") {
            return null;
        }
        const map = new Map();
        const pairs = (url.search[0] === "?" ? url.search.substr(1) : url.search).split("&");
        pairs.forEach((pair) => {
            const parts = pair.split("=");
            if (parts.length < 1) {
                return;
            }
            map.set(decodeURIComponent(parts[0]).toLowerCase(), parts[1] == null ? "" : decodeURIComponent(parts[1]));
        });
        return map;
    }
    static getSortFunction(i18nService, prop) {
        return (a, b) => {
            if (a[prop] == null && b[prop] != null) {
                return -1;
            }
            if (a[prop] != null && b[prop] == null) {
                return 1;
            }
            if (a[prop] == null && b[prop] == null) {
                return 0;
            }
            // The `as unknown as string` here is unfortunate because typescript doesn't property understand that the return of T[prop] will be a string
            return i18nService.collator
                ? i18nService.collator.compare(a[prop], b[prop])
                : a[prop].localeCompare(b[prop]);
        };
    }
    static isNullOrWhitespace(str) {
        return str == null || typeof str !== "string" || str.trim() === "";
    }
    static isNullOrEmpty(str) {
        return str == null || typeof str !== "string" || str == "";
    }
    static isPromise(obj) {
        return (obj != undefined && typeof obj["then"] === "function" && typeof obj["catch"] === "function");
    }
    static nameOf(name) {
        return name;
    }
    static assign(target, source) {
        return Object.assign(target, source);
    }
    static iterateEnum(obj) {
        return Object.keys(obj).filter((k) => Number.isNaN(+k)).map((k) => obj[k]);
    }
    static getUrl(uriString) {
        if (this.isNullOrWhitespace(uriString)) {
            return null;
        }
        uriString = uriString.trim();
        return Utils.getUrlObject(uriString);
    }
    static camelToPascalCase(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    /**
     * There are a few ways to calculate text color for contrast, this one seems to fit accessibility guidelines best.
     * https://stackoverflow.com/a/3943023/6869691
     *
     * @param {string} bgColor
     * @param {number} [threshold] see stackoverflow link above
     * @param {boolean} [svgTextFill]
     * Indicates if this method is performed on an SVG <text> 'fill' attribute (e.g. <text fill="black"></text>).
     * This check is necessary because the '!important' tag cannot be used in a 'fill' attribute.
     */
    static pickTextColorBasedOnBgColor(bgColor, threshold = 186, svgTextFill = false) {
        const bgColorHexNums = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
        const r = parseInt(bgColorHexNums.substring(0, 2), 16); // hexToR
        const g = parseInt(bgColorHexNums.substring(2, 4), 16); // hexToG
        const b = parseInt(bgColorHexNums.substring(4, 6), 16); // hexToB
        const blackColor = svgTextFill ? "black" : "black !important";
        const whiteColor = svgTextFill ? "white" : "white !important";
        return r * 0.299 + g * 0.587 + b * 0.114 > threshold ? blackColor : whiteColor;
    }
    static stringToColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = "#";
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xff;
            color += ("00" + value.toString(16)).substr(-2);
        }
        return color;
    }
    /**
     * @throws Will throw an error if the ContainerService has not been attached to the window object
     */
    static getContainerService() {
        if (this.global.bitwardenContainerService == null) {
            throw new Error("global bitwardenContainerService not initialized.");
        }
        return this.global.bitwardenContainerService;
    }
    static validateHexColor(color) {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
    }
    /**
     * Converts map to a Record<string, V> with the same data. Inverse of recordToMap
     * Useful in toJSON methods, since Maps are not serializable
     * @param map
     * @returns
     */
    static mapToRecord(map) {
        if (map == null) {
            return null;
        }
        if (!(map instanceof Map)) {
            return map;
        }
        return Object.fromEntries(map);
    }
    /**
     * Converts record to a Map<string, V> with the same data. Inverse of mapToRecord
     * Useful in fromJSON methods, since Maps are not serializable
     *
     * Warning: If the record has string keys that are numbers, they will be converted to numbers in the map
     * @param record
     * @returns
     */
    static recordToMap(record) {
        if (record == null) {
            return null;
        }
        else if (record instanceof Map) {
            return record;
        }
        const entries = Object.entries(record);
        if (entries.length === 0) {
            return new Map();
        }
        if (isNaN(Number(entries[0][0]))) {
            return new Map(entries);
        }
        else {
            return new Map(entries.map((e) => [Number(e[0]), e[1]]));
        }
    }
    /** Applies Object.assign, but converts the type nicely using Type-Fest Merge<Destination, Source> */
    static merge(destination, source) {
        return Object.assign(destination, source);
    }
    /**
     * encodeURIComponent escapes all characters except the following:
     * alphabetic, decimal digits, - _ . ! ~ * ' ( )
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#encoding_for_rfc3986
     */
    static encodeRFC3986URIComponent(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
    }
    /**
     * Normalizes a path for defense against attacks like traversals
     * @param denormalizedPath
     * @returns
     */
    static normalizePath(denormalizedPath) {
        return path__WEBPACK_IMPORTED_MODULE_0__.normalize(decodeURIComponent(denormalizedPath)).replace(/^(\.\.(\/|\\|$))+/, "");
    }
    static isMobile(win) {
        let mobile = false;
        ((a) => {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                mobile = true;
            }
        })(win.navigator.userAgent || win.navigator.vendor || win.opera);
        return mobile || win.navigator.userAgent.match(/iPad/i) != null;
    }
    static delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    /**
     * Generate an observable from a function that returns a promise.
     * Similar to the rxjs function {@link from} with one big exception:
     * {@link from} will not re-execute the function when observers resubscribe.
     * {@link Util.asyncToObservable} will execute `generator` for every
     * subscribe, making it ideal if the value ever needs to be refreshed.
     * */
    static asyncToObservable(generator) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => generator()));
    }
    /**
     * Return the number of days remaining before a target date arrives.
     * Returns 0 if the day has already passed.
     */
    static daysRemaining(targetDate) {
        const diffTime = targetDate.getTime() - Date.now();
        const msPerDay = 86400000;
        return Math.max(0, Math.floor(diffTime / msPerDay));
    }
    static isAppleMobile(win) {
        return (win.navigator.userAgent.match(/iPhone/i) != null ||
            win.navigator.userAgent.match(/iPad/i) != null);
    }
    static getUrlObject(uriString) {
        // All the methods below require a protocol to properly parse a URL string
        // Assume http if no other protocol is present
        const hasProtocol = uriString.indexOf("://") > -1;
        if (!hasProtocol && uriString.indexOf(".") > -1) {
            uriString = "http://" + uriString;
        }
        else if (!hasProtocol) {
            return null;
        }
        try {
            if (nodeURL != null) {
                return new nodeURL.URL(uriString);
            }
            return new URL(uriString);
            // FIXME: Remove when updating file. Eslint update
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }
        catch (e) {
            // Ignore error
        }
        return null;
    }
}
Utils.inited = false;
Utils.isNode = false;
Utils.isBrowser = true;
Utils.isMobileBrowser = false;
Utils.isAppleMobileBrowser = false;
Utils.global = null;
// Transpiled version of /\p{Emoji_Presentation}/gu using https://mothereff.in/regexpu. Used for compatability in older browsers.
Utils.regexpEmojiPresentation = /(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])/g;
Utils.validHosts = ["localhost"];
Utils.originalMinimumPasswordLength = 8;
Utils.minimumPasswordLength = 12;
Utils.DomainMatchBlacklist = new Map([
    ["google.com", new Set(["script.google.com"])],
]);
Utils.guidRegex = /^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/;
Utils.init();


/***/ }),

/***/ "../../libs/common/src/platform/models/domain/domain-base.ts":
/*!*******************************************************************!*\
  !*** ../../libs/common/src/platform/models/domain/domain-base.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Domain)
/* harmony export */ });
/* harmony import */ var _enc_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// https://contributing.bitwarden.com/architecture/clients/data-model#domain
class Domain {
    buildDomainModel(domain, dataObj, map, notEncList = []) {
        for (const prop in map) {
            // eslint-disable-next-line
            if (!map.hasOwnProperty(prop)) {
                continue;
            }
            const objProp = dataObj[map[prop] || prop];
            if (notEncList.indexOf(prop) > -1) {
                domain[prop] = objProp ? objProp : null;
            }
            else {
                domain[prop] = objProp ? new _enc_string__WEBPACK_IMPORTED_MODULE_0__.EncString(objProp) : null;
            }
        }
    }
    buildDataModel(domain, dataObj, map, notEncStringList = []) {
        for (const prop in map) {
            // eslint-disable-next-line
            if (!map.hasOwnProperty(prop)) {
                continue;
            }
            const objProp = domain[map[prop] || prop];
            if (notEncStringList.indexOf(prop) > -1) {
                dataObj[prop] = objProp != null ? objProp : null;
            }
            else {
                dataObj[prop] = objProp != null ? objProp.encryptedString : null;
            }
        }
    }
    decryptObj(domain_1, viewModel_1, props_1, orgId_1) {
        return __awaiter(this, arguments, void 0, function* (domain, viewModel, props, orgId, key = null, objectContext = "No Domain Context") {
            var _a, _b;
            for (const prop of props) {
                viewModel[prop] =
                    (_b = (yield ((_a = domain[prop]) === null || _a === void 0 ? void 0 : _a.decrypt(orgId, key, `Property: ${prop}; ObjectContext: ${objectContext}`)))) !== null && _b !== void 0 ? _b : null;
            }
            return viewModel;
        });
    }
    /**
     * Decrypts the requested properties of the domain object with the provided key and encrypt service.
     *
     * If a property is null, the result will be null.
     * @see {@link EncString.decryptWithKey} for more details on decryption behavior.
     *
     * @param encryptedProperties The properties to decrypt. Type restricted to EncString properties of the domain object.
     * @param key The key to use for decryption.
     * @param encryptService The encryption service to use for decryption.
     * @param _ The constructor of the domain object. Used for type inference if the domain object is not automatically inferred.
     * @returns An object with the requested properties decrypted and the rest of the domain object untouched.
     */
    decryptObjWithKey(encryptedProperties_1, key_1, encryptService_1) {
        return __awaiter(this, arguments, void 0, function* (encryptedProperties, key, encryptService, _ = this.constructor, objectContext = "No Domain Context") {
            const decryptedObjects = [];
            for (const prop of encryptedProperties) {
                const value = this[prop];
                const decrypted = yield this.decryptProperty(prop, value, key, encryptService, `Property: ${prop.toString()}; ObjectContext: ${objectContext}`);
                decryptedObjects.push(decrypted);
            }
            const decryptedObject = decryptedObjects.reduce((acc, obj) => {
                return Object.assign(Object.assign({}, acc), obj);
            }, Object.assign({}, this));
            return decryptedObject;
        });
    }
    decryptProperty(propertyKey, value, key, encryptService, decryptTrace) {
        return __awaiter(this, void 0, void 0, function* () {
            let decrypted = null;
            if (value) {
                decrypted = yield value.decryptWithKey(key, encryptService, decryptTrace);
            }
            return {
                [propertyKey]: decrypted,
            };
        });
    }
}


/***/ }),

/***/ "../../libs/common/src/platform/models/domain/enc-array-buffer.ts":
/*!************************************************************************!*\
  !*** ../../libs/common/src/platform/models/domain/enc-array-buffer.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncArrayBuffer: () => (/* binding */ EncArrayBuffer)
/* harmony export */ });
/* harmony import */ var _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "../../libs/common/src/platform/enums/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore


const ENC_TYPE_LENGTH = 1;
const IV_LENGTH = 16;
const MAC_LENGTH = 32;
const MIN_DATA_LENGTH = 1;
class EncArrayBuffer {
    constructor(buffer) {
        this.buffer = buffer;
        this.encryptionType = null;
        this.dataBytes = null;
        this.ivBytes = null;
        this.macBytes = null;
        const encBytes = buffer;
        const encType = encBytes[0];
        switch (encType) {
            case _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_HmacSha256_B64: {
                const minimumLength = ENC_TYPE_LENGTH + IV_LENGTH + MAC_LENGTH + MIN_DATA_LENGTH;
                if (encBytes.length < minimumLength) {
                    this.throwDecryptionError();
                }
                this.ivBytes = encBytes.slice(ENC_TYPE_LENGTH, ENC_TYPE_LENGTH + IV_LENGTH);
                this.macBytes = encBytes.slice(ENC_TYPE_LENGTH + IV_LENGTH, ENC_TYPE_LENGTH + IV_LENGTH + MAC_LENGTH);
                this.dataBytes = encBytes.slice(ENC_TYPE_LENGTH + IV_LENGTH + MAC_LENGTH);
                break;
            }
            case _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_B64: {
                const minimumLength = ENC_TYPE_LENGTH + IV_LENGTH + MIN_DATA_LENGTH;
                if (encBytes.length < minimumLength) {
                    this.throwDecryptionError();
                }
                this.ivBytes = encBytes.slice(ENC_TYPE_LENGTH, ENC_TYPE_LENGTH + IV_LENGTH);
                this.dataBytes = encBytes.slice(ENC_TYPE_LENGTH + IV_LENGTH);
                break;
            }
            default:
                this.throwDecryptionError();
        }
        this.encryptionType = encType;
    }
    throwDecryptionError() {
        throw new Error("Error parsing encrypted ArrayBuffer: data is corrupted or has an invalid format.");
    }
    static fromParts(encryptionType, iv, data, mac) {
        if (encryptionType == null || iv == null || data == null) {
            throw new Error("encryptionType, iv, and data must be provided");
        }
        switch (encryptionType) {
            case _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_B64:
            case _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_HmacSha256_B64:
                EncArrayBuffer.validateIvLength(iv);
                EncArrayBuffer.validateMacLength(encryptionType, mac);
                break;
            default:
                throw new Error(`Unknown EncryptionType ${encryptionType} for EncArrayBuffer.fromParts`);
        }
        let macLen = 0;
        if (mac != null) {
            macLen = mac.length;
        }
        const bytes = new Uint8Array(1 + iv.byteLength + macLen + data.byteLength);
        bytes.set([encryptionType], 0);
        bytes.set(iv, 1);
        if (mac != null) {
            bytes.set(mac, 1 + iv.byteLength);
        }
        bytes.set(data, 1 + iv.byteLength + macLen);
        return new EncArrayBuffer(bytes);
    }
    static fromResponse(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield response.arrayBuffer();
            if (buffer == null) {
                throw new Error("Cannot create EncArrayBuffer from Response - Response is empty");
            }
            return new EncArrayBuffer(new Uint8Array(buffer));
        });
    }
    static fromB64(b64) {
        const buffer = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.fromB64ToArray(b64);
        return new EncArrayBuffer(buffer);
    }
    static validateIvLength(iv) {
        if (iv == null || iv.length !== IV_LENGTH) {
            throw new Error("Invalid IV length");
        }
    }
    static validateMacLength(encType, mac) {
        switch (encType) {
            case _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_B64:
                if (mac != null) {
                    throw new Error("mac must not be provided for AesCbc256_B64");
                }
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_HmacSha256_B64:
                if (mac == null || mac.length !== MAC_LENGTH) {
                    throw new Error("Invalid MAC length");
                }
                break;
            default:
                throw new Error("Invalid encryption type and mac combination");
        }
    }
}


/***/ }),

/***/ "../../libs/common/src/platform/models/domain/enc-string.ts":
/*!******************************************************************!*\
  !*** ../../libs/common/src/platform/models/domain/enc-string.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DECRYPT_ERROR: () => (/* binding */ DECRYPT_ERROR),
/* harmony export */   EncString: () => (/* binding */ EncString)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _misc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const DECRYPT_ERROR = "[error: cannot decrypt]";
class EncString {
    constructor(encryptedStringOrType, data, iv, mac) {
        if (data != null) {
            this.initFromData(encryptedStringOrType, data, iv, mac);
        }
        else {
            this.initFromEncryptedString(encryptedStringOrType);
        }
    }
    get ivBytes() {
        return this.iv == null ? null : _misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromB64ToArray(this.iv);
    }
    get macBytes() {
        return this.mac == null ? null : _misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromB64ToArray(this.mac);
    }
    get dataBytes() {
        return this.data == null ? null : _misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.fromB64ToArray(this.data);
    }
    toJSON() {
        return this.encryptedString;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        return new EncString(obj);
    }
    initFromData(encType, data, iv, mac) {
        if (iv != null) {
            this.encryptedString = (encType + "." + iv + "|" + data);
        }
        else {
            this.encryptedString = (encType + "." + data);
        }
        // mac
        if (mac != null) {
            this.encryptedString = (this.encryptedString + "|" + mac);
        }
        this.encryptionType = encType;
        this.data = data;
        this.iv = iv;
        this.mac = mac;
    }
    initFromEncryptedString(encryptedString) {
        this.encryptedString = encryptedString;
        if (!this.encryptedString) {
            return;
        }
        const { encType, encPieces } = EncString.parseEncryptedString(this.encryptedString);
        this.encryptionType = encType;
        if (encPieces.length !== _enums__WEBPACK_IMPORTED_MODULE_0__.EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE[encType]) {
            return;
        }
        switch (encType) {
            case _enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_HmacSha256_B64:
                this.iv = encPieces[0];
                this.data = encPieces[1];
                this.mac = encPieces[2];
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_B64:
                this.iv = encPieces[0];
                this.data = encPieces[1];
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.Rsa2048_OaepSha256_B64:
            case _enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.Rsa2048_OaepSha1_B64:
                this.data = encPieces[0];
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.Rsa2048_OaepSha256_HmacSha256_B64:
            case _enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.Rsa2048_OaepSha1_HmacSha256_B64:
                this.data = encPieces[0];
                this.mac = encPieces[1];
                break;
            default:
                return;
        }
    }
    static parseEncryptedString(encryptedString) {
        const headerPieces = encryptedString.split(".");
        let encType;
        let encPieces = null;
        if (headerPieces.length === 2) {
            try {
                encType = parseInt(headerPieces[0], null);
                encPieces = headerPieces[1].split("|");
                // FIXME: Remove when updating file. Eslint update
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            }
            catch (e) {
                return { encType: NaN, encPieces: [] };
            }
        }
        else {
            encPieces = encryptedString.split("|");
            encType = _enums__WEBPACK_IMPORTED_MODULE_0__.EncryptionType.AesCbc256_B64;
        }
        return {
            encType,
            encPieces,
        };
    }
    static isSerializedEncString(s) {
        if (s == null) {
            return false;
        }
        const { encType, encPieces } = this.parseEncryptedString(s);
        if (isNaN(encType) || encPieces.length === 0) {
            return false;
        }
        return _enums__WEBPACK_IMPORTED_MODULE_0__.EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE[encType] === encPieces.length;
    }
    decrypt(orgId_1) {
        return __awaiter(this, arguments, void 0, function* (orgId, key = null, context) {
            if (this.decryptedValue != null) {
                return this.decryptedValue;
            }
            try {
                if (key == null) {
                    key = yield this.getKeyForDecryption(orgId);
                }
                if (key == null) {
                    throw new Error("No key to decrypt EncString with orgId " + orgId);
                }
                const encryptService = _misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getContainerService().getEncryptService();
                this.decryptedValue = yield encryptService.decryptString(this, key);
                // FIXME: Remove when updating file. Eslint update
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            }
            catch (e) {
                this.decryptedValue = DECRYPT_ERROR;
            }
            return this.decryptedValue;
        });
    }
    decryptWithKey(key_1, encryptService_1) {
        return __awaiter(this, arguments, void 0, function* (key, encryptService, decryptTrace = "domain-withkey") {
            try {
                if (key == null) {
                    throw new Error("No key to decrypt EncString");
                }
                this.decryptedValue = yield encryptService.decryptString(this, key);
                // FIXME: Remove when updating file. Eslint update
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            }
            catch (e) {
                this.decryptedValue = DECRYPT_ERROR;
            }
            return this.decryptedValue;
        });
    }
    getKeyForDecryption(orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyService = _misc_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getContainerService().getKeyService();
            return orgId != null
                ? yield keyService.getOrgKey(orgId)
                : yield keyService.getUserKeyWithLegacySupport();
        });
    }
}


/***/ }),

/***/ "../../libs/common/src/platform/models/domain/encrypted-object.ts":
/*!************************************************************************!*\
  !*** ../../libs/common/src/platform/models/domain/encrypted-object.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncryptedObject: () => (/* binding */ EncryptedObject)
/* harmony export */ });
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
class EncryptedObject {
}


/***/ }),

/***/ "../../libs/common/src/platform/models/domain/symmetric-crypto-key.ts":
/*!****************************************************************************!*\
  !*** ../../libs/common/src/platform/models/domain/symmetric-crypto-key.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SymmetricCryptoKey: () => (/* binding */ SymmetricCryptoKey)
/* harmony export */ });
/* harmony import */ var _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "../../libs/common/src/platform/enums/index.ts");


/**
 *  A symmetric crypto key represents a symmetric key usable for symmetric encryption and decryption operations.
 *  The specific algorithm used is private to the key, and should only be exposed to encrypt service implementations.
 *  This can be done via `inner()`.
 */
class SymmetricCryptoKey {
    /**
     * @param key The key in one of the permitted serialization formats
     */
    constructor(key) {
        if (key == null) {
            throw new Error("Must provide key");
        }
        if (key.byteLength === 32) {
            this.innerKey = {
                type: _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_B64,
                encryptionKey: key,
            };
            this.keyB64 = this.toBase64();
        }
        else if (key.byteLength === 64) {
            this.innerKey = {
                type: _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_HmacSha256_B64,
                encryptionKey: key.slice(0, 32),
                authenticationKey: key.slice(32),
            };
            this.keyB64 = this.toBase64();
        }
        else if (key.byteLength > 64) {
            this.innerKey = {
                type: _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.CoseEncrypt0,
                encryptionKey: key,
            };
            this.keyB64 = this.toBase64();
        }
        else {
            throw new Error(`Unsupported encType/key length ${key.byteLength}`);
        }
    }
    toJSON() {
        // The whole object is constructed from the initial key, so just store the B64 key
        return { keyB64: this.keyB64 };
    }
    /**
     * It is preferred not to work with the raw key where possible.
     * Only use this method if absolutely necessary.
     *
     * @returns The inner key instance that can be directly used for encryption primitives
     */
    inner() {
        return this.innerKey;
    }
    /**
     * @returns The serialized key in base64 format
     */
    toBase64() {
        return _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.fromBufferToB64(this.toEncoded());
    }
    /**
     * Serializes the key to a format that can be written to state or shared
     * The currently permitted format is:
     * - AesCbc256_B64: 32 bytes (the raw key)
     * - AesCbc256_HmacSha256_B64: 64 bytes (32 bytes encryption key, 32 bytes authentication key, concatenated)
     *
     * @returns The serialized key that can be written to state or encrypted and then written to state / shared
     */
    toEncoded() {
        if (this.innerKey.type === _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_B64) {
            return this.innerKey.encryptionKey;
        }
        else if (this.innerKey.type === _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.AesCbc256_HmacSha256_B64) {
            const encodedKey = new Uint8Array(64);
            encodedKey.set(this.innerKey.encryptionKey, 0);
            encodedKey.set(this.innerKey.authenticationKey, 32);
            return encodedKey;
        }
        else if (this.innerKey.type === _enums__WEBPACK_IMPORTED_MODULE_1__.EncryptionType.CoseEncrypt0) {
            return this.innerKey.encryptionKey;
        }
        else {
            throw new Error("Unsupported encryption type.");
        }
    }
    /**
     * @param s The serialized key in base64 format
     * @returns A SymmetricCryptoKey instance
     */
    static fromString(s) {
        if (s == null) {
            return null;
        }
        const arrayBuffer = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.fromB64ToArray(s);
        return new SymmetricCryptoKey(arrayBuffer);
    }
    static fromJSON(obj) {
        return SymmetricCryptoKey.fromString(obj === null || obj === void 0 ? void 0 : obj.keyB64);
    }
}


/***/ }),

/***/ "../../libs/common/src/platform/services/console-log.service.ts":
/*!**********************************************************************!*\
  !*** ../../libs/common/src/platform/services/console-log.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogService: () => (/* reexport safe */ _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogService)
/* harmony export */ });
/* harmony import */ var _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/logging */ "../../libs/logging/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/services/container.service.ts":
/*!********************************************************************!*\
  !*** ../../libs/common/src/platform/services/container.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerService: () => (/* binding */ ContainerService)
/* harmony export */ });
class ContainerService {
    constructor(keyService, encryptService) {
        this.keyService = keyService;
        this.encryptService = encryptService;
    }
    attachToGlobal(global) {
        if (!global.bitwardenContainerService) {
            global.bitwardenContainerService = this;
        }
    }
    /**
     * @throws Will throw if KeyService was not instantiated and provided to the ContainerService constructor
     */
    getKeyService() {
        if (this.keyService == null) {
            throw new Error("ContainerService.keyService not initialized.");
        }
        return this.keyService;
    }
    /**
     * @throws Will throw if EncryptService was not instantiated and provided to the ContainerService constructor
     */
    getEncryptService() {
        if (this.encryptService == null) {
            throw new Error("ContainerService.encryptService not initialized.");
        }
        return this.encryptService;
    }
}


/***/ }),

/***/ "../../libs/common/src/platform/services/cryptography/get-class-initializer.ts":
/*!*************************************************************************************!*\
  !*** ../../libs/common/src/platform/services/cryptography/get-class-initializer.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClassInitializer: () => (/* binding */ getClassInitializer)
/* harmony export */ });
/* harmony import */ var _vault_models_domain_cipher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vault/models/domain/cipher */ "../../libs/common/src/vault/models/domain/cipher.ts");
/* harmony import */ var _vault_models_view_cipher_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../vault/models/view/cipher.view */ "../../libs/common/src/vault/models/view/cipher.view.ts");
/* harmony import */ var _initializer_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initializer-key */ "../../libs/common/src/platform/services/cryptography/initializer-key.ts");



/**
 * Internal reference of classes so we can reconstruct objects properly.
 * Each entry should be keyed using the Decryptable.initializerKey property
 */
const classInitializers = {
    [_initializer_key__WEBPACK_IMPORTED_MODULE_2__.InitializerKey.Cipher]: _vault_models_domain_cipher__WEBPACK_IMPORTED_MODULE_0__.Cipher.fromJSON,
    [_initializer_key__WEBPACK_IMPORTED_MODULE_2__.InitializerKey.CipherView]: _vault_models_view_cipher_view__WEBPACK_IMPORTED_MODULE_1__.CipherView.fromJSON,
};
function getClassInitializer(className) {
    return classInitializers[className];
}


/***/ }),

/***/ "../../libs/common/src/platform/services/cryptography/initializer-key.ts":
/*!*******************************************************************************!*\
  !*** ../../libs/common/src/platform/services/cryptography/initializer-key.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitializerKey: () => (/* binding */ InitializerKey)
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var InitializerKey;
(function (InitializerKey) {
    InitializerKey[InitializerKey["Cipher"] = 0] = "Cipher";
    InitializerKey[InitializerKey["CipherView"] = 1] = "CipherView";
})(InitializerKey || (InitializerKey = {}));


/***/ }),

/***/ "../../libs/common/src/vault/enums/cipher-reprompt-type.ts":
/*!*****************************************************************!*\
  !*** ../../libs/common/src/vault/enums/cipher-reprompt-type.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherRepromptType: () => (/* binding */ CipherRepromptType)
/* harmony export */ });
const CipherRepromptType = {
    None: 0,
    Password: 1,
};


/***/ }),

/***/ "../../libs/common/src/vault/enums/cipher-type.ts":
/*!********************************************************!*\
  !*** ../../libs/common/src/vault/enums/cipher-type.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherType: () => (/* binding */ CipherType),
/* harmony export */   cipherTypeNames: () => (/* binding */ cipherTypeNames),
/* harmony export */   isCipherType: () => (/* binding */ isCipherType),
/* harmony export */   toCipherType: () => (/* binding */ toCipherType),
/* harmony export */   toCipherTypeName: () => (/* binding */ toCipherTypeName)
/* harmony export */ });
const _CipherType = Object.freeze({
    Login: 1,
    SecureNote: 2,
    Card: 3,
    Identity: 4,
    SshKey: 5,
});
// FIXME: Update typing of `CipherType` to be `Record<keyof _CipherType, CipherType>` which is ADR-0025 compliant when the TypeScript version is at least 5.8.
const CipherType = _CipherType;
/**
 * Reverse mapping of Cipher Types to their associated names.
 * Prefer using {@link toCipherTypeName} rather than accessing this object directly.
 *
 * When represented as an enum in TypeScript, this mapping was provided
 * by default. Now using a constant object it needs to be defined manually.
 */
const cipherTypeNames = Object.freeze(Object.fromEntries(Object.entries(CipherType).map(([key, value]) => [value, key])));
/**
 * Returns the associated name for the cipher type, will throw when the name is not found.
 */
function toCipherTypeName(type) {
    const name = cipherTypeNames[type];
    return name;
}
/**
 * @returns `true` if the value is a valid `CipherType`, `false` otherwise.
 */
const isCipherType = (value) => {
    return Object.values(CipherType).includes(value);
};
/**
 * Converts a value to a `CipherType` if it is valid, otherwise returns `null`.
 */
const toCipherType = (value) => {
    if (isCipherType(value)) {
        return value;
    }
    if (typeof value === "string") {
        const valueAsInt = parseInt(value, 10);
        if (isCipherType(valueAsInt)) {
            return valueAsInt;
        }
    }
    return undefined;
};


/***/ }),

/***/ "../../libs/common/src/vault/enums/extension-page-urls.enum.ts":
/*!*********************************************************************!*\
  !*** ../../libs/common/src/vault/enums/extension-page-urls.enum.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionPageUrls: () => (/* binding */ ExtensionPageUrls)
/* harmony export */ });
/**
 * Available pages within the extension by their URL.
 * Useful when opening a specific page within the popup.
 */
const ExtensionPageUrls = {
    Index: "popup/index.html#/",
    AtRiskPasswords: "popup/index.html#/at-risk-passwords",
};


/***/ }),

/***/ "../../libs/common/src/vault/enums/field-type.enum.ts":
/*!************************************************************!*\
  !*** ../../libs/common/src/vault/enums/field-type.enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldType: () => (/* binding */ FieldType)
/* harmony export */ });
const _FieldType = Object.freeze({
    Text: 0,
    Hidden: 1,
    Boolean: 2,
    Linked: 3,
});
const FieldType = _FieldType;


/***/ }),

/***/ "../../libs/common/src/vault/enums/index.ts":
/*!**************************************************!*\
  !*** ../../libs/common/src/vault/enums/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardLinkedId: () => (/* reexport safe */ _linked_id_type_enum__WEBPACK_IMPORTED_MODULE_3__.CardLinkedId),
/* harmony export */   CipherRepromptType: () => (/* reexport safe */ _cipher_reprompt_type__WEBPACK_IMPORTED_MODULE_0__.CipherRepromptType),
/* harmony export */   CipherType: () => (/* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.CipherType),
/* harmony export */   ExtensionPageUrls: () => (/* reexport safe */ _extension_page_urls_enum__WEBPACK_IMPORTED_MODULE_5__.ExtensionPageUrls),
/* harmony export */   FieldType: () => (/* reexport safe */ _field_type_enum__WEBPACK_IMPORTED_MODULE_2__.FieldType),
/* harmony export */   IdentityLinkedId: () => (/* reexport safe */ _linked_id_type_enum__WEBPACK_IMPORTED_MODULE_3__.IdentityLinkedId),
/* harmony export */   LoginLinkedId: () => (/* reexport safe */ _linked_id_type_enum__WEBPACK_IMPORTED_MODULE_3__.LoginLinkedId),
/* harmony export */   SecureNoteType: () => (/* reexport safe */ _secure_note_type_enum__WEBPACK_IMPORTED_MODULE_4__.SecureNoteType),
/* harmony export */   cipherTypeNames: () => (/* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.cipherTypeNames),
/* harmony export */   isCipherType: () => (/* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.isCipherType),
/* harmony export */   toCipherType: () => (/* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.toCipherType),
/* harmony export */   toCipherTypeName: () => (/* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.toCipherTypeName)
/* harmony export */ });
/* harmony import */ var _cipher_reprompt_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-reprompt-type */ "../../libs/common/src/vault/enums/cipher-reprompt-type.ts");
/* harmony import */ var _cipher_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cipher-type */ "../../libs/common/src/vault/enums/cipher-type.ts");
/* harmony import */ var _field_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-type.enum */ "../../libs/common/src/vault/enums/field-type.enum.ts");
/* harmony import */ var _linked_id_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linked-id-type.enum */ "../../libs/common/src/vault/enums/linked-id-type.enum.ts");
/* harmony import */ var _secure_note_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secure-note-type.enum */ "../../libs/common/src/vault/enums/secure-note-type.enum.ts");
/* harmony import */ var _extension_page_urls_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extension-page-urls.enum */ "../../libs/common/src/vault/enums/extension-page-urls.enum.ts");








/***/ }),

/***/ "../../libs/common/src/vault/enums/linked-id-type.enum.ts":
/*!****************************************************************!*\
  !*** ../../libs/common/src/vault/enums/linked-id-type.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardLinkedId: () => (/* binding */ CardLinkedId),
/* harmony export */   IdentityLinkedId: () => (/* binding */ IdentityLinkedId),
/* harmony export */   LoginLinkedId: () => (/* binding */ LoginLinkedId)
/* harmony export */ });
// LoginView
const LoginLinkedId = {
    Username: 100,
    Password: 101,
};
// CardView
const CardLinkedId = {
    CardholderName: 300,
    ExpMonth: 301,
    ExpYear: 302,
    Code: 303,
    Brand: 304,
    Number: 305,
};
// IdentityView
const IdentityLinkedId = {
    Title: 400,
    MiddleName: 401,
    Address1: 402,
    Address2: 403,
    Address3: 404,
    City: 405,
    State: 406,
    PostalCode: 407,
    Country: 408,
    Company: 409,
    Email: 410,
    Phone: 411,
    Ssn: 412,
    Username: 413,
    PassportNumber: 414,
    LicenseNumber: 415,
    FirstName: 416,
    LastName: 417,
    FullName: 418,
};


/***/ }),

/***/ "../../libs/common/src/vault/enums/secure-note-type.enum.ts":
/*!******************************************************************!*\
  !*** ../../libs/common/src/vault/enums/secure-note-type.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureNoteType: () => (/* binding */ SecureNoteType)
/* harmony export */ });
const SecureNoteType = {
    Generic: 0,
};


/***/ }),

/***/ "../../libs/common/src/vault/linked-field-option.decorator.ts":
/*!********************************************************************!*\
  !*** ../../libs/common/src/vault/linked-field-option.decorator.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedMetadata: () => (/* binding */ LinkedMetadata),
/* harmony export */   linkedFieldOption: () => (/* binding */ linkedFieldOption)
/* harmony export */ });
class LinkedMetadata {
    constructor(propertyKey, attributes) {
        this.propertyKey = propertyKey;
        this._i18nKey = attributes === null || attributes === void 0 ? void 0 : attributes.i18nKey;
        this.sortPosition = attributes.sortPosition;
    }
    get i18nKey() {
        var _a;
        return (_a = this._i18nKey) !== null && _a !== void 0 ? _a : this.propertyKey;
    }
}
/**
 * A decorator used to set metadata used by Linked custom fields. Apply it to a class property or getter to make it
 *    available as a Linked custom field option.
 * @param id - A unique value that is saved in the Field model. It is used to look up the decorated class property.
 * @param options - {@link LinkedMetadataAttributes}
 */
function linkedFieldOption(id, attributes) {
    return (prototype, propertyKey) => {
        if (prototype.linkedFieldOptions == null) {
            prototype.linkedFieldOptions = new Map();
        }
        prototype.linkedFieldOptions.set(id, new LinkedMetadata(propertyKey, attributes));
    };
}


/***/ }),

/***/ "../../libs/common/src/vault/models/api/cipher-permissions.api.ts":
/*!************************************************************************!*\
  !*** ../../libs/common/src/vault/models/api/cipher-permissions.api.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherPermissionsApi: () => (/* binding */ CipherPermissionsApi)
/* harmony export */ });
/* harmony import */ var _models_response_base_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/response/base.response */ "../../libs/common/src/models/response/base.response.ts");

class CipherPermissionsApi extends _models_response_base_response__WEBPACK_IMPORTED_MODULE_0__.BaseResponse {
    constructor(data = null) {
        super(data);
        this.delete = false;
        this.restore = false;
        if (data == null) {
            return;
        }
        this.delete = this.getResponseProperty("Delete");
        this.restore = this.getResponseProperty("Restore");
    }
    static fromJSON(obj) {
        return Object.assign(new CipherPermissionsApi(), obj);
    }
    /**
     * Converts the SDK CipherPermissionsApi to a CipherPermissionsApi.
     */
    static fromSdkCipherPermissions(obj) {
        if (!obj) {
            return undefined;
        }
        const permissions = new CipherPermissionsApi();
        permissions.delete = obj.delete;
        permissions.restore = obj.restore;
        return permissions;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/attachment.data.ts":
/*!******************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/attachment.data.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttachmentData: () => (/* binding */ AttachmentData)
/* harmony export */ });
class AttachmentData {
    constructor(response) {
        if (response == null) {
            return;
        }
        this.id = response.id;
        this.url = response.url;
        this.fileName = response.fileName;
        this.key = response.key;
        this.size = response.size;
        this.sizeName = response.sizeName;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/card.data.ts":
/*!************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/card.data.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardData: () => (/* binding */ CardData)
/* harmony export */ });
class CardData {
    constructor(data) {
        if (data == null) {
            return;
        }
        this.cardholderName = data.cardholderName;
        this.brand = data.brand;
        this.number = data.number;
        this.expMonth = data.expMonth;
        this.expYear = data.expYear;
        this.code = data.code;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/cipher.data.ts":
/*!**************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/cipher.data.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherData: () => (/* binding */ CipherData)
/* harmony export */ });
/* harmony import */ var _enums_cipher_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/cipher-type */ "../../libs/common/src/vault/enums/cipher-type.ts");
/* harmony import */ var _api_cipher_permissions_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/cipher-permissions.api */ "../../libs/common/src/vault/models/api/cipher-permissions.api.ts");
/* harmony import */ var _attachment_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachment.data */ "../../libs/common/src/vault/models/data/attachment.data.ts");
/* harmony import */ var _card_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.data */ "../../libs/common/src/vault/models/data/card.data.ts");
/* harmony import */ var _field_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field.data */ "../../libs/common/src/vault/models/data/field.data.ts");
/* harmony import */ var _identity_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity.data */ "../../libs/common/src/vault/models/data/identity.data.ts");
/* harmony import */ var _login_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.data */ "../../libs/common/src/vault/models/data/login.data.ts");
/* harmony import */ var _password_history_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-history.data */ "../../libs/common/src/vault/models/data/password-history.data.ts");
/* harmony import */ var _secure_note_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./secure-note.data */ "../../libs/common/src/vault/models/data/secure-note.data.ts");
/* harmony import */ var _ssh_key_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ssh-key.data */ "../../libs/common/src/vault/models/data/ssh-key.data.ts");










class CipherData {
    constructor(response, collectionIds) {
        if (response == null) {
            return;
        }
        this.id = response.id;
        this.organizationId = response.organizationId;
        this.folderId = response.folderId;
        this.edit = response.edit;
        this.viewPassword = response.viewPassword;
        this.permissions = response.permissions;
        this.organizationUseTotp = response.organizationUseTotp;
        this.favorite = response.favorite;
        this.revisionDate = response.revisionDate;
        this.type = response.type;
        this.name = response.name;
        this.notes = response.notes;
        this.collectionIds = collectionIds != null ? collectionIds : response.collectionIds;
        this.creationDate = response.creationDate;
        this.deletedDate = response.deletedDate;
        this.reprompt = response.reprompt;
        this.key = response.key;
        switch (this.type) {
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_0__.CipherType.Login:
                this.login = new _login_data__WEBPACK_IMPORTED_MODULE_6__.LoginData(response.login);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_0__.CipherType.SecureNote:
                this.secureNote = new _secure_note_data__WEBPACK_IMPORTED_MODULE_8__.SecureNoteData(response.secureNote);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_0__.CipherType.Card:
                this.card = new _card_data__WEBPACK_IMPORTED_MODULE_3__.CardData(response.card);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_0__.CipherType.Identity:
                this.identity = new _identity_data__WEBPACK_IMPORTED_MODULE_5__.IdentityData(response.identity);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_0__.CipherType.SshKey:
                this.sshKey = new _ssh_key_data__WEBPACK_IMPORTED_MODULE_9__.SshKeyData(response.sshKey);
                break;
            default:
                break;
        }
        if (response.fields != null) {
            this.fields = response.fields.map((f) => new _field_data__WEBPACK_IMPORTED_MODULE_4__.FieldData(f));
        }
        if (response.attachments != null) {
            this.attachments = response.attachments.map((a) => new _attachment_data__WEBPACK_IMPORTED_MODULE_2__.AttachmentData(a));
        }
        if (response.passwordHistory != null) {
            this.passwordHistory = response.passwordHistory.map((ph) => new _password_history_data__WEBPACK_IMPORTED_MODULE_7__.PasswordHistoryData(ph));
        }
    }
    static fromJSON(obj) {
        const result = Object.assign(new CipherData(), obj);
        result.permissions = _api_cipher_permissions_api__WEBPACK_IMPORTED_MODULE_1__.CipherPermissionsApi.fromJSON(obj.permissions);
        return result;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/fido2-credential.data.ts":
/*!************************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/fido2-credential.data.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fido2CredentialData: () => (/* binding */ Fido2CredentialData)
/* harmony export */ });
class Fido2CredentialData {
    constructor(data) {
        if (data == null) {
            return;
        }
        this.credentialId = data.credentialId;
        this.keyType = data.keyType;
        this.keyAlgorithm = data.keyAlgorithm;
        this.keyCurve = data.keyCurve;
        this.keyValue = data.keyValue;
        this.rpId = data.rpId;
        this.userHandle = data.userHandle;
        this.userName = data.userName;
        this.counter = data.counter;
        this.rpName = data.rpName;
        this.userDisplayName = data.userDisplayName;
        this.discoverable = data.discoverable;
        this.creationDate = data.creationDate;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/field.data.ts":
/*!*************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/field.data.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldData: () => (/* binding */ FieldData)
/* harmony export */ });
class FieldData {
    constructor(response) {
        if (response == null) {
            return;
        }
        this.type = response.type;
        this.name = response.name;
        this.value = response.value;
        this.linkedId = response.linkedId;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/identity.data.ts":
/*!****************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/identity.data.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityData: () => (/* binding */ IdentityData)
/* harmony export */ });
class IdentityData {
    constructor(data) {
        if (data == null) {
            return;
        }
        this.title = data.title;
        this.firstName = data.firstName;
        this.middleName = data.middleName;
        this.lastName = data.lastName;
        this.address1 = data.address1;
        this.address2 = data.address2;
        this.address3 = data.address3;
        this.city = data.city;
        this.state = data.state;
        this.postalCode = data.postalCode;
        this.country = data.country;
        this.company = data.company;
        this.email = data.email;
        this.phone = data.phone;
        this.ssn = data.ssn;
        this.username = data.username;
        this.passportNumber = data.passportNumber;
        this.licenseNumber = data.licenseNumber;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/login-uri.data.ts":
/*!*****************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/login-uri.data.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginUriData: () => (/* binding */ LoginUriData)
/* harmony export */ });
class LoginUriData {
    constructor(data) {
        this.match = null;
        if (data == null) {
            return;
        }
        this.uri = data.uri;
        this.uriChecksum = data.uriChecksum;
        this.match = data.match;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/login.data.ts":
/*!*************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/login.data.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginData: () => (/* binding */ LoginData)
/* harmony export */ });
/* harmony import */ var _fido2_credential_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fido2-credential.data */ "../../libs/common/src/vault/models/data/fido2-credential.data.ts");
/* harmony import */ var _login_uri_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-uri.data */ "../../libs/common/src/vault/models/data/login-uri.data.ts");


class LoginData {
    constructor(data) {
        var _a;
        if (data == null) {
            return;
        }
        this.username = data.username;
        this.password = data.password;
        this.passwordRevisionDate = data.passwordRevisionDate;
        this.totp = data.totp;
        this.autofillOnPageLoad = data.autofillOnPageLoad;
        if (data.uris) {
            this.uris = data.uris.map((u) => new _login_uri_data__WEBPACK_IMPORTED_MODULE_1__.LoginUriData(u));
        }
        if (data.fido2Credentials) {
            this.fido2Credentials = (_a = data.fido2Credentials) === null || _a === void 0 ? void 0 : _a.map((key) => new _fido2_credential_data__WEBPACK_IMPORTED_MODULE_0__.Fido2CredentialData(key));
        }
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/password-history.data.ts":
/*!************************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/password-history.data.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordHistoryData: () => (/* binding */ PasswordHistoryData)
/* harmony export */ });
class PasswordHistoryData {
    constructor(response) {
        if (response == null) {
            return;
        }
        this.password = response.password;
        this.lastUsedDate = response.lastUsedDate;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/secure-note.data.ts":
/*!*******************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/secure-note.data.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureNoteData: () => (/* binding */ SecureNoteData)
/* harmony export */ });
class SecureNoteData {
    constructor(data) {
        if (data == null) {
            return;
        }
        this.type = data.type;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/data/ssh-key.data.ts":
/*!***************************************************************!*\
  !*** ../../libs/common/src/vault/models/data/ssh-key.data.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SshKeyData: () => (/* binding */ SshKeyData)
/* harmony export */ });
class SshKeyData {
    constructor(data) {
        if (data == null) {
            return;
        }
        this.privateKey = data.privateKey;
        this.publicKey = data.publicKey;
        this.keyFingerprint = data.keyFingerprint;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/attachment.ts":
/*!***************************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/attachment.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Attachment: () => (/* binding */ Attachment)
/* harmony export */ });
/* harmony import */ var _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _data_attachment_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/attachment.data */ "../../libs/common/src/vault/models/data/attachment.data.ts");
/* harmony import */ var _view_attachment_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/attachment.view */ "../../libs/common/src/vault/models/view/attachment.view.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class Attachment extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(obj) {
        super();
        if (obj == null) {
            return;
        }
        this.size = obj.size;
        this.buildDomainModel(this, obj, {
            id: null,
            url: null,
            sizeName: null,
            fileName: null,
            key: null,
        }, ["id", "url", "sizeName"]);
    }
    decrypt(orgId_1) {
        return __awaiter(this, arguments, void 0, function* (orgId, context = "No Cipher Context", encKey) {
            const view = yield this.decryptObj(this, new _view_attachment_view__WEBPACK_IMPORTED_MODULE_4__.AttachmentView(this), ["fileName"], orgId, encKey, "DomainType: Attachment; " + context);
            if (this.key != null) {
                view.key = yield this.decryptAttachmentKey(orgId, encKey);
            }
            return view;
        });
    }
    decryptAttachmentKey(orgId, encKey) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (encKey == null) {
                    encKey = yield this.getKeyForDecryption(orgId);
                }
                const encryptService = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getContainerService().getEncryptService();
                const decValue = yield encryptService.unwrapSymmetricKey(this.key, encKey);
                return decValue;
                // FIXME: Remove when updating file. Eslint update
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            }
            catch (e) {
                // TODO: error?
            }
        });
    }
    getKeyForDecryption(orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyService = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getContainerService().getKeyService();
            return orgId != null
                ? yield keyService.getOrgKey(orgId)
                : yield keyService.getUserKeyWithLegacySupport();
        });
    }
    toAttachmentData() {
        const a = new _data_attachment_data__WEBPACK_IMPORTED_MODULE_3__.AttachmentData();
        a.size = this.size;
        this.buildDataModel(this, a, {
            id: null,
            url: null,
            sizeName: null,
            fileName: null,
            key: null,
        }, ["id", "url", "sizeName"]);
        return a;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        const key = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__.EncString.fromJSON(obj.key);
        const fileName = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__.EncString.fromJSON(obj.fileName);
        return Object.assign(new Attachment(), obj, {
            key,
            fileName,
        });
    }
    /**
     * Maps to SDK Attachment
     *
     * @returns {SdkAttachment} - The SDK Attachment object
     */
    toSdkAttachment() {
        var _a, _b;
        return {
            id: this.id,
            url: this.url,
            size: this.size,
            sizeName: this.sizeName,
            fileName: (_a = this.fileName) === null || _a === void 0 ? void 0 : _a.toJSON(),
            key: (_b = this.key) === null || _b === void 0 ? void 0 : _b.toJSON(),
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/card.ts":
/*!*********************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/card.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _data_card_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/card.data */ "../../libs/common/src/vault/models/data/card.data.ts");
/* harmony import */ var _view_card_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/card.view */ "../../libs/common/src/vault/models/view/card.view.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Card extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(obj) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            cardholderName: null,
            brand: null,
            number: null,
            expMonth: null,
            expYear: null,
            code: null,
        }, []);
    }
    decrypt(orgId_1) {
        return __awaiter(this, arguments, void 0, function* (orgId, context = "No Cipher Context", encKey) {
            return this.decryptObj(this, new _view_card_view__WEBPACK_IMPORTED_MODULE_3__.CardView(), ["cardholderName", "brand", "number", "expMonth", "expYear", "code"], orgId, encKey, "DomainType: Card; " + context);
        });
    }
    toCardData() {
        const c = new _data_card_data__WEBPACK_IMPORTED_MODULE_2__.CardData();
        this.buildDataModel(this, c, {
            cardholderName: null,
            brand: null,
            number: null,
            expMonth: null,
            expYear: null,
            code: null,
        });
        return c;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        const cardholderName = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.cardholderName);
        const brand = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.brand);
        const number = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.number);
        const expMonth = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.expMonth);
        const expYear = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.expYear);
        const code = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.code);
        return Object.assign(new Card(), obj, {
            cardholderName,
            brand,
            number,
            expMonth,
            expYear,
            code,
        });
    }
    /**
     *  Maps Card to SDK format.
     *
     * @returns {SdkCard} The SDK card object.
     */
    toSdkCard() {
        var _a, _b, _c, _d, _e, _f;
        return {
            cardholderName: (_a = this.cardholderName) === null || _a === void 0 ? void 0 : _a.toJSON(),
            brand: (_b = this.brand) === null || _b === void 0 ? void 0 : _b.toJSON(),
            number: (_c = this.number) === null || _c === void 0 ? void 0 : _c.toJSON(),
            expMonth: (_d = this.expMonth) === null || _d === void 0 ? void 0 : _d.toJSON(),
            expYear: (_e = this.expYear) === null || _e === void 0 ? void 0 : _e.toJSON(),
            code: (_f = this.code) === null || _f === void 0 ? void 0 : _f.toJSON(),
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/cipher.ts":
/*!***********************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/cipher.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cipher: () => (/* binding */ Cipher)
/* harmony export */ });
/* harmony import */ var _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _platform_services_cryptography_initializer_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../platform/services/cryptography/initializer-key */ "../../libs/common/src/platform/services/cryptography/initializer-key.ts");
/* harmony import */ var _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums/cipher-type */ "../../libs/common/src/vault/enums/cipher-type.ts");
/* harmony import */ var _data_cipher_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/cipher.data */ "../../libs/common/src/vault/models/data/cipher.data.ts");
/* harmony import */ var _view_cipher_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/cipher.view */ "../../libs/common/src/vault/models/view/cipher.view.ts");
/* harmony import */ var _attachment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attachment */ "../../libs/common/src/vault/models/domain/attachment.ts");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card */ "../../libs/common/src/vault/models/domain/card.ts");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./field */ "../../libs/common/src/vault/models/domain/field.ts");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./identity */ "../../libs/common/src/vault/models/domain/identity.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "../../libs/common/src/vault/models/domain/login.ts");
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./password */ "../../libs/common/src/vault/models/domain/password.ts");
/* harmony import */ var _secure_note__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./secure-note */ "../../libs/common/src/vault/models/domain/secure-note.ts");
/* harmony import */ var _ssh_key__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ssh-key */ "../../libs/common/src/vault/models/domain/ssh-key.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















class Cipher extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(obj, localData = null) {
        super();
        this.initializerKey = _platform_services_cryptography_initializer_key__WEBPACK_IMPORTED_MODULE_3__.InitializerKey.Cipher;
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            id: null,
            organizationId: null,
            folderId: null,
            name: null,
            notes: null,
            key: null,
        }, ["id", "organizationId", "folderId"]);
        this.type = obj.type;
        this.favorite = obj.favorite;
        this.organizationUseTotp = obj.organizationUseTotp;
        this.edit = obj.edit;
        if (obj.viewPassword != null) {
            this.viewPassword = obj.viewPassword;
        }
        else {
            this.viewPassword = true; // Default for already synced Ciphers without viewPassword
        }
        this.permissions = obj.permissions;
        this.revisionDate = obj.revisionDate != null ? new Date(obj.revisionDate) : null;
        this.collectionIds = obj.collectionIds;
        this.localData = localData;
        this.creationDate = obj.creationDate != null ? new Date(obj.creationDate) : null;
        this.deletedDate = obj.deletedDate != null ? new Date(obj.deletedDate) : null;
        this.reprompt = obj.reprompt;
        switch (this.type) {
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Login:
                this.login = new _login__WEBPACK_IMPORTED_MODULE_11__.Login(obj.login);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SecureNote:
                this.secureNote = new _secure_note__WEBPACK_IMPORTED_MODULE_13__.SecureNote(obj.secureNote);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Card:
                this.card = new _card__WEBPACK_IMPORTED_MODULE_8__.Card(obj.card);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Identity:
                this.identity = new _identity__WEBPACK_IMPORTED_MODULE_10__.Identity(obj.identity);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SshKey:
                this.sshKey = new _ssh_key__WEBPACK_IMPORTED_MODULE_14__.SshKey(obj.sshKey);
                break;
            default:
                break;
        }
        if (obj.attachments != null) {
            this.attachments = obj.attachments.map((a) => new _attachment__WEBPACK_IMPORTED_MODULE_7__.Attachment(a));
        }
        else {
            this.attachments = null;
        }
        if (obj.fields != null) {
            this.fields = obj.fields.map((f) => new _field__WEBPACK_IMPORTED_MODULE_9__.Field(f));
        }
        else {
            this.fields = null;
        }
        if (obj.passwordHistory != null) {
            this.passwordHistory = obj.passwordHistory.map((ph) => new _password__WEBPACK_IMPORTED_MODULE_12__.Password(ph));
        }
        else {
            this.passwordHistory = null;
        }
    }
    // We are passing the organizationId into the EncString.decrypt() method here, but because the encKey will always be
    // present and so the organizationId will not be used.
    // We will refactor the EncString.decrypt() in https://bitwarden.atlassian.net/browse/PM-3762 to remove the dependency on the organizationId.
    decrypt(encKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new _view_cipher_view__WEBPACK_IMPORTED_MODULE_6__.CipherView(this);
            let bypassValidation = true;
            if (this.key != null) {
                const encryptService = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getContainerService().getEncryptService();
                try {
                    const cipherKey = yield encryptService.unwrapSymmetricKey(this.key, encKey);
                    encKey = cipherKey;
                    bypassValidation = false;
                }
                catch (_a) {
                    model.name = "[error: cannot decrypt]";
                    model.decryptionFailure = true;
                    return model;
                }
            }
            yield this.decryptObj(this, model, ["name", "notes"], this.organizationId, encKey);
            switch (this.type) {
                case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Login:
                    model.login = yield this.login.decrypt(this.organizationId, bypassValidation, `Cipher Id: ${this.id}`, encKey);
                    break;
                case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SecureNote:
                    model.secureNote = yield this.secureNote.decrypt(this.organizationId, `Cipher Id: ${this.id}`, encKey);
                    break;
                case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Card:
                    model.card = yield this.card.decrypt(this.organizationId, `Cipher Id: ${this.id}`, encKey);
                    break;
                case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Identity:
                    model.identity = yield this.identity.decrypt(this.organizationId, `Cipher Id: ${this.id}`, encKey);
                    break;
                case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SshKey:
                    model.sshKey = yield this.sshKey.decrypt(this.organizationId, `Cipher Id: ${this.id}`, encKey);
                    break;
                default:
                    break;
            }
            if (this.attachments != null && this.attachments.length > 0) {
                const attachments = [];
                for (const attachment of this.attachments) {
                    attachments.push(yield attachment.decrypt(this.organizationId, `Cipher Id: ${this.id}`, encKey));
                }
                model.attachments = attachments;
            }
            if (this.fields != null && this.fields.length > 0) {
                const fields = [];
                for (const field of this.fields) {
                    fields.push(yield field.decrypt(this.organizationId, encKey));
                }
                model.fields = fields;
            }
            if (this.passwordHistory != null && this.passwordHistory.length > 0) {
                const passwordHistory = [];
                for (const ph of this.passwordHistory) {
                    passwordHistory.push(yield ph.decrypt(this.organizationId, encKey));
                }
                model.passwordHistory = passwordHistory;
            }
            return model;
        });
    }
    toCipherData() {
        var _a;
        const c = new _data_cipher_data__WEBPACK_IMPORTED_MODULE_5__.CipherData();
        c.id = this.id;
        c.organizationId = this.organizationId;
        c.folderId = this.folderId;
        c.edit = this.edit;
        c.viewPassword = this.viewPassword;
        c.organizationUseTotp = this.organizationUseTotp;
        c.favorite = this.favorite;
        c.revisionDate = this.revisionDate != null ? this.revisionDate.toISOString() : null;
        c.type = this.type;
        c.collectionIds = this.collectionIds;
        c.creationDate = this.creationDate != null ? this.creationDate.toISOString() : null;
        c.deletedDate = this.deletedDate != null ? this.deletedDate.toISOString() : null;
        c.reprompt = this.reprompt;
        c.key = (_a = this.key) === null || _a === void 0 ? void 0 : _a.encryptedString;
        c.permissions = this.permissions;
        this.buildDataModel(this, c, {
            name: null,
            notes: null,
        });
        switch (c.type) {
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Login:
                c.login = this.login.toLoginData();
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SecureNote:
                c.secureNote = this.secureNote.toSecureNoteData();
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Card:
                c.card = this.card.toCardData();
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Identity:
                c.identity = this.identity.toIdentityData();
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SshKey:
                c.sshKey = this.sshKey.toSshKeyData();
                break;
            default:
                break;
        }
        if (this.fields != null) {
            c.fields = this.fields.map((f) => f.toFieldData());
        }
        if (this.attachments != null) {
            c.attachments = this.attachments.map((a) => a.toAttachmentData());
        }
        if (this.passwordHistory != null) {
            c.passwordHistory = this.passwordHistory.map((ph) => ph.toPasswordHistoryData());
        }
        return c;
    }
    static fromJSON(obj) {
        var _a, _b, _c;
        if (obj == null) {
            return null;
        }
        const domain = new Cipher();
        const name = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__.EncString.fromJSON(obj.name);
        const notes = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__.EncString.fromJSON(obj.notes);
        const creationDate = obj.creationDate == null ? null : new Date(obj.creationDate);
        const revisionDate = obj.revisionDate == null ? null : new Date(obj.revisionDate);
        const deletedDate = obj.deletedDate == null ? null : new Date(obj.deletedDate);
        const attachments = (_a = obj.attachments) === null || _a === void 0 ? void 0 : _a.map((a) => _attachment__WEBPACK_IMPORTED_MODULE_7__.Attachment.fromJSON(a));
        const fields = (_b = obj.fields) === null || _b === void 0 ? void 0 : _b.map((f) => _field__WEBPACK_IMPORTED_MODULE_9__.Field.fromJSON(f));
        const passwordHistory = (_c = obj.passwordHistory) === null || _c === void 0 ? void 0 : _c.map((ph) => _password__WEBPACK_IMPORTED_MODULE_12__.Password.fromJSON(ph));
        const key = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__.EncString.fromJSON(obj.key);
        Object.assign(domain, obj, {
            name,
            notes,
            creationDate,
            revisionDate,
            deletedDate,
            attachments,
            fields,
            passwordHistory,
            key,
        });
        switch (obj.type) {
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Card:
                domain.card = _card__WEBPACK_IMPORTED_MODULE_8__.Card.fromJSON(obj.card);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Identity:
                domain.identity = _identity__WEBPACK_IMPORTED_MODULE_10__.Identity.fromJSON(obj.identity);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Login:
                domain.login = _login__WEBPACK_IMPORTED_MODULE_11__.Login.fromJSON(obj.login);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SecureNote:
                domain.secureNote = _secure_note__WEBPACK_IMPORTED_MODULE_13__.SecureNote.fromJSON(obj.secureNote);
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SshKey:
                domain.sshKey = _ssh_key__WEBPACK_IMPORTED_MODULE_14__.SshKey.fromJSON(obj.sshKey);
                break;
            default:
                break;
        }
        return domain;
    }
    /**
     * Maps Cipher to SDK format.
     *
     * @returns {SdkCipher} The SDK cipher object.
     */
    toSdkCipher() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const sdkCipher = {
            id: this.id,
            organizationId: (_a = this.organizationId) !== null && _a !== void 0 ? _a : undefined,
            folderId: (_b = this.folderId) !== null && _b !== void 0 ? _b : undefined,
            collectionIds: (_c = this.collectionIds) !== null && _c !== void 0 ? _c : [],
            key: (_d = this.key) === null || _d === void 0 ? void 0 : _d.toJSON(),
            name: this.name.toJSON(),
            notes: (_e = this.notes) === null || _e === void 0 ? void 0 : _e.toJSON(),
            type: this.type,
            favorite: (_f = this.favorite) !== null && _f !== void 0 ? _f : false,
            organizationUseTotp: (_g = this.organizationUseTotp) !== null && _g !== void 0 ? _g : false,
            edit: (_h = this.edit) !== null && _h !== void 0 ? _h : true,
            permissions: this.permissions
                ? {
                    delete: this.permissions.delete,
                    restore: this.permissions.restore,
                }
                : undefined,
            viewPassword: (_j = this.viewPassword) !== null && _j !== void 0 ? _j : true,
            localData: this.localData
                ? {
                    lastUsedDate: this.localData.lastUsedDate
                        ? new Date(this.localData.lastUsedDate).toISOString()
                        : undefined,
                    lastLaunched: this.localData.lastLaunched
                        ? new Date(this.localData.lastLaunched).toISOString()
                        : undefined,
                }
                : undefined,
            attachments: (_k = this.attachments) === null || _k === void 0 ? void 0 : _k.map((a) => a.toSdkAttachment()),
            fields: (_l = this.fields) === null || _l === void 0 ? void 0 : _l.map((f) => f.toSdkField()),
            passwordHistory: (_m = this.passwordHistory) === null || _m === void 0 ? void 0 : _m.map((ph) => ph.toSdkPasswordHistory()),
            revisionDate: (_o = this.revisionDate) === null || _o === void 0 ? void 0 : _o.toISOString(),
            creationDate: (_p = this.creationDate) === null || _p === void 0 ? void 0 : _p.toISOString(),
            deletedDate: (_q = this.deletedDate) === null || _q === void 0 ? void 0 : _q.toISOString(),
            reprompt: this.reprompt,
            // Initialize all cipher-type-specific properties as undefined
            login: undefined,
            identity: undefined,
            card: undefined,
            secureNote: undefined,
            sshKey: undefined,
        };
        switch (this.type) {
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Login:
                sdkCipher.login = this.login.toSdkLogin();
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SecureNote:
                sdkCipher.secureNote = this.secureNote.toSdkSecureNote();
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Card:
                sdkCipher.card = this.card.toSdkCard();
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.Identity:
                sdkCipher.identity = this.identity.toSdkIdentity();
                break;
            case _enums_cipher_type__WEBPACK_IMPORTED_MODULE_4__.CipherType.SshKey:
                sdkCipher.sshKey = this.sshKey.toSdkSshKey();
                break;
            default:
                break;
        }
        return sdkCipher;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/fido2-credential.ts":
/*!*********************************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/fido2-credential.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fido2Credential: () => (/* binding */ Fido2Credential)
/* harmony export */ });
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _data_fido2_credential_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/fido2-credential.data */ "../../libs/common/src/vault/models/data/fido2-credential.data.ts");
/* harmony import */ var _view_fido2_credential_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/fido2-credential.view */ "../../libs/common/src/vault/models/view/fido2-credential.view.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Fido2Credential extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(obj) {
        super();
        this.credentialId = null;
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            credentialId: null,
            keyType: null,
            keyAlgorithm: null,
            keyCurve: null,
            keyValue: null,
            rpId: null,
            userHandle: null,
            userName: null,
            counter: null,
            rpName: null,
            userDisplayName: null,
            discoverable: null,
        }, []);
        this.creationDate = obj.creationDate != null ? new Date(obj.creationDate) : null;
    }
    decrypt(orgId, encKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const view = yield this.decryptObj(this, new _view_fido2_credential_view__WEBPACK_IMPORTED_MODULE_3__.Fido2CredentialView(), [
                "credentialId",
                "keyType",
                "keyAlgorithm",
                "keyCurve",
                "keyValue",
                "rpId",
                "userHandle",
                "userName",
                "rpName",
                "userDisplayName",
            ], orgId, encKey);
            const { counter } = yield this.decryptObj(this, { counter: "" }, ["counter"], orgId, encKey);
            // Counter will end up as NaN if this fails
            view.counter = parseInt(counter);
            const { discoverable } = yield this.decryptObj(this, { discoverable: "" }, ["discoverable"], orgId, encKey);
            view.discoverable = discoverable === "true";
            view.creationDate = this.creationDate;
            return view;
        });
    }
    toFido2CredentialData() {
        const i = new _data_fido2_credential_data__WEBPACK_IMPORTED_MODULE_2__.Fido2CredentialData();
        i.creationDate = this.creationDate.toISOString();
        this.buildDataModel(this, i, {
            credentialId: null,
            keyType: null,
            keyAlgorithm: null,
            keyCurve: null,
            keyValue: null,
            rpId: null,
            userHandle: null,
            userName: null,
            counter: null,
            rpName: null,
            userDisplayName: null,
            discoverable: null,
        });
        return i;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        const credentialId = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.credentialId);
        const keyType = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.keyType);
        const keyAlgorithm = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.keyAlgorithm);
        const keyCurve = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.keyCurve);
        const keyValue = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.keyValue);
        const rpId = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.rpId);
        const userHandle = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.userHandle);
        const userName = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.userName);
        const counter = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.counter);
        const rpName = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.rpName);
        const userDisplayName = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.userDisplayName);
        const discoverable = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.discoverable);
        const creationDate = obj.creationDate != null ? new Date(obj.creationDate) : null;
        return Object.assign(new Fido2Credential(), obj, {
            credentialId,
            keyType,
            keyAlgorithm,
            keyCurve,
            keyValue,
            rpId,
            userHandle,
            userName,
            counter,
            rpName,
            userDisplayName,
            discoverable,
            creationDate,
        });
    }
    /**
     *  Maps Fido2Credential to SDK format.
     *
     * @returns {SdkFido2Credential} The SDK Fido2Credential object.
     */
    toSdkFido2Credential() {
        var _a, _b, _c, _d, _e, _f;
        return {
            credentialId: (_a = this.credentialId) === null || _a === void 0 ? void 0 : _a.toJSON(),
            keyType: this.keyType.toJSON(),
            keyAlgorithm: this.keyAlgorithm.toJSON(),
            keyCurve: this.keyCurve.toJSON(),
            keyValue: this.keyValue.toJSON(),
            rpId: this.rpId.toJSON(),
            userHandle: (_b = this.userHandle) === null || _b === void 0 ? void 0 : _b.toJSON(),
            userName: (_c = this.userName) === null || _c === void 0 ? void 0 : _c.toJSON(),
            counter: this.counter.toJSON(),
            rpName: (_d = this.rpName) === null || _d === void 0 ? void 0 : _d.toJSON(),
            userDisplayName: (_e = this.userDisplayName) === null || _e === void 0 ? void 0 : _e.toJSON(),
            discoverable: (_f = this.discoverable) === null || _f === void 0 ? void 0 : _f.toJSON(),
            creationDate: this.creationDate.toISOString(),
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/field.ts":
/*!**********************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/field.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _data_field_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/field.data */ "../../libs/common/src/vault/models/data/field.data.ts");
/* harmony import */ var _view_field_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/field.view */ "../../libs/common/src/vault/models/view/field.view.ts");




class Field extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(obj) {
        super();
        if (obj == null) {
            return;
        }
        this.type = obj.type;
        this.linkedId = obj.linkedId;
        this.buildDomainModel(this, obj, {
            name: null,
            value: null,
        }, []);
    }
    decrypt(orgId, encKey) {
        return this.decryptObj(this, new _view_field_view__WEBPACK_IMPORTED_MODULE_3__.FieldView(this), ["name", "value"], orgId, encKey);
    }
    toFieldData() {
        const f = new _data_field_data__WEBPACK_IMPORTED_MODULE_2__.FieldData();
        this.buildDataModel(this, f, {
            name: null,
            value: null,
            type: null,
            linkedId: null,
        }, ["type", "linkedId"]);
        return f;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        const name = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.name);
        const value = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.value);
        return Object.assign(new Field(), obj, {
            name,
            value,
        });
    }
    /**
     * Maps Field to SDK format.
     *
     * @returns {SdkField} The SDK field object.
     */
    toSdkField() {
        var _a, _b;
        return {
            name: (_a = this.name) === null || _a === void 0 ? void 0 : _a.toJSON(),
            value: (_b = this.value) === null || _b === void 0 ? void 0 : _b.toJSON(),
            type: this.type,
            // Safe type cast: client and SDK LinkedIdType enums have identical values
            linkedId: this.linkedId,
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/identity.ts":
/*!*************************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/identity.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Identity: () => (/* binding */ Identity)
/* harmony export */ });
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _data_identity_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/identity.data */ "../../libs/common/src/vault/models/data/identity.data.ts");
/* harmony import */ var _view_identity_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/identity.view */ "../../libs/common/src/vault/models/view/identity.view.ts");




class Identity extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(obj) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            title: null,
            firstName: null,
            middleName: null,
            lastName: null,
            address1: null,
            address2: null,
            address3: null,
            city: null,
            state: null,
            postalCode: null,
            country: null,
            company: null,
            email: null,
            phone: null,
            ssn: null,
            username: null,
            passportNumber: null,
            licenseNumber: null,
        }, []);
    }
    decrypt(orgId, context = "No Cipher Context", encKey) {
        return this.decryptObj(this, new _view_identity_view__WEBPACK_IMPORTED_MODULE_3__.IdentityView(), [
            "title",
            "firstName",
            "middleName",
            "lastName",
            "address1",
            "address2",
            "address3",
            "city",
            "state",
            "postalCode",
            "country",
            "company",
            "email",
            "phone",
            "ssn",
            "username",
            "passportNumber",
            "licenseNumber",
        ], orgId, encKey, "DomainType: Identity; " + context);
    }
    toIdentityData() {
        const i = new _data_identity_data__WEBPACK_IMPORTED_MODULE_2__.IdentityData();
        this.buildDataModel(this, i, {
            title: null,
            firstName: null,
            middleName: null,
            lastName: null,
            address1: null,
            address2: null,
            address3: null,
            city: null,
            state: null,
            postalCode: null,
            country: null,
            company: null,
            email: null,
            phone: null,
            ssn: null,
            username: null,
            passportNumber: null,
            licenseNumber: null,
        });
        return i;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        const title = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.title);
        const firstName = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.firstName);
        const middleName = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.middleName);
        const lastName = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.lastName);
        const address1 = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.address1);
        const address2 = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.address2);
        const address3 = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.address3);
        const city = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.city);
        const state = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.state);
        const postalCode = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.postalCode);
        const country = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.country);
        const company = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.company);
        const email = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.email);
        const phone = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.phone);
        const ssn = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.ssn);
        const username = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.username);
        const passportNumber = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.passportNumber);
        const licenseNumber = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.licenseNumber);
        return Object.assign(new Identity(), obj, {
            title,
            firstName,
            middleName,
            lastName,
            address1,
            address2,
            address3,
            city,
            state,
            postalCode,
            country,
            company,
            email,
            phone,
            ssn,
            username,
            passportNumber,
            licenseNumber,
        });
    }
    /**
     * Maps Identity to SDK format.
     *
     * @returns {SdkIdentity} The SDK identity object.
     */
    toSdkIdentity() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return {
            title: (_a = this.title) === null || _a === void 0 ? void 0 : _a.toJSON(),
            firstName: (_b = this.firstName) === null || _b === void 0 ? void 0 : _b.toJSON(),
            middleName: (_c = this.middleName) === null || _c === void 0 ? void 0 : _c.toJSON(),
            lastName: (_d = this.lastName) === null || _d === void 0 ? void 0 : _d.toJSON(),
            address1: (_e = this.address1) === null || _e === void 0 ? void 0 : _e.toJSON(),
            address2: (_f = this.address2) === null || _f === void 0 ? void 0 : _f.toJSON(),
            address3: (_g = this.address3) === null || _g === void 0 ? void 0 : _g.toJSON(),
            city: (_h = this.city) === null || _h === void 0 ? void 0 : _h.toJSON(),
            state: (_j = this.state) === null || _j === void 0 ? void 0 : _j.toJSON(),
            postalCode: (_k = this.postalCode) === null || _k === void 0 ? void 0 : _k.toJSON(),
            country: (_l = this.country) === null || _l === void 0 ? void 0 : _l.toJSON(),
            company: (_m = this.company) === null || _m === void 0 ? void 0 : _m.toJSON(),
            email: (_o = this.email) === null || _o === void 0 ? void 0 : _o.toJSON(),
            phone: (_p = this.phone) === null || _p === void 0 ? void 0 : _p.toJSON(),
            ssn: (_q = this.ssn) === null || _q === void 0 ? void 0 : _q.toJSON(),
            username: (_r = this.username) === null || _r === void 0 ? void 0 : _r.toJSON(),
            passportNumber: (_s = this.passportNumber) === null || _s === void 0 ? void 0 : _s.toJSON(),
            licenseNumber: (_t = this.licenseNumber) === null || _t === void 0 ? void 0 : _t.toJSON(),
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/login-uri.ts":
/*!**************************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/login-uri.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginUri: () => (/* binding */ LoginUri)
/* harmony export */ });
/* harmony import */ var _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _data_login_uri_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/login-uri.data */ "../../libs/common/src/vault/models/data/login-uri.data.ts");
/* harmony import */ var _view_login_uri_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/login-uri.view */ "../../libs/common/src/vault/models/view/login-uri.view.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class LoginUri extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(obj) {
        super();
        if (obj == null) {
            return;
        }
        this.match = obj.match;
        this.buildDomainModel(this, obj, {
            uri: null,
            uriChecksum: null,
        }, []);
    }
    decrypt(orgId, context = "No Cipher Context", encKey) {
        return this.decryptObj(this, new _view_login_uri_view__WEBPACK_IMPORTED_MODULE_4__.LoginUriView(this), ["uri"], orgId, encKey, context);
    }
    validateChecksum(clearTextUri, orgId, encKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.uriChecksum == null) {
                return false;
            }
            const keyService = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getContainerService().getEncryptService();
            const localChecksum = yield keyService.hash(clearTextUri, "sha256");
            const remoteChecksum = yield this.uriChecksum.decrypt(orgId, encKey);
            return remoteChecksum === localChecksum;
        });
    }
    toLoginUriData() {
        const u = new _data_login_uri_data__WEBPACK_IMPORTED_MODULE_3__.LoginUriData();
        this.buildDataModel(this, u, {
            uri: null,
            uriChecksum: null,
            match: null,
        }, ["match"]);
        return u;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        const uri = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__.EncString.fromJSON(obj.uri);
        const uriChecksum = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_2__.EncString.fromJSON(obj.uriChecksum);
        return Object.assign(new LoginUri(), obj, {
            uri,
            uriChecksum,
        });
    }
    /**
     *  Maps LoginUri to SDK format.
     *
     * @returns {SdkLoginUri} The SDK login uri object.
     */
    toSdkLoginUri() {
        var _a, _b;
        return {
            uri: (_a = this.uri) === null || _a === void 0 ? void 0 : _a.toJSON(),
            uriChecksum: (_b = this.uriChecksum) === null || _b === void 0 ? void 0 : _b.toJSON(),
            match: this.match,
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/login.ts":
/*!**********************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/login.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Login: () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _data_login_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/login.data */ "../../libs/common/src/vault/models/data/login.data.ts");
/* harmony import */ var _view_login_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/login.view */ "../../libs/common/src/vault/models/view/login.view.ts");
/* harmony import */ var _fido2_credential__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fido2-credential */ "../../libs/common/src/vault/models/domain/fido2-credential.ts");
/* harmony import */ var _login_uri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-uri */ "../../libs/common/src/vault/models/domain/login-uri.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class Login extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(obj) {
        super();
        if (obj == null) {
            return;
        }
        this.passwordRevisionDate =
            obj.passwordRevisionDate != null ? new Date(obj.passwordRevisionDate) : null;
        this.autofillOnPageLoad = obj.autofillOnPageLoad;
        this.buildDomainModel(this, obj, {
            username: null,
            password: null,
            totp: null,
        }, []);
        if (obj.uris) {
            this.uris = [];
            obj.uris.forEach((u) => {
                this.uris.push(new _login_uri__WEBPACK_IMPORTED_MODULE_5__.LoginUri(u));
            });
        }
        if (obj.fido2Credentials) {
            this.fido2Credentials = obj.fido2Credentials.map((key) => new _fido2_credential__WEBPACK_IMPORTED_MODULE_4__.Fido2Credential(key));
        }
    }
    decrypt(orgId_1, bypassValidation_1) {
        return __awaiter(this, arguments, void 0, function* (orgId, bypassValidation, context = "No Cipher Context", encKey) {
            const view = yield this.decryptObj(this, new _view_login_view__WEBPACK_IMPORTED_MODULE_3__.LoginView(this), ["username", "password", "totp"], orgId, encKey, `DomainType: Login; ${context}`);
            if (this.uris != null) {
                view.uris = [];
                for (let i = 0; i < this.uris.length; i++) {
                    // If the uri is null, there is nothing to decrypt or validate
                    if (this.uris[i].uri == null) {
                        continue;
                    }
                    const uri = yield this.uris[i].decrypt(orgId, context, encKey);
                    // URIs are shared remotely after decryption
                    // we need to validate that the string hasn't been changed by a compromised server
                    // This validation is tied to the existence of cypher.key for backwards compatibility
                    // So we bypass the validation if there's no cipher.key or procceed with the validation and
                    // Skip the value if it's been tampered with.
                    if (bypassValidation || (yield this.uris[i].validateChecksum(uri.uri, orgId, encKey))) {
                        view.uris.push(uri);
                    }
                }
            }
            if (this.fido2Credentials != null) {
                view.fido2Credentials = yield Promise.all(this.fido2Credentials.map((key) => key.decrypt(orgId, encKey)));
            }
            return view;
        });
    }
    toLoginData() {
        const l = new _data_login_data__WEBPACK_IMPORTED_MODULE_2__.LoginData();
        l.passwordRevisionDate =
            this.passwordRevisionDate != null ? this.passwordRevisionDate.toISOString() : null;
        l.autofillOnPageLoad = this.autofillOnPageLoad;
        this.buildDataModel(this, l, {
            username: null,
            password: null,
            totp: null,
        });
        if (this.uris != null && this.uris.length > 0) {
            l.uris = [];
            this.uris.forEach((u) => {
                l.uris.push(u.toLoginUriData());
            });
        }
        if (this.fido2Credentials != null && this.fido2Credentials.length > 0) {
            l.fido2Credentials = this.fido2Credentials.map((key) => key.toFido2CredentialData());
        }
        return l;
    }
    static fromJSON(obj) {
        var _a, _b, _c;
        if (obj == null) {
            return null;
        }
        const username = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.username);
        const password = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.password);
        const totp = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.totp);
        const passwordRevisionDate = obj.passwordRevisionDate == null ? null : new Date(obj.passwordRevisionDate);
        const uris = (_a = obj.uris) === null || _a === void 0 ? void 0 : _a.map((uri) => _login_uri__WEBPACK_IMPORTED_MODULE_5__.LoginUri.fromJSON(uri));
        const fido2Credentials = (_c = (_b = obj.fido2Credentials) === null || _b === void 0 ? void 0 : _b.map((key) => _fido2_credential__WEBPACK_IMPORTED_MODULE_4__.Fido2Credential.fromJSON(key))) !== null && _c !== void 0 ? _c : [];
        return Object.assign(new Login(), obj, {
            username,
            password,
            totp,
            passwordRevisionDate,
            uris,
            fido2Credentials,
        });
    }
    /**
     * Maps Login to SDK format.
     *
     * @returns {SdkLogin} The SDK login object.
     */
    toSdkLogin() {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            uris: (_a = this.uris) === null || _a === void 0 ? void 0 : _a.map((u) => u.toSdkLoginUri()),
            username: (_b = this.username) === null || _b === void 0 ? void 0 : _b.toJSON(),
            password: (_c = this.password) === null || _c === void 0 ? void 0 : _c.toJSON(),
            passwordRevisionDate: (_d = this.passwordRevisionDate) === null || _d === void 0 ? void 0 : _d.toISOString(),
            totp: (_e = this.totp) === null || _e === void 0 ? void 0 : _e.toJSON(),
            autofillOnPageLoad: (_f = this.autofillOnPageLoad) !== null && _f !== void 0 ? _f : undefined,
            fido2Credentials: (_g = this.fido2Credentials) === null || _g === void 0 ? void 0 : _g.map((f) => f.toSdkFido2Credential()),
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/password.ts":
/*!*************************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/password.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Password: () => (/* binding */ Password)
/* harmony export */ });
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _data_password_history_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/password-history.data */ "../../libs/common/src/vault/models/data/password-history.data.ts");
/* harmony import */ var _view_password_history_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/password-history.view */ "../../libs/common/src/vault/models/view/password-history.view.ts");




class Password extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(obj) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            password: null,
        });
        this.lastUsedDate = new Date(obj.lastUsedDate);
    }
    decrypt(orgId, encKey) {
        return this.decryptObj(this, new _view_password_history_view__WEBPACK_IMPORTED_MODULE_3__.PasswordHistoryView(this), ["password"], orgId, encKey, "DomainType: PasswordHistory");
    }
    toPasswordHistoryData() {
        const ph = new _data_password_history_data__WEBPACK_IMPORTED_MODULE_2__.PasswordHistoryData();
        ph.lastUsedDate = this.lastUsedDate.toISOString();
        this.buildDataModel(this, ph, {
            password: null,
        });
        return ph;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        const password = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.password);
        const lastUsedDate = obj.lastUsedDate == null ? null : new Date(obj.lastUsedDate);
        return Object.assign(new Password(), obj, {
            password,
            lastUsedDate,
        });
    }
    /**
     * Maps Password to SDK format.
     *
     * @returns {PasswordHistory} The SDK password history object.
     */
    toSdkPasswordHistory() {
        return {
            password: this.password.toJSON(),
            lastUsedDate: this.lastUsedDate.toISOString(),
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/secure-note.ts":
/*!****************************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/secure-note.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureNote: () => (/* binding */ SecureNote)
/* harmony export */ });
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _data_secure_note_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/secure-note.data */ "../../libs/common/src/vault/models/data/secure-note.data.ts");
/* harmony import */ var _view_secure_note_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/secure-note.view */ "../../libs/common/src/vault/models/view/secure-note.view.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class SecureNote extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(obj) {
        super();
        if (obj == null) {
            return;
        }
        this.type = obj.type;
    }
    decrypt(orgId_1) {
        return __awaiter(this, arguments, void 0, function* (orgId, context = "No Cipher Context", encKey) {
            return new _view_secure_note_view__WEBPACK_IMPORTED_MODULE_2__.SecureNoteView(this);
        });
    }
    toSecureNoteData() {
        const n = new _data_secure_note_data__WEBPACK_IMPORTED_MODULE_1__.SecureNoteData();
        n.type = this.type;
        return n;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        return Object.assign(new SecureNote(), obj);
    }
    /**
     * Maps Secure note to SDK format.
     *
     * @returns {SdkSecureNote} The SDK secure note object.
     */
    toSdkSecureNote() {
        return {
            type: this.type,
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/domain/ssh-key.ts":
/*!************************************************************!*\
  !*** ../../libs/common/src/vault/models/domain/ssh-key.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SshKey: () => (/* binding */ SshKey)
/* harmony export */ });
/* harmony import */ var _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/models/domain/domain-base */ "../../libs/common/src/platform/models/domain/domain-base.ts");
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _data_ssh_key_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ssh-key.data */ "../../libs/common/src/vault/models/data/ssh-key.data.ts");
/* harmony import */ var _view_ssh_key_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/ssh-key.view */ "../../libs/common/src/vault/models/view/ssh-key.view.ts");




class SshKey extends _platform_models_domain_domain_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(obj) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            privateKey: null,
            publicKey: null,
            keyFingerprint: null,
        }, []);
    }
    decrypt(orgId, context = "No Cipher Context", encKey) {
        return this.decryptObj(this, new _view_ssh_key_view__WEBPACK_IMPORTED_MODULE_3__.SshKeyView(), ["privateKey", "publicKey", "keyFingerprint"], orgId, encKey, "DomainType: SshKey; " + context);
    }
    toSshKeyData() {
        const c = new _data_ssh_key_data__WEBPACK_IMPORTED_MODULE_2__.SshKeyData();
        this.buildDataModel(this, c, {
            privateKey: null,
            publicKey: null,
            keyFingerprint: null,
        });
        return c;
    }
    static fromJSON(obj) {
        if (obj == null) {
            return null;
        }
        const privateKey = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.privateKey);
        const publicKey = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.publicKey);
        const keyFingerprint = _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_1__.EncString.fromJSON(obj.keyFingerprint);
        return Object.assign(new SshKey(), obj, {
            privateKey,
            publicKey,
            keyFingerprint,
        });
    }
    /**
     * Maps SSH key to SDK format.
     *
     * @returns {SdkSshKey} The SDK SSH key object.
     */
    toSdkSshKey() {
        return {
            privateKey: this.privateKey.toJSON(),
            publicKey: this.publicKey.toJSON(),
            fingerprint: this.keyFingerprint.toJSON(),
        };
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/view/attachment.view.ts":
/*!******************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/attachment.view.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttachmentView: () => (/* binding */ AttachmentView)
/* harmony export */ });
/* harmony import */ var _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/models/domain/enc-string */ "../../libs/common/src/platform/models/domain/enc-string.ts");
/* harmony import */ var _platform_models_domain_symmetric_crypto_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/models/domain/symmetric-crypto-key */ "../../libs/common/src/platform/models/domain/symmetric-crypto-key.ts");


class AttachmentView {
    constructor(a) {
        this.id = null;
        this.url = null;
        this.size = null;
        this.sizeName = null;
        this.fileName = null;
        this.key = null;
        if (!a) {
            return;
        }
        this.id = a.id;
        this.url = a.url;
        this.size = a.size;
        this.sizeName = a.sizeName;
    }
    get fileSize() {
        try {
            if (this.size != null) {
                return parseInt(this.size, null);
            }
        }
        catch (_a) {
            // Invalid file size.
        }
        return 0;
    }
    static fromJSON(obj) {
        const key = obj.key == null ? null : _platform_models_domain_symmetric_crypto_key__WEBPACK_IMPORTED_MODULE_1__.SymmetricCryptoKey.fromJSON(obj.key);
        const encryptedKey = obj.encryptedKey == null ? undefined : new _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_0__.EncString(obj.encryptedKey);
        return Object.assign(new AttachmentView(), obj, { key: key, encryptedKey: encryptedKey });
    }
    /**
     * Converts the AttachmentView to a SDK AttachmentView.
     */
    toSdkAttachmentView() {
        var _a;
        return {
            id: this.id,
            url: this.url,
            size: this.size,
            sizeName: this.sizeName,
            fileName: this.fileName,
            key: (_a = this.encryptedKey) === null || _a === void 0 ? void 0 : _a.toJSON(),
            // TODO: PM-23005 - Temporary field, should be removed when encrypted migration is complete
            decryptedKey: this.key ? this.key.toBase64() : null,
        };
    }
    /**
     * Converts the SDK AttachmentView to a AttachmentView.
     */
    static fromSdkAttachmentView(obj) {
        var _a, _b, _c, _d, _e;
        if (!obj) {
            return undefined;
        }
        const view = new AttachmentView();
        view.id = (_a = obj.id) !== null && _a !== void 0 ? _a : null;
        view.url = (_b = obj.url) !== null && _b !== void 0 ? _b : null;
        view.size = (_c = obj.size) !== null && _c !== void 0 ? _c : null;
        view.sizeName = (_d = obj.sizeName) !== null && _d !== void 0 ? _d : null;
        view.fileName = (_e = obj.fileName) !== null && _e !== void 0 ? _e : null;
        // TODO: PM-23005 - Temporary field, should be removed when encrypted migration is complete
        view.key = obj.key ? _platform_models_domain_symmetric_crypto_key__WEBPACK_IMPORTED_MODULE_1__.SymmetricCryptoKey.fromString(obj.decryptedKey) : null;
        view.encryptedKey = new _platform_models_domain_enc_string__WEBPACK_IMPORTED_MODULE_0__.EncString(obj.key);
        return view;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/view/card.view.ts":
/*!************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/card.view.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardView: () => (/* binding */ CardView)
/* harmony export */ });
/* harmony import */ var _autofill_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../autofill/utils */ "../../libs/common/src/autofill/utils.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "../../libs/common/src/vault/enums/index.ts");
/* harmony import */ var _linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../linked-field-option.decorator */ "../../libs/common/src/vault/linked-field-option.decorator.ts");
/* harmony import */ var _item_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.view */ "../../libs/common/src/vault/models/view/item.view.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




class CardView extends _item_view__WEBPACK_IMPORTED_MODULE_3__.ItemView {
    constructor() {
        super(...arguments);
        this.cardholderName = null;
        this.expMonth = null;
        this.expYear = null;
        this.code = null;
        this._brand = null;
        this._number = null;
        this._subTitle = null;
    }
    get maskedCode() {
        return this.code != null ? "•".repeat(this.code.length) : null;
    }
    get maskedNumber() {
        return this.number != null ? "•".repeat(this.number.length) : null;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
        this._subTitle = null;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
        this._subTitle = null;
    }
    get subTitle() {
        if (this._subTitle == null) {
            this._subTitle = this.brand;
            if (this.number != null && this.number.length >= 4) {
                if (this._subTitle != null && this._subTitle !== "") {
                    this._subTitle += ", ";
                }
                else {
                    this._subTitle = "";
                }
                // Show last 5 on amex, last 4 for all others
                const count = this.number.length >= 5 && this.number.match(new RegExp("^3[47]")) != null ? 5 : 4;
                this._subTitle += "*" + this.number.substr(this.number.length - count);
            }
        }
        return this._subTitle;
    }
    get expiration() {
        const normalizedYear = (0,_autofill_utils__WEBPACK_IMPORTED_MODULE_0__.normalizeExpiryYearFormat)(this.expYear);
        if (!this.expMonth && !normalizedYear) {
            return null;
        }
        let exp = this.expMonth != null ? ("0" + this.expMonth).slice(-2) : "__";
        exp += " / " + (normalizedYear || "____");
        return exp;
    }
    static fromJSON(obj) {
        return Object.assign(new CardView(), obj);
    }
    // ref https://stackoverflow.com/a/5911300
    static getCardBrandByPatterns(cardNum) {
        if (cardNum == null || typeof cardNum !== "string" || cardNum.trim() === "") {
            return null;
        }
        // Visa
        let re = new RegExp("^4");
        if (cardNum.match(re) != null) {
            return "Visa";
        }
        // Mastercard
        // Updated for Mastercard 2017 BINs expansion
        if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(cardNum)) {
            return "Mastercard";
        }
        // AMEX
        re = new RegExp("^3[47]");
        if (cardNum.match(re) != null) {
            return "Amex";
        }
        // Discover
        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (cardNum.match(re) != null) {
            return "Discover";
        }
        // Diners
        re = new RegExp("^36");
        if (cardNum.match(re) != null) {
            return "Diners Club";
        }
        // Diners - Carte Blanche
        re = new RegExp("^30[0-5]");
        if (cardNum.match(re) != null) {
            return "Diners Club";
        }
        // JCB
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (cardNum.match(re) != null) {
            return "JCB";
        }
        // Visa Electron
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (cardNum.match(re) != null) {
            return "Visa";
        }
        return null;
    }
    /**
     * Converts an SDK CardView to a CardView.
     */
    static fromSdkCardView(obj) {
        var _a, _b, _c, _d, _e, _f;
        if (obj == null) {
            return undefined;
        }
        const cardView = new CardView();
        cardView.cardholderName = (_a = obj.cardholderName) !== null && _a !== void 0 ? _a : null;
        cardView.brand = (_b = obj.brand) !== null && _b !== void 0 ? _b : null;
        cardView.number = (_c = obj.number) !== null && _c !== void 0 ? _c : null;
        cardView.expMonth = (_d = obj.expMonth) !== null && _d !== void 0 ? _d : null;
        cardView.expYear = (_e = obj.expYear) !== null && _e !== void 0 ? _e : null;
        cardView.code = (_f = obj.code) !== null && _f !== void 0 ? _f : null;
        return cardView;
    }
}
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.CardLinkedId.CardholderName, { sortPosition: 0 }),
    __metadata("design:type", String)
], CardView.prototype, "cardholderName", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.CardLinkedId.ExpMonth, { sortPosition: 3, i18nKey: "expirationMonth" }),
    __metadata("design:type", String)
], CardView.prototype, "expMonth", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.CardLinkedId.ExpYear, { sortPosition: 4, i18nKey: "expirationYear" }),
    __metadata("design:type", String)
], CardView.prototype, "expYear", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.CardLinkedId.Code, { sortPosition: 5, i18nKey: "securityCode" }),
    __metadata("design:type", String)
], CardView.prototype, "code", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.CardLinkedId.Brand, { sortPosition: 2 }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CardView.prototype, "brand", null);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.CardLinkedId.Number, { sortPosition: 1 }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CardView.prototype, "number", null);


/***/ }),

/***/ "../../libs/common/src/vault/models/view/cipher.view.ts":
/*!**************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/cipher.view.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherView: () => (/* binding */ CipherView)
/* harmony export */ });
/* harmony import */ var _platform_services_cryptography_initializer_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/services/cryptography/initializer-key */ "../../libs/common/src/platform/services/cryptography/initializer-key.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "../../libs/common/src/vault/enums/index.ts");
/* harmony import */ var _enums_cipher_reprompt_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/cipher-reprompt-type */ "../../libs/common/src/vault/enums/cipher-reprompt-type.ts");
/* harmony import */ var _api_cipher_permissions_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/cipher-permissions.api */ "../../libs/common/src/vault/models/api/cipher-permissions.api.ts");
/* harmony import */ var _attachment_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attachment.view */ "../../libs/common/src/vault/models/view/attachment.view.ts");
/* harmony import */ var _card_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card.view */ "../../libs/common/src/vault/models/view/card.view.ts");
/* harmony import */ var _field_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field.view */ "../../libs/common/src/vault/models/view/field.view.ts");
/* harmony import */ var _identity_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity.view */ "../../libs/common/src/vault/models/view/identity.view.ts");
/* harmony import */ var _login_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.view */ "../../libs/common/src/vault/models/view/login.view.ts");
/* harmony import */ var _password_history_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password-history.view */ "../../libs/common/src/vault/models/view/password-history.view.ts");
/* harmony import */ var _secure_note_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./secure-note.view */ "../../libs/common/src/vault/models/view/secure-note.view.ts");
/* harmony import */ var _ssh_key_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ssh-key.view */ "../../libs/common/src/vault/models/view/ssh-key.view.ts");












class CipherView {
    constructor(c) {
        var _a;
        this.initializerKey = _platform_services_cryptography_initializer_key__WEBPACK_IMPORTED_MODULE_0__.InitializerKey.CipherView;
        this.id = null;
        this.organizationId = null;
        this.folderId = null;
        this.name = null;
        this.notes = null;
        this.type = null;
        this.favorite = false;
        this.organizationUseTotp = false;
        this.permissions = new _api_cipher_permissions_api__WEBPACK_IMPORTED_MODULE_3__.CipherPermissionsApi();
        this.edit = false;
        this.viewPassword = true;
        this.login = new _login_view__WEBPACK_IMPORTED_MODULE_8__.LoginView();
        this.identity = new _identity_view__WEBPACK_IMPORTED_MODULE_7__.IdentityView();
        this.card = new _card_view__WEBPACK_IMPORTED_MODULE_5__.CardView();
        this.secureNote = new _secure_note_view__WEBPACK_IMPORTED_MODULE_10__.SecureNoteView();
        this.sshKey = new _ssh_key_view__WEBPACK_IMPORTED_MODULE_11__.SshKeyView();
        this.attachments = null;
        this.fields = null;
        this.passwordHistory = null;
        this.collectionIds = null;
        this.revisionDate = null;
        this.creationDate = null;
        this.deletedDate = null;
        this.reprompt = _enums_cipher_reprompt_type__WEBPACK_IMPORTED_MODULE_2__.CipherRepromptType.None;
        /**
         * Flag to indicate if the cipher decryption failed.
         */
        this.decryptionFailure = false;
        if (!c) {
            return;
        }
        this.id = c.id;
        this.organizationId = c.organizationId;
        this.folderId = c.folderId;
        this.favorite = c.favorite;
        this.organizationUseTotp = c.organizationUseTotp;
        this.edit = c.edit;
        this.viewPassword = c.viewPassword;
        this.permissions = c.permissions;
        this.type = c.type;
        this.localData = c.localData;
        this.collectionIds = c.collectionIds;
        this.revisionDate = c.revisionDate;
        this.creationDate = c.creationDate;
        this.deletedDate = c.deletedDate;
        // Old locally stored ciphers might have reprompt == null. If so set it to None.
        this.reprompt = (_a = c.reprompt) !== null && _a !== void 0 ? _a : _enums_cipher_reprompt_type__WEBPACK_IMPORTED_MODULE_2__.CipherRepromptType.None;
    }
    get item() {
        switch (this.type) {
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Login:
                return this.login;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.SecureNote:
                return this.secureNote;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Card:
                return this.card;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Identity:
                return this.identity;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.SshKey:
                return this.sshKey;
            default:
                break;
        }
        return null;
    }
    get subTitle() {
        var _a;
        return (_a = this.item) === null || _a === void 0 ? void 0 : _a.subTitle;
    }
    get hasPasswordHistory() {
        return this.passwordHistory && this.passwordHistory.length > 0;
    }
    get hasAttachments() {
        return this.attachments && this.attachments.length > 0;
    }
    get hasOldAttachments() {
        if (this.hasAttachments) {
            for (let i = 0; i < this.attachments.length; i++) {
                if (this.attachments[i].key == null && this.attachments[i].encryptedKey == null) {
                    return true;
                }
            }
        }
        return false;
    }
    get hasFields() {
        return this.fields && this.fields.length > 0;
    }
    get passwordRevisionDisplayDate() {
        if (this.type !== _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Login || this.login == null) {
            return null;
        }
        else if (this.login.password == null || this.login.password === "") {
            return null;
        }
        return this.login.passwordRevisionDate;
    }
    get isDeleted() {
        return this.deletedDate != null;
    }
    get linkedFieldOptions() {
        var _a;
        return (_a = this.item) === null || _a === void 0 ? void 0 : _a.linkedFieldOptions;
    }
    get isUnassigned() {
        return (this.organizationId != null && (this.collectionIds == null || this.collectionIds.length === 0));
    }
    get canAssignToCollections() {
        if (this.organizationId == null) {
            return true;
        }
        return this.edit && this.viewPassword;
    }
    /**
     * Determines if the cipher can be launched in a new browser tab.
     */
    get canLaunch() {
        return this.type === _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Login && this.login.canLaunch;
    }
    linkedFieldValue(id) {
        var _a;
        const linkedFieldOption = (_a = this.linkedFieldOptions) === null || _a === void 0 ? void 0 : _a.get(id);
        if (linkedFieldOption == null) {
            return null;
        }
        // FIXME: Remove when updating file. Eslint update
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const item = this.item;
        return this.item[linkedFieldOption.propertyKey];
    }
    linkedFieldI18nKey(id) {
        var _a;
        return (_a = this.linkedFieldOptions.get(id)) === null || _a === void 0 ? void 0 : _a.i18nKey;
    }
    // This is used as a marker to indicate that the cipher view object still has its prototype
    toJSON() {
        return this;
    }
    static fromJSON(obj) {
        var _a, _b, _c;
        if (obj == null) {
            return null;
        }
        const view = new CipherView();
        const creationDate = obj.creationDate == null ? null : new Date(obj.creationDate);
        const revisionDate = obj.revisionDate == null ? null : new Date(obj.revisionDate);
        const deletedDate = obj.deletedDate == null ? null : new Date(obj.deletedDate);
        const attachments = (_a = obj.attachments) === null || _a === void 0 ? void 0 : _a.map((a) => _attachment_view__WEBPACK_IMPORTED_MODULE_4__.AttachmentView.fromJSON(a));
        const fields = (_b = obj.fields) === null || _b === void 0 ? void 0 : _b.map((f) => _field_view__WEBPACK_IMPORTED_MODULE_6__.FieldView.fromJSON(f));
        const passwordHistory = (_c = obj.passwordHistory) === null || _c === void 0 ? void 0 : _c.map((ph) => _password_history_view__WEBPACK_IMPORTED_MODULE_9__.PasswordHistoryView.fromJSON(ph));
        Object.assign(view, obj, {
            creationDate: creationDate,
            revisionDate: revisionDate,
            deletedDate: deletedDate,
            attachments: attachments,
            fields: fields,
            passwordHistory: passwordHistory,
        });
        switch (obj.type) {
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Card:
                view.card = _card_view__WEBPACK_IMPORTED_MODULE_5__.CardView.fromJSON(obj.card);
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Identity:
                view.identity = _identity_view__WEBPACK_IMPORTED_MODULE_7__.IdentityView.fromJSON(obj.identity);
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Login:
                view.login = _login_view__WEBPACK_IMPORTED_MODULE_8__.LoginView.fromJSON(obj.login);
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.SecureNote:
                view.secureNote = _secure_note_view__WEBPACK_IMPORTED_MODULE_10__.SecureNoteView.fromJSON(obj.secureNote);
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.SshKey:
                view.sshKey = _ssh_key_view__WEBPACK_IMPORTED_MODULE_11__.SshKeyView.fromJSON(obj.sshKey);
                break;
            default:
                break;
        }
        return view;
    }
    /**
     * Creates a CipherView from the SDK CipherView.
     */
    static fromSdkCipherView(obj) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (obj == null) {
            return undefined;
        }
        const cipherView = new CipherView();
        cipherView.id = (_a = obj.id) !== null && _a !== void 0 ? _a : null;
        cipherView.organizationId = (_b = obj.organizationId) !== null && _b !== void 0 ? _b : null;
        cipherView.folderId = (_c = obj.folderId) !== null && _c !== void 0 ? _c : null;
        cipherView.name = obj.name;
        cipherView.notes = (_d = obj.notes) !== null && _d !== void 0 ? _d : null;
        cipherView.type = obj.type;
        cipherView.favorite = obj.favorite;
        cipherView.organizationUseTotp = obj.organizationUseTotp;
        cipherView.permissions = _api_cipher_permissions_api__WEBPACK_IMPORTED_MODULE_3__.CipherPermissionsApi.fromSdkCipherPermissions(obj.permissions);
        cipherView.edit = obj.edit;
        cipherView.viewPassword = obj.viewPassword;
        cipherView.localData = obj.localData
            ? {
                lastUsedDate: obj.localData.lastUsedDate
                    ? new Date(obj.localData.lastUsedDate).getTime()
                    : undefined,
                lastLaunched: obj.localData.lastLaunched
                    ? new Date(obj.localData.lastLaunched).getTime()
                    : undefined,
            }
            : undefined;
        cipherView.attachments =
            (_f = (_e = obj.attachments) === null || _e === void 0 ? void 0 : _e.map((a) => _attachment_view__WEBPACK_IMPORTED_MODULE_4__.AttachmentView.fromSdkAttachmentView(a))) !== null && _f !== void 0 ? _f : null;
        cipherView.fields = (_h = (_g = obj.fields) === null || _g === void 0 ? void 0 : _g.map((f) => _field_view__WEBPACK_IMPORTED_MODULE_6__.FieldView.fromSdkFieldView(f))) !== null && _h !== void 0 ? _h : null;
        cipherView.passwordHistory =
            (_k = (_j = obj.passwordHistory) === null || _j === void 0 ? void 0 : _j.map((ph) => _password_history_view__WEBPACK_IMPORTED_MODULE_9__.PasswordHistoryView.fromSdkPasswordHistoryView(ph))) !== null && _k !== void 0 ? _k : null;
        cipherView.collectionIds = (_l = obj.collectionIds) !== null && _l !== void 0 ? _l : null;
        cipherView.revisionDate = obj.revisionDate == null ? null : new Date(obj.revisionDate);
        cipherView.creationDate = obj.creationDate == null ? null : new Date(obj.creationDate);
        cipherView.deletedDate = obj.deletedDate == null ? null : new Date(obj.deletedDate);
        cipherView.reprompt = (_m = obj.reprompt) !== null && _m !== void 0 ? _m : _enums_cipher_reprompt_type__WEBPACK_IMPORTED_MODULE_2__.CipherRepromptType.None;
        switch (obj.type) {
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Card:
                cipherView.card = _card_view__WEBPACK_IMPORTED_MODULE_5__.CardView.fromSdkCardView(obj.card);
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Identity:
                cipherView.identity = _identity_view__WEBPACK_IMPORTED_MODULE_7__.IdentityView.fromSdkIdentityView(obj.identity);
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.Login:
                cipherView.login = _login_view__WEBPACK_IMPORTED_MODULE_8__.LoginView.fromSdkLoginView(obj.login);
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.SecureNote:
                cipherView.secureNote = _secure_note_view__WEBPACK_IMPORTED_MODULE_10__.SecureNoteView.fromSdkSecureNoteView(obj.secureNote);
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__.CipherType.SshKey:
                cipherView.sshKey = _ssh_key_view__WEBPACK_IMPORTED_MODULE_11__.SshKeyView.fromSdkSshKeyView(obj.sshKey);
                break;
            default:
                break;
        }
        return cipherView;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/view/fido2-credential.view.ts":
/*!************************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/fido2-credential.view.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fido2CredentialView: () => (/* binding */ Fido2CredentialView)
/* harmony export */ });
/* harmony import */ var _item_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.view */ "../../libs/common/src/vault/models/view/item.view.ts");

class Fido2CredentialView extends _item_view__WEBPACK_IMPORTED_MODULE_0__.ItemView {
    constructor() {
        super(...arguments);
        this.creationDate = null;
    }
    get subTitle() {
        return this.userDisplayName;
    }
    static fromJSON(obj) {
        const creationDate = obj.creationDate != null ? new Date(obj.creationDate) : null;
        return Object.assign(new Fido2CredentialView(), obj, {
            creationDate,
        });
    }
    /**
     * Converts the SDK Fido2CredentialView to a Fido2CredentialView.
     */
    static fromSdkFido2CredentialView(obj) {
        var _a;
        if (!obj) {
            return undefined;
        }
        const view = new Fido2CredentialView();
        view.credentialId = obj.credentialId;
        view.keyType = obj.keyType;
        view.keyAlgorithm = obj.keyAlgorithm;
        view.keyCurve = obj.keyCurve;
        view.rpId = obj.rpId;
        view.userHandle = obj.userHandle;
        view.userName = obj.userName;
        view.counter = parseInt(obj.counter);
        view.rpName = obj.rpName;
        view.userDisplayName = obj.userDisplayName;
        view.discoverable = ((_a = obj.discoverable) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "true" ? true : false;
        view.creationDate = obj.creationDate ? new Date(obj.creationDate) : null;
        return view;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/view/field.view.ts":
/*!*************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/field.view.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldView: () => (/* binding */ FieldView)
/* harmony export */ });
class FieldView {
    constructor(f) {
        this.name = null;
        this.value = null;
        this.type = null;
        this.newField = false; // Marks if the field is new and hasn't been saved
        this.showValue = false;
        this.showCount = false;
        this.linkedId = null;
        if (!f) {
            return;
        }
        this.type = f.type;
        this.linkedId = f.linkedId;
    }
    get maskedValue() {
        return this.value != null ? "••••••••" : null;
    }
    static fromJSON(obj) {
        return Object.assign(new FieldView(), obj);
    }
    /**
     * Converts the SDK FieldView to a FieldView.
     */
    static fromSdkFieldView(obj) {
        if (!obj) {
            return undefined;
        }
        const view = new FieldView();
        view.name = obj.name;
        view.value = obj.value;
        view.type = obj.type;
        view.linkedId = obj.linkedId;
        return view;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/view/identity.view.ts":
/*!****************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/identity.view.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityView: () => (/* binding */ IdentityView)
/* harmony export */ });
/* harmony import */ var _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "../../libs/common/src/vault/enums/index.ts");
/* harmony import */ var _linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../linked-field-option.decorator */ "../../libs/common/src/vault/linked-field-option.decorator.ts");
/* harmony import */ var _item_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.view */ "../../libs/common/src/vault/models/view/item.view.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




class IdentityView extends _item_view__WEBPACK_IMPORTED_MODULE_3__.ItemView {
    constructor() {
        super();
        this.title = null;
        this.middleName = null;
        this.address1 = null;
        this.address2 = null;
        this.address3 = null;
        this.city = null;
        this.state = null;
        this.postalCode = null;
        this.country = null;
        this.company = null;
        this.email = null;
        this.phone = null;
        this.ssn = null;
        this.username = null;
        this.passportNumber = null;
        this.licenseNumber = null;
        this._firstName = null;
        this._lastName = null;
        this._subTitle = null;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
        this._subTitle = null;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
        this._subTitle = null;
    }
    get subTitle() {
        if (this._subTitle == null && (this.firstName != null || this.lastName != null)) {
            this._subTitle = "";
            if (this.firstName != null) {
                this._subTitle = this.firstName;
            }
            if (this.lastName != null) {
                if (this._subTitle !== "") {
                    this._subTitle += " ";
                }
                this._subTitle += this.lastName;
            }
        }
        return this._subTitle;
    }
    get fullName() {
        if (this.title != null ||
            this.firstName != null ||
            this.middleName != null ||
            this.lastName != null) {
            let name = "";
            if (this.title != null) {
                name += this.title + " ";
            }
            if (this.firstName != null) {
                name += this.firstName + " ";
            }
            if (this.middleName != null) {
                name += this.middleName + " ";
            }
            if (this.lastName != null) {
                name += this.lastName;
            }
            return name.trim();
        }
        return null;
    }
    get fullAddress() {
        let address = this.address1;
        if (!_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isNullOrWhitespace(this.address2)) {
            if (!_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isNullOrWhitespace(address)) {
                address += ", ";
            }
            address += this.address2;
        }
        if (!_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isNullOrWhitespace(this.address3)) {
            if (!_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isNullOrWhitespace(address)) {
                address += ", ";
            }
            address += this.address3;
        }
        return address;
    }
    get fullAddressPart2() {
        if (this.city == null && this.state == null && this.postalCode == null) {
            return null;
        }
        const city = this.city || "-";
        const state = this.state;
        const postalCode = this.postalCode || "-";
        let addressPart2 = city;
        if (!_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isNullOrWhitespace(state)) {
            addressPart2 += ", " + state;
        }
        addressPart2 += ", " + postalCode;
        return addressPart2;
    }
    get fullAddressForCopy() {
        let address = this.fullAddress;
        if (this.city != null || this.state != null || this.postalCode != null) {
            address += "\n" + this.fullAddressPart2;
        }
        if (this.country != null) {
            address += "\n" + this.country;
        }
        return address;
    }
    static fromJSON(obj) {
        return Object.assign(new IdentityView(), obj);
    }
    /**
     * Converts the SDK IdentityView to an IdentityView.
     */
    static fromSdkIdentityView(obj) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        if (obj == null) {
            return undefined;
        }
        const identityView = new IdentityView();
        identityView.title = (_a = obj.title) !== null && _a !== void 0 ? _a : null;
        identityView.firstName = (_b = obj.firstName) !== null && _b !== void 0 ? _b : null;
        identityView.middleName = (_c = obj.middleName) !== null && _c !== void 0 ? _c : null;
        identityView.lastName = (_d = obj.lastName) !== null && _d !== void 0 ? _d : null;
        identityView.address1 = (_e = obj.address1) !== null && _e !== void 0 ? _e : null;
        identityView.address2 = (_f = obj.address2) !== null && _f !== void 0 ? _f : null;
        identityView.address3 = (_g = obj.address3) !== null && _g !== void 0 ? _g : null;
        identityView.city = (_h = obj.city) !== null && _h !== void 0 ? _h : null;
        identityView.state = (_j = obj.state) !== null && _j !== void 0 ? _j : null;
        identityView.postalCode = (_k = obj.postalCode) !== null && _k !== void 0 ? _k : null;
        identityView.country = (_l = obj.country) !== null && _l !== void 0 ? _l : null;
        identityView.company = (_m = obj.company) !== null && _m !== void 0 ? _m : null;
        identityView.email = (_o = obj.email) !== null && _o !== void 0 ? _o : null;
        identityView.phone = (_p = obj.phone) !== null && _p !== void 0 ? _p : null;
        identityView.ssn = (_q = obj.ssn) !== null && _q !== void 0 ? _q : null;
        identityView.username = (_r = obj.username) !== null && _r !== void 0 ? _r : null;
        identityView.passportNumber = (_s = obj.passportNumber) !== null && _s !== void 0 ? _s : null;
        identityView.licenseNumber = (_t = obj.licenseNumber) !== null && _t !== void 0 ? _t : null;
        return identityView;
    }
}
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Title, { sortPosition: 0 }),
    __metadata("design:type", String)
], IdentityView.prototype, "title", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.MiddleName, { sortPosition: 2 }),
    __metadata("design:type", String)
], IdentityView.prototype, "middleName", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Address1, { sortPosition: 12 }),
    __metadata("design:type", String)
], IdentityView.prototype, "address1", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Address2, { sortPosition: 13 }),
    __metadata("design:type", String)
], IdentityView.prototype, "address2", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Address3, { sortPosition: 14 }),
    __metadata("design:type", String)
], IdentityView.prototype, "address3", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.City, { sortPosition: 15, i18nKey: "cityTown" }),
    __metadata("design:type", String)
], IdentityView.prototype, "city", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.State, { sortPosition: 16, i18nKey: "stateProvince" }),
    __metadata("design:type", String)
], IdentityView.prototype, "state", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.PostalCode, { sortPosition: 17, i18nKey: "zipPostalCode" }),
    __metadata("design:type", String)
], IdentityView.prototype, "postalCode", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Country, { sortPosition: 18 }),
    __metadata("design:type", String)
], IdentityView.prototype, "country", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Company, { sortPosition: 6 }),
    __metadata("design:type", String)
], IdentityView.prototype, "company", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Email, { sortPosition: 10 }),
    __metadata("design:type", String)
], IdentityView.prototype, "email", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Phone, { sortPosition: 11 }),
    __metadata("design:type", String)
], IdentityView.prototype, "phone", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Ssn, { sortPosition: 7 }),
    __metadata("design:type", String)
], IdentityView.prototype, "ssn", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.Username, { sortPosition: 5 }),
    __metadata("design:type", String)
], IdentityView.prototype, "username", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.PassportNumber, { sortPosition: 8 }),
    __metadata("design:type", String)
], IdentityView.prototype, "passportNumber", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.LicenseNumber, { sortPosition: 9 }),
    __metadata("design:type", String)
], IdentityView.prototype, "licenseNumber", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.FirstName, { sortPosition: 1 }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IdentityView.prototype, "firstName", null);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.LastName, { sortPosition: 4 }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IdentityView.prototype, "lastName", null);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.IdentityLinkedId.FullName, { sortPosition: 3 }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], IdentityView.prototype, "fullName", null);


/***/ }),

/***/ "../../libs/common/src/vault/models/view/item.view.ts":
/*!************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/item.view.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemView: () => (/* binding */ ItemView)
/* harmony export */ });
class ItemView {
}


/***/ }),

/***/ "../../libs/common/src/vault/models/view/login-uri.view.ts":
/*!*****************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/login-uri.view.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginUriView: () => (/* binding */ LoginUriView)
/* harmony export */ });
/* harmony import */ var _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/domain/domain-service */ "../../libs/common/src/models/domain/domain-service.ts");
/* harmony import */ var _platform_misc_safe_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../platform/misc/safe-urls */ "../../libs/common/src/platform/misc/safe-urls.ts");
/* harmony import */ var _platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");



class LoginUriView {
    constructor(u) {
        this.match = null;
        this._uri = null;
        this._domain = null;
        this._hostname = null;
        this._host = null;
        this._canLaunch = null;
        if (!u) {
            return;
        }
        this.match = u.match;
    }
    get uri() {
        return this._uri;
    }
    set uri(value) {
        this._uri = value;
        this._domain = null;
        this._canLaunch = null;
    }
    get domain() {
        if (this._domain == null && this.uri != null) {
            this._domain = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getDomain(this.uri);
            if (this._domain === "") {
                this._domain = null;
            }
        }
        return this._domain;
    }
    get hostname() {
        if (this.match === _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.RegularExpression) {
            return null;
        }
        if (this._hostname == null && this.uri != null) {
            this._hostname = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getHostname(this.uri);
            if (this._hostname === "") {
                this._hostname = null;
            }
        }
        return this._hostname;
    }
    get host() {
        if (this.match === _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.RegularExpression) {
            return null;
        }
        if (this._host == null && this.uri != null) {
            this._host = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getHost(this.uri);
            if (this._host === "") {
                this._host = null;
            }
        }
        return this._host;
    }
    get hostnameOrUri() {
        return this.hostname != null ? this.hostname : this.uri;
    }
    get hostOrUri() {
        return this.host != null ? this.host : this.uri;
    }
    get isWebsite() {
        return (this.uri != null &&
            (this.uri.indexOf("http://") === 0 ||
                this.uri.indexOf("https://") === 0 ||
                (this.uri.indexOf("://") < 0 && !_platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.isNullOrWhitespace(_platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getDomain(this.uri)))));
    }
    get canLaunch() {
        if (this._canLaunch != null) {
            return this._canLaunch;
        }
        if (this.uri != null && this.match !== _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.RegularExpression) {
            this._canLaunch = _platform_misc_safe_urls__WEBPACK_IMPORTED_MODULE_1__.SafeUrls.canLaunch(this.launchUri);
        }
        else {
            this._canLaunch = false;
        }
        return this._canLaunch;
    }
    get launchUri() {
        return this.uri.indexOf("://") < 0 && !_platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.isNullOrWhitespace(_platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getDomain(this.uri))
            ? "http://" + this.uri
            : this.uri;
    }
    static fromJSON(obj) {
        return Object.assign(new LoginUriView(), obj);
    }
    /**
     * Converts a LoginUriView object from the SDK to a LoginUriView object.
     */
    static fromSdkLoginUriView(obj) {
        if (obj == null) {
            return undefined;
        }
        const view = new LoginUriView();
        view.uri = obj.uri;
        view.match = obj.match;
        return view;
    }
    matchesUri(targetUri, equivalentDomains, defaultUriMatch = null) {
        var _a;
        if (!this.uri || !targetUri) {
            return false;
        }
        let matchType = (_a = this.match) !== null && _a !== void 0 ? _a : defaultUriMatch;
        matchType !== null && matchType !== void 0 ? matchType : (matchType = _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.Domain);
        const targetDomain = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getDomain(targetUri);
        const matchDomains = equivalentDomains.add(targetDomain);
        switch (matchType) {
            case _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.Domain:
                return this.matchesDomain(targetUri, matchDomains);
            case _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.Host: {
                const urlHost = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getHost(targetUri);
                return urlHost != null && urlHost === _platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getHost(this.uri);
            }
            case _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.Exact:
                return targetUri === this.uri;
            case _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.StartsWith:
                return targetUri.startsWith(this.uri);
            case _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.RegularExpression:
                try {
                    const regex = new RegExp(this.uri, "i");
                    return regex.test(targetUri);
                    // FIXME: Remove when updating file. Eslint update
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                }
                catch (e) {
                    // Invalid regex
                    return false;
                }
            case _models_domain_domain_service__WEBPACK_IMPORTED_MODULE_0__.UriMatchStrategy.Never:
                return false;
            default:
                break;
        }
        return false;
    }
    matchesDomain(targetUri, matchDomains) {
        if (targetUri == null || this.domain == null || !matchDomains.has(this.domain)) {
            return false;
        }
        if (_platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.DomainMatchBlacklist.has(this.domain)) {
            const domainUrlHost = _platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getHost(targetUri);
            return !_platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.DomainMatchBlacklist.get(this.domain).has(domainUrlHost);
        }
        return true;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/view/login.view.ts":
/*!*************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/login.view.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginView: () => (/* binding */ LoginView)
/* harmony export */ });
/* harmony import */ var _platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "../../libs/common/src/vault/enums/index.ts");
/* harmony import */ var _linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../linked-field-option.decorator */ "../../libs/common/src/vault/linked-field-option.decorator.ts");
/* harmony import */ var _fido2_credential_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fido2-credential.view */ "../../libs/common/src/vault/models/view/fido2-credential.view.ts");
/* harmony import */ var _item_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item.view */ "../../libs/common/src/vault/models/view/item.view.ts");
/* harmony import */ var _login_uri_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-uri.view */ "../../libs/common/src/vault/models/view/login-uri.view.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






class LoginView extends _item_view__WEBPACK_IMPORTED_MODULE_4__.ItemView {
    constructor(l) {
        super();
        this.username = null;
        this.password = null;
        this.passwordRevisionDate = null;
        this.totp = null;
        this.uris = [];
        this.autofillOnPageLoad = null;
        this.fido2Credentials = null;
        if (!l) {
            return;
        }
        this.passwordRevisionDate = l.passwordRevisionDate;
        this.autofillOnPageLoad = l.autofillOnPageLoad;
    }
    get uri() {
        return this.hasUris ? this.uris[0].uri : null;
    }
    get maskedPassword() {
        return this.password != null ? "••••••••" : null;
    }
    get subTitle() {
        var _a;
        // if there's a passkey available, use that as a fallback
        if (_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isNullOrEmpty(this.username) && ((_a = this.fido2Credentials) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return this.fido2Credentials[0].userName;
        }
        return this.username;
    }
    get canLaunch() {
        return this.hasUris && this.uris.some((u) => u.canLaunch);
    }
    get hasTotp() {
        return !_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isNullOrWhitespace(this.totp);
    }
    get launchUri() {
        if (this.hasUris) {
            const uri = this.uris.find((u) => u.canLaunch);
            if (uri != null) {
                return uri.launchUri;
            }
        }
        return null;
    }
    get hasUris() {
        return this.uris != null && this.uris.length > 0;
    }
    get hasFido2Credentials() {
        return this.fido2Credentials != null && this.fido2Credentials.length > 0;
    }
    matchesUri(targetUri, equivalentDomains, defaultUriMatch = null) {
        if (this.uris == null) {
            return false;
        }
        return this.uris.some((uri) => uri.matchesUri(targetUri, equivalentDomains, defaultUriMatch));
    }
    static fromJSON(obj) {
        var _a;
        const passwordRevisionDate = obj.passwordRevisionDate == null ? null : new Date(obj.passwordRevisionDate);
        const uris = obj.uris.map((uri) => _login_uri_view__WEBPACK_IMPORTED_MODULE_5__.LoginUriView.fromJSON(uri));
        const fido2Credentials = (_a = obj.fido2Credentials) === null || _a === void 0 ? void 0 : _a.map((key) => _fido2_credential_view__WEBPACK_IMPORTED_MODULE_3__.Fido2CredentialView.fromJSON(key));
        return Object.assign(new LoginView(), obj, {
            passwordRevisionDate,
            uris,
            fido2Credentials,
        });
    }
    /**
     * Converts the SDK LoginView to a LoginView.
     *
     * Note: FIDO2 credentials remain encrypted at this stage.
     * Unlike other fields that are decrypted as part of the LoginView, the SDK maintains
     * the FIDO2 credentials in encrypted form. We can decrypt them later using a separate
     * call to client.vault().ciphers().decrypt_fido2_credentials().
     */
    static fromSdkLoginView(obj) {
        var _a, _b, _c, _d, _e;
        if (obj == null) {
            return undefined;
        }
        const loginView = new LoginView();
        loginView.username = (_a = obj.username) !== null && _a !== void 0 ? _a : null;
        loginView.password = (_b = obj.password) !== null && _b !== void 0 ? _b : null;
        loginView.passwordRevisionDate =
            obj.passwordRevisionDate == null ? null : new Date(obj.passwordRevisionDate);
        loginView.totp = (_c = obj.totp) !== null && _c !== void 0 ? _c : null;
        loginView.autofillOnPageLoad = (_d = obj.autofillOnPageLoad) !== null && _d !== void 0 ? _d : null;
        loginView.uris = ((_e = obj.uris) === null || _e === void 0 ? void 0 : _e.map((uri) => _login_uri_view__WEBPACK_IMPORTED_MODULE_5__.LoginUriView.fromSdkLoginUriView(uri))) || [];
        // FIDO2 credentials are not decrypted here, they remain encrypted
        loginView.fido2Credentials = null;
        return loginView;
    }
}
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.LoginLinkedId.Username, { sortPosition: 0 }),
    __metadata("design:type", String)
], LoginView.prototype, "username", void 0);
__decorate([
    (0,_linked_field_option_decorator__WEBPACK_IMPORTED_MODULE_2__.linkedFieldOption)(_enums__WEBPACK_IMPORTED_MODULE_1__.LoginLinkedId.Password, { sortPosition: 1 }),
    __metadata("design:type", String)
], LoginView.prototype, "password", void 0);


/***/ }),

/***/ "../../libs/common/src/vault/models/view/password-history.view.ts":
/*!************************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/password-history.view.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordHistoryView: () => (/* binding */ PasswordHistoryView)
/* harmony export */ });
class PasswordHistoryView {
    constructor(ph) {
        this.password = null;
        this.lastUsedDate = null;
        if (!ph) {
            return;
        }
        this.lastUsedDate = ph.lastUsedDate;
    }
    static fromJSON(obj) {
        const lastUsedDate = obj.lastUsedDate == null ? null : new Date(obj.lastUsedDate);
        return Object.assign(new PasswordHistoryView(), obj, {
            lastUsedDate: lastUsedDate,
        });
    }
    /**
     * Converts the SDK PasswordHistoryView to a PasswordHistoryView.
     */
    static fromSdkPasswordHistoryView(obj) {
        if (!obj) {
            return undefined;
        }
        const view = new PasswordHistoryView();
        view.password = obj.password;
        view.lastUsedDate = obj.lastUsedDate == null ? null : new Date(obj.lastUsedDate);
        return view;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/view/secure-note.view.ts":
/*!*******************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/secure-note.view.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureNoteView: () => (/* binding */ SecureNoteView)
/* harmony export */ });
/* harmony import */ var _item_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.view */ "../../libs/common/src/vault/models/view/item.view.ts");

class SecureNoteView extends _item_view__WEBPACK_IMPORTED_MODULE_0__.ItemView {
    constructor(n) {
        super();
        this.type = null;
        if (!n) {
            return;
        }
        this.type = n.type;
    }
    get subTitle() {
        return null;
    }
    static fromJSON(obj) {
        return Object.assign(new SecureNoteView(), obj);
    }
    /**
     * Converts the SDK SecureNoteView to a SecureNoteView.
     */
    static fromSdkSecureNoteView(obj) {
        var _a;
        if (!obj) {
            return undefined;
        }
        const secureNoteView = new SecureNoteView();
        secureNoteView.type = (_a = obj.type) !== null && _a !== void 0 ? _a : null;
        return secureNoteView;
    }
}


/***/ }),

/***/ "../../libs/common/src/vault/models/view/ssh-key.view.ts":
/*!***************************************************************!*\
  !*** ../../libs/common/src/vault/models/view/ssh-key.view.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SshKeyView: () => (/* binding */ SshKeyView)
/* harmony export */ });
/* harmony import */ var _item_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.view */ "../../libs/common/src/vault/models/view/item.view.ts");

class SshKeyView extends _item_view__WEBPACK_IMPORTED_MODULE_0__.ItemView {
    constructor(n) {
        super();
        this.privateKey = null;
        this.publicKey = null;
        this.keyFingerprint = null;
        if (!n) {
            return;
        }
    }
    get maskedPrivateKey() {
        if (!this.privateKey || this.privateKey.length === 0) {
            return "";
        }
        let lines = this.privateKey.split("\n").filter((l) => l.trim() !== "");
        lines = lines.map((l, i) => {
            if (i === 0 || i === lines.length - 1) {
                return l;
            }
            return this.maskLine(l);
        });
        return lines.join("\n");
    }
    maskLine(line) {
        return "•".repeat(32);
    }
    get subTitle() {
        return this.keyFingerprint;
    }
    static fromJSON(obj) {
        return Object.assign(new SshKeyView(), obj);
    }
    /**
     * Converts the SDK SshKeyView to a SshKeyView.
     */
    static fromSdkSshKeyView(obj) {
        var _a, _b, _c;
        if (!obj) {
            return undefined;
        }
        const sshKeyView = new SshKeyView();
        sshKeyView.privateKey = (_a = obj.privateKey) !== null && _a !== void 0 ? _a : null;
        sshKeyView.publicKey = (_b = obj.publicKey) !== null && _b !== void 0 ? _b : null;
        sshKeyView.keyFingerprint = (_c = obj.fingerprint) !== null && _c !== void 0 ? _c : null;
        return sshKeyView;
    }
}


/***/ }),

/***/ "../../libs/logging/src/console-log.service.ts":
/*!*****************************************************!*\
  !*** ../../libs/logging/src/console-log.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogService: () => (/* binding */ ConsoleLogService)
/* harmony export */ });
/* harmony import */ var _log_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-level */ "../../libs/logging/src/log-level.ts");

class ConsoleLogService {
    constructor(isDev, filter = null) {
        this.isDev = isDev;
        this.filter = filter;
        this.timersMap = new Map();
    }
    debug(message, ...optionalParams) {
        if (!this.isDev) {
            return;
        }
        this.write(_log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, message, ...optionalParams);
    }
    info(message, ...optionalParams) {
        this.write(_log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Info, message, ...optionalParams);
    }
    warning(message, ...optionalParams) {
        this.write(_log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        this.write(_log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, message, ...optionalParams);
    }
    write(level, message, ...optionalParams) {
        if (this.filter != null && this.filter(level)) {
            return;
        }
        switch (level) {
            case _log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case _log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Info:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case _log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning:
                // eslint-disable-next-line
                console.warn(message, ...optionalParams);
                break;
            case _log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error:
                // eslint-disable-next-line
                console.error(message, ...optionalParams);
                break;
            default:
                break;
        }
    }
}


/***/ }),

/***/ "../../libs/logging/src/index.ts":
/*!***************************************!*\
  !*** ../../libs/logging/src/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogService: () => (/* reexport safe */ _console_log_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleLogService),
/* harmony export */   LogLevel: () => (/* reexport safe */ _log_level__WEBPACK_IMPORTED_MODULE_1__.LogLevel),
/* harmony export */   LogService: () => (/* reexport safe */ _log_service__WEBPACK_IMPORTED_MODULE_0__.LogService)
/* harmony export */ });
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.service */ "../../libs/logging/src/log.service.ts");
/* harmony import */ var _log_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-level */ "../../libs/logging/src/log-level.ts");
/* harmony import */ var _console_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console-log.service */ "../../libs/logging/src/console-log.service.ts");





/***/ }),

/***/ "../../libs/logging/src/log-level.ts":
/*!*******************************************!*\
  !*** ../../libs/logging/src/log-level.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel)
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel || (LogLevel = {}));


/***/ }),

/***/ "../../libs/logging/src/log.service.ts":
/*!*********************************************!*\
  !*** ../../libs/logging/src/log.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogService: () => (/* binding */ LogService)
/* harmony export */ });
class LogService {
}


/***/ }),

/***/ "../../libs/storage-core/src/client-locations.ts":
/*!*******************************************************!*\
  !*** ../../libs/storage-core/src/client-locations.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../libs/storage-core/src/html-storage-location.enum.ts":
/*!*****************************************************************!*\
  !*** ../../libs/storage-core/src/html-storage-location.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlStorageLocation: () => (/* binding */ HtmlStorageLocation)
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var HtmlStorageLocation;
(function (HtmlStorageLocation) {
    HtmlStorageLocation["Local"] = "local";
    HtmlStorageLocation["Memory"] = "memory";
    HtmlStorageLocation["Session"] = "session";
})(HtmlStorageLocation || (HtmlStorageLocation = {}));


/***/ }),

/***/ "../../libs/storage-core/src/index.ts":
/*!********************************************!*\
  !*** ../../libs/storage-core/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractStorageService: () => (/* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService),
/* harmony export */   HtmlStorageLocation: () => (/* reexport safe */ _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_1__.HtmlStorageLocation),
/* harmony export */   MemoryStorageService: () => (/* reexport safe */ _memory_storage_service__WEBPACK_IMPORTED_MODULE_2__.MemoryStorageService),
/* harmony export */   SerializedMemoryStorageService: () => (/* reexport safe */ _serialized_memory_storage_service__WEBPACK_IMPORTED_MODULE_3__.SerializedMemoryStorageService),
/* harmony export */   StorageLocationEnum: () => (/* reexport safe */ _storage_location_enum__WEBPACK_IMPORTED_MODULE_5__.StorageLocationEnum),
/* harmony export */   StorageService: () => (/* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService),
/* harmony export */   StorageServiceProvider: () => (/* reexport safe */ _storage_service_provider__WEBPACK_IMPORTED_MODULE_7__.StorageServiceProvider)
/* harmony export */ });
/* harmony import */ var _client_locations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-locations */ "../../libs/storage-core/src/client-locations.ts");
/* harmony import */ var _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-storage-location.enum */ "../../libs/storage-core/src/html-storage-location.enum.ts");
/* harmony import */ var _memory_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memory-storage.service */ "../../libs/storage-core/src/memory-storage.service.ts");
/* harmony import */ var _serialized_memory_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serialized-memory-storage.service */ "../../libs/storage-core/src/serialized-memory-storage.service.ts");
/* harmony import */ var _storage_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage-location */ "../../libs/storage-core/src/storage-location.ts");
/* harmony import */ var _storage_location_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage-location.enum */ "../../libs/storage-core/src/storage-location.enum.ts");
/* harmony import */ var _storage_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage-options */ "../../libs/storage-core/src/storage-options.ts");
/* harmony import */ var _storage_service_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-service.provider */ "../../libs/storage-core/src/storage-service.provider.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage.service */ "../../libs/storage-core/src/storage.service.ts");








// Renamed to just "StorageService", to be removed when references are updated




/***/ }),

/***/ "../../libs/storage-core/src/memory-storage.service.ts":
/*!*************************************************************!*\
  !*** ../../libs/storage-core/src/memory-storage.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryStorageService: () => (/* binding */ MemoryStorageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ "../../libs/storage-core/src/storage.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore


class MemoryStorageService extends _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService {
    constructor() {
        super(...arguments);
        this.store = new Map();
        this.updatesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    get valuesRequireDeserialization() {
        return false;
    }
    get updates$() {
        return this.updatesSubject.asObservable();
    }
    get(key) {
        if (this.store.has(key)) {
            const obj = this.store.get(key);
            return Promise.resolve(obj);
        }
        return Promise.resolve(null);
    }
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.get(key)) != null;
        });
    }
    save(key, obj) {
        if (obj == null) {
            return this.remove(key);
        }
        // TODO: Remove once foreground/background contexts are separated in browser
        // Needed to ensure ownership of all memory by the context running the storage service
        const toStore = structuredClone(obj);
        this.store.set(key, toStore);
        this.updatesSubject.next({ key, updateType: "save" });
        return Promise.resolve();
    }
    remove(key) {
        this.store.delete(key);
        this.updatesSubject.next({ key, updateType: "remove" });
        return Promise.resolve();
    }
}


/***/ }),

/***/ "../../libs/storage-core/src/serialized-memory-storage.service.ts":
/*!************************************************************************!*\
  !*** ../../libs/storage-core/src/serialized-memory-storage.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializedMemoryStorageService: () => (/* binding */ SerializedMemoryStorageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ "../../libs/storage-core/src/storage.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore


class SerializedMemoryStorageService extends _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService {
    constructor() {
        super(...arguments);
        this.store = {};
        this.updatesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    get valuesRequireDeserialization() {
        return true;
    }
    get updates$() {
        return this.updatesSubject.asObservable();
    }
    get(key) {
        const json = this.store[key];
        if (json) {
            const obj = JSON.parse(json);
            return Promise.resolve(obj);
        }
        return Promise.resolve(null);
    }
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.get(key)) != null;
        });
    }
    save(key, obj) {
        if (obj == null) {
            return this.remove(key);
        }
        // TODO: Remove once foreground/background contexts are separated in browser
        // Needed to ensure ownership of all memory by the context running the storage service
        this.store[key] = JSON.stringify(obj);
        this.updatesSubject.next({ key, updateType: "save" });
        return Promise.resolve();
    }
    remove(key) {
        delete this.store[key];
        this.updatesSubject.next({ key, updateType: "remove" });
        return Promise.resolve();
    }
}


/***/ }),

/***/ "../../libs/storage-core/src/storage-location.enum.ts":
/*!************************************************************!*\
  !*** ../../libs/storage-core/src/storage-location.enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageLocationEnum: () => (/* binding */ StorageLocationEnum)
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var StorageLocationEnum;
(function (StorageLocationEnum) {
    StorageLocationEnum["Both"] = "both";
    StorageLocationEnum["Disk"] = "disk";
    StorageLocationEnum["Memory"] = "memory";
})(StorageLocationEnum || (StorageLocationEnum = {}));


/***/ }),

/***/ "../../libs/storage-core/src/storage-location.ts":
/*!*******************************************************!*\
  !*** ../../libs/storage-core/src/storage-location.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../libs/storage-core/src/storage-options.ts":
/*!******************************************************!*\
  !*** ../../libs/storage-core/src/storage-options.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../libs/storage-core/src/storage-service.provider.ts":
/*!***************************************************************!*\
  !*** ../../libs/storage-core/src/storage-service.provider.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageServiceProvider: () => (/* binding */ StorageServiceProvider)
/* harmony export */ });
/**
 * A provider for getting client specific computed storage locations and services.
 */
class StorageServiceProvider {
    constructor(diskStorageService, memoryStorageService) {
        this.diskStorageService = diskStorageService;
        this.memoryStorageService = memoryStorageService;
    }
    /**
     * Computes the location and corresponding service for a given client.
     *
     * **NOTE** The default implementation does not respect client overrides and if clients
     * have special overrides they are responsible for implementing this service.
     * @param defaultLocation The default location to use if no client specific override is preferred.
     * @param overrides Client specific overrides
     * @returns The computed storage location and corresponding storage service to use to get/store state.
     * @throws If there is no configured storage service for the given inputs.
     */
    get(defaultLocation, overrides) {
        switch (defaultLocation) {
            case "disk":
                return [defaultLocation, this.diskStorageService];
            case "memory":
                return [defaultLocation, this.memoryStorageService];
            default:
                throw new Error(`Unexpected location: ${defaultLocation}`);
        }
    }
}


/***/ }),

/***/ "../../libs/storage-core/src/storage.service.ts":
/*!******************************************************!*\
  !*** ../../libs/storage-core/src/storage.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
class StorageService {
}


/***/ }),

/***/ "?c521":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c95a":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?fd07":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bitwarden_sdk-internal_bitwarden_wasm_internal_bg_js-node_modules_argon2-a57236"], () => (__webpack_require__("../../libs/common/src/key-management/crypto/services/encrypt.worker.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".background.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"encrypt-worker": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_bitwarden_browser"] = self["webpackChunk_bitwarden_browser"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_bitwarden_sdk-internal_bitwarden_wasm_internal_bg_js-node_modules_argon2-a57236").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;