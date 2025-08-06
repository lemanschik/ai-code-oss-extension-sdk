/**
 * Check if a port is open on a given host
 */
export declare function isPortOpen(host: string, port: number, timeout?: number): Promise<boolean>;
/**
 * Try to connect to Chrome at a specific IP address
 */
export declare function tryConnect(ipAddress: string): Promise<{
    endpoint: string;
    ip: string;
} | null>;
/**
 * Discover Chrome instances (localhost only)
 */
export declare function discoverChromeInstances(): Promise<string | null>;
/**
 * Test connection to a remote browser
 */
export declare function testBrowserConnection(host: string): Promise<{
    success: boolean;
    message: string;
    endpoint?: string;
}>;
