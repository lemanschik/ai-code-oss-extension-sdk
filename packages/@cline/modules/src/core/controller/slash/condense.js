import { Empty } from "../../../shared/proto/cline/common";
/**
 * Command slash command logic
 */
export async function condense(controller, request) {
    await controller.task?.handleWebviewAskResponse("yesButtonClicked");
    return Empty.create();
}
