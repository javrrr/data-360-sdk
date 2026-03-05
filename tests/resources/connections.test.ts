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

    await service.list({ batchSize: 5 });

    expect(httpClient.get).toHaveBeenCalledWith("/ssot/connections", {
      query: { batchSize: 5, offset: undefined, orderBy: undefined },
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

  it("gets object fields for a connection", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectionsService(httpClient);

    await service.getObjectFields("conn-123", "Account");

    expect(httpClient.get).toHaveBeenCalledWith(
      "/ssot/connections/conn-123/objects/Account/fields",
      undefined,
    );
  });

  it("tests a connection", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectionsService(httpClient);

    await service.test({ connectionType: "S3" });

    expect(httpClient.post).toHaveBeenCalledWith(
      "/ssot/connections/actions/test",
      { connectionType: "S3" },
      undefined,
    );
  });

  it("tests an existing connection by ID", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectionsService(httpClient);

    await service.testById("conn-123");

    expect(httpClient.post).toHaveBeenCalledWith(
      "/ssot/connections/conn-123/actions/test",
      undefined,
      undefined,
    );
  });
});
