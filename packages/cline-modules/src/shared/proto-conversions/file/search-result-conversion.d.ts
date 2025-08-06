import { FileInfo } from "../../proto/cline/file";
/**
 * Converts domain search result objects to proto FileInfo objects
 */
export declare function convertSearchResultsToProtoFileInfos(results: {
    path: string;
    type: "file" | "folder";
    label?: string;
}[]): FileInfo[];
/**
 * Converts proto FileInfo objects to domain search result objects
 */
export declare function convertProtoFileInfosToSearchResults(protoResults: FileInfo[]): {
    path: string;
    type: "file" | "folder";
    label?: string;
}[];
