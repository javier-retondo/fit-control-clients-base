import { Routine, RoutineDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IRoutineRepository extends IBaseRepository<Routine, RoutineDto> {}
