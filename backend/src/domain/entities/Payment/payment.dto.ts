import { PaymentMethod, Status } from '../../enums';
import { SubscriptionDto } from '../Subscription';
import { UserDto } from '../User';

export interface PaymentDto {
   id: string;
   amount: number;
   paymentMethod: PaymentMethod;
   partner: UserDto;
   subscription: SubscriptionDto;
   createdAt?: Date;
}
