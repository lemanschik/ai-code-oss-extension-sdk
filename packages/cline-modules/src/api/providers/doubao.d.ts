import { ApiHandler } from "..";
import { DoubaoModelId, ModelInfo } from "../../shared/api";
import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiStream } from "../transform/stream";
interface DoubaoHandlerOptions {
    doubaoApiKey?: string;
    apiModelId?: string;
}
export declare class DoubaoHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: DoubaoHandlerOptions);
    private ensureClient;
    getModel(): {
        id: DoubaoModelId;
        info: ModelInfo;
    };
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
}
export {};
