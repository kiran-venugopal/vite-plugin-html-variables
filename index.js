"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function vitePluginHtmlVariables({ prefix = "{{", suffix = "}}", variables = {}, excludeEnvVariables = false, } = {}) {
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
exports.default = vitePluginHtmlVariables;
