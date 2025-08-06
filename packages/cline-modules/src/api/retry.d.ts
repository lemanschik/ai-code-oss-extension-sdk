interface RetryOptions {
    maxRetries?: number;
    baseDelay?: number;
    maxDelay?: number;
    retryAllErrors?: boolean;
}
export declare function withRetry(options?: RetryOptions): (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export {};
