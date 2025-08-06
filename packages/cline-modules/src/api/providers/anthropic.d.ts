import { Anthropic } from "../../anthropic-ai/sdk";
import { AnthropicModelId, ModelInfo } from "../../shared/api";
import { ApiHandler } from "../index";
import { ApiStream } from "../transform/stream";
interface AnthropicHandlerOptions {
    apiKey?: string;
    anthropicBaseUrl?: string;
    apiModelId?: string;
    thinkingBudgetTokens?: number;
}
export declare class AnthropicHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: AnthropicHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: AnthropicModelId;
        info: ModelInfo;
    };
}
export {};
