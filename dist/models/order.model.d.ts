import { Sequelize, Model, Optional } from 'sequelize';
import { Order } from '@interfaces/order.interface';
export declare type OrderCreationAttributes = Optional<Order, 'id' | 'product_builder_id' | 'user_id' | 'count' | 'order_status'>;
export declare class OrderModel extends Model<Order, OrderCreationAttributes> implements Order {
    id: number;
    product_builder_id: number;
    user_id: number;
    count: number;
    order_status: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof OrderModel;
