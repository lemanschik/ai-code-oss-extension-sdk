import { Controller } from "..";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { OpenRouterCompatibleModelInfo } from "../../../shared/proto/cline/models";
/**
 * Refreshes the Hugging Face models and returns the updated model list
 * @param controller The controller instance
 * @param request Empty request object
 * @returns Response containing the Hugging Face models
 */
export declare function refreshHuggingFaceModels(controller: Controller, _request: EmptyRequest): Promise<OpenRouterCompatibleModelInfo>;
