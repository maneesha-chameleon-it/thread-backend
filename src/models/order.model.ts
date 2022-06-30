import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Order } from '@interfaces/order.interface';

export type OrderCreationAttributes = Optional<Order, 'id' | 'product_builder_id' | 'user_id' 
| 'count' | 'order_status'>;

export class OrderModel extends Model<Order, OrderCreationAttributes> implements Order {
  public id: number;
  public product_builder_id: number;
  public user_id: number;
  public count: number;
  public order_status: string;
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
      order_status: {
        allowNull: false,
        type: DataTypes.STRING(45),
        defaultValue: 'PENDING',
      },

    },
    {
      tableName: 'order',
      sequelize,
    },
  );

  return OrderModel;
}