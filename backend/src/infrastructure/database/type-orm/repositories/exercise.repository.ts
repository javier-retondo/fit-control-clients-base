import { DataSource } from 'typeorm';
import {
   Exercise,
   ExerciseDto,
   IExerciseRepository,
   IFindOptions,
   IPaginatedResult,
} from '../../../../domain';
import { CoreOrmHelper } from '../core/core-type-orm.repository';
import { ExerciseEntity } from '../entities';
import { TypeOrmDataSource } from '../datasource';
import { ExerciseMapper } from '../mappers';

export class ExerciseRepository extends CoreOrmHelper implements IExerciseRepository {
   private readonly datasource: DataSource = TypeOrmDataSource;
   private readonly helper = new CoreOrmHelper();
   private readonly relations: (keyof ExerciseEntity)[] = ['routine'];

   private readonly DTO_TO_PERSISTENCE_KEY: Record<
      keyof Pick<ExerciseDto, 'id' | 'name' | 'description'>,
      keyof ExerciseEntity
   > = {
      id: 'id',
      name: 'name',
      description: 'description',
   };

   async save(exercise: Exercise): Promise<Exercise> {
      const entity = ExerciseMapper.toEntity(exercise.get());
      await this.datasource.getRepository(ExerciseEntity).save(entity);
      return exercise;
   }

   async delete(id: string): Promise<number> {
      return await this.datasource
         .getRepository(ExerciseEntity)
         .delete({ id })
         .then((result) => result.affected || 0);
   }

   async update(id: string | number, entity: Exercise): Promise<Exercise> {
      const exerciseEntity = ExerciseMapper.toEntity(entity.get());
      await this.datasource.getRepository(ExerciseEntity).update(id, exerciseEntity);
      return entity;
   }

   async exists(where: Partial<ExerciseDto>): Promise<boolean> {
      const whereMapped = this.helper.mapWhere(where, this.DTO_TO_PERSISTENCE_KEY);
      const count = await this.datasource
         .getRepository(ExerciseEntity)
         .count({ where: whereMapped });
      return count > 0;
   }

   async count(where?: Partial<ExerciseDto>): Promise<number> {
      const whereMapped = where ? this.helper.mapWhere(where, this.DTO_TO_PERSISTENCE_KEY) : {};
      return await this.datasource.getRepository(ExerciseEntity).count({ where: whereMapped });
   }

   async findById(id: string): Promise<Exercise | null> {
      const entity = await this.datasource
         .getRepository(ExerciseEntity)
         .findOne({ where: { id }, relations: this.relations });
      if (!entity) {
         return null;
      }
      return Exercise.rebuild(ExerciseMapper.toDto(entity));
   }

   async findAll(options: IFindOptions<ExerciseDto>): Promise<IPaginatedResult<Exercise>> {
      const { where, order, pagination } = options;
      const whereMapped = where && this.helper.mapWhere(where, this.DTO_TO_PERSISTENCE_KEY);
      const orderMapped = this.helper.mapDtoKeysToPersistence(
         order || { description: this.DTO_TO_PERSISTENCE_KEY.description },
         this.DTO_TO_PERSISTENCE_KEY,
      );
      const offset = (pagination?.page || 0) * (pagination?.limit || 10);
      const limit = pagination?.limit || 10;
      const dbEntities = await this.datasource
         .getRepository(ExerciseEntity)
         .findAndCount({
            where: whereMapped,
            order: orderMapped,
            skip: offset,
            take: limit,
            relations: this.relations,
         })
         .then((result) => {
            const [entities, total] = result;
            return {
               entities: entities.map((entity) => Exercise.rebuild(ExerciseMapper.toDto(entity))),
               total,
            };
         });

      return {
         data: dbEntities.entities,
         total: dbEntities.total,
         page: pagination?.page || 0,
         limit: limit,
      };
   }
}
