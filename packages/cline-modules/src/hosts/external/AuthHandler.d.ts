/**
 * Handles OAuth authentication flow by creating a local server to receive tokens.
 */
export declare class AuthHandler {
    private static instance;
    private port;
    private server;
    private serverCreationPromise;
    private timeoutId;
    private enabled;
    private constructor();
    /**
     * Gets the singleton instance of AuthHandler
     * @returns The singleton AuthHandler instance
     */
    static getInstance(): AuthHandler;
    setEnabled(enabled: boolean): void;
    getCallbackUri(): Promise<string | undefined>;
    private createServer;
    private updateTimeout;
    private handleRequest;
    private sendResponse;
    private openBrowser;
    stop(): void;
    dispose(): void;
}
