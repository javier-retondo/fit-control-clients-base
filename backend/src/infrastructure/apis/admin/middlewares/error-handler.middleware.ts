import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from '../interfaces/middleware.interface';

export class ErrorHandler implements IMiddleware {
   handleError(err: Error, req: Request, res: Response, next: NextFunction): void {
      console.error(err);
      res.status(500).json({ message: err.message || 'Error interno' });
   }
}
