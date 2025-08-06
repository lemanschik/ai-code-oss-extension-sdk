import { ModelInfo } from "../../shared/api";
import { Anthropic } from "../../anthropic-ai/sdk";
import OpenAI from "openai";
export declare function createOpenRouterStream(client: OpenAI, systemPrompt: string, messages: Anthropic.Messages.MessageParam[], model: {
    id: string;
    info: ModelInfo;
}, reasoningEffort?: string, thinkingBudgetTokens?: number, openRouterProviderSorting?: string): Promise<OpenAI.Chat.Completions.ChatCompletion & {
    _request_id?: string | null;
} & import("openai/streaming.mjs").Stream<OpenAI.Chat.Completions.ChatCompletionChunk>>;
