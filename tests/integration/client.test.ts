import { describe, it, expect } from "vitest";
import { Data360Client } from "../../src/index.js";

const INSTANCE_URL = process.env.DATA360_INSTANCE_URL;
const ACCESS_TOKEN = process.env.DATA360_ACCESS_TOKEN;

const isLive = INSTANCE_URL && ACCESS_TOKEN;

describe.skipIf(!isLive)("Data360Client integration", () => {
  // Client is only constructed when tests actually run (env vars present)
  const getClient = () =>
    new Data360Client({
      instanceUrl: INSTANCE_URL!,
      auth: { type: "static", accessToken: ACCESS_TOKEN! },
    });

  it("lists connectors", async () => {
    const result = await getClient().connectors.list({ batchSize: 5 });
    expect(result).toBeDefined();
  });

  it("gets API metadata", async () => {
    const result = await getClient().metadata.get();
    expect(result).toBeDefined();
  });

  it("lists connections", async () => {
    const result = await getClient().connections.list({ connectorType: "SalesforceDotCom", batchSize: 5 });
    expect(result).toBeDefined();
  });
});

describe("Data360Client construction", () => {
  it("instantiates with all 27 service namespaces", () => {
    const client = new Data360Client({
      instanceUrl: "https://example.salesforce.com/services/data/v66.0",
      auth: { type: "static", accessToken: "test" },
    });

    expect(client.activationTargets).toBeDefined();
    expect(client.activations).toBeDefined();
    expect(client.calculatedInsights).toBeDefined();
    expect(client.connections).toBeDefined();
    expect(client.connectors).toBeDefined();
    expect(client.dataActionTargets).toBeDefined();
    expect(client.dataActions).toBeDefined();
    expect(client.dataCleanRoom).toBeDefined();
    expect(client.dataGraphs).toBeDefined();
    expect(client.dataKits).toBeDefined();
    expect(client.dataLakeObjects).toBeDefined();
    expect(client.dataModelObjects).toBeDefined();
    expect(client.dataSpaces).toBeDefined();
    expect(client.dataStreams).toBeDefined();
    expect(client.dataTransforms).toBeDefined();
    expect(client.documentAi).toBeDefined();
    expect(client.identityResolutions).toBeDefined();
    expect(client.insights).toBeDefined();
    expect(client.machineLearning).toBeDefined();
    expect(client.metadata).toBeDefined();
    expect(client.privateNetworkRoutes).toBeDefined();
    expect(client.profile).toBeDefined();
    expect(client.queryV1V2).toBeDefined();
    expect(client.query).toBeDefined();
    expect(client.searchIndex).toBeDefined();
    expect(client.segments).toBeDefined();
    expect(client.universalIdLookup).toBeDefined();
  });
});
