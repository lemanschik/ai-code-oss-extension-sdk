import type { Anthropic } from "../../anthropic-ai/sdk";
import { type ApiHandler } from "..";
import { type ApiStream } from "../transform/stream";
interface ClaudeCodeHandlerOptions {
    claudeCodePath?: string;
    apiModelId?: string;
    thinkingBudgetTokens?: number;
}
export declare class ClaudeCodeHandler implements ApiHandler {
    private options;
    constructor(options: ClaudeCodeHandlerOptions);
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    private attemptParse;
    getModel(): {
        id: "claude-sonnet-4-20250514" | "claude-opus-4-20250514" | "claude-3-7-sonnet-20250219" | "claude-3-5-sonnet-20241022" | "claude-3-5-haiku-20241022";
        info: {
            readonly supportsImages: false;
            readonly supportsPromptCache: false;
            readonly maxTokens: 8192;
            readonly contextWindow: 200000;
            readonly inputPrice: 3;
            readonly outputPrice: 15;
            readonly cacheWritesPrice: 3.75;
            readonly cacheReadsPrice: 0.3;
        } | {
            readonly supportsImages: false;
            readonly supportsPromptCache: false;
            readonly maxTokens: 8192;
            readonly contextWindow: 200000;
            readonly inputPrice: 15;
            readonly outputPrice: 75;
            readonly cacheWritesPrice: 18.75;
            readonly cacheReadsPrice: 1.5;
        } | {
            readonly supportsImages: false;
            readonly supportsPromptCache: false;
            readonly maxTokens: 8192;
            readonly contextWindow: 200000;
            readonly inputPrice: 3;
            readonly outputPrice: 15;
            readonly cacheWritesPrice: 3.75;
            readonly cacheReadsPrice: 0.3;
        } | {
            readonly supportsImages: false;
            readonly supportsPromptCache: false;
            readonly maxTokens: 8192;
            readonly contextWindow: 200000;
            readonly inputPrice: 3;
            readonly outputPrice: 15;
            readonly cacheWritesPrice: 3.75;
            readonly cacheReadsPrice: 0.3;
        } | {
            readonly supportsImages: false;
            readonly supportsPromptCache: false;
            readonly maxTokens: 8192;
            readonly contextWindow: 200000;
            readonly inputPrice: 0.8;
            readonly outputPrice: 4;
            readonly cacheWritesPrice: 1;
            readonly cacheReadsPrice: 0.08;
        };
    };
}
export {};
