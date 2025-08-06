import { Controller } from "..";
import { GitCommits } from "../../../shared/proto/cline/file";
import { StringRequest } from "../../../shared/proto/cline/common";
/**
 * Searches for git commits in the workspace repository
 * @param controller The controller instance
 * @param request The request message containing the search query in the 'value' field
 * @returns GitCommits containing the matching commits
 */
export declare function searchCommits(_controller: Controller, request: StringRequest): Promise<GitCommits>;
