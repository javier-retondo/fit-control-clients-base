import { PaymentMethod } from '../../../../domain';

export interface RegisterPaymentRequest {
   partnerId: string;
   subscriptionId: string;
   amount: number;
   date: Date;
   method: PaymentMethod;
}
