import { StreamingResponseHandler } from "./hostbridge-grpc-handler";
/**
 * Generic type for service method handlers
 */
export type ServiceMethodHandler = (message: any) => Promise<any>;
/**
 * Type for streaming method handlers
 */
export type StreamingMethodHandler = (message: any, responseStream: StreamingResponseHandler, requestId?: string) => Promise<void>;
/**
 * Method metadata including streaming information
 */
export interface MethodMetadata {
    isStreaming: boolean;
}
/**
 * Generic service registry for gRPC services
 */
export declare class ServiceRegistry {
    private serviceName;
    private methodRegistry;
    private streamingMethodRegistry;
    private methodMetadata;
    /**
     * Create a new service registry
     * @param serviceName The name of the service (used for logging)
     */
    constructor(serviceName: string);
    /**
     * Register a method handler
     * @param methodName The name of the method to register
     * @param handler The handler function for the method
     * @param metadata Optional metadata about the method
     */
    registerMethod(methodName: string, handler: ServiceMethodHandler | StreamingMethodHandler, metadata?: MethodMetadata): void;
    /**
     * Check if a method is a streaming method
     * @param method The method name
     * @returns True if the method is a streaming method
     */
    isStreamingMethod(method: string): boolean;
    /**
     * Get a streaming method handler
     * @param method The method name
     * @returns The streaming method handler or undefined if not found
     */
    getStreamingHandler(method: string): StreamingMethodHandler | undefined;
    /**
     * Handle a service request
     * @param method The method name
     * @param message The request message
     * @returns The response message
     */
    handleRequest(method: string, message: any): Promise<any>;
    /**
     * Handle a streaming service request
     * @param method The method name
     * @param message The request message
     * @param responseStream The streaming response handler
     * @param requestId The request ID for correlation and cleanup
     */
    handleStreamingRequest(method: string, message: any, responseStream: StreamingResponseHandler, requestId?: string): Promise<void>;
}
/**
 * Create a service registry factory function
 * @param serviceName The name of the service
 * @returns An object with register and handle functions
 */
export declare function createServiceRegistry(serviceName: string): {
    registerMethod: (methodName: string, handler: ServiceMethodHandler | StreamingMethodHandler, metadata?: MethodMetadata) => void;
    handleRequest: (method: string, message: any) => Promise<any>;
    handleStreamingRequest: (method: string, message: any, responseStream: StreamingResponseHandler, requestId?: string) => Promise<void>;
    isStreamingMethod: (method: string) => boolean;
};
