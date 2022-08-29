import { config } from "dotenv";
config();

export type VariableRecords = { [key: string]: string };

export type VitePluginHtmlVariablesConfig = {
  /** Prefix for the html variable syntax. default: "{{" */
  prefix?: string;
  /** Suffix for the html variable syntax. default: "}}" */
  suffix?: string;
  /** An object of variables in which key is takes as variable name and value as value.
   *
   * eg: {TITLE_VALUE:"My Title"} */
  variables?: VariableRecords;
  /** to exclude env variables from the html file. Default: false */
  excludeEnvVariables: boolean;
};

export default function vitePluginHtmlVariables({
  prefix = "{{",
  suffix = "}}",
  variables = {},
  excludeEnvVariables = false,
}: VitePluginHtmlVariablesConfig) {
  const envVars = process.env || {};
  let finalVars = variables || {};

  if (!excludeEnvVariables) {
    finalVars = { ...finalVars, ...envVars } as VariableRecords;
  }

  return {
    name: "html-transform",
    transformIndexHtml(html: string) {
      return html.replace(
        new RegExp(`${prefix}(.*?)${suffix}`, "g"),
        function (match, p1) {
          return finalVars[p1];
        }
      );
    },
  };
}
