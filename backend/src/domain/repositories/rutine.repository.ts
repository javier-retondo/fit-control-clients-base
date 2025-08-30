import { Rutine, RutineDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface RutineRepository extends IBaseRepository<Rutine, RutineDto> {}
