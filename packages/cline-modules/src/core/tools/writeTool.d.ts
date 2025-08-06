export declare const writeToolDefinition: (cwd: string) => {
    name: string;
    descriptionForAgent: string;
    inputSchema: {
        type: string;
        properties: {
            file_path: {
                type: string;
                description: string;
            };
            content: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
};
