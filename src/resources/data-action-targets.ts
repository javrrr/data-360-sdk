import { DataActionTargetsServiceBase } from "../generated/services/data-action-targets.base.js";
import type { RequestOptions } from "../core/types.js";
import type { CdpDataActionTargetSigningKeyOutputRepresentation } from "../schemas.js";

export class DataActionTargetsService extends DataActionTargetsServiceBase {
  /** Alias for getSigningKey — get signing key for a data action target. */
  async getSigningKey(apiName: string, options?: RequestOptions): Promise<CdpDataActionTargetSigningKeyOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(apiName)}/signing-key`, options);
  }

  /** Alias for createSigningKey — reset signing key for a data action target. */
  async resetSigningKey(apiName: string, options?: RequestOptions): Promise<CdpDataActionTargetSigningKeyOutputRepresentation> {
    return this.createSigningKey(apiName, options);
  }
}
