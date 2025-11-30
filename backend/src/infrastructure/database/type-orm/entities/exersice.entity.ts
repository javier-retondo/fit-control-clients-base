import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { RoutineEntity } from './routine.entity';

@Entity({ name: 'exercise' })
export class ExerciseEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ name: 'routine_id', type: 'varchar', length: 50 })
   routineId!: string;

   @Column({ type: 'varchar', length: 150 })
   name!: string;

   @Column({ type: 'text' })
   description!: string;

   @Column({ type: 'int' })
   series!: number;

   @Column({ type: 'int', nullable: true })
   duration?: number;

   @Column({ type: 'int', nullable: true })
   repetitions?: number;

   @Column({ type: 'varchar', length: 500, nullable: true })
   video_url?: string;

   @ManyToOne(() => RoutineEntity, (routine) => routine.exercises, {
      onDelete: 'CASCADE',
   })
   @JoinColumn({ name: 'routine_id' })
   routine?: RoutineEntity;
}
