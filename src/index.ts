// Client
export { Data360Client } from "./client.js";

// Core types
export type {
  ClientConfig,
  AuthConfig,
  StaticTokenAuth,
  RefreshableTokenAuth,
  OAuth2Auth,
  RequestOptions,
  PaginationParams,
  PaginatedResponse,
  RequestInterceptor,
  ResponseInterceptor,
} from "./core/types.js";

// Errors
export {
  Data360Error,
  BadRequestError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  RateLimitError,
  ServerError,
} from "./core/errors.js";

// Pagination helpers
export { paginate, collectAll } from "./core/pagination.js";

// Type helpers
export type {
  Schema,
  ResponseBody,
  RequestBody,
  QueryParams,
  PathParams,
} from "./utils/type-helpers.js";

// Generated schema types (re-export for consumer use)
export type { paths, components, operations } from "./generated/openapi.js";

// Resource services (for advanced usage / extension)
export { ActivationTargetsService } from "./resources/activation-targets.js";
export { ActivationsService } from "./resources/activations.js";
export { CalculatedInsightsService } from "./resources/calculated-insights.js";
export { ConnectionsService } from "./resources/connections.js";
export { ConnectorsService } from "./resources/connectors.js";
export { DataActionTargetsService } from "./resources/data-action-targets.js";
export { DataActionsService } from "./resources/data-actions.js";
export { DataCleanRoomService } from "./resources/data-clean-room.js";
export { DataGraphsService } from "./resources/data-graphs.js";
export { DataKitsService } from "./resources/data-kits.js";
export { DataLakeObjectsService } from "./resources/data-lake-objects.js";
export { DataModelObjectsService } from "./resources/data-model-objects.js";
export { DataSpacesService } from "./resources/data-spaces.js";
export { DataStreamsService } from "./resources/data-streams.js";
export { DataTransformsService } from "./resources/data-transforms.js";
export { DocumentAiService } from "./resources/document-ai.js";
export { IdentityResolutionsService } from "./resources/identity-resolutions.js";
export { InsightsService } from "./resources/insights.js";
export { MachineLearningService } from "./resources/machine-learning.js";
export { MetadataService } from "./resources/metadata.js";
export { PrivateNetworkRoutesService } from "./resources/private-network-routes.js";
export { ProfileService } from "./resources/profile.js";
export { QueryV1V2Service } from "./resources/query-v1v2.js";
export { QueryService } from "./resources/query.js";
export { SearchIndexService } from "./resources/search-index.js";
export { SegmentsService } from "./resources/segments.js";
export { UniversalIdLookupService } from "./resources/universal-id-lookup.js";
