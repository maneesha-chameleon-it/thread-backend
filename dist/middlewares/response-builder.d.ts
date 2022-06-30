export declare const success: (httpMethod: any, message: any, data: any, status?: number) => {
    statusCode: number;
    response: {
        status: number;
        message: any;
        data: any;
    };
};
export declare const failure: (e: any) => {
    statusCode: any;
    response: {
        code: any;
        status: number;
        message: any;
    };
} | {
    statusCode: number;
    response: {
        status: number;
        message: string;
        code?: undefined;
    };
};
export declare const validation: (data: any, status?: number) => {
    status: number;
    data: any;
    message: string;
};
