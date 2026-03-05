# data-360-sdk

TypeScript SDK for the Salesforce Data 360 Connect REST API. Provides type-safe, idiomatic access to all 27 API resource categories with full coverage of all 185 endpoints.

## Features

- **Full API coverage** — 27 service namespaces, 185 endpoints, 100% spec coverage
- **Type-safe** — Auto-generated types from the OpenAPI 3.0.0 spec (751 schemas + 247 enums)
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

All 751 schema types and 247 enum types are exported as named types, discoverable via autocomplete:

```typescript
import type {
  DataStreamInputRepresentation,
  DataLakeObjectCategory,
  RefreshConfigRefreshMode,
} from "data-360-sdk";

// Or from the types-only subpath (zero runtime cost)
import type { DataStreamInputRepresentation } from "data-360-sdk/schemas";

// Schema<> helper also available
import type { Schema } from "data-360-sdk";
type Input = Schema<"DataStreamInputRepresentation">;
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
for await (const batch of client.segments.listAll({ batchSize: 50 })) {
  for (const segment of batch) {
    console.log(segment);
  }
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

185 endpoints across 27 service namespaces. Generated from the [Data 360 Connect API OpenAPI Spec](https://developer.salesforce.com/docs/data/connectapi/references/spec) with full coverage.

| Service | Namespace | Methods |
|---------|-----------|---------|
| Activation Targets | `client.activationTargets` | list, get, create, update, listExternalPlatforms |
| Activations | `client.activations` | list, getById, create, update, delete, getData |
| Calculated Insights | `client.calculatedInsights` | list, get, create, delete, patch, run |
| Connections | `client.connections` | list, get, create, update, put, delete, test, testById, testSchema, getObjectFields, getFields, getObjects, listObjects, getDatabaseSchemas, listDatabaseSchemas, getDatabases, listDatabases, listEndpoints, previewData, listSchema, updateSchema, listSitemap, updateSitemap, runAction, runActionById |
| Connectors | `client.connectors` | list, get |
| Data Action Targets | `client.dataActionTargets` | list, get, create, delete, getSigningKey, resetSigningKey |
| Data Actions | `client.dataActions` | list, create |
| Data Clean Room | `client.dataCleanRoom` | listCollaborations, createCollaborations, acceptInvitation, rejectInvitation, run, listJobs, listProviders, getProvider, createProviders, listProviderTemplates, listSpecifications, createSpecifications, listTemplates |
| Data Graphs | `client.dataGraphs` | listMetadata, get, create, delete, getData, getDataById, refresh |
| Data Kits | `client.dataKits` | list, undeploy, getDependencies, getDeploymentStatus |
| Data Lake Objects | `client.dataLakeObjects` | list, get, create, delete, patch |
| Data Model Objects | `client.dataModelObjects` | list, get, create, delete, patch, listRelationships, createRelationships, deleteRelationships, listMappings, getMapping, createMapping, deleteMapping, deleteFieldMappings, patchFieldMappings |
| Data Spaces | `client.dataSpaces` | list, get, create, patch, listMembers, getMembers, addMember, updateMembers |
| Data Streams | `client.dataStreams` | list, get, create, delete, patch, run |
| Data Transforms | `client.dataTransforms` | list, get, create, put, delete, run, cancel, retry, refreshStatus, getRunHistory, listSchedule, updateSchedule, validate |
| Document AI | `client.documentAi` | extractData, generateSchema, listConfigurations, getConfiguration, createConfiguration, deleteConfigurations, patchConfigurations, getGlobalConfig, run |
| Identity Resolutions | `client.identityResolutions` | list, get, create, delete, patch, runNow |
| Insights | `client.insights` | getMetadata, listMetadata, getCalculatedInsight |
| Machine Learning | `client.machineLearning` | listAlerts, patchAlerts, listConfiguredModels, getConfiguredModel, deleteConfiguredModels, patchConfiguredModels, listModelArtifacts, getModelArtifact, deleteModelArtifacts, patchModelArtifacts, predict, listSetupVersions, createSetupVersions, getSetupVersions, patchSetupVersions, getPartitions, getPartition |
| Metadata | `client.metadata` | get |
| Private Network Routes | `client.privateNetworkRoutes` | list, get, create, delete |
| Profile | `client.profile` | list, get, getMetadata, listMetadata, getCalculatedInsights, getChildRecords |
| Query V1/V2 | `client.queryV1V2` | executeV1, executeV2, getNextBatch |
| Query (SQL) | `client.query` | execute, getStatus, getRows, delete, executeAndWait |
| Search Index | `client.searchIndex` | list, get, create, delete, patch, getConfig |
| Segments | `client.segments` | list, get, create, delete, patch, count, countWithInput, listMembers, publish, deactivate |
| Universal ID Lookup | `client.universalIdLookup` | lookup |

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

## Development

```bash
npm run generate    # Regenerate types from OpenAPI spec
npm run typecheck   # Type check
npm test            # Run tests
npm run build       # Build ESM + CJS
```

## License

MIT
