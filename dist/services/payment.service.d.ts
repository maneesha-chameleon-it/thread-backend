import { CreatePaymentDto } from '@dtos/payment.dto';
import { Payment } from '@interfaces/payment.interface';
declare class PaymentService {
    payment: typeof import("../models/payment.model").PaymentModel;
    findAllPayment(): Promise<Payment[]>;
    findPaymentById(paymentId: number): Promise<Payment>;
    createPayment(paymentData: CreatePaymentDto): Promise<Payment>;
    updatePayment(paymentId: number, paymentData: CreatePaymentDto): Promise<Payment>;
    deletePayment(paymentId: number): Promise<Payment>;
}
export default PaymentService;
