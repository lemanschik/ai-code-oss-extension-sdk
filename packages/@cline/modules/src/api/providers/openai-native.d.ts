import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { ModelInfo, OpenAiNativeModelId } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface OpenAiNativeHandlerOptions {
    openAiNativeApiKey?: string;
    reasoningEffort?: string;
    apiModelId?: string;
}
export declare class OpenAiNativeHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: OpenAiNativeHandlerOptions);
    private ensureClient;
    private yieldUsage;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: OpenAiNativeModelId;
        info: ModelInfo;
    };
}
export {};
