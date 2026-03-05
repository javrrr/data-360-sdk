import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpQueryMetadataOutputRepresentation,
  CdpQueryOutputRepresentation,
} from "../schemas.js";

export class ProfileService extends BaseResource {
  protected readonly basePath = "/ssot/profile";

  async list(
    dataModelName: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(dataModelName)}`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async get(
    dataModelName: string,
    id: string,
    options?: RequestOptions,
  ): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(dataModelName)}/${encodeURIComponent(id)}`,
      options,
    );
  }

  async getMetadata(options?: RequestOptions): Promise<CdpQueryMetadataOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata`, options);
  }

  async getCalculatedInsights(
    dataModelName: string,
    id: string,
    ciName: string,
    options?: RequestOptions,
  ): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(dataModelName)}/${encodeURIComponent(id)}/calculated-insights/${encodeURIComponent(ciName)}`,
      options,
    );
  }

  async listMetadata(dataModelName: string, options?: RequestOptions): Promise<CdpQueryMetadataOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/${encodeURIComponent(dataModelName)}`, options);
  }

  async getChildRecords(dataModelName: string, id: string, childDataModelName: string, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataModelName)}/${encodeURIComponent(id)}/${encodeURIComponent(childDataModelName)}`, options);
  }
}
