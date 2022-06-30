"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = (0, tslib_1.__importDefault)(require("@databases"));
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
class CartService {
    constructor() {
        this.cart = _databases_1.default.Cart;
    }
    async findAllCart(user) {
        const allCart = await this.cart.findAll({ where: { user_id: user.id } });
        return allCart;
    }
    async addToCart(cartData, user) {
        if ((0, util_1.isEmpty)(cartData))
            throw new HttpException_1.HttpException(400, "Cart Data doesn't exist");
        const createCartData = await this.cart.create(Object.assign(Object.assign({}, cartData), { user_id: user.id }));
        return createCartData;
    }
    async updateCart(cartId, cartData) {
        if ((0, util_1.isEmpty)(cartData))
            throw new HttpException_1.HttpException(400, "Cart Data doesn't exist");
        const findCart = await this.cart.findByPk(cartId);
        if (!findCart)
            throw new HttpException_1.HttpException(409, "Cart Data doesn't exist");
        await this.cart.update(Object.assign({}, cartData), { where: { id: cartId } });
        const updateCart = await this.cart.findByPk(cartId);
        return updateCart;
    }
    async deleteCart(cartId) {
        if ((0, util_1.isEmpty)(cartId))
            throw new HttpException_1.HttpException(400, "Cart Data doesn't exist");
        const findCart = await this.cart.findByPk(cartId);
        if (!findCart)
            throw new HttpException_1.HttpException(409, "Cart Data doesn't exist");
        await this.cart.destroy({ where: { id: cartId } });
        return findCart;
    }
}
exports.default = CartService;
//# sourceMappingURL=cart.service.js.map