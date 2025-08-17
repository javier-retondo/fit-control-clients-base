import { Roles } from '../../enums';

export interface UserDto {
   id?: string;
   name: string;
   lastName: string;
   email: string;
   user: string;
   password?: string;
   isTemporaryPassword?: boolean;
   role: Roles;
   rutines?: any;
   suscriptions?: any;
   medicalRecord?: any;
   workoutReservations?: any;
   workout?: any;
}
