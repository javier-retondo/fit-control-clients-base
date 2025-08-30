import { Payment, PaymentDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface PaymentRepository extends IBaseRepository<Payment, PaymentDto> {}
