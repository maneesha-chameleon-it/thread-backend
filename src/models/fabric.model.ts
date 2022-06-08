import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Fabric } from '@interfaces/fabric.interface';

export type FabricCreationAttributes = Optional<Fabric, 'id' | 'product_builder_id' | 'name' | 'color' 
| 'price' | 'category' | 'milled_country_name' | 'composition'
| 'cleaning'| 'small_curtains'| 'medium_curtains'| 'large_curtains' | 'fabric_type'>;

export class FabricModel extends Model<Fabric, FabricCreationAttributes> implements Fabric {
  public id: number;
  public product_builder_id: number;
  public name: string;
  public color: string;
  public price: number;
  public category: string;
  public milled_country_name: string;
  public composition: string;
  public cleaning: string;
  public small_curtains: number;
  public medium_curtains: number;
  public large_curtains: number;
  public fabric_type: string;
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
      product_builder_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      color: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      price: {
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
      fabric_type: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

    },
    {
      tableName: 'fabric',
      sequelize,
    },
  );

  return FabricModel;
}
