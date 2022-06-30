"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleModel = void 0;
const sequelize_1 = require("sequelize");
class StyleModel extends sequelize_1.Model {
}
exports.StyleModel = StyleModel;
function default_1(sequelize) {
    StyleModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        style_type: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(45),
        },
        height: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        width: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        price: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
    }, {
        tableName: 'style',
        sequelize,
    });
    return StyleModel;
}
exports.default = default_1;
//# sourceMappingURL=style.model.js.map