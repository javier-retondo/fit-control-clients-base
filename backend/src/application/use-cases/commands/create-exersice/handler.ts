import { Exercise, ExerciseDto, ExerciseRepository } from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { CreateExerciseRequest } from './request.dto';

export class CreateExersiceHandler
   implements UseCaseCommandInterface<CreateExerciseRequest, ExerciseDto>
{
   constructor(
      private readonly idGenerator: IdGenerator,
      private readonly exerciseRepository: ExerciseRepository,
   ) {}

   async execute(request: CreateExerciseRequest): Promise<ExerciseDto> {
      const { rutineId, name, description, series, duration, repetitions, video_url, type } =
         request;

      const newExercise = Exercise.create({
         id: this.idGenerator.generate(),
         rutineId,
         name,
         description,
         series,
         video_url,
      });

      if (type === 'time' && duration) {
         newExercise.setDuration(duration);
      } else if (type === 'repetition' && repetitions) {
         newExercise.setRepetitions(repetitions);
      }

      newExercise.checkHasDurationOrRepetitions();

      await this.exerciseRepository.save(newExercise);

      return newExercise.get();
   }
}
