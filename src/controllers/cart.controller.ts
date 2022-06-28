import { NextFunction, Request, Response } from 'express';
import { CreateCartDto } from '@dtos/cart.dto';
import { Cart } from '@interfaces/cart.interface';
import cartService from '@services/cart.service';
import { RequestWithUser } from '@/interfaces/auth.interface';

class CartController {
  public cartService = new cartService();

  public  getCart = async(req: RequestWithUser, res: Response, next: NextFunction)  => {
      const findAllCartData: Cart[] = await this.cartService.findAllCart(req.user);
      return findAllCartData
  };

  public addToCart = async (req: RequestWithUser, res: Response, next: NextFunction) => {
      const cartData: CreateCartDto = req.body;
      const createCartData: Cart = await this.cartService.addToCart(cartData, req.user);
      return createCartData;
  };

  public updateCart = async (req: Request, res: Response, next: NextFunction) => {
      const cartId = Number(req.params.id);
      const cartData: CreateCartDto = req.body;
      const updateCartData: Cart = await this.cartService.updateCart(cartId, cartData);
      return updateCartData;
  };

  public deleteCart = async (req: Request, res: Response, next: NextFunction) => {
      const cartId = Number(req.params.id);
      const deleteCartData: Cart = await this.cartService.deleteCart(cartId);
      return deleteCartData;
  };
}

export default CartController;
