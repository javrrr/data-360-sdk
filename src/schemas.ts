/**
 * Named type exports for all 813 OpenAPI schemas, 266 enum types,
 * and 3 discriminated union types.
 * Auto-generated — DO NOT EDIT. Run `npm run generate` to regenerate.
 *
 * Usage:
 *   import type { DataStreamInputRepresentation } from "data-360-sdk";
 *   import type { ActivationTargetPlatformType } from "data-360-sdk/schemas";
 */
import type { components } from "./generated/openapi.js";

type Schemas = components["schemas"];

/** Flatten intersections into a single object type for readable IntelliSense hovers. */
type Simplify<T> = { [K in keyof T]: T[K] } & {};

// ── Schema types (813) ──

export type AbstractBucketAlgorithmRepresentation = Schemas["AbstractBucketAlgorithmRepresentation"];
export type AccountEngagementConnectionInputRepresentation = {
  dataStreamType: "EmailActivity" | "FormActivity" | "WebPageActivity";
  pardotTenantId: string;
}
export type AccountEngagementConnectionRepresentation = {
  modules?: Schemas["ConnectionModuleConfigRepresentation"][];
  sourceId?: string;
  tenantSpecificEndpoint?: string;
}
export type ActivationAdditionalAttributesConfigInputRepresentation = Schemas["ActivationAdditionalAttributesConfigInputRepresentation"];
export type ActivationAttributeRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  activationPlatformAttrId?: string;
  attributeLabel?: string;
  dataSourceType?: string;
  entityName?: string;
  externalPlatformAttributeName?: string;
  filterExpression?: Schemas["AttributeFilterExpressionRepresentation"];
  preferredName?: string;
  queryPathConfig?: Schemas["QueryPathConfigListRepresentation"];
  referenceAttributeName?: string;
  source?: "Direct" | "Related";
  type?: "Computed_Dimension" | "Computed_Measure" | "Model" | "Model_Related" | "Non_Aggregatable_Computed_Measure";
}
export type ActivationAttributesConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  attributes?: Schemas["ActivationAttributeRepresentation"][];
}
export type ActivationCollectionRepresentation = Schemas["ActivationCollectionRepresentation"];
export type ActivationContactPointFieldConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  attributeId?: string;
  preferredName?: string;
  referenceAttributeName?: string;
}
export type ActivationContactPointInputRepresentation = Schemas["ActivationContactPointInputRepresentation"];
export type ActivationContactPointSourceConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  dataSourceId?: string;
  dataSourceName?: string;
  dataSourcePreference?: "ContactPointPrefAny" | "ContactPointPrefBusiness" | "ContactPointPrefPersonal" | "ContactPointPrefPrimary";
  dataSourcePriority?: number;
}
export type ActivationContactPointsFieldConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  contactPointFields?: Schemas["ActivationContactPointFieldConfigRepresentation"][];
}
export type ActivationContactPointsSourceConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  contactPointSources?: Schemas["ActivationContactPointSourceConfigRepresentation"][];
}
export type ActivationDataRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  activatedEntityFqk?: string;
  activatedOnId?: string;
  activationRecord?: string;
  deltaType?: "[object Object]" | "[object Object]" | "[object Object]" | "[object Object]";
  publishDate?: string;
  segmentId?: string;
  segmentOnId?: string;
  segmentedEntityFqk?: string;
}
export type ActivationDataSourceConfig = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  dataSourceId?: string;
  dataSourceName?: string;
  marketSegmentActivationId?: string;
}
export type ActivationDataSourceConfigInputRepresentation = Schemas["ActivationDataSourceConfigInputRepresentation"];
export type ActivationDataSourceConfigRepresentation = Schemas["ActivationDataSourceConfigRepresentation"];
export type ActivationDataSourcesRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  dataSources?: Schemas["ActivationDataSourceConfigRepresentation"][];
}
export type ActivationDefinitionInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  activationMappingSchema?: string;
  activationTargetName?: string;
  activationTargetSubjectConfig?: Schemas["ActivationTargetSubjectConfigInputRepresentation"];
  activationType?: "ApiTriggered" | "Segment";
  attributeLimitingExpressionConfig?: Schemas["AttributeLimitingExpressionInputConfigRepresentation"];
  attributesConfig?: Schemas["AttributesConfigInputRepresentation"][];
  contactPointsConfig?: Schemas["ContactPointConfigInputRepresentation"][];
  curatedEntity?: Schemas["CuratedEntityInputRepresentation"];
  customerFileSource?: "FirstAndThirdParty" | "FirstParty" | "ThirdParty";
  dataExportDefinitionId?: string;
  dataSourcesConfig?: Schemas["ActivationDataSourceConfigInputRepresentation"][];
  dataSpaceName?: string;
  description?: string;
  directDmoFiltersConfig?: Schemas["DMOFilterConfigInputRepresentation"][];
  limitValue?: number;
  marketSegmentId?: string;
  refreshType: string;
  relatedDmoFiltersConfig?: Schemas["DMOFilterConfigInputRepresentation"][];
  segmentApiName?: string;
  shouldExcludeDeletes?: boolean;
  shouldExcludeUpdates?: boolean;
  sourceDmoName?: string;
  staticDataConfig?: Schemas["StaticDataConfigInputRepresentation"][];
}
export type ActivationExternalPlatformAttributeConfigRepresentation = Schemas["ActivationExternalPlatformAttributeConfigRepresentation"];
export type ActivationExternalPlatformAttributeRepresentation = Schemas["ActivationExternalPlatformAttributeRepresentation"];
export type ActivationExternalPlatformCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  platforms?: Schemas["ActivationExternalPlatformRepresentation"][];
}
export type ActivationExternalPlatformRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  attributeConfig?: Schemas["ActivationExternalPlatformAttributeConfigRepresentation"];
  creationType?: "Json" | "Manual";
  keyPrefixName?: string;
  privacyType?: "NotApplicable" | "ServiceProvider" | "ThirdParty" | "UpdateFailed";
  status?: "Active" | "Error" | "Inactive" | "Processing";
  type?: "Advertising" | "Analytics" | "Marketing" | "Publishing" | "Technology";
}
export type ActivationPublishActionInputRepresentation = Schemas["ActivationPublishActionInputRepresentation"];
export type ActivationPublishActionRepresentation = {
  errors: Schemas["CdpErrorRepresentation"][];
  success: boolean;
  publishStatus?: "Error" | "NotSupported" | "PartnerError" | "PartnerProcessing" | "Publishing" | "Queued" | "SegmentError" | "Skipped" | "Success";
}
export type ActivationRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  activationDefinitionId?: string;
  activationMappingSchema?: string;
  activationRecordSchema?: string;
  activationTarget: Schemas["ActivationTargetRepresentation"];
  activationTargetSubjectConfig: Schemas["ActivationTargetSubjectRepresentation"];
  activationType?: "ApiTriggered" | "Segment";
  attributeLimitingExpressionConfig?: Schemas["AttributeLimitingExpressionConfigRepresentation"];
  attributesConfig: Schemas["ActivationAttributesConfigRepresentation"];
  contactPointsConfig: Schemas["ContactPointsConfigRepresentation"];
  curatedEntity: Schemas["CdpAssetReferenceRepresentation"];
  customerFileSource?: "First_And_Third_Party" | "First_Party" | "Third_Party";
  dataSourcesConfig: Schemas["ActivationDataSourcesRepresentation"];
  dataSpaceName: string;
  description?: string;
  developerName?: string;
  directDmoFiltersConfig?: Schemas["DmoFiltersConfigRepresentation"];
  enabled?: boolean;
  historyAudienceDmoApiName?: string;
  historyAudienceDmoLabel?: string;
  isEnabled?: boolean;
  lastPublishDate?: string;
  lastPublishStatus: "Error" | "Partner_Error" | "Partner_Processing" | "Publishing" | "Queued" | "Segment_Error" | "Skipped" | "Success";
  lastPublishStatusErrorMsg?: string;
  latestAudienceDmoApiName?: string;
  latestAudienceDmoLabel?: string;
  latestAudienceDmoLastRunTimestamp?: string;
  limitValue?: number;
  marketSegmentId?: string;
  membershipName?: string;
  queryPathConfig: Schemas["QueryPathConfigListRepresentation"];
  refreshType: "Full_Refresh" | "Incremental";
  relatedDmoFiltersConfig?: Schemas["DmoFiltersConfigRepresentation"];
  segmentApiName?: string;
  segmentId?: string;
  shouldExcludeDeletes: boolean;
  shouldExcludeUpdates?: boolean;
  sourceDmoName?: string;
  staticDataConfig?: Schemas["StaticDataConfigRepresentation"];
  status?: "Active" | "Processing" | "Error" | "Inactive";
}
export type ActivationTargetCollectionRepresentation = Schemas["ActivationTargetCollectionRepresentation"];
export type ActivationTargetInputRepresentation = Schemas["ActivationTargetInputRepresentation"];
export type ActivationTargetRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  connector?: Schemas["DataConnectorRepresentation"];
  dataSpaceName?: string;
  description?: string;
  egressProperties?: Schemas["EgressPropertiesRepresentation"];
  historyAudienceDmoApiName?: string;
  historyAudienceDmoLabel?: string;
  isCappingEnabled?: boolean;
  isEnabled?: boolean;
  latestAudienceDmoApiName?: string;
  latestAudienceDmoLabel?: string;
  organizationId?: string;
  platformName?: string;
  platformPrivacyType?: string;
  platformType?: "AmazonS3" | "AzureBlob" | "DataCloud" | "ExternalPlatform" | "GoogleCloudStorage" | "SalesforceMarketingCloud" | "Sftp";
  status: "Active" | "Processing" | "Error" | "Inactive";
}
export type ActivationTargetSubjectConfigInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  developerName?: string;
  queryPathConfig?: Schemas["QueryPathConfigListInputRepresentation"][];
}
export type ActivationTargetSubjectRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  developerName?: string;
  masterLabel?: string;
  queryPathConfig?: Schemas["QueryPathConfigListRepresentation"];
}
export type AggregateInputRepresentation = Schemas["AggregateInputRepresentation"];
export type AggregateNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["AggregateParametersInputRepresentation"];
}
export type AggregateNodeRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Schemas["SchemaParametersRepresentation"];
  sources: string[];
  parameters?: Schemas["AggregateParametersRepresentation"];
}
export type AggregateParametersInputRepresentation = Schemas["AggregateParametersInputRepresentation"];
export type AggregateParametersRepresentation = Schemas["AggregateParametersRepresentation"];
export type AggregateRepresentation = Schemas["AggregateRepresentation"];
export type AmazonMSKRouteDetailsInputRepresentation = {
  serviceName: string;
  type: "AmazonMsk";
  brokerEndpoints: string[];
}
export type AmazonMSKRouteDetailsRepresentation = {
  serviceName: string;
  type: "AmazonMsk";
  brokerEndpoints: string[];
}
export type AppendMappingInputRepresentation = Schemas["AppendMappingInputRepresentation"];
export type AppendMappingRepresentation = Schemas["AppendMappingRepresentation"];
export type AppendParametersInputRepresentation = Schemas["AppendParametersInputRepresentation"];
export type AppendParametersRepresentation = Schemas["AppendParametersRepresentation"];
export type AppendV2NodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["AppendParametersInputRepresentation"];
}
export type AppendV2NodeRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Schemas["SchemaParametersRepresentation"];
  sources: string[];
  parameters?: Schemas["AppendParametersRepresentation"];
}
export type AttributeFilterExpressionInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  conjunction?: "FilterConjunctionAnd" | "FilterConjunctionOr";
  filters?: Schemas["AttributeFilterInputRepresentation"][];
}
export type AttributeFilterExpressionRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  conjunction?: "FilterConjunctionAnd" | "FilterConjunctionOr";
  filters?: Schemas["AttributeFilterRepresentation"][];
}
export type AttributeFilterInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  attributeId?: string;
  attributeName?: string;
  dateUnits?: "Days" | "Months" | "Years";
  operator?: string;
  type?: "FilterOperatorDataTypeBoolean" | "FilterOperatorDataTypeDate" | "FilterOperatorDataTypeDateOnly" | "FilterOperatorDataTypeExactlyRelativeDate" | "FilterOperatorDataTypeNumber" | "FilterOperatorDataTypeRelateToNowDate" | "FilterOperatorDataTypeText";
  value?: Schemas["FilterValuesInputRepresentation"][];
}
export type AttributeFilterRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  attributeId?: string;
  attributeName?: string;
  dateUnits?: "Days" | "Months" | "Years";
  operator?: string;
  type?: "FilterOperatorDataTypeBoolean" | "FilterOperatorDataTypeDate" | "FilterOperatorDataTypeDateOnly" | "FilterOperatorDataTypeExactlyRelativeDate" | "FilterOperatorDataTypeNumber" | "FilterOperatorDataTypeRelateToNowDate" | "FilterOperatorDataTypeText";
  value?: Schemas["FilterValuesRepresentation"];
}
export type AttributeLimitingExpressionConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  attributeLimitingExpressions?: Schemas["AttributeLimitingExpressionRepresentation"][];
}
export type AttributeLimitingExpressionInputConfigRepresentation = Schemas["AttributeLimitingExpressionInputConfigRepresentation"];
export type AttributeLimitingExpressionInputRepresentation = Schemas["AttributeLimitingExpressionInputRepresentation"];
export type AttributeLimitingExpressionRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  attributeName?: string;
  entityName?: string;
  order?: "FilterSortOrderAsc" | "FilterSortOrderDesc";
  queryPathConfig?: string;
  type?: string;
}
export type AttributesConfigInputRepresentation = Schemas["AttributesConfigInputRepresentation"];
export type AudienceDMOCollectionRepresentation = Schemas["AudienceDMOCollectionRepresentation"];
export type AzureConnectorInputRepresentation = {
  name?: string;
  outputFormat?: string;
}
export type AzureConnectorRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
}
export type BaseComparisonInputRepresentation = Schemas["BaseComparisonInputRepresentation"];
export type BaseComparisonRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
}
export type BaseConnectionFieldRepresentation = Schemas["BaseConnectionFieldRepresentation"];
export type BaseConnectionObjectRepresentation = Schemas["BaseConnectionObjectRepresentation"];
export type BatchActionRepresentation = Schemas["BatchActionRepresentation"];
export type BooleanComparisonInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
  joinPath?: Schemas["LabeledSubjectsConfigInput"][];
  path?: Schemas["LabeledSubjectsConfigInput"][];
  selfReference?: boolean;
  subject?: Schemas["SubjectInputRepresentation"];
  value?: boolean;
}
export type BucketBooleanBucketInputRepresentation = Schemas["BucketBooleanBucketInputRepresentation"];
export type BucketBooleanBucketRepresentation = {
  value: string;
  sourceValues?: unknown[];
}
export type BucketBooleanFieldInputRepresentation = {
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  bucketsSetup?: Schemas["BucketBooleanSetupInputRepresentation"];
}
export type BucketBooleanSetupInputRepresentation = {
  algorithm: Record<string, never>;
  defaultBucketValue: string;
  isPassthroughEnabled: boolean;
  nullBucketValue: string;
  buckets?: Schemas["BucketBooleanBucketInputRepresentation"][];
  sourceField?: Schemas["BucketBooleanSourceFieldInputRepresentation"];
}
export type BucketBooleanSourceFieldInputRepresentation = Schemas["BucketBooleanSourceFieldInputRepresentation"];
export type BucketDateArgumentInputRepresentation = Schemas["BucketDateArgumentInputRepresentation"];
export type BucketDateArgumentRepresentation = Schemas["BucketDateArgumentRepresentation"];
export type BucketDateBucketInputRepresentation = Schemas["BucketDateBucketInputRepresentation"];
export type BucketDateBucketRepresentation = {
  value: string;
  rangeEnd?: Schemas["BucketDateArgumentRepresentation"];
  rangeStart?: Schemas["BucketDateArgumentRepresentation"];
}
export type BucketDateOnlyFieldInputRepresentation = {
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  bucketsSetup?: Schemas["BucketDateSetupInputRepresentation"];
}
export type BucketDateSetupInputRepresentation = {
  algorithm: Record<string, never>;
  defaultBucketValue: string;
  isPassthroughEnabled: boolean;
  nullBucketValue: string;
  buckets?: Schemas["BucketDateBucketInputRepresentation"][];
  sourceField?: Schemas["BucketDateSourceFieldInputRepresentation"];
}
export type BucketDateSourceFieldInputRepresentation = Schemas["BucketDateSourceFieldInputRepresentation"];
export type BucketDateTimeFieldInputRepresentation = {
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  bucketsSetup?: Schemas["BucketDateSetupInputRepresentation"];
}
export type BucketDimensionBucketInputRepresentation = Schemas["BucketDimensionBucketInputRepresentation"];
export type BucketDimensionBucketRepresentation = {
  value: string;
  sourceValues?: string[];
}
export type BucketDimensionFieldInputRepresentation = {
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  bucketsSetup?: Schemas["BucketDimensionSetupInputRepresentation"];
}
export type BucketDimensionSetupInputRepresentation = {
  algorithm: Record<string, never>;
  defaultBucketValue: string;
  isPassthroughEnabled: boolean;
  nullBucketValue: string;
  buckets?: Schemas["BucketDimensionBucketInputRepresentation"][];
  sourceField?: Schemas["BucketDimensionSourceFieldInputRepresentation"];
}
export type BucketDimensionSourceFieldInputRepresentation = Schemas["BucketDimensionSourceFieldInputRepresentation"];
export type BucketFieldInputRepresentation = Schemas["BucketFieldInputRepresentation"];
export type BucketFieldRepresentation = Schemas["BucketFieldRepresentation"];
export type BucketMeasureBucketInputRepresentation = Schemas["BucketMeasureBucketInputRepresentation"];
export type BucketMeasureBucketRepresentation = {
  value: string;
  rangeEnd?: number;
  rangeStart?: number;
}
export type BucketMeasureFieldInputRepresentation = {
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  bucketsSetup?: Schemas["BucketMeasureSetupInputRepresentation"];
}
export type BucketMeasureSetupInputRepresentation = {
  algorithm: Record<string, never>;
  defaultBucketValue: string;
  isPassthroughEnabled: boolean;
  nullBucketValue: string;
  buckets?: Schemas["BucketMeasureBucketInputRepresentation"][];
  sourceField?: Schemas["BucketMeasureSourceFieldInputRepresentation"];
}
export type BucketMeasureSourceFieldInputRepresentation = Schemas["BucketMeasureSourceFieldInputRepresentation"];
export type BucketNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["BucketParametersInputRepresentation"];
}
export type BucketNodeRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Schemas["SchemaParametersRepresentation"];
  sources: string[];
  parameters?: Schemas["BucketParametersRepresentation"];
}
export type BucketParametersInputRepresentation = Schemas["BucketParametersInputRepresentation"];
export type BucketParametersRepresentation = Schemas["BucketParametersRepresentation"];
export type BucketRepresentation = Schemas["BucketRepresentation"];
export type BucketSetupInputRepresentation = Schemas["BucketSetupInputRepresentation"];
export type BucketSetupRepresentation = Schemas["BucketSetupRepresentation"];
export type BucketSourceFieldRepresentation = Schemas["BucketSourceFieldRepresentation"];
export type BusinessUnitConfigInputRepresentation = Schemas["BusinessUnitConfigInputRepresentation"];
export type BusinessUnitConfigRepresentation = Schemas["BusinessUnitConfigRepresentation"];
export type CdpActionResponseBaseRepresentation = Schemas["CdpActionResponseBaseRepresentation"];
export type CdpAssetBaseInputRepresentation = Schemas["CdpAssetBaseInputRepresentation"];
export type CdpAssetBaseRepresentation = Schemas["CdpAssetBaseRepresentation"];
export type CdpAssetHistoryBaseRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  isCurrent?: boolean;
  revertURL?: string;
}
export type CdpAssetHistoryCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  histories?: Schemas["CdpAssetHistoryRepresentation"][];
}
export type CdpAssetHistoryRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  isCurrent?: boolean;
  revertURL?: string;
}
export type CdpAssetReferenceInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
}
export type CdpAssetReferenceRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
}
export type CdpCalculatedInsightCollectionDataRepresentation = Schemas["CdpCalculatedInsightCollectionDataRepresentation"];
export type CdpCalculatedInsightCollectionRepresentation = Schemas["CdpCalculatedInsightCollectionRepresentation"];
export type CdpCalculatedInsightDataSourceRepresentation = Schemas["CdpCalculatedInsightDataSourceRepresentation"];
export type CdpCalculatedInsightDimensionRepresentation = Schemas["CdpCalculatedInsightDimensionRepresentation"];
export type CdpCalculatedInsightInputRepresentation = Schemas["CdpCalculatedInsightInputRepresentation"];
export type CdpCalculatedInsightMeasureRepresentation = Schemas["CdpCalculatedInsightMeasureRepresentation"];
export type CdpCalculatedInsightRepresentation = Schemas["CdpCalculatedInsightRepresentation"];
export type CdpCalculatedInsightStandardActionResponseRepresentation = {
  errors: Schemas["CdpErrorRepresentation"][];
  success: boolean;
}
export type CdpCalculatedInsightValidateInputRepresentation = Schemas["CdpCalculatedInsightValidateInputRepresentation"];
export type CdpDataActionCRMTargetInfo = {
  apiContract: string;
  targetEndpoint: string;
  label?: string;
  orgId?: string;
}
export type CdpDataActionCollectionRepresentation = Schemas["CdpDataActionCollectionRepresentation"];
export type CdpDataActionGrpcTargetInfo = {
  apiContract: string;
  targetEndpoint: string;
  customMetadata?: Record<string, never>;
  mappingConfig?: Schemas["CdpDataActionGrpcTargetMappingConfig"];
  methodName?: string;
  protoBufferContent?: string;
  serviceName?: string;
}
export type CdpDataActionGrpcTargetMappingConfig = Schemas["CdpDataActionGrpcTargetMappingConfig"];
export type CdpDataActionInputRepresentation = Schemas["CdpDataActionInputRepresentation"];
export type CdpDataActionMCTargetInfo = {
  apiContract: string;
  targetEndpoint: string;
  contentKey?: string;
  contentTemplate?: string;
}
export type CdpDataActionOutputRepresentation = Schemas["CdpDataActionOutputRepresentation"];
export type CdpDataActionTargetCRMConfig = {
  apiContract?: string;
  targetEndpoint?: string;
  orgId?: string;
  orgLabel?: string;
}
export type CdpDataActionTargetCollectionRepresentation = Schemas["CdpDataActionTargetCollectionRepresentation"];
export type CdpDataActionTargetConfig = Schemas["CdpDataActionTargetConfig"];
export type CdpDataActionTargetGrpcConfig = {
  apiContract?: string;
  targetEndpoint?: string;
  customMetadata?: { [key: string]: string };
  mappingConfig?: Schemas["CdpDataActionTargetGrpcMappingConfig"];
  methodName?: string;
  protoBufferContent?: string;
  serviceName?: string;
}
export type CdpDataActionTargetGrpcMappingConfig = Schemas["CdpDataActionTargetGrpcMappingConfig"];
export type CdpDataActionTargetInfo = Schemas["CdpDataActionTargetInfo"];
export type CdpDataActionTargetInputRepresentation = Schemas["CdpDataActionTargetInputRepresentation"];
export type CdpDataActionTargetInternalWebConfig = {
  apiContract?: string;
  targetEndpoint?: string;
}
export type CdpDataActionTargetInternalWebInfo = {
  apiContract: string;
  targetEndpoint: string;
}
export type CdpDataActionTargetMCConfig = {
  apiContract?: string;
  targetEndpoint?: string;
  contentKey?: string;
  contentTemplate?: string;
}
export type CdpDataActionTargetOutputRepresentation = Schemas["CdpDataActionTargetOutputRepresentation"];
export type CdpDataActionTargetSigningKeyOutputRepresentation = Schemas["CdpDataActionTargetSigningKeyOutputRepresentation"];
export type CdpDataActionTargetWebConfig = {
  apiContract?: string;
  targetEndpoint?: string;
}
export type CdpDataActionTargetWebInfo = {
  apiContract: string;
  targetEndpoint: string;
}
export type CdpDataGraphActionResponseRepresentation = {
  errors: Schemas["CdpErrorRepresentation"][];
  success: boolean;
}
export type CdpDataGraphDataRecencyInputRepresentation = Schemas["CdpDataGraphDataRecencyInputRepresentation"];
export type CdpDataGraphFieldInputRepresentation = Schemas["CdpDataGraphFieldInputRepresentation"];
export type CdpDataGraphFieldOutputRepresentation = {
  createdBy?: string;
  createdDate?: string;
  dataspaceName?: string;
  description?: string;
  id?: string;
  label?: string;
  modifiedBy?: string;
  modifiedDate?: string;
  name?: string;
  dataType?: string;
  isKeyColumn?: boolean;
  isProjected?: boolean;
  sourceFieldLabel?: string;
  sourceFieldName?: string;
  usageTag?: string;
}
export type CdpDataGraphInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label?: string;
  name?: string;
  primaryObjectName?: string;
  sourceObject?: Schemas["CdpDataGraphSourceInputRepresentation"];
  type?: string;
}
export type CdpDataGraphOutputRepresentation = {
  createdBy?: string;
  createdDate?: string;
  dataspaceName?: string;
  description?: string;
  id?: string;
  label?: string;
  modifiedBy?: string;
  modifiedDate?: string;
  name?: string;
  extendedProperties?: string;
  idDmoLabel?: string;
  idDmoName?: string;
  kind?: string;
  lastRunStatus?: string;
  primaryObjectLabel?: string;
  primaryObjectName?: string;
  sourceObject?: Schemas["CdpDataGraphSourceObjectOutputRepresentation"];
  status?: string;
  type?: string;
  valuesDmoLabel?: string;
  valuesDmoName?: string;
  version?: string;
}
export type CdpDataGraphPathToParentInputRepresentation = Schemas["CdpDataGraphPathToParentInputRepresentation"];
export type CdpDataGraphPathToParentOutputRepresentation = Schemas["CdpDataGraphPathToParentOutputRepresentation"];
export type CdpDataGraphRecencyCriteriaOutputRepresentation = Schemas["CdpDataGraphRecencyCriteriaOutputRepresentation"];
export type CdpDataGraphSourceInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label?: string;
  name?: string;
  fields?: Schemas["CdpDataGraphFieldInputRepresentation"][];
  jsonPath?: string;
  path?: Schemas["CdpDataGraphPathToParentInputRepresentation"][];
  recencyCriteria?: Schemas["CdpDataGraphDataRecencyInputRepresentation"][];
  relatedObjects?: Schemas["CdpDataGraphSourceInputRepresentation"][];
  type?: "CALCULATED" | "CALCULATED_STREAMING" | "CALCULATED_REAL_TIME" | "STANDARD" | "CUSTOM" | "SYSTEM" | "DERIVED" | "BRIDGE" | "SEGMENT_MEMBERSHIP" | "ML_PREDICTION" | "ACTIVATION_AUDIENCE" | "TRANSFORM";
}
export type CdpDataGraphSourceObjectOutputRepresentation = {
  createdBy?: string;
  createdDate?: string;
  dataspaceName?: string;
  description?: string;
  id?: string;
  label?: string;
  modifiedBy?: string;
  modifiedDate?: string;
  name?: string;
  fields?: Schemas["CdpDataGraphFieldOutputRepresentation"][];
  fragmentDMOLabel?: string;
  fragmentDMOName?: string;
  jsonPath?: string;
  path?: Schemas["CdpDataGraphPathToParentOutputRepresentation"][];
  recencyCriteria?: Schemas["CdpDataGraphRecencyCriteriaOutputRepresentation"][];
  relatedObjects?: Schemas["CdpDataGraphSourceObjectOutputRepresentation"][];
  type?: "Activation_Audience" | "Bridge" | "Calculated" | "Calculated_Real_Time" | "Calculated_Streaming" | "Custom" | "Derived" | "Ml_Prediction" | "Segment_Membership" | "Standard" | "System" | "Transform";
}
export type CdpDataKitComponentInfo = Schemas["CdpDataKitComponentInfo"];
export type CdpDataKitComponentInfoCalculatedInsight = {
  type: "DataStreamBundle" | "CalculatedInsight" | "DataLakeObject" | "DataTransform";
  apiName?: string;
  expression?: string;
  label?: string;
}
export type CdpDataKitComponentInfoForBundle = {
  type: "DataStreamBundle" | "CalculatedInsight" | "DataLakeObject" | "DataTransform";
  connectorType?: "Commerce" | "Crm" | "External" | "IngestApi" | "Mc" | "MoreConnectors" | "S3" | "StreamingApp";
  devName?: string;
  label?: string;
  streams?: Schemas["CdpDataKitStream"][];
}
export type CdpDataKitComponentInfoForDLO = {
  type: "DataStreamBundle" | "CalculatedInsight" | "DataLakeObject" | "DataTransform";
  dloName?: string;
}
export type CdpDataKitComponentInfoForDataTransformRepresentation = {
  type: "DataStreamBundle" | "CalculatedInsight" | "DataLakeObject" | "DataTransform";
  dataTransformName?: string;
}
export type CdpDataKitComponents = Schemas["CdpDataKitComponents"];
export type CdpDataKitDeployBundleConfig = Schemas["CdpDataKitDeployBundleConfig"];
export type CdpDataKitDeployBundleConfigForAccountEngagement = {
  dataSpaceFilterCriteriaApiConfig?: Schemas["DataSpaceFilterConditionApiConfig"][];
  dataStreamType?: "EmailActivity" | "FormActivity" | "WebPageActivity";
  pardotTenantId?: string;
}
export type CdpDataKitDeployBundleConfigForCommerce = {
  instanceId?: string;
}
export type CdpDataKitDeployBundleConfigForConnectorsFramework = {
  connectionName?: string;
  dataSpaceFilterCriteriaApiConfig?: Schemas["DataSpaceFilterConditionApiConfig"][];
}
export type CdpDataKitDeployBundleConfigForCrm = {
  dataSpaceFilterCriteriaApiConfig?: Schemas["DataSpaceFilterConditionApiConfig"][];
  orgId?: string;
}
export type CdpDataKitDeployBundleConfigForExternal = {
  connectionName?: string;
  dataSpaceFilterCriteriaApiConfig?: Schemas["DataSpaceFilterConditionApiConfig"][];
}
export type CdpDataKitDeployBundleConfigForIngestApi = {
  connectorName?: string;
  dataSpaceFilterCriteriaApiConfig?: Schemas["DataSpaceFilterConditionApiConfig"][];
}
export type CdpDataKitDeployBundleConfigForStreamingApp = {
  connectorName?: string;
  dataSpaceFilterCriteriaApiConfig?: Schemas["DataSpaceFilterConditionApiConfig"][];
  streamingAppDataConnectorType?: "MobileApp" | "WebApp";
}
export type CdpDataKitDeployComponentConfig = Schemas["CdpDataKitDeployComponentConfig"];
export type CdpDataKitDeployComponentConfigCalculatedInsight = {
  apiName?: string;
  apiNameOverride?: string;
  label?: string;
  publishInterval?: "ExternallyManaged" | "NotScheduled" | "One" | "Six" | "Streaming" | "SystemManaged" | "Twelve" | "TwentyFour";
  publishScheduleEndDate?: string;
  publishScheduleStartDateTime?: string;
}
export type CdpDataKitDeployComponentConfigForBundle = {
  bundleConfig?: unknown;
  bundleName?: string;
  connectorType?: "AccountEngagement" | "Commerce" | "Crm" | "External" | "IngestApi" | "MoreConnectors" | "S3" | "StreamingApp";
  forceNoRefresh?: boolean;
  kqConfig?: Schemas["DataKitKQConfigRepresentation"][];
}
export type CdpDataKitDeployComponentConfigForDLO = {
  apiName?: string;
  dataSourceObjectDevName?: string;
  dataSpaceFilterCriteriaApiConfig?: Schemas["DataSpaceFilterConditionApiConfig"][];
  dataSpaceName?: string;
  label?: string;
}
export type CdpDataKitDeployComponentConfigForDataAction = {
  dataSpaceName?: string;
  developerName?: string;
  developerNameOverride?: string;
  label?: string;
}
export type CdpDataKitDeployComponentConfigForDataActionTarget = {
  apiName?: string;
  apiNameOverride?: string;
  endPointUrlOverride?: string;
  label?: string;
}
export type CdpDataKitDeployComponentConfigForDataSemanticSearch = {
  apiName?: string;
  dataKitName?: string;
  dataSpaceName?: string;
  label?: string;
  name?: string;
  searchIndexName?: string;
}
export type CdpDataKitDeployComponentConfigForDataShare = {
  apiName?: string;
  cios?: string[];
  dataShareDeveloperName?: string;
  dataSpaceName?: string;
  description?: string;
  dlos?: string[];
  dmos?: string[];
  label?: string;
  templateDevName?: string;
}
export type CdpDataKitDeployComponentConfigForIdpConfiguration = {
  templateDevName?: string;
}
export type CdpDataKitDeployComponentConfigForPredictionJob = {
  apiName?: string;
  dataKitName?: string;
  dataSpaceName?: string;
  label?: string;
  predictionJobName?: string;
}
export type CdpDataKitDeployComponentConfigForTuaFramework = {
  changeSetIdentifier?: string;
  componentType?: "ActivationTarget" | "AnalyticsDashboard" | "AnalyticsVisualization" | "AnalyticsWorkspace" | "CalculatedInsight" | "CopyFieldEnrichment" | "CurrencyConfigObject" | "DataAction" | "DataActionTarget" | "DataCleanRoomDataSpecDef" | "DataCleanRoomProvider" | "DataConnection" | "DataCustomCode" | "DataGraph" | "DataLakeObject" | "DataModelObject" | "DataSemanticSearch" | "DataShare" | "DataStreamBundle" | "DataTransform" | "EngagementSignal" | "FiscalCalendarConfigObject" | "IdentityResolution" | "IdpConfiguration" | "InternalDataConnector" | "IrRelatedListEnrichment" | "MarketSegment" | "MarketSegmentActivation" | "MlConfiguredModel" | "MlPredictionJob" | "MlRetriever" | "PersnlBatchDecision" | "PersonalizationObjective" | "PersonalizationPoint" | "PersonalizationRecommender" | "PersonalizationSchema" | "SecondaryIndex" | "SemanticModel" | "TuaTemplatedObject";
  dataKitDevName?: string;
  dataSpaceName?: string;
  developerName?: string;
  label?: string;
}
export type CdpDataKitDeployComponentConfigMlConfiguredModel = {
  apiName?: string;
  connectorType?: "Anthropic" | "AzureOpenAI" | "Bedrock" | "Databricks" | "Generic" | "InternalEmbedding" | "OpenAI" | "OpenConnector" | "SageMaker" | "Salesforce" | "VertexAI";
  label?: string;
  modelType?: "Generative" | "Predictive" | "SpeechSynthesis" | "Summarization" | "Transcribe" | "Unknown";
}
export type CdpDataKitDeployComponentConfigMlRetriever = {
  apiName?: string;
  dataSpaceName?: string;
  label?: string;
  retrieverQueryType?: "Ensemble" | "NoCode" | "ProCode";
}
export type CdpDataKitDeployComponentRepresentation = Schemas["CdpDataKitDeployComponentRepresentation"];
export type CdpDataKitDeployInputRepresentation = Schemas["CdpDataKitDeployInputRepresentation"];
export type CdpDataKitDeployJobOutputRepresentation = Schemas["CdpDataKitDeployJobOutputRepresentation"];
export type CdpDataKitDeployOutputRepresentation = Schemas["CdpDataKitDeployOutputRepresentation"];
export type CdpDataKitDetails = Schemas["CdpDataKitDetails"];
export type CdpDataKitMembers = Schemas["CdpDataKitMembers"];
export type CdpDataKitMembersList = Schemas["CdpDataKitMembersList"];
export type CdpDataKitStream = Schemas["CdpDataKitStream"];
export type CdpDataTransformActionResponseRepresentation = {
  errors: Schemas["CdpErrorRepresentation"][];
  success: boolean;
}
export type CdpDgMetadataRepresentation = Schemas["CdpDgMetadataRepresentation"];
export type CdpErrorRepresentation = Schemas["CdpErrorRepresentation"];
export type CdpFieldSourceTargetMapInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label?: string;
  name?: string;
  sourceFieldDeveloperName?: string;
  targetFieldDeveloperName?: string;
}
export type CdpFieldSourceTargetMapRepresentation = Schemas["CdpFieldSourceTargetMapRepresentation"];
export type CdpHourlyScheduleInputRepresentation = {
  definitionName?: string;
  frequency: "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
  shouldForceSpecifiedMinutes?: boolean;
  time: Schemas["CdpTimeInputRepresentation"];
  daysOfWeek?: string[];
  interval?: number;
}
export type CdpHourlyScheduleRepresentation = {
  frequency: "Hourly" | "None";
  nextScheduledDate: string;
  time: Schemas["CdpTimeRepresentation"];
  daysOfWeek?: string[];
  interval?: number;
}
export type CdpIdentityResolutionConfigInput = Schemas["CdpIdentityResolutionConfigInput"];
export type CdpIdentityResolutionConfigPatchInput = Schemas["CdpIdentityResolutionConfigPatchInput"];
export type CdpIdentityResolutionMatchCriterionOutput = Schemas["CdpIdentityResolutionMatchCriterionOutput"];
export type CdpIdentityResolutionMatchCriterionPartyIdentificationInfoOutput = Schemas["CdpIdentityResolutionMatchCriterionPartyIdentificationInfoOutput"];
export type CdpIdentityResolutionMatchRuleOutput = Schemas["CdpIdentityResolutionMatchRuleOutput"];
export type CdpIdentityResolutionOutputRepresentation = Schemas["CdpIdentityResolutionOutputRepresentation"];
export type CdpIdentityResolutionReconciliationFieldRuleOutput = Schemas["CdpIdentityResolutionReconciliationFieldRuleOutput"];
export type CdpIdentityResolutionReconciliationRuleOutput = Schemas["CdpIdentityResolutionReconciliationRuleOutput"];
export type CdpIdentityResolutionReconciliationSourceOutput = Schemas["CdpIdentityResolutionReconciliationSourceOutput"];
export type CdpIdentityResolutionRunNowInput = Schemas["CdpIdentityResolutionRunNowInput"];
export type CdpIdentityResolutionRunNowOutputRepresentation = Schemas["CdpIdentityResolutionRunNowOutputRepresentation"];
export type CdpIdentityResolutionsOutputRepresentation = Schemas["CdpIdentityResolutionsOutputRepresentation"];
export type CdpMinutelyScheduleInputRepresentation = {
  definitionName?: string;
  frequency: "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
  shouldForceSpecifiedMinutes?: boolean;
  time: Schemas["CdpTimeInputRepresentation"];
  daysOfWeek?: string[];
  interval?: number;
}
export type CdpMinutelyScheduleRepresentation = {
  frequency: "Hourly" | "None";
  nextScheduledDate: string;
  time: Schemas["CdpTimeRepresentation"];
  daysOfWeek?: string[];
  interval?: number;
}
export type CdpMlAggregatePredictConditionRepresentation = {
  fields: Schemas["CdpMlPredictionContributionFieldRepresentation"][];
  value: number;
  count?: number;
}
export type CdpMlAggregatePredictionRepresentation = Schemas["CdpMlAggregatePredictionRepresentation"];
export type CdpMlConfiguredModelCollectionRepresentation = Schemas["CdpMlConfiguredModelCollectionRepresentation"];
export type CdpMlConfiguredModelRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  actionableFields?: Schemas["CdpMlCustomizableFieldRepresentation"][];
  artifact?: Schemas["CdpAssetReferenceRepresentation"];
  capability?: "BinaryClassification" | "ChatCompletion" | "Completion" | "Embedding" | "Generic" | "MulticlassClassification" | "Regression";
  customizableFields?: Schemas["CdpMlCustomizableFieldRepresentation"][];
  description?: string;
  filter?: Schemas["CdpMlFilterRepresentation"];
  lastActivatedBy?: Schemas["CdpUserRepresentation"];
  lastActivatedDate?: string;
  metricsUrl?: string;
  parameterOverrides?: Schemas["CdpMlModelParameterOverrideBaseRepresentation"][];
  position?: number;
  status?: "Disabled" | "Enabled";
  workspace?: Schemas["CdpAssetReferenceRepresentation"];
}
export type CdpMlCustomizableFieldRepresentation = Schemas["CdpMlCustomizableFieldRepresentation"];
export type CdpMlFieldRepresentation = Schemas["CdpMlFieldRepresentation"];
export type CdpMlFilterCriterionBaseRepresentation = Schemas["CdpMlFilterCriterionBaseRepresentation"];
export type CdpMlFilterRepresentation = Schemas["CdpMlFilterRepresentation"];
export type CdpMlFilterValueRepresentation = Schemas["CdpMlFilterValueRepresentation"];
export type CdpMlFoundationalModelRepresentation = Schemas["CdpMlFoundationalModelRepresentation"];
export type CdpMlModelArtifactBaseRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  description?: string;
  inputFields?: Schemas["CdpMlModelInputFieldBaseRepresentation"][];
  isBatchSupported?: boolean;
  modelConnectorEndpoint?: Schemas["MlConnectorEndpointRepresentation"];
  modelCount?: number;
  modelType?: "Generative" | "Predictive" | "Unknown";
  modelDisabledReasons?: string[];
  outputFields?: Schemas["CdpMlModelOutputFieldRepresentation"][];
  parameters?: Schemas["CdpMlModelParameterDefinitionBaseRepresentation"][];
  runtimeType?: "External" | "Internal";
  setupContainer?: Schemas["CdpAssetReferenceRepresentation"];
  source?: Schemas["CdpAssetReferenceRepresentation"];
  sourceContainer?: Schemas["CdpAssetReferenceRepresentation"];
  sourceType?: "EdcNoCode" | "ModelConnector" | "OutOfTheBox";
  status?: "Disabled" | "Draft" | "Enabled";
  syncStatus?: "Error" | "NotSynced" | "Synced" | "Syncing";
}
export type CdpMlModelArtifactCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  modelArtifacts: Schemas["CdpMlModelArtifactBaseRepresentation"][];
}
export type CdpMlModelArtifactGenerativeRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  description?: string;
  inputFields?: Schemas["CdpMlModelInputFieldBaseRepresentation"][];
  isBatchSupported?: boolean;
  modelConnectorEndpoint?: Schemas["MlConnectorEndpointRepresentation"];
  modelCount?: number;
  modelType?: "Generative" | "Predictive" | "Unknown";
  modelDisabledReasons?: string[];
  outputFields?: Schemas["CdpMlModelOutputFieldRepresentation"][];
  parameters?: Schemas["CdpMlModelParameterDefinitionBaseRepresentation"][];
  runtimeType?: "External" | "Internal";
  setupContainer?: Schemas["CdpAssetReferenceRepresentation"];
  source?: Schemas["CdpAssetReferenceRepresentation"];
  sourceContainer?: Schemas["CdpAssetReferenceRepresentation"];
  sourceType?: "EdcNoCode" | "ModelConnector" | "OutOfTheBox";
  status?: "Disabled" | "Draft" | "Enabled";
  syncStatus?: "Error" | "NotSynced" | "Synced" | "Syncing";
  foundationalModel?: Schemas["CdpMlFoundationalModelRepresentation"];
  generativeModelType?: "Mixed" | "Text";
  inputTypes?: Schemas["MlModelInputTypeRepresentation"][];
  jsonModes?: Schemas["MlModelJsonModeRepresentation"][];
  modelCapabilities?: string[];
  outputTypes?: Schemas["MlModelOutputTypeRepresentation"][];
}
export type CdpMlModelArtifactInputRepresentation = Schemas["CdpMlModelArtifactInputRepresentation"];
export type CdpMlModelFieldBaseRepresentation = {
  label: string;
  name: string;
  dataType?: "Boolean" | "Date" | "Number" | "Text";
  position?: number;
}
export type CdpMlModelInputFieldBaseRepresentation = {
  label: string;
  name: string;
  dataType?: "Boolean" | "Date" | "Number" | "Text";
  position?: number;
  isDisparateImpact?: boolean;
  isPartitionField?: boolean;
  isSensitive?: boolean;
}
export type CdpMlModelOutputFieldRepresentation = {
  label: string;
  name: string;
  dataType?: "Boolean" | "Date" | "Number" | "Text";
  position?: number;
}
export type CdpMlModelParameterDefinitionBaseRepresentation = Schemas["CdpMlModelParameterDefinitionBaseRepresentation"];
export type CdpMlModelParameterOverrideBaseRepresentation = Schemas["CdpMlModelParameterOverrideBaseRepresentation"];
export type CdpMlPredictInputBaseRepresentation = Schemas["CdpMlPredictInputBaseRepresentation"];
export type CdpMlPredictResultRepresentation = Schemas["CdpMlPredictResultRepresentation"];
export type CdpMlPredictSettingsRepresentation = Schemas["CdpMlPredictSettingsRepresentation"];
export type CdpMlPredictionBaseRepresentation = Schemas["CdpMlPredictionBaseRepresentation"];
export type CdpMlPredictionContributionBaseRepresentation = Schemas["CdpMlPredictionContributionBaseRepresentation"];
export type CdpMlPredictionContributionFieldRepresentation = {
  label: string;
  name: string;
  customText?: Schemas["CdpMlPredictionFieldCustomTextRepresentation"];
  inputValue?: string;
  prescribedValue?: string;
}
export type CdpMlPredictionFieldCustomTextRepresentation = Schemas["CdpMlPredictionFieldCustomTextRepresentation"];
export type CdpMlSetupBaseInputRepresentation = Schemas["CdpMlSetupBaseInputRepresentation"];
export type CdpMlSetupBaseRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  active?: boolean;
  description?: string;
  numberOfPartitions?: number;
  partitionsUrl?: string;
  type?: "EdcNoCode" | "ModelConnector";
  version?: number;
}
export type CdpMlSetupPartitionBaseRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  description?: string;
  type?: "EdcNoCode" | "ModelConnector";
}
export type CdpMlSetupVersionCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  versions?: Schemas["CdpMlSetupBaseRepresentation"][];
}
export type CdpMlSetupVersionPartitionCollectionRepresentation = Schemas["CdpMlSetupVersionPartitionCollectionRepresentation"];
export type CdpMonthlyRelativeScheduleInputRepresentation = {
  definitionName?: string;
  frequency: "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
  shouldForceSpecifiedMinutes?: boolean;
  time: Schemas["CdpTimeInputRepresentation"];
  dayOfWeek?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
  weekOfMonth?: "First" | "Fourth" | "Last" | "Second" | "Third";
}
export type CdpMonthlyRelativeScheduleRepresentation = {
  frequency: "Hourly" | "None";
  nextScheduledDate: string;
  time: Schemas["CdpTimeRepresentation"];
  dayOfWeek?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
  weekOfMonth?: "First" | "Fourth" | "Last" | "Second" | "Third";
}
export type CdpNoneScheduleInputRepresentation = {
  definitionName?: string;
  frequency: "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
  shouldForceSpecifiedMinutes?: boolean;
  time: Schemas["CdpTimeInputRepresentation"];
}
export type CdpNoneScheduleRepresentation = {
  frequency: "Hourly" | "None";
  nextScheduledDate: string;
  time: Schemas["CdpTimeRepresentation"];
}
export type CdpObjectBaseInputRepresentation = Schemas["CdpObjectBaseInputRepresentation"];
export type CdpObjectBaseOutputRepresentation = Schemas["CdpObjectBaseOutputRepresentation"];
export type CdpObjectSourceTargetMapCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  objectSourceTargetMaps?: Schemas["CdpObjectSourceTargetMapRepresentation"][];
}
export type CdpObjectSourceTargetMapInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label?: string;
  name?: string;
  fieldMapping?: Schemas["CdpFieldSourceTargetMapInputRepresentation"][];
  sourceEntityDeveloperName?: string;
  targetEntityDeveloperName?: string;
}
export type CdpObjectSourceTargetMapRepresentation = Schemas["CdpObjectSourceTargetMapRepresentation"];
export type CdpPaginatedResponseBaseRepresentation = Schemas["CdpPaginatedResponseBaseRepresentation"];
export type CdpQueryDataGraphMetadataRepresentation = Schemas["CdpQueryDataGraphMetadataRepresentation"];
export type CdpQueryDataOutputRepresentation = Schemas["CdpQueryDataOutputRepresentation"];
export type CdpQueryInputRepresentation = Schemas["CdpQueryInputRepresentation"];
export type CdpQueryMetadataEntitiesOutputRepresentation = Schemas["CdpQueryMetadataEntitiesOutputRepresentation"];
export type CdpQueryMetadataEntityOutputRepresentation = Schemas["CdpQueryMetadataEntityOutputRepresentation"];
export type CdpQueryMetadataItemRepresentation = Schemas["CdpQueryMetadataItemRepresentation"];
export type CdpQueryMetadataOutputRepresentation = Schemas["CdpQueryMetadataOutputRepresentation"];
export type CdpQueryOutputRepresentation = Schemas["CdpQueryOutputRepresentation"];
export type CdpQueryOutputV2Representation = Schemas["CdpQueryOutputV2Representation"];
export type CdpQueryV2RowRepresentation = Schemas["CdpQueryV2RowRepresentation"];
export type CdpScheduleBaseRepresentation = Schemas["CdpScheduleBaseRepresentation"];
export type CdpScheduleInputRepresentation = Schemas["CdpScheduleInputRepresentation"];
export type CdpScheduleRepresentation = Schemas["CdpScheduleRepresentation"];
export type CdpSegmentActionInputRepresentation = Schemas["CdpSegmentActionInputRepresentation"];
export type CdpSegmentActionOutputRepresentation = {
  errors: Schemas["CdpErrorRepresentation"][];
  success: boolean;
  jobId?: string;
  partitionId?: string;
  publishStatus?: string;
  segmentApiName?: string;
  segmentId: string;
}
export type CdpSegmentContainerOutputRepresentation = Schemas["CdpSegmentContainerOutputRepresentation"];
export type CdpSegmentDbtInputRepresentation = Schemas["CdpSegmentDbtInputRepresentation"];
export type CdpSegmentDbtModelInputRepresentation = Schemas["CdpSegmentDbtModelInputRepresentation"];
export type CdpSegmentDbtModelOutputRepresentation = Schemas["CdpSegmentDbtModelOutputRepresentation"];
export type CdpSegmentDbtPipelineOutputRepresentation = Schemas["CdpSegmentDbtPipelineOutputRepresentation"];
export type CdpSegmentEinsteinGptSegmentsUIInputRepresentation = Schemas["CdpSegmentEinsteinGptSegmentsUIInputRepresentation"];
export type CdpSegmentInputRepresentation = Schemas["CdpSegmentInputRepresentation"];
export type CdpSegmentLookalikeInputRepresentation = Schemas["CdpSegmentLookalikeInputRepresentation"];
export type CdpSegmentLookalikeOutputRepresentation = Schemas["CdpSegmentLookalikeOutputRepresentation"];
export type CdpSegmentMemberOutputRepresentation = Schemas["CdpSegmentMemberOutputRepresentation"];
export type CdpSegmentMemberRowOutputRepresentation = Schemas["CdpSegmentMemberRowOutputRepresentation"];
export type CdpSegmentMembershipTableOutputRepresentation = Schemas["CdpSegmentMembershipTableOutputRepresentation"];
export type CdpSegmentOutputRepresentation = Schemas["CdpSegmentOutputRepresentation"];
export type CdpTimeInputRepresentation = Schemas["CdpTimeInputRepresentation"];
export type CdpTimeRepresentation = Schemas["CdpTimeRepresentation"];
export type CdpTimeZoneRepresentation = Schemas["CdpTimeZoneRepresentation"];
export type CdpTransformScheduleRepresentation = {
  type?: "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
  schedule?: Schemas["CdpScheduleRepresentation"];
}
export type CdpUserRepresentation = Schemas["CdpUserRepresentation"];
export type ChunkingConfigInputRepresentation = Schemas["ChunkingConfigInputRepresentation"];
export type ChunkingConfigUserValuesRepresentation = Schemas["ChunkingConfigUserValuesRepresentation"];
export type ChunkingConfigurationRepresentation = Schemas["ChunkingConfigurationRepresentation"];
export type ChunkingStrategyInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  chunkingConfigurationId?: number;
  sourceDmoDeveloperName?: string;
  sourceDmoFieldDeveloperName?: string;
  version?: string;
}
export type CloudProviderDetailsInputRepresentation = Schemas["CloudProviderDetailsInputRepresentation"];
export type CloudProviderDetailsRepresentation = Schemas["CloudProviderDetailsRepresentation"];
export type CommerceCloudConnectorRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
  dataSourceId?: string;
  instanceId?: string;
  tenantId?: string;
}
export type ComputeRelativeNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["ComputeRelativeParametersInputRepresentation"];
}
export type ComputeRelativeNodeRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Schemas["SchemaParametersRepresentation"];
  sources: string[];
  parameters?: Schemas["ComputeRelativeParametersRepresentation"];
}
export type ComputeRelativeParametersInputRepresentation = Schemas["ComputeRelativeParametersInputRepresentation"];
export type ComputeRelativeParametersRepresentation = Schemas["ComputeRelativeParametersRepresentation"];
export type ComputeRelativeSortParametersInputRepresentation = Schemas["ComputeRelativeSortParametersInputRepresentation"];
export type ComputeRelativeSortParametersRepresentation = Schemas["ComputeRelativeSortParametersRepresentation"];
export type ConfigInputRepresentation = Schemas["ConfigInputRepresentation"];
export type ConfigRepresentation = Schemas["ConfigRepresentation"];
export type ConnectionCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  connections: Schemas["ConnectionRepresentation"][];
}
export type ConnectionCommandActionInputRepresentation = Schemas["ConnectionCommandActionInputRepresentation"];
export type ConnectionCommandActionRepresentation = {
  errors: Schemas["CdpErrorRepresentation"][];
  success: boolean;
}
export type ConnectionCommandExistingActionInputRepresentation = Schemas["ConnectionCommandExistingActionInputRepresentation"];
export type ConnectionDatabaseCollectionRepresentation = Schemas["ConnectionDatabaseCollectionRepresentation"];
export type ConnectionDbSchemaCollectionInputRepresentation = Schemas["ConnectionDbSchemaCollectionInputRepresentation"];
export type ConnectionDbSchemaCollectionRepresentation = Schemas["ConnectionDbSchemaCollectionRepresentation"];
export type ConnectionFieldCollectionInputRepresentation = Schemas["ConnectionFieldCollectionInputRepresentation"];
export type ConnectionFieldCollectionRepresentation = Schemas["ConnectionFieldCollectionRepresentation"];
export type ConnectionFieldRepresentation = {
  creationType?: "Custom" | "Standard";
  format?: string;
  isCalculated?: boolean;
  isRequired: boolean;
  label?: string;
  name: string;
  originalType: string;
  type: "Boolean" | "Currency" | "Date" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Unsupported" | "Url";
}
export type ConnectionInputRepresentation = Schemas["ConnectionInputRepresentation"];
export type ConnectionModuleConfigInputRepresentation = Schemas["ConnectionModuleConfigInputRepresentation"];
export type ConnectionModuleConfigRepresentation = Schemas["ConnectionModuleConfigRepresentation"];
export type ConnectionObjectCollectionInputRepresentation = Schemas["ConnectionObjectCollectionInputRepresentation"];
export type ConnectionObjectCollectionRepresentation = Schemas["ConnectionObjectCollectionRepresentation"];
export type ConnectionObjectRepresentation = {
  name: string;
  attributes: Record<string, never>;
  objectType: "Activity" | "Comment" | "Group" | "Permission" | "StructuredData" | "UnstructuredData" | "User";
}
export type ConnectionPatchInputRepresentation = Schemas["ConnectionPatchInputRepresentation"];
export type ConnectionPreviewInputRepresentation = Schemas["ConnectionPreviewInputRepresentation"];
export type ConnectionPreviewRecordRepresentation = Schemas["ConnectionPreviewRecordRepresentation"];
export type ConnectionPreviewRepresentation = Schemas["ConnectionPreviewRepresentation"];
export type ConnectionRepresentation = Schemas["ConnectionRepresentation"];
export type ConnectionSchemaActionResponseRepresentation = {
  errors: Schemas["CdpErrorRepresentation"][];
  success: boolean;
}
export type ConnectionSchemaCollectionInputRepresentation = Schemas["ConnectionSchemaCollectionInputRepresentation"];
export type ConnectionSchemaCollectionRepresentation = Schemas["ConnectionSchemaCollectionRepresentation"];
/** @override Server NPEs (`Cannot invoke java.lang.CharSequence.length() because this.text is null`) when `label` is omitted from any field. Spec marks it optional but the upsert handler dereferences it unconditionally. */
export type ConnectionSchemaFieldInputRepresentation = {
  label: string;
  name?: string;
}
export type ConnectionSchemaFieldRepresentation = Schemas["ConnectionSchemaFieldRepresentation"];
export type ConnectionSchemaInputRepresentation = Schemas["ConnectionSchemaInputRepresentation"];
export type ConnectionSchemaRepresentation = Schemas["ConnectionSchemaRepresentation"];
export type ConnectionSitemapInputRepresentation = Schemas["ConnectionSitemapInputRepresentation"];
export type ConnectionSitemapRepresentation = Schemas["ConnectionSitemapRepresentation"];
export type ConnectionTestActionRepresentation = {
  errors: Schemas["CdpErrorRepresentation"][];
  success: boolean;
}
export type ConnectionTestInputRepresentation = Schemas["ConnectionTestInputRepresentation"];
export type ConnectorDetailsConfig = Schemas["ConnectorDetailsConfig"];
export type ConnectorDetailsRepresentation = Schemas["ConnectorDetailsRepresentation"];
export type ConnectorFeatureRepresentation = Schemas["ConnectorFeatureRepresentation"];
export type ConnectorInfoCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  connectorInfoList: Schemas["ConnectorInfoRepresentation"][];
}
export type ConnectorInfoRepresentation = Schemas["ConnectorInfoRepresentation"];
export type ConnectorInputRepresentation = Schemas["ConnectorInputRepresentation"];
export type ConnectorMetadataRepresentation = Schemas["ConnectorMetadataRepresentation"];
export type ConnectorPatchDetailsConfig = Schemas["ConnectorPatchDetailsConfig"];
export type ConnectorPatchInputRepresentation = Schemas["ConnectorPatchInputRepresentation"];
export type ConnectorRepresentation = Schemas["ConnectorRepresentation"];
export type ConnectorsFrameworkConnectionSchemaFieldInputRepresentation = {
  label?: string;
  name?: string;
  currencyIsoCode?: boolean;
  dataType?: "Boolean" | "Currency" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
}
export type ConnectorsFrameworkConnectionSchemaFieldRepresentation = {
  label?: string;
  name?: string;
  currencyIsoCode?: boolean;
  dataType?: "Boolean" | "Currency" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
}
export type ConnectorsFrameworkConnectionSchemaInputRepresentation = {
  fields?: Schemas["ConnectorsFrameworkConnectionSchemaFieldInputRepresentation"][];
}
export type ConnectorsFrameworkConnectionSchemaRepresentation = {
  availabilityStatus?: "Available" | "InUse";
  fields?: Schemas["ConnectorsFrameworkConnectionSchemaFieldRepresentation"][];
}
export type ContactPointAttributeInputRepresentation = Schemas["ContactPointAttributeInputRepresentation"];
export type ContactPointAttributesConfigInputRepresentation = Schemas["ContactPointAttributesConfigInputRepresentation"];
export type ContactPointConfigInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  contactPoints?: Schemas["ActivationContactPointInputRepresentation"][];
}
export type ContactPointConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  contactPointEntityId?: string;
  contactPointEntityName?: string;
  contactPointPath?: string;
  fieldConfig?: Schemas["ActivationContactPointsFieldConfigRepresentation"];
  filterExpression?: Schemas["ContactPointFilterExpressionRepresentation"];
  queryPathConfig?: Schemas["QueryPathConfigListRepresentation"];
  sourceConfig?: Schemas["ActivationContactPointsSourceConfigRepresentation"];
  type?: "Email" | "Maid" | "Ott" | "Phone" | "Push" | "SubscriberKeyEmail" | "SubscriberKeyPhone" | "WhatsApp";
}
export type ContactPointFilterExpressionInputRepresentation = Schemas["ContactPointFilterExpressionInputRepresentation"];
export type ContactPointFilterExpressionRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  contactPointDmoFilters?: Schemas["DmoFilterRepresentation"][];
}
export type ContactPointSourceInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  dataSourceId?: string;
  dataSourcePreference?: "ContactPointPrefAny" | "ContactPointPrefBusiness" | "ContactPointPrefPersonal" | "ContactPointPrefPrimary";
  dataSourcePriority?: number;
}
export type ContactPointSourcesConfigInputRepresentation = Schemas["ContactPointSourcesConfigInputRepresentation"];
export type ContactPointsConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  contactPoints?: Schemas["ContactPointConfigRepresentation"][];
}
export type ContextFieldConfigurationInputRepresentation = {
  aliasName?: string;
  dmoDeveloperName?: string;
  dmoFieldDeveloperName?: string;
  relationships?: Schemas["SourceTargetRelationshipInputRepresentation"][];
}
export type ContextFieldConfigurationRepresentation = {
  aliasName?: string;
  dmoDeveloperName?: string;
  dmoFieldDeveloperName?: string;
  relationships?: Schemas["FieldRelationshipsPathRepresentation"][];
}
export type CrmConnectionFieldRepresentation = {
  creationType: "Custom" | "Standard";
  format?: string;
  isCalculated: boolean;
  isRequired: boolean;
  label: string;
  name: string;
  originalType: string;
  type: "Boolean" | "Currency" | "Date" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Unsupported" | "Url";
}
export type CrmConnectionInputRepresentation = {
  organizationId: string;
}
export type CrmConnectionObjectRepresentation = {
  name: string;
  creationType: "Custom" | "Standard";
  hasChangeEvent: boolean;
  label: string;
}
export type CrmConnectionRepresentation = {
  alias?: string;
  connectionStatus?: "Active" | "Deleting" | "Error" | "InActive" | "Processing" | "SchemaRequired";
  dataSource?: string;
  organizationId?: string;
}
export type CrmConnectorDetailsConfig = {
  name?: string;
  sourceObject?: string;
}
export type CrmConnectorDetailsRepresentation = {
  category: "Engagement" | "Other" | "Profile";
  name: string;
  sourceObject?: string;
}
export type CuratedEntityInputRepresentation = Schemas["CuratedEntityInputRepresentation"];
export type CustomUseCaseTemplateAnalysisConfigRepresentation = Schemas["CustomUseCaseTemplateAnalysisConfigRepresentation"];
export type CustomUseCaseTemplateColumnRepresentation = Schemas["CustomUseCaseTemplateColumnRepresentation"];
export type CustomUseCaseTemplateInputRepresentation = Schemas["CustomUseCaseTemplateInputRepresentation"];
export type CustomUseCaseTemplateQueryConfig = Schemas["CustomUseCaseTemplateQueryConfig"];
export type CustomUseCaseTemplateQueryInputRepresentation = Schemas["CustomUseCaseTemplateQueryInputRepresentation"];
export type CustomUseCaseTemplateQueryParamConfig = Schemas["CustomUseCaseTemplateQueryParamConfig"];
export type CustomUseCaseTemplateQueryParamRepresentation = Schemas["CustomUseCaseTemplateQueryParamRepresentation"];
export type CustomUseCaseTemplateTableConfig = Schemas["CustomUseCaseTemplateTableConfig"];
export type CustomUseCaseTemplateTableInputRepresentation = Schemas["CustomUseCaseTemplateTableInputRepresentation"];
export type DMOFilterConfigInputRepresentation = Schemas["DMOFilterConfigInputRepresentation"];
export type DMOFilterInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  entityFilter?: Schemas["BaseComparisonInputRepresentation"][];
  entityFilterType?: string;
  entityName?: string;
  filterLimit?: Schemas["DmoFilterLimitInputRepresentation"];
  inheritedFilter?: Schemas["BaseComparisonInputRepresentation"][];
  inheritedFilterType?: string;
  queryPathConfigForActivateOnToContainer?: Schemas["QueryPathConfigListInputRepresentation"][];
  queryPathConfigFromContainerToEntity?: Schemas["QueryPathConfigListInputRepresentation"][];
}
export type DailyScheduleInputRepresentation = {
  definitionName?: string;
  frequency: "Daily";
  timeInfo?: Schemas["CdpTimeInputRepresentation"];
  daysOfWeek?: string[];
  interval?: number;
  runFrom?: Schemas["CdpTimeInputRepresentation"];
  runTo?: Schemas["CdpTimeInputRepresentation"];
}
export type DailyScheduleRepresentation = {
  frequency: "Daily";
  nextScheduledDate?: string;
  timeInfo?: Schemas["TimeOutputRepresentation"];
  daysOfWeek?: string[];
  interval?: number;
  runFrom?: Schemas["TimeOutputRepresentation"];
  runTo?: Schemas["TimeOutputRepresentation"];
}
export type DataActionConditionOutputRepresentation = Schemas["DataActionConditionOutputRepresentation"];
export type DataActionEnrichmentOutputRepresentation = Schemas["DataActionEnrichmentOutputRepresentation"];
export type DataActionProjectedFieldOutputRepresentation = Schemas["DataActionProjectedFieldOutputRepresentation"];
export type DataActionRelationshipEdgeOutputRepresentation = Schemas["DataActionRelationshipEdgeOutputRepresentation"];
export type DataActionSourceOutputRepresentation = Schemas["DataActionSourceOutputRepresentation"];
export type DataCleanRoomAWSSourceConfigInputRepresentation = {
  accountId?: string;
  supportedRegions?: string[];
}
export type DataCleanRoomAWSSourceConfigRepresentation = {
  accountId?: string;
  supportedRegions?: string[];
}
export type DataCleanRoomAcceptInvitationInputRepresentation = Schemas["DataCleanRoomAcceptInvitationInputRepresentation"];
export type DataCleanRoomCollaborationCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  collaborations?: Schemas["DataCleanRoomCollaborationRepresentation"][];
  limit?: number;
  offset?: number;
}
export type DataCleanRoomCollaborationInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label: string;
  name?: string;
  apiKey?: string;
  dataCloudOrgId: string;
  providerDevName: string;
  specificationDevName: string;
  templateName: string;
  templateVersionId?: string;
}
export type DataCleanRoomCollaborationRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  apiKey?: string;
  dataSpaceName?: string;
  description?: string;
  members?: Schemas["DataCleanRoomMemberRepresentation"][];
  status?: "Active" | "Error" | "Inactive";
  templateVersion?: Schemas["DataCleanRoomTemplateRepresentation"];
}
export type DataCleanRoomDCSourceConfigInputRepresentation = {
  dataCloudOrgId?: string;
  domainUrl?: string;
  offCoreTenantId?: string;
}
export type DataCleanRoomDCSourceConfigRepresentation = {
  dataCloudOrgId?: string;
  domainUrl?: string;
  offCoreTenantId?: string;
}
export type DataCleanRoomDataSpecificationInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label: string;
  name?: string;
  dataMapping: Schemas["UseCaseTemplateMappingRepresentation"][];
  memberType: string;
  ownerOrgId: string;
  templateName: string;
  templateType: "Custom" | "Salesforce";
  templateVersionId: string;
  useCaseType: "Custom" | "Overlap";
}
export type DataCleanRoomDataSpecificationRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  dataMapping?: Schemas["UseCaseTemplateMappingRepresentation"];
  dataSpaceName?: string;
  description?: string;
  memberType?: "Consumer" | "Provider";
  ownerOrgId?: string;
  status?: "Active" | "Error" | "Inactive" | "Processing";
  templateVersion?: Schemas["DataCleanRoomTemplateRepresentation"];
}
export type DataCleanRoomMemberRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  invitationId?: string;
  invitationStatus?: "Accept_Error" | "Accept_Initiated" | "Accepted" | "Pending" | "Received" | "Reject_Error" | "Reject_Initiated" | "Rejected" | "Send_Error" | "Sent";
  memberId?: string;
  memberOrgId?: string;
  memberStatus?: "Active" | "Inactive" | "Mapping_Incomplete";
  memberType?: "Consumer" | "Provider";
  providerId?: string;
  specificationId?: string;
}
export type DataCleanRoomProviderCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  limit?: number;
  offset?: number;
  providers?: Schemas["DataCleanRoomProviderRepresentation"][];
}
export type DataCleanRoomProviderInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label: string;
  name?: string;
  dataCloudOrgId?: string;
  domainUrl?: string;
  logoUrl?: string;
  offCoreTenantId?: string;
  providerName?: string;
  source?: "AWS" | "DATA_CLOUD";
  sourceConfiguration?: Schemas["DataCleanRoomProviderSourceConfigInputRepresentation"];
  templateJson?: Schemas["CustomUseCaseTemplateInputRepresentation"];
  templateNames?: string[];
  templateType?: "Custom" | "Salesforce";
  useCaseTypeConfig?: Schemas["DataCleanRoomUseCaseTypeInputRepresentation"][];
}
export type DataCleanRoomProviderRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  creationType?: "Packaged" | "Peer";
  dataCloudOrgId?: string;
  description?: string;
  domainUrl?: string;
  logoUrl?: string;
  offCoreTenantId?: string;
  providerName?: string;
  source?: "AWS" | "DATA_CLOUD";
  sourceConfiguration?: Schemas["DataCleanRoomProviderSourceConfigRepresentation"];
  templateNames?: string[];
  useCaseTypeConfig?: Schemas["DataCleanRoomUseCaseTypeRepresentation"];
}
export type DataCleanRoomProviderSourceConfigInputRepresentation = Schemas["DataCleanRoomProviderSourceConfigInputRepresentation"];
export type DataCleanRoomProviderSourceConfigRepresentation = Schemas["DataCleanRoomProviderSourceConfigRepresentation"];
export type DataCleanRoomQueryJobCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  limit?: number;
  offset?: number;
  queryJobs?: Schemas["DataCleanRoomQueryJobRepresentation"][];
}
export type DataCleanRoomQueryJobInputRepresentation = Schemas["DataCleanRoomQueryJobInputRepresentation"];
export type DataCleanRoomQueryJobRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  completedDate?: string;
  errorCode?: string;
  errorMessage?: string;
  executedBy?: string;
  outputDMOName?: string;
  queryParam?: { [key: string]: string };
  reportId?: string;
  reportName?: string;
  segmentNames?: string[];
  status?: "Created" | "Failed" | "Running" | "Success";
  triggeredDate?: string;
}
export type DataCleanRoomRejectInvitationInputRepresentation = Schemas["DataCleanRoomRejectInvitationInputRepresentation"];
export type DataCleanRoomSpecificationCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  cleanroomSpecifications?: Schemas["DataCleanRoomDataSpecificationRepresentation"][];
  limit?: number;
  offset?: number;
}
export type DataCleanRoomTemplateCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  limit?: number;
  offset?: number;
  templates?: Schemas["DataCleanRoomTemplateRepresentation"][];
}
export type DataCleanRoomTemplateRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  configuration?: Schemas["UseCaseTemplateConfigRepresentation"];
  description?: string;
  providerId?: string;
  queryTemplate?: { [key: string]: Record<string, never> };
  templateType?: "Custom" | "Salesforce";
  templateVersion?: string;
  useCaseType?: "Custom" | "Overlap";
}
export type DataCleanRoomUseCaseTypeInputRepresentation = Schemas["DataCleanRoomUseCaseTypeInputRepresentation"];
export type DataCleanRoomUseCaseTypeRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  useCaseTypes?: string[];
}
export type DataConnectionInputRepresentation = {
  credentials: Schemas["DataConnectionParameterInputRepresentation"][];
  method: "Egress" | "Ingress";
  parameters: Schemas["DataConnectionParameterInputRepresentation"][];
}
export type DataConnectionParameterInputRepresentation = {
  paramName: string;
  value: string;
}
export type DataConnectionParameterRepresentation = Schemas["DataConnectionParameterRepresentation"];
export type DataConnectionRepresentation = {
  connectorLabel?: string;
  credentials?: Schemas["DataConnectionParameterRepresentation"][];
  deletable?: boolean;
  editable?: boolean;
  iconUrl?: string;
  lastDataChangeErrorCode?: string;
  lastSyncDate?: string;
  method?: "Egress" | "Ingress";
  params?: Schemas["DataConnectionParameterRepresentation"][];
  status?: "Connected" | "Disconnected" | "Failed" | "NeedsReAuth";
  syncStatus?: "Failure" | "InProgress" | "InvalidCredentials" | "None" | "Pending" | "Success";
}
export type DataConnectorDetailsConfig = {
  name?: string;
}
export type DataConnectorDetailsRepresentation = {
  category: "Engagement" | "Other" | "Profile";
  name: string;
}
export type DataConnectorInputRepresentation = Schemas["DataConnectorInputRepresentation"];
export type DataConnectorRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
}
export type DataCustomCodeInputRep = {
  templateDevName?: string;
}
export type DataGraphFieldRepresentation = Schemas["DataGraphFieldRepresentation"];
export type DataGraphIdsDmoFieldRepresentation = Schemas["DataGraphIdsDmoFieldRepresentation"];
export type DataGraphIdsDmoRepresentation = Schemas["DataGraphIdsDmoRepresentation"];
export type DataGraphObjectDataRepresentation = Schemas["DataGraphObjectDataRepresentation"];
export type DataGraphRelationshipRepresentation = Schemas["DataGraphRelationshipRepresentation"];
export type DataGraphValuesDmoFieldRepresentation = Schemas["DataGraphValuesDmoFieldRepresentation"];
export type DataGraphValuesDmoRepresentation = Schemas["DataGraphValuesDmoRepresentation"];
export type DataKitAsyncRepresentation = Schemas["DataKitAsyncRepresentation"];
export type DataKitComponentCollectionRepresentation = Schemas["DataKitComponentCollectionRepresentation"];
export type DataKitComponentDependencyCollectionRepresentation = Schemas["DataKitComponentDependencyCollectionRepresentation"];
export type DataKitComponentDependencyRepresentation = Schemas["DataKitComponentDependencyRepresentation"];
export type DataKitComponentDeploymentStatus = Schemas["DataKitComponentDeploymentStatus"];
export type DataKitComponentDeploymentStatusRepresentation = Schemas["DataKitComponentDeploymentStatusRepresentation"];
export type DataKitComponentInfo = Schemas["DataKitComponentInfo"];
export type DataKitComponentInfoBaseInputRepresentation = {
  name?: string;
  label?: string;
}
export type DataKitComponentInfoBaseRepresentation = {
  name?: string;
  label?: string;
}
export type DataKitComponentInfoBundleInputRepresentation = {
  name?: string;
  connectorType?: "AccountEngagement" | "Commerce" | "Crm" | "External" | "IngestApi" | "Mc" | "MoreConnectors" | "S3" | "StreamingApp";
  streams?: Schemas["CdpDataKitStream"][];
}
export type DataKitComponentInfoBundleRepresentation = {
  name?: string;
  connectorType?: "AccountEngagement" | "Commerce" | "Crm" | "External" | "IngestApi" | "Mc" | "MoreConnectors" | "S3" | "StreamingApp";
  streams?: Schemas["DataKitStreamRepresentation"][];
}
export type DataKitComponentInfoInputRepresentation = Schemas["DataKitComponentInfoInputRepresentation"];
export type DataKitComponentInfoRepresentation = Schemas["DataKitComponentInfoRepresentation"];
export type DataKitComponentInputRepresentation = Schemas["DataKitComponentInputRepresentation"];
export type DataKitComponentRepresentation = Schemas["DataKitComponentRepresentation"];
export type DataKitDefaultComponentInfo = {
  componentType?: "ActivationTarget" | "AnalyticsDashboard" | "AnalyticsVisualization" | "AnalyticsWorkspace" | "CalculatedInsight" | "CopyFieldEnrichment" | "CurrencyConfigObject" | "DataAction" | "DataActionTarget" | "DataCleanRoomDataSpecDef" | "DataCleanRoomProvider" | "DataConnection" | "DataCustomCode" | "DataGraph" | "DataLakeObject" | "DataModelObject" | "DataSemanticSearch" | "DataShare" | "DataStreamBundle" | "DataTransform" | "EngagementSignal" | "FiscalCalendarConfigObject" | "IdentityResolution" | "IdpConfiguration" | "InternalDataConnector" | "IrRelatedListEnrichment" | "MarketSegment" | "MarketSegmentActivation" | "MlConfiguredModel" | "MlPredictionJob" | "MlRetriever" | "PersnlBatchDecision" | "PersonalizationObjective" | "PersonalizationPoint" | "PersonalizationRecommender" | "PersonalizationSchema" | "SecondaryIndex" | "SemanticModel" | "TuaTemplatedObject";
  developerName?: string;
  label?: string;
}
export type DataKitDeployActivationTargetRepresentation = {
  componentName?: string;
  targetDisplayName?: string;
}
export type DataKitDeployComponentConfigCopyField = {
  templateDevName?: string;
}
export type DataKitDeployComponentConfigForIRRelatedList = {
  developerName?: string;
  label?: string;
}
export type DataKitDeployComponentConfigIdentityResolutionInput = {
  dataKitDevName?: string;
  dataSpaceName?: string;
  identityResolutionDevName?: string;
  label?: string;
}
export type DataKitDeployComponentConfigSemanticModelInputRepresentation = {
  apiName?: string;
  baseSDMs?: string[];
  dataSpaceName?: string;
  displayName?: string;
}
export type DataKitDeployDataCleanRoomMappingRepresentation = {
  componentName?: string;
  dataSpaceName?: string;
}
export type DataKitDeployDataCleanRoomProviderRepresentation = {
  componentName?: string;
  packageName?: string;
}
export type DataKitDeployDataConnectionRepresentation = {
  name?: string;
  newCredentials?: Schemas["DataConnectionParameterInputRepresentation"][];
  overrideLabel?: string;
  overrideParameters?: Schemas["DataConnectionParameterInputRepresentation"][];
}
export type DataKitDeployDataGraphInputRepresentation = {
  dataSpaceName?: string;
  label?: string;
  name?: string;
  primaryDMO?: string;
  templateDevName?: string;
}
export type DataKitDeployDataTransformRepresentation = {
  apiName?: string;
  componentProperties?: { [key: string]: string };
  connection?: string;
  currencyIsoCode?: string;
  dataObjectOverrides?: Schemas["DataTransformDataObjectOverride"][];
  dataSpaceName?: string;
  dataTransformDevName?: string;
  dataTransformType?: string;
  definitionOverrides?: Schemas["DataTransformDefinitionOverride"][];
  label?: string;
}
export type DataKitDeployInputRepresentation = {
  dataSpaceName?: string;
  label?: string;
  name?: string;
  templateName?: string;
}
export type DataKitDeployMarketActivationRepresentation = {
  componentName?: string;
  dataKitName?: string;
  targetDisplayName?: string;
}
export type DataKitDeployMarketSegmentRepresentation = {
  dataKitName?: string;
  dataSpaceName?: string;
  label?: string;
  name?: string;
  targetDisplayName?: string;
  targetSegmentDeveloperName?: string;
}
export type DataKitDeployPersonalizationInputRepresentation = {
  apiName?: string;
  dataSpaceName?: string;
  label?: string;
  templateDeveloperName?: string;
}
export type DataKitDetails = Schemas["DataKitDetails"];
export type DataKitInputRepresentation = Schemas["DataKitInputRepresentation"];
export type DataKitKQConfigRepresentation = Schemas["DataKitKQConfigRepresentation"];
export type DataKitOutputRepresentation = Schemas["DataKitOutputRepresentation"];
export type DataKitPatchInputRepresentation = Schemas["DataKitPatchInputRepresentation"];
export type DataKitRepresentation = Schemas["DataKitRepresentation"];
export type DataKitStreamRepresentation = Schemas["DataKitStreamRepresentation"];
export type DataKitUnDeployComponentDetails = Schemas["DataKitUnDeployComponentDetails"];
export type DataKitUnDeployInputRepresentation = Schemas["DataKitUnDeployInputRepresentation"];
export type DataLakeFieldInputRepresentation = Schemas["DataLakeFieldInputRepresentation"];
export type DataLakeFieldRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  dataType?: "Boolean" | "Currency" | "Date" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Unsupported" | "Url";
  isPrimaryKey?: boolean;
}
export type DataLakeObjectCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  dataLakeObjects: Schemas["DataLakeObjectRepresentation"][];
}
/** @override Spec bugs: recordModifiedFieldName and orgUnitIdentifierFieldName are not required for all DLO types */
export type DataLakeObjectInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label: string;
  name: string;
  category: "Engagement" | "Other" | "Profile";
  eventDateTimeFieldName?: string;
  fields?: Schemas["DataObjectFieldInputRepresentation"][];
  recordModifiedFieldName?: string;
  type?: "DataLakeObject" | "DataModelObject";
  dataLakeFieldInputRepresentations?: Schemas["DataLakeFieldInputRepresentation"][];
  dataspaceInfo: Schemas["DataSpaceInputRepresentation"][];
  orgUnitIdentifierFieldName?: string;
}
export type DataLakeObjectPatchInputRepresentation = Schemas["DataLakeObjectPatchInputRepresentation"];
export type DataLakeObjectRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  category: "Directory_Table" | "Engagement" | "Other" | "Profile";
  dataLakeFieldInfoRepresentation: Schemas["DataLakeFieldRepresentation"][];
  dataSpaceInfo: Schemas["DataSpaceRepresentation"][];
  eventDateTimeFieldName?: string;
  orgUnitIdentifierFieldName?: string;
  recordModifiedFieldName?: string;
  status: "Active" | "Deleting" | "Error" | "Inactive" | "Processing";
}
export type DataModelObjectCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  dataModelObject?: Schemas["DataModelObjectRepresentation"][];
}
export type DataModelObjectInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label?: string;
  name?: string;
  category?: "Engagement" | "Other" | "Profile";
  eventDateTimeFieldName?: string;
  fields?: Schemas["DataObjectFieldInputRepresentation"][];
  recordModifiedFieldName?: string;
  type?: "DataLakeObject" | "DataModelObject";
  status?: "Active" | "Error" | "Inactive" | "Processing";
}
export type DataModelObjectRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  category?: "Engagement" | "Other" | "Profile";
  eventDateTimeFieldName?: string;
  fields?: Schemas["DataObjectFieldRepresentation"][];
  recordModifiedFieldName?: string;
  type?: "DataLakeObject" | "DataModelObject";
  status?: "Active" | "Error" | "Inactive" | "Processing";
}
/** @override Spec bugs: API expects `dataType` instead of `type` for field data type; isDynamicLookup missing but required for PATCH to work */
export type DataObjectFieldInputRepresentation = {
  isPrimaryKey: boolean;
  keyQualifierFieldName?: string;
  label: string;
  name: string;
  type?: "Boolean" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
  dataType: "Boolean" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
  isDynamicLookup: boolean;
}
export type DataObjectFieldRepresentation = Schemas["DataObjectFieldRepresentation"];
export type DataObjectInputRepresentation = {
  dataSpaceName?: string;
  description?: string;
  label?: string;
  name?: string;
  category?: "Engagement" | "Other" | "Profile";
  eventDateTimeFieldName?: string;
  fields?: Schemas["DataObjectFieldInputRepresentation"][];
  recordModifiedFieldName?: string;
  type?: "DataLakeObject" | "DataModelObject";
}
export type DataObjectRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  category?: "Engagement" | "Other" | "Profile";
  eventDateTimeFieldName?: string;
  fields?: Schemas["DataObjectFieldRepresentation"][];
  recordModifiedFieldName?: string;
  type?: "DataLakeObject" | "DataModelObject";
}
export type DataSourceNameConfigInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  dataSourceName: string;
}
export type DataSpaceCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  dataSpaces: Schemas["DataSpaceInfoRepresentation"][];
}
export type DataSpaceFilterConditionApiConfig = Schemas["DataSpaceFilterConditionApiConfig"];
export type DataSpaceFilterConditionCollectionRepresentation = Schemas["DataSpaceFilterConditionCollectionRepresentation"];
export type DataSpaceFilterConditionInputRepresentation = Schemas["DataSpaceFilterConditionInputRepresentation"];
export type DataSpaceFilterConditionRepresentation = Schemas["DataSpaceFilterConditionRepresentation"];
export type DataSpaceFilterInputRepresentation = Schemas["DataSpaceFilterInputRepresentation"];
export type DataSpaceFilterRepresentation = Schemas["DataSpaceFilterRepresentation"];
export type DataSpaceInfoRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  description: string;
  prefix?: string;
  status: "Active" | "Error" | "Processing";
}
export type DataSpaceInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  filter?: Schemas["FilterExpressionDatSpaceInputRepresentation"];
}
export type DataSpaceMemberCollectionInputRepresentation = Schemas["DataSpaceMemberCollectionInputRepresentation"];
export type DataSpaceMemberCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  members: Schemas["DataSpaceMemberRepresentation"][];
}
export type DataSpaceMemberErrorRepresentation = Schemas["DataSpaceMemberErrorRepresentation"];
export type DataSpaceMemberInputListRepresentation = Schemas["DataSpaceMemberInputListRepresentation"];
export type DataSpaceMemberInputRepresentation = Schemas["DataSpaceMemberInputRepresentation"];
export type DataSpaceMemberPutCollectionRepresentation = Schemas["DataSpaceMemberPutCollectionRepresentation"];
export type DataSpaceMemberRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filter?: Schemas["DataSpaceFilterRepresentation"];
  memberName: string;
  status: "Active" | "Error" | "Processing";
}
export type DataSpacePatchInputRepresentation = Schemas["DataSpacePatchInputRepresentation"];
export type DataSpaceRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filter?: Schemas["DataSpaceFilterRepresentation"];
}
export type DataStreamActionResponseRepresentation = {
  errors: Schemas["CdpErrorRepresentation"][];
  success: boolean;
  jobId?: string;
}
export type DataStreamCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  dataStreams: Schemas["DataStreamDetailedRepresentation"][];
}
export type DataStreamDetailedRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  advancedAttributes?: { [key: string]: string };
  connectorInfo?: Schemas["ConnectorRepresentation"];
  dataAccessMode?: "Direct_Access" | "Ingest";
  dataLakeObjectInfo?: Schemas["DataLakeObjectRepresentation"];
  dataSource?: string;
  dataStreamType?: "AccountEngagement" | "Azure_Blob" | "Commerce_Bundle" | "Commerce_Data_Kit" | "ConnectorFramework" | "Cs" | "Events" | "Events_Package" | "External" | "FileUpload" | "Google_Cloud_Storage" | "IngestAPI" | "IngestAPI_Package" | "Mc" | "Mcde" | "Mcis" | "Package" | "PackageNDataKit" | "S3" | "S3_Arn" | "Sfdc" | "Sfdc_Bundle" | "Sfdc_Package_Kit" | "Sftp";
  lastAddedRecords?: number;
  lastProcessedRecords?: number;
  lastRefreshDate?: string;
  lastRunStatus?: "Cancelled" | "Extracting" | "Failure" | "In Progress" | "None" | "Pending" | "Success";
  mappings?: Schemas["DataStreamFieldMappingRepresentation"][];
  recordId?: string;
  refreshConfig?: Schemas["RefreshConfigRepresentation"];
  sourceFields?: Schemas["DataStreamSourceFieldRepresentation"][];
  status?: "Active" | "Deleting" | "Error" | "Processing";
  totalRecords?: number;
}
/** @override Asymmetric input/output: POST input uses `sourceFieldLabel`, but GET responses echo `sourceFieldName` for the same field. Round-tripping GET→POST without renaming fails with JSON_PARSER_ERROR. Also: targetFieldReturntype is required by the create handler — when omitted, the mapping is silently dropped from the saved data stream with no error. */
export type DataStreamFieldMappingInputRepresentation = {
  sourceFieldLabel?: string;
  targetFieldName?: string;
  targetFieldReturntype: "Boolean" | "Currency" | "Date" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
  transformationFormula?: string;
}
export type DataStreamFieldMappingRepresentation = Schemas["DataStreamFieldMappingRepresentation"];
export type DataStreamFrequencyInputRepresentation = Schemas["DataStreamFrequencyInputRepresentation"];
export type DataStreamFrequencyRepresentation = Schemas["DataStreamFrequencyRepresentation"];
/** @override Spec bugs: dataLakeObjectInfo should accept single or array; mappings and sourceFields are not required for all connector types. Routing note: dataAccessMode='Direct_Access' is required for federated/BYOL connectors (Snowflake, Databricks, BigQuery, Iceberg) — without it the server returns `400 INTERNAL_ERROR: Unable to post Data Stream: DATA_CONNECTORS is not supported` even when the connector is GA. Direct_Access streams must also OMIT the top-level `datasource` field (otherwise: `DataSource name should be empty for External data streams`); the connection binding is established via connectorInfo.connectorDetails.name instead. */
export type DataStreamInputRepresentation = {
  advancedAttributes?: { [key: string]: string };
  connectorInfo: Schemas["ConnectorInputRepresentation"];
  currencyIsoCodeInfo?: Record<string, never>;
  dataAccessMode?: "Direct_Access" | "Ingest";
  dataLakeObjectInfo?: DataLakeObjectInputRepresentation | DataLakeObjectInputRepresentation[];
  datasource?: string;
  datastreamType?: string;
  existingDataLakeObjectInfo?: Schemas["ExistingDataLakeObjectInputRepresentation"];
  label: string;
  mappings?: Schemas["DataStreamFieldMappingInputRepresentation"][];
  name: string;
  refreshConfig: Schemas["RefreshConfigInputRepresentation"];
  sourceFields?: Schemas["DataStreamSourceFieldInputRepresentation"][];
}
export type DataStreamPatchInputRepresentation = Schemas["DataStreamPatchInputRepresentation"];
/** @override Runtime list/get responses include `dataSource` although the spec omits it */
export type DataStreamRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  dataLakeObjectInfo: Schemas["DataLakeObjectRepresentation"];
  recordId: string;
  status: "Active" | "Deleting" | "Error" | "Processing";
  dataSource?: string;
}
/** @override Asymmetric input/output: POST input uses `dataType` (camelCase), but GET responses echo `datatype` (lowercase) for the same field. Round-tripping GET→POST without renaming fails with `JSON_PARSER_ERROR: Unrecognized field 'datatype'`. */
export type DataStreamSourceFieldInputRepresentation = {
  dataType?: string;
  format?: string;
  name?: string;
}
export type DataStreamSourceFieldRepresentation = Schemas["DataStreamSourceFieldRepresentation"];
export type DataTransformCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  dataTransforms: Schemas["DataTransformRepresentation"][];
}
export type DataTransformDataObjectOverride = Schemas["DataTransformDataObjectOverride"];
export type DataTransformDefinitionInputRepresentation = Schemas["DataTransformDefinitionInputRepresentation"];
export type DataTransformDefinitionOverride = Schemas["DataTransformDefinitionOverride"];
export type DataTransformDefinitionRepresentation = Schemas["DataTransformDefinitionRepresentation"];
export type DataTransformInputRepresentation = Schemas["DataTransformInputRepresentation"];
export type DataTransformNodeInputRepresentation = Schemas["DataTransformNodeInputRepresentation"];
export type DataTransformNodeRepresentation = Schemas["DataTransformNodeRepresentation"];
export type DataTransformRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  actionUrls?: Schemas["BatchActionRepresentation"];
  dataSpaceName?: string;
  definition?: unknown;
  description?: string;
  lastRunDate?: string;
  lastRunErrorCode?: Schemas["CdpErrorRepresentation"];
  lastRunStatus?: "Canceled" | "Failure" | "InProgress" | "None" | "PartialFailure" | "PartiallyCanceled" | "Pending" | "Success";
  schedule?: Schemas["ScheduleRepresentation"];
  status?: "Active" | "Deleting" | "Error" | "Processing";
  type?: "BATCH" | "STREAMING";
  version?: number;
}
export type DataTransformRunHistoryBaseRepresentation = Schemas["DataTransformRunHistoryBaseRepresentation"];
export type DataTransformRunHistoryCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  histories: Schemas["DataTransformRunHistoryBaseRepresentation"][];
}
export type DataTransformValidationRepresentation = Schemas["DataTransformValidationRepresentation"];
export type DatakitComponentDetails = Schemas["DatakitComponentDetails"];
export type DateComparisonInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
  joinPath?: Schemas["LabeledSubjectsConfigInput"][];
  path?: Schemas["LabeledSubjectsConfigInput"][];
  selfReference?: boolean;
  subject?: Schemas["SubjectInputRepresentation"];
  filterConfig?: Schemas["FilterValuesInputRepresentation"][];
}
export type DateComparisonRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
  joinPath?: Schemas["LabeledSubjectListConfigRepresentation"];
  path?: Schemas["LabeledSubjectListConfigRepresentation"];
  selfReference?: boolean;
  subject?: Schemas["SubjectRepresentation"];
  values?: string[];
}
export type DateOnlyComparisonInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
  joinPath?: Schemas["LabeledSubjectsConfigInput"][];
  path?: Schemas["LabeledSubjectsConfigInput"][];
  selfReference?: boolean;
  subject?: Schemas["SubjectInputRepresentation"];
  filterConfig?: Schemas["FilterValuesInputRepresentation"][];
}
export type DateOnlyComparisonRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
  joinPath?: Schemas["LabeledSubjectListConfigRepresentation"];
  path?: Schemas["LabeledSubjectListConfigRepresentation"];
  selfReference?: boolean;
  subject?: Schemas["SubjectRepresentation"];
  values?: string[];
}
export type DecoratorInputRepresentation = Schemas["DecoratorInputRepresentation"];
export type DecoratorRepresentation = Schemas["DecoratorRepresentation"];
export type DmoFilterLimitInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  attributeName?: string;
  maxNumberOfValues?: number;
  order?: "Asc" | "Desc";
}
export type DmoFilterLimitRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  attributeName?: string;
  maxNumberOfValues?: number;
  order?: "FilterSortOrderAsc" | "FilterSortOrderDesc";
}
export type DmoFilterRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  entityFilter?: Schemas["BaseComparisonRepresentation"];
  entityFilterType?: string;
  entityName?: string;
  filterLimit?: Schemas["DmoFilterLimitRepresentation"];
  inheritedFilter?: Schemas["BaseComparisonRepresentation"];
  inheritedFilterType?: string;
  queryPathConfigForActivateOnToContainer?: Schemas["QueryPathConfigListRepresentation"];
  queryPathConfigFromContainerToEntity?: Schemas["QueryPathConfigListRepresentation"];
}
export type DmoFiltersConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["DmoFilterRepresentation"][];
}
export type EgressPropertiesInputRepresentation = Schemas["EgressPropertiesInputRepresentation"];
export type EgressPropertiesRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  childFolder?: string;
  customFilename?: string;
  filenameDateSuffixFormat?: string;
  isSubfolderCreationEnabled?: boolean;
  outputCompressionFormat?: "Bzip2" | "Gzip" | "None";
  outputDelimiter?: "BrokenPipe" | "Caret" | "Colon" | "Comma" | "Hash" | "Pipe" | "Semicolon" | "Slash" | "Tab" | "Tilde" | "Underscore";
  outputFormat?: string;
  outputMaxFileSizeMegaBytes?: number;
  outputMaxRecordsPerFile?: number;
  predeterminedFilename?: "Activation" | "Segment" | "SegmentActivation";
}
export type EntityScopedGroupInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
  attributeSource?: string;
  condition?: Schemas["BaseComparisonInputRepresentation"][];
  objectApiName?: string;
  type?: string;
}
export type EntityScopedGroupRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
  condition?: Schemas["BaseComparisonRepresentation"];
  objectApiName?: string;
  type?: string;
}
export type ExactlyRelativeDateComparisonInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
  joinPath?: Schemas["LabeledSubjectsConfigInput"][];
  path?: Schemas["LabeledSubjectsConfigInput"][];
  selfReference?: boolean;
  subject?: Schemas["SubjectInputRepresentation"];
  dateUnits?: "Days" | "Months" | "Years";
  value?: number;
}
export type ExactlyRelativeDateComparisonRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
  joinPath?: Schemas["LabeledSubjectListConfigRepresentation"];
  path?: Schemas["LabeledSubjectListConfigRepresentation"];
  selfReference?: boolean;
  subject?: Schemas["SubjectRepresentation"];
  dateUnits?: "Days" | "Months" | "Years";
  value?: number;
}
export type ExistingDataLakeObjectInputRepresentation = Schemas["ExistingDataLakeObjectInputRepresentation"];
export type ExternalPlatformConnectorInputRepresentation = {
  name?: string;
  outputFormat?: string;
  fieldConfig?: Schemas["ExternalPlatformFieldConfigInputRepresentation"][];
  keyPrefixName?: string;
}
export type ExternalPlatformConnectorRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
  fieldConfig?: Schemas["ExternalPlatformFieldConfigRepresentation"];
  keyPrefixName?: string;
}
export type ExternalPlatformFieldConfigInputRepresentation = Schemas["ExternalPlatformFieldConfigInputRepresentation"];
export type ExternalPlatformFieldConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
  fields?: Schemas["ExternalPlatformFieldRepresentation"][];
}
export type ExternalPlatformFieldInputRepresentation = Schemas["ExternalPlatformFieldInputRepresentation"];
export type ExternalPlatformFieldRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
  value?: string;
}
export type ExtractGrainFieldInputRepresentation = Schemas["ExtractGrainFieldInputRepresentation"];
export type ExtractGrainNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["ExtractGrainParametersInputRepresentation"];
}
export type ExtractGrainParameterInputRepresentation = Schemas["ExtractGrainParameterInputRepresentation"];
export type ExtractGrainParametersInputRepresentation = Schemas["ExtractGrainParametersInputRepresentation"];
export type FieldLevelChunkingConfigurationRepresentation = Schemas["FieldLevelChunkingConfigurationRepresentation"];
export type FieldLevelConfigurationInputRepresentation = Schemas["FieldLevelConfigurationInputRepresentation"];
export type FieldLevelConfigurationRepresentation = Schemas["FieldLevelConfigurationRepresentation"];
export type FieldRelationshipsPathRepresentation = Schemas["FieldRelationshipsPathRepresentation"];
export type FieldSrcTrgtRelationshipCollectionInputRepresentation = Schemas["FieldSrcTrgtRelationshipCollectionInputRepresentation"];
export type FieldSrcTrgtRelationshipCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  relationships: Schemas["FieldSrcTrgtRelationshipRepresentation"][];
}
export type FieldSrcTrgtRelationshipInputRepresentation = Schemas["FieldSrcTrgtRelationshipInputRepresentation"];
export type FieldSrcTrgtRelationshipRepresentation = Schemas["FieldSrcTrgtRelationshipRepresentation"];
export type FileLevelConfiguration = Schemas["FileLevelConfiguration"];
export type FilterDatSpaceInputRepresentation = Schemas["FilterDatSpaceInputRepresentation"];
export type FilterExpressionDatSpaceInputRepresentation = Schemas["FilterExpressionDatSpaceInputRepresentation"];
export type FilterExpressionInputRepresentation = Schemas["FilterExpressionInputRepresentation"];
export type FilterExpressionRepresentation = Schemas["FilterExpressionRepresentation"];
export type FilterNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["FilterParametersInputRepresentation"];
}
export type FilterParametersInputRepresentation = Schemas["FilterParametersInputRepresentation"];
export type FilterParametersRepresentation = Schemas["FilterParametersRepresentation"];
export type FilterValuesInputRepresentation = Schemas["FilterValuesInputRepresentation"];
export type FilterValuesRepresentation = Schemas["FilterValuesRepresentation"];
export type FlattenFieldInputRepresentation = Schemas["FlattenFieldInputRepresentation"];
export type FlattenNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["FlattenParametersInputRepresentation"];
}
export type FlattenParametersInputRepresentation = Schemas["FlattenParametersInputRepresentation"];
export type FormatDateNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["FormatDateParametersInputRepresentation"];
}
export type FormatDateParametersInputRepresentation = Schemas["FormatDateParametersInputRepresentation"];
export type FormatDatePatternInputRepresentation = Schemas["FormatDatePatternInputRepresentation"];
export type FormulaNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["FormulaParametersInputRepresentation"];
}
export type FormulaParametersInputRepresentation = Schemas["FormulaParametersInputRepresentation"];
export type GcsConnectorInputRepresentation = {
  name?: string;
  outputFormat?: string;
}
export type GcsConnectorRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
}
export type IdpConfigExtractedDloFieldInputRepresentation = Schemas["IdpConfigExtractedDloFieldInputRepresentation"];
export type IdpConfigExtractedDloFieldRepresentation = Schemas["IdpConfigExtractedDloFieldRepresentation"];
export type IdpConfigExtractedDloInputRepresentation = Schemas["IdpConfigExtractedDloInputRepresentation"];
export type IdpConfigExtractedDloRepresentation = Schemas["IdpConfigExtractedDloRepresentation"];
export type IdpConfigurationBaseRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  activationStatus?: "Activated" | "Deactivated";
  configMetadata?: { [key: string]: string };
  dataspace?: Schemas["CdpAssetReferenceRepresentation"];
  description?: string;
  lastRunOn?: string;
  mlModel?: string;
  runtimeStatus?: "Aborted" | "Failed" | "InProgress" | "NotStarted" | "Pending" | "Ready" | "Submitted" | "Success";
  sourceDmo?: Schemas["CdpAssetReferenceRepresentation"];
  status?: "Error" | "NotSynced" | "Synced" | "Syncing";
  version?: string;
}
export type IdpConfigurationDetailsRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  activationStatus?: "Activated" | "Deactivated";
  configMetadata?: { [key: string]: string };
  dataspace?: Schemas["CdpAssetReferenceRepresentation"];
  description?: string;
  lastRunOn?: string;
  mlModel?: string;
  runtimeStatus?: "Aborted" | "Failed" | "InProgress" | "NotStarted" | "Pending" | "Ready" | "Submitted" | "Success";
  sourceDmo?: Schemas["CdpAssetReferenceRepresentation"];
  status?: "Error" | "NotSynced" | "Synced" | "Syncing";
  version?: string;
  extractedDloConfig?: string;
  extractedDlos?: Schemas["IdpConfigExtractedDloRepresentation"][];
  fileConfig?: Schemas["IdpFileConfigRepresentation"];
  schemaConfig?: string;
}
export type IdpConfigurationInputRepresentation = Schemas["IdpConfigurationInputRepresentation"];
export type IdpConfigurationPatchInputRepresentation = Schemas["IdpConfigurationPatchInputRepresentation"];
export type IdpConfigurationRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  activationStatus?: "Activated" | "Deactivated";
  configMetadata?: { [key: string]: string };
  dataspace?: Schemas["CdpAssetReferenceRepresentation"];
  description?: string;
  lastRunOn?: string;
  mlModel?: string;
  runtimeStatus?: "Aborted" | "Failed" | "InProgress" | "NotStarted" | "Pending" | "Ready" | "Submitted" | "Success";
  sourceDmo?: Schemas["CdpAssetReferenceRepresentation"];
  status?: "Error" | "NotSynced" | "Synced" | "Syncing";
  version?: string;
}
export type IdpConfigurationsCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  configurations: Schemas["IdpConfigurationRepresentation"][];
}
export type IdpContentTypeRepresentation = Schemas["IdpContentTypeRepresentation"];
export type IdpDocumentCollectionRepresentation = Schemas["IdpDocumentCollectionRepresentation"];
export type IdpDocumentInputRepresentation = Schemas["IdpDocumentInputRepresentation"];
export type IdpDocumentRepresentation = Schemas["IdpDocumentRepresentation"];
export type IdpExtractDataInputRepresentation = Schemas["IdpExtractDataInputRepresentation"];
export type IdpExtractedDataRepresentation = Schemas["IdpExtractedDataRepresentation"];
export type IdpExtractedFileDataRepresenation = Schemas["IdpExtractedFileDataRepresenation"];
export type IdpFileConfigInputRepresentation = Schemas["IdpFileConfigInputRepresentation"];
export type IdpFileConfigRepresentation = Schemas["IdpFileConfigRepresentation"];
export type IdpFileProcessingConfigRepresentation = Schemas["IdpFileProcessingConfigRepresentation"];
export type IdpGenerateSchemaFileInputRepresentation = Schemas["IdpGenerateSchemaFileInputRepresentation"];
export type IdpGenerateSchemaInputRepresentation = Schemas["IdpGenerateSchemaInputRepresentation"];
export type IdpGeneratedSchemaRepresentation = Schemas["IdpGeneratedSchemaRepresentation"];
export type IdpGlobalConfigRepresentation = Schemas["IdpGlobalConfigRepresentation"];
export type IdpProcessingStatusRepresentation = Schemas["IdpProcessingStatusRepresentation"];
export type IdpSupportedModelRepresentation = Schemas["IdpSupportedModelRepresentation"];
export type IndexConfigInputRepresentation = Schemas["IndexConfigInputRepresentation"];
export type IndexConfigurationRepresentation = Schemas["IndexConfigurationRepresentation"];
export type IndexFieldConfigurationInputRepresentation = Schemas["IndexFieldConfigurationInputRepresentation"];
export type IndexFieldConfigurationRepresentation = Schemas["IndexFieldConfigurationRepresentation"];
export type IngestApiConnectionInputRepresentation = Schemas["IngestApiConnectionInputRepresentation"];
export type IngestApiConnectionRepresentation = {
  status?: "Connected" | "Disconnected" | "Failed" | "NeedsReAuth";
  tenantSpecificEndpoint?: string;
}
export type IngestApiConnectionSchemaFieldInputRepresentation = {
  label?: string;
  name?: string;
  currencyIsoCode?: boolean;
  dataType?: "Boolean" | "Currency" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
}
export type IngestApiConnectionSchemaFieldRepresentation = {
  label?: string;
  name?: string;
  currencyIsoCode?: boolean;
  dataType?: "Boolean" | "Currency" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
}
export type IngestApiConnectionSchemaInputRepresentation = {
  fields?: Schemas["IngestApiConnectionSchemaFieldInputRepresentation"][];
}
export type IngestApiConnectionSchemaRepresentation = {
  availabilityStatus?: "Available" | "InUse";
  fields?: Schemas["IngestApiConnectionSchemaFieldRepresentation"][];
}
export type IngestApiConnectorDetailsConfig = {
  events?: string[];
  name?: string;
}
export type IngestApiConnectorPatchDetailsConfig = {
  mappings?: Schemas["DataStreamFieldMappingInputRepresentation"][];
  syncSchema?: boolean;
}
export type IngestionApiConnectorDetailsRepresentation = {
  category: "Engagement" | "Other" | "Profile";
  name: string;
  events?: string[];
}
export type JoinNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["JoinParametersInputRepresentation"];
}
export type JoinParametersInputRepresentation = Schemas["JoinParametersInputRepresentation"];
export type LabeledSubjectConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  labeledSubjects?: Schemas["LabeledSubjectRepresentation"][];
}
export type LabeledSubjectInputRepresentation = {
  fieldName: string;
  objectName: string;
  fieldLabel?: string;
  objectLabel?: string;
}
export type LabeledSubjectListConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  subjects?: Schemas["LabeledSubjectConfigRepresentation"][];
}
export type LabeledSubjectRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  fieldName?: string;
  objectName?: string;
  fieldLabel?: string;
  objectLabel?: string;
}
export type LabeledSubjectsConfigInput = Schemas["LabeledSubjectsConfigInput"];
export type LoadDataLakeObjectInputRepresentation = {
  label: string;
  type: "DataLakeObject" | "DataModelObject";
  name?: string;
}
export type LoadDataModelObjectInputRepresentation = {
  label: string;
  type: "DataLakeObject" | "DataModelObject";
  name?: string;
}
export type LoadDatasetInputRepresentation = Schemas["LoadDatasetInputRepresentation"];
export type LoadDatasetRepresentation = Schemas["LoadDatasetRepresentation"];
export type LoadNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["LoadParametersInputRepresentation"];
}
export type LoadNodeRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Schemas["SchemaParametersRepresentation"];
  sources: string[];
  parameters?: Schemas["LoadParametersRepresentation"];
}
export type LoadParametersInputRepresentation = Schemas["LoadParametersInputRepresentation"];
export type LoadParametersRepresentation = Schemas["LoadParametersRepresentation"];
export type LogicalComparisonInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
}
export type LogicalComparisonRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
}
export type MarketingCloudConnectionBusinessUnitRepresentation = Schemas["MarketingCloudConnectionBusinessUnitRepresentation"];
export type MarketingCloudConnectionInputRepresentation = Schemas["MarketingCloudConnectionInputRepresentation"];
export type MarketingCloudConnectionPatchInputRepresentation = {
  addActivationBusinessUnits?: string[];
  addBusinessUnitsToDataSpaces?: Schemas["McBuToDataSpaceInputRepresentation"][];
  addIngestionBusinessUnits?: string[];
  createProfileMappings?: boolean;
  removeActivationBusinessUnits?: string[];
  removeBusinessUnitsToDataSpaces?: Schemas["McBuToDataSpaceInputRepresentation"][];
  removeIngestionBusinessUnits?: string[];
}
export type MarketingCloudConnectionRepresentation = {
  activationBusinessUnits?: Schemas["MarketingCloudConnectionBusinessUnitRepresentation"][];
  businessUnitsToDataSpaces?: Schemas["McBuToDataSpaceRepresentation"][];
  createProfileBuMappings?: boolean;
  eid?: string;
  ingestionBusinessUnits?: Schemas["MarketingCloudConnectionBusinessUnitRepresentation"][];
}
export type MarketingCloudConnectorInputRepresentation = {
  name?: string;
  outputFormat?: string;
  businessUnitConfig?: Schemas["BusinessUnitConfigInputRepresentation"][];
  targetSubType?: string;
}
export type MarketingCloudConnectorRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
  businessUnitConfig?: Schemas["BusinessUnitConfigRepresentation"][];
  enterpriseId?: number;
  enterpriseName?: string;
  targetSubType?: string;
}
export type McBuToDataSpaceInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  dataspaceName: string;
  mid: string;
}
export type McBuToDataSpaceRepresentation = Schemas["McBuToDataSpaceRepresentation"];
export type MlConfiguredModelCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  configuredModels: Schemas["MlConfiguredModelRepresentation"][];
}
export type MlConfiguredModelInputRepresentation = Schemas["MlConfiguredModelInputRepresentation"];
export type MlConfiguredModelRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  actionableFields?: Schemas["CdpMlCustomizableFieldRepresentation"][];
  activations?: string[];
  artifact?: Schemas["CdpAssetReferenceRepresentation"];
  capability?: "BinaryClassification" | "ChatCompletion" | "Completion" | "Embedding" | "Generic" | "MulticlassClassification" | "Regression";
  connectorType?: "Anthropic" | "AzureOpenAI" | "Bedrock" | "Databricks" | "Generic" | "InternalEmbedding" | "OpenAI" | "SageMaker" | "VertexAI";
  description?: string;
  foundationalModel?: Schemas["CdpMlFoundationalModelRepresentation"];
  generativeModelType?: "Mixed" | "Text";
  inputFields?: Schemas["CdpMlModelInputFieldBaseRepresentation"][];
  inputTypes?: Schemas["MlModelInputTypeRepresentation"][];
  isBatchSupported?: boolean;
  lastActivatedBy?: Schemas["CdpUserRepresentation"];
  lastActivatedDate?: string;
  modelCapabilities?: string[];
  modelDisabledReasons?: string[];
  modelType?: "Generative" | "Predictive" | "Unknown";
  outputFields?: Schemas["CdpMlModelOutputFieldRepresentation"][];
  outputTypes?: Schemas["MlModelOutputTypeRepresentation"][];
  parameterOverrides?: Schemas["CdpMlModelParameterOverrideBaseRepresentation"][];
  parameters?: Schemas["CdpMlModelParameterDefinitionBaseRepresentation"][];
  runtimeType?: "External" | "Internal";
  setupType?: "EdcNoCode" | "ModelConnector" | "OutOfTheBox";
  status?: "Disabled" | "Enabled";
  visibility?: "Hidden" | "Shown";
}
export type MlConnectorEndpointRepresentation = Schemas["MlConnectorEndpointRepresentation"];
export type MlDataAlertCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  alerts?: Schemas["MlDataAlertRepresentation"][];
  source?: Schemas["CdpAssetReferenceRepresentation"];
}
export type MlDataAlertDataBaseRepresentation = Schemas["MlDataAlertDataBaseRepresentation"];
export type MlDataAlertInputRepresentation = Schemas["MlDataAlertInputRepresentation"];
export type MlDataAlertQueryInputRepresentation = Schemas["MlDataAlertQueryInputRepresentation"];
export type MlDataAlertRepresentation = Schemas["MlDataAlertRepresentation"];
export type MlImprovementDirectiveRepresentation = Schemas["MlImprovementDirectiveRepresentation"];
export type MlModelInputTypeRepresentation = Schemas["MlModelInputTypeRepresentation"];
export type MlModelJsonModeRepresentation = Schemas["MlModelJsonModeRepresentation"];
export type MlModelOutputTypeRepresentation = Schemas["MlModelOutputTypeRepresentation"];
export type MlSetupBaseUpdateInputRepresentation = Schemas["MlSetupBaseUpdateInputRepresentation"];
export type MonthlySpecificScheduleInputRepresentation = {
  definitionName?: string;
  frequency: "Monthly";
  timeInfo?: Schemas["CdpTimeInputRepresentation"];
  daysOfMonth?: number[];
}
export type MonthlySpecificScheduleRepresentation = {
  frequency: "Monthly";
  nextScheduledDate?: string;
  timeInfo?: Schemas["TimeOutputRepresentation"];
  daysOfMonth?: number[];
  interval?: number;
}
export type NameLabelInputRepresentation = Schemas["NameLabelInputRepresentation"];
export type NameLabelRepresentation = Schemas["NameLabelRepresentation"];
export type NumberComparisonInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
  joinPath?: Schemas["LabeledSubjectsConfigInput"][];
  path?: Schemas["LabeledSubjectsConfigInput"][];
  selfReference?: boolean;
  subject?: Schemas["SubjectInputRepresentation"];
  firstBoundValue?: number;
  secondBoundValue?: number;
  value?: number;
}
export type NumberComparisonRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
  joinPath?: Schemas["LabeledSubjectListConfigRepresentation"];
  path?: Schemas["LabeledSubjectListConfigRepresentation"];
  selfReference?: boolean;
  subject?: Schemas["SubjectRepresentation"];
  firstBoundValue?: number;
  secondBoundValue?: number;
  value?: number;
}
export type OutputD360FieldsMappingInputRepresentation = Schemas["OutputD360FieldsMappingInputRepresentation"];
export type OutputD360NodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["OutputD360ParametersInputRepresentation"];
}
export type OutputD360ParametersInputRepresentation = Schemas["OutputD360ParametersInputRepresentation"];
export type ParameterRepresentation = Schemas["ParameterRepresentation"];
export type PerFileExtensionRepresentation = Schemas["PerFileExtensionRepresentation"];
export type PivotV2InputRepresentation = Schemas["PivotV2InputRepresentation"];
export type PivotV2Representation = Schemas["PivotV2Representation"];
export type PrimitiveComparisonInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
  joinPath?: Schemas["LabeledSubjectsConfigInput"][];
  path?: Schemas["LabeledSubjectsConfigInput"][];
  selfReference?: boolean;
  subject?: Schemas["SubjectInputRepresentation"];
}
export type PrimitiveComparisonRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
  joinPath?: Schemas["LabeledSubjectListConfigRepresentation"];
  path?: Schemas["LabeledSubjectListConfigRepresentation"];
  selfReference?: boolean;
  subject?: Schemas["SubjectRepresentation"];
}
export type PrivateNetworkRouteCollectionRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  routes?: Schemas["PrivateNetworkRouteRepresentation"][];
}
export type PrivateNetworkRouteInputRepresentation = Schemas["PrivateNetworkRouteInputRepresentation"];
export type PrivateNetworkRouteRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  cloudProvider?: Schemas["CloudProviderDetailsRepresentation"];
  route?: unknown;
}
export type QueryPathConfigInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  queryPaths?: Schemas["QueryPathInputRepresentationConfig"][];
}
export type QueryPathConfigListInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  configs?: Schemas["QueryPathConfigInputRepresentation"][];
}
export type QueryPathConfigListRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  configs?: Schemas["QueryPathConfigRepresentation"][];
}
export type QueryPathConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  queryPath?: Schemas["QueryPathRepresentation"][];
}
export type QueryPathInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  fieldLabel?: string;
  fieldName?: string;
  objectLabel?: string;
  objectName?: string;
}
export type QueryPathInputRepresentationConfig = Schemas["QueryPathInputRepresentationConfig"];
export type QueryPathRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  fieldLabel?: string;
  fieldName?: string;
  objectLabel?: string;
  objectName?: string;
}
export type QuerySqlBaseRepresentation = Schemas["QuerySqlBaseRepresentation"];
export type QuerySqlInputRepresentation = Schemas["QuerySqlInputRepresentation"];
export type QuerySqlMetadataItemRepresentation = Schemas["QuerySqlMetadataItemRepresentation"];
export type QuerySqlPageRepresentation = {
  returnedRows: number;
  data: Schemas["QuerySqlRowRepresentation"][];
  metadata: Schemas["QuerySqlMetadataItemRepresentation"][];
}
export type QuerySqlParameterItemRepresentation = Schemas["QuerySqlParameterItemRepresentation"];
export type QuerySqlRepresentation = {
  returnedRows: number;
  data: Schemas["QuerySqlRowRepresentation"][];
  metadata: Schemas["QuerySqlMetadataItemRepresentation"][];
  status?: Schemas["QuerySqlStatusRepresentation"];
}
export type QuerySqlRowRepresentation = Schemas["QuerySqlRowRepresentation"];
export type QuerySqlStatusRepresentation = Schemas["QuerySqlStatusRepresentation"];
export type RankingFieldsDetailsRepresentation = Schemas["RankingFieldsDetailsRepresentation"];
export type RecencyCriteriaRepresentation = Schemas["RecencyCriteriaRepresentation"];
export type RecordFieldConfigurationInputRepresentation = {
  aliasName?: string;
  dmoDeveloperName?: string;
  dmoFieldDeveloperName?: string;
  relationships?: Schemas["SourceTargetRelationshipInputRepresentation"][];
  tokenizations?: Schemas["TokenizationInputRepresentation"][];
}
export type RecordFieldConfigurationRepresentation = {
  aliasName?: string;
  dmoDeveloperName?: string;
  dmoFieldDeveloperName?: string;
  relationships?: Schemas["FieldRelationshipsPathRepresentation"][];
  tokenizations?: Schemas["TokenizationRepresentation"][];
}
export type RedshiftRouteDetailsInputRepresentation = {
  serviceName: string;
  type: "Redshift";
}
export type RedshiftRouteDetailsRepresentation = {
  serviceName: string;
  type: "Redshift";
}
export type RefreshConfigInputRepresentation = Schemas["RefreshConfigInputRepresentation"];
export type RefreshConfigRepresentation = Schemas["RefreshConfigRepresentation"];
export type RelationshipFieldRepresentation = Schemas["RelationshipFieldRepresentation"];
export type RelationshipObjectRepresentation = Schemas["RelationshipObjectRepresentation"];
export type RelativeToNowDateComparisonInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
  joinPath?: Schemas["LabeledSubjectsConfigInput"][];
  path?: Schemas["LabeledSubjectsConfigInput"][];
  selfReference?: boolean;
  subject?: Schemas["SubjectInputRepresentation"];
  value?: number;
}
export type RelativeToNowDateComparisonRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
  joinPath?: Schemas["LabeledSubjectListConfigRepresentation"];
  path?: Schemas["LabeledSubjectListConfigRepresentation"];
  selfReference?: boolean;
  subject?: Schemas["SubjectRepresentation"];
  value?: number;
}
export type ResourceFilterByPropertyInputRepresentation = Schemas["ResourceFilterByPropertyInputRepresentation"];
export type ResourceFiltersInputRepresentation = Schemas["ResourceFiltersInputRepresentation"];
export type RouteDetailsInputRepresentation = Schemas["RouteDetailsInputRepresentation"];
export type RouteDetailsRepresentation = Schemas["RouteDetailsRepresentation"];
export type RunHistoryOutputProgressRepresentation = Schemas["RunHistoryOutputProgressRepresentation"];
export type S3ConnectorInputRepresentation = {
  name?: string;
  outputFormat?: string;
  accessKey?: string;
  bucketName?: string;
  folderName?: string;
  secretKey?: string;
}
export type S3ConnectorRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
  bucketName?: string;
  folderName?: string;
}
export type SalesforceMarketingCloudConnectorDetailsConfig = {
  eid?: string;
  mid?: string;
  subType?: string;
}
export type SalesforceMarketingCloudConnectorDetailsRepresentation = {
  category: "Engagement" | "Other" | "Profile";
  name: string;
  eid?: string;
  mid?: string;
}
export type SalesforceMarketingCloudDataExtensionConnectionObjectRepresentation = {
  name: string;
  customObjectId: string;
  description?: string;
}
export type SalesforceMarketingCloudDataExtensionConnectorDetailsConfig = {
  eid?: string;
  mid?: string;
  subType?: string;
  customObjectId?: string;
  customObjectName?: string;
}
export type SalesforceMarketingCloudDataExtensionConnectorDetailsRepresentation = {
  category: "Engagement" | "Other" | "Profile";
  name: string;
  eid?: string;
  mid?: string;
  customObjectId?: string;
  customObjectName?: string;
}
export type SalesforceMarketingCloudStandardConnectionObjectRepresentation = {
  name: string;
  bundleName: string;
}
export type SalesforceMarketingCloudStandardConnectorDetailsConfig = Schemas["SalesforceMarketingCloudStandardConnectorDetailsConfig"];
export type SalesforceMarketingCloudStandardConnectorDetailsRepresentation = {
  category: "Engagement" | "Other" | "Profile";
  name: string;
  eid?: string;
  mid?: string;
  bundleName?: string;
  sourceObjectName?: string;
}
export type SampleParametersInputRepresentation = Schemas["SampleParametersInputRepresentation"];
export type SampleParametersRepresentation = Schemas["SampleParametersRepresentation"];
export type ScheduleInputRepresentation = Schemas["ScheduleInputRepresentation"];
export type ScheduleOutputRepresentation = Schemas["ScheduleOutputRepresentation"];
export type ScheduleRepresentation = Schemas["ScheduleRepresentation"];
export type SchemaFieldFormatSymbolsRepresentation = Schemas["SchemaFieldFormatSymbolsRepresentation"];
export type SchemaFieldNewPropertiesRepresentation = Schemas["SchemaFieldNewPropertiesRepresentation"];
export type SchemaFieldParametersInputRepresentation = Schemas["SchemaFieldParametersInputRepresentation"];
export type SchemaFieldPropertiesInputRepresentation = Schemas["SchemaFieldPropertiesInputRepresentation"];
export type SchemaFieldRepresentation = Schemas["SchemaFieldRepresentation"];
export type SchemaFieldTypePropertiesRepresentation = Schemas["SchemaFieldTypePropertiesRepresentation"];
export type SchemaFormatSymbolsInputRepresentation = Schemas["SchemaFormatSymbolsInputRepresentation"];
export type SchemaNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["SchemaParametersInputRepresentation"];
}
export type SchemaParametersInputRepresentation = Schemas["SchemaParametersInputRepresentation"];
export type SchemaParametersRepresentation = Schemas["SchemaParametersRepresentation"];
export type SchemaSliceInputRepresentation = Schemas["SchemaSliceInputRepresentation"];
export type SchemaSliceRepresentation = Schemas["SchemaSliceRepresentation"];
export type SchemaTypePropertiesCastInputRepresentation = Schemas["SchemaTypePropertiesCastInputRepresentation"];
export type SearchRankingFieldInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  aliasName?: string;
  developerName?: string;
  rankType?: string;
  relatedDmoDeveloperName?: string;
  relatedDmoFieldDeveloperName?: string;
  relatedDmoFieldName?: string;
  relatedDmoName?: string;
  relationships?: Schemas["SourceTargetRelationshipInputRepresentation"][];
}
export type SegmentTimeZoneRepresentation = Schemas["SegmentTimeZoneRepresentation"];
export type SemanticSearchConfigRepresentation = Schemas["SemanticSearchConfigRepresentation"];
export type SemanticSearchDefDetailRepresentation = Schemas["SemanticSearchDefDetailRepresentation"];
export type SemanticSearchDefDetailsRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  semanticSearchDefinitionDetails: Schemas["SemanticSearchDefDetailRepresentation"][];
}
/** @override Spec bugs: processingType missing from spec but required by API; attachment/transcribe fields are only required for document/PDF search indexes, not structured DMO search. Input rejects output-only display-name fields (sourceDmoName, sourceDmoFieldName, relatedDmoName, relatedDmoFieldName) that GET responses include — round-tripping a GET shape into a POST returns `500 UNKNOWN_EXCEPTION` with no diagnostic body. Pass developer-name fields only. */
export type SemanticSearchInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  activationStatus?: string;
  attachmentDmoDeveloperName?: string;
  chunkDmoDeveloperName: string;
  chunkDmoName: string;
  chunkingConfiguration: Schemas["ChunkingConfigInputRepresentation"];
  description?: string;
  developerName: string;
  indexConfiguration?: Schemas["IndexConfigInputRepresentation"];
  label: string;
  processingType?: string;
  rankingConfigurations?: Schemas["SearchRankingFieldInputRepresentation"][];
  searchType: "HYBRID" | "VECTOR";
  sourceDmoDeveloperName: string;
  transcribeDmoDeveloperName?: string;
  transcribeDmoName?: string;
  transcribeDmoId?: string;
  transformConfigurations?: Schemas["TransformConfigInputRepresentation"][];
  vectorDmoDeveloperName: string;
  vectorDmoName: string;
  vectorEmbedding: Schemas["VectorEmbeddingInputRepresentation"];
  vectorEmbeddingConfiguration: Schemas["VectorEmbeddingConfigInputRepresentation"];
}
export type SemanticSearchRepresentation = {
  currentPageUrl?: string;
  nextPageUrl?: string;
  totalSize?: number;
  chunkingStrategies?: string[];
  id?: string;
  rankingConfigurations?: string[];
  transformations?: string[];
  vectorEmbedding?: Schemas["VectorEmbeddingRepresentation"];
}
export type SftpConnectorInputRepresentation = {
  name?: string;
  outputFormat?: string;
}
export type SftpConnectorRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  outputFormat?: string;
}
export type SnowflakeRouteDetailsInputRepresentation = {
  serviceName: string;
  type: "Snowflake";
  accountUrl?: string;
}
export type SnowflakeRouteDetailsRepresentation = {
  serviceName: string;
  type: "Snowflake";
  accountUrl?: string;
}
export type SourceTargetRelationshipInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  sourceDmoDeveloperName: string;
  sourceDmoFieldDeveloperName: string;
  sourceDmoLabel?: string;
  sourceFieldLabel?: string;
  targetDmoDeveloperName: string;
  targetDmoFieldDeveloperName: string;
  targetDmoLabel?: string;
  targetFieldLabel?: string;
}
export type SplitNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["SplitParametersInputRepresentation"];
}
export type SplitParametersInputRepresentation = Schemas["SplitParametersInputRepresentation"];
export type SqlDataTransformDefinitionInputRepresentation = {
  type: "STL" | "SQL";
  version: string;
  expression?: string;
  targetDlo?: string;
  targetDmo?: string;
}
export type SqlDataTransformDefinitionRepresentation = {
  label: string;
  name: string;
  outputDataObjects: Schemas["DataObjectRepresentation"][];
  type: "Dbt" | "DbtHidden" | "Sql" | "SqlHidden" | "Stl" | "StlHidden";
  version: string;
  expression?: string;
  targetDlo?: string;
}
export type SqlFilterNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["SqlFilterParametersInputRepresentation"];
}
export type SqlFilterParametersInputRepresentation = Schemas["SqlFilterParametersInputRepresentation"];
export type SqlFormulaDateFieldRepresentation = {
  defaultValue: string;
  formulaExpression: string;
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  format?: string;
}
export type SqlFormulaDateOnlyFieldInputRepresentation = {
  formulaExpression: string;
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  defaultValue?: string;
  format?: string;
}
export type SqlFormulaDateTimeFieldInputRepresentation = {
  formulaExpression: string;
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  defaultValue?: string;
  format?: string;
}
export type SqlFormulaFieldInputRepresentation = Schemas["SqlFormulaFieldInputRepresentation"];
export type SqlFormulaFieldRepresentation = Schemas["SqlFormulaFieldRepresentation"];
export type SqlFormulaNumericFieldInputRepresentation = {
  formulaExpression: string;
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  defaultValue?: string;
  precision?: number;
  scale?: number;
}
export type SqlFormulaNumericFieldRepresentation = {
  defaultValue: string;
  formulaExpression: string;
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  precision?: number;
  scale?: number;
}
export type SqlFormulaParametersInputRepresentation = {
  fields?: Schemas["SqlFormulaFieldInputRepresentation"][];
}
export type SqlFormulaTextFieldInputRepresentation = {
  formulaExpression: string;
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  defaultValue?: string;
  precision?: number;
}
export type SqlFormulaTextFieldRepresentation = {
  defaultValue: string;
  formulaExpression: string;
  label: string;
  name: string;
  type: "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
  precision?: number;
}
export type StaticDataConfigInputRepresentation = Schemas["StaticDataConfigInputRepresentation"];
export type StaticDataConfigRepresentation = Schemas["StaticDataConfigRepresentation"];
export type StaticDataInputRepresentation = Schemas["StaticDataInputRepresentation"];
export type StaticDataRepresentation = Schemas["StaticDataRepresentation"];
export type StlDataTransformDefinitionInputRepresentation = {
  type: "STL" | "SQL";
  version: string;
  nodes?: Record<string, never>;
  ui?: Record<string, never>;
}
export type StlDataTransformDefinitionRepresentation = {
  label: string;
  name: string;
  outputDataObjects: Schemas["DataObjectRepresentation"][];
  type: "Dbt" | "DbtHidden" | "Sql" | "SqlHidden" | "Stl" | "StlHidden";
  version: string;
  nodes?: Record<string, never>;
  ui?: Record<string, never>;
}
export type StreamingAppConnectionInputRepresentation = {
  streamingAppSubType?: "WebApp_GA4";
  streamingAppType: "MobileApp" | "ServerApp" | "WebApp";
}
export type StreamingAppConnectionPatchInputRepresentation = {
  modules: Schemas["ConnectionModuleConfigInputRepresentation"][];
}
export type StreamingAppConnectionRepresentation = {
  modules?: Schemas["ConnectionModuleConfigRepresentation"][];
  sourceId?: string;
  status?: "Connected" | "Disconnected" | "Failed" | "NeedsReAuth";
  streamingAppSubType?: "WebApp_GA4";
  streamingAppType?: "MobileApp" | "ServerApp" | "WebApp";
  tenantSpecificEndpoint?: string;
}
export type StreamingAppConnectionSchemaFieldInputRepresentation = {
  label?: string;
  name?: string;
  dataType?: "Boolean" | "Currency" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
  isDataRequired?: boolean;
  primaryIndexOrder?: number;
}
export type StreamingAppConnectionSchemaFieldRepresentation = {
  label?: string;
  name?: string;
  dataType?: "Boolean" | "Currency" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
  isDataRequired?: boolean;
  primaryIndexOrder?: number;
}
export type StreamingAppConnectionSchemaInputRepresentation = {
  availabilityStatus?: "Available" | "InUse";
  category?: "Engagement" | "Other" | "Profile";
  fields?: Schemas["StreamingAppConnectionSchemaFieldInputRepresentation"][];
}
export type StreamingAppConnectionSchemaRepresentation = {
  availabilityStatus?: "Available" | "InUse";
  category?: "Engagement" | "Other" | "Profile";
  fields?: Schemas["StreamingAppConnectionSchemaFieldRepresentation"][];
}
export type StreamingConnectorDetailsConfig = {
  category?: "Directory_Table" | "Engagement" | "Insights" | "Other" | "Profile";
  events?: string[];
  name?: string;
  streamingAppType?: "MobileApp" | "ServerApp" | "WebApp";
}
export type StreamingConnectorDetailsRepresentation = {
  category: "Engagement" | "Other" | "Profile";
  name: string;
  events?: string[];
  streamingAppType?: string;
}
export type StreamingConnectorPatchDetailsConfig = {
  addEvents?: string[];
  mappings?: Schemas["DataStreamFieldMappingInputRepresentation"][];
  syncSchema?: boolean;
}
export type StreamingParametersInputRepresentation = Schemas["StreamingParametersInputRepresentation"];
export type SubjectBaseInputRepresentation = Schemas["SubjectBaseInputRepresentation"];
export type SubjectBaseRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  fieldName?: string;
  objectName?: string;
}
export type SubjectInputRepresentation = {
  fieldName: string;
  objectName: string;
}
export type SubjectRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  fieldName?: string;
  objectName?: string;
}
export type TextComparisonInputRepresentation = {
  filtersConfig: Schemas["TypeAndFilterInputRepresentationConfig"][];
  operator: string;
  joinPath?: Schemas["LabeledSubjectsConfigInput"][];
  path?: Schemas["LabeledSubjectsConfigInput"][];
  selfReference?: boolean;
  subject?: Schemas["SubjectInputRepresentation"];
  filterConfig?: Schemas["FilterValuesInputRepresentation"][];
}
export type TextComparisonRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filters?: Schemas["TypeAndFilterRepresentation"][];
  operator?: string;
  joinPath?: Schemas["LabeledSubjectListConfigRepresentation"];
  path?: Schemas["LabeledSubjectListConfigRepresentation"];
  selfReference?: boolean;
  subject?: Schemas["SubjectRepresentation"];
  values?: string[];
}
export type TimeOutputRepresentation = Schemas["TimeOutputRepresentation"];
export type TokenizationInputRepresentation = Schemas["TokenizationInputRepresentation"];
export type TokenizationRepresentation = Schemas["TokenizationRepresentation"];
export type TransformConfigInputRepresentation = Schemas["TransformConfigInputRepresentation"];
export type TransformConfigurationRepresentation = Schemas["TransformConfigurationRepresentation"];
export type TransformFileLevelConfiguration = Schemas["TransformFileLevelConfiguration"];
export type TransformFileLevelConfigurationInputRepresentation = Schemas["TransformFileLevelConfigurationInputRepresentation"];
export type TransformValidationIssueRepresentation = Schemas["TransformValidationIssueRepresentation"];
export type TypeAndFilterInputRepresentation = Schemas["TypeAndFilterInputRepresentation"];
export type TypeAndFilterInputRepresentationConfig = Schemas["TypeAndFilterInputRepresentationConfig"];
export type TypeAndFilterRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  filter?: Schemas["BaseComparisonRepresentation"];
  type?: string;
}
export type TypeCastNodeRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Schemas["SchemaParametersRepresentation"];
  sources: string[];
  parameters?: Schemas["TypeCastParametersRepresentation"];
}
export type TypeCastParametersRepresentation = Schemas["TypeCastParametersRepresentation"];
export type TypecastNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["TypecastParametersInputRepresentation"];
}
export type TypecastParametersInputRepresentation = Schemas["TypecastParametersInputRepresentation"];
export type UpdateNodeInputRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Record<string, never>;
  sources: string[];
  parameters?: Schemas["UpdateParametersInputRepresentation"];
}
export type UpdateNodeRepresentation = {
  action: "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
  schema: Schemas["SchemaParametersRepresentation"];
  sources: string[];
  parameters?: Schemas["UpdateParametersRepresentation"];
}
export type UpdateParametersInputRepresentation = Schemas["UpdateParametersInputRepresentation"];
export type UpdateParametersRepresentation = Schemas["UpdateParametersRepresentation"];
export type UseCaseTemplateAttributeAggregateConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  operators?: string[];
  threshold?: number;
}
export type UseCaseTemplateAttributeConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  alias?: string;
  defaultValue?: string;
  description?: string;
  queryOptions?: Schemas["UseCaseTemplateAttributeQueryOptionConfigRepresentation"];
  required?: boolean;
  tableName?: string;
}
export type UseCaseTemplateAttributeQueryOptionConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  aggregationOption?: Schemas["UseCaseTemplateAttributeAggregateConfigRepresentation"];
  selectable?: boolean;
  supportGroupBy?: boolean;
  supportJoin?: boolean;
}
export type UseCaseTemplateConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  memberConfigs?: Schemas["UseCaseTemplateMemberConfigRepresentation"][];
}
export type UseCaseTemplateMappingAttributeFilterOptionRepresentation = Schemas["UseCaseTemplateMappingAttributeFilterOptionRepresentation"];
export type UseCaseTemplateMappingAttributeRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  alias?: string;
  attributeId?: string;
  defaultValue?: string;
  filterOptions?: Schemas["UseCaseTemplateMappingAttributeFilterOptionRepresentation"];
  path?: Schemas["UseCaseTemplateMappingPathAttributeRepresentation"][];
  subjectAttribute?: Schemas["UseCaseTemplateMappingSubjectAttributeRepresentation"];
  tableName?: string;
}
export type UseCaseTemplateMappingPathAttributeRepresentation = Schemas["UseCaseTemplateMappingPathAttributeRepresentation"];
export type UseCaseTemplateMappingRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  attributes?: Schemas["UseCaseTemplateMappingAttributeRepresentation"][];
  collaborationEntity?: string;
}
export type UseCaseTemplateMappingSubjectAttributeRepresentation = Schemas["UseCaseTemplateMappingSubjectAttributeRepresentation"];
export type UseCaseTemplateMemberConfigRepresentation = {
  createdBy?: Schemas["CdpUserRepresentation"];
  createdDate?: string;
  id?: string;
  label?: string;
  lastModifiedBy?: Schemas["CdpUserRepresentation"];
  lastModifiedDate?: string;
  name?: string;
  namespace?: string;
  url?: string;
  attributeConfigs?: Schemas["UseCaseTemplateAttributeConfigRepresentation"][];
  memberType?: "Consumer" | "Provider";
}
export type UserValueInputRepresentation = Schemas["UserValueInputRepresentation"];
export type UserValuesRepresentation = Schemas["UserValuesRepresentation"];
export type VectorConfigElementRepresentation = Schemas["VectorConfigElementRepresentation"];
export type VectorConfigurationRepresentation = Schemas["VectorConfigurationRepresentation"];
export type VectorEmbeddingConfigInputRepresentation = Schemas["VectorEmbeddingConfigInputRepresentation"];
export type VectorEmbeddingDetailsRepresentation = Schemas["VectorEmbeddingDetailsRepresentation"];
/** @override Server NPEs when vectorEmbeddingRelatedFields is omitted, empty, or null. The list must be non-empty (typical minimum: a single entry pointing at the source DMO's primary key). Spec marks it optional. */
export type VectorEmbeddingInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  einsteinStudioModelId?: string;
  vectorEmbeddingRelatedFields: Schemas["VectorEmbeddingRelatedFieldsInputRepresentation"][];
}
export type VectorEmbeddingRelatedFieldsDetailsRepresentation = Schemas["VectorEmbeddingRelatedFieldsDetailsRepresentation"];
export type VectorEmbeddingRelatedFieldsInputRepresentation = {
  id?: string;
  name?: string;
  namespace?: string;
  relatedDmoDeveloperName?: string;
  relatedDmoFieldDeveloperName?: string;
  relatedDmoFieldName?: string;
  relatedDmoName?: string;
  relationshipCardinality?: string;
  relationships?: Schemas["SourceTargetRelationshipInputRepresentation"][];
}
export type VectorEmbeddingRepresentation = Schemas["VectorEmbeddingRepresentation"];
export type WeeklyScheduleInputRepresentation = {
  definitionName?: string;
  frequency: "Weekly";
  timeInfo?: Schemas["CdpTimeInputRepresentation"];
  daysOfWeek?: string[];
}
export type WeeklyScheduleRepresentation = {
  frequency: "Weekly";
  nextScheduledDate?: string;
  timeInfo?: Schemas["TimeOutputRepresentation"];
  daysOfWeek?: string[];
  interval?: number;
}

