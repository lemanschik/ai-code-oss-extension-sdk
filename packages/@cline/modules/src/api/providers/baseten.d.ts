import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { BasetenModelId, ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface BasetenHandlerOptions {
    basetenApiKey?: string;
    basetenModelId?: string;
    basetenModelInfo?: ModelInfo;
    apiModelId?: string;
}
export declare class BasetenHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: BasetenHandlerOptions);
    private ensureClient;
    /**
     * Gets the optimal max_tokens based on model capabilities
     */
    private getOptimalMaxTokens;
    getModel(): {
        id: BasetenModelId;
        info: ModelInfo;
    };
    private yieldUsage;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    /**
     * Checks if the current model supports vision/images
     */
    supportsImages(): boolean;
    /**
     * Checks if the current model supports tools
     */
    supportsTools(): boolean;
}
export {};
