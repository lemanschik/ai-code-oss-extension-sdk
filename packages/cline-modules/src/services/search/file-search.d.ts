import * as childProcess from "child_process";
import type { FzfResultItem } from "fzf";
export type SpawnFunction = typeof childProcess.spawn;
export declare const getSpawnFunction: () => SpawnFunction;
export declare function executeRipgrepForFiles(rgPath: string, workspacePath: string, limit?: number): Promise<{
    path: string;
    type: "file" | "folder";
    label?: string;
}[]>;
export declare function searchWorkspaceFiles(query: string, workspacePath: string, limit?: number): Promise<{
    path: string;
    type: "file" | "folder";
    label?: string;
}[]>;
export declare const OrderbyMatchScore: (a: FzfResultItem<any>, b: FzfResultItem<any>) => number;
