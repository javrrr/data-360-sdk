/**
 * Auto-generated base service for Activations.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/activations.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  ActionResultRepresentation,
  ActivatableDataObjectCategoriesRepresentation,
  ActivationCollectionRepresentation,
  ActivationDataRepresentation,
  ActivationDefinitionInputRepresentation,
  ActivationHistoryCollectionRepresentation,
  ActivationHistoryRecordRepresentation,
  ActivationPublishActionInputRepresentation,
  ActivationPublishActionRepresentation,
  ActivationRepresentation,
  AudienceDMOCollectionRepresentation,
  ChannelPreferencesRepresentation,
  ChannelsCollectionRepresentation,
  ConsentDataModelObjectsRepresentation,
  DataSourcesCollectionRepresentation,
  MatchBoostProvidersRepresentation,
  QueryPathConfigRepresentation,
  RelatedAttributeActivationQuotaRepresentation,
  RelatedAttributeConfigurationLimitsRepresentation,
  StreamingEligibilityRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface ActivationsListParams {
  /** Filter the result set to a more narrow scope or specific type. These filters are supported: */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsListDataParams {
  /** Filter the result set to a more narrow scope or specific type. This filter is supported: */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsListHistoryParams {
  /** Snapshot anchor for consistent pagination. Omit this value on the first request. The response's `nextPageUrl` includes the `pageToken` for subsequent pages, which keeps the result set stable as new activations are published. Follow `nextPageUrl` rather than constructing this value. */
  pageToken?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsDisableParams {
  /** Name of the data space to use as context for the request. */
  dataSpace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsEnableParams {
  /** Name of the data space to use as context for the request. */
  dataSpace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsGetMetadataActivatableDataObjectCategoriesParams {
  /** Name of the data space to scope the lookup. If unspecified, the request's data space context is used. */
  dataSpace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsGetMetadataChannelPreferencesParams {
  /** Contact point channel, such as `Email`, `Phone`, `Push`, `Whatsapp`, or `DigitalId`. */
  channel: string;
  /** API name of the contact point data model object (DMO). */
  dataModelObjectApiName: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsGetMetadataChannelsParams {
  /** API name of the data model object (DMO) to activate on, such as `ssot__Individual__dlm`. The namespace prefix of the DMO resolves the contact point DMOs (Email, Phone, Push, and so on) for the data space. */
  activateOn: string;
  /** Name of the data space to scope channel mapping checks. */
  dataSpace: string;
  /** Filter expression used to narrow results, such as `field eq value AND name contains foo`. Supported operators are `eq`, `!=`, `contains`, `in`, `>`, `<`, `>=`, and `<=`. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsGetMetadataConsentDataModelObjectsParams {
  /** API name of the data model object (DMO) to activate on, such as `ssot__Individual__dlm`. The namespace prefix of the DMO resolves the standard consent DMOs (ContactPointConsent, CommunicationSubscriptionConsent) for the data space. */
  activateOn: string;
  /** Name of the data space to scope the consent data model object lookup. */
  dataSpace: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsGetMetadataDataSourcesParams {
  /** Contact point channel. If unspecified, data sources are returned for all channels compatible with the data model object (DMO). */
  channel?: string;
  /** API name of the data model object (DMO) used as the activation target. The data space context is derived from this value. */
  dataModelObjectApiName: string;
  /** Filter expression used to narrow results, such as `field eq value AND name contains foo`. Supported operators are `eq`, `!=`, `contains`, `in`, `>`, `<`, `>=`, and `<=`. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsGetMetadataLimitsRelatedAttributeActivationQuotaParams {
  /** Record ID of an activation to exclude from the current count. Used during edit flows so that the activation being edited doesn't count against itself. */
  activationId?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsGetMetadataMatchBoostIdentityProvidersParams {
  /** API name of the data model object (DMO), such as `ssot__Individual__dlm`. */
  activateOn: string;
  /** Record ID (15- or 18-character) of the activation target. */
  activationTargetId: string;
  /** Name of the data space to scope the provider lookup. */
  dataSpace: string;
  /** Record ID of the previously saved identity provider. Used in edit mode only. */
  selectedProviderId?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationsGetMetadataStreamingEligibilityParams {
  /** API name of the data model object (DMO) to check streaming eligibility for. */
  dataModelObjectApiName: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class ActivationsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/activations";

  /** GET /ssot/activations — Get activations */
  async list(params?: PaginationParams & ActivationsListParams, options?: RequestOptions): Promise<ActivationCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** POST /ssot/activations — Create activation */
  async create(body: ActivationDefinitionInputRepresentation, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/activations/{activationId} — Delete activation */
  async delete(activationId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(activationId)}`, options);
  }

  /** GET /ssot/activations/{activationId} — Get activation */
  async get(activationId: string, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationId)}`, options);
  }

  /** PUT /ssot/activations/{activationId} — Update activation */
  async put(activationId: string, body: ActivationDefinitionInputRepresentation, options?: RequestOptions): Promise<ActivationRepresentation> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(activationId)}`, body, options);
  }

  /** POST /ssot/activations/{activationId}/actions/publish — Publish a Batch DMO activation */
  async publish(activationId: string, body: ActivationPublishActionInputRepresentation, options?: RequestOptions): Promise<ActivationPublishActionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(activationId)}/actions/publish`, body, options);
  }

  /** GET /ssot/activations/{activationId}/data — Get Audience DMO activation records */
  async listData(activationId: string, params?: PaginationParams & ActivationsListDataParams, options?: RequestOptions): Promise<AudienceDMOCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationId)}/data`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** GET /ssot/activations/{activationId}/history — Get activation history */
  async listHistory(activationId: string, params?: PaginationParams & ActivationsListHistoryParams, options?: RequestOptions): Promise<ActivationHistoryCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationId)}/history`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/activations/actions/{activationId}/disable — Disable activation */
  async disable(activationId: string, params?: ActivationsDisableParams, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(activationId)}/disable`, undefined, { ...options, query: params });
  }

  /** POST /ssot/activations/actions/{activationId}/enable — Enable activation */
  async enable(activationId: string, params?: ActivationsEnableParams, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(activationId)}/enable`, undefined, { ...options, query: params });
  }

  /** POST /ssot/activations/actions/{activationId}/full-refresh — Trigger activation full refresh */
  async fullRefresh(activationId: string, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(activationId)}/full-refresh`, undefined, options);
  }

  /** POST /ssot/activations/actions/{activationId}/retry-sync — Retry activation sync */
  async retrySync(activationId: string, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(activationId)}/retry-sync`, undefined, options);
  }

  /** GET /ssot/activations/metadata/activatable-data-object-categories — Get data object categories available for activation */
  async getMetadataActivatableDataObjectCategories(params?: ActivationsGetMetadataActivatableDataObjectCategoriesParams, options?: RequestOptions): Promise<ActivatableDataObjectCategoriesRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/activatable-data-object-categories`, { ...options, query: params });
  }

  /** GET /ssot/activations/metadata/channel-preferences — Get channel preferences */
  async getMetadataChannelPreferences(params: ActivationsGetMetadataChannelPreferencesParams, options?: RequestOptions): Promise<ChannelPreferencesRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/channel-preferences`, { ...options, query: params });
  }

  /** GET /ssot/activations/metadata/channels — Get channels */
  async getMetadataChannels(params: ActivationsGetMetadataChannelsParams, options?: RequestOptions): Promise<ChannelsCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/channels`, { ...options, query: params });
  }

  /** GET /ssot/activations/metadata/consent-data-model-objects — Get consent data model objects */
  async getMetadataConsentDataModelObjects(params: ActivationsGetMetadataConsentDataModelObjectsParams, options?: RequestOptions): Promise<ConsentDataModelObjectsRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/consent-data-model-objects`, { ...options, query: params });
  }

  /** GET /ssot/activations/metadata/data-sources — Get data sources */
  async getMetadataDataSources(params: ActivationsGetMetadataDataSourcesParams, options?: RequestOptions): Promise<DataSourcesCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/data-sources`, { ...options, query: params });
  }

  /** GET /ssot/activations/metadata/limits/related-attribute-activation-quota — Get related attribute activation quota */
  async getMetadataLimitsRelatedAttributeActivationQuota(params?: ActivationsGetMetadataLimitsRelatedAttributeActivationQuotaParams, options?: RequestOptions): Promise<RelatedAttributeActivationQuotaRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/limits/related-attribute-activation-quota`, { ...options, query: params });
  }

  /** GET /ssot/activations/metadata/limits/related-attribute-configuration-limits — Get related attribute configuration limits */
  async getMetadataLimitsRelatedAttributeConfigurationLimits(options?: RequestOptions): Promise<RelatedAttributeConfigurationLimitsRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/limits/related-attribute-configuration-limits`, options);
  }

  /** GET /ssot/activations/metadata/match-boost-identity-providers — Get identity providers for match boost */
  async getMetadataMatchBoostIdentityProviders(params: ActivationsGetMetadataMatchBoostIdentityProvidersParams, options?: RequestOptions): Promise<MatchBoostProvidersRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/match-boost-identity-providers`, { ...options, query: params });
  }

  /** GET /ssot/activations/metadata/streaming-eligibility — Get streaming eligibility */
  async getMetadataStreamingEligibility(params: ActivationsGetMetadataStreamingEligibilityParams, options?: RequestOptions): Promise<StreamingEligibilityRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/streaming-eligibility`, { ...options, query: params });
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & ActivationsListParams, options?: RequestOptions): AsyncGenerator<QueryPathConfigRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<QueryPathConfigRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }

  /** Async generator yielding all items from listData */
  async *listAllData(activationId: string, params?: PaginationParams & ActivationsListDataParams, options?: RequestOptions): AsyncGenerator<ActivationDataRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ActivationDataRepresentation>(`${this.basePath}/${encodeURIComponent(activationId)}/data`, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }

  /** Async generator yielding all items from listHistory */
  async *listAllHistory(activationId: string, params?: PaginationParams & ActivationsListHistoryParams, options?: RequestOptions): AsyncGenerator<ActivationHistoryRecordRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ActivationHistoryRecordRepresentation>(`${this.basePath}/${encodeURIComponent(activationId)}/history`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
