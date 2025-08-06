import { Empty } from "../../../shared/proto/cline/common";
import { WebviewProviderType, WebviewProviderTypeRequest } from "../../../shared/proto/cline/ui";
import { StreamingResponseHandler } from "../grpc-handler";
import type { Controller } from "../index";
/**
 * Subscribe to settings button clicked events
 * @param controller The controller instance
 * @param request The request with provider type
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToSettingsButtonClicked(_controller: Controller, request: WebviewProviderTypeRequest, responseStream: StreamingResponseHandler<Empty>, requestId?: string): Promise<void>;
/**
 * Send a settings button clicked event to active subscribers of matching provider type
 * @param webviewType The type of webview that triggered the event
 */
export declare function sendSettingsButtonClickedEvent(webviewType?: WebviewProviderType): Promise<void>;
