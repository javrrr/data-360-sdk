import { describe, it, expect, vi } from "vitest";
import { createTokenProvider } from "../../src/core/auth.js";

describe("auth", () => {
  describe("StaticTokenProvider", () => {
    it("returns the static token", async () => {
      const provider = createTokenProvider({
        type: "static",
        accessToken: "test-token-123",
      });
      expect(await provider.getToken()).toBe("test-token-123");
    });
  });

  describe("RefreshableTokenProvider", () => {
    it("returns initial token on first call", async () => {
      const provider = createTokenProvider({
        type: "refresh",
        accessToken: "initial-token",
        refreshToken: "refresh-123",
        refreshFn: vi.fn(),
      });
      expect(await provider.getToken()).toBe("initial-token");
    });

    it("returns initial token without refreshing when expiry unknown", async () => {
      const refreshFn = vi.fn().mockResolvedValue({
        accessToken: "new-token",
        expiresIn: 3600,
      });
      const provider = createTokenProvider({
        type: "refresh",
        accessToken: "initial",
        refreshToken: "refresh-123",
        refreshFn,
      });

      const [t1, t2] = await Promise.all([
        provider.getToken(),
        provider.getToken(),
      ]);

      expect(t1).toBe("initial");
      expect(t2).toBe("initial");
      expect(refreshFn).not.toHaveBeenCalled();
    });
  });

  describe("OAuth2TokenProvider", () => {
    it("fetches a token from the token URL", async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          access_token: "oauth-token-abc",
          expires_in: 3600,
        }),
      });

      const provider = createTokenProvider(
        {
          type: "oauth2",
          clientId: "my-client",
          clientSecret: "my-secret",
          tokenUrl: "https://auth.example.com/token",
        },
        mockFetch as unknown as typeof fetch,
      );

      const token = await provider.getToken();
      expect(token).toBe("oauth-token-abc");
      expect(mockFetch).toHaveBeenCalledOnce();
    });

    it("caches token until near expiry", async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          access_token: "cached-token",
          expires_in: 3600,
        }),
      });

      const provider = createTokenProvider(
        {
          type: "oauth2",
          clientId: "id",
          clientSecret: "secret",
          tokenUrl: "https://auth.example.com/token",
        },
        mockFetch as unknown as typeof fetch,
      );

      await provider.getToken();
      await provider.getToken();
      expect(mockFetch).toHaveBeenCalledOnce();
    });

    it("throws on token request failure", async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        statusText: "Unauthorized",
      });

      const provider = createTokenProvider(
        {
          type: "oauth2",
          clientId: "id",
          clientSecret: "secret",
          tokenUrl: "https://auth.example.com/token",
        },
        mockFetch as unknown as typeof fetch,
      );

      await expect(provider.getToken()).rejects.toThrow("OAuth2 token request failed");
    });
  });
});
