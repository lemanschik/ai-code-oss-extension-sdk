import { ModelInfo } from "../shared/api";
export declare function calculateApiCostAnthropic(modelInfo: ModelInfo, inputTokens: number, outputTokens: number, cacheCreationInputTokens?: number, cacheReadInputTokens?: number, thinkingBudgetTokens?: number): number;
export declare function calculateApiCostOpenAI(modelInfo: ModelInfo, inputTokens: number, // For OpenAI-style, this includes cached tokens
outputTokens: number, cacheCreationInputTokens?: number, cacheReadInputTokens?: number, thinkingBudgetTokens?: number): number;
