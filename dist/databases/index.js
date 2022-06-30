"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = (0, tslib_1.__importDefault)(require("config"));
const sequelize_1 = (0, tslib_1.__importDefault)(require("sequelize"));
const users_model_1 = (0, tslib_1.__importDefault)(require("@models/users.model"));
const logger_1 = require("@utils/logger");
const productBuilder_model_1 = (0, tslib_1.__importDefault)(require("@models/productBuilder.model"));
const fabric_model_1 = (0, tslib_1.__importDefault)(require("@/models/fabric.model"));
const style_model_1 = (0, tslib_1.__importDefault)(require("@/models/style.model"));
const cart_model_1 = (0, tslib_1.__importDefault)(require("@/models/cart.model"));
const order_model_1 = (0, tslib_1.__importDefault)(require("@/models/order.model"));
const payment_model_1 = (0, tslib_1.__importDefault)(require("@/models/payment.model"));
const orderDetails_1 = (0, tslib_1.__importDefault)(require("@/models/orderDetails"));
const { host, user, password, database, pool } = config_1.default.get('dbConfig');
const sequelize = new sequelize_1.default.Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql',
    // timezone: '+09:00',
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        underscored: true,
        freezeTableName: true,
    },
    pool: {
        min: pool.min,
        max: pool.max,
    },
    logQueryParameters: process.env.NODE_ENV === 'development',
    logging: (query, time) => {
        logger_1.logger.info(time + 'ms' + ' ' + query);
    },
    benchmark: true,
});
sequelize.authenticate();
const DB = {
    Users: (0, users_model_1.default)(sequelize),
    ProductBuilder: (0, productBuilder_model_1.default)(sequelize),
    Fabric: (0, fabric_model_1.default)(sequelize),
    Style: (0, style_model_1.default)(sequelize),
    Cart: (0, cart_model_1.default)(sequelize),
    Order: (0, order_model_1.default)(sequelize),
    OrderDetails: (0, orderDetails_1.default)(sequelize),
    Payment: (0, payment_model_1.default)(sequelize),
    sequelize,
    Sequelize: // connection instance (RAW queries)
    sequelize_1.default, // library
};
exports.default = DB;
//# sourceMappingURL=index.js.map