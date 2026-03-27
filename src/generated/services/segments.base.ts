/**
 * Auto-generated base service for Segments.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/segments.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CdpSegmentActionInputRepresentation,
  CdpSegmentActionOutputRepresentation,
  CdpSegmentContainerOutputRepresentation,
  CdpSegmentInputRepresentation,
  CdpSegmentMemberOutputRepresentation,
  CdpSegmentOutputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface SegmentsListParams {
  /** Name of the data space in which to perform the action. User must have permission to this data space. Valid when bulk-listing segments. If unspecified, the `default` data space is used. */
  dataspace?: string;
  /** Filter the result set to a more narrow scope based on segment attributes. Specify a maximum of 10 filters. Separate each filter by an AND logical operator. If unspecified, no filters are applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface SegmentsCreateParams {
  /** Name of the data space in which to perform the action. User must have permission to this data space. If unspecified, the `default` data space is used. */
  dataspace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface SegmentsGetMembersParams {
  /** Comma-separated list of field names that you want to include in the result. If unspecified, `Id__c` is returned. Supported fields are: */
  fields?: string;
  /** Filter the result set to a more narrow scope or specific type, for example, `Delta_Type__c IN ('New','Existing')`. When you filter for `Delta_Type__c`, we recommend that you also filter for `Timestamp__c`, for example, `Delta_Type__c IN ('New','Existing') AND Timestamp__c IN 2025-04-09T14:12:41.111Z`. Otherwise, the getSegmentMembers record is returned for the latest publish date; if the segment is not published, an empty result is returned. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class SegmentsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/segments";

  /** GET /ssot/segments — Get segments */
  async list(params?: PaginationParams & SegmentsListParams, options?: RequestOptions): Promise<CdpSegmentContainerOutputRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** POST /ssot/segments — Create segment */
  async create(body: CdpSegmentInputRepresentation, params?: SegmentsCreateParams, options?: RequestOptions): Promise<CdpSegmentOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, { ...options, query: params });
  }

  /** DELETE /ssot/segments/{segmentApiName} — Delete segment */
  async delete(segmentApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(segmentApiName)}`, options);
  }

  /** PATCH /ssot/segments/{segmentApiName} — Update segment */
  async patch(segmentApiName: string, body: CdpSegmentInputRepresentation, options?: RequestOptions): Promise<CdpSegmentOutputRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(segmentApiName)}`, body, options);
  }

  /** POST /ssot/segments/{segmentApiName}/actions/count — Count segment */
  async count(segmentApiName: string, body: CdpSegmentActionInputRepresentation, options?: RequestOptions): Promise<CdpSegmentActionOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(segmentApiName)}/actions/count`, body, options);
  }

  /** POST /ssot/segments/{segmentApiName}/actions/deactivate — Deactivate segment by name */
  async deactivate(segmentApiName: string, options?: RequestOptions): Promise<CdpSegmentActionOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(segmentApiName)}/actions/deactivate`, undefined, options);
  }

  /** GET /ssot/segments/{segmentApiName}/members — Get segment members */
  async getMembers(segmentApiName: string, params?: SegmentsGetMembersParams, options?: RequestOptions): Promise<CdpSegmentMemberOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(segmentApiName)}/members`, { ...options, query: params });
  }

  /** GET /ssot/segments/{segmentApiNameOrId} — Get segment */
  async get(segmentApiNameOrId: string, options?: RequestOptions): Promise<CdpSegmentContainerOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(segmentApiNameOrId)}`, options);
  }

  /** POST /ssot/segments/{segmentId}/actions/deactivate — Deactivate segment by ID */
  async deactivateByPost(segmentId: string, options?: RequestOptions): Promise<CdpSegmentActionOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(segmentId)}/actions/deactivate`, undefined, options);
  }

  /** POST /ssot/segments/{segmentId}/actions/publish — Publish segment */
  async publish(segmentId: string, options?: RequestOptions): Promise<CdpSegmentActionOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(segmentId)}/actions/publish`, undefined, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & SegmentsListParams, options?: RequestOptions): AsyncGenerator<CdpSegmentOutputRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<CdpSegmentOutputRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
