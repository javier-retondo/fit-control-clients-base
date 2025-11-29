import { PaymentMethod } from '../../enums';
import { Subscription } from '../Subscription';
import { User } from '../User';
import { PaymentDto } from './payment.dto';
import { Amount } from './value-objects';

export class Payment {
   private id: string;
   private subscription: Subscription;
   private amount: number;
   private paymentMethod: PaymentMethod;
   private partner: User;
   private createdAt: Date;

   private constructor(payment: PaymentDto) {
      const amountValue = Amount.create(payment.amount);
      this.id = payment.id;
      this.subscription = Subscription.rebuild(payment.subscription);
      this.amount = amountValue.getValue();
      this.paymentMethod = payment.paymentMethod;
      this.createdAt = payment.createdAt || new Date();
      this.partner = User.rebuild(payment.partner);
   }

   static create(payment: PaymentDto): Payment {
      return new Payment(payment);
   }

   static rebuild(payment: PaymentDto): Payment {
      return new Payment(payment);
   }

   get(): PaymentDto {
      return {
         id: this.id,
         subscription: this.subscription.get(),
         amount: this.amount,
         paymentMethod: this.paymentMethod,
         partner: this.partner.get(),
         createdAt: this.createdAt,
      };
   }
}
