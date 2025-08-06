export interface LanguageModelChatSelector {
    vendor?: string;
    family?: string;
    version?: string;
    id?: string;
}
export type OpenRouterErrorResponse = {
    error: {
        message: string;
        code: number;
        metadata?: OpenRouterProviderErrorMetadata | OpenRouterModerationErrorMetadata | Record<string, unknown>;
    };
};
export type OpenRouterProviderErrorMetadata = {
    provider_name: string;
    raw: unknown;
};
export type OpenRouterModerationErrorMetadata = {
    reasons: string[];
    flagged_input: string;
    provider_name: string;
    model_slug: string;
};
