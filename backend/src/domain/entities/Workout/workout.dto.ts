import { WorkoutType } from '../../enums/workout-type.enum';
import { HeadquarterScheduleDTO } from '../HeadquarterSchedule';

export interface WorkoutDto {
   id: string;
   type: WorkoutType;
   name: string;
   description: string;
   imageUrl?: string;
   enabled?: boolean;
   schedules?: HeadquarterScheduleDTO[];
}
