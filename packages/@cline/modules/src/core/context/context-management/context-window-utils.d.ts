import { ApiHandler } from "../../../api/index";
/**
 * Gets context window information for the given API handler
 *
 * @param api The API handler to get context window information for
 * @returns An object containing the raw context window size and the effective max allowed size
 */
export declare function getContextWindowInfo(api: ApiHandler): {
    contextWindow: number;
    maxAllowedSize: number;
};
