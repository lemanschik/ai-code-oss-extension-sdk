import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { XAIModelId, ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface XAIHandlerOptions {
    xaiApiKey?: string;
    reasoningEffort?: string;
    apiModelId?: string;
}
interface XAIHandlerOptions {
    xaiApiKey?: string;
    reasoningEffort?: string;
    apiModelId?: string;
}
export declare class XAIHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: XAIHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: XAIModelId;
        info: ModelInfo;
    };
}
export {};
