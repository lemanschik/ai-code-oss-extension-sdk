import { HostProvider } from "../host-provider";
import { DiffViewProvider } from "../../integrations/editor/DiffViewProvider";
import { status } from "../../grpc/grpc-js";
export class ExternalDiffViewProvider extends DiffViewProvider {
    activeDiffEditorId;
    async openDiffEditor() {
        if (!this.absolutePath) {
            return;
        }
        const response = await HostProvider.diff.openDiff({
            path: this.absolutePath,
            content: this.originalContent ?? "",
        });
        this.activeDiffEditorId = response.diffId;
    }
    async replaceText(content, rangeToReplace, _currentLine) {
        if (!this.activeDiffEditorId) {
            return;
        }
        await HostProvider.diff.replaceText({
            diffId: this.activeDiffEditorId,
            content: content,
            startLine: rangeToReplace.startLine,
            endLine: rangeToReplace.endLine,
        });
    }
    async truncateDocument(lineNumber) {
        if (!this.activeDiffEditorId) {
            return;
        }
        await HostProvider.diff.truncateDocument({
            diffId: this.activeDiffEditorId,
            endLine: lineNumber,
        });
    }
    async saveDocument() {
        if (!this.activeDiffEditorId) {
            return false;
        }
        try {
            await HostProvider.diff.saveDocument({ diffId: this.activeDiffEditorId });
            return true;
        }
        catch (err) {
            if (err.code === status.NOT_FOUND) {
                // This can happen when the task is reloaded or the diff editor is closed. So, don't
                // consider it a real error.
                console.log("Diff not found:", this.activeDiffEditorId);
                return false;
            }
            else {
                throw err;
            }
        }
    }
    async scrollEditorToLine(line) {
        if (!this.activeDiffEditorId) {
            return;
        }
        await HostProvider.diff.scrollDiff({ diffId: this.activeDiffEditorId, line: line });
    }
    async scrollAnimation(_startLine, _endLine) { }
    async getDocumentText() {
        if (!this.activeDiffEditorId) {
            return undefined;
        }
        return (await HostProvider.diff.getDocumentText({ diffId: this.activeDiffEditorId })).content;
    }
    async getNewDiagnosticProblems() {
        console.log(`Called ExternalDiffViewProvider.getNewDiagnosticProblems() stub`);
        return "";
    }
    async closeDiffView() {
        if (!this.activeDiffEditorId) {
            return;
        }
        await HostProvider.diff.closeDiff({ diffId: this.activeDiffEditorId });
        this.activeDiffEditorId = undefined;
    }
    async resetDiffView() {
        this.activeDiffEditorId = undefined;
    }
}
