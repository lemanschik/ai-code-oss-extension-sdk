import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "..";
import { ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface AskSageHandlerOptions {
    asksageApiKey?: string;
    asksageApiUrl?: string;
    apiModelId?: string;
}
export declare class AskSageHandler implements ApiHandler {
    private options;
    private apiUrl;
    private apiKey;
    constructor(options: AskSageHandlerOptions);
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
}
export {};
