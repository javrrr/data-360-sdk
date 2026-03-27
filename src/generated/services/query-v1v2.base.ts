/**
 * Auto-generated base service for Query V1 & V2.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/query-v1v2.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { RequestOptions } from "../../core/types.js";
import type {
  CdpQueryInputRepresentation,
  CdpQueryOutputRepresentation,
  CdpQueryOutputV2Representation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface QueryV1v2CreateParams {
  /** Name of the data space. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface QueryV1v2CreateV2Params {
  /** Name of the data space. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface QueryV1v2GetV2Params {
  /** Name of the data space. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class QueryV1V2ServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/query";

  /** POST /ssot/query — Query data V1 */
  async create(body: CdpQueryInputRepresentation, params?: QueryV1v2CreateParams, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, { ...options, query: params });
  }

  /** POST /ssot/queryv2 — Query data V2 */
  async createV2(body: CdpQueryInputRepresentation, params?: QueryV1v2CreateV2Params, options?: RequestOptions): Promise<CdpQueryOutputV2Representation> {
    return this.httpClient.post(`${this.basePath}v2`, body, { ...options, query: params });
  }

  /** GET /ssot/queryv2/{nextBatchId} — Query batch data V1 */
  async getV2(nextBatchId: string, params?: QueryV1v2GetV2Params, options?: RequestOptions): Promise<CdpQueryOutputV2Representation> {
    return this.httpClient.get(`${this.basePath}v2/${encodeURIComponent(nextBatchId)}`, { ...options, query: params });
  }
}
