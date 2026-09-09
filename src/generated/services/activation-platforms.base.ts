/**
 * Auto-generated base service for Activation Platforms.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/activation-platforms.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  ActionResultRepresentation,
  ActionSourceCollectionRepresentation,
  ActivationPlatformCreateInputRepresentation,
  ActivationPlatformInputRepresentation,
  ActivationPlatformRepresentation,
  ActivationPlatformSummaryRepresentation,
  ActivationPlatformsCollectionRepresentation,
  EventCollectionRepresentation,
  PartnerObjectTypeCollectionRepresentation,
  SetPrivacyTypeInputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface ActivationPlatformsListParams {
  /** Set of platforms to return. If unspecified, the default value is `All`. */
  activationPlatformView?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationPlatformsGetMetadataActionSourcesParams {
  /** Name of the event whose action sources to return. */
  eventName: string;
  /** Maximum number of action sources to return. Values are `1` through `200`. If unspecified, the default value is `20`. */
  pageSize?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationPlatformsGetMetadataEventsParams {
  /** Maximum number of events to return. Values are `1` through `200`. If unspecified, the default value is `20`. */
  pageSize?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationPlatformsGetMetadataPartnerObjectTypesParams {
  /** Maximum number of partner-object types to return. Values are `1` through `200`. If unspecified, the default value is `20`. */
  pageSize?: number;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class ActivationPlatformsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/activation-platforms";

  /** GET /ssot/activation-platforms — Get activation platforms */
  async list(params?: PaginationParams & ActivationPlatformsListParams, options?: RequestOptions): Promise<ActivationPlatformsCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** POST /ssot/activation-platforms — Create activation platform */
  async create(body: ActivationPlatformCreateInputRepresentation, options?: RequestOptions): Promise<ActivationPlatformRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/activation-platforms/{idOrName} — Delete activation platform */
  async delete(idOrName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(idOrName)}`, options);
  }

  /** GET /ssot/activation-platforms/{idOrName} — Get activation platform */
  async get(idOrName: string, options?: RequestOptions): Promise<ActivationPlatformRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(idOrName)}`, options);
  }

  /** PATCH /ssot/activation-platforms/{idOrName} — Update activation platform */
  async patch(idOrName: string, body: ActivationPlatformInputRepresentation, options?: RequestOptions): Promise<ActivationPlatformRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(idOrName)}`, body, options);
  }

  /** POST /ssot/activation-platforms/{idOrName}/actions/disable — Disable activation platform */
  async disable(idOrName: string, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(idOrName)}/actions/disable`, undefined, options);
  }

  /** POST /ssot/activation-platforms/{idOrName}/actions/enable — Enable activation platform */
  async enable(idOrName: string, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(idOrName)}/actions/enable`, undefined, options);
  }

  /** POST /ssot/activation-platforms/{idOrName}/actions/publish — Publish activation platform */
  async publish(idOrName: string, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(idOrName)}/actions/publish`, undefined, options);
  }

  /** POST /ssot/activation-platforms/{idOrName}/actions/retry-sync — Retry activation platform sync */
  async retrySync(idOrName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(idOrName)}/actions/retry-sync`, undefined, options);
  }

  /** POST /ssot/activation-platforms/{idOrName}/actions/set-privacy-type — Set activation platform privacy type */
  async setPrivacyType(idOrName: string, body: SetPrivacyTypeInputRepresentation, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(idOrName)}/actions/set-privacy-type`, body, options);
  }

  /** GET /ssot/activation-platforms/{idOrName}/metadata/action-sources — Get action sources for an event */
  async getMetadataActionSources(idOrName: string, params: ActivationPlatformsGetMetadataActionSourcesParams, options?: RequestOptions): Promise<ActionSourceCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(idOrName)}/metadata/action-sources`, { ...options, query: params });
  }

  /** GET /ssot/activation-platforms/{idOrName}/metadata/events — Get events for an activation platform */
  async getMetadataEvents(idOrName: string, params?: ActivationPlatformsGetMetadataEventsParams, options?: RequestOptions): Promise<EventCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(idOrName)}/metadata/events`, { ...options, query: params });
  }

  /** GET /ssot/activation-platforms/{idOrName}/metadata/partner-object-types — Get partner-object types for an activation platform */
  async getMetadataPartnerObjectTypes(idOrName: string, params?: ActivationPlatformsGetMetadataPartnerObjectTypesParams, options?: RequestOptions): Promise<PartnerObjectTypeCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(idOrName)}/metadata/partner-object-types`, { ...options, query: params });
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & ActivationPlatformsListParams, options?: RequestOptions): AsyncGenerator<ActivationPlatformSummaryRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ActivationPlatformSummaryRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
