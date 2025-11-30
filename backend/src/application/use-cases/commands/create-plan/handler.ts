import { Plan, PlanDto, IPlanRepository } from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { CreatePlanRequest } from './request.dto';

export class CreatePlanHandler implements UseCaseCommandInterface<CreatePlanRequest, PlanDto> {
   constructor(
      private readonly planRepository: IPlanRepository,
      private readonly idGenerator: IdGenerator,
   ) {}

   async execute(request: CreatePlanRequest): Promise<PlanDto> {
      const { name, description, startDate, endDate, status, type, amount, benefits, featured } =
         request;

      const newPlan = Plan.create({
         id: this.idGenerator.generate(),
         name,
         description,
         startDate,
         endDate,
         status,
         type,
         amount,
         benefits,
         featured,
      });

      const createdPlan = await this.planRepository.save(newPlan);

      return createdPlan.get();
   }
}
