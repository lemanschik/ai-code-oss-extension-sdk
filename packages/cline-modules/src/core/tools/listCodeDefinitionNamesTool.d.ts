export declare const listCodeDefinitionNamesToolDefinition: (cwd: string) => {
    name: string;
    descriptionForAgent: string;
    inputSchema: {
        type: string;
        properties: {
            path: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
};
