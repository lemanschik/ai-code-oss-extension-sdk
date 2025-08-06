import { Controller } from "..";
import { CheckpointRestoreRequest } from "../../../shared/proto/cline/checkpoints";
import { Empty } from "../../../shared/proto/cline/common";
export declare function checkpointRestore(controller: Controller, request: CheckpointRestoreRequest): Promise<Empty>;
