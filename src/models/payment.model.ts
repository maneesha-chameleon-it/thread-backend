import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Payment } from '@interfaces/payment.interface';

export type PaymentCreationAttributes = Optional<Payment, 'id' | 'invoice' | 'amount' 
| 'order_id' | 'transaction_id' | 'payment_id' | 'transaction_status' >;

export class PaymentModel extends Model<Payment, PaymentCreationAttributes> implements Payment {
  public id: number;
  public invoice: string;
  public amount: number;
  public order_id: number;
  public transaction_id: number;
  public payment_id: number;
  public transaction_status: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof PaymentModel {
  PaymentModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      invoice: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      order_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      transaction_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      payment_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      transaction_status: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

    },
    {
      tableName: 'payment',
      sequelize,
    },
  );

  return PaymentModel;
}