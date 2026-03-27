/**
 * Auto-generated base service for Insights.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/insights.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { RequestOptions } from "../../core/types.js";
import type {
  CdpQueryMetadataOutputRepresentation,
  CdpQueryOutputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface InsightsGetCalculatedInsightsParams {
  /** Comma-separated list of up to 10 dimensions, such as `GenderId__c`, to project. If unspecified, this parameter includes all of the available dimensions. */
  dimensions?: string;
  /** Filter the result set to a more narrow scope or specific type, such as `[GenderId__c=Male,​FirstName__c=Angel]`. */
  filters?: string;
  /** Comma-separated list of up to five measures, such as `TotalSales__c,` to project. If unspecified, this parameter includes all of the available measures. */
  measures?: string;
  /** Time range for the measures. Values are `HOUR`, `DAY`, `MONTH`, `QUARTER`, or `YEAR`. If unspecified, no time range is applied. */
  timeGranularity?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class InsightsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/insight";

  /** GET /ssot/insight/calculated-insights/{ciName} — Get calculated insight object */
  async getCalculatedInsights(ciName: string, params?: InsightsGetCalculatedInsightsParams, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/calculated-insights/${encodeURIComponent(ciName)}`, { ...options, query: params });
  }

  /** GET /ssot/insight/metadata — Get insight metadata */
  async getMetadata(options?: RequestOptions): Promise<CdpQueryMetadataOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata`, options);
  }

  /** GET /ssot/insight/metadata/{ciName} — Get calculated insight object metadata */
  async getMetadataByGet(ciName: string, options?: RequestOptions): Promise<CdpQueryMetadataOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/${encodeURIComponent(ciName)}`, options);
  }
}
