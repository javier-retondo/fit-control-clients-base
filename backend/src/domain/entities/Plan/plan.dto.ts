import { PlanType, Status } from '../../enums';

export interface PlanDto {
   id?: string;
   name: string;
   description: string;
   startDate: Date;
   endDate: Date;
   status: Status;
   type: PlanType;
   amount: number;
}
