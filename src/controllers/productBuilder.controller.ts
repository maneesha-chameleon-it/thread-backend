import { NextFunction, Request, Response } from 'express';
import { CreateProductBuilderDto } from '@dtos/productBuilder.dto';
import { ProductBuilder } from '@interfaces/productBuilder.interface';
import productBuilderService from '@services/productBuilder.service';

class ProductBuilderController {
  public productBuilderService = new productBuilderService();

  public  getProductBuilder = async(req: Request, res: Response, next: NextFunction)  => {
      const findAllProductBuilderData: ProductBuilder[] = await this.productBuilderService.findAllProductBuilder();
      return findAllProductBuilderData
  };

  public getProductBuilderById = async (req: Request, res: Response, next: NextFunction) => {
      const productBuilderId = Number(req.params.id);
      const findOneProductBuilderData: ProductBuilder = await this.productBuilderService.findProductBuilderById(productBuilderId);
      return findOneProductBuilderData;
  };

  public createProductBuilder = async (req: Request, res: Response, next: NextFunction) => {
      const productBuilderData: CreateProductBuilderDto = req.body;
      const createProductBuilderData: ProductBuilder = await this.productBuilderService.createProductBuilder(productBuilderData);
      return createProductBuilderData;
  };

  public updateProductBuilder = async (req: Request, res: Response, next: NextFunction) => {
      const productBuilderId = Number(req.params.id);
      const productBuilderData: CreateProductBuilderDto = req.body;
      const updateProductBuilderData: ProductBuilder = await this.productBuilderService.updateProductBuilder(productBuilderId, productBuilderData);
      return updateProductBuilderData;
  };

  public deleteProductBuilder = async (req: Request, res: Response, next: NextFunction) => {
      const productBuilderId = Number(req.params.id);
      const deleteProductBuilderData: ProductBuilder = await this.productBuilderService.deleteProductBuilder(productBuilderId);
      return deleteProductBuilderData;
  };
}

export default ProductBuilderController;
