import { Router } from 'express';
import StyleController from '@controllers/style.controller';
import { CreateStyleDto } from '@dtos/style.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { requestJson } from '@middlewares/request';

class StyleRoute implements Routes {
  public path = '/style';
  public adminPath = '/secure/admin/style';
  public router = Router();
  public styleController = new StyleController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,requestJson(this.styleController.getStyle, 'GET_Style'));
    this.router.get(`${this.path}/:id(\\d+)`, requestJson(this.styleController.getStyleById, 'GET_style'));
    this.router.post(`${this.adminPath}`, validationMiddleware(CreateStyleDto, 'body'), requestJson(this.styleController.createStyle, 'CREATE_Style'));
    this.router.put(`${this.adminPath}/:id(\\d+)`, validationMiddleware(CreateStyleDto, 'body', true), requestJson(this.styleController.updateStyle, 'UPDATE_Style'));
    this.router.delete(`${this.adminPath}/:id(\\d+)`, requestJson(this.styleController.deleteStyle,'DELETE_Style'));
  }
}

export default StyleRoute;
