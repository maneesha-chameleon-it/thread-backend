import CartController from '@controllers/cart.controller';
import { Routes } from '@interfaces/routes.interface';
declare class CartRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    cartController: CartController;
    constructor();
    private initializeRoutes;
}
export default CartRoute;
