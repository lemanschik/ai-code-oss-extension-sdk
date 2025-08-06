export declare const readToolDefinition: (cwd: string) => {
    name: string;
    descriptionForAgent: string;
    inputSchema: {
        type: string;
        properties: {
            file_path: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
};
