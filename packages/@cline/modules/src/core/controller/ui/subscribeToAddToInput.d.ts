import { Controller } from "../index";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { String as ProtoString } from "../../../shared/proto/cline/common";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to addToInput events
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToAddToInput(_controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<ProtoString>, requestId?: string): Promise<void>;
/**
 * Send an addToInput event to all active subscribers
 * @param text The text to add to the input
 */
export declare function sendAddToInputEvent(text: string): Promise<void>;
