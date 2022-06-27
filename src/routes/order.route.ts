import { Router } from 'express';
import OrderController from '@controllers/order.controller';
import { CreateOrderDto } from '@dtos/order.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { requestJson } from '@middlewares/request';

class OrderRoute implements Routes {
  public path = '/secure/order';
  public router = Router();
  public orderController = new OrderController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,requestJson(this.orderController.getOrder, 'GET_ORDER'));
    this.router.get(`${this.path}/:id(\\d+)`, requestJson(this.orderController.getOrderById, 'GET_ORDER'));
    this.router.post(`${this.path}`, validationMiddleware(CreateOrderDto, 'body'), requestJson(this.orderController.placeOrder, 'CREATE_Order'));
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateOrderDto, 'body', true), requestJson(this.orderController.updateOrder, 'UPDATE_Order'));
    this.router.delete(`${this.path}/:id(\\d+)`, requestJson(this.orderController.deleteOrder,'DELETE_Order'));
  }
}

export default OrderRoute;
