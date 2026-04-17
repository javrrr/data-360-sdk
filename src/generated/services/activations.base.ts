/**
 * Auto-generated base service for Activations.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/activations.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  ActivationCollectionRepresentation,
  ActivationDataRepresentation,
  ActivationDefinitionInputRepresentation,
  ActivationPublishActionInputRepresentation,
  ActivationPublishActionRepresentation,
  ActivationRepresentation,
  AudienceDMOCollectionRepresentation,
  QueryPathConfigRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface ActivationsListParams {
  /** Filter the result set to a more narrow scope or specific type. These filters are supported: */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsListDataParams {
  /** Filter the result set to a more narrow scope or specific type. This filter is supported: */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class ActivationsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/activations";

  /** GET /ssot/activations — Get activations */
  async list(params?: PaginationParams & ActivationsListParams, options?: RequestOptions): Promise<ActivationCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** POST /ssot/activations — Create activation */
  async create(body: ActivationDefinitionInputRepresentation, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/activations/{activationId} — Delete activation */
  async delete(activationId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(activationId)}`, options);
  }

  /** GET /ssot/activations/{activationId} — Get activation */
  async get(activationId: string, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationId)}`, options);
  }

  /** PUT /ssot/activations/{activationId} — Update activation */
  async put(activationId: string, body: ActivationDefinitionInputRepresentation, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(activationId)}`, body, options);
  }

  /** POST /ssot/activations/{activationId}/actions/publish — Publish a Batch DMO activation */
  async publish(activationId: string, body: ActivationPublishActionInputRepresentation, options?: RequestOptions): Promise<ActivationPublishActionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(activationId)}/actions/publish`, body, options);
  }

  /** GET /ssot/activations/{activationId}/data — Get Audience DMO activation records */
  async listData(activationId: string, params?: PaginationParams & ActivationsListDataParams, options?: RequestOptions): Promise<AudienceDMOCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationId)}/data`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & ActivationsListParams, options?: RequestOptions): AsyncGenerator<QueryPathConfigRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<QueryPathConfigRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }

  /** Async generator yielding all items from listData */
  async *listAllData(activationId: string, params?: PaginationParams & ActivationsListDataParams, options?: RequestOptions): AsyncGenerator<ActivationDataRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ActivationDataRepresentation>(`${this.basePath}/${encodeURIComponent(activationId)}/data`, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
