import { Status, WeekDay } from '../../enums';
import { ExerciseDto } from '../Exercise/exercise.dto';

export interface RutinesDto {
   id?: string;
   date?: Date;
   partnerId: string;
   instructorId: string;
   weekDay: WeekDay;
   name: string;
   objective: string;
   description: string;
   status: Status;
   exercises?: ExerciseDto[];
}
