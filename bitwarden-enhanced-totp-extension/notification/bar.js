/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../libs/common/src/billing/enums/bitwarden-product-type.enum.ts":
/*!**************************************************************************!*\
  !*** ../../libs/common/src/billing/enums/bitwarden-product-type.enum.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitwardenProductType: function() { return /* binding */ BitwardenProductType; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var BitwardenProductType;
(function (BitwardenProductType) {
    BitwardenProductType[BitwardenProductType["PasswordManager"] = 0] = "PasswordManager";
    BitwardenProductType[BitwardenProductType["SecretsManager"] = 1] = "SecretsManager";
})(BitwardenProductType || (BitwardenProductType = {}));


/***/ }),

/***/ "../../libs/common/src/billing/enums/index.ts":
/*!****************************************************!*\
  !*** ../../libs/common/src/billing/enums/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitwardenProductType: function() { return /* reexport safe */ _bitwarden_product_type_enum__WEBPACK_IMPORTED_MODULE_4__.BitwardenProductType; },
/* harmony export */   PaymentMethodType: function() { return /* reexport safe */ _payment_method_type_enum__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodType; },
/* harmony export */   PlanInterval: function() { return /* reexport safe */ _plan_interval_enum__WEBPACK_IMPORTED_MODULE_7__.PlanInterval; },
/* harmony export */   PlanSponsorshipType: function() { return /* reexport safe */ _plan_sponsorship_type_enum__WEBPACK_IMPORTED_MODULE_1__.PlanSponsorshipType; },
/* harmony export */   PlanType: function() { return /* reexport safe */ _plan_type_enum__WEBPACK_IMPORTED_MODULE_2__.PlanType; },
/* harmony export */   ProductTierType: function() { return /* reexport safe */ _product_tier_type_enum__WEBPACK_IMPORTED_MODULE_5__.ProductTierType; },
/* harmony export */   ProductType: function() { return /* reexport safe */ _product_type_enum__WEBPACK_IMPORTED_MODULE_6__.ProductType; },
/* harmony export */   TransactionType: function() { return /* reexport safe */ _transaction_type_enum__WEBPACK_IMPORTED_MODULE_3__.TransactionType; },
/* harmony export */   isNotSelfUpgradable: function() { return /* reexport safe */ _product_tier_type_enum__WEBPACK_IMPORTED_MODULE_5__.isNotSelfUpgradable; }
/* harmony export */ });
/* harmony import */ var _payment_method_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-method-type.enum */ "../../libs/common/src/billing/enums/payment-method-type.enum.ts");
/* harmony import */ var _plan_sponsorship_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-sponsorship-type.enum */ "../../libs/common/src/billing/enums/plan-sponsorship-type.enum.ts");
/* harmony import */ var _plan_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-type.enum */ "../../libs/common/src/billing/enums/plan-type.enum.ts");
/* harmony import */ var _transaction_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-type.enum */ "../../libs/common/src/billing/enums/transaction-type.enum.ts");
/* harmony import */ var _bitwarden_product_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bitwarden-product-type.enum */ "../../libs/common/src/billing/enums/bitwarden-product-type.enum.ts");
/* harmony import */ var _product_tier_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-tier-type.enum */ "../../libs/common/src/billing/enums/product-tier-type.enum.ts");
/* harmony import */ var _product_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-type.enum */ "../../libs/common/src/billing/enums/product-type.enum.ts");
/* harmony import */ var _plan_interval_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plan-interval.enum */ "../../libs/common/src/billing/enums/plan-interval.enum.ts");










/***/ }),

/***/ "../../libs/common/src/billing/enums/payment-method-type.enum.ts":
/*!***********************************************************************!*\
  !*** ../../libs/common/src/billing/enums/payment-method-type.enum.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentMethodType: function() { return /* binding */ PaymentMethodType; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType[PaymentMethodType["Card"] = 0] = "Card";
    PaymentMethodType[PaymentMethodType["BankAccount"] = 1] = "BankAccount";
    PaymentMethodType[PaymentMethodType["PayPal"] = 2] = "PayPal";
    PaymentMethodType[PaymentMethodType["BitPay"] = 3] = "BitPay";
    PaymentMethodType[PaymentMethodType["Credit"] = 4] = "Credit";
    PaymentMethodType[PaymentMethodType["WireTransfer"] = 5] = "WireTransfer";
    PaymentMethodType[PaymentMethodType["Check"] = 8] = "Check";
})(PaymentMethodType || (PaymentMethodType = {}));


/***/ }),

/***/ "../../libs/common/src/billing/enums/plan-interval.enum.ts":
/*!*****************************************************************!*\
  !*** ../../libs/common/src/billing/enums/plan-interval.enum.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanInterval: function() { return /* binding */ PlanInterval; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PlanInterval;
(function (PlanInterval) {
    PlanInterval[PlanInterval["Monthly"] = 0] = "Monthly";
    PlanInterval[PlanInterval["Annually"] = 1] = "Annually";
})(PlanInterval || (PlanInterval = {}));


/***/ }),

/***/ "../../libs/common/src/billing/enums/plan-sponsorship-type.enum.ts":
/*!*************************************************************************!*\
  !*** ../../libs/common/src/billing/enums/plan-sponsorship-type.enum.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanSponsorshipType: function() { return /* binding */ PlanSponsorshipType; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PlanSponsorshipType;
(function (PlanSponsorshipType) {
    PlanSponsorshipType[PlanSponsorshipType["FamiliesForEnterprise"] = 0] = "FamiliesForEnterprise";
})(PlanSponsorshipType || (PlanSponsorshipType = {}));


/***/ }),

/***/ "../../libs/common/src/billing/enums/plan-type.enum.ts":
/*!*************************************************************!*\
  !*** ../../libs/common/src/billing/enums/plan-type.enum.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanType: function() { return /* binding */ PlanType; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PlanType;
(function (PlanType) {
    PlanType[PlanType["Free"] = 0] = "Free";
    PlanType[PlanType["FamiliesAnnually2019"] = 1] = "FamiliesAnnually2019";
    PlanType[PlanType["TeamsMonthly2019"] = 2] = "TeamsMonthly2019";
    PlanType[PlanType["TeamsAnnually2019"] = 3] = "TeamsAnnually2019";
    PlanType[PlanType["EnterpriseMonthly2019"] = 4] = "EnterpriseMonthly2019";
    PlanType[PlanType["EnterpriseAnnually2019"] = 5] = "EnterpriseAnnually2019";
    PlanType[PlanType["Custom"] = 6] = "Custom";
    PlanType[PlanType["FamiliesAnnually"] = 7] = "FamiliesAnnually";
    PlanType[PlanType["TeamsMonthly2020"] = 8] = "TeamsMonthly2020";
    PlanType[PlanType["TeamsAnnually2020"] = 9] = "TeamsAnnually2020";
    PlanType[PlanType["EnterpriseMonthly2020"] = 10] = "EnterpriseMonthly2020";
    PlanType[PlanType["EnterpriseAnnually2020"] = 11] = "EnterpriseAnnually2020";
    PlanType[PlanType["TeamsMonthly2023"] = 12] = "TeamsMonthly2023";
    PlanType[PlanType["TeamsAnnually2023"] = 13] = "TeamsAnnually2023";
    PlanType[PlanType["EnterpriseMonthly2023"] = 14] = "EnterpriseMonthly2023";
    PlanType[PlanType["EnterpriseAnnually2023"] = 15] = "EnterpriseAnnually2023";
    PlanType[PlanType["TeamsStarter2023"] = 16] = "TeamsStarter2023";
    PlanType[PlanType["TeamsMonthly"] = 17] = "TeamsMonthly";
    PlanType[PlanType["TeamsAnnually"] = 18] = "TeamsAnnually";
    PlanType[PlanType["EnterpriseMonthly"] = 19] = "EnterpriseMonthly";
    PlanType[PlanType["EnterpriseAnnually"] = 20] = "EnterpriseAnnually";
    PlanType[PlanType["TeamsStarter"] = 21] = "TeamsStarter";
})(PlanType || (PlanType = {}));


/***/ }),

/***/ "../../libs/common/src/billing/enums/product-tier-type.enum.ts":
/*!*********************************************************************!*\
  !*** ../../libs/common/src/billing/enums/product-tier-type.enum.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductTierType: function() { return /* binding */ ProductTierType; },
/* harmony export */   isNotSelfUpgradable: function() { return /* binding */ isNotSelfUpgradable; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var ProductTierType;
(function (ProductTierType) {
    ProductTierType[ProductTierType["Free"] = 0] = "Free";
    ProductTierType[ProductTierType["Families"] = 1] = "Families";
    ProductTierType[ProductTierType["Teams"] = 2] = "Teams";
    ProductTierType[ProductTierType["Enterprise"] = 3] = "Enterprise";
    ProductTierType[ProductTierType["TeamsStarter"] = 4] = "TeamsStarter";
})(ProductTierType || (ProductTierType = {}));
function isNotSelfUpgradable(productType) {
    return (productType !== ProductTierType.Free &&
        productType !== ProductTierType.TeamsStarter &&
        productType !== ProductTierType.Families);
}


/***/ }),

/***/ "../../libs/common/src/billing/enums/product-type.enum.ts":
/*!****************************************************************!*\
  !*** ../../libs/common/src/billing/enums/product-type.enum.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductType: function() { return /* binding */ ProductType; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var ProductType;
(function (ProductType) {
    ProductType[ProductType["PasswordManager"] = 0] = "PasswordManager";
    ProductType[ProductType["SecretsManager"] = 1] = "SecretsManager";
})(ProductType || (ProductType = {}));


/***/ }),

/***/ "../../libs/common/src/billing/enums/transaction-type.enum.ts":
/*!********************************************************************!*\
  !*** ../../libs/common/src/billing/enums/transaction-type.enum.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionType: function() { return /* binding */ TransactionType; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Charge"] = 0] = "Charge";
    TransactionType[TransactionType["Credit"] = 1] = "Credit";
    TransactionType[TransactionType["PromotionalCredit"] = 2] = "PromotionalCredit";
    TransactionType[TransactionType["ReferralCredit"] = 3] = "ReferralCredit";
    TransactionType[TransactionType["Refund"] = 4] = "Refund";
})(TransactionType || (TransactionType = {}));


/***/ }),

/***/ "../../libs/common/src/platform/enums/encryption-type.enum.ts":
/*!********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/encryption-type.enum.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE: function() { return /* binding */ EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE; },
/* harmony export */   EncryptionType: function() { return /* binding */ EncryptionType; },
/* harmony export */   encryptionTypeToString: function() { return /* binding */ encryptionTypeToString; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploadType: function() { return /* binding */ FileUploadType; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HashPurpose: function() { return /* binding */ HashPurpose; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlStorageLocation: function() { return /* reexport safe */ _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__.HtmlStorageLocation; }
/* harmony export */ });
/* harmony import */ var _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/storage-core */ "../../libs/storage-core/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/enums/index.ts":
/*!*****************************************************!*\
  !*** ../../libs/common/src/platform/enums/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE: function() { return /* reexport safe */ _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__.EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE; },
/* harmony export */   EncryptionType: function() { return /* reexport safe */ _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__.EncryptionType; },
/* harmony export */   FileUploadType: function() { return /* reexport safe */ _file_upload_type_enum__WEBPACK_IMPORTED_MODULE_1__.FileUploadType; },
/* harmony export */   HashPurpose: function() { return /* reexport safe */ _hash_purpose_enum__WEBPACK_IMPORTED_MODULE_2__.HashPurpose; },
/* harmony export */   HtmlStorageLocation: function() { return /* reexport safe */ _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_3__.HtmlStorageLocation; },
/* harmony export */   KeySuffixOptions: function() { return /* reexport safe */ _key_suffix_options_enum__WEBPACK_IMPORTED_MODULE_4__.KeySuffixOptions; },
/* harmony export */   LogLevelType: function() { return /* reexport safe */ _log_level_type_enum__WEBPACK_IMPORTED_MODULE_5__.LogLevelType; },
/* harmony export */   StorageLocation: function() { return /* reexport safe */ _storage_location_enum__WEBPACK_IMPORTED_MODULE_6__.StorageLocation; },
/* harmony export */   ThemeType: function() { return /* reexport safe */ _theme_type_enum__WEBPACK_IMPORTED_MODULE_7__.ThemeType; },
/* harmony export */   ThemeTypes: function() { return /* reexport safe */ _theme_type_enum__WEBPACK_IMPORTED_MODULE_7__.ThemeTypes; },
/* harmony export */   encryptionTypeToString: function() { return /* reexport safe */ _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__.encryptionTypeToString; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeySuffixOptions: function() { return /* binding */ KeySuffixOptions; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevelType: function() { return /* reexport safe */ _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__.LogLevel; }
/* harmony export */ });
/* harmony import */ var _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/logging */ "../../libs/logging/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/enums/storage-location.enum.ts":
/*!*********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/storage-location.enum.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageLocation: function() { return /* reexport safe */ _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__.StorageLocationEnum; }
/* harmony export */ });
/* harmony import */ var _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/storage-core */ "../../libs/storage-core/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/enums/theme-type.enum.ts":
/*!***************************************************************!*\
  !*** ../../libs/common/src/platform/enums/theme-type.enum.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeType: function() { return /* binding */ ThemeType; },
/* harmony export */   ThemeTypes: function() { return /* binding */ ThemeTypes; }
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

/***/ "../../libs/common/src/platform/services/console-log.service.ts":
/*!**********************************************************************!*\
  !*** ../../libs/common/src/platform/services/console-log.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogService: function() { return /* reexport safe */ _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogService; }
/* harmony export */ });
/* harmony import */ var _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/logging */ "../../libs/logging/src/index.ts");



/***/ }),

/***/ "../../libs/logging/src/console-log.service.ts":
/*!*****************************************************!*\
  !*** ../../libs/logging/src/console-log.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogService: function() { return /* binding */ ConsoleLogService; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogService: function() { return /* reexport safe */ _console_log_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleLogService; },
/* harmony export */   LogLevel: function() { return /* reexport safe */ _log_level__WEBPACK_IMPORTED_MODULE_1__.LogLevel; },
/* harmony export */   LogService: function() { return /* reexport safe */ _log_service__WEBPACK_IMPORTED_MODULE_0__.LogService; }
/* harmony export */ });
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.service */ "../../libs/logging/src/log.service.ts");
/* harmony import */ var _log_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-level */ "../../libs/logging/src/log-level.ts");
/* harmony import */ var _console_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console-log.service */ "../../libs/logging/src/console-log.service.ts");





/***/ }),

/***/ "../../libs/logging/src/log-level.ts":
/*!*******************************************!*\
  !*** ../../libs/logging/src/log-level.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: function() { return /* binding */ LogLevel; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogService: function() { return /* binding */ LogService; }
/* harmony export */ });
class LogService {
}


/***/ }),

/***/ "../../libs/storage-core/src/client-locations.ts":
/*!*******************************************************!*\
  !*** ../../libs/storage-core/src/client-locations.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../libs/storage-core/src/html-storage-location.enum.ts":
/*!*****************************************************************!*\
  !*** ../../libs/storage-core/src/html-storage-location.enum.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlStorageLocation: function() { return /* binding */ HtmlStorageLocation; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractStorageService: function() { return /* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService; },
/* harmony export */   HtmlStorageLocation: function() { return /* reexport safe */ _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_1__.HtmlStorageLocation; },
/* harmony export */   MemoryStorageService: function() { return /* reexport safe */ _memory_storage_service__WEBPACK_IMPORTED_MODULE_2__.MemoryStorageService; },
/* harmony export */   SerializedMemoryStorageService: function() { return /* reexport safe */ _serialized_memory_storage_service__WEBPACK_IMPORTED_MODULE_3__.SerializedMemoryStorageService; },
/* harmony export */   StorageLocationEnum: function() { return /* reexport safe */ _storage_location_enum__WEBPACK_IMPORTED_MODULE_5__.StorageLocationEnum; },
/* harmony export */   StorageService: function() { return /* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService; },
/* harmony export */   StorageServiceProvider: function() { return /* reexport safe */ _storage_service_provider__WEBPACK_IMPORTED_MODULE_7__.StorageServiceProvider; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryStorageService: function() { return /* binding */ MemoryStorageService; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializedMemoryStorageService: function() { return /* binding */ SerializedMemoryStorageService; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageLocationEnum: function() { return /* binding */ StorageLocationEnum; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../libs/storage-core/src/storage-options.ts":
/*!******************************************************!*\
  !*** ../../libs/storage-core/src/storage-options.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../libs/storage-core/src/storage-service.provider.ts":
/*!***************************************************************!*\
  !*** ../../libs/storage-core/src/storage-service.provider.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageServiceProvider: function() { return /* binding */ StorageServiceProvider; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: function() { return /* binding */ StorageService; }
/* harmony export */ });
class StorageService {
}


/***/ }),

/***/ "../../node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createCache; }
/* harmony export */ });
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "../../node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "../../node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis */ "../../node_modules/stylis/src/Utility.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "../../node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "../../node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "../../node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "../../node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/weak-memoize */ "../../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");




var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      break;
    }
    (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)();
  }
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.slice)(begin, stylis__WEBPACK_IMPORTED_MODULE_3__.position);
};
var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;
  do {
    switch ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      case 0:
        // &\f
        if (character === 38 && (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(stylis__WEBPACK_IMPORTED_MODULE_3__.position - 1, points, index);
        break;
      case 2:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.delimit)(character);
        break;
      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_4__.from)(character);
    }
  } while (character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)());
  return parsed;
};
var getRules = function getRules(value, points) {
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.dealloc)(toRules((0,stylis__WEBPACK_IMPORTED_MODULE_3__.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent ||
  // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case

  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */ && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;
    if (
    // charcode for l
    value.charCodeAt(0) === 108 &&
    // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? element.parent.children :
      // global rule at the root level
      children;
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];
        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version

        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};
var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user

var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.hash)(value, length)) {
    // color-adjust
    case 5103:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // order

    case 6165:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(\w+).+(:[^]+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-$1$2' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-item-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-line-pack' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, '-grow', '') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /([^-])(transform)/g, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(zoom-|grab)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), /(image-set)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(image-set\([^]*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(flex-)?(.*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-pack:$3' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+)-inline(.+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 1 - length > 6) switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2-$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, 'stretch') ? prefix((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, (0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 3 - (~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, ':', ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + '$2box$3') + value;
      }
      break;
    // writing-mode

    case 5936:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
  }
  return value;
}
var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case stylis__WEBPACK_IMPORTED_MODULE_5__.DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;
    case stylis__WEBPACK_IMPORTED_MODULE_5__.KEYFRAMES:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
        value: (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(element.value, '@', '@' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT)
      })], callback);
    case stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET:
      if (element.length) return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.combine)(element.props, function (value) {
        switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.match)(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(read-\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'input-$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'input-$1')]
            })], callback);
        }
        return '';
      });
  }
};
var defaultStylisPlugins = [prefixer];
var getSourceMap;
{
  var sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
  getSourceMap = function getSourceMap(styles) {
    var matches = styles.match(sourceMapPattern);
    if (!matches) return;
    return matches[matches.length - 1];
  };
}
var createCache = function createCache(options) {
  var key = options.key;
  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');
      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');
      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_6__.stringify, function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_5__.COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    }];
    var serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_7__.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_8__.compile)(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (getSourceMap) {
        var sourceMap = getSourceMap(serialized.styles);
        if (sourceMap) {
          currentSheet = {
            insert: function insert(rule) {
              sheet.insert(rule + sourceMap);
            }
          };
        }
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};


/***/ }),

/***/ "../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js":
/*!***********************************************************************************************************!*\
  !*** ../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createEmotion; }
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ "../../node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/serialize */ "../../node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");



function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}
function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.getRegisteredStyles)(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}
var createEmotion = function createEmotion(options) {
  var cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])(options);
  cache.sheet.speedy = function (value) {
    if (this.ctr !== 0) {
      throw new Error('speedy must be changed before any rules are inserted');
    }
    this.isSpeedy = value;
  };
  cache.compat = true;
  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__.serializeStyles)(args, cache.registered, undefined);
    (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.insertStyles)(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__.serializeStyles)(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };
  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__.serializeStyles)(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };
  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return merge(cache.registered, css, classnames(args));
  };
  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: _emotion_utils__WEBPACK_IMPORTED_MODULE_2__.getRegisteredStyles.bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css)
  };
};
var classnames = function classnames(args) {
  var cls = '';
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case 'boolean':
        break;
      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }
          break;
        }
      default:
        {
          toAdd = arg;
        }
    }
    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }
  return cls;
};


/***/ }),

/***/ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@emotion/css/dist/emotion-css.development.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cache: function() { return /* binding */ cache; },
/* harmony export */   css: function() { return /* binding */ css; },
/* harmony export */   cx: function() { return /* binding */ cx; },
/* harmony export */   flush: function() { return /* binding */ flush; },
/* harmony export */   getRegisteredStyles: function() { return /* binding */ getRegisteredStyles; },
/* harmony export */   hydrate: function() { return /* binding */ hydrate; },
/* harmony export */   injectGlobal: function() { return /* binding */ injectGlobal; },
/* harmony export */   keyframes: function() { return /* binding */ keyframes; },
/* harmony export */   merge: function() { return /* binding */ merge; },
/* harmony export */   sheet: function() { return /* binding */ sheet; }
/* harmony export */ });
/* harmony import */ var _create_instance_dist_emotion_css_create_instance_development_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-instance/dist/emotion-css-create-instance.development.esm.js */ "../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "../../node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/serialize */ "../../node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");




var _createEmotion = (0,_create_instance_dist_emotion_css_create_instance_development_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'css'
  }),
  flush = _createEmotion.flush,
  hydrate = _createEmotion.hydrate,
  cx = _createEmotion.cx,
  merge = _createEmotion.merge,
  getRegisteredStyles = _createEmotion.getRegisteredStyles,
  injectGlobal = _createEmotion.injectGlobal,
  keyframes = _createEmotion.keyframes,
  css = _createEmotion.css,
  sheet = _createEmotion.sheet,
  cache = _createEmotion.cache;


/***/ }),

/***/ "../../node_modules/@emotion/hash/dist/emotion-hash.esm.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@emotion/hash/dist/emotion-hash.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ murmur2; }
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}


/***/ }),

/***/ "../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ memoize; }
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}


/***/ }),

/***/ "../../node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializeStyles: function() { return /* binding */ serializeStyles; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "../../node_modules/@emotion/hash/dist/emotion-hash.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");



var isDevelopment = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }
  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
{
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};
  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== undefined) {
    if (String(componentSelector) === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }
    return componentSelector;
  }
  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }
    case 'object':
      {
        var keyframes = interpolation;
        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }
        var serializedStyles = interpolation;
        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;
          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = serializedStyles.styles + ";";
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }
        break;
      }
    case 'string':
      {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (_match, _p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join('\n') + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
        }
      }
      break;
  } // finalize string values (regular strings and functions interpolated into css calls)

  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== 'object') {
        var asString = value;
        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }
            default:
              {
                if (key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }
                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];
  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    if (asTemplateStringsArr[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg

  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      if (templateStringsArr[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += templateStringsArr[i];
    }
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time

  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }
  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;
  {
    var devStyles = {
      name: name,
      styles: styles,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return devStyles;
  }
}


/***/ }),

/***/ "../../node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleSheet: function() { return /* binding */ StyleSheet; }
/* harmony export */ });
var isDevelopment = true;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */

  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here

  return undefined;
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}
var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;
    this._insertTag = function (tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === undefined ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet;
}();


/***/ }),

/***/ "../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ unitlessKeys; }
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};


/***/ }),

/***/ "../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegisteredStyles: function() { return /* binding */ getRegisteredStyles; },
/* harmony export */   insertStyles: function() { return /* binding */ insertStyles; },
/* harmony export */   registerStyles: function() { return /* binding */ registerStyles; }
/* harmony export */ });
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false ||
  // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
      current = current.next;
    } while (current !== undefined);
  }
};


/***/ }),

/***/ "../../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ weakMemoize; }
/* harmony export */ });
var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // Use non-null assertion because we just checked that the cache `has` it
      // This allows us to remove `undefined` from the return value
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};


/***/ }),

/***/ "../../node_modules/@lit-labs/signals/development/index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@lit-labs/signals/development/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computed: function() { return /* binding */ Computed; },
/* harmony export */   Signal: function() { return /* reexport safe */ signal_polyfill__WEBPACK_IMPORTED_MODULE_0__.Signal; },
/* harmony export */   SignalWatcher: function() { return /* reexport safe */ _lib_signal_watcher_js__WEBPACK_IMPORTED_MODULE_1__.SignalWatcher; },
/* harmony export */   State: function() { return /* binding */ State; },
/* harmony export */   WatchDirective: function() { return /* reexport safe */ _lib_watch_js__WEBPACK_IMPORTED_MODULE_2__.WatchDirective; },
/* harmony export */   computed: function() { return /* binding */ computed; },
/* harmony export */   html: function() { return /* reexport safe */ _lib_html_tag_js__WEBPACK_IMPORTED_MODULE_3__.html; },
/* harmony export */   signal: function() { return /* binding */ signal; },
/* harmony export */   svg: function() { return /* reexport safe */ _lib_html_tag_js__WEBPACK_IMPORTED_MODULE_3__.svg; },
/* harmony export */   watch: function() { return /* reexport safe */ _lib_watch_js__WEBPACK_IMPORTED_MODULE_2__.watch; },
/* harmony export */   withWatch: function() { return /* reexport safe */ _lib_html_tag_js__WEBPACK_IMPORTED_MODULE_3__.withWatch; }
/* harmony export */ });
/* harmony import */ var signal_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signal-polyfill */ "../../node_modules/signal-polyfill/dist/index.js");
/* harmony import */ var _lib_signal_watcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/signal-watcher.js */ "../../node_modules/@lit-labs/signals/development/lib/signal-watcher.js");
/* harmony import */ var _lib_watch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/watch.js */ "../../node_modules/@lit-labs/signals/development/lib/watch.js");
/* harmony import */ var _lib_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/html-tag.js */ "../../node_modules/@lit-labs/signals/development/lib/html-tag.js");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */





const State = signal_polyfill__WEBPACK_IMPORTED_MODULE_0__.Signal.State;
const Computed = signal_polyfill__WEBPACK_IMPORTED_MODULE_0__.Signal.Computed;
const signal = (value, options) => new signal_polyfill__WEBPACK_IMPORTED_MODULE_0__.Signal.State(value, options);
const computed = (callback, options) => new signal_polyfill__WEBPACK_IMPORTED_MODULE_0__.Signal.Computed(callback, options);

/***/ }),

/***/ "../../node_modules/@lit-labs/signals/development/lib/html-tag.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@lit-labs/signals/development/lib/html-tag.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   html: function() { return /* binding */ html; },
/* harmony export */   svg: function() { return /* binding */ svg; },
/* harmony export */   withWatch: function() { return /* binding */ withWatch; }
/* harmony export */ });
/* harmony import */ var lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/html.js */ "../../node_modules/lit/html.js");
/* harmony import */ var _watch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watch.js */ "../../node_modules/@lit-labs/signals/development/lib/watch.js");
/* harmony import */ var signal_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! signal-polyfill */ "../../node_modules/signal-polyfill/dist/index.js");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */



/**
 * Wraps a lit-html template tag function (`html` or `svg`) to add support for
 * automatically wrapping Signal instances in the `watch()` directive.
 */
const withWatch = coreTag => (strings, ...values) => {
  // TODO (justinfagnani): use an alternative to instanceof when
  // one is available. See https://github.com/preactjs/signals/issues/402
  return coreTag(strings, ...values.map(v => v instanceof signal_polyfill__WEBPACK_IMPORTED_MODULE_2__.Signal.State || v instanceof signal_polyfill__WEBPACK_IMPORTED_MODULE_2__.Signal.Computed ? (0,_watch_js__WEBPACK_IMPORTED_MODULE_1__.watch)(v) : v));
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * Includes signal watching support from `withWatch()`.
 */
const html = withWatch(lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 *
 * Includes signal watching support from `withWatch()`.
 */
const svg = withWatch(lit_html_js__WEBPACK_IMPORTED_MODULE_0__.svg);

/***/ }),

/***/ "../../node_modules/@lit-labs/signals/development/lib/signal-watcher.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@lit-labs/signals/development/lib/signal-watcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignalWatcher: function() { return /* binding */ SignalWatcher; }
/* harmony export */ });
/* harmony import */ var signal_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signal-polyfill */ "../../node_modules/signal-polyfill/dist/index.js");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const signalWatcherBrand = Symbol('SignalWatcherBrand');
// Memory management: We need to ensure that we don't leak memory by creating a
// reference cycle between an element and its watcher, which then it kept alive
// by the signals it watches. To avoid this, we break the cycle by using a
// WeakMap to store the watcher for each element, and a FinalizationRegistry to
// clean up the watcher when the element is garbage collected.
const elementFinalizationRegistry = new FinalizationRegistry(({
  watcher,
  signal
}) => {
  watcher.unwatch(signal);
});
const elementForWatcher = new WeakMap();
/**
 * Adds the ability for a LitElement or other ReactiveElement class to
 * watch for access to signals during the update lifecycle and trigger a new
 * update when signals values change.
 */
function SignalWatcher(Base) {
  // Only apply the mixin once
  if (Base[signalWatcherBrand] === true) {
    console.warn('SignalWatcher should not be applied to the same class more than once.');
    return Base;
  }
  class SignalWatcher extends Base {
    constructor() {
      super(...arguments);
      /**
       * Used to force an uncached read of the __performUpdateSignal when we need
       * to read the current value during an update.
       *
       * If https://github.com/tc39/proposal-signals/issues/151 is resolved, we
       * won't need this.
       */
      this.__forceUpdateSignal = new signal_polyfill__WEBPACK_IMPORTED_MODULE_0__.Signal.State(0);
      /*
       * This field is used within the watcher to determine if the watcher
       * notification was triggered by our performUpdate() override. Because we
       * force a fresh read of the __performUpdateSignal by changing value of the
       * __forceUpdate signal, the watcher will be notified. But we're already
       * performing an update, so we don't want to enqueue another one.
       */
      // @ts-expect-error This field is accessed in a watcher function with a
      // different `this` context, so TypeScript can't see the access.
      this.__forcingUpdate = false;
      /**
       * Whether or not the next update should perform a full render, or if only
       * pending watches should be committed.
       *
       * If requestUpdate() was called only because of watch() directive updates,
       * then we can just commit those directives without a full render. If
       * requestUpdate() was called for any other reason, we need to perform a
       * full render, and don't need to separately commit the watch() directives.
       *
       * This is set to `true` initially, and whenever requestUpdate() is called
       * outside of a watch() directive update. It is set to `false` when
       * update() is called, so that a requestUpdate() is required to do another
       * full render.
       */
      this.__doFullRender = true;
      /**
       * Set of watch directives that have been updated since the last update.
       * These will be committed in update() to ensure that the latest value is
       * rendered and that all updates are batched.
       */
      this.__pendingWatches = new Set();
    }
    __watch() {
      if (this.__watcher !== undefined) {
        return;
      }
      // We create a fresh computed instead of just re-using the existing one
      // because of https://github.com/proposal-signals/signal-polyfill/issues/27
      this.__performUpdateSignal = new signal_polyfill__WEBPACK_IMPORTED_MODULE_0__.Signal.Computed(() => {
        this.__forceUpdateSignal.get();
        super.performUpdate();
      });
      const watcher = this.__watcher = new signal_polyfill__WEBPACK_IMPORTED_MODULE_0__.Signal.subtle.Watcher(function () {
        // All top-level references in this function body must either be `this`
        // (the watcher) or a module global to prevent this closure from keeping
        // the enclosing scopes alive, which would keep the element alive. So
        // The only two references are `this` and `elementForWatcher`.
        const el = elementForWatcher.get(this);
        if (el === undefined) {
          // The element was garbage collected, so we can stop watching.
          return;
        }
        if (el.__forcingUpdate === false) {
          el.requestUpdate();
        }
        this.watch();
      });
      elementForWatcher.set(watcher, this);
      elementFinalizationRegistry.register(this, {
        watcher,
        signal: this.__performUpdateSignal
      });
      watcher.watch(this.__performUpdateSignal);
    }
    __unwatch() {
      if (this.__watcher === undefined) {
        return;
      }
      this.__watcher.unwatch(this.__performUpdateSignal);
      this.__performUpdateSignal = undefined;
      this.__watcher = undefined;
    }
    performUpdate() {
      if (!this.isUpdatePending) {
        // super.performUpdate() performs this check, so we bail early so that
        // we don't read the __performUpdateSignal when it's not going to access
        // any signals. This keeps the last signals read as the sources so that
        // we'll get notified of changes to them.
        return;
      }
      // Always enable watching before an update, even if disconnected, so that
      // we can track signals that are accessed during the update.
      this.__watch();
      // Force an uncached read of __performUpdateSignal
      this.__forcingUpdate = true;
      this.__forceUpdateSignal.set(this.__forceUpdateSignal.get() + 1);
      this.__forcingUpdate = false;
      // Always read from the signal to ensure that it's tracked
      this.__performUpdateSignal.get();
    }
    update(changedProperties) {
      // We need a try block because both super.update() and
      // WatchDirective.commit() can throw, and we need to ensure that post-
      // update cleanup happens.
      try {
        if (this.__doFullRender) {
          // Force future updates to not perform full renders by default.
          this.__doFullRender = false;
          super.update(changedProperties);
        } else {
          // For a partial render, just commit the pending watches.
          // TODO (justinfagnani): Should we access each signal in a separate
          // try block?
          this.__pendingWatches.forEach(d => d.commit());
        }
      } finally {
        // If we didn't call super.update(), we need to set this to false
        this.isUpdatePending = false;
        this.__pendingWatches.clear();
      }
    }
    requestUpdate(name, oldValue, options) {
      this.__doFullRender = true;
      super.requestUpdate(name, oldValue, options);
    }
    connectedCallback() {
      super.connectedCallback();
      // Because we might have missed some signal updates while disconnected,
      // we force a full render on the next update.
      this.requestUpdate();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      // Clean up the watcher earlier than the FinalizationRegistry will, to
      // avoid memory pressure from signals holding references to the element
      // via the watcher.
      //
      // This means that while disconnected, regular reactive property updates
      // will trigger a re-render, but signal updates will not. To ensure that
      // current signal usage is still correctly tracked, we re-enable watching
      // in performUpdate() even while disconnected. From that point on, a
      // disconnected element will be retained by the signals it accesses during
      // the update lifecycle.
      //
      // We use queueMicrotask() to ensure that this cleanup does not happen
      // because of moves in the DOM within the same task, such as removing an
      // element with .remove() and then adding it back later with .append()
      // in the same task. For example, repeat() works this way.
      queueMicrotask(() => {
        if (this.isConnected === false) {
          this.__unwatch();
        }
      });
    }
    /**
     * Enqueues an update caused by a signal change observed by a watch()
     * directive.
     *
     * Note: the method is not part of the public API and is subject to change.
     * In particular, it may be removed if the watch() directive is updated to
     * work with standalone lit-html templates.
     *
     * @internal
     */
    _updateWatchDirective(d) {
      this.__pendingWatches.add(d);
      // requestUpdate() will set __doFullRender to true, so remember the
      // current value and restore it after calling requestUpdate().
      const shouldRender = this.__doFullRender;
      this.requestUpdate();
      this.__doFullRender = shouldRender;
    }
    /**
     * Clears a watch() directive from the set of pending watches.
     *
     * Note: the method is not part of the public API and is subject to change.
     *
     * @internal
     */
    _clearWatchDirective(d) {
      this.__pendingWatches.delete(d);
    }
  }
  return SignalWatcher;
}

/***/ }),

/***/ "../../node_modules/@lit-labs/signals/development/lib/watch.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@lit-labs/signals/development/lib/watch.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WatchDirective: function() { return /* binding */ WatchDirective; },
/* harmony export */   watch: function() { return /* binding */ watch; }
/* harmony export */ });
/* harmony import */ var lit_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/directive.js */ "../../node_modules/lit/directive.js");
/* harmony import */ var lit_async_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/async-directive.js */ "../../node_modules/lit/async-directive.js");
/* harmony import */ var signal_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! signal-polyfill */ "../../node_modules/signal-polyfill/dist/index.js");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */



class WatchDirective extends lit_async_directive_js__WEBPACK_IMPORTED_MODULE_1__.AsyncDirective {
  __watch() {
    if (this.__watcher !== undefined) {
      return;
    }
    this.__computed = new signal_polyfill__WEBPACK_IMPORTED_MODULE_2__.Signal.Computed(() => {
      var _a;
      return (_a = this.__signal) === null || _a === void 0 ? void 0 : _a.get();
    });
    const watcher = this.__watcher = new signal_polyfill__WEBPACK_IMPORTED_MODULE_2__.Signal.subtle.Watcher(() => {
      var _a;
      // TODO: If we're not running inside a SignalWatcher, we can commit to
      // the DOM independently.
      (_a = this.__host) === null || _a === void 0 ? void 0 : _a._updateWatchDirective(this);
      watcher.watch();
    });
    watcher.watch(this.__computed);
  }
  __unwatch() {
    var _a;
    if (this.__watcher !== undefined) {
      this.__watcher.unwatch(this.__computed);
      this.__computed = undefined;
      this.__watcher = undefined;
      (_a = this.__host) === null || _a === void 0 ? void 0 : _a._clearWatchDirective(this);
    }
  }
  commit() {
    this.setValue(signal_polyfill__WEBPACK_IMPORTED_MODULE_2__.Signal.subtle.untrack(() => {
      var _a;
      return (_a = this.__computed) === null || _a === void 0 ? void 0 : _a.get();
    }));
  }
  render(signal) {
    // This would only be called if render is called directly, like in SSR.
    return signal_polyfill__WEBPACK_IMPORTED_MODULE_2__.Signal.subtle.untrack(() => signal.get());
  }
  update(part, [signal]) {
    var _a, _b;
    (_a = this.__host) !== null && _a !== void 0 ? _a : this.__host = (_b = part.options) === null || _b === void 0 ? void 0 : _b.host;
    if (signal !== this.__signal && this.__signal !== undefined) {
      // Unwatch the old signal
      this.__unwatch();
    }
    this.__signal = signal;
    this.__watch();
    // We use untrack() so that the signal access is not tracked by the watcher
    // created by SignalWatcher. This means that an can use both SignalWatcher
    // and watch() and a signal update won't trigger a full element update if
    // it's only passed to watch() and not otherwise accessed by the element.
    return signal_polyfill__WEBPACK_IMPORTED_MODULE_2__.Signal.subtle.untrack(() => this.__computed.get());
  }
  disconnected() {
    this.__unwatch();
  }
  reconnected() {
    this.__watch();
  }
}
/**
 * Renders a signal and subscribes to it, updating the part when the signal
 * changes.
 *
 * watch() can only be used in a reactive element that applies the
 * SignalWatcher mixin.
 */
const watch = (0,lit_directive_js__WEBPACK_IMPORTED_MODULE_0__.directive)(WatchDirective);

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/css-tag.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/css-tag.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: function() { return /* binding */ CSSResult; },
/* harmony export */   adoptStyles: function() { return /* binding */ adoptStyles; },
/* harmony export */   css: function() { return /* binding */ css; },
/* harmony export */   getCompatibleStyle: function() { return /* binding */ getCompatibleStyle; },
/* harmony export */   supportsAdoptingStyleSheets: function() { return /* binding */ supportsAdoptingStyleSheets; },
/* harmony export */   unsafeCSS: function() { return /* binding */ unsafeCSS; }
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
// Allows minifiers to rename references to globalThis
const global = globalThis;
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
class CSSResult {
  constructor(cssText, strings, safeToken) {
    // This property needs to remain unminified.
    this['_$cssResult$'] = true;
    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }
    this.cssText = cssText;
    this._strings = strings;
  }
  // This is a getter so that it's lazy. In practice, this means stylesheets
  // are not created until the first element instance is made.
  get styleSheet() {
    // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
    // constructable.
    let styleSheet = this._styleSheet;
    const strings = this._strings;
    if (supportsAdoptingStyleSheets && styleSheet === undefined) {
      const cacheable = strings !== undefined && strings.length === 1;
      if (cacheable) {
        styleSheet = cssTagCache.get(strings);
      }
      if (styleSheet === undefined) {
        (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
        if (cacheable) {
          cssTagCache.set(strings, styleSheet);
        }
      }
    }
    return styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const textFromCSSResult = value => {
  // This property needs to remain unminified.
  if (value['_$cssResult$'] === true) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ` + `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` + `to ensure page security.`);
  }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = value => new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
const css = (strings, ...values) => {
  const cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic the native feature](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/adoptedStyleSheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map(s => s instanceof CSSStyleSheet ? s : s.styleSheet);
  } else {
    for (const s of styles) {
      const style = document.createElement('style');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nonce = global['litNonce'];
      if (nonce !== undefined) {
        style.setAttribute('nonce', nonce);
      }
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    }
  }
};
const cssResultFromStyleSheet = sheet => {
  let cssText = '';
  for (const rule of sheet.cssRules) {
    cssText += rule.cssText;
  }
  return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === undefined ? s => s : s => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/base.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/base.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   desc: function() { return /* binding */ desc; }
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Wraps up a few best practices when returning a property descriptor from a
 * decorator.
 *
 * Marks the defined property as configurable, and enumerable, and handles
 * the case where we have a busted Reflect.decorate zombiefill (e.g. in Angular
 * apps).
 *
 * @internal
 */
const desc = (obj, name, descriptor) => {
  // For backwards compatibility, we keep them configurable and enumerable.
  descriptor.configurable = true;
  descriptor.enumerable = true;
  if (
  // We check for Reflect.decorate each time, in case the zombiefill
  // is applied via lazy loading some Angular code.
  Reflect.decorate && typeof name !== 'object') {
    // If we're called as a legacy decorator, and Reflect.decorate is present
    // then we have no guarantees that the returned descriptor will be
    // defined on the class, so we must apply it directly ourselves.
    Object.defineProperty(obj, name, descriptor);
  }
  return descriptor;
};

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/custom-element.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: function() { return /* binding */ customElement; }
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
const customElement = tagName => (classOrTarget, context) => {
  if (context !== undefined) {
    context.addInitializer(() => {
      customElements.define(tagName, classOrTarget);
    });
  } else {
    customElements.define(tagName, classOrTarget);
  }
};

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/event-options.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventOptions: function() { return /* binding */ eventOptions; }
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */
function eventOptions(options) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (protoOrValue, nameOrContext) => {
    const method = typeof protoOrValue === 'function' ? protoOrValue : protoOrValue[nameOrContext];
    Object.assign(method, options);
  };
}

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/property.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   property: function() { return /* binding */ property; },
/* harmony export */   standardProperty: function() { return /* binding */ standardProperty; }
/* harmony export */ });
/* harmony import */ var _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reactive-element.js */ "../../node_modules/@lit/reactive-element/development/reactive-element.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  globalThis.litIssuedWarnings ??= new Set();
  /**
   * Issue a warning if we haven't already, based either on `code` or `warning`.
   * Warnings are disabled automatically only by `warning`; disabling via `code`
   * can be done by users.
   */
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!globalThis.litIssuedWarnings.has(warning) && !globalThis.litIssuedWarnings.has(code)) {
      console.warn(warning);
      globalThis.litIssuedWarnings.add(warning);
    }
  };
}
const legacyProperty = (options, proto, name) => {
  const hasOwnProperty = proto.hasOwnProperty(name);
  proto.constructor.createProperty(name, options);
  // For accessors (which have a descriptor on the prototype) we need to
  // return a descriptor, otherwise TypeScript overwrites the descriptor we
  // define in createProperty() with the original descriptor. We don't do this
  // for fields, which don't have a descriptor, because this could overwrite
  // descriptor defined by other decorators.
  return hasOwnProperty ? Object.getOwnPropertyDescriptor(proto, name) : undefined;
};
// This is duplicated from a similar variable in reactive-element.ts, but
// actually makes sense to have this default defined with the decorator, so
// that different decorators could have different defaults.
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__.defaultConverter,
  reflect: false,
  hasChanged: _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__.notEqual
};
/**
 * Wraps a class accessor or setter so that `requestUpdate()` is called with the
 * property name and old value when the accessor is set.
 */
const standardProperty = (options = defaultPropertyDeclaration, target, context) => {
  const {
    kind,
    metadata
  } = context;
  if (DEV_MODE && metadata == null) {
    issueWarning('missing-class-metadata', `The class ${target} is missing decorator metadata. This ` + `could mean that you're using a compiler that supports decorators ` + `but doesn't support decorator metadata, such as TypeScript 5.1. ` + `Please update your compiler.`);
  }
  // Store the property options
  let properties = globalThis.litPropertyMetadata.get(metadata);
  if (properties === undefined) {
    globalThis.litPropertyMetadata.set(metadata, properties = new Map());
  }
  if (kind === 'setter') {
    options = Object.create(options);
    options.wrapped = true;
  }
  properties.set(context.name, options);
  if (kind === 'accessor') {
    // Standard decorators cannot dynamically modify the class, so we can't
    // replace a field with accessors. The user must use the new `accessor`
    // keyword instead.
    const {
      name
    } = context;
    return {
      set(v) {
        const oldValue = target.get.call(this);
        target.set.call(this, v);
        this.requestUpdate(name, oldValue, options);
      },
      init(v) {
        if (v !== undefined) {
          this._$changeProperty(name, undefined, options, v);
        }
        return v;
      }
    };
  } else if (kind === 'setter') {
    const {
      name
    } = context;
    return function (value) {
      const oldValue = this[name];
      target.call(this, value);
      this.requestUpdate(name, oldValue, options);
    };
  }
  throw new Error(`Unsupported decorator location: ${kind}`);
};
/**
 * A class field or accessor decorator which creates a reactive property that
 * reflects a corresponding attribute value. When a decorated property is set
 * the element will update and render. A {@linkcode PropertyDeclaration} may
 * optionally be supplied to configure property features.
 *
 * This decorator should only be used for public fields. As public fields,
 * properties should be considered as primarily settable by element users,
 * either via attribute or the property itself.
 *
 * Generally, properties that are changed by the element should be private or
 * protected fields and should use the {@linkcode state} decorator.
 *
 * However, sometimes element code does need to set a public property. This
 * should typically only be done in response to user interaction, and an event
 * should be fired informing the user; for example, a checkbox sets its
 * `checked` property when clicked and fires a `changed` event. Mutating public
 * properties should typically not be done for non-primitive (object or array)
 * properties. In other cases when an element needs to manage state, a private
 * property decorated via the {@linkcode state} decorator should be used. When
 * needed, state properties can be initialized via public properties to
 * facilitate complex interactions.
 *
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
  return (protoOrTarget, nameOrContext
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => {
    return typeof nameOrContext === 'object' ? standardProperty(options, protoOrTarget, nameOrContext) : legacyProperty(options, protoOrTarget, nameOrContext);
  };
}

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/query-all.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAll: function() { return /* binding */ queryAll; }
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "../../node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Shared fragment used to generate empty NodeLists when a render root is
// undefined
let fragment;
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs: NodeListOf<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAll(selector) {
  return (obj, name) => {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      get() {
        const container = this.renderRoot ?? (fragment ??= document.createDocumentFragment());
        return container.querySelectorAll(selector);
      }
    });
  };
}

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
/*!**************************************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedElements: function() { return /* binding */ queryAssignedElements; }
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "../../node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedElements` of the given `slot`. Provides a declarative
 * way to use
 * [`HTMLSlotElement.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
 *
 * Can be passed an optional {@linkcode QueryAssignedElementsOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedElements({ slot: 'list' })
 *   listItems!: Array<HTMLElement>;
 *   @queryAssignedElements()
 *   unnamedSlotEls!: Array<HTMLElement>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *       <slot></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note, the type of this property should be annotated as `Array<HTMLElement>`.
 *
 * @category Decorator
 */
function queryAssignedElements(options) {
  return (obj, name) => {
    const {
      slot,
      selector
    } = options ?? {};
    const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      get() {
        const slotEl = this.renderRoot?.querySelector(slotSelector);
        const elements = slotEl?.assignedElements(options) ?? [];
        return selector === undefined ? elements : elements.filter(node => node.matches(selector));
      }
    });
  };
}

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
/*!***********************************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedNodes: function() { return /* binding */ queryAssignedNodes; }
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "../../node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given `slot`.
 *
 * Can be passed an optional {@linkcode QueryAssignedNodesOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes({slot: 'list', flatten: true})
 *   listItems!: Array<Node>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note the type of this property should be annotated as `Array<Node>`. Use the
 * queryAssignedElements decorator to list only elements, and optionally filter
 * the element list using a CSS selector.
 *
 * @category Decorator
 */
function queryAssignedNodes(options) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj, name) => {
    const {
      slot
    } = options ?? {};
    const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      get() {
        const slotEl = this.renderRoot?.querySelector(slotSelector);
        return slotEl?.assignedNodes(options) ?? [];
      }
    });
  };
}

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/query-async.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAsync: function() { return /* binding */ queryAsync; }
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "../../node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first: Promise<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
  return (obj, name) => {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      async get() {
        await this.updateComplete;
        return this.renderRoot?.querySelector(selector) ?? null;
      }
    });
  };
}

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/query.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/query.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: function() { return /* binding */ query; }
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "../../node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  globalThis.litIssuedWarnings ??= new Set();
  /**
   * Issue a warning if we haven't already, based either on `code` or `warning`.
   * Warnings are disabled automatically only by `warning`; disabling via `code`
   * can be done by users.
   */
  issueWarning = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : '';
    if (!globalThis.litIssuedWarnings.has(warning) && !globalThis.litIssuedWarnings.has(code)) {
      console.warn(warning);
      globalThis.litIssuedWarnings.add(warning);
    }
  };
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 *     once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first: HTMLDivElement;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
  return (protoOrTarget, nameOrContext, descriptor) => {
    const doQuery = el => {
      const result = el.renderRoot?.querySelector(selector) ?? null;
      if (DEV_MODE && result === null && cache && !el.hasUpdated) {
        const name = typeof nameOrContext === 'object' ? nameOrContext.name : nameOrContext;
        issueWarning('', `@query'd field ${JSON.stringify(String(name))} with the 'cache' ` + `flag set for selector '${selector}' has been accessed before ` + `the first update and returned null. This is expected if the ` + `renderRoot tree has not been provided beforehand (e.g. via ` + `Declarative Shadow DOM). Therefore the value hasn't been cached.`);
      }
      // TODO: if we want to allow users to assert that the query will never
      // return null, we need a new option and to throw here if the result
      // is null.
      return result;
    };
    if (cache) {
      // Accessors to wrap from either:
      //   1. The decorator target, in the case of standard decorators
      //   2. The property descriptor, in the case of experimental decorators
      //      on auto-accessors.
      //   3. Functions that access our own cache-key property on the instance,
      //      in the case of experimental decorators on fields.
      const {
        get,
        set
      } = typeof nameOrContext === 'object' ? protoOrTarget : descriptor ?? (() => {
        const key = DEV_MODE ? Symbol(`${String(nameOrContext)} (@query() cache)`) : Symbol();
        return {
          get() {
            return this[key];
          },
          set(v) {
            this[key] = v;
          }
        };
      })();
      return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(protoOrTarget, nameOrContext, {
        get() {
          let result = get.call(this);
          if (result === undefined) {
            result = doQuery(this);
            if (result !== null || this.hasUpdated) {
              set.call(this, result);
            }
          }
          return result;
        }
      });
    } else {
      // This object works as the return type for both standard and
      // experimental decorators.
      return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(protoOrTarget, nameOrContext, {
        get() {
          return doQuery(this);
        }
      });
    }
  };
}

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/decorators/state.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/decorators/state.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: function() { return /* binding */ state; }
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "../../node_modules/@lit/reactive-element/development/decorators/property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * Declares a private or protected reactive property that still triggers
 * updates to the element when it changes. It does not reflect from the
 * corresponding attribute.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function state(options) {
  return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({
    ...options,
    // Add both `state` and `attribute` because we found a third party
    // controller that is keying off of PropertyOptions.state to determine
    // whether a field is a private internal property or not.
    state: true,
    attribute: false
  });
}

/***/ }),

/***/ "../../node_modules/@lit/reactive-element/development/reactive-element.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult; },
/* harmony export */   ReactiveElement: function() { return /* binding */ ReactiveElement; },
/* harmony export */   adoptStyles: function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles; },
/* harmony export */   css: function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css; },
/* harmony export */   defaultConverter: function() { return /* binding */ defaultConverter; },
/* harmony export */   getCompatibleStyle: function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle; },
/* harmony export */   notEqual: function() { return /* binding */ notEqual; },
/* harmony export */   supportsAdoptingStyleSheets: function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets; },
/* harmony export */   unsafeCSS: function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS; }
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "../../node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */

// In the Node build, this import will be injected by Rollup:
// import {HTMLElement, customElements} from '@lit-labs/ssr-dom-shim';

// TODO (justinfagnani): Add `hasOwn` here when we ship ES2022
const {
  is,
  defineProperty,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  getPrototypeOf
} = Object;
const NODE_MODE = false;
// Lets a minifier replace globalThis references with a minified name
const global = globalThis;
if (NODE_MODE) {
  global.customElements ??= customElements;
}
const DEV_MODE = true;
let issueWarning;
const trustedTypes = global.trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : '';
const polyfillSupport = DEV_MODE ? global.reactiveElementPolyfillSupportDevMode : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  global.litIssuedWarnings ??= new Set();
  /**
   * Issue a warning if we haven't already, based either on `code` or `warning`.
   * Warnings are disabled automatically only by `warning`; disabling via `code`
   * can be done by users.
   */
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global.litIssuedWarnings.add(warning);
    }
  };
  queueMicrotask(() => {
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    // Issue polyfill support warning.
    if (global.ShadyDOM?.inUse && polyfillSupport === undefined) {
      issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` + `the \`polyfill-support\` module has not been loaded.`);
    }
  });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE ? event => {
  const shouldEmit = global.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global.dispatchEvent(new CustomEvent('lit-debug', {
    detail: event
  }));
} : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        value = value ? emptyStringForBooleanAttribute : null;
        break;
      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        value = value == null ? value : JSON.stringify(value);
        break;
    }
    return value;
  },
  fromAttribute(value, type) {
    let fromValue = value;
    switch (type) {
      case Boolean:
        fromValue = value !== null;
        break;
      case Number:
        fromValue = value === null ? null : Number(value);
        break;
      case Object:
      case Array:
        // Do *not* generate exception when invalid JSON is set as elements
        // don't normally complain on being mis-configured.
        // TODO(sorvell): Do generate exception in *dev mode*.
        try {
          // Assert to adhere to Bazel's "must type assert JSON parse" rule.
          fromValue = JSON.parse(value);
        } catch (e) {
          fromValue = null;
        }
        break;
    }
    return fromValue;
  }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => !is(value, old);
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  useDefault: false,
  hasChanged: notEqual
};
// Ensure metadata is enabled. TypeScript does not polyfill
// Symbol.metadata, so we must ensure that it exists.
Symbol.metadata ??= Symbol('metadata');
// Map from a class's metadata object to property options
// Note that we must use nullish-coalescing assignment so that we only use one
// map even if we load multiple version of this module.
global.litPropertyMetadata ??= new WeakMap();
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclasses to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement
// In the Node build, this `extends` clause will be substituted with
// `(globalThis.HTMLElement ?? HTMLElement)`.
//
// This way, we will first prefer any global `HTMLElement` polyfill that the
// user has assigned, and then fall back to the `HTMLElement` shim which has
// been imported (see note at the top of this file about how this import is
// generated by Rollup). Note that the `HTMLElement` variable has been
// shadowed by this import, so it no longer refers to the global.
extends HTMLElement {
  /**
   * Adds an initializer function to the class that is called during instance
   * construction.
   *
   * This is useful for code that runs against a `ReactiveElement`
   * subclass, such as a decorator, that needs to do work for each
   * instance, such as setting up a `ReactiveController`.
   *
   * ```ts
   * const myDecorator = (target: typeof ReactiveElement, key: string) => {
   *   target.addInitializer((instance: ReactiveElement) => {
   *     // This is run during construction of the element
   *     new MyController(instance);
   *   });
   * }
   * ```
   *
   * Decorating a field will then cause each instance to run an initializer
   * that adds a controller:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   @myDecorator foo;
   * }
   * ```
   *
   * Initializers are stored per-constructor. Adding an initializer to a
   * subclass does not add it to a superclass. Since initializers are run in
   * constructors, initializers will run in order of the class hierarchy,
   * starting with superclasses and progressing to the instance's class.
   *
   * @nocollapse
   */
  static addInitializer(initializer) {
    this.__prepare();
    (this._initializers ??= []).push(initializer);
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   * @category attributes
   */
  static get observedAttributes() {
    // Ensure we've created all properties
    this.finalize();
    // this.__attributeToPropertyMap is only undefined after finalize() in
    // ReactiveElement itself. ReactiveElement.observedAttributes is only
    // accessed with ReactiveElement as the receiver when a subclass or mixin
    // calls super.observedAttributes
    return this.__attributeToPropertyMap && [...this.__attributeToPropertyMap.keys()];
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a {@linkcode PropertyDeclaration} for the property with the
   * given options. The property setter calls the property's `hasChanged`
   * property option or uses a strict identity check to determine whether or not
   * to request an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * ```ts
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static createProperty(name, options = defaultPropertyDeclaration) {
    // If this is a state property, force the attribute to false.
    if (options.state) {
      options.attribute = false;
    }
    this.__prepare();
    // Whether this property is wrapping accessors.
    // Helps control the initial value change and reflection logic.
    if (this.prototype.hasOwnProperty(name)) {
      options = Object.create(options);
      options.wrapped = true;
    }
    this.elementProperties.set(name, options);
    if (!options.noAccessor) {
      const key = DEV_MODE ?
      // Use Symbol.for in dev mode to make it easier to maintain state
      // when doing HMR.
      Symbol.for(`${String(name)} (@property() cache)`) : Symbol();
      const descriptor = this.getPropertyDescriptor(name, key, options);
      if (descriptor !== undefined) {
        defineProperty(this.prototype, name, descriptor);
      }
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   * ```ts
   * class MyElement extends LitElement {
   *   static getPropertyDescriptor(name, key, options) {
   *     const defaultDescriptor =
   *         super.getPropertyDescriptor(name, key, options);
   *     const setter = defaultDescriptor.set;
   *     return {
   *       get: defaultDescriptor.get,
   *       set(value) {
   *         setter.call(this, value);
   *         // custom action.
   *       },
   *       configurable: true,
   *       enumerable: true
   *     }
   *   }
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static getPropertyDescriptor(name, key, options) {
    const {
      get,
      set
    } = getOwnPropertyDescriptor(this.prototype, name) ?? {
      get() {
        return this[key];
      },
      set(v) {
        this[key] = v;
      }
    };
    if (DEV_MODE && get == null) {
      if ('value' in (getOwnPropertyDescriptor(this.prototype, name) ?? {})) {
        throw new Error(`Field ${JSON.stringify(String(name))} on ` + `${this.name} was declared as a reactive property ` + `but it's actually declared as a value on the prototype. ` + `Usually this is due to using @property or @state on a method.`);
      }
      issueWarning('reactive-property-without-getter', `Field ${JSON.stringify(String(name))} on ` + `${this.name} was declared as a reactive property ` + `but it does not have a getter. This will be an error in a ` + `future version of Lit.`);
    }
    return {
      get,
      set(value) {
        const oldValue = get?.call(this);
        set?.call(this, value);
        this.requestUpdate(name, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a `PropertyDeclaration` via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override
   * {@linkcode createProperty}.
   *
   * @nocollapse
   * @final
   * @category properties
   */
  static getPropertyOptions(name) {
    return this.elementProperties.get(name) ?? defaultPropertyDeclaration;
  }
  /**
   * Initializes static own properties of the class used in bookkeeping
   * for element properties, initializers, etc.
   *
   * Can be called multiple times by code that needs to ensure these
   * properties exist before using them.
   *
   * This method ensures the superclass is finalized so that inherited
   * property metadata can be copied down.
   * @nocollapse
   */
  static __prepare() {
    if (this.hasOwnProperty(JSCompiler_renameProperty('elementProperties', this))) {
      // Already prepared
      return;
    }
    // Finalize any superclasses
    const superCtor = getPrototypeOf(this);
    superCtor.finalize();
    // Create own set of initializers for this class if any exist on the
    // superclass and copy them down. Note, for a small perf boost, avoid
    // creating initializers unless needed.
    if (superCtor._initializers !== undefined) {
      this._initializers = [...superCtor._initializers];
    }
    // Initialize elementProperties from the superclass
    this.elementProperties = new Map(superCtor.elementProperties);
  }
  /**
   * Finishes setting up the class so that it's ready to be registered
   * as a custom element and instantiated.
   *
   * This method is called by the ReactiveElement.observedAttributes getter.
   * If you override the observedAttributes getter, you must either call
   * super.observedAttributes to trigger finalization, or call finalize()
   * yourself.
   *
   * @nocollapse
   */
  static finalize() {
    if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this))) {
      return;
    }
    this.finalized = true;
    this.__prepare();
    // Create properties from the static properties block:
    if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
      const props = this.properties;
      const propKeys = [...getOwnPropertyNames(props), ...getOwnPropertySymbols(props)];
      for (const p of propKeys) {
        this.createProperty(p, props[p]);
      }
    }
    // Create properties from standard decorator metadata:
    const metadata = this[Symbol.metadata];
    if (metadata !== null) {
      const properties = litPropertyMetadata.get(metadata);
      if (properties !== undefined) {
        for (const [p, options] of properties) {
          this.elementProperties.set(p, options);
        }
      }
    }
    // Create the attribute-to-property map
    this.__attributeToPropertyMap = new Map();
    for (const [p, options] of this.elementProperties) {
      const attr = this.__attributeNameForProperty(p, options);
      if (attr !== undefined) {
        this.__attributeToPropertyMap.set(attr, p);
      }
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    if (DEV_MODE) {
      if (this.hasOwnProperty('createProperty')) {
        issueWarning('no-override-create-property', 'Overriding ReactiveElement.createProperty() is deprecated. ' + 'The override will not be called with standard decorators');
      }
      if (this.hasOwnProperty('getPropertyDescriptor')) {
        issueWarning('no-override-get-property-descriptor', 'Overriding ReactiveElement.getPropertyDescriptor() is deprecated. ' + 'The override will not be called with standard decorators');
      }
    }
  }
  /**
   * Takes the styles the user supplied via the `static styles` property and
   * returns the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * Styles are deduplicated preserving the _last_ instance in the list. This
   * is a performance optimization to avoid duplicated styles that can occur
   * especially when composing via subclassing. The last item is kept to try
   * to preserve the cascade order with the assumption that it's most important
   * that last added styles override previous styles.
   *
   * @nocollapse
   * @category styles
   */
  static finalizeStyles(styles) {
    const elementStyles = [];
    if (Array.isArray(styles)) {
      // Dedupe the flattened array in reverse order to preserve the last items.
      // Casting to Array<unknown> works around TS error that
      // appears to come from trying to flatten a type CSSResultArray.
      const set = new Set(styles.flat(Infinity).reverse());
      // Then preserve original order by adding the set items in reverse order.
      for (const s of set) {
        elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
      }
    } else if (styles !== undefined) {
      elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
    }
    return elementStyles;
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static __attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
  }
  constructor() {
    super();
    this.__instanceProperties = undefined;
    /**
     * True if there is a pending update as a result of calling `requestUpdate()`.
     * Should only be read.
     * @category updates
     */
    this.isUpdatePending = false;
    /**
     * Is set to `true` after the first update. The element code cannot assume
     * that `renderRoot` exists before the element `hasUpdated`.
     * @category updates
     */
    this.hasUpdated = false;
    /**
     * Name of currently reflecting property
     */
    this.__reflectingProperty = null;
    this.__initialize();
  }
  /**
   * Internal only override point for customizing work done when elements
   * are constructed.
   */
  __initialize() {
    this.__updatePromise = new Promise(res => this.enableUpdating = res);
    this._$changedProperties = new Map();
    // This enqueues a microtask that must run before the first update, so it
    // must be called before requestUpdate()
    this.__saveInstanceProperties();
    // ensures first update will be caught by an early access of
    // `updateComplete`
    this.requestUpdate();
    this.constructor._initializers?.forEach(i => i(this));
  }
  /**
   * Registers a `ReactiveController` to participate in the element's reactive
   * update cycle. The element automatically calls into any registered
   * controllers during its lifecycle callbacks.
   *
   * If the element is connected when `addController()` is called, the
   * controller's `hostConnected()` callback will be immediately called.
   * @category controllers
   */
  addController(controller) {
    (this.__controllers ??= new Set()).add(controller);
    // If a controller is added after the element has been connected,
    // call hostConnected. Note, re-using existence of `renderRoot` here
    // (which is set in connectedCallback) to avoid the need to track a
    // first connected state.
    if (this.renderRoot !== undefined && this.isConnected) {
      controller.hostConnected?.();
    }
  }
  /**
   * Removes a `ReactiveController` from the element.
   * @category controllers
   */
  removeController(controller) {
    this.__controllers?.delete(controller);
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs.
   */
  __saveInstanceProperties() {
    const instanceProperties = new Map();
    const elementProperties = this.constructor.elementProperties;
    for (const p of elementProperties.keys()) {
      if (this.hasOwnProperty(p)) {
        instanceProperties.set(p, this[p]);
        delete this[p];
      }
    }
    if (instanceProperties.size > 0) {
      this.__instanceProperties = instanceProperties;
    }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   *
   * @return Returns a node into which to render.
   * @category rendering
   */
  createRenderRoot() {
    const renderRoot = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  /**
   * On first connection, creates the element's renderRoot, sets up
   * element styling, and enables updating.
   * @category lifecycle
   */
  connectedCallback() {
    // Create renderRoot before controllers `hostConnected`
    this.renderRoot ??= this.createRenderRoot();
    this.enableUpdating(true);
    this.__controllers?.forEach(c => c.hostConnected?.());
  }
  /**
   * Note, this method should be considered final and not overridden. It is
   * overridden on the element instance with a function that triggers the first
   * update.
   * @category updates
   */
  enableUpdating(_requestedUpdate) {}
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   * @category lifecycle
   */
  disconnectedCallback() {
    this.__controllers?.forEach(c => c.hostDisconnected?.());
  }
  /**
   * Synchronizes property values when attributes change.
   *
   * Specifically, when an attribute is set, the corresponding property is set.
   * You should rarely need to implement this callback. If this method is
   * overridden, `super.attributeChangedCallback(name, _old, value)` must be
   * called.
   *
   * See [responding to attribute changes](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes)
   * on MDN for more information about the `attributeChangedCallback`.
   * @category attributes
   */
  attributeChangedCallback(name, _old, value) {
    this._$attributeToProperty(name, value);
  }
  __propertyToAttribute(name, value) {
    const elemProperties = this.constructor.elementProperties;
    const options = elemProperties.get(name);
    const attr = this.constructor.__attributeNameForProperty(name, options);
    if (attr !== undefined && options.reflect === true) {
      const converter = options.converter?.toAttribute !== undefined ? options.converter : defaultConverter;
      const attrValue = converter.toAttribute(value, options.type);
      if (DEV_MODE && this.constructor.enabledWarnings.includes('migration') && attrValue === undefined) {
        issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` + `undefined on element ${this.localName}. The attribute will be ` + `removed, but in the previous version of \`ReactiveElement\`, ` + `the attribute would not have changed.`);
      }
      // Track if the property is being reflected to avoid
      // setting the property again via `attributeChangedCallback`. Note:
      // 1. this takes advantage of the fact that the callback is synchronous.
      // 2. will behave incorrectly if multiple attributes are in the reaction
      // stack at time of calling. However, since we process attributes
      // in `update` this should not be possible (or an extreme corner case
      // that we'd like to discover).
      // mark state reflecting
      this.__reflectingProperty = name;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      // mark state not reflecting
      this.__reflectingProperty = null;
    }
  }
  /** @internal */
  _$attributeToProperty(name, value) {
    const ctor = this.constructor;
    // Note, hint this as an `AttributeMap` so closure clearly understands
    // the type; it has issues with tracking types through statics
    const propName = ctor.__attributeToPropertyMap.get(name);
    // Use tracking info to avoid reflecting a property value to an attribute
    // if it was just set because the attribute changed.
    if (propName !== undefined && this.__reflectingProperty !== propName) {
      const options = ctor.getPropertyOptions(propName);
      const converter = typeof options.converter === 'function' ? {
        fromAttribute: options.converter
      } : options.converter?.fromAttribute !== undefined ? options.converter : defaultConverter;
      // mark state reflecting
      this.__reflectingProperty = propName;
      this[propName] = converter.fromAttribute(value, options.type) ?? this.__defaultValues?.get(propName) ??
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      null;
      // mark state not reflecting
      this.__reflectingProperty = null;
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should be called
   * when an element should update based on some state not triggered by setting
   * a reactive property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored.
   *
   * @param name name of requesting property
   * @param oldValue old value of requesting property
   * @param options property options to use instead of the previously
   *     configured options
   * @category updates
   */
  requestUpdate(name, oldValue, options) {
    // If we have a property key, perform property update steps.
    if (name !== undefined) {
      if (DEV_MODE && name instanceof Event) {
        issueWarning(``, `The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()`);
      }
      const ctor = this.constructor;
      const newValue = this[name];
      options ??= ctor.getPropertyOptions(name);
      const changed = (options.hasChanged ?? notEqual)(newValue, oldValue) ||
      // When there is no change, check a corner case that can occur when
      // 1. there's a initial value which was not reflected
      // 2. the property is subsequently set to this value.
      // For example, `prop: {useDefault: true, reflect: true}`
      // and el.prop = 'foo'. This should be considered a change if the
      // attribute is not set because we will now reflect the property to the attribute.
      options.useDefault && options.reflect && newValue === this.__defaultValues?.get(name) && !this.hasAttribute(ctor.__attributeNameForProperty(name, options));
      if (changed) {
        this._$changeProperty(name, oldValue, options);
      } else {
        // Abort the request if the property should not be considered changed.
        return;
      }
    }
    if (this.isUpdatePending === false) {
      this.__updatePromise = this.__enqueueUpdate();
    }
  }
  /**
   * @internal
   */
  _$changeProperty(name, oldValue, {
    useDefault,
    reflect,
    wrapped
  }, initializeValue) {
    // Record default value when useDefault is used. This allows us to
    // restore this value when the attribute is removed.
    if (useDefault && !(this.__defaultValues ??= new Map()).has(name)) {
      this.__defaultValues.set(name, initializeValue ?? oldValue ?? this[name]);
      // if this is not wrapping an accessor, it must be an initial setting
      // and in this case we do not want to record the change or reflect.
      if (wrapped !== true || initializeValue !== undefined) {
        return;
      }
    }
    // TODO (justinfagnani): Create a benchmark of Map.has() + Map.set(
    // vs just Map.set()
    if (!this._$changedProperties.has(name)) {
      // On the initial change, the old value should be `undefined`, except
      // with `useDefault`
      if (!this.hasUpdated && !useDefault) {
        oldValue = undefined;
      }
      this._$changedProperties.set(name, oldValue);
    }
    // Add to reflecting properties set.
    // Note, it's important that every change has a chance to add the
    // property to `__reflectingProperties`. This ensures setting
    // attribute + property reflects correctly.
    if (reflect === true && this.__reflectingProperty !== name) {
      (this.__reflectingProperties ??= new Set()).add(name);
    }
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async __enqueueUpdate() {
    this.isUpdatePending = true;
    try {
      // Ensure any previous update has resolved before updating.
      // This `await` also ensures that property changes are batched.
      await this.__updatePromise;
    } catch (e) {
      // Refire any previous errors async so they do not disrupt the update
      // cycle. Errors are refired so developers have a chance to observe
      // them, and this can be done by implementing
      // `window.onunhandledrejection`.
      Promise.reject(e);
    }
    const result = this.scheduleUpdate();
    // If `scheduleUpdate` returns a Promise, we await it. This is done to
    // enable coordinating updates with a scheduler. Note, the result is
    // checked to avoid delaying an additional microtask unless we need to.
    if (result != null) {
      await result;
    }
    return !this.isUpdatePending;
  }
  /**
   * Schedules an element update. You can override this method to change the
   * timing of updates by returning a Promise. The update will await the
   * returned Promise, and you should resolve the Promise to allow the update
   * to proceed. If this method is overridden, `super.scheduleUpdate()`
   * must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```ts
   * override protected async scheduleUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.scheduleUpdate();
   * }
   * ```
   * @category updates
   */
  scheduleUpdate() {
    const result = this.performUpdate();
    if (DEV_MODE && this.constructor.enabledWarnings.includes('async-perform-update') && typeof result?.then === 'function') {
      issueWarning('async-perform-update', `Element ${this.localName} returned a Promise from performUpdate(). ` + `This behavior is deprecated and will be removed in a future ` + `version of ReactiveElement.`);
    }
    return result;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * Call `performUpdate()` to immediately process a pending update. This should
   * generally not be needed, but it can be done in rare cases when you need to
   * update synchronously.
   *
   * @category updates
   */
  performUpdate() {
    // Abort any update if one is not pending when this is called.
    // This can happen if `performUpdate` is called early to "flush"
    // the update.
    if (!this.isUpdatePending) {
      return;
    }
    debugLogEvent?.({
      kind: 'update'
    });
    if (!this.hasUpdated) {
      // Create renderRoot before first update. This occurs in `connectedCallback`
      // but is done here to support out of tree calls to `enableUpdating`/`performUpdate`.
      this.renderRoot ??= this.createRenderRoot();
      if (DEV_MODE) {
        // Produce warning if any reactive properties on the prototype are
        // shadowed by class fields. Instance fields set before upgrade are
        // deleted by this point, so any own property is caused by class field
        // initialization in the constructor.
        const ctor = this.constructor;
        const shadowedProperties = [...ctor.elementProperties.keys()].filter(p => this.hasOwnProperty(p) && p in getPrototypeOf(this));
        if (shadowedProperties.length) {
          throw new Error(`The following properties on element ${this.localName} will not ` + `trigger updates as expected because they are set using class ` + `fields: ${shadowedProperties.join(', ')}. ` + `Native class fields and some compiled output will overwrite ` + `accessors used for detecting changes. See ` + `https://lit.dev/msg/class-field-shadowing ` + `for more information.`);
        }
      }
      // Mixin instance properties once, if they exist.
      if (this.__instanceProperties) {
        // TODO (justinfagnani): should we use the stored value? Could a new value
        // have been set since we stored the own property value?
        for (const [p, value] of this.__instanceProperties) {
          this[p] = value;
        }
        this.__instanceProperties = undefined;
      }
      // Trigger initial value reflection and populate the initial
      // `changedProperties` map, but only for the case of properties created
      // via `createProperty` on accessors, which will not have already
      // populated the `changedProperties` map since they are not set.
      // We can't know if these accessors had initializers, so we just set
      // them anyway - a difference from experimental decorators on fields and
      // standard decorators on auto-accessors.
      // For context see:
      // https://github.com/lit/lit/pull/4183#issuecomment-1711959635
      const elementProperties = this.constructor.elementProperties;
      if (elementProperties.size > 0) {
        for (const [p, options] of elementProperties) {
          const {
            wrapped
          } = options;
          const value = this[p];
          if (wrapped === true && !this._$changedProperties.has(p) && value !== undefined) {
            this._$changeProperty(p, undefined, options, value);
          }
        }
      }
    }
    let shouldUpdate = false;
    const changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.willUpdate(changedProperties);
        this.__controllers?.forEach(c => c.hostUpdate?.());
        this.update(changedProperties);
      } else {
        this.__markUpdated();
      }
    } catch (e) {
      // Prevent `firstUpdated` and `updated` from running when there's an
      // update exception.
      shouldUpdate = false;
      // Ensure element can accept additional updates after an exception.
      this.__markUpdated();
      throw e;
    }
    // The update is no longer considered pending and further updates are now allowed.
    if (shouldUpdate) {
      this._$didUpdate(changedProperties);
    }
  }
  /**
   * Invoked before `update()` to compute values needed during the update.
   *
   * Implement `willUpdate` to compute property values that depend on other
   * properties and are used in the rest of the update process.
   *
   * ```ts
   * willUpdate(changedProperties) {
   *   // only need to check changed properties for an expensive computation.
   *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
   *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
   *   }
   * }
   *
   * render() {
   *   return html`SHA: ${this.sha}`;
   * }
   * ```
   *
   * @category updates
   */
  willUpdate(_changedProperties) {}
  // Note, this is an override point for polyfill-support.
  // @internal
  _$didUpdate(changedProperties) {
    this.__controllers?.forEach(c => c.hostUpdated?.());
    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }
    this.updated(changedProperties);
    if (DEV_MODE && this.isUpdatePending && this.constructor.enabledWarnings.includes('change-in-update')) {
      issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` + `(generally because a property was set) ` + `after an update completed, causing a new update to be scheduled. ` + `This is inefficient and should be avoided unless the next update ` + `can only be scheduled as a side effect of the previous update.`);
    }
  }
  __markUpdated() {
    this._$changedProperties = new Map();
    this.isUpdatePending = false;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super.getUpdateComplete()`, then any subsequent state.
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  get updateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   override async getUpdateComplete() {
   *     const result = await super.getUpdateComplete();
   *     await this._myChild.updateComplete;
   *     return result;
   *   }
   * }
   * ```
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  getUpdateComplete() {
    return this.__updatePromise;
  }
  /**
   * Controls whether or not `update()` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  update(_changedProperties) {
    // The forEach() expression will only run when __reflectingProperties is
    // defined, and it returns undefined, setting __reflectingProperties to
    // undefined
    this.__reflectingProperties &&= this.__reflectingProperties.forEach(p => this.__propertyToAttribute(p, this[p]));
    this.__markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  updated(_changedProperties) {}
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * ```ts
   * firstUpdated() {
   *   this.renderRoot.getElementById('my-text-area').focus();
   * }
   * ```
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  firstUpdated(_changedProperties) {}
}
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = {
  mode: 'open'
};
// Assigned here to work around a jscompiler bug with static fields
// when compiling to ES5.
// https://github.com/google/closure-compiler/issues/3177
ReactiveElement[JSCompiler_renameProperty('elementProperties', ReactiveElement)] = new Map();
ReactiveElement[JSCompiler_renameProperty('finalized', ReactiveElement)] = new Map();
// Apply polyfills if available
polyfillSupport?.({
  ReactiveElement
});
// Dev mode warnings...
if (DEV_MODE) {
  // Default warning set.
  ReactiveElement.enabledWarnings = ['change-in-update', 'async-perform-update'];
  const ensureOwnWarnings = function (ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };
  ReactiveElement.enableWarning = function (warning) {
    ensureOwnWarnings(this);
    if (!this.enabledWarnings.includes(warning)) {
      this.enabledWarnings.push(warning);
    }
  };
  ReactiveElement.disableWarning = function (warning) {
    ensureOwnWarnings(this);
    const i = this.enabledWarnings.indexOf(warning);
    if (i >= 0) {
      this.enabledWarnings.splice(i, 1);
    }
  };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
(global.reactiveElementVersions ??= []).push('2.1.0');
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
  queueMicrotask(() => {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` + `is not recommended.`);
  });
}

/***/ }),

/***/ "../../node_modules/lit-element/development/lit-element.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/lit-element/development/lit-element.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult; },
/* harmony export */   LitElement: function() { return /* binding */ LitElement; },
/* harmony export */   ReactiveElement: function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement; },
/* harmony export */   _$LE: function() { return /* binding */ _$LE; },
/* harmony export */   _$LH: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH; },
/* harmony export */   adoptStyles: function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles; },
/* harmony export */   css: function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css; },
/* harmony export */   defaultConverter: function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter; },
/* harmony export */   getCompatibleStyle: function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle; },
/* harmony export */   html: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html; },
/* harmony export */   mathml: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.mathml; },
/* harmony export */   noChange: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange; },
/* harmony export */   notEqual: function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual; },
/* harmony export */   nothing: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing; },
/* harmony export */   render: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render; },
/* harmony export */   supportsAdoptingStyleSheets: function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets; },
/* harmony export */   svg: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg; },
/* harmony export */   unsafeCSS: function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS; }
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "../../node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "../../node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 * LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 * Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const DEV_MODE = true;
// Allows minifiers to rename references to globalThis
const global = globalThis;
let issueWarning;
if (DEV_MODE) {
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  global.litIssuedWarnings ??= new Set();
  /**
   * Issue a warning if we haven't already, based either on `code` or `warning`.
   * Warnings are disabled automatically only by `warning`; disabling via `code`
   * can be done by users.
   */
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global.litIssuedWarnings.add(warning);
    }
  };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
  constructor() {
    super(...arguments);
    /**
     * @category rendering
     */
    this.renderOptions = {
      host: this
    };
    this.__childPart = undefined;
  }
  /**
   * @category rendering
   */
  createRenderRoot() {
    const renderRoot = super.createRenderRoot();
    // When adoptedStyleSheets are shimmed, they are inserted into the
    // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
    // any styles in Lit content render before adoptedStyleSheets. This is
    // important so that adoptedStyleSheets have precedence over styles in
    // the shadowRoot.
    this.renderOptions.renderBefore ??= renderRoot.firstChild;
    return renderRoot;
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param changedProperties Map of changed properties with old values
   * @category updates
   */
  update(changedProperties) {
    // Setting properties in `render` should not trigger an update. Since
    // updates are allowed after super.update, it's important to call `render`
    // before that.
    const value = this.render();
    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }
    super.update(changedProperties);
    this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
  }
  /**
   * Invoked when the component is added to the document's DOM.
   *
   * In `connectedCallback()` you should setup tasks that should only occur when
   * the element is connected to the document. The most common of these is
   * adding event listeners to nodes external to the element, like a keydown
   * event handler added to the window.
   *
   * ```ts
   * connectedCallback() {
   *   super.connectedCallback();
   *   addEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * Typically, anything done in `connectedCallback()` should be undone when the
   * element is disconnected, in `disconnectedCallback()`.
   *
   * @category lifecycle
   */
  connectedCallback() {
    super.connectedCallback();
    this.__childPart?.setConnected(true);
  }
  /**
   * Invoked when the component is removed from the document's DOM.
   *
   * This callback is the main signal to the element that it may no longer be
   * used. `disconnectedCallback()` should ensure that nothing is holding a
   * reference to the element (such as event listeners added to nodes external
   * to the element), so that it is free to be garbage collected.
   *
   * ```ts
   * disconnectedCallback() {
   *   super.disconnectedCallback();
   *   window.removeEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * An element may be re-connected after being disconnected.
   *
   * @category lifecycle
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__childPart?.setConnected(false);
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `ChildPart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   * @category rendering
   */
  render() {
    return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
  }
}
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement[JSCompiler_renameProperty('finalized', LitElement)] = true;
// Install hydration if available
global.litElementHydrateSupport?.({
  LitElement
});
// Apply polyfills if available
const polyfillSupport = DEV_MODE ? global.litElementPolyfillSupportDevMode : global.litElementPolyfillSupport;
polyfillSupport?.({
  LitElement
});
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
const _$LE = {
  _$attributeToProperty: (el, name, value) => {
    // eslint-disable-next-line
    el._$attributeToProperty(name, value);
  },
  // eslint-disable-next-line
  _$changedProperties: el => el._$changedProperties
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
(global.litElementVersions ??= []).push('4.2.0');
if (DEV_MODE && global.litElementVersions.length > 1) {
  queueMicrotask(() => {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` + `is not recommended.`);
  });
}

/***/ }),

/***/ "../../node_modules/lit-html/development/async-directive.js":
/*!******************************************************************!*\
  !*** ../../node_modules/lit-html/development/async-directive.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncDirective: function() { return /* binding */ AsyncDirective; },
/* harmony export */   Directive: function() { return /* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive; },
/* harmony export */   PartType: function() { return /* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType; },
/* harmony export */   directive: function() { return /* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.directive; }
/* harmony export */ });
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive-helpers.js */ "../../node_modules/lit-html/development/directive-helpers.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive.js */ "../../node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */



const DEV_MODE = true;
/**
 * Recursively walks down the tree of Parts/TemplateInstances/Directives to set
 * the connected state of directives and run `disconnected`/ `reconnected`
 * callbacks.
 *
 * @return True if there were children to disconnect; false otherwise
 */
const notifyChildrenConnectedChanged = (parent, isConnected) => {
  const children = parent._$disconnectableChildren;
  if (children === undefined) {
    return false;
  }
  for (const obj of children) {
    // The existence of `_$notifyDirectiveConnectionChanged` is used as a "brand" to
    // disambiguate AsyncDirectives from other DisconnectableChildren
    // (as opposed to using an instanceof check to know when to call it); the
    // redundancy of "Directive" in the API name is to avoid conflicting with
    // `_$notifyConnectionChanged`, which exists `ChildParts` which are also in
    // this list
    // Disconnect Directive (and any nested directives contained within)
    // This property needs to remain unminified.
    obj['_$notifyDirectiveConnectionChanged']?.(isConnected, false);
    // Disconnect Part/TemplateInstance
    notifyChildrenConnectedChanged(obj, isConnected);
  }
  return true;
};
/**
 * Removes the given child from its parent list of disconnectable children, and
 * if the parent list becomes empty as a result, removes the parent from its
 * parent, and so forth up the tree when that causes subsequent parent lists to
 * become empty.
 */
const removeDisconnectableFromParent = obj => {
  let parent, children;
  do {
    if ((parent = obj._$parent) === undefined) {
      break;
    }
    children = parent._$disconnectableChildren;
    children.delete(obj);
    obj = parent;
  } while (children?.size === 0);
};
const addDisconnectableToParent = obj => {
  // Climb the parent tree, creating a sparse tree of children needing
  // disconnection
  for (let parent; parent = obj._$parent; obj = parent) {
    let children = parent._$disconnectableChildren;
    if (children === undefined) {
      parent._$disconnectableChildren = children = new Set();
    } else if (children.has(obj)) {
      // Once we've reached a parent that already contains this child, we
      // can short-circuit
      break;
    }
    children.add(obj);
    installDisconnectAPI(parent);
  }
};
/**
 * Changes the parent reference of the ChildPart, and updates the sparse tree of
 * Disconnectable children accordingly.
 *
 * Note, this method will be patched onto ChildPart instances and called from
 * the core code when parts are moved between different parents.
 */
function reparentDisconnectables(newParent) {
  if (this._$disconnectableChildren !== undefined) {
    removeDisconnectableFromParent(this);
    this._$parent = newParent;
    addDisconnectableToParent(this);
  } else {
    this._$parent = newParent;
  }
}
/**
 * Sets the connected state on any directives contained within the committed
 * value of this part (i.e. within a TemplateInstance or iterable of
 * ChildParts) and runs their `disconnected`/`reconnected`s, as well as within
 * any directives stored on the ChildPart (when `valueOnly` is false).
 *
 * `isClearingValue` should be passed as `true` on a top-level part that is
 * clearing itself, and not as a result of recursively disconnecting directives
 * as part of a `clear` operation higher up the tree. This both ensures that any
 * directive on this ChildPart that produced a value that caused the clear
 * operation is not disconnected, and also serves as a performance optimization
 * to avoid needless bookkeeping when a subtree is going away; when clearing a
 * subtree, only the top-most part need to remove itself from the parent.
 *
 * `fromPartIndex` is passed only in the case of a partial `_clear` running as a
 * result of truncating an iterable.
 *
 * Note, this method will be patched onto ChildPart instances and called from the
 * core code when parts are cleared or the connection state is changed by the
 * user.
 */
function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
  const value = this._$committedValue;
  const children = this._$disconnectableChildren;
  if (children === undefined || children.size === 0) {
    return;
  }
  if (isClearingValue) {
    if (Array.isArray(value)) {
      // Iterable case: Any ChildParts created by the iterable should be
      // disconnected and removed from this ChildPart's disconnectable
      // children (starting at `fromPartIndex` in the case of truncation)
      for (let i = fromPartIndex; i < value.length; i++) {
        notifyChildrenConnectedChanged(value[i], false);
        removeDisconnectableFromParent(value[i]);
      }
    } else if (value != null) {
      // TemplateInstance case: If the value has disconnectable children (will
      // only be in the case that it is a TemplateInstance), we disconnect it
      // and remove it from this ChildPart's disconnectable children
      notifyChildrenConnectedChanged(value, false);
      removeDisconnectableFromParent(value);
    }
  } else {
    notifyChildrenConnectedChanged(this, isConnected);
  }
}
/**
 * Patches disconnection API onto ChildParts.
 */
const installDisconnectAPI = obj => {
  if (obj.type == _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
    obj._$notifyConnectionChanged ??= notifyChildPartConnectedChanged;
    obj._$reparentDisconnectables ??= reparentDisconnectables;
  }
};
/**
 * An abstract `Directive` base class whose `disconnected` method will be
 * called when the part containing the directive is cleared as a result of
 * re-rendering, or when the user calls `part.setConnected(false)` on
 * a part that was previously rendered containing the directive (as happens
 * when e.g. a LitElement disconnects from the DOM).
 *
 * If `part.setConnected(true)` is subsequently called on a
 * containing part, the directive's `reconnected` method will be called prior
 * to its next `update`/`render` callbacks. When implementing `disconnected`,
 * `reconnected` should also be implemented to be compatible with reconnection.
 *
 * Note that updates may occur while the directive is disconnected. As such,
 * directives should generally check the `this.isConnected` flag during
 * render/update to determine whether it is safe to subscribe to resources
 * that may prevent garbage collection.
 */
class AsyncDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
  constructor() {
    super(...arguments);
    // @internal
    this._$disconnectableChildren = undefined;
  }
  /**
   * Initialize the part with internal fields
   * @param part
   * @param parent
   * @param attributeIndex
   */
  _$initialize(part, parent, attributeIndex) {
    super._$initialize(part, parent, attributeIndex);
    addDisconnectableToParent(this);
    this.isConnected = part._$isConnected;
  }
  // This property needs to remain unminified.
  /**
   * Called from the core code when a directive is going away from a part (in
   * which case `shouldRemoveFromParent` should be true), and from the
   * `setChildrenConnected` helper function when recursively changing the
   * connection state of a tree (in which case `shouldRemoveFromParent` should
   * be false).
   *
   * @param isConnected
   * @param isClearingDirective - True when the directive itself is being
   *     removed; false when the tree is being disconnected
   * @internal
   */
  ['_$notifyDirectiveConnectionChanged'](isConnected, isClearingDirective = true) {
    if (isConnected !== this.isConnected) {
      this.isConnected = isConnected;
      if (isConnected) {
        this.reconnected?.();
      } else {
        this.disconnected?.();
      }
    }
    if (isClearingDirective) {
      notifyChildrenConnectedChanged(this, isConnected);
      removeDisconnectableFromParent(this);
    }
  }
  /**
   * Sets the value of the directive's Part outside the normal `update`/`render`
   * lifecycle of a directive.
   *
   * This method should not be called synchronously from a directive's `update`
   * or `render`.
   *
   * @param directive The directive to update
   * @param value The value to set
   */
  setValue(value) {
    if ((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isSingleExpression)(this.__part)) {
      this.__part._$setValue(value, this);
    } else {
      // this.__attributeIndex will be defined in this case, but
      // assert it in dev mode
      if (DEV_MODE && this.__attributeIndex === undefined) {
        throw new Error(`Expected this.__attributeIndex to be a number`);
      }
      const newValues = [...this.__part._$committedValue];
      newValues[this.__attributeIndex] = value;
      this.__part._$setValue(newValues, this, 0);
    }
  }
  /**
   * User callbacks for implementing logic to release any resources/subscriptions
   * that may have been retained by this directive. Since directives may also be
   * re-connected, `reconnected` should also be implemented to restore the
   * working state of the directive prior to the next render.
   */
  disconnected() {}
  reconnected() {}
}

/***/ }),

/***/ "../../node_modules/lit-html/development/directive-helpers.js":
/*!********************************************************************!*\
  !*** ../../node_modules/lit-html/development/directive-helpers.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateResultType: function() { return /* binding */ TemplateResultType; },
/* harmony export */   clearPart: function() { return /* binding */ clearPart; },
/* harmony export */   getCommittedValue: function() { return /* binding */ getCommittedValue; },
/* harmony export */   getDirectiveClass: function() { return /* binding */ getDirectiveClass; },
/* harmony export */   insertPart: function() { return /* binding */ insertPart; },
/* harmony export */   isCompiledTemplateResult: function() { return /* binding */ isCompiledTemplateResult; },
/* harmony export */   isDirectiveResult: function() { return /* binding */ isDirectiveResult; },
/* harmony export */   isPrimitive: function() { return /* binding */ isPrimitive; },
/* harmony export */   isSingleExpression: function() { return /* binding */ isSingleExpression; },
/* harmony export */   isTemplateResult: function() { return /* binding */ isTemplateResult; },
/* harmony export */   removePart: function() { return /* binding */ removePart; },
/* harmony export */   setChildPartValue: function() { return /* binding */ setChildPartValue; },
/* harmony export */   setCommittedValue: function() { return /* binding */ setCommittedValue; }
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "../../node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {
  _ChildPart: ChildPart
} = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__._$LH;
const ENABLE_SHADYDOM_NOPATCH = true;
const wrap = ENABLE_SHADYDOM_NOPATCH && window.ShadyDOM?.inUse && window.ShadyDOM?.noPatch === true ? window.ShadyDOM.wrap : node => node;
/**
 * Tests if a value is a primitive value.
 *
 * See https://tc39.github.io/ecma262/#sec-typeof-operator
 */
const isPrimitive = value => value === null || typeof value != 'object' && typeof value != 'function';
const TemplateResultType = {
  HTML: 1,
  SVG: 2,
  MATHML: 3
};
/**
 * Tests if a value is a TemplateResult or a CompiledTemplateResult.
 */
const isTemplateResult = (value, type) => type === undefined ?
// This property needs to remain unminified.
value?.['_$litType$'] !== undefined : value?.['_$litType$'] === type;
/**
 * Tests if a value is a CompiledTemplateResult.
 */
const isCompiledTemplateResult = value => {
  return value?.['_$litType$']?.h != null;
};
/**
 * Tests if a value is a DirectiveResult.
 */
const isDirectiveResult = value =>
// This property needs to remain unminified.
value?.['_$litDirective$'] !== undefined;
/**
 * Retrieves the Directive class for a DirectiveResult
 */
const getDirectiveClass = value =>
// This property needs to remain unminified.
value?.['_$litDirective$'];
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */
const isSingleExpression = part => part.strings === undefined;
const createMarker = () => document.createComment('');
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */
const insertPart = (containerPart, refPart, part) => {
  const container = wrap(containerPart._$startNode).parentNode;
  const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
  if (part === undefined) {
    const startNode = wrap(container).insertBefore(createMarker(), refNode);
    const endNode = wrap(container).insertBefore(createMarker(), refNode);
    part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
  } else {
    const endNode = wrap(part._$endNode).nextSibling;
    const oldParent = part._$parent;
    const parentChanged = oldParent !== containerPart;
    if (parentChanged) {
      part._$reparentDisconnectables?.(containerPart);
      // Note that although `_$reparentDisconnectables` updates the part's
      // `_$parent` reference after unlinking from its current parent, that
      // method only exists if Disconnectables are present, so we need to
      // unconditionally set it here
      part._$parent = containerPart;
      // Since the _$isConnected getter is somewhat costly, only
      // read it once we know the subtree has directives that need
      // to be notified
      let newConnectionState;
      if (part._$notifyConnectionChanged !== undefined && (newConnectionState = containerPart._$isConnected) !== oldParent._$isConnected) {
        part._$notifyConnectionChanged(newConnectionState);
      }
    }
    if (endNode !== refNode || parentChanged) {
      let start = part._$startNode;
      while (start !== endNode) {
        const n = wrap(start).nextSibling;
        wrap(container).insertBefore(start, refNode);
        start = n;
      }
    }
  }
  return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */
const setChildPartValue = (part, value, directiveParent = part) => {
  part._$setValue(value, directiveParent);
  return part;
};
// A sentinel value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.
const RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */
const setCommittedValue = (part, value = RESET_VALUE) => part._$committedValue = value;
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being committed.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */
const getCommittedValue = part => part._$committedValue;
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */
const removePart = part => {
  part._$notifyConnectionChanged?.(false, true);
  let start = part._$startNode;
  const end = wrap(part._$endNode).nextSibling;
  while (start !== end) {
    const n = wrap(start).nextSibling;
    wrap(start).remove();
    start = n;
  }
};
const clearPart = part => {
  part._$clear();
};

/***/ }),

/***/ "../../node_modules/lit-html/development/directive.js":
/*!************************************************************!*\
  !*** ../../node_modules/lit-html/development/directive.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Directive: function() { return /* binding */ Directive; },
/* harmony export */   PartType: function() { return /* binding */ PartType; },
/* harmony export */   directive: function() { return /* binding */ directive; }
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = c => (...values) => ({
  // This property needs to remain unminified.
  ['_$litDirective$']: c,
  values
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
  constructor(_partInfo) {}
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /** @internal */
  _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */
  _$resolve(part, props) {
    return this.update(part, props);
  }
  update(_part, props) {
    return this.render(...props);
  }
}

/***/ }),

/***/ "../../node_modules/lit-html/development/is-server.js":
/*!************************************************************!*\
  !*** ../../node_modules/lit-html/development/is-server.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isServer: function() { return /* binding */ isServer; }
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @fileoverview
 *
 * This file exports a boolean const whose value will depend on what environment
 * the module is being imported from.
 */
const NODE_MODE = false;
/**
 * A boolean that will be `true` in server environments like Node, and `false`
 * in browser environments. Note that your server environment or toolchain must
 * support the `"node"` export condition for this to be `true`.
 *
 * This can be used when authoring components to change behavior based on
 * whether or not the component is executing in an SSR context.
 */
const isServer = NODE_MODE;

/***/ }),

/***/ "../../node_modules/lit-html/development/lit-html.js":
/*!***********************************************************!*\
  !*** ../../node_modules/lit-html/development/lit-html.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _$LH: function() { return /* binding */ _$LH; },
/* harmony export */   html: function() { return /* binding */ html; },
/* harmony export */   mathml: function() { return /* binding */ mathml; },
/* harmony export */   noChange: function() { return /* binding */ noChange; },
/* harmony export */   nothing: function() { return /* binding */ nothing; },
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   svg: function() { return /* binding */ svg; }
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
const NODE_MODE = false;
// Allows minifiers to rename references to globalThis
const global = globalThis;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE ? event => {
  const shouldEmit = global.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global.dispatchEvent(new CustomEvent('lit-debug', {
    detail: event
  }));
} : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
let issueWarning;
if (DEV_MODE) {
  global.litIssuedWarnings ??= new Set();
  /**
   * Issue a warning if we haven't already, based either on `code` or `warning`.
   * Warnings are disabled automatically only by `warning`; disabling via `code`
   * can be done by users.
   */
  issueWarning = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : '';
    if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global.litIssuedWarnings.add(warning);
    }
  };
  queueMicrotask(() => {
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
  });
}
const wrap = ENABLE_SHADYDOM_NOPATCH && global.ShadyDOM?.inUse && global.ShadyDOM?.noPatch === true ? global.ShadyDOM.wrap : node => node;
const trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes ? trustedTypes.createPolicy('lit-html', {
  createHTML: s => s
}) : undefined;
const identityFunction = value => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = newSanitizer => {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error(`Attempted to overwrite existing lit-html security policy.` + ` setSanitizeDOMValueFactory should be called at most once.`);
  }
  sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
  return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${Math.random().toFixed(9).slice(2)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = NODE_MODE && global.document === undefined ? {
  createTreeWalker() {
    return {};
  }
} : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = () => d.createComment('');
const isPrimitive = value => value === null || typeof value != 'object' && typeof value != 'function';
const isArray = Array.isArray;
const isIterable = value => isArray(value) ||
// eslint-disable-next-line @typescript-eslint/no-explicit-any
typeof value?.[Symbol.iterator] === 'function';
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
const HTML_RESULT = 1;
const SVG_RESULT = 2;
const MATHML_RESULT = 3;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = type => (strings, ...values) => {
  // Warn against templates octal escape sequences
  // We do this here rather than in render so that the warning is closer to the
  // template definition.
  if (DEV_MODE && strings.some(s => s === undefined)) {
    console.warn('Some template strings are undefined.\n' + 'This is probably caused by illegal octal escape sequences.');
  }
  if (DEV_MODE) {
    // Import static-html.js results in a circular dependency which g3 doesn't
    // handle. Instead we know that static values must have the field
    // `_$litStatic$`.
    if (values.some(val => val?.['_$litStatic$'])) {
      issueWarning('', `Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\n` + `Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);
    }
  }
  return {
    // This property needs to remain unminified.
    ['_$litType$']: type,
    strings,
    values
  };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently render
 * to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus not be properly contained within an `<svg>` HTML
 * element.
 */
const svg = tag(SVG_RESULT);
/**
 * Interprets a template literal as MathML fragment that can efficiently render
 * to and update a container.
 *
 * ```ts
 * const num = mathml`<mn>1</mn>`;
 *
 * const eq = html`
 *   <math>
 *     ${num}
 *   </math>`;
 * ```
 *
 * The `mathml` *tag function* should only be used for MathML fragments, or
 * elements that would be contained **inside** a `<math>` HTML element. A common
 * error is placing a `<math>` *element* in a template tagged with the `mathml`
 * tag function. The `<math>` element is an HTML element and should be used
 * within a template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an MathML fragment from the
 * `render()` method, as the MathML fragment will be contained within the
 * element's shadow root and thus not be properly contained within a `<math>`
 * HTML element.
 */
const mathml = tag(MATHML_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - they must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */);
let sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  // A security check to prevent spoofing of Lit template results.
  // In the future, we may be able to replace this with Array.isTemplateObject,
  // though we might need to make that check inside of the html and svg
  // functions, because precompiled templates don't come in as
  // TemplateStringArray objects.
  if (!isArray(tsa) || !tsa.hasOwnProperty('raw')) {
    let message = 'invalid template strings array';
    if (DEV_MODE) {
      message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, '\n');
    }
    throw new Error(message);
  }
  return policy !== undefined ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
  // Insert makers into the template HTML to represent the position of
  // bindings. The following code scans the template strings to determine the
  // syntactic position of the bindings. They can be in text position, where
  // we insert an HTML comment, attribute value position, where we insert a
  // sentinel string and re-write the attribute name, or inside a tag where
  // we insert the sentinel string.
  const l = strings.length - 1;
  // Stores the case-sensitive bound attribute names in the order of their
  // parts. ElementParts are also reflected in this array as undefined
  // rather than a string, to disambiguate from attribute bindings.
  const attrNames = [];
  let html = type === SVG_RESULT ? '<svg>' : type === MATHML_RESULT ? '<math>' : '';
  // When we're inside a raw text tag (not it's text content), the regex
  // will still be tagRegex so we can find attributes, but will switch to
  // this regex when the tag ends.
  let rawTextEndRegex;
  // The current parsing state, represented as a reference to one of the
  // regexes
  let regex = textEndRegex;
  for (let i = 0; i < l; i++) {
    const s = strings[i];
    // The index of the end of the last attribute name. When this is
    // positive at end of a string, it means we're in an attribute value
    // position and need to rewrite the attribute name.
    // We also use a special value of -2 to indicate that we encountered
    // the end of a string in attribute name position.
    let attrNameEndIndex = -1;
    let attrName;
    let lastIndex = 0;
    let match;
    // The conditions in this loop handle the current parse state, and the
    // assignments to the `regex` variable are the state transitions.
    while (lastIndex < s.length) {
      // Make sure we start searching from where we previously left off
      regex.lastIndex = lastIndex;
      match = regex.exec(s);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === '!--') {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== undefined) {
          // We started a weird comment, like </{
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== undefined) {
          if (rawTextElement.test(match[TAG_NAME])) {
            // Record if we encounter a raw-text element. We'll switch to
            // this regex at the end of the tag.
            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== undefined) {
          if (DEV_MODE) {
            throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' + 'See https://lit.dev/docs/templates/expressions/#static-expressions');
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === '>') {
          // End of a tag. If we had started a raw-text element, use that
          // regex
          regex = rawTextEndRegex ?? textEndRegex;
          // We may be ending an unquoted attribute value, so make sure we
          // clear any pending attrNameEndIndex
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === undefined) {
          // Attribute name position
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === undefined ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        // Not one of the five state regexes, so it must be the dynamically
        // created raw text regex and we're at the close of that element.
        regex = tagEndRegex;
        rawTextEndRegex = undefined;
      }
    }
    if (DEV_MODE) {
      // If we have a attrNameEndIndex, which indicates that we should
      // rewrite the attribute name, assert that we're in a valid attribute
      // position - either in a tag, or a quoted attribute value.
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
    }
    // We have four cases:
    //  1. We're in text position, and not in a raw text element
    //     (regex === textEndRegex): insert a comment marker.
    //  2. We have a non-negative attrNameEndIndex which means we need to
    //     rewrite the attribute name to add a bound attribute suffix.
    //  3. We're at the non-first binding in a multi-binding attribute, use a
    //     plain marker.
    //  4. We're somewhere else inside the tag. If we're in attribute name
    //     position (attrNameEndIndex === -2), add a sequential suffix to
    //     generate a unique attribute name.
    // Detect a binding next to self-closing tag end and insert a space to
    // separate the marker from the tag end:
    const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
    html += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? i : end);
  }
  const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : type === MATHML_RESULT ? '</math>' : '');
  // Returned as an array for terseness
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};
class Template {
  constructor(
  // This property needs to remain unminified.
  {
    strings,
    ['_$litType$']: type
  }, options) {
    this.parts = [];
    let node;
    let nodeIndex = 0;
    let attrNameIndex = 0;
    const partCount = strings.length - 1;
    const parts = this.parts;
    // Create template element
    const [html, attrNames] = getTemplateHtml(strings, type);
    this.el = Template.createElement(html, options);
    walker.currentNode = this.el.content;
    // Re-parent SVG or MathML nodes into template root
    if (type === SVG_RESULT || type === MATHML_RESULT) {
      const wrapper = this.el.content.firstChild;
      wrapper.replaceWith(...wrapper.childNodes);
    }
    // Walk the template to find binding markers and create TemplateParts
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE) {
          const tag = node.localName;
          // Warn if `textarea` includes an expression and throw if `template`
          // does since these are not supported. We do this by checking
          // innerHTML for anything that looks like a marker. This catches
          // cases like bindings in textarea there markers turn into text nodes.
          if (/^(?:textarea|template)$/i.test(tag) && node.innerHTML.includes(marker)) {
            const m = `Expressions are not supported inside \`${tag}\` ` + `elements. See https://lit.dev/msg/expression-in-${tag} for more ` + `information.`;
            if (tag === 'template') {
              throw new Error(m);
            } else issueWarning('', m);
          }
        }
        // TODO (justinfagnani): for attempted dynamic tag names, we don't
        // increment the bindingIndex, and it'll be off by 1 in the element
        // and off by two after it.
        if (node.hasAttributes()) {
          for (const name of node.getAttributeNames()) {
            if (name.endsWith(boundAttributeSuffix)) {
              const realName = attrNames[attrNameIndex++];
              const value = node.getAttribute(name);
              const statics = value.split(marker);
              const m = /([.?@])?(.*)/.exec(realName);
              parts.push({
                type: ATTRIBUTE_PART,
                index: nodeIndex,
                name: m[2],
                strings: statics,
                ctor: m[1] === '.' ? PropertyPart : m[1] === '?' ? BooleanAttributePart : m[1] === '@' ? EventPart : AttributePart
              });
              node.removeAttribute(name);
            } else if (name.startsWith(marker)) {
              parts.push({
                type: ELEMENT_PART,
                index: nodeIndex
              });
              node.removeAttribute(name);
            }
          }
        }
        // TODO (justinfagnani): benchmark the regex against testing for each
        // of the 3 raw text element names.
        if (rawTextElement.test(node.tagName)) {
          // For raw text elements we need to split the text content on
          // markers, create a Text node for each segment, and create
          // a TemplatePart for each marker.
          const strings = node.textContent.split(marker);
          const lastIndex = strings.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes ? trustedTypes.emptyScript : '';
            // Generate a new text node for each literal section
            // These nodes are also used as the markers for child parts
            for (let i = 0; i < lastIndex; i++) {
              node.append(strings[i], createMarker());
              // Walk past the marker node we just added
              walker.nextNode();
              parts.push({
                type: CHILD_PART,
                index: ++nodeIndex
              });
            }
            // Note because this marker is added after the walker's current
            // node, it will be walked to in the outer loop (and ignored), so
            // we don't need to adjust nodeIndex here
            node.append(strings[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        const data = node.data;
        if (data === markerMatch) {
          parts.push({
            type: CHILD_PART,
            index: nodeIndex
          });
        } else {
          let i = -1;
          while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
            // Comment node has a binding marker inside, make an inactive part
            // The binding won't work, but subsequent bindings will
            parts.push({
              type: COMMENT_PART,
              index: nodeIndex
            });
            // Move to the end of the match
            i += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    if (DEV_MODE) {
      // If there was a duplicate attribute on a tag, then when the tag is
      // parsed into an element the attribute gets de-duplicated. We can detect
      // this mismatch if we haven't precisely consumed every attribute name
      // when preparing the template. This works because `attrNames` is built
      // from the template string and `attrNameIndex` comes from processing the
      // resulting DOM.
      if (attrNames.length !== attrNameIndex) {
        throw new Error(`Detected duplicate attribute bindings. This occurs if your template ` + `has duplicate attributes on an element tag. For example ` + `"<input ?disabled=\${true} ?disabled=\${false}>" contains a ` + `duplicate "disabled" attribute. The error was detected in ` + `the following template: \n` + '`' + strings.join('${...}') + '`');
      }
    }
    // We could set walker.currentNode to another node here to prevent a memory
    // leak, but every time we prepare a template, we immediately render it
    // and re-use the walker in new TemplateInstance._clone().
    debugLogEvent && debugLogEvent({
      kind: 'template prep',
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings
    });
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @nocollapse */
  static createElement(html, _options) {
    const el = d.createElement('template');
    el.innerHTML = html;
    return el;
  }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
  // Bail early if the value is explicitly noChange. Note, this means any
  // nested directive is still attached and is not run.
  if (value === noChange) {
    return value;
  }
  let currentDirective = attributeIndex !== undefined ? parent.__directives?.[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? undefined :
  // This property needs to remain unminified.
  value['_$litDirective$'];
  if (currentDirective?.constructor !== nextDirectiveConstructor) {
    // This property needs to remain unminified.
    currentDirective?.['_$notifyDirectiveConnectionChanged']?.(false);
    if (nextDirectiveConstructor === undefined) {
      currentDirective = undefined;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== undefined) {
      (parent.__directives ??= [])[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== undefined) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
  constructor(template, parent) {
    this._$parts = [];
    /** @internal */
    this._$disconnectableChildren = undefined;
    this._$template = template;
    this._$parent = parent;
  }
  // Called by ChildPart parentNode getter
  get parentNode() {
    return this._$parent.parentNode;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  // This method is separate from the constructor because we need to return a
  // DocumentFragment and we don't want to hold onto it with an instance field.
  _clone(options) {
    const {
      el: {
        content
      },
      parts: parts
    } = this._$template;
    const fragment = (options?.creationScope ?? d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode();
    let nodeIndex = 0;
    let partIndex = 0;
    let templatePart = parts[0];
    while (templatePart !== undefined) {
      if (nodeIndex === templatePart.index) {
        let part;
        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }
        this._$parts.push(part);
        templatePart = parts[++partIndex];
      }
      if (nodeIndex !== templatePart?.index) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }
    // We need to set the currentNode away from the cloned tree so that we
    // don't hold onto the tree even if the tree is detached and should be
    // freed.
    walker.currentNode = d;
    return fragment;
  }
  _update(values) {
    let i = 0;
    for (const part of this._$parts) {
      if (part !== undefined) {
        debugLogEvent && debugLogEvent({
          kind: 'set part',
          part,
          value: values[i],
          valueIndex: i,
          values,
          templateInstance: this
        });
        if (part.strings !== undefined) {
          part._$setValue(values, part, i);
          // The number of values the part consumes is part.strings.length - 1
          // since values are in between template spans. We increment i by 1
          // later in the loop, so increment it by part.strings.length - 2 here
          i += part.strings.length - 2;
        } else {
          part._$setValue(values[i]);
        }
      }
      i++;
    }
  }
}
class ChildPart {
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    // ChildParts that are not at the root should always be created with a
    // parent; only RootChildNode's won't, so they return the local isConnected
    // state
    return this._$parent?._$isConnected ?? this.__isConnected;
  }
  constructor(startNode, endNode, parent, options) {
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    // The following fields will be patched onto ChildParts when required by
    // AsyncDirective
    /** @internal */
    this._$disconnectableChildren = undefined;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    // Note __isConnected is only ever accessed on RootParts (i.e. when there is
    // no _$parent); the value on a non-root-part is "don't care", but checking
    // for parent would be more code
    this.__isConnected = options?.isConnected ?? true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      // Explicitly initialize for consistent class shape.
      this._textSanitizer = undefined;
    }
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */
  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode;
    const parent = this._$parent;
    if (parent !== undefined && parentNode?.nodeType === 11 /* Node.DOCUMENT_FRAGMENT */) {
      // If the parentNode is a DocumentFragment, it may be because the DOM is
      // still in the cloned fragment during initial render; if so, get the real
      // parentNode the part will be committed into by asking the parent.
      parentNode = parent.parentNode;
    }
    return parentNode;
  }
  /**
   * The part's leading marker node, if any. See `.parentNode` for more
   * information.
   */
  get startNode() {
    return this._$startNode;
  }
  /**
   * The part's trailing marker node, if any. See `.parentNode` for more
   * information.
   */
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    if (DEV_MODE && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      // Non-rendering child values. It's important that these do not render
      // empty text nodes to avoid issues with preventing default <slot>
      // fallback content.
      if (value === nothing || value == null || value === '') {
        if (this._$committedValue !== nothing) {
          debugLogEvent && debugLogEvent({
            kind: 'commit nothing to child',
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });
          this._$clear();
        }
        this._$committedValue = nothing;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      }
      // This property needs to remain unminified.
    } else if (value['_$litType$'] !== undefined) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== undefined) {
      if (DEV_MODE && this.options?.host === value) {
        this._commitText(`[probable mistake: rendered a template's host in itself ` + `(commonly caused by writing \${this} in a template]`);
        console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
        return;
      }
      this._commitNode(value);
    } else if (isIterable(value)) {
      this._commitIterable(value);
    } else {
      // Fallback, will render the string representation
      this._commitText(value);
    }
  }
  _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = this._$startNode.parentNode?.nodeName;
        if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
          let message = 'Forbidden';
          if (DEV_MODE) {
            if (parentNodeName === 'STYLE') {
              message = `Lit does not support binding inside style nodes. ` + `This is a security risk, as style injection attacks can ` + `exfiltrate data and spoof UIs. ` + `Consider instead using css\`...\` literals ` + `to compose styles, and do dynamic styling with ` + `css custom properties, ::parts, <slot>s, ` + `and by mutating the DOM rather than stylesheets.`;
            } else {
              message = `Lit does not support binding inside script nodes. ` + `This is a security risk, as it could allow arbitrary ` + `code execution.`;
            }
          }
          throw new Error(message);
        }
      }
      debugLogEvent && debugLogEvent({
        kind: 'commit node',
        start: this._$startNode,
        parent: this._$parent,
        value: value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    // If the committed value is a primitive it means we called _commitText on
    // the previous render, and we know that this._$startNode.nextSibling is a
    // Text node. We can now just replace the text content (.data) of the node.
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      const node = wrap(this._$startNode).nextSibling;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === undefined) {
          this._textSanitizer = createSanitizer(node, 'data', 'property');
        }
        value = this._textSanitizer(value);
      }
      debugLogEvent && debugLogEvent({
        kind: 'commit text',
        node,
        value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        const textNode = d.createTextNode('');
        this._commitNode(textNode);
        // When setting text content, for security purposes it matters a lot
        // what the parent is. For example, <style> and <script> need to be
        // handled with care, while <span> does not. So first we need to put a
        // text node into the document, then we can sanitize its content.
        if (this._textSanitizer === undefined) {
          this._textSanitizer = createSanitizer(textNode, 'data', 'property');
        }
        value = this._textSanitizer(value);
        debugLogEvent && debugLogEvent({
          kind: 'commit text',
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent && debugLogEvent({
          kind: 'commit text',
          node: wrap(this._$startNode).nextSibling,
          value,
          options: this.options
        });
      }
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    // This property needs to remain unminified.
    const {
      values,
      ['_$litType$']: type
    } = result;
    // If $litType$ is a number, result is a plain TemplateResult and we get
    // the template from the template cache. If not, result is a
    // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
    // to create the <template> element the first time we see it.
    const template = typeof type === 'number' ? this._$getTemplate(result) : (type.el === undefined && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (this._$committedValue?._$template === template) {
      debugLogEvent && debugLogEvent({
        kind: 'template updating',
        template,
        instance: this._$committedValue,
        parts: this._$committedValue._$parts,
        options: this.options,
        values
      });
      this._$committedValue._update(values);
    } else {
      const instance = new TemplateInstance(template, this);
      const fragment = instance._clone(this.options);
      debugLogEvent && debugLogEvent({
        kind: 'template instantiated',
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      instance._update(values);
      debugLogEvent && debugLogEvent({
        kind: 'template instantiated and updated',
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      this._commitNode(fragment);
      this._$committedValue = instance;
    }
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @internal */
  _$getTemplate(result) {
    let template = templateCache.get(result.strings);
    if (template === undefined) {
      templateCache.set(result.strings, template = new Template(result));
    }
    return template;
  }
  _commitIterable(value) {
    // For an Iterable, we create a new InstancePart per item, then set its
    // value to the item. This is a little bit of overhead for every item in
    // an Iterable, but it lets us recurse easily and efficiently update Arrays
    // of TemplateResults that will be commonly returned from expressions like:
    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
    // If value is an array, then the previous render was of an
    // iterable and value will contain the ChildParts from the previous
    // render. If value is not an array, clear this part and make a new
    // array for ChildParts.
    if (!isArray(this._$committedValue)) {
      this._$committedValue = [];
      this._$clear();
    }
    // Lets us keep track of how many items we stamped so we can clear leftover
    // items from a previous render
    const itemParts = this._$committedValue;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      if (partIndex === itemParts.length) {
        // If no existing part, create a new one
        // TODO (justinfagnani): test perf impact of always creating two parts
        // instead of sharing parts between nodes
        // https://github.com/lit/lit/issues/1266
        itemParts.push(itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        // Reuse an existing part
        itemPart = itemParts[partIndex];
      }
      itemPart._$setValue(item);
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      // itemParts always have end nodes
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
      // Truncate the parts array so _value reflects the current state
      itemParts.length = partIndex;
    }
  }
  /**
   * Removes the nodes contained within this Part from the DOM.
   *
   * @param start Start node to clear from, for clearing a subset of the part's
   *     DOM (used when truncating iterables)
   * @param from  When `start` is specified, the index within the iterable from
   *     which ChildParts are being removed, used for disconnecting directives in
   *     those Parts.
   *
   * @internal
   */
  _$clear(start = wrap(this._$startNode).nextSibling, from) {
    this._$notifyConnectionChanged?.(false, true, from);
    while (start && start !== this._$endNode) {
      const n = wrap(start).nextSibling;
      wrap(start).remove();
      start = n;
    }
  }
  /**
   * Implementation of RootPart's `isConnected`. Note that this method
   * should only be called on `RootPart`s (the `ChildPart` returned from a
   * top-level `render()` call). It has no effect on non-root ChildParts.
   * @param isConnected Whether to set
   * @internal
   */
  setConnected(isConnected) {
    if (this._$parent === undefined) {
      this.__isConnected = isConnected;
      this._$notifyConnectionChanged?.(isConnected);
    } else if (DEV_MODE) {
      throw new Error('part.setConnected() may only be called on a ' + 'RootPart returned from render().');
    }
  }
}
class AttributePart {
  get tagName() {
    return this.element.tagName;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    /** @internal */
    this._$committedValue = nothing;
    /** @internal */
    this._$disconnectableChildren = undefined;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = undefined;
    }
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    const strings = this.strings;
    // Whether any of the values has changed, for dirty-checking
    let change = false;
    if (strings === undefined) {
      // Single-value binding case
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
      if (change) {
        this._$committedValue = value;
      }
    } else {
      // Interpolation case
      const values = value;
      value = strings[0];
      let i, v;
      for (i = 0; i < strings.length - 1; i++) {
        v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
        if (v === noChange) {
          // If the user-provided value is `noChange`, use the previous value
          v = this._$committedValue[i];
        }
        change ||= !isPrimitive(v) || v !== this._$committedValue[i];
        if (v === nothing) {
          value = nothing;
        } else if (value !== nothing) {
          value += (v ?? '') + strings[i + 1];
        }
        // We always record each value, even if one is `nothing`, for future
        // change detection.
        this._$committedValue[i] = v;
      }
    }
    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  /** @internal */
  _commitValue(value) {
    if (value === nothing) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === undefined) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
        }
        value = this._sanitizer(value ?? '');
      }
      debugLogEvent && debugLogEvent({
        kind: 'commit attribute',
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value ?? '');
    }
  }
}
class PropertyPart extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  /** @internal */
  _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === undefined) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
      }
      value = this._sanitizer(value);
    }
    debugLogEvent && debugLogEvent({
      kind: 'commit property',
      element: this.element,
      name: this.name,
      value,
      options: this.options
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.element[this.name] = value === nothing ? undefined : value;
  }
}
class BooleanAttributePart extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  /** @internal */
  _commitValue(value) {
    debugLogEvent && debugLogEvent({
      kind: 'commit boolean attribute',
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });
    wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
  }
}
class EventPart extends AttributePart {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    this.type = EVENT_PART;
    if (DEV_MODE && this.strings !== undefined) {
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` + 'invalid content. Event listeners in templates must have exactly ' + 'one expression and no surrounding text.');
    }
  }
  // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex
  /** @internal */
  _$setValue(newListener, directiveParent = this) {
    newListener = resolveDirective(this, newListener, directiveParent, 0) ?? nothing;
    if (newListener === noChange) {
      return;
    }
    const oldListener = this._$committedValue;
    // If the new value is nothing or any options change we have to remove the
    // part as a listener.
    const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    // If the new value is not nothing and we removed the listener, we have
    // to add the part as a listener.
    const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent && debugLogEvent({
      kind: 'commit event listener',
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener
    });
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }
    if (shouldAddListener) {
      this.element.addEventListener(this.name, this, newListener);
    }
    this._$committedValue = newListener;
  }
  handleEvent(event) {
    if (typeof this._$committedValue === 'function') {
      this._$committedValue.call(this.options?.host ?? this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  }
}
class ElementPart {
  constructor(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    /** @internal */
    this._$disconnectableChildren = undefined;
    this._$parent = parent;
    this.options = options;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent && debugLogEvent({
      kind: 'commit to element binding',
      element: this.element,
      value,
      options: this.options
    });
    resolveDirective(this, value);
  }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
const _$LH = {
  // Used in lit-ssr
  _boundAttributeSuffix: boundAttributeSuffix,
  _marker: marker,
  _markerMatch: markerMatch,
  _HTML_RESULT: HTML_RESULT,
  _getTemplateHtml: getTemplateHtml,
  // Used in tests and private-ssr-support
  _TemplateInstance: TemplateInstance,
  _isIterable: isIterable,
  _resolveDirective: resolveDirective,
  _ChildPart: ChildPart,
  _AttributePart: AttributePart,
  _BooleanAttributePart: BooleanAttributePart,
  _EventPart: EventPart,
  _PropertyPart: PropertyPart,
  _ElementPart: ElementPart
};
// Apply polyfills if available
const polyfillSupport = DEV_MODE ? global.litHtmlPolyfillSupportDevMode : global.litHtmlPolyfillSupport;
polyfillSupport?.(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
(global.litHtmlVersions ??= []).push('3.3.0');
if (DEV_MODE && global.litHtmlVersions.length > 1) {
  queueMicrotask(() => {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` + `Loading multiple versions is not recommended.`);
  });
}
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */
const render = (value, container, options) => {
  if (DEV_MODE && container == null) {
    // Give a clearer error message than
    //     Uncaught TypeError: Cannot read properties of null (reading
    //     '_$litPart$')
    // which reads like an internal Lit error.
    throw new TypeError(`The container to render into may not be ${container}`);
  }
  const renderId = DEV_MODE ? debugLogRenderId++ : 0;
  const partOwnerNode = options?.renderBefore ?? container;
  // This property needs to remain unminified.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let part = partOwnerNode['_$litPart$'];
  debugLogEvent && debugLogEvent({
    kind: 'begin render',
    id: renderId,
    value,
    container,
    options,
    part
  });
  if (part === undefined) {
    const endNode = options?.renderBefore ?? null;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options ?? {});
  }
  part._$setValue(value);
  debugLogEvent && debugLogEvent({
    kind: 'end render',
    id: renderId,
    value,
    container,
    options,
    part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

/***/ }),

/***/ "../../node_modules/lit/async-directive.js":
/*!*************************************************!*\
  !*** ../../node_modules/lit/async-directive.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncDirective: function() { return /* reexport safe */ lit_html_async_directive_js__WEBPACK_IMPORTED_MODULE_0__.AsyncDirective; },
/* harmony export */   Directive: function() { return /* reexport safe */ lit_html_async_directive_js__WEBPACK_IMPORTED_MODULE_0__.Directive; },
/* harmony export */   PartType: function() { return /* reexport safe */ lit_html_async_directive_js__WEBPACK_IMPORTED_MODULE_0__.PartType; },
/* harmony export */   directive: function() { return /* reexport safe */ lit_html_async_directive_js__WEBPACK_IMPORTED_MODULE_0__.directive; }
/* harmony export */ });
/* harmony import */ var lit_html_async_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/async-directive.js */ "../../node_modules/lit-html/development/async-directive.js");


/***/ }),

/***/ "../../node_modules/lit/decorators.js":
/*!********************************************!*\
  !*** ../../node_modules/lit/decorators.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: function() { return /* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement; },
/* harmony export */   eventOptions: function() { return /* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions; },
/* harmony export */   property: function() { return /* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property; },
/* harmony export */   query: function() { return /* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__.query; },
/* harmony export */   queryAll: function() { return /* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__.queryAll; },
/* harmony export */   queryAssignedElements: function() { return /* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__.queryAssignedElements; },
/* harmony export */   queryAssignedNodes: function() { return /* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedNodes; },
/* harmony export */   queryAsync: function() { return /* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__.queryAsync; },
/* harmony export */   standardProperty: function() { return /* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.standardProperty; },
/* harmony export */   state: function() { return /* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state; }
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "../../node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "../../node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "../../node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "../../node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "../../node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "../../node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "../../node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "../../node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "../../node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");










/***/ }),

/***/ "../../node_modules/lit/directive.js":
/*!*******************************************!*\
  !*** ../../node_modules/lit/directive.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Directive: function() { return /* reexport safe */ lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.Directive; },
/* harmony export */   PartType: function() { return /* reexport safe */ lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.PartType; },
/* harmony export */   directive: function() { return /* reexport safe */ lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.directive; }
/* harmony export */ });
/* harmony import */ var lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directive.js */ "../../node_modules/lit-html/development/directive.js");


/***/ }),

/***/ "../../node_modules/lit/html.js":
/*!**************************************!*\
  !*** ../../node_modules/lit/html.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _$LH: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__._$LH; },
/* harmony export */   html: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.html; },
/* harmony export */   mathml: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.mathml; },
/* harmony export */   noChange: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.noChange; },
/* harmony export */   nothing: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.nothing; },
/* harmony export */   render: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   svg: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.svg; }
/* harmony export */ });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "../../node_modules/lit-html/development/lit-html.js");


/***/ }),

/***/ "../../node_modules/lit/index.js":
/*!***************************************!*\
  !*** ../../node_modules/lit/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult; },
/* harmony export */   LitElement: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement; },
/* harmony export */   ReactiveElement: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement; },
/* harmony export */   _$LE: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE; },
/* harmony export */   _$LH: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH; },
/* harmony export */   adoptStyles: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles; },
/* harmony export */   css: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css; },
/* harmony export */   defaultConverter: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter; },
/* harmony export */   getCompatibleStyle: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle; },
/* harmony export */   html: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html; },
/* harmony export */   isServer: function() { return /* reexport safe */ lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__.isServer; },
/* harmony export */   mathml: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.mathml; },
/* harmony export */   noChange: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange; },
/* harmony export */   notEqual: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual; },
/* harmony export */   nothing: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing; },
/* harmony export */   render: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render; },
/* harmony export */   supportsAdoptingStyleSheets: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets; },
/* harmony export */   svg: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg; },
/* harmony export */   unsafeCSS: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS; }
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "../../node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "../../node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "../../node_modules/lit-element/development/lit-element.js");
/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "../../node_modules/lit-html/development/is-server.js");





/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: function() { return /* binding */ COMPLETE_NOTIFICATION; },
/* harmony export */   createNotification: function() { return /* binding */ createNotification; },
/* harmony export */   errorNotification: function() { return /* binding */ errorNotification; },
/* harmony export */   nextNotification: function() { return /* binding */ nextNotification; }
/* harmony export */ });
var COMPLETE_NOTIFICATION = function () {
  return createNotification('C', undefined, undefined);
}();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind: kind,
    value: value,
    error: error
  };
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/Observable.js":
/*!****************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/Observable.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: function() { return /* binding */ Observable; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "../../node_modules/rxjs/dist/esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ "../../node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "../../node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "../../node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ "../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ "../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js");







var Observable = function () {
  function Observable(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };
  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(function () {
      var _a = _this,
        operator = _a.operator,
        source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
        next: function (value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable.prototype._subscribe = function (subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable] = function () {
    return this;
  };
  Observable.prototype.pipe = function () {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
  };
  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;
      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };
  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };
  return Observable;
}();

function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value);
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/Subject.js":
/*!*************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/Subject.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousSubject: function() { return /* binding */ AnonymousSubject; },
/* harmony export */   Subject: function() { return /* binding */ Subject; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Observable */ "../../node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "../../node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ "../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ "../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js");






var Subject = function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subject, _super);
  function Subject() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject.prototype._throwIfClosed = function () {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
    }
  };
  Subject.prototype.next = function (value) {
    var _this = this;
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    });
  };
  Subject.prototype.error = function (err) {
    var _this = this;
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject.prototype.complete = function () {
    var _this = this;
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject.prototype.unsubscribe = function () {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject.prototype, "observed", {
    get: function () {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject.prototype._trySubscribe = function (subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject.prototype._subscribe = function (subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject.prototype._innerSubscribe = function (subscriber) {
    var _this = this;
    var _a = this,
      hasError = _a.hasError,
      isStopped = _a.isStopped,
      observers = _a.observers;
    if (hasError || isStopped) {
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(function () {
      _this.currentObservers = null;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
    });
  };
  Subject.prototype._checkFinalizedStatuses = function (subscriber) {
    var _a = this,
      hasError = _a.hasError,
      thrownError = _a.thrownError,
      isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject.prototype.asObservable = function () {
    var observable = new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable();
    observable.source = this;
    return observable;
  };
  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_5__.Observable);

var AnonymousSubject = function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AnonymousSubject, _super);
  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject.prototype.next = function (value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject.prototype.error = function (err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject.prototype.complete = function () {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject;
}(Subject);


/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/Subscriber.js":
/*!****************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/Subscriber.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: function() { return /* binding */ EMPTY_OBSERVER; },
/* harmony export */   SafeSubscriber: function() { return /* binding */ SafeSubscriber; },
/* harmony export */   Subscriber: function() { return /* binding */ Subscriber; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFunction */ "../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "../../node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "../../node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/reportUnhandledError */ "../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/noop */ "../../node_modules/rxjs/dist/esm5/internal/util/noop.js");
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationFactories */ "../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ "../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/errorContext */ "../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js");









var Subscriber = function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subscriber, _super);
  function Subscriber(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_1__.isSubscription)(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber.create = function (next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber.prototype.next = function (value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber.prototype.error = function (err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.errorNotification)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber.prototype.complete = function () {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };
  Subscriber.prototype._error = function (err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber.prototype._complete = function () {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription);

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function () {
  function ConsumerObserver(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver.prototype.next = function (value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver.prototype.error = function (err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver.prototype.complete = function () {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver;
}();
var SafeSubscriber = function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SafeSubscriber, _super);
  function SafeSubscriber(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      var context_1;
      if (_this && _config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function () {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber;
}(Subscriber);

function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_5__.captureError)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__.reportUnhandledError)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = _config__WEBPACK_IMPORTED_MODULE_4__.config.onStoppedNotification;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__.timeoutProvider.setTimeout(function () {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop
};

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/Subscription.js":
/*!******************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/Subscription.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: function() { return /* binding */ EMPTY_SUBSCRIPTION; },
/* harmony export */   Subscription: function() { return /* binding */ Subscription; },
/* harmony export */   isSubscription: function() { return /* binding */ isSubscription; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/arrRemove */ "../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");




var Subscription = function () {
  function Subscription(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription.prototype.unsubscribe = function () {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError) {
                errors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(errors)), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError(errors);
      }
    }
  };
  Subscription.prototype.add = function (teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription.prototype._hasParent = function (parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription.prototype._addParent = function (parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription.prototype._removeParent = function (parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_parentage, parent);
    }
  };
  Subscription.prototype.remove = function (teardown) {
    var _finalizers = this._finalizers;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  };
  Subscription.EMPTY = function () {
    var empty = new Subscription();
    empty.closed = true;
    return empty;
  }();
  return Subscription;
}();

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/config.js":
/*!************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/config.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* binding */ config; }
/* harmony export */ });
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: function() { return /* binding */ timeoutProvider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.mjs");

var timeoutProvider = {
  setTimeout: function (handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
    }
    return setTimeout.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
  },
  clearTimeout: function (handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: function() { return /* binding */ observable; }
/* harmony export */ });
var observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectUnsubscribedError: function() { return /* binding */ ObjectUnsubscribedError; }
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = 'ObjectUnsubscribedError';
    this.message = 'object unsubscribed';
  };
});

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: function() { return /* binding */ UnsubscriptionError; }
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
  };
});

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":
/*!********************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: function() { return /* binding */ arrRemove; }
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: function() { return /* binding */ createErrorClass; }
/* harmony export */ });
function createErrorClass(createImpl) {
  var _super = function (instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: function() { return /* binding */ captureError; },
/* harmony export */   errorContext: function() { return /* binding */ errorContext; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "../../node_modules/rxjs/dist/esm5/internal/config.js");

var context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      var _a = context,
        errorThrown = _a.errorThrown,
        error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/identity.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/identity.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: function() { return /* binding */ identity; }
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: function() { return /* binding */ isFunction; }
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/noop.js":
/*!***************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/noop.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: function() { return /* binding */ noop; }
/* harmony export */ });
function noop() {}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/pipe.js":
/*!***************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/pipe.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: function() { return /* binding */ pipe; },
/* harmony export */   pipeFromArray: function() { return /* binding */ pipeFromArray; }
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "../../node_modules/rxjs/dist/esm5/internal/util/identity.js");

function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: function() { return /* binding */ reportUnhandledError; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "../../node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ "../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(function () {
    var onUnhandledError = _config__WEBPACK_IMPORTED_MODULE_1__.config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

/***/ }),

/***/ "../../node_modules/signal-polyfill/dist/index.js":
/*!********************************************************!*\
  !*** ../../node_modules/signal-polyfill/dist/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Signal: function() { return /* binding */ Signal; }
/* harmony export */ });
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateIn = (member, obj) => {
  if (Object(obj) !== obj) throw TypeError('Cannot use the "in" operator on this value');
  return member.has(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function defaultEquals(a, b) {
  return Object.is(a, b);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let activeConsumer = null;
let inNotificationPhase = false;
let epoch = 1;
const SIGNAL = /* @__PURE__ */Symbol("SIGNAL");
function setActiveConsumer(consumer) {
  const prev = activeConsumer;
  activeConsumer = consumer;
  return prev;
}
function getActiveConsumer() {
  return activeConsumer;
}
function isInNotificationPhase() {
  return inNotificationPhase;
}
const REACTIVE_NODE = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: false,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: false,
  consumerIsAlwaysLive: false,
  producerMustRecompute: () => false,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {}
};
function producerAccessed(node) {
  if (inNotificationPhase) {
    throw new Error(typeof ngDevMode !== "undefined" && ngDevMode ? `Assertion error: signal read during notification phase` : "");
  }
  if (activeConsumer === null) {
    return;
  }
  activeConsumer.consumerOnSignalRead(node);
  const idx = activeConsumer.nextProducerIndex++;
  assertConsumerNode(activeConsumer);
  if (idx < activeConsumer.producerNode.length && activeConsumer.producerNode[idx] !== node) {
    if (consumerIsLive(activeConsumer)) {
      const staleProducer = activeConsumer.producerNode[idx];
      producerRemoveLiveConsumerAtIndex(staleProducer, activeConsumer.producerIndexOfThis[idx]);
    }
  }
  if (activeConsumer.producerNode[idx] !== node) {
    activeConsumer.producerNode[idx] = node;
    activeConsumer.producerIndexOfThis[idx] = consumerIsLive(activeConsumer) ? producerAddLiveConsumer(node, activeConsumer, idx) : 0;
  }
  activeConsumer.producerLastReadVersion[idx] = node.version;
}
function producerIncrementEpoch() {
  epoch++;
}
function producerUpdateValueVersion(node) {
  if (!node.dirty && node.lastCleanEpoch === epoch) {
    return;
  }
  if (!node.producerMustRecompute(node) && !consumerPollProducersForChange(node)) {
    node.dirty = false;
    node.lastCleanEpoch = epoch;
    return;
  }
  node.producerRecomputeValue(node);
  node.dirty = false;
  node.lastCleanEpoch = epoch;
}
function producerNotifyConsumers(node) {
  if (node.liveConsumerNode === void 0) {
    return;
  }
  const prev = inNotificationPhase;
  inNotificationPhase = true;
  try {
    for (const consumer of node.liveConsumerNode) {
      if (!consumer.dirty) {
        consumerMarkDirty(consumer);
      }
    }
  } finally {
    inNotificationPhase = prev;
  }
}
function producerUpdatesAllowed() {
  return (activeConsumer == null ? void 0 : activeConsumer.consumerAllowSignalWrites) !== false;
}
function consumerMarkDirty(node) {
  var _a;
  node.dirty = true;
  producerNotifyConsumers(node);
  (_a = node.consumerMarkedDirty) == null ? void 0 : _a.call(node.wrapper ?? node);
}
function consumerBeforeComputation(node) {
  node && (node.nextProducerIndex = 0);
  return setActiveConsumer(node);
}
function consumerAfterComputation(node, prevConsumer) {
  setActiveConsumer(prevConsumer);
  if (!node || node.producerNode === void 0 || node.producerIndexOfThis === void 0 || node.producerLastReadVersion === void 0) {
    return;
  }
  if (consumerIsLive(node)) {
    for (let i = node.nextProducerIndex; i < node.producerNode.length; i++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i], node.producerIndexOfThis[i]);
    }
  }
  while (node.producerNode.length > node.nextProducerIndex) {
    node.producerNode.pop();
    node.producerLastReadVersion.pop();
    node.producerIndexOfThis.pop();
  }
}
function consumerPollProducersForChange(node) {
  assertConsumerNode(node);
  for (let i = 0; i < node.producerNode.length; i++) {
    const producer = node.producerNode[i];
    const seenVersion = node.producerLastReadVersion[i];
    if (seenVersion !== producer.version) {
      return true;
    }
    producerUpdateValueVersion(producer);
    if (seenVersion !== producer.version) {
      return true;
    }
  }
  return false;
}
function producerAddLiveConsumer(node, consumer, indexOfThis) {
  var _a;
  assertProducerNode(node);
  assertConsumerNode(node);
  if (node.liveConsumerNode.length === 0) {
    (_a = node.watched) == null ? void 0 : _a.call(node.wrapper);
    for (let i = 0; i < node.producerNode.length; i++) {
      node.producerIndexOfThis[i] = producerAddLiveConsumer(node.producerNode[i], node, i);
    }
  }
  node.liveConsumerIndexOfThis.push(indexOfThis);
  return node.liveConsumerNode.push(consumer) - 1;
}
function producerRemoveLiveConsumerAtIndex(node, idx) {
  var _a;
  assertProducerNode(node);
  assertConsumerNode(node);
  if (typeof ngDevMode !== "undefined" && ngDevMode && idx >= node.liveConsumerNode.length) {
    throw new Error(`Assertion error: active consumer index ${idx} is out of bounds of ${node.liveConsumerNode.length} consumers)`);
  }
  if (node.liveConsumerNode.length === 1) {
    (_a = node.unwatched) == null ? void 0 : _a.call(node.wrapper);
    for (let i = 0; i < node.producerNode.length; i++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i], node.producerIndexOfThis[i]);
    }
  }
  const lastIdx = node.liveConsumerNode.length - 1;
  node.liveConsumerNode[idx] = node.liveConsumerNode[lastIdx];
  node.liveConsumerIndexOfThis[idx] = node.liveConsumerIndexOfThis[lastIdx];
  node.liveConsumerNode.length--;
  node.liveConsumerIndexOfThis.length--;
  if (idx < node.liveConsumerNode.length) {
    const idxProducer = node.liveConsumerIndexOfThis[idx];
    const consumer = node.liveConsumerNode[idx];
    assertConsumerNode(consumer);
    consumer.producerIndexOfThis[idxProducer] = idx;
  }
}
function consumerIsLive(node) {
  var _a;
  return node.consumerIsAlwaysLive || (((_a = node == null ? void 0 : node.liveConsumerNode) == null ? void 0 : _a.length) ?? 0) > 0;
}
function assertConsumerNode(node) {
  node.producerNode ?? (node.producerNode = []);
  node.producerIndexOfThis ?? (node.producerIndexOfThis = []);
  node.producerLastReadVersion ?? (node.producerLastReadVersion = []);
}
function assertProducerNode(node) {
  node.liveConsumerNode ?? (node.liveConsumerNode = []);
  node.liveConsumerIndexOfThis ?? (node.liveConsumerIndexOfThis = []);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function computedGet(node) {
  producerUpdateValueVersion(node);
  producerAccessed(node);
  if (node.value === ERRORED) {
    throw node.error;
  }
  return node.value;
}
function createComputed(computation) {
  const node = Object.create(COMPUTED_NODE);
  node.computation = computation;
  const computed = () => computedGet(node);
  computed[SIGNAL] = node;
  return computed;
}
const UNSET = /* @__PURE__ */Symbol("UNSET");
const COMPUTING = /* @__PURE__ */Symbol("COMPUTING");
const ERRORED = /* @__PURE__ */Symbol("ERRORED");
const COMPUTED_NODE = /* @__PURE__ */(() => {
  return {
    ...REACTIVE_NODE,
    value: UNSET,
    dirty: true,
    error: null,
    equal: defaultEquals,
    producerMustRecompute(node) {
      return node.value === UNSET || node.value === COMPUTING;
    },
    producerRecomputeValue(node) {
      if (node.value === COMPUTING) {
        throw new Error("Detected cycle in computations.");
      }
      const oldValue = node.value;
      node.value = COMPUTING;
      const prevConsumer = consumerBeforeComputation(node);
      let newValue;
      let wasEqual = false;
      try {
        newValue = node.computation.call(node.wrapper);
        const oldOk = oldValue !== UNSET && oldValue !== ERRORED;
        wasEqual = oldOk && node.equal.call(node.wrapper, oldValue, newValue);
      } catch (err) {
        newValue = ERRORED;
        node.error = err;
      } finally {
        consumerAfterComputation(node, prevConsumer);
      }
      if (wasEqual) {
        node.value = oldValue;
        return;
      }
      node.value = newValue;
      node.version++;
    }
  };
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function defaultThrowError() {
  throw new Error();
}
let throwInvalidWriteToSignalErrorFn = defaultThrowError;
function throwInvalidWriteToSignalError() {
  throwInvalidWriteToSignalErrorFn();
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function createSignal(initialValue) {
  const node = Object.create(SIGNAL_NODE);
  node.value = initialValue;
  const getter = () => {
    producerAccessed(node);
    return node.value;
  };
  getter[SIGNAL] = node;
  return getter;
}
function signalGetFn() {
  producerAccessed(this);
  return this.value;
}
function signalSetFn(node, newValue) {
  if (!producerUpdatesAllowed()) {
    throwInvalidWriteToSignalError();
  }
  if (!node.equal.call(node.wrapper, node.value, newValue)) {
    node.value = newValue;
    signalValueChanged(node);
  }
}
const SIGNAL_NODE = /* @__PURE__ */(() => {
  return {
    ...REACTIVE_NODE,
    equal: defaultEquals,
    value: void 0
  };
})();
function signalValueChanged(node) {
  node.version++;
  producerIncrementEpoch();
  producerNotifyConsumers(node);
}
/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const NODE = Symbol("node");
var Signal;
(Signal2 => {
  var _a, _brand, brand_fn, _b, _brand2, brand_fn2;
  class State {
    constructor(initialValue, options = {}) {
      __privateAdd(this, _brand);
      __publicField(this, _a);
      const ref = createSignal(initialValue);
      const node = ref[SIGNAL];
      this[NODE] = node;
      node.wrapper = this;
      if (options) {
        const equals = options.equals;
        if (equals) {
          node.equal = equals;
        }
        node.watched = options[Signal2.subtle.watched];
        node.unwatched = options[Signal2.subtle.unwatched];
      }
    }
    get() {
      if (!(0, Signal2.isState)(this)) throw new TypeError("Wrong receiver type for Signal.State.prototype.get");
      return signalGetFn.call(this[NODE]);
    }
    set(newValue) {
      if (!(0, Signal2.isState)(this)) throw new TypeError("Wrong receiver type for Signal.State.prototype.set");
      if (isInNotificationPhase()) {
        throw new Error("Writes to signals not permitted during Watcher callback");
      }
      const ref = this[NODE];
      signalSetFn(ref, newValue);
    }
  }
  _a = NODE;
  _brand = new WeakSet();
  brand_fn = function () {};
  Signal2.isState = s => typeof s === "object" && __privateIn(_brand, s);
  Signal2.State = State;
  class Computed {
    // Create a Signal which evaluates to the value returned by the callback.
    // Callback is called with this signal as the parameter.
    constructor(computation, options) {
      __privateAdd(this, _brand2);
      __publicField(this, _b);
      const ref = createComputed(computation);
      const node = ref[SIGNAL];
      node.consumerAllowSignalWrites = true;
      this[NODE] = node;
      node.wrapper = this;
      if (options) {
        const equals = options.equals;
        if (equals) {
          node.equal = equals;
        }
        node.watched = options[Signal2.subtle.watched];
        node.unwatched = options[Signal2.subtle.unwatched];
      }
    }
    get() {
      if (!(0, Signal2.isComputed)(this)) throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");
      return computedGet(this[NODE]);
    }
  }
  _b = NODE;
  _brand2 = new WeakSet();
  brand_fn2 = function () {};
  Signal2.isComputed = c => typeof c === "object" && __privateIn(_brand2, c);
  Signal2.Computed = Computed;
  (subtle2 => {
    var _a2, _brand3, brand_fn3, _assertSignals, assertSignals_fn;
    function untrack(cb) {
      let output;
      let prevActiveConsumer = null;
      try {
        prevActiveConsumer = setActiveConsumer(null);
        output = cb();
      } finally {
        setActiveConsumer(prevActiveConsumer);
      }
      return output;
    }
    subtle2.untrack = untrack;
    function introspectSources(sink) {
      var _a3;
      if (!(0, Signal2.isComputed)(sink) && !(0, Signal2.isWatcher)(sink)) {
        throw new TypeError("Called introspectSources without a Computed or Watcher argument");
      }
      return ((_a3 = sink[NODE].producerNode) == null ? void 0 : _a3.map(n => n.wrapper)) ?? [];
    }
    subtle2.introspectSources = introspectSources;
    function introspectSinks(signal) {
      var _a3;
      if (!(0, Signal2.isComputed)(signal) && !(0, Signal2.isState)(signal)) {
        throw new TypeError("Called introspectSinks without a Signal argument");
      }
      return ((_a3 = signal[NODE].liveConsumerNode) == null ? void 0 : _a3.map(n => n.wrapper)) ?? [];
    }
    subtle2.introspectSinks = introspectSinks;
    function hasSinks(signal) {
      if (!(0, Signal2.isComputed)(signal) && !(0, Signal2.isState)(signal)) {
        throw new TypeError("Called hasSinks without a Signal argument");
      }
      const liveConsumerNode = signal[NODE].liveConsumerNode;
      if (!liveConsumerNode) return false;
      return liveConsumerNode.length > 0;
    }
    subtle2.hasSinks = hasSinks;
    function hasSources(signal) {
      if (!(0, Signal2.isComputed)(signal) && !(0, Signal2.isWatcher)(signal)) {
        throw new TypeError("Called hasSources without a Computed or Watcher argument");
      }
      const producerNode = signal[NODE].producerNode;
      if (!producerNode) return false;
      return producerNode.length > 0;
    }
    subtle2.hasSources = hasSources;
    class Watcher {
      // When a (recursive) source of Watcher is written to, call this callback,
      // if it hasn't already been called since the last `watch` call.
      // No signals may be read or written during the notify.
      constructor(notify) {
        __privateAdd(this, _brand3);
        __privateAdd(this, _assertSignals);
        __publicField(this, _a2);
        let node = Object.create(REACTIVE_NODE);
        node.wrapper = this;
        node.consumerMarkedDirty = notify;
        node.consumerIsAlwaysLive = true;
        node.consumerAllowSignalWrites = false;
        node.producerNode = [];
        this[NODE] = node;
      }
      // Add these signals to the Watcher's set, and set the watcher to run its
      // notify callback next time any signal in the set (or one of its dependencies) changes.
      // Can be called with no arguments just to reset the "notified" state, so that
      // the notify callback will be invoked again.
      watch(...signals) {
        if (!(0, Signal2.isWatcher)(this)) {
          throw new TypeError("Called unwatch without Watcher receiver");
        }
        __privateMethod(this, _assertSignals, assertSignals_fn).call(this, signals);
        const node = this[NODE];
        node.dirty = false;
        const prev = setActiveConsumer(node);
        for (const signal of signals) {
          producerAccessed(signal[NODE]);
        }
        setActiveConsumer(prev);
      }
      // Remove these signals from the watched set (e.g., for an effect which is disposed)
      unwatch(...signals) {
        if (!(0, Signal2.isWatcher)(this)) {
          throw new TypeError("Called unwatch without Watcher receiver");
        }
        __privateMethod(this, _assertSignals, assertSignals_fn).call(this, signals);
        const node = this[NODE];
        assertConsumerNode(node);
        for (let i = node.producerNode.length - 1; i >= 0; i--) {
          if (signals.includes(node.producerNode[i].wrapper)) {
            producerRemoveLiveConsumerAtIndex(node.producerNode[i], node.producerIndexOfThis[i]);
            const lastIdx = node.producerNode.length - 1;
            node.producerNode[i] = node.producerNode[lastIdx];
            node.producerIndexOfThis[i] = node.producerIndexOfThis[lastIdx];
            node.producerNode.length--;
            node.producerIndexOfThis.length--;
            node.nextProducerIndex--;
            if (i < node.producerNode.length) {
              const idxConsumer = node.producerIndexOfThis[i];
              const producer = node.producerNode[i];
              assertProducerNode(producer);
              producer.liveConsumerIndexOfThis[idxConsumer] = i;
            }
          }
        }
      }
      // Returns the set of computeds in the Watcher's set which are still yet
      // to be re-evaluated
      getPending() {
        if (!(0, Signal2.isWatcher)(this)) {
          throw new TypeError("Called getPending without Watcher receiver");
        }
        const node = this[NODE];
        return node.producerNode.filter(n => n.dirty).map(n => n.wrapper);
      }
    }
    _a2 = NODE;
    _brand3 = new WeakSet();
    brand_fn3 = function () {};
    _assertSignals = new WeakSet();
    assertSignals_fn = function (signals) {
      for (const signal of signals) {
        if (!(0, Signal2.isComputed)(signal) && !(0, Signal2.isState)(signal)) {
          throw new TypeError("Called watch/unwatch without a Computed or State argument");
        }
      }
    };
    Signal2.isWatcher = w => __privateIn(_brand3, w);
    subtle2.Watcher = Watcher;
    function currentComputed() {
      var _a3;
      return (_a3 = getActiveConsumer()) == null ? void 0 : _a3.wrapper;
    }
    subtle2.currentComputed = currentComputed;
    subtle2.watched = Symbol("watched");
    subtle2.unwatched = Symbol("unwatched");
  })(Signal2.subtle || (Signal2.subtle = {}));
})(Signal || (Signal = {}));


/***/ }),

/***/ "../../node_modules/stylis/src/Enum.js":
/*!*********************************************!*\
  !*** ../../node_modules/stylis/src/Enum.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: function() { return /* binding */ CHARSET; },
/* harmony export */   COMMENT: function() { return /* binding */ COMMENT; },
/* harmony export */   COUNTER_STYLE: function() { return /* binding */ COUNTER_STYLE; },
/* harmony export */   DECLARATION: function() { return /* binding */ DECLARATION; },
/* harmony export */   DOCUMENT: function() { return /* binding */ DOCUMENT; },
/* harmony export */   FONT_FACE: function() { return /* binding */ FONT_FACE; },
/* harmony export */   FONT_FEATURE_VALUES: function() { return /* binding */ FONT_FEATURE_VALUES; },
/* harmony export */   IMPORT: function() { return /* binding */ IMPORT; },
/* harmony export */   KEYFRAMES: function() { return /* binding */ KEYFRAMES; },
/* harmony export */   LAYER: function() { return /* binding */ LAYER; },
/* harmony export */   MEDIA: function() { return /* binding */ MEDIA; },
/* harmony export */   MOZ: function() { return /* binding */ MOZ; },
/* harmony export */   MS: function() { return /* binding */ MS; },
/* harmony export */   NAMESPACE: function() { return /* binding */ NAMESPACE; },
/* harmony export */   PAGE: function() { return /* binding */ PAGE; },
/* harmony export */   RULESET: function() { return /* binding */ RULESET; },
/* harmony export */   SUPPORTS: function() { return /* binding */ SUPPORTS; },
/* harmony export */   VIEWPORT: function() { return /* binding */ VIEWPORT; },
/* harmony export */   WEBKIT: function() { return /* binding */ WEBKIT; }
/* harmony export */ });
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';

/***/ }),

/***/ "../../node_modules/stylis/src/Middleware.js":
/*!***************************************************!*\
  !*** ../../node_modules/stylis/src/Middleware.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: function() { return /* binding */ middleware; },
/* harmony export */   namespace: function() { return /* binding */ namespace; },
/* harmony export */   prefixer: function() { return /* binding */ prefixer; },
/* harmony export */   rulesheet: function() { return /* binding */ rulesheet; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "../../node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "../../node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "../../node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "../../node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "../../node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware(collection) {
  var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection);
  return function (element, index, children, callback) {
    var output = '';
    for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';
    return output;
  };
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet(callback) {
  return function (element) {
    if (!element.root) if (element = element.return) callback(element);
  };
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element.return) switch (element.type) {
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION:
      element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children);
      return;
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
      return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {
        value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)
      })], callback);
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
      if (element.length) return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(element.props, function (value) {
        switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {
              props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]
            })], callback);
          // :placeholder
          case '::placeholder':
            return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {
              props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]
            }), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {
              props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]
            }), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {
              props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]
            })], callback);
        }
        return '';
      });
  }
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace(element) {
  switch (element.type) {
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
      element.props = element.props.map(function (value) {
        return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
          switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
            // \f
            case 12:
              return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value));
            // \0 ( + > ~
            case 0:
            case 40:
            case 43:
            case 62:
            case 126:
              return value;
            // :
            case 58:
              if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1);
            // \s
            case 32:
              return index === 1 ? '' : value;
            default:
              switch (index) {
                case 0:
                  element = value;
                  return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value;
                case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1:
                case 2:
                  return index === 2 ? value + element + element : value + element;
                default:
                  return value;
              }
          }
        });
      });
  }
}

/***/ }),

/***/ "../../node_modules/stylis/src/Parser.js":
/*!***********************************************!*\
  !*** ../../node_modules/stylis/src/Parser.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: function() { return /* binding */ comment; },
/* harmony export */   compile: function() { return /* binding */ compile; },
/* harmony export */   declaration: function() { return /* binding */ declaration; },
/* harmony export */   parse: function() { return /* binding */ parse; },
/* harmony export */   ruleset: function() { return /* binding */ ruleset; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "../../node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "../../node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "../../node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile(value) {
  return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value));
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;
  while (scanning) switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
    // (
    case 40:
      if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
        if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
        break;
      }
    // " ' [
    case 34:
    case 39:
    case 91:
      characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character);
      break;
    // \t \n \r \s
    case 9:
    case 10:
    case 13:
    case 32:
      characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous);
      break;
    // \
    case 92:
      characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7);
      continue;
    // /
    case 47:
      switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
        case 42:
        case 47:
          (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent), declarations);
          break;
        default:
          characters += '/';
      }
      break;
    // {
    case 123 * variable:
      points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand;
    // } ; \0
    case 125 * variable:
    case 59:
    case 0:
      switch (character) {
        // \0 }
        case 0:
        case 125:
          scanning = 0;
        // ;
        case 59 + offset:
          if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '');
          if (property > 0 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length) (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
          break;
        // @ ;
        case 59:
          characters += ';';
        // { rule/at-rule
        default:
          (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
          if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
            // d l m s
            case 100:
            case 108:
            case 109:
            case 115:
              parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
              break;
            default:
              parse(characters, reference, reference, reference, [''], children, 0, points, children);
          }
      }
      index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
      break;
    // :
    case 58:
      length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous;
    default:
      if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125) continue;
      switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
        // &
        case 38:
          ampersand = offset > 0 ? 1 : (characters += '\f', -1);
          break;
        // ,
        case 44:
          points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1;
          break;
        // @
        case 64:
          // -
          if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45) characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)());
          atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++;
          break;
        // -
        case 45:
          if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2) variable = 0;
      }
  }
  return rulesets;
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x) if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x]))) props[k++] = z;
  return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length);
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment(value, root, parent) {
  return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0);
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration(value, root, parent, length) {
  return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length);
}

/***/ }),

/***/ "../../node_modules/stylis/src/Prefixer.js":
/*!*************************************************!*\
  !*** ../../node_modules/stylis/src/Prefixer.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "../../node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "../../node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix(value, length, children) {
  switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
    // color-adjust
    case 5103:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value;
    // tab-size
    case 4789:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value;
    // writing-mode
    case 5936:
      switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)
        case 108:
          return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb
        case 45:
          return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        // default: fallthrough to below
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value;
    // order
    case 6165:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value;
    // align-items
    case 5187:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value;
    // align-self
    case 5443:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value;
    // align-content
    case 4675:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value;
    // flex-shrink
    case 5548:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value;
    // flex-basis
    case 5292:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value;
    // flex-grow
    case 6060:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value;
    // transition
    case 4554:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value;
    // cursor
    case 6187:
      return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value;
    // background, background-image
    case 5495:
    case 3959:
      return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1');
    // justify-content
    case 4968:
      return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value;
    // justify-self
    case 4200:
      if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      if (children && children.some(function (element, index) {
        return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/);
      })) {
        return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span') ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span') ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';';
      }
      return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return children && children.some(function (element) {
        return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/);
      }) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6) switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch
        case 115:
          return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value;
      }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) {
        return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f + (c ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
      });
    // position: sticky
    case 4949:
      // stick(y)?
      if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121) return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value;
        // (inline-)?gri(d)
        case 100:
          return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value;
  }
  return value;
}

/***/ }),

/***/ "../../node_modules/stylis/src/Serializer.js":
/*!***************************************************!*\
  !*** ../../node_modules/stylis/src/Serializer.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: function() { return /* binding */ serialize; },
/* harmony export */   stringify: function() { return /* binding */ stringify; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "../../node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "../../node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize(children, callback) {
  var output = '';
  var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children);
  for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || '';
  return output;
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify(element, index, children, callback) {
  switch (element.type) {
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.LAYER:
      if (element.children.length) break;
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.IMPORT:
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION:
      return element.return = element.return || element.value;
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT:
      return '';
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
      return element.return = element.value + '{' + serialize(element.children, callback) + '}';
    case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
      element.value = element.props.join(',');
  }
  return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}

/***/ }),

/***/ "../../node_modules/stylis/src/Tokenizer.js":
/*!**************************************************!*\
  !*** ../../node_modules/stylis/src/Tokenizer.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: function() { return /* binding */ alloc; },
/* harmony export */   caret: function() { return /* binding */ caret; },
/* harmony export */   char: function() { return /* binding */ char; },
/* harmony export */   character: function() { return /* binding */ character; },
/* harmony export */   characters: function() { return /* binding */ characters; },
/* harmony export */   column: function() { return /* binding */ column; },
/* harmony export */   commenter: function() { return /* binding */ commenter; },
/* harmony export */   copy: function() { return /* binding */ copy; },
/* harmony export */   dealloc: function() { return /* binding */ dealloc; },
/* harmony export */   delimit: function() { return /* binding */ delimit; },
/* harmony export */   delimiter: function() { return /* binding */ delimiter; },
/* harmony export */   escaping: function() { return /* binding */ escaping; },
/* harmony export */   identifier: function() { return /* binding */ identifier; },
/* harmony export */   length: function() { return /* binding */ length; },
/* harmony export */   line: function() { return /* binding */ line; },
/* harmony export */   next: function() { return /* binding */ next; },
/* harmony export */   node: function() { return /* binding */ node; },
/* harmony export */   peek: function() { return /* binding */ peek; },
/* harmony export */   position: function() { return /* binding */ position; },
/* harmony export */   prev: function() { return /* binding */ prev; },
/* harmony export */   slice: function() { return /* binding */ slice; },
/* harmony export */   token: function() { return /* binding */ token; },
/* harmony export */   tokenize: function() { return /* binding */ tokenize; },
/* harmony export */   tokenizer: function() { return /* binding */ tokenizer; },
/* harmony export */   whitespace: function() { return /* binding */ whitespace; }
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "../../node_modules/stylis/src/Utility.js");

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node(value, root, parent, type, props, children, length) {
  return {
    value: value,
    root: root,
    parent: parent,
    type: type,
    props: props,
    children: children,
    line: line,
    column: column,
    length: length,
    return: ''
  };
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy(root, props) {
  return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0), root, {
    length: -root.length
  }, props);
}

/**
 * @return {number}
 */
function char() {
  return character;
}

/**
 * @return {number}
 */
function prev() {
  character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0;
  if (column--, character === 10) column = 1, line--;
  return character;
}

/**
 * @return {number}
 */
function next() {
  character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0;
  if (column++, character === 10) column = 1, line++;
  return character;
}

/**
 * @return {number}
 */
function peek() {
  return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position);
}

/**
 * @return {number}
 */
function caret() {
  return position;
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice(begin, end) {
  return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end);
}

/**
 * @param {number} type
 * @return {number}
 */
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc(value) {
  return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, [];
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc(value) {
  return characters = '', value;
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit(type) {
  return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize(value) {
  return dealloc(tokenizer(alloc(value)));
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace(type) {
  while (character = peek()) if (character < 33) next();else break;
  return token(type) > 2 || token(character) > 3 ? '' : ' ';
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer(children) {
  while (next()) switch (token(character)) {
    case 0:
      (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children);
      break;
    case 2:
      (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children);
      break;
    default:
      (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children);
  }
  return children;
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping(index, count) {
  while (--count && next())
  // not 0-9 A-F a-f
  if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter(type) {
  while (next()) switch (character) {
    // ] ) " '
    case type:
      return position;
    // " '
    case 34:
    case 39:
      if (type !== 34 && type !== 39) delimiter(character);
      break;
    // (
    case 40:
      if (type === 41) delimiter(type);
      break;
    // \
    case 92:
      next();
      break;
  }
  return position;
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter(type, index) {
  while (next())
  // //
  if (type + character === 47 + 10) break;
  // /*
  else if (type + character === 42 + 42 && peek() === 47) break;
  return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next());
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier(index) {
  while (!token(peek())) next();
  return slice(index, position);
}

/***/ }),

/***/ "../../node_modules/stylis/src/Utility.js":
/*!************************************************!*\
  !*** ../../node_modules/stylis/src/Utility.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: function() { return /* binding */ abs; },
/* harmony export */   append: function() { return /* binding */ append; },
/* harmony export */   assign: function() { return /* binding */ assign; },
/* harmony export */   charat: function() { return /* binding */ charat; },
/* harmony export */   combine: function() { return /* binding */ combine; },
/* harmony export */   from: function() { return /* binding */ from; },
/* harmony export */   hash: function() { return /* binding */ hash; },
/* harmony export */   indexof: function() { return /* binding */ indexof; },
/* harmony export */   match: function() { return /* binding */ match; },
/* harmony export */   replace: function() { return /* binding */ replace; },
/* harmony export */   sizeof: function() { return /* binding */ sizeof; },
/* harmony export */   strlen: function() { return /* binding */ strlen; },
/* harmony export */   substr: function() { return /* binding */ substr; },
/* harmony export */   trim: function() { return /* binding */ trim; }
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash(value, length) {
  return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}

/**
 * @param {string} value
 * @return {string}
 */
function trim(value) {
  return value.trim();
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof(value, search) {
  return value.indexOf(search);
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr(value, begin, end) {
  return value.slice(begin, end);
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen(value) {
  return value.length;
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof(value) {
  return value.length;
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append(value, array) {
  return array.push(value), value;
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine(array, callback) {
  return array.map(callback).join('');
}

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.mjs":
/*!**********************************************!*\
  !*** ../../node_modules/tslib/tslib.es6.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: function() { return /* binding */ __addDisposableResource; },
/* harmony export */   __assign: function() { return /* binding */ __assign; },
/* harmony export */   __asyncDelegator: function() { return /* binding */ __asyncDelegator; },
/* harmony export */   __asyncGenerator: function() { return /* binding */ __asyncGenerator; },
/* harmony export */   __asyncValues: function() { return /* binding */ __asyncValues; },
/* harmony export */   __await: function() { return /* binding */ __await; },
/* harmony export */   __awaiter: function() { return /* binding */ __awaiter; },
/* harmony export */   __classPrivateFieldGet: function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   __classPrivateFieldIn: function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   __classPrivateFieldSet: function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   __createBinding: function() { return /* binding */ __createBinding; },
/* harmony export */   __decorate: function() { return /* binding */ __decorate; },
/* harmony export */   __disposeResources: function() { return /* binding */ __disposeResources; },
/* harmony export */   __esDecorate: function() { return /* binding */ __esDecorate; },
/* harmony export */   __exportStar: function() { return /* binding */ __exportStar; },
/* harmony export */   __extends: function() { return /* binding */ __extends; },
/* harmony export */   __generator: function() { return /* binding */ __generator; },
/* harmony export */   __importDefault: function() { return /* binding */ __importDefault; },
/* harmony export */   __importStar: function() { return /* binding */ __importStar; },
/* harmony export */   __makeTemplateObject: function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   __metadata: function() { return /* binding */ __metadata; },
/* harmony export */   __param: function() { return /* binding */ __param; },
/* harmony export */   __propKey: function() { return /* binding */ __propKey; },
/* harmony export */   __read: function() { return /* binding */ __read; },
/* harmony export */   __rest: function() { return /* binding */ __rest; },
/* harmony export */   __rewriteRelativeImportExtension: function() { return /* binding */ __rewriteRelativeImportExtension; },
/* harmony export */   __runInitializers: function() { return /* binding */ __runInitializers; },
/* harmony export */   __setFunctionName: function() { return /* binding */ __setFunctionName; },
/* harmony export */   __spread: function() { return /* binding */ __spread; },
/* harmony export */   __spreadArray: function() { return /* binding */ __spreadArray; },
/* harmony export */   __spreadArrays: function() { return /* binding */ __spreadArrays; },
/* harmony export */   __values: function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
;
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: prefix ? "".concat(prefix, " ", name) : name
  });
}
;
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function awaitReturn(f) {
    return function (v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: false
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
var ownKeys = function (o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function () {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({
      value: value,
      dispose: dispose,
      async: async
    });
  } else if (async) {
    env.stack.push({
      async: true
    });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r,
    s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension
});

/***/ }),

/***/ "./src/autofill/content/components/buttons/action-button.ts":
/*!******************************************************************!*\
  !*** ./src/autofill/content/components/buttons/action-button.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionButton: function() { return /* binding */ ActionButton; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./src/autofill/content/components/icons/index.ts");




function ActionButton({ buttonText, disabled = false, isLoading = false, theme, handleClick, fullWidth = true, }) {
    const handleButtonClick = (event) => {
        if (!disabled && !isLoading) {
            handleClick(event);
        }
    };
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <button
      class=${actionButtonStyles({ disabled, fullWidth, isLoading, theme })}
      title=${buttonText}
      type="button"
      @click=${handleButtonClick}
    >
      ${isLoading ? (0,_icons__WEBPACK_IMPORTED_MODULE_3__.Spinner)({ theme, color: _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted }) : buttonText}
    </button>
  `;
}
const actionButtonStyles = ({ disabled, fullWidth, isLoading, theme, }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.typography.body2}

  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.border.radius.full};
  padding: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["3"]};
  width: ${fullWidth ? "100%" : "auto"};
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 700;

  ${disabled || isLoading
    ? `
    background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"]};
    color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted};
  `
    : `
    background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["600"]};
    cursor: pointer;
    color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.contrast};

    :hover {
      border-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["700"]};
      background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["700"]};
      color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.contrast};
    }
    :focus {
      outline: 2px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["600"]};
      outline-offset: 1px;
    }
  `}

  svg {
    padding: 2px 0; /* Match line-height of button body2 typography */
    width: auto;
    height: 16px;
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/buttons/additional-tasks/button-content.ts":
/*!************************************************************************************!*\
  !*** ./src/autofill/content/components/buttons/additional-tasks/button-content.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdditionalTasksButtonContent: function() { return /* binding */ AdditionalTasksButtonContent; },
/* harmony export */   additionalTasksButtonContentStyles: function() { return /* binding */ additionalTasksButtonContentStyles; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons */ "./src/autofill/content/components/icons/index.ts");




function AdditionalTasksButtonContent({ buttonText, theme, }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${additionalTasksButtonContentStyles({ theme })}>
      <span>${buttonText}</span>
      ${(0,_icons__WEBPACK_IMPORTED_MODULE_3__.ExternalLink)({ theme, color: _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.contrast })}
    </div>
  `;
}
const additionalTasksButtonContentStyles = ({ theme }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  gap: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing[2]};
  display: flex;
  align-items: center;
  white-space: nowrap;
`;


/***/ }),

/***/ "./src/autofill/content/components/buttons/badge-button.ts":
/*!*****************************************************************!*\
  !*** ./src/autofill/content/components/buttons/badge-button.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BadgeButton: function() { return /* binding */ BadgeButton; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function BadgeButton({ buttonAction, buttonText, disabled = false, itemName, theme, username, }) {
    const handleButtonClick = (event) => {
        if (!disabled) {
            buttonAction(event);
        }
    };
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <button
      type="button"
      title=${buttonText}
      aria-label=${[buttonText, [itemName, username].filter(Boolean).join(" ")]}
      class=${badgeButtonStyles({ disabled, theme })}
      @click=${handleButtonClick}
    >
      ${buttonText}
    </button>
  `;
}
const badgeButtonStyles = ({ disabled, theme }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.typography.helperMedium}

  user-select: none;
  border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.border.radius.full};
  padding: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["2"]};
  max-height: fit-content;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 500;

  ${disabled
    ? `
    border: 0.5px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"]};
    background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"]};
    color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted};
  `
    : `
    border: 0.5px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["700"]};
    background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["100"]};
    cursor: pointer;
    color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["700"]};

    :hover {
      border-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["600"]};
      background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["600"]};
      color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.contrast};
    }
    :focus {
      outline: 2px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["600"]};
      outline-offset: 2px;
    }
  `}
`;


/***/ }),

/***/ "./src/autofill/content/components/buttons/close-button.ts":
/*!*****************************************************************!*\
  !*** ./src/autofill/content/components/buttons/close-button.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseButton: function() { return /* binding */ CloseButton; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./src/autofill/content/components/icons/index.ts");




function CloseButton({ handleCloseNotification, i18n, theme }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <button
      type="button"
      aria-label=${i18n.close}
      class=${closeButtonStyles(theme)}
      @click=${handleCloseNotification}
    >
      ${(0,_icons__WEBPACK_IMPORTED_MODULE_3__.Close)({ theme })}
    </button>
  `;
}
const closeButtonStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  border: 1px solid transparent;
  border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1"]};
  background-color: transparent;
  cursor: pointer;
  width: 36px;
  height: 36px;

  :hover {
    border: 1px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["600"]};
  }

  > svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/buttons/edit-button.ts":
/*!****************************************************************!*\
  !*** ./src/autofill/content/components/buttons/edit-button.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditButton: function() { return /* binding */ EditButton; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./src/autofill/content/components/icons/index.ts");




function EditButton({ buttonAction, buttonText, disabled = false, theme }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <button
      type="button"
      title=${buttonText}
      aria-label=${buttonText}
      class=${editButtonStyles({ disabled, theme })}
      @click=${(event) => {
        if (!disabled) {
            buttonAction(event);
        }
    }}
    >
      ${(0,_icons__WEBPACK_IMPORTED_MODULE_3__.PencilSquare)({ disabled, theme })}
    </button>
  `;
}
const editButtonStyles = ({ disabled, theme }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.typography.helperMedium}

  user-select: none;
  display: flex;
  border: 1px solid transparent;
  border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1"]};
  background-color: transparent;
  padding: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1"]};
  max-height: fit-content;
  overflow: hidden;

  ${!disabled
    ? `
    cursor: pointer;

    :hover {
      border-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["600"]};
    }
  `
    : ""}

  > svg {
    width: 16px;
    height: fit-content;
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/buttons/option-selection-button.ts":
/*!****************************************************************************!*\
  !*** ./src/autofill/content/components/buttons/option-selection-button.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionSelectionButton: function() { return /* binding */ OptionSelectionButton; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./src/autofill/content/components/icons/index.ts");




function OptionSelectionButton({ disabled, icon, id, text, theme, toggledOn, handleButtonClick, }) {
    const selectedOptionIconProps = { color: _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted, theme };
    const buttonIcon = icon === null || icon === void 0 ? void 0 : icon(selectedOptionIconProps);
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <button
      class=${selectionButtonStyles({ disabled, toggledOn, theme })}
      data-testid="${id}-option-selection"
      title=${text}
      type="button"
      aria-haspopup="menu"
      aria-expanded=${toggledOn}
      aria-controls="option-menu"
      @click=${handleButtonClick}
    >
      ${buttonIcon !== null && buttonIcon !== void 0 ? buttonIcon : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      ${text ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<span class=${dropdownButtonTextStyles}>${text}</span>` : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      ${toggledOn
        ? (0,_icons__WEBPACK_IMPORTED_MODULE_3__.AngleUp)({ color: _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted, theme })
        : (0,_icons__WEBPACK_IMPORTED_MODULE_3__.AngleDown)({ color: _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted, theme })}
    </button>
  `;
}
const iconSize = "16px";
const selectionButtonStyles = ({ disabled, toggledOn, theme, }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.typography.body2}

  gap: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1.5"]};
  user-select: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  columns: ${iconSize} max-content ${iconSize};
  border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.border.radius.full};
  padding: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["2"]};
  max-height: fit-content;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 400;

  ${disabled
    ? `
      border: 1px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"]};
      background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"]};
      cursor: not-allowed;
      color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted};
    `
    : `
      border: 1px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted};
      background-color: ${toggledOn ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["100"] : "transparent"};
      cursor: pointer;
      color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted};

      :hover {
        border-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["700"]};
        background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["100"]};
      }
    `}

  > svg {
    max-width: ${iconSize};
    max-height: ${iconSize};
    height: auto;
  }
`;
const dropdownButtonTextStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  overflow-x: hidden;
  text-overflow: ellipsis;
`;


/***/ }),

/***/ "./src/autofill/content/components/cipher/cipher-action.ts":
/*!*****************************************************************!*\
  !*** ./src/autofill/content/components/cipher/cipher-action.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherAction: function() { return /* binding */ CipherAction; }
/* harmony export */ });
/* harmony import */ var _content_components_buttons_badge_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content/components/buttons/badge-button */ "./src/autofill/content/components/buttons/badge-button.ts");
/* harmony import */ var _content_components_buttons_edit_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../content/components/buttons/edit-button */ "./src/autofill/content/components/buttons/edit-button.ts");
/* harmony import */ var _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../notification/abstractions/notification-bar */ "./src/autofill/notification/abstractions/notification-bar.ts");



function CipherAction({ handleAction = () => {
    /* no-op */
}, i18n, itemName, notificationType, theme, username, }) {
    return notificationType === _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_2__.NotificationTypes.Change
        ? (0,_content_components_buttons_badge_button__WEBPACK_IMPORTED_MODULE_0__.BadgeButton)({
            buttonAction: handleAction,
            buttonText: i18n.notificationUpdate,
            itemName,
            theme,
            username,
        })
        : (0,_content_components_buttons_edit_button__WEBPACK_IMPORTED_MODULE_1__.EditButton)({
            buttonAction: handleAction,
            buttonText: i18n.notificationEditTooltip,
            theme,
        });
}


/***/ }),

/***/ "./src/autofill/content/components/cipher/cipher-icon.ts":
/*!***************************************************************!*\
  !*** ./src/autofill/content/components/cipher/cipher-icon.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherIcon: function() { return /* binding */ CipherIcon; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _content_components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content/components/icons */ "./src/autofill/content/components/icons/index.ts");



/**
 * @param {string} props.color contextual color override if no icon URI is available
 * @param {string} props.size valid CSS `width` value, represents the width-basis of the graphic, with height maintaining original aspect-ratio
 */
function CipherIcon({ color, size, theme, uri }) {
    const iconClass = cipherIconStyle({ width: size });
    return uri
        ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<img class=${iconClass} src=${uri} />`
        : (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<span class=${iconClass}>${(0,_content_components_icons__WEBPACK_IMPORTED_MODULE_2__.Globe)({ color, theme })}</span>`;
}
const cipherIconStyle = ({ width }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  width: ${width};
  height: fit-content;
`;


/***/ }),

/***/ "./src/autofill/content/components/cipher/cipher-indicator-icons.ts":
/*!**************************************************************************!*\
  !*** ./src/autofill/content/components/cipher/cipher-indicator-icons.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherInfoIndicatorIcons: function() { return /* binding */ CipherInfoIndicatorIcons; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _content_components_constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content/components/constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _content_components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../content/components/icons */ "./src/autofill/content/components/icons/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/autofill/content/components/cipher/types.ts");





const cipherIndicatorIconsMap = {
    [_types__WEBPACK_IMPORTED_MODULE_4__.OrganizationCategories.business]: _content_components_icons__WEBPACK_IMPORTED_MODULE_3__.Business,
    [_types__WEBPACK_IMPORTED_MODULE_4__.OrganizationCategories.family]: _content_components_icons__WEBPACK_IMPORTED_MODULE_3__.Family,
};
function CipherInfoIndicatorIcons({ organizationCategories = [], theme, }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <span class=${cipherInfoIndicatorIconsStyles}>
      ${organizationCategories.map((name) => { var _a; return (_a = cipherIndicatorIconsMap[name]) === null || _a === void 0 ? void 0 : _a.call(cipherIndicatorIconsMap, { color: _content_components_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted, theme }); })}
    </span>
  `;
}
const cipherInfoIndicatorIconsStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  > svg {
    width: fit-content;
    height: 12px;
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/cipher/cipher-info.ts":
/*!***************************************************************!*\
  !*** ./src/autofill/content/components/cipher/cipher-info.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherInfo: function() { return /* binding */ CipherInfo; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _content_components_constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content/components/constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _cipher_indicator_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cipher-indicator-icons */ "./src/autofill/content/components/cipher/cipher-indicator-icons.ts");




function CipherInfo({ cipher, theme }) {
    const { name, login, organizationCategories } = cipher;
    const hasIndicatorIcons = organizationCategories === null || organizationCategories === void 0 ? void 0 : organizationCategories.length;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div>
      <span title=${name} class=${cipherInfoPrimaryTextStyles(theme)}>
        ${[
        name,
        hasIndicatorIcons
            ? (0,_cipher_indicator_icons__WEBPACK_IMPORTED_MODULE_3__.CipherInfoIndicatorIcons)({
                theme,
                organizationCategories,
            })
            : lit__WEBPACK_IMPORTED_MODULE_1__.nothing,
    ]}
      </span>

      ${(login === null || login === void 0 ? void 0 : login.username)
        ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<span title=${login.username} class=${cipherInfoSecondaryTextStyles(theme)}
            >${login.username}</span
          >`
        : null}
    </div>
  `;
}
const cipherInfoPrimaryTextStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_2__.typography.body2}

  gap: 2px;
  display: flex;
  display: block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main};
  font-weight: 500;
`;
const cipherInfoSecondaryTextStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_2__.typography.helperMedium}

  display: block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted};
  font-weight: 400;
`;


/***/ }),

/***/ "./src/autofill/content/components/cipher/cipher-item.ts":
/*!***************************************************************!*\
  !*** ./src/autofill/content/components/cipher/cipher-item.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherItem: function() { return /* binding */ CipherItem; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _content_components_constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../content/components/constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../notification/abstractions/notification-bar */ "./src/autofill/notification/abstractions/notification-bar.ts");
/* harmony import */ var _cipher_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cipher-action */ "./src/autofill/content/components/cipher/cipher-action.ts");
/* harmony import */ var _cipher_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cipher-icon */ "./src/autofill/content/components/cipher/cipher-icon.ts");
/* harmony import */ var _cipher_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cipher-info */ "./src/autofill/content/components/cipher/cipher-info.ts");








const cipherIconWidth = "24px";
function CipherItem({ cipher, handleAction, i18n, notificationType, theme = _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__.ThemeTypes.Light, }) {
    const { icon, name, login } = cipher;
    const uri = (icon.imageEnabled && icon.image) || undefined;
    let cipherActionButton = null;
    if (notificationType === _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_4__.NotificationTypes.Change || notificationType === _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_4__.NotificationTypes.Add) {
        cipherActionButton = (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<div>
      ${(0,_cipher_action__WEBPACK_IMPORTED_MODULE_5__.CipherAction)({
            handleAction,
            i18n,
            itemName: name,
            notificationType,
            theme,
            username: login === null || login === void 0 ? void 0 : login.username,
        })}
    </div>`;
    }
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${cipherItemStyles}>
      ${(0,_cipher_icon__WEBPACK_IMPORTED_MODULE_6__.CipherIcon)({ color: _content_components_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].text.muted, size: cipherIconWidth, theme, uri })}
      ${(0,_cipher_info__WEBPACK_IMPORTED_MODULE_7__.CipherInfo)({ theme, cipher })}
    </div>
    ${cipherActionButton}
  `;
}
const cipherItemStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  gap: ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["2"]};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;

  > img,
  > span {
    display: flex;
  }

  > div {
    max-width: calc(100% - ${cipherIconWidth} - ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["2"]});
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/cipher/types.ts":
/*!*********************************************************!*\
  !*** ./src/autofill/content/components/cipher/types.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherRepromptTypes: function() { return /* binding */ CipherRepromptTypes; },
/* harmony export */   CipherTypes: function() { return /* binding */ CipherTypes; },
/* harmony export */   OrganizationCategories: function() { return /* binding */ OrganizationCategories; }
/* harmony export */ });
const CipherTypes = {
    Login: 1,
    SecureNote: 2,
    Card: 3,
    Identity: 4,
};
const CipherRepromptTypes = {
    None: 0,
    Password: 1,
};
const OrganizationCategories = {
    business: "business",
    family: "family",
};


/***/ }),

/***/ "./src/autofill/content/components/constants/styles.ts":
/*!*************************************************************!*\
  !*** ./src/autofill/content/components/constants/styles.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animations: function() { return /* binding */ animations; },
/* harmony export */   border: function() { return /* binding */ border; },
/* harmony export */   buildIconColorRule: function() { return /* binding */ buildIconColorRule; },
/* harmony export */   ruleNames: function() { return /* binding */ ruleNames; },
/* harmony export */   scrollbarStyles: function() { return /* binding */ scrollbarStyles; },
/* harmony export */   spacing: function() { return /* binding */ spacing; },
/* harmony export */   themes: function() { return /* binding */ themes; },
/* harmony export */   typography: function() { return /* binding */ typography; }
/* harmony export */ });
const lightTheme = {
    transparent: {
        hover: `rgb(0 0 0 / 0.02)`,
    },
    shadow: `rgba(168 179 200)`,
    primary: {
        100: `rgba(219, 229, 246)`,
        300: `rgba(121, 161, 233)`,
        600: `rgba(23, 93, 220)`,
        700: `rgba(26, 65, 172)`,
    },
    secondary: {
        100: `rgba(230, 233, 239)`,
        300: `rgba(168, 179, 200)`,
        500: `rgba(90, 109, 145)`,
        600: `rgba(83, 99, 131)`,
        700: `rgba(63, 75, 99)`,
    },
    success: {
        100: `rgba(219, 229, 246)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(26, 65, 172)`,
    },
    danger: {
        100: `rgba(255, 236, 239)`,
        600: `rgba(203, 38, 58)`,
        700: `rgba(149, 27, 42)`,
    },
    warning: {
        100: `rgba(255, 248, 228)`,
        600: `rgba(255, 191, 0)`,
        700: `rgba(172, 88, 0)`,
    },
    info: {
        100: `rgba(219, 229, 246)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(26, 65, 172)`,
    },
    art: {
        primary: `rgba(2, 15, 102)`,
        accent: `rgba(44, 221, 223)`,
    },
    text: {
        main: `rgba(27, 32, 41)`,
        muted: `rgba(90, 109, 145)`,
        contrast: `rgba(255, 255, 255)`,
        alt2: `rgba(255, 255, 255)`,
        code: `rgba(192, 17, 118)`,
    },
    background: {
        DEFAULT: `rgba(255, 255, 255)`,
        alt: `rgba(243, 246, 249)`,
        alt2: `rgba(23, 92, 219)`,
        alt3: `rgba(26, 65, 172)`,
        alt4: `rgba(2, 15, 102)`,
    },
    brandLogo: `rgba(23, 93, 220)`,
};
const darkTheme = {
    transparent: {
        hover: `rgb(255 255 255 / 0.02)`,
    },
    shadow: `rgba(0, 0, 0)`,
    primary: {
        100: `rgba(26, 39, 78)`,
        300: `rgba(26, 65, 172)`,
        600: `rgba(101, 171, 255)`,
        700: `rgba(170, 195, 239)`,
    },
    secondary: {
        100: `rgba(48, 57, 70)`,
        300: `rgba(82, 91, 106)`,
        500: `rgba(121, 128, 142)`,
        600: `rgba(143, 152, 166)`,
        700: `rgba(158, 167, 181)`,
    },
    success: {
        100: `rgba(11, 111, 21)`,
        600: `rgba(107, 241, 120)`,
        700: `rgba(191, 236, 195)`,
    },
    danger: {
        100: `rgba(149, 27, 42)`,
        600: `rgba(255, 78, 99)`,
        700: `rgba(255, 236, 239)`,
    },
    warning: {
        100: `rgba(172, 88, 0)`,
        600: `rgba(255, 191, 0)`,
        700: `rgba(255, 248, 228)`,
    },
    info: {
        100: `rgba(26, 65, 172)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(219, 229, 246)`,
    },
    art: {
        primary: `rgba(243, 246, 249)`,
        accent: `rgba(44, 221, 233)`,
    },
    text: {
        main: `rgba(243, 246, 249)`,
        muted: `rgba(136, 152, 181)`,
        contrast: `rgba(18 26 39)`,
        alt2: `rgba(255, 255, 255)`,
        code: `rgba(255, 143, 208)`,
    },
    background: {
        DEFAULT: `rgba(32, 39, 51)`,
        alt: `rgba(18, 26, 39)`,
        alt2: `rgba(47, 52, 61)`,
        alt3: `rgba(48, 57, 70)`,
        alt4: `rgba(18, 26, 39)`,
    },
    brandLogo: `rgba(255, 255, 255)`,
};
const themes = {
    light: lightTheme,
    dark: darkTheme,
    // For compatibility
    system: lightTheme,
};
const spacing = {
    4: `16px`,
    3: `12px`,
    2: `8px`,
    "1.5": `6px`,
    1: `4px`,
};
const border = {
    radius: {
        large: `8px`,
        full: `9999px`,
    },
};
const typography = {
    body1: `
    line-height: 24px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
  `,
    body2: `
    line-height: 20px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
  `,
    helperMedium: `
    line-height: 16px;
    font-family: Roboto, sans-serif;
    font-size: 12px;
  `,
};
const ruleNames = {
    fill: "fill",
    stroke: "stroke",
};
/*
 * `color` is an intentionally generic name here, since either fill or stroke may apply, due to
 * inconsistent SVG construction. This consequently precludes dynamic multi-colored icons here.
 */
const buildIconColorRule = (color, rule = ruleNames.fill) => `
  ${rule}: ${color};
`;
const animations = {
    spin: `
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  `,
};
function scrollbarStyles(theme, color) {
    const thumbColor = (color === null || color === void 0 ? void 0 : color.thumb) || themes[theme].secondary["500"];
    const trackColor = (color === null || color === void 0 ? void 0 : color.track) || themes[theme].background.alt;
    return {
        /* FireFox & Chrome support */
        default: `
      scrollbar-color: ${thumbColor} ${trackColor};
    `,
        /* Safari Support */
        safari: `
      ::-webkit-scrollbar {
        overflow: auto;
      }
      ::-webkit-scrollbar-thumb {
        border-width: 4px;
        border-style: solid;
        border-radius: 0.5rem;
        border-color: transparent;
        background-clip: content-box;
        background-color: ${thumbColor};
      }
      ::-webkit-scrollbar-track {
        ${trackColor};
      }
      ::-webkit-scrollbar-thumb:hover {
        ${themes[theme].secondary["600"]};
      }
    `,
    };
}


/***/ }),

/***/ "./src/autofill/content/components/icons/angle-down.ts":
/*!*************************************************************!*\
  !*** ./src/autofill/content/components/icons/angle-down.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDown: function() { return /* binding */ AngleDown; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function AngleDown({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M13.53.47a.75.75 0 0 0-1.06 0L7 5.94 1.53.47A.75.75 0 1 0 .47 1.53l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/angle-up.ts":
/*!***********************************************************!*\
  !*** ./src/autofill/content/components/icons/angle-up.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleUp: function() { return /* binding */ AngleUp; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function AngleUp({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M.47 7.53a.75.75 0 0 0 1.06 0L7 2.06l5.47 5.47a.75.75 0 1 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/brand-icon-container.ts":
/*!***********************************************************************!*\
  !*** ./src/autofill/content/components/icons/brand-icon-container.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandIconContainer: function() { return /* binding */ BrandIconContainer; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _shield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shield */ "./src/autofill/content/components/icons/shield.ts");



function BrandIconContainer({ iconLink, theme }) {
    const Icon = (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<div class=${brandIconContainerStyles}>${(0,_shield__WEBPACK_IMPORTED_MODULE_2__.Shield)({ theme })}</div>`;
    return iconLink ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<a href="${iconLink}" target="_blank" rel="noreferrer">${Icon}</a>` : Icon;
}
const brandIconContainerStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;

  > svg {
    width: auto;
    height: 100%;
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/icons/business.ts":
/*!***********************************************************!*\
  !*** ./src/autofill/content/components/icons/business.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Business: function() { return /* binding */ Business; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function Business({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M3.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM7.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM7.25 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM6.5 9.75A.75.75 0 0 1 7.25 9h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM2.5 6.75A.75.75 0 0 1 3.25 6h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM3.25 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
      />
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        fill-rule="evenodd"
        d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm.5 1.5v13H4V13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5h2.5v-13h-9Z"
        clip-rule="evenodd"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/close.ts":
/*!********************************************************!*\
  !*** ./src/autofill/content/components/icons/close.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Close: function() { return /* binding */ Close; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function Close({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M.22.22a.75.75 0 0 1 1.06 0L7 5.94 12.72.22a.75.75 0 1 1 1.06 1.06L8.06 7l5.72 5.72a.75.75 0 1 1-1.06 1.06L7 8.06l-5.72 5.72a.75.75 0 0 1-1.06-1.06L5.94 7 .22 1.28a.75.75 0 0 1 0-1.06Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/collection-shared.ts":
/*!********************************************************************!*\
  !*** ./src/autofill/content/components/icons/collection-shared.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionShared: function() { return /* binding */ CollectionShared; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function CollectionShared({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M3.5.75A.75.75 0 0 1 4.25 0h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 3.5.75ZM2.25 2a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5ZM6 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 11.46a1.928 1.928 0 0 0-.586-1.386 2.035 2.035 0 0 0-2.828 0A1.928 1.928 0 0 0 3 11.461c0 .298.241.539.54.539h2.92a.54.54 0 0 0 .54-.54ZM8 11.46a2.928 2.928 0 0 0-.371-1.426A2.005 2.005 0 0 1 9 9.5a2.035 2.035 0 0 1 1.414.574A1.928 1.928 0 0 1 11 11.461a.54.54 0 0 1-.54.539H7.904c.063-.168.097-.35.097-.54Z"
      />
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        fill-rule="evenodd"
        d="M12 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10Zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h10Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/exclamation-triangle.ts":
/*!***********************************************************************!*\
  !*** ./src/autofill/content/components/icons/exclamation-triangle.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExclamationTriangle: function() { return /* binding */ ExclamationTriangle; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function ExclamationTriangle({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11Z"
      />
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M7.31639 5C7.01564 5 6.78295 5.26359 6.82025 5.56202L7.19525 8.56202C7.22653 8.81223 7.43923 9 7.69139 9H8.30861C8.56077 9 8.77347 8.81223 8.80475 8.56202L9.17975 5.56202C9.21705 5.26359 8.98436 5 8.68361 5H7.31639Z"
      />
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.37384 1.01584C8.76324 -0.04174 7.23675 -0.041739 6.62616 1.01584L0.2149 12.1205C-0.395695 13.1781 0.36755 14.5 1.58874 14.5H14.4113C15.6325 14.5 16.3957 13.1781 15.7851 12.1205L9.37384 1.01584ZM14.4861 12.8705L8.0748 1.76584C8.06066 1.74135 8.05029 1.7355 8.04562 1.73291C8.03694 1.7281 8.02122 1.72266 8 1.72266C7.97878 1.72266 7.96305 1.7281 7.95438 1.73291C7.94971 1.7355 7.93934 1.74135 7.9252 1.76584L1.51394 12.8705C1.4998 12.895 1.49992 12.9069 1.50001 12.9122C1.50018 12.9221 1.50333 12.9385 1.51394 12.9568C1.52455 12.9752 1.53713 12.9861 1.54563 12.9912C1.55021 12.994 1.56046 13 1.58874 13H14.4113C14.4395 13 14.4498 12.994 14.4544 12.9912C14.4629 12.9861 14.4754 12.9752 14.4861 12.9568C14.4967 12.9385 14.4998 12.9221 14.5 12.9122C14.5001 12.9069 14.5002 12.895 14.4861 12.8705Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/external-link.ts":
/*!****************************************************************!*\
  !*** ./src/autofill/content/components/icons/external-link.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalLink: function() { return /* binding */ ExternalLink; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function ExternalLink({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M1.5 2.75c0-.69.56-1.25 1.25-1.25h3.5a.75.75 0 0 0 0-1.5h-3.5A2.75 2.75 0 0 0 0 2.75v8.5A2.75 2.75 0 0 0 2.75 14h8.5A2.75 2.75 0 0 0 14 11.25v-3.5a.75.75 0 0 0-1.5 0v3.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
      />
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M9.75 0a.75.75 0 0 0 0 1.5h1.69L7.22 5.72a.75.75 0 0 0 1.06 1.06l4.22-4.22v1.69a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.75-.75h-3.5Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/family.ts":
/*!*********************************************************!*\
  !*** ./src/autofill/content/components/icons/family.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Family: function() { return /* binding */ Family; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function Family({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        fill-rule="evenodd"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.47 6.47 0 0 1-.932 3.356 3.732 3.732 0 0 0-1.106-.784 3.547 3.547 0 0 0-.516-.19 2 2 0 1 0-3.444-1.297c-.323-.216-.681-.4-1.069-.536a2.5 2.5 0 1 0-3.065-.155 5.405 5.405 0 0 0-1.59.674 3.912 3.912 0 0 0-.977.893A6.5 6.5 0 1 1 14.5 8ZM2.531 11.514a.75.75 0 0 0 .103-.13c.276-.436.552-.801.942-1.047a3.837 3.837 0 0 1 1.177-.492 5.243 5.243 0 0 1 .845-.095h.007l.022.001h.023c.436 0 .865.07 1.262.205.381.13.733.335 1.037.584.175.143.324.3.448.465l.164.226a4.13 4.13 0 0 0-1.035 1.565 4.407 4.407 0 0 0-.276 1.537c0 .043.004.085.01.125a6.5 6.5 0 0 1-4.729-2.944Zm10.033.964.07.08a6.481 6.481 0 0 1-3.894 1.9.757.757 0 0 0 .01-.125c0-.35.062-.694.181-1.013a2.63 2.63 0 0 1 .505-.842c.213-.237.462-.42.73-.543.267-.123.55-.185.834-.185.284 0 .567.062.835.185.267.123.516.306.729.543ZM7 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/folder.ts":
/*!*********************************************************!*\
  !*** ./src/autofill/content/components/icons/folder.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Folder: function() { return /* binding */ Folder; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function Folder({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 13"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M2 0a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8L6.586.586A2 2 0 0 0 5.172 0H2Zm5.379 3.5L5.525 1.646a.5.5 0 0 0-.353-.146H2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H7.379Z"
        fill-rule="evenodd"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/globe.ts":
/*!********************************************************!*\
  !*** ./src/autofill/content/components/icons/globe.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Globe: function() { return /* binding */ Globe; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function Globe({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 14.5c.23 0 .843-.226 1.487-1.514.524-1.048.906-2.526.994-4.236H5.519c.088 1.71.47 3.188.994 4.236C7.157 14.274 7.77 14.5 8 14.5ZM5.52 7.25h4.96c-.087-1.71-.47-3.188-.993-4.236C8.843 1.726 8.23 1.5 8 1.5c-.23 0-.843.226-1.487 1.514C5.99 4.062 5.607 5.54 5.52 7.25Zm6.463 0h2.474a6.506 6.506 0 0 0-3.766-5.168c.718 1.305 1.197 3.125 1.292 5.168Zm-7.966 0c.095-2.043.574-3.863 1.292-5.168A6.506 6.506 0 0 0 1.543 7.25h2.474Zm7.966 1.5c-.095 2.043-.574 3.863-1.292 5.168a6.506 6.506 0 0 0 3.766-5.168h-2.474Zm-6.677 5.185c-.718-1.305-1.197-3.125-1.292-5.168H1.54a6.506 6.506 0 0 0 3.766 5.168Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/index.ts":
/*!********************************************************!*\
  !*** ./src/autofill/content/components/icons/index.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDown: function() { return /* reexport safe */ _angle_down__WEBPACK_IMPORTED_MODULE_0__.AngleDown; },
/* harmony export */   AngleUp: function() { return /* reexport safe */ _angle_up__WEBPACK_IMPORTED_MODULE_1__.AngleUp; },
/* harmony export */   BrandIconContainer: function() { return /* reexport safe */ _brand_icon_container__WEBPACK_IMPORTED_MODULE_2__.BrandIconContainer; },
/* harmony export */   Business: function() { return /* reexport safe */ _business__WEBPACK_IMPORTED_MODULE_3__.Business; },
/* harmony export */   Close: function() { return /* reexport safe */ _close__WEBPACK_IMPORTED_MODULE_4__.Close; },
/* harmony export */   CollectionShared: function() { return /* reexport safe */ _collection_shared__WEBPACK_IMPORTED_MODULE_5__.CollectionShared; },
/* harmony export */   ExclamationTriangle: function() { return /* reexport safe */ _exclamation_triangle__WEBPACK_IMPORTED_MODULE_6__.ExclamationTriangle; },
/* harmony export */   ExternalLink: function() { return /* reexport safe */ _external_link__WEBPACK_IMPORTED_MODULE_7__.ExternalLink; },
/* harmony export */   Family: function() { return /* reexport safe */ _family__WEBPACK_IMPORTED_MODULE_8__.Family; },
/* harmony export */   Folder: function() { return /* reexport safe */ _folder__WEBPACK_IMPORTED_MODULE_9__.Folder; },
/* harmony export */   Globe: function() { return /* reexport safe */ _globe__WEBPACK_IMPORTED_MODULE_10__.Globe; },
/* harmony export */   PencilSquare: function() { return /* reexport safe */ _pencil_square__WEBPACK_IMPORTED_MODULE_11__.PencilSquare; },
/* harmony export */   Shield: function() { return /* reexport safe */ _shield__WEBPACK_IMPORTED_MODULE_12__.Shield; },
/* harmony export */   Spinner: function() { return /* reexport safe */ _spinner__WEBPACK_IMPORTED_MODULE_13__.Spinner; },
/* harmony export */   User: function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_14__.User; }
/* harmony export */ });
/* harmony import */ var _angle_down__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angle-down */ "./src/autofill/content/components/icons/angle-down.ts");
/* harmony import */ var _angle_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angle-up */ "./src/autofill/content/components/icons/angle-up.ts");
/* harmony import */ var _brand_icon_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brand-icon-container */ "./src/autofill/content/components/icons/brand-icon-container.ts");
/* harmony import */ var _business__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./business */ "./src/autofill/content/components/icons/business.ts");
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./close */ "./src/autofill/content/components/icons/close.ts");
/* harmony import */ var _collection_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection-shared */ "./src/autofill/content/components/icons/collection-shared.ts");
/* harmony import */ var _exclamation_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exclamation-triangle */ "./src/autofill/content/components/icons/exclamation-triangle.ts");
/* harmony import */ var _external_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./external-link */ "./src/autofill/content/components/icons/external-link.ts");
/* harmony import */ var _family__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./family */ "./src/autofill/content/components/icons/family.ts");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./folder */ "./src/autofill/content/components/icons/folder.ts");
/* harmony import */ var _globe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./globe */ "./src/autofill/content/components/icons/globe.ts");
/* harmony import */ var _pencil_square__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pencil-square */ "./src/autofill/content/components/icons/pencil-square.ts");
/* harmony import */ var _shield__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shield */ "./src/autofill/content/components/icons/shield.ts");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spinner */ "./src/autofill/content/components/icons/spinner.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user */ "./src/autofill/content/components/icons/user.ts");

















/***/ }),

/***/ "./src/autofill/content/components/icons/pencil-square.ts":
/*!****************************************************************!*\
  !*** ./src/autofill/content/components/icons/pencil-square.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PencilSquare: function() { return /* binding */ PencilSquare; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function PencilSquare({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M11.013.677a1.75 1.75 0 0 1 2.474 0l.836.836a1.75 1.75 0 0 1 0 2.475L9.03 9.28a.75.75 0 0 1-.348.197l-3 .75a.75.75 0 0 1-.91-.91l.75-3a.75.75 0 0 1 .198-.348L11.013.677Zm1.414 1.06a.25.25 0 0 0-.354 0l-.646.647a.75.75 0 0 1 .103.086l1 1a.751.751 0 0 1 .087.103l.646-.646a.25.25 0 0 0 0-.353l-.836-.836Zm-.854 2.88a.752.752 0 0 1-.103-.087l-1-1a.756.756 0 0 1-.087-.103L6.928 6.884 6.531 8.47l1.586-.397 3.456-3.456Z"
      />
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M2.75 2.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-3.5a.75.75 0 0 1 1.5 0v3.5A2.75 2.75 0 0 1 11.25 15h-8.5A2.75 2.75 0 0 1 0 12.25v-8.5A2.75 2.75 0 0 1 2.75 1h3.5a.75.75 0 0 1 0 1.5h-3.5Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/shield.ts":
/*!*********************************************************!*\
  !*** ./src/autofill/content/components/icons/shield.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shield: function() { return /* binding */ Shield; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function Shield({ ariaHidden = true, color, theme }) {
    const shapeColor = color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].brandLogo;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M13.469.2A.647.647 0 0 0 13 0H1a.639.639 0 0 0-.468.2.641.641 0 0 0-.2.468v8a4.81 4.81 0 0 0 .348 1.777c.216.557.507 1.083.865 1.563.367.48.779.925 1.229 1.329.417.383.857.741 1.317 1.073.4.284.82.553 1.26.807.44.254.75.425.932.515.183.09.33.16.44.208.087.041.181.062.277.06a.58.58 0 0 0 .27-.063c.113-.05.259-.118.444-.208s.5-.262.932-.515c.432-.253.857-.523 1.26-.807.46-.332.9-.69 1.319-1.073.45-.404.861-.849 1.228-1.33.357-.48.648-1.005.865-1.562a4.79 4.79 0 0 0 .348-1.777v-8A.63.63 0 0 0 13.47.2Zm-1.547 8.54c0 2.9-4.921 5.392-4.921 5.392V1.714h4.92v7.027Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/icons/spinner.ts":
/*!**********************************************************!*\
  !*** ./src/autofill/content/components/icons/spinner.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spinner: function() { return /* binding */ Spinner; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function Spinner({ ariaHidden = true, color, disabled, theme, disableSpin = false, }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      class=${disableSpin ? "" : animation}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14.5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM11.536 11.536a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12ZM9.5 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM0 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM4.464 13.657a1.5 1.5 0 1 1-2.12-2.121 1.5 1.5 0 0 1 2.12 2.12ZM2.343 2.343a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.12-2.12Z"
      />
    </svg>
  `;
}
const animation = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  animation: ${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_constants_styles__WEBPACK_IMPORTED_MODULE_2__.animations.spin)} 2s infinite linear;
`;


/***/ }),

/***/ "./src/autofill/content/components/icons/user.ts":
/*!*******************************************************!*\
  !*** ./src/autofill/content/components/icons/user.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: function() { return /* binding */ User; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function User({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["300"] : color || _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 15"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)((0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.buildIconColorRule)(shapeColor, _constants_styles__WEBPACK_IMPORTED_MODULE_2__.ruleNames.fill))}
        d="M9.203 7.339a4 4 0 1 0-4.407 0A7.033 7.033 0 0 0 2.05 8.953a6.655 6.655 0 0 0-1.517 2.162A6.393 6.393 0 0 0 0 13.667C0 14.403.597 15 1.333 15h11.334c.736 0 1.333-.597 1.333-1.333 0-.876-.181-1.743-.533-2.552a6.654 6.654 0 0 0-1.517-2.162 7.032 7.032 0 0 0-2.747-1.614ZM9.5 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2.592 7.714c.247.57.384 1.175.405 1.786H1.503a4.897 4.897 0 0 1 .405-1.786 5.156 5.156 0 0 1 1.177-1.675 5.534 5.534 0 0 1 1.787-1.136A5.805 5.805 0 0 1 7 8.5c.732 0 1.456.137 2.128.403.673.265 1.28.652 1.787 1.136a5.156 5.156 0 0 1 1.177 1.675Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/illustrations/celebrate.ts":
/*!********************************************************************!*\
  !*** ./src/autofill/content/components/illustrations/celebrate.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Celebrate: function() { return /* binding */ Celebrate; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");


// This icon has static multi-colors for each theme
function Celebrate({ theme }) {
    if (theme === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Dark) {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
        <path
          d="M32.6273 37.2714L3.88045 49.2492C2.98525 49.6222 1.95344 49.4181 1.26769 48.7323C0.581933 48.0466 0.377816 47.0148 0.750816 46.1196L12.7287 17.3728C13.622 15.2288 15.9911 14.1069 18.2158 14.7743L19.0257 15.0173C26.6887 17.3161 32.6839 23.3113 34.9828 30.9743L35.2257 31.7842C35.8931 34.0089 34.7712 36.3781 32.6273 37.2714Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.6426 44.7649C12.9332 43.4627 11.2495 41.9951 9.62721 40.3728C8.00492 38.7505 6.53732 37.0668 5.23507 35.3574L5.74088 34.1434C7.10571 35.9897 8.67231 37.8151 10.4286 39.5714C12.1848 41.3277 14.0103 42.8943 15.8566 44.2591L14.6426 44.7649ZM9.86079 46.7574C8.69632 45.7641 7.54698 44.7037 6.42165 43.5783C5.29632 42.453 4.23589 41.3037 3.24264 40.1392L2.755 41.3095C3.65901 42.3487 4.6147 43.3741 5.62028 44.3797C6.62586 45.3853 7.65127 46.341 8.69048 47.245L9.86079 46.7574ZM21.0629 42.0898C18.5607 40.5957 16.0508 38.6488 13.701 36.299C11.3512 33.9492 9.40432 31.4393 7.91017 28.9371L8.45815 27.622C9.94515 30.2728 11.9779 32.973 14.5024 35.4976C17.027 38.0221 19.7272 40.0548 22.378 41.5418L21.0629 42.0898ZM10.9297 21.6902C11.8698 25.118 14.18 28.9793 17.6004 32.3996C21.0207 35.82 24.882 38.1302 28.3098 39.0703L30.1472 38.3047C29.5643 38.2191 28.9477 38.0815 28.3004 37.8889C25.1702 36.9575 21.6052 34.8017 18.4018 31.5982C15.1983 28.3948 13.0425 24.8297 12.1111 21.6996C11.9185 21.0523 11.7809 20.4357 11.6953 19.8528L10.9297 21.6902Z"
          fill="#F3F6F9"
        />
        <path
          d="M27.706 22.294C32.3531 26.9411 34.6852 32.1435 32.9149 33.9138C31.1445 35.6842 25.9421 33.3521 21.295 28.7049C16.6479 24.0578 14.3158 18.8554 16.0861 17.085C17.8564 15.3147 23.0588 17.6468 27.706 22.294Z"
          fill="#79A1E9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.6828 29.6463C30.8097 27.6986 29.1563 25.347 26.9046 23.0953C24.6529 20.8436 22.3013 19.1902 20.3536 18.3171C19.376 17.8788 18.5567 17.6628 17.9359 17.6303C17.3148 17.5979 17.0236 17.7503 16.8875 17.8864C16.7514 18.0225 16.5989 18.3138 16.6314 18.9349C16.6638 19.5556 16.8799 20.3749 17.3182 21.3526C18.1912 23.3003 19.8447 25.6519 22.0964 27.9035C24.3481 30.1552 26.6996 31.8087 28.6473 32.6818C29.625 33.12 30.4443 33.3361 31.0651 33.3685C31.6862 33.401 31.9774 33.2486 32.1135 33.1125C32.2496 32.9763 32.402 32.6851 32.3696 32.064C32.3371 31.4433 32.1211 30.624 31.6828 29.6463ZM32.9149 33.9138C34.6852 32.1435 32.3531 26.9411 27.706 22.294C23.0588 17.6468 17.8564 15.3147 16.0861 17.085C14.3158 18.8554 16.6479 24.0578 21.295 28.7049C25.9421 33.3521 31.1445 35.6842 32.9149 33.9138Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.053 15.3169C16.1064 14.7329 14.0334 15.7146 13.2517 17.5906L1.2739 46.3374C0.989218 47.0206 1.14501 47.8081 1.66839 48.3315C2.19178 48.8549 2.97928 49.0107 3.66253 48.726L32.4093 36.7482C34.2853 35.9665 35.267 33.8935 34.683 31.9469L34.44 31.137C32.1959 23.6565 26.3434 17.804 18.8629 15.5599L18.053 15.3169ZM12.2056 17.1547C13.2106 14.7428 15.8759 13.4806 18.3786 14.2314L19.1886 14.4744C27.034 16.828 33.1719 22.9659 35.5256 30.8113L35.7685 31.6213C36.5193 34.124 35.2571 36.7893 32.8452 37.7943L4.09841 49.7721C2.99125 50.2335 1.71514 49.981 0.867022 49.1329C0.0189018 48.2848 -0.233545 47.0087 0.227771 45.9015L12.2056 17.1547Z"
          fill="#175DDC"
        />
        <path
          d="M24.65 0.331121C24.6952 0.137206 24.8681 0 25.0672 0C25.2663 0 25.4391 0.137206 25.4843 0.331121L25.5055 0.421998C25.7994 1.68306 26.784 2.66773 28.0451 2.9616L28.136 2.98277C28.3299 3.02796 28.4671 3.20082 28.4671 3.39993C28.4671 3.59904 28.3299 3.77189 28.136 3.81708L28.0451 3.83826C26.784 4.13212 25.7994 5.11679 25.5055 6.37786L25.4843 6.46873C25.4391 6.66265 25.2663 6.79985 25.0672 6.79985C24.8681 6.79985 24.6952 6.66265 24.65 6.46873L24.6288 6.37786C24.335 5.11679 23.3503 4.13212 22.0892 3.83826L21.9984 3.81708C21.8044 3.77189 21.6672 3.59904 21.6672 3.39993C21.6672 3.20082 21.8044 3.02796 21.9984 2.98277L22.0892 2.9616C23.3503 2.66773 24.335 1.68306 24.6288 0.421997L24.65 0.331121Z"
          fill="#175DDC"
        />
        <path
          d="M46.183 8.83088C46.2282 8.63696 46.401 8.49976 46.6001 8.49976C46.7992 8.49976 46.9721 8.63696 47.0173 8.83088L47.0385 8.92175C47.3323 10.1828 48.317 11.1675 49.5781 11.4614L49.6689 11.4825C49.8628 11.5277 50 11.7006 50 11.8997C50 12.0988 49.8628 12.2716 49.6689 12.3168L49.5781 12.338C48.317 12.6319 47.3323 13.6165 47.0385 14.8776L47.0173 14.9685C46.9721 15.1624 46.7992 15.2996 46.6001 15.2996C46.401 15.2996 46.2282 15.1624 46.183 14.9685L46.1618 14.8776C45.8679 13.6165 44.8833 12.6319 43.6222 12.338L43.5313 12.3168C43.3374 12.2716 43.2002 12.0988 43.2002 11.8997C43.2002 11.7006 43.3374 11.5277 43.5313 11.4825L43.6222 11.4614C44.8833 11.1675 45.8679 10.1828 46.1618 8.92175L46.183 8.83088Z"
          fill="#175DDC"
        />
        <path
          d="M38.8164 43.3968C38.8616 43.2029 39.0344 43.0657 39.2335 43.0657C39.4327 43.0657 39.6055 43.2029 39.6507 43.3968L39.6719 43.4877C39.9657 44.7487 40.9504 45.7334 42.2115 46.0273L42.3024 46.0484C42.4963 46.0936 42.6335 46.2665 42.6335 46.4656C42.6335 46.6647 42.4963 46.8376 42.3024 46.8828L42.2115 46.9039C40.9504 47.1978 39.9657 48.1825 39.6719 49.4435L39.6507 49.5344C39.6055 49.7283 39.4327 49.8655 39.2335 49.8655C39.0344 49.8655 38.8616 49.7283 38.8164 49.5344L38.7952 49.4435C38.5013 48.1825 37.5167 47.1978 36.2556 46.9039L36.1647 46.8828C35.9708 46.8376 35.8336 46.6647 35.8336 46.4656C35.8336 46.2665 35.9708 46.0936 36.1647 46.0484L36.2556 46.0273C37.5167 45.7334 38.5013 44.7487 38.7952 43.4877L38.8164 43.3968Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.5439 27.4056C41.9949 25.8565 39.4834 25.8565 37.9343 27.4056C37.713 27.6269 37.3543 27.6269 37.133 27.4056C36.9117 27.1843 36.9117 26.8255 37.133 26.6042C39.1246 24.6126 42.3537 24.6126 44.3453 26.6042C44.5666 26.8255 44.5666 27.1843 44.3453 27.4056C44.124 27.6269 43.7652 27.6269 43.5439 27.4056Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.1043 21.7127C42.8784 19.8502 38.7535 20.9555 36.891 24.1814C36.7346 24.4524 36.388 24.5452 36.117 24.3888C35.8459 24.2323 35.7531 23.8857 35.9096 23.6147C38.085 19.8468 42.903 18.5558 46.671 20.7312C46.942 20.8877 47.0349 21.2342 46.8784 21.5053C46.7219 21.7763 46.3753 21.8691 46.1043 21.7127Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.4675 7.93311C13.6582 7.93311 15.4341 9.70901 15.4341 11.8997C15.4341 12.2127 15.6878 12.4664 16.0007 12.4664C16.3137 12.4664 16.5674 12.2127 16.5674 11.8997C16.5674 9.0831 14.2841 6.7998 11.4675 6.7998C11.1545 6.7998 10.9008 7.0535 10.9008 7.36646C10.9008 7.67941 11.1545 7.93311 11.4675 7.93311Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.553 3.36429C16.6057 4.12949 17.6494 6.41384 16.8842 8.46654C16.7749 8.75978 16.924 9.08612 17.2173 9.19543C17.5105 9.30475 17.8368 9.15564 17.9462 8.8624C18.93 6.22322 17.5881 3.28619 14.9489 2.30236C14.6556 2.19305 14.3293 2.34215 14.22 2.63539C14.1107 2.92864 14.2598 3.25497 14.553 3.36429Z"
          fill="#175DDC"
        />
        <path
          d="M34.7004 9.63307C34.7004 10.8849 33.6856 11.8997 32.4337 11.8997C31.1819 11.8997 30.1671 10.8849 30.1671 9.63307C30.1671 8.38125 31.1819 7.36646 32.4337 7.36646C33.6856 7.36646 34.7004 8.38125 34.7004 9.63307Z"
          fill="#79A1E9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.4337 10.7664C33.0596 10.7664 33.567 10.259 33.567 9.63307C33.567 9.00716 33.0596 8.49976 32.4337 8.49976C31.8078 8.49976 31.3004 9.00716 31.3004 9.63307C31.3004 10.259 31.8078 10.7664 32.4337 10.7664ZM32.4337 11.8997C33.6856 11.8997 34.7004 10.8849 34.7004 9.63307C34.7004 8.38125 33.6856 7.36646 32.4337 7.36646C31.1819 7.36646 30.1671 8.38125 30.1671 9.63307C30.1671 10.8849 31.1819 11.8997 32.4337 11.8997Z"
          fill="#175DDC"
        />
        <path
          d="M38.1002 16.4329C38.1002 17.3717 37.3391 18.1328 36.4003 18.1328C35.4614 18.1328 34.7003 17.3717 34.7003 16.4329C34.7003 15.494 35.4614 14.7329 36.4003 14.7329C37.3391 14.7329 38.1002 15.494 38.1002 16.4329Z"
          fill="#AAC3EF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.4003 16.9995C36.7132 16.9995 36.9669 16.7458 36.9669 16.4329C36.9669 16.1199 36.7132 15.8662 36.4003 15.8662C36.0873 15.8662 35.8336 16.1199 35.8336 16.4329C35.8336 16.7458 36.0873 16.9995 36.4003 16.9995ZM36.4003 18.1328C37.3391 18.1328 38.1002 17.3717 38.1002 16.4329C38.1002 15.494 37.3391 14.7329 36.4003 14.7329C35.4614 14.7329 34.7003 15.494 34.7003 16.4329C34.7003 17.3717 35.4614 18.1328 36.4003 18.1328Z"
          fill="#175DDC"
        />
        <path
          d="M31.8671 44.199C31.8671 45.1379 31.106 45.899 30.1671 45.899C29.2283 45.899 28.4672 45.1379 28.4672 44.199C28.4672 43.2601 29.2283 42.499 30.1671 42.499C31.106 42.499 31.8671 43.2601 31.8671 44.199Z"
          fill="#AAC3EF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.1671 44.7656C30.4801 44.7656 30.7338 44.5119 30.7338 44.199C30.7338 43.886 30.4801 43.6323 30.1671 43.6323C29.8542 43.6323 29.6005 43.886 29.6005 44.199C29.6005 44.5119 29.8542 44.7656 30.1671 44.7656ZM30.1671 45.899C31.106 45.899 31.8671 45.1379 31.8671 44.199C31.8671 43.2601 31.106 42.499 30.1671 42.499C29.2283 42.499 28.4672 43.2601 28.4672 44.199C28.4672 45.1379 29.2283 45.899 30.1671 45.899Z"
          fill="#175DDC"
        />
        <path
          d="M47.7334 33.9993C47.7334 35.5641 46.4649 36.8326 44.9002 36.8326C43.3354 36.8326 42.0669 35.5641 42.0669 33.9993C42.0669 32.4345 43.3354 31.166 44.9002 31.166C46.4649 31.166 47.7334 32.4345 47.7334 33.9993Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.9002 35.6993C45.839 35.6993 46.6001 34.9382 46.6001 33.9993C46.6001 33.0604 45.839 32.2993 44.9002 32.2993C43.9613 32.2993 43.2002 33.0604 43.2002 33.9993C43.2002 34.9382 43.9613 35.6993 44.9002 35.6993ZM44.9002 36.8326C46.4649 36.8326 47.7334 35.5641 47.7334 33.9993C47.7334 32.4345 46.4649 31.166 44.9002 31.166C43.3354 31.166 42.0669 32.4345 42.0669 33.9993C42.0669 35.5641 43.3354 36.8326 44.9002 36.8326Z"
          fill="#175DDC"
        />
        <path
          d="M29.0337 13.3163C29.0337 14.4116 28.1458 15.2996 27.0504 15.2996C25.9551 15.2996 25.0671 14.4116 25.0671 13.3163C25.0671 12.221 25.9551 11.333 27.0504 11.333C28.1458 11.333 29.0337 12.221 29.0337 13.3163Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.0504 14.1663C27.5199 14.1663 27.9004 13.7857 27.9004 13.3163C27.9004 12.8469 27.5199 12.4663 27.0504 12.4663C26.581 12.4663 26.2004 12.8469 26.2004 13.3163C26.2004 13.7857 26.581 14.1663 27.0504 14.1663ZM27.0504 15.2996C28.1458 15.2996 29.0337 14.4116 29.0337 13.3163C29.0337 12.221 28.1458 11.333 27.0504 11.333C25.9551 11.333 25.0671 12.221 25.0671 13.3163C25.0671 14.4116 25.9551 15.2996 27.0504 15.2996Z"
          fill="#175DDC"
        />
        <path
          d="M45.4667 3.96658C45.4667 6.15726 43.6908 7.93316 41.5002 7.93316C39.3095 7.93316 37.5336 6.15726 37.5336 3.96658C37.5336 1.7759 39.3095 0 41.5002 0C43.6908 0 45.4667 1.7759 45.4667 3.96658Z"
          fill="#F3F6F9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M41.5002 6.79985C43.0649 6.79985 44.3334 5.53136 44.3334 3.96658C44.3334 2.40181 43.0649 1.13331 41.5002 1.13331C39.9354 1.13331 38.6669 2.40181 38.6669 3.96658C38.6669 5.53136 39.9354 6.79985 41.5002 6.79985ZM41.5002 7.93316C43.6908 7.93316 45.4667 6.15726 45.4667 3.96658C45.4667 1.7759 43.6908 0 41.5002 0C39.3095 0 37.5336 1.7759 37.5336 3.96658C37.5336 6.15726 39.3095 7.93316 41.5002 7.93316Z"
          fill="#175DDC"
        />
      </svg>
    `;
    }
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
      <path
        d="M32.6275 37.2714L3.88069 49.2492C2.98549 49.6222 1.95368 49.4181 1.26793 48.7323C0.582178 48.0466 0.37806 47.0148 0.751061 46.1196L12.7289 17.3728C13.6222 15.2288 15.9914 14.1069 18.216 14.7743L19.026 15.0173C26.6889 17.3161 32.6841 23.3113 34.983 30.9743L35.226 31.7842C35.8934 34.0089 34.7714 36.3781 32.6275 37.2714Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6425 44.7649C12.9331 43.4627 11.2494 41.9951 9.62709 40.3728C8.00479 38.7505 6.53719 37.0668 5.23494 35.3574L5.74076 34.1434C7.10558 35.9897 8.67219 37.8151 10.4285 39.5714C12.1847 41.3277 14.0102 42.8943 15.8565 44.2591L14.6425 44.7649ZM9.86067 46.7574C8.6962 45.7641 7.54686 44.7037 6.42153 43.5783C5.2962 42.453 4.23577 41.3037 3.24251 40.1392L2.75488 41.3095C3.65889 42.3487 4.61458 43.3741 5.62016 44.3797C6.62574 45.3853 7.65114 46.341 8.69036 47.245L9.86067 46.7574ZM21.0628 42.0898C18.5605 40.5957 16.0507 38.6488 13.7009 36.299C11.3511 33.9492 9.40419 31.4393 7.91005 28.9371L8.45802 27.622C9.94503 30.2728 11.9777 32.973 14.5023 35.4976C17.0268 38.0221 19.7271 40.0548 22.3779 41.5418L21.0628 42.0898ZM10.9296 21.6902C11.8696 25.118 14.1799 28.9793 17.6003 32.3996C21.0206 35.82 24.8819 38.1302 28.3097 39.0703L30.1471 38.3047C29.5641 38.2191 28.9476 38.0815 28.3003 37.8889C25.1701 36.9575 21.6051 34.8017 18.4016 31.5982C15.1982 28.3948 13.0424 24.8297 12.111 21.6996C11.9184 21.0523 11.7808 20.4357 11.6952 19.8528L10.9296 21.6902Z"
        fill="white"
      />
      <path
        d="M27.7062 22.294C32.3534 26.9411 34.6855 32.1435 32.9151 33.9138C31.1448 35.6842 25.9424 33.3521 21.2952 28.7049C16.6481 24.0578 14.316 18.8554 16.0863 17.085C17.8567 15.3147 23.0591 17.6468 27.7062 22.294Z"
        fill="#99BAF4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.6831 29.6463C30.81 27.6986 29.1565 25.347 26.9048 23.0953C24.6532 20.8436 22.3016 19.1902 20.3539 18.3171C19.3762 17.8788 18.5569 17.6628 17.9362 17.6303C17.3151 17.5979 17.0238 17.7503 16.8877 17.8864C16.7516 18.0225 16.5992 18.3138 16.6316 18.9349C16.6641 19.5556 16.8801 20.3749 17.3184 21.3526C18.1915 23.3003 19.8449 25.6519 22.0966 27.9035C24.3483 30.1552 26.6999 31.8087 28.6476 32.6818C29.6253 33.12 30.4446 33.3361 31.0653 33.3685C31.6864 33.401 31.9776 33.2486 32.1138 33.1125C32.2499 32.9763 32.4023 32.6851 32.3698 32.064C32.3374 31.4433 32.1213 30.624 31.6831 29.6463ZM32.9151 33.9138C34.6855 32.1435 32.3534 26.9411 27.7062 22.294C23.0591 17.6468 17.8567 15.3147 16.0863 17.085C14.316 18.8554 16.6481 24.0578 21.2952 28.7049C25.9424 33.3521 31.1448 35.6842 32.9151 33.9138Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.053 15.317C16.1064 14.733 14.0334 15.7148 13.2517 17.5907L1.2739 46.3375C0.989218 47.0207 1.14501 47.8083 1.66839 48.3316C2.19178 48.855 2.97928 49.0108 3.66253 48.7261L32.4093 36.7483C34.2853 35.9666 35.267 33.8936 34.683 31.947L34.44 31.1371C32.1959 23.6566 26.3434 17.8041 18.8629 15.56L18.053 15.317ZM12.2056 17.1548C13.2106 14.7429 15.8759 13.4807 18.3786 14.2315L19.1886 14.4745C27.034 16.8281 33.1719 22.966 35.5256 30.8115L35.7685 31.6214C36.5193 34.1241 35.2571 36.7895 32.8452 37.7944L4.09841 49.7723C2.99125 50.2336 1.71514 49.9811 0.867022 49.133C0.0189018 48.2849 -0.233545 47.0088 0.227771 45.9016L12.2056 17.1548Z"
        fill="#0E3781"
      />
      <path
        d="M24.6503 0.331121C24.6954 0.137206 24.8683 0 25.0674 0C25.2665 0 25.4394 0.137206 25.4846 0.331121L25.5057 0.421998C25.7996 1.68306 26.7843 2.66773 28.0453 2.9616L28.1362 2.98277C28.3301 3.02796 28.4673 3.20082 28.4673 3.39993C28.4673 3.59904 28.3301 3.77189 28.1362 3.81708L28.0453 3.83826C26.7843 4.13212 25.7996 5.11679 25.5057 6.37786L25.4846 6.46873C25.4394 6.66265 25.2665 6.79985 25.0674 6.79985C24.8683 6.79985 24.6954 6.66265 24.6503 6.46873L24.6291 6.37786C24.3352 5.11679 23.3505 4.13212 22.0895 3.83826L21.9986 3.81708C21.8047 3.77189 21.6675 3.59904 21.6675 3.39993C21.6675 3.20082 21.8047 3.02796 21.9986 2.98277L22.0895 2.9616C23.3505 2.66773 24.3352 1.68306 24.6291 0.421997L24.6503 0.331121Z"
        fill="#0E3781"
      />
      <path
        d="M46.183 8.831C46.2282 8.63708 46.401 8.49988 46.6001 8.49988C46.7992 8.49988 46.9721 8.63708 47.0173 8.831L47.0385 8.92188C47.3323 10.1829 48.317 11.1676 49.5781 11.4615L49.6689 11.4827C49.8628 11.5278 50 11.7007 50 11.8998C50 12.0989 49.8628 12.2718 49.6689 12.317L49.5781 12.3381C48.317 12.632 47.3323 13.6167 47.0385 14.8777L47.0173 14.9686C46.9721 15.1625 46.7992 15.2997 46.6001 15.2997C46.401 15.2997 46.2282 15.1625 46.183 14.9686L46.1618 14.8777C45.8679 13.6167 44.8833 12.632 43.6222 12.3381L43.5313 12.317C43.3374 12.2718 43.2002 12.0989 43.2002 11.8998C43.2002 11.7007 43.3374 11.5278 43.5313 11.4827L43.6222 11.4615C44.8833 11.1676 45.8679 10.1829 46.1618 8.92188L46.183 8.831Z"
        fill="#0E3781"
      />
      <path
        d="M38.8163 43.3969C38.8615 43.203 39.0343 43.0658 39.2334 43.0658C39.4325 43.0658 39.6054 43.203 39.6506 43.3969L39.6718 43.4878C39.9656 44.7489 40.9503 45.7335 42.2114 46.0274L42.3022 46.0486C42.4961 46.0938 42.6334 46.2666 42.6334 46.4657C42.6334 46.6648 42.4961 46.8377 42.3022 46.8829L42.2114 46.9041C40.9503 47.1979 39.9656 48.1826 39.6718 49.4437L39.6506 49.5345C39.6054 49.7284 39.4325 49.8657 39.2334 49.8657C39.0343 49.8657 38.8615 49.7284 38.8163 49.5345L38.7951 49.4437C38.5012 48.1826 37.5166 47.1979 36.2555 46.9041L36.1646 46.8829C35.9707 46.8377 35.8335 46.6648 35.8335 46.4657C35.8335 46.2666 35.9707 46.0938 36.1646 46.0486L36.2555 46.0274C37.5166 45.7335 38.5012 44.7489 38.7951 43.4878L38.8163 43.3969Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.5441 27.4057C41.995 25.8567 39.4835 25.8567 37.9345 27.4057C37.7132 27.627 37.3544 27.627 37.1331 27.4057C36.9118 27.1844 36.9118 26.8256 37.1331 26.6043C39.1247 24.6127 42.3538 24.6127 44.3454 26.6043C44.5667 26.8256 44.5667 27.1844 44.3454 27.4057C44.1241 27.627 43.7653 27.627 43.5441 27.4057Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.1044 21.7127C42.8786 19.8502 38.7536 20.9555 36.8912 24.1814C36.7347 24.4524 36.3881 24.5452 36.1171 24.3888C35.8461 24.2323 35.7532 23.8857 35.9097 23.6147C38.0851 19.8468 42.9032 18.5558 46.6711 20.7312C46.9421 20.8877 47.035 21.2342 46.8785 21.5053C46.722 21.7763 46.3755 21.8691 46.1044 21.7127Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4675 7.93311C13.6582 7.93311 15.4341 9.70901 15.4341 11.8997C15.4341 12.2127 15.6878 12.4664 16.0007 12.4664C16.3137 12.4664 16.5674 12.2127 16.5674 11.8997C16.5674 9.0831 14.2841 6.7998 11.4675 6.7998C11.1545 6.7998 10.9008 7.0535 10.9008 7.36646C10.9008 7.67941 11.1545 7.93311 11.4675 7.93311Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.553 3.36429C16.6057 4.12949 17.6494 6.41384 16.8842 8.46654C16.7749 8.75978 16.924 9.08612 17.2173 9.19543C17.5105 9.30475 17.8368 9.15564 17.9462 8.8624C18.93 6.22322 17.5881 3.28619 14.9489 2.30236C14.6556 2.19305 14.3293 2.34215 14.22 2.63539C14.1107 2.92864 14.2598 3.25497 14.553 3.36429Z"
        fill="#0E3781"
      />
      <path
        d="M34.7002 9.63307C34.7002 10.8849 33.6854 11.8997 32.4336 11.8997C31.1818 11.8997 30.167 10.8849 30.167 9.63307C30.167 8.38125 31.1818 7.36646 32.4336 7.36646C33.6854 7.36646 34.7002 8.38125 34.7002 9.63307Z"
        fill="#99BAF4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.4336 10.7664C33.0595 10.7664 33.5669 10.259 33.5669 9.63307C33.5669 9.00716 33.0595 8.49976 32.4336 8.49976C31.8077 8.49976 31.3003 9.00716 31.3003 9.63307C31.3003 10.259 31.8077 10.7664 32.4336 10.7664ZM32.4336 11.8997C33.6854 11.8997 34.7002 10.8849 34.7002 9.63307C34.7002 8.38125 33.6854 7.36646 32.4336 7.36646C31.1818 7.36646 30.167 8.38125 30.167 9.63307C30.167 10.8849 31.1818 11.8997 32.4336 11.8997Z"
        fill="#0E3781"
      />
      <path
        d="M38.1001 16.433C38.1001 17.3719 37.339 18.133 36.4002 18.133C35.4613 18.133 34.7002 17.3719 34.7002 16.433C34.7002 15.4941 35.4613 14.733 36.4002 14.733C37.339 14.733 38.1001 15.4941 38.1001 16.433Z"
        fill="#DBE5F6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.4002 16.9997C36.7131 16.9997 36.9668 16.746 36.9668 16.433C36.9668 16.12 36.7131 15.8663 36.4002 15.8663C36.0872 15.8663 35.8335 16.12 35.8335 16.433C35.8335 16.746 36.0872 16.9997 36.4002 16.9997ZM36.4002 18.133C37.339 18.133 38.1001 17.3719 38.1001 16.433C38.1001 15.4941 37.339 14.733 36.4002 14.733C35.4613 14.733 34.7002 15.4941 34.7002 16.433C34.7002 17.3719 35.4613 18.133 36.4002 18.133Z"
        fill="#0E3781"
      />
      <path
        d="M31.8672 44.1991C31.8672 45.138 31.1061 45.8991 30.1672 45.8991C29.2284 45.8991 28.4673 45.138 28.4673 44.1991C28.4673 43.2602 29.2284 42.4991 30.1672 42.4991C31.1061 42.4991 31.8672 43.2602 31.8672 44.1991Z"
        fill="#DBE5F6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.1672 44.7658C30.4802 44.7658 30.7339 44.5121 30.7339 44.1991C30.7339 43.8862 30.4802 43.6325 30.1672 43.6325C29.8543 43.6325 29.6006 43.8862 29.6006 44.1991C29.6006 44.5121 29.8543 44.7658 30.1672 44.7658ZM30.1672 45.8991C31.1061 45.8991 31.8672 45.138 31.8672 44.1991C31.8672 43.2602 31.1061 42.4991 30.1672 42.4991C29.2284 42.4991 28.4673 43.2602 28.4673 44.1991C28.4673 45.138 29.2284 45.8991 30.1672 45.8991Z"
        fill="#0E3781"
      />
      <path
        d="M47.7334 33.9993C47.7334 35.5641 46.4649 36.8326 44.9002 36.8326C43.3354 36.8326 42.0669 35.5641 42.0669 33.9993C42.0669 32.4345 43.3354 31.166 44.9002 31.166C46.4649 31.166 47.7334 32.4345 47.7334 33.9993Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.9002 35.6993C45.839 35.6993 46.6001 34.9382 46.6001 33.9993C46.6001 33.0604 45.839 32.2993 44.9002 32.2993C43.9613 32.2993 43.2002 33.0604 43.2002 33.9993C43.2002 34.9382 43.9613 35.6993 44.9002 35.6993ZM44.9002 36.8326C46.4649 36.8326 47.7334 35.5641 47.7334 33.9993C47.7334 32.4345 46.4649 31.166 44.9002 31.166C43.3354 31.166 42.0669 32.4345 42.0669 33.9993C42.0669 35.5641 43.3354 36.8326 44.9002 36.8326Z"
        fill="#0E3781"
      />
      <path
        d="M29.034 13.3164C29.034 14.4118 28.146 15.2997 27.0507 15.2997C25.9553 15.2997 25.0674 14.4118 25.0674 13.3164C25.0674 12.2211 25.9553 11.3331 27.0507 11.3331C28.146 11.3331 29.034 12.2211 29.034 13.3164Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0507 14.1664C27.5201 14.1664 27.9007 13.7859 27.9007 13.3164C27.9007 12.847 27.5201 12.4664 27.0507 12.4664C26.5812 12.4664 26.2007 12.847 26.2007 13.3164C26.2007 13.7859 26.5812 14.1664 27.0507 14.1664ZM27.0507 15.2997C28.146 15.2997 29.034 14.4118 29.034 13.3164C29.034 12.2211 28.146 11.3331 27.0507 11.3331C25.9553 11.3331 25.0674 12.2211 25.0674 13.3164C25.0674 14.4118 25.9553 15.2997 27.0507 15.2997Z"
        fill="#0E3781"
      />
      <path
        d="M45.4669 3.96658C45.4669 6.15726 43.691 7.93316 41.5003 7.93316C39.3096 7.93316 37.5337 6.15726 37.5337 3.96658C37.5337 1.7759 39.3096 0 41.5003 0C43.691 0 45.4669 1.7759 45.4669 3.96658Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.5003 6.79985C43.065 6.79985 44.3335 5.53136 44.3335 3.96658C44.3335 2.40181 43.065 1.13331 41.5003 1.13331C39.9355 1.13331 38.667 2.40181 38.667 3.96658C38.667 5.53136 39.9355 6.79985 41.5003 6.79985ZM41.5003 7.93316C43.691 7.93316 45.4669 6.15726 45.4669 3.96658C45.4669 1.7759 43.691 0 41.5003 0C39.3096 0 37.5337 1.7759 37.5337 3.96658C37.5337 6.15726 39.3096 7.93316 41.5003 7.93316Z"
        fill="#0E3781"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/illustrations/index.ts":
/*!****************************************************************!*\
  !*** ./src/autofill/content/components/illustrations/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Celebrate: function() { return /* reexport safe */ _celebrate__WEBPACK_IMPORTED_MODULE_0__.Celebrate; },
/* harmony export */   Keyhole: function() { return /* reexport safe */ _keyhole__WEBPACK_IMPORTED_MODULE_1__.Keyhole; },
/* harmony export */   Warning: function() { return /* reexport safe */ _warning__WEBPACK_IMPORTED_MODULE_2__.Warning; }
/* harmony export */ });
/* harmony import */ var _celebrate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./celebrate */ "./src/autofill/content/components/illustrations/celebrate.ts");
/* harmony import */ var _keyhole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyhole */ "./src/autofill/content/components/illustrations/keyhole.ts");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning */ "./src/autofill/content/components/illustrations/warning.ts");





/***/ }),

/***/ "./src/autofill/content/components/illustrations/keyhole.ts":
/*!******************************************************************!*\
  !*** ./src/autofill/content/components/illustrations/keyhole.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keyhole: function() { return /* binding */ Keyhole; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");


// This icon has static multi-colors for each theme
function Keyhole({ theme }) {
    if (theme === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Dark) {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
        <path
          fill="#79A1E9"
          fill-rule="evenodd"
          d="M64.985 64.083c-.363-1.654.37-3.337 1.72-4.36C74.175 54.063 79 45.095 79 35 79 17.88 65.12 4 48 4 30.88 4 17 17.88 17 35c0 10.095 4.825 19.063 12.295 24.723 1.35 1.023 2.083 2.706 1.72 4.36l-5.947 27.058A4 4 0 0 0 28.975 96h38.05a4 4 0 0 0 3.907-4.859l-5.947-27.058Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
          clip-rule="evenodd"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M20.864 50H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M22.07 48H46a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2H20c-.051 0-.102.002-.151.006A29.072 29.072 0 0 0 19 35c0 4.678 1.106 9.092 3.07 13Zm-1.206 2H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
          clip-rule="evenodd"
        />
        <path
          fill="#79A1E9"
          d="M18 31h30v4H18v-4ZM21 44a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM29 44a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M78.954 33.303A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M76.99 34.262A1.987 1.987 0 0 0 76 34H50a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h19.91a28.88 28.88 0 0 0 7.08-19.738Zm1.964-.959A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          d="M66 39a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM66 43a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
        />
        <path fill="#F3F6F9" d="M62 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M58 42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          clip-rule="evenodd"
        />
        <path
          fill="#F3F6F9"
          d="M65.391 48.269c.402 1.035.609 1.86.609 2.981a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75c0-1.12.207-1.946.609-2.981a8.593 8.593 0 0 1 1.734-2.77 7.987 7.987 0 0 1 2.595-1.85C55.91 43.222 56.95 43 58 43c1.05 0 2.09.22 3.062.65a7.987 7.987 0 0 1 2.595 1.85 8.593 8.593 0 0 1 1.734 2.769Z"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M52.343 45.5a8.593 8.593 0 0 0-1.734 2.769c-.402 1.035-.609 1.86-.609 2.981 0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75c0-1.12-.207-1.946-.609-2.981a8.593 8.593 0 0 0-1.734-2.77 7.987 7.987 0 0 0-2.595-1.85A7.569 7.569 0 0 0 58 43c-1.05 0-2.09.22-3.062.65a7.987 7.987 0 0 0-2.595 1.85ZM63.857 50a8.12 8.12 0 0 0-.33-1.008 6.593 6.593 0 0 0-1.33-2.124l1.414-1.326-1.413 1.325a5.986 5.986 0 0 0-1.945-1.388A5.568 5.568 0 0 0 58 45c-.77 0-1.535.161-2.253.479a5.986 5.986 0 0 0-1.945 1.389 6.593 6.593 0 0 0-1.329 2.124 8.12 8.12 0 0 0-.33 1.008h11.714Z"
          clip-rule="evenodd"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M67.604 76H48a8 8 0 0 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Zm-38.769-2H50a8 8 0 1 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c1.35 1.023 2.083 2.706 1.72 4.36L28.835 74Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M29.628 60c1.134 1.034 1.719 2.571 1.387 4.083L28.835 74H50a8 8 0 1 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c.116.088.227.18.333.277Zm2.562 0c.792 1.307 1.134 2.894.778 4.513L31.322 72H50a6 6 0 1 0 0-12H32.19Zm33.806 18H48a6 6 0 0 0 0 12h20.633l-2.637-12Zm1.608-2H48a8 8 0 0 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="m69.06 82.627-1.056.346v-1.4a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167.883-.29-.431-1.962ZM29.819 69.526a.996.996 0 0 0 .376-.318l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4a1 1 0 0 0-.95-.999c.08.493.072 1.002-.04 1.51l-1.195 5.442Zm11.186-5.953a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm0 18a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
          clip-rule="evenodd"
        />
        <path
          fill="#FFBF00"
          d="M60 12c0 6.627-5.373 12-12 12s-12-5.373-12-12S41.373 0 48 0s12 5.373 12 12Z"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M48 22c5.523 0 10-4.477 10-10S53.523 2 48 2 38 6.477 38 12s4.477 10 10 10Zm0 2c6.627 0 12-5.373 12-12S54.627 0 48 0 36 5.373 36 12s5.373 12 12 12Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M53.707 8.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L46 14.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
          clip-rule="evenodd"
        />
      </svg>
    `;
    }
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path
        fill="#99BAF4"
        fill-rule="evenodd"
        d="M64.985 64.083c-.363-1.654.37-3.337 1.72-4.36C74.175 54.063 79 45.095 79 35 79 17.88 65.12 4 48 4 30.88 4 17 17.88 17 35c0 10.095 4.825 19.063 12.295 24.723 1.35 1.023 2.083 2.706 1.72 4.36l-5.947 27.058A4 4 0 0 0 28.975 96h38.05a4 4 0 0 0 3.907-4.859l-5.947-27.058Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
        clip-rule="evenodd"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M20.864 50H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M22.07 48H46a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2H20c-.051 0-.102.002-.151.006A29.072 29.072 0 0 0 19 35c0 4.678 1.106 9.092 3.07 13Zm-1.206 2H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
        clip-rule="evenodd"
      />
      <path
        fill="#99BAF4"
        d="M18 31h30v4H18v-4ZM21 44a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM29 44a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M78.954 33.303A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M76.99 34.262A1.987 1.987 0 0 0 76 34H50a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h19.91a28.88 28.88 0 0 0 7.08-19.738Zm1.964-.959A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        d="M66 39a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM66 43a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
      />
      <path fill="#fff" d="M62 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M58 42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="M65.391 48.269c.402 1.035.609 1.86.609 2.981a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75c0-1.12.207-1.946.609-2.981a8.593 8.593 0 0 1 1.734-2.77 7.987 7.987 0 0 1 2.595-1.85C55.91 43.222 56.95 43 58 43c1.05 0 2.09.22 3.062.65a7.987 7.987 0 0 1 2.595 1.85 8.593 8.593 0 0 1 1.734 2.769Z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M52.343 45.5a8.593 8.593 0 0 0-1.734 2.769c-.402 1.035-.609 1.86-.609 2.981 0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75c0-1.12-.207-1.946-.609-2.981a8.593 8.593 0 0 0-1.734-2.77 7.987 7.987 0 0 0-2.595-1.85A7.569 7.569 0 0 0 58 43c-1.05 0-2.09.22-3.062.65a7.987 7.987 0 0 0-2.595 1.85ZM63.857 50a8.12 8.12 0 0 0-.33-1.008 6.593 6.593 0 0 0-1.33-2.124l1.414-1.326-1.413 1.325a5.986 5.986 0 0 0-1.945-1.388A5.568 5.568 0 0 0 58 45c-.77 0-1.535.161-2.253.479a5.986 5.986 0 0 0-1.945 1.389 6.593 6.593 0 0 0-1.329 2.124 8.12 8.12 0 0 0-.33 1.008h11.714Z"
        clip-rule="evenodd"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M67.605 76H48a8 8 0 1 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Zm-38.77-2H50a8 8 0 0 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c1.35 1.023 2.083 2.706 1.72 4.36L28.835 74Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M29.628 60c1.134 1.034 1.72 2.571 1.387 4.083L28.835 74H50a8 8 0 0 0 0-16H27.215a31.117 31.117 0 0 0 2.08 1.723c.116.088.227.18.333.277Zm2.562 0c.792 1.307 1.134 2.894.778 4.513L31.322 72H50a6 6 0 0 0 0-12H32.19Zm33.806 18H48a6 6 0 0 0 0 12h20.634l-2.638-12Zm1.609-2H48a8 8 0 1 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="m69.06 82.627-1.056.346v-1.4a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 1 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167.883-.29-.431-1.962ZM29.819 69.526a.995.995 0 0 0 .376-.318l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4a1 1 0 0 0-.95-.999c.08.493.072 1.002-.04 1.51l-1.196 5.442Zm11.186-5.953a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm0 18a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
        clip-rule="evenodd"
      />
      <path
        fill="#FFBF00"
        d="M60 12c0 6.627-5.373 12-12 12s-12-5.373-12-12S41.373 0 48 0s12 5.373 12 12Z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M48 22c5.523 0 10-4.477 10-10S53.523 2 48 2 38 6.477 38 12s4.477 10 10 10Zm0 2c6.627 0 12-5.373 12-12S54.627 0 48 0 36 5.373 36 12s5.373 12 12 12Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M53.707 8.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L46 14.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
        clip-rule="evenodd"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/illustrations/warning.ts":
/*!******************************************************************!*\
  !*** ./src/autofill/content/components/illustrations/warning.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Warning: function() { return /* binding */ Warning; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");

// This icon has static multi-colors for each theme
function Warning() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
      <path
        fill="#FFBF00"
        d="M11.717.999a1.975 1.975 0 0 0-3.434 0l-8.014 14c-.764 1.333.19 3 1.717 3h16.028c1.527 0 2.48-1.667 1.717-3zm6.713 14.745-8.014-14a.475.475 0 0 0-.832 0l-8.014 14a.5.5 0 0 0 .416.755h16.028a.5.5 0 0 0 .416-.755z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M11.717 1a1.975 1.975 0 0 0-3.434 0L.269 15c-.764 1.333.19 3 1.717 3h16.028c1.527 0 2.48-1.667 1.717-3L11.717 1Zm6.713 14.745-8.014-14a.475.475 0 0 0-.832 0l-8.014 14a.5.5 0 0 0 .416.755h16.028a.5.5 0 0 0 .416-.755Z"
      />
      <path
        fill="#0E3781"
        d="M11.25 13.587c0 .697-.56 1.261-1.25 1.261s-1.25-.564-1.25-1.26c0-.697.56-1.261 1.25-1.261s1.25.564 1.25 1.26ZM9.003 6.023a.5.5 0 0 0-.496.561l.501 4.043a.5.5 0 0 0 .496.439h.992a.5.5 0 0 0 .496-.439l.5-4.043a.5.5 0 0 0-.495-.561H9.003Z"
      />
    </svg>
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/notification/at-risk-password/body.ts":
/*!*******************************************************************************!*\
  !*** ./src/autofill/content/components/notification/at-risk-password/body.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtRiskNotificationBody: function() { return /* binding */ AtRiskNotificationBody; },
/* harmony export */   componentClassPrefix: function() { return /* binding */ componentClassPrefix; }
/* harmony export */ });
/* harmony import */ var _emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css/create-instance */ "../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _illustrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../illustrations */ "./src/autofill/content/components/illustrations/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/autofill/content/components/notification/at-risk-password/message.ts");





const componentClassPrefix = "at-risk-notification-body";
const { css } = (0,_emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: componentClassPrefix,
});
function AtRiskNotificationBody({ riskMessage, theme }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${atRiskNotificationBodyStyles({ theme })}>
      <div class=${iconContainerStyles}>${(0,_illustrations__WEBPACK_IMPORTED_MODULE_3__.Warning)()}</div>
      ${riskMessage
        ? (0,_message__WEBPACK_IMPORTED_MODULE_4__.AtRiskNotificationMessage)({
            message: riskMessage,
            theme,
        })
        : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
    </div>
  `;
}
const iconContainerStyles = css `
  > svg {
    width: 50px;
    height: auto;
  }
`;
const atRiskNotificationBodyStyles = ({ theme }) => css `
  gap: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].background.alt};
  padding: 12px;
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/at-risk-password/container.ts":
/*!************************************************************************************!*\
  !*** ./src/autofill/content/components/notification/at-risk-password/container.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtRiskNotification: function() { return /* binding */ AtRiskNotification; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header */ "./src/autofill/content/components/notification/header.ts");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body */ "./src/autofill/content/components/notification/at-risk-password/body.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./src/autofill/content/components/notification/at-risk-password/footer.ts");







function AtRiskNotification({ handleCloseNotification, i18n, theme = _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__.ThemeTypes.Light, params, }) {
    const { passwordChangeUri, organizationName } = params;
    const riskMessage = chrome.i18n.getMessage(passwordChangeUri ? "atRiskChangePrompt" : "atRiskNavigatePrompt", organizationName);
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${atRiskNotificationContainerStyles(theme)}>
      ${(0,_header__WEBPACK_IMPORTED_MODULE_4__.NotificationHeader)({
        handleCloseNotification,
        i18n,
        message: i18n.atRiskPassword,
        theme,
    })}
      ${(0,_body__WEBPACK_IMPORTED_MODULE_5__.AtRiskNotificationBody)({
        theme,
        riskMessage,
    })}
      ${passwordChangeUri
        ? (0,_footer__WEBPACK_IMPORTED_MODULE_6__.AtRiskNotificationFooter)({
            i18n,
            theme,
            passwordChangeUri: params === null || params === void 0 ? void 0 : params.passwordChangeUri,
        })
        : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
    </div>
  `;
}
const atRiskNotificationContainerStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: absolute;
  right: 20px;
  border: 1px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].secondary["300"]};
  border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].background.alt};
  width: 400px;
  overflow: hidden;

  [class*="${_header__WEBPACK_IMPORTED_MODULE_4__.componentClassPrefix}-"] {
    border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["4"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["4"]} 0 0;
    border-bottom: 0.5px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].secondary["300"]};
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/at-risk-password/footer.ts":
/*!*********************************************************************************!*\
  !*** ./src/autofill/content/components/notification/at-risk-password/footer.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtRiskNotificationFooter: function() { return /* binding */ AtRiskNotificationFooter; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _buttons_action_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttons/action-button */ "./src/autofill/content/components/buttons/action-button.ts");
/* harmony import */ var _buttons_additional_tasks_button_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../buttons/additional-tasks/button-content */ "./src/autofill/content/components/buttons/additional-tasks/button-content.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/styles */ "./src/autofill/content/components/constants/styles.ts");





function AtRiskNotificationFooter({ i18n, theme, passwordChangeUri, }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<div class=${atRiskNotificationFooterStyles}>
    ${passwordChangeUri &&
        (0,_buttons_action_button__WEBPACK_IMPORTED_MODULE_2__.ActionButton)({
            handleClick: () => {
                open(passwordChangeUri, "_blank");
            },
            buttonText: (0,_buttons_additional_tasks_button_content__WEBPACK_IMPORTED_MODULE_3__.AdditionalTasksButtonContent)({ buttonText: i18n.changePassword, theme }),
            theme,
            fullWidth: false,
        })}
  </div>`;
}
const atRiskNotificationFooterStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  padding: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing[2]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing[4]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing[4]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing[4]};

  :last-child {
    border-radius: 0 0 ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["4"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["4"]};
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/at-risk-password/message.ts":
/*!**********************************************************************************!*\
  !*** ./src/autofill/content/components/notification/at-risk-password/message.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtRiskNotificationMessage: function() { return /* binding */ AtRiskNotificationMessage; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function AtRiskNotificationMessage({ message, theme }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div>
      ${message
        ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
            <span title=${message} class=${atRiskNotificationMessageStyles(theme)}>
              ${message}
            </span>
          `
        : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
    </div>
  `;
}
const baseTextStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 24px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
`;
const atRiskNotificationMessageStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${baseTextStyles}

  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main};
  font-weight: 400;
  white-space: normal;
  word-break: break-word;
  display: inline;
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/body.ts":
/*!**************************************************************!*\
  !*** ./src/autofill/content/components/notification/body.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationBody: function() { return /* binding */ NotificationBody; },
/* harmony export */   componentClassPrefix: function() { return /* binding */ componentClassPrefix; }
/* harmony export */ });
/* harmony import */ var _emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css/create-instance */ "../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _rows_cipher_item_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rows/cipher-item-row */ "./src/autofill/content/components/rows/cipher-item-row.ts");





const componentClassPrefix = "notification-body";
const { css } = (0,_emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: componentClassPrefix,
});
function NotificationBody({ ciphers = [], i18n, notificationType, theme = _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__.ThemeTypes.Light, handleEditOrUpdateAction, }) {
    // @TODO get client vendor from context
    const isSafari = false;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${notificationBodyStyles({ isSafari, theme })}>
      ${ciphers.map((cipher) => (0,_rows_cipher_item_row__WEBPACK_IMPORTED_MODULE_4__.CipherItemRow)({
        cipher,
        theme,
        i18n,
        notificationType,
        handleAction: handleEditOrUpdateAction,
    }))}
    </div>
  `;
}
const notificationBodyStyles = ({ isSafari, theme }) => css `
  ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.typography.body1}

  gap: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["1.5"]};
  display: flex;
  flex-flow: column;
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].background.alt};
  max-height: 123px;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].text.main};
  font-weight: 400;

  :last-child {
    border-radius: 0 0 ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["4"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["4"]};
  }

  ${isSafari ? (0,_constants_styles__WEBPACK_IMPORTED_MODULE_3__.scrollbarStyles)(theme).safari : (0,_constants_styles__WEBPACK_IMPORTED_MODULE_3__.scrollbarStyles)(theme).default}
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/button-row.ts":
/*!********************************************************************!*\
  !*** ./src/autofill/content/components/notification/button-row.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationButtonRow: function() { return /* binding */ NotificationButtonRow; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./src/autofill/content/components/icons/index.ts");
/* harmony import */ var _rows_button_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rows/button-row */ "./src/autofill/content/components/rows/button-row.ts");
/* harmony import */ var _signals_selected_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signals/selected-collection */ "./src/autofill/content/components/signals/selected-collection.ts");
/* harmony import */ var _signals_selected_folder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signals/selected-folder */ "./src/autofill/content/components/signals/selected-folder.ts");
/* harmony import */ var _signals_selected_vault__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../signals/selected-vault */ "./src/autofill/content/components/signals/selected-vault.ts");







function getVaultIconByProductTier(productTierType) {
    switch (productTierType) {
        case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_1__.ProductTierType.Free:
        case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_1__.ProductTierType.Families:
            return _icons__WEBPACK_IMPORTED_MODULE_2__.Family;
        case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_1__.ProductTierType.Teams:
        case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_1__.ProductTierType.Enterprise:
        case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_1__.ProductTierType.TeamsStarter:
            return _icons__WEBPACK_IMPORTED_MODULE_2__.Business;
        default:
            return _icons__WEBPACK_IMPORTED_MODULE_2__.User;
    }
}
// Value represents default selector state outside of data-driven state
const defaultNoneSelectValue = "0";
function NotificationButtonRow({ collections, folders, i18n, organizations, primaryButton, personalVaultIsAllowed, theme, }) {
    const currentUserVaultOption = {
        icon: _icons__WEBPACK_IMPORTED_MODULE_2__.User,
        default: true,
        text: i18n.myVault,
        value: defaultNoneSelectValue,
    };
    // Do not include user vault if disallowed by org policy
    const initialVaultOptions = [
        ...(personalVaultIsAllowed ? [currentUserVaultOption] : []),
    ];
    const vaultOptions = (organizations === null || organizations === void 0 ? void 0 : organizations.length)
        ? organizations.reduce((options, { id, name, productTierType }) => {
            const icon = getVaultIconByProductTier(productTierType);
            return [
                ...options,
                {
                    icon,
                    text: name,
                    value: id,
                },
            ];
        }, initialVaultOptions)
        : initialVaultOptions;
    const folderOptions = (folders === null || folders === void 0 ? void 0 : folders.length)
        ? folders.reduce((options, { id, name }) => [
            ...options,
            {
                icon: _icons__WEBPACK_IMPORTED_MODULE_2__.Folder,
                text: name,
                value: id === null ? defaultNoneSelectValue : id,
                default: id === null,
            },
        ], [])
        : [];
    const collectionOptions = (collections === null || collections === void 0 ? void 0 : collections.length)
        ? collections.reduce((options, { id, name }) => [
            ...options,
            {
                icon: _icons__WEBPACK_IMPORTED_MODULE_2__.CollectionShared,
                text: name,
                value: id === null ? defaultNoneSelectValue : id,
                default: id === null,
            },
        ], [])
        : [];
    if (vaultOptions.length === 1) {
        _signals_selected_vault__WEBPACK_IMPORTED_MODULE_6__.selectedVault === null || _signals_selected_vault__WEBPACK_IMPORTED_MODULE_6__.selectedVault === void 0 ? void 0 : _signals_selected_vault__WEBPACK_IMPORTED_MODULE_6__.selectedVault.set(vaultOptions[0].value);
        // If the individual vault is disabled by a vault policy,
        // a collection selection is required
        if (!personalVaultIsAllowed &&
            (collections === null || collections === void 0 ? void 0 : collections.length) &&
            _signals_selected_collection__WEBPACK_IMPORTED_MODULE_4__.selectedCollection.get() === defaultNoneSelectValue) {
            _signals_selected_collection__WEBPACK_IMPORTED_MODULE_4__.selectedCollection === null || _signals_selected_collection__WEBPACK_IMPORTED_MODULE_4__.selectedCollection === void 0 ? void 0 : _signals_selected_collection__WEBPACK_IMPORTED_MODULE_4__.selectedCollection.set(collections[0].id);
        }
    }
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
    ${(0,_rows_button_row__WEBPACK_IMPORTED_MODULE_3__.ButtonRow)({
        theme,
        primaryButton,
        selectButtons: [
            ...(vaultOptions.length > 1
                ? [
                    {
                        id: "organization",
                        label: i18n.vault,
                        options: vaultOptions,
                        selectedSignal: _signals_selected_vault__WEBPACK_IMPORTED_MODULE_6__.selectedVault,
                    },
                ]
                : []),
            ...(folderOptions.length > 1 && !collectionOptions.length
                ? [
                    {
                        id: "folder",
                        label: i18n.folder,
                        options: folderOptions,
                        selectedSignal: _signals_selected_folder__WEBPACK_IMPORTED_MODULE_5__.selectedFolder,
                    },
                ]
                : []),
            ...(collectionOptions.length > 1
                ? [
                    {
                        id: "collection",
                        label: i18n.collection,
                        options: collectionOptions,
                        selectedSignal: _signals_selected_collection__WEBPACK_IMPORTED_MODULE_4__.selectedCollection,
                    },
                ]
                : []),
        ],
    })}
  `;
}


/***/ }),

/***/ "./src/autofill/content/components/notification/confirmation/body.ts":
/*!***************************************************************************!*\
  !*** ./src/autofill/content/components/notification/confirmation/body.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationConfirmationBody: function() { return /* binding */ NotificationConfirmationBody; },
/* harmony export */   componentClassPrefix: function() { return /* binding */ componentClassPrefix; }
/* harmony export */ });
/* harmony import */ var _emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css/create-instance */ "../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _illustrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../illustrations */ "./src/autofill/content/components/illustrations/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/autofill/content/components/notification/confirmation/message.ts");





const componentClassPrefix = "notification-confirmation-body";
const { css } = (0,_emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: componentClassPrefix,
});
function NotificationConfirmationBody({ buttonAria, buttonText, confirmationMessage, error, itemName, messageDetails, tasksAreComplete, theme, handleOpenVault, }) {
    const IconComponent = error ? _illustrations__WEBPACK_IMPORTED_MODULE_3__.Warning : tasksAreComplete ? _illustrations__WEBPACK_IMPORTED_MODULE_3__.Celebrate : _illustrations__WEBPACK_IMPORTED_MODULE_3__.Keyhole;
    const showConfirmationMessage = confirmationMessage || buttonText || messageDetails;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${notificationConfirmationBodyStyles({ theme })}>
      <div class=${iconContainerStyles(error)}>${IconComponent({ theme })}</div>
      ${showConfirmationMessage
        ? (0,_message__WEBPACK_IMPORTED_MODULE_4__.NotificationConfirmationMessage)({
            buttonAria,
            buttonText,
            itemName: error ? undefined : itemName,
            message: confirmationMessage,
            messageDetails,
            theme,
            handleClick: handleOpenVault,
        })
        : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
    </div>
  `;
}
const iconContainerStyles = (error) => css `
  > svg {
    width: ${!error ? "50px" : "40px"};
    height: auto;
  }
`;
const notificationConfirmationBodyStyles = ({ theme }) => css `
  gap: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].background.alt};
  padding: 12px;
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/confirmation/container.ts":
/*!********************************************************************************!*\
  !*** ./src/autofill/content/components/notification/confirmation/container.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationConfirmationContainer: function() { return /* binding */ NotificationConfirmationContainer; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../notification/abstractions/notification-bar */ "./src/autofill/notification/abstractions/notification-bar.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header */ "./src/autofill/content/components/notification/header.ts");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body */ "./src/autofill/content/components/notification/confirmation/body.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ "./src/autofill/content/components/notification/confirmation/footer.ts");








function NotificationConfirmationContainer({ error, handleCloseNotification, handleOpenVault, handleOpenTasks, headerMessage, i18n, itemName, notificationTestId, task, theme = _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__.ThemeTypes.Light, type, }) {
    const confirmationMessage = getConfirmationMessage(i18n, type, error);
    const buttonText = error ? i18n.newItem : i18n.view;
    const buttonAria = error
        ? i18n.notificationNewItemAria
        : chrome.i18n.getMessage("notificationViewAria", [itemName]);
    let messageDetails;
    let remainingTasksCount;
    let tasksAreComplete = true;
    if (task && !error) {
        remainingTasksCount = task.remainingTasksCount || 0;
        tasksAreComplete = remainingTasksCount === 0;
        messageDetails =
            remainingTasksCount > 0
                ? chrome.i18n.getMessage("loginUpdateTaskSuccessAdditional", [
                    task.orgName,
                    `${remainingTasksCount}`,
                ])
                : chrome.i18n.getMessage("loginUpdateTaskSuccess", [task.orgName]);
    }
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div data-testid="${notificationTestId}" class=${notificationContainerStyles(theme)}>
      ${(0,_header__WEBPACK_IMPORTED_MODULE_5__.NotificationHeader)({
        handleCloseNotification,
        i18n,
        message: headerMessage,
        theme,
    })}
      ${(0,_body__WEBPACK_IMPORTED_MODULE_6__.NotificationConfirmationBody)({
        buttonAria,
        buttonText,
        confirmationMessage,
        error,
        itemName,
        messageDetails,
        tasksAreComplete,
        theme,
        handleOpenVault,
    })}
      ${!error && remainingTasksCount
        ? (0,_footer__WEBPACK_IMPORTED_MODULE_7__.NotificationConfirmationFooter)({
            i18n,
            theme,
            handleButtonClick: handleOpenTasks,
        })
        : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
    </div>
  `;
}
const notificationContainerStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: absolute;
  right: 20px;
  border: 1px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.themes[theme].secondary["300"]};
  border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.themes[theme].background.alt};
  width: 400px;
  overflow: hidden;

  [class*="${_header__WEBPACK_IMPORTED_MODULE_5__.componentClassPrefix}-"] {
    border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["4"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["4"]} 0 0;
    border-bottom: 0.5px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.themes[theme].secondary["300"]};
  }
`;
function getConfirmationMessage(i18n, type, error) {
    if (error) {
        return i18n.saveFailureDetails;
    }
    /* @TODO This partial string return and later concatenation with the cipher name is needed
     * to handle cipher name overflow cases, but is risky for i18n concerns. Fix concatenation
     * with cipher name overflow when a tag replacement solution is available.
     */
    return type === _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_3__.NotificationTypes.Add
        ? i18n.notificationLoginSaveConfirmation
        : i18n.notificationLoginUpdatedConfirmation;
}


/***/ }),

/***/ "./src/autofill/content/components/notification/confirmation/footer.ts":
/*!*****************************************************************************!*\
  !*** ./src/autofill/content/components/notification/confirmation/footer.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationConfirmationFooter: function() { return /* binding */ NotificationConfirmationFooter; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _buttons_action_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttons/action-button */ "./src/autofill/content/components/buttons/action-button.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons */ "./src/autofill/content/components/icons/index.ts");





function NotificationConfirmationFooter({ i18n, theme, handleButtonClick, }) {
    const primaryButtonText = i18n.nextSecurityTaskAction;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${notificationConfirmationFooterStyles({ theme })}>
      ${(0,_buttons_action_button__WEBPACK_IMPORTED_MODULE_2__.ActionButton)({
        handleClick: handleButtonClick,
        buttonText: AdditionalTasksButtonContent({ buttonText: primaryButtonText, theme }),
        theme,
    })}
    </div>
  `;
}
const notificationConfirmationFooterStyles = ({ theme }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].background.alt};
  padding: 0 ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[3]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[3]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[3]};
  max-width: min-content;

  :last-child {
    border-radius: 0 0 ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["4"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["4"]};
    padding-bottom: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[4]};
  }
`;
function AdditionalTasksButtonContent({ buttonText, theme }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${additionalTasksButtonContentStyles({ theme })}>
      <span>${buttonText}</span>
      ${(0,_icons__WEBPACK_IMPORTED_MODULE_4__.ExternalLink)({ theme, color: _constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].text.contrast })}
    </div>
  `;
}
const additionalTasksButtonContentStyles = ({ theme }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  gap: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[2]};
  display: flex;
  align-items: center;
  white-space: nowrap;
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/confirmation/message.ts":
/*!******************************************************************************!*\
  !*** ./src/autofill/content/components/notification/confirmation/message.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationConfirmationMessage: function() { return /* binding */ NotificationConfirmationMessage; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function NotificationConfirmationMessage({ buttonAria, buttonText, itemName, message, messageDetails, handleClick, theme, }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${containerStyles}>
      ${message || buttonText
        ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
            <div class=${singleLineWrapperStyles}>
              ${itemName
            ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
                    <span class=${itemNameStyles(theme)} title=${itemName}> ${itemName} </span>
                  `
            : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
              <span
                title=${message || buttonText}
                class=${notificationConfirmationMessageStyles(theme)}
              >
                ${message || lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
                ${buttonText
            ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
                      <a
                        title=${buttonText}
                        class=${notificationConfirmationButtonTextStyles(theme)}
                        @click=${handleClick}
                        @keydown=${(e) => handleButtonKeyDown(e, () => handleClick(e))}
                        aria-label=${buttonAria}
                        tabindex="0"
                        role="button"
                      >
                        ${buttonText}
                      </a>
                    `
            : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
              </span>
            </div>
          `
        : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      ${messageDetails
        ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<div class=${AdditionalMessageStyles({ theme })}>${messageDetails}</div>`
        : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
    </div>
  `;
}
const containerStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  flex-direction: column;
  gap: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing[1]};
  width: 100%;
`;
const singleLineWrapperStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: inline;
  white-space: normal;
  word-break: break-word;
`;
const baseTextStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 24px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
`;
const notificationConfirmationMessageStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${baseTextStyles}

  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main};
  font-weight: 400;
  white-space: normal;
  word-break: break-word;
  display: inline;
`;
const itemNameStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${baseTextStyles}

  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main};
  font-weight: 400;
  white-space: nowrap;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: bottom;
`;
const notificationConfirmationButtonTextStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${baseTextStyles}

  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary[600]};
  font-weight: 700;
  cursor: pointer;
`;
const AdditionalMessageStyles = ({ theme }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.typography.body2}

  font-size: 14px;
  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted};
`;
function handleButtonKeyDown(event, handleClick) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleClick();
    }
}


/***/ }),

/***/ "./src/autofill/content/components/notification/container.ts":
/*!*******************************************************************!*\
  !*** ./src/autofill/content/components/notification/container.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationContainer: function() { return /* binding */ NotificationContainer; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../notification/abstractions/notification-bar */ "./src/autofill/notification/abstractions/notification-bar.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body */ "./src/autofill/content/components/notification/body.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./src/autofill/content/components/notification/footer.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header */ "./src/autofill/content/components/notification/header.ts");








function NotificationContainer({ handleCloseNotification, handleEditOrUpdateAction, handleSaveAction, ciphers, collections, folders, headerMessage, i18n, isLoading, organizations, personalVaultIsAllowed = true, notificationTestId, theme = _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__.ThemeTypes.Light, type, }) {
    const showBody = type !== _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_3__.NotificationTypes.Unlock;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div data-testid="${notificationTestId}" class=${notificationContainerStyles(theme)}>
      ${(0,_header__WEBPACK_IMPORTED_MODULE_7__.NotificationHeader)({
        handleCloseNotification,
        i18n,
        message: headerMessage,
        theme,
    })}
      ${showBody
        ? (0,_body__WEBPACK_IMPORTED_MODULE_5__.NotificationBody)({
            handleEditOrUpdateAction,
            ciphers,
            notificationType: type,
            theme,
            i18n,
        })
        : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      ${(0,_footer__WEBPACK_IMPORTED_MODULE_6__.NotificationFooter)({
        handleSaveAction,
        collections,
        folders,
        i18n,
        isLoading,
        notificationType: type,
        organizations,
        personalVaultIsAllowed,
        theme,
    })}
    </div>
  `;
}
const notificationContainerStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: absolute;
  right: 20px;
  border: 1px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.themes[theme].secondary["300"]};
  border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.themes[theme].background.alt};
  width: 400px;

  [class*="${_header__WEBPACK_IMPORTED_MODULE_7__.componentClassPrefix}-"] {
    border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["4"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["4"]} 0 0;
  }

  [class*="${_body__WEBPACK_IMPORTED_MODULE_5__.componentClassPrefix}-"] {
    margin: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["3"]} 0 0 ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["3"]};
    padding-right: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing["3"]};
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/footer.ts":
/*!****************************************************************!*\
  !*** ./src/autofill/content/components/notification/footer.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationFooter: function() { return /* binding */ NotificationFooter; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../notification/abstractions/notification-bar */ "./src/autofill/notification/abstractions/notification-bar.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _button_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-row */ "./src/autofill/content/components/notification/button-row.ts");





function NotificationFooter({ collections, folders, i18n, isLoading, notificationType, organizations, personalVaultIsAllowed, theme, handleSaveAction, }) {
    const isChangeNotification = notificationType === _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_2__.NotificationTypes.Change;
    const isUnlockNotification = notificationType === _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_2__.NotificationTypes.Unlock;
    let primaryButtonText = i18n.saveAction;
    if (isUnlockNotification) {
        primaryButtonText = i18n.notificationUnlock;
    }
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${notificationFooterStyles({ isChangeNotification })}>
      ${!isChangeNotification
        ? (0,_button_row__WEBPACK_IMPORTED_MODULE_4__.NotificationButtonRow)({
            collections,
            folders,
            organizations,
            i18n,
            primaryButton: {
                handlePrimaryButtonClick: handleSaveAction,
                isLoading,
                text: primaryButtonText,
            },
            personalVaultIsAllowed,
            theme,
        })
        : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
    </div>
  `;
}
const notificationFooterStyles = ({ isChangeNotification, }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  padding: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[2]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[4]} ${isChangeNotification ? _constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[1] : _constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[4]}
    ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[4]};

  :last-child {
    border-radius: 0 0 ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["4"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["4"]};
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/header-message.ts":
/*!************************************************************************!*\
  !*** ./src/autofill/content/components/notification/header-message.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationHeaderMessage: function() { return /* binding */ NotificationHeaderMessage; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



function NotificationHeaderMessage({ message, theme }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <span title=${message} class=${notificationHeaderMessageStyles(theme)}>${message}</span>
  `;
}
const notificationHeaderMessageStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  flex-grow: 1;
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 28px;
  white-space: nowrap;
  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main};
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 600;
`;


/***/ }),

/***/ "./src/autofill/content/components/notification/header.ts":
/*!****************************************************************!*\
  !*** ./src/autofill/content/components/notification/header.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationHeader: function() { return /* binding */ NotificationHeader; },
/* harmony export */   componentClassPrefix: function() { return /* binding */ componentClassPrefix; }
/* harmony export */ });
/* harmony import */ var _emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css/create-instance */ "../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _buttons_close_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/close-button */ "./src/autofill/content/components/buttons/close-button.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _icons_brand_icon_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/brand-icon-container */ "./src/autofill/content/components/icons/brand-icon-container.ts");
/* harmony import */ var _header_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-message */ "./src/autofill/content/components/notification/header-message.ts");







const componentClassPrefix = "notification-header";
const { css } = (0,_emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: componentClassPrefix,
});
function NotificationHeader({ i18n, message, standalone = false, theme = _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_2__.ThemeTypes.Light, handleCloseNotification, }) {
    const showIcon = true;
    const isDismissable = true;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${notificationHeaderStyles({ standalone, theme })}>
      ${showIcon ? (0,_icons_brand_icon_container__WEBPACK_IMPORTED_MODULE_5__.BrandIconContainer)({ theme }) : null}
      ${message ? (0,_header_message__WEBPACK_IMPORTED_MODULE_6__.NotificationHeaderMessage)({ message, theme }) : null}
      ${isDismissable ? (0,_buttons_close_button__WEBPACK_IMPORTED_MODULE_3__.CloseButton)({ handleCloseNotification, i18n, theme }) : null}
    </div>
  `;
}
const notificationHeaderStyles = ({ standalone, theme, }) => css `
  gap: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.spacing[2]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.themes[theme].background.DEFAULT};
  padding: 12px 16px 8px 16px;
  white-space: nowrap;

  ${standalone
    ? css ``
    : css `
        border-bottom: 0.5px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_4__.themes[theme].secondary["300"]};
      `}
`;


/***/ }),

/***/ "./src/autofill/content/components/option-selection/option-item.ts":
/*!*************************************************************************!*\
  !*** ./src/autofill/content/components/option-selection/option-item.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionItem: function() { return /* binding */ OptionItem; },
/* harmony export */   optionItemIconWidth: function() { return /* binding */ optionItemIconWidth; },
/* harmony export */   optionItemTagName: function() { return /* binding */ optionItemTagName; }
/* harmony export */ });
/* harmony import */ var _emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css/create-instance */ "../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");



const optionItemTagName = "option-item";
const { css } = (0,_emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: optionItemTagName,
});
function OptionItem({ contextLabel, id, icon, text, theme, value, handleSelection, }) {
    const handleSelectionKeyUpProxy = (event) => {
        const listenedForKeys = new Set(["Enter", "Space"]);
        if (listenedForKeys.has(event.code) && event.target instanceof Element) {
            handleSelection();
        }
        return;
    };
    const iconProps = { color: _constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main, theme };
    const itemIcon = icon === null || icon === void 0 ? void 0 : icon(iconProps);
    const ariaLabel = contextLabel && text
        ? chrome.i18n.getMessage("selectItemAriaLabel", [contextLabel, text])
        : text;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<div
    class=${optionItemStyles}
    data-testid="${id}-option-item"
    key=${value}
    tabindex="0"
    title=${text}
    role="option"
    aria-label=${ariaLabel}
    @click=${handleSelection}
    @keyup=${handleSelectionKeyUpProxy}
  >
    ${itemIcon ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<div class=${optionItemIconContainerStyles}>${itemIcon}</div>` : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
    <span class=${optionItemTextStyles}>${text || value}</span>
  </div>`;
}
const optionItemIconWidth = 16;
const optionItemGap = _constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["2"];
const optionItemStyles = css `
  gap: ${optionItemGap};
  user-select: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
const optionItemIconContainerStyles = css `
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: ${optionItemIconWidth}px;
  max-height: ${optionItemIconWidth}px;

  > svg {
    width: 100%;
    height: auto;
  }
`;
const optionItemTextStyles = css `
  flex: 1 1 calc(100% - ${optionItemIconWidth}px - ${optionItemGap});
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


/***/ }),

/***/ "./src/autofill/content/components/option-selection/option-items.ts":
/*!**************************************************************************!*\
  !*** ./src/autofill/content/components/option-selection/option-items.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionItems: function() { return /* binding */ OptionItems; },
/* harmony export */   optionItemsTagName: function() { return /* binding */ optionItemsTagName; },
/* harmony export */   optionsMenuItemMaxWidth: function() { return /* binding */ optionsMenuItemMaxWidth; },
/* harmony export */   optionsMenuItemsMaxHeight: function() { return /* binding */ optionsMenuItemsMaxHeight; }
/* harmony export */ });
/* harmony import */ var _emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css/create-instance */ "../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _option_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option-item */ "./src/autofill/content/components/option-selection/option-item.ts");




const optionItemsTagName = "option-items";
const { css } = (0,_emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: optionItemsTagName,
});
function OptionItems({ id, theme, topOffset, label, options, handleOptionSelection, }) {
    // @TODO get client vendor from context
    const isSafari = false;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div
      class=${optionsStyles({ theme, topOffset })}
      key="container"
      @keyup=${(e) => handleMenuKeyUp(e)}
    >
      ${label ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<div class=${optionsLabelStyles({ theme })}>${label}</div>` : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      <div class=${optionsWrapper({ isSafari, theme })}>
        ${options.map((option) => (0,_option_item__WEBPACK_IMPORTED_MODULE_3__.OptionItem)(Object.assign(Object.assign({ id }, option), { theme, contextLabel: label, handleSelection: () => handleOptionSelection(option) })))}
      </div>
    </div>
  `;
}
function handleMenuKeyUp(event) {
    var _a;
    const items = [
        ...event.currentTarget.querySelectorAll('[tabindex="0"]'),
    ];
    const index = items.indexOf(document.activeElement);
    const direction = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (index === -1 || direction === 0) {
        return;
    }
    event.preventDefault();
    (_a = items[(index + direction + items.length) % items.length]) === null || _a === void 0 ? void 0 : _a.focus();
}
const optionsStyles = ({ theme, topOffset }) => css `
  ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.typography.body1}

  -webkit-font-smoothing: antialiased;
  position: absolute;
  /* top offset + line-height of dropdown button + top and bottom padding of button + border-width */
  top: calc(${topOffset}px + 20px + ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1"]} + ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1"]} + 1px);
  border: 1px solid ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].secondary["500"]};
  border-radius: 0.5rem;
  background-clip: padding-box;
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].background.DEFAULT};
  padding: 0.25rem 0;
  max-width: fit-content;
  overflow-y: hidden;
  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.main};
`;
const optionsLabelStyles = ({ theme }) => css `
  ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.typography.helperMedium}

  user-select: none;
  padding: 0.375rem ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["3"]};
  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].text.muted};
  font-weight: 600;
`;
const optionsMenuItemMaxWidth = 260;
const optionsMenuItemsMaxHeight = 114;
const optionsWrapper = ({ isSafari, theme }) => css `
  max-height: ${optionsMenuItemsMaxHeight}px;
  overflow-y: auto;

  > [class*="${_option_item__WEBPACK_IMPORTED_MODULE_3__.optionItemTagName}-"] {
    padding: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["1.5"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.spacing["3"]};
    max-width: ${optionsMenuItemMaxWidth}px;

    :hover {
      background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_2__.themes[theme].primary["100"]};
    }
  }

  ${isSafari
    ? (0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.scrollbarStyles)(theme, { track: "transparent" }).safari
    : (0,_constants_styles__WEBPACK_IMPORTED_MODULE_2__.scrollbarStyles)(theme, { track: "transparent" }).default}
`;


/***/ }),

/***/ "./src/autofill/content/components/option-selection/option-selection.ts":
/*!******************************************************************************!*\
  !*** ./src/autofill/content/components/option-selection/option-selection.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionSelection: function() { return /* binding */ OptionSelection; },
/* harmony export */   optionSelectionTagName: function() { return /* binding */ optionSelectionTagName; }
/* harmony export */ });
/* harmony import */ var _emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css/create-instance */ "../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators.js */ "../../node_modules/lit/decorators.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _buttons_option_selection_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buttons/option-selection-button */ "./src/autofill/content/components/buttons/option-selection-button.ts");
/* harmony import */ var _option_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option-item */ "./src/autofill/content/components/option-selection/option-item.ts");
/* harmony import */ var _option_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./option-items */ "./src/autofill/content/components/option-selection/option-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const optionSelectionTagName = "option-selection";
const { css } = (0,_emotion_css_create_instance__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: optionSelectionTagName,
});
class OptionSelection extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.id = "";
        this.options = [];
        this.theme = _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_3__.ThemeTypes.Light;
        this.showMenu = false;
        this.menuTopOffset = 0;
        // Determines if the opened menu should be "anchored" to the right or left side of the opening button
        this.menuIsEndJustified = false;
        this.handleButtonClick = (event) => __awaiter(this, void 0, void 0, function* () {
            if (!this.disabled) {
                const isOpening = !this.showMenu;
                if (isOpening) {
                    if (OptionSelection.currentOpenInstance && OptionSelection.currentOpenInstance !== this) {
                        OptionSelection.currentOpenInstance.showMenu = false;
                    }
                    OptionSelection.currentOpenInstance = this;
                    this.menuTopOffset = this.offsetTop;
                    // Distance from right edge of button to left edge of the viewport
                    // Assumes no enclosing frames between the intended host frame and the component
                    const boundingClientRect = this.getBoundingClientRect();
                    // Width of the client (minus scrollbar)
                    const documentWidth = document.documentElement.clientWidth;
                    // Distance between left edge of the button and right edge of the viewport
                    // (e.g. the max space the menu can use when left-aligned)
                    const distanceFromViewportRightEdge = documentWidth - boundingClientRect.left;
                    // The full width the option menu can take up
                    // (base + icon + border + gap + padding)
                    const maxDifferenceThreshold = _option_items__WEBPACK_IMPORTED_MODULE_6__.optionsMenuItemMaxWidth + _option_item__WEBPACK_IMPORTED_MODULE_5__.optionItemIconWidth + 2 + 8 + 12 * 2;
                    this.menuIsEndJustified = distanceFromViewportRightEdge < maxDifferenceThreshold;
                }
                else {
                    if (OptionSelection.currentOpenInstance === this) {
                        OptionSelection.currentOpenInstance = null;
                    }
                }
                this.showMenu = isOpening;
                if (this.showMenu) {
                    yield this.updateComplete;
                    const firstItem = this.querySelector('#option-menu [tabindex="0"]');
                    firstItem === null || firstItem === void 0 ? void 0 : firstItem.focus();
                }
            }
        });
        this.handleFocusOut = (event) => {
            const relatedTarget = event.relatedTarget;
            if (!(relatedTarget instanceof Node) || !this.contains(relatedTarget)) {
                this.showMenu = false;
                if (OptionSelection.currentOpenInstance === this) {
                    OptionSelection.currentOpenInstance = null;
                }
            }
        };
        this.handleOptionSelection = (selectedOption) => {
            var _a, _b;
            this.showMenu = false;
            this.selection = selectedOption;
            (_a = this.selectedSignal) === null || _a === void 0 ? void 0 : _a.set(selectedOption.value);
            // Any side-effects that should occur from the selection
            (_b = this.handleSelectionUpdate) === null || _b === void 0 ? void 0 : _b.call(this, selectedOption.value);
        };
    }
    createRenderRoot() {
        return this;
    }
    render() {
        var _a, _b;
        if (!this.selection) {
            this.selection = getDefaultOption(this.options);
        }
        return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
      <div
        class=${optionSelectionStyles({ menuIsEndJustified: this.menuIsEndJustified })}
        @focusout=${this.handleFocusOut}
      >
        ${(0,_buttons_option_selection_button__WEBPACK_IMPORTED_MODULE_4__.OptionSelectionButton)({
            disabled: this.disabled,
            icon: (_a = this.selection) === null || _a === void 0 ? void 0 : _a.icon,
            id: this.id,
            text: (_b = this.selection) === null || _b === void 0 ? void 0 : _b.text,
            theme: this.theme,
            toggledOn: this.showMenu,
            handleButtonClick: this.handleButtonClick,
        })}
        ${this.showMenu
            ? (0,_option_items__WEBPACK_IMPORTED_MODULE_6__.OptionItems)({
                id: this.id,
                label: this.label,
                options: this.options,
                theme: this.theme,
                topOffset: this.menuTopOffset,
                handleOptionSelection: this.handleOptionSelection,
            })
            : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
    }
}
OptionSelection.currentOpenInstance = null;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)(),
    __metadata("design:type", Boolean)
], OptionSelection.prototype, "disabled", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)(),
    __metadata("design:type", String)
], OptionSelection.prototype, "id", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)(),
    __metadata("design:type", String)
], OptionSelection.prototype, "label", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Array }),
    __metadata("design:type", Array)
], OptionSelection.prototype, "options", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)(),
    __metadata("design:type", String)
], OptionSelection.prototype, "theme", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: (selectedOption) => selectedOption }),
    __metadata("design:type", Function)
], OptionSelection.prototype, "handleSelectionUpdate", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ attribute: false }),
    __metadata("design:type", Object)
], OptionSelection.prototype, "selectedSignal", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)(),
    __metadata("design:type", Object)
], OptionSelection.prototype, "showMenu", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)(),
    __metadata("design:type", Number)
], OptionSelection.prototype, "menuTopOffset", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)(),
    __metadata("design:type", Boolean)
], OptionSelection.prototype, "menuIsEndJustified", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)(),
    __metadata("design:type", Object)
], OptionSelection.prototype, "selection", void 0);
/* harmony default export */ __webpack_exports__["default"] = (customElements.define(optionSelectionTagName, OptionSelection));
function getDefaultOption(options = []) {
    return options.find((option) => option.default) || options[0];
}
const optionSelectionStyles = ({ menuIsEndJustified }) => css `
  display: flex;
  justify-content: ${menuIsEndJustified ? "flex-end" : "flex-start"};

  > div,
  > button {
    width: 100%;
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/rows/button-row.ts":
/*!************************************************************!*\
  !*** ./src/autofill/content/components/rows/button-row.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonRow: function() { return /* binding */ ButtonRow; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _content_components_buttons_action_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content/components/buttons/action-button */ "./src/autofill/content/components/buttons/action-button.ts");
/* harmony import */ var _content_components_constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../content/components/constants/styles */ "./src/autofill/content/components/constants/styles.ts");
/* harmony import */ var _option_selection_option_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../option-selection/option-selection */ "./src/autofill/content/components/option-selection/option-selection.ts");





function ButtonRow({ theme, primaryButton, selectButtons }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${buttonRowStyles}>
      ${(0,_content_components_buttons_action_button__WEBPACK_IMPORTED_MODULE_2__.ActionButton)({
        handleClick: primaryButton.handlePrimaryButtonClick,
        buttonText: primaryButton.text,
        isLoading: primaryButton.isLoading,
        theme,
    })}
      <div class=${optionSelectionsStyles}>
        ${selectButtons === null || selectButtons === void 0 ? void 0 : selectButtons.map(({ id, label, options, handleSelectionUpdate, selectedSignal }) => (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
              <option-selection
                key=${id}
                theme=${theme}
                .id=${id}
                .label=${label}
                .options=${options}
                .handleSelectionUpdate=${handleSelectionUpdate}
                .selectedSignal=${selectedSignal}
              ></option-selection>
            ` || lit__WEBPACK_IMPORTED_MODULE_1__.nothing)}
      </div>
    </div>
  `;
}
const buttonRowStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  gap: ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 52px;
  white-space: nowrap;
  padding-top: ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing[1]};

  > button {
    max-width: min-content;
    flex: 1 1 25%;
  }

  > div {
    flex: 1 1 min-content;
  }
`;
const optionSelectionsStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  gap: ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["2"]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  > ${_option_selection_option_selection__WEBPACK_IMPORTED_MODULE_4__.optionSelectionTagName} {
    /* assumes two option selections */
    max-width: calc(50% - ${_content_components_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["1.5"]});
    min-width: 120px;
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/rows/cipher-item-row.ts":
/*!*****************************************************************!*\
  !*** ./src/autofill/content/components/rows/cipher-item-row.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherItemRow: function() { return /* binding */ CipherItemRow; }
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _cipher_cipher_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cipher/cipher-item */ "./src/autofill/content/components/cipher/cipher-item.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/styles */ "./src/autofill/content/components/constants/styles.ts");




function CipherItemRow({ cipher, i18n, notificationType, theme, handleAction, }) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div class=${cipherItemRowStyles({ theme })}>
      ${(0,_cipher_cipher_item__WEBPACK_IMPORTED_MODULE_2__.CipherItem)({
        cipher,
        i18n,
        notificationType,
        theme,
        handleAction,
    })}
    </div>
  `;
}
const cipherItemRowStyles = ({ theme }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css) `
  ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.typography.body1}

  gap: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["2"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-width: 0 0 0.5px 0;
  border-style: solid;
  border-radius: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["2"]};
  border-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].secondary["300"]};
  background-color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].background.DEFAULT};
  padding: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["2"]} ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.spacing["3"]};
  min-height: min-content;
  max-height: 52px;
  overflow-x: hidden;
  white-space: nowrap;
  color: ${_constants_styles__WEBPACK_IMPORTED_MODULE_3__.themes[theme].text.main};
  font-weight: 400;

  > div {
    :first-child {
      flex: 3 3 75%;
      min-width: 25%;
    }

    :not(:first-child) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      max-width: 25%;

      > button {
        max-width: min-content;
      }
    }
  }
`;


/***/ }),

/***/ "./src/autofill/content/components/signals/selected-collection.ts":
/*!************************************************************************!*\
  !*** ./src/autofill/content/components/signals/selected-collection.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectedCollection: function() { return /* binding */ selectedCollection; }
/* harmony export */ });
/* harmony import */ var _lit_labs_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit-labs/signals */ "../../node_modules/@lit-labs/signals/development/index.js");

const selectedCollection = (0,_lit_labs_signals__WEBPACK_IMPORTED_MODULE_0__.signal)("0");


/***/ }),

/***/ "./src/autofill/content/components/signals/selected-folder.ts":
/*!********************************************************************!*\
  !*** ./src/autofill/content/components/signals/selected-folder.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectedFolder: function() { return /* binding */ selectedFolder; }
/* harmony export */ });
/* harmony import */ var _lit_labs_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit-labs/signals */ "../../node_modules/@lit-labs/signals/development/index.js");

const selectedFolder = (0,_lit_labs_signals__WEBPACK_IMPORTED_MODULE_0__.signal)("0");


/***/ }),

/***/ "./src/autofill/content/components/signals/selected-vault.ts":
/*!*******************************************************************!*\
  !*** ./src/autofill/content/components/signals/selected-vault.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectedVault: function() { return /* binding */ selectedVault; }
/* harmony export */ });
/* harmony import */ var _lit_labs_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit-labs/signals */ "../../node_modules/@lit-labs/signals/development/index.js");

const selectedVault = (0,_lit_labs_signals__WEBPACK_IMPORTED_MODULE_0__.signal)("0");


/***/ }),

/***/ "./src/autofill/enums/autofill-port.enum.ts":
/*!**************************************************!*\
  !*** ./src/autofill/enums/autofill-port.enum.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillPort: function() { return /* binding */ AutofillPort; }
/* harmony export */ });
const AutofillPort = {
    InjectedScript: "autofill-injected-script-port",
};



/***/ }),

/***/ "./src/autofill/notification/abstractions/notification-bar.ts":
/*!********************************************************************!*\
  !*** ./src/autofill/notification/abstractions/notification-bar.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationTypes: function() { return /* binding */ NotificationTypes; }
/* harmony export */ });
const NotificationTypes = {
    Add: "add",
    Change: "change",
    Unlock: "unlock",
    AtRiskPassword: "at-risk-password",
};



/***/ }),

/***/ "./src/autofill/notification/bar.scss":
/*!********************************************!*\
  !*** ./src/autofill/notification/bar.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/autofill/utils/index.ts":
/*!*************************************!*\
  !*** ./src/autofill/utils/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areKeyValuesNull: function() { return /* binding */ areKeyValuesNull; },
/* harmony export */   buildSvgDomElement: function() { return /* binding */ buildSvgDomElement; },
/* harmony export */   cancelIdleCallbackPolyfill: function() { return /* binding */ cancelIdleCallbackPolyfill; },
/* harmony export */   currentlyInSandboxedIframe: function() { return /* binding */ currentlyInSandboxedIframe; },
/* harmony export */   debounce: function() { return /* binding */ debounce; },
/* harmony export */   elementIsDescriptionDetailsElement: function() { return /* binding */ elementIsDescriptionDetailsElement; },
/* harmony export */   elementIsDescriptionTermElement: function() { return /* binding */ elementIsDescriptionTermElement; },
/* harmony export */   elementIsFillableFormField: function() { return /* binding */ elementIsFillableFormField; },
/* harmony export */   elementIsFormElement: function() { return /* binding */ elementIsFormElement; },
/* harmony export */   elementIsInputElement: function() { return /* binding */ elementIsInputElement; },
/* harmony export */   elementIsInstanceOf: function() { return /* binding */ elementIsInstanceOf; },
/* harmony export */   elementIsLabelElement: function() { return /* binding */ elementIsLabelElement; },
/* harmony export */   elementIsSelectElement: function() { return /* binding */ elementIsSelectElement; },
/* harmony export */   elementIsSpanElement: function() { return /* binding */ elementIsSpanElement; },
/* harmony export */   elementIsTextAreaElement: function() { return /* binding */ elementIsTextAreaElement; },
/* harmony export */   generateDomainMatchPatterns: function() { return /* binding */ generateDomainMatchPatterns; },
/* harmony export */   generateRandomChars: function() { return /* binding */ generateRandomChars; },
/* harmony export */   generateRandomCustomElementName: function() { return /* binding */ generateRandomCustomElementName; },
/* harmony export */   getAttributeBoolean: function() { return /* binding */ getAttributeBoolean; },
/* harmony export */   getPropertyOrAttribute: function() { return /* binding */ getPropertyOrAttribute; },
/* harmony export */   getSubmitButtonKeywordsSet: function() { return /* binding */ getSubmitButtonKeywordsSet; },
/* harmony export */   isInvalidResponseStatusCode: function() { return /* binding */ isInvalidResponseStatusCode; },
/* harmony export */   matchAllowedColorSchemes: function() { return /* binding */ matchAllowedColorSchemes; },
/* harmony export */   nodeIsAnchorElement: function() { return /* binding */ nodeIsAnchorElement; },
/* harmony export */   nodeIsButtonElement: function() { return /* binding */ nodeIsButtonElement; },
/* harmony export */   nodeIsElement: function() { return /* binding */ nodeIsElement; },
/* harmony export */   nodeIsFormElement: function() { return /* binding */ nodeIsFormElement; },
/* harmony export */   nodeIsInputElement: function() { return /* binding */ nodeIsInputElement; },
/* harmony export */   nodeIsTypeSubmitElement: function() { return /* binding */ nodeIsTypeSubmitElement; },
/* harmony export */   rectHasSize: function() { return /* binding */ rectHasSize; },
/* harmony export */   requestIdleCallbackPolyfill: function() { return /* binding */ requestIdleCallbackPolyfill; },
/* harmony export */   sendExtensionMessage: function() { return /* binding */ sendExtensionMessage; },
/* harmony export */   setElementStyles: function() { return /* binding */ setElementStyles; },
/* harmony export */   setupAutofillInitDisconnectAction: function() { return /* binding */ setupAutofillInitDisconnectAction; },
/* harmony export */   setupExtensionDisconnectAction: function() { return /* binding */ setupExtensionDisconnectAction; },
/* harmony export */   specialCharacterToKeyMap: function() { return /* binding */ specialCharacterToKeyMap; },
/* harmony export */   throttle: function() { return /* binding */ throttle; }
/* harmony export */ });
/* harmony import */ var _enums_autofill_port_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/autofill-port.enum */ "./src/autofill/enums/autofill-port.enum.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Generates a random string of characters.
 *
 * @param length - The length of the random string to generate.
 */
function generateRandomChars(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const randomChars = [];
    const randomBytes = new Uint8Array(length);
    globalThis.crypto.getRandomValues(randomBytes);
    for (let byteIndex = 0; byteIndex < randomBytes.length; byteIndex++) {
        const byte = randomBytes[byteIndex];
        randomChars.push(chars[byte % chars.length]);
    }
    return randomChars.join("");
}
/**
 * Polyfills the requestIdleCallback API with a setTimeout fallback.
 *
 * @param callback - The callback function to run when the browser is idle.
 * @param options - The options to pass to the requestIdleCallback function.
 */
function requestIdleCallbackPolyfill(callback, options) {
    if ("requestIdleCallback" in globalThis) {
        return globalThis.requestIdleCallback(() => callback(), options);
    }
    const timeoutDelay = (options === null || options === void 0 ? void 0 : options.timeout) || 1;
    return globalThis.setTimeout(() => callback(), timeoutDelay);
}
/**
 * Polyfills the cancelIdleCallback API with a clearTimeout fallback.
 *
 * @param id - The ID of the idle callback to cancel.
 */
function cancelIdleCallbackPolyfill(id) {
    if ("cancelIdleCallback" in globalThis) {
        return globalThis.cancelIdleCallback(id);
    }
    return globalThis.clearTimeout(id);
}
/**
 * Generates a random string of characters that formatted as a custom element name.
 */
function generateRandomCustomElementName() {
    const length = Math.floor(Math.random() * 5) + 8; // Between 8 and 12 characters
    const numHyphens = Math.min(Math.max(Math.floor(Math.random() * 4), 1), length - 1); // At least 1, maximum of 3 hyphens
    const hyphenIndices = [];
    while (hyphenIndices.length < numHyphens) {
        const index = Math.floor(Math.random() * (length - 1)) + 1;
        if (!hyphenIndices.includes(index)) {
            hyphenIndices.push(index);
        }
    }
    hyphenIndices.sort((a, b) => a - b);
    let randomString = "";
    let prevIndex = 0;
    for (let index = 0; index < hyphenIndices.length; index++) {
        const hyphenIndex = hyphenIndices[index];
        randomString = randomString + generateRandomChars(hyphenIndex - prevIndex) + "-";
        prevIndex = hyphenIndex;
    }
    randomString += generateRandomChars(length - prevIndex);
    return randomString;
}
/**
 * Builds a DOM element from an SVG string.
 *
 * @param svgString - The SVG string to build the DOM element from.
 * @param ariaHidden - Determines whether the SVG should be hidden from screen readers.
 */
function buildSvgDomElement(svgString, ariaHidden = true) {
    const domParser = new DOMParser();
    const svgDom = domParser.parseFromString(svgString, "image/svg+xml");
    const domElement = svgDom.documentElement;
    domElement.setAttribute("aria-hidden", `${ariaHidden}`);
    return domElement;
}
/**
 * Sends a message to the extension.
 *
 * @param command - The command to send.
 * @param options - The options to send with the command.
 */
function sendExtensionMessage(command_1) {
    return __awaiter(this, arguments, void 0, function* (command, options = {}) {
        if (typeof browser !== "undefined" &&
            typeof browser.runtime !== "undefined" &&
            typeof browser.runtime.sendMessage !== "undefined") {
            return browser.runtime.sendMessage(Object.assign({ command }, options));
        }
        return new Promise((resolve) => chrome.runtime.sendMessage(Object.assign({ command }, options), (response) => {
            if (chrome.runtime.lastError) {
                resolve(null);
            }
            resolve(response);
        }));
    });
}
/**
 * Sets CSS styles on an element.
 *
 * @param element - The element to set the styles on.
 * @param styles - The styles to set on the element.
 * @param priority - Determines whether the styles should be set as important.
 */
function setElementStyles(element, styles, priority) {
    if (!element || !styles || !Object.keys(styles).length) {
        return;
    }
    for (const styleProperty in styles) {
        element.style.setProperty(styleProperty.replace(/([a-z])([A-Z])/g, "$1-$2"), // Convert camelCase to kebab-case
        styles[styleProperty], priority ? "important" : undefined);
    }
}
/**
 * Sets up a long-lived connection with the extension background
 * and triggers an onDisconnect event if the extension context
 * is invalidated.
 *
 * @param callback - Callback export function to run when the extension disconnects
 */
function setupExtensionDisconnectAction(callback) {
    const port = chrome.runtime.connect({ name: _enums_autofill_port_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillPort.InjectedScript });
    const onDisconnectCallback = (disconnectedPort) => {
        callback(disconnectedPort);
        port.onDisconnect.removeListener(onDisconnectCallback);
    };
    port.onDisconnect.addListener(onDisconnectCallback);
}
/**
 * Handles setup of the extension disconnect action for the autofill init class
 * in both instances where the overlay might or might not be initialized.
 *
 * @param windowContext - The global window context
 */
function setupAutofillInitDisconnectAction(windowContext) {
    if (!windowContext.bitwardenAutofillInit) {
        return;
    }
    const onDisconnectCallback = () => {
        windowContext.bitwardenAutofillInit.destroy();
        delete windowContext.bitwardenAutofillInit;
    };
    setupExtensionDisconnectAction(onDisconnectCallback);
}
/**
 * Identifies whether an element is a fillable form field.
 * This is determined by whether the element is a form field and not a span.
 *
 * @param formFieldElement - The form field element to check.
 */
function elementIsFillableFormField(formFieldElement) {
    return !elementIsSpanElement(formFieldElement);
}
/**
 * Identifies whether an element is an instance of a specific tag name.
 *
 * @param element - The element to check.
 * @param tagName -  The tag name to check against.
 */
function elementIsInstanceOf(element, tagName) {
    return nodeIsElement(element) && element.tagName.toLowerCase() === tagName;
}
/**
 * Identifies whether an element is a span element.
 *
 * @param element - The element to check.
 */
function elementIsSpanElement(element) {
    return elementIsInstanceOf(element, "span");
}
/**
 * Identifies whether an element is an input field.
 *
 * @param element - The element to check.
 */
function elementIsInputElement(element) {
    return elementIsInstanceOf(element, "input");
}
/**
 * Identifies whether an element is a select field.
 *
 * @param element - The element to check.
 */
function elementIsSelectElement(element) {
    return elementIsInstanceOf(element, "select");
}
/**
 * Identifies whether an element is a textarea field.
 *
 * @param element - The element to check.
 */
function elementIsTextAreaElement(element) {
    return elementIsInstanceOf(element, "textarea");
}
/**
 * Identifies whether an element is a form element.
 *
 * @param element - The element to check.
 */
function elementIsFormElement(element) {
    return elementIsInstanceOf(element, "form");
}
/**
 * Identifies whether an element is a label element.
 *
 * @param element - The element to check.
 */
function elementIsLabelElement(element) {
    return elementIsInstanceOf(element, "label");
}
/**
 * Identifies whether an element is a description details `dd` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionDetailsElement(element) {
    return elementIsInstanceOf(element, "dd");
}
/**
 * Identifies whether an element is a description term `dt` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionTermElement(element) {
    return elementIsInstanceOf(element, "dt");
}
/**
 * Identifies whether a node is an HTML element.
 *
 * @param node - The node to check.
 */
function nodeIsElement(node) {
    if (!node) {
        return false;
    }
    return (node === null || node === void 0 ? void 0 : node.nodeType) === Node.ELEMENT_NODE;
}
/**
 * Identifies whether a node is an input element.
 *
 * @param node - The node to check.
 */
function nodeIsInputElement(node) {
    return nodeIsElement(node) && elementIsInputElement(node);
}
/**
 * Identifies whether a node is a form element.
 *
 * @param node - The node to check.
 */
function nodeIsFormElement(node) {
    return nodeIsElement(node) && elementIsFormElement(node);
}
function nodeIsTypeSubmitElement(node) {
    return nodeIsElement(node) && getPropertyOrAttribute(node, "type") === "submit";
}
function nodeIsButtonElement(node) {
    return (nodeIsElement(node) &&
        (elementIsInstanceOf(node, "button") ||
            getPropertyOrAttribute(node, "type") === "button"));
}
function nodeIsAnchorElement(node) {
    return nodeIsElement(node) && elementIsInstanceOf(node, "a");
}
/**
 * Returns a boolean representing the attribute value of an element.
 *
 * @param element
 * @param attributeName
 * @param checkString
 */
function getAttributeBoolean(element, attributeName, checkString = false) {
    if (checkString) {
        return getPropertyOrAttribute(element, attributeName) === "true";
    }
    return Boolean(getPropertyOrAttribute(element, attributeName));
}
/**
 * Get the value of a property or attribute from a FormFieldElement.
 *
 * @param element
 * @param attributeName
 */
function getPropertyOrAttribute(element, attributeName) {
    if (attributeName in element) {
        return element[attributeName];
    }
    return element.getAttribute(attributeName);
}
/**
 * Throttles a callback function to run at most once every `limit` milliseconds.
 *
 * @param callback - The callback function to throttle.
 * @param limit - The time in milliseconds to throttle the callback.
 */
function throttle(callback, limit) {
    let waitingDelay = false;
    return function (...args) {
        if (!waitingDelay) {
            callback.apply(this, args);
            waitingDelay = true;
            globalThis.setTimeout(() => (waitingDelay = false), limit);
        }
    };
}
/**
 * Debounces a callback function to run after a delay of `delay` milliseconds.
 *
 * @param callback - The callback function to debounce.
 * @param delay - The time in milliseconds to debounce the callback.
 * @param immediate - Determines whether the callback should run immediately.
 */
function debounce(callback, delay, immediate) {
    let timeout;
    return function (...args) {
        const callImmediately = !!immediate && !timeout;
        if (timeout) {
            globalThis.clearTimeout(timeout);
        }
        timeout = globalThis.setTimeout(() => {
            timeout = null;
            if (!callImmediately) {
                callback.apply(this, args);
            }
        }, delay);
        if (callImmediately) {
            callback.apply(this, args);
        }
    };
}
/**
 * Gathers and normalizes keywords from a potential submit button element. Used
 * to verify if the element submits a login or change password form.
 *
 * @param element - The element to gather keywords from.
 */
function getSubmitButtonKeywordsSet(element) {
    const keywords = [
        element.textContent,
        element.getAttribute("type"),
        element.getAttribute("value"),
        element.getAttribute("aria-label"),
        element.getAttribute("aria-labelledby"),
        element.getAttribute("aria-describedby"),
        element.getAttribute("title"),
        element.getAttribute("id"),
        element.getAttribute("name"),
        element.getAttribute("class"),
    ];
    const keywordsSet = new Set();
    for (let i = 0; i < keywords.length; i++) {
        if (typeof keywords[i] === "string") {
            // Iterate over all keywords metadata and split them by non-letter characters.
            // This ensures we check against individual words and not the entire string.
            keywords[i]
                .toLowerCase()
                .replace(/[-\s]/g, "")
                .split(/[^\p{L}]+/gu)
                .forEach((keyword) => {
                if (keyword) {
                    keywordsSet.add(keyword);
                }
            });
        }
    }
    return keywordsSet;
}
/**
 * Generates the origin and subdomain match patterns for the URL.
 *
 * @param url - The URL of the tab
 */
function generateDomainMatchPatterns(url) {
    try {
        const extensionUrlPattern = /^(chrome|chrome-extension|moz-extension|safari-web-extension):\/\/\/?/;
        if (extensionUrlPattern.test(url)) {
            return [];
        }
        // Add protocol to URL if it is missing to allow for parsing the hostname correctly
        const urlPattern = /^(https?|file):\/\/\/?/;
        if (!urlPattern.test(url)) {
            url = `https://${url}`;
        }
        let protocolGlob = "*://";
        if (url.startsWith("file:///")) {
            protocolGlob = "*:///"; // File URLs require three slashes to be a valid match pattern
        }
        const parsedUrl = new URL(url);
        const originMatchPattern = `${protocolGlob}${parsedUrl.hostname}/*`;
        const splitHost = parsedUrl.hostname.split(".");
        const domain = splitHost.slice(-2).join(".");
        const subDomainMatchPattern = `${protocolGlob}*.${domain}/*`;
        return [originMatchPattern, subDomainMatchPattern];
    }
    catch (_a) {
        return [];
    }
}
/**
 * Determines if the status code of the web response is invalid. An invalid status code is
 * any status code that is not in the 200-299 range.
 *
 * @param statusCode - The status code of the web response
 */
function isInvalidResponseStatusCode(statusCode) {
    return statusCode < 200 || statusCode >= 300;
}
/**
 * Determines if the current context is within a sandboxed iframe.
 */
function currentlyInSandboxedIframe() {
    var _a;
    return (String(self.origin).toLowerCase() === "null" ||
        ((_a = globalThis.frameElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("sandbox")) ||
        globalThis.location.hostname === "");
}
/**
 * This object allows us to map a special character to a key name. The key name is used
 * in gathering the i18n translation of the written version of the special character.
 */
const specialCharacterToKeyMap = {
    " ": "spaceCharacterDescriptor",
    "~": "tildeCharacterDescriptor",
    "`": "backtickCharacterDescriptor",
    "!": "exclamationCharacterDescriptor",
    "@": "atSignCharacterDescriptor",
    "#": "hashSignCharacterDescriptor",
    $: "dollarSignCharacterDescriptor",
    "%": "percentSignCharacterDescriptor",
    "^": "caretCharacterDescriptor",
    "&": "ampersandCharacterDescriptor",
    "*": "asteriskCharacterDescriptor",
    "(": "parenLeftCharacterDescriptor",
    ")": "parenRightCharacterDescriptor",
    "-": "hyphenCharacterDescriptor",
    _: "underscoreCharacterDescriptor",
    "+": "plusCharacterDescriptor",
    "=": "equalsCharacterDescriptor",
    "{": "braceLeftCharacterDescriptor",
    "}": "braceRightCharacterDescriptor",
    "[": "bracketLeftCharacterDescriptor",
    "]": "bracketRightCharacterDescriptor",
    "|": "pipeCharacterDescriptor",
    "\\": "backSlashCharacterDescriptor",
    ":": "colonCharacterDescriptor",
    ";": "semicolonCharacterDescriptor",
    '"': "doubleQuoteCharacterDescriptor",
    "'": "singleQuoteCharacterDescriptor",
    "<": "lessThanCharacterDescriptor",
    ">": "greaterThanCharacterDescriptor",
    ",": "commaCharacterDescriptor",
    ".": "periodCharacterDescriptor",
    "?": "questionCharacterDescriptor",
    "/": "forwardSlashCharacterDescriptor",
};
/**
 * Determines if the current rect values are not all 0.
 */
function rectHasSize(rect) {
    if (rect.right > 0 && rect.left > 0 && rect.top > 0 && rect.bottom > 0) {
        return true;
    }
    return false;
}
/**
 * Checks if all the values corresponding to the specified keys in an object are null.
 * If no keys are specified, checks all keys in the object.
 *
 * @param obj - The object to check.
 * @param keys - An optional array of keys to check in the object. Defaults to all keys.
 * @returns Returns true if all values for the specified keys (or all keys if none are provided) are null; otherwise, false.
 */
function areKeyValuesNull(obj, keys) {
    const keysToCheck = keys && keys.length > 0 ? keys : Object.keys(obj);
    return keysToCheck.every((key) => obj[key] == null);
}
/**
 * Ensures string matches allowed color scheme, defaulting/overriding to "normal".
 * https://drafts.csswg.org/css-color-adjust-1/#color-scheme-meta
 */
function matchAllowedColorSchemes(content) {
    switch (content) {
        case "light dark":
        case "dark light":
        case "light":
        case "dark":
            // content must match one of these types.
            return content;
        default:
            return "normal";
    }
}


/***/ }),

/***/ "./src/autofill/utils/svg-icons.ts":
/*!*****************************************!*\
  !*** ./src/autofill/utils/svg-icons.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circleCheckIcon: function() { return /* binding */ circleCheckIcon; },
/* harmony export */   creditCardIcon: function() { return /* binding */ creditCardIcon; },
/* harmony export */   globeIcon: function() { return /* binding */ globeIcon; },
/* harmony export */   idCardIcon: function() { return /* binding */ idCardIcon; },
/* harmony export */   keyIcon: function() { return /* binding */ keyIcon; },
/* harmony export */   lockIcon: function() { return /* binding */ lockIcon; },
/* harmony export */   logoIcon: function() { return /* binding */ logoIcon; },
/* harmony export */   logoLockedIcon: function() { return /* binding */ logoLockedIcon; },
/* harmony export */   passkeyIcon: function() { return /* binding */ passkeyIcon; },
/* harmony export */   plusIcon: function() { return /* binding */ plusIcon; },
/* harmony export */   refreshIcon: function() { return /* binding */ refreshIcon; },
/* harmony export */   spinnerIcon: function() { return /* binding */ spinnerIcon; },
/* harmony export */   viewCipherIcon: function() { return /* binding */ viewCipherIcon; }
/* harmony export */ });
const logoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill="#175DDC" d="M12.66.175A.566.566 0 0 0 12.25 0H1.75a.559.559 0 0 0-.409.175.561.561 0 0 0-.175.41v7c.002.532.105 1.06.305 1.554.189.488.444.948.756 1.368.322.42.682.81 1.076 1.163.365.335.75.649 1.152.939.35.248.718.483 1.103.706.385.222.656.372.815.45.16.08.29.141.386.182A.53.53 0 0 0 7 14a.509.509 0 0 0 .238-.055c.098-.043.225-.104.387-.182.162-.079.438-.23.816-.45.378-.222.75-.459 1.102-.707.403-.29.788-.604 1.154-.939a8.435 8.435 0 0 0 1.076-1.163c.312-.42.567-.88.757-1.367a4.19 4.19 0 0 0 .304-1.555v-7a.55.55 0 0 0-.174-.407Z"/><path fill="#fff" d="M7 12.365s4.306-2.18 4.306-4.717V1.5H7v10.865Z"/></svg>';
const logoLockedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M12.66.175A.566.566 0 0 0 12.25 0H1.75a.559.559 0 0 0-.409.175.561.561 0 0 0-.175.41v7c.002.532.105 1.06.305 1.554.189.488.444.948.756 1.368.322.42.682.81 1.076 1.163.365.335.75.649 1.152.939.35.248.718.483 1.103.706.385.222.656.372.815.45.16.08.29.141.386.182A.53.53 0 0 0 7 14a.509.509 0 0 0 .238-.055c.098-.043.225-.104.387-.182.162-.079.438-.23.816-.45.378-.222.75-.459 1.102-.707.403-.29.788-.604 1.154-.939a8.435 8.435 0 0 0 1.076-1.163c.312-.42.567-.88.757-1.367a4.19 4.19 0 0 0 .304-1.555v-7a.55.55 0 0 0-.174-.407Z"/><path fill="#fff" d="M7 12.365s4.306-2.18 4.306-4.717V1.5H7v10.865Z"/><circle cx="12.889" cy="12.889" r="4.889" fill="#F8F9FA"/><path fill="#555" d="M11.26 11.717h2.37v-.848c0-.313-.116-.58-.348-.8a1.17 1.17 0 0 0-.838-.332c-.327 0-.606.11-.838.332a1.066 1.066 0 0 0-.347.8v.848Zm3.851.424v2.546a.4.4 0 0 1-.13.3.44.44 0 0 1-.314.124h-4.445a.44.44 0 0 1-.315-.124.4.4 0 0 1-.13-.3V12.14a.4.4 0 0 1 .13-.3.44.44 0 0 1 .315-.124h.148v-.848c0-.542.204-1.008.612-1.397a2.044 2.044 0 0 1 1.462-.583c.568 0 1.056.194 1.463.583.408.39.611.855.611 1.397v.848h.149a.44.44 0 0 1 .315.124.4.4 0 0 1 .13.3Z"/></g><defs><clipPath id="a"><rect width="16" height="16" fill="#fff" rx="2"/></clipPath></defs></svg>';
const globeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Zm-7.806 6.4c-.825 1.65-1.688 2.1-2.194 2.1-.507 0-1.369-.45-2.194-2.1-.704-1.407-1.2-3.384-1.291-5.65h6.97c-.09 2.266-.587 4.243-1.291 5.65Zm1.291-7.15h-6.97c.09-2.266.587-4.243 1.291-5.65.825-1.65 1.688-2.1 2.194-2.1.507 0 1.369.45 2.194 2.1.704 1.407 1.2 3.384 1.291 5.65Zm1.501 1.5c-.108 2.928-.847 5.505-1.946 7.19a8.507 8.507 0 0 0 5.427-7.19h-3.48Zm3.481-1.5h-3.48c-.11-2.928-.848-5.505-1.947-7.19a8.507 8.507 0 0 1 5.427 7.19Zm-13.453 0c.108-2.928.847-5.505 1.946-7.19a8.507 8.507 0 0 0-5.427 7.19h3.48Zm-3.481 1.5a8.507 8.507 0 0 0 5.427 7.19c-1.099-1.685-1.838-4.262-1.946-7.19H3.533Z" clip-rule="evenodd"/></svg>';
const creditCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" d="M5.75 14.656c0-.535.434-.969.969-.969H8.53a.969.969 0 1 1 0 1.938H6.72a.969.969 0 0 1-.969-.969ZM11.719 13.688a.969.969 0 1 0 0 1.937h3.062a.969.969 0 1 0 0-1.938H11.72Z"/><path fill="#1B2029" fill-rule="evenodd" d="M2 6.6A2.6 2.6 0 0 1 4.6 4h14.8A2.6 2.6 0 0 1 22 6.6v10.3a2.6 2.6 0 0 1-2.6 2.6H4.6A2.6 2.6 0 0 1 2 16.9V6.6Zm2.6-1.1h14.8a1.1 1.1 0 0 1 1.1 1.1v1.275h-17V6.6a1.1 1.1 0 0 1 1.1-1.1Zm15.9 4.958V16.9a1.1 1.1 0 0 1-1.1 1.1H4.6a1.1 1.1 0 0 1-1.1-1.1v-6.442h17Z" clip-rule="evenodd"/></svg>';
const idCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" d="M13.25 9.313c0-.518.42-.938.938-.938h3.124a.937.937 0 1 1 0 1.875h-3.125a.937.937 0 0 1-.937-.938Zm.938 2.188a.937.937 0 1 0 0 1.875h1.874a.938.938 0 0 0 0-1.875h-1.875ZM10.75 9.625a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0ZM12 14.442c0-.387-.08-.769-.238-1.126-.157-.357-.387-.681-.677-.954s-.635-.49-1.014-.638a3.294 3.294 0 0 0-2.392 0c-.379.148-.724.365-1.014.638-.29.273-.52.597-.677.954-.157.357-.238.74-.238 1.126 0 .446.362.808.809.808h4.632a.809.809 0 0 0 .809-.808Z"/><path fill="#1B2029" fill-rule="evenodd" d="M4.6 4A2.6 2.6 0 0 0 2 6.6v9.8A2.6 2.6 0 0 0 4.6 19h14.8a2.6 2.6 0 0 0 2.6-2.6V6.6A2.6 2.6 0 0 0 19.4 4H4.6Zm14.8 1.5H4.6a1.1 1.1 0 0 0-1.1 1.1v9.8a1.1 1.1 0 0 0 1.1 1.1h14.8a1.1 1.1 0 0 0 1.1-1.1V6.6a1.1 1.1 0 0 0-1.1-1.1Z" clip-rule="evenodd"/></svg>';
const lockIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#1B2029" d="M10 10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5A.75.75 0 0 0 10 10Z"/><path fill="#1B2029" fill-rule="evenodd" d="M4 4a4 4 0 0 1 7.153-2.462.75.75 0 1 1-1.182.924A2.5 2.5 0 0 0 5.5 4v1H13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4ZM3 6.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H3Z" clip-rule="evenodd"/></svg>';
const plusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#1B2029" d="M8 1.006a.75.75 0 0 1 .75.75V7.25h5.517a.75.75 0 0 1 0 1.5H8.75v5.537a.75.75 0 0 1-1.5 0V8.75H1.746a.75.75 0 1 1 0-1.5H7.25V1.756a.75.75 0 0 1 .75-.75Z"/></svg>';
const viewCipherIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" d="M20 15.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v7A.75.75 0 0 1 7 11V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7a.75.75 0 0 1 0-1.5h7Z"/><path fill="#1B2029" d="M4 8.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1.25a.75.75 0 0 1 1.5 0V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.25a.75.75 0 0 1 0 1.5H4Z"/><path fill="#1B2029" d="M12 6.75c0 .414.336.75.75.75h2.69l-8.22 8.22a.75.75 0 1 0 1.06 1.06l8.22-8.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75Z"/></svg>';
const passkeyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#1B2029" fill-rule="evenodd" d="M11 3c0 1.026-.514 1.93-1.3 2.472a6.373 6.373 0 0 1 .465.143 5.899 5.899 0 0 1 1.86 1.054c.455.385.836.836 1.125 1.335a.75.75 0 1 1-1.3.75 3.583 3.583 0 0 0-.793-.94 4.4 4.4 0 0 0-1.66-.87 5.089 5.089 0 0 0-3.065.086 4.4 4.4 0 0 0-1.389.784c-.33.28-.596.598-.793.94a.75.75 0 0 1-1.3-.75c.289-.5.67-.95 1.124-1.335a5.899 5.899 0 0 1 1.861-1.054 6.363 6.363 0 0 1 .465-.143A3 3 0 1 1 11 3ZM8 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7.83 14a3.001 3.001 0 1 1 0-2h4.582a.25.25 0 0 1 .156.055l.972.777a.56.56 0 0 1 .046.832L12.41 14.84a.547.547 0 0 1-.824-.059L11 14h-.25l-.6.8a.5.5 0 0 1-.8 0l-.6-.8h-.92ZM4.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>';
const circleCheckIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g fill="#1B2029" clip-path="url(#a)"><path d="M12.03 6.28a.75.75 0 0 0-1.06-1.06L6.75 9.44 5.03 7.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.75-4.75Z"/><path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>';
const spinnerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g fill="#1B2029" clip-path="url(#a)"><path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14.5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM11.536 11.536a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12ZM9.5 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM0 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM4.464 13.657a1.5 1.5 0 1 1-2.12-2.121 1.5 1.5 0 0 1 2.12 2.12ZM2.343 2.343a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.12-2.12Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>';
const keyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g fill="#1B2029" clip-path="url(#a)"><path d="M15.75 9.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/><path fill-rule="evenodd" d="M14.5 17a7.473 7.473 0 0 1-3.055-.648L10.75 17v1.5a1 1 0 0 1-1 1h-1.5V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707L7.32 11.68A7.5 7.5 0 1 1 14.5 17Zm-5.482-4.896-.261-.86a6 6 0 1 1 3.3 3.738l-.909-.406-1.898 1.772V18h-2.5v2.5H3.5v-2.879l5.518-5.517Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>';
const refreshIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" fill-rule="evenodd" d="M3.052 10.777a.75.75 0 0 0 1.49.162c.393-3.61 3.514-6.443 7.329-6.443 2.737 0 5.12 1.46 6.39 3.62h-1.993a.75.75 0 0 0 0 1.5h3.981a.75.75 0 0 0 .75-.75V4.883a.75.75 0 1 0-1.5 0v2.38a8.897 8.897 0 0 0-7.628-4.267c-4.566 0-8.343 3.395-8.82 7.78Zm17.89 2.44a.75.75 0 0 0-1.49-.162c-.393 3.61-3.514 6.442-7.329 6.442a7.396 7.396 0 0 1-6.39-3.62h1.996a.75.75 0 0 0 0-1.5H3.747a.75.75 0 0 0-.75.75v3.983a.75.75 0 0 0 1.5 0v-2.376a8.897 8.897 0 0 0 7.626 4.263c4.566 0 8.343-3.395 8.82-7.78Zm-8.19-3.78a.75.75 0 0 0-1.5 0v1.594l-1.497-.49a.75.75 0 0 0-.467 1.425l1.51.494-.942 1.32a.75.75 0 1 0 1.22.871l.925-1.295.925 1.295a.75.75 0 1 0 1.22-.871l-.941-1.32 1.51-.494a.75.75 0 1 0-.467-1.426l-1.497.49V9.438Z" clip-rule="evenodd"/></svg>';


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
/*!******************************************!*\
  !*** ./src/autofill/notification/bar.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendHeaderMessageToTitle: function() { return /* binding */ appendHeaderMessageToTitle; },
/* harmony export */   getConfirmationHeaderMessage: function() { return /* binding */ getConfirmationHeaderMessage; },
/* harmony export */   getNotificationHeaderMessage: function() { return /* binding */ getNotificationHeaderMessage; },
/* harmony export */   getNotificationTestId: function() { return /* binding */ getNotificationTestId; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "../../node_modules/lit/index.js");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _bitwarden_common_platform_services_console_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/services/console-log.service */ "../../libs/common/src/platform/services/console-log.service.ts");
/* harmony import */ var _content_components_notification_at_risk_password_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/components/notification/at-risk-password/container */ "./src/autofill/content/components/notification/at-risk-password/container.ts");
/* harmony import */ var _content_components_notification_confirmation_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/components/notification/confirmation/container */ "./src/autofill/content/components/notification/confirmation/container.ts");
/* harmony import */ var _content_components_notification_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/components/notification/container */ "./src/autofill/content/components/notification/container.ts");
/* harmony import */ var _content_components_signals_selected_folder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/components/signals/selected-folder */ "./src/autofill/content/components/signals/selected-folder.ts");
/* harmony import */ var _content_components_signals_selected_vault__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/components/signals/selected-vault */ "./src/autofill/content/components/signals/selected-vault.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/autofill/utils/index.ts");
/* harmony import */ var _utils_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/svg-icons */ "./src/autofill/utils/svg-icons.ts");
/* harmony import */ var _abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./abstractions/notification-bar */ "./src/autofill/notification/abstractions/notification-bar.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const logService = new _bitwarden_common_platform_services_console_log_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleLogService(false);
let notificationBarIframeInitData = {};
let windowMessageOrigin;
let useComponentBar = false;
const notificationBarWindowMessageHandlers = {
    initNotificationBar: ({ message }) => initNotificationBar(message),
    saveCipherAttemptCompleted: ({ message }) => useComponentBar
        ? handleSaveCipherConfirmation(message)
        : handleSaveCipherAttemptCompletedMessage(message),
};
globalThis.addEventListener("load", load);
function load() {
    setupWindowMessageListener();
    sendPlatformMessage({ command: "notificationRefreshFlagValue" }, (flagValue) => {
        useComponentBar = flagValue;
        applyNotificationBarStyle();
    });
}
function applyNotificationBarStyle() {
    if (!useComponentBar) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        __webpack_require__(/*! ./bar.scss */ "./src/autofill/notification/bar.scss");
    }
    postMessageToParent({ command: "initNotificationBar" });
}
function getI18n() {
    return {
        appName: chrome.i18n.getMessage("appName"),
        atRiskPassword: chrome.i18n.getMessage("atRiskPassword"),
        changePassword: chrome.i18n.getMessage("changePassword"),
        close: chrome.i18n.getMessage("close"),
        collection: chrome.i18n.getMessage("collection"),
        folder: chrome.i18n.getMessage("folder"),
        loginSaveConfirmation: chrome.i18n.getMessage("loginSaveConfirmation"),
        loginSaveSuccess: chrome.i18n.getMessage("loginSaveSuccess"),
        loginUpdatedConfirmation: chrome.i18n.getMessage("loginUpdatedConfirmation"),
        loginUpdateSuccess: chrome.i18n.getMessage("loginUpdateSuccess"),
        loginUpdateTaskSuccess: chrome.i18n.getMessage("loginUpdateTaskSuccess"),
        loginUpdateTaskSuccessAdditional: chrome.i18n.getMessage("loginUpdateTaskSuccessAdditional"),
        myVault: chrome.i18n.getMessage("myVault"),
        never: chrome.i18n.getMessage("never"),
        newItem: chrome.i18n.getMessage("newItem"),
        nextSecurityTaskAction: chrome.i18n.getMessage("nextSecurityTaskAction"),
        notificationAddDesc: chrome.i18n.getMessage("notificationAddDesc"),
        notificationAddSave: chrome.i18n.getMessage("notificationAddSave"),
        notificationChangeDesc: chrome.i18n.getMessage("notificationChangeDesc"),
        notificationEdit: chrome.i18n.getMessage("edit"),
        notificationEditTooltip: chrome.i18n.getMessage("notificationEditTooltip"),
        notificationLoginSaveConfirmation: chrome.i18n.getMessage("notificationLoginSaveConfirmation"),
        notificationLoginUpdatedConfirmation: chrome.i18n.getMessage("notificationLoginUpdatedConfirmation"),
        notificationUnlock: chrome.i18n.getMessage("notificationUnlock"),
        notificationUnlockDesc: chrome.i18n.getMessage("notificationUnlockDesc"),
        notificationUpdate: chrome.i18n.getMessage("notificationChangeSave"),
        notificationViewAria: chrome.i18n.getMessage("notificationViewAria"),
        saveAction: chrome.i18n.getMessage("notificationAddSave"),
        saveAsNewLoginAction: chrome.i18n.getMessage("saveAsNewLoginAction"),
        saveFailure: chrome.i18n.getMessage("saveFailure"),
        saveFailureDetails: chrome.i18n.getMessage("saveFailureDetails"),
        saveLogin: chrome.i18n.getMessage("saveLogin"),
        typeLogin: chrome.i18n.getMessage("typeLogin"),
        unlockToSave: chrome.i18n.getMessage("unlockToSave"),
        updateLogin: chrome.i18n.getMessage("updateLogin"),
        updateLoginAction: chrome.i18n.getMessage("updateLoginAction"),
        vault: chrome.i18n.getMessage("vault"),
        view: chrome.i18n.getMessage("view"),
    };
}
/**
 * Attempts to locate an element by ID within a template’s content and casts it to the specified type.
 *
 * @param templateElement - The template whose content will be searched for the element.
 * @param elementId - The ID of the element being searched for.
 * @returns The typed element if found, otherwise log error.
 *
 */
const findElementById = (templateElement, elementId) => {
    const element = templateElement.content.getElementById(elementId);
    if (!element) {
        throw new Error(`Element with ID "${elementId}" not found in template.`);
    }
    return element;
};
/**
 * Returns the localized header message for the notification bar based on the notification type.
 *
 * @returns The localized header message string, or undefined if the type is not recognized.
 */
function getNotificationHeaderMessage(i18n, type) {
    return type
        ? {
            [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Add]: i18n.saveLogin,
            [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Change]: i18n.updateLogin,
            [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Unlock]: i18n.unlockToSave,
            [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.AtRiskPassword]: i18n.atRiskPassword,
        }[type]
        : undefined;
}
/**
 * Returns the localized header message for the confirmation message bar based on the notification type.
 *
 * @returns The localized header message string, or undefined if the type is not recognized.
 */
function getConfirmationHeaderMessage(i18n, type, error) {
    if (error) {
        return i18n.saveFailure;
    }
    return type
        ? {
            [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Add]: i18n.loginSaveSuccess,
            [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Change]: i18n.loginUpdateSuccess,
            [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Unlock]: "",
            [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.AtRiskPassword]: "",
        }[type]
        : undefined;
}
/**
 * Appends the header message to the document title.
 * If the header message is already present, it avoids duplication.
 */
function appendHeaderMessageToTitle(headerMessage) {
    if (!headerMessage) {
        return;
    }
    const baseTitle = document.title.split(" - ")[0];
    document.title = `${baseTitle} - ${headerMessage}`;
}
/**
 * Determines the effective notification type to use based on initialization data.
 *
 * If the vault is locked, the notification type will be set to `Unlock`.
 * Otherwise, the type provided in the init data is returned.
 *
 * @returns The resolved `NotificationType` to be used for rendering logic.
 */
function resolveNotificationType(initData) {
    if (initData.isVaultLocked) {
        return _abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Unlock;
    }
    return initData.type;
}
/**
 * Returns the appropriate test ID based on the resolved notification type.
 *
 * @param type - The resolved NotificationType.
 * @param isConfirmation - Optional flag for confirmation vs. notification container.
 */
function getNotificationTestId(notificationType, isConfirmation = false) {
    if (isConfirmation) {
        return "confirmation-notification-bar";
    }
    return {
        [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Unlock]: "unlock-notification-bar",
        [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Add]: "save-notification-bar",
        [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.Change]: "update-notification-bar",
        [_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.AtRiskPassword]: "at-risk-password-notification-bar",
    }[notificationType];
}
/**
 * Sets the text content of an element identified by ID within a template's content.
 *
 * @param template - The template whose content will be searched for the element.
 * @param elementId - The ID of the element whose text content is to be set.
 * @param text - The text content to set for the specified element.
 * @returns void
 *
 * This function attempts to locate an element by its ID within the content of a given HTML template.
 * If the element is found, it updates the element's text content with the provided text.
 * If the element is not found, the function does nothing, ensuring that the operation is safe and does not throw errors.
 */
function setElementText(template, elementId, text) {
    const element = template.content.getElementById(elementId);
    if (element) {
        element.textContent = text;
    }
}
function initNotificationBar(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const { initData } = message;
        if (!initData) {
            return;
        }
        notificationBarIframeInitData = initData;
        const { isVaultLocked, removeIndividualVault: personalVaultDisallowed, // renamed to avoid local method collision
        theme, } = notificationBarIframeInitData;
        const i18n = getI18n();
        const resolvedTheme = getResolvedTheme(theme !== null && theme !== void 0 ? theme : _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Light);
        // https://drafts.csswg.org/css-color-adjust-1/#preferred
        // Prevents preferred color scheme from forcing an opaque background in the iframe
        const colorScheme = new URLSearchParams(window.location.search).get("colorScheme") || "";
        const allowedColorScheme = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.matchAllowedColorSchemes)(colorScheme);
        const meta = document.createElement("meta");
        meta.setAttribute("name", "color-scheme");
        meta.setAttribute("content", allowedColorScheme);
        document.getElementsByTagName("head")[0].appendChild(meta);
        if (useComponentBar) {
            const resolvedType = resolveNotificationType(notificationBarIframeInitData);
            const headerMessage = getNotificationHeaderMessage(i18n, resolvedType);
            const notificationTestId = getNotificationTestId(resolvedType);
            appendHeaderMessageToTitle(headerMessage);
            document.body.innerHTML = "";
            // Current implementations utilize a require for scss files which creates the need to remove the node.
            document.head.querySelectorAll('link[rel="stylesheet"]').forEach((node) => node.remove());
            if (isVaultLocked) {
                const notificationConfig = Object.assign(Object.assign({}, notificationBarIframeInitData), { headerMessage, type: resolvedType, notificationTestId, theme: resolvedTheme, personalVaultIsAllowed: !personalVaultDisallowed, handleCloseNotification,
                    handleEditOrUpdateAction,
                    i18n });
                const handleSaveAction = () => {
                    sendSaveCipherMessage(true);
                    (0,lit__WEBPACK_IMPORTED_MODULE_0__.render)((0,_content_components_notification_container__WEBPACK_IMPORTED_MODULE_5__.NotificationContainer)(Object.assign(Object.assign({}, notificationConfig), { handleSaveAction: () => { }, isLoading: true })), document.body);
                };
                const UnlockNotification = (0,_content_components_notification_container__WEBPACK_IMPORTED_MODULE_5__.NotificationContainer)(Object.assign(Object.assign({}, notificationConfig), { handleSaveAction }));
                return (0,lit__WEBPACK_IMPORTED_MODULE_0__.render)(UnlockNotification, document.body);
            }
            // Handle AtRiskPasswordNotification render
            if (notificationBarIframeInitData.type === _abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_10__.NotificationTypes.AtRiskPassword) {
                return (0,lit__WEBPACK_IMPORTED_MODULE_0__.render)((0,_content_components_notification_at_risk_password_container__WEBPACK_IMPORTED_MODULE_3__.AtRiskNotification)(Object.assign(Object.assign({}, notificationBarIframeInitData), { type: notificationBarIframeInitData.type, theme: resolvedTheme, i18n, params: initData.params, handleCloseNotification })), document.body);
            }
            // Default scenario: add or update password
            const orgId = _content_components_signals_selected_vault__WEBPACK_IMPORTED_MODULE_7__.selectedVault.get();
            yield Promise.all([
                new Promise((resolve) => sendPlatformMessage({ command: "bgGetOrgData" }, resolve)),
                new Promise((resolve) => sendPlatformMessage({ command: "bgGetFolderData" }, resolve)),
                new Promise((resolve) => sendPlatformMessage({ command: "bgGetDecryptedCiphers" }, resolve)),
                new Promise((resolve) => sendPlatformMessage({ command: "bgGetCollectionData", orgId }, resolve)),
            ]).then(([organizations, folders, ciphers, collections]) => {
                notificationBarIframeInitData = Object.assign(Object.assign({}, notificationBarIframeInitData), { organizations,
                    folders,
                    ciphers,
                    collections });
                // @TODO use context to avoid prop drilling
                return (0,lit__WEBPACK_IMPORTED_MODULE_0__.render)((0,_content_components_notification_container__WEBPACK_IMPORTED_MODULE_5__.NotificationContainer)(Object.assign(Object.assign({}, notificationBarIframeInitData), { headerMessage, type: resolvedType, theme: resolvedTheme, notificationTestId, personalVaultIsAllowed: !personalVaultDisallowed, handleCloseNotification,
                    handleSaveAction,
                    handleEditOrUpdateAction,
                    i18n })), document.body);
            });
        }
        else {
            setNotificationBarTheme();
            document.getElementById("logo").src = isVaultLocked
                ? chrome.runtime.getURL("images/icon38_locked.png")
                : chrome.runtime.getURL("images/icon38.png");
            setupLogoLink(i18n.appName);
            // i18n for "Add" template
            const addTemplate = document.getElementById("template-add");
            const neverButton = findElementById(addTemplate, "never-save");
            neverButton.textContent = i18n.never;
            const selectFolder = findElementById(addTemplate, "select-folder");
            selectFolder.hidden = isVaultLocked || removeIndividualVault();
            selectFolder.setAttribute("aria-label", i18n.folder);
            const addButton = findElementById(addTemplate, "add-save");
            addButton.textContent = i18n.notificationAddSave;
            const addEditButton = findElementById(addTemplate, "add-edit");
            // If Remove Individual Vault policy applies, "Add" opens the edit tab, so we hide the Edit button
            addEditButton.hidden = removeIndividualVault();
            addEditButton.textContent = i18n.notificationEdit;
            setElementText(addTemplate, "add-text", i18n.notificationAddDesc);
            // i18n for "Change" (update password) template
            const changeTemplate = document.getElementById("template-change");
            const changeButton = findElementById(changeTemplate, "change-save");
            changeButton.textContent = i18n.notificationUpdate;
            const changeEditButton = findElementById(changeTemplate, "change-edit");
            changeEditButton.textContent = i18n.notificationEdit;
            setElementText(changeTemplate, "change-text", i18n.notificationChangeDesc);
            // i18n for "Unlock" (unlock extension) template
            const unlockTemplate = document.getElementById("template-unlock");
            const unlockButton = findElementById(unlockTemplate, "unlock-vault");
            unlockButton.textContent = i18n.notificationUnlock;
            setElementText(unlockTemplate, "unlock-text", i18n.notificationUnlockDesc);
            // i18n for body content
            const closeButton = document.getElementById("close-button");
            if (closeButton) {
                closeButton.title = i18n.close;
            }
            const notificationType = initData.type;
            if (notificationType === "add") {
                handleTypeAdd();
            }
            else if (notificationType === "change") {
                handleTypeChange();
            }
            else if (notificationType === "unlock") {
                handleTypeUnlock();
            }
            closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", handleCloseNotification);
            globalThis.addEventListener("resize", adjustHeight);
            adjustHeight();
        }
        function handleEditOrUpdateAction(e) {
            const notificationType = initData === null || initData === void 0 ? void 0 : initData.type;
            e.preventDefault();
            notificationType === "add" ? sendSaveCipherMessage(true) : sendSaveCipherMessage(false);
        }
    });
}
function handleCloseNotification(e) {
    e.preventDefault();
    sendPlatformMessage({
        command: "bgCloseNotificationBar",
    });
}
function handleSaveAction(e) {
    const selectedVault = _content_components_signals_selected_vault__WEBPACK_IMPORTED_MODULE_7__.selectedVault.get();
    const selectedFolder = _content_components_signals_selected_folder__WEBPACK_IMPORTED_MODULE_6__.selectedFolder.get();
    if (selectedVault.length > 1) {
        openAddEditVaultItemPopout(e, Object.assign({ organizationId: selectedVault }, ((selectedFolder === null || selectedFolder === void 0 ? void 0 : selectedFolder.length) > 1 ? { folder: selectedFolder } : {})));
        handleCloseNotification(e);
        return;
    }
    e.preventDefault();
    sendSaveCipherMessage(removeIndividualVault(), selectedFolder);
    if (removeIndividualVault()) {
        return;
    }
}
function handleTypeAdd() {
    setContent(document.getElementById("template-add"));
    const addButton = document.getElementById("add-save");
    addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", (e) => {
        e.preventDefault();
        // If Remove Individual Vault policy applies, "Add" opens the edit tab
        sendSaveCipherMessage(removeIndividualVault(), getSelectedFolder());
    });
    if (removeIndividualVault()) {
        // Everything past this point is only required if user has an individual vault
        return;
    }
    const editButton = document.getElementById("add-edit");
    editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(true, getSelectedFolder());
    });
    const neverButton = document.getElementById("never-save");
    neverButton === null || neverButton === void 0 ? void 0 : neverButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendPlatformMessage({
            command: "bgNeverSave",
        });
    });
    loadFolderSelector();
}
function handleTypeChange() {
    setContent(document.getElementById("template-change"));
    const changeButton = document.getElementById("change-save");
    changeButton === null || changeButton === void 0 ? void 0 : changeButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(false);
    });
    const editButton = document.getElementById("change-edit");
    editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(true);
    });
}
function sendSaveCipherMessage(edit, folder) {
    sendPlatformMessage({
        command: "bgSaveCipher",
        folder,
        edit,
    });
}
function handleSaveCipherAttemptCompletedMessage(message) {
    const addSaveButtonContainers = document.querySelectorAll(".add-change-cipher-buttons");
    const notificationBarOuterWrapper = document.getElementById("notification-bar-outer-wrapper");
    if (message === null || message === void 0 ? void 0 : message.error) {
        addSaveButtonContainers.forEach((element) => {
            element.textContent = chrome.i18n.getMessage("saveCipherAttemptFailed");
            element.classList.add("error-message");
            notificationBarOuterWrapper === null || notificationBarOuterWrapper === void 0 ? void 0 : notificationBarOuterWrapper.classList.add("error-event");
        });
        adjustHeight();
        logService.error(`Error encountered when saving credentials: ${message.error}`);
        return;
    }
    const messageName = notificationBarIframeInitData.type === "add" ? "passwordSaved" : "passwordUpdated";
    addSaveButtonContainers.forEach((element) => {
        element.textContent = chrome.i18n.getMessage(messageName);
        element.prepend((0,_utils__WEBPACK_IMPORTED_MODULE_8__.buildSvgDomElement)(_utils_svg_icons__WEBPACK_IMPORTED_MODULE_9__.circleCheckIcon));
        element.classList.add("success-message");
        notificationBarOuterWrapper === null || notificationBarOuterWrapper === void 0 ? void 0 : notificationBarOuterWrapper.classList.add("success-event");
    });
    adjustHeight();
    globalThis.setTimeout(() => sendPlatformMessage({ command: "bgCloseNotificationBar", fadeOutNotification: true }), 3000);
}
function openAddEditVaultItemPopout(e, options) {
    e.preventDefault();
    sendPlatformMessage(Object.assign({ command: "bgOpenAddEditVaultItemPopout" }, options));
}
function openViewVaultItemPopout(cipherId) {
    sendPlatformMessage({
        command: "bgOpenViewVaultItemPopout",
        cipherId,
    });
}
function handleSaveCipherConfirmation(message) {
    const { theme, type } = notificationBarIframeInitData;
    const { error, data } = message;
    const { cipherId, task, itemName } = data || {};
    const i18n = getI18n();
    const resolvedTheme = getResolvedTheme(theme !== null && theme !== void 0 ? theme : _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Light);
    const resolvedType = resolveNotificationType(notificationBarIframeInitData);
    const headerMessage = getConfirmationHeaderMessage(i18n, resolvedType, error);
    const notificationTestId = getNotificationTestId(resolvedType, true);
    appendHeaderMessageToTitle(headerMessage);
    globalThis.setTimeout(() => sendPlatformMessage({ command: "bgCloseNotificationBar" }), 5000);
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.render)((0,_content_components_notification_confirmation_container__WEBPACK_IMPORTED_MODULE_4__.NotificationConfirmationContainer)(Object.assign(Object.assign({}, notificationBarIframeInitData), { error,
        handleCloseNotification, handleOpenTasks: () => sendPlatformMessage({ command: "bgOpenAtRiskPasswords" }), handleOpenVault: (e) => cipherId ? openViewVaultItemPopout(cipherId) : openAddEditVaultItemPopout(e, {}), headerMessage,
        i18n, itemName: itemName !== null && itemName !== void 0 ? itemName : i18n.typeLogin, notificationTestId,
        task, theme: resolvedTheme, type: type })), document.body);
}
function handleTypeUnlock() {
    setContent(document.getElementById("template-unlock"));
    const unlockButton = document.getElementById("unlock-vault");
    unlockButton === null || unlockButton === void 0 ? void 0 : unlockButton.addEventListener("click", (e) => {
        sendPlatformMessage({
            command: "bgReopenUnlockPopout",
        });
    });
}
function setContent(template) {
    const content = document.getElementById("content");
    while (content === null || content === void 0 ? void 0 : content.firstChild) {
        content === null || content === void 0 ? void 0 : content.removeChild(content.firstChild);
    }
    const newElement = template.content.cloneNode(true);
    content === null || content === void 0 ? void 0 : content.appendChild(newElement);
}
function sendPlatformMessage(msg, responseCallback) {
    chrome.runtime.sendMessage(msg, (response) => {
        if (responseCallback) {
            responseCallback(response);
        }
    });
}
function loadFolderSelector() {
    const populateFolderData = (folderData) => {
        const select = document.getElementById("select-folder");
        if (!select) {
            return;
        }
        if (!(folderData === null || folderData === void 0 ? void 0 : folderData.length)) {
            select.appendChild(new Option(chrome.i18n.getMessage("noFoldersFound"), undefined, true));
            select.setAttribute("disabled", "true");
            return;
        }
        select.appendChild(new Option(chrome.i18n.getMessage("selectFolder"), undefined, true));
        folderData.forEach((folder) => {
            // Select "No Folder" (id=null) folder by default
            select.appendChild(new Option(folder.name, folder.id || "", false));
        });
    };
    sendPlatformMessage({ command: "bgGetFolderData" }, populateFolderData);
}
function getSelectedFolder() {
    return document.getElementById("select-folder").value;
}
function removeIndividualVault() {
    return Boolean(notificationBarIframeInitData === null || notificationBarIframeInitData === void 0 ? void 0 : notificationBarIframeInitData.removeIndividualVault);
}
function adjustHeight() {
    const body = document.querySelector("body");
    if (!body) {
        return;
    }
    const data = {
        height: body.scrollHeight,
    };
    sendPlatformMessage({
        command: "bgAdjustNotificationBar",
        data,
    });
}
function setupWindowMessageListener() {
    globalThis.addEventListener("message", handleWindowMessage);
}
function handleWindowMessage(event) {
    if (!windowMessageOrigin) {
        windowMessageOrigin = event.origin;
    }
    if (event.origin !== windowMessageOrigin) {
        return;
    }
    const message = event.data;
    const handler = notificationBarWindowMessageHandlers[message.command];
    if (!handler) {
        return;
    }
    handler({ message });
}
function setupLogoLink(linkText) {
    const logoLink = document.getElementById("logo-link");
    logoLink.title = linkText;
    const setWebVaultUrlLink = (webVaultURL) => {
        const newVaultURL = webVaultURL && decodeURIComponent(webVaultURL);
        if (newVaultURL && newVaultURL !== logoLink.href) {
            logoLink.href = newVaultURL;
        }
    };
    sendPlatformMessage({ command: "getWebVaultUrlForNotification" }, setWebVaultUrlLink);
}
function getTheme(globalThis, theme) {
    if (theme === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.System) {
        return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
            ? _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Dark
            : _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Light;
    }
    return theme;
}
function getResolvedTheme(theme) {
    const themeType = getTheme(globalThis, theme);
    // There are other possible passed theme values, but for now, resolve to dark or light
    const resolvedTheme = themeType === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Dark ? _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Dark : _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Light;
    return resolvedTheme;
}
function setNotificationBarTheme() {
    const theme = getTheme(globalThis, notificationBarIframeInitData.theme);
    document.documentElement.classList.add(`theme_${theme}`);
}
function postMessageToParent(message) {
    globalThis.parent.postMessage(message, windowMessageOrigin || "*");
}

}();
/******/ })()
;