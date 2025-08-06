import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../index";
import { ApiStream } from "../transform/stream";
import { ModelInfo, MoonshotModelId } from "../../shared/api";
interface MoonshotHandlerOptions {
    moonshotApiKey?: string;
    moonshotApiLine?: string;
    apiModelId?: string;
}
export declare class MoonshotHandler implements ApiHandler {
    private readonly options;
    private client;
    constructor(options: MoonshotHandlerOptions);
    private ensureClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: MoonshotModelId;
        info: ModelInfo;
    };
}
export {};
