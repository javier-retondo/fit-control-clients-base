import { v4 as uuid } from 'uuid';
import { Status } from '../../enums';
import { SubscriptionDto } from './suscription.dto';
import { Dates, Amount } from './value-objects';

export class Subscription {
   id: string;
   partnerId: string;
   planId: string;
   startDate: Date;
   endDate: Date;
   amount: number;
   status: Status;

   private constructor(subscription: SubscriptionDto, status: Status) {
      const amountValue = Amount.create(subscription.amount);
      const dates = Dates.create(subscription.startDate, subscription.endDate);
      this.id = subscription.id ? subscription.id : uuid();
      this.partnerId = subscription.partnerId;
      this.planId = subscription.planId;
      this.startDate = dates.getStartDate();
      this.endDate = dates.getEndDate();
      this.amount = amountValue.getValue();
      this.status = status;
   }

   static createSubscription(subscription: SubscriptionDto): Subscription {
      return new Subscription(subscription, Status.ACTIVE);
   }

   static rebuildSubscription(subscription: SubscriptionDto): Subscription {
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
}
