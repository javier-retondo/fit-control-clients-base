import { UserDto } from '../../../../domain';

export interface UserLoginResponse {
   token: string;
   user: UserDto;
}
