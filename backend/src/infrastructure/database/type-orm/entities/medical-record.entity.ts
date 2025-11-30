import {
   Entity,
   Column,
   PrimaryColumn,
   ManyToOne,
   JoinColumn,
   CreateDateColumn,
   UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { BloodGroup } from '../../../../domain';

@Entity({ name: 'medical_record' })
export class MedicalRecordEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ name: 'partner_id', type: 'varchar', length: 50 })
   partnerId!: string;

   @ManyToOne(() => UserEntity, {
      onDelete: 'CASCADE',
   })
   @JoinColumn({ name: 'partner_id' })
   partner?: UserEntity;

   @Column({ type: 'enum', enum: BloodGroup })
   bloodGroup!: BloodGroup;

   @Column({ type: 'text', nullable: true })
   allergies!: string;

   @Column({ type: 'text', nullable: true })
   medications!: string;

   @Column({ type: 'text', nullable: true })
   injuries!: string;

   @Column({ type: 'text', nullable: true })
   restrictions!: string;

   @Column({ type: 'text', nullable: true })
   observations!: string;

   @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
   createdAt!: Date;

   @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
   updatedAt!: Date;
}
