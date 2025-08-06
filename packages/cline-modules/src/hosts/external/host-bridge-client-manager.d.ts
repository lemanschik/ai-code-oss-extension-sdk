import { WatchServiceClientInterface, WorkspaceServiceClientInterface, EnvServiceClientInterface, WindowServiceClientInterface, DiffServiceClientInterface } from "../../generated/hosts/host-bridge-client-types";
import { HostBridgeClientProvider } from "../host-provider-types";
/**
 * Manager to hold the gRPC clients for the host bridge. The clients should be re-used to avoid
 * creating a new TCP connection every time a rpc is made.
 */
export declare class ExternalHostBridgeClientManager implements HostBridgeClientProvider {
    watchServiceClient: WatchServiceClientInterface;
    workspaceClient: WorkspaceServiceClientInterface;
    envClient: EnvServiceClientInterface;
    windowClient: WindowServiceClientInterface;
    diffClient: DiffServiceClientInterface;
    constructor();
}
