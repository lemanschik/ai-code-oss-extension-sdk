import { RefreshedRules } from "../../../shared/proto/cline/file";
import { refreshClineRulesToggles } from "../../context/instructions/user-instructions/cline-rules";
import { refreshExternalRulesToggles } from "../../context/instructions/user-instructions/external-rules";
import { refreshWorkflowToggles } from "../../context/instructions/user-instructions/workflows";
import { getCwd, getDesktopDir } from "../../../utils/path";
/**
 * Refreshes all rule toggles (Cline, External, and Workflows)
 * @param controller The controller instance
 * @param _request The empty request
 * @returns RefreshedRules containing updated toggles for all rule types
 */
export async function refreshRules(controller, _request) {
    try {
        const cwd = await getCwd(getDesktopDir());
        const { globalToggles, localToggles } = await refreshClineRulesToggles(controller.context, cwd);
        const { cursorLocalToggles, windsurfLocalToggles } = await refreshExternalRulesToggles(controller.context, cwd);
        const { localWorkflowToggles, globalWorkflowToggles } = await refreshWorkflowToggles(controller.context, cwd);
        return RefreshedRules.create({
            globalClineRulesToggles: { toggles: globalToggles },
            localClineRulesToggles: { toggles: localToggles },
            localCursorRulesToggles: { toggles: cursorLocalToggles },
            localWindsurfRulesToggles: { toggles: windsurfLocalToggles },
            localWorkflowToggles: { toggles: localWorkflowToggles },
            globalWorkflowToggles: { toggles: globalWorkflowToggles },
        });
    }
    catch (error) {
        console.error("Failed to refresh rules:", error);
        throw error;
    }
}
