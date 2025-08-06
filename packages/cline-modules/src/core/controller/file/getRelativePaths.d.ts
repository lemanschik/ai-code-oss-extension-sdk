import { RelativePaths, RelativePathsRequest } from "../../../shared/proto/cline/file";
import { Controller } from "..";
/**
 * Converts a list of URIs to workspace-relative paths
 * @param controller The controller instance
 * @param request The request containing URIs to convert
 * @returns Response with resolved relative paths
 */
export declare function getRelativePaths(_controller: Controller, request: RelativePathsRequest): Promise<RelativePaths>;
