import { v4 as uuid } from 'uuid';
import { Roles } from '../../enums';
import { UserDto } from './user.dto';

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
   private rutines?: any; // TODO: definir entidad -> Solo Socios
   private suscriptions?: any; // TODO: definir entidad -> Solo Socios
   private medicalRecord?: any; // TODO: definir entidad -> Solo Socios
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

   static createUser(user: UserDto, role: Roles): User {
      return new User(
         {
            id: uuid(),
            ...user,
         },
         role,
      );
   }

   static rebuildUser(user: UserDto): User {
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

   addMedicalRecord(record: any): void {
      this.medicalRecord.push(record);
   }

   deleteMedicalRecord(recordId: string): void {
      this.medicalRecord = this.medicalRecord.filter((record: any) => record.id !== recordId);
   }
}
