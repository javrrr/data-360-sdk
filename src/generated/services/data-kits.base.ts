/**
 * Auto-generated base service for Data Kits.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-kits.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { RequestOptions } from "../../core/types.js";
import type {
  DataKitAsyncRepresentation,
  DataKitComponentDependencyCollectionRepresentation,
  DataKitComponentDeploymentStatusRepresentation,
  DataKitUnDeployInputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DataKitsListDependenciesParams {
  /** Type of component. Valid values are: */
  componentType: string;
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataKitsCreateUndeployParams {
  /** Indicates whether the deployment is asynchronous. Only the `true` value is accepted. */
  asyncMode: boolean;
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DataKitsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-kits";

  /** GET /ssot/data-kits/{dataKitName}/components/{componentName}/dependencies — Get data kit component dependency */
  async listDependencies(componentName: string, dataKitName: string, params?: DataKitsListDependenciesParams, options?: RequestOptions): Promise<DataKitComponentDependencyCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataKitName)}/components/${encodeURIComponent(componentName)}/dependencies`, { ...options, query: params });
  }

  /** GET /ssot/data-kits/{dataKitName}/components/{componentName}/deployment-status — Get data kit component status */
  async getDeploymentStatus(componentName: string, dataKitName: string, options?: RequestOptions): Promise<DataKitComponentDeploymentStatusRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataKitName)}/components/${encodeURIComponent(componentName)}/deployment-status`, options);
  }

  /** POST /ssot/data-kits/{dataKitName}/undeploy — Undeploy data kit component */
  async createUndeploy(dataKitName: string, body: DataKitUnDeployInputRepresentation, params?: DataKitsCreateUndeployParams, options?: RequestOptions): Promise<DataKitAsyncRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataKitName)}/undeploy`, body, { ...options, query: params });
  }
}
