import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpCalculatedInsightCollectionRepresentation,
  CdpCalculatedInsightInputRepresentation,
  CdpCalculatedInsightRepresentation,
  CdpCalculatedInsightStandardActionResponseRepresentation,
} from "../schemas.js";

export class CalculatedInsightsService extends BaseResource {
  protected readonly basePath = "/ssot/calculated-insights";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<CdpCalculatedInsightCollectionRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(apiName: string, options?: RequestOptions): Promise<CdpCalculatedInsightRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(apiName)}`,
      options,
    );
  }

  async run(apiName: string, options?: RequestOptions): Promise<CdpCalculatedInsightStandardActionResponseRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(apiName)}/actions/run`,
      undefined,
      options,
    );
  }

  async create(body: CdpCalculatedInsightInputRepresentation, options?: RequestOptions): Promise<CdpCalculatedInsightRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(apiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(apiName)}`, options);
  }

  async patch(apiName: string, body: CdpCalculatedInsightInputRepresentation, options?: RequestOptions): Promise<CdpCalculatedInsightRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(apiName)}`, body, options);
  }
}
