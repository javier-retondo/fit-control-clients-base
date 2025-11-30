import { Exercise, ExerciseDto, IExerciseRepository, IRutineRepository } from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { CreateExerciseRequest } from './request.dto';

export class CreateExersiceHandler
   implements UseCaseCommandInterface<CreateExerciseRequest, ExerciseDto>
{
   constructor(
      private readonly idGenerator: IdGenerator,
      private readonly exerciseRepository: IExerciseRepository,
      private readonly rutineRepository: IRutineRepository,
   ) {}

   async execute(request: CreateExerciseRequest): Promise<ExerciseDto> {
      const { rutineId, name, description, series, duration, repetitions, video_url, type } =
         request;

      const rutine = await this.rutineRepository.findById(rutineId);
      if (!rutine) {
         throw new Error('Rutine not found');
      }

      const newExercise = Exercise.create({
         id: this.idGenerator.generate(),
         rutine: rutine.get(),
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
