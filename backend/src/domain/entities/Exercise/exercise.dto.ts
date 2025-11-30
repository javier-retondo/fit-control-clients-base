import { RutineDto } from '../Rutine';

export interface ExerciseDto {
   id: string;
   rutine: RutineDto;
   name: string;
   description: string;
   series: number;
   duration?: number;
   repetitions?: number;
   video_url?: string;
}
