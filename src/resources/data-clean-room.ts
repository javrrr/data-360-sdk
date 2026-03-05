import { BaseResource } from "./base-resource.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";

export class DataCleanRoomService extends BaseResource {
  protected readonly basePath = "/ssot/data-clean-room";

  async listCollaborations(
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(`${this.basePath}/collaborations`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async acceptInvitation(
    collaborationIdOrApiName: string,
    options?: RequestOptions,
  ) {
    return this.httpClient.post(
      `${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/accept-invitation`,
      undefined,
      options,
    );
  }

  async rejectInvitation(
    collaborationIdOrApiName: string,
    options?: RequestOptions,
  ) {
    return this.httpClient.post(
      `${this.basePath}/collaborations/${encodeURIComponent(collaborationIdOrApiName)}/actions/reject-invitation`,
      undefined,
      options,
    );
  }

  async listProviders(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(`${this.basePath}/providers`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async listSpecifications(
    params?: PaginationParams,
    options?: RequestOptions,
  ) {
    return this.httpClient.get(`${this.basePath}/specifications`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }

  async listTemplates(params?: PaginationParams, options?: RequestOptions) {
    return this.httpClient.get(`${this.basePath}/templates`, {
      ...options,
      query: this.paginationQuery(params),
    });
  }
}
