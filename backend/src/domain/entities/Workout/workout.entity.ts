import { v4 as uuid } from 'uuid';
import { WorkoutType } from '../../enums/workout-type.enum';
import { WorkoutDto } from './workout.dto';

export class Workout {
   private id: string;
   private type: WorkoutType;
   private name: string;
   private description: string;
   private imageUrl?: string;

   private constructor(dto: WorkoutDto) {
      this.id = dto.id || uuid();
      this.type = dto.type;
      this.name = dto.name;
      this.description = dto.description;
      this.imageUrl = dto.imageUrl;
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
   }

   get(): WorkoutDto {
      return {
         id: this.id,
         type: this.type,
         name: this.name,
         description: this.description,
         imageUrl: this.imageUrl,
      };
   }
}
