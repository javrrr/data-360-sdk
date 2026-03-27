/**
 * Auto-generated base service for Data Clean Room.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-clean-room.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  DataCleanRoomAcceptInvitationInputRepresentation,
  DataCleanRoomCollaborationCollectionRepresentation,
  DataCleanRoomCollaborationInputRepresentation,
  DataCleanRoomCollaborationRepresentation,
  DataCleanRoomDataSpecificationInputRepresentation,
  DataCleanRoomDataSpecificationRepresentation,
  DataCleanRoomMemberRepresentation,
  DataCleanRoomProviderCollectionRepresentation,
  DataCleanRoomProviderInputRepresentation,
  DataCleanRoomProviderRepresentation,
  DataCleanRoomQueryJobCollectionRepresentation,
  DataCleanRoomQueryJobInputRepresentation,
  DataCleanRoomQueryJobRepresentation,
  DataCleanRoomRejectInvitationInputRepresentation,
  DataCleanRoomSpecificationCollectionRepresentation,
  DataCleanRoomTemplateCollectionRepresentation,
  DataCleanRoomTemplateRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DataCleanRoomListCollaborationsParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataCleanRoomListCollaborationsJobsParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataCleanRoomListProvidersParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataCleanRoomListProvidersTemplatesParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataCleanRoomListSpecificationsParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataCleanRoomListTemplatesParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DataCleanRoomServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-clean-room";

  /** GET /ssot/data-clean-room/collaborations — Get data clean room collaborations */
  async listCollaborations(params?: PaginationParams & DataCleanRoomListCollaborationsParams, options?: RequestOptions): Promise<DataCleanRoomCollaborationCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/collaborations`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-clean-room/collaborations — Create data clean room collaboration */
  async createCollaborations(body: DataCleanRoomCollaborationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomCollaborationRepresentation> {
    return this.httpClient.post(`${this.basePath}/collaborations`, body, options);
  }

  /** PUT /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/actions/accept-invitation — Accept data clean room collaboration invitation */
  async acceptInvitation(collaborationIdOrApiName: string, body: DataCleanRoomAcceptInvitationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomMemberRepresentation> {
    return this.httpClient.put(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/accept-invitation`, body, options);
  }

  /** PUT /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/actions/reject-invitation — Reject data clean room collaboration invitation */
  async rejectInvitation(collaborationIdOrApiName: string, body: DataCleanRoomRejectInvitationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomMemberRepresentation> {
    return this.httpClient.put(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/reject-invitation`, body, options);
  }

  /** POST /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/actions/run — Run data clean room query */
  async run(collaborationIdOrApiName: string, body: DataCleanRoomQueryJobInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomQueryJobRepresentation> {
    return this.httpClient.post(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/run`, body, options);
  }

  /** GET /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/jobs — Get data clean room query jobs */
  async listCollaborationsJobs(collaborationIdOrApiName: string, params?: PaginationParams & DataCleanRoomListCollaborationsJobsParams, options?: RequestOptions): Promise<DataCleanRoomQueryJobCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/jobs`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /ssot/data-clean-room/providers — Get data clean room providers */
  async listProviders(params?: PaginationParams & DataCleanRoomListProvidersParams, options?: RequestOptions): Promise<DataCleanRoomProviderCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/providers`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-clean-room/providers — Create data clean room provider */
  async createProviders(body: DataCleanRoomProviderInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomProviderRepresentation> {
    return this.httpClient.post(`${this.basePath}/providers`, body, options);
  }

  /** GET /ssot/data-clean-room/providers/{providerIdOrName} — Get data clean room provider */
  async getProviders(providerIdOrName: string, options?: RequestOptions): Promise<DataCleanRoomProviderRepresentation> {
    return this.httpClient.get(`${this.basePath}/providers/${encodeURIComponent(providerIdOrName)}`, options);
  }

  /** GET /ssot/data-clean-room/providers/{providerIdOrName}/templates — Get data clean room templates for provider */
  async listProvidersTemplates(providerIdOrName: string, params?: PaginationParams & DataCleanRoomListProvidersTemplatesParams, options?: RequestOptions): Promise<DataCleanRoomTemplateCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/providers/${encodeURIComponent(providerIdOrName)}/templates`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /ssot/data-clean-room/specifications — Get data clean room specifications */
  async listSpecifications(params?: PaginationParams & DataCleanRoomListSpecificationsParams, options?: RequestOptions): Promise<DataCleanRoomSpecificationCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/specifications`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-clean-room/specifications — Create data clean room specification */
  async createSpecifications(body: DataCleanRoomDataSpecificationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomDataSpecificationRepresentation> {
    return this.httpClient.post(`${this.basePath}/specifications`, body, options);
  }

  /** GET /ssot/data-clean-room/templates — Get data clean room templates */
  async listTemplates(params?: PaginationParams & DataCleanRoomListTemplatesParams, options?: RequestOptions): Promise<DataCleanRoomTemplateCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/templates`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** Async generator yielding all items from listCollaborations */
  async *listAllCollaborations(params?: PaginationParams & DataCleanRoomListCollaborationsParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomCollaborationRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomCollaborationRepresentation>(`${this.basePath}/collaborations`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listCollaborationsJobs */
  async *listAllCollaborationsJobs(collaborationIdOrApiName: string, params?: PaginationParams & DataCleanRoomListCollaborationsJobsParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomQueryJobRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomQueryJobRepresentation>(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/jobs`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listProviders */
  async *listAllProviders(params?: PaginationParams & DataCleanRoomListProvidersParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomProviderRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomProviderRepresentation>(`${this.basePath}/providers`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listProvidersTemplates */
  async *listAllProvidersTemplates(providerIdOrName: string, params?: PaginationParams & DataCleanRoomListProvidersTemplatesParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomTemplateRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomTemplateRepresentation>(`${this.basePath}/providers/${encodeURIComponent(providerIdOrName)}/templates`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listSpecifications */
  async *listAllSpecifications(params?: PaginationParams & DataCleanRoomListSpecificationsParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomDataSpecificationRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomDataSpecificationRepresentation>(`${this.basePath}/specifications`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listTemplates */
  async *listAllTemplates(params?: PaginationParams & DataCleanRoomListTemplatesParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomTemplateRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomTemplateRepresentation>(`${this.basePath}/templates`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
