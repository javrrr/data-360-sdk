import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpDataGraphActionResponseRepresentation,
  CdpDataGraphInputRepresentation,
  CdpDataGraphOutputRepresentation,
  CdpDgMetadataRepresentation,
  CdpQueryOutputRepresentation,
} from "../schemas.js";

export class DataGraphsService extends BaseResource {
  protected readonly basePath = "/ssot/data-graphs";

  async listMetadata(
    params?: { dataspace?: string; graphName?: string },
    options?: RequestOptions,
  ): Promise<CdpDgMetadataRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata`, {
      ...options,
      query: { dataspace: params?.dataspace, graphName: params?.graphName },
    });
  }

  async get(name: string, options?: RequestOptions): Promise<CdpDataGraphOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(name)}`,
      options,
    );
  }

  async create(body: CdpDataGraphInputRepresentation, options?: RequestOptions): Promise<CdpDataGraphOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async getData(
    entityName: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/data/${encodeURIComponent(entityName)}`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async refresh(name: string, options?: RequestOptions): Promise<CdpDataGraphActionResponseRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(name)}/actions/refresh`,
      undefined,
      options,
    );
  }

  async getDataById(dataGraphEntityName: string, id: string, options?: RequestOptions): Promise<CdpQueryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/data/${encodeURIComponent(dataGraphEntityName)}/${encodeURIComponent(id)}`, options);
  }

  async delete(dataGraphName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(dataGraphName)}`, options);
  }
}
