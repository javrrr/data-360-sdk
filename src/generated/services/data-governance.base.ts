/**
 * Auto-generated base service for Data Governance.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/data-governance.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  AccessPolicyCollectionRepresentation,
  AccessPolicyInputRepresentation,
  AccessPolicyPatchInputRepresentation,
  AccessPolicyRepresentation,
  AccessPolicyRuleInputRepresentation,
  AccessPolicyRuleRepresentation,
  AutoTaggingJobCollectionRepresentation,
  AutoTaggingJobRepresentation,
  BatchRepresentation,
  BulkIdInputRepresentation,
  ClassificationAssignmentBulkCreateInputRepresentation,
  ClassificationAssignmentBulkDeleteInputRepresentation,
  ClassificationAssignmentCollectionRepresentation,
  ClassificationAssignmentCreateItemInputRepresentation,
  ClassificationAssignmentRepresentation,
  ClassificationBulkCreateInputRepresentation,
  ClassificationBulkDeleteInputRepresentation,
  ClassificationBulkUpdateInputRepresentation,
  ClassificationCollectionRepresentation,
  ClassificationCreateInputRepresentation,
  ClassificationPatchInputRepresentation,
  ClassificationRepresentation,
  DataGovernanceObjectAccessGrantBulkCreateResultRepresentation,
  DataGovernanceObjectAccessGrantBulkDeleteResultRepresentation,
  DataGovernanceObjectAccessGrantCollectionRepresentation,
  DataGovernanceObjectAccessGrantRepresentation,
  ObjectAccessGrantBulkCreateInputRepresentation,
  ObjectAccessGrantBulkDeleteInputRepresentation,
  ObjectAccessGrantCreateInputRepresentation,
  SuggestTagsInputRepresentation,
  TagAssignmentBulkCreateInputRepresentation,
  TagAssignmentBulkDeleteInputRepresentation,
  TagAssignmentCollectionRepresentation,
  TagAssignmentCreateItemInputRepresentation,
  TagAssignmentRepresentation,
  TagBulkCreateInputRepresentation,
  TagBulkDeleteInputRepresentation,
  TagBulkUpdateInputRepresentation,
  TagCollectionRepresentation,
  TagCreateInputRepresentation,
  TagDetectionInstructionBulkCreateInputRepresentation,
  TagDetectionInstructionCreateInputRepresentation,
  TagDetectionInstructionRepresentation,
  TagPatchInputRepresentation,
  TagPropagateInputRepresentation,
  TagRepresentation,
  TagSuggestionCollectionRepresentation,
  TagSuggestionRepresentation,
  TagWithActiveDetectionInstructionCollectionRepresentation,
  TagWithActiveDetectionInstructionRepresentation,
  TaxonomyBulkCreateInputRepresentation,
  TaxonomyBulkDeleteInputRepresentation,
  TaxonomyBulkUpdateInputRepresentation,
  TaxonomyCollectionRepresentation,
  TaxonomyCreateInputRepresentation,
  TaxonomyPatchInputRepresentation,
  TaxonomyRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DataGovernanceListAccessPoliciesParams {
  /** Indicates whether to include policies that aren't builder-compatible (`true`) or not (`false`). If unspecified, the default value is `false`. */
  includeIncompatible?: boolean;
  /** Case-insensitive substring to match against the policy name or label. */
  searchString?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceListAutoTaggingJobsParams {
  /** API name of the object to filter jobs by. */
  objectName?: string;
  /** Status to filter jobs by. Values are `InProgress`, `Success`, or `Fail`. */
  status?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceListClassificationAssignmentsParams {
  /** Fully-qualified API name of the classification to filter assignments by. */
  classificationFullyQualifiedName?: string;
  /** Fully-qualified API name of the tag to filter assignments by. */
  tagFullyQualifiedName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceListClassificationTaxonomiesParams {
  /** Search keyword to match against the developer name or label. */
  searchString?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceListClassificationsParams {
  /** Fully-qualified API name of the parent classification. Scopes the list to direct children. */
  parentClassificationFullyQualifiedName?: string;
  /** Search keyword to match against the developer name or label. */
  searchString?: string;
  /** Fully-qualified API name of the classification taxonomy (for example, `Compliance_Classifications`). Scopes the list to classifications under that taxonomy. */
  taxonomyName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceListObjectAccessGrantsParams {
  /** Developer name of the data space to filter grants by. */
  dataSpaceName?: string;
  /** API name of the DMO, DLO, or CIO object to filter grants by. */
  objectApiName?: string;
  /** Developer name of the permission set or permission set group to filter grants by. */
  permissionSetName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceDeleteObjectAccessGrantsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataSpaceName?: string;
  /** Developer name of the permission set. */
  permissionSetName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceGetObjectAccessGrantsParams {
  /** Name of the data space. If unspecified, the `default` data space is used. */
  dataSpaceName?: string;
  /** Developer name of the permission set. */
  permissionSetName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceListTagAssignmentsParams {
  /** API name of the field to filter tag assignments by. */
  fieldName?: string;
  /** API name of the object to filter tag assignments by. */
  objectName?: string;
  /** Fully-qualified API name of the tag to filter assignments by. */
  tagFullyQualifiedName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceListTagSuggestionsParams {
  /** API name of the object to filter suggestions by. */
  objectName?: string;
  /** Status to filter suggestions by. */
  status?: string;
  /** Fully-qualified API name of the tag to filter suggestions by. */
  tagFullyQualifiedName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceListTagTaxonomiesParams {
  /** Search keyword to match against the developer name or label. */
  searchString?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DataGovernanceListTagsParams {
  /** Fully-qualified API name of the parent tag. Scopes the list to direct children. */
  parentTagFullyQualifiedName?: string;
  /** Search keyword to match against the developer name or label. */
  searchString?: string;
  /** Fully-qualified API name of the tag taxonomy (for example, `Compliance_Tags`). Scopes the list to tags under that taxonomy. */
  taxonomyName?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DataGovernanceServiceBase extends BaseResource {
  protected readonly basePath = "/ssot/data-governance";

  /** GET /ssot/data-governance/access-policies — Get access policies */
  async listAccessPolicies(params?: PaginationParams & DataGovernanceListAccessPoliciesParams, options?: RequestOptions): Promise<AccessPolicyCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/access-policies`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-governance/access-policies — Create access policy */
  async createAccessPolicies(body: AccessPolicyInputRepresentation, options?: RequestOptions): Promise<AccessPolicyRepresentation> {
    return this.httpClient.post(`${this.basePath}/access-policies`, body, options);
  }

  /** DELETE /ssot/data-governance/access-policies/{name} — Delete access policy */
  async deleteAccessPolicies(name: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/access-policies/${encodeURIComponent(name)}`, options);
  }

  /** GET /ssot/data-governance/access-policies/{name} — Get access policy */
  async getAccessPolicies(name: string, options?: RequestOptions): Promise<AccessPolicyRepresentation> {
    return this.httpClient.get(`${this.basePath}/access-policies/${encodeURIComponent(name)}`, options);
  }

  /** PATCH /ssot/data-governance/access-policies/{name} — Update access policy */
  async patchAccessPolicies(name: string, body: AccessPolicyPatchInputRepresentation, options?: RequestOptions): Promise<AccessPolicyRepresentation> {
    return this.httpClient.patch(`${this.basePath}/access-policies/${encodeURIComponent(name)}`, body, options);
  }

  /** GET /ssot/data-governance/access-policies/{name}/rules/{ruleName} — Get access policy rule */
  async getAccessPoliciesRules(name: string, ruleName: string, options?: RequestOptions): Promise<AccessPolicyRuleRepresentation> {
    return this.httpClient.get(`${this.basePath}/access-policies/${encodeURIComponent(name)}/rules/${encodeURIComponent(ruleName)}`, options);
  }

  /** PUT /ssot/data-governance/access-policies/{name}/rules/{ruleName} — Replace access policy rule */
  async putAccessPoliciesRules(name: string, ruleName: string, body: AccessPolicyRuleInputRepresentation, options?: RequestOptions): Promise<AccessPolicyRuleRepresentation> {
    return this.httpClient.put(`${this.basePath}/access-policies/${encodeURIComponent(name)}/rules/${encodeURIComponent(ruleName)}`, body, options);
  }

  /** GET /ssot/data-governance/auto-tagging-jobs — Get auto-tagging jobs */
  async listAutoTaggingJobs(params?: PaginationParams & DataGovernanceListAutoTaggingJobsParams, options?: RequestOptions): Promise<AutoTaggingJobCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/auto-tagging-jobs`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /ssot/data-governance/auto-tagging-jobs/{id} — Get auto-tagging job */
  async getAutoTaggingJobs(id: string, options?: RequestOptions): Promise<AutoTaggingJobRepresentation> {
    return this.httpClient.get(`${this.basePath}/auto-tagging-jobs/${encodeURIComponent(id)}`, options);
  }

  /** GET /ssot/data-governance/classification-assignments — Get classification assignments */
  async listClassificationAssignments(params?: PaginationParams & DataGovernanceListClassificationAssignmentsParams, options?: RequestOptions): Promise<ClassificationAssignmentCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/classification-assignments`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-governance/classification-assignments — Create classification assignment */
  async createClassificationAssignments(body: ClassificationAssignmentCreateItemInputRepresentation, options?: RequestOptions): Promise<ClassificationAssignmentRepresentation> {
    return this.httpClient.post(`${this.basePath}/classification-assignments`, body, options);
  }

  /** DELETE /ssot/data-governance/classification-assignments/{id} — Delete classification assignment */
  async deleteClassificationAssignments(id: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/classification-assignments/${encodeURIComponent(id)}`, options);
  }

  /** GET /ssot/data-governance/classification-assignments/{id} — Get classification assignment */
  async getClassificationAssignments(id: string, options?: RequestOptions): Promise<ClassificationAssignmentRepresentation> {
    return this.httpClient.get(`${this.basePath}/classification-assignments/${encodeURIComponent(id)}`, options);
  }

  /** POST /ssot/data-governance/classification-assignments/actions/bulk-create — Bulk create classification assignments */
  async bulkCreateClassificationAssignments(body: ClassificationAssignmentBulkCreateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/classification-assignments/actions/bulk-create`, body, options);
  }

  /** POST /ssot/data-governance/classification-assignments/actions/bulk-delete — Bulk delete classification assignments */
  async bulkDeleteClassificationAssignments(body: ClassificationAssignmentBulkDeleteInputRepresentation, options?: RequestOptions): Promise<void> {
    return this.httpClient.post(`${this.basePath}/classification-assignments/actions/bulk-delete`, body, options);
  }

  /** GET /ssot/data-governance/classification-taxonomies — Get classification taxonomies */
  async listClassificationTaxonomies(params?: PaginationParams & DataGovernanceListClassificationTaxonomiesParams, options?: RequestOptions): Promise<TaxonomyCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/classification-taxonomies`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-governance/classification-taxonomies — Create classification taxonomy */
  async createClassificationTaxonomies(body: TaxonomyCreateInputRepresentation, options?: RequestOptions): Promise<TaxonomyRepresentation> {
    return this.httpClient.post(`${this.basePath}/classification-taxonomies`, body, options);
  }

  /** DELETE /ssot/data-governance/classification-taxonomies/{name} — Delete classification taxonomy */
  async deleteClassificationTaxonomies(name: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/classification-taxonomies/${encodeURIComponent(name)}`, options);
  }

  /** GET /ssot/data-governance/classification-taxonomies/{name} — Get classification taxonomy */
  async getClassificationTaxonomies(name: string, options?: RequestOptions): Promise<TaxonomyRepresentation> {
    return this.httpClient.get(`${this.basePath}/classification-taxonomies/${encodeURIComponent(name)}`, options);
  }

  /** PATCH /ssot/data-governance/classification-taxonomies/{name} — Update classification taxonomy */
  async patchClassificationTaxonomies(name: string, body: TaxonomyPatchInputRepresentation, options?: RequestOptions): Promise<TaxonomyRepresentation> {
    return this.httpClient.patch(`${this.basePath}/classification-taxonomies/${encodeURIComponent(name)}`, body, options);
  }

  /** POST /ssot/data-governance/classification-taxonomies/actions/bulk-create — Bulk create classification taxonomies */
  async bulkCreateClassificationTaxonomies(body: TaxonomyBulkCreateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/classification-taxonomies/actions/bulk-create`, body, options);
  }

  /** POST /ssot/data-governance/classification-taxonomies/actions/bulk-delete — Bulk delete classification taxonomies */
  async bulkDeleteClassificationTaxonomies(body: TaxonomyBulkDeleteInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/classification-taxonomies/actions/bulk-delete`, body, options);
  }

  /** POST /ssot/data-governance/classification-taxonomies/actions/bulk-update — Bulk update classification taxonomies */
  async bulkUpdateClassificationTaxonomies(body: TaxonomyBulkUpdateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/classification-taxonomies/actions/bulk-update`, body, options);
  }

  /** GET /ssot/data-governance/classifications — Get classifications */
  async listClassifications(params?: PaginationParams & DataGovernanceListClassificationsParams, options?: RequestOptions): Promise<ClassificationCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/classifications`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-governance/classifications — Create classification */
  async createClassifications(body: ClassificationCreateInputRepresentation, options?: RequestOptions): Promise<ClassificationRepresentation> {
    return this.httpClient.post(`${this.basePath}/classifications`, body, options);
  }

  /** DELETE /ssot/data-governance/classifications/{fullyQualifiedName} — Delete classification */
  async deleteClassifications(fullyQualifiedName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/classifications/${encodeURIComponent(fullyQualifiedName)}`, options);
  }

  /** GET /ssot/data-governance/classifications/{fullyQualifiedName} — Get classification */
  async getClassifications(fullyQualifiedName: string, options?: RequestOptions): Promise<ClassificationRepresentation> {
    return this.httpClient.get(`${this.basePath}/classifications/${encodeURIComponent(fullyQualifiedName)}`, options);
  }

  /** PATCH /ssot/data-governance/classifications/{fullyQualifiedName} — Update classification */
  async patchClassifications(fullyQualifiedName: string, body: ClassificationPatchInputRepresentation, options?: RequestOptions): Promise<ClassificationRepresentation> {
    return this.httpClient.patch(`${this.basePath}/classifications/${encodeURIComponent(fullyQualifiedName)}`, body, options);
  }

  /** GET /ssot/data-governance/classifications/{fullyQualifiedName}/assignments — Get classification assignments on a classification */
  async listClassificationsAssignments(fullyQualifiedName: string, params?: PaginationParams, options?: RequestOptions): Promise<ClassificationAssignmentCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/classifications/${encodeURIComponent(fullyQualifiedName)}/assignments`, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** POST /ssot/data-governance/classifications/actions/bulk-create — Bulk create classifications */
  async bulkCreateClassifications(body: ClassificationBulkCreateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/classifications/actions/bulk-create`, body, options);
  }

  /** POST /ssot/data-governance/classifications/actions/bulk-delete — Bulk delete classifications */
  async bulkDeleteClassifications(body: ClassificationBulkDeleteInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/classifications/actions/bulk-delete`, body, options);
  }

  /** POST /ssot/data-governance/classifications/actions/bulk-update — Bulk update classifications */
  async bulkUpdateClassifications(body: ClassificationBulkUpdateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/classifications/actions/bulk-update`, body, options);
  }

  /** GET /ssot/data-governance/object-access-grants — Get object access grants */
  async listObjectAccessGrants(params?: PaginationParams & DataGovernanceListObjectAccessGrantsParams, options?: RequestOptions): Promise<DataGovernanceObjectAccessGrantCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/object-access-grants`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-governance/object-access-grants — Create object access grant */
  async createObjectAccessGrants(body: ObjectAccessGrantCreateInputRepresentation, options?: RequestOptions): Promise<DataGovernanceObjectAccessGrantRepresentation> {
    return this.httpClient.post(`${this.basePath}/object-access-grants`, body, options);
  }

  /** DELETE /ssot/data-governance/object-access-grants/{objectApiName} — Delete object access grant */
  async deleteObjectAccessGrants(objectApiName: string, params?: DataGovernanceDeleteObjectAccessGrantsParams, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/object-access-grants/${encodeURIComponent(objectApiName)}`, { ...options, query: params });
  }

  /** GET /ssot/data-governance/object-access-grants/{objectApiName} — Get object access grant */
  async getObjectAccessGrants(objectApiName: string, params?: DataGovernanceGetObjectAccessGrantsParams, options?: RequestOptions): Promise<DataGovernanceObjectAccessGrantRepresentation> {
    return this.httpClient.get(`${this.basePath}/object-access-grants/${encodeURIComponent(objectApiName)}`, { ...options, query: params });
  }

  /** POST /ssot/data-governance/object-access-grants/actions/bulk-create — Bulk create object access grants */
  async bulkCreateObjectAccessGrants(body: ObjectAccessGrantBulkCreateInputRepresentation, options?: RequestOptions): Promise<DataGovernanceObjectAccessGrantBulkCreateResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/object-access-grants/actions/bulk-create`, body, options);
  }

  /** POST /ssot/data-governance/object-access-grants/actions/bulk-delete — Bulk delete object access grants */
  async bulkDeleteObjectAccessGrants(body: ObjectAccessGrantBulkDeleteInputRepresentation, options?: RequestOptions): Promise<DataGovernanceObjectAccessGrantBulkDeleteResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/object-access-grants/actions/bulk-delete`, body, options);
  }

  /** GET /ssot/data-governance/tag-assignments — Get tag assignments */
  async listTagAssignments(params?: PaginationParams & DataGovernanceListTagAssignmentsParams, options?: RequestOptions): Promise<TagAssignmentCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/tag-assignments`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-governance/tag-assignments — Create tag assignment */
  async createTagAssignments(body: TagAssignmentCreateItemInputRepresentation, options?: RequestOptions): Promise<TagAssignmentRepresentation> {
    return this.httpClient.post(`${this.basePath}/tag-assignments`, body, options);
  }

  /** DELETE /ssot/data-governance/tag-assignments/{id} — Delete tag assignment */
  async deleteTagAssignments(id: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/tag-assignments/${encodeURIComponent(id)}`, options);
  }

  /** GET /ssot/data-governance/tag-assignments/{id} — Get tag assignment */
  async getTagAssignments(id: string, options?: RequestOptions): Promise<TagAssignmentRepresentation> {
    return this.httpClient.get(`${this.basePath}/tag-assignments/${encodeURIComponent(id)}`, options);
  }

  /** POST /ssot/data-governance/tag-assignments/actions/bulk-create — Bulk create tag assignments */
  async bulkCreateTagAssignments(body: TagAssignmentBulkCreateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tag-assignments/actions/bulk-create`, body, options);
  }

  /** POST /ssot/data-governance/tag-assignments/actions/bulk-delete — Bulk delete tag assignments */
  async bulkDeleteTagAssignments(body: TagAssignmentBulkDeleteInputRepresentation, options?: RequestOptions): Promise<void> {
    return this.httpClient.post(`${this.basePath}/tag-assignments/actions/bulk-delete`, body, options);
  }

  /** GET /ssot/data-governance/tag-suggestions — Get tag suggestions */
  async listTagSuggestions(params?: PaginationParams & DataGovernanceListTagSuggestionsParams, options?: RequestOptions): Promise<TagSuggestionCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/tag-suggestions`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /ssot/data-governance/tag-suggestions/{id} — Get tag suggestion */
  async getTagSuggestions(id: string, options?: RequestOptions): Promise<TagSuggestionRepresentation> {
    return this.httpClient.get(`${this.basePath}/tag-suggestions/${encodeURIComponent(id)}`, options);
  }

  /** POST /ssot/data-governance/tag-suggestions/actions/approve — Approve tag suggestions */
  async approveTagSuggestions(body: BulkIdInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tag-suggestions/actions/approve`, body, options);
  }

  /** POST /ssot/data-governance/tag-suggestions/actions/generate — Generate tag suggestions */
  async generateTagSuggestions(body: SuggestTagsInputRepresentation, options?: RequestOptions): Promise<void> {
    return this.httpClient.post(`${this.basePath}/tag-suggestions/actions/generate`, body, options);
  }

  /** POST /ssot/data-governance/tag-suggestions/actions/reject — Reject tag suggestions */
  async rejectTagSuggestions(body: BulkIdInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tag-suggestions/actions/reject`, body, options);
  }

  /** GET /ssot/data-governance/tag-taxonomies — List tag taxonomies */
  async listTagTaxonomies(params?: PaginationParams & DataGovernanceListTagTaxonomiesParams, options?: RequestOptions): Promise<TaxonomyCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/tag-taxonomies`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-governance/tag-taxonomies — Create tag taxonomy */
  async createTagTaxonomies(body: TaxonomyCreateInputRepresentation, options?: RequestOptions): Promise<TaxonomyRepresentation> {
    return this.httpClient.post(`${this.basePath}/tag-taxonomies`, body, options);
  }

  /** DELETE /ssot/data-governance/tag-taxonomies/{fullyQualifiedName} — Delete tag taxonomy */
  async deleteTagTaxonomies(fullyQualifiedName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/tag-taxonomies/${encodeURIComponent(fullyQualifiedName)}`, options);
  }

  /** GET /ssot/data-governance/tag-taxonomies/{fullyQualifiedName} — Get tag taxonomy */
  async getTagTaxonomies(fullyQualifiedName: string, options?: RequestOptions): Promise<TaxonomyRepresentation> {
    return this.httpClient.get(`${this.basePath}/tag-taxonomies/${encodeURIComponent(fullyQualifiedName)}`, options);
  }

  /** PATCH /ssot/data-governance/tag-taxonomies/{fullyQualifiedName} — Update tag taxonomy */
  async patchTagTaxonomies(fullyQualifiedName: string, body: TaxonomyPatchInputRepresentation, options?: RequestOptions): Promise<TaxonomyRepresentation> {
    return this.httpClient.patch(`${this.basePath}/tag-taxonomies/${encodeURIComponent(fullyQualifiedName)}`, body, options);
  }

  /** POST /ssot/data-governance/tag-taxonomies/{fullyQualifiedName}/detection-instructions/actions/bulk-create — Bulk create tag detection instructions */
  async bulkCreateDetectionInstructions(fullyQualifiedName: string, body: TagDetectionInstructionBulkCreateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tag-taxonomies/${encodeURIComponent(fullyQualifiedName)}/detection-instructions/actions/bulk-create`, body, options);
  }

  /** GET /ssot/data-governance/tag-taxonomies/{fullyQualifiedName}/tags-with-active-detection-instructions — Get tags with active detection instructions */
  async listTagTaxonomiesTagsWithActiveDetectionInstructions(fullyQualifiedName: string, params?: PaginationParams, options?: RequestOptions): Promise<TagWithActiveDetectionInstructionCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/tag-taxonomies/${encodeURIComponent(fullyQualifiedName)}/tags-with-active-detection-instructions`, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** POST /ssot/data-governance/tag-taxonomies/actions/bulk-create — Bulk create tag taxonomies */
  async bulkCreateTagTaxonomies(body: TaxonomyBulkCreateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tag-taxonomies/actions/bulk-create`, body, options);
  }

  /** POST /ssot/data-governance/tag-taxonomies/actions/bulk-delete — Bulk delete tag taxonomies */
  async bulkDeleteTagTaxonomies(body: TaxonomyBulkDeleteInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tag-taxonomies/actions/bulk-delete`, body, options);
  }

  /** POST /ssot/data-governance/tag-taxonomies/actions/bulk-update — Bulk update tag taxonomies */
  async bulkUpdateTagTaxonomies(body: TaxonomyBulkUpdateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tag-taxonomies/actions/bulk-update`, body, options);
  }

  /** GET /ssot/data-governance/tags — Get tags */
  async listTags(params?: PaginationParams & DataGovernanceListTagsParams, options?: RequestOptions): Promise<TagCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/tags`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /ssot/data-governance/tags — Create tag */
  async createTags(body: TagCreateInputRepresentation, options?: RequestOptions): Promise<TagRepresentation> {
    return this.httpClient.post(`${this.basePath}/tags`, body, options);
  }

  /** DELETE /ssot/data-governance/tags/{fullyQualifiedName} — Delete tag */
  async deleteTags(fullyQualifiedName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/tags/${encodeURIComponent(fullyQualifiedName)}`, options);
  }

  /** GET /ssot/data-governance/tags/{fullyQualifiedName} — Get tag */
  async getTags(fullyQualifiedName: string, options?: RequestOptions): Promise<TagRepresentation> {
    return this.httpClient.get(`${this.basePath}/tags/${encodeURIComponent(fullyQualifiedName)}`, options);
  }

  /** PATCH /ssot/data-governance/tags/{fullyQualifiedName} — Update tag */
  async patchTags(fullyQualifiedName: string, body: TagPatchInputRepresentation, options?: RequestOptions): Promise<TagRepresentation> {
    return this.httpClient.patch(`${this.basePath}/tags/${encodeURIComponent(fullyQualifiedName)}`, body, options);
  }

  /** GET /ssot/data-governance/tags/{fullyQualifiedName}/assignments — Get tag assignments on a tag */
  async listTagsAssignments(fullyQualifiedName: string, params?: PaginationParams, options?: RequestOptions): Promise<TagAssignmentCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/tags/${encodeURIComponent(fullyQualifiedName)}/assignments`, {
      ...options,
      query: this.paginationQuery({ ...params, pageSizeParam: "limit" }),
    });
  }

  /** POST /ssot/data-governance/tags/{fullyQualifiedName}/detection-instructions — Create tag detection instruction */
  async createTagsDetectionInstructions(fullyQualifiedName: string, body: TagDetectionInstructionCreateInputRepresentation, options?: RequestOptions): Promise<TagDetectionInstructionRepresentation> {
    return this.httpClient.post(`${this.basePath}/tags/${encodeURIComponent(fullyQualifiedName)}/detection-instructions`, body, options);
  }

  /** DELETE /ssot/data-governance/tags/{fullyQualifiedName}/detection-instructions/active — Delete tag detection instruction */
  async deleteTagsDetectionInstructions(fullyQualifiedName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/tags/${encodeURIComponent(fullyQualifiedName)}/detection-instructions/active`, options);
  }

  /** GET /ssot/data-governance/tags/{fullyQualifiedName}/detection-instructions/active — Get tag detection instruction */
  async getTagsDetectionInstructions(fullyQualifiedName: string, options?: RequestOptions): Promise<TagDetectionInstructionRepresentation> {
    return this.httpClient.get(`${this.basePath}/tags/${encodeURIComponent(fullyQualifiedName)}/detection-instructions/active`, options);
  }

  /** POST /ssot/data-governance/tags/actions/bulk-create — Bulk create tags */
  async bulkCreateTags(body: TagBulkCreateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tags/actions/bulk-create`, body, options);
  }

  /** POST /ssot/data-governance/tags/actions/bulk-delete — Bulk delete tags */
  async bulkDeleteTags(body: TagBulkDeleteInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tags/actions/bulk-delete`, body, options);
  }

  /** POST /ssot/data-governance/tags/actions/bulk-update — Bulk update tags */
  async bulkUpdateTags(body: TagBulkUpdateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tags/actions/bulk-update`, body, options);
  }

  /** POST /ssot/data-governance/tags/actions/propagate — Propagate tags */
  async propagateTags(body: TagPropagateInputRepresentation, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/tags/actions/propagate`, body, options);
  }

  /** Async generator yielding all items from listAccessPolicies */
  async *listAllAccessPolicies(params?: PaginationParams & DataGovernanceListAccessPoliciesParams, options?: RequestOptions): AsyncGenerator<AccessPolicyRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<AccessPolicyRepresentation>(`${this.basePath}/access-policies`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listAutoTaggingJobs */
  async *listAllAutoTaggingJobs(params?: PaginationParams & DataGovernanceListAutoTaggingJobsParams, options?: RequestOptions): AsyncGenerator<AutoTaggingJobRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<AutoTaggingJobRepresentation>(`${this.basePath}/auto-tagging-jobs`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listClassificationAssignments */
  async *listAllClassificationAssignments(params?: PaginationParams & DataGovernanceListClassificationAssignmentsParams, options?: RequestOptions): AsyncGenerator<ClassificationAssignmentRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ClassificationAssignmentRepresentation>(`${this.basePath}/classification-assignments`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listClassificationTaxonomies */
  async *listAllClassificationTaxonomies(params?: PaginationParams & DataGovernanceListClassificationTaxonomiesParams, options?: RequestOptions): AsyncGenerator<TaxonomyRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<TaxonomyRepresentation>(`${this.basePath}/classification-taxonomies`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listClassifications */
  async *listAllClassifications(params?: PaginationParams & DataGovernanceListClassificationsParams, options?: RequestOptions): AsyncGenerator<ClassificationRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<ClassificationRepresentation>(`${this.basePath}/classifications`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listClassificationsAssignments */
  async *listAllClassificationsAssignments(fullyQualifiedName: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<ClassificationAssignmentRepresentation, void, undefined> {
    yield* this.paginate<ClassificationAssignmentRepresentation>(`${this.basePath}/classifications/${encodeURIComponent(fullyQualifiedName)}/assignments`, { ...params, pageSizeParam: "limit" }, options);
  }

  /** Async generator yielding all items from listObjectAccessGrants */
  async *listAllObjectAccessGrants(params?: PaginationParams & DataGovernanceListObjectAccessGrantsParams, options?: RequestOptions): AsyncGenerator<DataGovernanceObjectAccessGrantRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DataGovernanceObjectAccessGrantRepresentation>(`${this.basePath}/object-access-grants`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listTagAssignments */
  async *listAllTagAssignments(params?: PaginationParams & DataGovernanceListTagAssignmentsParams, options?: RequestOptions): AsyncGenerator<TagAssignmentRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<TagAssignmentRepresentation>(`${this.basePath}/tag-assignments`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listTagSuggestions */
  async *listAllTagSuggestions(params?: PaginationParams & DataGovernanceListTagSuggestionsParams, options?: RequestOptions): AsyncGenerator<TagSuggestionRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<TagSuggestionRepresentation>(`${this.basePath}/tag-suggestions`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listTagTaxonomies */
  async *listAllTagTaxonomies(params?: PaginationParams & DataGovernanceListTagTaxonomiesParams, options?: RequestOptions): AsyncGenerator<TaxonomyRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<TaxonomyRepresentation>(`${this.basePath}/tag-taxonomies`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listTagTaxonomiesTagsWithActiveDetectionInstructions */
  async *listAllTagTaxonomiesTagsWithActiveDetectionInstructions(fullyQualifiedName: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<TagWithActiveDetectionInstructionRepresentation, void, undefined> {
    yield* this.paginate<TagWithActiveDetectionInstructionRepresentation>(`${this.basePath}/tag-taxonomies/${encodeURIComponent(fullyQualifiedName)}/tags-with-active-detection-instructions`, { ...params, pageSizeParam: "limit" }, options);
  }

  /** Async generator yielding all items from listTags */
  async *listAllTags(params?: PaginationParams & DataGovernanceListTagsParams, options?: RequestOptions): AsyncGenerator<TagRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<TagRepresentation>(`${this.basePath}/tags`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listTagsAssignments */
  async *listAllTagsAssignments(fullyQualifiedName: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<TagAssignmentRepresentation, void, undefined> {
    yield* this.paginate<TagAssignmentRepresentation>(`${this.basePath}/tags/${encodeURIComponent(fullyQualifiedName)}/assignments`, { ...params, pageSizeParam: "limit" }, options);
  }
}
