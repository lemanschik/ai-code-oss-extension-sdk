import { Controller } from "..";
import { FileSearchRequest, FileSearchResults } from "../../../shared/proto/cline/file";
/**
 * Searches for files in the workspace with fuzzy matching
 * @param controller The controller instance
 * @param request The request containing search query and optionally a mentionsRequestId
 * @returns Results containing matching files/folders
 */
export declare function searchFiles(_controller: Controller, request: FileSearchRequest): Promise<FileSearchResults>;
