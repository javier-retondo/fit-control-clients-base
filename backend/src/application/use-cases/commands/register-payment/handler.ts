import { Payment, PaymentDto, PaymentRepository } from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';

export class RegisterPaymentRequest
   implements UseCaseCommandInterface<RegisterPaymentRequest, PaymentDto>
{
   constructor(
      private readonly paymentRepository: PaymentRepository,
      private readonly idGenerator: IdGenerator,
   ) {}
   async execute(request: RegisterPaymentRequest): Promise<PaymentDto> {
      const { partnerId, subscriptionId, amount, date, method } = request;
      const newPayment = Payment.create({
         id: this.idGenerator.generate(),
         partnerId,
         subscriptionId,
         amount,
         date,
         method,
      });
      const createdPayment = await this.paymentRepository.save(newPayment);
      return createdPayment.get();
   }
}
