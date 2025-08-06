import { StreamingCallbacks } from "../host-provider-types";
import { GrpcRequestRegistry } from "../../core/controller/grpc-request-registry";
/**
 * Type definition for a streaming response handler
 */
export type StreamingResponseHandler = (response: any, isLast?: boolean, sequenceNumber?: number) => Promise<void>;
/**
 * Handles gRPC requests for the host bridge.
 */
export declare class GrpcHandler {
    constructor();
    /**
     * Handle a gRPC request for the host bridge.
     * @param service The service name
     * @param method The method name
     * @param message The request message
     * @param requestId The request ID for response correlation
     * @param streamingCallbacks Optional callbacks for streaming responses
     * @returns For unary requests: the response message or error. For streaming requests: a cancel function.
     */
    handleRequest<T = any>(service: string, method: string, request: any, requestId: string, streamingCallbacks?: StreamingCallbacks<T>): Promise<any | (() => void)>;
    private handleUnaryRequest;
    /**
     * Cancel a gRPC request
     * @param requestId The request ID to cancel
     * @returns True if the request was found and cancelled, false otherwise
     */
    cancelRequest(requestId: string): Promise<boolean>;
    /**
     * Handle a streaming gRPC request
     * @param service The service name
     * @param method The method name
     * @param message The request message
     * @param requestId The request ID for response correlation
     */
    private handleStreamingRequest;
    private getServiceHandlerConfig;
}
/**
 * Configuration for a host service handler
 */
export interface HostServiceHandlerConfig {
    requestHandler: (method: string, message: any) => Promise<any>;
    streamingHandler: (method: string, message: any, responseStream: StreamingResponseHandler, requestId?: string) => Promise<void>;
}
/**
 * Get the request registry instance
 * This allows other parts of the code to access the registry
 */
export declare function getRequestRegistry(): GrpcRequestRegistry;
