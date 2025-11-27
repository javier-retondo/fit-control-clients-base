import { v4 as uuid } from 'uuid';
import { Status } from '../../enums';
import { HeadquarterDto } from './headquarter.dto';

export class Headquarter {
   private id: string;
   private name: string;
   private location: string;
   private capacity: number;
   private description: string;
   private status: Status;
   private imageUrl?: string;

   private constructor(site: HeadquarterDto, status: Status) {
      this.id = site.id || uuid();
      this.name = site.name;
      this.location = site.location;
      this.capacity = site.capacity;
      this.description = site.description;
      this.status = status;
      this.imageUrl = site.imageUrl;
   }

   static create(site: HeadquarterDto): Headquarter {
      return new Headquarter(site, Status.ACTIVE);
   }

   static rebuild(site: HeadquarterDto): Headquarter {
      return new Headquarter(site, site.status);
   }

   get(): HeadquarterDto {
      return {
         id: this.id,
         name: this.name,
         location: this.location,
         capacity: this.capacity,
         description: this.description,
         status: this.status,
         imageUrl: this.imageUrl,
      };
   }

   update(site: HeadquarterDto): void {
      this.name = site.name;
      this.location = site.location;
      this.capacity = site.capacity;
      this.description = site.description;
      this.status = site.status;
      this.imageUrl = site.imageUrl;
   }
}
