import { NextFunction, Request, Response } from 'express';
import { CreateFabricDto } from '@dtos/fabric.dto';
import { Fabric } from '@interfaces/fabric.interface';
import fabricService from '@services/fabric.service';
import { RequestWithUser } from '@/interfaces/auth.interface';
import { HttpException } from '@/exceptions/HttpException';

class FabricController {
  public fabricService = new fabricService();

  public  getFabric = async(req: Request, res: Response, next: NextFunction)  => {
      const findAllFabricData: Fabric[] = await this.fabricService.findAllFabric();
      return findAllFabricData
  };

  public getFabricById = async (req: Request, res: Response, next: NextFunction) => {
      const fabricId = Number(req.params.id);
      const findOneFabricData: Fabric = await this.fabricService.findFabricById(fabricId);
      return findOneFabricData;
  };

  public createFabric = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
        const fabricData: CreateFabricDto = req.body;
        const userData = req.user;
        if (userData.role == 'ADMIN') {
        const createFabricData: Fabric = await this.fabricService.createFabric(fabricData);
        return createFabricData;
        } else {
            throw new HttpException(400, 'ADMIN ONLY');
        }
    } catch (e) {
        console.log(e);
      }  
  };

  public updateFabric = async (req: Request, res: Response, next: NextFunction) => {
      const fabricId = Number(req.params.id);
      const fabricData: CreateFabricDto = req.body;
      const updateFabricData: Fabric = await this.fabricService.updateFabric(fabricId, fabricData);
      return updateFabricData;
  };

  public deleteFabric = async (req: Request, res: Response, next: NextFunction) => {
      const fabricId = Number(req.params.id);
      const deleteFabricData: Fabric = await this.fabricService.deleteFabric(fabricId);
      return deleteFabricData;
  };
}

export default FabricController;
