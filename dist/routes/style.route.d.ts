import StyleController from '@controllers/style.controller';
import { Routes } from '@interfaces/routes.interface';
declare class StyleRoute implements Routes {
    path: string;
    adminPath: string;
    router: import("express-serve-static-core").Router;
    styleController: StyleController;
    constructor();
    private initializeRoutes;
}
export default StyleRoute;
