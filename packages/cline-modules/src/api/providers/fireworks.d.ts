import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "..";
import { ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface FireworksHandlerOptions {
    fireworksApiKey?: string;
    fireworksModelId?: string;
    fireworksModelMaxCompletionTokens?: number;
    fireworksModelMaxTokens?: number;
}
export declare class FireworksHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: FireworksHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
