import { WeekDay, Status } from '../../enums';
import { RoutineDto } from './routine.dto';
import { Exercise } from '../Exercise/exercise.entity';

export class Routine {
   private id: string;
   private partnerId: string;
   private instructorId: string;
   private weekDay: WeekDay;
   private name: string;
   private objective: string;
   private description: string;
   private status: Status;
   private createdAt: Date;
   private updatedAt: Date;
   private exercises: Exercise[];

   private constructor(routine: Omit<RoutineDto, 'role'>, status: Status) {
      this.id = routine.id;
      this.partnerId = routine.partnerId;
      this.instructorId = routine.instructorId;
      this.weekDay = routine.weekDay;
      this.name = routine.name;
      this.objective = routine.objective;
      this.description = routine.description;
      this.status = status;
      this.exercises = [];
      this.createdAt = routine.createdAt || new Date();
      this.updatedAt = routine.updatedAt || new Date();
   }

   static create(routine: Omit<RoutineDto, 'createdAt' | 'updatedAt'>): Routine {
      return new Routine(routine, Status.ACTIVE);
   }

   static rebuild(routine: RoutineDto): Routine {
      return new Routine(routine, routine.status);
   }

   addExercise(exercise: Exercise): void {
      this.exercises.push(exercise);
   }

   deleteExercise(exercise: Exercise): void {
      this.exercises = this.exercises.filter((e) => e.get().id !== exercise.get().id);
   }

   suspend(): void {
      this.status = Status.INACTIVE;
   }

   reactive(): void {
      this.status = Status.ACTIVE;
   }

   get(): RoutineDto {
      return {
         id: this.id,
         partnerId: this.partnerId,
         instructorId: this.instructorId,
         weekDay: this.weekDay,
         name: this.name,
         objective: this.objective,
         description: this.description,
         status: this.status,
         createdAt: this.createdAt,
         updatedAt: this.updatedAt,
         exercises: this.exercises?.map((exercise) => exercise.get()) || [],
      };
   }

   update(
      routine: Pick<RoutineDto, 'instructorId' | 'name' | 'objective' | 'description' | 'weekDay'>,
   ): void {
      this.instructorId = routine.instructorId ? routine.instructorId : this.instructorId;
      this.weekDay = routine.weekDay ? routine.weekDay : this.weekDay;
      this.name = routine.name ? routine.name : this.name;
      this.objective = routine.objective ? routine.objective : this.objective;
      this.description = routine.description ? routine.description : this.description;
      this.updatedAt = new Date();
   }
}
