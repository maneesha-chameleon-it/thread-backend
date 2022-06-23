import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { ProductBuilder } from '@interfaces/productBuilder.interface';

export type ProductBuilderCreationAttributes = Optional<ProductBuilder, 'id' | 'fabric_id' | 'measuring_for' | 'type_of_room' 
| 'kind_of_room' | 'window_name' | 'pole_or_track_status' | 'width'
| 'height'| 'panel' | 'curtain_close' | 'style'| 'lining' | 'pole_and_track' 
| 'poleMaterial' | 'poleDiameter' | 'polEnd' | 'polFinish' | 'trackEnd' | 'trackFinish' | 'pooling' |   'total_price' >;

export class ProductBuilderModel extends Model<ProductBuilder, ProductBuilderCreationAttributes> implements ProductBuilder {
  public id: number;
  public fabric_id: number;
  public measuring_for: string;
  public type_of_room: string;
  public kind_of_room: string;
  public window_name: string;
  public pole_or_track_status: string;
  public width: number;
  public height: number;
  public panel: string;
  public curtain_close: string;
  public style: string;
  public lining: string;
  public pole_and_track: string;
  public poleMaterial: string;
  public poleDiameter: number;
  public polEnd: string;
  public polFinish: string;
  public trackEnd: string;
  public trackFinish: string;
  public pooling: string;
  public total_price: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof ProductBuilderModel {
  ProductBuilderModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fabric_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      measuring_for: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      type_of_room: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      kind_of_room: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      window_name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      pole_or_track_status: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      width: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      height: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      panel: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      curtain_close: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      style: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      lining: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      pole_and_track: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      poleMaterial: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      poleDiameter: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      polEnd: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      polFinish: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      trackEnd: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      trackFinish: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      pooling: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      total_price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

    },
    {
      tableName: 'productBuilder',
      sequelize,
    },
  );

  return ProductBuilderModel;
}