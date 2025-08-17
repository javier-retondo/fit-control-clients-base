import { v4 as uuid } from 'uuid';
import { WeekDay, Status } from '../../enums';
import { RutinesDto } from './rutines.dto';
import { Exercise } from '../Exercise/exercise.entity';

export class Rutine {
   private id: string;
   private date: Date;
   private partnerId: string;
   private instructorId: string;
   private weekDay: WeekDay;
   private name: string;
   private objective: string;
   private description: string;
   private status: Status;
   private exercises: Exercise[];

   private constructor(rutine: RutinesDto, status: Status) {
      this.id = rutine.id ? rutine.id : uuid();
      this.date = rutine.date ? new Date(rutine.date) : new Date();
      this.partnerId = rutine.partnerId;
      this.instructorId = rutine.instructorId;
      this.weekDay = rutine.weekDay;
      this.name = rutine.name;
      this.objective = rutine.objective;
      this.description = rutine.description;
      this.status = status;
      this.exercises = [];
   }

   static createRutine(rutine: RutinesDto): Rutine {
      return new Rutine(rutine, Status.ACTIVE);
   }

   static rebuildRutine(rutine: RutinesDto): Rutine {
      return new Rutine(rutine, rutine.status);
   }

   addExercise(exercise: Exercise): void {
      this.exercises.push(exercise);
   }

   deleteExercise(exercise: Exercise): void {
      this.exercises = this.exercises.filter((e) => e.id !== exercise.id);
   }

   suspend(): void {
      this.status = Status.INACTIVE;
   }

   reactive(): void {
      this.status = Status.ACTIVE;
   }

   getRutine(): RutinesDto {
      return {
         id: this.id,
         date: this.date,
         partnerId: this.partnerId,
         instructorId: this.instructorId,
         weekDay: this.weekDay,
         name: this.name,
         objective: this.objective,
         description: this.description,
         status: this.status,
         exercises: this.exercises?.map((exercise) => exercise) || [],
      };
   }

   updateRutine(
      rutine: Pick<RutinesDto, 'instructorId' | 'name' | 'objective' | 'description' | 'weekDay'>,
   ): void {
      this.instructorId = rutine.instructorId ? rutine.instructorId : this.instructorId;
      this.weekDay = rutine.weekDay ? rutine.weekDay : this.weekDay;
      this.name = rutine.name ? rutine.name : this.name;
      this.objective = rutine.objective ? rutine.objective : this.objective;
      this.description = rutine.description ? rutine.description : this.description;
   }
}
