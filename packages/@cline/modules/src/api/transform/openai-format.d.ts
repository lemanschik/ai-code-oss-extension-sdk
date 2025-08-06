import { Anthropic } from "../../anthropic-ai/sdk";
import OpenAI from "openai";
export declare function convertToOpenAiMessages(anthropicMessages: Anthropic.Messages.MessageParam[]): OpenAI.Chat.ChatCompletionMessageParam[];
export declare function convertToAnthropicMessage(completion: OpenAI.Chat.Completions.ChatCompletion): Anthropic.Messages.Message;
