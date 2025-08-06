import { Controller } from "./index";
import { GrpcRequestRegistry } from "./grpc-request-registry";
import { GrpcCancel, GrpcRequest } from "../../shared/WebviewMessage";
/**
 * Type definition for a streaming response handler
 */
export type StreamingResponseHandler<TResponse> = (response: TResponse, isLast?: boolean, sequenceNumber?: number) => Promise<void>;
/**
 * Handles a gRPC request from the webview.
 */
export declare function handleGrpcRequest(controller: Controller, request: GrpcRequest): Promise<void>;
/**
 * Handles a gRPC request cancellation from the webview.
 * @param controller The controller instance
 * @param request The cancellation request
 */
export declare function handleGrpcRequestCancel(controller: Controller, request: GrpcCancel): Promise<void>;
/**
 * Get the request registry instance
 * This allows other parts of the code to access the registry
 */
export declare function getRequestRegistry(): GrpcRequestRegistry;
