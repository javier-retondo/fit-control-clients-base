import { Roles } from '../../enums';
import { UserDto } from './user.dto';
import { Rutine } from '../Rutine/rutine.entity';
import { Subscription } from '../Subscription/subscription.entity';
import { MedicalRecord } from '../MedicalRecord/medical-record.entity';
import { Reservation, ReservationDto } from '../Reservation';
import { WorkoutSchedule } from '../WorkoutSchedule';

export class User {
   private id: string;
   private name: string;
   private lastName: string;
   private email: string;
   private user: string;
   private password?: string;
   private isTemporaryPassword?: boolean;
   private isPasswordHashed: boolean = false;
   private isSuperUser: boolean = false;
   private role: Roles;

   // Partners features
   private rutines?: Rutine[];
   private suscriptions?: Subscription[];
   private medicalRecord?: MedicalRecord;
   private workoutReservations?: Reservation[];

   // Instructor features
   private workouts?: WorkoutSchedule[];

   private constructor(user: UserDto) {
      this.id = user.id;
      this.name = user.name;
      this.lastName = user.lastName;
      this.email = user.email;
      this.user = user.user;
      this.password = user.password;
      this.isTemporaryPassword = user.isTemporaryPassword;
      this.role = user.role;
   }

   static create(user: Omit<UserDto, 'role'>, role: Roles): User {
      return new User({
         ...user,
         role,
      });
   }

   static rebuild(user: UserDto): User {
      return new User(user);
   }

   // Partners Methods
   getReservations(): any {
      return this.workoutReservations;
   }

   addReservation(reservation: ReservationDto): void {
      const newReservation = Reservation.rebuild(reservation);
      if (!this.workoutReservations) {
         this.workoutReservations = [];
      }
      this.workoutReservations.push(newReservation);
   }

   deleteReservation(reservationId: string): void {
      if (!this.workoutReservations) {
         return;
      }
      this.workoutReservations = this.workoutReservations.filter(
         (reservation: Reservation) => reservation.get().id !== reservationId,
      );
   }

   hashPassword(hashed: string): void {
      if (this.password && !this.isPasswordHashed) {
         this.password = hashed;
         this.isPasswordHashed = true;
      }
   }

   getTemporaryPassword(): string {
      if (this.isTemporaryPassword && this.password) {
         return this.password;
      }
      throw new Error('User does not have a temporary password');
   }

   get(): Omit<UserDto, 'password'> {
      return {
         id: this.id,
         name: this.name,
         lastName: this.lastName,
         email: this.email,
         user: this.user,
         isTemporaryPassword: this.isTemporaryPassword,
         role: this.role,
      };
   }
}
