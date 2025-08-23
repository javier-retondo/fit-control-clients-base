export interface MessageDto {
   id: string;
   senderId: string;
   recipientId: string;
   content: string;
   timestamp: Date;
   status?: 'sent' | 'delivered' | 'read';
}
