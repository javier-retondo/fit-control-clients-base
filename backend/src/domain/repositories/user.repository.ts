import { User, UserDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface UserRepository extends IBaseRepository<User, UserDto> {}
