import { AutoApprovalSettings } from "../../../shared/AutoApprovalSettings";
import { ToolUseName } from "../../assistant-message";
export declare class AutoApprove {
    autoApprovalSettings: AutoApprovalSettings;
    constructor(autoApprovalSettings: AutoApprovalSettings);
    shouldAutoApproveTool(toolName: ToolUseName): boolean | [boolean, boolean];
    shouldAutoApproveToolWithPath(blockname: ToolUseName, autoApproveActionpath: string | undefined): Promise<boolean>;
    updateSettings(settings: AutoApprovalSettings): void;
}
