import { Controller } from "../index";
import { Empty } from "../../../shared/proto/cline/common";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to chatButtonClicked events
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToChatButtonClicked(controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<Empty>, requestId?: string): Promise<void>;
/**
 * Send a chatButtonClicked event to a specific controller's subscription
 * @param controllerId The ID of the controller to send the event to
 */
export declare function sendChatButtonClickedEvent(controllerId: string): Promise<void>;
