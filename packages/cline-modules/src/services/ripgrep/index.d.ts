import { ClineIgnoreController } from "../../core/ignore/ClineIgnoreController";
export declare function getBinPath(vscodeAppRoot: string): Promise<string | undefined>;
export declare function regexSearchFiles(cwd: string, directoryPath: string, regex: string, filePattern?: string, clineIgnoreController?: ClineIgnoreController): Promise<string>;
