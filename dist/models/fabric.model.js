"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricModel = void 0;
const sequelize_1 = require("sequelize");
class FabricModel extends sequelize_1.Model {
}
exports.FabricModel = FabricModel;
function default_1(sequelize) {
    FabricModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        fabric_type: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        starting_price: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        color: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        material_type: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        price_per_meter: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        category: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        milled_country_name: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        composition: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        cleaning: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        small_curtains: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        medium_curtains: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        large_curtains: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        image_small: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(255),
        },
        image_big: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(255),
        }
    }, {
        tableName: 'fabric',
        sequelize,
    });
    return FabricModel;
}
exports.default = default_1;
//# sourceMappingURL=fabric.model.js.map