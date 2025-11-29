import { Status } from '../../enums';
import { User } from '../User';
import { WorkoutSchedule } from '../WorkoutSchedule';
import { ReservationDto } from './reservation.dto';

export class Reservation {
   private id: string;
   private partner: User;
   private workoutSchedule: WorkoutSchedule;
   private date: Date;
   private status: Status;

   private constructor(reservation: ReservationDto) {
      this.id = reservation.id;
      this.partner = User.rebuild(reservation.partner);
      this.workoutSchedule = WorkoutSchedule.rebuild(reservation.workoutSchedule);
      this.date = new Date(reservation.date);
      this.status = reservation.status;
   }

   static create(reservation: Omit<ReservationDto, 'status' | 'date'>): Reservation {
      return new Reservation({
         ...reservation,
         date: new Date(),
         status: Status.ACCEPTED,
      });
   }

   static rebuild(reservation: ReservationDto): Reservation {
      return new Reservation(reservation);
   }

   get(): ReservationDto {
      return {
         id: this.id,
         partner: this.partner.get(),
         workoutSchedule: this.workoutSchedule.get(),
         date: this.date,
         status: this.status,
      };
   }

   cancel(): void {
      this.status = Status.CANCELED;
   }
}
