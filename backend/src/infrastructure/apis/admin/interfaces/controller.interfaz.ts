import { Request, Response } from 'express';

export interface IController {
   /**
    * Handles POST / (create)
    */
   create?(req: Request, res: Response): Promise<void>;

   /**
    * Handles GET / (list all)
    */
   list?(req: Request, res: Response): Promise<void>;

   /**
    * Handles GET /:id (get by ID)
    */
   getById?(req: Request, res: Response): Promise<void>;

   /**
    * Handles PUT /:id (update)
    */
   update?(req: Request, res: Response): Promise<void>;

   /**
    * Handles DELETE /:id (delete)
    */
   delete?(req: Request, res: Response): Promise<void>;
}
