import { Plan, PlanDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface PlanRepository extends IBaseRepository<Plan, PlanDto> {}
