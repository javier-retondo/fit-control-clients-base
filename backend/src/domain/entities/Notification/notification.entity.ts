import { NotificationDto } from './notification.dto';

export class Notification {
   private id: string;
   private userId: string;
   private title: string;
   private message: string;
   private timestamp: Date;
   private read: boolean;

   private constructor(notification: NotificationDto, read: boolean = false) {
      this.id = notification.id;
      this.userId = notification.userId;
      this.title = notification.title;
      this.message = notification.message;
      this.timestamp = notification.timestamp;
      this.read = read;
   }

   static create(notification: NotificationDto): Notification {
      return new Notification(notification);
   }

   static rebuild(notification: NotificationDto): Notification {
      return new Notification(notification, notification.read);
   }

   get(): NotificationDto {
      return {
         id: this.id,
         userId: this.userId,
         title: this.title,
         message: this.message,
         timestamp: this.timestamp,
         read: this.read,
      };
   }

   markAsRead(): void {
      this.read = true;
   }
}
