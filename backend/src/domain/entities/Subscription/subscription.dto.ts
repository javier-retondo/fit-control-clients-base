import { Status } from '../../enums';
import { PlanDto } from '../Plan';
import { UserDto } from '../User';

export interface SubscriptionDto {
   id: string;
   partner: UserDto;
   plan: PlanDto;
   startDate: Date;
   endDate: Date;
   amount: number;
   status: Status;
}
