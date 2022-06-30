"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = (0, tslib_1.__importDefault)(require("@databases"));
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
class PaymentService {
    constructor() {
        this.payment = _databases_1.default.Payment;
    }
    async findAllPayment() {
        const allPayment = await this.payment.findAll();
        return allPayment;
    }
    async findPaymentById(paymentId) {
        if ((0, util_1.isEmpty)(paymentId))
            throw new HttpException_1.HttpException(400, "You're not paymentId");
        const findPayment = await this.payment.findByPk(paymentId);
        if (!findPayment)
            throw new HttpException_1.HttpException(409, "You're not payment");
        return findPayment;
    }
    async createPayment(paymentData) {
        if ((0, util_1.isEmpty)(paymentData))
            throw new HttpException_1.HttpException(400, "You're not paymentData");
        const createPaymentData = await this.payment.create(Object.assign({}, paymentData));
        return createPaymentData;
    }
    async updatePayment(paymentId, paymentData) {
        if ((0, util_1.isEmpty)(paymentData))
            throw new HttpException_1.HttpException(400, "You're not paymentData");
        const findPayment = await this.payment.findByPk(paymentId);
        if (!findPayment)
            throw new HttpException_1.HttpException(409, "You're not payment");
        await this.payment.update(Object.assign({}, paymentData), { where: { id: paymentId } });
        const updatePayment = await this.payment.findByPk(paymentId);
        return updatePayment;
    }
    async deletePayment(paymentId) {
        if ((0, util_1.isEmpty)(paymentId))
            throw new HttpException_1.HttpException(400, "You're not paymentId");
        const findPayment = await this.payment.findByPk(paymentId);
        if (!findPayment)
            throw new HttpException_1.HttpException(409, "You're not payment");
        await this.payment.destroy({ where: { id: paymentId } });
        return findPayment;
    }
}
exports.default = PaymentService;
//# sourceMappingURL=payment.service.js.map