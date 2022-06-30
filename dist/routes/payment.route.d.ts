import PaymentController from '@controllers/payment.controller';
import { Routes } from '@interfaces/routes.interface';
declare class PaymentRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    paymentController: PaymentController;
    constructor();
    private initializeRoutes;
}
export default PaymentRoute;
