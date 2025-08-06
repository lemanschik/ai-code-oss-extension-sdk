import { Controller } from "..";
import { Empty, EmptyRequest } from "../../../shared/proto/cline/common";
/**
 * Opens the MCP settings file in the editor
 * @param controller The controller instance
 * @param _request Empty request
 * @returns Empty response
 */
export declare function openMcpSettings(controller: Controller, _request: EmptyRequest): Promise<Empty>;
