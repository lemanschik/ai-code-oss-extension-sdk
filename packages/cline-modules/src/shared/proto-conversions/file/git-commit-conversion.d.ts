import { GitCommit as ProtoGitCommit } from "../../proto/cline/file";
import { GitCommit } from "../../../utils/git";
/**
 * Converts domain GitCommit objects to proto GitCommit objects
 */
export declare function convertGitCommitsToProtoGitCommits(commits: GitCommit[]): ProtoGitCommit[];
/**
 * Converts proto GitCommit objects to domain GitCommit objects
 */
export declare function convertProtoGitCommitsToGitCommits(protoCommits: ProtoGitCommit[]): GitCommit[];
