import { Router } from 'express';

export abstract class RouterBase<T, U, V> {
   public router: Router;
   public controller: T;
   public middleware: U;
   public dtosCollection: V;
   constructor(Controller: new () => T, Middleware: new () => U, DtosCollection: V) {
      this.router = Router();
      this.controller = new Controller();
      this.middleware = new Middleware();
      this.dtosCollection = DtosCollection;
      this.routes();
   }
   routes() {}
}
