declare global {
    interface String {
        toPosix(): string;
    }
}
export declare function arePathsEqual(path1?: string, path2?: string): boolean;
export declare function getReadablePath(cwd: string, relPath?: string): string;
export declare function getCwd(defaultCwd?: string): Promise<string>;
export declare function getDesktopDir(): string;
export declare function getWorkspacePath(defaultCwd?: string): Promise<string>;
export declare function isLocatedInWorkspace(pathToCheck?: string): Promise<boolean>;
export declare function isLocatedInPath(dirPath: string, pathToCheck: string): boolean;
export declare function asRelativePath(filePath: string): Promise<string>;
