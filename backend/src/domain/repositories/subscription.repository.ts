import { Subscription, SubscriptionDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface SubscriptionRepository extends IBaseRepository<Subscription, SubscriptionDto> {}
