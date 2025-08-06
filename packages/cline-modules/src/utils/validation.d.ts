/**
 * Validates the thinking budget token value according to the specified rules:
 * - If disabled (0), return as is
 * - If enabled but less than minimum (1024), set to minimum
 * - If greater than or equal to max tokens, set to max tokens - 1
 * - Otherwise, return the original value
 *
 * @param value The thinking budget token value to validate
 * @param maxTokens The maximum tokens for the current model
 * @returns The validated thinking budget token value
 */
export declare function validateThinkingBudget(value: number, maxTokens?: number): number;
