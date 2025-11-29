import { ExerciseDto } from './exercise.dto';

export class Exercise {
   private id: string;
   private rutineId: string;
   private name: string;
   private description: string;
   private series: number;
   private duration?: number; // Segundos
   private repetitions?: number;
   private video_url?: string;

   private constructor(exercise: Omit<ExerciseDto, 'duration' | 'repetitions'>) {
      this.id = exercise.id;
      this.rutineId = exercise.rutineId;
      this.name = exercise.name;
      this.description = exercise.description;
      this.series = exercise.series;
      this.video_url = exercise.video_url;
   }

   static create(exercise: Omit<ExerciseDto, 'duration' | 'repetitions'>): Exercise {
      return new Exercise(exercise);
   }

   static rebuild(exercise: ExerciseDto): Exercise {
      return new Exercise(exercise);
   }

   get(): ExerciseDto {
      return {
         id: this.id,
         rutineId: this.rutineId,
         name: this.name,
         description: this.description,
         series: this.series,
         duration: this.duration,
         repetitions: this.repetitions,
         video_url: this.video_url,
      };
   }

   setDuration(duration: number): void {
      if (duration <= 0) {
         throw new Error('Duration must be a positive number');
      }
      if (this.repetitions) {
         throw new Error('Cannot set duration when repetitions is already set');
      }
      this.duration = duration;
   }

   setRepetitions(repetitions: number): void {
      if (repetitions <= 0) {
         throw new Error('Repetitions must be a positive number');
      }
      if (this.duration) {
         throw new Error('Cannot set repetitions when duration is already set');
      }
      this.repetitions = repetitions;
   }

   setVideoUrl(url: string): void {
      this.video_url = url;
   }

   checkHasDurationOrRepetitions(): void {
      if (!this.duration && !this.repetitions) {
         throw new Error('Exercise must have either duration or repetitions set');
      }
   }

   clearSettings(): void {
      this.duration = undefined;
      this.repetitions = undefined;
   }
}
