/**
 * Auto-generated base service for Data Spaces.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-spaces.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  DataSpaceCollectionRepresentation,
  DataSpaceInfoRepresentation,
  DataSpaceInputRepresentation,
  DataSpaceMemberCollectionInputRepresentation,
  DataSpaceMemberCollectionRepresentation,
  DataSpaceMemberPutCollectionRepresentation,
  DataSpaceMemberRepresentation,
  DataSpacePatchInputRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class DataSpacesServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-spaces";

  /** GET /ssot/data-spaces — Get data spaces */
  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataSpaceCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** POST /ssot/data-spaces — Create data space */
  async create(body: DataSpaceInputRepresentation, options?: RequestOptions): Promise<DataSpaceInfoRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** GET /ssot/data-spaces/{idOrName} — Get data space */
  async get(idOrName: string, options?: RequestOptions): Promise<DataSpaceInfoRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(idOrName)}`, options);
  }

  /** PATCH /ssot/data-spaces/{idOrName} — Update data space */
  async patch(idOrName: string, body: DataSpacePatchInputRepresentation, options?: RequestOptions): Promise<DataSpaceInfoRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(idOrName)}`, body, options);
  }

  /** GET /ssot/data-spaces/{idOrName}/members — Get data space members */
  async listMembers(idOrName: string, params?: PaginationParams, options?: RequestOptions): Promise<DataSpaceMemberCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(idOrName)}/members`, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** PUT /ssot/data-spaces/{idOrName}/members — Upsert data space members */
  async putMembers(idOrName: string, body: DataSpaceMemberCollectionInputRepresentation, options?: RequestOptions): Promise<DataSpaceMemberPutCollectionRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(idOrName)}/members`, body, options);
  }

  /** GET /ssot/data-spaces/{idOrName}/members/{dataSpaceMemberObjectName} — Get data space member */
  async getMembers(dataSpaceMemberObjectName: string, idOrName: string, options?: RequestOptions): Promise<DataSpaceMemberRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(idOrName)}/members/${encodeURIComponent(dataSpaceMemberObjectName)}`, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<DataSpaceInfoRepresentation, void, undefined> {
    yield* this.paginate<DataSpaceInfoRepresentation>(this.basePath, { ...params, pageSizeParam: "limit" }, options);
  }

  /** Async generator yielding all items from listMembers */
  async *listAllMembers(idOrName: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<DataSpaceMemberRepresentation, void, undefined> {
    yield* this.paginate<DataSpaceMemberRepresentation>(`${this.basePath}/${encodeURIComponent(idOrName)}/members`, { ...params, pageSizeParam: "limit" }, options);
  }
}
