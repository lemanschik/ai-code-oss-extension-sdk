import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface OllamaHandlerOptions {
    ollamaBaseUrl?: string;
    ollamaModelId?: string;
    ollamaApiOptionsCtxNum?: string;
    requestTimeoutMs?: number;
}
export declare class OllamaHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: OllamaHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
