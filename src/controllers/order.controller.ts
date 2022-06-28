import { NextFunction, Request, Response } from 'express';
import { CreateOrderDto } from '@dtos/order.dto';
import { Order } from '@interfaces/order.interface';
import orderService from '@services/order.service';
import { RequestWithUser } from '@/interfaces/auth.interface';

class OrderController {
  public orderService = new orderService();

  public  getOrder = async(req: RequestWithUser, res: Response, next: NextFunction)  => {
      const findAllOrderData: Order[] = await this.orderService.findAllOrder(req.user);
      return findAllOrderData
  };

  public getOrderById = async (req: Request, res: Response, next: NextFunction) => {
      const orderId = Number(req.params.id);
      const findOneOrderData: Order = await this.orderService.findOrderById(orderId);
      return findOneOrderData;
  };

  public placeOrder = async (req: RequestWithUser, res: Response, next: NextFunction) => {
      const orderData: CreateOrderDto = req.body;
      const createOrderData: Order = await this.orderService.placeOrder(orderData, req.user);
      return createOrderData;
  };

  public updateOrder = async (req: Request, res: Response, next: NextFunction) => {
      const orderId = Number(req.params.id);
      const orderData: CreateOrderDto = req.body;
      const updateOrderData: Order = await this.orderService.updateOrder(orderId, orderData);
      return updateOrderData;
  };

  public deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
      const orderId = Number(req.params.id);
      const deleteOrderData: Order = await this.orderService.deleteOrder(orderId);
      return deleteOrderData;
  };
}

export default OrderController;
