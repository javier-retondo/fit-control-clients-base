import { UserDto } from '../../domain';

export interface INotificationService {
   sendTemporaryPasswordNotification(
      user: UserDto,
      temporaryPassword: string,
      subject: string,
      message: string,
   ): Promise<void>;
}
