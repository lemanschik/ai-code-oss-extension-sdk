export declare const bashToolName = "Bash";
export declare const bashToolDefinition: (cwd: string) => {
    name: string;
    descriptionForAgent: string;
    inputSchema: {
        type: string;
        properties: {
            command: {
                type: string;
                description: string;
            };
            requires_approval: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
};
