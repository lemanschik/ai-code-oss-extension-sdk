import { Controller } from "..";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { OpenRouterCompatibleModelInfo } from "../../../shared/proto/cline/models";
/**
 * Refreshes the OpenRouter models and returns the updated model list
 * @param controller The controller instance
 * @param request Empty request object
 * @returns Response containing the OpenRouter models
 */
export declare function refreshOpenRouterModels(controller: Controller, _request: EmptyRequest): Promise<OpenRouterCompatibleModelInfo>;
