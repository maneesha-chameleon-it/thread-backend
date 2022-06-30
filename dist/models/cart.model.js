"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = void 0;
const sequelize_1 = require("sequelize");
class CartModel extends sequelize_1.Model {
}
exports.CartModel = CartModel;
function default_1(sequelize) {
    CartModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        product_builder_id: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        user_id: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        count: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
    }, {
        tableName: 'cart',
        sequelize,
    });
    return CartModel;
}
exports.default = default_1;
//# sourceMappingURL=cart.model.js.map