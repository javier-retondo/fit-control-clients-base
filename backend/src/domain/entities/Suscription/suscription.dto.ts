import { Status } from '../../enums';

export interface SubscriptionDto {
   id?: string;
   partnerId: string;
   planId: string;
   startDate: Date;
   endDate: Date;
   amount: number;
   status: Status;
}
