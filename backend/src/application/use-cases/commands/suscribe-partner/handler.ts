import {
   PlanRepository,
   Subscription,
   SubscriptionDto,
   SubscriptionRepository,
   UserRepository,
} from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { SubscribePartnerRequest } from './request.dto';

export class SubscribePartnerHandler
   implements UseCaseCommandInterface<SubscribePartnerRequest, SubscriptionDto>
{
   constructor(
      private readonly subscriptionRepository: SubscriptionRepository,
      private readonly userRepository: UserRepository,
      private readonly planRepository: PlanRepository,
      private readonly idGenerator: IdGenerator,
   ) {}

   async execute(command: SubscribePartnerRequest): Promise<SubscriptionDto> {
      const { partnerId, planId, endDate, amount } = command;
      const partner = await this.userRepository.findById(partnerId);
      if (!partner) {
         throw new Error('Partner not found');
      }

      const plan = await this.planRepository.findById(planId);
      if (!plan) {
         throw new Error('Plan not found');
      }

      const newSubscription = Subscription.create({
         id: this.idGenerator.generate(),
         partner: partner.get(),
         plan: plan.get(),
         startDate: new Date(),
         endDate,
         amount,
      });

      await this.subscriptionRepository.save(newSubscription);
      return newSubscription.get();
   }
}
