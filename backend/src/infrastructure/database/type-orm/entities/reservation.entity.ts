import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { UserEntity } from './user.entity';
import { WorkoutScheduleEntity } from './workout-schedule.entity';
import { Status } from '../../../../domain';

@Entity({ name: 'reservation' })
export class ReservationEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ name: 'partner_id', type: 'varchar', length: 50 })
   partnerId!: string;

   @ManyToOne(() => UserEntity, (user) => user.workoutReservations, {
      onDelete: 'CASCADE',
   })
   @JoinColumn({ name: 'partner_id' })
   partner!: UserEntity;

   @Column({ name: 'workout_schedule_id', type: 'varchar', length: 50 })
   workoutScheduleId!: string;

   @ManyToOne(() => WorkoutScheduleEntity, (workoutSchedule) => workoutSchedule.reservations, {
      onDelete: 'CASCADE',
   })
   @JoinColumn({ name: 'workout_schedule_id' })
   workoutSchedule!: WorkoutScheduleEntity;

   @Column({ type: 'date' })
   date!: Date;

   @Column({ type: 'enum', enum: Status })
   status!: Status;
}
