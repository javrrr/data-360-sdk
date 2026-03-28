/**
 * Auto-generated base service for Data Graphs.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-graphs.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { RequestOptions } from "../../core/types.js";
import type {
  CdpDataGraphActionResponseRepresentation,
  CdpDataGraphInputRepresentation,
  CdpDataGraphOutputRepresentation,
  CdpDgMetadataRepresentation,
  CdpQueryOutputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DataGraphsGetDataParams {
  /** Name of the data space in which to query the data graph. By default, the endpoint queries the `default` dataspace. */
  dataspace?: string;
  /** Lookup key and value to search on. Specify one of these key-value pairs: */
  lookupKeys: string;
  /** Indicates whether to read data from the standard, non-real-time data graph (`true`) or the real-time data graph (`false`). The default is `false`. */
  noCache?: boolean;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGraphsGetDataByGetParams {
  /** Name of the data space to query. If unspecified, the `default` data space is used. */
  dataspace?: string;
  /** Indicates whether live lookup for the data graph is enabled (`true`) or not (`false`). */
  live?: boolean;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGraphsGetMetadataParams {
  /** Name of the data space to query. If unspecified, the `default` data space is used. */
  dataspace?: string;
  /** API name of the data graph to query. If unspecified, metadata for all data graphs is returned. */
  dataGraphEntityName?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DataGraphsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-graphs";

  /** POST /ssot/data-graphs — Create data graph */
  async create(body: CdpDataGraphInputRepresentation, options?: RequestOptions): Promise<CdpDataGraphOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/data-graphs/{dataGraphName} — Delete data graph */
  async delete(dataGraphName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(dataGraphName)}`, options);
  }

  /** GET /ssot/data-graphs/{dataGraphName} — Get data graph */
  async get(dataGraphName: string, options?: RequestOptions): Promise<CdpDataGraphOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataGraphName)}`, options);
  }

  /** POST /ssot/data-graphs/{dataGraphName}/actions/refresh — Refresh data graph */
  async refresh(dataGraphName: string, options?: RequestOptions): Promise<CdpDataGraphActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataGraphName)}/actions/refresh`, undefined, options);
  }

  /** GET /ssot/data-graphs/data/{dataGraphEntityName} — Get data graph data by entity name */
  async getData(dataGraphEntityName: string, params: DataGraphsGetDataParams, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/data/${encodeURIComponent(dataGraphEntityName)}`, { ...options, query: params });
  }

  /** GET /ssot/data-graphs/data/{dataGraphEntityName}/{id} — Get data graph data by ID */
  async getDataByGet(id: string, dataGraphEntityName: string, params?: DataGraphsGetDataByGetParams, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/data/${encodeURIComponent(dataGraphEntityName)}/${encodeURIComponent(id)}`, { ...options, query: params });
  }

  /** GET /ssot/data-graphs/metadata — Get data graph metadata */
  async getMetadata(params?: DataGraphsGetMetadataParams, options?: RequestOptions): Promise<CdpDgMetadataRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata`, { ...options, query: params });
  }
}
