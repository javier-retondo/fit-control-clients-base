import { Plan, PlanDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IPlanRepository extends IBaseRepository<Plan, PlanDto> {}
