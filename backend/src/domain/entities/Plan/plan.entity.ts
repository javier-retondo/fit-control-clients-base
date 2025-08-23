import { v4 as uuid } from 'uuid';
import { PlanType, Status } from '../../enums';
import { PlanDto } from './plan.dto';
import { Dates, Amount } from './value-objects';

export class Plan {
   private id: string;
   private name: string;
   private description: string;
   private startDate: Date;
   private endDate: Date;
   private status: Status;
   private type: PlanType;
   private amount: number;

   private constructor(plan: PlanDto, status: Status) {
      const amountValue = Amount.create(plan.amount);
      const dates = Dates.create(plan.startDate, plan.endDate);
      this.id = plan.id || uuid();
      this.name = plan.name;
      this.description = plan.description;
      this.startDate = dates.getStartDate();
      this.endDate = dates.getEndDate();
      this.status = status;
      this.type = plan.type;
      this.amount = amountValue.getValue();
   }

   static create(plan: PlanDto): Plan {
      return new Plan(plan, Status.ACTIVE);
   }

   static rebuild(plan: PlanDto): Plan {
      return new Plan(plan, plan.status);
   }

   setAmount(value: number): void {
      this.amount = Amount.create(value).getValue();
   }

   setDates(startDate: Date, endDate: Date): void {
      const dates = Dates.create(startDate, endDate);
      this.startDate = dates.getStartDate();
      this.endDate = dates.getEndDate();
   }

   inactivePlan(): void {
      this.status = Status.INACTIVE;
   }

   activePlan(): void {
      this.status = Status.ACTIVE;
   }

   checkValidity(): void {
      if (this.startDate < new Date() && this.endDate > new Date()) {
         this.activePlan();
      } else {
         this.inactivePlan();
      }
   }

   update(plan: Pick<PlanDto, 'name' | 'description' | 'amount' | 'startDate' | 'endDate'>): void {
      this.name = plan.name;
      this.description = plan.description;
      this.setAmount(plan.amount);
      this.setDates(plan.startDate, plan.endDate);
   }

   get(): PlanDto {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         startDate: this.startDate,
         endDate: this.endDate,
         status: this.status,
         type: this.type,
         amount: this.amount,
      };
   }
}
