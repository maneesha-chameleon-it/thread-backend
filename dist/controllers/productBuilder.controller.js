"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const productBuilder_service_1 = (0, tslib_1.__importDefault)(require("@services/productBuilder.service"));
class ProductBuilderController {
    constructor() {
        this.productBuilderService = new productBuilder_service_1.default();
        this.getProductBuilder = async (req, res, next) => {
            const findAllProductBuilderData = await this.productBuilderService.findAllProductBuilder();
            return findAllProductBuilderData;
        };
        this.getProductBuilderById = async (req, res, next) => {
            const productBuilderId = Number(req.params.id);
            const findOneProductBuilderData = await this.productBuilderService.findProductBuilderById(productBuilderId);
            return findOneProductBuilderData;
        };
        this.createProductBuilder = async (req, res, next) => {
            const productBuilderData = req.body;
            const createProductBuilderData = await this.productBuilderService.createProductBuilder(productBuilderData);
            return createProductBuilderData;
        };
        this.updateProductBuilder = async (req, res, next) => {
            const productBuilderId = Number(req.params.id);
            const productBuilderData = req.body;
            const updateProductBuilderData = await this.productBuilderService.updateProductBuilder(productBuilderId, productBuilderData);
            return updateProductBuilderData;
        };
        this.deleteProductBuilder = async (req, res, next) => {
            const productBuilderId = Number(req.params.id);
            const deleteProductBuilderData = await this.productBuilderService.deleteProductBuilder(productBuilderId);
            return deleteProductBuilderData;
        };
    }
}
exports.default = ProductBuilderController;
//# sourceMappingURL=productBuilder.controller.js.map