import { Roles } from '../../../../domain';

export interface CreateUserRequest {
   name: string;
   lastName: string;
   email: string;
   user: string;
   role: Roles;
}
