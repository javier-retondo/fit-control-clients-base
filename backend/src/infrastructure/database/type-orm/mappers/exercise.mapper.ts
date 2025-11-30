import { ExerciseDto } from '../../../../domain';
import { ExerciseEntity } from '../entities';

export class ExerciseMapper {
   static toDto(entity: ExerciseEntity): ExerciseDto {
      return {
         id: entity.id,
         routine: { id: entity.routine } as any,
         name: entity.name,
         description: entity.description,
         series: entity.series,
         duration: entity.duration,
         repetitions: entity.repetitions,
         video_url: entity.video_url,
      };
   }

   static toEntity(dto: ExerciseDto): ExerciseEntity {
      const entity = new ExerciseEntity();
      entity.id = dto.id;
      entity.description = dto.description;
      entity.duration = dto.duration;
      entity.routineId = dto.routine.id;
      entity.name = dto.name;
      entity.repetitions = dto.repetitions;
      entity.series = dto.series;
      entity.video_url = dto.video_url;
      return entity;
   }
}
