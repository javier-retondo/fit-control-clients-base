import { Subscription, SubscriptionDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface ISubscriptionRepository extends IBaseRepository<Subscription, SubscriptionDto> {}
