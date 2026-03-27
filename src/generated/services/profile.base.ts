/**
 * Auto-generated base service for Profile.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/profile.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { RequestOptions } from "../../core/types.js";
import type {
  CdpQueryMetadataOutputRepresentation,
  CdpQueryOutputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface ProfileGetParams {
  /** Comma-separated list of up to 50 field names that you want to include in the result, for example, `Id__c,FirstName__c`, `GenderId__c,Occupation__c`. If unspecified, `Id__c` is returned. */
  fields?: string;
  /** Comma-separated list of equality expressions within square brackets, for example, `[FirstName__c=DON]`. */
  filters: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ProfileGetByGetParams {
  /** Comma-separated list of up to 50 field names that you want to include in the result, for example, `Id__c,FirstName__c`, `GenderId__c,Occupation__c`. If unspecified, `Id__c` is returned. */
  fields?: string;
  /** Comma-separated list of equality expressions within square brackets, for example, `[FirstName__c=DON]`. */
  filters?: string;
  /** If a field other than the primary key is used, name of the key field, for example, `FirstName__c`. Parameter is required for secondary key. */
  searchKey?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ProfileGetGetParams {
  /** Comma-separated list of child object field names that you want to include in the result, for example, `Id__c,EmailAddress__c`. If unspecified, the first 10 alphabetically sorted fields are returned. */
  fields?: string;
  /** Comma-separated list of equality expressions within square brackets, for example, `[FirstName__c=DON]`. Filters are applied to the parent object only. */
  filters?: string;
  /** If a field other than the primary key is used, name of the key field, for example, `FirstName__c`. Parameter is required for secondary key. */
  searchKey?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ProfileGetCalculatedInsightsParams {
  /** Comma-separated list of up to 10 dimensions, such as `GenderId__c`, to project. If unspecified, this parameter returns all of the available dimensions. */
  dimensions?: string;
  /** Comma-separated list of up to 50 field names that you want to include in the result, for example, `Id__c,FirstName__c`, `GenderId__c,Occupation__c`. If unspecified, `Id__c` is returned. */
  fields?: string;
  /** Comma-separated list of equality expressions within square brackets, for example, `[FirstName__c=DON]`. */
  filters?: string;
  /** Comma-separated list of up to five measures, such as `TotalSales__c,` to project. If unspecified, this parameter returns all of the available measures. */
  measures?: string;
  /** If a field other than the primary key is used, name of the key field, for example, `FirstName__c`. Parameter is required for secondary key. */
  searchKey?: string;
  /** Time range for the measures. Values are: `HOUR`, `DAY`, `MONTH`, `QUARTER`, or `YEAR`. */
  timeGranularity?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class ProfileServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/profile";

  /** GET /ssot/profile/{dataModelName} — Get profile data model object */
  async get(dataModelName: string, params?: ProfileGetParams, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataModelName)}`, { ...options, query: params });
  }

  /** GET /ssot/profile/{dataModelName}/{id} — Get profile data model object with search key */
  async getByGet(id: string, dataModelName: string, params?: ProfileGetByGetParams, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataModelName)}/${encodeURIComponent(id)}`, { ...options, query: params });
  }

  /** GET /ssot/profile/{dataModelName}/{id}/{childDataModelName} — Get profile data model object and child object with search key */
  async getGet(childDataModelName: string, dataModelName: string, id: string, params?: ProfileGetGetParams, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataModelName)}/${encodeURIComponent(id)}/${encodeURIComponent(childDataModelName)}`, { ...options, query: params });
  }

  /** GET /ssot/profile/{dataModelName}/{id}/calculated-insights/{ciName} — Get profile data model object and calculated insight with search key */
  async getCalculatedInsights(ciName: string, dataModelName: string, id: string, params?: ProfileGetCalculatedInsightsParams, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataModelName)}/${encodeURIComponent(id)}/calculated-insights/${encodeURIComponent(ciName)}`, { ...options, query: params });
  }

  /** GET /ssot/profile/metadata — Get profile metadata */
  async getMetadata(options?: RequestOptions): Promise<CdpQueryMetadataOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata`, options);
  }

  /** GET /ssot/profile/metadata/{dataModelName} — Get profile data model object metadata */
  async getMetadataByGet(dataModelName: string, options?: RequestOptions): Promise<CdpQueryMetadataOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/${encodeURIComponent(dataModelName)}`, options);
  }
}
