import { WorkoutSchedule, WorkoutScheduleDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IWorkoutScheduleRepository
   extends IBaseRepository<WorkoutSchedule, WorkoutScheduleDto> {}
