import { UserController } from './users.controller';
import { RouterBase } from '../../interfaces';
import { UserMiddleware } from './user.middleware';
import { UsersDtosCollection } from './dto/dtos.collection';

export class UserRoutes extends RouterBase<
   UserController,
   UserMiddleware,
   typeof UsersDtosCollection
> {
   constructor() {
      super(UserController, UserMiddleware, UsersDtosCollection);
      this.routes();
   }

   routes(): void {
      this.router
         .post('/', this.controller.create)
         .put('/:id', this.controller.update)
         .delete('/:id', this.controller.delete)
         .get('/', this.controller.findAll)
         .get('/:id', this.controller.findOne);
   }
}
