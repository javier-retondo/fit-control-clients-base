import { Headquarter, HeadquarterDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface HeadquarterRepository extends IBaseRepository<Headquarter, HeadquarterDto> {}
