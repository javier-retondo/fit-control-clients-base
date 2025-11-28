import { PaymentMethod, Status } from '../../enums';
import { PaymentDto } from './payment.dto';
import { Amount } from './value-objects';

export class Payment {
   private id: string;
   private subscriptionId: string;
   private amount: number;
   private status: Status;
   private paymentMethod: PaymentMethod;
   private createdAt: Date;
   private updatedAt: Date;

   private constructor(payment: PaymentDto, status: Status) {
      const amountValue = Amount.create(payment.amount);
      this.id = payment.id;
      this.subscriptionId = payment.subscriptionId;
      this.amount = amountValue.getValue();
      this.status = status;
      this.paymentMethod = payment.paymentMethod;
      this.createdAt = payment.createdAt || new Date();
      this.updatedAt = payment.updatedAt || new Date();
   }

   static create(payment: PaymentDto): Payment {
      return new Payment(payment, Status.PENDING);
   }

   static rebuild(payment: PaymentDto): Payment {
      return new Payment(payment, payment.status);
   }

   accepted(): void {
      this.status = Status.ACCEPTED;
   }

   failed(): void {
      this.status = Status.FAILED;
   }

   rejected(): void {
      this.status = Status.REJECTED;
   }

   get(): PaymentDto {
      return {
         id: this.id,
         subscriptionId: this.subscriptionId,
         amount: this.amount,
         status: this.status,
         paymentMethod: this.paymentMethod,
         createdAt: this.createdAt,
         updatedAt: this.updatedAt,
      };
   }
}
