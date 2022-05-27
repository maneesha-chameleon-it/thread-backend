import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { requestJson } from '@middlewares/request';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body'), requestJson(this.authController.signUp, 'SIGN_UP'));
    this.router.post(`${this.path}login`, validationMiddleware(CreateUserDto, 'body'), requestJson(this.authController.logIn, 'LOGIN'));
    this.router.post(`${this.path}/secure/logout`, requestJson(this.authController.logOut,'LOG_OUT'));
  }
}

export default AuthRoute;
