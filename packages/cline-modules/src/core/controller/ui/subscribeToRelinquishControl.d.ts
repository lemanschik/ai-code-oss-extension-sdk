import { Controller } from "../index";
import { EmptyRequest, Empty } from "../../../shared/proto/cline/common";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to relinquish control events
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToRelinquishControl(_controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<Empty>, requestId?: string): Promise<void>;
/**
 * Send a relinquish control event to all active subscribers
 */
export declare function sendRelinquishControlEvent(): Promise<void>;
