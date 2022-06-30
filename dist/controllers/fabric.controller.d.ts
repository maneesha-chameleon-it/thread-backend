import { NextFunction, Request, Response } from 'express';
import { Fabric } from '@interfaces/fabric.interface';
import fabricService from '@services/fabric.service';
import { RequestWithUser } from '@/interfaces/auth.interface';
declare class FabricController {
    fabricService: fabricService;
    getFabric: (req: Request, res: Response, next: NextFunction) => Promise<Fabric[]>;
    getFabricById: (req: Request, res: Response, next: NextFunction) => Promise<Fabric>;
    createFabric: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<Fabric>;
    updateFabric: (req: Request, res: Response, next: NextFunction) => Promise<Fabric>;
    deleteFabric: (req: Request, res: Response, next: NextFunction) => Promise<Fabric>;
}
export default FabricController;
