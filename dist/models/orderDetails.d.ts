import { Sequelize, Model, Optional } from 'sequelize';
import { OrderDetails } from '@interfaces/orderDetails.interface';
export declare type OrderDetailsCreationAttributes = Optional<OrderDetails, 'id' | 'order_id' | 'name' | 'addressOne' | 'addressTwo' | 'city' | 'postcode' | 'mobileNumber' | 'shippingOption' | 'payment_status'>;
export declare class OrderDetailsModel extends Model<OrderDetails, OrderDetailsCreationAttributes> implements OrderDetails {
    id: number;
    order_id: number;
    name: string;
    addressOne: string;
    addressTwo: string;
    city: string;
    postcode: string;
    mobileNumber: number;
    shippingOption: string;
    payment_status: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof OrderDetailsModel;
