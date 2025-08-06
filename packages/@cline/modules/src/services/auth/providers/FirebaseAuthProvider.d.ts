import { ClineAuthInfo } from "../AuthService";
import { Controller } from "../../../core/controller";
export declare class FirebaseAuthProvider {
    private _config;
    constructor(config: any);
    get config(): any;
    set config(value: any);
    shouldRefreshIdToken(existingIdToken: string): Promise<boolean>;
    /**
     * Restores the authentication token using a provided token.
     * @param token - The authentication token to restore.
     * @returns {Promise<User>} A promise that resolves with the authenticated user.
     * @throws {Error} Throws an error if the restoration fails.
     */
    retrieveClineAuthInfo(controller: Controller): Promise<ClineAuthInfo | null>;
    /**
     * Signs in the user using Firebase authentication with a custom token.
     * @returns {Promise<User>} A promise that resolves with the authenticated user.
     * @throws {Error} Throws an error if the sign-in fails.
     */
    signIn(controller: Controller, token: string, provider: string): Promise<ClineAuthInfo | null>;
}
