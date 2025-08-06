import type { BooleanRequest } from "../../../shared/proto/cline/common";
import { Empty } from "../../../shared/proto/cline/common";
import type { Controller } from "../index";
/**
 * Sets the welcomeViewCompleted flag to the specified boolean value
 * @param controller The controller instance
 * @param request The boolean request containing the value to set
 * @returns Empty response
 */
export declare function setWelcomeViewCompleted(controller: Controller, request: BooleanRequest): Promise<Empty>;
