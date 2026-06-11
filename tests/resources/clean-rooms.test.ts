import { describe, it, expect, vi } from "vitest";
import { CleanRoomsService } from "../../src/resources/clean-rooms.js";
import type { HttpClient } from "../../src/core/http-client.js";

function createMockHttpClient() {
  return {
    get: vi.fn(async () => ({ data: [] })),
    post: vi.fn(async () => ({ id: "new-123" })),
    put: vi.fn(async () => ({ id: "123" })),
  } as unknown as HttpClient;
}

describe("CleanRoomsService", () => {
  it("listCollaborations()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.listCollaborations({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listProviders()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.listProviders({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listSpecifications()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.listSpecifications({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listTemplates()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.listTemplates({ batchSize: 10 });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("createCollaborations()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.createCollaborations({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("run()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.run("test-collaborationIdOrApiName", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("listCollaborationsJobs()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.listCollaborationsJobs("test-collaborationIdOrApiName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("createProviders()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.createProviders({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("createSpecifications()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.createSpecifications({ test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("acceptInvitation()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.acceptInvitation("test-collaborationIdOrApiName", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("rejectInvitation()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.rejectInvitation("test-collaborationIdOrApiName", { test: true } as any);

    expect(httpClient.post).toHaveBeenCalled();
  });

  it("getProviders()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.getProviders("test-providerIdOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });

  it("listProvidersTemplates()", async () => {
    const httpClient = createMockHttpClient();
    const service = new CleanRoomsService(httpClient);

    await service.listProvidersTemplates("test-providerIdOrName");

    expect(httpClient.get).toHaveBeenCalled();
  });
});
