"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const order_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/order.controller"));
const order_dto_1 = require("@dtos/order.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("@middlewares/validation.middleware"));
const request_1 = require("@middlewares/request");
class OrderRoute {
    constructor() {
        this.path = '/secure/order';
        this.router = (0, express_1.Router)();
        this.orderController = new order_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, (0, request_1.requestJson)(this.orderController.getOrder, 'GET_ORDER'));
        this.router.get(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.orderController.getOrderById, 'GET_ORDER'));
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(order_dto_1.CreateOrderDto, 'body'), (0, request_1.requestJson)(this.orderController.placeOrder, 'CREATE_Order'));
        this.router.put(`${this.path}/:id(\\d+)`, (0, validation_middleware_1.default)(order_dto_1.CreateOrderDto, 'body', true), (0, request_1.requestJson)(this.orderController.updateOrder, 'UPDATE_Order'));
        this.router.delete(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.orderController.deleteOrder, 'DELETE_Order'));
    }
}
exports.default = OrderRoute;
//# sourceMappingURL=order.route.js.map