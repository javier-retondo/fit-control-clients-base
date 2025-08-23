export interface MessageDto {
   id: string;
   senderId: string;
   recipientId: string;
   title: string;
   content: string;
   timestamp: Date;
   status?: 'sent' | 'delivered' | 'read';
}
