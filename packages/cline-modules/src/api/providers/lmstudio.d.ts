import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface LmStudioHandlerOptions {
    lmStudioBaseUrl?: string;
    lmStudioModelId?: string;
}
export declare class LmStudioHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: LmStudioHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
