import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  ActivationExternalPlatformCollectionRepresentation,
  ActivationTargetCollectionRepresentation,
  ActivationTargetInputRepresentation,
  ActivationTargetRepresentation,
} from "../schemas.js";

export class ActivationTargetsService extends BaseResource {
  protected readonly basePath = "/ssot/activation-targets";

  async list(
    params?: PaginationParams & { filters?: string },
    options?: RequestOptions,
  ): Promise<ActivationTargetCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery(params), filters: params?.filters },
    });
  }

  async *listAll(
    params?: PaginationParams & { filters?: string },
    options?: RequestOptions,
  ) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(id: string, options?: RequestOptions): Promise<ActivationTargetRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}`,
      options,
    );
  }

  async create(body: ActivationTargetInputRepresentation, options?: RequestOptions): Promise<ActivationTargetRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async update(
    id: string,
    body: ActivationTargetInputRepresentation,
    options?: RequestOptions,
  ): Promise<ActivationTargetRepresentation> {
    return this.httpClient.patch(
      `${this.basePath}/${encodeURIComponent(id)}`,
      body,
      options,
    );
  }

  async listExternalPlatforms(options?: RequestOptions): Promise<ActivationExternalPlatformCollectionRepresentation> {
    return this.httpClient.get("/ssot/activation-external-platforms", options);
  }
}
