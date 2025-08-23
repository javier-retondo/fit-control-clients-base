import { WorkoutType } from '../../enums/workout-type.enum';

export interface WorkoutDto {
   id?: string;
   type: WorkoutType;
   name: string;
   description: string;
   imageUrl?: string;
}
