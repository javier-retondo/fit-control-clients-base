import { Exercise, ExerciseDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IExerciseRepository extends IBaseRepository<Exercise, ExerciseDto> {}
