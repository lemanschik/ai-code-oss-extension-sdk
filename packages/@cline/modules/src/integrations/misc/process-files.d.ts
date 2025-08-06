/**
 * Supports processing of images and other file types
 * For models which don't support images, will not allow them to be selected
 */
export declare function selectFiles(imagesAllowed: boolean): Promise<{
    images: string[];
    files: string[];
}>;
export declare function getMimeType(filePath: string): string;
