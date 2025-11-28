import { Status } from '../../enums';
import { SubscriptionDto } from './subscription.dto';
import { Dates, Amount } from './value-objects';

export class Subscription {
   private id: string;
   private partnerId: string;
   private planId: string;
   private startDate: Date;
   private endDate: Date;
   private amount: number;
   private status: Status;

   private constructor(subscription: SubscriptionDto, status: Status) {
      const amountValue = Amount.create(subscription.amount);
      const dates = Dates.create(subscription.startDate, subscription.endDate);
      this.id = subscription.id;
      this.partnerId = subscription.partnerId;
      this.planId = subscription.planId;
      this.startDate = dates.getStartDate();
      this.endDate = dates.getEndDate();
      this.amount = amountValue.getValue();
      this.status = status;
   }

   static create(subscription: SubscriptionDto): Subscription {
      return new Subscription(subscription, Status.ACTIVE);
   }

   static rebuild(subscription: SubscriptionDto): Subscription {
      return new Subscription(subscription, subscription.status);
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
         partnerId: this.partnerId,
         planId: this.planId,
         startDate: this.startDate,
         endDate: this.endDate,
         amount: this.amount,
         status: this.status,
      };
   }
}
