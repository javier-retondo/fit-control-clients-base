export interface ExerciseDto {
   id: string;
   rutineId: string;
   name: string;
   description: string;
   series: number;
   duration?: number; // Segundos
   repetitions?: number;
   video_url?: string;
}
