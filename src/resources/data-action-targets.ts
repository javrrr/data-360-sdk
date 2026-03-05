import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpDataActionTargetCollectionRepresentation,
  CdpDataActionTargetInputRepresentation,
  CdpDataActionTargetOutputRepresentation,
  CdpDataActionTargetSigningKeyOutputRepresentation,
} from "../schemas.js";

export class DataActionTargetsService extends BaseResource {
  protected readonly basePath = "/ssot/data-action-targets";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<CdpDataActionTargetCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(apiName: string, options?: RequestOptions): Promise<CdpDataActionTargetOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(apiName)}`,
      options,
    );
  }

  async getSigningKey(apiName: string, options?: RequestOptions): Promise<CdpDataActionTargetSigningKeyOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(apiName)}/signing-key`,
      options,
    );
  }

  async create(body: CdpDataActionTargetInputRepresentation, options?: RequestOptions): Promise<CdpDataActionTargetOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(apiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(apiName)}`, options);
  }

  async resetSigningKey(apiName: string, options?: RequestOptions): Promise<CdpDataActionTargetSigningKeyOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(apiName)}/signing-key`, undefined, options);
  }
}
