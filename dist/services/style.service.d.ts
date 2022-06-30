import { CreateStyleDto } from '@dtos/style.dto';
import { Style } from '@interfaces/style.interface';
declare class StyleService {
    style: typeof import("../models/style.model").StyleModel;
    findAllStyle(): Promise<Style[]>;
    findStyleById(styleId: number): Promise<Style>;
    createStyle(styleData: CreateStyleDto): Promise<Style>;
    updateStyle(styleId: number, styleData: CreateStyleDto): Promise<Style>;
    deleteStyle(styleId: number): Promise<Style>;
}
export default StyleService;
