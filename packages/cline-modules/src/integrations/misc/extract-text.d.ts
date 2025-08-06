export declare function detectEncoding(fileBuffer: Buffer, fileExtension?: string): Promise<string>;
export declare function extractTextFromFile(filePath: string): Promise<string>;
/**
 * Expects the fs.access call to have already been performed prior to calling
 */
export declare function callTextExtractionFunctions(filePath: string): Promise<string>;
/**
 * Helper function used to load file(s) and format them into a string
 */
export declare function processFilesIntoText(files: string[]): Promise<string>;
