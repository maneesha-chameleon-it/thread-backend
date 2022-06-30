import { CreateProductBuilderDto } from '@dtos/productBuilder.dto';
import { ProductBuilder } from '@interfaces/productBuilder.interface';
declare class ProductBuilderService {
    productBuilder: typeof import("../models/productBuilder.model").ProductBuilderModel;
    findAllProductBuilder(): Promise<ProductBuilder[]>;
    findProductBuilderById(productBuilderId: number): Promise<ProductBuilder>;
    createProductBuilder(productBuilderData: CreateProductBuilderDto): Promise<ProductBuilder>;
    updateProductBuilder(productBuilderId: number, productBuilderData: CreateProductBuilderDto): Promise<ProductBuilder>;
    deleteProductBuilder(productBuilderId: number): Promise<ProductBuilder>;
}
export default ProductBuilderService;
