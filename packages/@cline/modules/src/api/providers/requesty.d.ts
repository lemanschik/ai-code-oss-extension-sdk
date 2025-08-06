import { Anthropic } from "../../anthropic-ai/sdk";
import { ModelInfo } from "../../shared/api";
import { ApiHandler } from "../index";
import { ApiStream } from "../transform/stream";
interface RequestyHandlerOptions {
    requestyApiKey?: string;
    reasoningEffort?: string;
    thinkingBudgetTokens?: number;
    requestyModelId?: string;
    requestyModelInfo?: ModelInfo;
}
export declare class RequestyHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: RequestyHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
