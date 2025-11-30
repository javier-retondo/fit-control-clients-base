import { Exercise, ExerciseDto, IExerciseRepository, IRoutineRepository } from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { CreateExerciseRequest } from './request.dto';

export class CreateExersiceHandler
   implements UseCaseCommandInterface<CreateExerciseRequest, ExerciseDto>
{
   constructor(
      private readonly idGenerator: IdGenerator,
      private readonly exerciseRepository: IExerciseRepository,
      private readonly routineRepository: IRoutineRepository,
   ) {}

   async execute(request: CreateExerciseRequest): Promise<ExerciseDto> {
      const { routineId, name, description, series, duration, repetitions, video_url, type } =
         request;

      const routine = await this.routineRepository.findById(routineId);
      if (!routine) {
         throw new Error('Routine not found');
      }

      const newExercise = Exercise.create({
         id: this.idGenerator.generate(),
         routine: routine.get(),
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
