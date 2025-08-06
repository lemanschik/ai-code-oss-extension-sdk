import { Controller } from "../index";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { OpenRouterCompatibleModelInfo } from "../../../shared/proto/cline/models";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to OpenRouter models events
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToOpenRouterModels(_controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<OpenRouterCompatibleModelInfo>, requestId?: string): Promise<void>;
/**
 * Send an OpenRouter models event to all active subscribers
 * @param models The OpenRouter models to send
 */
export declare function sendOpenRouterModelsEvent(models: OpenRouterCompatibleModelInfo): Promise<void>;
