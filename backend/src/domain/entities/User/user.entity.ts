import { v4 as uuid } from 'uuid';
import { Roles } from '../../enums';
import { UserDto } from './user.dto';
import { Rutine } from '../Rutine/rutine.entity';
import { Subscription } from '../Subscription/subscription.entity';
import { MedicalRecord } from '../MedicalRecord/medical-record.entity';

export class User {
   private id: string;
   private name: string;
   private lastName: string;
   private email: string;
   private user: string;
   private password?: string;
   private isTemporaryPassword?: boolean;
   private isSuperUser: boolean = false;
   private role: Roles;

   // Partners features
   private rutines?: Rutine[];
   private suscriptions?: Subscription[];
   private medicalRecord?: MedicalRecord;
   private workoutReservations?: any; // TODO: definir entidad -> Solo Socios

   // Instructor features
   private workout?: any; // TODO: definir entidad -> Solo Instructores

   private constructor(user: UserDto, role: Roles) {
      this.id = user.id ? user.id : uuid();
      this.name = user.name;
      this.lastName = user.lastName;
      this.email = user.email;
      this.user = user.user;
      this.password = user.password;
      this.isTemporaryPassword = user.isTemporaryPassword;
      this.role = role;
   }

   static create(user: UserDto, role: Roles): User {
      return new User(
         {
            id: uuid(),
            ...user,
         },
         role,
      );
   }

   static rebuild(user: UserDto): User {
      return new User(user, user.role);
   }

   // Partners Methods
   getReservations(): any {
      return this.workoutReservations;
   }

   addReservation(reservation: any): void {
      this.workoutReservations.push(reservation);
   }

   deleteReservation(reservationId: string): void {
      this.workoutReservations = this.workoutReservations.filter(
         (reservation: any) => reservation.id !== reservationId,
      );
   }
}
