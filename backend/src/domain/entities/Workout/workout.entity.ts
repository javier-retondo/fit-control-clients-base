import { v4 as uuid } from 'uuid';
import { WorkoutType } from '../../enums/workout-type.enum';
import { WorkoutDto } from './workout.dto';
import { HeadquarterSchedule } from '../HeadquarterSchedule';

export class Workout {
   private id: string;
   private type: WorkoutType;
   private name: string;
   private description: string;
   private enabled: boolean;
   private imageUrl?: string;
   private schedules?: HeadquarterSchedule[];

   private constructor(dto: WorkoutDto) {
      this.id = dto.id || uuid();
      this.type = dto.type;
      this.name = dto.name;
      this.description = dto.description;
      this.imageUrl = dto.imageUrl;
      this.enabled = dto.enabled ?? true;
      if (dto.schedules) {
         this.schedules = dto.schedules.map((schedule) => HeadquarterSchedule.rebuild(schedule));
      }
   }

   static create(dto: WorkoutDto): Workout {
      return new Workout(dto);
   }

   static rebuild(dto: WorkoutDto): Workout {
      return new Workout(dto);
   }

   update(dto: WorkoutDto): void {
      this.type = dto.type;
      this.name = dto.name;
      this.description = dto.description;
      this.imageUrl = dto.imageUrl;
      if (dto.enabled !== undefined) {
         this.enabled = dto.enabled;
      }
      if (dto.schedules) {
         this.schedules = dto.schedules.map((schedule) => HeadquarterSchedule.rebuild(schedule));
      }
   }

   get(): WorkoutDto {
      return {
         id: this.id,
         type: this.type,
         name: this.name,
         description: this.description,
         imageUrl: this.imageUrl,
         enabled: this.enabled,
         schedules: this.schedules?.map((schedule) => schedule.get()),
      };
   }
}
