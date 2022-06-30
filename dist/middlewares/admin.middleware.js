"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("@exceptions/HttpException");
const adminMiddleware = async (req, res, next) => {
    try {
        if (req.user.role == 'ADMIN') {
            next();
        }
        else {
            next(new HttpException_1.HttpException(401, 'Admin only'));
        }
    }
    catch (error) {
        next(new HttpException_1.HttpException(401, 'Admin only'));
    }
};
exports.default = adminMiddleware;
//# sourceMappingURL=admin.middleware.js.map