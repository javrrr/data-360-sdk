import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpObjectSourceTargetMapCollectionRepresentation,
  CdpObjectSourceTargetMapInputRepresentation,
  CdpObjectSourceTargetMapRepresentation,
  DataModelObjectCollectionRepresentation,
  DataModelObjectInputRepresentation,
  DataModelObjectRepresentation,
  FieldSrcTrgtRelationshipCollectionInputRepresentation,
  FieldSrcTrgtRelationshipCollectionRepresentation,
} from "../schemas.js";

export class DataModelObjectsService extends BaseResource {
  protected readonly basePath = "/ssot/data-model-objects";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataModelObjectCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(name: string, options?: RequestOptions): Promise<DataModelObjectRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(name)}`,
      options,
    );
  }

  async create(body: DataModelObjectInputRepresentation, options?: RequestOptions): Promise<DataModelObjectRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(dataModelObjectName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}`, options);
  }

  async patch(dataModelObjectName: string, body: DataModelObjectInputRepresentation, options?: RequestOptions): Promise<DataModelObjectRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}`, body, options);
  }





  async deleteFieldMappings(objectSourceTargetMapDeveloperName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`/ssot/data-model-object-mappings/${encodeURIComponent(objectSourceTargetMapDeveloperName)}/field-mappings`, options);
  }

  async patchFieldMappings(objectSourceTargetMapDeveloperName: string, fieldSourceTargetMapDeveloperName: string, body: CdpObjectSourceTargetMapInputRepresentation, options?: RequestOptions): Promise<CdpObjectSourceTargetMapRepresentation> {
    return this.httpClient.patch(`/ssot/data-model-object-mappings/${encodeURIComponent(objectSourceTargetMapDeveloperName)}/field-mappings/${encodeURIComponent(fieldSourceTargetMapDeveloperName)}`, body, options);
  }

  async deleteRelationships(name: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/relationships/${encodeURIComponent(name)}`, options);
  }

  async listRelationships(dataModelObjectName: string, options?: RequestOptions): Promise<FieldSrcTrgtRelationshipCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}/relationships`, options);
  }

  async createRelationships(dataModelObjectName: string, body: FieldSrcTrgtRelationshipCollectionInputRepresentation, options?: RequestOptions): Promise<FieldSrcTrgtRelationshipCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataModelObjectName)}/relationships`, body, options);
  }

  async listMappings(options?: RequestOptions): Promise<CdpObjectSourceTargetMapCollectionRepresentation> {
    return this.httpClient.get("/ssot/data-model-object-mappings", options);
  }

  async createMapping(body: CdpObjectSourceTargetMapInputRepresentation, options?: RequestOptions): Promise<CdpObjectSourceTargetMapRepresentation> {
    return this.httpClient.post("/ssot/data-model-object-mappings", body, options);
  }

  async getMapping(developerName: string, options?: RequestOptions): Promise<CdpObjectSourceTargetMapRepresentation> {
    return this.httpClient.get(`/ssot/data-model-object-mappings/${encodeURIComponent(developerName)}`, options);
  }

  async deleteMapping(developerName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`/ssot/data-model-object-mappings/${encodeURIComponent(developerName)}`, options);
  }
}
