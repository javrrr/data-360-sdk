# data-360-sdk

TypeScript SDK for the Salesforce Data 360 Connect REST API. Provides type-safe, idiomatic access to all 27 API resource categories with full coverage of 250+ endpoints.

## Features

- **Full API coverage** — 27 service namespaces, 250+ methods, generated from the OpenAPI spec
- **Type-safe** — Auto-generated types and services from the OpenAPI 3.0.0 spec (850+ schemas + 280 enums + discriminated input unions + typed query parameters)
- **Zero HTTP dependencies** — Uses native `fetch` (Node.js 18+, browsers, React Native)
- **Dual format** — ESM + CJS output, tree-shakeable with `sideEffects: false`
- **Retry & backoff** — Exponential backoff with jitter, Retry-After header support
- **Pagination** — Built-in async iterators for offset-based and nextPageUrl-based pagination
- **Multiple auth strategies** — Static token, refreshable token, OAuth2 client credentials

## Installation

```bash
npm install data-360-sdk
```

## Quick Start

```typescript
import { Data360Client } from "data-360-sdk";

const client = new Data360Client({
  instanceUrl: "https://your-instance.my.salesforce.com/services/data/v66.0",
  auth: {
    type: "static",
    accessToken: "your-access-token",
  },
});

// List connections (connectorType is required)
const connections = await client.connections.list({
  connectorType: "SalesforceDotCom",
  batchSize: 10,
});

// Get a specific segment
const segment = await client.segments.get("MySegment");

// Execute a SQL query
const result = await client.query.execute({
  sql: "SELECT Id, Name FROM Account__dlm LIMIT 10",
});
```

## Types

All schema, enum, and query parameter types are exported as named types, discoverable via autocomplete:

```typescript
import type {
  DataStreamInputRepresentation,
  DataStreamCreateInput,
  ConnectionCreateInput,
  DataLakeObjectCategory,
  RefreshConfigRefreshMode,
  // Generated query param interfaces
  DataStreamsDeleteParams,
  ConnectionsListParams,
} from "data-360-sdk";

// Or from the types-only subpath (zero runtime cost)
import type { DataStreamInputRepresentation } from "data-360-sdk/schemas";

// Schema<> helper also available
import type { Schema } from "data-360-sdk";
type Input = Schema<"DataStreamInputRepresentation">;
```

### Prefer developer-facing input types

Use normalized SDK input aliases when available; they provide clearer IntelliSense and stricter narrowing than raw OpenAPI shapes.

```typescript
import type {
  ConnectionCreateInput,
  DataStreamCreateInput,
} from "data-360-sdk";

const streamInput: DataStreamCreateInput = {
  name: "WebEventsStream",
  label: "Web Events",
  datasource: "DataConnector",
  datastreamType: "CONNECTORSFRAMEWORK",
  connectorInfo: {
    connectorType: "IngestApi",
    connectorDetails: { name: "ingest-api-connector", events: ["WebEvent"] },
  },
  // Accepts either one DLO object or an array.
  dataLakeObjectInfo: {
    name: "WebEvent__dll",
    label: "Web Event",
    category: "Engagement",
    fields: [],
  },
  mappings: [],
  refreshConfig: { refreshMode: "FullRefresh" },
};

const connectionInput: ConnectionCreateInput = {
  connectorType: "SalesforceDotCom",
  label: "CRM Connection",
  organizationId: "00Dxx0000000001",
};
```

## Authentication

### Static Token

```typescript
const client = new Data360Client({
  instanceUrl: "https://instance.my.salesforce.com/services/data/v66.0",
  auth: {
    type: "static",
    accessToken: "your-token",
  },
});
```

### Refreshable Token

```typescript
const client = new Data360Client({
  instanceUrl: "https://instance.my.salesforce.com/services/data/v66.0",
  auth: {
    type: "refresh",
    accessToken: "initial-token",
    refreshToken: "refresh-token",
    refreshFn: async (refreshToken) => {
      const response = await fetch("https://login.salesforce.com/services/oauth2/token", {
        method: "POST",
        body: new URLSearchParams({
          grant_type: "refresh_token",
          client_id: "your-client-id",
          client_secret: "your-client-secret",
          refresh_token: refreshToken,
        }),
      });
      const data = await response.json();
      return {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresIn: data.expires_in,
      };
    },
  },
});
```

### OAuth2 Client Credentials

```typescript
const client = new Data360Client({
  instanceUrl: "https://instance.my.salesforce.com/services/data/v66.0",
  auth: {
    type: "oauth2",
    clientId: "your-client-id",
    clientSecret: "your-client-secret",
    tokenUrl: "https://login.salesforce.com/services/oauth2/token",
  },
});
```

