import { describe, it, expect, vi } from "vitest";
import { ConnectionsService } from "../../src/resources/connections.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new" })),
    patch: vi.fn(async () => ({ id: "123" })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("ConnectionsService", () => {
  it("lists connections", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectionsService(httpClient);

    await service.list({ connectorType: "SalesforceDotCom", batchSize: 5 });

    expect(httpClient.get).toHaveBeenCalledWith("/ssot/connections", {
      query: { limit: 5, offset: undefined, orderBy: undefined, connectorType: "SalesforceDotCom" },
    });
  });

  it("gets a connection", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectionsService(httpClient);

    await service.get("conn-123");

    expect(httpClient.get).toHaveBeenCalledWith(
      "/ssot/connections/conn-123",
      undefined,
    );
  });

  it("creates fields for a connection object", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectionsService(httpClient);

    await service.createFields("conn-123", "Account", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("tests a connection (postTest)", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectionsService(httpClient);

    await service.postTest({ connectorType: "AwsS3", credentials: [], parameters: [], method: "Ingress" } as any);

    expect(httpClient.post).toHaveBeenCalledWith(
      "/ssot/connections/actions/test",
      expect.objectContaining({ connectorType: "AwsS3" }),
      undefined,
    );
  });

  it("tests an existing connection by ID", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectionsService(httpClient);

    await service.test("conn-123");

    expect(httpClient.post).toHaveBeenCalledWith(
      "/ssot/connections/conn-123/actions/test",
      undefined,
      undefined,
    );
  });
});
