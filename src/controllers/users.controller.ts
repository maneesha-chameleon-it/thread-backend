import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';

class UsersController {
  public userService = new userService();

  public  getUsers = async(req: Request, res: Response, next: NextFunction)  => {
      const findAllUsersData: User[] = await this.userService.findAllUser();
      return findAllUsersData
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
      const userId = Number(req.params.id);
      const findOneUserData: User = await this.userService.findUserById(userId);
      return findOneUserData;
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
      const userData: CreateUserDto = req.body;
      const createUserData: User = await this.userService.createUser(userData);
      return createUserData;
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
      const userId = Number(req.params.id);
      const userData: CreateUserDto = req.body;
      const updateUserData: User = await this.userService.updateUser(userId, userData);
      return updateUserData;
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
      const userId = Number(req.params.id);
      const deleteUserData: User = await this.userService.deleteUser(userId);
      return deleteUserData;
  };
}

export default UsersController;
