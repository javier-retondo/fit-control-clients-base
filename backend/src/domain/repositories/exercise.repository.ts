import { Exercise, ExerciseDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface ExerciseRepository extends IBaseRepository<Exercise, ExerciseDto> {}
