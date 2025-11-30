import {
   Entity,
   Column,
   PrimaryColumn,
   OneToMany,
   CreateDateColumn,
   UpdateDateColumn,
} from 'typeorm';

import { Status, WeekDay } from '../../../../domain';
import { ExerciseEntity } from './exersice.entity';

@Entity({ name: 'routine' })
export class RoutineEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ name: 'partner_id', type: 'varchar', length: 50 })
   partnerId!: string;

   @Column({ name: 'instructor_id', type: 'varchar', length: 50 })
   instructorId!: string;

   @Column({ type: 'enum', enum: WeekDay })
   weekDay!: WeekDay;

   @Column({ type: 'varchar', length: 150 })
   name!: string;

   @Column({ type: 'varchar', length: 250 })
   objective!: string;

   @Column({ type: 'text' })
   description!: string;

   @Column({ type: 'enum', enum: Status })
   status!: Status;

   @OneToMany(() => ExerciseEntity, (exercise) => exercise.routine, {
      cascade: true,
   })
   exercises?: ExerciseEntity[];

   @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
   createdAt?: Date;

   @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
   updatedAt?: Date;
}
