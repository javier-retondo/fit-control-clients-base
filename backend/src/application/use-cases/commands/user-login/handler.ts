import { UserDto, UserRepository } from '../../../../domain';
import { PasswordHashService, UseCaseCommandInterface } from '../../../interfaces';
import { TokenService } from '../../../interfaces/token.service.interface';
import { UserLoginRequest } from './request.dto';

export class LoginHandler
   implements
      UseCaseCommandInterface<
         UserLoginRequest,
         {
            token: string;
            user: UserDto;
         }
      >
{
   constructor(
      private readonly userRepository: UserRepository,
      private readonly passwordHashService: PasswordHashService,
      private readonly tokenService: TokenService,
   ) {}

   async execute(request: UserLoginRequest): Promise<{
      token: string;
      user: UserDto;
   }> {
      const { email, user, password } = request;

      const existingUser =
         (email &&
            (await this.userRepository.findAll({
               where: { email },
               pagination: { limit: 1, page: 1 },
            }))) ||
         (user &&
            (await this.userRepository.findAll({
               where: { user },
               pagination: { limit: 1, page: 1 },
            })));

      if (!existingUser) {
         throw new Error('User not found');
      }

      const isPasswordValid = await this.passwordHashService.compare(
         password,
         existingUser.data[0].getHashedPassword(),
      );

      if (!isPasswordValid) {
         throw new Error('Invalid password');
      }

      const token = this.tokenService.generateToken({ id: existingUser.data[0].get().id });

      return {
         token,
         user: existingUser.data[0].get(),
      };
   }
}
