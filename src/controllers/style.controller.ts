import { NextFunction, Request, Response } from 'express';
import { CreateStyleDto } from '@dtos/style.dto';
import { Style } from '@interfaces/style.interface';
import styleService from '@services/style.service';

class StyleController {
  public styleService = new styleService();

  public  getStyle = async(req: Request, res: Response, next: NextFunction)  => {
      const findAllStyleData: Style[] = await this.styleService.findAllStyle();
      return findAllStyleData
  };

  public getStyleById = async (req: Request, res: Response, next: NextFunction) => {
      const styleId = Number(req.params.id);
      const findOneStyleData: Style = await this.styleService.findStyleById(styleId);
      return findOneStyleData;
  };

  public createStyle = async (req: Request, res: Response, next: NextFunction) => {
      const styleData: CreateStyleDto = req.body;
      const createStyleData: Style = await this.styleService.createStyle(styleData);
      return createStyleData;
  };

  public updateStyle = async (req: Request, res: Response, next: NextFunction) => {
      const styleId = Number(req.params.id);
      const styleData: CreateStyleDto = req.body;
      const updateStyleData: Style = await this.styleService.updateStyle(styleId, styleData);
      return updateStyleData;
  };

  public deleteStyle = async (req: Request, res: Response, next: NextFunction) => {
      const styleId = Number(req.params.id);
      const deleteStyleData: Style = await this.styleService.deleteStyle(styleId);
      return deleteStyleData;
  };
}

export default StyleController;
