"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = (0, tslib_1.__importDefault)(require("@databases"));
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
class ProductBuilderService {
    constructor() {
        this.productBuilder = _databases_1.default.ProductBuilder;
    }
    async findAllProductBuilder() {
        const allProductBuilder = await this.productBuilder.findAll();
        return allProductBuilder;
    }
    async findProductBuilderById(productBuilderId) {
        if ((0, util_1.isEmpty)(productBuilderId))
            throw new HttpException_1.HttpException(400, "You're not productBuilderId");
        const findProductBuilder = await this.productBuilder.findByPk(productBuilderId);
        if (!findProductBuilder)
            throw new HttpException_1.HttpException(409, "You're not productBuilder");
        return findProductBuilder;
    }
    async createProductBuilder(productBuilderData) {
        if ((0, util_1.isEmpty)(productBuilderData))
            throw new HttpException_1.HttpException(400, "You're not productBuilderData");
        const createProductBuilderData = await this.productBuilder.create(Object.assign({}, productBuilderData));
        return createProductBuilderData;
    }
    async updateProductBuilder(productBuilderId, productBuilderData) {
        if ((0, util_1.isEmpty)(productBuilderData))
            throw new HttpException_1.HttpException(400, "You're not productBuilderData");
        const findProductBuilder = await this.productBuilder.findByPk(productBuilderId);
        if (!findProductBuilder)
            throw new HttpException_1.HttpException(409, "You're not productBuilder");
        await this.productBuilder.update(Object.assign({}, productBuilderData), { where: { id: productBuilderId } });
        const updateProductBuilder = await this.productBuilder.findByPk(productBuilderId);
        return updateProductBuilder;
    }
    async deleteProductBuilder(productBuilderId) {
        if ((0, util_1.isEmpty)(productBuilderId))
            throw new HttpException_1.HttpException(400, "You're not productBuilderId");
        const findProductBuilder = await this.productBuilder.findByPk(productBuilderId);
        if (!findProductBuilder)
            throw new HttpException_1.HttpException(409, "You're not productBuilder");
        await this.productBuilder.destroy({ where: { id: productBuilderId } });
        return findProductBuilder;
    }
}
exports.default = ProductBuilderService;
//# sourceMappingURL=productBuilder.service.js.map