import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
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
} from "../schemas.js";

export class DataCleanRoomService extends BaseResource {
  protected readonly basePath = "/ssot/data-clean-room";

  async listCollaborations(
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<DataCleanRoomCollaborationCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/collaborations`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async listProviders(params?: PaginationParams, options?: RequestOptions): Promise<DataCleanRoomProviderCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/providers`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async listSpecifications(
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<DataCleanRoomSpecificationCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/specifications`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async listTemplates(params?: PaginationParams, options?: RequestOptions): Promise<DataCleanRoomTemplateCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/templates`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async createCollaborations(body: DataCleanRoomCollaborationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomCollaborationRepresentation> {
    return this.httpClient.post(`${this.basePath}/collaborations`, body, options);
  }

  async run(collaborationIdOrApiName: string, body: DataCleanRoomQueryJobInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomQueryJobRepresentation> {
    return this.httpClient.post(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/run`, body, options);
  }

  async listJobs(collaborationIdOrApiName: string, options?: RequestOptions): Promise<DataCleanRoomQueryJobCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/jobs`, options);
  }

  async createProviders(body: DataCleanRoomProviderInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomProviderRepresentation> {
    return this.httpClient.post(`${this.basePath}/providers`, body, options);
  }

  async createSpecifications(body: DataCleanRoomDataSpecificationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomDataSpecificationRepresentation> {
    return this.httpClient.post(`${this.basePath}/specifications`, body, options);
  }

  async acceptInvitation(collaborationIdOrApiName: string, body: DataCleanRoomAcceptInvitationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomMemberRepresentation> {
    return this.httpClient.put(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/accept-invitation`, body, options);
  }

  async rejectInvitation(collaborationIdOrApiName: string, body: DataCleanRoomRejectInvitationInputRepresentation, options?: RequestOptions): Promise<DataCleanRoomMemberRepresentation> {
    return this.httpClient.put(`${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/reject-invitation`, body, options);
  }

  async getProvider(providerIdOrName: string, options?: RequestOptions): Promise<DataCleanRoomProviderRepresentation> {
    return this.httpClient.get(`${this.basePath}/providers/${encodeURIComponent(providerIdOrName)}`, options);
  }

  async listProviderTemplates(providerIdOrName: string, options?: RequestOptions): Promise<DataCleanRoomTemplateCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/providers/${encodeURIComponent(providerIdOrName)}/templates`, options);
  }
}
