import type { Anthropic } from "../../anthropic-ai/sdk";
import { ApiHandler } from "../";
import { GeminiModelId, ModelInfo } from "../../shared/api";
import { ApiStream } from "../transform/stream";
interface GeminiHandlerOptions {
    isVertex?: boolean;
    vertexProjectId?: string;
    vertexRegion?: string;
    geminiApiKey?: string;
    geminiBaseUrl?: string;
    thinkingBudgetTokens?: number;
    apiModelId?: string;
    taskId?: string;
}
/**
 * Handler for Google's Gemini API with optimized caching strategy and accurate cost accounting.
 *
 * Key features:
 * - One cache per task: Creates a single cache per task and reuses it for subsequent turns
 * - Stable cache keys: Uses taskId as a stable identifier for caches
 * - Efficient cache updates: Only updates caches when there's new content to add
 * - Split cost accounting: Separates immediate costs from ongoing cache storage costs
 *
 * Cost accounting approach:
 * - Immediate costs (per message): Input tokens, output tokens, and cache read costs
 * - Ongoing costs (per task): Cache storage costs for the TTL period
 *
 * Gemini's caching system is unique in that it charges for holding tokens in cache by the hour.
 * This implementation optimizes for both performance and cost by:
 * 1. Minimizing redundant cache creations
 * 2. Properly accounting for cache costs in the billing calculations
 * 3. Using a stable cache key to ensure cache reuse across turns
 * 4. Separating immediate costs from ongoing costs to avoid double-counting
 */
export declare class GeminiHandler implements ApiHandler {
    private options;
    private client;
    constructor(options: GeminiHandlerOptions);
    private ensureClient;
    /**
     * Creates a message using the Gemini API with implicit caching.
     *
     * Cost accounting:
     * - Immediate costs (returned in the usage object): Input tokens, output tokens, cache read costs
     *
     * @param systemPrompt The system prompt to use for the message
     * @param messages The conversation history to include in the message
     * @returns An async generator that yields chunks of the response with accurate immediate costs
     */
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    /**
     * Calculate the immediate dollar cost of the API call based on token usage and model pricing.
     *
     * This method accounts for the immediate costs of the API call:
     * - Input token costs (for uncached tokens)
     * - Output token costs
     * - Cache read costs
     * - Gemini implicit caching has no write costs
     *
     */
    calculateCost({ info, inputTokens, outputTokens, thoughtsTokenCount, cacheReadTokens, }: {
        info: ModelInfo;
        inputTokens: number;
        outputTokens: number;
        thoughtsTokenCount: number;
        cacheReadTokens?: number;
    }): number | undefined;
    /**
     * Get the model ID and info for the current configuration
     */
    getModel(): {
        id: GeminiModelId;
        info: ModelInfo;
    };
    /**
     * Count tokens in content using the Gemini API
     */
    countTokens(content: Array<any>): Promise<number>;
    /**
     * Fallback token estimation method
     */
    private estimateTokens;
}
export {};
