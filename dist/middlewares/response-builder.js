"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = exports.failure = exports.success = void 0;
const tslib_1 = require("tslib");
// import ApplicationException from '../exceptions/HttpException';
const error_codes_1 = (0, tslib_1.__importDefault)(require("@exceptions/error_codes"));
const success = (httpMethod, message, data, status = 1) => {
    let statusCode = 200;
    switch (httpMethod.toUpperCase()) {
        case 'GET':
        case 'PUT':
            break;
        case 'POST':
            statusCode = 201;
            break;
        case 'DELETE':
            statusCode = 204;
            break;
    }
    return {
        statusCode,
        response: {
            status,
            message,
            data
        }
    };
};
exports.success = success;
const failure = (e) => {
    if (e.name === 'ApplicationException') {
        return {
            statusCode: e.status,
            response: {
                code: e.code,
                status: -1,
                message: e.message
            }
        };
    }
    return {
        statusCode: 400,
        response: {
            status: -1,
            message: error_codes_1.default.ERR_UNKNOWN
        }
    };
};
exports.failure = failure;
const validation = (data, status = 2) => {
    return {
        status,
        data,
        message: 'Validation Failure'
    };
};
exports.validation = validation;
//# sourceMappingURL=response-builder.js.map