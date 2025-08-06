import { Controller } from "../index";
import { UpdateTerminalConnectionTimeoutRequest, UpdateTerminalConnectionTimeoutResponse } from "../../../shared/proto/cline/state";
export declare function updateTerminalConnectionTimeout(controller: Controller, request: UpdateTerminalConnectionTimeoutRequest): Promise<UpdateTerminalConnectionTimeoutResponse>;
