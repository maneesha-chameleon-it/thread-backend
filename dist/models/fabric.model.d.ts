import { Sequelize, Model, Optional } from 'sequelize';
import { Fabric } from '@interfaces/fabric.interface';
export declare type FabricCreationAttributes = Optional<Fabric, 'id' | 'name' | 'fabric_type' | 'starting_price' | 'color' | 'material_type' | 'price_per_meter' | 'category' | 'milled_country_name' | 'composition' | 'cleaning' | 'small_curtains' | 'medium_curtains' | 'large_curtains' | 'image_small' | 'image_big'>;
export declare class FabricModel extends Model<Fabric, FabricCreationAttributes> implements Fabric {
    id: number;
    name: string;
    fabric_type: string;
    starting_price: number;
    color: string;
    material_type: string;
    price_per_meter: number;
    category: string;
    milled_country_name: string;
    composition: string;
    cleaning: string;
    small_curtains: number;
    medium_curtains: number;
    large_curtains: number;
    image_small: string;
    image_big: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof FabricModel;
