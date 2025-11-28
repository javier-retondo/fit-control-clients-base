import { Status } from '../../enums';

export interface HeadquarterDto {
   id: string;
   name: string;
   location: string;
   capacity: number;
   description: string;
   status: Status;
   imageUrl?: string;
}
