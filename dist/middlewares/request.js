"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestJson = void 0;
const tslib_1 = require("tslib");
const response_builder_1 = require("./response-builder");
const config_1 = (0, tslib_1.__importDefault)(require("config"));
const i18n_1 = (0, tslib_1.__importDefault)(require("../i18n"));
const LANGUAGE_HEADER = 'lang';
/**
 * Middleware that handles all the incoming requests
 * @param {*} controllerMethod
 * @param {*} successMessage
 */
const requestJson = (controller, successMessage = "") => {
    return async (req, res, next) => {
        try {
            let data = await controller(req, res, next);
            let { statusCode, response } = (0, response_builder_1.success)(req.method.toUpperCase(), successMessage, data);
            applyMultiLanguage(req, response);
            res.status(statusCode).json(response);
            // Do the audit log
        }
        catch (e) {
            let { statusCode, response } = (0, response_builder_1.failure)(e);
            applyMultiLanguage(req, response);
            return res.status(statusCode).json(response);
        }
    };
};
exports.requestJson = requestJson;
let applyMultiLanguage = (req, jsonResponse) => {
    if (config_1.default.get('serverConfig.multiLanguage')) {
        return;
    }
    let language = req.header(LANGUAGE_HEADER);
    i18n_1.default.translate(jsonResponse.message, language);
};
//# sourceMappingURL=request.js.map