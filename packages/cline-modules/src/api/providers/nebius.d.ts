import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../index";
import { ApiStream } from "../transform/stream";
import { type ModelInfo } from "../../shared/api";
interface NebiusHandlerOptions {
    nebiusApiKey?: string;
    apiModelId?: string;
}
export declare class NebiusHandler implements ApiHandler {
    private readonly options;
    private client;
    constructor(options: NebiusHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
