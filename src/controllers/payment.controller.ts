import { NextFunction, Request, Response } from 'express';
import { CreatePaymentDto } from '@dtos/payment.dto';
import { Payment } from '@interfaces/payment.interface';
import paymentService from '@services/payment.service';

class PaymentController {
  public paymentService = new paymentService();

  public  getPayment = async(req: Request, res: Response, next: NextFunction)  => {
      const findAllPaymentData: Payment[] = await this.paymentService.findAllPayment();
      return findAllPaymentData
  };

  public getPaymentById = async (req: Request, res: Response, next: NextFunction) => {
      const paymentId = Number(req.params.id);
      const findOnePaymentData: Payment = await this.paymentService.findPaymentById(paymentId);
      return findOnePaymentData;
  };

  public createPayment = async (req: Request, res: Response, next: NextFunction) => {
      const paymentData: CreatePaymentDto = req.body;
      const createPaymentData: Payment = await this.paymentService.createPayment(paymentData);
      return createPaymentData;
  };

  public updatePayment = async (req: Request, res: Response, next: NextFunction) => {
      const paymentId = Number(req.params.id);
      const paymentData: CreatePaymentDto = req.body;
      const updatePaymentData: Payment = await this.paymentService.updatePayment(paymentId, paymentData);
      return updatePaymentData;
  };

  public deletePayment = async (req: Request, res: Response, next: NextFunction) => {
      const paymentId = Number(req.params.id);
      const deletePaymentData: Payment = await this.paymentService.deletePayment(paymentId);
      return deletePaymentData;
  };
}

export default PaymentController;
