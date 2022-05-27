import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { requestJson } from '@middlewares/request';

class UsersRoute implements Routes {
  public path = '/secure/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,requestJson(this.usersController.getUsers, 'GET_USERS'));
    this.router.get(`${this.path}/:id(\\d+)`, requestJson(this.usersController.getUserById, 'GET_USER'));
    this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), requestJson(this.usersController.createUser, 'CREATE_USER'));
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), requestJson(this.usersController.updateUser, 'UPDATE_USER'));
    this.router.delete(`${this.path}/:id(\\d+)`, requestJson(this.usersController.deleteUser,'DELETE_USER'));
  }
}

export default UsersRoute;
