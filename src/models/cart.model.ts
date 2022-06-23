import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Cart } from '@interfaces/cart.interface';

export type CartCreationAttributes = Optional<Cart, 'id' | 'product_builder_id' | 'user_id' | 'count' >;

export class CartModel extends Model<Cart, CartCreationAttributes> implements Cart {
  public id: number;
  public product_builder_id: number;
  public user_id: number;
  public count: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CartModel {
  CartModel.init(
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

    },
    {
      tableName: 'cart',
      sequelize,
    },
  );

  return CartModel;
}