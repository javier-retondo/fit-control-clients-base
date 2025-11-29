import { Workout, WorkoutDto, WorkoutRepository } from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { CreateWorkoutRequest } from './request.dto';

export class CreateWorkoutHandler
   implements UseCaseCommandInterface<CreateWorkoutRequest, WorkoutDto>
{
   constructor(
      private readonly workoutRepository: WorkoutRepository,
      private readonly idGenerator: IdGenerator,
   ) {}

   async execute(request: CreateWorkoutRequest): Promise<WorkoutDto> {
      const { type, name, description, imageUrl } = request;

      const newWorkout = Workout.create({
         id: this.idGenerator.generate(),
         type,
         name,
         description,
         imageUrl,
      });

      const createdWorkout = await this.workoutRepository.save(newWorkout);

      return createdWorkout.get();
   }
}
