import { Entity, Column, ManyToOne, OneToMany, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { SubscriptionEntity } from './subscription.entity';
import { MedicalRecordEntity } from './medical-record.entity';
import { WorkoutScheduleEntity } from './workout-schedule.entity';
import { Roles, Status } from '../../../../domain';
import { RoutineEntity } from './routine.entity';
import { ReservationEntity } from './reservation.entity';

@Entity({ name: 'user' })
export class UserEntity {
   @PrimaryColumn({ type: 'varchar', length: 36 })
   id!: string;

   @Column({ type: 'varchar', length: 100 })
   name!: string;

   @Column({ type: 'varchar', length: 100 })
   lastName!: string;

   @Column({ type: 'varchar', length: 100, unique: true })
   email!: string;

   @Column({ type: 'varchar', length: 50, unique: true })
   user!: string;

   @Column({ type: 'varchar', length: 20, unique: true, nullable: true })
   dni?: string;

   @Column({ type: 'varchar', length: 255, nullable: true })
   password?: string;

   @Column({ type: 'boolean', default: false })
   isTemporaryPassword!: boolean;

   @Column({ type: 'enum', enum: Roles })
   role!: Roles;

   @Column({ type: 'enum', enum: Status })
   status!: Status;

   @OneToMany(() => RoutineEntity, (routine) => routine.instructorId)
   routines?: RoutineEntity[];

   @OneToOne(() => SubscriptionEntity, (subscription) => subscription.partner, {
      onDelete: 'SET NULL',
   })
   @JoinColumn({ name: 'subscription_id' })
   suscription?: SubscriptionEntity;

   @Column({ name: 'subscription_id', type: 'varchar', length: 50, nullable: true })
   subscriptionId?: string;

   @OneToOne(() => MedicalRecordEntity, (record) => record.partner, {
      onDelete: 'SET NULL',
   })
   @JoinColumn({ name: 'medical_record_id' })
   medicalRecord?: MedicalRecordEntity;

   @Column({ name: 'medical_record_id', type: 'varchar', length: 50, nullable: true })
   medicalRecordId?: string;

   @OneToMany(() => ReservationEntity, (reservation) => reservation.partner)
   workoutReservations?: ReservationEntity[];

   @OneToMany(() => WorkoutScheduleEntity, (workoutSchedule) => workoutSchedule.instructor)
   workouts?: WorkoutScheduleEntity[];
}
