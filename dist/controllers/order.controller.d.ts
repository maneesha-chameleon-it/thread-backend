import { NextFunction, Request, Response } from 'express';
import { Order } from '@interfaces/order.interface';
import orderService from '@services/order.service';
import { RequestWithUser } from '@/interfaces/auth.interface';
declare class OrderController {
    orderService: orderService;
    getOrder: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<Order[]>;
    getOrderById: (req: Request, res: Response, next: NextFunction) => Promise<Order>;
    placeOrder: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<Order>;
    updateOrder: (req: Request, res: Response, next: NextFunction) => Promise<Order>;
    deleteOrder: (req: Request, res: Response, next: NextFunction) => Promise<Order>;
}
export default OrderController;
