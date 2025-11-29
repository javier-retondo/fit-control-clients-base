import { WeekDay } from '../../enums';
import { HeadquarterDto } from '../Headquarter';
import { UserDto } from '../User';
import { WorkoutDto } from '../Workout/workout.dto';

export interface WorkoutScheduleDto {
   id: string;
   instructor: UserDto;
   weekDay: WeekDay;
   startTime: Date;
   endTime: Date;
   headquarter: HeadquarterDto;
   workout: WorkoutDto;
}
