import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';

export type UserCreationAttributes = Optional<User, 'id' | 'email' | 'password' | 'name' | 'role' | 'phoneNumber' | 'address' | 'emailStatus'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public id: number;
  public email: string;
  public password: string;
  public name: string;
  public role: string;
  public phoneNumber: string;
  public address: string;
  public emailStatus: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      emailStatus: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
