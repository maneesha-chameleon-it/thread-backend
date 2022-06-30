import { CreateOrderDto } from '@dtos/order.dto';
import { Order } from '@interfaces/order.interface';
declare class OrderService {
    order: typeof import("../models/order.model").OrderModel;
    cart: typeof import("../models/cart.model").CartModel;
    findAllOrder(user: any): Promise<Order[]>;
    findOrderById(orderId: number): Promise<Order>;
    placeOrder(user: any): Promise<Order[]>;
    updateOrder(orderId: number, orderData: CreateOrderDto): Promise<Order>;
    deleteOrder(orderId: number): Promise<Order>;
}
export default OrderService;
