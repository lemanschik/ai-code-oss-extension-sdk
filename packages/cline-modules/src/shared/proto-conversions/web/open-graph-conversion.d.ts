import { OpenGraphData as DomainOpenGraphData } from "../../../integrations/misc/link-preview";
import { OpenGraphData as ProtoOpenGraphData } from "../../proto/cline/web";
/**
 * Converts domain OpenGraphData objects to proto OpenGraphData objects
 * @param ogData Domain OpenGraphData object
 * @returns Proto OpenGraphData object
 */
export declare function convertDomainOpenGraphDataToProto(ogData: DomainOpenGraphData): ProtoOpenGraphData;
