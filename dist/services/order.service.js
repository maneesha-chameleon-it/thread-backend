"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = (0, tslib_1.__importDefault)(require("@databases"));
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
const sequelize_1 = require("sequelize");
class OrderService {
    constructor() {
        this.order = _databases_1.default.Order;
        this.cart = _databases_1.default.Cart;
    }
    async findAllOrder(user) {
        const allOrder = await this.order.findAll({ where: { user_id: user.id } });
        return allOrder;
    }
    async findOrderById(orderId) {
        if ((0, util_1.isEmpty)(orderId))
            throw new HttpException_1.HttpException(400, "You're not orderId");
        const findOrder = await this.order.findByPk(orderId);
        if (!findOrder)
            throw new HttpException_1.HttpException(409, "You're not order");
        return findOrder;
    }
    async placeOrder(user) {
        // if (isEmpty(orderData)) throw new HttpException(400, "You're not orderData");
        // const createOrderData: Order = await this.order.create({ ...orderData, });
        // return createOrderData;
        try {
            const allCart = await _databases_1.default.sequelize.query(`select user_id,product_builder_id,count from cart C where C.user_id=${user.id} `, {
                type: sequelize_1.QueryTypes.SELECT,
            });
            if (!allCart || !allCart.length) {
                throw new HttpException_1.HttpException(400, 'Cart is empty');
            }
            const createOrderData = await this.order.bulkCreate(allCart);
            await this.cart.destroy({ where: { user_id: user.id } });
            return createOrderData;
        }
        catch (e) {
            console.log(e);
            throw new HttpException_1.HttpException(400, 'Failed to place order');
        }
    }
    async updateOrder(orderId, orderData) {
        if ((0, util_1.isEmpty)(orderData))
            throw new HttpException_1.HttpException(400, "You're not orderData");
        const findOrder = await this.order.findByPk(orderId);
        if (!findOrder)
            throw new HttpException_1.HttpException(409, "You're not order");
        await this.order.update(Object.assign({}, orderData), { where: { id: orderId } });
        const updateOrder = await this.order.findByPk(orderId);
        return updateOrder;
    }
    async deleteOrder(orderId) {
        if ((0, util_1.isEmpty)(orderId))
            throw new HttpException_1.HttpException(400, "You're not orderId");
        const findOrder = await this.order.findByPk(orderId);
        if (!findOrder)
            throw new HttpException_1.HttpException(409, "You're not order");
        await this.order.destroy({ where: { id: orderId } });
        return findOrder;
    }
}
exports.default = OrderService;
//# sourceMappingURL=order.service.js.map