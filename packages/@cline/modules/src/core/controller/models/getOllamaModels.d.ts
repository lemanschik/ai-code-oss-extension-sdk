import { Controller } from "..";
import { StringArray, StringRequest } from "../../../shared/proto/cline/common";
/**
 * Fetches available models from Ollama
 * @param controller The controller instance
 * @param request The request containing the base URL (optional)
 * @returns Array of model names
 */
export declare function getOllamaModels(controller: Controller, request: StringRequest): Promise<StringArray>;
