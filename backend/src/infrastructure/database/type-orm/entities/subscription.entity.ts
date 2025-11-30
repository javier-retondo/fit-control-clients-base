import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { UserEntity } from './user.entity';
import { Status } from '../../../../domain';
import { PlanEntity } from './plan.entity';

@Entity({ name: 'subscription' })
export class SubscriptionEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ name: 'partner_id', type: 'varchar', length: 50 })
   partnerId!: string;

   @ManyToOne(() => UserEntity, {
      onDelete: 'CASCADE',
   })
   @JoinColumn({ name: 'partner_id' })
   partner!: UserEntity;

   @Column({ name: 'plan_id', type: 'varchar', length: 50 })
   planId!: string;

   @ManyToOne(() => PlanEntity, {
      onDelete: 'RESTRICT',
   })
   @JoinColumn({ name: 'plan_id' })
   plan!: PlanEntity;

   @Column({ name: 'start_date', type: 'date' })
   startDate!: Date;

   @Column({ name: 'end_date', type: 'date' })
   endDate!: Date;

   @Column({ type: 'decimal', precision: 10, scale: 2 })
   amount!: number;

   @Column({ type: 'enum', enum: Status })
   status!: Status;
}
