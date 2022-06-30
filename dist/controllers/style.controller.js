"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const style_service_1 = (0, tslib_1.__importDefault)(require("@services/style.service"));
class StyleController {
    constructor() {
        this.styleService = new style_service_1.default();
        this.getStyle = async (req, res, next) => {
            const findAllStyleData = await this.styleService.findAllStyle();
            return findAllStyleData;
        };
        this.getStyleById = async (req, res, next) => {
            const styleId = Number(req.params.id);
            const findOneStyleData = await this.styleService.findStyleById(styleId);
            return findOneStyleData;
        };
        this.createStyle = async (req, res, next) => {
            const styleData = req.body;
            const createStyleData = await this.styleService.createStyle(styleData);
            return createStyleData;
        };
        this.updateStyle = async (req, res, next) => {
            const styleId = Number(req.params.id);
            const styleData = req.body;
            const updateStyleData = await this.styleService.updateStyle(styleId, styleData);
            return updateStyleData;
        };
        this.deleteStyle = async (req, res, next) => {
            const styleId = Number(req.params.id);
            const deleteStyleData = await this.styleService.deleteStyle(styleId);
            return deleteStyleData;
        };
    }
}
exports.default = StyleController;
//# sourceMappingURL=style.controller.js.map