import { NextFunction, Request, Response } from 'express';
import { Payment } from '@interfaces/payment.interface';
import paymentService from '@services/payment.service';
declare class PaymentController {
    paymentService: paymentService;
    getPayment: (req: Request, res: Response, next: NextFunction) => Promise<Payment[]>;
    getPaymentById: (req: Request, res: Response, next: NextFunction) => Promise<Payment>;
    createPayment: (req: Request, res: Response, next: NextFunction) => Promise<Payment>;
    updatePayment: (req: Request, res: Response, next: NextFunction) => Promise<Payment>;
    deletePayment: (req: Request, res: Response, next: NextFunction) => Promise<Payment>;
}
export default PaymentController;
