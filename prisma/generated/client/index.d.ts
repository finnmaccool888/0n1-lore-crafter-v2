
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CharacterSubmission
 * 
 */
export type CharacterSubmission = $Result.DefaultSelection<Prisma.$CharacterSubmissionPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubmissionStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]

}

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CharacterSubmissions
 * const characterSubmissions = await prisma.characterSubmission.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CharacterSubmissions
   * const characterSubmissions = await prisma.characterSubmission.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.characterSubmission`: Exposes CRUD operations for the **CharacterSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterSubmissions
    * const characterSubmissions = await prisma.characterSubmission.findMany()
    * ```
    */
  get characterSubmission(): Prisma.CharacterSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CharacterSubmission: 'CharacterSubmission',
    Admin: 'Admin',
    Character: 'Character'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "characterSubmission" | "admin" | "character"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CharacterSubmission: {
        payload: Prisma.$CharacterSubmissionPayload<ExtArgs>
        fields: Prisma.CharacterSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload>
          }
          findFirst: {
            args: Prisma.CharacterSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload>
          }
          findMany: {
            args: Prisma.CharacterSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload>[]
          }
          create: {
            args: Prisma.CharacterSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload>
          }
          createMany: {
            args: Prisma.CharacterSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload>[]
          }
          delete: {
            args: Prisma.CharacterSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload>
          }
          update: {
            args: Prisma.CharacterSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.CharacterSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.CharacterSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterSubmissionPayload>
          }
          aggregate: {
            args: Prisma.CharacterSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterSubmission>
          }
          groupBy: {
            args: Prisma.CharacterSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterSubmissionCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    characterSubmission?: CharacterSubmissionOmit
    admin?: AdminOmit
    character?: CharacterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    mentors: number
    students: number
    contemporaries: number
    relatedTo: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentors?: boolean | CharacterCountOutputTypeCountMentorsArgs
    students?: boolean | CharacterCountOutputTypeCountStudentsArgs
    contemporaries?: boolean | CharacterCountOutputTypeCountContemporariesArgs
    relatedTo?: boolean | CharacterCountOutputTypeCountRelatedToArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountMentorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountContemporariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountRelatedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CharacterSubmission
   */

  export type AggregateCharacterSubmission = {
    _count: CharacterSubmissionCountAggregateOutputType | null
    _min: CharacterSubmissionMinAggregateOutputType | null
    _max: CharacterSubmissionMaxAggregateOutputType | null
  }

  export type CharacterSubmissionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.SubmissionStatus | null
    reviewNotes: string | null
    reviewerId: string | null
    notionPageId: string | null
    submitterEmail: string | null
  }

  export type CharacterSubmissionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.SubmissionStatus | null
    reviewNotes: string | null
    reviewerId: string | null
    notionPageId: string | null
    submitterEmail: string | null
  }

  export type CharacterSubmissionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    status: number
    characterData: number
    aiAnalysis: number
    timelineVerification: number
    agingValidation: number
    reviewNotes: number
    reviewerId: number
    notionPageId: number
    submitterEmail: number
    _all: number
  }


  export type CharacterSubmissionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    reviewNotes?: true
    reviewerId?: true
    notionPageId?: true
    submitterEmail?: true
  }

  export type CharacterSubmissionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    reviewNotes?: true
    reviewerId?: true
    notionPageId?: true
    submitterEmail?: true
  }

  export type CharacterSubmissionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    characterData?: true
    aiAnalysis?: true
    timelineVerification?: true
    agingValidation?: true
    reviewNotes?: true
    reviewerId?: true
    notionPageId?: true
    submitterEmail?: true
    _all?: true
  }

  export type CharacterSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterSubmission to aggregate.
     */
    where?: CharacterSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterSubmissions to fetch.
     */
    orderBy?: CharacterSubmissionOrderByWithRelationInput | CharacterSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterSubmissions
    **/
    _count?: true | CharacterSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterSubmissionMaxAggregateInputType
  }

  export type GetCharacterSubmissionAggregateType<T extends CharacterSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterSubmission[P]>
      : GetScalarType<T[P], AggregateCharacterSubmission[P]>
  }




  export type CharacterSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterSubmissionWhereInput
    orderBy?: CharacterSubmissionOrderByWithAggregationInput | CharacterSubmissionOrderByWithAggregationInput[]
    by: CharacterSubmissionScalarFieldEnum[] | CharacterSubmissionScalarFieldEnum
    having?: CharacterSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterSubmissionCountAggregateInputType | true
    _min?: CharacterSubmissionMinAggregateInputType
    _max?: CharacterSubmissionMaxAggregateInputType
  }

  export type CharacterSubmissionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.SubmissionStatus
    characterData: JsonValue
    aiAnalysis: JsonValue | null
    timelineVerification: JsonValue | null
    agingValidation: JsonValue | null
    reviewNotes: string | null
    reviewerId: string | null
    notionPageId: string | null
    submitterEmail: string | null
    _count: CharacterSubmissionCountAggregateOutputType | null
    _min: CharacterSubmissionMinAggregateOutputType | null
    _max: CharacterSubmissionMaxAggregateOutputType | null
  }

  type GetCharacterSubmissionGroupByPayload<T extends CharacterSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    characterData?: boolean
    aiAnalysis?: boolean
    timelineVerification?: boolean
    agingValidation?: boolean
    reviewNotes?: boolean
    reviewerId?: boolean
    notionPageId?: boolean
    submitterEmail?: boolean
  }, ExtArgs["result"]["characterSubmission"]>

  export type CharacterSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    characterData?: boolean
    aiAnalysis?: boolean
    timelineVerification?: boolean
    agingValidation?: boolean
    reviewNotes?: boolean
    reviewerId?: boolean
    notionPageId?: boolean
    submitterEmail?: boolean
  }, ExtArgs["result"]["characterSubmission"]>

  export type CharacterSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    characterData?: boolean
    aiAnalysis?: boolean
    timelineVerification?: boolean
    agingValidation?: boolean
    reviewNotes?: boolean
    reviewerId?: boolean
    notionPageId?: boolean
    submitterEmail?: boolean
  }, ExtArgs["result"]["characterSubmission"]>

  export type CharacterSubmissionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    characterData?: boolean
    aiAnalysis?: boolean
    timelineVerification?: boolean
    agingValidation?: boolean
    reviewNotes?: boolean
    reviewerId?: boolean
    notionPageId?: boolean
    submitterEmail?: boolean
  }

  export type CharacterSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "status" | "characterData" | "aiAnalysis" | "timelineVerification" | "agingValidation" | "reviewNotes" | "reviewerId" | "notionPageId" | "submitterEmail", ExtArgs["result"]["characterSubmission"]>

  export type $CharacterSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.SubmissionStatus
      characterData: Prisma.JsonValue
      aiAnalysis: Prisma.JsonValue | null
      timelineVerification: Prisma.JsonValue | null
      agingValidation: Prisma.JsonValue | null
      reviewNotes: string | null
      reviewerId: string | null
      notionPageId: string | null
      submitterEmail: string | null
    }, ExtArgs["result"]["characterSubmission"]>
    composites: {}
  }

  type CharacterSubmissionGetPayload<S extends boolean | null | undefined | CharacterSubmissionDefaultArgs> = $Result.GetResult<Prisma.$CharacterSubmissionPayload, S>

  type CharacterSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterSubmissionCountAggregateInputType | true
    }

  export interface CharacterSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterSubmission'], meta: { name: 'CharacterSubmission' } }
    /**
     * Find zero or one CharacterSubmission that matches the filter.
     * @param {CharacterSubmissionFindUniqueArgs} args - Arguments to find a CharacterSubmission
     * @example
     * // Get one CharacterSubmission
     * const characterSubmission = await prisma.characterSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterSubmissionFindUniqueArgs>(args: SelectSubset<T, CharacterSubmissionFindUniqueArgs<ExtArgs>>): Prisma__CharacterSubmissionClient<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CharacterSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterSubmissionFindUniqueOrThrowArgs} args - Arguments to find a CharacterSubmission
     * @example
     * // Get one CharacterSubmission
     * const characterSubmission = await prisma.characterSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterSubmissionClient<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterSubmissionFindFirstArgs} args - Arguments to find a CharacterSubmission
     * @example
     * // Get one CharacterSubmission
     * const characterSubmission = await prisma.characterSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterSubmissionFindFirstArgs>(args?: SelectSubset<T, CharacterSubmissionFindFirstArgs<ExtArgs>>): Prisma__CharacterSubmissionClient<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterSubmissionFindFirstOrThrowArgs} args - Arguments to find a CharacterSubmission
     * @example
     * // Get one CharacterSubmission
     * const characterSubmission = await prisma.characterSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterSubmissionClient<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CharacterSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterSubmissions
     * const characterSubmissions = await prisma.characterSubmission.findMany()
     * 
     * // Get first 10 CharacterSubmissions
     * const characterSubmissions = await prisma.characterSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterSubmissionWithIdOnly = await prisma.characterSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterSubmissionFindManyArgs>(args?: SelectSubset<T, CharacterSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CharacterSubmission.
     * @param {CharacterSubmissionCreateArgs} args - Arguments to create a CharacterSubmission.
     * @example
     * // Create one CharacterSubmission
     * const CharacterSubmission = await prisma.characterSubmission.create({
     *   data: {
     *     // ... data to create a CharacterSubmission
     *   }
     * })
     * 
     */
    create<T extends CharacterSubmissionCreateArgs>(args: SelectSubset<T, CharacterSubmissionCreateArgs<ExtArgs>>): Prisma__CharacterSubmissionClient<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CharacterSubmissions.
     * @param {CharacterSubmissionCreateManyArgs} args - Arguments to create many CharacterSubmissions.
     * @example
     * // Create many CharacterSubmissions
     * const characterSubmission = await prisma.characterSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterSubmissionCreateManyArgs>(args?: SelectSubset<T, CharacterSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharacterSubmissions and returns the data saved in the database.
     * @param {CharacterSubmissionCreateManyAndReturnArgs} args - Arguments to create many CharacterSubmissions.
     * @example
     * // Create many CharacterSubmissions
     * const characterSubmission = await prisma.characterSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharacterSubmissions and only return the `id`
     * const characterSubmissionWithIdOnly = await prisma.characterSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CharacterSubmission.
     * @param {CharacterSubmissionDeleteArgs} args - Arguments to delete one CharacterSubmission.
     * @example
     * // Delete one CharacterSubmission
     * const CharacterSubmission = await prisma.characterSubmission.delete({
     *   where: {
     *     // ... filter to delete one CharacterSubmission
     *   }
     * })
     * 
     */
    delete<T extends CharacterSubmissionDeleteArgs>(args: SelectSubset<T, CharacterSubmissionDeleteArgs<ExtArgs>>): Prisma__CharacterSubmissionClient<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CharacterSubmission.
     * @param {CharacterSubmissionUpdateArgs} args - Arguments to update one CharacterSubmission.
     * @example
     * // Update one CharacterSubmission
     * const characterSubmission = await prisma.characterSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterSubmissionUpdateArgs>(args: SelectSubset<T, CharacterSubmissionUpdateArgs<ExtArgs>>): Prisma__CharacterSubmissionClient<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CharacterSubmissions.
     * @param {CharacterSubmissionDeleteManyArgs} args - Arguments to filter CharacterSubmissions to delete.
     * @example
     * // Delete a few CharacterSubmissions
     * const { count } = await prisma.characterSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterSubmissionDeleteManyArgs>(args?: SelectSubset<T, CharacterSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterSubmissions
     * const characterSubmission = await prisma.characterSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterSubmissionUpdateManyArgs>(args: SelectSubset<T, CharacterSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterSubmissions and returns the data updated in the database.
     * @param {CharacterSubmissionUpdateManyAndReturnArgs} args - Arguments to update many CharacterSubmissions.
     * @example
     * // Update many CharacterSubmissions
     * const characterSubmission = await prisma.characterSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CharacterSubmissions and only return the `id`
     * const characterSubmissionWithIdOnly = await prisma.characterSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CharacterSubmission.
     * @param {CharacterSubmissionUpsertArgs} args - Arguments to update or create a CharacterSubmission.
     * @example
     * // Update or create a CharacterSubmission
     * const characterSubmission = await prisma.characterSubmission.upsert({
     *   create: {
     *     // ... data to create a CharacterSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterSubmission we want to update
     *   }
     * })
     */
    upsert<T extends CharacterSubmissionUpsertArgs>(args: SelectSubset<T, CharacterSubmissionUpsertArgs<ExtArgs>>): Prisma__CharacterSubmissionClient<$Result.GetResult<Prisma.$CharacterSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CharacterSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterSubmissionCountArgs} args - Arguments to filter CharacterSubmissions to count.
     * @example
     * // Count the number of CharacterSubmissions
     * const count = await prisma.characterSubmission.count({
     *   where: {
     *     // ... the filter for the CharacterSubmissions we want to count
     *   }
     * })
    **/
    count<T extends CharacterSubmissionCountArgs>(
      args?: Subset<T, CharacterSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterSubmissionAggregateArgs>(args: Subset<T, CharacterSubmissionAggregateArgs>): Prisma.PrismaPromise<GetCharacterSubmissionAggregateType<T>>

    /**
     * Group by CharacterSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: CharacterSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterSubmission model
   */
  readonly fields: CharacterSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CharacterSubmission model
   */
  interface CharacterSubmissionFieldRefs {
    readonly id: FieldRef<"CharacterSubmission", 'String'>
    readonly createdAt: FieldRef<"CharacterSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"CharacterSubmission", 'DateTime'>
    readonly status: FieldRef<"CharacterSubmission", 'SubmissionStatus'>
    readonly characterData: FieldRef<"CharacterSubmission", 'Json'>
    readonly aiAnalysis: FieldRef<"CharacterSubmission", 'Json'>
    readonly timelineVerification: FieldRef<"CharacterSubmission", 'Json'>
    readonly agingValidation: FieldRef<"CharacterSubmission", 'Json'>
    readonly reviewNotes: FieldRef<"CharacterSubmission", 'String'>
    readonly reviewerId: FieldRef<"CharacterSubmission", 'String'>
    readonly notionPageId: FieldRef<"CharacterSubmission", 'String'>
    readonly submitterEmail: FieldRef<"CharacterSubmission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CharacterSubmission findUnique
   */
  export type CharacterSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CharacterSubmission to fetch.
     */
    where: CharacterSubmissionWhereUniqueInput
  }

  /**
   * CharacterSubmission findUniqueOrThrow
   */
  export type CharacterSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CharacterSubmission to fetch.
     */
    where: CharacterSubmissionWhereUniqueInput
  }

  /**
   * CharacterSubmission findFirst
   */
  export type CharacterSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CharacterSubmission to fetch.
     */
    where?: CharacterSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterSubmissions to fetch.
     */
    orderBy?: CharacterSubmissionOrderByWithRelationInput | CharacterSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterSubmissions.
     */
    cursor?: CharacterSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterSubmissions.
     */
    distinct?: CharacterSubmissionScalarFieldEnum | CharacterSubmissionScalarFieldEnum[]
  }

  /**
   * CharacterSubmission findFirstOrThrow
   */
  export type CharacterSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CharacterSubmission to fetch.
     */
    where?: CharacterSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterSubmissions to fetch.
     */
    orderBy?: CharacterSubmissionOrderByWithRelationInput | CharacterSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterSubmissions.
     */
    cursor?: CharacterSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterSubmissions.
     */
    distinct?: CharacterSubmissionScalarFieldEnum | CharacterSubmissionScalarFieldEnum[]
  }

  /**
   * CharacterSubmission findMany
   */
  export type CharacterSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CharacterSubmissions to fetch.
     */
    where?: CharacterSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterSubmissions to fetch.
     */
    orderBy?: CharacterSubmissionOrderByWithRelationInput | CharacterSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterSubmissions.
     */
    cursor?: CharacterSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterSubmissions.
     */
    skip?: number
    distinct?: CharacterSubmissionScalarFieldEnum | CharacterSubmissionScalarFieldEnum[]
  }

  /**
   * CharacterSubmission create
   */
  export type CharacterSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a CharacterSubmission.
     */
    data: XOR<CharacterSubmissionCreateInput, CharacterSubmissionUncheckedCreateInput>
  }

  /**
   * CharacterSubmission createMany
   */
  export type CharacterSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterSubmissions.
     */
    data: CharacterSubmissionCreateManyInput | CharacterSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterSubmission createManyAndReturn
   */
  export type CharacterSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many CharacterSubmissions.
     */
    data: CharacterSubmissionCreateManyInput | CharacterSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterSubmission update
   */
  export type CharacterSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a CharacterSubmission.
     */
    data: XOR<CharacterSubmissionUpdateInput, CharacterSubmissionUncheckedUpdateInput>
    /**
     * Choose, which CharacterSubmission to update.
     */
    where: CharacterSubmissionWhereUniqueInput
  }

  /**
   * CharacterSubmission updateMany
   */
  export type CharacterSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterSubmissions.
     */
    data: XOR<CharacterSubmissionUpdateManyMutationInput, CharacterSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which CharacterSubmissions to update
     */
    where?: CharacterSubmissionWhereInput
    /**
     * Limit how many CharacterSubmissions to update.
     */
    limit?: number
  }

  /**
   * CharacterSubmission updateManyAndReturn
   */
  export type CharacterSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update CharacterSubmissions.
     */
    data: XOR<CharacterSubmissionUpdateManyMutationInput, CharacterSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which CharacterSubmissions to update
     */
    where?: CharacterSubmissionWhereInput
    /**
     * Limit how many CharacterSubmissions to update.
     */
    limit?: number
  }

  /**
   * CharacterSubmission upsert
   */
  export type CharacterSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the CharacterSubmission to update in case it exists.
     */
    where: CharacterSubmissionWhereUniqueInput
    /**
     * In case the CharacterSubmission found by the `where` argument doesn't exist, create a new CharacterSubmission with this data.
     */
    create: XOR<CharacterSubmissionCreateInput, CharacterSubmissionUncheckedCreateInput>
    /**
     * In case the CharacterSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterSubmissionUpdateInput, CharacterSubmissionUncheckedUpdateInput>
  }

  /**
   * CharacterSubmission delete
   */
  export type CharacterSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
    /**
     * Filter which CharacterSubmission to delete.
     */
    where: CharacterSubmissionWhereUniqueInput
  }

  /**
   * CharacterSubmission deleteMany
   */
  export type CharacterSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterSubmissions to delete
     */
    where?: CharacterSubmissionWhereInput
    /**
     * Limit how many CharacterSubmissions to delete.
     */
    limit?: number
  }

  /**
   * CharacterSubmission without action
   */
  export type CharacterSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterSubmission
     */
    select?: CharacterSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterSubmission
     */
    omit?: CharacterSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    age: number | null
    birthYear: number | null
    temporalFragments: number | null
    algorithmComplexity: number | null
    coreIntegrity: number | null
  }

  export type CharacterSumAggregateOutputType = {
    age: number | null
    birthYear: number | null
    temporalFragments: number | null
    algorithmComplexity: number | null
    coreIntegrity: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    birthYear: number | null
    maturityCategory: string | null
    timePeriod: string | null
    temporalFragments: number | null
    algorithmComplexity: number | null
    coreIntegrity: number | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    birthYear: number | null
    maturityCategory: string | null
    timePeriod: string | null
    temporalFragments: number | null
    algorithmComplexity: number | null
    coreIntegrity: number | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    name: number
    age: number
    birthYear: number
    maturityCategory: number
    timePeriod: number
    episodeAlignment: number
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    age?: true
    birthYear?: true
    temporalFragments?: true
    algorithmComplexity?: true
    coreIntegrity?: true
  }

  export type CharacterSumAggregateInputType = {
    age?: true
    birthYear?: true
    temporalFragments?: true
    algorithmComplexity?: true
    coreIntegrity?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    birthYear?: true
    maturityCategory?: true
    timePeriod?: true
    temporalFragments?: true
    algorithmComplexity?: true
    coreIntegrity?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    birthYear?: true
    maturityCategory?: true
    timePeriod?: true
    temporalFragments?: true
    algorithmComplexity?: true
    coreIntegrity?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    birthYear?: true
    maturityCategory?: true
    timePeriod?: true
    episodeAlignment?: true
    temporalFragments?: true
    algorithmComplexity?: true
    coreIntegrity?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment: string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio: string | null
    createdAt: Date
    updatedAt: Date
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    birthYear?: boolean
    maturityCategory?: boolean
    timePeriod?: boolean
    episodeAlignment?: boolean
    temporalFragments?: boolean
    algorithmComplexity?: boolean
    coreIntegrity?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mentors?: boolean | Character$mentorsArgs<ExtArgs>
    students?: boolean | Character$studentsArgs<ExtArgs>
    contemporaries?: boolean | Character$contemporariesArgs<ExtArgs>
    relatedTo?: boolean | Character$relatedToArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    birthYear?: boolean
    maturityCategory?: boolean
    timePeriod?: boolean
    episodeAlignment?: boolean
    temporalFragments?: boolean
    algorithmComplexity?: boolean
    coreIntegrity?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    birthYear?: boolean
    maturityCategory?: boolean
    timePeriod?: boolean
    episodeAlignment?: boolean
    temporalFragments?: boolean
    algorithmComplexity?: boolean
    coreIntegrity?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    birthYear?: boolean
    maturityCategory?: boolean
    timePeriod?: boolean
    episodeAlignment?: boolean
    temporalFragments?: boolean
    algorithmComplexity?: boolean
    coreIntegrity?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "birthYear" | "maturityCategory" | "timePeriod" | "episodeAlignment" | "temporalFragments" | "algorithmComplexity" | "coreIntegrity" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentors?: boolean | Character$mentorsArgs<ExtArgs>
    students?: boolean | Character$studentsArgs<ExtArgs>
    contemporaries?: boolean | Character$contemporariesArgs<ExtArgs>
    relatedTo?: boolean | Character$relatedToArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      mentors: Prisma.$CharacterPayload<ExtArgs>[]
      students: Prisma.$CharacterPayload<ExtArgs>[]
      contemporaries: Prisma.$CharacterPayload<ExtArgs>[]
      relatedTo: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      age: number
      birthYear: number
      maturityCategory: string
      timePeriod: string
      episodeAlignment: string[]
      temporalFragments: number
      algorithmComplexity: number
      coreIntegrity: number
      bio: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentors<T extends Character$mentorsArgs<ExtArgs> = {}>(args?: Subset<T, Character$mentorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Character$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Character$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contemporaries<T extends Character$contemporariesArgs<ExtArgs> = {}>(args?: Subset<T, Character$contemporariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedTo<T extends Character$relatedToArgs<ExtArgs> = {}>(args?: Subset<T, Character$relatedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'String'>
    readonly name: FieldRef<"Character", 'String'>
    readonly age: FieldRef<"Character", 'Int'>
    readonly birthYear: FieldRef<"Character", 'Int'>
    readonly maturityCategory: FieldRef<"Character", 'String'>
    readonly timePeriod: FieldRef<"Character", 'String'>
    readonly episodeAlignment: FieldRef<"Character", 'String[]'>
    readonly temporalFragments: FieldRef<"Character", 'Int'>
    readonly algorithmComplexity: FieldRef<"Character", 'Int'>
    readonly coreIntegrity: FieldRef<"Character", 'Int'>
    readonly bio: FieldRef<"Character", 'String'>
    readonly createdAt: FieldRef<"Character", 'DateTime'>
    readonly updatedAt: FieldRef<"Character", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.mentors
   */
  export type Character$mentorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character.students
   */
  export type Character$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character.contemporaries
   */
  export type Character$contemporariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character.relatedTo
   */
  export type Character$relatedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CharacterSubmissionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    characterData: 'characterData',
    aiAnalysis: 'aiAnalysis',
    timelineVerification: 'timelineVerification',
    agingValidation: 'agingValidation',
    reviewNotes: 'reviewNotes',
    reviewerId: 'reviewerId',
    notionPageId: 'notionPageId',
    submitterEmail: 'submitterEmail'
  };

  export type CharacterSubmissionScalarFieldEnum = (typeof CharacterSubmissionScalarFieldEnum)[keyof typeof CharacterSubmissionScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    birthYear: 'birthYear',
    maturityCategory: 'maturityCategory',
    timePeriod: 'timePeriod',
    episodeAlignment: 'episodeAlignment',
    temporalFragments: 'temporalFragments',
    algorithmComplexity: 'algorithmComplexity',
    coreIntegrity: 'coreIntegrity',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CharacterSubmissionWhereInput = {
    AND?: CharacterSubmissionWhereInput | CharacterSubmissionWhereInput[]
    OR?: CharacterSubmissionWhereInput[]
    NOT?: CharacterSubmissionWhereInput | CharacterSubmissionWhereInput[]
    id?: StringFilter<"CharacterSubmission"> | string
    createdAt?: DateTimeFilter<"CharacterSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"CharacterSubmission"> | Date | string
    status?: EnumSubmissionStatusFilter<"CharacterSubmission"> | $Enums.SubmissionStatus
    characterData?: JsonFilter<"CharacterSubmission">
    aiAnalysis?: JsonNullableFilter<"CharacterSubmission">
    timelineVerification?: JsonNullableFilter<"CharacterSubmission">
    agingValidation?: JsonNullableFilter<"CharacterSubmission">
    reviewNotes?: StringNullableFilter<"CharacterSubmission"> | string | null
    reviewerId?: StringNullableFilter<"CharacterSubmission"> | string | null
    notionPageId?: StringNullableFilter<"CharacterSubmission"> | string | null
    submitterEmail?: StringNullableFilter<"CharacterSubmission"> | string | null
  }

  export type CharacterSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    characterData?: SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    timelineVerification?: SortOrderInput | SortOrder
    agingValidation?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    reviewerId?: SortOrderInput | SortOrder
    notionPageId?: SortOrderInput | SortOrder
    submitterEmail?: SortOrderInput | SortOrder
  }

  export type CharacterSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharacterSubmissionWhereInput | CharacterSubmissionWhereInput[]
    OR?: CharacterSubmissionWhereInput[]
    NOT?: CharacterSubmissionWhereInput | CharacterSubmissionWhereInput[]
    createdAt?: DateTimeFilter<"CharacterSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"CharacterSubmission"> | Date | string
    status?: EnumSubmissionStatusFilter<"CharacterSubmission"> | $Enums.SubmissionStatus
    characterData?: JsonFilter<"CharacterSubmission">
    aiAnalysis?: JsonNullableFilter<"CharacterSubmission">
    timelineVerification?: JsonNullableFilter<"CharacterSubmission">
    agingValidation?: JsonNullableFilter<"CharacterSubmission">
    reviewNotes?: StringNullableFilter<"CharacterSubmission"> | string | null
    reviewerId?: StringNullableFilter<"CharacterSubmission"> | string | null
    notionPageId?: StringNullableFilter<"CharacterSubmission"> | string | null
    submitterEmail?: StringNullableFilter<"CharacterSubmission"> | string | null
  }, "id">

  export type CharacterSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    characterData?: SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    timelineVerification?: SortOrderInput | SortOrder
    agingValidation?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    reviewerId?: SortOrderInput | SortOrder
    notionPageId?: SortOrderInput | SortOrder
    submitterEmail?: SortOrderInput | SortOrder
    _count?: CharacterSubmissionCountOrderByAggregateInput
    _max?: CharacterSubmissionMaxOrderByAggregateInput
    _min?: CharacterSubmissionMinOrderByAggregateInput
  }

  export type CharacterSubmissionScalarWhereWithAggregatesInput = {
    AND?: CharacterSubmissionScalarWhereWithAggregatesInput | CharacterSubmissionScalarWhereWithAggregatesInput[]
    OR?: CharacterSubmissionScalarWhereWithAggregatesInput[]
    NOT?: CharacterSubmissionScalarWhereWithAggregatesInput | CharacterSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CharacterSubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CharacterSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CharacterSubmission"> | Date | string
    status?: EnumSubmissionStatusWithAggregatesFilter<"CharacterSubmission"> | $Enums.SubmissionStatus
    characterData?: JsonWithAggregatesFilter<"CharacterSubmission">
    aiAnalysis?: JsonNullableWithAggregatesFilter<"CharacterSubmission">
    timelineVerification?: JsonNullableWithAggregatesFilter<"CharacterSubmission">
    agingValidation?: JsonNullableWithAggregatesFilter<"CharacterSubmission">
    reviewNotes?: StringNullableWithAggregatesFilter<"CharacterSubmission"> | string | null
    reviewerId?: StringNullableWithAggregatesFilter<"CharacterSubmission"> | string | null
    notionPageId?: StringNullableWithAggregatesFilter<"CharacterSubmission"> | string | null
    submitterEmail?: StringNullableWithAggregatesFilter<"CharacterSubmission"> | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    age?: IntFilter<"Character"> | number
    birthYear?: IntFilter<"Character"> | number
    maturityCategory?: StringFilter<"Character"> | string
    timePeriod?: StringFilter<"Character"> | string
    episodeAlignment?: StringNullableListFilter<"Character">
    temporalFragments?: IntFilter<"Character"> | number
    algorithmComplexity?: IntFilter<"Character"> | number
    coreIntegrity?: IntFilter<"Character"> | number
    bio?: StringNullableFilter<"Character"> | string | null
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    mentors?: CharacterListRelationFilter
    students?: CharacterListRelationFilter
    contemporaries?: CharacterListRelationFilter
    relatedTo?: CharacterListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    birthYear?: SortOrder
    maturityCategory?: SortOrder
    timePeriod?: SortOrder
    episodeAlignment?: SortOrder
    temporalFragments?: SortOrder
    algorithmComplexity?: SortOrder
    coreIntegrity?: SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mentors?: CharacterOrderByRelationAggregateInput
    students?: CharacterOrderByRelationAggregateInput
    contemporaries?: CharacterOrderByRelationAggregateInput
    relatedTo?: CharacterOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    name?: StringFilter<"Character"> | string
    age?: IntFilter<"Character"> | number
    birthYear?: IntFilter<"Character"> | number
    maturityCategory?: StringFilter<"Character"> | string
    timePeriod?: StringFilter<"Character"> | string
    episodeAlignment?: StringNullableListFilter<"Character">
    temporalFragments?: IntFilter<"Character"> | number
    algorithmComplexity?: IntFilter<"Character"> | number
    coreIntegrity?: IntFilter<"Character"> | number
    bio?: StringNullableFilter<"Character"> | string | null
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    mentors?: CharacterListRelationFilter
    students?: CharacterListRelationFilter
    contemporaries?: CharacterListRelationFilter
    relatedTo?: CharacterListRelationFilter
  }, "id">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    birthYear?: SortOrder
    maturityCategory?: SortOrder
    timePeriod?: SortOrder
    episodeAlignment?: SortOrder
    temporalFragments?: SortOrder
    algorithmComplexity?: SortOrder
    coreIntegrity?: SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Character"> | string
    name?: StringWithAggregatesFilter<"Character"> | string
    age?: IntWithAggregatesFilter<"Character"> | number
    birthYear?: IntWithAggregatesFilter<"Character"> | number
    maturityCategory?: StringWithAggregatesFilter<"Character"> | string
    timePeriod?: StringWithAggregatesFilter<"Character"> | string
    episodeAlignment?: StringNullableListFilter<"Character">
    temporalFragments?: IntWithAggregatesFilter<"Character"> | number
    algorithmComplexity?: IntWithAggregatesFilter<"Character"> | number
    coreIntegrity?: IntWithAggregatesFilter<"Character"> | number
    bio?: StringNullableWithAggregatesFilter<"Character"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
  }

  export type CharacterSubmissionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    characterData: JsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    timelineVerification?: NullableJsonNullValueInput | InputJsonValue
    agingValidation?: NullableJsonNullValueInput | InputJsonValue
    reviewNotes?: string | null
    reviewerId?: string | null
    notionPageId?: string | null
    submitterEmail?: string | null
  }

  export type CharacterSubmissionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    characterData: JsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    timelineVerification?: NullableJsonNullValueInput | InputJsonValue
    agingValidation?: NullableJsonNullValueInput | InputJsonValue
    reviewNotes?: string | null
    reviewerId?: string | null
    notionPageId?: string | null
    submitterEmail?: string | null
  }

  export type CharacterSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    characterData?: JsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    timelineVerification?: NullableJsonNullValueInput | InputJsonValue
    agingValidation?: NullableJsonNullValueInput | InputJsonValue
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    characterData?: JsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    timelineVerification?: NullableJsonNullValueInput | InputJsonValue
    agingValidation?: NullableJsonNullValueInput | InputJsonValue
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterSubmissionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    characterData: JsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    timelineVerification?: NullableJsonNullValueInput | InputJsonValue
    agingValidation?: NullableJsonNullValueInput | InputJsonValue
    reviewNotes?: string | null
    reviewerId?: string | null
    notionPageId?: string | null
    submitterEmail?: string | null
  }

  export type CharacterSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    characterData?: JsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    timelineVerification?: NullableJsonNullValueInput | InputJsonValue
    agingValidation?: NullableJsonNullValueInput | InputJsonValue
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    characterData?: JsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    timelineVerification?: NullableJsonNullValueInput | InputJsonValue
    agingValidation?: NullableJsonNullValueInput | InputJsonValue
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterCreateInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentors?: CharacterCreateNestedManyWithoutStudentsInput
    students?: CharacterCreateNestedManyWithoutMentorsInput
    contemporaries?: CharacterCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterCreateNestedManyWithoutContemporariesInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentors?: CharacterUncheckedCreateNestedManyWithoutStudentsInput
    students?: CharacterUncheckedCreateNestedManyWithoutMentorsInput
    contemporaries?: CharacterUncheckedCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterUncheckedCreateNestedManyWithoutContemporariesInput
  }

  export type CharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentors?: CharacterUpdateManyWithoutStudentsNestedInput
    students?: CharacterUpdateManyWithoutMentorsNestedInput
    contemporaries?: CharacterUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUpdateManyWithoutContemporariesNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentors?: CharacterUncheckedUpdateManyWithoutStudentsNestedInput
    students?: CharacterUncheckedUpdateManyWithoutMentorsNestedInput
    contemporaries?: CharacterUncheckedUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUncheckedUpdateManyWithoutContemporariesNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CharacterSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    characterData?: SortOrder
    aiAnalysis?: SortOrder
    timelineVerification?: SortOrder
    agingValidation?: SortOrder
    reviewNotes?: SortOrder
    reviewerId?: SortOrder
    notionPageId?: SortOrder
    submitterEmail?: SortOrder
  }

  export type CharacterSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    reviewNotes?: SortOrder
    reviewerId?: SortOrder
    notionPageId?: SortOrder
    submitterEmail?: SortOrder
  }

  export type CharacterSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    reviewNotes?: SortOrder
    reviewerId?: SortOrder
    notionPageId?: SortOrder
    submitterEmail?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    birthYear?: SortOrder
    maturityCategory?: SortOrder
    timePeriod?: SortOrder
    episodeAlignment?: SortOrder
    temporalFragments?: SortOrder
    algorithmComplexity?: SortOrder
    coreIntegrity?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    age?: SortOrder
    birthYear?: SortOrder
    temporalFragments?: SortOrder
    algorithmComplexity?: SortOrder
    coreIntegrity?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    birthYear?: SortOrder
    maturityCategory?: SortOrder
    timePeriod?: SortOrder
    temporalFragments?: SortOrder
    algorithmComplexity?: SortOrder
    coreIntegrity?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    birthYear?: SortOrder
    maturityCategory?: SortOrder
    timePeriod?: SortOrder
    temporalFragments?: SortOrder
    algorithmComplexity?: SortOrder
    coreIntegrity?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    age?: SortOrder
    birthYear?: SortOrder
    temporalFragments?: SortOrder
    algorithmComplexity?: SortOrder
    coreIntegrity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CharacterCreateepisodeAlignmentInput = {
    set: string[]
  }

  export type CharacterCreateNestedManyWithoutStudentsInput = {
    create?: XOR<CharacterCreateWithoutStudentsInput, CharacterUncheckedCreateWithoutStudentsInput> | CharacterCreateWithoutStudentsInput[] | CharacterUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutStudentsInput | CharacterCreateOrConnectWithoutStudentsInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterCreateNestedManyWithoutMentorsInput = {
    create?: XOR<CharacterCreateWithoutMentorsInput, CharacterUncheckedCreateWithoutMentorsInput> | CharacterCreateWithoutMentorsInput[] | CharacterUncheckedCreateWithoutMentorsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutMentorsInput | CharacterCreateOrConnectWithoutMentorsInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterCreateNestedManyWithoutRelatedToInput = {
    create?: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput> | CharacterCreateWithoutRelatedToInput[] | CharacterUncheckedCreateWithoutRelatedToInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelatedToInput | CharacterCreateOrConnectWithoutRelatedToInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterCreateNestedManyWithoutContemporariesInput = {
    create?: XOR<CharacterCreateWithoutContemporariesInput, CharacterUncheckedCreateWithoutContemporariesInput> | CharacterCreateWithoutContemporariesInput[] | CharacterUncheckedCreateWithoutContemporariesInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutContemporariesInput | CharacterCreateOrConnectWithoutContemporariesInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<CharacterCreateWithoutStudentsInput, CharacterUncheckedCreateWithoutStudentsInput> | CharacterCreateWithoutStudentsInput[] | CharacterUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutStudentsInput | CharacterCreateOrConnectWithoutStudentsInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutMentorsInput = {
    create?: XOR<CharacterCreateWithoutMentorsInput, CharacterUncheckedCreateWithoutMentorsInput> | CharacterCreateWithoutMentorsInput[] | CharacterUncheckedCreateWithoutMentorsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutMentorsInput | CharacterCreateOrConnectWithoutMentorsInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutRelatedToInput = {
    create?: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput> | CharacterCreateWithoutRelatedToInput[] | CharacterUncheckedCreateWithoutRelatedToInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelatedToInput | CharacterCreateOrConnectWithoutRelatedToInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutContemporariesInput = {
    create?: XOR<CharacterCreateWithoutContemporariesInput, CharacterUncheckedCreateWithoutContemporariesInput> | CharacterCreateWithoutContemporariesInput[] | CharacterUncheckedCreateWithoutContemporariesInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutContemporariesInput | CharacterCreateOrConnectWithoutContemporariesInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharacterUpdateepisodeAlignmentInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CharacterUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<CharacterCreateWithoutStudentsInput, CharacterUncheckedCreateWithoutStudentsInput> | CharacterCreateWithoutStudentsInput[] | CharacterUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutStudentsInput | CharacterCreateOrConnectWithoutStudentsInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutStudentsInput | CharacterUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutStudentsInput | CharacterUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutStudentsInput | CharacterUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUpdateManyWithoutMentorsNestedInput = {
    create?: XOR<CharacterCreateWithoutMentorsInput, CharacterUncheckedCreateWithoutMentorsInput> | CharacterCreateWithoutMentorsInput[] | CharacterUncheckedCreateWithoutMentorsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutMentorsInput | CharacterCreateOrConnectWithoutMentorsInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutMentorsInput | CharacterUpsertWithWhereUniqueWithoutMentorsInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutMentorsInput | CharacterUpdateWithWhereUniqueWithoutMentorsInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutMentorsInput | CharacterUpdateManyWithWhereWithoutMentorsInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUpdateManyWithoutRelatedToNestedInput = {
    create?: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput> | CharacterCreateWithoutRelatedToInput[] | CharacterUncheckedCreateWithoutRelatedToInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelatedToInput | CharacterCreateOrConnectWithoutRelatedToInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutRelatedToInput | CharacterUpsertWithWhereUniqueWithoutRelatedToInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutRelatedToInput | CharacterUpdateWithWhereUniqueWithoutRelatedToInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutRelatedToInput | CharacterUpdateManyWithWhereWithoutRelatedToInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUpdateManyWithoutContemporariesNestedInput = {
    create?: XOR<CharacterCreateWithoutContemporariesInput, CharacterUncheckedCreateWithoutContemporariesInput> | CharacterCreateWithoutContemporariesInput[] | CharacterUncheckedCreateWithoutContemporariesInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutContemporariesInput | CharacterCreateOrConnectWithoutContemporariesInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutContemporariesInput | CharacterUpsertWithWhereUniqueWithoutContemporariesInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutContemporariesInput | CharacterUpdateWithWhereUniqueWithoutContemporariesInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutContemporariesInput | CharacterUpdateManyWithWhereWithoutContemporariesInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<CharacterCreateWithoutStudentsInput, CharacterUncheckedCreateWithoutStudentsInput> | CharacterCreateWithoutStudentsInput[] | CharacterUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutStudentsInput | CharacterCreateOrConnectWithoutStudentsInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutStudentsInput | CharacterUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutStudentsInput | CharacterUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutStudentsInput | CharacterUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutMentorsNestedInput = {
    create?: XOR<CharacterCreateWithoutMentorsInput, CharacterUncheckedCreateWithoutMentorsInput> | CharacterCreateWithoutMentorsInput[] | CharacterUncheckedCreateWithoutMentorsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutMentorsInput | CharacterCreateOrConnectWithoutMentorsInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutMentorsInput | CharacterUpsertWithWhereUniqueWithoutMentorsInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutMentorsInput | CharacterUpdateWithWhereUniqueWithoutMentorsInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutMentorsInput | CharacterUpdateManyWithWhereWithoutMentorsInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutRelatedToNestedInput = {
    create?: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput> | CharacterCreateWithoutRelatedToInput[] | CharacterUncheckedCreateWithoutRelatedToInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelatedToInput | CharacterCreateOrConnectWithoutRelatedToInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutRelatedToInput | CharacterUpsertWithWhereUniqueWithoutRelatedToInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutRelatedToInput | CharacterUpdateWithWhereUniqueWithoutRelatedToInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutRelatedToInput | CharacterUpdateManyWithWhereWithoutRelatedToInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutContemporariesNestedInput = {
    create?: XOR<CharacterCreateWithoutContemporariesInput, CharacterUncheckedCreateWithoutContemporariesInput> | CharacterCreateWithoutContemporariesInput[] | CharacterUncheckedCreateWithoutContemporariesInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutContemporariesInput | CharacterCreateOrConnectWithoutContemporariesInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutContemporariesInput | CharacterUpsertWithWhereUniqueWithoutContemporariesInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutContemporariesInput | CharacterUpdateWithWhereUniqueWithoutContemporariesInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutContemporariesInput | CharacterUpdateManyWithWhereWithoutContemporariesInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CharacterCreateWithoutStudentsInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentors?: CharacterCreateNestedManyWithoutStudentsInput
    contemporaries?: CharacterCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterCreateNestedManyWithoutContemporariesInput
  }

  export type CharacterUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentors?: CharacterUncheckedCreateNestedManyWithoutStudentsInput
    contemporaries?: CharacterUncheckedCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterUncheckedCreateNestedManyWithoutContemporariesInput
  }

  export type CharacterCreateOrConnectWithoutStudentsInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutStudentsInput, CharacterUncheckedCreateWithoutStudentsInput>
  }

  export type CharacterCreateWithoutMentorsInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: CharacterCreateNestedManyWithoutMentorsInput
    contemporaries?: CharacterCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterCreateNestedManyWithoutContemporariesInput
  }

  export type CharacterUncheckedCreateWithoutMentorsInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: CharacterUncheckedCreateNestedManyWithoutMentorsInput
    contemporaries?: CharacterUncheckedCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterUncheckedCreateNestedManyWithoutContemporariesInput
  }

  export type CharacterCreateOrConnectWithoutMentorsInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutMentorsInput, CharacterUncheckedCreateWithoutMentorsInput>
  }

  export type CharacterCreateWithoutRelatedToInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentors?: CharacterCreateNestedManyWithoutStudentsInput
    students?: CharacterCreateNestedManyWithoutMentorsInput
    contemporaries?: CharacterCreateNestedManyWithoutRelatedToInput
  }

  export type CharacterUncheckedCreateWithoutRelatedToInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentors?: CharacterUncheckedCreateNestedManyWithoutStudentsInput
    students?: CharacterUncheckedCreateNestedManyWithoutMentorsInput
    contemporaries?: CharacterUncheckedCreateNestedManyWithoutRelatedToInput
  }

  export type CharacterCreateOrConnectWithoutRelatedToInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput>
  }

  export type CharacterCreateWithoutContemporariesInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentors?: CharacterCreateNestedManyWithoutStudentsInput
    students?: CharacterCreateNestedManyWithoutMentorsInput
    relatedTo?: CharacterCreateNestedManyWithoutContemporariesInput
  }

  export type CharacterUncheckedCreateWithoutContemporariesInput = {
    id?: string
    name: string
    age: number
    birthYear: number
    maturityCategory: string
    timePeriod: string
    episodeAlignment?: CharacterCreateepisodeAlignmentInput | string[]
    temporalFragments: number
    algorithmComplexity: number
    coreIntegrity: number
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentors?: CharacterUncheckedCreateNestedManyWithoutStudentsInput
    students?: CharacterUncheckedCreateNestedManyWithoutMentorsInput
    relatedTo?: CharacterUncheckedCreateNestedManyWithoutContemporariesInput
  }

  export type CharacterCreateOrConnectWithoutContemporariesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutContemporariesInput, CharacterUncheckedCreateWithoutContemporariesInput>
  }

  export type CharacterUpsertWithWhereUniqueWithoutStudentsInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutStudentsInput, CharacterUncheckedUpdateWithoutStudentsInput>
    create: XOR<CharacterCreateWithoutStudentsInput, CharacterUncheckedCreateWithoutStudentsInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutStudentsInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutStudentsInput, CharacterUncheckedUpdateWithoutStudentsInput>
  }

  export type CharacterUpdateManyWithWhereWithoutStudentsInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutStudentsInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    age?: IntFilter<"Character"> | number
    birthYear?: IntFilter<"Character"> | number
    maturityCategory?: StringFilter<"Character"> | string
    timePeriod?: StringFilter<"Character"> | string
    episodeAlignment?: StringNullableListFilter<"Character">
    temporalFragments?: IntFilter<"Character"> | number
    algorithmComplexity?: IntFilter<"Character"> | number
    coreIntegrity?: IntFilter<"Character"> | number
    bio?: StringNullableFilter<"Character"> | string | null
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
  }

  export type CharacterUpsertWithWhereUniqueWithoutMentorsInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutMentorsInput, CharacterUncheckedUpdateWithoutMentorsInput>
    create: XOR<CharacterCreateWithoutMentorsInput, CharacterUncheckedCreateWithoutMentorsInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutMentorsInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutMentorsInput, CharacterUncheckedUpdateWithoutMentorsInput>
  }

  export type CharacterUpdateManyWithWhereWithoutMentorsInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutMentorsInput>
  }

  export type CharacterUpsertWithWhereUniqueWithoutRelatedToInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutRelatedToInput, CharacterUncheckedUpdateWithoutRelatedToInput>
    create: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutRelatedToInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutRelatedToInput, CharacterUncheckedUpdateWithoutRelatedToInput>
  }

  export type CharacterUpdateManyWithWhereWithoutRelatedToInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutRelatedToInput>
  }

  export type CharacterUpsertWithWhereUniqueWithoutContemporariesInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutContemporariesInput, CharacterUncheckedUpdateWithoutContemporariesInput>
    create: XOR<CharacterCreateWithoutContemporariesInput, CharacterUncheckedCreateWithoutContemporariesInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutContemporariesInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutContemporariesInput, CharacterUncheckedUpdateWithoutContemporariesInput>
  }

  export type CharacterUpdateManyWithWhereWithoutContemporariesInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutContemporariesInput>
  }

  export type CharacterUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentors?: CharacterUpdateManyWithoutStudentsNestedInput
    contemporaries?: CharacterUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUpdateManyWithoutContemporariesNestedInput
  }

  export type CharacterUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentors?: CharacterUncheckedUpdateManyWithoutStudentsNestedInput
    contemporaries?: CharacterUncheckedUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUncheckedUpdateManyWithoutContemporariesNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUpdateWithoutMentorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: CharacterUpdateManyWithoutMentorsNestedInput
    contemporaries?: CharacterUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUpdateManyWithoutContemporariesNestedInput
  }

  export type CharacterUncheckedUpdateWithoutMentorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: CharacterUncheckedUpdateManyWithoutMentorsNestedInput
    contemporaries?: CharacterUncheckedUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUncheckedUpdateManyWithoutContemporariesNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutMentorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUpdateWithoutRelatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentors?: CharacterUpdateManyWithoutStudentsNestedInput
    students?: CharacterUpdateManyWithoutMentorsNestedInput
    contemporaries?: CharacterUpdateManyWithoutRelatedToNestedInput
  }

  export type CharacterUncheckedUpdateWithoutRelatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentors?: CharacterUncheckedUpdateManyWithoutStudentsNestedInput
    students?: CharacterUncheckedUpdateManyWithoutMentorsNestedInput
    contemporaries?: CharacterUncheckedUpdateManyWithoutRelatedToNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutRelatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUpdateWithoutContemporariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentors?: CharacterUpdateManyWithoutStudentsNestedInput
    students?: CharacterUpdateManyWithoutMentorsNestedInput
    relatedTo?: CharacterUpdateManyWithoutContemporariesNestedInput
  }

  export type CharacterUncheckedUpdateWithoutContemporariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentors?: CharacterUncheckedUpdateManyWithoutStudentsNestedInput
    students?: CharacterUncheckedUpdateManyWithoutMentorsNestedInput
    relatedTo?: CharacterUncheckedUpdateManyWithoutContemporariesNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutContemporariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    maturityCategory?: StringFieldUpdateOperationsInput | string
    timePeriod?: StringFieldUpdateOperationsInput | string
    episodeAlignment?: CharacterUpdateepisodeAlignmentInput | string[]
    temporalFragments?: IntFieldUpdateOperationsInput | number
    algorithmComplexity?: IntFieldUpdateOperationsInput | number
    coreIntegrity?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}