import type { BalanceResponse, OrganizationBalanceResponse, OrganizationUsageTransaction, PaymentTransaction, UsageTransaction, UserResponse } from "../../shared/ClineAccount";
export declare class ClineAccountService {
    private static instance;
    private _authService;
    private readonly _baseUrl;
    constructor();
    /**
     * Returns the singleton instance of ClineAccountService
     * @returns Singleton instance of ClineAccountService
     */
    static getInstance(): ClineAccountService;
    /**
     * Returns the base URL for the Cline API
     * @returns The base URL as a string
     */
    get baseUrl(): string;
    /**
     * Helper function to make authenticated requests to the Cline API
     * @param endpoint The API endpoint to call (without the base URL)
     * @param config Additional axios request configuration
     * @returns The API response data
     * @throws Error if the API key is not found or the request fails
     */
    private authenticatedRequest;
    /**
     * RPC variant that fetches the user's current credit balance without posting to webview
     * @returns Balance data or undefined if failed
     */
    fetchBalanceRPC(): Promise<BalanceResponse | undefined>;
    /**
     * RPC variant that fetches the user's usage transactions without posting to webview
     * @returns Usage transactions or undefined if failed
     */
    fetchUsageTransactionsRPC(): Promise<UsageTransaction[] | undefined>;
    /**
     * RPC variant that fetches the user's payment transactions without posting to webview
     * @returns Payment transactions or undefined if failed
     */
    fetchPaymentTransactionsRPC(): Promise<PaymentTransaction[] | undefined>;
    /**
     * Fetches the current user data
     * @returns UserResponse or undefined if failed
     */
    fetchMe(): Promise<UserResponse | undefined>;
    /**
     * Fetches the current user's organizations
     * @returns UserResponse["organizations"] or undefined if failed
     */
    fetchUserOrganizationsRPC(): Promise<UserResponse["organizations"] | undefined>;
    /**
     * Fetches the current user's organization credits
     * @returns {Promise<OrganizationBalanceResponse>} A promise that resolves to the active organization balance.
     */
    fetchOrganizationCreditsRPC(organizationId: string): Promise<OrganizationBalanceResponse | undefined>;
    /**
     * Fetches the current user's organization transactions
     * @returns {Promise<OrganizationUsageTransaction[]>} A promise that resolves to the active organization transactions.
     */
    fetchOrganizationUsageTransactionsRPC(organizationId: string): Promise<OrganizationUsageTransaction[] | undefined>;
    /**
     * Switches the active account to the specified organization or personal account.
     * @param organizationId - Optional organization ID to switch to. If not provided, it will switch to the personal account.
     * @returns {Promise<void>} A promise that resolves when the account switch is complete.
     * @throws {Error} If the account switch fails, an error will be thrown.
     */
    switchAccount(organizationId?: string): Promise<void>;
}
