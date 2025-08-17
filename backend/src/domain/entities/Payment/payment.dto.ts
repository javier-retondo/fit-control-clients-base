import { PaymentMethod, Status } from '../../enums';

export interface PaymentDto {
   id?: string;
   subscriptionId: string;
   amount: number;
   status: Status;
   paymentMethod: PaymentMethod;
   createdAt?: Date;
   updatedAt?: Date;
}
