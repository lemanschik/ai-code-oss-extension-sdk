import { AutoApprovalSettings } from "../../AutoApprovalSettings";
import { AutoApprovalSettingsRequest } from "../../proto/cline/state";
export declare function convertAutoApprovalSettingsToProto(settings: AutoApprovalSettings): AutoApprovalSettingsRequest;
export declare function convertProtoToAutoApprovalSettings(protoSettings: AutoApprovalSettingsRequest): AutoApprovalSettings;
