import { Roles, Status } from '../../enums';
import { MedicalRecordDto } from '../MedicalRecord';
import { ReservationDto } from '../Reservation';
import { RoutineDto } from '../Routine';
import { SubscriptionDto } from '../Subscription';
import { WorkoutScheduleDto } from '../WorkoutSchedule';

export interface UserDto {
   id: string;
   name: string;
   lastName: string;
   email: string;
   user: string;
   dni?: string;
   password?: string;
   isTemporaryPassword?: boolean;
   role: Roles;
   status: Status;

   routines?: RoutineDto[];
   suscription?: SubscriptionDto;
   medicalRecord?: MedicalRecordDto;
   workoutReservations?: ReservationDto[];

   // Instructor related
   workouts?: WorkoutScheduleDto[];
}
