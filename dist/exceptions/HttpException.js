"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
        this.name = 'ApplicationException';
    }
}
exports.HttpException = HttpException;
//# sourceMappingURL=HttpException.js.map