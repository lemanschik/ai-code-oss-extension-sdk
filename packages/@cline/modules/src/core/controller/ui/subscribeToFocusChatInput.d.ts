import { StringRequest, Empty } from "../../../shared/proto/cline/common";
import { StreamingResponseHandler } from "../grpc-handler";
import type { Controller } from "../index";
/**
 * Subscribe to focus chat input events
 * @param controller The controller instance
 * @param request The request containing the client ID
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request
 */
export declare function subscribeToFocusChatInput(_controller: Controller, request: StringRequest, responseStream: StreamingResponseHandler<Empty>, requestId?: string): Promise<void>;
/**
 * Send a focus chat input event to a specific webview by client ID
 * @param clientId The ID of the client to send the event to
 */
export declare function sendFocusChatInputEvent(clientId: string): Promise<void>;
