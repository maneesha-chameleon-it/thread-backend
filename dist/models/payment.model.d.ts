import { Sequelize, Model, Optional } from 'sequelize';
import { Payment } from '@interfaces/payment.interface';
export declare type PaymentCreationAttributes = Optional<Payment, 'id' | 'invoice' | 'amount' | 'order_id' | 'transaction_id' | 'payment_id' | 'transaction_status'>;
export declare class PaymentModel extends Model<Payment, PaymentCreationAttributes> implements Payment {
    id: number;
    invoice: string;
    amount: number;
    order_id: number;
    transaction_id: number;
    payment_id: number;
    transaction_status: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof PaymentModel;
