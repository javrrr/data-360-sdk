/**
 * Auto-generated base service for Agent Configuration.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/agent-configuration.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  AgentCollectionRepresentation,
  AgentInputRepresentation,
  AgentRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface AgentConfigurationListSParams {
  /** Field names by which to filter results. Specify a comma-separated list of values of the form `[field=value]`. */
  filters?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class AgentConfigurationServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/agentic/agent";

  /** POST /ssot/agentic/agent — Create agent */
  async create(body: AgentInputRepresentation, options?: RequestOptions): Promise<AgentRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/agentic/agent/{agentIdOrApiName} — Delete agent */
  async delete(agentIdOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(agentIdOrApiName)}`, options);
  }

  /** GET /ssot/agentic/agent/{agentIdOrApiName} — Get agent */
  async get(agentIdOrApiName: string, options?: RequestOptions): Promise<AgentRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(agentIdOrApiName)}`, options);
  }

  /** GET /ssot/agentic/agents — Get agents */
  async listS(params?: PaginationParams & AgentConfigurationListSParams, options?: RequestOptions): Promise<AgentCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}s`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** Async generator yielding all items from listS */
  async *listAllS(params?: PaginationParams & AgentConfigurationListSParams, options?: RequestOptions): AsyncGenerator<AgentRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<AgentRepresentation>(`${this.basePath}s`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
