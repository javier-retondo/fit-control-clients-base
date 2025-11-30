import { Headquarter, HeadquarterDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IHeadquarterRepository extends IBaseRepository<Headquarter, HeadquarterDto> {}
