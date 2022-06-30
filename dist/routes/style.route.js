"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const style_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/style.controller"));
const style_dto_1 = require("@dtos/style.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("@middlewares/validation.middleware"));
const request_1 = require("@middlewares/request");
class StyleRoute {
    constructor() {
        this.path = '/style';
        this.adminPath = '/secure/admin/style';
        this.router = (0, express_1.Router)();
        this.styleController = new style_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, (0, request_1.requestJson)(this.styleController.getStyle, 'GET_Style'));
        this.router.get(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.styleController.getStyleById, 'GET_style'));
        this.router.post(`${this.adminPath}`, (0, validation_middleware_1.default)(style_dto_1.CreateStyleDto, 'body'), (0, request_1.requestJson)(this.styleController.createStyle, 'CREATE_Style'));
        this.router.put(`${this.adminPath}/:id(\\d+)`, (0, validation_middleware_1.default)(style_dto_1.CreateStyleDto, 'body', true), (0, request_1.requestJson)(this.styleController.updateStyle, 'UPDATE_Style'));
        this.router.delete(`${this.adminPath}/:id(\\d+)`, (0, request_1.requestJson)(this.styleController.deleteStyle, 'DELETE_Style'));
    }
}
exports.default = StyleRoute;
//# sourceMappingURL=style.route.js.map