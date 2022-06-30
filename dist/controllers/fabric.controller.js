"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fabric_service_1 = (0, tslib_1.__importDefault)(require("@services/fabric.service"));
const HttpException_1 = require("@/exceptions/HttpException");
class FabricController {
    constructor() {
        this.fabricService = new fabric_service_1.default();
        this.getFabric = async (req, res, next) => {
            const findAllFabricData = await this.fabricService.findAllFabric();
            return findAllFabricData;
        };
        this.getFabricById = async (req, res, next) => {
            const fabricId = Number(req.params.id);
            const findOneFabricData = await this.fabricService.findFabricById(fabricId);
            return findOneFabricData;
        };
        this.createFabric = async (req, res, next) => {
            try {
                const fabricData = req.body;
                const userData = req.user;
                if (userData.role == 'ADMIN') {
                    const createFabricData = await this.fabricService.createFabric(fabricData);
                    return createFabricData;
                }
                else {
                    throw new HttpException_1.HttpException(400, 'ADMIN ONLY');
                }
            }
            catch (e) {
                console.log(e);
            }
        };
        this.updateFabric = async (req, res, next) => {
            const fabricId = Number(req.params.id);
            const fabricData = req.body;
            const updateFabricData = await this.fabricService.updateFabric(fabricId, fabricData);
            return updateFabricData;
        };
        this.deleteFabric = async (req, res, next) => {
            const fabricId = Number(req.params.id);
            const deleteFabricData = await this.fabricService.deleteFabric(fabricId);
            return deleteFabricData;
        };
    }
}
exports.default = FabricController;
//# sourceMappingURL=fabric.controller.js.map