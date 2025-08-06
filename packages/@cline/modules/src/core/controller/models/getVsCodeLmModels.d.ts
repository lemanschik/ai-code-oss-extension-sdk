import { Controller } from "..";
import { EmptyRequest } from "../../../shared/proto/cline/common";
import { VsCodeLmModelsArray } from "../../../shared/proto/cline/models";
/**
 * Fetches available models from VS Code LM API
 * @param controller The controller instance
 * @param request Empty request
 * @returns Array of VS Code LM models
 */
export declare function getVsCodeLmModels(controller: Controller, request: EmptyRequest): Promise<VsCodeLmModelsArray>;
