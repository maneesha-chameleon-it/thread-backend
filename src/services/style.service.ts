import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreateStyleDto } from '@dtos/style.dto';
import { HttpException } from '@exceptions/HttpException';
import { Style } from '@interfaces/style.interface';
import { isEmpty } from '@utils/util';

class StyleService {
  public style = DB.Style;

  public async findAllStyle(): Promise<Style[]> {
    const allStyle: Style[] = await this.style.findAll();
    return allStyle;
  }

  public async findStyleById(styleId: number): Promise<Style> {
    if (isEmpty(styleId)) throw new HttpException(400, "You're not styleId");

    const findStyle: Style = await this.style.findByPk(styleId);
    if (!findStyle) throw new HttpException(409, "You're not style");

    return findStyle;
  }

  public async createStyle(styleData: CreateStyleDto): Promise<Style> {
    if (isEmpty(styleData)) throw new HttpException(400, "You're not styleData");
    const createStyleData: Style = await this.style.create({ ...styleData, });
    return createStyleData;
  }

  public async updateStyle(styleId: number, styleData: CreateStyleDto): Promise<Style> {
    if (isEmpty(styleData)) throw new HttpException(400, "You're not styleData");

    const findStyle: Style = await this.style.findByPk(styleId);
    if (!findStyle) throw new HttpException(409, "You're not style");

    await this.style.update({ ...styleData, }, { where: { id: styleId } });

    const updateStyle: Style = await this.style.findByPk(styleId);
    return updateStyle;
  }

  public async deleteStyle(styleId: number): Promise<Style> {
    if (isEmpty(styleId)) throw new HttpException(400, "You're not styleId");

    const findStyle: Style = await this.style.findByPk(styleId);
    if (!findStyle) throw new HttpException(409, "You're not style");

    await this.style.destroy({ where: { id: styleId } });

    return findStyle;
  }
}

export default StyleService;
