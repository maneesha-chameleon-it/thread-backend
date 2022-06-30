import { CreateCartDto } from '@dtos/cart.dto';
import { Cart } from '@interfaces/cart.interface';
declare class CartService {
    cart: typeof import("../models/cart.model").CartModel;
    findAllCart(user: any): Promise<Cart[]>;
    addToCart(cartData: CreateCartDto, user: any): Promise<Cart>;
    updateCart(cartId: number, cartData: CreateCartDto): Promise<Cart>;
    deleteCart(cartId: number): Promise<Cart>;
}
export default CartService;
