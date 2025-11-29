import { Roles, Status } from '../../enums';
import { MedicalRecordDto } from '../MedicalRecord';
import { ReservationDto } from '../Reservation';
import { RutineDto } from '../Rutine';
import { SubscriptionDto } from '../Subscription';
import { WorkoutScheduleDto } from '../WorkoutSchedule';

export interface UserDto {
   id: string;
   name: string;
   lastName: string;
   email: string;
   user: string;
   password?: string;
   isTemporaryPassword?: boolean;
   role: Roles;
   status: Status;

   rutines?: RutineDto[];
   suscription?: SubscriptionDto;
   medicalRecord?: MedicalRecordDto;
   workoutReservations?: ReservationDto[];

   // Instructor related
   workouts?: WorkoutScheduleDto[];
}
