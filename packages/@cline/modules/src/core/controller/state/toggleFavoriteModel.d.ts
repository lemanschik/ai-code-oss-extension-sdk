import { Controller } from "..";
import { Empty, StringRequest } from "../../../shared/proto/cline/common";
/**
 * Toggles a model's favorite status
 * @param controller The controller instance
 * @param request The request containing the model ID to toggle
 * @returns An empty response
 */
export declare function toggleFavoriteModel(controller: Controller, request: StringRequest): Promise<Empty>;
