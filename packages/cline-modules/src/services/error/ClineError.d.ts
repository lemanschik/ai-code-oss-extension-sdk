export declare enum ClineErrorType {
    Auth = "auth",
    Network = "network",
    RateLimit = "rateLimit",
    Balance = "balance"
}
interface ErrorDetails {
    /**
     * The HTTP status code of the error, if applicable.
     */
    status?: number;
    /**
     * The request ID associated with the error, if available.
     * This can be useful for debugging and support.
     */
    request_id?: string;
    /**
     * Specific error code provided by the API or service.
     */
    code?: string;
    /**
     * The model ID associated with the error, if applicable.
     * This is useful for identifying which model the error relates to.
     */
    modelId?: string;
    /**
     * The provider ID associated with the error, if applicable.
     * This is useful for identifying which provider the error relates to.
     */
    providerId?: string;
    /**
     * The error message associated with the error, if applicable.
     */
    message?: string;
    details?: any;
}
export declare class ClineError extends Error {
    readonly modelId?: string | undefined;
    readonly providerId?: string | undefined;
    readonly title = "ClineError";
    readonly _error: ErrorDetails;
    constructor(raw: any, modelId?: string | undefined, providerId?: string | undefined);
    /**
     *  Serializes the error to a JSON string that allows for easy transmission and storage.
     *  This is useful for logging or sending error details to a webviews.
     */
    serialize(): string;
    /**
     * Parses a stringified error into a ClineError instance.
     */
    static parse(errorStr?: string, modelId?: string): ClineError | undefined;
    /**
     * Transforms any object into a ClineError instance.
     * Always returns a ClineError, even if the input is not a valid error object.
     */
    static transform(error: any, modelId?: string, providerId?: string): ClineError;
    isErrorType(type: ClineErrorType): boolean;
    /**
     * Is known error type based on the error code, status, and details.
     * This is useful for determining how to handle the error in the UI or logic.
     */
    static getErrorType(err: ClineError): ClineErrorType | undefined;
}
export {};
