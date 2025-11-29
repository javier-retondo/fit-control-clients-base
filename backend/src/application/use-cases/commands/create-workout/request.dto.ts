import { WorkoutType } from '../../../../domain';

export interface CreateWorkoutRequest {
   type: WorkoutType;
   name: string;
   description: string;
   imageUrl?: string;
}