## Pagination

### Manual Pagination

```typescript
const page = await client.segments.list({
  batchSize: 20,
  offset: 0,
});
```

### Async Iterator

```typescript
for await (const segment of client.segments.listAll({ batchSize: 50 })) {
  console.log(segment);
}
```

## Error Handling

```typescript
import {
  Data360Error,
  BadRequestError,
  AuthenticationError,
  RateLimitError,
  NotFoundError,
} from "data-360-sdk";

try {
  await client.connections.get("nonexistent");
} catch (err) {
  if (err instanceof NotFoundError) {
    console.log("Connection not found");
  } else if (err instanceof RateLimitError) {
    console.log(`Rate limited, retry after ${err.retryAfter}s`);
  } else if (err instanceof AuthenticationError) {
    console.log("Token expired or invalid");
  } else if (err instanceof Data360Error) {
    console.log(`API error: ${err.status} ${err.message}`, err.body);
  }
}
```

## Query Execution

### Fire and Poll

```typescript
// Execute and automatically poll until complete
const result = await client.query.executeAndWait(
  { sql: "SELECT Id FROM Account__dlm" },
  { pollIntervalMs: 2000, timeoutMs: 300000 },
);
```

### Manual Polling

```typescript
const queryResult = await client.query.execute({
  sql: "SELECT Id FROM Account__dlm",
});

const queryId = queryResult.status?.queryId;

if (queryId) {
  // Poll status
  let status = await client.query.getStatus(queryId);
  while (status.completionStatus?.startsWith("Running")) {
    await new Promise((r) => setTimeout(r, 2000));
    status = await client.query.getStatus(queryId);
  }

  // Fetch rows
  const rows = await client.query.getRows(queryId, { batchSize: 200 });
}
```

## Available Services

