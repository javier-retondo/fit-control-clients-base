import { v4 as uuid } from 'uuid';
import { Status } from '../../enums';
import { ReservationDto } from './reservation.dto';

export class Reservation {
   private id: string;
   private partnerId: string;
   private workoutScheduleId: string;
   private date: Date;
   private status: Status;

   private constructor(reservation: ReservationDto, status: Status) {
      this.id = reservation.id || uuid();
      this.partnerId = reservation.partnerId;
      this.workoutScheduleId = reservation.workoutScheduleId;
      this.date = new Date(reservation.date);
      this.status = reservation.status;
   }

   static create(reservation: ReservationDto): Reservation {
      return new Reservation(reservation, Status.ACCEPTED);
   }

   static rebuild(reservation: ReservationDto): Reservation {
      return new Reservation(reservation, reservation.status);
   }

   get(): ReservationDto {
      return {
         id: this.id,
         partnerId: this.partnerId,
         workoutScheduleId: this.workoutScheduleId,
         date: this.date,
         status: this.status,
      };
   }

   cancel(): void {
      this.status = Status.CANCELED;
   }
}
