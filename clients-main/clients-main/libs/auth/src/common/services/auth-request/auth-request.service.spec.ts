import { mock } from "jest-mock-extended";

import { ApiService } from "@bitwarden/common/abstractions/api.service";
import { AuthRequestResponse } from "@bitwarden/common/auth/models/response/auth-request.response";
import { EncryptService } from "@bitwarden/common/key-management/crypto/abstractions/encrypt.service";
import { FakeMasterPasswordService } from "@bitwarden/common/key-management/master-password/services/fake-master-password.service";
import { AuthRequestPushNotification } from "@bitwarden/common/models/response/notification.response";
import { AppIdService } from "@bitwarden/common/platform/abstractions/app-id.service";
import { Utils } from "@bitwarden/common/platform/misc/utils";
import { EncString } from "@bitwarden/common/platform/models/domain/enc-string";
import { SymmetricCryptoKey } from "@bitwarden/common/platform/models/domain/symmetric-crypto-key";
import { StateProvider } from "@bitwarden/common/platform/state";
import { UserId } from "@bitwarden/common/types/guid";
import { MasterKey, UserKey } from "@bitwarden/common/types/key";
import { KeyService } from "@bitwarden/key-management";

import { DefaultAuthRequestApiService } from "./auth-request-api.service";
import { AuthRequestService } from "./auth-request.service";

