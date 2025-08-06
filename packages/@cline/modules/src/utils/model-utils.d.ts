import { ApiHandler } from "../api/index";
export declare function isClaude4ModelFamily(api: ApiHandler): boolean;
export declare function isGemini2dot5ModelFamily(api: ApiHandler): boolean;
export declare function isGrok4ModelFamily(api: ApiHandler): boolean;
export declare function modelDoesntSupportWebp(api: ApiHandler): boolean;
/**
 * Determines if reasoning content should be skipped for a given model
 * Currently skips reasoning for Grok-4 models since they only display "thinking" without useful information
 */
export declare function shouldSkipReasoningForModel(modelId?: string): boolean;
