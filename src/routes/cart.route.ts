import { Router } from 'express';
import CartController from '@controllers/cart.controller';
import { CreateCartDto } from '@dtos/cart.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { requestJson } from '@middlewares/request';

class CartRoute implements Routes {
  public path = '/secure/cart';
  public router = Router();
  public cartController = new CartController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,requestJson(this.cartController.getCart, 'GET_CART'));
    this.router.post(`${this.path}`, validationMiddleware(CreateCartDto, 'body'), requestJson(this.cartController.addToCart, 'CREATE_CART'));
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateCartDto, 'body', true), requestJson(this.cartController.updateCart, 'UPDATE_CART'));
    this.router.delete(`${this.path}/:id(\\d+)`, requestJson(this.cartController.deleteCart,'DELETE_CART'));
  }
}

export default CartRoute;
