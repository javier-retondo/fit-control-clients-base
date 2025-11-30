import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Status } from '../../../../domain';

@Entity({ name: 'headquarter' })
export class HeadquarterEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ type: 'varchar', length: 150 })
   name!: string;

   @Column({ type: 'varchar', length: 255 })
   location!: string;

   @Column({ type: 'int' })
   capacity!: number;

   @Column({ type: 'text' })
   description!: string;

   @Column({ type: 'enum', enum: Status })
   status!: Status;

   @Column({ name: 'image_url', type: 'varchar', length: 500, nullable: true })
   imageUrl?: string;
}
