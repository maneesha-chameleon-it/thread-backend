import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreateProductBuilderDto } from '@dtos/productBuilder.dto';
import { HttpException } from '@exceptions/HttpException';
import { ProductBuilder } from '@interfaces/productBuilder.interface';
import { isEmpty } from '@utils/util';

class ProductBuilderService {
  public productBuilder = DB.ProductBuilder;

  public async findAllProductBuilder(): Promise<ProductBuilder[]> {
    const allProductBuilder: ProductBuilder[] = await this.productBuilder.findAll();
    return allProductBuilder;
  }

  public async findProductBuilderById(productBuilderId: number): Promise<ProductBuilder> {
    if (isEmpty(productBuilderId)) throw new HttpException(400, "You're not productBuilderId");

    const findProductBuilder: ProductBuilder = await this.productBuilder.findByPk(productBuilderId);
    if (!findProductBuilder) throw new HttpException(409, "You're not productBuilder");

    return findProductBuilder;
  }

  public async createProductBuilder(productBuilderData: CreateProductBuilderDto): Promise<ProductBuilder> {
    if (isEmpty(productBuilderData)) throw new HttpException(400, "You're not productBuilderData");
    const createProductBuilderData: ProductBuilder = await this.productBuilder.create({ ...productBuilderData, });
    return createProductBuilderData;
  }

  public async updateProductBuilder(productBuilderId: number, productBuilderData: CreateProductBuilderDto): Promise<ProductBuilder> {
    if (isEmpty(productBuilderData)) throw new HttpException(400, "You're not productBuilderData");

    const findProductBuilder: ProductBuilder = await this.productBuilder.findByPk(productBuilderId);
    if (!findProductBuilder) throw new HttpException(409, "You're not productBuilder");

    await this.productBuilder.update({ ...productBuilderData, }, { where: { id: productBuilderId } });

    const updateProductBuilder: ProductBuilder = await this.productBuilder.findByPk(productBuilderId);
    return updateProductBuilder;
  }

  public async deleteProductBuilder(productBuilderId: number): Promise<ProductBuilder> {
    if (isEmpty(productBuilderId)) throw new HttpException(400, "You're not productBuilderId");

    const findProductBuilder: ProductBuilder = await this.productBuilder.findByPk(productBuilderId);
    if (!findProductBuilder) throw new HttpException(409, "You're not productBuilder");

    await this.productBuilder.destroy({ where: { id: productBuilderId } });

    return findProductBuilder;
  }
}

export default ProductBuilderService;
