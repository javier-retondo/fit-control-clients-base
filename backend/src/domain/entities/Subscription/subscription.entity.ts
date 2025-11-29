import { Status } from '../../enums';
import { Plan } from '../Plan';
import { User } from '../User';
import { SubscriptionDto } from './subscription.dto';
import { Dates, Amount } from './value-objects';

export class Subscription {
   private id: string;
   private partner: User;
   private plan: Plan;
   private startDate: Date;
   private endDate: Date;
   private amount: number;
   private status: Status;

   private constructor(subscription: SubscriptionDto) {
      const amountValue = Amount.create(subscription.amount);
      const dates = Dates.create(subscription.startDate, subscription.endDate);
      this.id = subscription.id;
      this.partner = User.rebuild(subscription.partner);
      this.plan = Plan.rebuild(subscription.plan);
      this.startDate = dates.getStartDate();
      this.endDate = dates.getEndDate();
      this.amount = amountValue.getValue();
      this.status = subscription.status;
   }

   static create(subscription: Omit<SubscriptionDto, 'status'>): Subscription {
      return new Subscription({
         ...subscription,
         startDate: new Date(),
         status: Status.ACTIVE,
      });
   }

   static rebuild(subscription: SubscriptionDto): Subscription {
      return new Subscription(subscription);
   }

   inactiveSubscription(): void {
      this.status = Status.INACTIVE;
   }

   checkValidity(): void {
      if (this.startDate > new Date() || this.endDate < new Date()) {
         this.inactiveSubscription();
      }
   }

   get(): SubscriptionDto {
      return {
         id: this.id,
         partner: this.partner.get(),
         plan: this.plan.get(),
         startDate: this.startDate,
         endDate: this.endDate,
         amount: this.amount,
         status: this.status,
      };
   }
}
