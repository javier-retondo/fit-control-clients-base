import { WorkoutSchedule, WorkoutScheduleDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface WorkoutScheduleRepository
   extends IBaseRepository<WorkoutSchedule, WorkoutScheduleDto> {}
