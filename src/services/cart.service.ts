import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreateCartDto } from '@dtos/cart.dto';
import { HttpException } from '@exceptions/HttpException';
import { Cart } from '@interfaces/cart.interface';
import { isEmpty } from '@utils/util';

class CartService {
  public cart = DB.Cart;

  public async findAllCart(): Promise<Cart[]> {
    const allCart: Cart[] = await this.cart.findAll();
    return allCart;
  }
  public async addToCart(cartData: CreateCartDto): Promise<Cart> {
    if (isEmpty(cartData)) throw new HttpException(400, "You're not cartData");
    const createCartData: Cart = await this.cart.create({ ...cartData, });
    return createCartData;
  }

  public async updateCart(cartId: number, cartData: CreateCartDto): Promise<Cart> {
    if (isEmpty(cartData)) throw new HttpException(400, "You're not cartData");

    const findCart: Cart = await this.cart.findByPk(cartId);
    if (!findCart) throw new HttpException(409, "You're not cart");

    await this.cart.update({ ...cartData, }, { where: { id: cartId } });

    const updateCart: Cart = await this.cart.findByPk(cartId);
    return updateCart;
  }

  public async deleteCart(cartId: number): Promise<Cart> {
    if (isEmpty(cartId)) throw new HttpException(400, "You're not cartId");

    const findCart: Cart = await this.cart.findByPk(cartId);
    if (!findCart) throw new HttpException(409, "You're not cart");

    await this.cart.destroy({ where: { id: cartId } });

    return findCart;
  }
}

export default CartService;
