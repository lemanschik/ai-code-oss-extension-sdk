import { Controller } from "../index";
import { Empty } from "../../../shared/proto/cline/common";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to didBecomeVisible events
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToDidBecomeVisible(controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<Empty>, requestId?: string): Promise<void>;
/**
 * Send a didBecomeVisible event to a specific controller's subscription
 * @param controllerId The ID of the controller to send the event to
 */
export declare function sendDidBecomeVisibleEvent(controllerId: string): Promise<void>;
