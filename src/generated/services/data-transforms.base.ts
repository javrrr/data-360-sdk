/**
 * Auto-generated base service for Data Transforms.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-transforms.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CdpDataTransformActionResponseRepresentation,
  CdpScheduleInputRepresentation,
  CdpScheduleRepresentation,
  DataTransformCollectionRepresentation,
  DataTransformInputRepresentation,
  DataTransformRepresentation,
  DataTransformRunHistoryBaseRepresentation,
  DataTransformRunHistoryCollectionRepresentation,
  DataTransformValidationRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DataTransformsListParams {
  /** Group on which to filter response results. Valid values are `Big`, `Medium`, and `Small`. */
  filterGroup?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataTransformsCreateParams {
  /** Group on which to filter response results. Valid values are `Big`, `Medium`, and `Small`. */
  filterGroup?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataTransformsGetParams {
  /** Group on which to filter response results. Valid values are `Big`, `Medium`, and `Small`. */
  filterGroup?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataTransformsPutParams {
  /** Group on which to filter response results. Valid values are `Big`, `Medium`, and `Small`. */
  filterGroup?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DataTransformsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-transforms";

  /** GET /ssot/data-transforms — Get data transforms */
  async list(params?: PaginationParams & DataTransformsListParams, options?: RequestOptions): Promise<DataTransformCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-transforms — Create data transform */
  async create(body: DataTransformInputRepresentation, params?: DataTransformsCreateParams, options?: RequestOptions): Promise<DataTransformRepresentation> {
    return this.httpClient.post(this.basePath, body, { ...options, query: params });
  }

  /** POST /ssot/data-transforms-validation — Validate data transform */
  async createValidation(body: DataTransformInputRepresentation, options?: RequestOptions): Promise<DataTransformValidationRepresentation> {
    return this.httpClient.post(`${this.basePath}-validation`, body, options);
  }

  /** DELETE /ssot/data-transforms/{dataTransformNameOrId} — Delete data transform */
  async delete(dataTransformNameOrId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}`, options);
  }

  /** GET /ssot/data-transforms/{dataTransformNameOrId} — Get data transform */
  async get(dataTransformNameOrId: string, params?: DataTransformsGetParams, options?: RequestOptions): Promise<DataTransformRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}`, { ...options, query: params });
  }

  /** PUT /ssot/data-transforms/{dataTransformNameOrId} — Update data transform */
  async put(dataTransformNameOrId: string, body: DataTransformInputRepresentation, params?: DataTransformsPutParams, options?: RequestOptions): Promise<DataTransformRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}`, body, { ...options, query: params });
  }

  /** POST /ssot/data-transforms/{dataTransformNameOrId}/actions/cancel — Cancel data transform */
  async cancel(dataTransformNameOrId: string, options?: RequestOptions): Promise<CdpDataTransformActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/actions/cancel`, undefined, options);
  }

  /** POST /ssot/data-transforms/{dataTransformNameOrId}/actions/refresh-status — Refresh data transform status */
  async refreshStatus(dataTransformNameOrId: string, options?: RequestOptions): Promise<CdpDataTransformActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/actions/refresh-status`, undefined, options);
  }

  /** POST /ssot/data-transforms/{dataTransformNameOrId}/actions/retry — Retry data transform */
  async retry(dataTransformNameOrId: string, options?: RequestOptions): Promise<CdpDataTransformActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/actions/retry`, undefined, options);
  }

  /** POST /ssot/data-transforms/{dataTransformNameOrId}/actions/run — Run data transform */
  async run(dataTransformNameOrId: string, options?: RequestOptions): Promise<CdpDataTransformActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/actions/run`, undefined, options);
  }

  /** GET /ssot/data-transforms/{dataTransformNameOrId}/run-history — Get data transform run history */
  async listRunHistory(dataTransformNameOrId: string, params?: PaginationParams, options?: RequestOptions): Promise<DataTransformRunHistoryCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/run-history`, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** GET /ssot/data-transforms/{dataTransformNameOrId}/schedule — Get data transform schedule */
  async getSchedule(dataTransformNameOrId: string, options?: RequestOptions): Promise<CdpScheduleRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/schedule`, options);
  }

  /** PUT /ssot/data-transforms/{dataTransformNameOrId}/schedule — Update data transform schedule */
  async putSchedule(dataTransformNameOrId: string, body: CdpScheduleInputRepresentation, options?: RequestOptions): Promise<CdpScheduleRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/schedule`, body, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & DataTransformsListParams, options?: RequestOptions): AsyncGenerator<DataTransformRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataTransformRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listRunHistory */
  async *listAllRunHistory(dataTransformNameOrId: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<DataTransformRunHistoryBaseRepresentation, void, undefined> {
    yield* this.paginate<DataTransformRunHistoryBaseRepresentation>(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/run-history`, { ...params, pageSizeParam: "limit" }, options);
  }
}
