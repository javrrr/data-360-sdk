/**
 * Auto-generated base service for Data Model Objects.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-model-objects.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CdpObjectSourceTargetMapCollectionRepresentation,
  CdpObjectSourceTargetMapInputRepresentation,
  CdpObjectSourceTargetMapRepresentation,
  DataModelObjectCollectionRepresentation,
  DataModelObjectInputRepresentation,
  DataModelObjectRepresentation,
  FieldSrcTrgtRelationshipCollectionInputRepresentation,
  FieldSrcTrgtRelationshipCollectionRepresentation,
  FieldSrcTrgtRelationshipRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DataModelObjectsListMappingsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  /** Developer name of the data lake object (DLO) source object. */
  dloDeveloperName?: string;
  /** Developer name of the DMO target object. */
  dmoDeveloperName: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataModelObjectsCreateMappingsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataModelObjectsDeleteMappingsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataModelObjectsGetMappingsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataModelObjectsDeleteMappingsFieldMappingsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataModelObjectsPatchMappingsFieldMappingsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataModelObjectsListRelationshipsParams {
  /** Filter the returned results based on relationship creation type. */
  creationType?: string;
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  /** The field on which the results are to be sorted. */
  sortBy?: string;
  /** Filter the returned results based on relationship status. */
  status?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataModelObjectsCreateRelationshipsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataModelObjectsDeleteRelationshipsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DataModelObjectsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-model-objects";

  /** GET /ssot/data-model-object-mappings — Get data model object mappings */
  async listMappings(params?: DataModelObjectsListMappingsParams, options?: RequestOptions): Promise<CdpObjectSourceTargetMapCollectionRepresentation> {
    return this.httpClient.get(`/ssot/data-model-object-mappings`, { ...options, query: params });
  }

  /** POST /ssot/data-model-object-mappings — Create data model object mapping */
  async createMappings(body: CdpObjectSourceTargetMapInputRepresentation, params?: DataModelObjectsCreateMappingsParams, options?: RequestOptions): Promise<CdpObjectSourceTargetMapRepresentation> {
    return this.httpClient.post(`/ssot/data-model-object-mappings`, body, { ...options, query: params });
  }

  /** DELETE /ssot/data-model-object-mappings/{objectSourceTargetMapDeveloperName} — Delete data model object mapping */
  async deleteMappings(objectSourceTargetMapDeveloperName: string, params?: DataModelObjectsDeleteMappingsParams, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`/ssot/data-model-object-mappings/${encodeURIComponent(objectSourceTargetMapDeveloperName)}`, { ...options, query: params });
  }

  /** GET /ssot/data-model-object-mappings/{objectSourceTargetMapDeveloperName} — Get data model object mapping */
  async getMappings(objectSourceTargetMapDeveloperName: string, params?: DataModelObjectsGetMappingsParams, options?: RequestOptions): Promise<CdpObjectSourceTargetMapRepresentation> {
    return this.httpClient.get(`/ssot/data-model-object-mappings/${encodeURIComponent(objectSourceTargetMapDeveloperName)}`, { ...options, query: params });
  }

  /** DELETE /ssot/data-model-object-mappings/{objectSourceTargetMapDeveloperName}/field-mappings — Delete data model object field mapping */
  async deleteMappingsFieldMappings(objectSourceTargetMapDeveloperName: string, params?: DataModelObjectsDeleteMappingsFieldMappingsParams, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`/ssot/data-model-object-mappings/${encodeURIComponent(objectSourceTargetMapDeveloperName)}/field-mappings`, { ...options, query: params });
  }

  /** PATCH /ssot/data-model-object-mappings/{objectSourceTargetMapDeveloperName}/field-mappings/{fieldSourceTargetMapDeveloperName} — Delete data model object field mapping */
  async patchMappingsFieldMappings(fieldSourceTargetMapDeveloperName: string, objectSourceTargetMapDeveloperName: string, body: CdpObjectSourceTargetMapInputRepresentation, params?: DataModelObjectsPatchMappingsFieldMappingsParams, options?: RequestOptions): Promise<CdpObjectSourceTargetMapRepresentation> {
    return this.httpClient.patch(`/ssot/data-model-object-mappings/${encodeURIComponent(objectSourceTargetMapDeveloperName)}/field-mappings/${encodeURIComponent(fieldSourceTargetMapDeveloperName)}`, body, { ...options, query: params });
  }

  /** GET /ssot/data-model-objects — Get data model objects */
  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataModelObjectCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** POST /ssot/data-model-objects — Create data model object */
  async create(body: DataModelObjectInputRepresentation, options?: RequestOptions): Promise<DataModelObjectRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/data-model-objects/{dataModelObjectName} — Delete data model object */
  async delete(dataModelObjectName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}`, options);
  }

  /** GET /ssot/data-model-objects/{dataModelObjectName} — Get data model object */
  async get(dataModelObjectName: string, options?: RequestOptions): Promise<DataModelObjectRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}`, options);
  }

  /** PATCH /ssot/data-model-objects/{dataModelObjectName} — Update data model object */
  async patch(dataModelObjectName: string, body: DataModelObjectInputRepresentation, options?: RequestOptions): Promise<DataModelObjectRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}`, body, options);
  }

  /** GET /ssot/data-model-objects/{dataModelObjectName}/relationships — Get field source target relationships */
  async listRelationships(dataModelObjectName: string, params?: PaginationParams & DataModelObjectsListRelationshipsParams, options?: RequestOptions): Promise<FieldSrcTrgtRelationshipCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}/relationships`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-model-objects/{dataModelObjectName}/relationships — Create field source target relationships */
  async createRelationships(dataModelObjectName: string, body: FieldSrcTrgtRelationshipCollectionInputRepresentation, params?: DataModelObjectsCreateRelationshipsParams, options?: RequestOptions): Promise<FieldSrcTrgtRelationshipCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}/relationships`, body, { ...options, query: params });
  }

  /** DELETE /ssot/data-model-objects/relationships/{name} — Delete field source target relationship */
  async deleteRelationships(name: string, params?: DataModelObjectsDeleteRelationshipsParams, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/relationships/${encodeURIComponent(name)}`, { ...options, query: params });
  }

  /** Async generator yielding all items from listMappings */
  async *listAllMappings(params?: PaginationParams & DataModelObjectsListMappingsParams, options?: RequestOptions): AsyncGenerator<CdpObjectSourceTargetMapRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<CdpObjectSourceTargetMapRepresentation>(`${this.basePath}mappings`, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<DataModelObjectRepresentation, void, undefined> {
    yield* this.paginate<DataModelObjectRepresentation>(this.basePath, { ...params, pageSizeParam: "limit" }, options);
  }

  /** Async generator yielding all items from listRelationships */
  async *listAllRelationships(dataModelObjectName: string, params?: PaginationParams & DataModelObjectsListRelationshipsParams, options?: RequestOptions): AsyncGenerator<FieldSrcTrgtRelationshipRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<FieldSrcTrgtRelationshipRepresentation>(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}/relationships`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
