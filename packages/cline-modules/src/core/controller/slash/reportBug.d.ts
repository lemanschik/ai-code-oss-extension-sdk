import { Controller } from "..";
import { StringRequest, Empty } from "../../../shared/proto/cline/common";
/**
 * Report bug slash command logic
 */
export declare function reportBug(controller: Controller, request: StringRequest): Promise<Empty>;
