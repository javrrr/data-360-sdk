import { DataModelObjectsServiceBase } from "../generated/services/data-model-objects.base.js";
import type { DataModelObjectsListMappingsParams } from "../generated/services/data-model-objects.base.js";
import { NotFoundError } from "../core/errors.js";
import type { PaginationParams, RequestOptions } from "../core/types.js";
import type {
  CdpObjectSourceTargetMapCollectionRepresentation,
  DataModelObjectCollectionRepresentation,
} from "../schemas.js";

/**
 * DMO response-shape note: `list()` returns a body whose array is under the
 * **singular** key `dataModelObject` (not plural, unlike every other `list`
 * method in the SDK). Destructure accordingly:
 *
 *   const { dataModelObject: items } = await client.dataModelObjects.list();
 *
 * This is a spec oddity that the generated types preserve; the override
 * below intentionally does not reshape it so raw responses remain diffable
 * against captured fixtures.
 */
export class DataModelObjectsService extends DataModelObjectsServiceBase {
  override async list(
    params?: PaginationParams,
    options?: RequestOptions,
  ): Promise<DataModelObjectCollectionRepresentation> {
    return super.list(params, options);
  }

  /**
   * GET /ssot/data-model-object-mappings — Get data model object mappings.
   *
   * The API returns 404 `NOT_FOUND` (`Object Source Target Map not found for
   * the given Target Object Dev Name`) when the DMO exists but has no
   * mappings — notably for any `ssot__`-prefixed or UI-graph-generated DMO.
   * This override catches that specific 404 and returns an empty collection
   * so callers can iterate without a try/catch around every call.
   *
   * Non-404 errors (including 404s for a DMO that doesn't exist at all) are
   * not suppressed — the body's error code disambiguates them upstream.
   */
  override async listMappings(
    params: DataModelObjectsListMappingsParams,
    options?: RequestOptions,
  ): Promise<CdpObjectSourceTargetMapCollectionRepresentation> {
    try {
      return await super.listMappings(params, options);
    } catch (e) {
      if (e instanceof NotFoundError && isNoMappingsError(e)) {
        return { objectSourceTargetMaps: [] } as CdpObjectSourceTargetMapCollectionRepresentation;
      }
      throw e;
    }
  }
}

function isNoMappingsError(err: NotFoundError): boolean {
  const body = err.body as unknown;
  if (!Array.isArray(body)) return false;
  return body.some(
    (e) =>
      typeof e === "object" &&
      e !== null &&
      (e as { message?: string }).message?.startsWith("Object Source Target Map not found"),
  );
}
