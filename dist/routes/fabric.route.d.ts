import FabricController from '@controllers/fabric.controller';
import { Routes } from '@interfaces/routes.interface';
declare class FabricRoute implements Routes {
    path: string;
    adminPath: string;
    router: import("express-serve-static-core").Router;
    fabricController: FabricController;
    constructor();
    private initializeRoutes;
}
export default FabricRoute;
