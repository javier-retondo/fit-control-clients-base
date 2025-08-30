import { Roles } from '../../enums';
import { RutineDto } from '../Rutine';
import { SubscriptionDto } from '../Subscription';

export interface UserDto {
   id?: string;
   name: string;
   lastName: string;
   email: string;
   user: string;
   password?: string;
   isTemporaryPassword?: boolean;
   role: Roles;

   rutines?: RutineDto[];
   suscriptions?: SubscriptionDto[];
   medicalRecord?: any;
   workoutReservations?: any;
   workout?: any;
}
