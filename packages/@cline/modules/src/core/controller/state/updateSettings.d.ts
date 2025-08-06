import { Controller } from "..";
import { Empty } from "../../../shared/proto/cline/common";
import { UpdateSettingsRequest } from "../../../shared/proto/cline/state";
/**
 * Updates multiple extension settings in a single request
 * @param controller The controller instance
 * @param request The request containing the settings to update
 * @returns An empty response
 */
export declare function updateSettings(controller: Controller, request: UpdateSettingsRequest): Promise<Empty>;
