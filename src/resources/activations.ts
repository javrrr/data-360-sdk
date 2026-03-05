import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  ActivationCollectionRepresentation,
  ActivationDefinitionInputRepresentation,
  ActivationRepresentation,
  AudienceDMOCollectionRepresentation,
} from "../schemas.js";

export class ActivationsService extends BaseResource {
  protected readonly basePath = "/ssot/activations";

  async list(
    params?: PaginationParams & { filters?: string },
    options?: RequestOptions,
  ): Promise<ActivationCollectionRepresentation> {
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

  async create(body: ActivationDefinitionInputRepresentation, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(id: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(
      `${this.basePath}/${encodeURIComponent(id)}`,
      options,
    );
  }

  async getData(id: string, options?: RequestOptions): Promise<AudienceDMOCollectionRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}/data`,
      options,
    );
  }

  async getById(activationId: string, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationId)}`, options);
  }

  async update(activationId: string, body: ActivationDefinitionInputRepresentation, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(activationId)}`, body, options);
  }
}
