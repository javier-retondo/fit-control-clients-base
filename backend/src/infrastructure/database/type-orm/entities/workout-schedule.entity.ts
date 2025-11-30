import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { UserEntity } from './user.entity';
import { HeadquarterEntity } from './headquarter.entity';
import { WorkoutEntity } from './workout.entity';
import { ReservationEntity } from './reservation.entity';
import { WeekDay } from '../../../../domain';

@Entity({ name: 'workout_schedule' })
export class WorkoutScheduleEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ name: 'instructor_id', type: 'varchar', length: 50 })
   instructorId!: string;

   @ManyToOne(() => UserEntity, (user) => user.workouts, {
      onDelete: 'SET NULL',
   })
   @JoinColumn({ name: 'instructor_id' })
   instructor!: UserEntity;

   @Column({ type: 'enum', enum: WeekDay })
   weekDay!: WeekDay;

   @Column({ name: 'start_time', type: 'time' })
   startTime!: Date;

   @Column({ name: 'end_time', type: 'time' })
   endTime!: Date;

   @Column({ name: 'headquarter_id', type: 'varchar', length: 50 })
   headquarterId!: string;

   @ManyToOne(() => HeadquarterEntity, {
      onDelete: 'CASCADE',
   })
   @JoinColumn({ name: 'headquarter_id' })
   headquarter!: HeadquarterEntity;

   @Column({ name: 'workout_id', type: 'varchar', length: 50 })
   workoutId!: string;

   @ManyToOne(() => WorkoutEntity, (workout) => workout.schedules, {
      onDelete: 'CASCADE',
   })
   @JoinColumn({ name: 'workout_id' })
   workout!: WorkoutEntity;

   @OneToMany(() => ReservationEntity, (reservation) => reservation.workoutSchedule)
   reservations?: ReservationEntity[];
}
