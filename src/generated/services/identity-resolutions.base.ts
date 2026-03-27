/**
 * Auto-generated base service for Identity Resolutions.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/identity-resolutions.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CdpIdentityResolutionConfigInput,
  CdpIdentityResolutionConfigPatchInput,
  CdpIdentityResolutionOutputRepresentation,
  CdpIdentityResolutionRunNowInput,
  CdpIdentityResolutionRunNowOutputRepresentation,
  CdpIdentityResolutionsOutputRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class IdentityResolutionsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/identity-resolutions";

  /** GET /ssot/identity-resolutions — Get identity resolution rulesets */
  async list(options?: RequestOptions): Promise<CdpIdentityResolutionsOutputRepresentation> {
    return this.httpClient.get(this.basePath, options);
  }

  /** POST /ssot/identity-resolutions — Create identity resolution ruleset */
  async create(body: CdpIdentityResolutionConfigInput, options?: RequestOptions): Promise<CdpIdentityResolutionOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/identity-resolutions/{identityResolution} — Delete identity resolution ruleset */
  async delete(identityResolution: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(identityResolution)}`, options);
  }

  /** GET /ssot/identity-resolutions/{identityResolution} — Get identity resolution ruleset */
  async get(identityResolution: string, options?: RequestOptions): Promise<CdpIdentityResolutionOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(identityResolution)}`, options);
  }

  /** PATCH /ssot/identity-resolutions/{identityResolution} — Update identity resolution ruleset */
  async patch(identityResolution: string, body: CdpIdentityResolutionConfigPatchInput, options?: RequestOptions): Promise<CdpIdentityResolutionOutputRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(identityResolution)}`, body, options);
  }

  /** POST /ssot/identity-resolutions/{identityResolution}/actions/run-now — Run identity resolution ruleset now */
  async runNow(identityResolution: string, body: CdpIdentityResolutionRunNowInput, options?: RequestOptions): Promise<CdpIdentityResolutionRunNowOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(identityResolution)}/actions/run-now`, body, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<CdpIdentityResolutionOutputRepresentation, void, undefined> {
    yield* this.paginate<CdpIdentityResolutionOutputRepresentation>(this.basePath, { ...params, pageSizeParam: "batchSize" }, options);
  }
}
