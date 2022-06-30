import { NextFunction, Request, Response } from 'express';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';
declare class UsersController {
    userService: userService;
    getUsers: (req: Request, res: Response, next: NextFunction) => Promise<User[]>;
    getUserById: (req: Request, res: Response, next: NextFunction) => Promise<User>;
    createUser: (req: Request, res: Response, next: NextFunction) => Promise<User>;
    updateUser: (req: Request, res: Response, next: NextFunction) => Promise<User>;
    deleteUser: (req: Request, res: Response, next: NextFunction) => Promise<User>;
}
export default UsersController;
