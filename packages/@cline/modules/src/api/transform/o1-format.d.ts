import { Anthropic } from "../../anthropic-ai/sdk";
import OpenAI from "openai";
export declare function convertToO1Messages(openAiMessages: OpenAI.Chat.ChatCompletionMessageParam[], systemPrompt: string): OpenAI.Chat.ChatCompletionMessageParam[];
export declare function convertO1ResponseToAnthropicMessage(completion: OpenAI.Chat.Completions.ChatCompletion): Anthropic.Messages.Message;
