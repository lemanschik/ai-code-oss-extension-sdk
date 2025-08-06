import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { ModelInfo } from "../../shared/api";
import { ApiStream, ApiStreamUsageChunk } from "../transform/stream";
interface OpenRouterHandlerOptions {
    openRouterApiKey?: string;
    openRouterModelId?: string;
    openRouterModelInfo?: ModelInfo;
    openRouterProviderSorting?: string;
    reasoningEffort?: string;
    thinkingBudgetTokens?: number;
}
interface OpenRouterHandlerOptions {
    openRouterApiKey?: string;
    openRouterModelId?: string;
    openRouterModelInfo?: ModelInfo;
    openRouterProviderSorting?: string;
    reasoningEffort?: string;
    thinkingBudgetTokens?: number;
}
export declare class OpenRouterHandler implements ApiHandler {
    private options;
    private client;
    lastGenerationId?: string;
    constructor(options: OpenRouterHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getApiStreamUsage(): Promise<ApiStreamUsageChunk | undefined>;
    fetchGenerationDetails(genId: string): AsyncGenerator<any, void, unknown>;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
