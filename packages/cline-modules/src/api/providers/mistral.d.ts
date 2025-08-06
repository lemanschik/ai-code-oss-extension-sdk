import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { MistralModelId, ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface MistralHandlerOptions {
    mistralApiKey?: string;
    apiModelId?: string;
}
export declare class MistralHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: MistralHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: MistralModelId;
        info: ModelInfo;
    };
}
export {};
