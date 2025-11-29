import { Roles, User, UserDto, UserRepository } from '../../../../domain';
import {
   IdGenerator,
   INotificationService,
   IPasswordRandomGeneratorService,
   PasswordHashService,
   UseCaseCommandInterface,
} from '../../../interfaces';
import { registerPartnerRequest } from './request.dto';

export class RegisterPartnerHandler
   implements UseCaseCommandInterface<registerPartnerRequest, UserDto>
{
   constructor(
      private readonly userRepository: UserRepository,
      private readonly notificationService: INotificationService,
      private readonly idGenerator: IdGenerator,
      private readonly passwordHashService: PasswordHashService,
      private readonly passwordGenerator: IPasswordRandomGeneratorService,
   ) {}

   async execute(request: registerPartnerRequest): Promise<UserDto> {
      const { name, lastName, email, user } = request;

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
         Roles.PARTNER,
      );

      const createdUser = await this.userRepository.save(newUser);
      await this.notificationService.sendTemporaryPasswordNotification(
         createdUser.get(),
         createdUser.getTemporaryPassword(),
         `Bienvenido a FitControl`,
         `Hola ${createdUser.get().name}, su usuario ha sido creado exitosamente. Su contraseña temporal es: ${createdUser.getTemporaryPassword()}. Por favor, cambie su contraseña en el primer inicio de sesión.`,
      );

      return createdUser.get();
   }
}
