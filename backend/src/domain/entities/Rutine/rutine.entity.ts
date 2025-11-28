import { WeekDay, Status } from '../../enums';
import { RutineDto } from './rutine.dto';
import { Exercise } from '../Exercise/exercise.entity';

export class Rutine {
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

   private constructor(rutine: Omit<RutineDto, 'role'>, status: Status) {
      this.id = rutine.id;
      this.partnerId = rutine.partnerId;
      this.instructorId = rutine.instructorId;
      this.weekDay = rutine.weekDay;
      this.name = rutine.name;
      this.objective = rutine.objective;
      this.description = rutine.description;
      this.status = status;
      this.exercises = [];
      this.createdAt = rutine.createdAt || new Date();
      this.updatedAt = rutine.updatedAt || new Date();
   }

   static create(rutine: Omit<RutineDto, 'createdAt' | 'updatedAt'>): Rutine {
      return new Rutine(rutine, Status.ACTIVE);
   }

   static rebuild(rutine: RutineDto): Rutine {
      return new Rutine(rutine, rutine.status);
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

   get(): RutineDto {
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
      rutine: Pick<RutineDto, 'instructorId' | 'name' | 'objective' | 'description' | 'weekDay'>,
   ): void {
      this.instructorId = rutine.instructorId ? rutine.instructorId : this.instructorId;
      this.weekDay = rutine.weekDay ? rutine.weekDay : this.weekDay;
      this.name = rutine.name ? rutine.name : this.name;
      this.objective = rutine.objective ? rutine.objective : this.objective;
      this.description = rutine.description ? rutine.description : this.description;
      this.updatedAt = new Date();
   }
}
