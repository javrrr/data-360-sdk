/**
 * Auto-generated base service for Query (Current).
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/query.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { RequestOptions } from "../../core/types.js";
import type {
  QuerySqlInputRepresentation,
  QuerySqlPageRepresentation,
  QuerySqlRepresentation,
  QuerySqlStatusRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface QueryCreateParams {
  /** Name of the data space to query. If unspecified, the `default` data space is used. */
  dataspace?: string;
  /** Description of the scenario that your query is used in. The workload name is added to the log files to help when debugging. */
  workloadName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface QueryDeleteParams {
  /** Name of the data space to query. If unspecified, the `default` data space is used. */
  dataspace?: string;
  /** Description of the scenario that your query is used in. The workload name is added to the log files to help when debugging. */
  workloadName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface QueryGetParams {
  /** Name of the data space to query. If unspecified, the `default` data space is used. */
  dataspace?: string;
  /** Number of milliseconds to wait before returning the status. If unspecified, returns the status immediately. */
  waitTimeMs?: number;
  /** Description of the scenario that your query is used in. The workload name is added to the log files to help when debugging. */
  workloadName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface QueryGetRowsParams {
  /** Name of the data space to fetch the data from. The user making the request must have permission to this data pace. If unspecified, the `default` data space is used. */
  dataspace: string;
  /** Maximum number of rows to include in the response. The actual number of rows returned may be lower than the requested value if fewer are available or if the result set exceeds internal system size limits. Value must be greater than `0`. */
  rowLimit?: number;
  /** Description of the scenario that your query is used in. The workload name is added to the log files to help when debugging. */
  workloadName?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class QueryServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/query-sql";

  /** POST /ssot/query-sql — Create SQL query */
  async create(body: QuerySqlInputRepresentation, params?: QueryCreateParams, options?: RequestOptions): Promise<QuerySqlRepresentation> {
    return this.httpClient.post(this.basePath, body, { ...options, query: params });
  }

  /** DELETE /ssot/query-sql/{queryId} — Cancel SQL query */
  async delete(queryId: string, params?: QueryDeleteParams, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(queryId)}`, { ...options, query: params });
  }

  /** GET /ssot/query-sql/{queryId} — Get SQL query */
  async get(queryId: string, params?: QueryGetParams, options?: RequestOptions): Promise<QuerySqlStatusRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(queryId)}`, { ...options, query: params });
  }

  /** GET /ssot/query-sql/{queryId}/rows — Get SQL query rows */
  async getRows(queryId: string, params?: QueryGetRowsParams, options?: RequestOptions): Promise<QuerySqlPageRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(queryId)}/rows`, { ...options, query: params });
  }
}
