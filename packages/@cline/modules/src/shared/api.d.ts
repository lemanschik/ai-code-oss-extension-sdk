import type { LanguageModelChatSelector } from "../api/providers/types";
export type ApiProvider = "anthropic" | "claude-code" | "openrouter" | "bedrock" | "vertex" | "openai" | "ollama" | "lmstudio" | "gemini" | "openai-native" | "requesty" | "together" | "deepseek" | "qwen" | "doubao" | "mistral" | "vscode-lm" | "cline" | "litellm" | "moonshot" | "nebius" | "fireworks" | "asksage" | "xai" | "sambanova" | "cerebras" | "sapaicore" | "groq" | "huggingface" | "huawei-cloud-maas" | "baseten";
export interface ApiHandlerOptions {
    apiKey?: string;
    clineAccountId?: string;
    taskId?: string;
    liteLlmBaseUrl?: string;
    liteLlmApiKey?: string;
    liteLlmUsePromptCache?: boolean;
    openAiHeaders?: Record<string, string>;
    anthropicBaseUrl?: string;
    openRouterApiKey?: string;
    openRouterProviderSorting?: string;
    awsAccessKey?: string;
    awsSecretKey?: string;
    awsSessionToken?: string;
    awsRegion?: string;
    awsUseCrossRegionInference?: boolean;
    awsBedrockUsePromptCache?: boolean;
    awsAuthentication?: string;
    awsUseProfile?: boolean;
    awsProfile?: string;
    awsBedrockApiKey?: string;
    awsBedrockEndpoint?: string;
    claudeCodePath?: string;
    vertexProjectId?: string;
    vertexRegion?: string;
    openAiBaseUrl?: string;
    openAiApiKey?: string;
    ollamaBaseUrl?: string;
    ollamaApiOptionsCtxNum?: string;
    lmStudioBaseUrl?: string;
    geminiApiKey?: string;
    geminiBaseUrl?: string;
    openAiNativeApiKey?: string;
    deepSeekApiKey?: string;
    requestyApiKey?: string;
    togetherApiKey?: string;
    fireworksApiKey?: string;
    fireworksModelMaxCompletionTokens?: number;
    fireworksModelMaxTokens?: number;
    qwenApiKey?: string;
    doubaoApiKey?: string;
    mistralApiKey?: string;
    azureApiVersion?: string;
    qwenApiLine?: string;
    moonshotApiLine?: string;
    moonshotApiKey?: string;
    huggingFaceApiKey?: string;
    nebiusApiKey?: string;
    asksageApiUrl?: string;
    asksageApiKey?: string;
    xaiApiKey?: string;
    sambanovaApiKey?: string;
    cerebrasApiKey?: string;
    groqApiKey?: string;
    basetenApiKey?: string;
    requestTimeoutMs?: number;
    sapAiCoreClientId?: string;
    sapAiCoreClientSecret?: string;
    sapAiResourceGroup?: string;
    sapAiCoreTokenUrl?: string;
    sapAiCoreBaseUrl?: string;
    huaweiCloudMaasApiKey?: string;
    onRetryAttempt?: (attempt: number, maxRetries: number, delay: number, error: any) => void;
    planModeApiModelId?: string;
    planModeThinkingBudgetTokens?: number;
    planModeReasoningEffort?: string;
    planModeVsCodeLmModelSelector?: LanguageModelChatSelector;
    planModeAwsBedrockCustomSelected?: boolean;
    planModeAwsBedrockCustomModelBaseId?: BedrockModelId;
    planModeOpenRouterModelId?: string;
    planModeOpenRouterModelInfo?: ModelInfo;
    planModeOpenAiModelId?: string;
    planModeOpenAiModelInfo?: OpenAiCompatibleModelInfo;
    planModeOllamaModelId?: string;
    planModeLmStudioModelId?: string;
    planModeLiteLlmModelId?: string;
    planModeLiteLlmModelInfo?: LiteLLMModelInfo;
    planModeRequestyModelId?: string;
    planModeRequestyModelInfo?: ModelInfo;
    planModeTogetherModelId?: string;
    planModeFireworksModelId?: string;
    planModeSapAiCoreModelId?: string;
    planModeGroqModelId?: string;
    planModeGroqModelInfo?: ModelInfo;
    planModeBasetenModelId?: string;
    planModeBasetenModelInfo?: ModelInfo;
    planModeHuggingFaceModelId?: string;
    planModeHuggingFaceModelInfo?: ModelInfo;
    planModeHuaweiCloudMaasModelId?: string;
    planModeHuaweiCloudMaasModelInfo?: ModelInfo;
    actModeApiModelId?: string;
    actModeThinkingBudgetTokens?: number;
    actModeReasoningEffort?: string;
    actModeVsCodeLmModelSelector?: LanguageModelChatSelector;
    actModeAwsBedrockCustomSelected?: boolean;
    actModeAwsBedrockCustomModelBaseId?: BedrockModelId;
    actModeOpenRouterModelId?: string;
    actModeOpenRouterModelInfo?: ModelInfo;
    actModeOpenAiModelId?: string;
    actModeOpenAiModelInfo?: OpenAiCompatibleModelInfo;
    actModeOllamaModelId?: string;
    actModeLmStudioModelId?: string;
    actModeLiteLlmModelId?: string;
    actModeLiteLlmModelInfo?: LiteLLMModelInfo;
    actModeRequestyModelId?: string;
    actModeRequestyModelInfo?: ModelInfo;
    actModeTogetherModelId?: string;
    actModeFireworksModelId?: string;
    actModeSapAiCoreModelId?: string;
    actModeGroqModelId?: string;
    actModeGroqModelInfo?: ModelInfo;
    actModeBasetenModelId?: string;
    actModeBasetenModelInfo?: ModelInfo;
    actModeHuggingFaceModelId?: string;
    actModeHuggingFaceModelInfo?: ModelInfo;
    actModeHuaweiCloudMaasModelId?: string;
    actModeHuaweiCloudMaasModelInfo?: ModelInfo;
}
export type ApiConfiguration = ApiHandlerOptions & {
    planModeApiProvider?: ApiProvider;
    actModeApiProvider?: ApiProvider;
    favoritedModelIds?: string[];
};
interface PriceTier {
    tokenLimit: number;
    price: number;
}
export interface ModelInfo {
    maxTokens?: number;
    contextWindow?: number;
    supportsImages?: boolean;
    supportsPromptCache: boolean;
    inputPrice?: number;
    outputPrice?: number;
    thinkingConfig?: {
        maxBudget?: number;
        outputPrice?: number;
        outputPriceTiers?: PriceTier[];
    };
    supportsGlobalEndpoint?: boolean;
    cacheWritesPrice?: number;
    cacheReadsPrice?: number;
    description?: string;
    tiers?: {
        contextWindow: number;
        inputPrice?: number;
        outputPrice?: number;
        cacheWritesPrice?: number;
        cacheReadsPrice?: number;
    }[];
}
export interface OpenAiCompatibleModelInfo extends ModelInfo {
    temperature?: number;
    isR1FormatRequired?: boolean;
}
export type AnthropicModelId = keyof typeof anthropicModels;
export declare const anthropicDefaultModelId: AnthropicModelId;
export declare const anthropicModels: {
    readonly "claude-sonnet-4-20250514": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "claude-opus-4-20250514": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 15;
        readonly outputPrice: 75;
        readonly cacheWritesPrice: 18.75;
        readonly cacheReadsPrice: 1.5;
    };
    readonly "claude-3-7-sonnet-20250219": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "claude-3-5-sonnet-20241022": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "claude-3-5-haiku-20241022": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.8;
        readonly outputPrice: 4;
        readonly cacheWritesPrice: 1;
        readonly cacheReadsPrice: 0.08;
    };
    readonly "claude-3-opus-20240229": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 15;
        readonly outputPrice: 75;
        readonly cacheWritesPrice: 18.75;
        readonly cacheReadsPrice: 1.5;
    };
    readonly "claude-3-haiku-20240307": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.25;
        readonly outputPrice: 1.25;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 0.03;
    };
};
export type ClaudeCodeModelId = keyof typeof claudeCodeModels;
export declare const claudeCodeDefaultModelId: ClaudeCodeModelId;
export declare const claudeCodeModels: {
    readonly "claude-sonnet-4-20250514": {
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "claude-opus-4-20250514": {
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly inputPrice: 15;
        readonly outputPrice: 75;
        readonly cacheWritesPrice: 18.75;
        readonly cacheReadsPrice: 1.5;
    };
    readonly "claude-3-7-sonnet-20250219": {
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "claude-3-5-sonnet-20241022": {
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "claude-3-5-haiku-20241022": {
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly inputPrice: 0.8;
        readonly outputPrice: 4;
        readonly cacheWritesPrice: 1;
        readonly cacheReadsPrice: 0.08;
    };
};
export type BedrockModelId = keyof typeof bedrockModels;
export declare const bedrockDefaultModelId: BedrockModelId;
export declare const bedrockModels: {
    readonly "anthropic.claude-sonnet-4-20250514-v1:0": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "anthropic.claude-opus-4-20250514-v1:0": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 15;
        readonly outputPrice: 75;
        readonly cacheWritesPrice: 18.75;
        readonly cacheReadsPrice: 1.5;
    };
    readonly "amazon.nova-premier-v1:0": {
        readonly maxTokens: 10000;
        readonly contextWindow: 1000000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2.5;
        readonly outputPrice: 12.5;
    };
    readonly "amazon.nova-pro-v1:0": {
        readonly maxTokens: 5000;
        readonly contextWindow: 300000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.8;
        readonly outputPrice: 3.2;
        readonly cacheReadsPrice: 0.2;
    };
    readonly "amazon.nova-lite-v1:0": {
        readonly maxTokens: 5000;
        readonly contextWindow: 300000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.06;
        readonly outputPrice: 0.24;
        readonly cacheReadsPrice: 0.015;
    };
    readonly "amazon.nova-micro-v1:0": {
        readonly maxTokens: 5000;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.035;
        readonly outputPrice: 0.14;
        readonly cacheReadsPrice: 0.00875;
    };
    readonly "anthropic.claude-3-7-sonnet-20250219-v1:0": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "anthropic.claude-3-5-sonnet-20241022-v2:0": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "anthropic.claude-3-5-haiku-20241022-v1:0": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.8;
        readonly outputPrice: 4;
        readonly cacheWritesPrice: 1;
        readonly cacheReadsPrice: 0.08;
    };
    readonly "anthropic.claude-3-5-sonnet-20240620-v1:0": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
    };
    readonly "anthropic.claude-3-opus-20240229-v1:0": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 15;
        readonly outputPrice: 75;
    };
    readonly "anthropic.claude-3-sonnet-20240229-v1:0": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
    };
    readonly "anthropic.claude-3-haiku-20240307-v1:0": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.25;
        readonly outputPrice: 1.25;
    };
    readonly "deepseek.r1-v1:0": {
        readonly maxTokens: 8000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1.35;
        readonly outputPrice: 5.4;
    };
};
export declare const openRouterDefaultModelId = "anthropic/claude-sonnet-4";
export declare const openRouterDefaultModelInfo: ModelInfo;
export type VertexModelId = keyof typeof vertexModels;
export declare const vertexDefaultModelId: VertexModelId;
export declare const vertexModels: {
    readonly "claude-sonnet-4@20250514": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "claude-opus-4@20250514": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 15;
        readonly outputPrice: 75;
        readonly cacheWritesPrice: 18.75;
        readonly cacheReadsPrice: 1.5;
    };
    readonly "claude-3-7-sonnet@20250219": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
        readonly thinkingConfig: {
            readonly maxBudget: 64000;
            readonly outputPrice: 15;
        };
    };
    readonly "claude-3-5-sonnet-v2@20241022": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "claude-3-5-sonnet@20240620": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly cacheWritesPrice: 3.75;
        readonly cacheReadsPrice: 0.3;
    };
    readonly "claude-3-5-haiku@20241022": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 1;
        readonly outputPrice: 5;
        readonly cacheWritesPrice: 1.25;
        readonly cacheReadsPrice: 0.1;
    };
    readonly "claude-3-opus@20240229": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 15;
        readonly outputPrice: 75;
        readonly cacheWritesPrice: 18.75;
        readonly cacheReadsPrice: 1.5;
    };
    readonly "claude-3-haiku@20240307": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.25;
        readonly outputPrice: 1.25;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 0.03;
    };
    readonly "mistral-large-2411": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 6;
    };
    readonly "mistral-small-2503": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.3;
    };
    readonly "codestral-2501": {
        readonly maxTokens: 256000;
        readonly contextWindow: 256000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 0.9;
    };
    readonly "llama-4-maverick-17b-128e-instruct-maas": {
        readonly maxTokens: 128000;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.35;
        readonly outputPrice: 1.15;
    };
    readonly "llama-4-scout-17b-16e-instruct-maas": {
        readonly maxTokens: 1000000;
        readonly contextWindow: 10485760;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.25;
        readonly outputPrice: 0.7;
    };
    readonly "gemini-2.0-flash-001": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly supportsGlobalEndpoint: true;
        readonly inputPrice: 0.15;
        readonly outputPrice: 0.6;
        readonly cacheWritesPrice: 1;
        readonly cacheReadsPrice: 0.025;
    };
    readonly "gemini-2.0-flash-lite-001": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly supportsGlobalEndpoint: true;
        readonly inputPrice: 0.075;
        readonly outputPrice: 0.3;
    };
    readonly "gemini-2.0-flash-thinking-exp-1219": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32767;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly supportsGlobalEndpoint: true;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-2.0-flash-exp": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly supportsGlobalEndpoint: true;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-2.5-pro-exp-03-25": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-2.5-pro": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly supportsGlobalEndpoint: true;
        readonly inputPrice: 2.5;
        readonly outputPrice: 15;
        readonly cacheReadsPrice: 0.625;
        readonly thinkingConfig: {
            readonly maxBudget: 32767;
        };
        readonly tiers: [{
            readonly contextWindow: 200000;
            readonly inputPrice: 1.25;
            readonly outputPrice: 10;
            readonly cacheReadsPrice: 0.31;
        }, {
            readonly contextWindow: number;
            readonly inputPrice: 2.5;
            readonly outputPrice: 15;
            readonly cacheReadsPrice: 0.625;
        }];
    };
    readonly "gemini-2.5-flash": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly supportsGlobalEndpoint: true;
        readonly inputPrice: 0.3;
        readonly outputPrice: 2.5;
        readonly thinkingConfig: {
            readonly maxBudget: 24576;
            readonly outputPrice: 3.5;
        };
    };
    readonly "gemini-2.5-flash-lite-preview-06-17": {
        readonly maxTokens: 64000;
        readonly contextWindow: 1000000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly supportsGlobalEndpoint: true;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.4;
        readonly cacheReadsPrice: 0.025;
        readonly description: "Preview version - may not be available in all regions";
        readonly thinkingConfig: {
            readonly maxBudget: 24576;
        };
    };
    readonly "gemini-2.0-flash-thinking-exp-01-21": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly supportsGlobalEndpoint: true;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-exp-1206": {
        readonly maxTokens: 8192;
        readonly contextWindow: 2097152;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-1.5-flash-002": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.15;
        readonly outputPrice: 0.6;
        readonly cacheWritesPrice: 1;
        readonly cacheReadsPrice: 0.0375;
        readonly tiers: [{
            readonly contextWindow: 128000;
            readonly inputPrice: 0.075;
            readonly outputPrice: 0.3;
            readonly cacheReadsPrice: 0.01875;
        }, {
            readonly contextWindow: number;
            readonly inputPrice: 0.15;
            readonly outputPrice: 0.6;
            readonly cacheReadsPrice: 0.0375;
        }];
    };
    readonly "gemini-1.5-flash-exp-0827": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-1.5-flash-8b-exp-0827": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-1.5-pro-002": {
        readonly maxTokens: 8192;
        readonly contextWindow: 2097152;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1.25;
        readonly outputPrice: 5;
    };
    readonly "gemini-1.5-pro-exp-0827": {
        readonly maxTokens: 8192;
        readonly contextWindow: 2097152;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
};
export declare const vertexGlobalModels: Record<string, ModelInfo>;
export declare const openAiModelInfoSaneDefaults: OpenAiCompatibleModelInfo;
export type GeminiModelId = keyof typeof geminiModels;
export declare const geminiDefaultModelId: GeminiModelId;
export declare const geminiModels: {
    readonly "gemini-2.5-pro": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 2.5;
        readonly outputPrice: 15;
        readonly cacheReadsPrice: 0.625;
        readonly thinkingConfig: {
            readonly maxBudget: 32767;
        };
        readonly tiers: [{
            readonly contextWindow: 200000;
            readonly inputPrice: 1.25;
            readonly outputPrice: 10;
            readonly cacheReadsPrice: 0.31;
        }, {
            readonly contextWindow: number;
            readonly inputPrice: 2.5;
            readonly outputPrice: 15;
            readonly cacheReadsPrice: 0.625;
        }];
    };
    readonly "gemini-2.5-flash-lite-preview-06-17": {
        readonly maxTokens: 64000;
        readonly contextWindow: 1000000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly supportsGlobalEndpoint: true;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.4;
        readonly cacheReadsPrice: 0.025;
        readonly description: "Preview version - may not be available in all regions";
        readonly thinkingConfig: {
            readonly maxBudget: 24576;
        };
    };
    readonly "gemini-2.5-flash": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.3;
        readonly outputPrice: 2.5;
        readonly cacheReadsPrice: 0.075;
        readonly thinkingConfig: {
            readonly maxBudget: 24576;
            readonly outputPrice: 3.5;
        };
    };
    readonly "gemini-2.0-flash-001": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.4;
        readonly cacheReadsPrice: 0.025;
        readonly cacheWritesPrice: 1;
    };
    readonly "gemini-2.0-flash-lite-preview-02-05": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-2.0-pro-exp-02-05": {
        readonly maxTokens: 8192;
        readonly contextWindow: 2097152;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-2.0-flash-thinking-exp-01-21": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-2.0-flash-thinking-exp-1219": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32767;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-2.0-flash-exp": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-1.5-flash-002": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.15;
        readonly outputPrice: 0.6;
        readonly cacheReadsPrice: 0.0375;
        readonly cacheWritesPrice: 1;
        readonly tiers: [{
            readonly contextWindow: 128000;
            readonly inputPrice: 0.075;
            readonly outputPrice: 0.3;
            readonly cacheReadsPrice: 0.01875;
        }, {
            readonly contextWindow: number;
            readonly inputPrice: 0.15;
            readonly outputPrice: 0.6;
            readonly cacheReadsPrice: 0.0375;
        }];
    };
    readonly "gemini-1.5-flash-exp-0827": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-1.5-flash-8b-exp-0827": {
        readonly maxTokens: 8192;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-1.5-pro-002": {
        readonly maxTokens: 8192;
        readonly contextWindow: 2097152;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-1.5-pro-exp-0827": {
        readonly maxTokens: 8192;
        readonly contextWindow: 2097152;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
    readonly "gemini-exp-1206": {
        readonly maxTokens: 8192;
        readonly contextWindow: 2097152;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
    };
};
export type OpenAiNativeModelId = keyof typeof openAiNativeModels;
export declare const openAiNativeDefaultModelId: OpenAiNativeModelId;
export declare const openAiNativeModels: {
    readonly o3: {
        readonly maxTokens: 100000;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 2;
        readonly outputPrice: 8;
        readonly cacheReadsPrice: 0.5;
    };
    readonly "o4-mini": {
        readonly maxTokens: 100000;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 1.1;
        readonly outputPrice: 4.4;
        readonly cacheReadsPrice: 0.275;
    };
    readonly "gpt-4.1": {
        readonly maxTokens: 32768;
        readonly contextWindow: 1047576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 2;
        readonly outputPrice: 8;
        readonly cacheReadsPrice: 0.5;
    };
    readonly "gpt-4.1-mini": {
        readonly maxTokens: 32768;
        readonly contextWindow: 1047576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.4;
        readonly outputPrice: 1.6;
        readonly cacheReadsPrice: 0.1;
    };
    readonly "gpt-4.1-nano": {
        readonly maxTokens: 32768;
        readonly contextWindow: 1047576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.4;
        readonly cacheReadsPrice: 0.025;
    };
    readonly "o3-mini": {
        readonly maxTokens: 100000;
        readonly contextWindow: 200000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 1.1;
        readonly outputPrice: 4.4;
        readonly cacheReadsPrice: 0.55;
    };
    readonly o1: {
        readonly maxTokens: 100000;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 15;
        readonly outputPrice: 60;
        readonly cacheReadsPrice: 7.5;
    };
    readonly "o1-preview": {
        readonly maxTokens: 32768;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 15;
        readonly outputPrice: 60;
        readonly cacheReadsPrice: 7.5;
    };
    readonly "o1-mini": {
        readonly maxTokens: 65536;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 1.1;
        readonly outputPrice: 4.4;
        readonly cacheReadsPrice: 0.55;
    };
    readonly "gpt-4o": {
        readonly maxTokens: 4096;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 2.5;
        readonly outputPrice: 10;
        readonly cacheReadsPrice: 1.25;
    };
    readonly "gpt-4o-mini": {
        readonly maxTokens: 16384;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.15;
        readonly outputPrice: 0.6;
        readonly cacheReadsPrice: 0.075;
    };
    readonly "chatgpt-4o-latest": {
        readonly maxTokens: 16384;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 5;
        readonly outputPrice: 15;
    };
    readonly "gpt-4.5-preview": {
        readonly maxTokens: 16384;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 75;
        readonly outputPrice: 150;
    };
};
export declare const azureOpenAiDefaultApiVersion = "2024-08-01-preview";
export type DeepSeekModelId = keyof typeof deepSeekModels;
export declare const deepSeekDefaultModelId: DeepSeekModelId;
export declare const deepSeekModels: {
    readonly "deepseek-chat": {
        readonly maxTokens: 8000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0;
        readonly outputPrice: 1.1;
        readonly cacheWritesPrice: 0.27;
        readonly cacheReadsPrice: 0.07;
    };
    readonly "deepseek-reasoner": {
        readonly maxTokens: 8000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0;
        readonly outputPrice: 2.19;
        readonly cacheWritesPrice: 0.55;
        readonly cacheReadsPrice: 0.14;
    };
};
export type HuggingFaceModelId = keyof typeof huggingFaceModels;
export declare const huggingFaceDefaultModelId: HuggingFaceModelId;
export declare const huggingFaceModels: {
    readonly "moonshotai/Kimi-K2-Instruct": {
        readonly maxTokens: 131072;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "Advanced reasoning model with superior performance across coding, math, and general capabilities.";
    };
    readonly "deepseek-ai/DeepSeek-V3-0324": {
        readonly maxTokens: 8192;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "Advanced reasoning model with superior performance across coding, math, and general capabilities.";
    };
    readonly "deepseek-ai/DeepSeek-R1": {
        readonly maxTokens: 8192;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "DeepSeek's reasoning model with step-by-step thinking capabilities.";
    };
    readonly "deepseek-ai/DeepSeek-R1-0528": {
        readonly maxTokens: 64000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "DeepSeek's reasoning model's latest version with step-by-step thinking capabilities";
    };
    readonly "meta-llama/Llama-3.1-8B-Instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "Efficient 8B parameter Llama model for general-purpose tasks.";
    };
};
export declare const internationalQwenModels: {
    readonly "qwen3-coder-plus": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1000000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1;
        readonly outputPrice: 5;
    };
    readonly "qwen3-coder-480b-a35b-instruct": {
        readonly maxTokens: 65536;
        readonly contextWindow: 204800;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1.5;
        readonly outputPrice: 7.5;
    };
    readonly "qwen3-235b-a22b": {
        readonly maxTokens: 16384;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 8;
        readonly cacheWritesPrice: 2;
        readonly cacheReadsPrice: 8;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 20;
        };
    };
    readonly "qwen3-32b": {
        readonly maxTokens: 16384;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 8;
        readonly cacheWritesPrice: 2;
        readonly cacheReadsPrice: 8;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 20;
        };
    };
    readonly "qwen3-30b-a3b": {
        readonly maxTokens: 16384;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.75;
        readonly outputPrice: 3;
        readonly cacheWritesPrice: 0.75;
        readonly cacheReadsPrice: 3;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 7.5;
        };
    };
    readonly "qwen3-14b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1;
        readonly outputPrice: 4;
        readonly cacheWritesPrice: 1;
        readonly cacheReadsPrice: 4;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 10;
        };
    };
    readonly "qwen3-8b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.5;
        readonly outputPrice: 2;
        readonly cacheWritesPrice: 0.5;
        readonly cacheReadsPrice: 2;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 5;
        };
    };
    readonly "qwen3-4b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 1.2;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 1.2;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 3;
        };
    };
    readonly "qwen3-1.7b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 1.2;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 1.2;
        readonly thinkingConfig: {
            readonly maxBudget: 30720;
            readonly outputPrice: 3;
        };
    };
    readonly "qwen3-0.6b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 1.2;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 1.2;
        readonly thinkingConfig: {
            readonly maxBudget: 30720;
            readonly outputPrice: 3;
        };
    };
    readonly "qwen2.5-coder-32b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.002;
        readonly outputPrice: 0.006;
        readonly cacheWritesPrice: 0.002;
        readonly cacheReadsPrice: 0.006;
    };
    readonly "qwen2.5-coder-14b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.002;
        readonly outputPrice: 0.006;
        readonly cacheWritesPrice: 0.002;
        readonly cacheReadsPrice: 0.006;
    };
    readonly "qwen2.5-coder-7b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.001;
        readonly outputPrice: 0.002;
        readonly cacheWritesPrice: 0.001;
        readonly cacheReadsPrice: 0.002;
    };
    readonly "qwen2.5-coder-3b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "qwen2.5-coder-1.5b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "qwen2.5-coder-0.5b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "qwen-coder-plus-latest": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3.5;
        readonly outputPrice: 7;
        readonly cacheWritesPrice: 3.5;
        readonly cacheReadsPrice: 7;
    };
    readonly "qwen-plus-latest": {
        readonly maxTokens: 16384;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.8;
        readonly outputPrice: 2;
        readonly cacheWritesPrice: 0.8;
        readonly cacheReadsPrice: 2;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 16;
        };
    };
    readonly "qwen-turbo-latest": {
        readonly maxTokens: 16384;
        readonly contextWindow: 1000000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 0.6;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 0.6;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 6;
        };
    };
    readonly "qwen-max-latest": {
        readonly maxTokens: 30720;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2.4;
        readonly outputPrice: 9.6;
        readonly cacheWritesPrice: 2.4;
        readonly cacheReadsPrice: 9.6;
    };
    readonly "qwen-coder-plus": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3.5;
        readonly outputPrice: 7;
        readonly cacheWritesPrice: 3.5;
        readonly cacheReadsPrice: 7;
    };
    readonly "qwen-plus": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.8;
        readonly outputPrice: 2;
        readonly cacheWritesPrice: 0.8;
        readonly cacheReadsPrice: 0.2;
    };
    readonly "qwen-turbo": {
        readonly maxTokens: 1000000;
        readonly contextWindow: 1000000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 0.6;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 0.6;
    };
    readonly "qwen-max": {
        readonly maxTokens: 30720;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2.4;
        readonly outputPrice: 9.6;
        readonly cacheWritesPrice: 2.4;
        readonly cacheReadsPrice: 9.6;
    };
    readonly "deepseek-v3": {
        readonly maxTokens: 8000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0;
        readonly outputPrice: 0.28;
        readonly cacheWritesPrice: 0.14;
        readonly cacheReadsPrice: 0.014;
    };
    readonly "deepseek-r1": {
        readonly maxTokens: 8000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0;
        readonly outputPrice: 2.19;
        readonly cacheWritesPrice: 0.55;
        readonly cacheReadsPrice: 0.14;
    };
    readonly "qwen-vl-max": {
        readonly maxTokens: 30720;
        readonly contextWindow: 32768;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3;
        readonly outputPrice: 9;
        readonly cacheWritesPrice: 3;
        readonly cacheReadsPrice: 9;
    };
    readonly "qwen-vl-max-latest": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3;
        readonly outputPrice: 9;
        readonly cacheWritesPrice: 3;
        readonly cacheReadsPrice: 9;
    };
    readonly "qwen-vl-plus": {
        readonly maxTokens: 6000;
        readonly contextWindow: 8000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1.5;
        readonly outputPrice: 4.5;
        readonly cacheWritesPrice: 1.5;
        readonly cacheReadsPrice: 4.5;
    };
    readonly "qwen-vl-plus-latest": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1.5;
        readonly outputPrice: 4.5;
        readonly cacheWritesPrice: 1.5;
        readonly cacheReadsPrice: 4.5;
    };
};
export declare const mainlandQwenModels: {
    readonly "qwen3-235b-a22b": {
        readonly maxTokens: 16384;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 8;
        readonly cacheWritesPrice: 2;
        readonly cacheReadsPrice: 8;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 20;
        };
    };
    readonly "qwen3-32b": {
        readonly maxTokens: 16384;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 8;
        readonly cacheWritesPrice: 2;
        readonly cacheReadsPrice: 8;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 20;
        };
    };
    readonly "qwen3-30b-a3b": {
        readonly maxTokens: 16384;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.75;
        readonly outputPrice: 3;
        readonly cacheWritesPrice: 0.75;
        readonly cacheReadsPrice: 3;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 7.5;
        };
    };
    readonly "qwen3-14b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1;
        readonly outputPrice: 4;
        readonly cacheWritesPrice: 1;
        readonly cacheReadsPrice: 4;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 10;
        };
    };
    readonly "qwen3-8b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.5;
        readonly outputPrice: 2;
        readonly cacheWritesPrice: 0.5;
        readonly cacheReadsPrice: 2;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 5;
        };
    };
    readonly "qwen3-4b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 1.2;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 1.2;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 3;
        };
    };
    readonly "qwen3-1.7b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 1.2;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 1.2;
        readonly thinkingConfig: {
            readonly maxBudget: 30720;
            readonly outputPrice: 3;
        };
    };
    readonly "qwen3-0.6b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 1.2;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 1.2;
        readonly thinkingConfig: {
            readonly maxBudget: 30720;
            readonly outputPrice: 3;
        };
    };
    readonly "qwen2.5-coder-32b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.002;
        readonly outputPrice: 0.006;
        readonly cacheWritesPrice: 0.002;
        readonly cacheReadsPrice: 0.006;
    };
    readonly "qwen2.5-coder-14b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.002;
        readonly outputPrice: 0.006;
        readonly cacheWritesPrice: 0.002;
        readonly cacheReadsPrice: 0.006;
    };
    readonly "qwen2.5-coder-7b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.001;
        readonly outputPrice: 0.002;
        readonly cacheWritesPrice: 0.001;
        readonly cacheReadsPrice: 0.002;
    };
    readonly "qwen2.5-coder-3b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "qwen2.5-coder-1.5b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "qwen2.5-coder-0.5b-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "qwen-coder-plus-latest": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3.5;
        readonly outputPrice: 7;
        readonly cacheWritesPrice: 3.5;
        readonly cacheReadsPrice: 7;
    };
    readonly "qwen-plus-latest": {
        readonly maxTokens: 16384;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.8;
        readonly outputPrice: 2;
        readonly cacheWritesPrice: 0.8;
        readonly cacheReadsPrice: 2;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 16;
        };
    };
    readonly "qwen-turbo-latest": {
        readonly maxTokens: 16384;
        readonly contextWindow: 1000000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 0.6;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 0.6;
        readonly thinkingConfig: {
            readonly maxBudget: 38912;
            readonly outputPrice: 6;
        };
    };
    readonly "qwen-max-latest": {
        readonly maxTokens: 30720;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2.4;
        readonly outputPrice: 9.6;
        readonly cacheWritesPrice: 2.4;
        readonly cacheReadsPrice: 9.6;
    };
    readonly "qwq-plus-latest": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131071;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "qwq-plus": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131071;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "qwen-coder-plus": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3.5;
        readonly outputPrice: 7;
        readonly cacheWritesPrice: 3.5;
        readonly cacheReadsPrice: 7;
    };
    readonly "qwen-plus": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.8;
        readonly outputPrice: 2;
        readonly cacheWritesPrice: 0.8;
        readonly cacheReadsPrice: 0.2;
    };
    readonly "qwen-turbo": {
        readonly maxTokens: 1000000;
        readonly contextWindow: 1000000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 0.6;
        readonly cacheWritesPrice: 0.3;
        readonly cacheReadsPrice: 0.6;
    };
    readonly "qwen-max": {
        readonly maxTokens: 30720;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2.4;
        readonly outputPrice: 9.6;
        readonly cacheWritesPrice: 2.4;
        readonly cacheReadsPrice: 9.6;
    };
    readonly "deepseek-v3": {
        readonly maxTokens: 8000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0;
        readonly outputPrice: 0.28;
        readonly cacheWritesPrice: 0.14;
        readonly cacheReadsPrice: 0.014;
    };
    readonly "deepseek-r1": {
        readonly maxTokens: 8000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0;
        readonly outputPrice: 2.19;
        readonly cacheWritesPrice: 0.55;
        readonly cacheReadsPrice: 0.14;
    };
    readonly "qwen-vl-max": {
        readonly maxTokens: 30720;
        readonly contextWindow: 32768;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3;
        readonly outputPrice: 9;
        readonly cacheWritesPrice: 3;
        readonly cacheReadsPrice: 9;
    };
    readonly "qwen-vl-max-latest": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3;
        readonly outputPrice: 9;
        readonly cacheWritesPrice: 3;
        readonly cacheReadsPrice: 9;
    };
    readonly "qwen-vl-plus": {
        readonly maxTokens: 6000;
        readonly contextWindow: 8000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1.5;
        readonly outputPrice: 4.5;
        readonly cacheWritesPrice: 1.5;
        readonly cacheReadsPrice: 4.5;
    };
    readonly "qwen-vl-plus-latest": {
        readonly maxTokens: 129024;
        readonly contextWindow: 131072;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1.5;
        readonly outputPrice: 4.5;
        readonly cacheWritesPrice: 1.5;
        readonly cacheReadsPrice: 4.5;
    };
};
export declare enum QwenApiRegions {
    CHINA = "china",
    INTERNATIONAL = "international"
}
export type MainlandQwenModelId = keyof typeof mainlandQwenModels;
export type InternationalQwenModelId = keyof typeof internationalQwenModels;
export declare const internationalQwenDefaultModelId: InternationalQwenModelId;
export declare const mainlandQwenDefaultModelId: MainlandQwenModelId;
export type DoubaoModelId = keyof typeof doubaoModels;
export declare const doubaoDefaultModelId: DoubaoModelId;
export declare const doubaoModels: {
    readonly "doubao-1-5-pro-256k-250115": {
        readonly maxTokens: 12288;
        readonly contextWindow: 256000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.7;
        readonly outputPrice: 1.3;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "doubao-1-5-pro-32k-250115": {
        readonly maxTokens: 12288;
        readonly contextWindow: 32000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.11;
        readonly outputPrice: 0.3;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "deepseek-v3-250324": {
        readonly maxTokens: 12288;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.55;
        readonly outputPrice: 2.19;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "deepseek-r1-250120": {
        readonly maxTokens: 32768;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.27;
        readonly outputPrice: 1.09;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
};
export type MistralModelId = keyof typeof mistralModels;
export declare const mistralDefaultModelId: MistralModelId;
export declare const mistralModels: {
    readonly "mistral-large-2411": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 6;
    };
    readonly "pixtral-large-2411": {
        readonly maxTokens: 131000;
        readonly contextWindow: 131000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 6;
    };
    readonly "ministral-3b-2410": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.04;
        readonly outputPrice: 0.04;
    };
    readonly "ministral-8b-2410": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.1;
    };
    readonly "mistral-small-latest": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.3;
    };
    readonly "mistral-medium-latest": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.4;
        readonly outputPrice: 2;
    };
    readonly "mistral-small-2501": {
        readonly maxTokens: 32000;
        readonly contextWindow: 32000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.3;
    };
    readonly "pixtral-12b-2409": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.15;
        readonly outputPrice: 0.15;
    };
    readonly "open-mistral-nemo-2407": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.15;
        readonly outputPrice: 0.15;
    };
    readonly "open-codestral-mamba": {
        readonly maxTokens: 256000;
        readonly contextWindow: 256000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.15;
        readonly outputPrice: 0.15;
    };
    readonly "codestral-2501": {
        readonly maxTokens: 256000;
        readonly contextWindow: 256000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 0.9;
    };
    readonly "devstral-small-2505": {
        readonly maxTokens: 128000;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.3;
    };
    readonly "devstral-medium-latest": {
        readonly maxTokens: 128000;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.4;
        readonly outputPrice: 2;
    };
};
export type LiteLLMModelId = string;
export declare const liteLlmDefaultModelId = "anthropic/claude-3-7-sonnet-20250219";
export interface LiteLLMModelInfo extends ModelInfo {
    temperature?: number;
}
export declare const liteLlmModelInfoSaneDefaults: LiteLLMModelInfo;
export type AskSageModelId = keyof typeof askSageModels;
export declare const askSageDefaultModelId: AskSageModelId;
export declare const askSageDefaultURL: string;
export declare const askSageModels: {
    "gpt-4o": {
        maxTokens: number;
        contextWindow: number;
        supportsImages: boolean;
        supportsPromptCache: boolean;
        inputPrice: number;
        outputPrice: number;
    };
    "gpt-4o-gov": {
        maxTokens: number;
        contextWindow: number;
        supportsImages: boolean;
        supportsPromptCache: boolean;
        inputPrice: number;
        outputPrice: number;
    };
    "gpt-4.1": {
        maxTokens: number;
        contextWindow: number;
        supportsImages: boolean;
        supportsPromptCache: boolean;
        inputPrice: number;
        outputPrice: number;
    };
    "claude-35-sonnet": {
        maxTokens: number;
        contextWindow: number;
        supportsImages: boolean;
        supportsPromptCache: boolean;
        inputPrice: number;
        outputPrice: number;
    };
    "aws-bedrock-claude-35-sonnet-gov": {
        maxTokens: number;
        contextWindow: number;
        supportsImages: boolean;
        supportsPromptCache: boolean;
        inputPrice: number;
        outputPrice: number;
    };
    "claude-37-sonnet": {
        maxTokens: number;
        contextWindow: number;
        supportsImages: boolean;
        supportsPromptCache: boolean;
        inputPrice: number;
        outputPrice: number;
    };
    "claude-4-sonnet": {
        maxTokens: number;
        contextWindow: number;
        supportsImages: boolean;
        supportsPromptCache: boolean;
        inputPrice: number;
        outputPrice: number;
    };
    "claude-4-opus": {
        maxTokens: number;
        contextWindow: number;
        supportsImages: boolean;
        supportsPromptCache: boolean;
        inputPrice: number;
        outputPrice: number;
    };
    "google-gemini-2.5-pro": {
        maxTokens: number;
        contextWindow: number;
        supportsImages: boolean;
        supportsPromptCache: boolean;
        inputPrice: number;
        outputPrice: number;
    };
};
export declare const nebiusModels: {
    readonly "deepseek-ai/DeepSeek-V3": {
        readonly maxTokens: 32000;
        readonly contextWindow: 96000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.5;
        readonly outputPrice: 1.5;
    };
    readonly "deepseek-ai/DeepSeek-V3-0324-fast": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 6;
    };
    readonly "deepseek-ai/DeepSeek-R1": {
        readonly maxTokens: 32000;
        readonly contextWindow: 96000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.8;
        readonly outputPrice: 2.4;
    };
    readonly "deepseek-ai/DeepSeek-R1-fast": {
        readonly maxTokens: 32000;
        readonly contextWindow: 96000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 6;
    };
    readonly "deepseek-ai/DeepSeek-R1-0528": {
        readonly maxTokens: 128000;
        readonly contextWindow: 163840;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.8;
        readonly outputPrice: 2.4;
    };
    readonly "meta-llama/Llama-3.3-70B-Instruct-fast": {
        readonly maxTokens: 32000;
        readonly contextWindow: 96000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.25;
        readonly outputPrice: 0.75;
    };
    readonly "Qwen/Qwen2.5-32B-Instruct-fast": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.13;
        readonly outputPrice: 0.4;
    };
    readonly "Qwen/Qwen2.5-Coder-32B-Instruct-fast": {
        readonly maxTokens: 128000;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.3;
    };
    readonly "Qwen/Qwen3-4B-fast": {
        readonly maxTokens: 32000;
        readonly contextWindow: 41000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.08;
        readonly outputPrice: 0.24;
    };
    readonly "Qwen/Qwen3-30B-A3B-fast": {
        readonly maxTokens: 32000;
        readonly contextWindow: 41000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.3;
        readonly outputPrice: 0.9;
    };
    readonly "Qwen/Qwen3-235B-A22B": {
        readonly maxTokens: 32000;
        readonly contextWindow: 41000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.2;
        readonly outputPrice: 0.6;
    };
};
export type NebiusModelId = keyof typeof nebiusModels;
export declare const nebiusDefaultModelId = "Qwen/Qwen2.5-32B-Instruct-fast";
export type XAIModelId = keyof typeof xaiModels;
export declare const xaiDefaultModelId: XAIModelId;
export declare const xaiModels: {
    readonly "grok-4": {
        readonly maxTokens: 8192;
        readonly contextWindow: 262144;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly cacheReadsPrice: 0.75;
        readonly outputPrice: 15;
    };
    readonly "grok-3-beta": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly description: "X AI's Grok-3 beta model with 131K context window";
    };
    readonly "grok-3-fast-beta": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 5;
        readonly outputPrice: 25;
        readonly description: "X AI's Grok-3 fast beta model with 131K context window";
    };
    readonly "grok-3-mini-beta": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.3;
        readonly outputPrice: 0.5;
        readonly description: "X AI's Grok-3 mini beta model with 131K context window";
    };
    readonly "grok-3-mini-fast-beta": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.6;
        readonly outputPrice: 4;
        readonly description: "X AI's Grok-3 mini fast beta model with 131K context window";
    };
    readonly "grok-3": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 3;
        readonly outputPrice: 15;
        readonly description: "X AI's Grok-3 model with 131K context window";
    };
    readonly "grok-3-fast": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 5;
        readonly outputPrice: 25;
        readonly description: "X AI's Grok-3 fast model with 131K context window";
    };
    readonly "grok-3-mini": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.3;
        readonly outputPrice: 0.5;
        readonly description: "X AI's Grok-3 mini model with 131K context window";
    };
    readonly "grok-3-mini-fast": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: true;
        readonly inputPrice: 0.6;
        readonly outputPrice: 4;
        readonly description: "X AI's Grok-3 mini fast model with 131K context window";
    };
    readonly "grok-2-latest": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 10;
        readonly description: "X AI's Grok-2 model - latest version with 131K context window";
    };
    readonly "grok-2": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 10;
        readonly description: "X AI's Grok-2 model with 131K context window";
    };
    readonly "grok-2-1212": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 10;
        readonly description: "X AI's Grok-2 model (version 1212) with 131K context window";
    };
    readonly "grok-2-vision-latest": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 10;
        readonly description: "X AI's Grok-2 Vision model - latest version with image support and 32K context window";
    };
    readonly "grok-2-vision": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 10;
        readonly description: "X AI's Grok-2 Vision model with image support and 32K context window";
    };
    readonly "grok-2-vision-1212": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32768;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 10;
        readonly description: "X AI's Grok-2 Vision model (version 1212) with image support and 32K context window";
    };
    readonly "grok-vision-beta": {
        readonly maxTokens: 8192;
        readonly contextWindow: 8192;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 5;
        readonly outputPrice: 15;
        readonly description: "X AI's Grok Vision Beta model with image support and 8K context window";
    };
    readonly "grok-beta": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 5;
        readonly outputPrice: 15;
        readonly description: "X AI's Grok Beta model (legacy) with 131K context window";
    };
};
export type SambanovaModelId = keyof typeof sambanovaModels;
export declare const sambanovaDefaultModelId: SambanovaModelId;
export declare const sambanovaModels: {
    readonly "Llama-4-Maverick-17B-128E-Instruct": {
        readonly maxTokens: 4096;
        readonly contextWindow: 8000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.63;
        readonly outputPrice: 1.8;
    };
    readonly "Llama-4-Scout-17B-16E-Instruct": {
        readonly maxTokens: 4096;
        readonly contextWindow: 8000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.4;
        readonly outputPrice: 0.7;
    };
    readonly "Meta-Llama-3.3-70B-Instruct": {
        readonly maxTokens: 4096;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.6;
        readonly outputPrice: 1.2;
    };
    readonly "DeepSeek-R1-Distill-Llama-70B": {
        readonly maxTokens: 4096;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.7;
        readonly outputPrice: 1.4;
    };
    readonly "DeepSeek-R1": {
        readonly maxTokens: 4096;
        readonly contextWindow: 16000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 5;
        readonly outputPrice: 7;
    };
    readonly "Meta-Llama-3.1-405B-Instruct": {
        readonly maxTokens: 4096;
        readonly contextWindow: 16000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 5;
        readonly outputPrice: 10;
    };
    readonly "Meta-Llama-3.1-8B-Instruct": {
        readonly maxTokens: 4096;
        readonly contextWindow: 16000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.1;
        readonly outputPrice: 0.2;
    };
    readonly "Meta-Llama-3.2-1B-Instruct": {
        readonly maxTokens: 4096;
        readonly contextWindow: 16000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.04;
        readonly outputPrice: 0.08;
    };
    readonly "Meta-Llama-3.2-3B-Instruct": {
        readonly maxTokens: 4096;
        readonly contextWindow: 8000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.08;
        readonly outputPrice: 0.16;
    };
    readonly "Qwen3-32B": {
        readonly maxTokens: 4096;
        readonly contextWindow: 16000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.4;
        readonly outputPrice: 0.8;
    };
    readonly "QwQ-32B": {
        readonly maxTokens: 4096;
        readonly contextWindow: 16000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.5;
        readonly outputPrice: 1;
    };
    readonly "DeepSeek-V3-0324": {
        readonly maxTokens: 4096;
        readonly contextWindow: 8000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 3;
        readonly outputPrice: 4.5;
    };
};
export type CerebrasModelId = keyof typeof cerebrasModels;
export declare const cerebrasDefaultModelId: CerebrasModelId;
export declare const cerebrasModels: {
    readonly "qwen-3-coder-480b-free": {
        readonly maxTokens: 40000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "SOTA coding model with ~2000 tokens/s ($0 free tier)\n\n• Use this if you don't have a Cerebras subscription\n• 64K context window\n• Rate limits: 150K TPM, 1M TPH/TPD, 10 RPM, 100 RPH/RPD\n\nUpgrade for higher limits: [https://cloud.cerebras.ai/?utm=cline](https://cloud.cerebras.ai/?utm=cline)";
    };
    readonly "qwen-3-coder-480b": {
        readonly maxTokens: 40000;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "SOTA coding model with ~2000 tokens/s ($50/$250 paid tiers)\n\n• Use this if you have a Cerebras subscription\n• 131K context window with higher rate limits";
    };
    readonly "qwen-3-235b-a22b-instruct-2507": {
        readonly maxTokens: 64000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "Intelligent model with ~1400 tokens/s";
    };
    readonly "llama-3.3-70b": {
        readonly maxTokens: 64000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "Powerful model with ~2600 tokens/s";
    };
    readonly "qwen-3-32b": {
        readonly maxTokens: 64000;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "SOTA coding performance with ~2500 tokens/s";
    };
    readonly "qwen-3-235b-a22b-thinking-2507": {
        readonly maxTokens: 32000;
        readonly contextWindow: 65000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "SOTA performance with ~1500 tokens/s";
    };
};
export type GroqModelId = keyof typeof groqModels;
export declare const groqDefaultModelId: GroqModelId;
export declare const groqModels: {
    readonly "compound-beta": {
        readonly maxTokens: 8192;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "Compound model using Llama 4 Scout for core reasoning with Llama 3.3 70B for routing and tool use. Excellent for plan/act workflows.";
    };
    readonly "compound-beta-mini": {
        readonly maxTokens: 8192;
        readonly contextWindow: 128000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0;
        readonly outputPrice: 0;
        readonly description: "Lightweight compound model for faster inference while maintaining tool use capabilities.";
    };
    readonly "deepseek-r1-distill-llama-70b": {
        readonly maxTokens: 131072;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.75;
        readonly outputPrice: 0.99;
        readonly description: "DeepSeek R1 reasoning capabilities distilled into Llama 70B architecture. Excellent for complex problem-solving and planning.";
    };
    readonly "meta-llama/llama-4-maverick-17b-128e-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.2;
        readonly outputPrice: 0.6;
        readonly description: "Meta's Llama 4 Maverick 17B model with 128 experts, supports vision and multimodal tasks.";
    };
    readonly "meta-llama/llama-4-scout-17b-16e-instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.11;
        readonly outputPrice: 0.34;
        readonly description: "Meta's Llama 4 Scout 17B model with 16 experts, optimized for fast inference and general tasks.";
    };
    readonly "llama-3.3-70b-versatile": {
        readonly maxTokens: 32768;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.59;
        readonly outputPrice: 0.79;
        readonly description: "Meta's latest Llama 3.3 70B model optimized for versatile use cases with excellent performance and speed.";
    };
    readonly "llama-3.1-8b-instant": {
        readonly maxTokens: 131072;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.05;
        readonly outputPrice: 0.08;
        readonly description: "Fast and efficient Llama 3.1 8B model optimized for speed, low latency, and reliable tool execution.";
    };
    readonly "moonshotai/kimi-k2-instruct": {
        readonly maxTokens: 16384;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1;
        readonly outputPrice: 3;
        readonly description: "Kimi K2 is Moonshot AI's state-of-the-art Mixture-of-Experts (MoE) language model with 1 trillion total parameters and 32 billion activated parameters.";
    };
};
export declare const requestyDefaultModelId = "anthropic/claude-3-7-sonnet-latest";
export declare const requestyDefaultModelInfo: ModelInfo;
export type SapAiCoreModelId = keyof typeof sapAiCoreModels;
export declare const sapAiCoreDefaultModelId: SapAiCoreModelId;
export declare const sapAiCoreModels: {
    readonly "anthropic--claude-4-sonnet": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "anthropic--claude-4-opus": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "anthropic--claude-3.7-sonnet": {
        readonly maxTokens: 64000;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "anthropic--claude-3.5-sonnet": {
        readonly maxTokens: 8192;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "anthropic--claude-3-sonnet": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "anthropic--claude-3-haiku": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "anthropic--claude-3-opus": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "gemini-2.5-pro": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "gemini-2.5-flash": {
        readonly maxTokens: 65536;
        readonly contextWindow: 1048576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly thinkingConfig: {
            readonly maxBudget: 24576;
        };
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "gpt-4": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "gpt-4o": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "gpt-4o-mini": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "gpt-4.1": {
        readonly maxTokens: 32768;
        readonly contextWindow: 1047576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "gpt-4.1-nano": {
        readonly maxTokens: 32768;
        readonly contextWindow: 1047576;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly o1: {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly o3: {
        readonly maxTokens: 100000;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "o3-mini": {
        readonly maxTokens: 4096;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
    readonly "o4-mini": {
        readonly maxTokens: 100000;
        readonly contextWindow: 200000;
        readonly supportsImages: true;
        readonly supportsPromptCache: true;
        readonly description: "Pricing is calculated using SAP's Capacity Units rather than direct USD pricing.";
    };
};
export declare const moonshotModels: {
    readonly "kimi-k2-0711-preview": {
        readonly maxTokens: 131072;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.6;
        readonly outputPrice: 2.5;
    };
    readonly "moonshot-v1-128k-vision-preview": {
        readonly maxTokens: 131072;
        readonly contextWindow: 131072;
        readonly supportsImages: true;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2;
        readonly outputPrice: 5;
    };
    readonly "kimi-thinking-preview": {
        readonly maxTokens: 131072;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 30;
        readonly outputPrice: 30;
    };
};
export type MoonshotModelId = keyof typeof moonshotModels;
export declare const moonshotDefaultModelId = "kimi-k2-0711-preview";
export type HuaweiCloudMaasModelId = keyof typeof huaweiCloudMaasModels;
export declare const huaweiCloudMaasDefaultModelId: HuaweiCloudMaasModelId;
export declare const huaweiCloudMaasModels: {
    readonly "DeepSeek-V3": {
        readonly maxTokens: 16384;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.27;
        readonly outputPrice: 1.1;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
    };
    readonly "DeepSeek-R1": {
        readonly maxTokens: 16384;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.55;
        readonly outputPrice: 2.2;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly thinkingConfig: {
            readonly maxBudget: 8192;
            readonly outputPrice: 2.2;
        };
    };
    readonly "deepseek-r1-250528": {
        readonly maxTokens: 16384;
        readonly contextWindow: 64000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.55;
        readonly outputPrice: 2.2;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly thinkingConfig: {
            readonly maxBudget: 8192;
            readonly outputPrice: 2.2;
        };
    };
    readonly "qwen3-235b-a22b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.27;
        readonly outputPrice: 1.1;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly thinkingConfig: {
            readonly maxBudget: 4096;
            readonly outputPrice: 1.1;
        };
    };
    readonly "qwen3-32b": {
        readonly maxTokens: 8192;
        readonly contextWindow: 32000;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.27;
        readonly outputPrice: 1.1;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly thinkingConfig: {
            readonly maxBudget: 4096;
            readonly outputPrice: 1.1;
        };
    };
};
export declare const basetenModels: {
    readonly "deepseek-ai/DeepSeek-R1-0528": {
        readonly maxTokens: 131072;
        readonly contextWindow: 163840;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 2.55;
        readonly outputPrice: 5.95;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly description: "DeepSeek R1 0528 - A state-of-the-art 671B-parameter MoE LLM with o1-style reasoning licensed for commercial use.";
    };
    readonly "deepseek-ai/DeepSeek-V3-0324": {
        readonly maxTokens: 131072;
        readonly contextWindow: 163840;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.77;
        readonly outputPrice: 0.77;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly description: "DeepSeek V3 0324 - A state-of-the-art 671B-parameter MoE LLM licensed for commercial use.";
    };
    readonly "meta-llama/Llama-4-Maverick-17B-128E-Instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.19;
        readonly outputPrice: 0.72;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly description: "Meta's Llama 4 Maverick - A SOTA mixture-of-experts multi-modal LLM with 400 billion total parameters.";
    };
    readonly "meta-llama/Llama-4-Scout-17B-16E-Instruct": {
        readonly maxTokens: 8192;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.13;
        readonly outputPrice: 0.5;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly description: "Meta's Llama 4 Scout - A SOTA mixture-of-experts multi-modal LLM with 109 billion total parameters.";
    };
    readonly "moonshotai/Kimi-K2-Instruct": {
        readonly maxTokens: 131072;
        readonly contextWindow: 131072;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.6;
        readonly outputPrice: 2.5;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly description: "Moonshot AI's Kimi K2 - The world's first 1 trillion parameter open source model.";
    };
    readonly "Qwen/Qwen3-235B-A22B-Instruct-2507": {
        readonly maxTokens: 163800;
        readonly contextWindow: 163800;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 0.22;
        readonly outputPrice: 0.8;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly description: "Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass.";
    };
    readonly "Qwen/Qwen3-Coder-480B-A35B-Instruct": {
        readonly maxTokens: 163800;
        readonly contextWindow: 163800;
        readonly supportsImages: false;
        readonly supportsPromptCache: false;
        readonly inputPrice: 1.7;
        readonly outputPrice: 1.7;
        readonly cacheWritesPrice: 0;
        readonly cacheReadsPrice: 0;
        readonly description: "Qwen3-Coder-480B-A35B-Instruct is a 480B parameter, instruction-tuned, agentic coding model that excels at function calling, tool use, and long-context reasoning over repositories.";
    };
};
export type BasetenModelId = keyof typeof basetenModels;
export declare const basetenDefaultModelId = "moonshotai/Kimi-K2-Instruct";
export {};
