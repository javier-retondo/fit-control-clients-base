import { Payment, PaymentDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IPaymentRepository extends IBaseRepository<Payment, PaymentDto> {}