// ── Enum types (266) ──

export type AbstractBucketAlgorithmType = "TypographicClustering";
export type AccountEngagementConnectionDataStreamType = "EmailActivity" | "FormActivity" | "WebPageActivity";
export type ActivationActivationType = "ApiTriggered" | "Segment";
export type ActivationAdditionalAttributesConfigSource = "Direct" | "Related";
export type ActivationAdditionalAttributesConfigType = "Computed_Dimension" | "Computed_Measure" | "Model" | "Model_Related" | "Non_Aggregatable_Computed_Measure";
export type ActivationAttributeSource = "Direct" | "Related";
export type ActivationAttributeType = "Computed_Dimension" | "Computed_Measure" | "Model" | "Model_Related" | "Non_Aggregatable_Computed_Measure";
export type ActivationContactPointSourceConfigDataSourcePreference = "ContactPointPrefAny" | "ContactPointPrefBusiness" | "ContactPointPrefPersonal" | "ContactPointPrefPrimary";
export type ActivationContactPointType = "Email" | "Maid" | "Ott" | "Phone" | "Push" | "SubscriberKeyEmail" | "SubscriberKeyPhone" | "WhatsApp";
export type ActivationCustomerFileSource = "First_And_Third_Party" | "First_Party" | "Third_Party";
export type ActivationDataDeltaType = "[object Object]" | "[object Object]" | "[object Object]" | "[object Object]";
export type ActivationDefinitionActivationType = "ApiTriggered" | "Segment";
export type ActivationDefinitionCustomerFileSource = "FirstAndThirdParty" | "FirstParty" | "ThirdParty";
export type ActivationExternalPlatformCreationType = "Json" | "Manual";
export type ActivationExternalPlatformPrivacyType = "NotApplicable" | "ServiceProvider" | "ThirdParty" | "UpdateFailed";
export type ActivationExternalPlatformStatus = "Active" | "Error" | "Inactive" | "Processing";
export type ActivationExternalPlatformType = "Advertising" | "Analytics" | "Marketing" | "Publishing" | "Technology";
export type ActivationLastPublishStatus = "Error" | "Partner_Error" | "Partner_Processing" | "Publishing" | "Queued" | "Segment_Error" | "Skipped" | "Success";
export type ActivationPublishActionPublishStatus = "Error" | "NotSupported" | "PartnerError" | "PartnerProcessing" | "Publishing" | "Queued" | "SegmentError" | "Skipped" | "Success";
export type ActivationRefreshType = "Full_Refresh" | "Incremental";
export type ActivationStatus = "Active" | "Processing" | "Error" | "Inactive";
export type ActivationTargetPlatformType = "AmazonS3" | "AzureBlob" | "DataCloud" | "ExternalPlatform" | "GoogleCloudStorage" | "SalesforceMarketingCloud" | "Sftp";
export type ActivationTargetStatus = "Active" | "Processing" | "Error" | "Inactive";
export type AggregateAction = "Avg" | "Count" | "Maximum" | "Median" | "Minimum" | "StdDev" | "StdDevP" | "Sum" | "Unique" | "Var" | "VarP";
export type AggregateParametersNodeType = "Hierarchical" | "Standard";
export type AmazonMSKRouteDetailsType = "AmazonMsk";
export type AttributeFilterDateUnits = "Days" | "Months" | "Years";
export type AttributeFilterExpressionConjunction = "FilterConjunctionAnd" | "FilterConjunctionOr";
export type AttributeFilterType = "FilterOperatorDataTypeBoolean" | "FilterOperatorDataTypeDate" | "FilterOperatorDataTypeDateOnly" | "FilterOperatorDataTypeExactlyRelativeDate" | "FilterOperatorDataTypeNumber" | "FilterOperatorDataTypeRelateToNowDate" | "FilterOperatorDataTypeText";
export type AttributeLimitingExpressionOrder = "FilterSortOrderAsc" | "FilterSortOrderDesc";
export type BaseConnectionFieldCreationType = "Custom" | "Standard";
export type BaseConnectionFieldType = "Boolean" | "Currency" | "Date" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Unsupported" | "Url";
export type BucketBooleanSourceFieldType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type BucketDateArgumentType = "AbsoluteDate" | "Days" | "FiscalQuarters" | "FiscalYears" | "Months" | "Quarters" | "Weeks" | "Years";
export type BucketDateSourceFieldType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type BucketDimensionSourceFieldType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type BucketFieldType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type BucketMeasureSourceFieldType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type BucketSourceFieldType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type CdpCalculatedInsightDefinitionType = "CALCULATED_METRIC" | "EXTERNAL_METRIC" | "STREAMING_METRIC";
export type CdpCalculatedInsightPublishScheduleInterval = "ExternallyManaged" | "NotScheduled" | "One" | "Six" | "Streaming" | "SystemManaged" | "Twelve" | "TwentyFour";
export type CdpCalculatedInsightValidateDefinitionType = "CALCULATED_METRIC" | "EXTERNAL_METRIC" | "STREAMING_METRIC";
export type CdpDataActionOutputDataActionStatus = "Active" | "Error" | "InActive" | "Processing";
export type CdpDataActionOutputLastActionStatusErrorCode = "CreateFailed" | "DeleteFailed" | "ProcessingFailed";
export type CdpDataActionTargetOutputStatus = "Active" | "Error" | "InActive" | "Processing";
export type CdpDataActionTargetOutputStatusErrorCode = "CreateFailed" | "DeleteFailed" | "ProcessingFailed";
export type CdpDataActionTargetOutputSubType = "Grpc" | "Rest";
export type CdpDataActionTargetOutputType = "Core" | "Internal_WebHook" | "MarketingCloud" | "WebHook";
export type CdpDataActionTargetSubType = "Grpc" | "Rest";
export type CdpDataActionTargetType = "Core" | "Internal_WebHook" | "MarketingCloud" | "WebHook";
export type CdpDataGraphSourceObjectOutputType = "Activation_Audience" | "Bridge" | "Calculated" | "Calculated_Real_Time" | "Calculated_Streaming" | "Custom" | "Derived" | "Ml_Prediction" | "Segment_Membership" | "Standard" | "System" | "Transform";
export type CdpDataGraphSourceType = "CALCULATED" | "CALCULATED_STREAMING" | "CALCULATED_REAL_TIME" | "STANDARD" | "CUSTOM" | "SYSTEM" | "DERIVED" | "BRIDGE" | "SEGMENT_MEMBERSHIP" | "ML_PREDICTION" | "ACTIVATION_AUDIENCE" | "TRANSFORM";
export type CdpDataKitComponentInfoForBundleConnectorType = "Commerce" | "Crm" | "External" | "IngestApi" | "Mc" | "MoreConnectors" | "S3" | "StreamingApp";
export type CdpDataKitComponentInfoType = "DataStreamBundle" | "CalculatedInsight" | "DataLakeObject" | "DataTransform";
export type CdpDataKitComponentsType = "CalculatedInsight" | "DataLakeObject" | "DataStreamBundle" | "DataTransform";
export type CdpDataKitDeployBundleConfigForAccountEngagementDataStreamType = "EmailActivity" | "FormActivity" | "WebPageActivity";
export type CdpDataKitDeployBundleConfigForStreamingAppStreamingAppDataConnectorType = "MobileApp" | "WebApp";
export type CdpDataKitDeployComponentConfigCalculatedInsightPublishInterval = "ExternallyManaged" | "NotScheduled" | "One" | "Six" | "Streaming" | "SystemManaged" | "Twelve" | "TwentyFour";
export type CdpDataKitDeployComponentConfigForBundleConnectorType = "AccountEngagement" | "Commerce" | "Crm" | "External" | "IngestApi" | "MoreConnectors" | "S3" | "StreamingApp";
export type CdpDataKitDeployComponentConfigForTuaFrameworkComponentType = "ActivationTarget" | "AnalyticsDashboard" | "AnalyticsVisualization" | "AnalyticsWorkspace" | "CalculatedInsight" | "CopyFieldEnrichment" | "CurrencyConfigObject" | "DataAction" | "DataActionTarget" | "DataCleanRoomDataSpecDef" | "DataCleanRoomProvider" | "DataConnection" | "DataCustomCode" | "DataGraph" | "DataLakeObject" | "DataModelObject" | "DataSemanticSearch" | "DataShare" | "DataStreamBundle" | "DataTransform" | "EngagementSignal" | "FiscalCalendarConfigObject" | "IdentityResolution" | "IdpConfiguration" | "InternalDataConnector" | "IrRelatedListEnrichment" | "MarketSegment" | "MarketSegmentActivation" | "MlConfiguredModel" | "MlPredictionJob" | "MlRetriever" | "PersnlBatchDecision" | "PersonalizationObjective" | "PersonalizationPoint" | "PersonalizationRecommender" | "PersonalizationSchema" | "SecondaryIndex" | "SemanticModel" | "TuaTemplatedObject";
export type CdpDataKitDeployComponentConfigMlConfiguredModelConnectorType = "Anthropic" | "AzureOpenAI" | "Bedrock" | "Databricks" | "Generic" | "InternalEmbedding" | "OpenAI" | "OpenConnector" | "SageMaker" | "Salesforce" | "VertexAI";
export type CdpDataKitDeployComponentConfigMlConfiguredModelModelType = "Generative" | "Predictive" | "SpeechSynthesis" | "Summarization" | "Transcribe" | "Unknown";
export type CdpDataKitDeployComponentConfigMlRetrieverRetrieverQueryType = "Ensemble" | "NoCode" | "ProCode";
export type CdpDataKitDeployComponentType = "ActivationTarget" | "AnalyticsDashboard" | "AnalyticsVisualization" | "AnalyticsWorkspace" | "CalculatedInsight" | "CopyFieldEnrichment" | "CurrencyConfigObject" | "DataAction" | "DataActionTarget" | "DataCleanRoomDataSpecDef" | "DataCleanRoomProvider" | "DataConnection" | "DataCustomCode" | "DataGraph" | "DataLakeObject" | "DataSemanticSearch" | "DataShare" | "DataStreamBundle" | "DataTransform" | "EngagementSignal" | "FiscalCalendarConfigObject" | "IdentityResolution" | "IdpConfiguration" | "InternalDataConnector" | "IrRelatedListEnrichment" | "MarketSegment" | "MarketSegmentActivation" | "MlConfiguredModel" | "MlPredictionJob" | "MlRetriever" | "PersnlBatchDecision" | "PersonalizationObjective" | "PersonalizationPoint" | "PersonalizationRecommender" | "PersonalizationSchema" | "SecondaryIndex" | "SemanticModel" | "TuaTemplatedObject";
export type CdpIdentityResolutionConfigInputConfigurationType = "Account" | "Individual";
export type CdpIdentityResolutionMatchCriterionOutputMatchMethodType = "Exact" | "ExactNormalized" | "Fuzzy" | "FuzzyHigh" | "FuzzyLow";
export type CdpIdentityResolutionOutputConfigurationType = "Account" | "Individual";
export type CdpIdentityResolutionReconciliationFieldRuleOutputRuleType = "LastUpdated" | "MostFrequent" | "SourceSequence";
export type CdpIdentityResolutionReconciliationRuleOutputRuleType = "LastUpdated" | "MostFrequent" | "SourceSequence";
export type CdpIdentityResolutionRunNowOutputResultCode = "ExceededMaximumNumberOfSuccessfulRunsAllowedIn24Hours" | "IdentityResolutionJobIsAlreadyRunning" | "NoPendingChangesJobRunSkipped" | "SuccessfullySubmittedIdentityResolutionJobRunRequest";
export type CdpMlAggregatePredictionStatus = "Error" | "Success";
export type CdpMlAggregatePredictionType = "Average" | "Median" | "Sum";
export type CdpMlConfiguredModelCapability = "BinaryClassification" | "ChatCompletion" | "Completion" | "Embedding" | "Generic" | "MulticlassClassification" | "Regression";
export type CdpMlConfiguredModelStatus = "Disabled" | "Enabled";
export type CdpMlCustomizableFieldType = "ActionableVariable" | "TopFactor";
export type CdpMlFilterConjunctiveOperator = "And" | "Or";
export type CdpMlFilterCriterionBaseOperator = "Contains" | "EndsWith" | "EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo" | "In" | "IsNotNull" | "IsNull" | "LessThan" | "LessThanOrEqualTo" | "NotEqualTo" | "NotIn" | "StartsWith";
export type CdpMlFilterCriterionBaseType = "CalculatedInsightObjectField" | "DataModelObjectField" | "ModelInputField" | "SemanticSearchVectorEmbedRelatedField";
export type CdpMlFilterValueType = "Constant" | "Placeholder";
export type CdpMlFoundationalModelMajorVersionName = "AnthropicClaudeInstant" | "AzureOpenAIGPT35Turbo" | "AzureOpenAIGPT35Turbo_16k" | "AzureOpenAIGPT41" | "AzureOpenAIGPT41Mini" | "AzureOpenAIGPT41Nano" | "AzureOpenAIGPT4Omni" | "AzureOpenAIGPT4OmniMini" | "AzureOpenAIGPT4Turbo" | "AzureOpenAITextEmbeddingAda_002" | "BedrockAnthropicClaude35Sonnet" | "BedrockAnthropicClaude35SonnetV2" | "BedrockAnthropicClaude37Sonnet" | "BedrockAnthropicClaude3Haiku" | "BedrockAnthropicClaude3Opus" | "BedrockAnthropicClaude3Sonnet" | "BedrockAnthropicClaude4Sonnet" | "BedrockCohereCommandLightTextV14" | "BedrockCohereCommandTextV14" | "BedrockLlama4Maverick" | "BedrockMistral7BInstructV0_2" | "BedrockMistral8x7BInstructV0_1" | "BedrockMistralLargeV1" | "EinsteinApexGuruMultiTasker" | "EinsteinDeepSeekR1" | "EinsteinFlashTopic" | "EinsteinLlama4Scout" | "EinsteinTableauGPT" | "EinsteinTextBaseV2" | "EinsteinTextEval" | "EinsteinTextSum" | "Einstein_AbstractiveSummarization_V1" | "Einstein_Clip_Vit_B_32_Multilingual_V1" | "Einstein_E5_Base" | "Einstein_E5_Large" | "Einstein_E5_Large_V2" | "Einstein_E5_Multilingual" | "Einstein_SFR_Embedding_Mistral" | "Einstein_Segmentation_V3" | "Einstein_Wespeaker_Voxceleb_Resnet34_Lm" | "Einstein_Whisper_Large_V3" | "Eleven_Turbo_V2" | "GenericGPT35Turbo" | "GenericGPT35TurboInstruct" | "GenericGPT35Turbo_16k" | "GenericGPT4" | "GenericGPT41" | "GenericGPT41Mini" | "GenericGPT4Omni" | "GenericGPT4OmniMini" | "GenericGPT4Turbo" | "GenericGPT4_32k" | "GenericTextDaVinci002" | "GenericTextDaVinci003" | "GenericTextEmbeddingAda_002" | "Nova_2_PhoneCall" | "OpenAIGPT35Turbo" | "OpenAIGPT35TurboInstruct" | "OpenAIGPT35Turbo_16k" | "OpenAIGPT4" | "OpenAIGPT41" | "OpenAIGPT41Mini" | "OpenAIGPT41Nano" | "OpenAIGPT4Omni" | "OpenAIGPT4OmniMini" | "OpenAIGPT4Turbo" | "OpenAIGPT4_32k" | "OpenAITextDaVinci002" | "OpenAITextDaVinci003" | "OpenAITextEmbedding3_Large" | "OpenAITextEmbedding3_Small" | "OpenAITextEmbeddingAda_002" | "OpenConnector" | "Salesforce_Embedding_2_R" | "VertexAIGemini20Flash001" | "VertexAIGemini20FlashLite001" | "VertexAIGemini25Flash001" | "VertexAIGeminiEmbed001" | "VertexAIGeminiPro10_002" | "VertexAIGeminiPro15" | "VertexAIGeminiPro25" | "WhisperBaseEn_4_27" | "WhisperBase_4_27";
export type CdpMlFoundationalModelModelProviderName = "Anthropic" | "AzureOpenAI" | "Bedrock" | "Databricks" | "Generic" | "InternalEmbedding" | "OpenAI" | "OpenConnector" | "SageMaker" | "Salesforce" | "VertexAI";
export type CdpMlModelArtifactBaseModelType = "Generative" | "Predictive" | "Unknown";
export type CdpMlModelArtifactBaseRuntimeType = "External" | "Internal";
export type CdpMlModelArtifactBaseSourceType = "EdcNoCode" | "ModelConnector" | "OutOfTheBox";
export type CdpMlModelArtifactBaseStatus = "Disabled" | "Draft" | "Enabled";
export type CdpMlModelArtifactBaseSyncStatus = "Error" | "NotSynced" | "Synced" | "Syncing";
export type CdpMlModelArtifactGenerativeGenerativeModelType = "Mixed" | "Text";
export type CdpMlModelArtifactStatus = "Disabled" | "Draft" | "Enabled";
export type CdpMlModelFieldBaseDataType = "Boolean" | "Date" | "Number" | "Text";
export type CdpMlModelParameterDefinitionBaseType = "Continuous - a variable that can take on a value within a given range and is typically associated with measurements and quantities." | "Discrete - a variable that can take on only a finite or countable number of distinct values. These parameters are used in regression models, where the outcome is categorical, for example, a success or failure.";
export type CdpMlModelParameterOverrideBaseType = "Continuous" | "Discrete";
export type CdpMlPredictInputBaseType = "RawData";
export type CdpMlPredictionBaseStatus = "Error" | "Success";
export type CdpMlPredictResultPredictionType = "BinaryClassification" | "Generic" | "Regression";
export type CdpMlSetupBaseType = "EdcNoCode" | "ModelConnector";
export type CdpMlSetupPartitionBaseType = "EdcNoCode" | "ModelConnector";
export type CdpMonthlyRelativeScheduleDayOfWeek = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
export type CdpMonthlyRelativeScheduleWeekOfMonth = "First" | "Fourth" | "Last" | "Second" | "Third";
export type CdpObjectSourceTargetMapStatus = "Active" | "Creating" | "Deleting" | "Error" | "Inactive" | "Updating";
export type CdpQueryDataGraphMetadataPrimaryObjectType = "Adg" | "AdgActivationAudience" | "AdgExternal" | "Bridge" | "Calculated" | "CalculatedRealTime" | "CalculatedStreaming" | "Curated" | "Custom" | "Derived" | "MlPrediction" | "Package" | "SegmentMembership" | "Standard" | "System" | "Transform";
export type CdpQueryDataGraphMetadataStatus = "Error" | "Inprogress" | "Published" | "Ready" | "StatusUnspecified" | "Unrecognized";
export type CdpScheduleBaseType = "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
export type CdpScheduleFrequency = "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
export type CdpSegmentPublishSchedule = "NoRefresh" | "One" | "Two" | "Four" | "Six" | "Twelve" | "TwentyFour";
export type CdpSegmentSegmentCreationFlow = "Datakit" | "EinsteinGpt" | "Visual";
export type CdpSegmentSegmentType = "Dbt" | "Dynamic" | "EinsteinGptSegmentsUI" | "Lookalike" | "Realtimez" | "Waterfall";
export type CloudProviderDetailsStatus = "Allocating" | "DeletedRemotely" | "PendingAcceptance" | "PendingActivation" | "Ready" | "RejectedRemotely" | "TeardownInProgress" | "Unprovisioned";
export type CloudProviderDetailsType = "AmazonWebServices";
export type ComputeRelativeSortParametersDirection = "Ascending" | "Descending";
export type ConnectionCommandActionMethod = "Egress" | "Ingress";
export type ConnectionObjectObjectType = "Activity" | "Comment" | "Group" | "Permission" | "StructuredData" | "UnstructuredData" | "User";
export type ConnectionSchemaSchemaType = "DataConnectionEvent" | "IngestApi" | "StreamingApp";
export type ConnectionTestMethod = "Egress" | "Ingress";
export type ConnectorDetailsCategory = "Engagement" | "Other" | "Profile";
export type ConnectorsFrameworkConnectionSchemaAvailabilityStatus = "Available" | "InUse";
export type ConnectorsFrameworkConnectionSchemaFieldDataType = "Boolean" | "Currency" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
export type ContactPointConfigType = "Email" | "Maid" | "Ott" | "Phone" | "Push" | "SubscriberKeyEmail" | "SubscriberKeyPhone" | "WhatsApp";
export type ContactPointSourceDataSourcePreference = "ContactPointPrefAny" | "ContactPointPrefBusiness" | "ContactPointPrefPersonal" | "ContactPointPrefPrimary";
export type CrmConnectionConnectionStatus = "Active" | "Deleting" | "Error" | "InActive" | "Processing" | "SchemaRequired";
export type CrmConnectionFieldCreationType = "Custom" | "Standard";
export type CrmConnectionObjectCreationType = "Custom" | "Standard";
export type DailyScheduleFrequency = "Daily";
export type DataCleanRoomCollaborationStatus = "Active" | "Error" | "Inactive";
export type DataCleanRoomDataSpecificationMemberType = "Consumer" | "Provider";
export type DataCleanRoomDataSpecificationStatus = "Active" | "Error" | "Inactive" | "Processing";
export type DataCleanRoomDataSpecificationTemplateType = "Custom" | "Salesforce";
export type DataCleanRoomDataSpecificationUseCaseType = "Custom" | "Overlap";
export type DataCleanRoomMemberInvitationStatus = "Accept_Error" | "Accept_Initiated" | "Accepted" | "Pending" | "Received" | "Reject_Error" | "Reject_Initiated" | "Rejected" | "Send_Error" | "Sent";
export type DataCleanRoomMemberMemberStatus = "Active" | "Inactive" | "Mapping_Incomplete";
export type DataCleanRoomMemberMemberType = "Consumer" | "Provider";
export type DataCleanRoomProviderCreationType = "Packaged" | "Peer";
export type DataCleanRoomProviderSource = "AWS" | "DATA_CLOUD";
export type DataCleanRoomProviderSourceConfigType = "AWS" | "DATA_CLOUD";
export type DataCleanRoomProviderTemplateType = "Custom" | "Salesforce";
export type DataCleanRoomQueryJobStatus = "Created" | "Failed" | "Running" | "Success";
export type DataCleanRoomTemplateTemplateType = "Custom" | "Salesforce";
export type DataCleanRoomTemplateUseCaseType = "Custom" | "Overlap";
export type DataConnectionMethod = "Egress" | "Ingress";
export type DataConnectionStatus = "Connected" | "Disconnected" | "Failed" | "NeedsReAuth";
export type DataConnectionSyncStatus = "Failure" | "InProgress" | "InvalidCredentials" | "None" | "Pending" | "Success";
export type DataGraphFieldCiFieldType = "Dimension" | "Measure" | "ObjectTypeUnspecified";
export type DataGraphFieldDataType = "Boolean" | "Date" | "DateOnly" | "DateTime" | "Text";
export type DataGraphObjectDataType = "Adg" | "AdgActivationAudience" | "AdgExternal" | "Bridge" | "Calculated" | "CalculatedRealTime" | "CalculatedStreaming" | "Curated" | "Custom" | "Derived" | "MlPrediction" | "ObjectTypeUnspecified" | "Package" | "SegmentMembership" | "Standard" | "System" | "Transform";
export type DataGraphRelationshipCardinality = "CardinalityUnspecified" | "ManyToOne" | "OneToMany" | "OneToOne" | "Unrecognized";
export type DatakitComponentDetailsStatus = "Active" | "Deleting" | "Error" | "Processing";
export type DataKitComponentInfoBundleConnectorType = "AccountEngagement" | "Commerce" | "Crm" | "External" | "IngestApi" | "Mc" | "MoreConnectors" | "S3" | "StreamingApp";
export type DataKitComponentInfoComponentType = "ActivationTarget" | "AnalyticsDashboard" | "AnalyticsVisualization" | "AnalyticsWorkspace" | "CalculatedInsight" | "CopyFieldEnrichment" | "CurrencyConfigObject" | "DataAction" | "DataActionTarget" | "DataCleanRoomDataSpecDef" | "DataCleanRoomProvider" | "DataConnection" | "DataCustomCode" | "DataGraph" | "DataLakeObject" | "DataModelObject" | "DataSemanticSearch" | "DataShare" | "DataStreamBundle" | "DataTransform" | "EngagementSignal" | "FiscalCalendarConfigObject" | "IdentityResolution" | "IdpConfiguration" | "InternalDataConnector" | "IrRelatedListEnrichment" | "MarketSegment" | "MarketSegmentActivation" | "MlConfiguredModel" | "MlPredictionJob" | "MlRetriever" | "PersnlBatchDecision" | "PersonalizationObjective" | "PersonalizationPoint" | "PersonalizationRecommender" | "PersonalizationSchema" | "SecondaryIndex" | "SemanticModel" | "TuaTemplatedObject";
export type DataKitComponentType = "ActivationTarget" | "AnalyticsDashboard" | "AnalyticsVisualization" | "AnalyticsWorkspace" | "CalculatedInsight" | "CopyFieldEnrichment" | "CurrencyConfigObject" | "DataAction" | "DataActionTarget" | "DataCleanRoomDataSpecDef" | "DataCleanRoomProvider" | "DataConnection" | "DataCustomCode" | "DataGraph" | "DataLakeObject" | "DataModelObject" | "DataSemanticSearch" | "DataShare" | "DataStreamBundle" | "DataTransform" | "EngagementSignal" | "FiscalCalendarConfigObject" | "IdentityResolution" | "IdpConfiguration" | "InternalDataConnector" | "IrRelatedListEnrichment" | "MarketSegment" | "MarketSegmentActivation" | "MlConfiguredModel" | "MlPredictionJob" | "MlRetriever" | "PersnlBatchDecision" | "PersonalizationObjective" | "PersonalizationPoint" | "PersonalizationRecommender" | "PersonalizationSchema" | "SecondaryIndex" | "SemanticModel" | "TuaTemplatedObject";
export type DataKitDataKitType = "None" | "Sandbox";
export type DataKitUnDeployComponentDetailsType = "ActivationTarget" | "CalculatedInsight" | "DataAction" | "DataActionTarget" | "DataConnection" | "DataGraph" | "DataLakeObject" | "DataSemanticSearch" | "DataShare" | "DataStreamBundle" | "DataTransform" | "IdentityResolution" | "MarketSegment" | "MarketSegmentActivation" | "MlConfiguredModel" | "MlPredictionJob" | "MlRetriever" | "SemanticModel";
export type DataLakeFieldDataType = "Boolean" | "Currency" | "Date" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Unsupported" | "Url";
export type DataLakeObjectCategory = "Directory_Table" | "Engagement" | "Insights" | "Other" | "Profile";
export type DataLakeObjectStatus = "Active" | "Deleting" | "Error" | "Inactive" | "Processing";
export type DataModelObjectStatus = "Active" | "Error" | "Inactive" | "Processing";
export type DataObjectCategory = "Engagement" | "Other" | "Profile";
export type DataObjectFieldType = "Boolean" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
export type DataObjectType = "DataLakeObject" | "DataModelObject";
export type DataSpaceFilterConditionOperator = "ContainsAny" | "Equals" | "GreaterThan" | "In" | "LastNumberOfDays" | "LessThan" | "NotEquals" | "NotIn";
export type DataSpaceFilterConjunctiveOperator = "AndOperator" | "NoneOperator" | "OrOperator";
export type DataSpaceInfoStatus = "Active" | "Error" | "Processing";
export type DataSpaceMemberStatus = "Active" | "Error" | "Processing";
export type DataStreamDataAccessMode = "Direct_Access" | "Ingest";
export type DataStreamDetailedDataAccessMode = "Direct_Access" | "Ingest";
export type DataStreamDetailedDataStreamType = "AccountEngagement" | "Azure_Blob" | "Commerce_Bundle" | "Commerce_Data_Kit" | "ConnectorFramework" | "Cs" | "Events" | "Events_Package" | "External" | "FileUpload" | "Google_Cloud_Storage" | "IngestAPI" | "IngestAPI_Package" | "Mc" | "Mcde" | "Mcis" | "Package" | "PackageNDataKit" | "S3" | "S3_Arn" | "Sfdc" | "Sfdc_Bundle" | "Sfdc_Package_Kit" | "Sftp";
export type DataStreamDetailedLastRunStatus = "Cancelled" | "Extracting" | "Failure" | "In Progress" | "None" | "Pending" | "Success";
export type DataStreamDetailedStatus = "Active" | "Deleting" | "Error" | "Processing";
export type DataStreamFieldMappingTargetFieldReturntype = "Boolean" | "Currency" | "Date" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
export type DataStreamFrequencyFrequencyType = "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
export type DataStreamFrequencyRefreshDayOfWeek = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
export type DataStreamSourceFieldDatatype = "Date" | "DateTime" | "Number" | "Text";
export type DataStreamStatus = "Active" | "Deleting" | "Error" | "Processing";
export type DataTransformCreationType = "Custom" | "System";
export type DataTransformDefinitionType = "Dbt" | "DbtHidden" | "Sql" | "SqlHidden" | "Stl" | "StlHidden";
export type DataTransformLastRunStatus = "Canceled" | "Failure" | "InProgress" | "None" | "PartialFailure" | "PartiallyCanceled" | "Pending" | "Success";
export type DataTransformNodeAction = "Aggregate" | "Append_V2" | "Bucket" | "ComputeRelative" | "DateFormatConversion" | "Extension" | "Extract" | "Filter" | "Formula" | "Join" | "Load" | "OutputD360" | "Recommendation" | "Save" | "Schema" | "Split" | "SqlFilter" | "TypeCast" | "Update";
export type DataTransformRunHistoryBaseRunMode = "Full" | "Incremental";
export type DataTransformRunHistoryBaseRunModeReason = "BtDefinitionChanged" | "DmoMappingsChanged" | "EvaluationError" | "FullSyncInSrcObject" | "FunctionsRequireFullRun" | "IncrementalModeDisabled" | "IrregularDmoPk" | "MaxRetriesFailed" | "NoRecentFullRun" | "NodesRequireFullRun" | "NotAScheduledRun" | "RetryAfterPartialFailure" | "RunAfterPartialResult" | "TooManyChangesInSrcObject" | "UnsupportedObjectType";
export type DataTransformRunHistoryBaseStatus = "Canceled" | "Failure" | "InProgress" | "None" | "PartialFailure" | "PartiallyCanceled" | "Pending" | "RebuildFailure" | "RebuildPending" | "RebuildSuccess" | "Rebuilding" | "Success";
export type DataTransformStatus = "Active" | "Deleting" | "Error" | "Processing";
export type DataTransformType = "BATCH" | "STREAMING";
export type DmoFilterLimitOrder = "FilterSortOrderAsc" | "FilterSortOrderDesc";
export type EgressPropertiesOutputCompressionFormat = "Bzip2" | "Gzip" | "None";
export type EgressPropertiesOutputDelimiter = "BrokenPipe" | "Caret" | "Colon" | "Comma" | "Hash" | "Pipe" | "Semicolon" | "Slash" | "Tab" | "Tilde" | "Underscore";
export type EgressPropertiesPredeterminedFilename = "Activation" | "Segment" | "SegmentActivation";
export type ExactlyRelativeDateComparisonDateUnits = "Days" | "Months" | "Years";
export type ExtractGrainFieldGrainType = "Day" | "DayEpoch" | "FiscalMonth" | "FiscalQuarter" | "FiscalWeek" | "FiscalYear" | "Hour" | "Minute" | "Month" | "Quarter" | "Second" | "SecondEpoch" | "Week" | "Year";
export type FieldSrcTrgtRelationshipCardinality = "ManyToOne" | "OneToOne";
export type FieldSrcTrgtRelationshipCreationType = "CalculatedInsight" | "Curated" | "Custom" | "SegmentMembership" | "Standard" | "System";
export type FieldSrcTrgtRelationshipOwner = "DataCloud" | "Sobject";
export type FieldSrcTrgtRelationshipRelationshipOwner = "DataCloud" | "Sobject";
export type FieldSrcTrgtRelationshipStatus = "Active" | "Creating" | "DeactivateByUser" | "Deleting" | "Error" | "Inactive" | "Updating";
export type FilterDatSpaceFilterType = "Condition";
export type FilterDatSpaceOperator = "Equals" | "In_Operator";
export type FilterExpressionDatSpaceFilterOperator = "And_Operator" | "Or_Operator";
export type FilterExpressionDatSpaceFilterType = "Condition";
export type FilterExpressionType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type IdpConfigExtractedDloFieldDataType = "STRING" | "NUMBER" | "DATE" | "BOOLEAN";
export type IdpConfigurationActivationStatus = "Activated" | "Deactivated";
export type IdpConfigurationBaseActivationStatus = "Activated" | "Deactivated";
export type IdpConfigurationBaseRuntimeStatus = "Aborted" | "Failed" | "InProgress" | "NotStarted" | "Pending" | "Ready" | "Submitted" | "Success";
export type IdpConfigurationBaseStatus = "Error" | "NotSynced" | "Synced" | "Syncing";
export type IdpConfigurationPatchActivationStatus = "Activated" | "Deactivated";
export type IdpDocumentStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";
export type IdpProcessingStatusStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";
export type IngestApiConnectionSchemaAvailabilityStatus = "Available" | "InUse";
export type IngestApiConnectionSchemaFieldDataType = "Boolean" | "Currency" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
export type IngestApiConnectionStatus = "Connected" | "Disconnected" | "Failed" | "NeedsReAuth";
export type JoinParametersJoinType = "Cross" | "Inner" | "LeftOuter" | "Lookup" | "MultiValueLookup" | "Outer" | "RightOuter";
export type LoadDatasetType = "CalculatedInsightObject" | "DataLakeObject" | "DataModelObject";
export type MlConfiguredModelCapability = "BinaryClassification" | "ChatCompletion" | "Completion" | "Embedding" | "Generic" | "MulticlassClassification" | "Regression";
export type MlConfiguredModelConnectorType = "Anthropic" | "AzureOpenAI" | "Bedrock" | "Databricks" | "Generic" | "InternalEmbedding" | "OpenAI" | "SageMaker" | "VertexAI";
export type MlConfiguredModelGenerativeModelType = "Mixed" | "Text";
export type MlConfiguredModelModelType = "Generative" | "Predictive" | "Unknown";
export type MlConfiguredModelRuntimeType = "External" | "Internal";
export type MlConfiguredModelSetupType = "EdcNoCode" | "ModelConnector" | "OutOfTheBox";
export type MlConfiguredModelStatus = "Disabled" | "Enabled";
export type MlConfiguredModelVisibility = "Hidden" | "Shown";
export type MlConnectorEndpointAuthentication = "ApiKey" | "AwsAccessKey" | "GoogleSac" | "Jwt" | "Oauth";
export type MlConnectorEndpointConnectorType = "Anthropic" | "AzureOpenAI" | "Bedrock" | "Databricks" | "Generic" | "InternalEmbedding" | "OpenAI" | "OpenConnector" | "SageMaker" | "Salesforce" | "VertexAI";
export type MlConnectorEndpointRequestFormat = "Csv" | "DataFrameRecords" | "DataFrameSplit" | "Json" | "JsonDense" | "NumpyInput" | "NumpyInstance";
export type MlConnectorEndpointResponseFormat = "Csv" | "DataFrameRecords" | "DataFrameSplit" | "Json" | "JsonDense" | "NumpyInput" | "NumpyInstance";
export type MlDataAlertAlertType = "Auc" | "CollinearFields" | "CorrelateWithProtectedFields" | "CrossValidationFailed" | "DataLeakage" | "DisparateImpact" | "ExtremeValues" | "FalsePredictionRate" | "HighCardinality" | "MissingCategoricalValues" | "MissingNumericalValues" | "ObviousPredictor" | "RecommendedBuckets" | "Rsquared" | "SingleValue" | "SingleValueWithOther";
export type MlDataAlertQueryAssetType = "ModelArtifact";
export type MlDataAlertSourceType = "ModelTraining" | "Runtime";
export type MlModelInputTypeName = "ApplicationPdf" | "Float" | "ImageJpeg" | "ImagePng" | "Json" | "Text";
export type MlModelJsonModeName = "CustomSchema" | "Simple";
export type MlModelOutputTypeName = "ApplicationPdf" | "Float" | "ImageJpeg" | "ImagePng" | "Json" | "Text";
export type MlSetupBaseUpdateType = "EdcNoCode" | "ModelConnector";
export type MonthlySpecificScheduleFrequency = "Monthly";
export type OutputD360ParametersType = "DataLakeObject" | "DataModelObject";
export type QuerySqlMetadataItemType = "ArrayOfX" | "BigInt" | "Bool" | "Char" | "Date" | "Double" | "Float" | "Integer" | "Numeric" | "Oid" | "SmallInt" | "Time" | "Timestamp" | "TimestampTZ" | "Unspecified" | "Varchar";
export type QuerySqlParameterItemType = "ArrayOfX" | "BigInt" | "Bool" | "Char" | "Date" | "Double" | "Float" | "Integer" | "Numeric" | "Oid" | "SmallInt" | "Time" | "Timestamp" | "TimestampTZ" | "Unspecified" | "Varchar";
export type QuerySqlStatusCompletionStatus = "Finished" | "ResultsProduced" | "Running" | "Unspecified";
export type RecencyCriteriaValueType = "Record" | "Time";
export type RecencyCriteriaValueUnit = "Day" | "Hour";
export type RedshiftRouteDetailsType = "Redshift";
export type RefreshConfigRefreshMode = "TOTAL_REPLACE" | "UPSERT" | "INCREMENTAL" | "REPLACE" | "NEAR_REAL_TIME_INCREMENTAL" | "PARTIAL_UPDATE";
export type RelationshipFieldType = "CalculatedInsightField" | "DatamodelField" | "Sobjectfield";
export type ResourceFilterByPropertyFilterOperator = "EqualsOp" | "LikeOp" | "SubstrOp";
export type RouteDetailsType = "AmazonMsk" | "Redshift" | "Snowflake";
export type RunHistoryOutputProgressDataObjectType = "DataLakeObject" | "DataModelObject";
export type RunHistoryOutputProgressStatus = "Error" | "Pending" | "Running" | "Success";
export type SampleParametersSortDirection = "Ascending" | "Descending";
export type SampleParametersType = "Custom" | "TopN" | "Unique";
export type ScheduleFrequency = "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
export type ScheduleOutputFrequency = "Daily" | "Hourly" | "Minutely" | "Monthly" | "MonthlyRelative" | "Weekly" | "None" | "Transform";
export type SchemaFieldTypePropertiesType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type SchemaSliceMode = "Drop" | "Select";
export type SchemaTypePropertiesCastType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type SnowflakeRouteDetailsType = "Snowflake";
export type SqlFormulaFieldType = "Boolean" | "DateOnly" | "DateTime" | "Number" | "Text";
export type StreamingAppConnectionSchemaAvailabilityStatus = "Available" | "InUse";
export type StreamingAppConnectionSchemaCategory = "Engagement" | "Other" | "Profile";
export type StreamingAppConnectionSchemaFieldDataType = "Boolean" | "Currency" | "Date" | "DateOnly" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Text" | "Url";
export type StreamingAppConnectionStatus = "Connected" | "Disconnected" | "Failed" | "NeedsReAuth";
export type StreamingAppConnectionStreamingAppSubType = "WebApp_GA4";
export type StreamingAppConnectionStreamingAppType = "MobileApp" | "ServerApp" | "WebApp";
export type StreamingConnectorDetailsCategory = "Engagement" | "Other" | "Profile";
export type StreamingConnectorDetailsConfigCategory = "Directory_Table" | "Engagement" | "Insights" | "Other" | "Profile";
export type StreamingConnectorDetailsConfigStreamingAppType = "MobileApp" | "ServerApp" | "WebApp";
export type StreamingParametersOutputMode = "Append" | "Complete" | "Update";
export type StreamingParametersTriggerType = "Fixed";
export type TransformValidationIssueErrorCode = "DataTransformLimitExceeded" | "DefinitionValidationError" | "DloNameDoesNotExist" | "DmoOutputValidationError" | "NameValidationError" | "SqlExpressionIsNull" | "StreamingTransformCreateForbidden" | "TagsValidationError" | "TargetDloNotFound" | "TargetObjectNameNull" | "TypeValidationError";
export type TransformValidationIssueErrorSeverity = "Error" | "Fatal" | "Warning";
export type UseCaseTemplateMemberConfigMemberType = "Consumer" | "Provider";
export type WeeklyScheduleFrequency = "Weekly";

