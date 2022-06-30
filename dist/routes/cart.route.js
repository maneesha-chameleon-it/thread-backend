"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const cart_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/cart.controller"));
const cart_dto_1 = require("@dtos/cart.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("@middlewares/validation.middleware"));
const request_1 = require("@middlewares/request");
class CartRoute {
    constructor() {
        this.path = '/secure/cart';
        this.router = (0, express_1.Router)();
        this.cartController = new cart_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, (0, request_1.requestJson)(this.cartController.getCart, 'GET_CART'));
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(cart_dto_1.CreateCartDto, 'body'), (0, request_1.requestJson)(this.cartController.addToCart, 'CREATE_CART'));
        this.router.put(`${this.path}/:id(\\d+)`, (0, validation_middleware_1.default)(cart_dto_1.CreateCartDto, 'body', true), (0, request_1.requestJson)(this.cartController.updateCart, 'UPDATE_CART'));
        this.router.delete(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.cartController.deleteCart, 'DELETE_CART'));
    }
}
exports.default = CartRoute;
//# sourceMappingURL=cart.route.js.map