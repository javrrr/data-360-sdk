import { describe, it, expect, vi } from "vitest";
import { SegmentsService } from "../../src/resources/segments.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ success: true })),
  } as unknown as HttpClient;
}

describe("SegmentsService", () => {
  it("lists segments", async () => {
    const httpClient = createMockHttpClient();
    const service = new SegmentsService(httpClient);

    await service.list({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalledWith("/ssot/segments", {
      query: { batchSize: 10, offset: undefined, orderBy: undefined },
    });
  });

  it("gets a segment", async () => {
    const httpClient = createMockHttpClient();
    const service = new SegmentsService(httpClient);

    await service.get("seg-123");

    expect(httpClient.get).toHaveBeenCalledWith(
      "/ssot/segments/seg-123",
      undefined,
    );
  });

  it("counts segment members", async () => {
    const httpClient = createMockHttpClient();
    const service = new SegmentsService(httpClient);

    await service.count("MySegment");

    expect(httpClient.get).toHaveBeenCalledWith(
      "/ssot/segments/MySegment/actions/count",
      undefined,
    );
  });

  it("lists segment members", async () => {
    const httpClient = createMockHttpClient();
    const service = new SegmentsService(httpClient);

    await service.listMembers("MySegment", { batchSize: 20 });

    expect(httpClient.get).toHaveBeenCalledWith(
      "/ssot/segments/MySegment/members",
      { query: { batchSize: 20, offset: undefined, orderBy: undefined } },
    );
  });

  it("publishes a segment", async () => {
    const httpClient = createMockHttpClient();
    const service = new SegmentsService(httpClient);

    await service.publish("MySegment");

    expect(httpClient.post).toHaveBeenCalledWith(
      "/ssot/segments/MySegment/actions/publish",
      undefined,
      undefined,
    );
  });

  it("deactivates a segment", async () => {
    const httpClient = createMockHttpClient();
    const service = new SegmentsService(httpClient);

    await service.deactivate("MySegment");

    expect(httpClient.post).toHaveBeenCalledWith(
      "/ssot/segments/MySegment/actions/deactivate",
      undefined,
      undefined,
    );
  });
});
