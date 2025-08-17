import { ErrorHandler } from '../../middlewares';

export class UserMiddleware {
   constructor(public errorHandler: ErrorHandler = new ErrorHandler()) {}
}
