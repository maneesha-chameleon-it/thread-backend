import { NextFunction, Request, Response } from 'express';
import { Style } from '@interfaces/style.interface';
import styleService from '@services/style.service';
declare class StyleController {
    styleService: styleService;
    getStyle: (req: Request, res: Response, next: NextFunction) => Promise<Style[]>;
    getStyleById: (req: Request, res: Response, next: NextFunction) => Promise<Style>;
    createStyle: (req: Request, res: Response, next: NextFunction) => Promise<Style>;
    updateStyle: (req: Request, res: Response, next: NextFunction) => Promise<Style>;
    deleteStyle: (req: Request, res: Response, next: NextFunction) => Promise<Style>;
}
export default StyleController;
