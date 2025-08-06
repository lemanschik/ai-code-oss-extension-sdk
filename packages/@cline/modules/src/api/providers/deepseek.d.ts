import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { DeepSeekModelId, ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface DeepSeekHandlerOptions {
    deepSeekApiKey?: string;
    apiModelId?: string;
}
export declare class DeepSeekHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: DeepSeekHandlerOptions);
    private ensureClient;
    private yieldUsage;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: DeepSeekModelId;
        info: ModelInfo;
    };
}
export {};
