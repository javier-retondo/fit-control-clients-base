import { Status } from '../../enums';

export interface ReservationDto {
   id: string;
   partnerId: string;
   workoutScheduleId: string;
   date: Date;
   status: Status;
}