// ── Discriminated union types (3) ──

/** Discriminated union — narrows `connectorDetails` by `connectorType`. */
export type DataStreamConnectorInput =
    { connectorType: "DataConnector"; connectorDetails: Schemas["DataConnectorDetailsConfig"] }
  | { connectorType: "IngestApi"; connectorDetails: Schemas["IngestApiConnectorDetailsConfig"] }
  | { connectorType: "SalesforceDotCom"; connectorDetails: Schemas["CrmConnectorDetailsConfig"] }
  | { connectorType: "SalesforceMarketingCloud"; connectorDetails: Schemas["SalesforceMarketingCloudConnectorDetailsConfig"] }
  | { connectorType: "StreamingApp"; connectorDetails: Schemas["StreamingConnectorDetailsConfig"] }
;

/** Discriminated union — narrows by `connectorType`. */
export type ConnectionCreateInput =
    Simplify<{ connectorType: "IngestApi"; label?: string; name?: string }>
  | Simplify<{ connectorType: "SalesforceDotCom"; label?: string; name?: string; organizationId: string }>
  | Simplify<{ connectorType: "SalesforceMarketingCloud"; label?: string; name?: string }>
  | Simplify<{ connectorType: "StreamingApp"; label?: string; name?: string; streamingAppSubType?: "WebApp_GA4"; streamingAppType: "MobileApp" | "ServerApp" | "WebApp" }>
  | Simplify<{ connectorType: "AwsRdsPostgres" | "AzureBlob" | "Databricks" | "Gcs" | "Sftp" | "AmazonS3" | "Redshift" | "Snowflake" | "BigQuery" | "AzureSql"; label?: string; name?: string; credentials: Schemas["DataConnectionParameterInputRepresentation"][]; method: "Egress" | "Ingress"; parameters: Schemas["DataConnectionParameterInputRepresentation"][] }>
;

/** Discriminated union — narrows by `connectorType`. */
export type ConnectionUpdateInput =
    Simplify<{ connectorType: "SalesforceMarketingCloud"; label?: string; name?: string; addActivationBusinessUnits?: string[]; addBusinessUnitsToDataSpaces?: Schemas["McBuToDataSpaceInputRepresentation"][]; addIngestionBusinessUnits?: string[]; createProfileMappings?: boolean; removeActivationBusinessUnits?: string[]; removeBusinessUnitsToDataSpaces?: Schemas["McBuToDataSpaceInputRepresentation"][]; removeIngestionBusinessUnits?: string[] }>
  | Simplify<{ connectorType: "StreamingApp"; label?: string; name?: string; modules: Schemas["ConnectionModuleConfigInputRepresentation"][] }>
;

