/**
 * Auto-generated base service for Metadata.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/metadata.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { RequestOptions } from "../../core/types.js";
import type {
  CdpQueryMetadataEntitiesOutputRepresentation,
  CdpQueryMetadataOutputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface MetadataListParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  /** Category of the metadata entity. Valid values are `Profile`, `Engagement`, and `Related`. If unspecified, all category entities are returned. */
  entityCategory?: string;
  /** Metadata name of the entity, for example `UnifiedIndividual__dlm`. If unspecified, a complete list of entities is returned. */
  entityName?: string;
  /** Type of metadata entity requested. Valid values are `DataLakeObject`, `DataModelObject`, and `CalculatedInsight`. If unspecified, all types are returned. */
  entityType?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface MetadataGetEntitiesParams {
  /** Name of the data space in which the metadata is requested. */
  dataspace?: string;
  /** Category of the metadata entity. If unspecified, all categories are returned. Supported values are: */
  entityCategory?: string;
  /** Type of metadata entity. If unspecified, all types are returned. Supported values are: */
  entityType?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class MetadataServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/metadata";

  /** GET /ssot/metadata — Get metadata */
  async list(params?: MetadataListParams, options?: RequestOptions): Promise<CdpQueryMetadataOutputRepresentation> {
    return this.httpClient.get(this.basePath, { ...options, query: params });
  }

  /** GET /ssot/metadata-entities — Get metadata entities */
  async getEntities(params?: MetadataGetEntitiesParams, options?: RequestOptions): Promise<CdpQueryMetadataEntitiesOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}-entities`, { ...options, query: params });
  }
}
