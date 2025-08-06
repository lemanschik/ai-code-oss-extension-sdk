import { DiffViewProvider } from "../../integrations/editor/DiffViewProvider";
export declare class ExternalDiffViewProvider extends DiffViewProvider {
    private activeDiffEditorId;
    openDiffEditor(): Promise<void>;
    replaceText(content: string, rangeToReplace: {
        startLine: number;
        endLine: number;
    }, _currentLine: number | undefined): Promise<void>;
    protected truncateDocument(lineNumber: number): Promise<void>;
    protected saveDocument(): Promise<Boolean>;
    protected scrollEditorToLine(line: number): Promise<void>;
    scrollAnimation(_startLine: number, _endLine: number): Promise<void>;
    protected getDocumentText(): Promise<string | undefined>;
    protected getNewDiagnosticProblems(): Promise<string>;
    protected closeDiffView(): Promise<void>;
    protected resetDiffView(): Promise<void>;
}
