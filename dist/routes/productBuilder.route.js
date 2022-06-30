"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const productBuilder_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/productBuilder.controller"));
const productBuilder_dto_1 = require("@dtos/productBuilder.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("@middlewares/validation.middleware"));
const request_1 = require("@middlewares/request");
class ProductBuilderRoute {
    constructor() {
        this.path = '/productBuilder';
        this.router = (0, express_1.Router)();
        this.productBuilderController = new productBuilder_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, (0, request_1.requestJson)(this.productBuilderController.getProductBuilder, 'GET_PORDUCT_BUILDER'));
        this.router.get(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.productBuilderController.getProductBuilderById, 'GET_ProductBuilder'));
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(productBuilder_dto_1.CreateProductBuilderDto, 'body'), (0, request_1.requestJson)(this.productBuilderController.createProductBuilder, 'CREATE_ProductBuilder'));
        this.router.put(`${this.path}/:id(\\d+)`, (0, validation_middleware_1.default)(productBuilder_dto_1.CreateProductBuilderDto, 'body', true), (0, request_1.requestJson)(this.productBuilderController.updateProductBuilder, 'UPDATE_ProductBuilder'));
        this.router.delete(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.productBuilderController.deleteProductBuilder, 'DELETE_ProductBuilder'));
    }
}
exports.default = ProductBuilderRoute;
//# sourceMappingURL=productBuilder.route.js.map