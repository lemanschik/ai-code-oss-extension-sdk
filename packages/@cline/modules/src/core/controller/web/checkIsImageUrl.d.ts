import { Controller } from "../index";
import { StringRequest } from "../../../shared/proto/cline/common";
import { IsImageUrl } from "../../../shared/proto/cline/web";
/**
 * Checks if a URL is an image URL
 * @param controller The controller instance
 * @param request The request containing the URL to check
 * @returns A result indicating if the URL is an image and the URL that was checked
 */
export declare function checkIsImageUrl(_: Controller, request: StringRequest): Promise<IsImageUrl>;
