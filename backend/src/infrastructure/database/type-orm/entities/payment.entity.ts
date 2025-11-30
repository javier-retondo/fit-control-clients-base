import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

import { UserEntity } from './user.entity';
import { PaymentMethod } from '../../../../domain';
import { SubscriptionEntity } from './subscription.entity';

@Entity({ name: 'payment' })
export class PaymentEntity {
   @PrimaryColumn({ type: 'varchar', length: 50 })
   id!: string;

   @Column({ type: 'decimal', precision: 10, scale: 2 })
   amount!: number;

   @Column({ type: 'enum', enum: PaymentMethod })
   paymentMethod!: PaymentMethod;

   @Column({ name: 'partner_id', type: 'varchar', length: 50 })
   partnerId!: string;

   @ManyToOne(() => UserEntity, {
      onDelete: 'SET NULL',
   })
   @JoinColumn({ name: 'partner_id' })
   partner!: UserEntity;

   @Column({ name: 'subscription_id', type: 'varchar', length: 50 })
   subscriptionId!: string;

   @ManyToOne(() => SubscriptionEntity, {
      onDelete: 'SET NULL',
   })
   @JoinColumn({ name: 'subscription_id' })
   subscription!: SubscriptionEntity;

   @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
   createdAt?: Date;
}
