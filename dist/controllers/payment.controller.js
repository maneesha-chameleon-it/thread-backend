"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const payment_service_1 = (0, tslib_1.__importDefault)(require("@services/payment.service"));
class PaymentController {
    constructor() {
        this.paymentService = new payment_service_1.default();
        this.getPayment = async (req, res, next) => {
            const findAllPaymentData = await this.paymentService.findAllPayment();
            return findAllPaymentData;
        };
        this.getPaymentById = async (req, res, next) => {
            const paymentId = Number(req.params.id);
            const findOnePaymentData = await this.paymentService.findPaymentById(paymentId);
            return findOnePaymentData;
        };
        this.createPayment = async (req, res, next) => {
            const paymentData = req.body;
            const createPaymentData = await this.paymentService.createPayment(paymentData);
            return createPaymentData;
        };
        this.updatePayment = async (req, res, next) => {
            const paymentId = Number(req.params.id);
            const paymentData = req.body;
            const updatePaymentData = await this.paymentService.updatePayment(paymentId, paymentData);
            return updatePaymentData;
        };
        this.deletePayment = async (req, res, next) => {
            const paymentId = Number(req.params.id);
            const deletePaymentData = await this.paymentService.deletePayment(paymentId);
            return deletePaymentData;
        };
    }
}
exports.default = PaymentController;
//# sourceMappingURL=payment.controller.js.map