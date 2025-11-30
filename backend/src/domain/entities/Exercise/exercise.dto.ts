import { RoutineDto } from '../Routine';

export interface ExerciseDto {
   id: string;
   routine: RoutineDto;
   name: string;
   description: string;
   series: number;
   duration?: number;
   repetitions?: number;
   video_url?: string;
}
