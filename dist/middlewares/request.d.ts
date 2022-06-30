import { RequestHandler } from 'express';
/**
 * Middleware that handles all the incoming requests
 * @param {*} controllerMethod
 * @param {*} successMessage
 */
export declare const requestJson: (controller: any, successMessage?: string) => RequestHandler;