220+ methods across 27 service namespaces. Service classes and typed query parameter interfaces are auto-generated from the [Data 360 Connect API OpenAPI Spec](https://developer.salesforce.com/docs/data/connectapi/references/spec).

| Service | Namespace | Methods |
|---------|-----------|---------|
| Activation Targets | `client.activationTargets` | list, listAll, get, create, patch, update, listExternalPlatforms, listAllExternalPlatforms |
| Activations | `client.activations` | list, listAll, get, getById, create, put, update, delete, listData, getData, listAllData |
| Calculated Insights | `client.calculatedInsights` | list, listAll, get, create, delete, patch, run |
| Connections | `client.connections` | list, listAll, get, create, update, patch, put, delete, test, testByPost, postTest, postActions, createActionsById, createDatabaseSchemas, createDatabases, getEndpoints, createObjects, createFields, createPreview, listSchema, putSchema, getSitemap, putSitemap, listAllSchema |
| Connectors | `client.connectors` | list, listAll, get |
| Data Action Targets | `client.dataActionTargets` | list, listAll, get, create, delete, getSigningKey, createSigningKey, resetSigningKey |
| Data Actions | `client.dataActions` | list, listAll, create |
| Data Clean Room | `client.dataCleanRoom` | listCollaborations, listAllCollaborations, createCollaborations, acceptInvitation, rejectInvitation, run, listCollaborationsJobs, listAllCollaborationsJobs, listProviders, listAllProviders, createProviders, getProviders, listProvidersTemplates, listAllProvidersTemplates, listSpecifications, listAllSpecifications, createSpecifications, listTemplates, listAllTemplates |
| Data Graphs | `client.dataGraphs` | list, listAll, get, create, delete, refresh, getData, getDataByGet, getMetadata |
| Data Kits | `client.dataKits` | list, create, delete, patch, createByPost, listDependencies, getDeploymentStatus, createUndeploy, listAvailableComponents, getDataKitManifest |
| Data Lake Objects | `client.dataLakeObjects` | list, listAll, get, create, delete, patch |
| Data Model Objects | `client.dataModelObjects` | list, listAll, get, create, delete, patch, listRelationships, listAllRelationships, createRelationships, deleteRelationships, listMappings, listAllMappings, getMappings, createMappings, deleteMappings, deleteMappingsFieldMappings, patchMappingsFieldMappings |
| Data Spaces | `client.dataSpaces` | list, listAll, get, create, patch, listMembers, listAllMembers, putMembers, getMembers |
| Data Streams | `client.dataStreams` | list, listAll, get, create, delete, patch, run |
| Data Transforms | `client.dataTransforms` | list, listAll, get, create, put, delete, run, cancel, retry, refreshStatus, createValidation, listRunHistory, listAllRunHistory, getSchedule, putSchedule |
| Document AI | `client.documentAi` | extractData, generateSchema, listConfigurations, listAllConfigurations, createConfigurations, deleteConfigurations, getConfigurations, patchConfigurations, run, getGlobalConfig |
| Identity Resolutions | `client.identityResolutions` | list, listAll, get, create, delete, patch, runNow |
| Insights | `client.insights` | getMetadata, getMetadataByGet, getCalculatedInsights |
| Machine Learning | `client.machineLearning` | createAlerts, patchAlerts, listConfiguredModels, listAllConfiguredModels, getConfiguredModels, deleteConfiguredModels, patchConfiguredModels, listModelArtifacts, listAllModelArtifacts, getModelArtifacts, deleteModelArtifacts, patchModelArtifacts, createPredict, listModelSetupsSetupVersions, listAllModelSetupsSetupVersions, createModelSetupsSetupVersions, getModelSetupsSetupVersions, patchModelSetupsSetupVersions, listModelSetupsSetupVersionsByGet, listAllModelSetupsSetupVersionsByGet, getModelSetupsSetupVersionsByGet, listJobs, listAllJobs, getJobs, listJobsTasks, listAllJobsTasks, getJobsTasks, listPredictionJobDefinitions, listAllPredictionJobDefinitions, createPredictionJobDefinitions, getPredictionJobDefinitions, patchPredictionJobDefinitions, deletePredictionJobDefinitions |
| Metadata | `client.metadata` | list, getEntities |
| Private Network Routes | `client.privateNetworkRoutes` | list, listAll, get, create, delete |
| Profile | `client.profile` | get, getByGet, getGet, getCalculatedInsights, getMetadata, getMetadataByGet |
| Query V1/V2 | `client.queryV1V2` | create, createV2, getV2, executeV1, executeV2, getNextBatch |
| Query (SQL) | `client.query` | create, get, delete, getRows, execute, getStatus, executeAndWait |
| Search Index | `client.searchIndex` | list, listAll, get, create, delete, patch, getConfig |
| Segments | `client.segments` | list, listAll, get, create, delete, patch, count, countWithInput, deactivate, deactivateByPost, publish, getMembers, listMembers |
| Universal ID Lookup | `client.universalIdLookup` | get, lookup |

## Configuration Options

```typescript
const client = new Data360Client({
  instanceUrl: "https://instance.my.salesforce.com/services/data/v66.0",
  auth: { type: "static", accessToken: "token" },
  timeout: 30000,        // Request timeout in ms (default: 30000)
  maxRetries: 3,         // Retries for 429/5xx (default: 3)
  fetch: customFetch,    // Custom fetch implementation
  requestInterceptors: [
    ({ url, init }) => {
      console.log(`→ ${init.method} ${url}`);
      return { url, init };
    },
  ],
  responseInterceptors: [
    (response, request) => {
      console.log(`← ${response.status} ${request.url}`);
      return response;
    },
  ],
});
```

## Architecture

```
src/
  generated/
    openapi.yaml          ← Fetched spec (committed for diffing)
    openapi.d.ts          ← Raw types from openapi-typescript
    services/             ← Generated base service classes
      *.base.ts           ← One per API tag (27 files)
      index.ts            ← Barrel export
  schemas.ts              ← Named re-exports with overrides, enums, unions
  resources/
    base-resource.ts      ← Abstract base with pagination helpers
    *.ts                  ← Final services (re-export or extend generated bases)
  client.ts               ← Data360Client wiring all services
  index.ts                ← Public API barrel export

scripts/
  generate-types.ts       ← Type generation (openapi.d.ts + schemas.ts)
  generate-services.ts    ← Service generation (services/*.base.ts)
```

Services are generated from the OpenAPI spec, then optionally extended in `src/resources/` for custom types (e.g., `DataStreamCreateInput`) or convenience methods (e.g., `executeAndWait`).

## Development

```bash
npm run generate    # Regenerate types + services from OpenAPI spec
npm run typecheck   # Type check
npm test            # Run tests
npm run build       # Build ESM + CJS
```

### Updating the SDK

When the API spec changes:

1. Run `npm run generate` — fetches the latest spec and regenerates types + service base classes
2. Run `npm run typecheck` — TypeScript will flag any breaking changes in hand-written extensions
3. Fix any compilation errors in `src/resources/` (method signatures or types that changed)
4. Run `npm test` — verify all tests pass
5. Run `npm run build` — produce the distributable

## Releasing

After your PR is merged to `main`:

```bash
git checkout main
git pull --ff-only
```

Bump version (creates version commit + git tag):

```bash
npm run release:version:patch
# or: release:version:minor / release:version:major
```

Run checks, push `main` and tags, then create a GitHub release with auto-generated notes:

```bash
npm run release:run
```

The `Publish to npm` GitHub Action is triggered by `release.published`.

## License

MIT
