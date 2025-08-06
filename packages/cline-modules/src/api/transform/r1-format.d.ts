import { Anthropic } from "../../anthropic-ai/sdk";
import OpenAI from "openai";
/**
 * Converts Anthropic messages to OpenAI format and merges consecutive messages with the same role.
 * This is required for DeepSeek Reasoner which does not support successive messages with the same role.
 * DeepSeek highly recommends using 'user' role instead of 'system' role for optimal performance.
 *
 * @param messages Array of Anthropic messages
 * @returns Array of OpenAI messages where consecutive messages with the same role are merged together
 */
export declare function convertToR1Format(messages: Anthropic.Messages.MessageParam[]): OpenAI.Chat.ChatCompletionMessageParam[];
