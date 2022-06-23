import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreateOrderDto } from '@dtos/order.dto';
import { HttpException } from '@exceptions/HttpException';
import { Order } from '@interfaces/order.interface';
import { isEmpty } from '@utils/util';

class OrderService {
  public order = DB.Order;

  public async findAllOrder(): Promise<Order[]> {
    const allOrder: Order[] = await this.order.findAll();
    return allOrder;
  }

  public async findOrderById(orderId: number): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, "You're not orderId");

    const findOrder: Order = await this.order.findByPk(orderId);
    if (!findOrder) throw new HttpException(409, "You're not order");

    return findOrder;
  }

  public async placeOrder(orderData: CreateOrderDto): Promise<Order> {
    if (isEmpty(orderData)) throw new HttpException(400, "You're not orderData");
    const createOrderData: Order = await this.order.create({ ...orderData, });
    return createOrderData;
  }

  public async updateOrder(orderId: number, orderData: CreateOrderDto): Promise<Order> {
    if (isEmpty(orderData)) throw new HttpException(400, "You're not orderData");

    const findOrder: Order = await this.order.findByPk(orderId);
    if (!findOrder) throw new HttpException(409, "You're not order");

    await this.order.update({ ...orderData, }, { where: { id: orderId } });

    const updateOrder: Order = await this.order.findByPk(orderId);
    return updateOrder;
  }

  public async deleteOrder(orderId: number): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, "You're not orderId");

    const findOrder: Order = await this.order.findByPk(orderId);
    if (!findOrder) throw new HttpException(409, "You're not order");

    await this.order.destroy({ where: { id: orderId } });

    return findOrder;
  }
}

export default OrderService;
