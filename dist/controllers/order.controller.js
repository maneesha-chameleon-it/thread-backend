"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const order_service_1 = (0, tslib_1.__importDefault)(require("@services/order.service"));
class OrderController {
    constructor() {
        this.orderService = new order_service_1.default();
        this.getOrder = async (req, res, next) => {
            const findAllOrderData = await this.orderService.findAllOrder(req.user);
            return findAllOrderData;
        };
        this.getOrderById = async (req, res, next) => {
            const orderId = Number(req.params.id);
            const findOneOrderData = await this.orderService.findOrderById(orderId);
            return findOneOrderData;
        };
        this.placeOrder = async (req, res, next) => {
            const orderData = req.body;
            const createOrderData = await this.orderService.placeOrder(orderData, req.user);
            return createOrderData;
        };
        this.updateOrder = async (req, res, next) => {
            const orderId = Number(req.params.id);
            const orderData = req.body;
            const updateOrderData = await this.orderService.updateOrder(orderId, orderData);
            return updateOrderData;
        };
        this.deleteOrder = async (req, res, next) => {
            const orderId = Number(req.params.id);
            const deleteOrderData = await this.orderService.deleteOrder(orderId);
            return deleteOrderData;
        };
    }
}
exports.default = OrderController;
//# sourceMappingURL=order.controller.js.map