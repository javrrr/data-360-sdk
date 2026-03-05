import type { HttpClient } from "./http-client.js";
import type { PaginationParams, RequestOptions } from "./types.js";

/**
 * Response shape expected from paginated list endpoints.
 * The SDK normalizes various response shapes into this format.
 */
interface RawPaginatedResponse<T> {
  data?: T[];
  metadata?: T[];
  records?: T[];
  totalSize?: number;
  nextPageUrl?: string;
  offset?: number;
}

function extractItems<T>(raw: RawPaginatedResponse<T>): T[] {
  return raw.data ?? raw.metadata ?? raw.records ?? [];
}

export interface PaginateOptions<T> extends PaginationParams {
  /** HTTP client instance */
  httpClient: HttpClient;
  /** API path */
  path: string;
  /** Additional query params beyond pagination */
  query?: Record<string, string | number | boolean | undefined>;
  /** Request options */
  requestOptions?: RequestOptions;
  /** Custom extractor for items from response */
  extractItems?: (raw: unknown) => T[];
}

/**
 * Async generator that yields pages of items from a paginated endpoint.
 * Supports both offset-based and nextPageUrl-based pagination.
 */
export async function* paginate<T>(
  options: PaginateOptions<T>,
): AsyncGenerator<T[], void, undefined> {
  const {
    httpClient,
    path,
    batchSize = 20,
    offset: startOffset = 0,
    orderBy,
    query = {},
    requestOptions,
    extractItems: customExtractor,
  } = options;

  let currentOffset = startOffset;
  let nextUrl: string | undefined;

  while (true) {
    const paginationQuery: Record<string, string | number | boolean | undefined> = {
      ...query,
      batchSize,
      offset: currentOffset,
    };

    if (orderBy) {
      paginationQuery.orderBy = orderBy;
    }

    // If we have a nextPageUrl, use that instead
    const requestPath = nextUrl ?? path;
    const requestQuery = nextUrl ? undefined : paginationQuery;

    const raw = await httpClient.get<RawPaginatedResponse<T>>(requestPath, {
      ...requestOptions,
      query: requestQuery,
    });

    const items = customExtractor ? customExtractor(raw) : extractItems(raw);

    if (items.length === 0) {
      break;
    }

    yield items;

    // Check for next page
    if (raw.nextPageUrl) {
      nextUrl = raw.nextPageUrl;
      currentOffset += items.length;
    } else if (items.length < batchSize) {
      // No more pages
      break;
    } else {
      currentOffset += items.length;
      nextUrl = undefined;
    }
  }
}

/**
 * Collects all items from a paginated endpoint into a single array.
 */
export async function collectAll<T>(
  options: PaginateOptions<T>,
): Promise<T[]> {
  const all: T[] = [];
  for await (const page of paginate(options)) {
    all.push(...page);
  }
  return all;
}
