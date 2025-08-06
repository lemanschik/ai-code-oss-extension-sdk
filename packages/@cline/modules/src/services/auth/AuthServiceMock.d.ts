import { String } from "../../shared/proto/cline/common";
import { AuthService, type ServiceConfig } from "./AuthService";
import { Controller } from "../../core/controller";
export declare class AuthServiceMock extends AuthService {
    protected constructor(controller: Controller, config: ServiceConfig, authProvider?: any);
    /**
     * Gets the singleton instance of AuthServiceMock.
     */
    static getInstance(controller?: Controller, config?: ServiceConfig, authProvider?: any): AuthServiceMock;
    getAuthToken(): Promise<string | null>;
    createAuthRequest(): Promise<String>;
    handleAuthCallback(_token: string, _provider: string): Promise<void>;
    restoreRefreshTokenAndRetrieveAuthInfo(): Promise<void>;
}
