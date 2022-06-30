import { NextFunction, Request, Response } from 'express';
import { User } from '@interfaces/users.interface';
import { RequestWithUser } from '@interfaces/auth.interface';
import AuthService from '@services/auth.service';
declare class AuthController {
    authService: AuthService;
    signUp: (req: Request, res: Response, next: NextFunction) => Promise<User>;
    logIn: (req: Request, res: Response, next: NextFunction) => Promise<User>;
    logOut: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<User>;
}
export default AuthController;
