import { NextFunction, Request, Response } from 'express';
import { ProductBuilder } from '@interfaces/productBuilder.interface';
import productBuilderService from '@services/productBuilder.service';
declare class ProductBuilderController {
    productBuilderService: productBuilderService;
    getProductBuilder: (req: Request, res: Response, next: NextFunction) => Promise<ProductBuilder[]>;
    getProductBuilderById: (req: Request, res: Response, next: NextFunction) => Promise<ProductBuilder>;
    createProductBuilder: (req: Request, res: Response, next: NextFunction) => Promise<ProductBuilder>;
    updateProductBuilder: (req: Request, res: Response, next: NextFunction) => Promise<ProductBuilder>;
    deleteProductBuilder: (req: Request, res: Response, next: NextFunction) => Promise<ProductBuilder>;
}
export default ProductBuilderController;
