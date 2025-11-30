import {
   Equal,
   In,
   LessThan,
   LessThanOrEqual,
   Like,
   MoreThan,
   MoreThanOrEqual,
   Not,
} from 'typeorm';
import { Where } from '../../../../domain';

export class CoreOrmHelper {
   /**
    * Transforma un objeto `where` con operadores (eq, in, etc.) a un formato compatible con TypeORM.
    */
   mapWhere<T, U extends Record<string, string>>(
      where: Where<T>,
      dtoToPercistenceKeyMap: U,
   ): Record<string, any> {
      if (!where) return {};

      const mapped: Record<string, any> = {};

      for (const key in where) {
         const value = where[key];

         if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
            const operators = value;

            if ('eq' in operators) mapped[key] = Equal(operators.eq);
            else if ('in' in operators) mapped[key] = In(operators.in as readonly unknown[]);
            else if ('like' in operators) mapped[key] = Like(operators.like!);
            else if ('gt' in operators) mapped[key] = MoreThan(operators.gt!);
            else if ('lt' in operators) mapped[key] = LessThan(operators.lt!);
            else if ('gte' in operators) mapped[key] = MoreThanOrEqual(operators.gte);
            else if ('lte' in operators) mapped[key] = LessThanOrEqual(operators.lte);
            else if ('ne' in operators) mapped[key] = Not(Equal(operators.ne));
            else mapped[key] = operators;
         } else {
            mapped[key] = value;
         }
      }

      return this.mapDtoKeysToPersistence(mapped, dtoToPercistenceKeyMap);
   }

   /**
    * Mapea las claves de un objeto de DTO a claves de entidad de persistencia, basado en un mapa de referencia.
    */
   mapDtoKeysToPersistence<T extends Record<string, any>, U extends Record<string, string>>(
      input: T,
      dtoToPercistenceKeyMap: U,
   ): Record<string, any> {
      if (!input) return {};
      return Object.entries(input).reduce(
         (acc, [dtoKey, val]) => {
            const persistenceKey = this.findPersistenceKey(dtoKey, dtoToPercistenceKeyMap);
            if (persistenceKey) acc[persistenceKey] = val;
            return acc;
         },
         {} as Record<string, any>,
      );
   }

   private findPersistenceKey(
      dtoKey: string,
      dtoToPersistenceKeyMap: Record<string, string>,
   ): string | undefined {
      return dtoToPersistenceKeyMap[dtoKey as keyof typeof dtoToPersistenceKeyMap];
   }

   withTimestamps<T extends Record<string, any>>(data: T): T {
      const now = new Date();
      return {
         ...data,
         createdAt: data.createdAt ?? now,
         updatedAt: data.updatedAt ?? now,
      };
   }
}
