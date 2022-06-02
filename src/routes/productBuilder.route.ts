import { Router } from 'express';
import ProductBuilderController from '@controllers/productBuilder.controller';
import { CreateProductBuilderDto } from '@dtos/productBuilder.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { requestJson } from '@middlewares/request';

class ProductBuilderRoute implements Routes {
  public path = '/productBuilder';
  public router = Router();
  public productBuilderController = new ProductBuilderController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,requestJson(this.productBuilderController.getProductBuilder, 'GET_PORDUCT_BUILDER'));
    this.router.get(`${this.path}/:id(\\d+)`, requestJson(this.productBuilderController.getProductBuilderById, 'GET_ProductBuilder'));
    this.router.post(`${this.path}`, validationMiddleware(CreateProductBuilderDto, 'body'), requestJson(this.productBuilderController.createProductBuilder, 'CREATE_ProductBuilder'));
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateProductBuilderDto, 'body', true), requestJson(this.productBuilderController.updateProductBuilder, 'UPDATE_ProductBuilder'));
    this.router.delete(`${this.path}/:id(\\d+)`, requestJson(this.productBuilderController.deleteProductBuilder,'DELETE_ProductBuilder'));
  }
}

export default ProductBuilderRoute;
