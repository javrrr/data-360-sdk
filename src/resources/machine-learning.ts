import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpMlModelArtifactBaseRepresentation,
  CdpMlModelArtifactCollectionRepresentation,
  CdpMlModelArtifactInputRepresentation,
  CdpMlPredictInputBaseRepresentation,
  CdpMlPredictResultRepresentation,
  CdpMlSetupBaseInputRepresentation,
  CdpMlSetupBaseRepresentation,
  CdpMlSetupPartitionBaseRepresentation,
  CdpMlSetupVersionCollectionRepresentation,
  CdpMlSetupVersionPartitionCollectionRepresentation,
  MlConfiguredModelCollectionRepresentation,
  MlConfiguredModelInputRepresentation,
  MlConfiguredModelRepresentation,
  MlDataAlertCollectionRepresentation,
  MlDataAlertInputRepresentation,
  MlDataAlertQueryInputRepresentation,
  MlDataAlertRepresentation,
  MlSetupBaseUpdateInputRepresentation,
} from "../schemas.js";

export class MachineLearningService extends BaseResource {
  protected readonly basePath = "/ssot/machine-learning";

  async listAlerts(params?: PaginationParams, options?: RequestOptions): Promise<MlDataAlertCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/alerts`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async createAlert(
    body: MlDataAlertQueryInputRepresentation,
    options?: RequestOptions,
  ): Promise<MlDataAlertCollectionRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/alerts`,
      body,
      options,
    );
  }

  async listConfiguredModels(
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<MlConfiguredModelCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/configured-models`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async listModelArtifacts(
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<CdpMlModelArtifactCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/model-artifacts`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async predict(
    body: CdpMlPredictInputBaseRepresentation,
    options?: RequestOptions,
  ): Promise<CdpMlPredictResultRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/predict`,
      body,
      options,
    );
  }

  async listSetupVersions(
    modelSetupIdOrName: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<CdpMlSetupVersionCollectionRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async patchAlerts(alertId: string, body: MlDataAlertInputRepresentation, options?: RequestOptions): Promise<MlDataAlertRepresentation> {
    return this.httpClient.patch(`${this.basePath}/alerts/${encodeURIComponent(alertId)}`, body, options);
  }


  async deleteConfiguredModels(configuredModelIdOrName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/configured-models/${encodeURIComponent(configuredModelIdOrName)}`, options);
  }

  async patchConfiguredModels(configuredModelIdOrName: string, body: MlConfiguredModelInputRepresentation, options?: RequestOptions): Promise<MlConfiguredModelRepresentation> {
    return this.httpClient.patch(`${this.basePath}/configured-models/${encodeURIComponent(configuredModelIdOrName)}`, body, options);
  }


  async deleteModelArtifacts(modelArtifactIdOrName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/model-artifacts/${encodeURIComponent(modelArtifactIdOrName)}`, options);
  }

  async patchModelArtifacts(modelArtifactIdOrName: string, body: CdpMlModelArtifactInputRepresentation, options?: RequestOptions): Promise<CdpMlModelArtifactBaseRepresentation> {
    return this.httpClient.patch(`${this.basePath}/model-artifacts/${encodeURIComponent(modelArtifactIdOrName)}`, body, options);
  }

  async createSetupVersions(modelSetupIdOrName: string, body: CdpMlSetupBaseInputRepresentation, options?: RequestOptions): Promise<CdpMlSetupBaseRepresentation> {
    return this.httpClient.post(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions`, body, options);
  }

  async getSetupVersions(modelSetupIdOrName: string, modelSetupVersionId: string, options?: RequestOptions): Promise<CdpMlSetupBaseRepresentation> {
    return this.httpClient.get(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions/${encodeURIComponent(modelSetupVersionId)}`, options);
  }

  async patchSetupVersions(modelSetupIdOrName: string, modelSetupVersionId: string, body: MlSetupBaseUpdateInputRepresentation, options?: RequestOptions): Promise<CdpMlSetupBaseRepresentation> {
    return this.httpClient.patch(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions/${encodeURIComponent(modelSetupVersionId)}`, body, options);
  }

  async getPartitions(modelSetupIdOrName: string, modelSetupVersionId: string, options?: RequestOptions): Promise<CdpMlSetupVersionPartitionCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions/${encodeURIComponent(modelSetupVersionId)}/partitions`, options);
  }

  async getConfiguredModel(configuredModelIdOrName: string, options?: RequestOptions): Promise<MlConfiguredModelRepresentation> {
    return this.httpClient.get(`${this.basePath}/configured-models/${encodeURIComponent(configuredModelIdOrName)}`, options);
  }

  async getModelArtifact(modelArtifactIdOrName: string, options?: RequestOptions): Promise<CdpMlModelArtifactBaseRepresentation> {
    return this.httpClient.get(`${this.basePath}/model-artifacts/${encodeURIComponent(modelArtifactIdOrName)}`, options);
  }

  async getPartition(modelSetupIdOrName: string, modelSetupVersionId: string, modelSetupPartitionId: string, options?: RequestOptions): Promise<CdpMlSetupPartitionBaseRepresentation> {
    return this.httpClient.get(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions/${encodeURIComponent(modelSetupVersionId)}/partitions/${encodeURIComponent(modelSetupPartitionId)}`, options);
  }
}
