"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cart_service_1 = (0, tslib_1.__importDefault)(require("@services/cart.service"));
class CartController {
    constructor() {
        this.cartService = new cart_service_1.default();
        this.getCart = async (req, res, next) => {
            const findAllCartData = await this.cartService.findAllCart(req.user);
            return findAllCartData;
        };
        this.addToCart = async (req, res, next) => {
            const cartData = req.body;
            const createCartData = await this.cartService.addToCart(cartData, req.user);
            return createCartData;
        };
        this.updateCart = async (req, res, next) => {
            const cartId = Number(req.params.id);
            const cartData = req.body;
            const updateCartData = await this.cartService.updateCart(cartId, cartData);
            return updateCartData;
        };
        this.deleteCart = async (req, res, next) => {
            const cartId = Number(req.params.id);
            const deleteCartData = await this.cartService.deleteCart(cartId);
            return deleteCartData;
        };
    }
}
exports.default = CartController;
//# sourceMappingURL=cart.controller.js.map