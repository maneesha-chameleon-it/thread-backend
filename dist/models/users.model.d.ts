import { Sequelize, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';
export declare type UserCreationAttributes = Optional<User, 'id' | 'email' | 'password' | 'name' | 'role' | 'phoneNumber' | 'address' | 'emailStatus'>;
export declare class UserModel extends Model<User, UserCreationAttributes> implements User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    phoneNumber: number;
    address: string;
    emailStatus: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof UserModel;
