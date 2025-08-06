import { Controller } from "../../core/controller";
import { type StreamingResponseHandler } from "../../core/controller/grpc-handler";
import { AuthState } from "../../shared/proto/cline/account";
import { type EmptyRequest, String } from "../../shared/proto/cline/common";
import { FirebaseAuthProvider } from "./providers/FirebaseAuthProvider";
export type ServiceConfig = {
    URI?: string;
    [key: string]: any;
};
export interface ClineAuthInfo {
    idToken: string;
    userInfo: ClineAccountUserInfo;
}
export interface ClineAccountUserInfo {
    createdAt: string;
    displayName: string;
    email: string;
    id: string;
    organizations: ClineAccountOrganization[];
    /**
     * Cline app base URL, used for webview UI and other client-side operations
     */
    appBaseUrl?: string;
}
export interface ClineAccountOrganization {
    active: boolean;
    memberId: string;
    name: string;
    organizationId: string;
    roles: string[];
}
export declare class AuthService {
    protected static instance: AuthService | null;
    protected _config: ServiceConfig;
    protected _authenticated: boolean;
    protected _clineAuthInfo: ClineAuthInfo | null;
    protected _provider: {
        provider: FirebaseAuthProvider;
    } | null;
    protected _activeAuthStatusUpdateSubscriptions: Set<[Controller, StreamingResponseHandler<AuthState>]>;
    protected _controller: Controller;
    /**
     * Creates an instance of AuthService.
     * @param config - Configuration for the service, including the URI for authentication.
     * @param authProvider - Optional authentication provider to use.
     * @param controller - Optional reference to the Controller instance.
     */
    protected constructor(controller: Controller, config: ServiceConfig, authProvider?: any);
    /**
     * Gets the singleton instance of AuthService.
     * @param config - Configuration for the service, including the URI for authentication.
     * @param authProvider - Optional authentication provider to use.
     * @param controller - Optional reference to the Controller instance.
     * @returns The singleton instance of AuthService.
     */
    static getInstance(controller?: Controller, config?: ServiceConfig, authProvider?: any): AuthService;
    set controller(controller: Controller);
    get authProvider(): any;
    set authProvider(providerName: string);
    getAuthToken(): Promise<string | null>;
    protected _setProvider(providerName: string): void;
    getInfo(): AuthState;
    createAuthRequest(): Promise<String>;
    handleDeauth(): Promise<void>;
    handleAuthCallback(token: string, provider: string): Promise<void>;
    /**
     * Clear the authentication token from the extension's storage.
     * This is typically called when the user logs out.
     */
    clearAuthToken(): Promise<void>;
    /**
     * Restores the authentication token from the extension's storage.
     * This is typically called when the extension is activated.
     */
    restoreRefreshTokenAndRetrieveAuthInfo(): Promise<void>;
    /**
     * Subscribe to authStatusUpdate events
     * @param controller The controller instance
     * @param request The empty request
     * @param responseStream The streaming response handler
     * @param requestId The ID of the request (passed by the gRPC handler)
     */
    subscribeToAuthStatusUpdate(controller: Controller, _request: EmptyRequest, responseStream: StreamingResponseHandler<AuthState>, requestId?: string): Promise<void>;
    /**
     * Send an authStatusUpdate event to all active subscribers
     */
    sendAuthStatusUpdate(): Promise<void>;
}
