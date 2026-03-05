# data-360-sdk

TypeScript SDK for the Salesforce Data 360 Connect REST API. Provides type-safe, idiomatic access to all 27 API resource categories with 185+ endpoints.

## Features

- **Full API coverage** — 27 service namespaces covering all Data 360 endpoints
- **Type-safe** — Auto-generated types from the OpenAPI 3.0.0 spec (687 schemas)
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

// List connections
const connections = await client.connections.list({ batchSize: 10 });

// Get a specific segment
const segment = await client.segments.get("MySegment");

// Execute a SQL query
const result = await client.query.execute({
  sql: "SELECT Id, Name FROM Account__dlm LIMIT 10",
});
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
      // Call your token refresh endpoint
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
  orderBy: "createdDate desc",
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

### Collect All

```typescript
import { collectAll } from "data-360-sdk";

const allSegments = await collectAll({
  httpClient, // internal — use listAll() instead for most cases
  path: "/ssot/segments",
  batchSize: 100,
});
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
const { queryId } = await client.query.execute({
  sql: "SELECT Id FROM Account__dlm",
});

// Poll status
let status;
do {
  status = await client.query.getStatus(queryId);
} while (status.status === "running");

// Fetch rows
const rows = await client.query.getRows(queryId, { batchSize: 200 });
```

## Available Services

| Service | Namespace | Key Methods |
|---------|-----------|-------------|
| Activation Targets | `client.activationTargets` | list, get, create, update |
| Activations | `client.activations` | list, create, delete, getData |
| Calculated Insights | `client.calculatedInsights` | list, get, run |
| Connections | `client.connections` | list, get, create, update, test, getObjectFields |
| Connectors | `client.connectors` | list, get |
| Data Action Targets | `client.dataActionTargets` | list, get, getSigningKey |
| Data Actions | `client.dataActions` | list, create |
| Data Clean Room | `client.dataCleanRoom` | listCollaborations, acceptInvitation, rejectInvitation |
| Data Graphs | `client.dataGraphs` | list, get, getData, refresh |
| Data Kits | `client.dataKits` | list |
| Data Lake Objects | `client.dataLakeObjects` | list, get |
| Data Model Objects | `client.dataModelObjects` | list, get, create |
| Data Spaces | `client.dataSpaces` | list, get, listMembers, addMember |
| Data Streams | `client.dataStreams` | list, get, run |
| Data Transforms | `client.dataTransforms` | list, get, run, cancel, retry, getRunHistory |
| Document AI | `client.documentAi` | extractData, generateSchema, listConfigurations |
| Identity Resolutions | `client.identityResolutions` | list, get, runNow |
| Insights | `client.insights` | getMetadata, getCalculatedInsight |
| Machine Learning | `client.machineLearning` | listAlerts, listConfiguredModels, predict |
| Metadata | `client.metadata` | get |
| Private Network Routes | `client.privateNetworkRoutes` | list, get |
| Profile | `client.profile` | list, get, getMetadata, getCalculatedInsights |
| Query V1/V2 | `client.queryV1V2` | executeV1, executeV2, getNextBatch |
| Query (SQL) | `client.query` | execute, getStatus, getRows, executeAndWait |
| Search Index | `client.searchIndex` | list, get, getConfig |
| Segments | `client.segments` | list, get, count, listMembers, publish, deactivate |
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
