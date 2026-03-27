import { ConnectionsServiceBase } from "../generated/services/connections.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  ConnectionCreateInput,
  ConnectionInputRepresentation,
  ConnectionRepresentation,
  ConnectionUpdateInput,
  ConnectionPatchInputRepresentation,
} from "../schemas.js";

export class ConnectionsService extends ConnectionsServiceBase {
  /** Override create with discriminated union input type. */
  override async create(body: ConnectionCreateInput | ConnectionInputRepresentation, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.post(this.basePath, body, options);
  }

  /** Override put with discriminated union input type. */
  override async put(connectionId: string, body: ConnectionCreateInput | ConnectionInputRepresentation, options?: RequestOptions): Promise<void> {
    return this.httpClient.put(`${this.basePath}/${encodeURIComponent(connectionId)}`, body, options);
  }

  /** Alias for patch — update a connection. */
  async update(connectionId: string, body: ConnectionUpdateInput | ConnectionPatchInputRepresentation, options?: RequestOptions): Promise<ConnectionRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(connectionId)}`, body, options);
  }
}
