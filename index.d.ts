export declare type VariableRecords = {
    [key: string]: string;
};
export declare type VitePluginHtmlVariablesConfig = {
    /** Prefix for the html variable syntax. default: "{{" */
    prefix?: string;
    /** Suffix for the html variable syntax. default: "}}" */
    suffix?: string;
    /** An object of variables in which key is takes as variable name and value as value.
     *
     * eg: {TITLE_VALUE:"My Title"} */
    variables?: VariableRecords;
    /** to exclude env variables from the html file. Default: false */
    excludeEnvVariables?: boolean;
};
export default function vitePluginHtmlVariables({ prefix, suffix, variables, excludeEnvVariables, }?: VitePluginHtmlVariablesConfig): {
    name: string;
    transformIndexHtml(html: string): string;
};
