/**
 * Auto-generated base service for Calculated Insights.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/calculated-insights.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CdpCalculatedInsightCollectionRepresentation,
  CdpCalculatedInsightInputRepresentation,
  CdpCalculatedInsightRepresentation,
  CdpCalculatedInsightStandardActionResponseRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface CalculatedInsightsListParams {
  /** Name of the data space. */
  dataspace?: string;
  /** Definition type of the calculated insight. Values are: */
  definitionType?: string;
  /** Specifies the page token to use to view a page of information. Page tokens are returned as part of the response, such as `currentPageToken` or `nextPageToken`. If unspecified, the first page is returned. */
  pageToken?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class CalculatedInsightsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/calculated-insights";

  /** GET /ssot/calculated-insights — Get calculated insights */
  async list(params?: PaginationParams & CalculatedInsightsListParams, options?: RequestOptions): Promise<CdpCalculatedInsightCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** POST /ssot/calculated-insights — Create calculated insights */
  async create(body: CdpCalculatedInsightInputRepresentation, options?: RequestOptions): Promise<CdpCalculatedInsightRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/calculated-insights/{apiName} — Delete calculated insight */
  async delete(apiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(apiName)}`, options);
  }

  /** GET /ssot/calculated-insights/{apiName} — Get calculated insight */
  async get(apiName: string, options?: RequestOptions): Promise<CdpCalculatedInsightRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(apiName)}`, options);
  }

  /** PATCH /ssot/calculated-insights/{apiName} — Update calculated insight */
  async patch(apiName: string, body: CdpCalculatedInsightInputRepresentation, options?: RequestOptions): Promise<CdpCalculatedInsightRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(apiName)}`, body, options);
  }

  /** POST /ssot/calculated-insights/{apiName}/actions/run — Run calculated insight */
  async run(apiName: string, options?: RequestOptions): Promise<CdpCalculatedInsightStandardActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(apiName)}/actions/run`, undefined, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & CalculatedInsightsListParams, options?: RequestOptions): AsyncGenerator<CdpCalculatedInsightRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<CdpCalculatedInsightRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
