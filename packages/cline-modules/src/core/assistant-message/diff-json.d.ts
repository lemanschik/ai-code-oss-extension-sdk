export interface ReplacementItem {
    old_string: string;
    new_string: string;
}
export interface ChangeLocation {
    startLine: number;
    endLine: number;
    startChar: number;
    endChar: number;
}
export declare class StreamingJsonReplacer {
    private currentFileContent;
    private parser;
    private onContentUpdated;
    private onErrorCallback;
    private itemsProcessed;
    private successfullyParsedItems;
    constructor(initialContent: string, onContentUpdatedCallback: (newContent: string, isFinalItem: boolean, changeLocation?: ChangeLocation) => void, onErrorCallback: (error: Error) => void);
    write(jsonChunk: string): void;
    getCurrentContent(): string;
    getSuccessfullyParsedItems(): ReplacementItem[];
    private calculateChangeLocation;
}
