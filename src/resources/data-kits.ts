import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  DataKitAsyncRepresentation,
  DataKitComponentDependencyCollectionRepresentation,
  DataKitComponentDeploymentStatusRepresentation,
  DataKitUnDeployInputRepresentation,
} from "../schemas.js";

export class DataKitsService extends BaseResource {
  protected readonly basePath = "/ssot/data-kits";

  async list(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async undeploy(dataKitName: string, body: DataKitUnDeployInputRepresentation, options?: RequestOptions): Promise<DataKitAsyncRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataKitName)}/undeploy`, body, options);
  }

  async getDependencies(dataKitName: string, componentName: string, options?: RequestOptions): Promise<DataKitComponentDependencyCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataKitName)}/components/${encodeURIComponent(componentName)}/dependencies`, options);
  }

  async getDeploymentStatus(dataKitName: string, componentName: string, options?: RequestOptions): Promise<DataKitComponentDeploymentStatusRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataKitName)}/components/${encodeURIComponent(componentName)}/deployment-status`, options);
  }
}
