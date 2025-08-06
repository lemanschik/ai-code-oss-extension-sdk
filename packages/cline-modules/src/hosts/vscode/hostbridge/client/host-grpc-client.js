import { createGrpcClient } from "./host-grpc-client-base";
import * as host from "../../../../shared/proto/index.host";
export const vscodeHostBridgeClient = {
    watchServiceClient: createGrpcClient(host.WatchServiceDefinition),
    workspaceClient: createGrpcClient(host.WorkspaceServiceDefinition),
    envClient: createGrpcClient(host.EnvServiceDefinition),
    windowClient: createGrpcClient(host.WindowServiceDefinition),
    diffClient: createGrpcClient(host.DiffServiceDefinition),
};
