import type { Controller } from "../index";
import { Empty } from "../../../shared/proto/cline/common";
import { UpdateApiConfigurationRequest } from "../../../shared/proto/cline/models";
/**
 * Updates API configuration
 * @param controller The controller instance
 * @param request The update API configuration request
 * @returns Empty response
 */
export declare function updateApiConfigurationProto(controller: Controller, request: UpdateApiConfigurationRequest): Promise<Empty>;
