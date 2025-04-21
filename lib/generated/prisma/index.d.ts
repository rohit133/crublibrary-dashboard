
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model RechargeLog
 * 
 */
export type RechargeLog = $Result.DefaultSelection<Prisma.$RechargeLogPayload>
/**
 * Model ApiUsageLog
 * 
 */
export type ApiUsageLog = $Result.DefaultSelection<Prisma.$ApiUsageLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rechargeLog`: Exposes CRUD operations for the **RechargeLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RechargeLogs
    * const rechargeLogs = await prisma.rechargeLog.findMany()
    * ```
    */
  get rechargeLog(): Prisma.RechargeLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiUsageLog`: Exposes CRUD operations for the **ApiUsageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiUsageLogs
    * const apiUsageLogs = await prisma.apiUsageLog.findMany()
    * ```
    */
  get apiUsageLog(): Prisma.ApiUsageLogDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Item: 'Item',
    RechargeLog: 'RechargeLog',
    ApiUsageLog: 'ApiUsageLog'
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
      modelProps: "user" | "item" | "rechargeLog" | "apiUsageLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      RechargeLog: {
        payload: Prisma.$RechargeLogPayload<ExtArgs>
        fields: Prisma.RechargeLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RechargeLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RechargeLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload>
          }
          findFirst: {
            args: Prisma.RechargeLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RechargeLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload>
          }
          findMany: {
            args: Prisma.RechargeLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload>[]
          }
          create: {
            args: Prisma.RechargeLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload>
          }
          createMany: {
            args: Prisma.RechargeLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RechargeLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload>[]
          }
          delete: {
            args: Prisma.RechargeLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload>
          }
          update: {
            args: Prisma.RechargeLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload>
          }
          deleteMany: {
            args: Prisma.RechargeLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RechargeLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RechargeLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload>[]
          }
          upsert: {
            args: Prisma.RechargeLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeLogPayload>
          }
          aggregate: {
            args: Prisma.RechargeLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRechargeLog>
          }
          groupBy: {
            args: Prisma.RechargeLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<RechargeLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RechargeLogCountArgs<ExtArgs>
            result: $Utils.Optional<RechargeLogCountAggregateOutputType> | number
          }
        }
      }
      ApiUsageLog: {
        payload: Prisma.$ApiUsageLogPayload<ExtArgs>
        fields: Prisma.ApiUsageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiUsageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiUsageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          findFirst: {
            args: Prisma.ApiUsageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiUsageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          findMany: {
            args: Prisma.ApiUsageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>[]
          }
          create: {
            args: Prisma.ApiUsageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          createMany: {
            args: Prisma.ApiUsageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiUsageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>[]
          }
          delete: {
            args: Prisma.ApiUsageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          update: {
            args: Prisma.ApiUsageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          deleteMany: {
            args: Prisma.ApiUsageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiUsageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiUsageLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>[]
          }
          upsert: {
            args: Prisma.ApiUsageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsageLogPayload>
          }
          aggregate: {
            args: Prisma.ApiUsageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiUsageLog>
          }
          groupBy: {
            args: Prisma.ApiUsageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiUsageLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageLogCountAggregateOutputType> | number
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
    user?: UserOmit
    item?: ItemOmit
    rechargeLog?: RechargeLogOmit
    apiUsageLog?: ApiUsageLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    items: number
    logs: number
    usageLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | UserCountOutputTypeCountItemsArgs
    logs?: boolean | UserCountOutputTypeCountLogsArgs
    usageLogs?: boolean | UserCountOutputTypeCountUsageLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RechargeLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    credits: number | null
    creditsUsed: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
    creditsUsed: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    googleId: string | null
    apiKey: string | null
    apiUrl: string | null
    credits: number | null
    creditsUsed: number | null
    recharged: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    googleId: string | null
    apiKey: string | null
    apiUrl: string | null
    credits: number | null
    creditsUsed: number | null
    recharged: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    googleId: number
    apiKey: number
    apiUrl: number
    credits: number
    creditsUsed: number
    recharged: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
    creditsUsed?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
    creditsUsed?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    googleId?: true
    apiKey?: true
    apiUrl?: true
    credits?: true
    creditsUsed?: true
    recharged?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    googleId?: true
    apiKey?: true
    apiUrl?: true
    credits?: true
    creditsUsed?: true
    recharged?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    googleId?: true
    apiKey?: true
    apiUrl?: true
    credits?: true
    creditsUsed?: true
    recharged?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    image: string | null
    googleId: string
    apiKey: string
    apiUrl: string | null
    credits: number
    creditsUsed: number
    recharged: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    googleId?: boolean
    apiKey?: boolean
    apiUrl?: boolean
    credits?: boolean
    creditsUsed?: boolean
    recharged?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | User$itemsArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    usageLogs?: boolean | User$usageLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    googleId?: boolean
    apiKey?: boolean
    apiUrl?: boolean
    credits?: boolean
    creditsUsed?: boolean
    recharged?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    googleId?: boolean
    apiKey?: boolean
    apiUrl?: boolean
    credits?: boolean
    creditsUsed?: boolean
    recharged?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    googleId?: boolean
    apiKey?: boolean
    apiUrl?: boolean
    credits?: boolean
    creditsUsed?: boolean
    recharged?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "googleId" | "apiKey" | "apiUrl" | "credits" | "creditsUsed" | "recharged" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | User$itemsArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    usageLogs?: boolean | User$usageLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
      logs: Prisma.$RechargeLogPayload<ExtArgs>[]
      usageLogs: Prisma.$ApiUsageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      image: string | null
      googleId: string
      apiKey: string
      apiUrl: string | null
      credits: number
      creditsUsed: number
      recharged: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends User$itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageLogs<T extends User$usageLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$usageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly apiKey: FieldRef<"User", 'String'>
    readonly apiUrl: FieldRef<"User", 'String'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly creditsUsed: FieldRef<"User", 'Int'>
    readonly recharged: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.items
   */
  export type User$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    where?: RechargeLogWhereInput
    orderBy?: RechargeLogOrderByWithRelationInput | RechargeLogOrderByWithRelationInput[]
    cursor?: RechargeLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RechargeLogScalarFieldEnum | RechargeLogScalarFieldEnum[]
  }

  /**
   * User.usageLogs
   */
  export type User$usageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    where?: ApiUsageLogWhereInput
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    cursor?: ApiUsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    userId: string | null
    value: number | null
    txHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    value: number | null
    txHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    userId: number
    value: number
    txHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    userId?: true
    value?: true
    txHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    userId?: true
    value?: true
    txHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    userId?: true
    value?: true
    txHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    userId: string
    value: number
    txHash: string
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    txHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    txHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    value?: boolean
    txHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    userId?: boolean
    value?: boolean
    txHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "value" | "txHash" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      value: number
      txHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly userId: FieldRef<"Item", 'String'>
    readonly value: FieldRef<"Item", 'Float'>
    readonly txHash: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model RechargeLog
   */

  export type AggregateRechargeLog = {
    _count: RechargeLogCountAggregateOutputType | null
    _avg: RechargeLogAvgAggregateOutputType | null
    _sum: RechargeLogSumAggregateOutputType | null
    _min: RechargeLogMinAggregateOutputType | null
    _max: RechargeLogMaxAggregateOutputType | null
  }

  export type RechargeLogAvgAggregateOutputType = {
    id: number | null
  }

  export type RechargeLogSumAggregateOutputType = {
    id: number | null
  }

  export type RechargeLogMinAggregateOutputType = {
    id: number | null
    userId: string | null
    attemptedAt: Date | null
    successful: boolean | null
  }

  export type RechargeLogMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    attemptedAt: Date | null
    successful: boolean | null
  }

  export type RechargeLogCountAggregateOutputType = {
    id: number
    userId: number
    attemptedAt: number
    successful: number
    _all: number
  }


  export type RechargeLogAvgAggregateInputType = {
    id?: true
  }

  export type RechargeLogSumAggregateInputType = {
    id?: true
  }

  export type RechargeLogMinAggregateInputType = {
    id?: true
    userId?: true
    attemptedAt?: true
    successful?: true
  }

  export type RechargeLogMaxAggregateInputType = {
    id?: true
    userId?: true
    attemptedAt?: true
    successful?: true
  }

  export type RechargeLogCountAggregateInputType = {
    id?: true
    userId?: true
    attemptedAt?: true
    successful?: true
    _all?: true
  }

  export type RechargeLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RechargeLog to aggregate.
     */
    where?: RechargeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeLogs to fetch.
     */
    orderBy?: RechargeLogOrderByWithRelationInput | RechargeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RechargeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RechargeLogs
    **/
    _count?: true | RechargeLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RechargeLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RechargeLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RechargeLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RechargeLogMaxAggregateInputType
  }

  export type GetRechargeLogAggregateType<T extends RechargeLogAggregateArgs> = {
        [P in keyof T & keyof AggregateRechargeLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRechargeLog[P]>
      : GetScalarType<T[P], AggregateRechargeLog[P]>
  }




  export type RechargeLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RechargeLogWhereInput
    orderBy?: RechargeLogOrderByWithAggregationInput | RechargeLogOrderByWithAggregationInput[]
    by: RechargeLogScalarFieldEnum[] | RechargeLogScalarFieldEnum
    having?: RechargeLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RechargeLogCountAggregateInputType | true
    _avg?: RechargeLogAvgAggregateInputType
    _sum?: RechargeLogSumAggregateInputType
    _min?: RechargeLogMinAggregateInputType
    _max?: RechargeLogMaxAggregateInputType
  }

  export type RechargeLogGroupByOutputType = {
    id: number
    userId: string
    attemptedAt: Date
    successful: boolean
    _count: RechargeLogCountAggregateOutputType | null
    _avg: RechargeLogAvgAggregateOutputType | null
    _sum: RechargeLogSumAggregateOutputType | null
    _min: RechargeLogMinAggregateOutputType | null
    _max: RechargeLogMaxAggregateOutputType | null
  }

  type GetRechargeLogGroupByPayload<T extends RechargeLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RechargeLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RechargeLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RechargeLogGroupByOutputType[P]>
            : GetScalarType<T[P], RechargeLogGroupByOutputType[P]>
        }
      >
    >


  export type RechargeLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    attemptedAt?: boolean
    successful?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rechargeLog"]>

  export type RechargeLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    attemptedAt?: boolean
    successful?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rechargeLog"]>

  export type RechargeLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    attemptedAt?: boolean
    successful?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rechargeLog"]>

  export type RechargeLogSelectScalar = {
    id?: boolean
    userId?: boolean
    attemptedAt?: boolean
    successful?: boolean
  }

  export type RechargeLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "attemptedAt" | "successful", ExtArgs["result"]["rechargeLog"]>
  export type RechargeLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RechargeLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RechargeLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RechargeLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RechargeLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      attemptedAt: Date
      successful: boolean
    }, ExtArgs["result"]["rechargeLog"]>
    composites: {}
  }

  type RechargeLogGetPayload<S extends boolean | null | undefined | RechargeLogDefaultArgs> = $Result.GetResult<Prisma.$RechargeLogPayload, S>

  type RechargeLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RechargeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RechargeLogCountAggregateInputType | true
    }

  export interface RechargeLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RechargeLog'], meta: { name: 'RechargeLog' } }
    /**
     * Find zero or one RechargeLog that matches the filter.
     * @param {RechargeLogFindUniqueArgs} args - Arguments to find a RechargeLog
     * @example
     * // Get one RechargeLog
     * const rechargeLog = await prisma.rechargeLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RechargeLogFindUniqueArgs>(args: SelectSubset<T, RechargeLogFindUniqueArgs<ExtArgs>>): Prisma__RechargeLogClient<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RechargeLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RechargeLogFindUniqueOrThrowArgs} args - Arguments to find a RechargeLog
     * @example
     * // Get one RechargeLog
     * const rechargeLog = await prisma.rechargeLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RechargeLogFindUniqueOrThrowArgs>(args: SelectSubset<T, RechargeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RechargeLogClient<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RechargeLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeLogFindFirstArgs} args - Arguments to find a RechargeLog
     * @example
     * // Get one RechargeLog
     * const rechargeLog = await prisma.rechargeLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RechargeLogFindFirstArgs>(args?: SelectSubset<T, RechargeLogFindFirstArgs<ExtArgs>>): Prisma__RechargeLogClient<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RechargeLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeLogFindFirstOrThrowArgs} args - Arguments to find a RechargeLog
     * @example
     * // Get one RechargeLog
     * const rechargeLog = await prisma.rechargeLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RechargeLogFindFirstOrThrowArgs>(args?: SelectSubset<T, RechargeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__RechargeLogClient<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RechargeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RechargeLogs
     * const rechargeLogs = await prisma.rechargeLog.findMany()
     * 
     * // Get first 10 RechargeLogs
     * const rechargeLogs = await prisma.rechargeLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rechargeLogWithIdOnly = await prisma.rechargeLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RechargeLogFindManyArgs>(args?: SelectSubset<T, RechargeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RechargeLog.
     * @param {RechargeLogCreateArgs} args - Arguments to create a RechargeLog.
     * @example
     * // Create one RechargeLog
     * const RechargeLog = await prisma.rechargeLog.create({
     *   data: {
     *     // ... data to create a RechargeLog
     *   }
     * })
     * 
     */
    create<T extends RechargeLogCreateArgs>(args: SelectSubset<T, RechargeLogCreateArgs<ExtArgs>>): Prisma__RechargeLogClient<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RechargeLogs.
     * @param {RechargeLogCreateManyArgs} args - Arguments to create many RechargeLogs.
     * @example
     * // Create many RechargeLogs
     * const rechargeLog = await prisma.rechargeLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RechargeLogCreateManyArgs>(args?: SelectSubset<T, RechargeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RechargeLogs and returns the data saved in the database.
     * @param {RechargeLogCreateManyAndReturnArgs} args - Arguments to create many RechargeLogs.
     * @example
     * // Create many RechargeLogs
     * const rechargeLog = await prisma.rechargeLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RechargeLogs and only return the `id`
     * const rechargeLogWithIdOnly = await prisma.rechargeLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RechargeLogCreateManyAndReturnArgs>(args?: SelectSubset<T, RechargeLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RechargeLog.
     * @param {RechargeLogDeleteArgs} args - Arguments to delete one RechargeLog.
     * @example
     * // Delete one RechargeLog
     * const RechargeLog = await prisma.rechargeLog.delete({
     *   where: {
     *     // ... filter to delete one RechargeLog
     *   }
     * })
     * 
     */
    delete<T extends RechargeLogDeleteArgs>(args: SelectSubset<T, RechargeLogDeleteArgs<ExtArgs>>): Prisma__RechargeLogClient<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RechargeLog.
     * @param {RechargeLogUpdateArgs} args - Arguments to update one RechargeLog.
     * @example
     * // Update one RechargeLog
     * const rechargeLog = await prisma.rechargeLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RechargeLogUpdateArgs>(args: SelectSubset<T, RechargeLogUpdateArgs<ExtArgs>>): Prisma__RechargeLogClient<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RechargeLogs.
     * @param {RechargeLogDeleteManyArgs} args - Arguments to filter RechargeLogs to delete.
     * @example
     * // Delete a few RechargeLogs
     * const { count } = await prisma.rechargeLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RechargeLogDeleteManyArgs>(args?: SelectSubset<T, RechargeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RechargeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RechargeLogs
     * const rechargeLog = await prisma.rechargeLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RechargeLogUpdateManyArgs>(args: SelectSubset<T, RechargeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RechargeLogs and returns the data updated in the database.
     * @param {RechargeLogUpdateManyAndReturnArgs} args - Arguments to update many RechargeLogs.
     * @example
     * // Update many RechargeLogs
     * const rechargeLog = await prisma.rechargeLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RechargeLogs and only return the `id`
     * const rechargeLogWithIdOnly = await prisma.rechargeLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends RechargeLogUpdateManyAndReturnArgs>(args: SelectSubset<T, RechargeLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RechargeLog.
     * @param {RechargeLogUpsertArgs} args - Arguments to update or create a RechargeLog.
     * @example
     * // Update or create a RechargeLog
     * const rechargeLog = await prisma.rechargeLog.upsert({
     *   create: {
     *     // ... data to create a RechargeLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RechargeLog we want to update
     *   }
     * })
     */
    upsert<T extends RechargeLogUpsertArgs>(args: SelectSubset<T, RechargeLogUpsertArgs<ExtArgs>>): Prisma__RechargeLogClient<$Result.GetResult<Prisma.$RechargeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RechargeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeLogCountArgs} args - Arguments to filter RechargeLogs to count.
     * @example
     * // Count the number of RechargeLogs
     * const count = await prisma.rechargeLog.count({
     *   where: {
     *     // ... the filter for the RechargeLogs we want to count
     *   }
     * })
    **/
    count<T extends RechargeLogCountArgs>(
      args?: Subset<T, RechargeLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RechargeLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RechargeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RechargeLogAggregateArgs>(args: Subset<T, RechargeLogAggregateArgs>): Prisma.PrismaPromise<GetRechargeLogAggregateType<T>>

    /**
     * Group by RechargeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeLogGroupByArgs} args - Group by arguments.
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
      T extends RechargeLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RechargeLogGroupByArgs['orderBy'] }
        : { orderBy?: RechargeLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RechargeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRechargeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RechargeLog model
   */
  readonly fields: RechargeLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RechargeLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RechargeLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RechargeLog model
   */
  interface RechargeLogFieldRefs {
    readonly id: FieldRef<"RechargeLog", 'Int'>
    readonly userId: FieldRef<"RechargeLog", 'String'>
    readonly attemptedAt: FieldRef<"RechargeLog", 'DateTime'>
    readonly successful: FieldRef<"RechargeLog", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RechargeLog findUnique
   */
  export type RechargeLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    /**
     * Filter, which RechargeLog to fetch.
     */
    where: RechargeLogWhereUniqueInput
  }

  /**
   * RechargeLog findUniqueOrThrow
   */
  export type RechargeLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    /**
     * Filter, which RechargeLog to fetch.
     */
    where: RechargeLogWhereUniqueInput
  }

  /**
   * RechargeLog findFirst
   */
  export type RechargeLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    /**
     * Filter, which RechargeLog to fetch.
     */
    where?: RechargeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeLogs to fetch.
     */
    orderBy?: RechargeLogOrderByWithRelationInput | RechargeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RechargeLogs.
     */
    cursor?: RechargeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RechargeLogs.
     */
    distinct?: RechargeLogScalarFieldEnum | RechargeLogScalarFieldEnum[]
  }

  /**
   * RechargeLog findFirstOrThrow
   */
  export type RechargeLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    /**
     * Filter, which RechargeLog to fetch.
     */
    where?: RechargeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeLogs to fetch.
     */
    orderBy?: RechargeLogOrderByWithRelationInput | RechargeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RechargeLogs.
     */
    cursor?: RechargeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RechargeLogs.
     */
    distinct?: RechargeLogScalarFieldEnum | RechargeLogScalarFieldEnum[]
  }

  /**
   * RechargeLog findMany
   */
  export type RechargeLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    /**
     * Filter, which RechargeLogs to fetch.
     */
    where?: RechargeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeLogs to fetch.
     */
    orderBy?: RechargeLogOrderByWithRelationInput | RechargeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RechargeLogs.
     */
    cursor?: RechargeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeLogs.
     */
    skip?: number
    distinct?: RechargeLogScalarFieldEnum | RechargeLogScalarFieldEnum[]
  }

  /**
   * RechargeLog create
   */
  export type RechargeLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    /**
     * The data needed to create a RechargeLog.
     */
    data: XOR<RechargeLogCreateInput, RechargeLogUncheckedCreateInput>
  }

  /**
   * RechargeLog createMany
   */
  export type RechargeLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RechargeLogs.
     */
    data: RechargeLogCreateManyInput | RechargeLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RechargeLog createManyAndReturn
   */
  export type RechargeLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * The data used to create many RechargeLogs.
     */
    data: RechargeLogCreateManyInput | RechargeLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RechargeLog update
   */
  export type RechargeLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    /**
     * The data needed to update a RechargeLog.
     */
    data: XOR<RechargeLogUpdateInput, RechargeLogUncheckedUpdateInput>
    /**
     * Choose, which RechargeLog to update.
     */
    where: RechargeLogWhereUniqueInput
  }

  /**
   * RechargeLog updateMany
   */
  export type RechargeLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RechargeLogs.
     */
    data: XOR<RechargeLogUpdateManyMutationInput, RechargeLogUncheckedUpdateManyInput>
    /**
     * Filter which RechargeLogs to update
     */
    where?: RechargeLogWhereInput
    /**
     * Limit how many RechargeLogs to update.
     */
    limit?: number
  }

  /**
   * RechargeLog updateManyAndReturn
   */
  export type RechargeLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * The data used to update RechargeLogs.
     */
    data: XOR<RechargeLogUpdateManyMutationInput, RechargeLogUncheckedUpdateManyInput>
    /**
     * Filter which RechargeLogs to update
     */
    where?: RechargeLogWhereInput
    /**
     * Limit how many RechargeLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RechargeLog upsert
   */
  export type RechargeLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    /**
     * The filter to search for the RechargeLog to update in case it exists.
     */
    where: RechargeLogWhereUniqueInput
    /**
     * In case the RechargeLog found by the `where` argument doesn't exist, create a new RechargeLog with this data.
     */
    create: XOR<RechargeLogCreateInput, RechargeLogUncheckedCreateInput>
    /**
     * In case the RechargeLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RechargeLogUpdateInput, RechargeLogUncheckedUpdateInput>
  }

  /**
   * RechargeLog delete
   */
  export type RechargeLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
    /**
     * Filter which RechargeLog to delete.
     */
    where: RechargeLogWhereUniqueInput
  }

  /**
   * RechargeLog deleteMany
   */
  export type RechargeLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RechargeLogs to delete
     */
    where?: RechargeLogWhereInput
    /**
     * Limit how many RechargeLogs to delete.
     */
    limit?: number
  }

  /**
   * RechargeLog without action
   */
  export type RechargeLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeLog
     */
    select?: RechargeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeLog
     */
    omit?: RechargeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeLogInclude<ExtArgs> | null
  }


  /**
   * Model ApiUsageLog
   */

  export type AggregateApiUsageLog = {
    _count: ApiUsageLogCountAggregateOutputType | null
    _avg: ApiUsageLogAvgAggregateOutputType | null
    _sum: ApiUsageLogSumAggregateOutputType | null
    _min: ApiUsageLogMinAggregateOutputType | null
    _max: ApiUsageLogMaxAggregateOutputType | null
  }

  export type ApiUsageLogAvgAggregateOutputType = {
    id: number | null
    statusCode: number | null
  }

  export type ApiUsageLogSumAggregateOutputType = {
    id: number | null
    statusCode: number | null
  }

  export type ApiUsageLogMinAggregateOutputType = {
    id: number | null
    userId: string | null
    endpoint: string | null
    statusCode: number | null
    occurredAt: Date | null
  }

  export type ApiUsageLogMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    endpoint: string | null
    statusCode: number | null
    occurredAt: Date | null
  }

  export type ApiUsageLogCountAggregateOutputType = {
    id: number
    userId: number
    endpoint: number
    statusCode: number
    occurredAt: number
    _all: number
  }


  export type ApiUsageLogAvgAggregateInputType = {
    id?: true
    statusCode?: true
  }

  export type ApiUsageLogSumAggregateInputType = {
    id?: true
    statusCode?: true
  }

  export type ApiUsageLogMinAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    statusCode?: true
    occurredAt?: true
  }

  export type ApiUsageLogMaxAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    statusCode?: true
    occurredAt?: true
  }

  export type ApiUsageLogCountAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    statusCode?: true
    occurredAt?: true
    _all?: true
  }

  export type ApiUsageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsageLog to aggregate.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiUsageLogs
    **/
    _count?: true | ApiUsageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiUsageLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiUsageLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiUsageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiUsageLogMaxAggregateInputType
  }

  export type GetApiUsageLogAggregateType<T extends ApiUsageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApiUsageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiUsageLog[P]>
      : GetScalarType<T[P], AggregateApiUsageLog[P]>
  }




  export type ApiUsageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageLogWhereInput
    orderBy?: ApiUsageLogOrderByWithAggregationInput | ApiUsageLogOrderByWithAggregationInput[]
    by: ApiUsageLogScalarFieldEnum[] | ApiUsageLogScalarFieldEnum
    having?: ApiUsageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiUsageLogCountAggregateInputType | true
    _avg?: ApiUsageLogAvgAggregateInputType
    _sum?: ApiUsageLogSumAggregateInputType
    _min?: ApiUsageLogMinAggregateInputType
    _max?: ApiUsageLogMaxAggregateInputType
  }

  export type ApiUsageLogGroupByOutputType = {
    id: number
    userId: string
    endpoint: string
    statusCode: number
    occurredAt: Date
    _count: ApiUsageLogCountAggregateOutputType | null
    _avg: ApiUsageLogAvgAggregateOutputType | null
    _sum: ApiUsageLogSumAggregateOutputType | null
    _min: ApiUsageLogMinAggregateOutputType | null
    _max: ApiUsageLogMaxAggregateOutputType | null
  }

  type GetApiUsageLogGroupByPayload<T extends ApiUsageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiUsageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiUsageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiUsageLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApiUsageLogGroupByOutputType[P]>
        }
      >
    >


  export type ApiUsageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    statusCode?: boolean
    occurredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsageLog"]>

  export type ApiUsageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    statusCode?: boolean
    occurredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsageLog"]>

  export type ApiUsageLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    statusCode?: boolean
    occurredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsageLog"]>

  export type ApiUsageLogSelectScalar = {
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    statusCode?: boolean
    occurredAt?: boolean
  }

  export type ApiUsageLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "endpoint" | "statusCode" | "occurredAt", ExtArgs["result"]["apiUsageLog"]>
  export type ApiUsageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiUsageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiUsageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiUsageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiUsageLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      endpoint: string
      statusCode: number
      occurredAt: Date
    }, ExtArgs["result"]["apiUsageLog"]>
    composites: {}
  }

  type ApiUsageLogGetPayload<S extends boolean | null | undefined | ApiUsageLogDefaultArgs> = $Result.GetResult<Prisma.$ApiUsageLogPayload, S>

  type ApiUsageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiUsageLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiUsageLogCountAggregateInputType | true
    }

  export interface ApiUsageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiUsageLog'], meta: { name: 'ApiUsageLog' } }
    /**
     * Find zero or one ApiUsageLog that matches the filter.
     * @param {ApiUsageLogFindUniqueArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiUsageLogFindUniqueArgs>(args: SelectSubset<T, ApiUsageLogFindUniqueArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiUsageLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiUsageLogFindUniqueOrThrowArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiUsageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiUsageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogFindFirstArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiUsageLogFindFirstArgs>(args?: SelectSubset<T, ApiUsageLogFindFirstArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogFindFirstOrThrowArgs} args - Arguments to find a ApiUsageLog
     * @example
     * // Get one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiUsageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiUsageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiUsageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiUsageLogs
     * const apiUsageLogs = await prisma.apiUsageLog.findMany()
     * 
     * // Get first 10 ApiUsageLogs
     * const apiUsageLogs = await prisma.apiUsageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiUsageLogWithIdOnly = await prisma.apiUsageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiUsageLogFindManyArgs>(args?: SelectSubset<T, ApiUsageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiUsageLog.
     * @param {ApiUsageLogCreateArgs} args - Arguments to create a ApiUsageLog.
     * @example
     * // Create one ApiUsageLog
     * const ApiUsageLog = await prisma.apiUsageLog.create({
     *   data: {
     *     // ... data to create a ApiUsageLog
     *   }
     * })
     * 
     */
    create<T extends ApiUsageLogCreateArgs>(args: SelectSubset<T, ApiUsageLogCreateArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiUsageLogs.
     * @param {ApiUsageLogCreateManyArgs} args - Arguments to create many ApiUsageLogs.
     * @example
     * // Create many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiUsageLogCreateManyArgs>(args?: SelectSubset<T, ApiUsageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiUsageLogs and returns the data saved in the database.
     * @param {ApiUsageLogCreateManyAndReturnArgs} args - Arguments to create many ApiUsageLogs.
     * @example
     * // Create many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiUsageLogs and only return the `id`
     * const apiUsageLogWithIdOnly = await prisma.apiUsageLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiUsageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiUsageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiUsageLog.
     * @param {ApiUsageLogDeleteArgs} args - Arguments to delete one ApiUsageLog.
     * @example
     * // Delete one ApiUsageLog
     * const ApiUsageLog = await prisma.apiUsageLog.delete({
     *   where: {
     *     // ... filter to delete one ApiUsageLog
     *   }
     * })
     * 
     */
    delete<T extends ApiUsageLogDeleteArgs>(args: SelectSubset<T, ApiUsageLogDeleteArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiUsageLog.
     * @param {ApiUsageLogUpdateArgs} args - Arguments to update one ApiUsageLog.
     * @example
     * // Update one ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiUsageLogUpdateArgs>(args: SelectSubset<T, ApiUsageLogUpdateArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiUsageLogs.
     * @param {ApiUsageLogDeleteManyArgs} args - Arguments to filter ApiUsageLogs to delete.
     * @example
     * // Delete a few ApiUsageLogs
     * const { count } = await prisma.apiUsageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiUsageLogDeleteManyArgs>(args?: SelectSubset<T, ApiUsageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiUsageLogUpdateManyArgs>(args: SelectSubset<T, ApiUsageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsageLogs and returns the data updated in the database.
     * @param {ApiUsageLogUpdateManyAndReturnArgs} args - Arguments to update many ApiUsageLogs.
     * @example
     * // Update many ApiUsageLogs
     * const apiUsageLog = await prisma.apiUsageLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiUsageLogs and only return the `id`
     * const apiUsageLogWithIdOnly = await prisma.apiUsageLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiUsageLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiUsageLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiUsageLog.
     * @param {ApiUsageLogUpsertArgs} args - Arguments to update or create a ApiUsageLog.
     * @example
     * // Update or create a ApiUsageLog
     * const apiUsageLog = await prisma.apiUsageLog.upsert({
     *   create: {
     *     // ... data to create a ApiUsageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiUsageLog we want to update
     *   }
     * })
     */
    upsert<T extends ApiUsageLogUpsertArgs>(args: SelectSubset<T, ApiUsageLogUpsertArgs<ExtArgs>>): Prisma__ApiUsageLogClient<$Result.GetResult<Prisma.$ApiUsageLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogCountArgs} args - Arguments to filter ApiUsageLogs to count.
     * @example
     * // Count the number of ApiUsageLogs
     * const count = await prisma.apiUsageLog.count({
     *   where: {
     *     // ... the filter for the ApiUsageLogs we want to count
     *   }
     * })
    **/
    count<T extends ApiUsageLogCountArgs>(
      args?: Subset<T, ApiUsageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiUsageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiUsageLogAggregateArgs>(args: Subset<T, ApiUsageLogAggregateArgs>): Prisma.PrismaPromise<GetApiUsageLogAggregateType<T>>

    /**
     * Group by ApiUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageLogGroupByArgs} args - Group by arguments.
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
      T extends ApiUsageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiUsageLogGroupByArgs['orderBy'] }
        : { orderBy?: ApiUsageLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiUsageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiUsageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiUsageLog model
   */
  readonly fields: ApiUsageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiUsageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiUsageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiUsageLog model
   */
  interface ApiUsageLogFieldRefs {
    readonly id: FieldRef<"ApiUsageLog", 'Int'>
    readonly userId: FieldRef<"ApiUsageLog", 'String'>
    readonly endpoint: FieldRef<"ApiUsageLog", 'String'>
    readonly statusCode: FieldRef<"ApiUsageLog", 'Int'>
    readonly occurredAt: FieldRef<"ApiUsageLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiUsageLog findUnique
   */
  export type ApiUsageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog findUniqueOrThrow
   */
  export type ApiUsageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog findFirst
   */
  export type ApiUsageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsageLogs.
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsageLogs.
     */
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiUsageLog findFirstOrThrow
   */
  export type ApiUsageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLog to fetch.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsageLogs.
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsageLogs.
     */
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiUsageLog findMany
   */
  export type ApiUsageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsageLogs to fetch.
     */
    where?: ApiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsageLogs to fetch.
     */
    orderBy?: ApiUsageLogOrderByWithRelationInput | ApiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiUsageLogs.
     */
    cursor?: ApiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsageLogs.
     */
    skip?: number
    distinct?: ApiUsageLogScalarFieldEnum | ApiUsageLogScalarFieldEnum[]
  }

  /**
   * ApiUsageLog create
   */
  export type ApiUsageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiUsageLog.
     */
    data: XOR<ApiUsageLogCreateInput, ApiUsageLogUncheckedCreateInput>
  }

  /**
   * ApiUsageLog createMany
   */
  export type ApiUsageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiUsageLogs.
     */
    data: ApiUsageLogCreateManyInput | ApiUsageLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiUsageLog createManyAndReturn
   */
  export type ApiUsageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * The data used to create many ApiUsageLogs.
     */
    data: ApiUsageLogCreateManyInput | ApiUsageLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsageLog update
   */
  export type ApiUsageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiUsageLog.
     */
    data: XOR<ApiUsageLogUpdateInput, ApiUsageLogUncheckedUpdateInput>
    /**
     * Choose, which ApiUsageLog to update.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog updateMany
   */
  export type ApiUsageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiUsageLogs.
     */
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsageLogs to update
     */
    where?: ApiUsageLogWhereInput
    /**
     * Limit how many ApiUsageLogs to update.
     */
    limit?: number
  }

  /**
   * ApiUsageLog updateManyAndReturn
   */
  export type ApiUsageLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * The data used to update ApiUsageLogs.
     */
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsageLogs to update
     */
    where?: ApiUsageLogWhereInput
    /**
     * Limit how many ApiUsageLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsageLog upsert
   */
  export type ApiUsageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiUsageLog to update in case it exists.
     */
    where: ApiUsageLogWhereUniqueInput
    /**
     * In case the ApiUsageLog found by the `where` argument doesn't exist, create a new ApiUsageLog with this data.
     */
    create: XOR<ApiUsageLogCreateInput, ApiUsageLogUncheckedCreateInput>
    /**
     * In case the ApiUsageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUsageLogUpdateInput, ApiUsageLogUncheckedUpdateInput>
  }

  /**
   * ApiUsageLog delete
   */
  export type ApiUsageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
    /**
     * Filter which ApiUsageLog to delete.
     */
    where: ApiUsageLogWhereUniqueInput
  }

  /**
   * ApiUsageLog deleteMany
   */
  export type ApiUsageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsageLogs to delete
     */
    where?: ApiUsageLogWhereInput
    /**
     * Limit how many ApiUsageLogs to delete.
     */
    limit?: number
  }

  /**
   * ApiUsageLog without action
   */
  export type ApiUsageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsageLog
     */
    select?: ApiUsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsageLog
     */
    omit?: ApiUsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    googleId: 'googleId',
    apiKey: 'apiKey',
    apiUrl: 'apiUrl',
    credits: 'credits',
    creditsUsed: 'creditsUsed',
    recharged: 'recharged',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    value: 'value',
    txHash: 'txHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const RechargeLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    attemptedAt: 'attemptedAt',
    successful: 'successful'
  };

  export type RechargeLogScalarFieldEnum = (typeof RechargeLogScalarFieldEnum)[keyof typeof RechargeLogScalarFieldEnum]


  export const ApiUsageLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    endpoint: 'endpoint',
    statusCode: 'statusCode',
    occurredAt: 'occurredAt'
  };

  export type ApiUsageLogScalarFieldEnum = (typeof ApiUsageLogScalarFieldEnum)[keyof typeof ApiUsageLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    googleId?: StringFilter<"User"> | string
    apiKey?: StringFilter<"User"> | string
    apiUrl?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    creditsUsed?: IntFilter<"User"> | number
    recharged?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    items?: ItemListRelationFilter
    logs?: RechargeLogListRelationFilter
    usageLogs?: ApiUsageLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    googleId?: SortOrder
    apiKey?: SortOrder
    apiUrl?: SortOrderInput | SortOrder
    credits?: SortOrder
    creditsUsed?: SortOrder
    recharged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
    logs?: RechargeLogOrderByRelationAggregateInput
    usageLogs?: ApiUsageLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    apiKey?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    apiUrl?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    creditsUsed?: IntFilter<"User"> | number
    recharged?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    items?: ItemListRelationFilter
    logs?: RechargeLogListRelationFilter
    usageLogs?: ApiUsageLogListRelationFilter
  }, "id" | "email" | "googleId" | "apiKey">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    googleId?: SortOrder
    apiKey?: SortOrder
    apiUrl?: SortOrderInput | SortOrder
    credits?: SortOrder
    creditsUsed?: SortOrder
    recharged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringWithAggregatesFilter<"User"> | string
    apiKey?: StringWithAggregatesFilter<"User"> | string
    apiUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    credits?: IntWithAggregatesFilter<"User"> | number
    creditsUsed?: IntWithAggregatesFilter<"User"> | number
    recharged?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    userId?: StringFilter<"Item"> | string
    value?: FloatFilter<"Item"> | number
    txHash?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    userId?: StringFilter<"Item"> | string
    value?: FloatFilter<"Item"> | number
    txHash?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    userId?: StringWithAggregatesFilter<"Item"> | string
    value?: FloatWithAggregatesFilter<"Item"> | number
    txHash?: StringWithAggregatesFilter<"Item"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type RechargeLogWhereInput = {
    AND?: RechargeLogWhereInput | RechargeLogWhereInput[]
    OR?: RechargeLogWhereInput[]
    NOT?: RechargeLogWhereInput | RechargeLogWhereInput[]
    id?: IntFilter<"RechargeLog"> | number
    userId?: StringFilter<"RechargeLog"> | string
    attemptedAt?: DateTimeFilter<"RechargeLog"> | Date | string
    successful?: BoolFilter<"RechargeLog"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RechargeLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    attemptedAt?: SortOrder
    successful?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RechargeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RechargeLogWhereInput | RechargeLogWhereInput[]
    OR?: RechargeLogWhereInput[]
    NOT?: RechargeLogWhereInput | RechargeLogWhereInput[]
    userId?: StringFilter<"RechargeLog"> | string
    attemptedAt?: DateTimeFilter<"RechargeLog"> | Date | string
    successful?: BoolFilter<"RechargeLog"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RechargeLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    attemptedAt?: SortOrder
    successful?: SortOrder
    _count?: RechargeLogCountOrderByAggregateInput
    _avg?: RechargeLogAvgOrderByAggregateInput
    _max?: RechargeLogMaxOrderByAggregateInput
    _min?: RechargeLogMinOrderByAggregateInput
    _sum?: RechargeLogSumOrderByAggregateInput
  }

  export type RechargeLogScalarWhereWithAggregatesInput = {
    AND?: RechargeLogScalarWhereWithAggregatesInput | RechargeLogScalarWhereWithAggregatesInput[]
    OR?: RechargeLogScalarWhereWithAggregatesInput[]
    NOT?: RechargeLogScalarWhereWithAggregatesInput | RechargeLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RechargeLog"> | number
    userId?: StringWithAggregatesFilter<"RechargeLog"> | string
    attemptedAt?: DateTimeWithAggregatesFilter<"RechargeLog"> | Date | string
    successful?: BoolWithAggregatesFilter<"RechargeLog"> | boolean
  }

  export type ApiUsageLogWhereInput = {
    AND?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    OR?: ApiUsageLogWhereInput[]
    NOT?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    id?: IntFilter<"ApiUsageLog"> | number
    userId?: StringFilter<"ApiUsageLog"> | string
    endpoint?: StringFilter<"ApiUsageLog"> | string
    statusCode?: IntFilter<"ApiUsageLog"> | number
    occurredAt?: DateTimeFilter<"ApiUsageLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApiUsageLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    statusCode?: SortOrder
    occurredAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiUsageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    OR?: ApiUsageLogWhereInput[]
    NOT?: ApiUsageLogWhereInput | ApiUsageLogWhereInput[]
    userId?: StringFilter<"ApiUsageLog"> | string
    endpoint?: StringFilter<"ApiUsageLog"> | string
    statusCode?: IntFilter<"ApiUsageLog"> | number
    occurredAt?: DateTimeFilter<"ApiUsageLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApiUsageLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    statusCode?: SortOrder
    occurredAt?: SortOrder
    _count?: ApiUsageLogCountOrderByAggregateInput
    _avg?: ApiUsageLogAvgOrderByAggregateInput
    _max?: ApiUsageLogMaxOrderByAggregateInput
    _min?: ApiUsageLogMinOrderByAggregateInput
    _sum?: ApiUsageLogSumOrderByAggregateInput
  }

  export type ApiUsageLogScalarWhereWithAggregatesInput = {
    AND?: ApiUsageLogScalarWhereWithAggregatesInput | ApiUsageLogScalarWhereWithAggregatesInput[]
    OR?: ApiUsageLogScalarWhereWithAggregatesInput[]
    NOT?: ApiUsageLogScalarWhereWithAggregatesInput | ApiUsageLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApiUsageLog"> | number
    userId?: StringWithAggregatesFilter<"ApiUsageLog"> | string
    endpoint?: StringWithAggregatesFilter<"ApiUsageLog"> | string
    statusCode?: IntWithAggregatesFilter<"ApiUsageLog"> | number
    occurredAt?: DateTimeWithAggregatesFilter<"ApiUsageLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    googleId: string
    apiKey: string
    apiUrl?: string | null
    credits?: number
    creditsUsed?: number
    recharged?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutUserInput
    logs?: RechargeLogCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    googleId: string
    apiKey: string
    apiUrl?: string | null
    credits?: number
    creditsUsed?: number
    recharged?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutUserInput
    logs?: RechargeLogUncheckedCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutUserNestedInput
    logs?: RechargeLogUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutUserNestedInput
    logs?: RechargeLogUncheckedUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    googleId: string
    apiKey: string
    apiUrl?: string | null
    credits?: number
    creditsUsed?: number
    recharged?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    value: number
    txHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    userId: string
    value: number
    txHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateInput = {
    value?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyInput = {
    id?: number
    userId: string
    value: number
    txHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    value?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeLogCreateInput = {
    attemptedAt?: Date | string
    successful: boolean
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type RechargeLogUncheckedCreateInput = {
    id?: number
    userId: string
    attemptedAt?: Date | string
    successful: boolean
  }

  export type RechargeLogUpdateInput = {
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successful?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type RechargeLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successful?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RechargeLogCreateManyInput = {
    id?: number
    userId: string
    attemptedAt?: Date | string
    successful: boolean
  }

  export type RechargeLogUpdateManyMutationInput = {
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successful?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RechargeLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successful?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiUsageLogCreateInput = {
    endpoint: string
    statusCode: number
    occurredAt?: Date | string
    user: UserCreateNestedOneWithoutUsageLogsInput
  }

  export type ApiUsageLogUncheckedCreateInput = {
    id?: number
    userId: string
    endpoint: string
    statusCode: number
    occurredAt?: Date | string
  }

  export type ApiUsageLogUpdateInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUsageLogsNestedInput
  }

  export type ApiUsageLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageLogCreateManyInput = {
    id?: number
    userId: string
    endpoint: string
    statusCode: number
    occurredAt?: Date | string
  }

  export type ApiUsageLogUpdateManyMutationInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type RechargeLogListRelationFilter = {
    every?: RechargeLogWhereInput
    some?: RechargeLogWhereInput
    none?: RechargeLogWhereInput
  }

  export type ApiUsageLogListRelationFilter = {
    every?: ApiUsageLogWhereInput
    some?: ApiUsageLogWhereInput
    none?: ApiUsageLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RechargeLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiUsageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    googleId?: SortOrder
    apiKey?: SortOrder
    apiUrl?: SortOrder
    credits?: SortOrder
    creditsUsed?: SortOrder
    recharged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
    creditsUsed?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    googleId?: SortOrder
    apiKey?: SortOrder
    apiUrl?: SortOrder
    credits?: SortOrder
    creditsUsed?: SortOrder
    recharged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    googleId?: SortOrder
    apiKey?: SortOrder
    apiUrl?: SortOrder
    credits?: SortOrder
    creditsUsed?: SortOrder
    recharged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
    creditsUsed?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RechargeLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attemptedAt?: SortOrder
    successful?: SortOrder
  }

  export type RechargeLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RechargeLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attemptedAt?: SortOrder
    successful?: SortOrder
  }

  export type RechargeLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attemptedAt?: SortOrder
    successful?: SortOrder
  }

  export type RechargeLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApiUsageLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    statusCode?: SortOrder
    occurredAt?: SortOrder
  }

  export type ApiUsageLogAvgOrderByAggregateInput = {
    id?: SortOrder
    statusCode?: SortOrder
  }

  export type ApiUsageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    statusCode?: SortOrder
    occurredAt?: SortOrder
  }

  export type ApiUsageLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    statusCode?: SortOrder
    occurredAt?: SortOrder
  }

  export type ApiUsageLogSumOrderByAggregateInput = {
    id?: SortOrder
    statusCode?: SortOrder
  }

  export type ItemCreateNestedManyWithoutUserInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type RechargeLogCreateNestedManyWithoutUserInput = {
    create?: XOR<RechargeLogCreateWithoutUserInput, RechargeLogUncheckedCreateWithoutUserInput> | RechargeLogCreateWithoutUserInput[] | RechargeLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RechargeLogCreateOrConnectWithoutUserInput | RechargeLogCreateOrConnectWithoutUserInput[]
    createMany?: RechargeLogCreateManyUserInputEnvelope
    connect?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
  }

  export type ApiUsageLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput> | ApiUsageLogCreateWithoutUserInput[] | ApiUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutUserInput | ApiUsageLogCreateOrConnectWithoutUserInput[]
    createMany?: ApiUsageLogCreateManyUserInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type RechargeLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RechargeLogCreateWithoutUserInput, RechargeLogUncheckedCreateWithoutUserInput> | RechargeLogCreateWithoutUserInput[] | RechargeLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RechargeLogCreateOrConnectWithoutUserInput | RechargeLogCreateOrConnectWithoutUserInput[]
    createMany?: RechargeLogCreateManyUserInputEnvelope
    connect?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
  }

  export type ApiUsageLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput> | ApiUsageLogCreateWithoutUserInput[] | ApiUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutUserInput | ApiUsageLogCreateOrConnectWithoutUserInput[]
    createMany?: ApiUsageLogCreateManyUserInputEnvelope
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUserInput | ItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUserInput | ItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUserInput | ItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type RechargeLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<RechargeLogCreateWithoutUserInput, RechargeLogUncheckedCreateWithoutUserInput> | RechargeLogCreateWithoutUserInput[] | RechargeLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RechargeLogCreateOrConnectWithoutUserInput | RechargeLogCreateOrConnectWithoutUserInput[]
    upsert?: RechargeLogUpsertWithWhereUniqueWithoutUserInput | RechargeLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RechargeLogCreateManyUserInputEnvelope
    set?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
    disconnect?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
    delete?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
    connect?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
    update?: RechargeLogUpdateWithWhereUniqueWithoutUserInput | RechargeLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RechargeLogUpdateManyWithWhereWithoutUserInput | RechargeLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RechargeLogScalarWhereInput | RechargeLogScalarWhereInput[]
  }

  export type ApiUsageLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput> | ApiUsageLogCreateWithoutUserInput[] | ApiUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutUserInput | ApiUsageLogCreateOrConnectWithoutUserInput[]
    upsert?: ApiUsageLogUpsertWithWhereUniqueWithoutUserInput | ApiUsageLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiUsageLogCreateManyUserInputEnvelope
    set?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    disconnect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    delete?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    update?: ApiUsageLogUpdateWithWhereUniqueWithoutUserInput | ApiUsageLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiUsageLogUpdateManyWithWhereWithoutUserInput | ApiUsageLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUserInput | ItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUserInput | ItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUserInput | ItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type RechargeLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RechargeLogCreateWithoutUserInput, RechargeLogUncheckedCreateWithoutUserInput> | RechargeLogCreateWithoutUserInput[] | RechargeLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RechargeLogCreateOrConnectWithoutUserInput | RechargeLogCreateOrConnectWithoutUserInput[]
    upsert?: RechargeLogUpsertWithWhereUniqueWithoutUserInput | RechargeLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RechargeLogCreateManyUserInputEnvelope
    set?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
    disconnect?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
    delete?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
    connect?: RechargeLogWhereUniqueInput | RechargeLogWhereUniqueInput[]
    update?: RechargeLogUpdateWithWhereUniqueWithoutUserInput | RechargeLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RechargeLogUpdateManyWithWhereWithoutUserInput | RechargeLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RechargeLogScalarWhereInput | RechargeLogScalarWhereInput[]
  }

  export type ApiUsageLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput> | ApiUsageLogCreateWithoutUserInput[] | ApiUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageLogCreateOrConnectWithoutUserInput | ApiUsageLogCreateOrConnectWithoutUserInput[]
    upsert?: ApiUsageLogUpsertWithWhereUniqueWithoutUserInput | ApiUsageLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiUsageLogCreateManyUserInputEnvelope
    set?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    disconnect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    delete?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    connect?: ApiUsageLogWhereUniqueInput | ApiUsageLogWhereUniqueInput[]
    update?: ApiUsageLogUpdateWithWhereUniqueWithoutUserInput | ApiUsageLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiUsageLogUpdateManyWithWhereWithoutUserInput | ApiUsageLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserCreateNestedOneWithoutUsageLogsInput = {
    create?: XOR<UserCreateWithoutUsageLogsInput, UserUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUsageLogsNestedInput = {
    create?: XOR<UserCreateWithoutUsageLogsInput, UserUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageLogsInput
    upsert?: UserUpsertWithoutUsageLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsageLogsInput, UserUpdateWithoutUsageLogsInput>, UserUncheckedUpdateWithoutUsageLogsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ItemCreateWithoutUserInput = {
    value: number
    txHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutUserInput = {
    id?: number
    value: number
    txHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutUserInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput>
  }

  export type ItemCreateManyUserInputEnvelope = {
    data: ItemCreateManyUserInput | ItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RechargeLogCreateWithoutUserInput = {
    attemptedAt?: Date | string
    successful: boolean
  }

  export type RechargeLogUncheckedCreateWithoutUserInput = {
    id?: number
    attemptedAt?: Date | string
    successful: boolean
  }

  export type RechargeLogCreateOrConnectWithoutUserInput = {
    where: RechargeLogWhereUniqueInput
    create: XOR<RechargeLogCreateWithoutUserInput, RechargeLogUncheckedCreateWithoutUserInput>
  }

  export type RechargeLogCreateManyUserInputEnvelope = {
    data: RechargeLogCreateManyUserInput | RechargeLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiUsageLogCreateWithoutUserInput = {
    endpoint: string
    statusCode: number
    occurredAt?: Date | string
  }

  export type ApiUsageLogUncheckedCreateWithoutUserInput = {
    id?: number
    endpoint: string
    statusCode: number
    occurredAt?: Date | string
  }

  export type ApiUsageLogCreateOrConnectWithoutUserInput = {
    where: ApiUsageLogWhereUniqueInput
    create: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput>
  }

  export type ApiUsageLogCreateManyUserInputEnvelope = {
    data: ApiUsageLogCreateManyUserInput | ApiUsageLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutUserInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutUserInput, ItemUncheckedUpdateWithoutUserInput>
    create: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutUserInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutUserInput, ItemUncheckedUpdateWithoutUserInput>
  }

  export type ItemUpdateManyWithWhereWithoutUserInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutUserInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: IntFilter<"Item"> | number
    userId?: StringFilter<"Item"> | string
    value?: FloatFilter<"Item"> | number
    txHash?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type RechargeLogUpsertWithWhereUniqueWithoutUserInput = {
    where: RechargeLogWhereUniqueInput
    update: XOR<RechargeLogUpdateWithoutUserInput, RechargeLogUncheckedUpdateWithoutUserInput>
    create: XOR<RechargeLogCreateWithoutUserInput, RechargeLogUncheckedCreateWithoutUserInput>
  }

  export type RechargeLogUpdateWithWhereUniqueWithoutUserInput = {
    where: RechargeLogWhereUniqueInput
    data: XOR<RechargeLogUpdateWithoutUserInput, RechargeLogUncheckedUpdateWithoutUserInput>
  }

  export type RechargeLogUpdateManyWithWhereWithoutUserInput = {
    where: RechargeLogScalarWhereInput
    data: XOR<RechargeLogUpdateManyMutationInput, RechargeLogUncheckedUpdateManyWithoutUserInput>
  }

  export type RechargeLogScalarWhereInput = {
    AND?: RechargeLogScalarWhereInput | RechargeLogScalarWhereInput[]
    OR?: RechargeLogScalarWhereInput[]
    NOT?: RechargeLogScalarWhereInput | RechargeLogScalarWhereInput[]
    id?: IntFilter<"RechargeLog"> | number
    userId?: StringFilter<"RechargeLog"> | string
    attemptedAt?: DateTimeFilter<"RechargeLog"> | Date | string
    successful?: BoolFilter<"RechargeLog"> | boolean
  }

  export type ApiUsageLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiUsageLogWhereUniqueInput
    update: XOR<ApiUsageLogUpdateWithoutUserInput, ApiUsageLogUncheckedUpdateWithoutUserInput>
    create: XOR<ApiUsageLogCreateWithoutUserInput, ApiUsageLogUncheckedCreateWithoutUserInput>
  }

  export type ApiUsageLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiUsageLogWhereUniqueInput
    data: XOR<ApiUsageLogUpdateWithoutUserInput, ApiUsageLogUncheckedUpdateWithoutUserInput>
  }

  export type ApiUsageLogUpdateManyWithWhereWithoutUserInput = {
    where: ApiUsageLogScalarWhereInput
    data: XOR<ApiUsageLogUpdateManyMutationInput, ApiUsageLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiUsageLogScalarWhereInput = {
    AND?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
    OR?: ApiUsageLogScalarWhereInput[]
    NOT?: ApiUsageLogScalarWhereInput | ApiUsageLogScalarWhereInput[]
    id?: IntFilter<"ApiUsageLog"> | number
    userId?: StringFilter<"ApiUsageLog"> | string
    endpoint?: StringFilter<"ApiUsageLog"> | string
    statusCode?: IntFilter<"ApiUsageLog"> | number
    occurredAt?: DateTimeFilter<"ApiUsageLog"> | Date | string
  }

  export type UserCreateWithoutItemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    googleId: string
    apiKey: string
    apiUrl?: string | null
    credits?: number
    creditsUsed?: number
    recharged?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: RechargeLogCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    googleId: string
    apiKey: string
    apiUrl?: string | null
    credits?: number
    creditsUsed?: number
    recharged?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: RechargeLogUncheckedCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: RechargeLogUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: RechargeLogUncheckedUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    googleId: string
    apiKey: string
    apiUrl?: string | null
    credits?: number
    creditsUsed?: number
    recharged?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    googleId: string
    apiKey: string
    apiUrl?: string | null
    credits?: number
    creditsUsed?: number
    recharged?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutUserInput
    usageLogs?: ApiUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutUserNestedInput
    usageLogs?: ApiUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUsageLogsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    googleId: string
    apiKey: string
    apiUrl?: string | null
    credits?: number
    creditsUsed?: number
    recharged?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutUserInput
    logs?: RechargeLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsageLogsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    googleId: string
    apiKey: string
    apiUrl?: string | null
    credits?: number
    creditsUsed?: number
    recharged?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutUserInput
    logs?: RechargeLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsageLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsageLogsInput, UserUncheckedCreateWithoutUsageLogsInput>
  }

  export type UserUpsertWithoutUsageLogsInput = {
    update: XOR<UserUpdateWithoutUsageLogsInput, UserUncheckedUpdateWithoutUsageLogsInput>
    create: XOR<UserCreateWithoutUsageLogsInput, UserUncheckedCreateWithoutUsageLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsageLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsageLogsInput, UserUncheckedUpdateWithoutUsageLogsInput>
  }

  export type UserUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutUserNestedInput
    logs?: RechargeLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    creditsUsed?: IntFieldUpdateOperationsInput | number
    recharged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutUserNestedInput
    logs?: RechargeLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemCreateManyUserInput = {
    id?: number
    value: number
    txHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RechargeLogCreateManyUserInput = {
    id?: number
    attemptedAt?: Date | string
    successful: boolean
  }

  export type ApiUsageLogCreateManyUserInput = {
    id?: number
    endpoint: string
    statusCode: number
    occurredAt?: Date | string
  }

  export type ItemUpdateWithoutUserInput = {
    value?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeLogUpdateWithoutUserInput = {
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successful?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RechargeLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successful?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RechargeLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successful?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiUsageLogUpdateWithoutUserInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
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