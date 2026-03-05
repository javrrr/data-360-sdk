import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpDataTransformActionResponseRepresentation,
  CdpScheduleInputRepresentation,
  CdpScheduleRepresentation,
  DataTransformCollectionRepresentation,
  DataTransformInputRepresentation,
  DataTransformRepresentation,
  DataTransformRunHistoryCollectionRepresentation,
  DataTransformValidationRepresentation,
} from "../schemas.js";

export class DataTransformsService extends BaseResource {
  protected readonly basePath = "/ssot/data-transforms";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<DataTransformCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(nameOrId: string, options?: RequestOptions): Promise<DataTransformRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(nameOrId)}`,
      options,
    );
  }

  async run(nameOrId: string, options?: RequestOptions): Promise<CdpDataTransformActionResponseRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(nameOrId)}/actions/run`,
      undefined,
      options,
    );
  }

  async cancel(nameOrId: string, options?: RequestOptions): Promise<CdpDataTransformActionResponseRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(nameOrId)}/actions/cancel`,
      undefined,
      options,
    );
  }

  async retry(nameOrId: string, options?: RequestOptions): Promise<CdpDataTransformActionResponseRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(nameOrId)}/actions/retry`,
      undefined,
      options,
    );
  }

  async getRunHistory(
    nameOrId: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<DataTransformRunHistoryCollectionRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(nameOrId)}/run-history`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async create(body: DataTransformInputRepresentation, options?: RequestOptions): Promise<DataTransformRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async put(dataTransformNameOrId: string, body: DataTransformInputRepresentation, options?: RequestOptions): Promise<DataTransformRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}`, body, options);
  }

  async delete(dataTransformNameOrId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}`, options);
  }

  async refreshStatus(dataTransformNameOrId: string, options?: RequestOptions): Promise<CdpDataTransformActionResponseRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/actions/refresh-status`, undefined, options);
  }

  async listSchedule(dataTransformNameOrId: string, options?: RequestOptions): Promise<CdpScheduleRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/schedule`, options);
  }

  async updateSchedule(dataTransformNameOrId: string, body: CdpScheduleInputRepresentation, options?: RequestOptions): Promise<CdpScheduleRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(dataTransformNameOrId)}/schedule`, body, options);
  }

  async validate(body: DataTransformInputRepresentation, options?: RequestOptions): Promise<DataTransformValidationRepresentation> {
    return this.httpClient.post("/ssot/data-transforms-validation", body, options);
  }
}
