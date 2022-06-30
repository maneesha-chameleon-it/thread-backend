"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const users_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/users.controller"));
const users_dto_1 = require("@dtos/users.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("@middlewares/validation.middleware"));
const request_1 = require("@middlewares/request");
class UsersRoute {
    constructor() {
        this.path = '/secure/users';
        this.router = (0, express_1.Router)();
        this.usersController = new users_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, (0, request_1.requestJson)(this.usersController.getUsers, 'GET_USERS'));
        this.router.get(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.usersController.getUserById, 'GET_USER'));
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(users_dto_1.CreateUserDto, 'body'), (0, request_1.requestJson)(this.usersController.createUser, 'CREATE_USER'));
        this.router.put(`${this.path}/:id(\\d+)`, (0, validation_middleware_1.default)(users_dto_1.CreateUserDto, 'body', true), (0, request_1.requestJson)(this.usersController.updateUser, 'UPDATE_USER'));
        this.router.delete(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.usersController.deleteUser, 'DELETE_USER'));
    }
}
exports.default = UsersRoute;
//# sourceMappingURL=users.route.js.map