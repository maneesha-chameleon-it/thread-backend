import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Fabric } from '@interfaces/fabric.interface';

export type FabricCreationAttributes = Optional<Fabric, 'id' | 'name' | 'fabric_type' | 'starting_price' | 'color' 
| 'material_type' | 'price_per_meter' | 'category' | 'milled_country_name' | 'composition'
| 'cleaning'| 'small_curtains'| 'medium_curtains'| 'large_curtains' | 'image_small' | 'image_big' >;

export class FabricModel extends Model<Fabric, FabricCreationAttributes> implements Fabric {
  public id: number;
  public name: string;
  public fabric_type: string;
  public starting_price: number;
  public color: string;
  public material_type: string;
  public price_per_meter: number;
  public category: string;
  public milled_country_name: string;
  public composition: string;
  public cleaning: string;
  public small_curtains: number;
  public medium_curtains: number;
  public large_curtains: number;
  public image_small: string;
  public image_big:string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof FabricModel {
  FabricModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      fabric_type: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      starting_price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      color: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      material_type: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      price_per_meter: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      milled_country_name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      composition: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      cleaning: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      small_curtains: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      medium_curtains: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      large_curtains: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image_small: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      image_big: {
        allowNull: false,
        type: DataTypes.STRING(255),
      }

    },
    {
      tableName: 'fabric',
      sequelize,
    },
  );

  return FabricModel;
}
