export interface NotificationDto {
   id: string;
   userId: string;
   title: string;
   message: string;
   timestamp: Date;
   read?: boolean;
}
