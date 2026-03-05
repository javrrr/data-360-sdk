import { describe, it, expect, vi } from "vitest";
import { DataCleanRoomService } from "../../src/resources/data-clean-room.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    put: vi.fn(async () => ({ id: "123" })),
  } as unknown as HttpClient;
}

describe("DataCleanRoomService", () => {
  it("listCollaborations()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.listCollaborations({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listProviders()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.listProviders({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listSpecifications()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.listSpecifications({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listTemplates()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.listTemplates({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("createCollaborations()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.createCollaborations({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("run()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.run("test-collaborationIdOrApiName", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("listJobs()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.listJobs("test-collaborationIdOrApiName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("createProviders()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.createProviders({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("createSpecifications()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.createSpecifications({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("acceptInvitation()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.acceptInvitation("test-collaborationIdOrApiName", { test: true } as any);

    expect(httpClient.put).toHaveBeenCalled();
  });

  it("rejectInvitation()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.rejectInvitation("test-collaborationIdOrApiName", { test: true } as any);

    expect(httpClient.put).toHaveBeenCalled();
  });

  it("getProvider()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.getProvider("test-providerIdOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listProviderTemplates()", async () => {
    const httpClient = createMockHttpClient();
    const service = new DataCleanRoomService(httpClient);

    await service.listProviderTemplates("test-providerIdOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
