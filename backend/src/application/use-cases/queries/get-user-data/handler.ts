import { UserRepository } from '../../../../domain';
import { UseCaseQuery } from '../../../interfaces';
import { GetUserDataResponse } from './responsedto.';

export class GetUserDataHandler implements UseCaseQuery<string, GetUserDataResponse> {
   constructor(private readonly userRepository: UserRepository) {}
   async execute(userId: string): Promise<GetUserDataResponse> {
      const user = await this.userRepository.findById(userId);
      if (!user) {
         throw new Error('User not found');
      }
      return user.get();
   }
}
