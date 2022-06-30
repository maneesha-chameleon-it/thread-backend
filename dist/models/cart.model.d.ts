import { Sequelize, Model, Optional } from 'sequelize';
import { Cart } from '@interfaces/cart.interface';
export declare type CartCreationAttributes = Optional<Cart, 'id' | 'product_builder_id' | 'user_id' | 'count'>;
export declare class CartModel extends Model<Cart, CartCreationAttributes> implements Cart {
    id: number;
    product_builder_id: number;
    user_id: number;
    count: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof CartModel;
