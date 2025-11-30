import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { HeadquarterEntity } from './headquarter.entity';
import { WeekDay } from '../../../../domain';

@Entity({ name: 'headquarter_schedule' })
export class HeadquarterScheduleEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ name: 'headquarter_id', type: 'varchar', length: 50 })
   headquarterId!: string;

   @ManyToOne(() => HeadquarterEntity, {
      onDelete: 'CASCADE',
   })
   @JoinColumn({ name: 'headquarter_id' })
   headquarter!: HeadquarterEntity;

   @Column({ name: 'start_hour', type: 'time' })
   startHour!: Date;

   @Column({ name: 'end_hour', type: 'time' })
   endHour!: Date;

   @Column({ type: 'enum', enum: WeekDay })
   weekDay!: WeekDay;

   @Column({ type: 'boolean', default: false })
   holiday!: boolean;
}
