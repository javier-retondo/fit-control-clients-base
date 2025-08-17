import { v4 as uuid } from 'uuid';
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
      this.id = payment.id ? payment.id : uuid();
      this.subscriptionId = payment.subscriptionId;
      this.amount = amountValue.getValue();
      this.status = status;
      this.paymentMethod = payment.paymentMethod;
      this.createdAt = payment.createdAt ? payment.createdAt : new Date();
      this.updatedAt = payment.updatedAt ? payment.updatedAt : new Date();
   }

   static createPayment(payment: PaymentDto): Payment {
      return new Payment(payment, Status.PENDING);
   }

   static rebuildPayment(payment: PaymentDto): Payment {
      return new Payment(payment, payment.status);
   }

   paymentAccepted(): void {
      this.status = Status.ACCEPTED;
   }

   paymentFailed(): void {
      this.status = Status.FAILED;
   }

   paymentRejected(): void {
      this.status = Status.REJECTED;
   }

   getPayment(): PaymentDto {
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
