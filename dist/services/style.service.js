"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = (0, tslib_1.__importDefault)(require("@databases"));
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
class StyleService {
    constructor() {
        this.style = _databases_1.default.Style;
    }
    async findAllStyle() {
        const allStyle = await this.style.findAll();
        return allStyle;
    }
    async findStyleById(styleId) {
        if ((0, util_1.isEmpty)(styleId))
            throw new HttpException_1.HttpException(400, "You're not styleId");
        const findStyle = await this.style.findByPk(styleId);
        if (!findStyle)
            throw new HttpException_1.HttpException(409, "You're not style");
        return findStyle;
    }
    async createStyle(styleData) {
        if ((0, util_1.isEmpty)(styleData))
            throw new HttpException_1.HttpException(400, "You're not styleData");
        const createStyleData = await this.style.create(Object.assign({}, styleData));
        return createStyleData;
    }
    async updateStyle(styleId, styleData) {
        if ((0, util_1.isEmpty)(styleData))
            throw new HttpException_1.HttpException(400, "You're not styleData");
        const findStyle = await this.style.findByPk(styleId);
        if (!findStyle)
            throw new HttpException_1.HttpException(409, "You're not style");
        await this.style.update(Object.assign({}, styleData), { where: { id: styleId } });
        const updateStyle = await this.style.findByPk(styleId);
        return updateStyle;
    }
    async deleteStyle(styleId) {
        if ((0, util_1.isEmpty)(styleId))
            throw new HttpException_1.HttpException(400, "You're not styleId");
        const findStyle = await this.style.findByPk(styleId);
        if (!findStyle)
            throw new HttpException_1.HttpException(409, "You're not style");
        await this.style.destroy({ where: { id: styleId } });
        return findStyle;
    }
}
exports.default = StyleService;
//# sourceMappingURL=style.service.js.map