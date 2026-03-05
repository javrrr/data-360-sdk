import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  DataSpaceCollectionRepresentation,
  DataSpaceInfoRepresentation,
  DataSpaceInputRepresentation,
  DataSpaceMemberCollectionInputRepresentation,
  DataSpaceMemberCollectionRepresentation,
  DataSpaceMemberPutCollectionRepresentation,
  DataSpaceMemberRepresentation,
  DataSpacePatchInputRepresentation,
} from "../schemas.js";

export class DataSpacesService extends BaseResource {
  protected readonly basePath = "/ssot/data-spaces";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataSpaceCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(idOrName: string, options?: RequestOptions): Promise<DataSpaceInfoRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(idOrName)}`,
      options,
    );
  }

  async listMembers(
    idOrName: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<DataSpaceMemberCollectionRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(idOrName)}/members`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async addMember(
    idOrName: string,
    body: DataSpaceMemberCollectionInputRepresentation,
    options?: RequestOptions,
  ): Promise<DataSpaceMemberPutCollectionRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(idOrName)}/members`,
      body,
      options,
    );
  }

  async create(body: DataSpaceInputRepresentation, options?: RequestOptions): Promise<DataSpaceInfoRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async patch(idOrName: string, body: DataSpacePatchInputRepresentation, options?: RequestOptions): Promise<DataSpaceInfoRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(idOrName)}`, body, options);
  }

  async updateMembers(idOrName: string, body: DataSpaceMemberCollectionInputRepresentation, options?: RequestOptions): Promise<DataSpaceMemberPutCollectionRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(idOrName)}/members`, body, options);
  }

  async getMembers(idOrName: string, dataSpaceMemberObjectName: string, options?: RequestOptions): Promise<DataSpaceMemberRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(idOrName)}/members/${encodeURIComponent(dataSpaceMemberObjectName)}`, options);
  }
}
