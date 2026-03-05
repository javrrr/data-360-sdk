export class Data360Error extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly body: unknown;
  public readonly headers: Headers;

  constructor(
    message: string,
    status: number,
    statusText: string,
    body: unknown,
    headers: Headers,
  ) {
    super(message);
    this.name = "Data360Error";
    this.status = status;
    this.statusText = statusText;
    this.body = body;
    this.headers = headers;
  }
}

export class BadRequestError extends Data360Error {
  constructor(body: unknown, headers: Headers) {
    super("Bad Request", 400, "Bad Request", body, headers);
    this.name = "BadRequestError";
  }
}

export class AuthenticationError extends Data360Error {
  constructor(body: unknown, headers: Headers) {
    super("Authentication failed", 401, "Unauthorized", body, headers);
    this.name = "AuthenticationError";
  }
}

export class ForbiddenError extends Data360Error {
  constructor(body: unknown, headers: Headers) {
    super("Forbidden", 403, "Forbidden", body, headers);
    this.name = "ForbiddenError";
  }
}

export class NotFoundError extends Data360Error {
  constructor(body: unknown, headers: Headers) {
    super("Not Found", 404, "Not Found", body, headers);
    this.name = "NotFoundError";
  }
}

export class RateLimitError extends Data360Error {
  public readonly retryAfter: number | null;

  constructor(body: unknown, headers: Headers) {
    super("Rate limit exceeded", 429, "Too Many Requests", body, headers);
    this.name = "RateLimitError";
    const ra = headers.get("Retry-After");
    this.retryAfter = ra ? parseInt(ra, 10) : null;
  }
}

export class ServerError extends Data360Error {
  constructor(status: number, statusText: string, body: unknown, headers: Headers) {
    super(`Server error: ${status} ${statusText}`, status, statusText, body, headers);
    this.name = "ServerError";
  }
}

export function parseErrorResponse(
  status: number,
  statusText: string,
  body: unknown,
  headers: Headers,
): Data360Error {
  switch (status) {
    case 400:
      return new BadRequestError(body, headers);
    case 401:
      return new AuthenticationError(body, headers);
    case 403:
      return new ForbiddenError(body, headers);
    case 404:
      return new NotFoundError(body, headers);
    case 429:
      return new RateLimitError(body, headers);
    default:
      if (status >= 500) {
        return new ServerError(status, statusText, body, headers);
      }
      return new Data360Error(
        `HTTP ${status} ${statusText}`,
        status,
        statusText,
        body,
        headers,
      );
  }
}
