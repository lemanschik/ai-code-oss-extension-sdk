export interface ToolDefinition {
    name: string;
    description?: string;
    descriptionForAgent?: string;
    inputSchema: {
        type: string;
        properties: Record<string, any>;
        required?: string[];
        [key: string]: any;
    };
}
/**
 * Converts a single tool definition (JSON schema) to the <function> tag format.
 * This is for *defining* the tool, not calling it.
 * @param toolDef The tool definition object
 * @returns The tool definition as a JSON string wrapped in <function> tags
 */
export declare function toolDefinitionToAntmlDefinition(toolDef: ToolDefinition): string;
/**
 * Converts multiple tool definitions to the complete <functions> block.
 * This is for *defining* the tools.
 * @param toolDefs Array of tool definition objects
 * @returns Complete <functions> block with all tool definitions
 */
export declare function toolDefinitionsToAntmlDefinitions(toolDefs: ToolDefinition[]): string;
/**
 * Creates an example of an ANTML tool call for a given tool definition.
 * This is for *calling* a tool.
 * @param toolDef The tool definition object
 * @param exampleValues Optional example values for parameters
 * @returns Example ANTML function call string
 */
export declare function toolDefinitionToAntmlCallExample(toolDef: ToolDefinition, exampleValues?: Record<string, any>): string;
/**
 * Creates a complete system prompt section for tools in ANTML format,
 * including instructions and tool definitions.
 * @param toolDefs Array of tool definition objects
 * @param includeInstructions Whether to include the standard tool calling instructions
 * @returns Complete system prompt section for ANTML tools
 */
export declare function createAntmlToolPrompt(toolDefs: ToolDefinition[], includeInstructions?: boolean, systemPrompt?: string): string;
/**
 * Converts a single tool definition to the SimpleXML format
 * as used by Cline's current system prompts for non-ANTML models.
 * @param toolDef The tool definition object
 * @returns The tool definition formatted for SimpleXML usage
 */
export declare function toolDefinitionToSimpleXml(toolDef: ToolDefinition): string;
/**
 * Converts multiple tool definitions to the complete SimpleXML format.
 * @param toolDefs Array of tool definition objects
 * @returns Complete tools documentation in SimpleXML format
 */
export declare function toolDefinitionsToSimpleXml(toolDefs: ToolDefinition[]): string;
/**
 * Creates a complete system prompt section for tools in SimpleXML format.
 * @param toolDefs Array of tool definition objects
 * @param includeInstructions Whether to include the standard tool calling instructions
 * @returns Complete system prompt section for SimpleXML tools
 */
export declare function createSimpleXmlToolPrompt(toolDefs: ToolDefinition[], includeInstructions?: boolean): string;
