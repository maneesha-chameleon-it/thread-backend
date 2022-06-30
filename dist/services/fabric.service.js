"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = (0, tslib_1.__importDefault)(require("@databases"));
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
class FabricService {
    constructor() {
        this.fabric = _databases_1.default.Fabric;
    }
    async findAllFabric() {
        const allFabric = await this.fabric.findAll();
        return allFabric;
    }
    async findFabricById(fabricId) {
        if ((0, util_1.isEmpty)(fabricId))
            throw new HttpException_1.HttpException(400, "You're not fabricId");
        const findFabric = await this.fabric.findByPk(fabricId);
        if (!findFabric)
            throw new HttpException_1.HttpException(409, "You're not fabric");
        return findFabric;
    }
    async createFabric(fabricData) {
        if ((0, util_1.isEmpty)(fabricData))
            throw new HttpException_1.HttpException(400, "You're not fabricData");
        const createFabricData = await this.fabric.create(Object.assign({}, fabricData));
        return createFabricData;
    }
    async updateFabric(fabricId, fabricData) {
        if ((0, util_1.isEmpty)(fabricData))
            throw new HttpException_1.HttpException(400, "You're not fabricData");
        const findFabric = await this.fabric.findByPk(fabricId);
        if (!findFabric)
            throw new HttpException_1.HttpException(409, "You're not fabric");
        await this.fabric.update(Object.assign({}, fabricData), { where: { id: fabricId } });
        const updateFabric = await this.fabric.findByPk(fabricId);
        return updateFabric;
    }
    async deleteFabric(fabricId) {
        if ((0, util_1.isEmpty)(fabricId))
            throw new HttpException_1.HttpException(400, "You're not fabricId");
        const findFabric = await this.fabric.findByPk(fabricId);
        if (!findFabric)
            throw new HttpException_1.HttpException(409, "You're not fabric");
        await this.fabric.destroy({ where: { id: fabricId } });
        return findFabric;
    }
}
exports.default = FabricService;
//# sourceMappingURL=fabric.service.js.map