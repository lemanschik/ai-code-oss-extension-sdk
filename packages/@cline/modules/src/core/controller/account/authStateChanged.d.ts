import { AuthStateChangedRequest, AuthState } from "../../../shared/proto/cline/account";
import type { Controller } from "../index";
/**
 * Handles authentication state changes from the Firebase context.
 * Updates the user info in global state and returns the updated value.
 * @param controller The controller instance
 * @param request The auth state change request
 * @returns The updated user info
 */
export declare function authStateChanged(controller: Controller, request: AuthStateChangedRequest): Promise<AuthState>;
