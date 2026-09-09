/**
 * Auto-generated base service for Activation Targets.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/activation-targets.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  ActionResultRepresentation,
  ActivationExternalPlatformCollectionRepresentation,
  ActivationExternalPlatformRepresentation,
  ActivationPlatformFieldsRepresentation,
  ActivationTargetCollectionRepresentation,
  ActivationTargetInputRepresentation,
  ActivationTargetPlatformsCollectionRepresentation,
  ActivationTargetRepresentation,
  AdAccountsRepresentation,
  AssignAdAccountInputRepresentation,
  CommunicationCappingDataSpacesCollectionRepresentation,
  DataspaceAccountValidationRepresentation,
  McEnterprisesCollectionRepresentation,
  PartnerObjectRepresentation,
  PartnerObjectsCollectionRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface ActivationTargetsListParams {
  /** Filter the result set to a more narrow scope or specific type. These filters are supported: */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationTargetsGetAvailableAdAccountsParams {
  /** Name of the data space used to filter out already-assigned accounts. */
  dataSpace: string;
  /** Record ID (15- or 18-character) or API name of the activation platform. */
  platformIdOrName: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationTargetsListPartnerObjectsParams {
  /** Cursor for the next page of results. Omit this value on the first request. The response's `nextPageUrl` includes the `pageToken` to fetch the next page, so follow `nextPageUrl` rather than constructing this value. */
  pageToken?: string;
  /** Type of partner object to retrieve. */
  partnerObjectType: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationTargetsDisableParams {
  /** Name of the data space to use as context for the request. */
  dataSpace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationTargetsEnableParams {
  /** Name of the data space to use as context for the request. */
  dataSpace?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationTargetsGetMetadataActivationPlatformsParams {
  /** Name of the data space to scope the lookup. If unspecified, the request's data space context is used. */
  dataSpace?: string;
  /** Filter expression used to narrow results, such as `field eq value AND name contains foo`. Supported operators are `eq`, `!=`, `contains`, `in`, `>`, `<`, `>=`, and `<=`. */
  filters?: string;
  /** Filter results by activation platform name. Must be an exact match. */
  name?: string;
  /** Filter results by platform type, such as `Sfmc`, `Sftp`, `External`, or `Strategic`. */
  platformType?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationTargetsGetMetadataCommunicationCappingDataSpacesParams {
  /** Filter expression used to narrow results, such as `field eq value AND name contains foo`. Supported operators are `eq`, `!=`, `contains`, `in`, `>`, `<`, `>=`, and `<=`. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationTargetsGetMetadataDataspaceAccountValidationParams {
  /** Identifier of the ad account on the partner platform. */
  accountId: string;
  /** Name of the data space to check against. */
  dataSpace: string;
  /** Record ID (15- or 18-character) or API name of the activation platform. */
  platformIdOrName: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ActivationTargetsGetMetadataTargetPlatformFieldsParams {
  /** Record ID (15- or 18-character) or API name of the activation platform. */
  platformIdOrName: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class ActivationTargetsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/activation-targets";

  /** GET /ssot/activation-external-platforms — Get activation external platforms */
  async listExternalPlatforms(params?: PaginationParams, options?: RequestOptions): Promise<ActivationExternalPlatformCollectionRepresentation> {
    return this.httpClient.get(`/ssot/activation-external-platforms`, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** GET /ssot/activation-targets — Get activation targets */
  async list(params?: PaginationParams & ActivationTargetsListParams, options?: RequestOptions): Promise<ActivationTargetCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "batchSize" }), ...query },
    });
  }

  /** POST /ssot/activation-targets — Create activation target */
  async create(body: ActivationTargetInputRepresentation, options?: RequestOptions): Promise<ActivationTargetRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/activation-targets/{activationTargetId} — Delete activation target */
  async delete(activationTargetId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(activationTargetId)}`, options);
  }

  /** GET /ssot/activation-targets/{activationTargetId} — Get activation target */
  async get(activationTargetId: string, options?: RequestOptions): Promise<ActivationTargetRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationTargetId)}`, options);
  }

  /** PATCH /ssot/activation-targets/{activationTargetId} — Update activation target */
  async patch(activationTargetId: string, body: ActivationTargetInputRepresentation, options?: RequestOptions): Promise<ActivationTargetRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(activationTargetId)}`, body, options);
  }

  /** GET /ssot/activation-targets/{activationTargetId}/available-ad-accounts — Get available ad accounts */
  async getAvailableAdAccounts(activationTargetId: string, params: ActivationTargetsGetAvailableAdAccountsParams, options?: RequestOptions): Promise<AdAccountsRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationTargetId)}/available-ad-accounts`, { ...options, query: params });
  }

  /** GET /ssot/activation-targets/{activationTargetId}/partner-objects — Get partner objects */
  async listPartnerObjects(activationTargetId: string, params: ActivationTargetsListPartnerObjectsParams, options?: RequestOptions): Promise<PartnerObjectsCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(activationTargetId)}/partner-objects`, { ...options, query: params });
  }

  /** POST /ssot/activation-targets/actions/{activationTargetId}/assign-ad-account — Assign ad account */
  async assignAdAccount(activationTargetId: string, body: AssignAdAccountInputRepresentation, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(activationTargetId)}/assign-ad-account`, body, options);
  }

  /** POST /ssot/activation-targets/actions/{activationTargetId}/disable — Disable activation target */
  async disable(activationTargetId: string, params?: ActivationTargetsDisableParams, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(activationTargetId)}/disable`, undefined, { ...options, query: params });
  }

  /** POST /ssot/activation-targets/actions/{activationTargetId}/enable — Enable activation target */
  async enable(activationTargetId: string, params?: ActivationTargetsEnableParams, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(activationTargetId)}/enable`, undefined, { ...options, query: params });
  }

  /** POST /ssot/activation-targets/actions/{activationTargetId}/retry-sync — Retry activation target sync */
  async retrySync(activationTargetId: string, options?: RequestOptions): Promise<ActionResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/actions/${encodeURIComponent(activationTargetId)}/retry-sync`, undefined, options);
  }

  /** GET /ssot/activation-targets/metadata/activation-platforms — Get activation platform metadata */
  async getMetadataActivationPlatforms(params?: ActivationTargetsGetMetadataActivationPlatformsParams, options?: RequestOptions): Promise<ActivationTargetPlatformsCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/activation-platforms`, { ...options, query: params });
  }

  /** GET /ssot/activation-targets/metadata/communication-capping-data-spaces — Get communication capping data spaces */
  async getMetadataCommunicationCappingDataSpaces(params?: ActivationTargetsGetMetadataCommunicationCappingDataSpacesParams, options?: RequestOptions): Promise<CommunicationCappingDataSpacesCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/communication-capping-data-spaces`, { ...options, query: params });
  }

  /** GET /ssot/activation-targets/metadata/dataspace-account-validation — Validate data space account for target */
  async getMetadataDataspaceAccountValidation(params: ActivationTargetsGetMetadataDataspaceAccountValidationParams, options?: RequestOptions): Promise<DataspaceAccountValidationRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/dataspace-account-validation`, { ...options, query: params });
  }

  /** GET /ssot/activation-targets/metadata/mc-enterprises — Get Marketing Cloud enterprises */
  async getMetadataMcEnterprises(options?: RequestOptions): Promise<McEnterprisesCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/mc-enterprises`, options);
  }

  /** GET /ssot/activation-targets/metadata/target-platform-fields — Get activation target platform fields */
  async getMetadataTargetPlatformFields(params: ActivationTargetsGetMetadataTargetPlatformFieldsParams, options?: RequestOptions): Promise<ActivationPlatformFieldsRepresentation> {
    return this.httpClient.get(`${this.basePath}/metadata/target-platform-fields`, { ...options, query: params });
  }

  /** Async generator yielding all items from listExternalPlatforms */
  async *listAllExternalPlatforms(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<ActivationExternalPlatformRepresentation, void, undefined> {
    yield* this.paginate<ActivationExternalPlatformRepresentation>(`/ssot/activation-external-platforms`, { ...params, pageSizeParam: "limit" }, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & ActivationTargetsListParams, options?: RequestOptions): AsyncGenerator<ActivationTargetRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ActivationTargetRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }

  /** Async generator yielding all items from listPartnerObjects */
  async *listAllPartnerObjects(activationTargetId: string, params: PaginationParams & ActivationTargetsListPartnerObjectsParams, options?: RequestOptions): AsyncGenerator<PartnerObjectRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<PartnerObjectRepresentation>(`${this.basePath}/${encodeURIComponent(activationTargetId)}/partner-objects`, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
