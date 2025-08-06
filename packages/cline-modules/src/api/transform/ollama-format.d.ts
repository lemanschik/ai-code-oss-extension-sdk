import { Anthropic } from "../../anthropic-ai/sdk";
import { Message } from "ollama";
export declare function convertToOllamaMessages(anthropicMessages: Anthropic.Messages.MessageParam[]): Message[];
