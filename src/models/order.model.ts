import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Order } from '@interfaces/order.interface';

export type OrderCreationAttributes = Optional<Order, 'id' | 'product_builder_id' | 'user_id' 
| 'count' | 'status' | 'shipping_address' | 'mobile_number' | 'payment_status'>;

export class OrderModel extends Model<Order, OrderCreationAttributes> implements Order {
  public id: number;
  public product_builder_id: number;
  public user_id: number;
  public count: number;
  public status: string;
  public shipping_address: string;
  public mobile_number: number;
  public payment_status: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof OrderModel {
  OrderModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      product_builder_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      shipping_address: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      mobile_number: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      payment_status: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

    },
    {
      tableName: 'order',
      sequelize,
    },
  );

  return OrderModel;
}