import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreatePaymentDto } from '@dtos/payment.dto';
import { HttpException } from '@exceptions/HttpException';
import { Payment } from '@interfaces/payment.interface';
import { isEmpty } from '@utils/util';

class PaymentService {
  public payment = DB.Payment;

  public async findAllPayment(): Promise<Payment[]> {
    const allPayment: Payment[] = await this.payment.findAll();
    return allPayment;
  }

  public async findPaymentById(paymentId: number): Promise<Payment> {
    if (isEmpty(paymentId)) throw new HttpException(400, "You're not paymentId");

    const findPayment: Payment = await this.payment.findByPk(paymentId);
    if (!findPayment) throw new HttpException(409, "You're not payment");

    return findPayment;
  }

  public async createPayment(paymentData: CreatePaymentDto): Promise<Payment> {
    if (isEmpty(paymentData)) throw new HttpException(400, "You're not paymentData");
    const createPaymentData: Payment = await this.payment.create({ ...paymentData, });
    return createPaymentData;
  }

  public async updatePayment(paymentId: number, paymentData: CreatePaymentDto): Promise<Payment> {
    if (isEmpty(paymentData)) throw new HttpException(400, "You're not paymentData");

    const findPayment: Payment = await this.payment.findByPk(paymentId);
    if (!findPayment) throw new HttpException(409, "You're not payment");

    await this.payment.update({ ...paymentData, }, { where: { id: paymentId } });

    const updatePayment: Payment = await this.payment.findByPk(paymentId);
    return updatePayment;
  }

  public async deletePayment(paymentId: number): Promise<Payment> {
    if (isEmpty(paymentId)) throw new HttpException(400, "You're not paymentId");

    const findPayment: Payment = await this.payment.findByPk(paymentId);
    if (!findPayment) throw new HttpException(409, "You're not payment");

    await this.payment.destroy({ where: { id: paymentId } });

    return findPayment;
  }
}

export default PaymentService;
