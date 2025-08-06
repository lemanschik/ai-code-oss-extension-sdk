import { TerminalProfile } from "../shared/proto/cline/state";
/** Gets available terminal profiles for the current platform */
export declare function getAvailableTerminalProfiles(): TerminalProfile[];
/** Gets the shell path for a specific terminal profile */
export declare function getShellForProfile(profileId: string): string;
export declare function getShell(): string;
