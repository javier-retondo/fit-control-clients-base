import express, {
   Application,
   ErrorRequestHandler,
   NextFunction,
   Request,
   Response,
} from 'express';
import dotenv from 'dotenv';
import { error } from 'console';
import { join } from 'path';

const staticFolderPath = join(__dirname, '..', 'public');

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
      this.app.use('/api/v1', (req, res) => {
         res.send('API v1');
      });
   }

   private handleErrors(): void {
      this.app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) =>
         error({ req, res, body: err.toString(), status: 500, next }),
      );
      this.app.use('*', (req, res) => {
         res.status(404).sendFile(join(staticFolderPath, 'pages', 'error404.html'));
      });
   }

   public listen(): void {
      const port = process.env.PORT || 3000;
      this.app.listen(port, () => {
         console.log(`Servidor corriendo en puerto ${port}`);
      });
   }
}
