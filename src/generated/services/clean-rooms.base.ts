/**
 * Auto-generated base service for Clean Rooms.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/clean-rooms.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  CleanRoomTestConnectionRepresentation,
  CleanroomTestConnectionInputRepresentation,
  DataCleanRoomAcceptInvitationInputRepresentation,
  DataCleanRoomCollaborationCollectionForUseCaseTypeRepresentation,
  DataCleanRoomCollaborationCollectionRepresentation,
  DataCleanRoomCollaborationForUseCaseTypeRepresentation,
  DataCleanRoomCollaborationInputRepresentation,
  DataCleanRoomCollaborationRepresentation,
  DataCleanRoomCollaborationResultDataObjectCollectionRepresentation,
  DataCleanRoomCollaborationResultDataObjectRepresentation,
  DataCleanRoomDataSpecificationInputRepresentation,
  DataCleanRoomDataSpecificationRepresentation,
  DataCleanRoomGenericResponseRepresentation,
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

export interface CleanRoomsListCollaborationsParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface CleanRoomsListCollaborationsJobsParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface CleanRoomsListProvidersParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface CleanRoomsListProvidersTemplatesParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface CleanRoomsListSpecificationsParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface CleanRoomsListTemplatesParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface CleanRoomsListTemplatesCollaborationsParams {
  /** Field names by which to filter results. Specify a comma-separated list of equality expressions, such as `developerName eq extensiblepackage0123456789012`. By default, no filter is applied. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class CleanRoomsServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-clean-room";

  /** GET /ssot/data-clean-room/collaborations — Get collaborations */
  async listCollaborations(params?: PaginationParams & CleanRoomsListCollaborationsParams, options?: RequestOptions): Promise<DataCleanRoomCollaborationCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/collaborations`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-clean-room/collaborations — Create a collaboration */
  async createCollaborations(body: DataCleanRoomCollaborationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomCollaborationRepresentation> {
    return this.httpClient.post(`${this.basePath}/collaborations`, body, options);
  }

  /** POST /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/actions/accept-invitation — Accept a collaboration invitation */
  async acceptInvitation(collaborationIdOrApiName: string, body: DataCleanRoomAcceptInvitationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomMemberRepresentation> {
    return this.httpClient.post(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/accept-invitation`, body, options);
  }

  /** POST /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/actions/disable — Disable a collaboration */
  async disable(collaborationIdOrApiName: string, options?: RequestOptions): Promise<DataCleanRoomCollaborationRepresentation> {
    return this.httpClient.post(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/disable`, undefined, options);
  }

  /** PUT /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/actions/refresh-metadata — Refresh collaboration metadata */
  async refreshMetadata(collaborationIdOrApiName: string, options?: RequestOptions): Promise<DataCleanRoomGenericResponseRepresentation> {
    return this.httpClient.put(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/refresh-metadata`, options);
  }

  /** POST /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/actions/reject-invitation — Reject a collaboration invitation */
  async rejectInvitation(collaborationIdOrApiName: string, body: DataCleanRoomRejectInvitationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomMemberRepresentation> {
    return this.httpClient.post(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/reject-invitation`, body, options);
  }

  /** POST /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/actions/run — Run a query */
  async run(collaborationIdOrApiName: string, body: DataCleanRoomQueryJobInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomQueryJobRepresentation> {
    return this.httpClient.post(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/run`, body, options);
  }

  /** GET /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/jobs — Get query jobs */
  async listCollaborationsJobs(collaborationIdOrApiName: string, params?: PaginationParams & CleanRoomsListCollaborationsJobsParams, options?: RequestOptions): Promise<DataCleanRoomQueryJobCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/jobs`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /ssot/data-clean-room/collaborations/{collaborationIdOrApiName}/result-data-objects — Get collaboration result objects */
  async listCollaborationsResultDataObjects(collaborationIdOrApiName: string, options?: RequestOptions): Promise<DataCleanRoomCollaborationResultDataObjectCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/result-data-objects`, options);
  }

  /** GET /ssot/data-clean-room/providers — Get providers */
  async listProviders(params?: PaginationParams & CleanRoomsListProvidersParams, options?: RequestOptions): Promise<DataCleanRoomProviderCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/providers`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-clean-room/providers — Create a provider */
  async createProviders(body: DataCleanRoomProviderInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomProviderRepresentation> {
    return this.httpClient.post(`${this.basePath}/providers`, body, options);
  }

  /** GET /ssot/data-clean-room/providers/{providerIdOrName} — Get a provider */
  async getProviders(providerIdOrName: string, options?: RequestOptions): Promise<DataCleanRoomProviderRepresentation> {
    return this.httpClient.get(`${this.basePath}/providers/${encodeURIComponent(providerIdOrName)}`, options);
  }

  /** GET /ssot/data-clean-room/providers/{providerIdOrName}/templates — Get provider templates */
  async listProvidersTemplates(providerIdOrName: string, params?: PaginationParams & CleanRoomsListProvidersTemplatesParams, options?: RequestOptions): Promise<DataCleanRoomTemplateCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/providers/${encodeURIComponent(providerIdOrName)}/templates`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /ssot/data-clean-room/specifications — Get specifications */
  async listSpecifications(params?: PaginationParams & CleanRoomsListSpecificationsParams, options?: RequestOptions): Promise<DataCleanRoomSpecificationCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/specifications`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-clean-room/specifications — Create a specification */
  async createSpecifications(body: DataCleanRoomDataSpecificationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomDataSpecificationRepresentation> {
    return this.httpClient.post(`${this.basePath}/specifications`, body, options);
  }

  /** DELETE /ssot/data-clean-room/specifications/{specificationIdOrApiName} — Delete a specification */
  async deleteSpecifications(specificationIdOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/specifications/${encodeURIComponent(specificationIdOrApiName)}`, options);
  }

  /** GET /ssot/data-clean-room/templates — Get templates */
  async listTemplates(params?: PaginationParams & CleanRoomsListTemplatesParams, options?: RequestOptions): Promise<DataCleanRoomTemplateCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/templates`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /ssot/data-clean-room/templates/{useCaseTemplateType}/collaborations — Get template collaborations */
  async listTemplatesCollaborations(useCaseTemplateType: string, params?: PaginationParams & CleanRoomsListTemplatesCollaborationsParams, options?: RequestOptions): Promise<DataCleanRoomCollaborationCollectionForUseCaseTypeRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/templates/${encodeURIComponent(useCaseTemplateType)}/collaborations`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-clean-room/test-connection — Test connection */
  async createTestConnection(body: CleanroomTestConnectionInputRepresentation, options?: RequestOptions): Promise<CleanRoomTestConnectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/test-connection`, body, options);
  }

  /** Async generator yielding all items from listCollaborations */
  async *listAllCollaborations(params?: PaginationParams & CleanRoomsListCollaborationsParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomCollaborationRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomCollaborationRepresentation>(`${this.basePath}/collaborations`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listCollaborationsJobs */
  async *listAllCollaborationsJobs(collaborationIdOrApiName: string, params?: PaginationParams & CleanRoomsListCollaborationsJobsParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomQueryJobRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomQueryJobRepresentation>(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/jobs`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listCollaborationsResultDataObjects */
  async *listAllCollaborationsResultDataObjects(collaborationIdOrApiName: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomCollaborationResultDataObjectRepresentation, void, undefined> {
    yield* this.paginate<DataCleanRoomCollaborationResultDataObjectRepresentation>(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/result-data-objects`, { ...params, pageSizeParam: "batchSize" }, options);
  }

  /** Async generator yielding all items from listProviders */
  async *listAllProviders(params?: PaginationParams & CleanRoomsListProvidersParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomProviderRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomProviderRepresentation>(`${this.basePath}/providers`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listProvidersTemplates */
  async *listAllProvidersTemplates(providerIdOrName: string, params?: PaginationParams & CleanRoomsListProvidersTemplatesParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomTemplateRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomTemplateRepresentation>(`${this.basePath}/providers/${encodeURIComponent(providerIdOrName)}/templates`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listSpecifications */
  async *listAllSpecifications(params?: PaginationParams & CleanRoomsListSpecificationsParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomDataSpecificationRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomDataSpecificationRepresentation>(`${this.basePath}/specifications`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listTemplates */
  async *listAllTemplates(params?: PaginationParams & CleanRoomsListTemplatesParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomTemplateRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomTemplateRepresentation>(`${this.basePath}/templates`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listTemplatesCollaborations */
  async *listAllTemplatesCollaborations(useCaseTemplateType: string, params?: PaginationParams & CleanRoomsListTemplatesCollaborationsParams, options?: RequestOptions): AsyncGenerator<DataCleanRoomCollaborationForUseCaseTypeRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataCleanRoomCollaborationForUseCaseTypeRepresentation>(`${this.basePath}/templates/${encodeURIComponent(useCaseTemplateType)}/collaborations`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
