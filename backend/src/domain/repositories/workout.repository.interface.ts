import { Workout, WorkoutDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IWorkoutRepository extends IBaseRepository<Workout, WorkoutDto> {}
