import { Anthropic } from "../../anthropic-ai/sdk";
export type FileContentResult = {
    text: string;
    imageBlock?: Anthropic.ImageBlockParam;
};
/**
 * Extract content from a file, handling both text and images
 * Extra logic for handling images based on whether the model supports images
 */
export declare function extractFileContent(absolutePath: string, modelSupportsImages: boolean): Promise<FileContentResult>;
