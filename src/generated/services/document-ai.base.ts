/**
 * Auto-generated base service for Document AI.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/document-ai.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  IdpConfigurationDetailsRepresentation,
  IdpConfigurationInputRepresentation,
  IdpConfigurationPatchInputRepresentation,
  IdpConfigurationRepresentation,
  IdpConfigurationsCollectionRepresentation,
  IdpExtractDataInputRepresentation,
  IdpExtractedDataRepresentation,
  IdpGenerateSchemaInputRepresentation,
  IdpGeneratedSchemaRepresentation,
  IdpGlobalConfigRepresentation,
  IdpSchemaDetectionInputRepresentation,
  IdpSchemaDetectionRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DocumentAiDetectSchemaParams {
  /** Minimum matching score (0-1) required for a schema to be returned in the response. If unspecified, the default value is `0.80`. */
  threshold?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface DocumentAiExtractDataParams {
  /** Ending page number for data extraction. */
  endPage?: number;
  /** Indicates whether to assign a confidence score to each field in the extracted data (`true`) or not (`false`). */
  extractDataWithConfidenceScore?: boolean;
  /** Starting page number for data extraction. */
  startPage?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface DocumentAiListConfigurationsParams {
  /** Filter by activation status, either `Activated` or `Deactivated`. */
  activationStatus?: string;
  /** Return only records that contain a specific search term. */
  search?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DocumentAiServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/document-processing";

  /** POST /ssot/document-processing/actions/detect-schema — Detect Document AI schema */
  async detectSchema(body: IdpSchemaDetectionInputRepresentation, params?: DocumentAiDetectSchemaParams, options?: RequestOptions): Promise<IdpSchemaDetectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/detect-schema`, body, { ...options, query: params });
  }

  /** POST /ssot/document-processing/actions/extract-data — Extract Document AI configuration data */
  async extractData(body: IdpExtractDataInputRepresentation, params?: DocumentAiExtractDataParams, options?: RequestOptions): Promise<IdpExtractedDataRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/extract-data`, body, { ...options, query: params });
  }

  /** POST /ssot/document-processing/actions/generate-schema — Generate Document AI schema */
  async generateSchema(body: IdpGenerateSchemaInputRepresentation, options?: RequestOptions): Promise<IdpGeneratedSchemaRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/generate-schema`, body, options);
  }

  /** GET /ssot/document-processing/configurations — Get Document AI configurations */
  async listConfigurations(params?: PaginationParams & DocumentAiListConfigurationsParams, options?: RequestOptions): Promise<IdpConfigurationsCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/configurations`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/document-processing/configurations — Create Document AI configuration */
  async createConfigurations(body: IdpConfigurationInputRepresentation, options?: RequestOptions): Promise<IdpConfigurationDetailsRepresentation> {
    return this.httpClient.post(`${this.basePath}/configurations`, body, options);
  }

  /** DELETE /ssot/document-processing/configurations/{idOrApiName} — Delete Document AI configuration */
  async deleteConfigurations(idOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/configurations/${encodeURIComponent(idOrApiName)}`, options);
  }

  /** GET /ssot/document-processing/configurations/{idOrApiName} — Get Document AI configuration */
  async getConfigurations(idOrApiName: string, options?: RequestOptions): Promise<IdpConfigurationDetailsRepresentation> {
    return this.httpClient.get(`${this.basePath}/configurations/${encodeURIComponent(idOrApiName)}`, options);
  }

  /** PATCH /ssot/document-processing/configurations/{idOrApiName} — Update Document AI configuration */
  async patchConfigurations(idOrApiName: string, body: IdpConfigurationPatchInputRepresentation, options?: RequestOptions): Promise<IdpConfigurationDetailsRepresentation> {
    return this.httpClient.patch(`${this.basePath}/configurations/${encodeURIComponent(idOrApiName)}`, body, options);
  }

  /** POST /ssot/document-processing/configurations/{idOrApiName}/actions/run — Run Document AI process */
  async run(idOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.post(`${this.basePath}/configurations/${encodeURIComponent(idOrApiName)}/actions/run`, undefined, options);
  }

  /** GET /ssot/document-processing/global-config — Get Document AI global configuration */
  async getGlobalConfig(options?: RequestOptions): Promise<IdpGlobalConfigRepresentation> {
    return this.httpClient.get(`${this.basePath}/global-config`, options);
  }

  /** Async generator yielding all items from listConfigurations */
  async *listAllConfigurations(params?: PaginationParams & DocumentAiListConfigurationsParams, options?: RequestOptions): AsyncGenerator<IdpConfigurationRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<IdpConfigurationRepresentation>(`${this.basePath}/configurations`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