describe("AuthRequestService", () => {
  let sut: AuthRequestService;

  const stateProvider = mock<StateProvider>();
  let masterPasswordService: FakeMasterPasswordService;
  const appIdService = mock<AppIdService>();
  const keyService = mock<KeyService>();
  const encryptService = mock<EncryptService>();
  const apiService = mock<ApiService>();
  const authRequestApiService = mock<DefaultAuthRequestApiService>();

  let mockPrivateKey: Uint8Array;
  let mockPublicKey: Uint8Array;
  const mockUserId = Utils.newGuid() as UserId;

  beforeEach(() => {
    jest.clearAllMocks();
    masterPasswordService = new FakeMasterPasswordService();

    sut = new AuthRequestService(
      appIdService,
      masterPasswordService,
      keyService,
      encryptService,
      apiService,
      stateProvider,
      authRequestApiService,
    );

    mockPrivateKey = new Uint8Array(64);
    mockPublicKey = new Uint8Array(64);
  });

  describe("authRequestPushNotification$", () => {
    it("should emit when sendAuthRequestPushNotification is called", () => {
      const notification = {
        id: "PUSH_NOTIFICATION",
        userId: "USER_ID",
      } as AuthRequestPushNotification;

      const spy = jest.fn();
      sut.authRequestPushNotification$.subscribe(spy);

      sut.sendAuthRequestPushNotification(notification);

      expect(spy).toHaveBeenCalledWith("PUSH_NOTIFICATION");
    });
  });

  describe("AdminAuthRequest", () => {
    it("returns an error when userId isn't provided", async () => {
      await expect(sut.getAdminAuthRequest(undefined)).rejects.toThrow("User ID is required");
      await expect(sut.setAdminAuthRequest(undefined, undefined)).rejects.toThrow(
        "User ID is required",
      );
      await expect(sut.clearAdminAuthRequest(undefined)).rejects.toThrow("User ID is required");
    });

    it("does not allow clearing from setAdminAuthRequest", async () => {
      await expect(sut.setAdminAuthRequest(null, "USER_ID" as UserId)).rejects.toThrow(
        "Auth request is required",
      );
    });
  });

  describe("approveOrDenyAuthRequest", () => {
    beforeEach(() => {
      encryptService.rsaEncrypt.mockResolvedValue({
        encryptedString: "ENCRYPTED_STRING",
      } as EncString);
      encryptService.encapsulateKeyUnsigned.mockResolvedValue({
        encryptedString: "ENCRYPTED_STRING",
      } as EncString);
      appIdService.getAppId.mockResolvedValue("APP_ID");
    });
    it("should throw if auth request is missing id or key", async () => {
      const authRequestNoId = new AuthRequestResponse({ id: "", key: "KEY" });
      const authRequestNoPublicKey = new AuthRequestResponse({ id: "123", publicKey: "" });

      await expect(sut.approveOrDenyAuthRequest(true, authRequestNoId)).rejects.toThrow(
        "Auth request has no id",
      );
      await expect(sut.approveOrDenyAuthRequest(true, authRequestNoPublicKey)).rejects.toThrow(
        "Auth request has no public key",
      );
    });

    it("should use the user key if the master key and hash do not exist", async () => {
      keyService.getUserKey.mockResolvedValueOnce(
        new SymmetricCryptoKey(new Uint8Array(64)) as UserKey,
      );

      await sut.approveOrDenyAuthRequest(
        true,
        new AuthRequestResponse({ id: "123", publicKey: "KEY" }),
      );

      expect(encryptService.encapsulateKeyUnsigned).toHaveBeenCalledWith(
        new SymmetricCryptoKey(new Uint8Array(64)),
        expect.anything(),
      );
    });
  });
  describe("setUserKeyAfterDecryptingSharedUserKey", () => {
    it("decrypts and sets user key when given valid auth request response and private key", async () => {
      // Arrange
      const mockAuthReqResponse = {
        key: "authReqPublicKeyEncryptedUserKey",
      } as AuthRequestResponse;

      const mockDecryptedUserKey = {} as UserKey;
      jest.spyOn(sut, "decryptPubKeyEncryptedUserKey").mockResolvedValueOnce(mockDecryptedUserKey);

      keyService.setUserKey.mockResolvedValueOnce(undefined);

      // Act
      await sut.setUserKeyAfterDecryptingSharedUserKey(
        mockAuthReqResponse,
        mockPrivateKey,
        mockUserId,
      );

      // Assert
      expect(sut.decryptPubKeyEncryptedUserKey).toBeCalledWith(
        mockAuthReqResponse.key,
        mockPrivateKey,
      );
      expect(keyService.setUserKey).toBeCalledWith(mockDecryptedUserKey, mockUserId);
    });
  });

  describe("setKeysAfterDecryptingSharedMasterKeyAndHash", () => {
    it("decrypts and sets master key and hash and user key when given valid auth request response and private key", async () => {
      // Arrange
      const mockAuthReqResponse = {
        key: "authReqPublicKeyEncryptedMasterKey",
        masterPasswordHash: "authReqPublicKeyEncryptedMasterKeyHash",
      } as AuthRequestResponse;

      const mockDecryptedMasterKey = {} as MasterKey;
      const mockDecryptedMasterKeyHash = "mockDecryptedMasterKeyHash";
      const mockDecryptedUserKey = {} as UserKey;

      jest.spyOn(sut, "decryptPubKeyEncryptedMasterKeyAndHash").mockResolvedValueOnce({
        masterKey: mockDecryptedMasterKey,
        masterKeyHash: mockDecryptedMasterKeyHash,
      });

      masterPasswordService.masterKeySubject.next(undefined);
      masterPasswordService.masterKeyHashSubject.next(undefined);
      masterPasswordService.mock.decryptUserKeyWithMasterKey.mockResolvedValue(
        mockDecryptedUserKey,
      );
      keyService.setUserKey.mockResolvedValueOnce(undefined);

      // Act
      await sut.setKeysAfterDecryptingSharedMasterKeyAndHash(
        mockAuthReqResponse,
        mockPrivateKey,
        mockUserId,
      );

      // Assert
      expect(sut.decryptPubKeyEncryptedMasterKeyAndHash).toBeCalledWith(
        mockAuthReqResponse.key,
        mockAuthReqResponse.masterPasswordHash,
        mockPrivateKey,
      );
      expect(masterPasswordService.mock.setMasterKey).toHaveBeenCalledWith(
        mockDecryptedMasterKey,
        mockUserId,
      );
      expect(masterPasswordService.mock.setMasterKeyHash).toHaveBeenCalledWith(
        mockDecryptedMasterKeyHash,
        mockUserId,
      );
      expect(masterPasswordService.mock.decryptUserKeyWithMasterKey).toHaveBeenCalledWith(
        mockDecryptedMasterKey,
        mockUserId,
        undefined,
      );
      expect(keyService.setUserKey).toHaveBeenCalledWith(mockDecryptedUserKey, mockUserId);
    });
  });

  describe("decryptAuthReqPubKeyEncryptedUserKey", () => {
    it("returns a decrypted user key when given valid public key encrypted user key and an auth req private key", async () => {
      // Arrange
      const mockPubKeyEncryptedUserKey = "pubKeyEncryptedUserKey";
      const mockDecryptedUserKeyBytes = new Uint8Array(64);
      const mockDecryptedUserKey = new SymmetricCryptoKey(mockDecryptedUserKeyBytes) as UserKey;

      encryptService.decapsulateKeyUnsigned.mockResolvedValueOnce(
        new SymmetricCryptoKey(mockDecryptedUserKeyBytes),
      );

      // Act
      const result = await sut.decryptPubKeyEncryptedUserKey(
        mockPubKeyEncryptedUserKey,
        mockPrivateKey,
      );

      // Assert
      expect(encryptService.decapsulateKeyUnsigned).toBeCalledWith(
        new EncString(mockPubKeyEncryptedUserKey),
        mockPrivateKey,
      );
      expect(result).toEqual(mockDecryptedUserKey);
    });
  });

  describe("getFingerprintPhrase", () => {
    it("returns the same fingerprint regardless of email casing", () => {
      const email = "test@email.com";
      const emailUpperCase = email.toUpperCase();
      const phrase = sut.getFingerprintPhrase(email, mockPublicKey);
      const phraseUpperCase = sut.getFingerprintPhrase(emailUpperCase, mockPublicKey);
      expect(phrase).toEqual(phraseUpperCase);
    });
  });
});
