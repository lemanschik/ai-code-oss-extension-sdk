import { Controller } from "..";
import { BooleanRequest, StringArrays } from "../../../shared/proto/cline/common";
/**
 * Prompts the user to select images from the file system and returns them as data URLs
 * @param controller The controller instance
 * @param request Boolean request, with the value defining whether this model supports images
 * @returns Two arrays of image data URLs and other file paths
 */
export declare function selectFiles(_controller: Controller, request: BooleanRequest): Promise<StringArrays>;
