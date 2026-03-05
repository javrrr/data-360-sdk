import { describe, it, expect } from "vitest";
import {
  Data360Error,
  BadRequestError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  RateLimitError,
  ServerError,
  parseErrorResponse,
} from "../../src/core/errors.js";

describe("errors", () => {
  const headers = new Headers();

  it("creates BadRequestError for 400", () => {
    const err = parseErrorResponse(400, "Bad Request", { error: "invalid" }, headers);
    expect(err).toBeInstanceOf(BadRequestError);
    expect(err.status).toBe(400);
    expect(err.body).toEqual({ error: "invalid" });
  });

  it("creates AuthenticationError for 401", () => {
    const err = parseErrorResponse(401, "Unauthorized", null, headers);
    expect(err).toBeInstanceOf(AuthenticationError);
    expect(err.status).toBe(401);
  });

  it("creates ForbiddenError for 403", () => {
    const err = parseErrorResponse(403, "Forbidden", null, headers);
    expect(err).toBeInstanceOf(ForbiddenError);
  });

  it("creates NotFoundError for 404", () => {
    const err = parseErrorResponse(404, "Not Found", null, headers);
    expect(err).toBeInstanceOf(NotFoundError);
  });

  it("creates RateLimitError for 429 with Retry-After", () => {
    const h = new Headers({ "Retry-After": "60" });
    const err = parseErrorResponse(429, "Too Many Requests", null, h);
    expect(err).toBeInstanceOf(RateLimitError);
    expect((err as RateLimitError).retryAfter).toBe(60);
  });

  it("creates ServerError for 500+", () => {
    const err = parseErrorResponse(502, "Bad Gateway", null, headers);
    expect(err).toBeInstanceOf(ServerError);
    expect(err.status).toBe(502);
  });

  it("creates generic Data360Error for unknown status", () => {
    const err = parseErrorResponse(418, "I'm a teapot", null, headers);
    expect(err).toBeInstanceOf(Data360Error);
    expect(err.status).toBe(418);
  });
});
