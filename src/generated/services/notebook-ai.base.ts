/**
 * Auto-generated base service for Notebook AI.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/notebook-ai.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  AllKnowledgeSpaceConfigOutputRepresentation,
  AllKnowledgeSpaceLibraryOutputRepresentation,
  AllKnowledgeSpaceOutputRepresentation,
  AllKnowledgeSpaceSessionOutputRepresentation,
  KnowledgeModalInputRepresentation,
  KnowledgeModalOutputRepresentation,
  KnowledgeSpaceConfigInputRepresentation,
  KnowledgeSpaceConfigOutputRepresentation,
  KnowledgeSpaceDeepResReportInputRepresentation,
  KnowledgeSpaceDeepResReportOutputRepresentation,
  KnowledgeSpaceDeepResRunResearchOutputRepresentation,
  KnowledgeSpaceDeepResearchAddSourceInputRepresentation,
  KnowledgeSpaceDeepResearchAddSourceOutputRepresentation,
  KnowledgeSpaceDeepResearchCancelInputRepresentation,
  KnowledgeSpaceDeepResearchPlanPatchInputRepresentation,
  KnowledgeSpaceFileChunksInputRepresentation,
  KnowledgeSpaceFileChunksOutputRepresentation,
  KnowledgeSpaceFileStatusInputRepresentation,
  KnowledgeSpaceFilesStatusOutputRepresentation,
  KnowledgeSpaceIndexFilesInputRepresentation,
  KnowledgeSpaceIndexFilesOutputRepresentation,
  KnowledgeSpaceInputRepresentation,
  KnowledgeSpaceLibraryInputRepresentation,
  KnowledgeSpaceLibraryOutputRepresentation,
  KnowledgeSpaceOutputRepresentation,
  KnowledgeSpaceProvisionInputRepresentation,
  KnowledgeSpaceProvisionOutputRepresentation,
  KnowledgeSpaceRunResearchOutputRepresentation,
  KnowledgeSpaceSessionConversationOutputRepresentation,
  KnowledgeSpaceSessionInputRepresentation,
  KnowledgeSpaceSessionOutputRepresentation,
  KnowledgeSpaceUploadPresignedURLOutputRepresentation,
  KnowledgeSpaceUploadPresignedUrlInputRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class NotebookAiServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/knowledge-space";

  /** GET /ssot/knowledge-space — Get knowledge spaces */
  async list(options?: RequestOptions): Promise<AllKnowledgeSpaceOutputRepresentation> {
    return this.httpClient.get(this.basePath, options);
  }

  /** POST /ssot/knowledge-space — Create knowledge space */
  async create(body: KnowledgeSpaceInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceOutputRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** DELETE /ssot/knowledge-space/{knowledgeSpaceApiNameOrId} — Delete knowledge space */
  async delete(knowledgeSpaceApiNameOrId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(knowledgeSpaceApiNameOrId)}`, options);
  }

  /** GET /ssot/knowledge-space/{knowledgeSpaceApiNameOrId} — Get knowledge space */
  async get(knowledgeSpaceApiNameOrId: string, options?: RequestOptions): Promise<KnowledgeSpaceOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(knowledgeSpaceApiNameOrId)}`, options);
  }

  /** PATCH /ssot/knowledge-space/{knowledgeSpaceApiNameOrId} — Update knowledge space */
  async patch(knowledgeSpaceApiNameOrId: string, body: KnowledgeSpaceInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceOutputRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(knowledgeSpaceApiNameOrId)}`, body, options);
  }

  /** GET /ssot/knowledge-space/{knowledgeSpaceApiNameOrId}/details — Get knowledge space details */
  async getDetails(knowledgeSpaceApiNameOrId: string, options?: RequestOptions): Promise<KnowledgeSpaceOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(knowledgeSpaceApiNameOrId)}/details`, options);
  }

  /** GET /ssot/knowledge-space/{knowledgeSpaceApiNameOrId}/session/{knowledgeSpaceSessionId}/conversation — Get session conversation */
  async getConversation(knowledgeSpaceApiNameOrId: string, knowledgeSpaceSessionId: string, options?: RequestOptions): Promise<KnowledgeSpaceSessionConversationOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(knowledgeSpaceApiNameOrId)}/session/${encodeURIComponent(knowledgeSpaceSessionId)}/conversation`, options);
  }

  /** GET /ssot/knowledge-space/{knowledgeSpaceApiNameOrId}/sessions — Get knowledge space sessions */
  async getSessions(knowledgeSpaceApiNameOrId: string, options?: RequestOptions): Promise<AllKnowledgeSpaceSessionOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(knowledgeSpaceApiNameOrId)}/sessions`, options);
  }

  /** POST /ssot/knowledge-space/{knowledgeSpaceApiNameOrId}/sessions — Create knowledge space session */
  async createSessions(knowledgeSpaceApiNameOrId: string, body: KnowledgeSpaceSessionInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceSessionOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(knowledgeSpaceApiNameOrId)}/sessions`, body, options);
  }

  /** GET /ssot/knowledge-space/config — Get knowledge space configurations */
  async getConfig(options?: RequestOptions): Promise<AllKnowledgeSpaceConfigOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/config`, options);
  }

  /** POST /ssot/knowledge-space/config — Create knowledge space configuration */
  async createConfig(body: KnowledgeSpaceConfigInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceConfigOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/config`, body, options);
  }

  /** DELETE /ssot/knowledge-space/config/{knowledgeSpaceConfigApiNameOrId} — Delete knowledge space configuration */
  async deleteConfig(knowledgeSpaceConfigApiNameOrId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/config/${encodeURIComponent(knowledgeSpaceConfigApiNameOrId)}`, options);
  }

  /** GET /ssot/knowledge-space/config/{knowledgeSpaceConfigApiNameOrId} — Get knowledge space configuration */
  async getConfigByGet(knowledgeSpaceConfigApiNameOrId: string, options?: RequestOptions): Promise<KnowledgeSpaceConfigOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/config/${encodeURIComponent(knowledgeSpaceConfigApiNameOrId)}`, options);
  }

  /** GET /ssot/knowledge-space/deep-research/{researchId} — Get deep research status */
  async getDeepResearch(researchId: string, options?: RequestOptions): Promise<KnowledgeSpaceRunResearchOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/deep-research/${encodeURIComponent(researchId)}`, options);
  }

  /** PATCH /ssot/knowledge-space/deep-research/{researchId} — Update deep research plan */
  async patchDeepResearch(researchId: string, body: KnowledgeSpaceDeepResearchPlanPatchInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceRunResearchOutputRepresentation> {
    return this.httpClient.patch(`${this.basePath}/deep-research/${encodeURIComponent(researchId)}`, body, options);
  }

  /** POST /ssot/knowledge-space/deep-research/{researchId}/cancel — Cancel running deep research job */
  async createDeepResearchCancel(researchId: string, body: KnowledgeSpaceDeepResearchCancelInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceRunResearchOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/deep-research/${encodeURIComponent(researchId)}/cancel`, body, options);
  }

  /** POST /ssot/knowledge-space/deep-research/{researchId}/report — Get deep research report */
  async createDeepResearchReport(researchId: string, body: KnowledgeSpaceDeepResReportInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceDeepResReportOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/deep-research/${encodeURIComponent(researchId)}/report`, body, options);
  }

  /** POST /ssot/knowledge-space/deep-research/{researchId}/run — Run deep research */
  async createDeepResearchRun(researchId: string, options?: RequestOptions): Promise<KnowledgeSpaceDeepResRunResearchOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/deep-research/${encodeURIComponent(researchId)}/run`, undefined, options);
  }

  /** POST /ssot/knowledge-space/files/status — Get file status */
  async postFilesStatus(body: KnowledgeSpaceFileStatusInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceFilesStatusOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/files/status`, body, options);
  }

  /** POST /ssot/knowledge-space/getKnowledgeForImport — Get knowledge for import */
  async createGetKnowledgeForImport(body: KnowledgeModalInputRepresentation, options?: RequestOptions): Promise<KnowledgeModalOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/getKnowledgeForImport`, body, options);
  }

  /** POST /ssot/knowledge-space/importKnowledge — Import knowledge */
  async createImportKnowledge(body: KnowledgeModalInputRepresentation, options?: RequestOptions): Promise<KnowledgeModalOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/importKnowledge`, body, options);
  }

  /** POST /ssot/knowledge-space/index-files — Index files */
  async createIndexFiles(body: KnowledgeSpaceIndexFilesInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceIndexFilesOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/index-files`, body, options);
  }

  /** GET /ssot/knowledge-space/library — Get knowledge libraries */
  async getLibrary(options?: RequestOptions): Promise<AllKnowledgeSpaceLibraryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/library`, options);
  }

  /** POST /ssot/knowledge-space/library — Create knowledge library */
  async createLibrary(body: KnowledgeSpaceLibraryInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceLibraryOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/library`, body, options);
  }

  /** PATCH /ssot/knowledge-space/library/{id} — Update knowledge library */
  async patchLibrary(id: string, body: KnowledgeSpaceLibraryInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceLibraryOutputRepresentation> {
    return this.httpClient.patch(`${this.basePath}/library/${encodeURIComponent(id)}`, body, options);
  }

  /** GET /ssot/knowledge-space/library/{libraryId}/details — Get knowledge library details */
  async getLibraryDetails(libraryId: string, options?: RequestOptions): Promise<KnowledgeSpaceLibraryOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/library/${encodeURIComponent(libraryId)}/details`, options);
  }

  /** POST /ssot/knowledge-space/library/remove-library — Remove knowledge library */
  async postLibraryRemoveLibrary(body: KnowledgeSpaceLibraryInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceLibraryOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/library/remove-library`, body, options);
  }

  /** POST /ssot/knowledge-space/library/search — Search knowledge libraries */
  async postLibrarySearch(body: KnowledgeSpaceLibraryInputRepresentation, options?: RequestOptions): Promise<AllKnowledgeSpaceLibraryOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/library/search`, body, options);
  }

  /** POST /ssot/knowledge-space/presigned-urls — Get presigned URLs */
  async createPresignedUrls(body: KnowledgeSpaceUploadPresignedUrlInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceUploadPresignedURLOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/presigned-urls`, body, options);
  }

  /** POST /ssot/knowledge-space/provision — Provision knowledge space */
  async createProvision(body: KnowledgeSpaceProvisionInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceProvisionOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/provision`, body, options);
  }

  /** POST /ssot/knowledge-space/remove-files — Remove files */
  async createRemoveFiles(body: KnowledgeSpaceIndexFilesInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceIndexFilesOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/remove-files`, body, options);
  }

  /** DELETE /ssot/knowledge-space/session/{knowledgeSpaceSessionId} — Delete knowledge space session */
  async deleteSession(knowledgeSpaceSessionId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/session/${encodeURIComponent(knowledgeSpaceSessionId)}`, options);
  }

  /** GET /ssot/knowledge-space/session/{knowledgeSpaceSessionId} — Get knowledge space session */
  async getSession(knowledgeSpaceSessionId: string, options?: RequestOptions): Promise<KnowledgeSpaceSessionOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/session/${encodeURIComponent(knowledgeSpaceSessionId)}`, options);
  }

  /** POST /ssot/knowledge-space/space/{knowledgeSpaceApiNameOrId}/deep-research/source — Add deep research as knowledge source */
  async createSpaceDeepResearch(knowledgeSpaceApiNameOrId: string, body: KnowledgeSpaceDeepResearchAddSourceInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceDeepResearchAddSourceOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/space/${encodeURIComponent(knowledgeSpaceApiNameOrId)}/deep-research/source`, body, options);
  }

  /** POST /ssot/knowledge-space/summary — Get file chunks summary */
  async createSummary(body: KnowledgeSpaceFileChunksInputRepresentation, options?: RequestOptions): Promise<KnowledgeSpaceFileChunksOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/summary`, body, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams, options?: RequestOptions): AsyncGenerator<KnowledgeSpaceOutputRepresentation, void, undefined> {
    yield* this.paginate<KnowledgeSpaceOutputRepresentation>(this.basePath, { ...params, pageSizeParam: "batchSize" }, options);
  }
}
