import { HeadquarterSchedule, HeadquarterScheduleDTO } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IHeadquarterScheduleRepository
   extends IBaseRepository<HeadquarterSchedule, HeadquarterScheduleDTO> {}
