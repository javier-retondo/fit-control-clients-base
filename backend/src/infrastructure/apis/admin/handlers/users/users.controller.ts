import { Request, Response } from 'express';
import { IController } from '../../interfaces/controller.interfaz';
import { Responses } from '../../../../utils';

export class UserController implements IController {
   constructor(private responses: Responses = new Responses()) {}
   async create(req: Request, res: Response): Promise<void> {
      this.responses.success({ req, res, status: 201, data: { message: 'Usuario creado' } });
   }

   async update(req: Request, res: Response): Promise<void> {
      this.responses.success({ req, res, status: 200, data: { message: 'Usuario actualizado' } });
   }

   async delete(req: Request, res: Response): Promise<void> {
      this.responses.success({ req, res, status: 200, data: { message: 'Usuario eliminado' } });
   }

   async findAll(req: Request, res: Response): Promise<void> {
      this.responses.success({ req, res, status: 200, data: { message: 'Lista de usuarios' } });
   }

   async findOne(req: Request, res: Response): Promise<void> {
      this.responses.success({ req, res, status: 200, data: { message: 'Usuario encontrado' } });
   }
}
