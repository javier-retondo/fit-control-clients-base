import { Reservation, ReservationDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IReservationRepository extends IBaseRepository<Reservation, ReservationDto> {}
