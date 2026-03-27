import { describe, it, expect, vi } from "vitest";
import { MetadataService } from "../../src/resources/metadata.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
  } as unknown as HttpClient;
}

describe("MetadataService", () => {
  it("list()", async () => {
    const httpClient = createMockHttpClient();
    const service = new MetadataService(httpClient);

    await service.list();

    expect(httpClient.get).toHaveBeenCalled();
  });
});
