import { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { BedrockModelId, ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface AwsBedrockHandlerOptions {
    apiModelId?: string;
    awsAccessKey?: string;
    awsSecretKey?: string;
    awsSessionToken?: string;
    awsRegion?: string;
    awsAuthentication?: string;
    awsBedrockApiKey?: string;
    awsUseCrossRegionInference?: boolean;
    awsBedrockUsePromptCache?: boolean;
    awsUseProfile?: boolean;
    awsProfile?: string;
    awsBedrockEndpoint?: string;
    awsBedrockCustomSelected?: boolean;
    awsBedrockCustomModelBaseId?: BedrockModelId;
    thinkingBudgetTokens?: number;
}
export declare class AwsBedrockHandler implements ApiHandler {
    private options;
    constructor(options: AwsBedrockHandlerOptions);
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
    private static readonly DEFAULT_REGION;
    /**
     * Gets AWS credentials using the provider chain
     * Centralizes credential retrieval logic for all AWS services
     */
    private getAwsCredentials;
    /**
     * Gets the AWS region to use, with fallback to default
     */
    private getRegion;
    /**
     * Creates a BedrockRuntimeClient with the appropriate credentials
     */
    private getBedrockClient;
    /**
     * Gets the appropriate model ID, accounting for cross-region inference if enabled.
     * For custom models, returns the raw model ID without any encoding.
     */
    getModelId(): Promise<string>;
    private static withTempEnv;
    private static setEnv;
    /**
     * Creates a message using the Deepseek R1 model through AWS Bedrock
     */
    private createDeepseekMessage;
    /**
     * Formats prompt for DeepSeek R1 model according to documentation
     * First uses convertToR1Format to merge consecutive messages with the same role,
     * then converts to the string format that DeepSeek R1 expects
     */
    private formatDeepseekR1Prompt;
    /**
     * Estimates token count based on text length (approximate)
     * Note: This is a rough estimation, as the actual token count depends on the tokenizer
     */
    private estimateInputTokens;
    /**
     * Estimates token count for a text string
     */
    private estimateTokenCount;
    /**
     * Executes a Converse API stream command and handles the response
     * Common implementation for both Anthropic and Nova models
     */
    private executeConverseStream;
    /**
     * Handles Bedrock stream errors in a unified way
     */
    private handleBedrockStreamError;
    /**
     * Prepares system messages with optional caching support
     */
    private prepareSystemMessages;
    /**
     * Gets inference configuration for different model types
     */
    private getInferenceConfig;
    /**
     * Determines if reasoning should be enabled for Claude models
     */
    private shouldEnableReasoning;
    /**
     * Creates a message using Anthropic Claude models through AWS Bedrock Converse API
     * Implements support for Anthropic Claude models using the unified Converse API
     */
    private createAnthropicMessage;
    /**
     * Formats messages for models using the Converse API specification
     * Used by both Anthropic and Nova models to avoid code duplication
     */
    private formatMessagesForConverseAPI;
    /**
     * Processes image content with proper error handling and user notification
     */
    private processImageContent;
    /**
     * Applies cache control to messages for prompt caching using AWS Bedrock's cachePoint system
     * AWS Bedrock uses cachePoint objects instead of Anthropic's cache_control approach
     */
    private applyCacheControlToMessages;
    /**
     * Creates a message using Amazon Nova models through AWS Bedrock
     * Implements support for Amazon Nova models with caching support
     */
    private createNovaMessage;
}
export {};
