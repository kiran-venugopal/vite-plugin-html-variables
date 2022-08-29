import { config } from "dotenv";
config();
export default function vitePluginHtmlVariables({ prefix = "{{", suffix = "}}", variables = {}, excludeEnvVariables = false, }) {
    const envVars = process.env || {};
    let finalVars = variables || {};
    if (!excludeEnvVariables) {
        finalVars = Object.assign(Object.assign({}, finalVars), envVars);
    }
    return {
        name: "html-transform",
        transformIndexHtml(html) {
            return html.replace(new RegExp(`${prefix}(.*?)${suffix}`, "g"), function (match, p1) {
                return finalVars[p1];
            });
        },
    };
}
