import { describe, it, expect, vi } from "vitest";
import { ActivationTargetsService } from "../../src/resources/activation-targets.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [], totalSize: 0 })),
    post: vi.fn(async () => ({ id: "new-123" })),
    patch: vi.fn(async () => ({ id: "123", updated: true })),
    delete: vi.fn(async () => undefined),
  } as unknown as HttpClient;
}

describe("ActivationTargetsService", () => {
  it("lists activation targets with pagination", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationTargetsService(httpClient);

    await service.list({ batchSize: 10, offset: 0, filters: "status in active" });

    expect(httpClient.get).toHaveBeenCalledWith("/ssot/activation-targets", {
      query: { batchSize: 10, offset: 0, orderBy: undefined, filters: "status in active" },
    });
  });

  it("gets an activation target by ID", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationTargetsService(httpClient);

    await service.get("target-123");

    expect(httpClient.get).toHaveBeenCalledWith(
      "/ssot/activation-targets/target-123",
      undefined,
    );
  });

  it("creates an activation target", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationTargetsService(httpClient);

    const body = { name: "My Target" };
    await service.create(body);

    expect(httpClient.post).toHaveBeenCalledWith(
      "/ssot/activation-targets",
      body,
      undefined,
    );
  });

  it("updates an activation target", async () => {
    const httpClient = createMockHttpClient();
    const service = new ActivationTargetsService(httpClient);

    const body = { name: "Updated" };
    await service.update("target-123", body);

    expect(httpClient.patch).toHaveBeenCalledWith(
      "/ssot/activation-targets/target-123",
      body,
      undefined,
    );
  });
});
