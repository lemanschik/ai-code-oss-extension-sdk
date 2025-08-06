export declare class GoogleGenAI {
    constructor(options: any);
    models: {
        generateContentStream: (params: any) => Promise<{
            [Symbol.asyncIterator](): AsyncGenerator<{
                text: string;
                candidates: never[];
                usageMetadata: {
                    promptTokenCount: number;
                    candidatesTokenCount: number;
                    thoughtsTokenCount: number;
                    cachedContentTokenCount: number;
                };
            }, void, unknown>;
        }>;
        countTokens: (params: any) => Promise<{
            totalTokens: number;
        }>;
    };
}
export interface GenerateContentConfig {
    httpOptions?: any;
    systemInstruction?: string;
    temperature?: number;
    thinkingConfig?: any;
}
export interface GenerateContentResponseUsageMetadata {
    promptTokenCount?: number;
    candidatesTokenCount?: number;
    thoughtsTokenCount?: number;
    cachedContentTokenCount?: number;
}
export interface Part {
    thought?: boolean;
    text?: string;
}
