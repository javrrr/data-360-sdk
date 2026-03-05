import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  IdpConfigurationDetailsRepresentation,
  IdpConfigurationInputRepresentation,
  IdpConfigurationPatchInputRepresentation,
  IdpConfigurationsCollectionRepresentation,
  IdpExtractDataInputRepresentation,
  IdpExtractedDataRepresentation,
  IdpGenerateSchemaInputRepresentation,
  IdpGeneratedSchemaRepresentation,
  IdpGlobalConfigRepresentation,
} from "../schemas.js";

export class DocumentAiService extends BaseResource {
  protected readonly basePath = "/ssot/document-processing";

  async extractData(
    body: IdpExtractDataInputRepresentation,
    options?: RequestOptions,
  ): Promise<IdpExtractedDataRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/actions/extract-data`,
      body,
      options,
    );
  }

  async generateSchema(
    body: IdpGenerateSchemaInputRepresentation,
    options?: RequestOptions,
  ): Promise<IdpGeneratedSchemaRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/actions/generate-schema`,
      body,
      options,
    );
  }

  async listConfigurations(
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<IdpConfigurationsCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/configurations`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async createConfiguration(
    body: IdpConfigurationInputRepresentation,
    options?: RequestOptions,
  ): Promise<IdpConfigurationDetailsRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/configurations`,
      body,
      options,
    );
  }

  async getGlobalConfig(options?: RequestOptions): Promise<IdpGlobalConfigRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/global-config`,
      options,
    );
  }

  async deleteConfigurations(idOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/configurations/${encodeURIComponent(idOrApiName)}`, options);
  }

  async patchConfigurations(idOrApiName: string, body: IdpConfigurationPatchInputRepresentation, options?: RequestOptions): Promise<IdpConfigurationDetailsRepresentation> {
    return this.httpClient.patch(`${this.basePath}/configurations/${encodeURIComponent(idOrApiName)}`, body, options);
  }

  async run(idOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.post(`${this.basePath}/configurations/${encodeURIComponent(idOrApiName)}/actions/run`, undefined, options);
  }

  async getConfiguration(idOrApiName: string, options?: RequestOptions): Promise<IdpConfigurationDetailsRepresentation> {
    return this.httpClient.get(`${this.basePath}/configurations/${encodeURIComponent(idOrApiName)}`, options);
  }
}
