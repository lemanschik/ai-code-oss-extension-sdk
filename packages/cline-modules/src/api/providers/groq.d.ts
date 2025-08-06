import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface GroqHandlerOptions {
    groqApiKey?: string;
    groqModelId?: string;
    groqModelInfo?: ModelInfo;
    apiModelId?: string;
}
interface GroqModelFamily {
    name: string;
    supportedFeatures: {
        streaming: boolean;
        temperature: boolean;
        vision: boolean;
        tools: boolean;
    };
    maxTokensOverride?: number;
    specialParams?: Record<string, any>;
}
export declare class GroqHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: GroqHandlerOptions);
    private ensureClient;
    private yieldUsage;
    /**
     * Detects the model family based on the model ID
     */
    private detectModelFamily;
    /**
     * Gets the optimal max_tokens based on model family and capabilities
     */
    private getOptimalMaxTokens;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    /**
     * Checks if the current model supports vision/images
     */
    supportsImages(): boolean;
    /**
     * Checks if the current model supports tools
     */
    supportsTools(): boolean;
    /**
     * Gets model information with enhanced family detection
     */
    getModel(): {
        id: string;
        info: ModelInfo;
    };
    /**
     * Gets model family information for debugging/introspection
     */
    getModelFamily(): GroqModelFamily;
}
export {};
