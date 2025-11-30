import {
   Payment,
   PaymentDto,
   IPaymentRepository,
   ISubscriptionRepository,
   IUserRepository,
} from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { RegisterPaymentRequest } from './request.dto';

export class RegisterPaymentHandler
   implements UseCaseCommandInterface<RegisterPaymentRequest, PaymentDto>
{
   constructor(
      private readonly paymentRepository: IPaymentRepository,
      private readonly userRepository: IUserRepository,
      private readonly subscriptionRepository: ISubscriptionRepository,
      private readonly idGenerator: IdGenerator,
   ) {}
   async execute(request: RegisterPaymentRequest): Promise<PaymentDto> {
      const { partnerId, subscriptionId, amount, date, method } = request;
      const partner = await this.userRepository.findById(partnerId);
      if (!partner) {
         throw new Error('Partner not found');
      }
      const subscription = await this.subscriptionRepository.findById(subscriptionId);
      if (!subscription) {
         throw new Error('Subscription not found');
      }
      const newPayment = Payment.create({
         id: this.idGenerator.generate(),
         partner: partner.get(),
         subscription: subscription.get(),
         amount,
         createdAt: date,
         paymentMethod: method,
      });
      const createdPayment = await this.paymentRepository.save(newPayment);
      return createdPayment.get();
   }
}
