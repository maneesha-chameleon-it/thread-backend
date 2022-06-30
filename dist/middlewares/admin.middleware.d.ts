import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@interfaces/auth.interface';
declare const adminMiddleware: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
export default adminMiddleware;
