import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpIdentityResolutionConfigInput,
  CdpIdentityResolutionConfigPatchInput,
  CdpIdentityResolutionOutputRepresentation,
  CdpIdentityResolutionRunNowOutputRepresentation,
  CdpIdentityResolutionsOutputRepresentation,
} from "../schemas.js";

export class IdentityResolutionsService extends BaseResource {
  protected readonly basePath = "/ssot/identity-resolutions";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<CdpIdentityResolutionsOutputRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(identityResolution: string, options?: RequestOptions): Promise<CdpIdentityResolutionOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(identityResolution)}`,
      options,
    );
  }

  async runNow(identityResolution: string, options?: RequestOptions): Promise<CdpIdentityResolutionRunNowOutputRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(identityResolution)}/actions/run-now`,
      undefined,
      options,
    );
  }

  async create(body: CdpIdentityResolutionConfigInput, options?: RequestOptions): Promise<CdpIdentityResolutionOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(identityResolution: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(identityResolution)}`, options);
  }

  async patch(identityResolution: string, body: CdpIdentityResolutionConfigPatchInput, options?: RequestOptions): Promise<CdpIdentityResolutionOutputRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(identityResolution)}`, body, options);
  }
}
