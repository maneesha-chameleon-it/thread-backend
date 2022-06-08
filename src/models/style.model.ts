import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Style } from '@interfaces/style.interface';

export type StyleCreationAttributes = Optional<Style, 'id' | 'fabric_type' | 'height' | 'width' 
| 'price' >;

export class StyleModel extends Model<Style, StyleCreationAttributes> implements Style {
  public id: number;
  public fabric_type: string;
  public height: number;
  public width: number;
  public price: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof StyleModel {
  StyleModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fabric_type: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      height: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      width: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

    },
    {
      tableName: 'style',
      sequelize,
    },
  );

  return StyleModel;
}