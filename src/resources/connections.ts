import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  ConnectionCollectionRepresentation,
  ConnectionCommandActionInputRepresentation,
  ConnectionCommandActionRepresentation,
  ConnectionCommandExistingActionInputRepresentation,
  ConnectionDatabaseCollectionRepresentation,
  ConnectionDbSchemaCollectionInputRepresentation,
  ConnectionDbSchemaCollectionRepresentation,
  ConnectionFieldCollectionInputRepresentation,
  ConnectionFieldCollectionRepresentation,
  ConnectionInputRepresentation,
  ConnectionObjectCollectionInputRepresentation,
  ConnectionObjectCollectionRepresentation,
  ConnectionPatchInputRepresentation,
  ConnectionPreviewInputRepresentation,
  ConnectionPreviewRepresentation,
  ConnectionRepresentation,
  ConnectionSchemaActionResponseRepresentation,
  ConnectionSchemaCollectionInputRepresentation,
  ConnectionSchemaCollectionRepresentation,
  ConnectionSitemapInputRepresentation,
  ConnectionSitemapRepresentation,
  ConnectionTestActionRepresentation,
  ConnectionTestInputRepresentation,
} from "../schemas.js";

export class ConnectionsService extends BaseResource {
  protected readonly basePath = "/ssot/connections";

  async list(
    params: PaginationParams & { connectorType: string; devName?: string; label?: string },
    options?: RequestOptions,
  ): Promise<ConnectionCollectionRepresentation> {
    const { connectorType, devName, label, ...pagination } = params;
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery(pagination), connectorType, devName, label },
    });
  }

  async *listAll(
    params: PaginationParams & { connectorType: string; devName?: string; label?: string },
    options?: RequestOptions,
  ) {
    const { connectorType, devName, label, ...pagination } = params;
    yield* this.paginate(this.basePath, { ...pagination, query: { connectorType, devName, label } }, options);
  }

  async get(id: string, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}`,
      options,
    );
  }

  async create(body: ConnectionInputRepresentation, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async update(
    id: string,
    body: ConnectionPatchInputRepresentation,
    options?: RequestOptions,
  ): Promise<ConnectionRepresentation> {
    return this.httpClient.patch(
      `${this.basePath}/${encodeURIComponent(id)}`,
      body,
      options,
    );
  }

  async getDatabaseSchemas(id: string, options?: RequestOptions): Promise<ConnectionDbSchemaCollectionRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}/database-schemas`,
      options,
    );
  }

  async getDatabases(id: string, options?: RequestOptions): Promise<ConnectionDatabaseCollectionRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}/databases`,
      options,
    );
  }

  async getObjects(
    id: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<ConnectionObjectCollectionRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(id)}/objects`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async getObjectFields(
    connectionId: string,
    resourceName: string,
    options?: RequestOptions,
  ): Promise<ConnectionFieldCollectionRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(connectionId)}/objects/${encodeURIComponent(resourceName)}/fields`,
      options,
    );
  }

  async test(body: ConnectionTestInputRepresentation, options?: RequestOptions): Promise<ConnectionTestActionRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/actions/test`,
      body,
      options,
    );
  }

  async testById(id: string, options?: RequestOptions): Promise<ConnectionTestActionRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(id)}/actions/test`,
      undefined,
      options,
    );
  }

  async put(connectionId: string, body: ConnectionInputRepresentation, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(connectionId)}`, body, options);
  }

  async delete(connectionId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(connectionId)}`, options);
  }

  async listDatabaseSchemas(connectionId: string, body: ConnectionDbSchemaCollectionInputRepresentation, options?: RequestOptions): Promise<ConnectionDbSchemaCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/database-schemas`, body, options);
  }

  async listDatabases(connectionId: string, options?: RequestOptions): Promise<ConnectionDatabaseCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/databases`, undefined, options);
  }

  /** Returns a binary YAML stream with OpenAPI definitions for Ingestion API connector endpoints. */
  async listEndpoints(connectionId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(connectionId)}/endpoints`, options);
  }

  async getFields(connectionId: string, resourceName: string, body: ConnectionFieldCollectionInputRepresentation, options?: RequestOptions): Promise<ConnectionFieldCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/objects/${encodeURIComponent(resourceName)}/fields`, body, options);
  }

  async listObjects(connectionId: string, body: ConnectionObjectCollectionInputRepresentation, options?: RequestOptions): Promise<ConnectionObjectCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/objects`, body, options);
  }

  async previewData(connectionId: string, resourceName: string, body: ConnectionPreviewInputRepresentation, options?: RequestOptions): Promise<ConnectionPreviewRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/objects/${encodeURIComponent(resourceName)}/preview`, body, options);
  }

  async listSchema(connectionId: string, options?: RequestOptions): Promise<ConnectionSchemaCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(connectionId)}/schema`, options);
  }

  async updateSchema(connectionId: string, body: ConnectionSchemaCollectionInputRepresentation, options?: RequestOptions): Promise<ConnectionSchemaCollectionRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(connectionId)}/schema`, body, options);
  }

  async listSitemap(connectionId: string, options?: RequestOptions): Promise<ConnectionSitemapRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(connectionId)}/sitemap`, options);
  }

  async updateSitemap(connectionId: string, body: ConnectionSitemapInputRepresentation, options?: RequestOptions): Promise<ConnectionSitemapRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(connectionId)}/sitemap`, body, options);
  }

  async runAction(command: string, body: ConnectionCommandActionInputRepresentation, options?: RequestOptions): Promise<ConnectionCommandActionRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(command)}`, body, options);
  }

  async runActionById(connectionId: string, command: string, body: ConnectionCommandExistingActionInputRepresentation, options?: RequestOptions): Promise<ConnectionCommandActionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/actions/${encodeURIComponent(command)}`, body, options);
  }

  async testSchema(connectionId: string, options?: RequestOptions): Promise<ConnectionSchemaActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(connectionId)}/schema/actions/test`, undefined, options);
  }
}
