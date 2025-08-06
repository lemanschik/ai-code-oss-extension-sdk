import { Controller } from "..";
import { OpenAiModelsRequest } from "../../../shared/proto/cline/models";
import { StringArray } from "../../../shared/proto/cline/common";
/**
 * Fetches available models from the OpenAI API
 * @param controller The controller instance
 * @param request Request containing the base URL and API key
 * @returns Array of model names
 */
export declare function refreshOpenAiModels(controller: Controller, request: OpenAiModelsRequest): Promise<StringArray>;
