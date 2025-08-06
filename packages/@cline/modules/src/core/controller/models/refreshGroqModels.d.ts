import { Controller } from "..";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { OpenRouterCompatibleModelInfo } from "../../../shared/proto/cline/models";
/**
 * Refreshes the Groq models and returns the updated model list
 * @param controller The controller instance
 * @param request Empty request object
 * @returns Response containing the Groq models
 */
export declare function refreshGroqModels(controller: Controller, request: EmptyRequest): Promise<OpenRouterCompatibleModelInfo>;
