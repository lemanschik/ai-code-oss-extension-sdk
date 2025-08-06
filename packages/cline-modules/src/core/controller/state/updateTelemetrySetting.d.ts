import { Controller } from "..";
import { Empty } from "../../../shared/proto/cline/common";
import { TelemetrySettingRequest } from "../../../shared/proto/cline/state";
/**
 * Updates the telemetry setting
 * @param controller The controller instance
 * @param request The telemetry setting request
 * @returns Empty response
 */
export declare function updateTelemetrySetting(controller: Controller, request: TelemetrySettingRequest): Promise<Empty>;
