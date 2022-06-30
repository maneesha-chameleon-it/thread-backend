import ProductBuilderController from '@controllers/productBuilder.controller';
import { Routes } from '@interfaces/routes.interface';
declare class ProductBuilderRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    productBuilderController: ProductBuilderController;
    constructor();
    private initializeRoutes;
}
export default ProductBuilderRoute;
