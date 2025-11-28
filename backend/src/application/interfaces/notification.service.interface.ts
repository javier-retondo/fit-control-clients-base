import { UserDto } from '../../domain';

export interface INotificationService {
   sendTemporaryPasswordNotification(user: UserDto, temporaryPassword: string): Promise<void>;
}
