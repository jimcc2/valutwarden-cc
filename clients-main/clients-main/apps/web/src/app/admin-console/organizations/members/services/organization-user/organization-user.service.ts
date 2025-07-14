import { Injectable } from "@angular/core";
import { combineLatest, filter, map, Observable, switchMap } from "rxjs";

import {
  OrganizationUserConfirmRequest,
  OrganizationUserApiService,
} from "@bitwarden/admin-console/common";
import { Organization } from "@bitwarden/common/admin-console/models/domain/organization";
import { AccountService } from "@bitwarden/common/auth/abstractions/account.service";
import { getUserId } from "@bitwarden/common/auth/services/account.service";
import { EncryptService } from "@bitwarden/common/key-management/crypto/abstractions/encrypt.service";
import { I18nService } from "@bitwarden/common/platform/abstractions/i18n.service";
import { OrganizationId } from "@bitwarden/common/types/guid";
import { KeyService } from "@bitwarden/key-management";

import { OrganizationUserView } from "../../../core/views/organization-user.view";

@Injectable({
  providedIn: "root",
})
export class OrganizationUserService {
  constructor(
    protected keyService: KeyService,
    private encryptService: EncryptService,
    private organizationUserApiService: OrganizationUserApiService,
    private accountService: AccountService,
    private i18nService: I18nService,
  ) {}

  private orgKey$(organization: Organization) {
    return this.accountService.activeAccount$.pipe(
      getUserId,
      switchMap((userId) => this.keyService.orgKeys$(userId)),
      filter((orgKeys) => !!orgKeys),
      map((organizationKeysById) => organizationKeysById[organization.id as OrganizationId]),
    );
  }

  confirmUser(
    organization: Organization,
    user: OrganizationUserView,
    publicKey: Uint8Array,
  ): Observable<void> {
    const encryptedCollectionName$ = this.orgKey$(organization).pipe(
      switchMap((orgKey) =>
        this.encryptService.encryptString(this.i18nService.t("myItems"), orgKey),
      ),
    );

    const encryptedKey$ = this.orgKey$(organization).pipe(
      switchMap((orgKey) => this.encryptService.encapsulateKeyUnsigned(orgKey, publicKey)),
    );

    return combineLatest([encryptedKey$, encryptedCollectionName$]).pipe(
      switchMap(([key, collectionName]) => {
        const request: OrganizationUserConfirmRequest = {
          key: key.encryptedString,
          defaultUserCollectionName: collectionName.encryptedString,
        };

        return this.organizationUserApiService.postOrganizationUserConfirm(
          organization.id,
          user.id,
          request,
        );
      }),
    );
  }
}
