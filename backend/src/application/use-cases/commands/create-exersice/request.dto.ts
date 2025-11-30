export interface CreateExerciseRequest {
   routineId: string;
   name: string;
   description: string;
   series: number;
   duration?: number;
   repetitions?: number;
   type: 'time' | 'repetition';
   video_url?: string;
}
