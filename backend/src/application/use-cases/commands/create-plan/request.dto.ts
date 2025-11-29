import { PlanType, Status } from '../../../../domain';

export interface CreatePlanRequest {
   name: string;
   description: string;
   startDate: Date;
   endDate: Date;
   status: Status;
   type: PlanType;
   amount: number;
   benefits: string[];
   featured: boolean;
}
