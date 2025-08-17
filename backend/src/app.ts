import express, { Application } from 'express';
import routes from './infrastructure/api/routes';
import { ErrorHandler } from './infrastructure/api/middlewares/ErrorHandler';
import dotenv from 'dotenv';

export class App {
   public app: Application;

   constructor() {
      dotenv.config();
      this.app = express();
      this.middlewares();
      this.routes();
      this.handleErrors();
   }

   private middlewares(): void {
      this.app.use(express.json());
   }

   private routes(): void {
      this.app.use('/api/v1', routes);
   }

   private handleErrors(): void {
      this.app.use(new ErrorHandler().handle);
   }

   public listen(): void {
      const port = process.env.PORT || 3000;
      this.app.listen(port, () => {
         console.log(`Servidor corriendo en puerto ${port}`);
      });
   }
}
