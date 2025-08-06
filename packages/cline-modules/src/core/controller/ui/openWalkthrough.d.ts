import type { Controller } from "../index";
import type { EmptyRequest } from "../../../shared/proto/cline/common";
import { Empty } from "../../../shared/proto/cline/common";
/**
 * Opens the Cline walkthrough in VSCode
 * @param controller The controller instance
 * @param request Empty request
 * @returns Empty response
 */
export declare function openWalkthrough(controller: Controller, request: EmptyRequest): Promise<Empty>;
