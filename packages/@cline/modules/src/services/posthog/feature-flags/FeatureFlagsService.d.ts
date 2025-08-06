declare class FeatureFlagsService {
    private static instance;
    private readonly client;
    private constructor();
    static getInstance(): FeatureFlagsService;
    /**
     * Check if a feature flag is enabled
     * @param flagName The feature flag key
     * @returns Boolean indicating if the feature is enabled
     */
    isFeatureFlagEnabled(flagName: string): Promise<boolean>;
}
export declare const featureFlagsService: FeatureFlagsService;
export {};
