import { Router } from 'express';
import PaymentController from '@controllers/payment.controller';
import { CreatePaymentDto } from '@dtos/payment.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { requestJson } from '@middlewares/request';

class PaymentRoute implements Routes {
  public path = '/secure/payment';
  public router = Router();
  public paymentController = new PaymentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,requestJson(this.paymentController.getPayment, 'GET_Payment'));
    this.router.get(`${this.path}/:id(\\d+)`, requestJson(this.paymentController.getPaymentById, 'GET_Payment'));
    this.router.post(`${this.path}`, validationMiddleware(CreatePaymentDto, 'body'), requestJson(this.paymentController.createPayment, 'CREATE_payment'));
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreatePaymentDto, 'body', true), requestJson(this.paymentController.updatePayment, 'UPDATE_Payment'));
    this.router.delete(`${this.path}/:id(\\d+)`, requestJson(this.paymentController.deletePayment,'DELETE_Payment'));
  }
}

export default PaymentRoute;
