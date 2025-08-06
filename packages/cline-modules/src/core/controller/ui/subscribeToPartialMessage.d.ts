import { Controller } from "../index";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { ClineMessage } from "../../../shared/proto/cline/ui";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to partial message events
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToPartialMessage(_controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<ClineMessage>, requestId?: string): Promise<void>;
/**
 * Send a partial message event to all active subscribers
 * @param partialMessage The ClineMessage to send
 */
export declare function sendPartialMessageEvent(partialMessage: ClineMessage): Promise<void>;
