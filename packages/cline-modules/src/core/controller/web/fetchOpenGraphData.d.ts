import { Controller } from "..";
import { StringRequest } from "../../../shared/proto/cline/common";
import { OpenGraphData } from "../../../shared/proto/cline/web";
/**
 * Fetches Open Graph metadata from a URL
 * @param controller The controller instance
 * @param request The request containing the URL to fetch metadata from
 * @returns Promise resolving to OpenGraphData
 */
export declare function fetchOpenGraphData(controller: Controller, request: StringRequest): Promise<OpenGraphData>;
