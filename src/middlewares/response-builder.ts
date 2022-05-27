// import ApplicationException from '../exceptions/HttpException';
import errCodes from '@exceptions/error_codes';

export const success = (httpMethod, message, data, status = 1) => {
    let statusCode = 200;
    switch(httpMethod.toUpperCase()) {
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

export const failure = (e) => {
    if(e.name === 'ApplicationException' ) {
        return { 
            statusCode: e.statusCode, 
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
            message: errCodes.ERR_UNKNOWN
        }
    };
};

export const validation = (data, status = 2) => {
    return {
        status,
        data,
        message: 'Validation Failure'
    };
};