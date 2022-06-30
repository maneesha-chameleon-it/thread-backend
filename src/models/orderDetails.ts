import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { OrderDetails } from '@interfaces/orderDetails.interface';

export type OrderDetailsCreationAttributes = Optional<OrderDetails, 'id' | 'order_id' | 'name' 
| 'addressOne' | 'addressTwo' | 'city' | 'postcode' | 'mobileNumber' | 'shippingOption'
| 'payment_status'>;

export class OrderDetailsModel extends Model<OrderDetails, OrderDetailsCreationAttributes> implements OrderDetails {
  public id: number;
  public order_id: number;
  public name: string;
  public addressOne: string;
  public addressTwo: string;
  public city: string;
  public postcode: string;
  public mobileNumber: number;
  public shippingOption: string;
  public payment_status: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof OrderDetailsModel {
  OrderDetailsModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      addressOne: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      addressTwo: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      postcode: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      mobileNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      shippingOption: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      payment_status: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

    },
    {
      tableName: 'orderDetails',
      sequelize,
    },
  );

  return OrderDetailsModel;
}