import { Controller } from "..";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { OpenRouterCompatibleModelInfo } from "../../../shared/proto/cline/models";
/**
 * Refreshes the Baseten models and returns the updated model list
 * @param controller The controller instance
 * @param request Empty request object
 * @returns Response containing the Baseten models
 */
export declare function refreshBasetenModels(controller: Controller, request: EmptyRequest): Promise<OpenRouterCompatibleModelInfo>;
