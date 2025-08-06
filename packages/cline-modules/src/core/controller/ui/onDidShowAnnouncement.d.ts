import type { EmptyRequest } from "../../../shared/proto/cline/common";
import { Boolean } from "../../../shared/proto/cline/common";
import type { Controller } from "../index";
/**
 * Marks the current announcement as shown
 *
 * @param controller The controller instance
 * @param _request The empty request (not used)
 * @returns Boolean indicating announcement should no longer be shown
 */
export declare function onDidShowAnnouncement(controller: Controller, _request: EmptyRequest): Promise<Boolean>;
