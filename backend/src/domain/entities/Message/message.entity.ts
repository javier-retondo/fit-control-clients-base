import { MessageDto } from './message.dto';

export class Message {
   private id: string;
   private senderId: string;
   private recipientId: string;
   private content: string;
   private timestamp: Date;
   private status: 'sent' | 'delivered' | 'read';

   private constructor(message: MessageDto, status: 'sent' | 'delivered' | 'read' = 'sent') {
      this.id = message.id;
      this.senderId = message.senderId;
      this.recipientId = message.recipientId;
      this.content = message.content;
      this.timestamp = message.timestamp;
      this.status = status;
   }

   static create(message: MessageDto): Message {
      return new Message(message);
   }

   static rebuild(message: MessageDto): Message {
      return new Message(message, message.status);
   }

   get(): MessageDto {
      return {
         id: this.id,
         senderId: this.senderId,
         recipientId: this.recipientId,
         content: this.content,
         timestamp: this.timestamp,
         status: this.status,
      };
   }

   markAsDelivered(): void {
      this.status = 'delivered';
   }

   markAsRead(): void {
      this.status = 'read';
   }
}
