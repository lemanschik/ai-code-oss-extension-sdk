import { Controller } from "..";
import { Empty, Int64Request } from "../../../shared/proto/cline/common";
export declare function checkpointDiff(controller: Controller, request: Int64Request): Promise<Empty>;
