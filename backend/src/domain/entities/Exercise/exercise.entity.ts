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

   private constructor(exercise: ExerciseDto) {
      this.id = exercise.id;
      this.rutineId = exercise.rutineId;
      this.name = exercise.name;
      this.description = exercise.description;
      this.series = exercise.series;
      this.duration = exercise.duration;
      this.repetitions = exercise.repetitions;
      this.video_url = exercise.video_url;
   }

   static create(exercise: ExerciseDto): Exercise {
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

   setVideoUrl(url: string): void {
      this.video_url = url;
   }
}
