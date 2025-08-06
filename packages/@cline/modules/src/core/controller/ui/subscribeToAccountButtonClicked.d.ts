import { Controller } from "../index";
import { Empty, EmptyRequest } from "../../../shared/proto/cline/common";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to account button clicked events
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The request ID for cleanup
 */
export declare function subscribeToAccountButtonClicked(controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<Empty>, requestId?: string): Promise<void>;
/**
 * Send account button clicked event to a specific controller
 * @param controllerId The ID of the controller to send the event to
 */
export declare function sendAccountButtonClickedEvent(controllerId: string): Promise<void>;
