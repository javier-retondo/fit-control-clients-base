import { User, UserDto, IUserRepository } from '../../../../domain';
import {
   IdGenerator,
   INotificationService,
   IPasswordRandomGeneratorService,
   PasswordHashService,
   UseCaseCommandInterface,
} from '../../../interfaces';

import { CreateUserRequest } from './request.dto';

export class CreateAdminUserHandler implements UseCaseCommandInterface<CreateUserRequest, UserDto> {
   constructor(
      private readonly userRepository: IUserRepository,
      private readonly notificationService: INotificationService,
      private readonly idGenerator: IdGenerator,
      private readonly passwordHashService: PasswordHashService,
      private readonly passwordGenerator: IPasswordRandomGeneratorService,
   ) {}

   async execute(request: CreateUserRequest): Promise<UserDto> {
      const { name, lastName, email, user, role } = request;

      const newUser = User.create(
         {
            id: this.idGenerator.generate(),
            name,
            lastName,
            email,
            user,
            password: await this.passwordHashService.hash(
               this.passwordGenerator.generate(12, true, true, true, false),
            ),
            isTemporaryPassword: true,
         },
         role,
      );

      const createdUser = await this.userRepository.save(newUser);
      await this.notificationService.sendTemporaryPasswordNotification(
         createdUser.get(),
         createdUser.getTemporaryPassword(),
         `Bienvenido a FitControl`,
         `Hola ${createdUser.get().name}, su usuario ha sido creado exitosamente. Su contraseña temporal es: ${createdUser.getTemporaryPassword()}. Por favor, cambie su contraseña en el primer inicio de sesión.
         Su rol asignado es: ${role}.`,
      );

      return createdUser.get();
   }
}
