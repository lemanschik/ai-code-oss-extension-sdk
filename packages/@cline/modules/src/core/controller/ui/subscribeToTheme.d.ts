import { Controller } from "../index";
import { EmptyRequest, String } from "../../../shared/proto/cline/common";
import { StreamingResponseHandler } from "../grpc-handler";
/**
 * Subscribe to theme change events
 * @param controller The controller instance
 * @param request The empty request
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToTheme(_controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<String>, requestId?: string): Promise<void>;
/**
 * Send a theme event to all active subscribers
 * @param themeJson The JSON-stringified theme data
 */
export declare function sendThemeEvent(themeJson: string): Promise<void>;
