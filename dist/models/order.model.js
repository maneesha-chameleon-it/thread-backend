"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const sequelize_1 = require("sequelize");
class OrderModel extends sequelize_1.Model {
}
exports.OrderModel = OrderModel;
function default_1(sequelize) {
    OrderModel.init({
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
        order_status: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
            defaultValue: 'PENDING',
        },
    }, {
        tableName: 'order',
        sequelize,
    });
    return OrderModel;
}
exports.default = default_1;
//# sourceMappingURL=order.model.js.map