import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpSegmentActionInputRepresentation,
  CdpSegmentActionOutputRepresentation,
  CdpSegmentContainerOutputRepresentation,
  CdpSegmentInputRepresentation,
  CdpSegmentMemberOutputRepresentation,
  CdpSegmentOutputRepresentation,
} from "../schemas.js";

export class SegmentsService extends BaseResource {
  protected readonly basePath = "/ssot/segments";

  async list(params?: PaginationParams, options?: RequestOptions): Promise<CdpSegmentContainerOutputRepresentation> {
    return this.httpClient.get(this.basePath, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async *listAll(params?: PaginationParams, options?: RequestOptions) {
    yield* this.paginate(this.basePath, params, options);
  }

  async get(segmentApiNameOrId: string, options?: RequestOptions): Promise<CdpSegmentContainerOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(segmentApiNameOrId)}`,
      options,
    );
  }

  async count(segmentApiName: string, options?: RequestOptions): Promise<CdpSegmentActionOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(segmentApiName)}/actions/count`,
      options,
    );
  }

  async listMembers(
    segmentApiName: string,
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<CdpSegmentMemberOutputRepresentation> {
    return this.httpClient.get(
      `${this.basePath}/${encodeURIComponent(segmentApiName)}/members`,
      {
        ...options,
        query: this.paginationQuery(params),
      },
    );
  }

  async publish(segmentApiName: string, options?: RequestOptions): Promise<CdpSegmentActionOutputRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(segmentApiName)}/actions/publish`,
      undefined,
      options,
    );
  }

  async deactivate(segmentApiName: string, options?: RequestOptions): Promise<CdpSegmentActionOutputRepresentation> {
    return this.httpClient.post(
      `${this.basePath}/${encodeURIComponent(segmentApiName)}/actions/deactivate`,
      undefined,
      options,
    );
  }

  async create(body: CdpSegmentInputRepresentation, options?: RequestOptions): Promise<CdpSegmentOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  async delete(segmentApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(segmentApiName)}`, options);
  }

  async patch(segmentApiName: string, body: CdpSegmentInputRepresentation, options?: RequestOptions): Promise<CdpSegmentOutputRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(segmentApiName)}`, body, options);
  }

  async countWithInput(segmentApiName: string, body: CdpSegmentActionInputRepresentation, options?: RequestOptions): Promise<CdpSegmentActionOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(segmentApiName)}/actions/count`, body, options);
  }
}
