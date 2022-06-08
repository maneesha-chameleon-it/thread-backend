import { Router } from 'express';
import FabricController from '@controllers/fabric.controller';
import { CreateFabricDto } from '@dtos/fabric.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { requestJson } from '@middlewares/request';

class FabricRoute implements Routes {
  public path = '/fabric';
  public router = Router();
  public fabricController = new FabricController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,requestJson(this.fabricController.getFabric, 'GET_FABRIC'));
    this.router.get(`${this.path}/:id(\\d+)`, requestJson(this.fabricController.getFabricById, 'GET_Fabric'));
    this.router.post(`${this.path}`, validationMiddleware(CreateFabricDto, 'body'), requestJson(this.fabricController.createFabric, 'CREATE_Fabric'));
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateFabricDto, 'body', true), requestJson(this.fabricController.updateFabric, 'UPDATE_Fabric'));
    this.router.delete(`${this.path}/:id(\\d+)`, requestJson(this.fabricController.deleteFabric,'DELETE_Fabric'));
  }
}

export default FabricRoute;
