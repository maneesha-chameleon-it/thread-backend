"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModel = void 0;
const sequelize_1 = require("sequelize");
class PaymentModel extends sequelize_1.Model {
}
exports.PaymentModel = PaymentModel;
function default_1(sequelize) {
    PaymentModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        invoice: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(255),
        },
        amount: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        order_id: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        transaction_id: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        payment_id: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        transaction_status: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
    }, {
        tableName: 'payment',
        sequelize,
    });
    return PaymentModel;
}
exports.default = default_1;
//# sourceMappingURL=payment.model.js.map