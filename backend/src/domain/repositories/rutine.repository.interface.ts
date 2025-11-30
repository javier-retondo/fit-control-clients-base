import { Rutine, RutineDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IRutineRepository extends IBaseRepository<Rutine, RutineDto> {}
