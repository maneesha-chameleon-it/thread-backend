import OrderController from '@controllers/order.controller';
import { Routes } from '@interfaces/routes.interface';
declare class OrderRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    orderController: OrderController;
    constructor();
    private initializeRoutes;
}
export default OrderRoute;
