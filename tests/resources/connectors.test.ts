import { describe, it, expect, vi } from "vitest";
import { ConnectorsService } from "../../src/resources/connectors.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
  } as unknown as HttpClient;
}

describe("ConnectorsService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectorsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("get()", async () => {
    const httpClient = createMockHttpClient();
    const service = new ConnectorsService(httpClient);

    await service.get("test-connectorType");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
