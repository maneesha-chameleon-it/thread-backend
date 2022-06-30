"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const auth_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/auth.controller"));
const users_dto_1 = require("@dtos/users.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("@middlewares/validation.middleware"));
const request_1 = require("@middlewares/request");
class AuthRoute {
    constructor() {
        this.path = '/';
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}signup`, (0, validation_middleware_1.default)(users_dto_1.CreateUserDto, 'body'), (0, request_1.requestJson)(this.authController.signUp, 'SIGN_UP'));
        this.router.post(`${this.path}login`, (0, validation_middleware_1.default)(users_dto_1.LoginUserDto, 'body'), (0, request_1.requestJson)(this.authController.logIn, 'LOGIN'));
        this.router.post(`${this.path}/secure/logout`, (0, request_1.requestJson)(this.authController.logOut, 'LOG_OUT'));
    }
}
exports.default = AuthRoute;
//# sourceMappingURL=auth.route.js.map