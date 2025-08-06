import { Anthropic } from "../../anthropic-ai/sdk";
import { ModelInfo } from "../../shared/api";
import { ApiHandler } from "../index";
import { ApiStream } from "../transform/stream";
interface TogetherHandlerOptions {
    togetherApiKey?: string;
    togetherModelId?: string;
}
export declare class TogetherHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: TogetherHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
