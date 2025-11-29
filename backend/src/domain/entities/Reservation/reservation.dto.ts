import { Status } from '../../enums';
import { UserDto } from '../User';
import { WorkoutScheduleDto } from '../WorkoutSchedule';

export interface ReservationDto {
   id: string;
   partner: UserDto;
   workoutSchedule: WorkoutScheduleDto;
   date: Date;
   status: Status;
}
