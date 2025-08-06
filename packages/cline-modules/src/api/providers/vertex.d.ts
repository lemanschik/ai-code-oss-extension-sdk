import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { ModelInfo, VertexModelId } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface VertexHandlerOptions {
    vertexProjectId?: string;
    vertexRegion?: string;
    apiModelId?: string;
    thinkingBudgetTokens?: number;
    geminiApiKey?: string;
    geminiBaseUrl?: string;
    taskId?: string;
}
export declare class VertexHandler implements ApiHandler {
    private geminiHandler;
    private clientAnthropic;
    private options;
    constructor(options: VertexHandlerOptions);
    private ensureGeminiHandler;
    private ensureAnthropicClient;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: VertexModelId;
        info: ModelInfo;
    };
}
export {};
