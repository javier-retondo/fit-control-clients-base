/**
 * BaseRepository: interfaz abstracta a implementar por todos los repositorios.
 *
 * @template T - tipo de la entidad
 * @template U - tipo de la transacción (por ejemplo, en TypeORM podría ser Connection o EntityManager)
 * @template V - tipo de los datos persistidos (por ejemplo, DTOs o entidades de base de datos)
 */
export interface IBaseRepository<T, V, U = unknown> {
   findById(id: string | number, transaction?: U): Promise<T | null>;
   findAll(
      options: IFindOptions<V>,
      transaction?: U,
   ): Promise<IPaginatedResult<T>>;

   save(entity: T, transaction?: U): Promise<T>;
   update(id: string | number, entity: T, transaction?: U): Promise<T>;
   delete(id: string | number, transaction?: U): Promise<number>;

   exists(where: Partial<Where<V>>, transaction?: U): Promise<boolean>;
   count(where?: Partial<Where<V>>, transaction?: U): Promise<number>;
}

// --------- Tipos e interfaces auxiliares --------- //

type TComparable<T> = {
   eq?: T;
   ne?: T;
   in?: T[];
   notIn?: T[];
   lt?: T;
   lte?: T;
   gt?: T;
   gte?: T;
   like?: string;
};

export type Where<T> = {
   [K in keyof T]?: TComparable<T[K]> | T[K] | Where<T[K]>;
};

export interface IFindOptions<T> {
   where?: Partial<Where<T>>;
   order?: Partial<Record<keyof T, 'ASC' | 'DESC'>>;
    pagination?: {
    page: number;
    limit: number;
  };
}

export interface IPaginatedResult<T> {
   data: T[];
   total: number;
   page: number;
   limit: number;
}
