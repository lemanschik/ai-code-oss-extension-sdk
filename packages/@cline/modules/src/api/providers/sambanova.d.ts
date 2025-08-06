import { Anthropic } from "../../anthropic-ai/sdk";
import { ModelInfo } from "../../shared/api";
import { ApiHandler } from "../index";
import { ApiStream } from "../transform/stream";
interface SambanovaHandlerOptions {
    sambanovaApiKey?: string;
    apiModelId?: string;
}
export declare class SambanovaHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: SambanovaHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
