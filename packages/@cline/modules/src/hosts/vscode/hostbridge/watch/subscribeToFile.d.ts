import { SubscribeToFileRequest } from "../../../../shared/proto/host/watch";
import { StreamingResponseHandler } from "../../hostbridge-grpc-handler";
/**
 * Subscribe to file changes
 * @param request The request containing the file path
 * @param responseStream The streaming response handler
 * @param requestId The ID of the request (passed by the gRPC handler)
 */
export declare function subscribeToFile(request: SubscribeToFileRequest, responseStream: StreamingResponseHandler, requestId?: string): Promise<void>;
