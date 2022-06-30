"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBuilderModel = void 0;
const sequelize_1 = require("sequelize");
class ProductBuilderModel extends sequelize_1.Model {
}
exports.ProductBuilderModel = ProductBuilderModel;
function default_1(sequelize) {
    ProductBuilderModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        fabric_id: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        user_id: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        measuring_for: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        type_of_room: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(255),
        },
        kind_of_room: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        window_name: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        pole_or_track_status: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        width: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        height: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        panel: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        curtain_close: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        style: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        lining: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        pole_and_track: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        poleMaterial: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        poleDiameter: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        polEnd: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        polFinish: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        trackEnd: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        trackFinish: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        pooling: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        total_price: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        image: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(255),
        },
    }, {
        tableName: 'productBuilder',
        sequelize,
    });
    return ProductBuilderModel;
}
exports.default = default_1;
//# sourceMappingURL=productBuilder.model.js.map