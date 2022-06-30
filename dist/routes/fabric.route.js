"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const fabric_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/fabric.controller"));
const fabric_dto_1 = require("@dtos/fabric.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("@middlewares/validation.middleware"));
const request_1 = require("@middlewares/request");
class FabricRoute {
    constructor() {
        this.path = '/fabric';
        this.adminPath = '/secure/admin/fabric';
        this.router = (0, express_1.Router)();
        this.fabricController = new fabric_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, (0, request_1.requestJson)(this.fabricController.getFabric, 'GET_FABRIC'));
        this.router.get(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.fabricController.getFabricById, 'GET_FABRIC'));
        this.router.post(`${this.adminPath}`, (0, validation_middleware_1.default)(fabric_dto_1.CreateFabricDto, 'body'), (0, request_1.requestJson)(this.fabricController.createFabric, 'CREATE_Fabric'));
        this.router.put(`${this.adminPath}/:id(\\d+)`, (0, validation_middleware_1.default)(fabric_dto_1.CreateFabricDto, 'body', true), (0, request_1.requestJson)(this.fabricController.updateFabric, 'UPDATE_Fabric'));
        this.router.delete(`${this.adminPath}/:id(\\d+)`, (0, request_1.requestJson)(this.fabricController.deleteFabric, 'DELETE_Fabric'));
    }
}
exports.default = FabricRoute;
//# sourceMappingURL=fabric.route.js.map