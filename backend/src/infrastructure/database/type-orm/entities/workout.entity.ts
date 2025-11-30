import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { WorkoutType } from '../../../../domain';
import { WorkoutScheduleEntity } from './workout-schedule.entity';

@Entity({ name: 'workout' })
export class WorkoutEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ type: 'enum', enum: WorkoutType })
   type!: WorkoutType;

   @Column({ type: 'varchar', length: 150 })
   name!: string;

   @Column({ type: 'text' })
   description!: string;

   @Column({ name: 'image_url', type: 'varchar', length: 500, nullable: true })
   imageUrl?: string;

   @Column({ type: 'boolean', default: true })
   enabled!: boolean;

   @OneToMany(() => WorkoutScheduleEntity, (schedule) => schedule.workout)
   schedules?: WorkoutScheduleEntity[];
}
