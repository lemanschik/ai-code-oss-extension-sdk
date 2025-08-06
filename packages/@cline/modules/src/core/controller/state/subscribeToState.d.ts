import { Controller } from "../index";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { StreamingResponseHandler } from "../grpc-handler";
import { State } from "../../../shared/proto/cline/state";
/**
 * Subscribe to state updates
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToState(controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<State>, requestId?: string): Promise<void>;
/**
 * Send a state update to a specific controller's subscription
 * @param controllerId The ID of the controller to send the state to
 * @param state The state to send
 */
export declare function sendStateUpdate(controllerId: string, state: any): Promise<void>;
