import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { HuggingFaceModelId, ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface HuggingFaceHandlerOptions {
    huggingFaceApiKey?: string;
    huggingFaceModelId?: string;
    huggingFaceModelInfo?: ModelInfo;
}
export declare class HuggingFaceHandler implements ApiHandler {
    private options;
    private client;
    private cachedModel;
    constructor(options: HuggingFaceHandlerOptions);
    private ensureClient;
    private yieldUsage;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: HuggingFaceModelId;
        info: ModelInfo;
    };
}
export {};
