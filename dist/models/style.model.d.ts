import { Sequelize, Model, Optional } from 'sequelize';
import { Style } from '@interfaces/style.interface';
export declare type StyleCreationAttributes = Optional<Style, 'id' | 'style_type' | 'height' | 'width' | 'price'>;
export declare class StyleModel extends Model<Style, StyleCreationAttributes> implements Style {
    id: number;
    style_type: string;
    height: number;
    width: number;
    price: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof StyleModel;
