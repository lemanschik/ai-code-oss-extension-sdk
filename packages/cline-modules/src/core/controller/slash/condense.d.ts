import { Controller } from "..";
import { StringRequest, Empty } from "../../../shared/proto/cline/common";
/**
 * Command slash command logic
 */
export declare function condense(controller: Controller, request: StringRequest): Promise<Empty>;
