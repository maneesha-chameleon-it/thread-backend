import { NextFunction, Request, Response } from 'express';
import { Cart } from '@interfaces/cart.interface';
import cartService from '@services/cart.service';
import { RequestWithUser } from '@/interfaces/auth.interface';
declare class CartController {
    cartService: cartService;
    getCart: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<Cart[]>;
    addToCart: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<Cart>;
    updateCart: (req: Request, res: Response, next: NextFunction) => Promise<Cart>;
    deleteCart: (req: Request, res: Response, next: NextFunction) => Promise<Cart>;
}
export default CartController;
