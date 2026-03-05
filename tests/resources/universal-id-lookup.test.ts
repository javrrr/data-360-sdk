import { describe, it, expect, vi } from "vitest";
import { UniversalIdLookupService } from "../../src/resources/universal-id-lookup.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
  } as unknown as HttpClient;
}

describe("UniversalIdLookupService", () => {
  it("lookup()", async () => {
    const httpClient = createMockHttpClient();
    const service = new UniversalIdLookupService(httpClient);

    await service.lookup("test-entityName", "test-dataSourceId", "test-dataSourceObjectId", "test-sourceRecordId");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
