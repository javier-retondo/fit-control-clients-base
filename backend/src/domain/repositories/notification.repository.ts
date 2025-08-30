import { Notification, NotificationDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface NotificationRepository extends IBaseRepository<Notification, NotificationDto> {}
