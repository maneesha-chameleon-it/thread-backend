import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreateOrderDto } from '@dtos/order.dto';
import { HttpException } from '@exceptions/HttpException';
import { Order } from '@interfaces/order.interface';
import { isEmpty } from '@utils/util';
import { QueryTypes } from 'sequelize';
class OrderService {
  public order = DB.Order;
  public cart = DB.Cart;
  public async findAllOrder(user): Promise<Order[]> {
    const allOrder: Order[] = await this.order.findAll({ where: { user_id: user.id } });
    return allOrder;
  }

  public async findOrderById(orderId: number): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, "You're not orderId");

    const findOrder: Order = await this.order.findByPk(orderId);
    if (!findOrder) throw new HttpException(409, "You're not order");

    return findOrder;
  }

  public async placeOrder(orderData: CreateOrderDto, user): Promise<Order> {
    if (isEmpty(orderData)) throw new HttpException(400, "You're not orderData");
    const createOrderData: Order = await this.order.create({ ...orderData, });
    return createOrderData;

    // try {
    //   const allCart: any[] = await DB.sequelize.query(`select user_id,product_builder_id,count from cart C where C.user_id=${user.id} `, {
    //     type: QueryTypes.SELECT,
    //   });
    //   if (!allCart || !allCart.length) {
    //     throw new HttpException(400, 'Cart is empty');
    //   }
    //   const createOrderData: Order[] = await this.order.bulkCreate(allCart);
    //   await this.cart.destroy({ where: { user_id: user.id } });
    //   return createOrderData;
    // } catch (e) {
    //   console.log(e);
    //   throw new HttpException(400, 'Failed to place order');
    // }
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
