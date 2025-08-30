import { Workout, WorkoutDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface WorkoutRepository extends IBaseRepository<Workout, WorkoutDto> {}
