import {success, failure} from './response-builder';
import config from 'config';
import translation from '../i18n';
import { RequestHandler } from 'express';
const LANGUAGE_HEADER = 'lang';

/**
 * Middleware that handles all the incoming requests 
 * @param {*} controllerMethod 
 * @param {*} successMessage 
 */
export const requestJson = (controller, successMessage=""):RequestHandler => {
    return async (req, res, next) => {
        try {
            let data = await controller(req, res, next)
            let { statusCode, response } = success(req.method.toUpperCase(), successMessage, data);
            applyMultiLanguage(req, response);
            res.status(statusCode).json(response);
            // Do the audit log
        } catch(e) {
            let { statusCode, response } = failure(e);
            applyMultiLanguage(req, response);
            return res.status(statusCode).json(response);
        }
    };
};


let applyMultiLanguage = (req, jsonResponse) => {
    if(config.get('serverConfig.multiLanguage')) {
        return;
    }
    let language = req.header(LANGUAGE_HEADER);
    translation.translate(jsonResponse.message, language);
}