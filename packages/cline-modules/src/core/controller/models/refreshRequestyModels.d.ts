import { Controller } from "..";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { OpenRouterCompatibleModelInfo } from "../../../shared/proto/cline/models";
/**
 * Refreshes the Requesty models and returns the updated model list
 * @param controller The controller instance
 * @param request Empty request object
 * @returns Response containing the Requesty models
 */
export declare function refreshRequestyModels(controller: Controller, _: EmptyRequest): Promise<OpenRouterCompatibleModelInfo>;
