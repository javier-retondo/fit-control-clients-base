import { Message, MessageDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface MessageRepository extends IBaseRepository<Message, MessageDto> {}
