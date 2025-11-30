import { IUserRepository } from '../../../../domain';
import { PasswordHashService, UseCaseCommandInterface } from '../../../interfaces';
import { TokenService } from '../../../interfaces/token.service.interface';
import { UserLoginRequest } from './request.dto';
import { UserLoginResponse } from './response.dto';

export class LoginHandler implements UseCaseCommandInterface<UserLoginRequest, UserLoginResponse> {
   constructor(
      private readonly userRepository: IUserRepository,
      private readonly passwordHashService: PasswordHashService,
      private readonly tokenService: TokenService,
   ) {}

   async execute(request: UserLoginRequest): Promise<UserLoginResponse> {
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
