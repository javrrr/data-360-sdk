import { IdentityResolutionsServiceBase } from "../generated/services/identity-resolutions.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  CdpIdentityResolutionConfigPatchInput,
  CdpIdentityResolutionOutputRepresentation,
} from "../schemas.js";

/**
 * Identity resolution operations.
 *
 * Path parameter semantics (worth calling out because the SDK parameter name
 * implies either option works): `get`, `delete`, `patch`, and `runNow` all
 * require the identity resolution's **id** (e.g. `1irKa000000KzoZIAS`), not
 * its `developerName`. The id is what appears in the list response. If you
 * only have a developer name, resolve it via `list()` first.
 */
export class IdentityResolutionsService extends IdentityResolutionsServiceBase {
  override async get(
    identityResolution: string,
    options?: RequestOptions,
  ): Promise<CdpIdentityResolutionOutputRepresentation> {
    return super.get(identityResolution, options);
  }

  override async delete(identityResolution: string, options?: RequestOptions): Promise<void> {
    return super.delete(identityResolution, options);
  }

  override async patch(
    identityResolution: string,
    body: CdpIdentityResolutionConfigPatchInput,
    options?: RequestOptions,
  ): Promise<CdpIdentityResolutionOutputRepresentation> {
    return super.patch(identityResolution, body, options);
  }
}
