import { v4 as uuid } from 'uuid';
import { ExerciseDto } from './exercise.dto';

export class Exercise {
   id: string;
   rutineId: string;
   name: string;
   description: string;
   series: number;
   duration?: number; // Segundos
   repetitions?: number;
   video_url?: string;

   private constructor(exercise: ExerciseDto) {
      this.id = exercise.id ? exercise.id : uuid();
      this.rutineId = exercise.rutineId;
      this.name = exercise.name;
      this.description = exercise.description;
      this.series = exercise.series;
      this.duration = exercise.duration;
      this.repetitions = exercise.repetitions;
      this.video_url = exercise.video_url;
   }

   static createExercise(exercise: ExerciseDto): Exercise {
      return new Exercise(exercise);
   }

   static rebuildExercise(exercise: ExerciseDto): Exercise {
      return new Exercise(exercise);
   }

   setVideoUrl(url: string): void {
      this.video_url = url;
   }
}
