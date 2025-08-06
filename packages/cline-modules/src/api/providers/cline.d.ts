import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { ModelInfo } from "../../shared/api";
import { ApiStream, ApiStreamUsageChunk } from "../transform/stream";
interface ClineHandlerOptions {
    taskId?: string;
    reasoningEffort?: string;
    thinkingBudgetTokens?: number;
    openRouterProviderSorting?: string;
    openRouterModelId?: string;
    openRouterModelInfo?: ModelInfo;
    clineAccountId?: string;
}
export declare class ClineHandler implements ApiHandler {
    private options;
    private clineAccountService;
    private _authService;
    private client;
    private readonly _baseUrl;
    lastGenerationId?: string;
    private counter;
    constructor(options: ClineHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getApiStreamUsage(): Promise<ApiStreamUsageChunk | undefined>;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
