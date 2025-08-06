import { Anthropic } from "../../anthropic-ai/sdk";
/**
 * Extract image content without VSCode dependencies
 * Returns success/error result to avoid throwing exceptions
 */
export declare function extractImageContent(filePath: string): Promise<{
    success: true;
    imageBlock: Anthropic.ImageBlockParam;
} | {
    success: false;
    error: string;
}>;
