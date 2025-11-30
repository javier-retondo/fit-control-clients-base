import { Entity, Column, PrimaryColumn } from 'typeorm';
import { PlanType, Status } from '../../../../domain';

@Entity({ name: 'plan' })
export class PlanEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ type: 'varchar', length: 150 })
   name!: string;

   @Column({ type: 'text' })
   description!: string;

   @Column({ name: 'start_date', type: 'date' })
   startDate!: Date;

   @Column({ name: 'end_date', type: 'date' })
   endDate!: Date;

   @Column({ type: 'enum', enum: Status })
   status!: Status;

   @Column({ type: 'enum', enum: PlanType })
   type!: PlanType;

   @Column({ type: 'decimal', precision: 10, scale: 2 })
   amount!: number;

   @Column({ type: 'simple-array', nullable: true })
   benefits!: string[];

   @Column({ type: 'boolean', default: false })
   featured!: boolean;
}
