import { Controller } from "../index";
import { EmptyRequest, StringArray } from "../../../shared/proto/cline/common";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to workspace file updates
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToWorkspaceUpdates(_controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<StringArray>, requestId?: string): Promise<void>;
/**
 * Send a workspace update event to all active subscribers
 * @param filePaths Array of file paths to send
 */
export declare function sendWorkspaceUpdateEvent(filePaths: string[]): Promise<void>;
