import { Anthropic } from "../../anthropic-ai/sdk";
import { ModelInfo } from "../../shared/api";
import { ApiHandler } from "../index";
import { ApiStream } from "../transform/stream";
interface CerebrasHandlerOptions {
    cerebrasApiKey?: string;
    apiModelId?: string;
}
export declare class CerebrasHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: CerebrasHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
    private calculateCost;
}
export {};
