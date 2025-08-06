import { DiffViewProvider } from "../../integrations/editor/DiffViewProvider";
export declare const DIFF_VIEW_URI_SCHEME = "cline-diff";
export declare class VscodeDiffViewProvider extends DiffViewProvider {
    private activeDiffEditor?;
    private preDiagnostics;
    private fadedOverlayController?;
    private activeLineController?;
    openDiffEditor(): Promise<void>;
    replaceText(content: string, rangeToReplace: {
        startLine: number;
        endLine: number;
    }, currentLine: number | undefined): Promise<void>;
    scrollEditorToLine(line: number): Promise<void>;
    scrollAnimation(startLine: number, endLine: number): Promise<void>;
    truncateDocument(lineNumber: number): Promise<void>;
    protected getDocumentText(): Promise<string | undefined>;
    protected getNewDiagnosticProblems(): Promise<string>;
    protected saveDocument(): Promise<Boolean>;
    protected closeDiffView(): Promise<void>;
    protected resetDiffView(): Promise<void>;
}
