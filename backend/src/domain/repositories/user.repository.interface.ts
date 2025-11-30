import { User, UserDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IUserRepository extends IBaseRepository<User, UserDto> {}
