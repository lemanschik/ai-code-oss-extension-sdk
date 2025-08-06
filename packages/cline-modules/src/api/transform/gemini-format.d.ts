import { Anthropic } from "../../anthropic-ai/sdk";
import { Content, GenerateContentResponse, Part } from "../../google/genai";
export declare function convertAnthropicContentToGemini(content: string | Anthropic.ContentBlockParam[]): Part[];
export declare function convertAnthropicMessageToGemini(message: Anthropic.Messages.MessageParam): Content;
export declare function unescapeGeminiContent(content: string): string;
export declare function convertGeminiResponseToAnthropic(response: GenerateContentResponse): Anthropic.Messages.Message;
