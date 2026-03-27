/**
 * Auto-generated base service for Data Streams.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-streams.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  DataStreamActionResponseRepresentation,
  DataStreamCollectionRepresentation,
  DataStreamDetailedRepresentation,
  DataStreamInputRepresentation,
  DataStreamPatchInputRepresentation,
  DataStreamRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DataStreamsListParams {
  /** Name of the data stream connection. */
  connectionName?: string;
  /** Filter the result set to a more narrow scope or specific type, such as `filter=MC` or `filter=SFDC` for connector types. */
  filter?: string;
  /** Indicates whether or not to include mappings in the results. */
  includeMappings?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataStreamsDeleteParams {
  /** Indicates whether to delete the data lake objects (DLOs) associated with the data stream (`true`) or not (`false`). The default value is `false`. */
  shouldDeleteDataLakeObject?: boolean;
  [key: string]: string | number | boolean | undefined;
}

export interface DataStreamsGetParams {
  /** Indicates whether or not to include mappings in the results. */
  includeMappings?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataStreamsRunParams {
  /** Indicates whether to execute fast forward conversion for the data stream (`true`) or not (`false`). The default value is `false`. `true` is supported only for file upload connector types. */
  interactive?: boolean;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DataStreamsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-streams";

  /** GET /ssot/data-streams — Get data streams */
  async list(params?: PaginationParams & DataStreamsListParams, options?: RequestOptions): Promise<DataStreamCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-streams — Create data stream */
  async create(body: DataStreamInputRepresentation, options?: RequestOptions): Promise<DataStreamRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/data-streams/{recordIdOrDeveloperName} — Delete data stream */
  async delete(recordIdOrDeveloperName: string, params?: DataStreamsDeleteParams, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, { ...options, query: params });
  }

  /** GET /ssot/data-streams/{recordIdOrDeveloperName} — Get data stream */
  async get(recordIdOrDeveloperName: string, params?: DataStreamsGetParams, options?: RequestOptions): Promise<DataStreamDetailedRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, { ...options, query: params });
  }

  /** PATCH /ssot/data-streams/{recordIdOrDeveloperName} — Update data stream */
  async patch(recordIdOrDeveloperName: string, body: DataStreamPatchInputRepresentation, options?: RequestOptions): Promise<DataStreamRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}`, body, options);
  }

  /** POST /ssot/data-streams/{recordIdOrDeveloperName}/actions/run — Run data streams */
  async run(recordIdOrDeveloperName: string, params?: DataStreamsRunParams, options?: RequestOptions): Promise<DataStreamActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(recordIdOrDeveloperName)}/actions/run`, undefined, { ...options, query: params });
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & DataStreamsListParams, options?: RequestOptions): AsyncGenerator<DataStreamDetailedRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataStreamDetailedRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
