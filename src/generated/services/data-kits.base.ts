/**
 * Auto-generated base service for Data Kits.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-kits.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CdpDataKitDeployInputRepresentation,
  CdpDataKitMembersList,
  DataKitAsyncRepresentation,
  DataKitComponentCollectionRepresentation,
  DataKitComponentDependencyCollectionRepresentation,
  DataKitComponentDeploymentStatusRepresentation,
  DataKitInputRepresentation,
  DataKitOutputRepresentation,
  DataKitPatchInputRepresentation,
  DataKitRepresentation,
  DataKitUnDeployInputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DataKitsListParams {
  /** Namespace prefix of the data kit package. */
  namespace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataKitsCreateByPostParams {
  /** Specifies asynchronous data kit deployment. Must be set to `true`; other values are not currently supported. */
  asyncMode: boolean;
  /** Name of the data space to which to deploy the data kit components. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

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

export interface DataKitsListAvailableComponentsParams {
  /** Type of components to return. These values are supported: */
  componentType?: string;
  /** Developer name of the data kit. */
  dataKitDevName?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DataKitsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-kits";

  /** GET /ssot/data-kits — Get data kits */
  async list(params?: DataKitsListParams, options?: RequestOptions): Promise<DataKitOutputRepresentation> {
    return this.httpClient.get(this.basePath, { ...options, query: params });
  }

  /** POST /ssot/data-kits — Create data kit */
  async create(body: DataKitInputRepresentation, options?: RequestOptions): Promise<DataKitRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/data-kits/{dataKitDevName} — Delete data kit */
  async delete(dataKitDevName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(dataKitDevName)}`, options);
  }

  /** PATCH /ssot/data-kits/{dataKitDevName} — Update data kit components */
  async patch(dataKitDevName: string, body: DataKitPatchInputRepresentation, options?: RequestOptions): Promise<DataKitRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(dataKitDevName)}`, body, options);
  }

  /** POST /ssot/data-kits/{dataKitDevName} — Deploy data kit components */
  async createByPost(dataKitDevName: string, body: CdpDataKitDeployInputRepresentation, params: DataKitsCreateByPostParams, options?: RequestOptions): Promise<DataKitAsyncRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataKitDevName)}`, body, { ...options, query: params });
  }

  /** GET /ssot/data-kits/{dataKitName}/components/{componentName}/dependencies — Get data kit component dependency */
  async listDependencies(componentName: string, dataKitName: string, params: DataKitsListDependenciesParams, options?: RequestOptions): Promise<DataKitComponentDependencyCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataKitName)}/components/${encodeURIComponent(componentName)}/dependencies`, { ...options, query: params });
  }

  /** GET /ssot/data-kits/{dataKitName}/components/{componentName}/deployment-status — Get data kit component status */
  async getDeploymentStatus(componentName: string, dataKitName: string, options?: RequestOptions): Promise<DataKitComponentDeploymentStatusRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataKitName)}/components/${encodeURIComponent(componentName)}/deployment-status`, options);
  }

  /** POST /ssot/data-kits/{dataKitName}/undeploy — Undeploy data kit component */
  async createUndeploy(dataKitName: string, body: DataKitUnDeployInputRepresentation, params: DataKitsCreateUndeployParams, options?: RequestOptions): Promise<DataKitAsyncRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataKitName)}/undeploy`, body, { ...options, query: params });
  }

  /** GET /ssot/data-kits/available-components — Get data kit available components */
  async listAvailableComponents(params?: PaginationParams & DataKitsListAvailableComponentsParams, options?: RequestOptions): Promise<DataKitComponentCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/available-components`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /ssot/datakit/{dataKitDevName}/manifest — Get data kit manifest */
  async getDataKitManifest(dataKitDevName: string, options?: RequestOptions): Promise<CdpDataKitMembersList> {
    return this.httpClient.get(`/ssot/datakit/${encodeURIComponent(dataKitDevName)}/manifest`, options);
  }
}
