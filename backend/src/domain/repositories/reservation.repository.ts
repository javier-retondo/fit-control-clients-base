import { Reservation, ReservationDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface ReservationRepository extends IBaseRepository<Reservation, ReservationDto> {}
