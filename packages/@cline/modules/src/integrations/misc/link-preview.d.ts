export interface OpenGraphData {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    siteName?: string;
    type?: string;
}
/**
 * Fetches Open Graph metadata from a URL
 * @param url The URL to fetch metadata from
 * @returns Promise resolving to OpenGraphData
 */
export declare function fetchOpenGraphData(url: string): Promise<OpenGraphData>;
/**
 * Checks if a URL is an image by making a HEAD request and checking the content type
 * @param url The URL to check
 * @returns Promise resolving to boolean indicating if the URL is an image
 */
export declare function detectImageUrl(url: string): Promise<boolean>;
