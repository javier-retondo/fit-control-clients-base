import { Request, Response } from 'express';
export interface IHttpResponses {
   success<T extends object | Array<object>>(props: {
      req: Request;
      res: Response;
      status?: number;
      data?: T;
      pagination?: { page: number; limit: number; total: number };
   }): void;
   error(props: { req: Request; res: Response; status?: number; data?: any }): Promise<void>;
   file(props: {
      req: Request;
      res: Response;
      filePath: string;
      contentType: string;
      fileName: string;
      data?: object;
   }): void;
}
