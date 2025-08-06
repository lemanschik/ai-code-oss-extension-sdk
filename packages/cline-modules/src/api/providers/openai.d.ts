import { Anthropic } from "../../anthropic-ai/sdk";
import { ModelInfo, OpenAiCompatibleModelInfo } from "../../shared/api";
import { ApiHandler } from "../index";
import { ApiStream } from "../transform/stream";
interface OpenAiHandlerOptions {
    openAiApiKey?: string;
    openAiBaseUrl?: string;
    azureApiVersion?: string;
    openAiHeaders?: Record<string, string>;
    openAiModelId?: string;
    openAiModelInfo?: OpenAiCompatibleModelInfo;
    reasoningEffort?: string;
}
export declare class OpenAiHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: OpenAiHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
