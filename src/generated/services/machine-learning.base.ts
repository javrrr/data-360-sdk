/**
 * Auto-generated base service for Machine Learning.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/machine-learning.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CdpMlJobBaseRepresentation,
  CdpMlJobCollectionRepresentation,
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
  CdpMlTaskBase,
  CdpMlTaskCollection,
  MlConfiguredModelCollectionRepresentation,
  MlConfiguredModelInputRepresentation,
  MlConfiguredModelRepresentation,
  MlDataAlertCollectionRepresentation,
  MlDataAlertInputRepresentation,
  MlDataAlertQueryInputRepresentation,
  MlDataAlertRepresentation,
  MlPredictionJobDefBaseInputRepresentation,
  MlPredictionJobDefBaseRepresentation,
  MlPredictionJobDefCollectionRepresentation,
  MlSetupBaseUpdateInputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface MachineLearningListConfiguredModelsParams {
  /** The model's name or ID. If not provided, information for all configured models is returned. */
  assetIdOrName?: string;
  /** Whether the model is a configured model or a model artifact. */
  assetType?: string;
  /** Model capability. */
  capabilities?: string;
  /** For models that are externally connected, indicates the type of connector. */
  connectorType?: string;
  /** The type of model. */
  modelType?: string;
  /** If `true`, the model is managed by Salesforce. */
  outOfTheBox?: boolean;
  /** The search string to use when filtering the query. */
  search?: string;
  /** The model's source. */
  sourceType?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface MachineLearningGetConfiguredModelsParams {
  /** Group on which to filter response results. Valid values are `Big`, `Medium`, and `Small`. */
  filterGroup?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface MachineLearningListJobsParams {
  /** ID or API name of the predict job. */
  jobIdOrName?: string;
  /** Type of job. */
  type?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface MachineLearningListModelArtifactsParams {
  /** Type of artifacts to return. */
  modelType?: string;
  /** The model's source. */
  sourceType?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface MachineLearningListModelSetupsSetupVersionsParams {
  /** Indicates whether the model setup is active (`true`) or not (`false`). */
  active?: boolean;
  [key: string]: string | number | boolean | undefined;
}

export interface MachineLearningListPredictionJobDefinitionsParams {
  /** ID of the machine learning model. */
  modelId?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class MachineLearningServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/machine-learning";

  /** POST /ssot/machine-learning/alerts — Create data alert */
  async createAlerts(body: MlDataAlertQueryInputRepresentation, options?: RequestOptions): Promise<MlDataAlertCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/alerts`, body, options);
  }

  /** PATCH /ssot/machine-learning/alerts/{alertId} — Update data alert */
  async patchAlerts(alertId: string, body: MlDataAlertInputRepresentation, options?: RequestOptions): Promise<MlDataAlertRepresentation> {
    return this.httpClient.patch(`${this.basePath}/alerts/${encodeURIComponent(alertId)}`, body, options);
  }

  /** GET /ssot/machine-learning/configured-models — Get configured models */
  async listConfiguredModels(params?: PaginationParams & MachineLearningListConfiguredModelsParams, options?: RequestOptions): Promise<MlConfiguredModelCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/configured-models`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** DELETE /ssot/machine-learning/configured-models/{configuredModelIdOrName} — Delete configured model */
  async deleteConfiguredModels(configuredModelIdOrName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/configured-models/${encodeURIComponent(configuredModelIdOrName)}`, options);
  }

  /** GET /ssot/machine-learning/configured-models/{configuredModelIdOrName} — Get configured model */
  async getConfiguredModels(configuredModelIdOrName: string, params?: MachineLearningGetConfiguredModelsParams, options?: RequestOptions): Promise<MlConfiguredModelRepresentation> {
    return this.httpClient.get(`${this.basePath}/configured-models/${encodeURIComponent(configuredModelIdOrName)}`, { ...options, query: params });
  }

  /** PATCH /ssot/machine-learning/configured-models/{configuredModelIdOrName} — Update configured model */
  async patchConfiguredModels(configuredModelIdOrName: string, body: MlConfiguredModelInputRepresentation, options?: RequestOptions): Promise<MlConfiguredModelRepresentation> {
    return this.httpClient.patch(`${this.basePath}/configured-models/${encodeURIComponent(configuredModelIdOrName)}`, body, options);
  }

  /** GET /ssot/machine-learning/jobs — Get predict jobs */
  async listJobs(params?: PaginationParams & MachineLearningListJobsParams, options?: RequestOptions): Promise<CdpMlJobCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/jobs`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /ssot/machine-learning/jobs/{jobId} — Get a predict job */
  async getJobs(jobId: string, options?: RequestOptions): Promise<CdpMlJobBaseRepresentation> {
    return this.httpClient.get(`${this.basePath}/jobs/${encodeURIComponent(jobId)}`, options);
  }

  /** GET /ssot/machine-learning/jobs/{jobId}/tasks — Get predict job tasks */
  async listJobsTasks(jobId: string, options?: RequestOptions): Promise<CdpMlTaskCollection> {
    return this.httpClient.get(`${this.basePath}/jobs/${encodeURIComponent(jobId)}/tasks`, options);
  }

  /** GET /ssot/machine-learning/jobs/{jobId}/tasks/{taskId} — Get a predict job task */
  async getJobsTasks(jobId: string, taskId: string, options?: RequestOptions): Promise<CdpMlTaskBase> {
    return this.httpClient.get(`${this.basePath}/jobs/${encodeURIComponent(jobId)}/tasks/${encodeURIComponent(taskId)}`, options);
  }

  /** GET /ssot/machine-learning/model-artifacts — Get model artifacts */
  async listModelArtifacts(params?: PaginationParams & MachineLearningListModelArtifactsParams, options?: RequestOptions): Promise<CdpMlModelArtifactCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/model-artifacts`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** DELETE /ssot/machine-learning/model-artifacts/{modelArtifactIdOrName} — Delete model artifact */
  async deleteModelArtifacts(modelArtifactIdOrName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/model-artifacts/${encodeURIComponent(modelArtifactIdOrName)}`, options);
  }

  /** GET /ssot/machine-learning/model-artifacts/{modelArtifactIdOrName} — Get model artifact */
  async getModelArtifacts(modelArtifactIdOrName: string, options?: RequestOptions): Promise<CdpMlModelArtifactBaseRepresentation> {
    return this.httpClient.get(`${this.basePath}/model-artifacts/${encodeURIComponent(modelArtifactIdOrName)}`, options);
  }

  /** PATCH /ssot/machine-learning/model-artifacts/{modelArtifactIdOrName} — Update model artifact */
  async patchModelArtifacts(modelArtifactIdOrName: string, body: CdpMlModelArtifactInputRepresentation, options?: RequestOptions): Promise<CdpMlModelArtifactBaseRepresentation> {
    return this.httpClient.patch(`${this.basePath}/model-artifacts/${encodeURIComponent(modelArtifactIdOrName)}`, body, options);
  }

  /** GET /ssot/machine-learning/model-setups/{modelSetupIdOrName}/setup-versions — Get model setup versions */
  async listModelSetupsSetupVersions(modelSetupIdOrName: string, params?: PaginationParams & MachineLearningListModelSetupsSetupVersionsParams, options?: RequestOptions): Promise<CdpMlSetupVersionCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/machine-learning/model-setups/{modelSetupIdOrName}/setup-versions — Create model setup version */
  async createModelSetupsSetupVersions(modelSetupIdOrName: string, body: CdpMlSetupBaseInputRepresentation, options?: RequestOptions): Promise<CdpMlSetupBaseRepresentation> {
    return this.httpClient.post(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions`, body, options);
  }

  /** GET /ssot/machine-learning/model-setups/{modelSetupIdOrName}/setup-versions/{modelSetupVersionId} — Get model setup version */
  async getModelSetupsSetupVersions(modelSetupIdOrName: string, modelSetupVersionId: string, options?: RequestOptions): Promise<CdpMlSetupBaseRepresentation> {
    return this.httpClient.get(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions/${encodeURIComponent(modelSetupVersionId)}`, options);
  }

  /** PATCH /ssot/machine-learning/model-setups/{modelSetupIdOrName}/setup-versions/{modelSetupVersionId} — Update model setup version */
  async patchModelSetupsSetupVersions(modelSetupIdOrName: string, modelSetupVersionId: string, body: MlSetupBaseUpdateInputRepresentation, options?: RequestOptions): Promise<CdpMlSetupBaseRepresentation> {
    return this.httpClient.patch(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions/${encodeURIComponent(modelSetupVersionId)}`, body, options);
  }

  /** GET /ssot/machine-learning/model-setups/{modelSetupIdOrName}/setup-versions/{modelSetupVersionId}/partitions — Get model setup version partitions */
  async listModelSetupsSetupVersionsByGet(modelSetupIdOrName: string, modelSetupVersionId: string, options?: RequestOptions): Promise<CdpMlSetupVersionPartitionCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions/${encodeURIComponent(modelSetupVersionId)}/partitions`, options);
  }

  /** GET /ssot/machine-learning/model-setups/{modelSetupIdOrName}/setup-versions/{modelSetupVersionId}/partitions/{modelSetupPartitionId} — Get model setup version partition */
  async getModelSetupsSetupVersionsByGet(modelSetupIdOrName: string, modelSetupVersionId: string, modelSetupPartitionId: string, options?: RequestOptions): Promise<CdpMlSetupPartitionBaseRepresentation> {
    return this.httpClient.get(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions/${encodeURIComponent(modelSetupVersionId)}/partitions/${encodeURIComponent(modelSetupPartitionId)}`, options);
  }

  /** POST /ssot/machine-learning/predict — Get prediction */
  async createPredict(body: CdpMlPredictInputBaseRepresentation, options?: RequestOptions): Promise<CdpMlPredictResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/predict`, body, options);
  }

  /** GET /ssot/machine-learning/prediction-job-definitions — Get prediction job definitions */
  async listPredictionJobDefinitions(params?: MachineLearningListPredictionJobDefinitionsParams, options?: RequestOptions): Promise<MlPredictionJobDefCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/prediction-job-definitions`, { ...options, query: params });
  }

  /** POST /ssot/machine-learning/prediction-job-definitions — Create a prediction job definition */
  async createPredictionJobDefinitions(body: MlPredictionJobDefBaseInputRepresentation, options?: RequestOptions): Promise<MlPredictionJobDefBaseRepresentation> {
    return this.httpClient.post(`${this.basePath}/prediction-job-definitions`, body, options);
  }

  /** DELETE /ssot/machine-learning/prediction-job-definitions/{predictionJobDefIdOrName} — Delete a prediction job definition */
  async deletePredictionJobDefinitions(predictionJobDefIdOrName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/prediction-job-definitions/${encodeURIComponent(predictionJobDefIdOrName)}`, options);
  }

  /** GET /ssot/machine-learning/prediction-job-definitions/{predictionJobDefIdOrName} — Get a prediction job definition */
  async getPredictionJobDefinitions(predictionJobDefIdOrName: string, options?: RequestOptions): Promise<MlPredictionJobDefBaseRepresentation> {
    return this.httpClient.get(`${this.basePath}/prediction-job-definitions/${encodeURIComponent(predictionJobDefIdOrName)}`, options);
  }

  /** PATCH /ssot/machine-learning/prediction-job-definitions/{predictionJobDefIdOrName} — Update a prediction job definition */
  async patchPredictionJobDefinitions(predictionJobDefIdOrName: string, body: MlPredictionJobDefBaseInputRepresentation, options?: RequestOptions): Promise<MlPredictionJobDefBaseRepresentation> {
    return this.httpClient.patch(`${this.basePath}/prediction-job-definitions/${encodeURIComponent(predictionJobDefIdOrName)}`, body, options);
  }

  /** Async generator yielding all items from listConfiguredModels */
  async *listAllConfiguredModels(params?: PaginationParams & MachineLearningListConfiguredModelsParams, options?: RequestOptions): AsyncGenerator<MlConfiguredModelRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<MlConfiguredModelRepresentation>(`${this.basePath}/configured-models`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listJobs */
  async *listAllJobs(params?: PaginationParams & MachineLearningListJobsParams, options?: RequestOptions): AsyncGenerator<CdpMlJobBaseRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<CdpMlJobBaseRepresentation>(`${this.basePath}/jobs`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listJobsTasks */
  async *listAllJobsTasks(jobId: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<CdpMlTaskBase, void, undefined> {
    yield* this.paginate<CdpMlTaskBase>(`${this.basePath}/jobs/${encodeURIComponent(jobId)}/tasks`, { ...params, pageSizeParam: "batchSize" }, options);
  }

  /** Async generator yielding all items from listModelArtifacts */
  async *listAllModelArtifacts(params?: PaginationParams & MachineLearningListModelArtifactsParams, options?: RequestOptions): AsyncGenerator<CdpMlModelArtifactBaseRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<CdpMlModelArtifactBaseRepresentation>(`${this.basePath}/model-artifacts`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listModelSetupsSetupVersions */
  async *listAllModelSetupsSetupVersions(modelSetupIdOrName: string, params?: PaginationParams & MachineLearningListModelSetupsSetupVersionsParams, options?: RequestOptions): AsyncGenerator<CdpMlSetupBaseRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<CdpMlSetupBaseRepresentation>(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listModelSetupsSetupVersionsByGet */
  async *listAllModelSetupsSetupVersionsByGet(modelSetupIdOrName: string, modelSetupVersionId: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<CdpMlSetupPartitionBaseRepresentation, void, undefined> {
    yield* this.paginate<CdpMlSetupPartitionBaseRepresentation>(`${this.basePath}/model-setups/${encodeURIComponent(modelSetupIdOrName)}/setup-versions/${encodeURIComponent(modelSetupVersionId)}/partitions`, { ...params, pageSizeParam: "batchSize" }, options);
  }

  /** Async generator yielding all items from listPredictionJobDefinitions */
  async *listAllPredictionJobDefinitions(params?: PaginationParams & MachineLearningListPredictionJobDefinitionsParams, options?: RequestOptions): AsyncGenerator<MlPredictionJobDefBaseRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<MlPredictionJobDefBaseRepresentation>(`${this.basePath}/prediction-job-definitions`, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
