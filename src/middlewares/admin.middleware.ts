import { NextFunction, Response } from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';
import DB from '@databases';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';

const adminMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    if (req.user.role == 'ADMIN') {
      next();
    } else {
      next(new HttpException(401, 'Admin only'));
    }
  } catch (error) {
    next(new HttpException(401, 'Admin only'));
  }
};

export default adminMiddleware;
