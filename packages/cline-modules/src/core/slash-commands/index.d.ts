import { ClineRulesToggles } from "../../shared/cline-rules";
/**
 * Processes text for slash commands and transforms them with appropriate instructions
 * This is called after parseMentions() to process any slash commands in the user's message
 */
export declare function parseSlashCommands(text: string, localWorkflowToggles: ClineRulesToggles, globalWorkflowToggles: ClineRulesToggles): Promise<{
    processedText: string;
    needsClinerulesFileCheck: boolean;
}>;
