import { Request, Response, NextFunction } from 'express';

export interface IMiddleware {
   handle?(req: Request, res: Response, next: NextFunction): void | Promise<void>;
   handleError?(err: Error, req: Request, res: Response, next: NextFunction): void | Promise<void>;
}
