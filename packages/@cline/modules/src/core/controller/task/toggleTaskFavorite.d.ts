import { Controller } from "../";
import { Empty } from "../../../shared/proto/cline/common";
import { TaskFavoriteRequest } from "../../../shared/proto/cline/task";
export declare function toggleTaskFavorite(controller: Controller, request: TaskFavoriteRequest): Promise<Empty>;
