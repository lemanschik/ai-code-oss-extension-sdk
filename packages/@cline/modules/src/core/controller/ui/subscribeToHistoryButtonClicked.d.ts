import { Controller } from "../index";
import { Empty } from "../../../shared/proto/cline/common";
import { WebviewProviderType, WebviewProviderTypeRequest } from "../../../shared/proto/cline/ui";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to history button clicked events
 * @param controller The controller instance
 * @param request The webview provider type request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToHistoryButtonClicked(_controller: Controller, request: WebviewProviderTypeRequest, responseStream: StreamingResponseHandler<Empty>, requestId?: string): Promise<void>;
/**
 * Send a history button clicked event to all active subscribers
 * @param webviewType Optional filter to send only to a specific webview type
 */
export declare function sendHistoryButtonClickedEvent(webviewType?: WebviewProviderType): Promise<void>;
