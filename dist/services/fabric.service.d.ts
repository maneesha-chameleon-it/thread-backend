import { CreateFabricDto } from '@dtos/fabric.dto';
import { Fabric } from '@interfaces/fabric.interface';
declare class FabricService {
    fabric: typeof import("../models/fabric.model").FabricModel;
    findAllFabric(): Promise<Fabric[]>;
    findFabricById(fabricId: number): Promise<Fabric>;
    createFabric(fabricData: CreateFabricDto): Promise<Fabric>;
    updateFabric(fabricId: number, fabricData: CreateFabricDto): Promise<Fabric>;
    deleteFabric(fabricId: number): Promise<Fabric>;
}
export default FabricService;
