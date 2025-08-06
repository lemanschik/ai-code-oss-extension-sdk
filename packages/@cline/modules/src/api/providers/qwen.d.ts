import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { ModelInfo, MainlandQwenModelId, InternationalQwenModelId, QwenApiRegions } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface QwenHandlerOptions {
    qwenApiKey?: string;
    qwenApiLine?: QwenApiRegions;
    apiModelId?: string;
    thinkingBudgetTokens?: number;
}
export declare class QwenHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: QwenHandlerOptions);
    private useChinaApi;
    private ensureClient;
    getModel(): {
        id: MainlandQwenModelId | InternationalQwenModelId;
        info: ModelInfo;
    };
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
}
export {};
