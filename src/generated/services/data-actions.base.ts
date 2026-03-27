/**
 * Auto-generated base service for Data Actions.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-actions.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CdpDataActionCollectionRepresentation,
  CdpDataActionInputRepresentation,
  CdpDataActionOutputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DataActionsListParams {
  /** The Data 360 data space from which to return data actions. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataActionsCreateParams {
  /** The Data 360 data space fromm which to return the data action. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DataActionsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-actions";

  /** GET /ssot/data-actions — Get data actions */
  async list(params?: PaginationParams & DataActionsListParams, options?: RequestOptions): Promise<CdpDataActionCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** POST /ssot/data-actions — Create data action */
  async create(body: CdpDataActionInputRepresentation, params?: DataActionsCreateParams, options?: RequestOptions): Promise<CdpDataActionOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, { ...options, query: params });
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & DataActionsListParams, options?: RequestOptions): AsyncGenerator<CdpDataActionOutputRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<CdpDataActionOutputRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
