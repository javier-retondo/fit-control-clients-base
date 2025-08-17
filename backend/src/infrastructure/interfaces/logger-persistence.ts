import { LOG_TYPES } from '../enums';

export type ILog = {
   id?: number;
   dateTime: Date | string;
   userId?: number;
   type: LOG_TYPES;
   description: string;
   endpoint?: string;
   method?: string;
   stackTrace?: string;
   sql?: string;
   address?: string;
};
