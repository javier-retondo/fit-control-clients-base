import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { EnvConfig } from '../config/env.config';
import { UserEntity } from '../database/type-orm/entities';

export const AppDataSource = new DataSource({
   type: 'mysql',
   host: EnvConfig.DB_HOST,
   port: EnvConfig.DB_PORT,
   username: EnvConfig.DB_USER,
   password: EnvConfig.DB_PASS,
   database: EnvConfig.DB_NAME,

   entities: [UserEntity],
   synchronize: false,
   logging: EnvConfig.NODE_ENV !== 'production',
});
