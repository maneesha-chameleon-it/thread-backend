"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const payment_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/payment.controller"));
const payment_dto_1 = require("@dtos/payment.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("@middlewares/validation.middleware"));
const request_1 = require("@middlewares/request");
class PaymentRoute {
    constructor() {
        this.path = '/secure/payment';
        this.router = (0, express_1.Router)();
        this.paymentController = new payment_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, (0, request_1.requestJson)(this.paymentController.getPayment, 'GET_Payment'));
        this.router.get(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.paymentController.getPaymentById, 'GET_Payment'));
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(payment_dto_1.CreatePaymentDto, 'body'), (0, request_1.requestJson)(this.paymentController.createPayment, 'CREATE_payment'));
        this.router.put(`${this.path}/:id(\\d+)`, (0, validation_middleware_1.default)(payment_dto_1.CreatePaymentDto, 'body', true), (0, request_1.requestJson)(this.paymentController.updatePayment, 'UPDATE_Payment'));
        this.router.delete(`${this.path}/:id(\\d+)`, (0, request_1.requestJson)(this.paymentController.deletePayment, 'DELETE_Payment'));
    }
}
exports.default = PaymentRoute;
//# sourceMappingURL=payment.route.js.map