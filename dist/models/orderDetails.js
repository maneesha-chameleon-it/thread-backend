"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsModel = void 0;
const sequelize_1 = require("sequelize");
class OrderDetailsModel extends sequelize_1.Model {
}
exports.OrderDetailsModel = OrderDetailsModel;
function default_1(sequelize) {
    OrderDetailsModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        order_id: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        addressOne: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(255),
        },
        addressTwo: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(255),
        },
        city: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        postcode: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        mobileNumber: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        shippingOption: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        payment_status: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
    }, {
        tableName: 'orderDetails',
        sequelize,
    });
    return OrderDetailsModel;
}
exports.default = default_1;
//# sourceMappingURL=orderDetails.js.map