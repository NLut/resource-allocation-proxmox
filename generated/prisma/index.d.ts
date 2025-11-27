
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model RequestInfo
 * 
 */
export type RequestInfo = $Result.DefaultSelection<Prisma.$RequestInfoPayload>
/**
 * Model RequestEditLog
 * 
 */
export type RequestEditLog = $Result.DefaultSelection<Prisma.$RequestEditLogPayload>
/**
 * Model InstanceTemplate
 * 
 */
export type InstanceTemplate = $Result.DefaultSelection<Prisma.$InstanceTemplatePayload>
/**
 * Model OsTemplate
 * 
 */
export type OsTemplate = $Result.DefaultSelection<Prisma.$OsTemplatePayload>
/**
 * Model InstanceOsTemplate
 * 
 */
export type InstanceOsTemplate = $Result.DefaultSelection<Prisma.$InstanceOsTemplatePayload>
/**
 * Model InstanceInfo
 * 
 */
export type InstanceInfo = $Result.DefaultSelection<Prisma.$InstanceInfoPayload>
/**
 * Model NotificationInfo
 * 
 */
export type NotificationInfo = $Result.DefaultSelection<Prisma.$NotificationInfoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestInfo`: Exposes CRUD operations for the **RequestInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestInfos
    * const requestInfos = await prisma.requestInfo.findMany()
    * ```
    */
  get requestInfo(): Prisma.RequestInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestEditLog`: Exposes CRUD operations for the **RequestEditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestEditLogs
    * const requestEditLogs = await prisma.requestEditLog.findMany()
    * ```
    */
  get requestEditLog(): Prisma.RequestEditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instanceTemplate`: Exposes CRUD operations for the **InstanceTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstanceTemplates
    * const instanceTemplates = await prisma.instanceTemplate.findMany()
    * ```
    */
  get instanceTemplate(): Prisma.InstanceTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.osTemplate`: Exposes CRUD operations for the **OsTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OsTemplates
    * const osTemplates = await prisma.osTemplate.findMany()
    * ```
    */
  get osTemplate(): Prisma.OsTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instanceOsTemplate`: Exposes CRUD operations for the **InstanceOsTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstanceOsTemplates
    * const instanceOsTemplates = await prisma.instanceOsTemplate.findMany()
    * ```
    */
  get instanceOsTemplate(): Prisma.InstanceOsTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instanceInfo`: Exposes CRUD operations for the **InstanceInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstanceInfos
    * const instanceInfos = await prisma.instanceInfo.findMany()
    * ```
    */
  get instanceInfo(): Prisma.InstanceInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationInfo`: Exposes CRUD operations for the **NotificationInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationInfos
    * const notificationInfos = await prisma.notificationInfo.findMany()
    * ```
    */
  get notificationInfo(): Prisma.NotificationInfoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    User: 'User',
    Post: 'Post',
    RequestInfo: 'RequestInfo',
    RequestEditLog: 'RequestEditLog',
    InstanceTemplate: 'InstanceTemplate',
    OsTemplate: 'OsTemplate',
    InstanceOsTemplate: 'InstanceOsTemplate',
    InstanceInfo: 'InstanceInfo',
    NotificationInfo: 'NotificationInfo'
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
      modelProps: "account" | "session" | "verificationToken" | "user" | "post" | "requestInfo" | "requestEditLog" | "instanceTemplate" | "osTemplate" | "instanceOsTemplate" | "instanceInfo" | "notificationInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
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
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      RequestInfo: {
        payload: Prisma.$RequestInfoPayload<ExtArgs>
        fields: Prisma.RequestInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload>
          }
          findFirst: {
            args: Prisma.RequestInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload>
          }
          findMany: {
            args: Prisma.RequestInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload>[]
          }
          create: {
            args: Prisma.RequestInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload>
          }
          createMany: {
            args: Prisma.RequestInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload>[]
          }
          delete: {
            args: Prisma.RequestInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload>
          }
          update: {
            args: Prisma.RequestInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload>
          }
          deleteMany: {
            args: Prisma.RequestInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload>[]
          }
          upsert: {
            args: Prisma.RequestInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestInfoPayload>
          }
          aggregate: {
            args: Prisma.RequestInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestInfo>
          }
          groupBy: {
            args: Prisma.RequestInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestInfoCountArgs<ExtArgs>
            result: $Utils.Optional<RequestInfoCountAggregateOutputType> | number
          }
        }
      }
      RequestEditLog: {
        payload: Prisma.$RequestEditLogPayload<ExtArgs>
        fields: Prisma.RequestEditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestEditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestEditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload>
          }
          findFirst: {
            args: Prisma.RequestEditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestEditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload>
          }
          findMany: {
            args: Prisma.RequestEditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload>[]
          }
          create: {
            args: Prisma.RequestEditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload>
          }
          createMany: {
            args: Prisma.RequestEditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestEditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload>[]
          }
          delete: {
            args: Prisma.RequestEditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload>
          }
          update: {
            args: Prisma.RequestEditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload>
          }
          deleteMany: {
            args: Prisma.RequestEditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestEditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestEditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload>[]
          }
          upsert: {
            args: Prisma.RequestEditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEditLogPayload>
          }
          aggregate: {
            args: Prisma.RequestEditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestEditLog>
          }
          groupBy: {
            args: Prisma.RequestEditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestEditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestEditLogCountArgs<ExtArgs>
            result: $Utils.Optional<RequestEditLogCountAggregateOutputType> | number
          }
        }
      }
      InstanceTemplate: {
        payload: Prisma.$InstanceTemplatePayload<ExtArgs>
        fields: Prisma.InstanceTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstanceTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstanceTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload>
          }
          findFirst: {
            args: Prisma.InstanceTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstanceTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload>
          }
          findMany: {
            args: Prisma.InstanceTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload>[]
          }
          create: {
            args: Prisma.InstanceTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload>
          }
          createMany: {
            args: Prisma.InstanceTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstanceTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload>[]
          }
          delete: {
            args: Prisma.InstanceTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload>
          }
          update: {
            args: Prisma.InstanceTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload>
          }
          deleteMany: {
            args: Prisma.InstanceTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstanceTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstanceTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload>[]
          }
          upsert: {
            args: Prisma.InstanceTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceTemplatePayload>
          }
          aggregate: {
            args: Prisma.InstanceTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstanceTemplate>
          }
          groupBy: {
            args: Prisma.InstanceTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstanceTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstanceTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<InstanceTemplateCountAggregateOutputType> | number
          }
        }
      }
      OsTemplate: {
        payload: Prisma.$OsTemplatePayload<ExtArgs>
        fields: Prisma.OsTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OsTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OsTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload>
          }
          findFirst: {
            args: Prisma.OsTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OsTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload>
          }
          findMany: {
            args: Prisma.OsTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload>[]
          }
          create: {
            args: Prisma.OsTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload>
          }
          createMany: {
            args: Prisma.OsTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OsTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload>[]
          }
          delete: {
            args: Prisma.OsTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload>
          }
          update: {
            args: Prisma.OsTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload>
          }
          deleteMany: {
            args: Prisma.OsTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OsTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OsTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload>[]
          }
          upsert: {
            args: Prisma.OsTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OsTemplatePayload>
          }
          aggregate: {
            args: Prisma.OsTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOsTemplate>
          }
          groupBy: {
            args: Prisma.OsTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<OsTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.OsTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<OsTemplateCountAggregateOutputType> | number
          }
        }
      }
      InstanceOsTemplate: {
        payload: Prisma.$InstanceOsTemplatePayload<ExtArgs>
        fields: Prisma.InstanceOsTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstanceOsTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstanceOsTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload>
          }
          findFirst: {
            args: Prisma.InstanceOsTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstanceOsTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload>
          }
          findMany: {
            args: Prisma.InstanceOsTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload>[]
          }
          create: {
            args: Prisma.InstanceOsTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload>
          }
          createMany: {
            args: Prisma.InstanceOsTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstanceOsTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload>[]
          }
          delete: {
            args: Prisma.InstanceOsTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload>
          }
          update: {
            args: Prisma.InstanceOsTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload>
          }
          deleteMany: {
            args: Prisma.InstanceOsTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstanceOsTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstanceOsTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload>[]
          }
          upsert: {
            args: Prisma.InstanceOsTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceOsTemplatePayload>
          }
          aggregate: {
            args: Prisma.InstanceOsTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstanceOsTemplate>
          }
          groupBy: {
            args: Prisma.InstanceOsTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstanceOsTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstanceOsTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<InstanceOsTemplateCountAggregateOutputType> | number
          }
        }
      }
      InstanceInfo: {
        payload: Prisma.$InstanceInfoPayload<ExtArgs>
        fields: Prisma.InstanceInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstanceInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstanceInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload>
          }
          findFirst: {
            args: Prisma.InstanceInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstanceInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload>
          }
          findMany: {
            args: Prisma.InstanceInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload>[]
          }
          create: {
            args: Prisma.InstanceInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload>
          }
          createMany: {
            args: Prisma.InstanceInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstanceInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload>[]
          }
          delete: {
            args: Prisma.InstanceInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload>
          }
          update: {
            args: Prisma.InstanceInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload>
          }
          deleteMany: {
            args: Prisma.InstanceInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstanceInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstanceInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload>[]
          }
          upsert: {
            args: Prisma.InstanceInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanceInfoPayload>
          }
          aggregate: {
            args: Prisma.InstanceInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstanceInfo>
          }
          groupBy: {
            args: Prisma.InstanceInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstanceInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstanceInfoCountArgs<ExtArgs>
            result: $Utils.Optional<InstanceInfoCountAggregateOutputType> | number
          }
        }
      }
      NotificationInfo: {
        payload: Prisma.$NotificationInfoPayload<ExtArgs>
        fields: Prisma.NotificationInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload>
          }
          findFirst: {
            args: Prisma.NotificationInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload>
          }
          findMany: {
            args: Prisma.NotificationInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload>[]
          }
          create: {
            args: Prisma.NotificationInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload>
          }
          createMany: {
            args: Prisma.NotificationInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload>[]
          }
          delete: {
            args: Prisma.NotificationInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload>
          }
          update: {
            args: Prisma.NotificationInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload>
          }
          deleteMany: {
            args: Prisma.NotificationInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload>[]
          }
          upsert: {
            args: Prisma.NotificationInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationInfoPayload>
          }
          aggregate: {
            args: Prisma.NotificationInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationInfo>
          }
          groupBy: {
            args: Prisma.NotificationInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationInfoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationInfoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    user?: UserOmit
    post?: PostOmit
    requestInfo?: RequestInfoOmit
    requestEditLog?: RequestEditLogOmit
    instanceTemplate?: InstanceTemplateOmit
    osTemplate?: OsTemplateOmit
    instanceOsTemplate?: InstanceOsTemplateOmit
    instanceInfo?: InstanceInfoOmit
    notificationInfo?: NotificationInfoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    accounts: number
    sessions: number
    posts: number
    requests: number
    instances: number
    editLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    instances?: boolean | UserCountOutputTypeCountInstancesArgs
    editLogs?: boolean | UserCountOutputTypeCountEditLogsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestInfoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceInfoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestEditLogWhereInput
  }


  /**
   * Count Type RequestInfoCountOutputType
   */

  export type RequestInfoCountOutputType = {
    notifications: number
    editLogs: number
    instances: number
  }

  export type RequestInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | RequestInfoCountOutputTypeCountNotificationsArgs
    editLogs?: boolean | RequestInfoCountOutputTypeCountEditLogsArgs
    instances?: boolean | RequestInfoCountOutputTypeCountInstancesArgs
  }

  // Custom InputTypes
  /**
   * RequestInfoCountOutputType without action
   */
  export type RequestInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfoCountOutputType
     */
    select?: RequestInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RequestInfoCountOutputType without action
   */
  export type RequestInfoCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationInfoWhereInput
  }

  /**
   * RequestInfoCountOutputType without action
   */
  export type RequestInfoCountOutputTypeCountEditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestEditLogWhereInput
  }

  /**
   * RequestInfoCountOutputType without action
   */
  export type RequestInfoCountOutputTypeCountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceInfoWhereInput
  }


  /**
   * Count Type InstanceTemplateCountOutputType
   */

  export type InstanceTemplateCountOutputType = {
    osTemplates: number
  }

  export type InstanceTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osTemplates?: boolean | InstanceTemplateCountOutputTypeCountOsTemplatesArgs
  }

  // Custom InputTypes
  /**
   * InstanceTemplateCountOutputType without action
   */
  export type InstanceTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplateCountOutputType
     */
    select?: InstanceTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstanceTemplateCountOutputType without action
   */
  export type InstanceTemplateCountOutputTypeCountOsTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceOsTemplateWhereInput
  }


  /**
   * Count Type OsTemplateCountOutputType
   */

  export type OsTemplateCountOutputType = {
    instancesOs: number
  }

  export type OsTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instancesOs?: boolean | OsTemplateCountOutputTypeCountInstancesOsArgs
  }

  // Custom InputTypes
  /**
   * OsTemplateCountOutputType without action
   */
  export type OsTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplateCountOutputType
     */
    select?: OsTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OsTemplateCountOutputType without action
   */
  export type OsTemplateCountOutputTypeCountInstancesOsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceOsTemplateWhereInput
  }


  /**
   * Count Type InstanceOsTemplateCountOutputType
   */

  export type InstanceOsTemplateCountOutputType = {
    requests: number
  }

  export type InstanceOsTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | InstanceOsTemplateCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * InstanceOsTemplateCountOutputType without action
   */
  export type InstanceOsTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplateCountOutputType
     */
    select?: InstanceOsTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstanceOsTemplateCountOutputType without action
   */
  export type InstanceOsTemplateCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestInfoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string | null
    createDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string | null
    createDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    createDate: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createDate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createDate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createDate?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: string
    createDate: Date
    _count: UserCountAggregateOutputType | null
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
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createDate?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    instances?: boolean | User$instancesArgs<ExtArgs>
    editLogs?: boolean | User$editLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createDate?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "createDate", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    instances?: boolean | User$instancesArgs<ExtArgs>
    editLogs?: boolean | User$editLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      requests: Prisma.$RequestInfoPayload<ExtArgs>[]
      instances: Prisma.$InstanceInfoPayload<ExtArgs>[]
      editLogs: Prisma.$RequestEditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      role: string
      createDate: Date
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instances<T extends User$instancesArgs<ExtArgs> = {}>(args?: Subset<T, User$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    editLogs<T extends User$editLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$editLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createDate: FieldRef<"User", 'DateTime'>
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
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    where?: RequestInfoWhereInput
    orderBy?: RequestInfoOrderByWithRelationInput | RequestInfoOrderByWithRelationInput[]
    cursor?: RequestInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestInfoScalarFieldEnum | RequestInfoScalarFieldEnum[]
  }

  /**
   * User.instances
   */
  export type User$instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    where?: InstanceInfoWhereInput
    orderBy?: InstanceInfoOrderByWithRelationInput | InstanceInfoOrderByWithRelationInput[]
    cursor?: InstanceInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstanceInfoScalarFieldEnum | InstanceInfoScalarFieldEnum[]
  }

  /**
   * User.editLogs
   */
  export type User$editLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    where?: RequestEditLogWhereInput
    orderBy?: RequestEditLogOrderByWithRelationInput | RequestEditLogOrderByWithRelationInput[]
    cursor?: RequestEditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestEditLogScalarFieldEnum | RequestEditLogScalarFieldEnum[]
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
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model RequestInfo
   */

  export type AggregateRequestInfo = {
    _count: RequestInfoCountAggregateOutputType | null
    _avg: RequestInfoAvgAggregateOutputType | null
    _sum: RequestInfoSumAggregateOutputType | null
    _min: RequestInfoMinAggregateOutputType | null
    _max: RequestInfoMaxAggregateOutputType | null
  }

  export type RequestInfoAvgAggregateOutputType = {
    requestId: number | null
    templateId: number | null
  }

  export type RequestInfoSumAggregateOutputType = {
    requestId: number | null
    templateId: number | null
  }

  export type RequestInfoMinAggregateOutputType = {
    requestId: number | null
    userId: string | null
    templateId: number | null
    instantName: string | null
    requestStatus: string | null
    requestDate: Date | null
    endDate: Date | null
    lastEditDate: Date | null
    note: string | null
    isApprove: boolean | null
  }

  export type RequestInfoMaxAggregateOutputType = {
    requestId: number | null
    userId: string | null
    templateId: number | null
    instantName: string | null
    requestStatus: string | null
    requestDate: Date | null
    endDate: Date | null
    lastEditDate: Date | null
    note: string | null
    isApprove: boolean | null
  }

  export type RequestInfoCountAggregateOutputType = {
    requestId: number
    userId: number
    templateId: number
    instantName: number
    requestStatus: number
    requestDate: number
    endDate: number
    lastEditDate: number
    note: number
    isApprove: number
    _all: number
  }


  export type RequestInfoAvgAggregateInputType = {
    requestId?: true
    templateId?: true
  }

  export type RequestInfoSumAggregateInputType = {
    requestId?: true
    templateId?: true
  }

  export type RequestInfoMinAggregateInputType = {
    requestId?: true
    userId?: true
    templateId?: true
    instantName?: true
    requestStatus?: true
    requestDate?: true
    endDate?: true
    lastEditDate?: true
    note?: true
    isApprove?: true
  }

  export type RequestInfoMaxAggregateInputType = {
    requestId?: true
    userId?: true
    templateId?: true
    instantName?: true
    requestStatus?: true
    requestDate?: true
    endDate?: true
    lastEditDate?: true
    note?: true
    isApprove?: true
  }

  export type RequestInfoCountAggregateInputType = {
    requestId?: true
    userId?: true
    templateId?: true
    instantName?: true
    requestStatus?: true
    requestDate?: true
    endDate?: true
    lastEditDate?: true
    note?: true
    isApprove?: true
    _all?: true
  }

  export type RequestInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestInfo to aggregate.
     */
    where?: RequestInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestInfos to fetch.
     */
    orderBy?: RequestInfoOrderByWithRelationInput | RequestInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestInfos
    **/
    _count?: true | RequestInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestInfoMaxAggregateInputType
  }

  export type GetRequestInfoAggregateType<T extends RequestInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestInfo[P]>
      : GetScalarType<T[P], AggregateRequestInfo[P]>
  }




  export type RequestInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestInfoWhereInput
    orderBy?: RequestInfoOrderByWithAggregationInput | RequestInfoOrderByWithAggregationInput[]
    by: RequestInfoScalarFieldEnum[] | RequestInfoScalarFieldEnum
    having?: RequestInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestInfoCountAggregateInputType | true
    _avg?: RequestInfoAvgAggregateInputType
    _sum?: RequestInfoSumAggregateInputType
    _min?: RequestInfoMinAggregateInputType
    _max?: RequestInfoMaxAggregateInputType
  }

  export type RequestInfoGroupByOutputType = {
    requestId: number
    userId: string
    templateId: number
    instantName: string
    requestStatus: string
    requestDate: Date
    endDate: Date
    lastEditDate: Date
    note: string
    isApprove: boolean
    _count: RequestInfoCountAggregateOutputType | null
    _avg: RequestInfoAvgAggregateOutputType | null
    _sum: RequestInfoSumAggregateOutputType | null
    _min: RequestInfoMinAggregateOutputType | null
    _max: RequestInfoMaxAggregateOutputType | null
  }

  type GetRequestInfoGroupByPayload<T extends RequestInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestInfoGroupByOutputType[P]>
            : GetScalarType<T[P], RequestInfoGroupByOutputType[P]>
        }
      >
    >


  export type RequestInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requestId?: boolean
    userId?: boolean
    templateId?: boolean
    instantName?: boolean
    requestStatus?: boolean
    requestDate?: boolean
    endDate?: boolean
    lastEditDate?: boolean
    note?: boolean
    isApprove?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | InstanceOsTemplateDefaultArgs<ExtArgs>
    notifications?: boolean | RequestInfo$notificationsArgs<ExtArgs>
    editLogs?: boolean | RequestInfo$editLogsArgs<ExtArgs>
    instances?: boolean | RequestInfo$instancesArgs<ExtArgs>
    _count?: boolean | RequestInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestInfo"]>

  export type RequestInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requestId?: boolean
    userId?: boolean
    templateId?: boolean
    instantName?: boolean
    requestStatus?: boolean
    requestDate?: boolean
    endDate?: boolean
    lastEditDate?: boolean
    note?: boolean
    isApprove?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | InstanceOsTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestInfo"]>

  export type RequestInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requestId?: boolean
    userId?: boolean
    templateId?: boolean
    instantName?: boolean
    requestStatus?: boolean
    requestDate?: boolean
    endDate?: boolean
    lastEditDate?: boolean
    note?: boolean
    isApprove?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | InstanceOsTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestInfo"]>

  export type RequestInfoSelectScalar = {
    requestId?: boolean
    userId?: boolean
    templateId?: boolean
    instantName?: boolean
    requestStatus?: boolean
    requestDate?: boolean
    endDate?: boolean
    lastEditDate?: boolean
    note?: boolean
    isApprove?: boolean
  }

  export type RequestInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"requestId" | "userId" | "templateId" | "instantName" | "requestStatus" | "requestDate" | "endDate" | "lastEditDate" | "note" | "isApprove", ExtArgs["result"]["requestInfo"]>
  export type RequestInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | InstanceOsTemplateDefaultArgs<ExtArgs>
    notifications?: boolean | RequestInfo$notificationsArgs<ExtArgs>
    editLogs?: boolean | RequestInfo$editLogsArgs<ExtArgs>
    instances?: boolean | RequestInfo$instancesArgs<ExtArgs>
    _count?: boolean | RequestInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RequestInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | InstanceOsTemplateDefaultArgs<ExtArgs>
  }
  export type RequestInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | InstanceOsTemplateDefaultArgs<ExtArgs>
  }

  export type $RequestInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$InstanceOsTemplatePayload<ExtArgs>
      notifications: Prisma.$NotificationInfoPayload<ExtArgs>[]
      editLogs: Prisma.$RequestEditLogPayload<ExtArgs>[]
      instances: Prisma.$InstanceInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      requestId: number
      userId: string
      templateId: number
      instantName: string
      requestStatus: string
      requestDate: Date
      endDate: Date
      lastEditDate: Date
      note: string
      isApprove: boolean
    }, ExtArgs["result"]["requestInfo"]>
    composites: {}
  }

  type RequestInfoGetPayload<S extends boolean | null | undefined | RequestInfoDefaultArgs> = $Result.GetResult<Prisma.$RequestInfoPayload, S>

  type RequestInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestInfoCountAggregateInputType | true
    }

  export interface RequestInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestInfo'], meta: { name: 'RequestInfo' } }
    /**
     * Find zero or one RequestInfo that matches the filter.
     * @param {RequestInfoFindUniqueArgs} args - Arguments to find a RequestInfo
     * @example
     * // Get one RequestInfo
     * const requestInfo = await prisma.requestInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestInfoFindUniqueArgs>(args: SelectSubset<T, RequestInfoFindUniqueArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestInfoFindUniqueOrThrowArgs} args - Arguments to find a RequestInfo
     * @example
     * // Get one RequestInfo
     * const requestInfo = await prisma.requestInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestInfoFindFirstArgs} args - Arguments to find a RequestInfo
     * @example
     * // Get one RequestInfo
     * const requestInfo = await prisma.requestInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestInfoFindFirstArgs>(args?: SelectSubset<T, RequestInfoFindFirstArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestInfoFindFirstOrThrowArgs} args - Arguments to find a RequestInfo
     * @example
     * // Get one RequestInfo
     * const requestInfo = await prisma.requestInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestInfos
     * const requestInfos = await prisma.requestInfo.findMany()
     * 
     * // Get first 10 RequestInfos
     * const requestInfos = await prisma.requestInfo.findMany({ take: 10 })
     * 
     * // Only select the `requestId`
     * const requestInfoWithRequestIdOnly = await prisma.requestInfo.findMany({ select: { requestId: true } })
     * 
     */
    findMany<T extends RequestInfoFindManyArgs>(args?: SelectSubset<T, RequestInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestInfo.
     * @param {RequestInfoCreateArgs} args - Arguments to create a RequestInfo.
     * @example
     * // Create one RequestInfo
     * const RequestInfo = await prisma.requestInfo.create({
     *   data: {
     *     // ... data to create a RequestInfo
     *   }
     * })
     * 
     */
    create<T extends RequestInfoCreateArgs>(args: SelectSubset<T, RequestInfoCreateArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestInfos.
     * @param {RequestInfoCreateManyArgs} args - Arguments to create many RequestInfos.
     * @example
     * // Create many RequestInfos
     * const requestInfo = await prisma.requestInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestInfoCreateManyArgs>(args?: SelectSubset<T, RequestInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestInfos and returns the data saved in the database.
     * @param {RequestInfoCreateManyAndReturnArgs} args - Arguments to create many RequestInfos.
     * @example
     * // Create many RequestInfos
     * const requestInfo = await prisma.requestInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestInfos and only return the `requestId`
     * const requestInfoWithRequestIdOnly = await prisma.requestInfo.createManyAndReturn({
     *   select: { requestId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestInfo.
     * @param {RequestInfoDeleteArgs} args - Arguments to delete one RequestInfo.
     * @example
     * // Delete one RequestInfo
     * const RequestInfo = await prisma.requestInfo.delete({
     *   where: {
     *     // ... filter to delete one RequestInfo
     *   }
     * })
     * 
     */
    delete<T extends RequestInfoDeleteArgs>(args: SelectSubset<T, RequestInfoDeleteArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestInfo.
     * @param {RequestInfoUpdateArgs} args - Arguments to update one RequestInfo.
     * @example
     * // Update one RequestInfo
     * const requestInfo = await prisma.requestInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestInfoUpdateArgs>(args: SelectSubset<T, RequestInfoUpdateArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestInfos.
     * @param {RequestInfoDeleteManyArgs} args - Arguments to filter RequestInfos to delete.
     * @example
     * // Delete a few RequestInfos
     * const { count } = await prisma.requestInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestInfoDeleteManyArgs>(args?: SelectSubset<T, RequestInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestInfos
     * const requestInfo = await prisma.requestInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestInfoUpdateManyArgs>(args: SelectSubset<T, RequestInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestInfos and returns the data updated in the database.
     * @param {RequestInfoUpdateManyAndReturnArgs} args - Arguments to update many RequestInfos.
     * @example
     * // Update many RequestInfos
     * const requestInfo = await prisma.requestInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestInfos and only return the `requestId`
     * const requestInfoWithRequestIdOnly = await prisma.requestInfo.updateManyAndReturn({
     *   select: { requestId: true },
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
    updateManyAndReturn<T extends RequestInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestInfo.
     * @param {RequestInfoUpsertArgs} args - Arguments to update or create a RequestInfo.
     * @example
     * // Update or create a RequestInfo
     * const requestInfo = await prisma.requestInfo.upsert({
     *   create: {
     *     // ... data to create a RequestInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestInfo we want to update
     *   }
     * })
     */
    upsert<T extends RequestInfoUpsertArgs>(args: SelectSubset<T, RequestInfoUpsertArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestInfoCountArgs} args - Arguments to filter RequestInfos to count.
     * @example
     * // Count the number of RequestInfos
     * const count = await prisma.requestInfo.count({
     *   where: {
     *     // ... the filter for the RequestInfos we want to count
     *   }
     * })
    **/
    count<T extends RequestInfoCountArgs>(
      args?: Subset<T, RequestInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestInfoAggregateArgs>(args: Subset<T, RequestInfoAggregateArgs>): Prisma.PrismaPromise<GetRequestInfoAggregateType<T>>

    /**
     * Group by RequestInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestInfoGroupByArgs} args - Group by arguments.
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
      T extends RequestInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestInfoGroupByArgs['orderBy'] }
        : { orderBy?: RequestInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestInfo model
   */
  readonly fields: RequestInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends InstanceOsTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstanceOsTemplateDefaultArgs<ExtArgs>>): Prisma__InstanceOsTemplateClient<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifications<T extends RequestInfo$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, RequestInfo$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    editLogs<T extends RequestInfo$editLogsArgs<ExtArgs> = {}>(args?: Subset<T, RequestInfo$editLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instances<T extends RequestInfo$instancesArgs<ExtArgs> = {}>(args?: Subset<T, RequestInfo$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RequestInfo model
   */
  interface RequestInfoFieldRefs {
    readonly requestId: FieldRef<"RequestInfo", 'Int'>
    readonly userId: FieldRef<"RequestInfo", 'String'>
    readonly templateId: FieldRef<"RequestInfo", 'Int'>
    readonly instantName: FieldRef<"RequestInfo", 'String'>
    readonly requestStatus: FieldRef<"RequestInfo", 'String'>
    readonly requestDate: FieldRef<"RequestInfo", 'DateTime'>
    readonly endDate: FieldRef<"RequestInfo", 'DateTime'>
    readonly lastEditDate: FieldRef<"RequestInfo", 'DateTime'>
    readonly note: FieldRef<"RequestInfo", 'String'>
    readonly isApprove: FieldRef<"RequestInfo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RequestInfo findUnique
   */
  export type RequestInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    /**
     * Filter, which RequestInfo to fetch.
     */
    where: RequestInfoWhereUniqueInput
  }

  /**
   * RequestInfo findUniqueOrThrow
   */
  export type RequestInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    /**
     * Filter, which RequestInfo to fetch.
     */
    where: RequestInfoWhereUniqueInput
  }

  /**
   * RequestInfo findFirst
   */
  export type RequestInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    /**
     * Filter, which RequestInfo to fetch.
     */
    where?: RequestInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestInfos to fetch.
     */
    orderBy?: RequestInfoOrderByWithRelationInput | RequestInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestInfos.
     */
    cursor?: RequestInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestInfos.
     */
    distinct?: RequestInfoScalarFieldEnum | RequestInfoScalarFieldEnum[]
  }

  /**
   * RequestInfo findFirstOrThrow
   */
  export type RequestInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    /**
     * Filter, which RequestInfo to fetch.
     */
    where?: RequestInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestInfos to fetch.
     */
    orderBy?: RequestInfoOrderByWithRelationInput | RequestInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestInfos.
     */
    cursor?: RequestInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestInfos.
     */
    distinct?: RequestInfoScalarFieldEnum | RequestInfoScalarFieldEnum[]
  }

  /**
   * RequestInfo findMany
   */
  export type RequestInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    /**
     * Filter, which RequestInfos to fetch.
     */
    where?: RequestInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestInfos to fetch.
     */
    orderBy?: RequestInfoOrderByWithRelationInput | RequestInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestInfos.
     */
    cursor?: RequestInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestInfos.
     */
    skip?: number
    distinct?: RequestInfoScalarFieldEnum | RequestInfoScalarFieldEnum[]
  }

  /**
   * RequestInfo create
   */
  export type RequestInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestInfo.
     */
    data: XOR<RequestInfoCreateInput, RequestInfoUncheckedCreateInput>
  }

  /**
   * RequestInfo createMany
   */
  export type RequestInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestInfos.
     */
    data: RequestInfoCreateManyInput | RequestInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestInfo createManyAndReturn
   */
  export type RequestInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * The data used to create many RequestInfos.
     */
    data: RequestInfoCreateManyInput | RequestInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestInfo update
   */
  export type RequestInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestInfo.
     */
    data: XOR<RequestInfoUpdateInput, RequestInfoUncheckedUpdateInput>
    /**
     * Choose, which RequestInfo to update.
     */
    where: RequestInfoWhereUniqueInput
  }

  /**
   * RequestInfo updateMany
   */
  export type RequestInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestInfos.
     */
    data: XOR<RequestInfoUpdateManyMutationInput, RequestInfoUncheckedUpdateManyInput>
    /**
     * Filter which RequestInfos to update
     */
    where?: RequestInfoWhereInput
    /**
     * Limit how many RequestInfos to update.
     */
    limit?: number
  }

  /**
   * RequestInfo updateManyAndReturn
   */
  export type RequestInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * The data used to update RequestInfos.
     */
    data: XOR<RequestInfoUpdateManyMutationInput, RequestInfoUncheckedUpdateManyInput>
    /**
     * Filter which RequestInfos to update
     */
    where?: RequestInfoWhereInput
    /**
     * Limit how many RequestInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestInfo upsert
   */
  export type RequestInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestInfo to update in case it exists.
     */
    where: RequestInfoWhereUniqueInput
    /**
     * In case the RequestInfo found by the `where` argument doesn't exist, create a new RequestInfo with this data.
     */
    create: XOR<RequestInfoCreateInput, RequestInfoUncheckedCreateInput>
    /**
     * In case the RequestInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestInfoUpdateInput, RequestInfoUncheckedUpdateInput>
  }

  /**
   * RequestInfo delete
   */
  export type RequestInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    /**
     * Filter which RequestInfo to delete.
     */
    where: RequestInfoWhereUniqueInput
  }

  /**
   * RequestInfo deleteMany
   */
  export type RequestInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestInfos to delete
     */
    where?: RequestInfoWhereInput
    /**
     * Limit how many RequestInfos to delete.
     */
    limit?: number
  }

  /**
   * RequestInfo.notifications
   */
  export type RequestInfo$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    where?: NotificationInfoWhereInput
    orderBy?: NotificationInfoOrderByWithRelationInput | NotificationInfoOrderByWithRelationInput[]
    cursor?: NotificationInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationInfoScalarFieldEnum | NotificationInfoScalarFieldEnum[]
  }

  /**
   * RequestInfo.editLogs
   */
  export type RequestInfo$editLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    where?: RequestEditLogWhereInput
    orderBy?: RequestEditLogOrderByWithRelationInput | RequestEditLogOrderByWithRelationInput[]
    cursor?: RequestEditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestEditLogScalarFieldEnum | RequestEditLogScalarFieldEnum[]
  }

  /**
   * RequestInfo.instances
   */
  export type RequestInfo$instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    where?: InstanceInfoWhereInput
    orderBy?: InstanceInfoOrderByWithRelationInput | InstanceInfoOrderByWithRelationInput[]
    cursor?: InstanceInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstanceInfoScalarFieldEnum | InstanceInfoScalarFieldEnum[]
  }

  /**
   * RequestInfo without action
   */
  export type RequestInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
  }


  /**
   * Model RequestEditLog
   */

  export type AggregateRequestEditLog = {
    _count: RequestEditLogCountAggregateOutputType | null
    _avg: RequestEditLogAvgAggregateOutputType | null
    _sum: RequestEditLogSumAggregateOutputType | null
    _min: RequestEditLogMinAggregateOutputType | null
    _max: RequestEditLogMaxAggregateOutputType | null
  }

  export type RequestEditLogAvgAggregateOutputType = {
    logNo: number | null
    requestId: number | null
  }

  export type RequestEditLogSumAggregateOutputType = {
    logNo: number | null
    requestId: number | null
  }

  export type RequestEditLogMinAggregateOutputType = {
    logNo: number | null
    userId: string | null
    requestId: number | null
    timestamp: Date | null
  }

  export type RequestEditLogMaxAggregateOutputType = {
    logNo: number | null
    userId: string | null
    requestId: number | null
    timestamp: Date | null
  }

  export type RequestEditLogCountAggregateOutputType = {
    logNo: number
    userId: number
    requestId: number
    jsonData: number
    timestamp: number
    _all: number
  }


  export type RequestEditLogAvgAggregateInputType = {
    logNo?: true
    requestId?: true
  }

  export type RequestEditLogSumAggregateInputType = {
    logNo?: true
    requestId?: true
  }

  export type RequestEditLogMinAggregateInputType = {
    logNo?: true
    userId?: true
    requestId?: true
    timestamp?: true
  }

  export type RequestEditLogMaxAggregateInputType = {
    logNo?: true
    userId?: true
    requestId?: true
    timestamp?: true
  }

  export type RequestEditLogCountAggregateInputType = {
    logNo?: true
    userId?: true
    requestId?: true
    jsonData?: true
    timestamp?: true
    _all?: true
  }

  export type RequestEditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestEditLog to aggregate.
     */
    where?: RequestEditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEditLogs to fetch.
     */
    orderBy?: RequestEditLogOrderByWithRelationInput | RequestEditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestEditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestEditLogs
    **/
    _count?: true | RequestEditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestEditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestEditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestEditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestEditLogMaxAggregateInputType
  }

  export type GetRequestEditLogAggregateType<T extends RequestEditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestEditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestEditLog[P]>
      : GetScalarType<T[P], AggregateRequestEditLog[P]>
  }




  export type RequestEditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestEditLogWhereInput
    orderBy?: RequestEditLogOrderByWithAggregationInput | RequestEditLogOrderByWithAggregationInput[]
    by: RequestEditLogScalarFieldEnum[] | RequestEditLogScalarFieldEnum
    having?: RequestEditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestEditLogCountAggregateInputType | true
    _avg?: RequestEditLogAvgAggregateInputType
    _sum?: RequestEditLogSumAggregateInputType
    _min?: RequestEditLogMinAggregateInputType
    _max?: RequestEditLogMaxAggregateInputType
  }

  export type RequestEditLogGroupByOutputType = {
    logNo: number
    userId: string
    requestId: number
    jsonData: JsonValue
    timestamp: Date
    _count: RequestEditLogCountAggregateOutputType | null
    _avg: RequestEditLogAvgAggregateOutputType | null
    _sum: RequestEditLogSumAggregateOutputType | null
    _min: RequestEditLogMinAggregateOutputType | null
    _max: RequestEditLogMaxAggregateOutputType | null
  }

  type GetRequestEditLogGroupByPayload<T extends RequestEditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestEditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestEditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestEditLogGroupByOutputType[P]>
            : GetScalarType<T[P], RequestEditLogGroupByOutputType[P]>
        }
      >
    >


  export type RequestEditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logNo?: boolean
    userId?: boolean
    requestId?: boolean
    jsonData?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestEditLog"]>

  export type RequestEditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logNo?: boolean
    userId?: boolean
    requestId?: boolean
    jsonData?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestEditLog"]>

  export type RequestEditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logNo?: boolean
    userId?: boolean
    requestId?: boolean
    jsonData?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestEditLog"]>

  export type RequestEditLogSelectScalar = {
    logNo?: boolean
    userId?: boolean
    requestId?: boolean
    jsonData?: boolean
    timestamp?: boolean
  }

  export type RequestEditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"logNo" | "userId" | "requestId" | "jsonData" | "timestamp", ExtArgs["result"]["requestEditLog"]>
  export type RequestEditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }
  export type RequestEditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }
  export type RequestEditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }

  export type $RequestEditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestEditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      request: Prisma.$RequestInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      logNo: number
      userId: string
      requestId: number
      jsonData: Prisma.JsonValue
      timestamp: Date
    }, ExtArgs["result"]["requestEditLog"]>
    composites: {}
  }

  type RequestEditLogGetPayload<S extends boolean | null | undefined | RequestEditLogDefaultArgs> = $Result.GetResult<Prisma.$RequestEditLogPayload, S>

  type RequestEditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestEditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestEditLogCountAggregateInputType | true
    }

  export interface RequestEditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestEditLog'], meta: { name: 'RequestEditLog' } }
    /**
     * Find zero or one RequestEditLog that matches the filter.
     * @param {RequestEditLogFindUniqueArgs} args - Arguments to find a RequestEditLog
     * @example
     * // Get one RequestEditLog
     * const requestEditLog = await prisma.requestEditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestEditLogFindUniqueArgs>(args: SelectSubset<T, RequestEditLogFindUniqueArgs<ExtArgs>>): Prisma__RequestEditLogClient<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestEditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestEditLogFindUniqueOrThrowArgs} args - Arguments to find a RequestEditLog
     * @example
     * // Get one RequestEditLog
     * const requestEditLog = await prisma.requestEditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestEditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestEditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestEditLogClient<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestEditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEditLogFindFirstArgs} args - Arguments to find a RequestEditLog
     * @example
     * // Get one RequestEditLog
     * const requestEditLog = await prisma.requestEditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestEditLogFindFirstArgs>(args?: SelectSubset<T, RequestEditLogFindFirstArgs<ExtArgs>>): Prisma__RequestEditLogClient<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestEditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEditLogFindFirstOrThrowArgs} args - Arguments to find a RequestEditLog
     * @example
     * // Get one RequestEditLog
     * const requestEditLog = await prisma.requestEditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestEditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestEditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestEditLogClient<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestEditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestEditLogs
     * const requestEditLogs = await prisma.requestEditLog.findMany()
     * 
     * // Get first 10 RequestEditLogs
     * const requestEditLogs = await prisma.requestEditLog.findMany({ take: 10 })
     * 
     * // Only select the `logNo`
     * const requestEditLogWithLogNoOnly = await prisma.requestEditLog.findMany({ select: { logNo: true } })
     * 
     */
    findMany<T extends RequestEditLogFindManyArgs>(args?: SelectSubset<T, RequestEditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestEditLog.
     * @param {RequestEditLogCreateArgs} args - Arguments to create a RequestEditLog.
     * @example
     * // Create one RequestEditLog
     * const RequestEditLog = await prisma.requestEditLog.create({
     *   data: {
     *     // ... data to create a RequestEditLog
     *   }
     * })
     * 
     */
    create<T extends RequestEditLogCreateArgs>(args: SelectSubset<T, RequestEditLogCreateArgs<ExtArgs>>): Prisma__RequestEditLogClient<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestEditLogs.
     * @param {RequestEditLogCreateManyArgs} args - Arguments to create many RequestEditLogs.
     * @example
     * // Create many RequestEditLogs
     * const requestEditLog = await prisma.requestEditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestEditLogCreateManyArgs>(args?: SelectSubset<T, RequestEditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestEditLogs and returns the data saved in the database.
     * @param {RequestEditLogCreateManyAndReturnArgs} args - Arguments to create many RequestEditLogs.
     * @example
     * // Create many RequestEditLogs
     * const requestEditLog = await prisma.requestEditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestEditLogs and only return the `logNo`
     * const requestEditLogWithLogNoOnly = await prisma.requestEditLog.createManyAndReturn({
     *   select: { logNo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestEditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestEditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestEditLog.
     * @param {RequestEditLogDeleteArgs} args - Arguments to delete one RequestEditLog.
     * @example
     * // Delete one RequestEditLog
     * const RequestEditLog = await prisma.requestEditLog.delete({
     *   where: {
     *     // ... filter to delete one RequestEditLog
     *   }
     * })
     * 
     */
    delete<T extends RequestEditLogDeleteArgs>(args: SelectSubset<T, RequestEditLogDeleteArgs<ExtArgs>>): Prisma__RequestEditLogClient<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestEditLog.
     * @param {RequestEditLogUpdateArgs} args - Arguments to update one RequestEditLog.
     * @example
     * // Update one RequestEditLog
     * const requestEditLog = await prisma.requestEditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestEditLogUpdateArgs>(args: SelectSubset<T, RequestEditLogUpdateArgs<ExtArgs>>): Prisma__RequestEditLogClient<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestEditLogs.
     * @param {RequestEditLogDeleteManyArgs} args - Arguments to filter RequestEditLogs to delete.
     * @example
     * // Delete a few RequestEditLogs
     * const { count } = await prisma.requestEditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestEditLogDeleteManyArgs>(args?: SelectSubset<T, RequestEditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestEditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestEditLogs
     * const requestEditLog = await prisma.requestEditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestEditLogUpdateManyArgs>(args: SelectSubset<T, RequestEditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestEditLogs and returns the data updated in the database.
     * @param {RequestEditLogUpdateManyAndReturnArgs} args - Arguments to update many RequestEditLogs.
     * @example
     * // Update many RequestEditLogs
     * const requestEditLog = await prisma.requestEditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestEditLogs and only return the `logNo`
     * const requestEditLogWithLogNoOnly = await prisma.requestEditLog.updateManyAndReturn({
     *   select: { logNo: true },
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
    updateManyAndReturn<T extends RequestEditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestEditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestEditLog.
     * @param {RequestEditLogUpsertArgs} args - Arguments to update or create a RequestEditLog.
     * @example
     * // Update or create a RequestEditLog
     * const requestEditLog = await prisma.requestEditLog.upsert({
     *   create: {
     *     // ... data to create a RequestEditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestEditLog we want to update
     *   }
     * })
     */
    upsert<T extends RequestEditLogUpsertArgs>(args: SelectSubset<T, RequestEditLogUpsertArgs<ExtArgs>>): Prisma__RequestEditLogClient<$Result.GetResult<Prisma.$RequestEditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestEditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEditLogCountArgs} args - Arguments to filter RequestEditLogs to count.
     * @example
     * // Count the number of RequestEditLogs
     * const count = await prisma.requestEditLog.count({
     *   where: {
     *     // ... the filter for the RequestEditLogs we want to count
     *   }
     * })
    **/
    count<T extends RequestEditLogCountArgs>(
      args?: Subset<T, RequestEditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestEditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestEditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestEditLogAggregateArgs>(args: Subset<T, RequestEditLogAggregateArgs>): Prisma.PrismaPromise<GetRequestEditLogAggregateType<T>>

    /**
     * Group by RequestEditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEditLogGroupByArgs} args - Group by arguments.
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
      T extends RequestEditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestEditLogGroupByArgs['orderBy'] }
        : { orderBy?: RequestEditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestEditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestEditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestEditLog model
   */
  readonly fields: RequestEditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestEditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestEditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    request<T extends RequestInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestInfoDefaultArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RequestEditLog model
   */
  interface RequestEditLogFieldRefs {
    readonly logNo: FieldRef<"RequestEditLog", 'Int'>
    readonly userId: FieldRef<"RequestEditLog", 'String'>
    readonly requestId: FieldRef<"RequestEditLog", 'Int'>
    readonly jsonData: FieldRef<"RequestEditLog", 'Json'>
    readonly timestamp: FieldRef<"RequestEditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestEditLog findUnique
   */
  export type RequestEditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestEditLog to fetch.
     */
    where: RequestEditLogWhereUniqueInput
  }

  /**
   * RequestEditLog findUniqueOrThrow
   */
  export type RequestEditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestEditLog to fetch.
     */
    where: RequestEditLogWhereUniqueInput
  }

  /**
   * RequestEditLog findFirst
   */
  export type RequestEditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestEditLog to fetch.
     */
    where?: RequestEditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEditLogs to fetch.
     */
    orderBy?: RequestEditLogOrderByWithRelationInput | RequestEditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestEditLogs.
     */
    cursor?: RequestEditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestEditLogs.
     */
    distinct?: RequestEditLogScalarFieldEnum | RequestEditLogScalarFieldEnum[]
  }

  /**
   * RequestEditLog findFirstOrThrow
   */
  export type RequestEditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestEditLog to fetch.
     */
    where?: RequestEditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEditLogs to fetch.
     */
    orderBy?: RequestEditLogOrderByWithRelationInput | RequestEditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestEditLogs.
     */
    cursor?: RequestEditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestEditLogs.
     */
    distinct?: RequestEditLogScalarFieldEnum | RequestEditLogScalarFieldEnum[]
  }

  /**
   * RequestEditLog findMany
   */
  export type RequestEditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestEditLogs to fetch.
     */
    where?: RequestEditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEditLogs to fetch.
     */
    orderBy?: RequestEditLogOrderByWithRelationInput | RequestEditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestEditLogs.
     */
    cursor?: RequestEditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEditLogs.
     */
    skip?: number
    distinct?: RequestEditLogScalarFieldEnum | RequestEditLogScalarFieldEnum[]
  }

  /**
   * RequestEditLog create
   */
  export type RequestEditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestEditLog.
     */
    data: XOR<RequestEditLogCreateInput, RequestEditLogUncheckedCreateInput>
  }

  /**
   * RequestEditLog createMany
   */
  export type RequestEditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestEditLogs.
     */
    data: RequestEditLogCreateManyInput | RequestEditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestEditLog createManyAndReturn
   */
  export type RequestEditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * The data used to create many RequestEditLogs.
     */
    data: RequestEditLogCreateManyInput | RequestEditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestEditLog update
   */
  export type RequestEditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestEditLog.
     */
    data: XOR<RequestEditLogUpdateInput, RequestEditLogUncheckedUpdateInput>
    /**
     * Choose, which RequestEditLog to update.
     */
    where: RequestEditLogWhereUniqueInput
  }

  /**
   * RequestEditLog updateMany
   */
  export type RequestEditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestEditLogs.
     */
    data: XOR<RequestEditLogUpdateManyMutationInput, RequestEditLogUncheckedUpdateManyInput>
    /**
     * Filter which RequestEditLogs to update
     */
    where?: RequestEditLogWhereInput
    /**
     * Limit how many RequestEditLogs to update.
     */
    limit?: number
  }

  /**
   * RequestEditLog updateManyAndReturn
   */
  export type RequestEditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * The data used to update RequestEditLogs.
     */
    data: XOR<RequestEditLogUpdateManyMutationInput, RequestEditLogUncheckedUpdateManyInput>
    /**
     * Filter which RequestEditLogs to update
     */
    where?: RequestEditLogWhereInput
    /**
     * Limit how many RequestEditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestEditLog upsert
   */
  export type RequestEditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestEditLog to update in case it exists.
     */
    where: RequestEditLogWhereUniqueInput
    /**
     * In case the RequestEditLog found by the `where` argument doesn't exist, create a new RequestEditLog with this data.
     */
    create: XOR<RequestEditLogCreateInput, RequestEditLogUncheckedCreateInput>
    /**
     * In case the RequestEditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestEditLogUpdateInput, RequestEditLogUncheckedUpdateInput>
  }

  /**
   * RequestEditLog delete
   */
  export type RequestEditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
    /**
     * Filter which RequestEditLog to delete.
     */
    where: RequestEditLogWhereUniqueInput
  }

  /**
   * RequestEditLog deleteMany
   */
  export type RequestEditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestEditLogs to delete
     */
    where?: RequestEditLogWhereInput
    /**
     * Limit how many RequestEditLogs to delete.
     */
    limit?: number
  }

  /**
   * RequestEditLog without action
   */
  export type RequestEditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEditLog
     */
    select?: RequestEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEditLog
     */
    omit?: RequestEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEditLogInclude<ExtArgs> | null
  }


  /**
   * Model InstanceTemplate
   */

  export type AggregateInstanceTemplate = {
    _count: InstanceTemplateCountAggregateOutputType | null
    _avg: InstanceTemplateAvgAggregateOutputType | null
    _sum: InstanceTemplateSumAggregateOutputType | null
    _min: InstanceTemplateMinAggregateOutputType | null
    _max: InstanceTemplateMaxAggregateOutputType | null
  }

  export type InstanceTemplateAvgAggregateOutputType = {
    instanceId: number | null
    cpuAmount: number | null
    ramAmount: number | null
    gpuAmount: number | null
    storageAmount: number | null
  }

  export type InstanceTemplateSumAggregateOutputType = {
    instanceId: number | null
    cpuAmount: number | null
    ramAmount: number | null
    gpuAmount: number | null
    storageAmount: number | null
  }

  export type InstanceTemplateMinAggregateOutputType = {
    instanceId: number | null
    name: string | null
    cpuAmount: number | null
    ramAmount: number | null
    gpuAmount: number | null
    storageAmount: number | null
  }

  export type InstanceTemplateMaxAggregateOutputType = {
    instanceId: number | null
    name: string | null
    cpuAmount: number | null
    ramAmount: number | null
    gpuAmount: number | null
    storageAmount: number | null
  }

  export type InstanceTemplateCountAggregateOutputType = {
    instanceId: number
    name: number
    cpuAmount: number
    ramAmount: number
    gpuAmount: number
    storageAmount: number
    _all: number
  }


  export type InstanceTemplateAvgAggregateInputType = {
    instanceId?: true
    cpuAmount?: true
    ramAmount?: true
    gpuAmount?: true
    storageAmount?: true
  }

  export type InstanceTemplateSumAggregateInputType = {
    instanceId?: true
    cpuAmount?: true
    ramAmount?: true
    gpuAmount?: true
    storageAmount?: true
  }

  export type InstanceTemplateMinAggregateInputType = {
    instanceId?: true
    name?: true
    cpuAmount?: true
    ramAmount?: true
    gpuAmount?: true
    storageAmount?: true
  }

  export type InstanceTemplateMaxAggregateInputType = {
    instanceId?: true
    name?: true
    cpuAmount?: true
    ramAmount?: true
    gpuAmount?: true
    storageAmount?: true
  }

  export type InstanceTemplateCountAggregateInputType = {
    instanceId?: true
    name?: true
    cpuAmount?: true
    ramAmount?: true
    gpuAmount?: true
    storageAmount?: true
    _all?: true
  }

  export type InstanceTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstanceTemplate to aggregate.
     */
    where?: InstanceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceTemplates to fetch.
     */
    orderBy?: InstanceTemplateOrderByWithRelationInput | InstanceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstanceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstanceTemplates
    **/
    _count?: true | InstanceTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstanceTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstanceTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstanceTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstanceTemplateMaxAggregateInputType
  }

  export type GetInstanceTemplateAggregateType<T extends InstanceTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateInstanceTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstanceTemplate[P]>
      : GetScalarType<T[P], AggregateInstanceTemplate[P]>
  }




  export type InstanceTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceTemplateWhereInput
    orderBy?: InstanceTemplateOrderByWithAggregationInput | InstanceTemplateOrderByWithAggregationInput[]
    by: InstanceTemplateScalarFieldEnum[] | InstanceTemplateScalarFieldEnum
    having?: InstanceTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstanceTemplateCountAggregateInputType | true
    _avg?: InstanceTemplateAvgAggregateInputType
    _sum?: InstanceTemplateSumAggregateInputType
    _min?: InstanceTemplateMinAggregateInputType
    _max?: InstanceTemplateMaxAggregateInputType
  }

  export type InstanceTemplateGroupByOutputType = {
    instanceId: number
    name: string
    cpuAmount: number
    ramAmount: number
    gpuAmount: number
    storageAmount: number
    _count: InstanceTemplateCountAggregateOutputType | null
    _avg: InstanceTemplateAvgAggregateOutputType | null
    _sum: InstanceTemplateSumAggregateOutputType | null
    _min: InstanceTemplateMinAggregateOutputType | null
    _max: InstanceTemplateMaxAggregateOutputType | null
  }

  type GetInstanceTemplateGroupByPayload<T extends InstanceTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstanceTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstanceTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstanceTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], InstanceTemplateGroupByOutputType[P]>
        }
      >
    >


  export type InstanceTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instanceId?: boolean
    name?: boolean
    cpuAmount?: boolean
    ramAmount?: boolean
    gpuAmount?: boolean
    storageAmount?: boolean
    osTemplates?: boolean | InstanceTemplate$osTemplatesArgs<ExtArgs>
    _count?: boolean | InstanceTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instanceTemplate"]>

  export type InstanceTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instanceId?: boolean
    name?: boolean
    cpuAmount?: boolean
    ramAmount?: boolean
    gpuAmount?: boolean
    storageAmount?: boolean
  }, ExtArgs["result"]["instanceTemplate"]>

  export type InstanceTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instanceId?: boolean
    name?: boolean
    cpuAmount?: boolean
    ramAmount?: boolean
    gpuAmount?: boolean
    storageAmount?: boolean
  }, ExtArgs["result"]["instanceTemplate"]>

  export type InstanceTemplateSelectScalar = {
    instanceId?: boolean
    name?: boolean
    cpuAmount?: boolean
    ramAmount?: boolean
    gpuAmount?: boolean
    storageAmount?: boolean
  }

  export type InstanceTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"instanceId" | "name" | "cpuAmount" | "ramAmount" | "gpuAmount" | "storageAmount", ExtArgs["result"]["instanceTemplate"]>
  export type InstanceTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osTemplates?: boolean | InstanceTemplate$osTemplatesArgs<ExtArgs>
    _count?: boolean | InstanceTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstanceTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstanceTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstanceTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstanceTemplate"
    objects: {
      osTemplates: Prisma.$InstanceOsTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      instanceId: number
      name: string
      cpuAmount: number
      ramAmount: number
      gpuAmount: number
      storageAmount: number
    }, ExtArgs["result"]["instanceTemplate"]>
    composites: {}
  }

  type InstanceTemplateGetPayload<S extends boolean | null | undefined | InstanceTemplateDefaultArgs> = $Result.GetResult<Prisma.$InstanceTemplatePayload, S>

  type InstanceTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstanceTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstanceTemplateCountAggregateInputType | true
    }

  export interface InstanceTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstanceTemplate'], meta: { name: 'InstanceTemplate' } }
    /**
     * Find zero or one InstanceTemplate that matches the filter.
     * @param {InstanceTemplateFindUniqueArgs} args - Arguments to find a InstanceTemplate
     * @example
     * // Get one InstanceTemplate
     * const instanceTemplate = await prisma.instanceTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstanceTemplateFindUniqueArgs>(args: SelectSubset<T, InstanceTemplateFindUniqueArgs<ExtArgs>>): Prisma__InstanceTemplateClient<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstanceTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstanceTemplateFindUniqueOrThrowArgs} args - Arguments to find a InstanceTemplate
     * @example
     * // Get one InstanceTemplate
     * const instanceTemplate = await prisma.instanceTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstanceTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, InstanceTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstanceTemplateClient<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstanceTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceTemplateFindFirstArgs} args - Arguments to find a InstanceTemplate
     * @example
     * // Get one InstanceTemplate
     * const instanceTemplate = await prisma.instanceTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstanceTemplateFindFirstArgs>(args?: SelectSubset<T, InstanceTemplateFindFirstArgs<ExtArgs>>): Prisma__InstanceTemplateClient<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstanceTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceTemplateFindFirstOrThrowArgs} args - Arguments to find a InstanceTemplate
     * @example
     * // Get one InstanceTemplate
     * const instanceTemplate = await prisma.instanceTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstanceTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, InstanceTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstanceTemplateClient<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstanceTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstanceTemplates
     * const instanceTemplates = await prisma.instanceTemplate.findMany()
     * 
     * // Get first 10 InstanceTemplates
     * const instanceTemplates = await prisma.instanceTemplate.findMany({ take: 10 })
     * 
     * // Only select the `instanceId`
     * const instanceTemplateWithInstanceIdOnly = await prisma.instanceTemplate.findMany({ select: { instanceId: true } })
     * 
     */
    findMany<T extends InstanceTemplateFindManyArgs>(args?: SelectSubset<T, InstanceTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstanceTemplate.
     * @param {InstanceTemplateCreateArgs} args - Arguments to create a InstanceTemplate.
     * @example
     * // Create one InstanceTemplate
     * const InstanceTemplate = await prisma.instanceTemplate.create({
     *   data: {
     *     // ... data to create a InstanceTemplate
     *   }
     * })
     * 
     */
    create<T extends InstanceTemplateCreateArgs>(args: SelectSubset<T, InstanceTemplateCreateArgs<ExtArgs>>): Prisma__InstanceTemplateClient<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstanceTemplates.
     * @param {InstanceTemplateCreateManyArgs} args - Arguments to create many InstanceTemplates.
     * @example
     * // Create many InstanceTemplates
     * const instanceTemplate = await prisma.instanceTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstanceTemplateCreateManyArgs>(args?: SelectSubset<T, InstanceTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstanceTemplates and returns the data saved in the database.
     * @param {InstanceTemplateCreateManyAndReturnArgs} args - Arguments to create many InstanceTemplates.
     * @example
     * // Create many InstanceTemplates
     * const instanceTemplate = await prisma.instanceTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstanceTemplates and only return the `instanceId`
     * const instanceTemplateWithInstanceIdOnly = await prisma.instanceTemplate.createManyAndReturn({
     *   select: { instanceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstanceTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, InstanceTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstanceTemplate.
     * @param {InstanceTemplateDeleteArgs} args - Arguments to delete one InstanceTemplate.
     * @example
     * // Delete one InstanceTemplate
     * const InstanceTemplate = await prisma.instanceTemplate.delete({
     *   where: {
     *     // ... filter to delete one InstanceTemplate
     *   }
     * })
     * 
     */
    delete<T extends InstanceTemplateDeleteArgs>(args: SelectSubset<T, InstanceTemplateDeleteArgs<ExtArgs>>): Prisma__InstanceTemplateClient<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstanceTemplate.
     * @param {InstanceTemplateUpdateArgs} args - Arguments to update one InstanceTemplate.
     * @example
     * // Update one InstanceTemplate
     * const instanceTemplate = await prisma.instanceTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstanceTemplateUpdateArgs>(args: SelectSubset<T, InstanceTemplateUpdateArgs<ExtArgs>>): Prisma__InstanceTemplateClient<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstanceTemplates.
     * @param {InstanceTemplateDeleteManyArgs} args - Arguments to filter InstanceTemplates to delete.
     * @example
     * // Delete a few InstanceTemplates
     * const { count } = await prisma.instanceTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstanceTemplateDeleteManyArgs>(args?: SelectSubset<T, InstanceTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstanceTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstanceTemplates
     * const instanceTemplate = await prisma.instanceTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstanceTemplateUpdateManyArgs>(args: SelectSubset<T, InstanceTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstanceTemplates and returns the data updated in the database.
     * @param {InstanceTemplateUpdateManyAndReturnArgs} args - Arguments to update many InstanceTemplates.
     * @example
     * // Update many InstanceTemplates
     * const instanceTemplate = await prisma.instanceTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstanceTemplates and only return the `instanceId`
     * const instanceTemplateWithInstanceIdOnly = await prisma.instanceTemplate.updateManyAndReturn({
     *   select: { instanceId: true },
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
    updateManyAndReturn<T extends InstanceTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, InstanceTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstanceTemplate.
     * @param {InstanceTemplateUpsertArgs} args - Arguments to update or create a InstanceTemplate.
     * @example
     * // Update or create a InstanceTemplate
     * const instanceTemplate = await prisma.instanceTemplate.upsert({
     *   create: {
     *     // ... data to create a InstanceTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstanceTemplate we want to update
     *   }
     * })
     */
    upsert<T extends InstanceTemplateUpsertArgs>(args: SelectSubset<T, InstanceTemplateUpsertArgs<ExtArgs>>): Prisma__InstanceTemplateClient<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstanceTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceTemplateCountArgs} args - Arguments to filter InstanceTemplates to count.
     * @example
     * // Count the number of InstanceTemplates
     * const count = await prisma.instanceTemplate.count({
     *   where: {
     *     // ... the filter for the InstanceTemplates we want to count
     *   }
     * })
    **/
    count<T extends InstanceTemplateCountArgs>(
      args?: Subset<T, InstanceTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstanceTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstanceTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstanceTemplateAggregateArgs>(args: Subset<T, InstanceTemplateAggregateArgs>): Prisma.PrismaPromise<GetInstanceTemplateAggregateType<T>>

    /**
     * Group by InstanceTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceTemplateGroupByArgs} args - Group by arguments.
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
      T extends InstanceTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstanceTemplateGroupByArgs['orderBy'] }
        : { orderBy?: InstanceTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstanceTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstanceTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstanceTemplate model
   */
  readonly fields: InstanceTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstanceTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstanceTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    osTemplates<T extends InstanceTemplate$osTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, InstanceTemplate$osTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InstanceTemplate model
   */
  interface InstanceTemplateFieldRefs {
    readonly instanceId: FieldRef<"InstanceTemplate", 'Int'>
    readonly name: FieldRef<"InstanceTemplate", 'String'>
    readonly cpuAmount: FieldRef<"InstanceTemplate", 'Int'>
    readonly ramAmount: FieldRef<"InstanceTemplate", 'Int'>
    readonly gpuAmount: FieldRef<"InstanceTemplate", 'Int'>
    readonly storageAmount: FieldRef<"InstanceTemplate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InstanceTemplate findUnique
   */
  export type InstanceTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceTemplate to fetch.
     */
    where: InstanceTemplateWhereUniqueInput
  }

  /**
   * InstanceTemplate findUniqueOrThrow
   */
  export type InstanceTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceTemplate to fetch.
     */
    where: InstanceTemplateWhereUniqueInput
  }

  /**
   * InstanceTemplate findFirst
   */
  export type InstanceTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceTemplate to fetch.
     */
    where?: InstanceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceTemplates to fetch.
     */
    orderBy?: InstanceTemplateOrderByWithRelationInput | InstanceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstanceTemplates.
     */
    cursor?: InstanceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstanceTemplates.
     */
    distinct?: InstanceTemplateScalarFieldEnum | InstanceTemplateScalarFieldEnum[]
  }

  /**
   * InstanceTemplate findFirstOrThrow
   */
  export type InstanceTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceTemplate to fetch.
     */
    where?: InstanceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceTemplates to fetch.
     */
    orderBy?: InstanceTemplateOrderByWithRelationInput | InstanceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstanceTemplates.
     */
    cursor?: InstanceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstanceTemplates.
     */
    distinct?: InstanceTemplateScalarFieldEnum | InstanceTemplateScalarFieldEnum[]
  }

  /**
   * InstanceTemplate findMany
   */
  export type InstanceTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceTemplates to fetch.
     */
    where?: InstanceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceTemplates to fetch.
     */
    orderBy?: InstanceTemplateOrderByWithRelationInput | InstanceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstanceTemplates.
     */
    cursor?: InstanceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceTemplates.
     */
    skip?: number
    distinct?: InstanceTemplateScalarFieldEnum | InstanceTemplateScalarFieldEnum[]
  }

  /**
   * InstanceTemplate create
   */
  export type InstanceTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a InstanceTemplate.
     */
    data: XOR<InstanceTemplateCreateInput, InstanceTemplateUncheckedCreateInput>
  }

  /**
   * InstanceTemplate createMany
   */
  export type InstanceTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstanceTemplates.
     */
    data: InstanceTemplateCreateManyInput | InstanceTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstanceTemplate createManyAndReturn
   */
  export type InstanceTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many InstanceTemplates.
     */
    data: InstanceTemplateCreateManyInput | InstanceTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstanceTemplate update
   */
  export type InstanceTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a InstanceTemplate.
     */
    data: XOR<InstanceTemplateUpdateInput, InstanceTemplateUncheckedUpdateInput>
    /**
     * Choose, which InstanceTemplate to update.
     */
    where: InstanceTemplateWhereUniqueInput
  }

  /**
   * InstanceTemplate updateMany
   */
  export type InstanceTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstanceTemplates.
     */
    data: XOR<InstanceTemplateUpdateManyMutationInput, InstanceTemplateUncheckedUpdateManyInput>
    /**
     * Filter which InstanceTemplates to update
     */
    where?: InstanceTemplateWhereInput
    /**
     * Limit how many InstanceTemplates to update.
     */
    limit?: number
  }

  /**
   * InstanceTemplate updateManyAndReturn
   */
  export type InstanceTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * The data used to update InstanceTemplates.
     */
    data: XOR<InstanceTemplateUpdateManyMutationInput, InstanceTemplateUncheckedUpdateManyInput>
    /**
     * Filter which InstanceTemplates to update
     */
    where?: InstanceTemplateWhereInput
    /**
     * Limit how many InstanceTemplates to update.
     */
    limit?: number
  }

  /**
   * InstanceTemplate upsert
   */
  export type InstanceTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the InstanceTemplate to update in case it exists.
     */
    where: InstanceTemplateWhereUniqueInput
    /**
     * In case the InstanceTemplate found by the `where` argument doesn't exist, create a new InstanceTemplate with this data.
     */
    create: XOR<InstanceTemplateCreateInput, InstanceTemplateUncheckedCreateInput>
    /**
     * In case the InstanceTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstanceTemplateUpdateInput, InstanceTemplateUncheckedUpdateInput>
  }

  /**
   * InstanceTemplate delete
   */
  export type InstanceTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
    /**
     * Filter which InstanceTemplate to delete.
     */
    where: InstanceTemplateWhereUniqueInput
  }

  /**
   * InstanceTemplate deleteMany
   */
  export type InstanceTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstanceTemplates to delete
     */
    where?: InstanceTemplateWhereInput
    /**
     * Limit how many InstanceTemplates to delete.
     */
    limit?: number
  }

  /**
   * InstanceTemplate.osTemplates
   */
  export type InstanceTemplate$osTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    where?: InstanceOsTemplateWhereInput
    orderBy?: InstanceOsTemplateOrderByWithRelationInput | InstanceOsTemplateOrderByWithRelationInput[]
    cursor?: InstanceOsTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstanceOsTemplateScalarFieldEnum | InstanceOsTemplateScalarFieldEnum[]
  }

  /**
   * InstanceTemplate without action
   */
  export type InstanceTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceTemplate
     */
    select?: InstanceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceTemplate
     */
    omit?: InstanceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceTemplateInclude<ExtArgs> | null
  }


  /**
   * Model OsTemplate
   */

  export type AggregateOsTemplate = {
    _count: OsTemplateCountAggregateOutputType | null
    _avg: OsTemplateAvgAggregateOutputType | null
    _sum: OsTemplateSumAggregateOutputType | null
    _min: OsTemplateMinAggregateOutputType | null
    _max: OsTemplateMaxAggregateOutputType | null
  }

  export type OsTemplateAvgAggregateOutputType = {
    osId: number | null
  }

  export type OsTemplateSumAggregateOutputType = {
    osId: number | null
  }

  export type OsTemplateMinAggregateOutputType = {
    osId: number | null
    osName: string | null
    imageLocation: string | null
    supportedPlatform: string | null
  }

  export type OsTemplateMaxAggregateOutputType = {
    osId: number | null
    osName: string | null
    imageLocation: string | null
    supportedPlatform: string | null
  }

  export type OsTemplateCountAggregateOutputType = {
    osId: number
    osName: number
    imageLocation: number
    supportedPlatform: number
    _all: number
  }


  export type OsTemplateAvgAggregateInputType = {
    osId?: true
  }

  export type OsTemplateSumAggregateInputType = {
    osId?: true
  }

  export type OsTemplateMinAggregateInputType = {
    osId?: true
    osName?: true
    imageLocation?: true
    supportedPlatform?: true
  }

  export type OsTemplateMaxAggregateInputType = {
    osId?: true
    osName?: true
    imageLocation?: true
    supportedPlatform?: true
  }

  export type OsTemplateCountAggregateInputType = {
    osId?: true
    osName?: true
    imageLocation?: true
    supportedPlatform?: true
    _all?: true
  }

  export type OsTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OsTemplate to aggregate.
     */
    where?: OsTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OsTemplates to fetch.
     */
    orderBy?: OsTemplateOrderByWithRelationInput | OsTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OsTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OsTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OsTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OsTemplates
    **/
    _count?: true | OsTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OsTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OsTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OsTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OsTemplateMaxAggregateInputType
  }

  export type GetOsTemplateAggregateType<T extends OsTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateOsTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOsTemplate[P]>
      : GetScalarType<T[P], AggregateOsTemplate[P]>
  }




  export type OsTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OsTemplateWhereInput
    orderBy?: OsTemplateOrderByWithAggregationInput | OsTemplateOrderByWithAggregationInput[]
    by: OsTemplateScalarFieldEnum[] | OsTemplateScalarFieldEnum
    having?: OsTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OsTemplateCountAggregateInputType | true
    _avg?: OsTemplateAvgAggregateInputType
    _sum?: OsTemplateSumAggregateInputType
    _min?: OsTemplateMinAggregateInputType
    _max?: OsTemplateMaxAggregateInputType
  }

  export type OsTemplateGroupByOutputType = {
    osId: number
    osName: string
    imageLocation: string
    supportedPlatform: string
    _count: OsTemplateCountAggregateOutputType | null
    _avg: OsTemplateAvgAggregateOutputType | null
    _sum: OsTemplateSumAggregateOutputType | null
    _min: OsTemplateMinAggregateOutputType | null
    _max: OsTemplateMaxAggregateOutputType | null
  }

  type GetOsTemplateGroupByPayload<T extends OsTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OsTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OsTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OsTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], OsTemplateGroupByOutputType[P]>
        }
      >
    >


  export type OsTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    osId?: boolean
    osName?: boolean
    imageLocation?: boolean
    supportedPlatform?: boolean
    instancesOs?: boolean | OsTemplate$instancesOsArgs<ExtArgs>
    _count?: boolean | OsTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["osTemplate"]>

  export type OsTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    osId?: boolean
    osName?: boolean
    imageLocation?: boolean
    supportedPlatform?: boolean
  }, ExtArgs["result"]["osTemplate"]>

  export type OsTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    osId?: boolean
    osName?: boolean
    imageLocation?: boolean
    supportedPlatform?: boolean
  }, ExtArgs["result"]["osTemplate"]>

  export type OsTemplateSelectScalar = {
    osId?: boolean
    osName?: boolean
    imageLocation?: boolean
    supportedPlatform?: boolean
  }

  export type OsTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"osId" | "osName" | "imageLocation" | "supportedPlatform", ExtArgs["result"]["osTemplate"]>
  export type OsTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instancesOs?: boolean | OsTemplate$instancesOsArgs<ExtArgs>
    _count?: boolean | OsTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OsTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OsTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OsTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OsTemplate"
    objects: {
      instancesOs: Prisma.$InstanceOsTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      osId: number
      osName: string
      imageLocation: string
      supportedPlatform: string
    }, ExtArgs["result"]["osTemplate"]>
    composites: {}
  }

  type OsTemplateGetPayload<S extends boolean | null | undefined | OsTemplateDefaultArgs> = $Result.GetResult<Prisma.$OsTemplatePayload, S>

  type OsTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OsTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OsTemplateCountAggregateInputType | true
    }

  export interface OsTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OsTemplate'], meta: { name: 'OsTemplate' } }
    /**
     * Find zero or one OsTemplate that matches the filter.
     * @param {OsTemplateFindUniqueArgs} args - Arguments to find a OsTemplate
     * @example
     * // Get one OsTemplate
     * const osTemplate = await prisma.osTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OsTemplateFindUniqueArgs>(args: SelectSubset<T, OsTemplateFindUniqueArgs<ExtArgs>>): Prisma__OsTemplateClient<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OsTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OsTemplateFindUniqueOrThrowArgs} args - Arguments to find a OsTemplate
     * @example
     * // Get one OsTemplate
     * const osTemplate = await prisma.osTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OsTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, OsTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OsTemplateClient<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OsTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OsTemplateFindFirstArgs} args - Arguments to find a OsTemplate
     * @example
     * // Get one OsTemplate
     * const osTemplate = await prisma.osTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OsTemplateFindFirstArgs>(args?: SelectSubset<T, OsTemplateFindFirstArgs<ExtArgs>>): Prisma__OsTemplateClient<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OsTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OsTemplateFindFirstOrThrowArgs} args - Arguments to find a OsTemplate
     * @example
     * // Get one OsTemplate
     * const osTemplate = await prisma.osTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OsTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, OsTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__OsTemplateClient<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OsTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OsTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OsTemplates
     * const osTemplates = await prisma.osTemplate.findMany()
     * 
     * // Get first 10 OsTemplates
     * const osTemplates = await prisma.osTemplate.findMany({ take: 10 })
     * 
     * // Only select the `osId`
     * const osTemplateWithOsIdOnly = await prisma.osTemplate.findMany({ select: { osId: true } })
     * 
     */
    findMany<T extends OsTemplateFindManyArgs>(args?: SelectSubset<T, OsTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OsTemplate.
     * @param {OsTemplateCreateArgs} args - Arguments to create a OsTemplate.
     * @example
     * // Create one OsTemplate
     * const OsTemplate = await prisma.osTemplate.create({
     *   data: {
     *     // ... data to create a OsTemplate
     *   }
     * })
     * 
     */
    create<T extends OsTemplateCreateArgs>(args: SelectSubset<T, OsTemplateCreateArgs<ExtArgs>>): Prisma__OsTemplateClient<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OsTemplates.
     * @param {OsTemplateCreateManyArgs} args - Arguments to create many OsTemplates.
     * @example
     * // Create many OsTemplates
     * const osTemplate = await prisma.osTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OsTemplateCreateManyArgs>(args?: SelectSubset<T, OsTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OsTemplates and returns the data saved in the database.
     * @param {OsTemplateCreateManyAndReturnArgs} args - Arguments to create many OsTemplates.
     * @example
     * // Create many OsTemplates
     * const osTemplate = await prisma.osTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OsTemplates and only return the `osId`
     * const osTemplateWithOsIdOnly = await prisma.osTemplate.createManyAndReturn({
     *   select: { osId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OsTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, OsTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OsTemplate.
     * @param {OsTemplateDeleteArgs} args - Arguments to delete one OsTemplate.
     * @example
     * // Delete one OsTemplate
     * const OsTemplate = await prisma.osTemplate.delete({
     *   where: {
     *     // ... filter to delete one OsTemplate
     *   }
     * })
     * 
     */
    delete<T extends OsTemplateDeleteArgs>(args: SelectSubset<T, OsTemplateDeleteArgs<ExtArgs>>): Prisma__OsTemplateClient<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OsTemplate.
     * @param {OsTemplateUpdateArgs} args - Arguments to update one OsTemplate.
     * @example
     * // Update one OsTemplate
     * const osTemplate = await prisma.osTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OsTemplateUpdateArgs>(args: SelectSubset<T, OsTemplateUpdateArgs<ExtArgs>>): Prisma__OsTemplateClient<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OsTemplates.
     * @param {OsTemplateDeleteManyArgs} args - Arguments to filter OsTemplates to delete.
     * @example
     * // Delete a few OsTemplates
     * const { count } = await prisma.osTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OsTemplateDeleteManyArgs>(args?: SelectSubset<T, OsTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OsTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OsTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OsTemplates
     * const osTemplate = await prisma.osTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OsTemplateUpdateManyArgs>(args: SelectSubset<T, OsTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OsTemplates and returns the data updated in the database.
     * @param {OsTemplateUpdateManyAndReturnArgs} args - Arguments to update many OsTemplates.
     * @example
     * // Update many OsTemplates
     * const osTemplate = await prisma.osTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OsTemplates and only return the `osId`
     * const osTemplateWithOsIdOnly = await prisma.osTemplate.updateManyAndReturn({
     *   select: { osId: true },
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
    updateManyAndReturn<T extends OsTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, OsTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OsTemplate.
     * @param {OsTemplateUpsertArgs} args - Arguments to update or create a OsTemplate.
     * @example
     * // Update or create a OsTemplate
     * const osTemplate = await prisma.osTemplate.upsert({
     *   create: {
     *     // ... data to create a OsTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OsTemplate we want to update
     *   }
     * })
     */
    upsert<T extends OsTemplateUpsertArgs>(args: SelectSubset<T, OsTemplateUpsertArgs<ExtArgs>>): Prisma__OsTemplateClient<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OsTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OsTemplateCountArgs} args - Arguments to filter OsTemplates to count.
     * @example
     * // Count the number of OsTemplates
     * const count = await prisma.osTemplate.count({
     *   where: {
     *     // ... the filter for the OsTemplates we want to count
     *   }
     * })
    **/
    count<T extends OsTemplateCountArgs>(
      args?: Subset<T, OsTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OsTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OsTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OsTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OsTemplateAggregateArgs>(args: Subset<T, OsTemplateAggregateArgs>): Prisma.PrismaPromise<GetOsTemplateAggregateType<T>>

    /**
     * Group by OsTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OsTemplateGroupByArgs} args - Group by arguments.
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
      T extends OsTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OsTemplateGroupByArgs['orderBy'] }
        : { orderBy?: OsTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OsTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOsTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OsTemplate model
   */
  readonly fields: OsTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OsTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OsTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instancesOs<T extends OsTemplate$instancesOsArgs<ExtArgs> = {}>(args?: Subset<T, OsTemplate$instancesOsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OsTemplate model
   */
  interface OsTemplateFieldRefs {
    readonly osId: FieldRef<"OsTemplate", 'Int'>
    readonly osName: FieldRef<"OsTemplate", 'String'>
    readonly imageLocation: FieldRef<"OsTemplate", 'String'>
    readonly supportedPlatform: FieldRef<"OsTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OsTemplate findUnique
   */
  export type OsTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which OsTemplate to fetch.
     */
    where: OsTemplateWhereUniqueInput
  }

  /**
   * OsTemplate findUniqueOrThrow
   */
  export type OsTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which OsTemplate to fetch.
     */
    where: OsTemplateWhereUniqueInput
  }

  /**
   * OsTemplate findFirst
   */
  export type OsTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which OsTemplate to fetch.
     */
    where?: OsTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OsTemplates to fetch.
     */
    orderBy?: OsTemplateOrderByWithRelationInput | OsTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OsTemplates.
     */
    cursor?: OsTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OsTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OsTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OsTemplates.
     */
    distinct?: OsTemplateScalarFieldEnum | OsTemplateScalarFieldEnum[]
  }

  /**
   * OsTemplate findFirstOrThrow
   */
  export type OsTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which OsTemplate to fetch.
     */
    where?: OsTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OsTemplates to fetch.
     */
    orderBy?: OsTemplateOrderByWithRelationInput | OsTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OsTemplates.
     */
    cursor?: OsTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OsTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OsTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OsTemplates.
     */
    distinct?: OsTemplateScalarFieldEnum | OsTemplateScalarFieldEnum[]
  }

  /**
   * OsTemplate findMany
   */
  export type OsTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which OsTemplates to fetch.
     */
    where?: OsTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OsTemplates to fetch.
     */
    orderBy?: OsTemplateOrderByWithRelationInput | OsTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OsTemplates.
     */
    cursor?: OsTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OsTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OsTemplates.
     */
    skip?: number
    distinct?: OsTemplateScalarFieldEnum | OsTemplateScalarFieldEnum[]
  }

  /**
   * OsTemplate create
   */
  export type OsTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a OsTemplate.
     */
    data: XOR<OsTemplateCreateInput, OsTemplateUncheckedCreateInput>
  }

  /**
   * OsTemplate createMany
   */
  export type OsTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OsTemplates.
     */
    data: OsTemplateCreateManyInput | OsTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OsTemplate createManyAndReturn
   */
  export type OsTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many OsTemplates.
     */
    data: OsTemplateCreateManyInput | OsTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OsTemplate update
   */
  export type OsTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a OsTemplate.
     */
    data: XOR<OsTemplateUpdateInput, OsTemplateUncheckedUpdateInput>
    /**
     * Choose, which OsTemplate to update.
     */
    where: OsTemplateWhereUniqueInput
  }

  /**
   * OsTemplate updateMany
   */
  export type OsTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OsTemplates.
     */
    data: XOR<OsTemplateUpdateManyMutationInput, OsTemplateUncheckedUpdateManyInput>
    /**
     * Filter which OsTemplates to update
     */
    where?: OsTemplateWhereInput
    /**
     * Limit how many OsTemplates to update.
     */
    limit?: number
  }

  /**
   * OsTemplate updateManyAndReturn
   */
  export type OsTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * The data used to update OsTemplates.
     */
    data: XOR<OsTemplateUpdateManyMutationInput, OsTemplateUncheckedUpdateManyInput>
    /**
     * Filter which OsTemplates to update
     */
    where?: OsTemplateWhereInput
    /**
     * Limit how many OsTemplates to update.
     */
    limit?: number
  }

  /**
   * OsTemplate upsert
   */
  export type OsTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the OsTemplate to update in case it exists.
     */
    where: OsTemplateWhereUniqueInput
    /**
     * In case the OsTemplate found by the `where` argument doesn't exist, create a new OsTemplate with this data.
     */
    create: XOR<OsTemplateCreateInput, OsTemplateUncheckedCreateInput>
    /**
     * In case the OsTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OsTemplateUpdateInput, OsTemplateUncheckedUpdateInput>
  }

  /**
   * OsTemplate delete
   */
  export type OsTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
    /**
     * Filter which OsTemplate to delete.
     */
    where: OsTemplateWhereUniqueInput
  }

  /**
   * OsTemplate deleteMany
   */
  export type OsTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OsTemplates to delete
     */
    where?: OsTemplateWhereInput
    /**
     * Limit how many OsTemplates to delete.
     */
    limit?: number
  }

  /**
   * OsTemplate.instancesOs
   */
  export type OsTemplate$instancesOsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    where?: InstanceOsTemplateWhereInput
    orderBy?: InstanceOsTemplateOrderByWithRelationInput | InstanceOsTemplateOrderByWithRelationInput[]
    cursor?: InstanceOsTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstanceOsTemplateScalarFieldEnum | InstanceOsTemplateScalarFieldEnum[]
  }

  /**
   * OsTemplate without action
   */
  export type OsTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OsTemplate
     */
    select?: OsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OsTemplate
     */
    omit?: OsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OsTemplateInclude<ExtArgs> | null
  }


  /**
   * Model InstanceOsTemplate
   */

  export type AggregateInstanceOsTemplate = {
    _count: InstanceOsTemplateCountAggregateOutputType | null
    _avg: InstanceOsTemplateAvgAggregateOutputType | null
    _sum: InstanceOsTemplateSumAggregateOutputType | null
    _min: InstanceOsTemplateMinAggregateOutputType | null
    _max: InstanceOsTemplateMaxAggregateOutputType | null
  }

  export type InstanceOsTemplateAvgAggregateOutputType = {
    templateId: number | null
    osId: number | null
    instanceId: number | null
  }

  export type InstanceOsTemplateSumAggregateOutputType = {
    templateId: number | null
    osId: number | null
    instanceId: number | null
  }

  export type InstanceOsTemplateMinAggregateOutputType = {
    templateId: number | null
    osId: number | null
    instanceId: number | null
  }

  export type InstanceOsTemplateMaxAggregateOutputType = {
    templateId: number | null
    osId: number | null
    instanceId: number | null
  }

  export type InstanceOsTemplateCountAggregateOutputType = {
    templateId: number
    osId: number
    instanceId: number
    _all: number
  }


  export type InstanceOsTemplateAvgAggregateInputType = {
    templateId?: true
    osId?: true
    instanceId?: true
  }

  export type InstanceOsTemplateSumAggregateInputType = {
    templateId?: true
    osId?: true
    instanceId?: true
  }

  export type InstanceOsTemplateMinAggregateInputType = {
    templateId?: true
    osId?: true
    instanceId?: true
  }

  export type InstanceOsTemplateMaxAggregateInputType = {
    templateId?: true
    osId?: true
    instanceId?: true
  }

  export type InstanceOsTemplateCountAggregateInputType = {
    templateId?: true
    osId?: true
    instanceId?: true
    _all?: true
  }

  export type InstanceOsTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstanceOsTemplate to aggregate.
     */
    where?: InstanceOsTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceOsTemplates to fetch.
     */
    orderBy?: InstanceOsTemplateOrderByWithRelationInput | InstanceOsTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstanceOsTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceOsTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceOsTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstanceOsTemplates
    **/
    _count?: true | InstanceOsTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstanceOsTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstanceOsTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstanceOsTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstanceOsTemplateMaxAggregateInputType
  }

  export type GetInstanceOsTemplateAggregateType<T extends InstanceOsTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateInstanceOsTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstanceOsTemplate[P]>
      : GetScalarType<T[P], AggregateInstanceOsTemplate[P]>
  }




  export type InstanceOsTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceOsTemplateWhereInput
    orderBy?: InstanceOsTemplateOrderByWithAggregationInput | InstanceOsTemplateOrderByWithAggregationInput[]
    by: InstanceOsTemplateScalarFieldEnum[] | InstanceOsTemplateScalarFieldEnum
    having?: InstanceOsTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstanceOsTemplateCountAggregateInputType | true
    _avg?: InstanceOsTemplateAvgAggregateInputType
    _sum?: InstanceOsTemplateSumAggregateInputType
    _min?: InstanceOsTemplateMinAggregateInputType
    _max?: InstanceOsTemplateMaxAggregateInputType
  }

  export type InstanceOsTemplateGroupByOutputType = {
    templateId: number
    osId: number
    instanceId: number
    _count: InstanceOsTemplateCountAggregateOutputType | null
    _avg: InstanceOsTemplateAvgAggregateOutputType | null
    _sum: InstanceOsTemplateSumAggregateOutputType | null
    _min: InstanceOsTemplateMinAggregateOutputType | null
    _max: InstanceOsTemplateMaxAggregateOutputType | null
  }

  type GetInstanceOsTemplateGroupByPayload<T extends InstanceOsTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstanceOsTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstanceOsTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstanceOsTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], InstanceOsTemplateGroupByOutputType[P]>
        }
      >
    >


  export type InstanceOsTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    templateId?: boolean
    osId?: boolean
    instanceId?: boolean
    osTemplate?: boolean | OsTemplateDefaultArgs<ExtArgs>
    instance?: boolean | InstanceTemplateDefaultArgs<ExtArgs>
    requests?: boolean | InstanceOsTemplate$requestsArgs<ExtArgs>
    _count?: boolean | InstanceOsTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instanceOsTemplate"]>

  export type InstanceOsTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    templateId?: boolean
    osId?: boolean
    instanceId?: boolean
    osTemplate?: boolean | OsTemplateDefaultArgs<ExtArgs>
    instance?: boolean | InstanceTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instanceOsTemplate"]>

  export type InstanceOsTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    templateId?: boolean
    osId?: boolean
    instanceId?: boolean
    osTemplate?: boolean | OsTemplateDefaultArgs<ExtArgs>
    instance?: boolean | InstanceTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instanceOsTemplate"]>

  export type InstanceOsTemplateSelectScalar = {
    templateId?: boolean
    osId?: boolean
    instanceId?: boolean
  }

  export type InstanceOsTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"templateId" | "osId" | "instanceId", ExtArgs["result"]["instanceOsTemplate"]>
  export type InstanceOsTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osTemplate?: boolean | OsTemplateDefaultArgs<ExtArgs>
    instance?: boolean | InstanceTemplateDefaultArgs<ExtArgs>
    requests?: boolean | InstanceOsTemplate$requestsArgs<ExtArgs>
    _count?: boolean | InstanceOsTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstanceOsTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osTemplate?: boolean | OsTemplateDefaultArgs<ExtArgs>
    instance?: boolean | InstanceTemplateDefaultArgs<ExtArgs>
  }
  export type InstanceOsTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osTemplate?: boolean | OsTemplateDefaultArgs<ExtArgs>
    instance?: boolean | InstanceTemplateDefaultArgs<ExtArgs>
  }

  export type $InstanceOsTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstanceOsTemplate"
    objects: {
      osTemplate: Prisma.$OsTemplatePayload<ExtArgs>
      instance: Prisma.$InstanceTemplatePayload<ExtArgs>
      requests: Prisma.$RequestInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      templateId: number
      osId: number
      instanceId: number
    }, ExtArgs["result"]["instanceOsTemplate"]>
    composites: {}
  }

  type InstanceOsTemplateGetPayload<S extends boolean | null | undefined | InstanceOsTemplateDefaultArgs> = $Result.GetResult<Prisma.$InstanceOsTemplatePayload, S>

  type InstanceOsTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstanceOsTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstanceOsTemplateCountAggregateInputType | true
    }

  export interface InstanceOsTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstanceOsTemplate'], meta: { name: 'InstanceOsTemplate' } }
    /**
     * Find zero or one InstanceOsTemplate that matches the filter.
     * @param {InstanceOsTemplateFindUniqueArgs} args - Arguments to find a InstanceOsTemplate
     * @example
     * // Get one InstanceOsTemplate
     * const instanceOsTemplate = await prisma.instanceOsTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstanceOsTemplateFindUniqueArgs>(args: SelectSubset<T, InstanceOsTemplateFindUniqueArgs<ExtArgs>>): Prisma__InstanceOsTemplateClient<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstanceOsTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstanceOsTemplateFindUniqueOrThrowArgs} args - Arguments to find a InstanceOsTemplate
     * @example
     * // Get one InstanceOsTemplate
     * const instanceOsTemplate = await prisma.instanceOsTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstanceOsTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, InstanceOsTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstanceOsTemplateClient<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstanceOsTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceOsTemplateFindFirstArgs} args - Arguments to find a InstanceOsTemplate
     * @example
     * // Get one InstanceOsTemplate
     * const instanceOsTemplate = await prisma.instanceOsTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstanceOsTemplateFindFirstArgs>(args?: SelectSubset<T, InstanceOsTemplateFindFirstArgs<ExtArgs>>): Prisma__InstanceOsTemplateClient<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstanceOsTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceOsTemplateFindFirstOrThrowArgs} args - Arguments to find a InstanceOsTemplate
     * @example
     * // Get one InstanceOsTemplate
     * const instanceOsTemplate = await prisma.instanceOsTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstanceOsTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, InstanceOsTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstanceOsTemplateClient<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstanceOsTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceOsTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstanceOsTemplates
     * const instanceOsTemplates = await prisma.instanceOsTemplate.findMany()
     * 
     * // Get first 10 InstanceOsTemplates
     * const instanceOsTemplates = await prisma.instanceOsTemplate.findMany({ take: 10 })
     * 
     * // Only select the `templateId`
     * const instanceOsTemplateWithTemplateIdOnly = await prisma.instanceOsTemplate.findMany({ select: { templateId: true } })
     * 
     */
    findMany<T extends InstanceOsTemplateFindManyArgs>(args?: SelectSubset<T, InstanceOsTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstanceOsTemplate.
     * @param {InstanceOsTemplateCreateArgs} args - Arguments to create a InstanceOsTemplate.
     * @example
     * // Create one InstanceOsTemplate
     * const InstanceOsTemplate = await prisma.instanceOsTemplate.create({
     *   data: {
     *     // ... data to create a InstanceOsTemplate
     *   }
     * })
     * 
     */
    create<T extends InstanceOsTemplateCreateArgs>(args: SelectSubset<T, InstanceOsTemplateCreateArgs<ExtArgs>>): Prisma__InstanceOsTemplateClient<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstanceOsTemplates.
     * @param {InstanceOsTemplateCreateManyArgs} args - Arguments to create many InstanceOsTemplates.
     * @example
     * // Create many InstanceOsTemplates
     * const instanceOsTemplate = await prisma.instanceOsTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstanceOsTemplateCreateManyArgs>(args?: SelectSubset<T, InstanceOsTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstanceOsTemplates and returns the data saved in the database.
     * @param {InstanceOsTemplateCreateManyAndReturnArgs} args - Arguments to create many InstanceOsTemplates.
     * @example
     * // Create many InstanceOsTemplates
     * const instanceOsTemplate = await prisma.instanceOsTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstanceOsTemplates and only return the `templateId`
     * const instanceOsTemplateWithTemplateIdOnly = await prisma.instanceOsTemplate.createManyAndReturn({
     *   select: { templateId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstanceOsTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, InstanceOsTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstanceOsTemplate.
     * @param {InstanceOsTemplateDeleteArgs} args - Arguments to delete one InstanceOsTemplate.
     * @example
     * // Delete one InstanceOsTemplate
     * const InstanceOsTemplate = await prisma.instanceOsTemplate.delete({
     *   where: {
     *     // ... filter to delete one InstanceOsTemplate
     *   }
     * })
     * 
     */
    delete<T extends InstanceOsTemplateDeleteArgs>(args: SelectSubset<T, InstanceOsTemplateDeleteArgs<ExtArgs>>): Prisma__InstanceOsTemplateClient<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstanceOsTemplate.
     * @param {InstanceOsTemplateUpdateArgs} args - Arguments to update one InstanceOsTemplate.
     * @example
     * // Update one InstanceOsTemplate
     * const instanceOsTemplate = await prisma.instanceOsTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstanceOsTemplateUpdateArgs>(args: SelectSubset<T, InstanceOsTemplateUpdateArgs<ExtArgs>>): Prisma__InstanceOsTemplateClient<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstanceOsTemplates.
     * @param {InstanceOsTemplateDeleteManyArgs} args - Arguments to filter InstanceOsTemplates to delete.
     * @example
     * // Delete a few InstanceOsTemplates
     * const { count } = await prisma.instanceOsTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstanceOsTemplateDeleteManyArgs>(args?: SelectSubset<T, InstanceOsTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstanceOsTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceOsTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstanceOsTemplates
     * const instanceOsTemplate = await prisma.instanceOsTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstanceOsTemplateUpdateManyArgs>(args: SelectSubset<T, InstanceOsTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstanceOsTemplates and returns the data updated in the database.
     * @param {InstanceOsTemplateUpdateManyAndReturnArgs} args - Arguments to update many InstanceOsTemplates.
     * @example
     * // Update many InstanceOsTemplates
     * const instanceOsTemplate = await prisma.instanceOsTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstanceOsTemplates and only return the `templateId`
     * const instanceOsTemplateWithTemplateIdOnly = await prisma.instanceOsTemplate.updateManyAndReturn({
     *   select: { templateId: true },
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
    updateManyAndReturn<T extends InstanceOsTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, InstanceOsTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstanceOsTemplate.
     * @param {InstanceOsTemplateUpsertArgs} args - Arguments to update or create a InstanceOsTemplate.
     * @example
     * // Update or create a InstanceOsTemplate
     * const instanceOsTemplate = await prisma.instanceOsTemplate.upsert({
     *   create: {
     *     // ... data to create a InstanceOsTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstanceOsTemplate we want to update
     *   }
     * })
     */
    upsert<T extends InstanceOsTemplateUpsertArgs>(args: SelectSubset<T, InstanceOsTemplateUpsertArgs<ExtArgs>>): Prisma__InstanceOsTemplateClient<$Result.GetResult<Prisma.$InstanceOsTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstanceOsTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceOsTemplateCountArgs} args - Arguments to filter InstanceOsTemplates to count.
     * @example
     * // Count the number of InstanceOsTemplates
     * const count = await prisma.instanceOsTemplate.count({
     *   where: {
     *     // ... the filter for the InstanceOsTemplates we want to count
     *   }
     * })
    **/
    count<T extends InstanceOsTemplateCountArgs>(
      args?: Subset<T, InstanceOsTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstanceOsTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstanceOsTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceOsTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstanceOsTemplateAggregateArgs>(args: Subset<T, InstanceOsTemplateAggregateArgs>): Prisma.PrismaPromise<GetInstanceOsTemplateAggregateType<T>>

    /**
     * Group by InstanceOsTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceOsTemplateGroupByArgs} args - Group by arguments.
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
      T extends InstanceOsTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstanceOsTemplateGroupByArgs['orderBy'] }
        : { orderBy?: InstanceOsTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstanceOsTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstanceOsTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstanceOsTemplate model
   */
  readonly fields: InstanceOsTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstanceOsTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstanceOsTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    osTemplate<T extends OsTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OsTemplateDefaultArgs<ExtArgs>>): Prisma__OsTemplateClient<$Result.GetResult<Prisma.$OsTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instance<T extends InstanceTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstanceTemplateDefaultArgs<ExtArgs>>): Prisma__InstanceTemplateClient<$Result.GetResult<Prisma.$InstanceTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requests<T extends InstanceOsTemplate$requestsArgs<ExtArgs> = {}>(args?: Subset<T, InstanceOsTemplate$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InstanceOsTemplate model
   */
  interface InstanceOsTemplateFieldRefs {
    readonly templateId: FieldRef<"InstanceOsTemplate", 'Int'>
    readonly osId: FieldRef<"InstanceOsTemplate", 'Int'>
    readonly instanceId: FieldRef<"InstanceOsTemplate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InstanceOsTemplate findUnique
   */
  export type InstanceOsTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceOsTemplate to fetch.
     */
    where: InstanceOsTemplateWhereUniqueInput
  }

  /**
   * InstanceOsTemplate findUniqueOrThrow
   */
  export type InstanceOsTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceOsTemplate to fetch.
     */
    where: InstanceOsTemplateWhereUniqueInput
  }

  /**
   * InstanceOsTemplate findFirst
   */
  export type InstanceOsTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceOsTemplate to fetch.
     */
    where?: InstanceOsTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceOsTemplates to fetch.
     */
    orderBy?: InstanceOsTemplateOrderByWithRelationInput | InstanceOsTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstanceOsTemplates.
     */
    cursor?: InstanceOsTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceOsTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceOsTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstanceOsTemplates.
     */
    distinct?: InstanceOsTemplateScalarFieldEnum | InstanceOsTemplateScalarFieldEnum[]
  }

  /**
   * InstanceOsTemplate findFirstOrThrow
   */
  export type InstanceOsTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceOsTemplate to fetch.
     */
    where?: InstanceOsTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceOsTemplates to fetch.
     */
    orderBy?: InstanceOsTemplateOrderByWithRelationInput | InstanceOsTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstanceOsTemplates.
     */
    cursor?: InstanceOsTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceOsTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceOsTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstanceOsTemplates.
     */
    distinct?: InstanceOsTemplateScalarFieldEnum | InstanceOsTemplateScalarFieldEnum[]
  }

  /**
   * InstanceOsTemplate findMany
   */
  export type InstanceOsTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    /**
     * Filter, which InstanceOsTemplates to fetch.
     */
    where?: InstanceOsTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceOsTemplates to fetch.
     */
    orderBy?: InstanceOsTemplateOrderByWithRelationInput | InstanceOsTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstanceOsTemplates.
     */
    cursor?: InstanceOsTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceOsTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceOsTemplates.
     */
    skip?: number
    distinct?: InstanceOsTemplateScalarFieldEnum | InstanceOsTemplateScalarFieldEnum[]
  }

  /**
   * InstanceOsTemplate create
   */
  export type InstanceOsTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a InstanceOsTemplate.
     */
    data: XOR<InstanceOsTemplateCreateInput, InstanceOsTemplateUncheckedCreateInput>
  }

  /**
   * InstanceOsTemplate createMany
   */
  export type InstanceOsTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstanceOsTemplates.
     */
    data: InstanceOsTemplateCreateManyInput | InstanceOsTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstanceOsTemplate createManyAndReturn
   */
  export type InstanceOsTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many InstanceOsTemplates.
     */
    data: InstanceOsTemplateCreateManyInput | InstanceOsTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstanceOsTemplate update
   */
  export type InstanceOsTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a InstanceOsTemplate.
     */
    data: XOR<InstanceOsTemplateUpdateInput, InstanceOsTemplateUncheckedUpdateInput>
    /**
     * Choose, which InstanceOsTemplate to update.
     */
    where: InstanceOsTemplateWhereUniqueInput
  }

  /**
   * InstanceOsTemplate updateMany
   */
  export type InstanceOsTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstanceOsTemplates.
     */
    data: XOR<InstanceOsTemplateUpdateManyMutationInput, InstanceOsTemplateUncheckedUpdateManyInput>
    /**
     * Filter which InstanceOsTemplates to update
     */
    where?: InstanceOsTemplateWhereInput
    /**
     * Limit how many InstanceOsTemplates to update.
     */
    limit?: number
  }

  /**
   * InstanceOsTemplate updateManyAndReturn
   */
  export type InstanceOsTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * The data used to update InstanceOsTemplates.
     */
    data: XOR<InstanceOsTemplateUpdateManyMutationInput, InstanceOsTemplateUncheckedUpdateManyInput>
    /**
     * Filter which InstanceOsTemplates to update
     */
    where?: InstanceOsTemplateWhereInput
    /**
     * Limit how many InstanceOsTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstanceOsTemplate upsert
   */
  export type InstanceOsTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the InstanceOsTemplate to update in case it exists.
     */
    where: InstanceOsTemplateWhereUniqueInput
    /**
     * In case the InstanceOsTemplate found by the `where` argument doesn't exist, create a new InstanceOsTemplate with this data.
     */
    create: XOR<InstanceOsTemplateCreateInput, InstanceOsTemplateUncheckedCreateInput>
    /**
     * In case the InstanceOsTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstanceOsTemplateUpdateInput, InstanceOsTemplateUncheckedUpdateInput>
  }

  /**
   * InstanceOsTemplate delete
   */
  export type InstanceOsTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
    /**
     * Filter which InstanceOsTemplate to delete.
     */
    where: InstanceOsTemplateWhereUniqueInput
  }

  /**
   * InstanceOsTemplate deleteMany
   */
  export type InstanceOsTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstanceOsTemplates to delete
     */
    where?: InstanceOsTemplateWhereInput
    /**
     * Limit how many InstanceOsTemplates to delete.
     */
    limit?: number
  }

  /**
   * InstanceOsTemplate.requests
   */
  export type InstanceOsTemplate$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestInfo
     */
    select?: RequestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestInfo
     */
    omit?: RequestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInfoInclude<ExtArgs> | null
    where?: RequestInfoWhereInput
    orderBy?: RequestInfoOrderByWithRelationInput | RequestInfoOrderByWithRelationInput[]
    cursor?: RequestInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestInfoScalarFieldEnum | RequestInfoScalarFieldEnum[]
  }

  /**
   * InstanceOsTemplate without action
   */
  export type InstanceOsTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceOsTemplate
     */
    select?: InstanceOsTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceOsTemplate
     */
    omit?: InstanceOsTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceOsTemplateInclude<ExtArgs> | null
  }


  /**
   * Model InstanceInfo
   */

  export type AggregateInstanceInfo = {
    _count: InstanceInfoCountAggregateOutputType | null
    _avg: InstanceInfoAvgAggregateOutputType | null
    _sum: InstanceInfoSumAggregateOutputType | null
    _min: InstanceInfoMinAggregateOutputType | null
    _max: InstanceInfoMaxAggregateOutputType | null
  }

  export type InstanceInfoAvgAggregateOutputType = {
    instanceId: number | null
    requestId: number | null
  }

  export type InstanceInfoSumAggregateOutputType = {
    instanceId: number | null
    requestId: number | null
  }

  export type InstanceInfoMinAggregateOutputType = {
    instanceId: number | null
    userId: string | null
    requestId: number | null
    username: string | null
    password: string | null
    machineState: string | null
    ipAddr: string | null
    createDate: Date | null
    expireDate: Date | null
    updateBy: string | null
    updateDate: Date | null
  }

  export type InstanceInfoMaxAggregateOutputType = {
    instanceId: number | null
    userId: string | null
    requestId: number | null
    username: string | null
    password: string | null
    machineState: string | null
    ipAddr: string | null
    createDate: Date | null
    expireDate: Date | null
    updateBy: string | null
    updateDate: Date | null
  }

  export type InstanceInfoCountAggregateOutputType = {
    instanceId: number
    userId: number
    requestId: number
    username: number
    password: number
    machineState: number
    ipAddr: number
    createDate: number
    expireDate: number
    updateBy: number
    updateDate: number
    _all: number
  }


  export type InstanceInfoAvgAggregateInputType = {
    instanceId?: true
    requestId?: true
  }

  export type InstanceInfoSumAggregateInputType = {
    instanceId?: true
    requestId?: true
  }

  export type InstanceInfoMinAggregateInputType = {
    instanceId?: true
    userId?: true
    requestId?: true
    username?: true
    password?: true
    machineState?: true
    ipAddr?: true
    createDate?: true
    expireDate?: true
    updateBy?: true
    updateDate?: true
  }

  export type InstanceInfoMaxAggregateInputType = {
    instanceId?: true
    userId?: true
    requestId?: true
    username?: true
    password?: true
    machineState?: true
    ipAddr?: true
    createDate?: true
    expireDate?: true
    updateBy?: true
    updateDate?: true
  }

  export type InstanceInfoCountAggregateInputType = {
    instanceId?: true
    userId?: true
    requestId?: true
    username?: true
    password?: true
    machineState?: true
    ipAddr?: true
    createDate?: true
    expireDate?: true
    updateBy?: true
    updateDate?: true
    _all?: true
  }

  export type InstanceInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstanceInfo to aggregate.
     */
    where?: InstanceInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceInfos to fetch.
     */
    orderBy?: InstanceInfoOrderByWithRelationInput | InstanceInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstanceInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstanceInfos
    **/
    _count?: true | InstanceInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstanceInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstanceInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstanceInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstanceInfoMaxAggregateInputType
  }

  export type GetInstanceInfoAggregateType<T extends InstanceInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateInstanceInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstanceInfo[P]>
      : GetScalarType<T[P], AggregateInstanceInfo[P]>
  }




  export type InstanceInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceInfoWhereInput
    orderBy?: InstanceInfoOrderByWithAggregationInput | InstanceInfoOrderByWithAggregationInput[]
    by: InstanceInfoScalarFieldEnum[] | InstanceInfoScalarFieldEnum
    having?: InstanceInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstanceInfoCountAggregateInputType | true
    _avg?: InstanceInfoAvgAggregateInputType
    _sum?: InstanceInfoSumAggregateInputType
    _min?: InstanceInfoMinAggregateInputType
    _max?: InstanceInfoMaxAggregateInputType
  }

  export type InstanceInfoGroupByOutputType = {
    instanceId: number
    userId: string
    requestId: number
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date
    expireDate: Date
    updateBy: string
    updateDate: Date
    _count: InstanceInfoCountAggregateOutputType | null
    _avg: InstanceInfoAvgAggregateOutputType | null
    _sum: InstanceInfoSumAggregateOutputType | null
    _min: InstanceInfoMinAggregateOutputType | null
    _max: InstanceInfoMaxAggregateOutputType | null
  }

  type GetInstanceInfoGroupByPayload<T extends InstanceInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstanceInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstanceInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstanceInfoGroupByOutputType[P]>
            : GetScalarType<T[P], InstanceInfoGroupByOutputType[P]>
        }
      >
    >


  export type InstanceInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instanceId?: boolean
    userId?: boolean
    requestId?: boolean
    username?: boolean
    password?: boolean
    machineState?: boolean
    ipAddr?: boolean
    createDate?: boolean
    expireDate?: boolean
    updateBy?: boolean
    updateDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instanceInfo"]>

  export type InstanceInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instanceId?: boolean
    userId?: boolean
    requestId?: boolean
    username?: boolean
    password?: boolean
    machineState?: boolean
    ipAddr?: boolean
    createDate?: boolean
    expireDate?: boolean
    updateBy?: boolean
    updateDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instanceInfo"]>

  export type InstanceInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instanceId?: boolean
    userId?: boolean
    requestId?: boolean
    username?: boolean
    password?: boolean
    machineState?: boolean
    ipAddr?: boolean
    createDate?: boolean
    expireDate?: boolean
    updateBy?: boolean
    updateDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instanceInfo"]>

  export type InstanceInfoSelectScalar = {
    instanceId?: boolean
    userId?: boolean
    requestId?: boolean
    username?: boolean
    password?: boolean
    machineState?: boolean
    ipAddr?: boolean
    createDate?: boolean
    expireDate?: boolean
    updateBy?: boolean
    updateDate?: boolean
  }

  export type InstanceInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"instanceId" | "userId" | "requestId" | "username" | "password" | "machineState" | "ipAddr" | "createDate" | "expireDate" | "updateBy" | "updateDate", ExtArgs["result"]["instanceInfo"]>
  export type InstanceInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }
  export type InstanceInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }
  export type InstanceInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }

  export type $InstanceInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstanceInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      request: Prisma.$RequestInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      instanceId: number
      userId: string
      requestId: number
      username: string
      password: string
      machineState: string
      ipAddr: string
      createDate: Date
      expireDate: Date
      updateBy: string
      updateDate: Date
    }, ExtArgs["result"]["instanceInfo"]>
    composites: {}
  }

  type InstanceInfoGetPayload<S extends boolean | null | undefined | InstanceInfoDefaultArgs> = $Result.GetResult<Prisma.$InstanceInfoPayload, S>

  type InstanceInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstanceInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstanceInfoCountAggregateInputType | true
    }

  export interface InstanceInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstanceInfo'], meta: { name: 'InstanceInfo' } }
    /**
     * Find zero or one InstanceInfo that matches the filter.
     * @param {InstanceInfoFindUniqueArgs} args - Arguments to find a InstanceInfo
     * @example
     * // Get one InstanceInfo
     * const instanceInfo = await prisma.instanceInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstanceInfoFindUniqueArgs>(args: SelectSubset<T, InstanceInfoFindUniqueArgs<ExtArgs>>): Prisma__InstanceInfoClient<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstanceInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstanceInfoFindUniqueOrThrowArgs} args - Arguments to find a InstanceInfo
     * @example
     * // Get one InstanceInfo
     * const instanceInfo = await prisma.instanceInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstanceInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, InstanceInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstanceInfoClient<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstanceInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceInfoFindFirstArgs} args - Arguments to find a InstanceInfo
     * @example
     * // Get one InstanceInfo
     * const instanceInfo = await prisma.instanceInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstanceInfoFindFirstArgs>(args?: SelectSubset<T, InstanceInfoFindFirstArgs<ExtArgs>>): Prisma__InstanceInfoClient<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstanceInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceInfoFindFirstOrThrowArgs} args - Arguments to find a InstanceInfo
     * @example
     * // Get one InstanceInfo
     * const instanceInfo = await prisma.instanceInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstanceInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, InstanceInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstanceInfoClient<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstanceInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstanceInfos
     * const instanceInfos = await prisma.instanceInfo.findMany()
     * 
     * // Get first 10 InstanceInfos
     * const instanceInfos = await prisma.instanceInfo.findMany({ take: 10 })
     * 
     * // Only select the `instanceId`
     * const instanceInfoWithInstanceIdOnly = await prisma.instanceInfo.findMany({ select: { instanceId: true } })
     * 
     */
    findMany<T extends InstanceInfoFindManyArgs>(args?: SelectSubset<T, InstanceInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstanceInfo.
     * @param {InstanceInfoCreateArgs} args - Arguments to create a InstanceInfo.
     * @example
     * // Create one InstanceInfo
     * const InstanceInfo = await prisma.instanceInfo.create({
     *   data: {
     *     // ... data to create a InstanceInfo
     *   }
     * })
     * 
     */
    create<T extends InstanceInfoCreateArgs>(args: SelectSubset<T, InstanceInfoCreateArgs<ExtArgs>>): Prisma__InstanceInfoClient<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstanceInfos.
     * @param {InstanceInfoCreateManyArgs} args - Arguments to create many InstanceInfos.
     * @example
     * // Create many InstanceInfos
     * const instanceInfo = await prisma.instanceInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstanceInfoCreateManyArgs>(args?: SelectSubset<T, InstanceInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstanceInfos and returns the data saved in the database.
     * @param {InstanceInfoCreateManyAndReturnArgs} args - Arguments to create many InstanceInfos.
     * @example
     * // Create many InstanceInfos
     * const instanceInfo = await prisma.instanceInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstanceInfos and only return the `instanceId`
     * const instanceInfoWithInstanceIdOnly = await prisma.instanceInfo.createManyAndReturn({
     *   select: { instanceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstanceInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, InstanceInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstanceInfo.
     * @param {InstanceInfoDeleteArgs} args - Arguments to delete one InstanceInfo.
     * @example
     * // Delete one InstanceInfo
     * const InstanceInfo = await prisma.instanceInfo.delete({
     *   where: {
     *     // ... filter to delete one InstanceInfo
     *   }
     * })
     * 
     */
    delete<T extends InstanceInfoDeleteArgs>(args: SelectSubset<T, InstanceInfoDeleteArgs<ExtArgs>>): Prisma__InstanceInfoClient<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstanceInfo.
     * @param {InstanceInfoUpdateArgs} args - Arguments to update one InstanceInfo.
     * @example
     * // Update one InstanceInfo
     * const instanceInfo = await prisma.instanceInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstanceInfoUpdateArgs>(args: SelectSubset<T, InstanceInfoUpdateArgs<ExtArgs>>): Prisma__InstanceInfoClient<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstanceInfos.
     * @param {InstanceInfoDeleteManyArgs} args - Arguments to filter InstanceInfos to delete.
     * @example
     * // Delete a few InstanceInfos
     * const { count } = await prisma.instanceInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstanceInfoDeleteManyArgs>(args?: SelectSubset<T, InstanceInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstanceInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstanceInfos
     * const instanceInfo = await prisma.instanceInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstanceInfoUpdateManyArgs>(args: SelectSubset<T, InstanceInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstanceInfos and returns the data updated in the database.
     * @param {InstanceInfoUpdateManyAndReturnArgs} args - Arguments to update many InstanceInfos.
     * @example
     * // Update many InstanceInfos
     * const instanceInfo = await prisma.instanceInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstanceInfos and only return the `instanceId`
     * const instanceInfoWithInstanceIdOnly = await prisma.instanceInfo.updateManyAndReturn({
     *   select: { instanceId: true },
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
    updateManyAndReturn<T extends InstanceInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, InstanceInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstanceInfo.
     * @param {InstanceInfoUpsertArgs} args - Arguments to update or create a InstanceInfo.
     * @example
     * // Update or create a InstanceInfo
     * const instanceInfo = await prisma.instanceInfo.upsert({
     *   create: {
     *     // ... data to create a InstanceInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstanceInfo we want to update
     *   }
     * })
     */
    upsert<T extends InstanceInfoUpsertArgs>(args: SelectSubset<T, InstanceInfoUpsertArgs<ExtArgs>>): Prisma__InstanceInfoClient<$Result.GetResult<Prisma.$InstanceInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstanceInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceInfoCountArgs} args - Arguments to filter InstanceInfos to count.
     * @example
     * // Count the number of InstanceInfos
     * const count = await prisma.instanceInfo.count({
     *   where: {
     *     // ... the filter for the InstanceInfos we want to count
     *   }
     * })
    **/
    count<T extends InstanceInfoCountArgs>(
      args?: Subset<T, InstanceInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstanceInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstanceInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstanceInfoAggregateArgs>(args: Subset<T, InstanceInfoAggregateArgs>): Prisma.PrismaPromise<GetInstanceInfoAggregateType<T>>

    /**
     * Group by InstanceInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceInfoGroupByArgs} args - Group by arguments.
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
      T extends InstanceInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstanceInfoGroupByArgs['orderBy'] }
        : { orderBy?: InstanceInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstanceInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstanceInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstanceInfo model
   */
  readonly fields: InstanceInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstanceInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstanceInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    request<T extends RequestInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestInfoDefaultArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InstanceInfo model
   */
  interface InstanceInfoFieldRefs {
    readonly instanceId: FieldRef<"InstanceInfo", 'Int'>
    readonly userId: FieldRef<"InstanceInfo", 'String'>
    readonly requestId: FieldRef<"InstanceInfo", 'Int'>
    readonly username: FieldRef<"InstanceInfo", 'String'>
    readonly password: FieldRef<"InstanceInfo", 'String'>
    readonly machineState: FieldRef<"InstanceInfo", 'String'>
    readonly ipAddr: FieldRef<"InstanceInfo", 'String'>
    readonly createDate: FieldRef<"InstanceInfo", 'DateTime'>
    readonly expireDate: FieldRef<"InstanceInfo", 'DateTime'>
    readonly updateBy: FieldRef<"InstanceInfo", 'String'>
    readonly updateDate: FieldRef<"InstanceInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstanceInfo findUnique
   */
  export type InstanceInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    /**
     * Filter, which InstanceInfo to fetch.
     */
    where: InstanceInfoWhereUniqueInput
  }

  /**
   * InstanceInfo findUniqueOrThrow
   */
  export type InstanceInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    /**
     * Filter, which InstanceInfo to fetch.
     */
    where: InstanceInfoWhereUniqueInput
  }

  /**
   * InstanceInfo findFirst
   */
  export type InstanceInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    /**
     * Filter, which InstanceInfo to fetch.
     */
    where?: InstanceInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceInfos to fetch.
     */
    orderBy?: InstanceInfoOrderByWithRelationInput | InstanceInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstanceInfos.
     */
    cursor?: InstanceInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstanceInfos.
     */
    distinct?: InstanceInfoScalarFieldEnum | InstanceInfoScalarFieldEnum[]
  }

  /**
   * InstanceInfo findFirstOrThrow
   */
  export type InstanceInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    /**
     * Filter, which InstanceInfo to fetch.
     */
    where?: InstanceInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceInfos to fetch.
     */
    orderBy?: InstanceInfoOrderByWithRelationInput | InstanceInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstanceInfos.
     */
    cursor?: InstanceInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstanceInfos.
     */
    distinct?: InstanceInfoScalarFieldEnum | InstanceInfoScalarFieldEnum[]
  }

  /**
   * InstanceInfo findMany
   */
  export type InstanceInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    /**
     * Filter, which InstanceInfos to fetch.
     */
    where?: InstanceInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstanceInfos to fetch.
     */
    orderBy?: InstanceInfoOrderByWithRelationInput | InstanceInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstanceInfos.
     */
    cursor?: InstanceInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstanceInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstanceInfos.
     */
    skip?: number
    distinct?: InstanceInfoScalarFieldEnum | InstanceInfoScalarFieldEnum[]
  }

  /**
   * InstanceInfo create
   */
  export type InstanceInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a InstanceInfo.
     */
    data: XOR<InstanceInfoCreateInput, InstanceInfoUncheckedCreateInput>
  }

  /**
   * InstanceInfo createMany
   */
  export type InstanceInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstanceInfos.
     */
    data: InstanceInfoCreateManyInput | InstanceInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstanceInfo createManyAndReturn
   */
  export type InstanceInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * The data used to create many InstanceInfos.
     */
    data: InstanceInfoCreateManyInput | InstanceInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstanceInfo update
   */
  export type InstanceInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a InstanceInfo.
     */
    data: XOR<InstanceInfoUpdateInput, InstanceInfoUncheckedUpdateInput>
    /**
     * Choose, which InstanceInfo to update.
     */
    where: InstanceInfoWhereUniqueInput
  }

  /**
   * InstanceInfo updateMany
   */
  export type InstanceInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstanceInfos.
     */
    data: XOR<InstanceInfoUpdateManyMutationInput, InstanceInfoUncheckedUpdateManyInput>
    /**
     * Filter which InstanceInfos to update
     */
    where?: InstanceInfoWhereInput
    /**
     * Limit how many InstanceInfos to update.
     */
    limit?: number
  }

  /**
   * InstanceInfo updateManyAndReturn
   */
  export type InstanceInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * The data used to update InstanceInfos.
     */
    data: XOR<InstanceInfoUpdateManyMutationInput, InstanceInfoUncheckedUpdateManyInput>
    /**
     * Filter which InstanceInfos to update
     */
    where?: InstanceInfoWhereInput
    /**
     * Limit how many InstanceInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstanceInfo upsert
   */
  export type InstanceInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the InstanceInfo to update in case it exists.
     */
    where: InstanceInfoWhereUniqueInput
    /**
     * In case the InstanceInfo found by the `where` argument doesn't exist, create a new InstanceInfo with this data.
     */
    create: XOR<InstanceInfoCreateInput, InstanceInfoUncheckedCreateInput>
    /**
     * In case the InstanceInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstanceInfoUpdateInput, InstanceInfoUncheckedUpdateInput>
  }

  /**
   * InstanceInfo delete
   */
  export type InstanceInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
    /**
     * Filter which InstanceInfo to delete.
     */
    where: InstanceInfoWhereUniqueInput
  }

  /**
   * InstanceInfo deleteMany
   */
  export type InstanceInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstanceInfos to delete
     */
    where?: InstanceInfoWhereInput
    /**
     * Limit how many InstanceInfos to delete.
     */
    limit?: number
  }

  /**
   * InstanceInfo without action
   */
  export type InstanceInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanceInfo
     */
    select?: InstanceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstanceInfo
     */
    omit?: InstanceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInfoInclude<ExtArgs> | null
  }


  /**
   * Model NotificationInfo
   */

  export type AggregateNotificationInfo = {
    _count: NotificationInfoCountAggregateOutputType | null
    _avg: NotificationInfoAvgAggregateOutputType | null
    _sum: NotificationInfoSumAggregateOutputType | null
    _min: NotificationInfoMinAggregateOutputType | null
    _max: NotificationInfoMaxAggregateOutputType | null
  }

  export type NotificationInfoAvgAggregateOutputType = {
    notificationId: number | null
    requestId: number | null
  }

  export type NotificationInfoSumAggregateOutputType = {
    notificationId: number | null
    requestId: number | null
  }

  export type NotificationInfoMinAggregateOutputType = {
    notificationId: number | null
    requestId: number | null
    sendDate: Date | null
    isSend: boolean | null
    messageSubject: string | null
    message: string | null
  }

  export type NotificationInfoMaxAggregateOutputType = {
    notificationId: number | null
    requestId: number | null
    sendDate: Date | null
    isSend: boolean | null
    messageSubject: string | null
    message: string | null
  }

  export type NotificationInfoCountAggregateOutputType = {
    notificationId: number
    requestId: number
    sendDate: number
    isSend: number
    messageSubject: number
    message: number
    _all: number
  }


  export type NotificationInfoAvgAggregateInputType = {
    notificationId?: true
    requestId?: true
  }

  export type NotificationInfoSumAggregateInputType = {
    notificationId?: true
    requestId?: true
  }

  export type NotificationInfoMinAggregateInputType = {
    notificationId?: true
    requestId?: true
    sendDate?: true
    isSend?: true
    messageSubject?: true
    message?: true
  }

  export type NotificationInfoMaxAggregateInputType = {
    notificationId?: true
    requestId?: true
    sendDate?: true
    isSend?: true
    messageSubject?: true
    message?: true
  }

  export type NotificationInfoCountAggregateInputType = {
    notificationId?: true
    requestId?: true
    sendDate?: true
    isSend?: true
    messageSubject?: true
    message?: true
    _all?: true
  }

  export type NotificationInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationInfo to aggregate.
     */
    where?: NotificationInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationInfos to fetch.
     */
    orderBy?: NotificationInfoOrderByWithRelationInput | NotificationInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationInfos
    **/
    _count?: true | NotificationInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationInfoMaxAggregateInputType
  }

  export type GetNotificationInfoAggregateType<T extends NotificationInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationInfo[P]>
      : GetScalarType<T[P], AggregateNotificationInfo[P]>
  }




  export type NotificationInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationInfoWhereInput
    orderBy?: NotificationInfoOrderByWithAggregationInput | NotificationInfoOrderByWithAggregationInput[]
    by: NotificationInfoScalarFieldEnum[] | NotificationInfoScalarFieldEnum
    having?: NotificationInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationInfoCountAggregateInputType | true
    _avg?: NotificationInfoAvgAggregateInputType
    _sum?: NotificationInfoSumAggregateInputType
    _min?: NotificationInfoMinAggregateInputType
    _max?: NotificationInfoMaxAggregateInputType
  }

  export type NotificationInfoGroupByOutputType = {
    notificationId: number
    requestId: number
    sendDate: Date
    isSend: boolean
    messageSubject: string
    message: string
    _count: NotificationInfoCountAggregateOutputType | null
    _avg: NotificationInfoAvgAggregateOutputType | null
    _sum: NotificationInfoSumAggregateOutputType | null
    _min: NotificationInfoMinAggregateOutputType | null
    _max: NotificationInfoMaxAggregateOutputType | null
  }

  type GetNotificationInfoGroupByPayload<T extends NotificationInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationInfoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationInfoGroupByOutputType[P]>
        }
      >
    >


  export type NotificationInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    requestId?: boolean
    sendDate?: boolean
    isSend?: boolean
    messageSubject?: boolean
    message?: boolean
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationInfo"]>

  export type NotificationInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    requestId?: boolean
    sendDate?: boolean
    isSend?: boolean
    messageSubject?: boolean
    message?: boolean
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationInfo"]>

  export type NotificationInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    requestId?: boolean
    sendDate?: boolean
    isSend?: boolean
    messageSubject?: boolean
    message?: boolean
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationInfo"]>

  export type NotificationInfoSelectScalar = {
    notificationId?: boolean
    requestId?: boolean
    sendDate?: boolean
    isSend?: boolean
    messageSubject?: boolean
    message?: boolean
  }

  export type NotificationInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notificationId" | "requestId" | "sendDate" | "isSend" | "messageSubject" | "message", ExtArgs["result"]["notificationInfo"]>
  export type NotificationInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }
  export type NotificationInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }
  export type NotificationInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestInfoDefaultArgs<ExtArgs>
  }

  export type $NotificationInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationInfo"
    objects: {
      request: Prisma.$RequestInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notificationId: number
      requestId: number
      sendDate: Date
      isSend: boolean
      messageSubject: string
      message: string
    }, ExtArgs["result"]["notificationInfo"]>
    composites: {}
  }

  type NotificationInfoGetPayload<S extends boolean | null | undefined | NotificationInfoDefaultArgs> = $Result.GetResult<Prisma.$NotificationInfoPayload, S>

  type NotificationInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationInfoCountAggregateInputType | true
    }

  export interface NotificationInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationInfo'], meta: { name: 'NotificationInfo' } }
    /**
     * Find zero or one NotificationInfo that matches the filter.
     * @param {NotificationInfoFindUniqueArgs} args - Arguments to find a NotificationInfo
     * @example
     * // Get one NotificationInfo
     * const notificationInfo = await prisma.notificationInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationInfoFindUniqueArgs>(args: SelectSubset<T, NotificationInfoFindUniqueArgs<ExtArgs>>): Prisma__NotificationInfoClient<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationInfoFindUniqueOrThrowArgs} args - Arguments to find a NotificationInfo
     * @example
     * // Get one NotificationInfo
     * const notificationInfo = await prisma.notificationInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationInfoClient<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationInfoFindFirstArgs} args - Arguments to find a NotificationInfo
     * @example
     * // Get one NotificationInfo
     * const notificationInfo = await prisma.notificationInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationInfoFindFirstArgs>(args?: SelectSubset<T, NotificationInfoFindFirstArgs<ExtArgs>>): Prisma__NotificationInfoClient<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationInfoFindFirstOrThrowArgs} args - Arguments to find a NotificationInfo
     * @example
     * // Get one NotificationInfo
     * const notificationInfo = await prisma.notificationInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationInfoClient<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationInfos
     * const notificationInfos = await prisma.notificationInfo.findMany()
     * 
     * // Get first 10 NotificationInfos
     * const notificationInfos = await prisma.notificationInfo.findMany({ take: 10 })
     * 
     * // Only select the `notificationId`
     * const notificationInfoWithNotificationIdOnly = await prisma.notificationInfo.findMany({ select: { notificationId: true } })
     * 
     */
    findMany<T extends NotificationInfoFindManyArgs>(args?: SelectSubset<T, NotificationInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationInfo.
     * @param {NotificationInfoCreateArgs} args - Arguments to create a NotificationInfo.
     * @example
     * // Create one NotificationInfo
     * const NotificationInfo = await prisma.notificationInfo.create({
     *   data: {
     *     // ... data to create a NotificationInfo
     *   }
     * })
     * 
     */
    create<T extends NotificationInfoCreateArgs>(args: SelectSubset<T, NotificationInfoCreateArgs<ExtArgs>>): Prisma__NotificationInfoClient<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationInfos.
     * @param {NotificationInfoCreateManyArgs} args - Arguments to create many NotificationInfos.
     * @example
     * // Create many NotificationInfos
     * const notificationInfo = await prisma.notificationInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationInfoCreateManyArgs>(args?: SelectSubset<T, NotificationInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationInfos and returns the data saved in the database.
     * @param {NotificationInfoCreateManyAndReturnArgs} args - Arguments to create many NotificationInfos.
     * @example
     * // Create many NotificationInfos
     * const notificationInfo = await prisma.notificationInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationInfos and only return the `notificationId`
     * const notificationInfoWithNotificationIdOnly = await prisma.notificationInfo.createManyAndReturn({
     *   select: { notificationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationInfo.
     * @param {NotificationInfoDeleteArgs} args - Arguments to delete one NotificationInfo.
     * @example
     * // Delete one NotificationInfo
     * const NotificationInfo = await prisma.notificationInfo.delete({
     *   where: {
     *     // ... filter to delete one NotificationInfo
     *   }
     * })
     * 
     */
    delete<T extends NotificationInfoDeleteArgs>(args: SelectSubset<T, NotificationInfoDeleteArgs<ExtArgs>>): Prisma__NotificationInfoClient<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationInfo.
     * @param {NotificationInfoUpdateArgs} args - Arguments to update one NotificationInfo.
     * @example
     * // Update one NotificationInfo
     * const notificationInfo = await prisma.notificationInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationInfoUpdateArgs>(args: SelectSubset<T, NotificationInfoUpdateArgs<ExtArgs>>): Prisma__NotificationInfoClient<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationInfos.
     * @param {NotificationInfoDeleteManyArgs} args - Arguments to filter NotificationInfos to delete.
     * @example
     * // Delete a few NotificationInfos
     * const { count } = await prisma.notificationInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationInfoDeleteManyArgs>(args?: SelectSubset<T, NotificationInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationInfos
     * const notificationInfo = await prisma.notificationInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationInfoUpdateManyArgs>(args: SelectSubset<T, NotificationInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationInfos and returns the data updated in the database.
     * @param {NotificationInfoUpdateManyAndReturnArgs} args - Arguments to update many NotificationInfos.
     * @example
     * // Update many NotificationInfos
     * const notificationInfo = await prisma.notificationInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationInfos and only return the `notificationId`
     * const notificationInfoWithNotificationIdOnly = await prisma.notificationInfo.updateManyAndReturn({
     *   select: { notificationId: true },
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
    updateManyAndReturn<T extends NotificationInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationInfo.
     * @param {NotificationInfoUpsertArgs} args - Arguments to update or create a NotificationInfo.
     * @example
     * // Update or create a NotificationInfo
     * const notificationInfo = await prisma.notificationInfo.upsert({
     *   create: {
     *     // ... data to create a NotificationInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationInfo we want to update
     *   }
     * })
     */
    upsert<T extends NotificationInfoUpsertArgs>(args: SelectSubset<T, NotificationInfoUpsertArgs<ExtArgs>>): Prisma__NotificationInfoClient<$Result.GetResult<Prisma.$NotificationInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationInfoCountArgs} args - Arguments to filter NotificationInfos to count.
     * @example
     * // Count the number of NotificationInfos
     * const count = await prisma.notificationInfo.count({
     *   where: {
     *     // ... the filter for the NotificationInfos we want to count
     *   }
     * })
    **/
    count<T extends NotificationInfoCountArgs>(
      args?: Subset<T, NotificationInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationInfoAggregateArgs>(args: Subset<T, NotificationInfoAggregateArgs>): Prisma.PrismaPromise<GetNotificationInfoAggregateType<T>>

    /**
     * Group by NotificationInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationInfoGroupByArgs} args - Group by arguments.
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
      T extends NotificationInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationInfoGroupByArgs['orderBy'] }
        : { orderBy?: NotificationInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationInfo model
   */
  readonly fields: NotificationInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends RequestInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestInfoDefaultArgs<ExtArgs>>): Prisma__RequestInfoClient<$Result.GetResult<Prisma.$RequestInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationInfo model
   */
  interface NotificationInfoFieldRefs {
    readonly notificationId: FieldRef<"NotificationInfo", 'Int'>
    readonly requestId: FieldRef<"NotificationInfo", 'Int'>
    readonly sendDate: FieldRef<"NotificationInfo", 'DateTime'>
    readonly isSend: FieldRef<"NotificationInfo", 'Boolean'>
    readonly messageSubject: FieldRef<"NotificationInfo", 'String'>
    readonly message: FieldRef<"NotificationInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NotificationInfo findUnique
   */
  export type NotificationInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    /**
     * Filter, which NotificationInfo to fetch.
     */
    where: NotificationInfoWhereUniqueInput
  }

  /**
   * NotificationInfo findUniqueOrThrow
   */
  export type NotificationInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    /**
     * Filter, which NotificationInfo to fetch.
     */
    where: NotificationInfoWhereUniqueInput
  }

  /**
   * NotificationInfo findFirst
   */
  export type NotificationInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    /**
     * Filter, which NotificationInfo to fetch.
     */
    where?: NotificationInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationInfos to fetch.
     */
    orderBy?: NotificationInfoOrderByWithRelationInput | NotificationInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationInfos.
     */
    cursor?: NotificationInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationInfos.
     */
    distinct?: NotificationInfoScalarFieldEnum | NotificationInfoScalarFieldEnum[]
  }

  /**
   * NotificationInfo findFirstOrThrow
   */
  export type NotificationInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    /**
     * Filter, which NotificationInfo to fetch.
     */
    where?: NotificationInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationInfos to fetch.
     */
    orderBy?: NotificationInfoOrderByWithRelationInput | NotificationInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationInfos.
     */
    cursor?: NotificationInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationInfos.
     */
    distinct?: NotificationInfoScalarFieldEnum | NotificationInfoScalarFieldEnum[]
  }

  /**
   * NotificationInfo findMany
   */
  export type NotificationInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    /**
     * Filter, which NotificationInfos to fetch.
     */
    where?: NotificationInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationInfos to fetch.
     */
    orderBy?: NotificationInfoOrderByWithRelationInput | NotificationInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationInfos.
     */
    cursor?: NotificationInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationInfos.
     */
    skip?: number
    distinct?: NotificationInfoScalarFieldEnum | NotificationInfoScalarFieldEnum[]
  }

  /**
   * NotificationInfo create
   */
  export type NotificationInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationInfo.
     */
    data: XOR<NotificationInfoCreateInput, NotificationInfoUncheckedCreateInput>
  }

  /**
   * NotificationInfo createMany
   */
  export type NotificationInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationInfos.
     */
    data: NotificationInfoCreateManyInput | NotificationInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationInfo createManyAndReturn
   */
  export type NotificationInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationInfos.
     */
    data: NotificationInfoCreateManyInput | NotificationInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationInfo update
   */
  export type NotificationInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationInfo.
     */
    data: XOR<NotificationInfoUpdateInput, NotificationInfoUncheckedUpdateInput>
    /**
     * Choose, which NotificationInfo to update.
     */
    where: NotificationInfoWhereUniqueInput
  }

  /**
   * NotificationInfo updateMany
   */
  export type NotificationInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationInfos.
     */
    data: XOR<NotificationInfoUpdateManyMutationInput, NotificationInfoUncheckedUpdateManyInput>
    /**
     * Filter which NotificationInfos to update
     */
    where?: NotificationInfoWhereInput
    /**
     * Limit how many NotificationInfos to update.
     */
    limit?: number
  }

  /**
   * NotificationInfo updateManyAndReturn
   */
  export type NotificationInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * The data used to update NotificationInfos.
     */
    data: XOR<NotificationInfoUpdateManyMutationInput, NotificationInfoUncheckedUpdateManyInput>
    /**
     * Filter which NotificationInfos to update
     */
    where?: NotificationInfoWhereInput
    /**
     * Limit how many NotificationInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationInfo upsert
   */
  export type NotificationInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationInfo to update in case it exists.
     */
    where: NotificationInfoWhereUniqueInput
    /**
     * In case the NotificationInfo found by the `where` argument doesn't exist, create a new NotificationInfo with this data.
     */
    create: XOR<NotificationInfoCreateInput, NotificationInfoUncheckedCreateInput>
    /**
     * In case the NotificationInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationInfoUpdateInput, NotificationInfoUncheckedUpdateInput>
  }

  /**
   * NotificationInfo delete
   */
  export type NotificationInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
    /**
     * Filter which NotificationInfo to delete.
     */
    where: NotificationInfoWhereUniqueInput
  }

  /**
   * NotificationInfo deleteMany
   */
  export type NotificationInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationInfos to delete
     */
    where?: NotificationInfoWhereInput
    /**
     * Limit how many NotificationInfos to delete.
     */
    limit?: number
  }

  /**
   * NotificationInfo without action
   */
  export type NotificationInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationInfo
     */
    select?: NotificationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationInfo
     */
    omit?: NotificationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInfoInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    createDate: 'createDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const RequestInfoScalarFieldEnum: {
    requestId: 'requestId',
    userId: 'userId',
    templateId: 'templateId',
    instantName: 'instantName',
    requestStatus: 'requestStatus',
    requestDate: 'requestDate',
    endDate: 'endDate',
    lastEditDate: 'lastEditDate',
    note: 'note',
    isApprove: 'isApprove'
  };

  export type RequestInfoScalarFieldEnum = (typeof RequestInfoScalarFieldEnum)[keyof typeof RequestInfoScalarFieldEnum]


  export const RequestEditLogScalarFieldEnum: {
    logNo: 'logNo',
    userId: 'userId',
    requestId: 'requestId',
    jsonData: 'jsonData',
    timestamp: 'timestamp'
  };

  export type RequestEditLogScalarFieldEnum = (typeof RequestEditLogScalarFieldEnum)[keyof typeof RequestEditLogScalarFieldEnum]


  export const InstanceTemplateScalarFieldEnum: {
    instanceId: 'instanceId',
    name: 'name',
    cpuAmount: 'cpuAmount',
    ramAmount: 'ramAmount',
    gpuAmount: 'gpuAmount',
    storageAmount: 'storageAmount'
  };

  export type InstanceTemplateScalarFieldEnum = (typeof InstanceTemplateScalarFieldEnum)[keyof typeof InstanceTemplateScalarFieldEnum]


  export const OsTemplateScalarFieldEnum: {
    osId: 'osId',
    osName: 'osName',
    imageLocation: 'imageLocation',
    supportedPlatform: 'supportedPlatform'
  };

  export type OsTemplateScalarFieldEnum = (typeof OsTemplateScalarFieldEnum)[keyof typeof OsTemplateScalarFieldEnum]


  export const InstanceOsTemplateScalarFieldEnum: {
    templateId: 'templateId',
    osId: 'osId',
    instanceId: 'instanceId'
  };

  export type InstanceOsTemplateScalarFieldEnum = (typeof InstanceOsTemplateScalarFieldEnum)[keyof typeof InstanceOsTemplateScalarFieldEnum]


  export const InstanceInfoScalarFieldEnum: {
    instanceId: 'instanceId',
    userId: 'userId',
    requestId: 'requestId',
    username: 'username',
    password: 'password',
    machineState: 'machineState',
    ipAddr: 'ipAddr',
    createDate: 'createDate',
    expireDate: 'expireDate',
    updateBy: 'updateBy',
    updateDate: 'updateDate'
  };

  export type InstanceInfoScalarFieldEnum = (typeof InstanceInfoScalarFieldEnum)[keyof typeof InstanceInfoScalarFieldEnum]


  export const NotificationInfoScalarFieldEnum: {
    notificationId: 'notificationId',
    requestId: 'requestId',
    sendDate: 'sendDate',
    isSend: 'isSend',
    messageSubject: 'messageSubject',
    message: 'message'
  };

  export type NotificationInfoScalarFieldEnum = (typeof NotificationInfoScalarFieldEnum)[keyof typeof NotificationInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createDate?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    requests?: RequestInfoListRelationFilter
    instances?: InstanceInfoListRelationFilter
    editLogs?: RequestEditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createDate?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    requests?: RequestInfoOrderByRelationAggregateInput
    instances?: InstanceInfoOrderByRelationAggregateInput
    editLogs?: RequestEditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createDate?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    requests?: RequestInfoListRelationFilter
    instances?: InstanceInfoListRelationFilter
    editLogs?: RequestEditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createDate?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type RequestInfoWhereInput = {
    AND?: RequestInfoWhereInput | RequestInfoWhereInput[]
    OR?: RequestInfoWhereInput[]
    NOT?: RequestInfoWhereInput | RequestInfoWhereInput[]
    requestId?: IntFilter<"RequestInfo"> | number
    userId?: StringFilter<"RequestInfo"> | string
    templateId?: IntFilter<"RequestInfo"> | number
    instantName?: StringFilter<"RequestInfo"> | string
    requestStatus?: StringFilter<"RequestInfo"> | string
    requestDate?: DateTimeFilter<"RequestInfo"> | Date | string
    endDate?: DateTimeFilter<"RequestInfo"> | Date | string
    lastEditDate?: DateTimeFilter<"RequestInfo"> | Date | string
    note?: StringFilter<"RequestInfo"> | string
    isApprove?: BoolFilter<"RequestInfo"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<InstanceOsTemplateScalarRelationFilter, InstanceOsTemplateWhereInput>
    notifications?: NotificationInfoListRelationFilter
    editLogs?: RequestEditLogListRelationFilter
    instances?: InstanceInfoListRelationFilter
  }

  export type RequestInfoOrderByWithRelationInput = {
    requestId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    instantName?: SortOrder
    requestStatus?: SortOrder
    requestDate?: SortOrder
    endDate?: SortOrder
    lastEditDate?: SortOrder
    note?: SortOrder
    isApprove?: SortOrder
    user?: UserOrderByWithRelationInput
    template?: InstanceOsTemplateOrderByWithRelationInput
    notifications?: NotificationInfoOrderByRelationAggregateInput
    editLogs?: RequestEditLogOrderByRelationAggregateInput
    instances?: InstanceInfoOrderByRelationAggregateInput
  }

  export type RequestInfoWhereUniqueInput = Prisma.AtLeast<{
    requestId?: number
    AND?: RequestInfoWhereInput | RequestInfoWhereInput[]
    OR?: RequestInfoWhereInput[]
    NOT?: RequestInfoWhereInput | RequestInfoWhereInput[]
    userId?: StringFilter<"RequestInfo"> | string
    templateId?: IntFilter<"RequestInfo"> | number
    instantName?: StringFilter<"RequestInfo"> | string
    requestStatus?: StringFilter<"RequestInfo"> | string
    requestDate?: DateTimeFilter<"RequestInfo"> | Date | string
    endDate?: DateTimeFilter<"RequestInfo"> | Date | string
    lastEditDate?: DateTimeFilter<"RequestInfo"> | Date | string
    note?: StringFilter<"RequestInfo"> | string
    isApprove?: BoolFilter<"RequestInfo"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<InstanceOsTemplateScalarRelationFilter, InstanceOsTemplateWhereInput>
    notifications?: NotificationInfoListRelationFilter
    editLogs?: RequestEditLogListRelationFilter
    instances?: InstanceInfoListRelationFilter
  }, "requestId">

  export type RequestInfoOrderByWithAggregationInput = {
    requestId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    instantName?: SortOrder
    requestStatus?: SortOrder
    requestDate?: SortOrder
    endDate?: SortOrder
    lastEditDate?: SortOrder
    note?: SortOrder
    isApprove?: SortOrder
    _count?: RequestInfoCountOrderByAggregateInput
    _avg?: RequestInfoAvgOrderByAggregateInput
    _max?: RequestInfoMaxOrderByAggregateInput
    _min?: RequestInfoMinOrderByAggregateInput
    _sum?: RequestInfoSumOrderByAggregateInput
  }

  export type RequestInfoScalarWhereWithAggregatesInput = {
    AND?: RequestInfoScalarWhereWithAggregatesInput | RequestInfoScalarWhereWithAggregatesInput[]
    OR?: RequestInfoScalarWhereWithAggregatesInput[]
    NOT?: RequestInfoScalarWhereWithAggregatesInput | RequestInfoScalarWhereWithAggregatesInput[]
    requestId?: IntWithAggregatesFilter<"RequestInfo"> | number
    userId?: StringWithAggregatesFilter<"RequestInfo"> | string
    templateId?: IntWithAggregatesFilter<"RequestInfo"> | number
    instantName?: StringWithAggregatesFilter<"RequestInfo"> | string
    requestStatus?: StringWithAggregatesFilter<"RequestInfo"> | string
    requestDate?: DateTimeWithAggregatesFilter<"RequestInfo"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"RequestInfo"> | Date | string
    lastEditDate?: DateTimeWithAggregatesFilter<"RequestInfo"> | Date | string
    note?: StringWithAggregatesFilter<"RequestInfo"> | string
    isApprove?: BoolWithAggregatesFilter<"RequestInfo"> | boolean
  }

  export type RequestEditLogWhereInput = {
    AND?: RequestEditLogWhereInput | RequestEditLogWhereInput[]
    OR?: RequestEditLogWhereInput[]
    NOT?: RequestEditLogWhereInput | RequestEditLogWhereInput[]
    logNo?: IntFilter<"RequestEditLog"> | number
    userId?: StringFilter<"RequestEditLog"> | string
    requestId?: IntFilter<"RequestEditLog"> | number
    jsonData?: JsonFilter<"RequestEditLog">
    timestamp?: DateTimeFilter<"RequestEditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<RequestInfoScalarRelationFilter, RequestInfoWhereInput>
  }

  export type RequestEditLogOrderByWithRelationInput = {
    logNo?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    jsonData?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    request?: RequestInfoOrderByWithRelationInput
  }

  export type RequestEditLogWhereUniqueInput = Prisma.AtLeast<{
    logNo?: number
    AND?: RequestEditLogWhereInput | RequestEditLogWhereInput[]
    OR?: RequestEditLogWhereInput[]
    NOT?: RequestEditLogWhereInput | RequestEditLogWhereInput[]
    userId?: StringFilter<"RequestEditLog"> | string
    requestId?: IntFilter<"RequestEditLog"> | number
    jsonData?: JsonFilter<"RequestEditLog">
    timestamp?: DateTimeFilter<"RequestEditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<RequestInfoScalarRelationFilter, RequestInfoWhereInput>
  }, "logNo">

  export type RequestEditLogOrderByWithAggregationInput = {
    logNo?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    jsonData?: SortOrder
    timestamp?: SortOrder
    _count?: RequestEditLogCountOrderByAggregateInput
    _avg?: RequestEditLogAvgOrderByAggregateInput
    _max?: RequestEditLogMaxOrderByAggregateInput
    _min?: RequestEditLogMinOrderByAggregateInput
    _sum?: RequestEditLogSumOrderByAggregateInput
  }

  export type RequestEditLogScalarWhereWithAggregatesInput = {
    AND?: RequestEditLogScalarWhereWithAggregatesInput | RequestEditLogScalarWhereWithAggregatesInput[]
    OR?: RequestEditLogScalarWhereWithAggregatesInput[]
    NOT?: RequestEditLogScalarWhereWithAggregatesInput | RequestEditLogScalarWhereWithAggregatesInput[]
    logNo?: IntWithAggregatesFilter<"RequestEditLog"> | number
    userId?: StringWithAggregatesFilter<"RequestEditLog"> | string
    requestId?: IntWithAggregatesFilter<"RequestEditLog"> | number
    jsonData?: JsonWithAggregatesFilter<"RequestEditLog">
    timestamp?: DateTimeWithAggregatesFilter<"RequestEditLog"> | Date | string
  }

  export type InstanceTemplateWhereInput = {
    AND?: InstanceTemplateWhereInput | InstanceTemplateWhereInput[]
    OR?: InstanceTemplateWhereInput[]
    NOT?: InstanceTemplateWhereInput | InstanceTemplateWhereInput[]
    instanceId?: IntFilter<"InstanceTemplate"> | number
    name?: StringFilter<"InstanceTemplate"> | string
    cpuAmount?: IntFilter<"InstanceTemplate"> | number
    ramAmount?: IntFilter<"InstanceTemplate"> | number
    gpuAmount?: IntFilter<"InstanceTemplate"> | number
    storageAmount?: IntFilter<"InstanceTemplate"> | number
    osTemplates?: InstanceOsTemplateListRelationFilter
  }

  export type InstanceTemplateOrderByWithRelationInput = {
    instanceId?: SortOrder
    name?: SortOrder
    cpuAmount?: SortOrder
    ramAmount?: SortOrder
    gpuAmount?: SortOrder
    storageAmount?: SortOrder
    osTemplates?: InstanceOsTemplateOrderByRelationAggregateInput
  }

  export type InstanceTemplateWhereUniqueInput = Prisma.AtLeast<{
    instanceId?: number
    AND?: InstanceTemplateWhereInput | InstanceTemplateWhereInput[]
    OR?: InstanceTemplateWhereInput[]
    NOT?: InstanceTemplateWhereInput | InstanceTemplateWhereInput[]
    name?: StringFilter<"InstanceTemplate"> | string
    cpuAmount?: IntFilter<"InstanceTemplate"> | number
    ramAmount?: IntFilter<"InstanceTemplate"> | number
    gpuAmount?: IntFilter<"InstanceTemplate"> | number
    storageAmount?: IntFilter<"InstanceTemplate"> | number
    osTemplates?: InstanceOsTemplateListRelationFilter
  }, "instanceId">

  export type InstanceTemplateOrderByWithAggregationInput = {
    instanceId?: SortOrder
    name?: SortOrder
    cpuAmount?: SortOrder
    ramAmount?: SortOrder
    gpuAmount?: SortOrder
    storageAmount?: SortOrder
    _count?: InstanceTemplateCountOrderByAggregateInput
    _avg?: InstanceTemplateAvgOrderByAggregateInput
    _max?: InstanceTemplateMaxOrderByAggregateInput
    _min?: InstanceTemplateMinOrderByAggregateInput
    _sum?: InstanceTemplateSumOrderByAggregateInput
  }

  export type InstanceTemplateScalarWhereWithAggregatesInput = {
    AND?: InstanceTemplateScalarWhereWithAggregatesInput | InstanceTemplateScalarWhereWithAggregatesInput[]
    OR?: InstanceTemplateScalarWhereWithAggregatesInput[]
    NOT?: InstanceTemplateScalarWhereWithAggregatesInput | InstanceTemplateScalarWhereWithAggregatesInput[]
    instanceId?: IntWithAggregatesFilter<"InstanceTemplate"> | number
    name?: StringWithAggregatesFilter<"InstanceTemplate"> | string
    cpuAmount?: IntWithAggregatesFilter<"InstanceTemplate"> | number
    ramAmount?: IntWithAggregatesFilter<"InstanceTemplate"> | number
    gpuAmount?: IntWithAggregatesFilter<"InstanceTemplate"> | number
    storageAmount?: IntWithAggregatesFilter<"InstanceTemplate"> | number
  }

  export type OsTemplateWhereInput = {
    AND?: OsTemplateWhereInput | OsTemplateWhereInput[]
    OR?: OsTemplateWhereInput[]
    NOT?: OsTemplateWhereInput | OsTemplateWhereInput[]
    osId?: IntFilter<"OsTemplate"> | number
    osName?: StringFilter<"OsTemplate"> | string
    imageLocation?: StringFilter<"OsTemplate"> | string
    supportedPlatform?: StringFilter<"OsTemplate"> | string
    instancesOs?: InstanceOsTemplateListRelationFilter
  }

  export type OsTemplateOrderByWithRelationInput = {
    osId?: SortOrder
    osName?: SortOrder
    imageLocation?: SortOrder
    supportedPlatform?: SortOrder
    instancesOs?: InstanceOsTemplateOrderByRelationAggregateInput
  }

  export type OsTemplateWhereUniqueInput = Prisma.AtLeast<{
    osId?: number
    AND?: OsTemplateWhereInput | OsTemplateWhereInput[]
    OR?: OsTemplateWhereInput[]
    NOT?: OsTemplateWhereInput | OsTemplateWhereInput[]
    osName?: StringFilter<"OsTemplate"> | string
    imageLocation?: StringFilter<"OsTemplate"> | string
    supportedPlatform?: StringFilter<"OsTemplate"> | string
    instancesOs?: InstanceOsTemplateListRelationFilter
  }, "osId">

  export type OsTemplateOrderByWithAggregationInput = {
    osId?: SortOrder
    osName?: SortOrder
    imageLocation?: SortOrder
    supportedPlatform?: SortOrder
    _count?: OsTemplateCountOrderByAggregateInput
    _avg?: OsTemplateAvgOrderByAggregateInput
    _max?: OsTemplateMaxOrderByAggregateInput
    _min?: OsTemplateMinOrderByAggregateInput
    _sum?: OsTemplateSumOrderByAggregateInput
  }

  export type OsTemplateScalarWhereWithAggregatesInput = {
    AND?: OsTemplateScalarWhereWithAggregatesInput | OsTemplateScalarWhereWithAggregatesInput[]
    OR?: OsTemplateScalarWhereWithAggregatesInput[]
    NOT?: OsTemplateScalarWhereWithAggregatesInput | OsTemplateScalarWhereWithAggregatesInput[]
    osId?: IntWithAggregatesFilter<"OsTemplate"> | number
    osName?: StringWithAggregatesFilter<"OsTemplate"> | string
    imageLocation?: StringWithAggregatesFilter<"OsTemplate"> | string
    supportedPlatform?: StringWithAggregatesFilter<"OsTemplate"> | string
  }

  export type InstanceOsTemplateWhereInput = {
    AND?: InstanceOsTemplateWhereInput | InstanceOsTemplateWhereInput[]
    OR?: InstanceOsTemplateWhereInput[]
    NOT?: InstanceOsTemplateWhereInput | InstanceOsTemplateWhereInput[]
    templateId?: IntFilter<"InstanceOsTemplate"> | number
    osId?: IntFilter<"InstanceOsTemplate"> | number
    instanceId?: IntFilter<"InstanceOsTemplate"> | number
    osTemplate?: XOR<OsTemplateScalarRelationFilter, OsTemplateWhereInput>
    instance?: XOR<InstanceTemplateScalarRelationFilter, InstanceTemplateWhereInput>
    requests?: RequestInfoListRelationFilter
  }

  export type InstanceOsTemplateOrderByWithRelationInput = {
    templateId?: SortOrder
    osId?: SortOrder
    instanceId?: SortOrder
    osTemplate?: OsTemplateOrderByWithRelationInput
    instance?: InstanceTemplateOrderByWithRelationInput
    requests?: RequestInfoOrderByRelationAggregateInput
  }

  export type InstanceOsTemplateWhereUniqueInput = Prisma.AtLeast<{
    templateId?: number
    AND?: InstanceOsTemplateWhereInput | InstanceOsTemplateWhereInput[]
    OR?: InstanceOsTemplateWhereInput[]
    NOT?: InstanceOsTemplateWhereInput | InstanceOsTemplateWhereInput[]
    osId?: IntFilter<"InstanceOsTemplate"> | number
    instanceId?: IntFilter<"InstanceOsTemplate"> | number
    osTemplate?: XOR<OsTemplateScalarRelationFilter, OsTemplateWhereInput>
    instance?: XOR<InstanceTemplateScalarRelationFilter, InstanceTemplateWhereInput>
    requests?: RequestInfoListRelationFilter
  }, "templateId">

  export type InstanceOsTemplateOrderByWithAggregationInput = {
    templateId?: SortOrder
    osId?: SortOrder
    instanceId?: SortOrder
    _count?: InstanceOsTemplateCountOrderByAggregateInput
    _avg?: InstanceOsTemplateAvgOrderByAggregateInput
    _max?: InstanceOsTemplateMaxOrderByAggregateInput
    _min?: InstanceOsTemplateMinOrderByAggregateInput
    _sum?: InstanceOsTemplateSumOrderByAggregateInput
  }

  export type InstanceOsTemplateScalarWhereWithAggregatesInput = {
    AND?: InstanceOsTemplateScalarWhereWithAggregatesInput | InstanceOsTemplateScalarWhereWithAggregatesInput[]
    OR?: InstanceOsTemplateScalarWhereWithAggregatesInput[]
    NOT?: InstanceOsTemplateScalarWhereWithAggregatesInput | InstanceOsTemplateScalarWhereWithAggregatesInput[]
    templateId?: IntWithAggregatesFilter<"InstanceOsTemplate"> | number
    osId?: IntWithAggregatesFilter<"InstanceOsTemplate"> | number
    instanceId?: IntWithAggregatesFilter<"InstanceOsTemplate"> | number
  }

  export type InstanceInfoWhereInput = {
    AND?: InstanceInfoWhereInput | InstanceInfoWhereInput[]
    OR?: InstanceInfoWhereInput[]
    NOT?: InstanceInfoWhereInput | InstanceInfoWhereInput[]
    instanceId?: IntFilter<"InstanceInfo"> | number
    userId?: StringFilter<"InstanceInfo"> | string
    requestId?: IntFilter<"InstanceInfo"> | number
    username?: StringFilter<"InstanceInfo"> | string
    password?: StringFilter<"InstanceInfo"> | string
    machineState?: StringFilter<"InstanceInfo"> | string
    ipAddr?: StringFilter<"InstanceInfo"> | string
    createDate?: DateTimeFilter<"InstanceInfo"> | Date | string
    expireDate?: DateTimeFilter<"InstanceInfo"> | Date | string
    updateBy?: StringFilter<"InstanceInfo"> | string
    updateDate?: DateTimeFilter<"InstanceInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<RequestInfoScalarRelationFilter, RequestInfoWhereInput>
  }

  export type InstanceInfoOrderByWithRelationInput = {
    instanceId?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    machineState?: SortOrder
    ipAddr?: SortOrder
    createDate?: SortOrder
    expireDate?: SortOrder
    updateBy?: SortOrder
    updateDate?: SortOrder
    user?: UserOrderByWithRelationInput
    request?: RequestInfoOrderByWithRelationInput
  }

  export type InstanceInfoWhereUniqueInput = Prisma.AtLeast<{
    instanceId?: number
    AND?: InstanceInfoWhereInput | InstanceInfoWhereInput[]
    OR?: InstanceInfoWhereInput[]
    NOT?: InstanceInfoWhereInput | InstanceInfoWhereInput[]
    userId?: StringFilter<"InstanceInfo"> | string
    requestId?: IntFilter<"InstanceInfo"> | number
    username?: StringFilter<"InstanceInfo"> | string
    password?: StringFilter<"InstanceInfo"> | string
    machineState?: StringFilter<"InstanceInfo"> | string
    ipAddr?: StringFilter<"InstanceInfo"> | string
    createDate?: DateTimeFilter<"InstanceInfo"> | Date | string
    expireDate?: DateTimeFilter<"InstanceInfo"> | Date | string
    updateBy?: StringFilter<"InstanceInfo"> | string
    updateDate?: DateTimeFilter<"InstanceInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<RequestInfoScalarRelationFilter, RequestInfoWhereInput>
  }, "instanceId">

  export type InstanceInfoOrderByWithAggregationInput = {
    instanceId?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    machineState?: SortOrder
    ipAddr?: SortOrder
    createDate?: SortOrder
    expireDate?: SortOrder
    updateBy?: SortOrder
    updateDate?: SortOrder
    _count?: InstanceInfoCountOrderByAggregateInput
    _avg?: InstanceInfoAvgOrderByAggregateInput
    _max?: InstanceInfoMaxOrderByAggregateInput
    _min?: InstanceInfoMinOrderByAggregateInput
    _sum?: InstanceInfoSumOrderByAggregateInput
  }

  export type InstanceInfoScalarWhereWithAggregatesInput = {
    AND?: InstanceInfoScalarWhereWithAggregatesInput | InstanceInfoScalarWhereWithAggregatesInput[]
    OR?: InstanceInfoScalarWhereWithAggregatesInput[]
    NOT?: InstanceInfoScalarWhereWithAggregatesInput | InstanceInfoScalarWhereWithAggregatesInput[]
    instanceId?: IntWithAggregatesFilter<"InstanceInfo"> | number
    userId?: StringWithAggregatesFilter<"InstanceInfo"> | string
    requestId?: IntWithAggregatesFilter<"InstanceInfo"> | number
    username?: StringWithAggregatesFilter<"InstanceInfo"> | string
    password?: StringWithAggregatesFilter<"InstanceInfo"> | string
    machineState?: StringWithAggregatesFilter<"InstanceInfo"> | string
    ipAddr?: StringWithAggregatesFilter<"InstanceInfo"> | string
    createDate?: DateTimeWithAggregatesFilter<"InstanceInfo"> | Date | string
    expireDate?: DateTimeWithAggregatesFilter<"InstanceInfo"> | Date | string
    updateBy?: StringWithAggregatesFilter<"InstanceInfo"> | string
    updateDate?: DateTimeWithAggregatesFilter<"InstanceInfo"> | Date | string
  }

  export type NotificationInfoWhereInput = {
    AND?: NotificationInfoWhereInput | NotificationInfoWhereInput[]
    OR?: NotificationInfoWhereInput[]
    NOT?: NotificationInfoWhereInput | NotificationInfoWhereInput[]
    notificationId?: IntFilter<"NotificationInfo"> | number
    requestId?: IntFilter<"NotificationInfo"> | number
    sendDate?: DateTimeFilter<"NotificationInfo"> | Date | string
    isSend?: BoolFilter<"NotificationInfo"> | boolean
    messageSubject?: StringFilter<"NotificationInfo"> | string
    message?: StringFilter<"NotificationInfo"> | string
    request?: XOR<RequestInfoScalarRelationFilter, RequestInfoWhereInput>
  }

  export type NotificationInfoOrderByWithRelationInput = {
    notificationId?: SortOrder
    requestId?: SortOrder
    sendDate?: SortOrder
    isSend?: SortOrder
    messageSubject?: SortOrder
    message?: SortOrder
    request?: RequestInfoOrderByWithRelationInput
  }

  export type NotificationInfoWhereUniqueInput = Prisma.AtLeast<{
    notificationId?: number
    AND?: NotificationInfoWhereInput | NotificationInfoWhereInput[]
    OR?: NotificationInfoWhereInput[]
    NOT?: NotificationInfoWhereInput | NotificationInfoWhereInput[]
    requestId?: IntFilter<"NotificationInfo"> | number
    sendDate?: DateTimeFilter<"NotificationInfo"> | Date | string
    isSend?: BoolFilter<"NotificationInfo"> | boolean
    messageSubject?: StringFilter<"NotificationInfo"> | string
    message?: StringFilter<"NotificationInfo"> | string
    request?: XOR<RequestInfoScalarRelationFilter, RequestInfoWhereInput>
  }, "notificationId">

  export type NotificationInfoOrderByWithAggregationInput = {
    notificationId?: SortOrder
    requestId?: SortOrder
    sendDate?: SortOrder
    isSend?: SortOrder
    messageSubject?: SortOrder
    message?: SortOrder
    _count?: NotificationInfoCountOrderByAggregateInput
    _avg?: NotificationInfoAvgOrderByAggregateInput
    _max?: NotificationInfoMaxOrderByAggregateInput
    _min?: NotificationInfoMinOrderByAggregateInput
    _sum?: NotificationInfoSumOrderByAggregateInput
  }

  export type NotificationInfoScalarWhereWithAggregatesInput = {
    AND?: NotificationInfoScalarWhereWithAggregatesInput | NotificationInfoScalarWhereWithAggregatesInput[]
    OR?: NotificationInfoScalarWhereWithAggregatesInput[]
    NOT?: NotificationInfoScalarWhereWithAggregatesInput | NotificationInfoScalarWhereWithAggregatesInput[]
    notificationId?: IntWithAggregatesFilter<"NotificationInfo"> | number
    requestId?: IntWithAggregatesFilter<"NotificationInfo"> | number
    sendDate?: DateTimeWithAggregatesFilter<"NotificationInfo"> | Date | string
    isSend?: BoolWithAggregatesFilter<"NotificationInfo"> | boolean
    messageSubject?: StringWithAggregatesFilter<"NotificationInfo"> | string
    message?: StringWithAggregatesFilter<"NotificationInfo"> | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoCreateNestedManyWithoutUserInput
    instances?: InstanceInfoCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoUncheckedCreateNestedManyWithoutUserInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUncheckedUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type RequestInfoCreateInput = {
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    user: UserCreateNestedOneWithoutRequestsInput
    template: InstanceOsTemplateCreateNestedOneWithoutRequestsInput
    notifications?: NotificationInfoCreateNestedManyWithoutRequestInput
    editLogs?: RequestEditLogCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoUncheckedCreateInput = {
    requestId?: number
    userId: string
    templateId: number
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    notifications?: NotificationInfoUncheckedCreateNestedManyWithoutRequestInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoUpdateInput = {
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    template?: InstanceOsTemplateUpdateOneRequiredWithoutRequestsNestedInput
    notifications?: NotificationInfoUpdateManyWithoutRequestNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoUncheckedUpdateInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: IntFieldUpdateOperationsInput | number
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationInfoUncheckedUpdateManyWithoutRequestNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoCreateManyInput = {
    requestId?: number
    userId: string
    templateId: number
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
  }

  export type RequestInfoUpdateManyMutationInput = {
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RequestInfoUncheckedUpdateManyInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: IntFieldUpdateOperationsInput | number
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RequestEditLogCreateInput = {
    jsonData: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
    user: UserCreateNestedOneWithoutEditLogsInput
    request: RequestInfoCreateNestedOneWithoutEditLogsInput
  }

  export type RequestEditLogUncheckedCreateInput = {
    logNo?: number
    userId: string
    requestId: number
    jsonData: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type RequestEditLogUpdateInput = {
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEditLogsNestedInput
    request?: RequestInfoUpdateOneRequiredWithoutEditLogsNestedInput
  }

  export type RequestEditLogUncheckedUpdateInput = {
    logNo?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEditLogCreateManyInput = {
    logNo?: number
    userId: string
    requestId: number
    jsonData: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type RequestEditLogUpdateManyMutationInput = {
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEditLogUncheckedUpdateManyInput = {
    logNo?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceTemplateCreateInput = {
    name: string
    cpuAmount: number
    ramAmount: number
    gpuAmount: number
    storageAmount: number
    osTemplates?: InstanceOsTemplateCreateNestedManyWithoutInstanceInput
  }

  export type InstanceTemplateUncheckedCreateInput = {
    instanceId?: number
    name: string
    cpuAmount: number
    ramAmount: number
    gpuAmount: number
    storageAmount: number
    osTemplates?: InstanceOsTemplateUncheckedCreateNestedManyWithoutInstanceInput
  }

  export type InstanceTemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpuAmount?: IntFieldUpdateOperationsInput | number
    ramAmount?: IntFieldUpdateOperationsInput | number
    gpuAmount?: IntFieldUpdateOperationsInput | number
    storageAmount?: IntFieldUpdateOperationsInput | number
    osTemplates?: InstanceOsTemplateUpdateManyWithoutInstanceNestedInput
  }

  export type InstanceTemplateUncheckedUpdateInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpuAmount?: IntFieldUpdateOperationsInput | number
    ramAmount?: IntFieldUpdateOperationsInput | number
    gpuAmount?: IntFieldUpdateOperationsInput | number
    storageAmount?: IntFieldUpdateOperationsInput | number
    osTemplates?: InstanceOsTemplateUncheckedUpdateManyWithoutInstanceNestedInput
  }

  export type InstanceTemplateCreateManyInput = {
    instanceId?: number
    name: string
    cpuAmount: number
    ramAmount: number
    gpuAmount: number
    storageAmount: number
  }

  export type InstanceTemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpuAmount?: IntFieldUpdateOperationsInput | number
    ramAmount?: IntFieldUpdateOperationsInput | number
    gpuAmount?: IntFieldUpdateOperationsInput | number
    storageAmount?: IntFieldUpdateOperationsInput | number
  }

  export type InstanceTemplateUncheckedUpdateManyInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpuAmount?: IntFieldUpdateOperationsInput | number
    ramAmount?: IntFieldUpdateOperationsInput | number
    gpuAmount?: IntFieldUpdateOperationsInput | number
    storageAmount?: IntFieldUpdateOperationsInput | number
  }

  export type OsTemplateCreateInput = {
    osName: string
    imageLocation: string
    supportedPlatform: string
    instancesOs?: InstanceOsTemplateCreateNestedManyWithoutOsTemplateInput
  }

  export type OsTemplateUncheckedCreateInput = {
    osId?: number
    osName: string
    imageLocation: string
    supportedPlatform: string
    instancesOs?: InstanceOsTemplateUncheckedCreateNestedManyWithoutOsTemplateInput
  }

  export type OsTemplateUpdateInput = {
    osName?: StringFieldUpdateOperationsInput | string
    imageLocation?: StringFieldUpdateOperationsInput | string
    supportedPlatform?: StringFieldUpdateOperationsInput | string
    instancesOs?: InstanceOsTemplateUpdateManyWithoutOsTemplateNestedInput
  }

  export type OsTemplateUncheckedUpdateInput = {
    osId?: IntFieldUpdateOperationsInput | number
    osName?: StringFieldUpdateOperationsInput | string
    imageLocation?: StringFieldUpdateOperationsInput | string
    supportedPlatform?: StringFieldUpdateOperationsInput | string
    instancesOs?: InstanceOsTemplateUncheckedUpdateManyWithoutOsTemplateNestedInput
  }

  export type OsTemplateCreateManyInput = {
    osId?: number
    osName: string
    imageLocation: string
    supportedPlatform: string
  }

  export type OsTemplateUpdateManyMutationInput = {
    osName?: StringFieldUpdateOperationsInput | string
    imageLocation?: StringFieldUpdateOperationsInput | string
    supportedPlatform?: StringFieldUpdateOperationsInput | string
  }

  export type OsTemplateUncheckedUpdateManyInput = {
    osId?: IntFieldUpdateOperationsInput | number
    osName?: StringFieldUpdateOperationsInput | string
    imageLocation?: StringFieldUpdateOperationsInput | string
    supportedPlatform?: StringFieldUpdateOperationsInput | string
  }

  export type InstanceOsTemplateCreateInput = {
    osTemplate: OsTemplateCreateNestedOneWithoutInstancesOsInput
    instance: InstanceTemplateCreateNestedOneWithoutOsTemplatesInput
    requests?: RequestInfoCreateNestedManyWithoutTemplateInput
  }

  export type InstanceOsTemplateUncheckedCreateInput = {
    templateId?: number
    osId: number
    instanceId: number
    requests?: RequestInfoUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type InstanceOsTemplateUpdateInput = {
    osTemplate?: OsTemplateUpdateOneRequiredWithoutInstancesOsNestedInput
    instance?: InstanceTemplateUpdateOneRequiredWithoutOsTemplatesNestedInput
    requests?: RequestInfoUpdateManyWithoutTemplateNestedInput
  }

  export type InstanceOsTemplateUncheckedUpdateInput = {
    templateId?: IntFieldUpdateOperationsInput | number
    osId?: IntFieldUpdateOperationsInput | number
    instanceId?: IntFieldUpdateOperationsInput | number
    requests?: RequestInfoUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type InstanceOsTemplateCreateManyInput = {
    templateId?: number
    osId: number
    instanceId: number
  }

  export type InstanceOsTemplateUpdateManyMutationInput = {

  }

  export type InstanceOsTemplateUncheckedUpdateManyInput = {
    templateId?: IntFieldUpdateOperationsInput | number
    osId?: IntFieldUpdateOperationsInput | number
    instanceId?: IntFieldUpdateOperationsInput | number
  }

  export type InstanceInfoCreateInput = {
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date | string
    expireDate: Date | string
    updateBy: string
    updateDate: Date | string
    user: UserCreateNestedOneWithoutInstancesInput
    request: RequestInfoCreateNestedOneWithoutInstancesInput
  }

  export type InstanceInfoUncheckedCreateInput = {
    instanceId?: number
    userId: string
    requestId: number
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date | string
    expireDate: Date | string
    updateBy: string
    updateDate: Date | string
  }

  export type InstanceInfoUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInstancesNestedInput
    request?: RequestInfoUpdateOneRequiredWithoutInstancesNestedInput
  }

  export type InstanceInfoUncheckedUpdateInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceInfoCreateManyInput = {
    instanceId?: number
    userId: string
    requestId: number
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date | string
    expireDate: Date | string
    updateBy: string
    updateDate: Date | string
  }

  export type InstanceInfoUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceInfoUncheckedUpdateManyInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationInfoCreateInput = {
    sendDate: Date | string
    isSend: boolean
    messageSubject: string
    message: string
    request: RequestInfoCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationInfoUncheckedCreateInput = {
    notificationId?: number
    requestId: number
    sendDate: Date | string
    isSend: boolean
    messageSubject: string
    message: string
  }

  export type NotificationInfoUpdateInput = {
    sendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSend?: BoolFieldUpdateOperationsInput | boolean
    messageSubject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    request?: RequestInfoUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationInfoUncheckedUpdateInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
    requestId?: IntFieldUpdateOperationsInput | number
    sendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSend?: BoolFieldUpdateOperationsInput | boolean
    messageSubject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationInfoCreateManyInput = {
    notificationId?: number
    requestId: number
    sendDate: Date | string
    isSend: boolean
    messageSubject: string
    message: string
  }

  export type NotificationInfoUpdateManyMutationInput = {
    sendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSend?: BoolFieldUpdateOperationsInput | boolean
    messageSubject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationInfoUncheckedUpdateManyInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
    requestId?: IntFieldUpdateOperationsInput | number
    sendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSend?: BoolFieldUpdateOperationsInput | boolean
    messageSubject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type RequestInfoListRelationFilter = {
    every?: RequestInfoWhereInput
    some?: RequestInfoWhereInput
    none?: RequestInfoWhereInput
  }

  export type InstanceInfoListRelationFilter = {
    every?: InstanceInfoWhereInput
    some?: InstanceInfoWhereInput
    none?: InstanceInfoWhereInput
  }

  export type RequestEditLogListRelationFilter = {
    every?: RequestEditLogWhereInput
    some?: RequestEditLogWhereInput
    none?: RequestEditLogWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstanceInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestEditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createDate?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createDate?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InstanceOsTemplateScalarRelationFilter = {
    is?: InstanceOsTemplateWhereInput
    isNot?: InstanceOsTemplateWhereInput
  }

  export type NotificationInfoListRelationFilter = {
    every?: NotificationInfoWhereInput
    some?: NotificationInfoWhereInput
    none?: NotificationInfoWhereInput
  }

  export type NotificationInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestInfoCountOrderByAggregateInput = {
    requestId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    instantName?: SortOrder
    requestStatus?: SortOrder
    requestDate?: SortOrder
    endDate?: SortOrder
    lastEditDate?: SortOrder
    note?: SortOrder
    isApprove?: SortOrder
  }

  export type RequestInfoAvgOrderByAggregateInput = {
    requestId?: SortOrder
    templateId?: SortOrder
  }

  export type RequestInfoMaxOrderByAggregateInput = {
    requestId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    instantName?: SortOrder
    requestStatus?: SortOrder
    requestDate?: SortOrder
    endDate?: SortOrder
    lastEditDate?: SortOrder
    note?: SortOrder
    isApprove?: SortOrder
  }

  export type RequestInfoMinOrderByAggregateInput = {
    requestId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    instantName?: SortOrder
    requestStatus?: SortOrder
    requestDate?: SortOrder
    endDate?: SortOrder
    lastEditDate?: SortOrder
    note?: SortOrder
    isApprove?: SortOrder
  }

  export type RequestInfoSumOrderByAggregateInput = {
    requestId?: SortOrder
    templateId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RequestInfoScalarRelationFilter = {
    is?: RequestInfoWhereInput
    isNot?: RequestInfoWhereInput
  }

  export type RequestEditLogCountOrderByAggregateInput = {
    logNo?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    jsonData?: SortOrder
    timestamp?: SortOrder
  }

  export type RequestEditLogAvgOrderByAggregateInput = {
    logNo?: SortOrder
    requestId?: SortOrder
  }

  export type RequestEditLogMaxOrderByAggregateInput = {
    logNo?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    timestamp?: SortOrder
  }

  export type RequestEditLogMinOrderByAggregateInput = {
    logNo?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    timestamp?: SortOrder
  }

  export type RequestEditLogSumOrderByAggregateInput = {
    logNo?: SortOrder
    requestId?: SortOrder
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

  export type InstanceOsTemplateListRelationFilter = {
    every?: InstanceOsTemplateWhereInput
    some?: InstanceOsTemplateWhereInput
    none?: InstanceOsTemplateWhereInput
  }

  export type InstanceOsTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstanceTemplateCountOrderByAggregateInput = {
    instanceId?: SortOrder
    name?: SortOrder
    cpuAmount?: SortOrder
    ramAmount?: SortOrder
    gpuAmount?: SortOrder
    storageAmount?: SortOrder
  }

  export type InstanceTemplateAvgOrderByAggregateInput = {
    instanceId?: SortOrder
    cpuAmount?: SortOrder
    ramAmount?: SortOrder
    gpuAmount?: SortOrder
    storageAmount?: SortOrder
  }

  export type InstanceTemplateMaxOrderByAggregateInput = {
    instanceId?: SortOrder
    name?: SortOrder
    cpuAmount?: SortOrder
    ramAmount?: SortOrder
    gpuAmount?: SortOrder
    storageAmount?: SortOrder
  }

  export type InstanceTemplateMinOrderByAggregateInput = {
    instanceId?: SortOrder
    name?: SortOrder
    cpuAmount?: SortOrder
    ramAmount?: SortOrder
    gpuAmount?: SortOrder
    storageAmount?: SortOrder
  }

  export type InstanceTemplateSumOrderByAggregateInput = {
    instanceId?: SortOrder
    cpuAmount?: SortOrder
    ramAmount?: SortOrder
    gpuAmount?: SortOrder
    storageAmount?: SortOrder
  }

  export type OsTemplateCountOrderByAggregateInput = {
    osId?: SortOrder
    osName?: SortOrder
    imageLocation?: SortOrder
    supportedPlatform?: SortOrder
  }

  export type OsTemplateAvgOrderByAggregateInput = {
    osId?: SortOrder
  }

  export type OsTemplateMaxOrderByAggregateInput = {
    osId?: SortOrder
    osName?: SortOrder
    imageLocation?: SortOrder
    supportedPlatform?: SortOrder
  }

  export type OsTemplateMinOrderByAggregateInput = {
    osId?: SortOrder
    osName?: SortOrder
    imageLocation?: SortOrder
    supportedPlatform?: SortOrder
  }

  export type OsTemplateSumOrderByAggregateInput = {
    osId?: SortOrder
  }

  export type OsTemplateScalarRelationFilter = {
    is?: OsTemplateWhereInput
    isNot?: OsTemplateWhereInput
  }

  export type InstanceTemplateScalarRelationFilter = {
    is?: InstanceTemplateWhereInput
    isNot?: InstanceTemplateWhereInput
  }

  export type InstanceOsTemplateCountOrderByAggregateInput = {
    templateId?: SortOrder
    osId?: SortOrder
    instanceId?: SortOrder
  }

  export type InstanceOsTemplateAvgOrderByAggregateInput = {
    templateId?: SortOrder
    osId?: SortOrder
    instanceId?: SortOrder
  }

  export type InstanceOsTemplateMaxOrderByAggregateInput = {
    templateId?: SortOrder
    osId?: SortOrder
    instanceId?: SortOrder
  }

  export type InstanceOsTemplateMinOrderByAggregateInput = {
    templateId?: SortOrder
    osId?: SortOrder
    instanceId?: SortOrder
  }

  export type InstanceOsTemplateSumOrderByAggregateInput = {
    templateId?: SortOrder
    osId?: SortOrder
    instanceId?: SortOrder
  }

  export type InstanceInfoCountOrderByAggregateInput = {
    instanceId?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    machineState?: SortOrder
    ipAddr?: SortOrder
    createDate?: SortOrder
    expireDate?: SortOrder
    updateBy?: SortOrder
    updateDate?: SortOrder
  }

  export type InstanceInfoAvgOrderByAggregateInput = {
    instanceId?: SortOrder
    requestId?: SortOrder
  }

  export type InstanceInfoMaxOrderByAggregateInput = {
    instanceId?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    machineState?: SortOrder
    ipAddr?: SortOrder
    createDate?: SortOrder
    expireDate?: SortOrder
    updateBy?: SortOrder
    updateDate?: SortOrder
  }

  export type InstanceInfoMinOrderByAggregateInput = {
    instanceId?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    machineState?: SortOrder
    ipAddr?: SortOrder
    createDate?: SortOrder
    expireDate?: SortOrder
    updateBy?: SortOrder
    updateDate?: SortOrder
  }

  export type InstanceInfoSumOrderByAggregateInput = {
    instanceId?: SortOrder
    requestId?: SortOrder
  }

  export type NotificationInfoCountOrderByAggregateInput = {
    notificationId?: SortOrder
    requestId?: SortOrder
    sendDate?: SortOrder
    isSend?: SortOrder
    messageSubject?: SortOrder
    message?: SortOrder
  }

  export type NotificationInfoAvgOrderByAggregateInput = {
    notificationId?: SortOrder
    requestId?: SortOrder
  }

  export type NotificationInfoMaxOrderByAggregateInput = {
    notificationId?: SortOrder
    requestId?: SortOrder
    sendDate?: SortOrder
    isSend?: SortOrder
    messageSubject?: SortOrder
    message?: SortOrder
  }

  export type NotificationInfoMinOrderByAggregateInput = {
    notificationId?: SortOrder
    requestId?: SortOrder
    sendDate?: SortOrder
    isSend?: SortOrder
    messageSubject?: SortOrder
    message?: SortOrder
  }

  export type NotificationInfoSumOrderByAggregateInput = {
    notificationId?: SortOrder
    requestId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type RequestInfoCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestInfoCreateWithoutUserInput, RequestInfoUncheckedCreateWithoutUserInput> | RequestInfoCreateWithoutUserInput[] | RequestInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestInfoCreateOrConnectWithoutUserInput | RequestInfoCreateOrConnectWithoutUserInput[]
    createMany?: RequestInfoCreateManyUserInputEnvelope
    connect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
  }

  export type InstanceInfoCreateNestedManyWithoutUserInput = {
    create?: XOR<InstanceInfoCreateWithoutUserInput, InstanceInfoUncheckedCreateWithoutUserInput> | InstanceInfoCreateWithoutUserInput[] | InstanceInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InstanceInfoCreateOrConnectWithoutUserInput | InstanceInfoCreateOrConnectWithoutUserInput[]
    createMany?: InstanceInfoCreateManyUserInputEnvelope
    connect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
  }

  export type RequestEditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestEditLogCreateWithoutUserInput, RequestEditLogUncheckedCreateWithoutUserInput> | RequestEditLogCreateWithoutUserInput[] | RequestEditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestEditLogCreateOrConnectWithoutUserInput | RequestEditLogCreateOrConnectWithoutUserInput[]
    createMany?: RequestEditLogCreateManyUserInputEnvelope
    connect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type RequestInfoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestInfoCreateWithoutUserInput, RequestInfoUncheckedCreateWithoutUserInput> | RequestInfoCreateWithoutUserInput[] | RequestInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestInfoCreateOrConnectWithoutUserInput | RequestInfoCreateOrConnectWithoutUserInput[]
    createMany?: RequestInfoCreateManyUserInputEnvelope
    connect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
  }

  export type InstanceInfoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InstanceInfoCreateWithoutUserInput, InstanceInfoUncheckedCreateWithoutUserInput> | InstanceInfoCreateWithoutUserInput[] | InstanceInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InstanceInfoCreateOrConnectWithoutUserInput | InstanceInfoCreateOrConnectWithoutUserInput[]
    createMany?: InstanceInfoCreateManyUserInputEnvelope
    connect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
  }

  export type RequestEditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestEditLogCreateWithoutUserInput, RequestEditLogUncheckedCreateWithoutUserInput> | RequestEditLogCreateWithoutUserInput[] | RequestEditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestEditLogCreateOrConnectWithoutUserInput | RequestEditLogCreateOrConnectWithoutUserInput[]
    createMany?: RequestEditLogCreateManyUserInputEnvelope
    connect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type RequestInfoUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestInfoCreateWithoutUserInput, RequestInfoUncheckedCreateWithoutUserInput> | RequestInfoCreateWithoutUserInput[] | RequestInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestInfoCreateOrConnectWithoutUserInput | RequestInfoCreateOrConnectWithoutUserInput[]
    upsert?: RequestInfoUpsertWithWhereUniqueWithoutUserInput | RequestInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestInfoCreateManyUserInputEnvelope
    set?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    disconnect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    delete?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    connect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    update?: RequestInfoUpdateWithWhereUniqueWithoutUserInput | RequestInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestInfoUpdateManyWithWhereWithoutUserInput | RequestInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestInfoScalarWhereInput | RequestInfoScalarWhereInput[]
  }

  export type InstanceInfoUpdateManyWithoutUserNestedInput = {
    create?: XOR<InstanceInfoCreateWithoutUserInput, InstanceInfoUncheckedCreateWithoutUserInput> | InstanceInfoCreateWithoutUserInput[] | InstanceInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InstanceInfoCreateOrConnectWithoutUserInput | InstanceInfoCreateOrConnectWithoutUserInput[]
    upsert?: InstanceInfoUpsertWithWhereUniqueWithoutUserInput | InstanceInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InstanceInfoCreateManyUserInputEnvelope
    set?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    disconnect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    delete?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    connect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    update?: InstanceInfoUpdateWithWhereUniqueWithoutUserInput | InstanceInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InstanceInfoUpdateManyWithWhereWithoutUserInput | InstanceInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InstanceInfoScalarWhereInput | InstanceInfoScalarWhereInput[]
  }

  export type RequestEditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestEditLogCreateWithoutUserInput, RequestEditLogUncheckedCreateWithoutUserInput> | RequestEditLogCreateWithoutUserInput[] | RequestEditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestEditLogCreateOrConnectWithoutUserInput | RequestEditLogCreateOrConnectWithoutUserInput[]
    upsert?: RequestEditLogUpsertWithWhereUniqueWithoutUserInput | RequestEditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestEditLogCreateManyUserInputEnvelope
    set?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    disconnect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    delete?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    connect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    update?: RequestEditLogUpdateWithWhereUniqueWithoutUserInput | RequestEditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestEditLogUpdateManyWithWhereWithoutUserInput | RequestEditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestEditLogScalarWhereInput | RequestEditLogScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type RequestInfoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestInfoCreateWithoutUserInput, RequestInfoUncheckedCreateWithoutUserInput> | RequestInfoCreateWithoutUserInput[] | RequestInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestInfoCreateOrConnectWithoutUserInput | RequestInfoCreateOrConnectWithoutUserInput[]
    upsert?: RequestInfoUpsertWithWhereUniqueWithoutUserInput | RequestInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestInfoCreateManyUserInputEnvelope
    set?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    disconnect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    delete?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    connect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    update?: RequestInfoUpdateWithWhereUniqueWithoutUserInput | RequestInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestInfoUpdateManyWithWhereWithoutUserInput | RequestInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestInfoScalarWhereInput | RequestInfoScalarWhereInput[]
  }

  export type InstanceInfoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InstanceInfoCreateWithoutUserInput, InstanceInfoUncheckedCreateWithoutUserInput> | InstanceInfoCreateWithoutUserInput[] | InstanceInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InstanceInfoCreateOrConnectWithoutUserInput | InstanceInfoCreateOrConnectWithoutUserInput[]
    upsert?: InstanceInfoUpsertWithWhereUniqueWithoutUserInput | InstanceInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InstanceInfoCreateManyUserInputEnvelope
    set?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    disconnect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    delete?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    connect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    update?: InstanceInfoUpdateWithWhereUniqueWithoutUserInput | InstanceInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InstanceInfoUpdateManyWithWhereWithoutUserInput | InstanceInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InstanceInfoScalarWhereInput | InstanceInfoScalarWhereInput[]
  }

  export type RequestEditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestEditLogCreateWithoutUserInput, RequestEditLogUncheckedCreateWithoutUserInput> | RequestEditLogCreateWithoutUserInput[] | RequestEditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestEditLogCreateOrConnectWithoutUserInput | RequestEditLogCreateOrConnectWithoutUserInput[]
    upsert?: RequestEditLogUpsertWithWhereUniqueWithoutUserInput | RequestEditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestEditLogCreateManyUserInputEnvelope
    set?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    disconnect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    delete?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    connect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    update?: RequestEditLogUpdateWithWhereUniqueWithoutUserInput | RequestEditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestEditLogUpdateManyWithWhereWithoutUserInput | RequestEditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestEditLogScalarWhereInput | RequestEditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type InstanceOsTemplateCreateNestedOneWithoutRequestsInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutRequestsInput, InstanceOsTemplateUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutRequestsInput
    connect?: InstanceOsTemplateWhereUniqueInput
  }

  export type NotificationInfoCreateNestedManyWithoutRequestInput = {
    create?: XOR<NotificationInfoCreateWithoutRequestInput, NotificationInfoUncheckedCreateWithoutRequestInput> | NotificationInfoCreateWithoutRequestInput[] | NotificationInfoUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: NotificationInfoCreateOrConnectWithoutRequestInput | NotificationInfoCreateOrConnectWithoutRequestInput[]
    createMany?: NotificationInfoCreateManyRequestInputEnvelope
    connect?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
  }

  export type RequestEditLogCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestEditLogCreateWithoutRequestInput, RequestEditLogUncheckedCreateWithoutRequestInput> | RequestEditLogCreateWithoutRequestInput[] | RequestEditLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestEditLogCreateOrConnectWithoutRequestInput | RequestEditLogCreateOrConnectWithoutRequestInput[]
    createMany?: RequestEditLogCreateManyRequestInputEnvelope
    connect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
  }

  export type InstanceInfoCreateNestedManyWithoutRequestInput = {
    create?: XOR<InstanceInfoCreateWithoutRequestInput, InstanceInfoUncheckedCreateWithoutRequestInput> | InstanceInfoCreateWithoutRequestInput[] | InstanceInfoUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: InstanceInfoCreateOrConnectWithoutRequestInput | InstanceInfoCreateOrConnectWithoutRequestInput[]
    createMany?: InstanceInfoCreateManyRequestInputEnvelope
    connect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
  }

  export type NotificationInfoUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<NotificationInfoCreateWithoutRequestInput, NotificationInfoUncheckedCreateWithoutRequestInput> | NotificationInfoCreateWithoutRequestInput[] | NotificationInfoUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: NotificationInfoCreateOrConnectWithoutRequestInput | NotificationInfoCreateOrConnectWithoutRequestInput[]
    createMany?: NotificationInfoCreateManyRequestInputEnvelope
    connect?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
  }

  export type RequestEditLogUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestEditLogCreateWithoutRequestInput, RequestEditLogUncheckedCreateWithoutRequestInput> | RequestEditLogCreateWithoutRequestInput[] | RequestEditLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestEditLogCreateOrConnectWithoutRequestInput | RequestEditLogCreateOrConnectWithoutRequestInput[]
    createMany?: RequestEditLogCreateManyRequestInputEnvelope
    connect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
  }

  export type InstanceInfoUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<InstanceInfoCreateWithoutRequestInput, InstanceInfoUncheckedCreateWithoutRequestInput> | InstanceInfoCreateWithoutRequestInput[] | InstanceInfoUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: InstanceInfoCreateOrConnectWithoutRequestInput | InstanceInfoCreateOrConnectWithoutRequestInput[]
    createMany?: InstanceInfoCreateManyRequestInputEnvelope
    connect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type InstanceOsTemplateUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutRequestsInput, InstanceOsTemplateUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutRequestsInput
    upsert?: InstanceOsTemplateUpsertWithoutRequestsInput
    connect?: InstanceOsTemplateWhereUniqueInput
    update?: XOR<XOR<InstanceOsTemplateUpdateToOneWithWhereWithoutRequestsInput, InstanceOsTemplateUpdateWithoutRequestsInput>, InstanceOsTemplateUncheckedUpdateWithoutRequestsInput>
  }

  export type NotificationInfoUpdateManyWithoutRequestNestedInput = {
    create?: XOR<NotificationInfoCreateWithoutRequestInput, NotificationInfoUncheckedCreateWithoutRequestInput> | NotificationInfoCreateWithoutRequestInput[] | NotificationInfoUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: NotificationInfoCreateOrConnectWithoutRequestInput | NotificationInfoCreateOrConnectWithoutRequestInput[]
    upsert?: NotificationInfoUpsertWithWhereUniqueWithoutRequestInput | NotificationInfoUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: NotificationInfoCreateManyRequestInputEnvelope
    set?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
    disconnect?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
    delete?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
    connect?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
    update?: NotificationInfoUpdateWithWhereUniqueWithoutRequestInput | NotificationInfoUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: NotificationInfoUpdateManyWithWhereWithoutRequestInput | NotificationInfoUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: NotificationInfoScalarWhereInput | NotificationInfoScalarWhereInput[]
  }

  export type RequestEditLogUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestEditLogCreateWithoutRequestInput, RequestEditLogUncheckedCreateWithoutRequestInput> | RequestEditLogCreateWithoutRequestInput[] | RequestEditLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestEditLogCreateOrConnectWithoutRequestInput | RequestEditLogCreateOrConnectWithoutRequestInput[]
    upsert?: RequestEditLogUpsertWithWhereUniqueWithoutRequestInput | RequestEditLogUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestEditLogCreateManyRequestInputEnvelope
    set?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    disconnect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    delete?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    connect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    update?: RequestEditLogUpdateWithWhereUniqueWithoutRequestInput | RequestEditLogUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestEditLogUpdateManyWithWhereWithoutRequestInput | RequestEditLogUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestEditLogScalarWhereInput | RequestEditLogScalarWhereInput[]
  }

  export type InstanceInfoUpdateManyWithoutRequestNestedInput = {
    create?: XOR<InstanceInfoCreateWithoutRequestInput, InstanceInfoUncheckedCreateWithoutRequestInput> | InstanceInfoCreateWithoutRequestInput[] | InstanceInfoUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: InstanceInfoCreateOrConnectWithoutRequestInput | InstanceInfoCreateOrConnectWithoutRequestInput[]
    upsert?: InstanceInfoUpsertWithWhereUniqueWithoutRequestInput | InstanceInfoUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: InstanceInfoCreateManyRequestInputEnvelope
    set?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    disconnect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    delete?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    connect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    update?: InstanceInfoUpdateWithWhereUniqueWithoutRequestInput | InstanceInfoUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: InstanceInfoUpdateManyWithWhereWithoutRequestInput | InstanceInfoUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: InstanceInfoScalarWhereInput | InstanceInfoScalarWhereInput[]
  }

  export type NotificationInfoUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<NotificationInfoCreateWithoutRequestInput, NotificationInfoUncheckedCreateWithoutRequestInput> | NotificationInfoCreateWithoutRequestInput[] | NotificationInfoUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: NotificationInfoCreateOrConnectWithoutRequestInput | NotificationInfoCreateOrConnectWithoutRequestInput[]
    upsert?: NotificationInfoUpsertWithWhereUniqueWithoutRequestInput | NotificationInfoUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: NotificationInfoCreateManyRequestInputEnvelope
    set?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
    disconnect?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
    delete?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
    connect?: NotificationInfoWhereUniqueInput | NotificationInfoWhereUniqueInput[]
    update?: NotificationInfoUpdateWithWhereUniqueWithoutRequestInput | NotificationInfoUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: NotificationInfoUpdateManyWithWhereWithoutRequestInput | NotificationInfoUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: NotificationInfoScalarWhereInput | NotificationInfoScalarWhereInput[]
  }

  export type RequestEditLogUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestEditLogCreateWithoutRequestInput, RequestEditLogUncheckedCreateWithoutRequestInput> | RequestEditLogCreateWithoutRequestInput[] | RequestEditLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestEditLogCreateOrConnectWithoutRequestInput | RequestEditLogCreateOrConnectWithoutRequestInput[]
    upsert?: RequestEditLogUpsertWithWhereUniqueWithoutRequestInput | RequestEditLogUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestEditLogCreateManyRequestInputEnvelope
    set?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    disconnect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    delete?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    connect?: RequestEditLogWhereUniqueInput | RequestEditLogWhereUniqueInput[]
    update?: RequestEditLogUpdateWithWhereUniqueWithoutRequestInput | RequestEditLogUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestEditLogUpdateManyWithWhereWithoutRequestInput | RequestEditLogUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestEditLogScalarWhereInput | RequestEditLogScalarWhereInput[]
  }

  export type InstanceInfoUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<InstanceInfoCreateWithoutRequestInput, InstanceInfoUncheckedCreateWithoutRequestInput> | InstanceInfoCreateWithoutRequestInput[] | InstanceInfoUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: InstanceInfoCreateOrConnectWithoutRequestInput | InstanceInfoCreateOrConnectWithoutRequestInput[]
    upsert?: InstanceInfoUpsertWithWhereUniqueWithoutRequestInput | InstanceInfoUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: InstanceInfoCreateManyRequestInputEnvelope
    set?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    disconnect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    delete?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    connect?: InstanceInfoWhereUniqueInput | InstanceInfoWhereUniqueInput[]
    update?: InstanceInfoUpdateWithWhereUniqueWithoutRequestInput | InstanceInfoUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: InstanceInfoUpdateManyWithWhereWithoutRequestInput | InstanceInfoUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: InstanceInfoScalarWhereInput | InstanceInfoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEditLogsInput = {
    create?: XOR<UserCreateWithoutEditLogsInput, UserUncheckedCreateWithoutEditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type RequestInfoCreateNestedOneWithoutEditLogsInput = {
    create?: XOR<RequestInfoCreateWithoutEditLogsInput, RequestInfoUncheckedCreateWithoutEditLogsInput>
    connectOrCreate?: RequestInfoCreateOrConnectWithoutEditLogsInput
    connect?: RequestInfoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEditLogsNestedInput = {
    create?: XOR<UserCreateWithoutEditLogsInput, UserUncheckedCreateWithoutEditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditLogsInput
    upsert?: UserUpsertWithoutEditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEditLogsInput, UserUpdateWithoutEditLogsInput>, UserUncheckedUpdateWithoutEditLogsInput>
  }

  export type RequestInfoUpdateOneRequiredWithoutEditLogsNestedInput = {
    create?: XOR<RequestInfoCreateWithoutEditLogsInput, RequestInfoUncheckedCreateWithoutEditLogsInput>
    connectOrCreate?: RequestInfoCreateOrConnectWithoutEditLogsInput
    upsert?: RequestInfoUpsertWithoutEditLogsInput
    connect?: RequestInfoWhereUniqueInput
    update?: XOR<XOR<RequestInfoUpdateToOneWithWhereWithoutEditLogsInput, RequestInfoUpdateWithoutEditLogsInput>, RequestInfoUncheckedUpdateWithoutEditLogsInput>
  }

  export type InstanceOsTemplateCreateNestedManyWithoutInstanceInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutInstanceInput, InstanceOsTemplateUncheckedCreateWithoutInstanceInput> | InstanceOsTemplateCreateWithoutInstanceInput[] | InstanceOsTemplateUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutInstanceInput | InstanceOsTemplateCreateOrConnectWithoutInstanceInput[]
    createMany?: InstanceOsTemplateCreateManyInstanceInputEnvelope
    connect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
  }

  export type InstanceOsTemplateUncheckedCreateNestedManyWithoutInstanceInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutInstanceInput, InstanceOsTemplateUncheckedCreateWithoutInstanceInput> | InstanceOsTemplateCreateWithoutInstanceInput[] | InstanceOsTemplateUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutInstanceInput | InstanceOsTemplateCreateOrConnectWithoutInstanceInput[]
    createMany?: InstanceOsTemplateCreateManyInstanceInputEnvelope
    connect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
  }

  export type InstanceOsTemplateUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutInstanceInput, InstanceOsTemplateUncheckedCreateWithoutInstanceInput> | InstanceOsTemplateCreateWithoutInstanceInput[] | InstanceOsTemplateUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutInstanceInput | InstanceOsTemplateCreateOrConnectWithoutInstanceInput[]
    upsert?: InstanceOsTemplateUpsertWithWhereUniqueWithoutInstanceInput | InstanceOsTemplateUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: InstanceOsTemplateCreateManyInstanceInputEnvelope
    set?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    disconnect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    delete?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    connect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    update?: InstanceOsTemplateUpdateWithWhereUniqueWithoutInstanceInput | InstanceOsTemplateUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: InstanceOsTemplateUpdateManyWithWhereWithoutInstanceInput | InstanceOsTemplateUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: InstanceOsTemplateScalarWhereInput | InstanceOsTemplateScalarWhereInput[]
  }

  export type InstanceOsTemplateUncheckedUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutInstanceInput, InstanceOsTemplateUncheckedCreateWithoutInstanceInput> | InstanceOsTemplateCreateWithoutInstanceInput[] | InstanceOsTemplateUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutInstanceInput | InstanceOsTemplateCreateOrConnectWithoutInstanceInput[]
    upsert?: InstanceOsTemplateUpsertWithWhereUniqueWithoutInstanceInput | InstanceOsTemplateUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: InstanceOsTemplateCreateManyInstanceInputEnvelope
    set?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    disconnect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    delete?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    connect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    update?: InstanceOsTemplateUpdateWithWhereUniqueWithoutInstanceInput | InstanceOsTemplateUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: InstanceOsTemplateUpdateManyWithWhereWithoutInstanceInput | InstanceOsTemplateUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: InstanceOsTemplateScalarWhereInput | InstanceOsTemplateScalarWhereInput[]
  }

  export type InstanceOsTemplateCreateNestedManyWithoutOsTemplateInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutOsTemplateInput, InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput> | InstanceOsTemplateCreateWithoutOsTemplateInput[] | InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput[]
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutOsTemplateInput | InstanceOsTemplateCreateOrConnectWithoutOsTemplateInput[]
    createMany?: InstanceOsTemplateCreateManyOsTemplateInputEnvelope
    connect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
  }

  export type InstanceOsTemplateUncheckedCreateNestedManyWithoutOsTemplateInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutOsTemplateInput, InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput> | InstanceOsTemplateCreateWithoutOsTemplateInput[] | InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput[]
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutOsTemplateInput | InstanceOsTemplateCreateOrConnectWithoutOsTemplateInput[]
    createMany?: InstanceOsTemplateCreateManyOsTemplateInputEnvelope
    connect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
  }

  export type InstanceOsTemplateUpdateManyWithoutOsTemplateNestedInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutOsTemplateInput, InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput> | InstanceOsTemplateCreateWithoutOsTemplateInput[] | InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput[]
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutOsTemplateInput | InstanceOsTemplateCreateOrConnectWithoutOsTemplateInput[]
    upsert?: InstanceOsTemplateUpsertWithWhereUniqueWithoutOsTemplateInput | InstanceOsTemplateUpsertWithWhereUniqueWithoutOsTemplateInput[]
    createMany?: InstanceOsTemplateCreateManyOsTemplateInputEnvelope
    set?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    disconnect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    delete?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    connect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    update?: InstanceOsTemplateUpdateWithWhereUniqueWithoutOsTemplateInput | InstanceOsTemplateUpdateWithWhereUniqueWithoutOsTemplateInput[]
    updateMany?: InstanceOsTemplateUpdateManyWithWhereWithoutOsTemplateInput | InstanceOsTemplateUpdateManyWithWhereWithoutOsTemplateInput[]
    deleteMany?: InstanceOsTemplateScalarWhereInput | InstanceOsTemplateScalarWhereInput[]
  }

  export type InstanceOsTemplateUncheckedUpdateManyWithoutOsTemplateNestedInput = {
    create?: XOR<InstanceOsTemplateCreateWithoutOsTemplateInput, InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput> | InstanceOsTemplateCreateWithoutOsTemplateInput[] | InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput[]
    connectOrCreate?: InstanceOsTemplateCreateOrConnectWithoutOsTemplateInput | InstanceOsTemplateCreateOrConnectWithoutOsTemplateInput[]
    upsert?: InstanceOsTemplateUpsertWithWhereUniqueWithoutOsTemplateInput | InstanceOsTemplateUpsertWithWhereUniqueWithoutOsTemplateInput[]
    createMany?: InstanceOsTemplateCreateManyOsTemplateInputEnvelope
    set?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    disconnect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    delete?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    connect?: InstanceOsTemplateWhereUniqueInput | InstanceOsTemplateWhereUniqueInput[]
    update?: InstanceOsTemplateUpdateWithWhereUniqueWithoutOsTemplateInput | InstanceOsTemplateUpdateWithWhereUniqueWithoutOsTemplateInput[]
    updateMany?: InstanceOsTemplateUpdateManyWithWhereWithoutOsTemplateInput | InstanceOsTemplateUpdateManyWithWhereWithoutOsTemplateInput[]
    deleteMany?: InstanceOsTemplateScalarWhereInput | InstanceOsTemplateScalarWhereInput[]
  }

  export type OsTemplateCreateNestedOneWithoutInstancesOsInput = {
    create?: XOR<OsTemplateCreateWithoutInstancesOsInput, OsTemplateUncheckedCreateWithoutInstancesOsInput>
    connectOrCreate?: OsTemplateCreateOrConnectWithoutInstancesOsInput
    connect?: OsTemplateWhereUniqueInput
  }

  export type InstanceTemplateCreateNestedOneWithoutOsTemplatesInput = {
    create?: XOR<InstanceTemplateCreateWithoutOsTemplatesInput, InstanceTemplateUncheckedCreateWithoutOsTemplatesInput>
    connectOrCreate?: InstanceTemplateCreateOrConnectWithoutOsTemplatesInput
    connect?: InstanceTemplateWhereUniqueInput
  }

  export type RequestInfoCreateNestedManyWithoutTemplateInput = {
    create?: XOR<RequestInfoCreateWithoutTemplateInput, RequestInfoUncheckedCreateWithoutTemplateInput> | RequestInfoCreateWithoutTemplateInput[] | RequestInfoUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: RequestInfoCreateOrConnectWithoutTemplateInput | RequestInfoCreateOrConnectWithoutTemplateInput[]
    createMany?: RequestInfoCreateManyTemplateInputEnvelope
    connect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
  }

  export type RequestInfoUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<RequestInfoCreateWithoutTemplateInput, RequestInfoUncheckedCreateWithoutTemplateInput> | RequestInfoCreateWithoutTemplateInput[] | RequestInfoUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: RequestInfoCreateOrConnectWithoutTemplateInput | RequestInfoCreateOrConnectWithoutTemplateInput[]
    createMany?: RequestInfoCreateManyTemplateInputEnvelope
    connect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
  }

  export type OsTemplateUpdateOneRequiredWithoutInstancesOsNestedInput = {
    create?: XOR<OsTemplateCreateWithoutInstancesOsInput, OsTemplateUncheckedCreateWithoutInstancesOsInput>
    connectOrCreate?: OsTemplateCreateOrConnectWithoutInstancesOsInput
    upsert?: OsTemplateUpsertWithoutInstancesOsInput
    connect?: OsTemplateWhereUniqueInput
    update?: XOR<XOR<OsTemplateUpdateToOneWithWhereWithoutInstancesOsInput, OsTemplateUpdateWithoutInstancesOsInput>, OsTemplateUncheckedUpdateWithoutInstancesOsInput>
  }

  export type InstanceTemplateUpdateOneRequiredWithoutOsTemplatesNestedInput = {
    create?: XOR<InstanceTemplateCreateWithoutOsTemplatesInput, InstanceTemplateUncheckedCreateWithoutOsTemplatesInput>
    connectOrCreate?: InstanceTemplateCreateOrConnectWithoutOsTemplatesInput
    upsert?: InstanceTemplateUpsertWithoutOsTemplatesInput
    connect?: InstanceTemplateWhereUniqueInput
    update?: XOR<XOR<InstanceTemplateUpdateToOneWithWhereWithoutOsTemplatesInput, InstanceTemplateUpdateWithoutOsTemplatesInput>, InstanceTemplateUncheckedUpdateWithoutOsTemplatesInput>
  }

  export type RequestInfoUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<RequestInfoCreateWithoutTemplateInput, RequestInfoUncheckedCreateWithoutTemplateInput> | RequestInfoCreateWithoutTemplateInput[] | RequestInfoUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: RequestInfoCreateOrConnectWithoutTemplateInput | RequestInfoCreateOrConnectWithoutTemplateInput[]
    upsert?: RequestInfoUpsertWithWhereUniqueWithoutTemplateInput | RequestInfoUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: RequestInfoCreateManyTemplateInputEnvelope
    set?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    disconnect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    delete?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    connect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    update?: RequestInfoUpdateWithWhereUniqueWithoutTemplateInput | RequestInfoUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: RequestInfoUpdateManyWithWhereWithoutTemplateInput | RequestInfoUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: RequestInfoScalarWhereInput | RequestInfoScalarWhereInput[]
  }

  export type RequestInfoUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<RequestInfoCreateWithoutTemplateInput, RequestInfoUncheckedCreateWithoutTemplateInput> | RequestInfoCreateWithoutTemplateInput[] | RequestInfoUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: RequestInfoCreateOrConnectWithoutTemplateInput | RequestInfoCreateOrConnectWithoutTemplateInput[]
    upsert?: RequestInfoUpsertWithWhereUniqueWithoutTemplateInput | RequestInfoUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: RequestInfoCreateManyTemplateInputEnvelope
    set?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    disconnect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    delete?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    connect?: RequestInfoWhereUniqueInput | RequestInfoWhereUniqueInput[]
    update?: RequestInfoUpdateWithWhereUniqueWithoutTemplateInput | RequestInfoUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: RequestInfoUpdateManyWithWhereWithoutTemplateInput | RequestInfoUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: RequestInfoScalarWhereInput | RequestInfoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInstancesInput = {
    create?: XOR<UserCreateWithoutInstancesInput, UserUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstancesInput
    connect?: UserWhereUniqueInput
  }

  export type RequestInfoCreateNestedOneWithoutInstancesInput = {
    create?: XOR<RequestInfoCreateWithoutInstancesInput, RequestInfoUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: RequestInfoCreateOrConnectWithoutInstancesInput
    connect?: RequestInfoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: XOR<UserCreateWithoutInstancesInput, UserUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstancesInput
    upsert?: UserUpsertWithoutInstancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstancesInput, UserUpdateWithoutInstancesInput>, UserUncheckedUpdateWithoutInstancesInput>
  }

  export type RequestInfoUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: XOR<RequestInfoCreateWithoutInstancesInput, RequestInfoUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: RequestInfoCreateOrConnectWithoutInstancesInput
    upsert?: RequestInfoUpsertWithoutInstancesInput
    connect?: RequestInfoWhereUniqueInput
    update?: XOR<XOR<RequestInfoUpdateToOneWithWhereWithoutInstancesInput, RequestInfoUpdateWithoutInstancesInput>, RequestInfoUncheckedUpdateWithoutInstancesInput>
  }

  export type RequestInfoCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<RequestInfoCreateWithoutNotificationsInput, RequestInfoUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: RequestInfoCreateOrConnectWithoutNotificationsInput
    connect?: RequestInfoWhereUniqueInput
  }

  export type RequestInfoUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<RequestInfoCreateWithoutNotificationsInput, RequestInfoUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: RequestInfoCreateOrConnectWithoutNotificationsInput
    upsert?: RequestInfoUpsertWithoutNotificationsInput
    connect?: RequestInfoWhereUniqueInput
    update?: XOR<XOR<RequestInfoUpdateToOneWithWhereWithoutNotificationsInput, RequestInfoUpdateWithoutNotificationsInput>, RequestInfoUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoCreateNestedManyWithoutUserInput
    instances?: InstanceInfoCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoUncheckedCreateNestedManyWithoutUserInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUncheckedUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoCreateNestedManyWithoutUserInput
    instances?: InstanceInfoCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoUncheckedCreateNestedManyWithoutUserInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUncheckedUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type RequestInfoCreateWithoutUserInput = {
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    template: InstanceOsTemplateCreateNestedOneWithoutRequestsInput
    notifications?: NotificationInfoCreateNestedManyWithoutRequestInput
    editLogs?: RequestEditLogCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoUncheckedCreateWithoutUserInput = {
    requestId?: number
    templateId: number
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    notifications?: NotificationInfoUncheckedCreateNestedManyWithoutRequestInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoCreateOrConnectWithoutUserInput = {
    where: RequestInfoWhereUniqueInput
    create: XOR<RequestInfoCreateWithoutUserInput, RequestInfoUncheckedCreateWithoutUserInput>
  }

  export type RequestInfoCreateManyUserInputEnvelope = {
    data: RequestInfoCreateManyUserInput | RequestInfoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InstanceInfoCreateWithoutUserInput = {
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date | string
    expireDate: Date | string
    updateBy: string
    updateDate: Date | string
    request: RequestInfoCreateNestedOneWithoutInstancesInput
  }

  export type InstanceInfoUncheckedCreateWithoutUserInput = {
    instanceId?: number
    requestId: number
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date | string
    expireDate: Date | string
    updateBy: string
    updateDate: Date | string
  }

  export type InstanceInfoCreateOrConnectWithoutUserInput = {
    where: InstanceInfoWhereUniqueInput
    create: XOR<InstanceInfoCreateWithoutUserInput, InstanceInfoUncheckedCreateWithoutUserInput>
  }

  export type InstanceInfoCreateManyUserInputEnvelope = {
    data: InstanceInfoCreateManyUserInput | InstanceInfoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RequestEditLogCreateWithoutUserInput = {
    jsonData: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
    request: RequestInfoCreateNestedOneWithoutEditLogsInput
  }

  export type RequestEditLogUncheckedCreateWithoutUserInput = {
    logNo?: number
    requestId: number
    jsonData: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type RequestEditLogCreateOrConnectWithoutUserInput = {
    where: RequestEditLogWhereUniqueInput
    create: XOR<RequestEditLogCreateWithoutUserInput, RequestEditLogUncheckedCreateWithoutUserInput>
  }

  export type RequestEditLogCreateManyUserInputEnvelope = {
    data: RequestEditLogCreateManyUserInput | RequestEditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type RequestInfoUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestInfoWhereUniqueInput
    update: XOR<RequestInfoUpdateWithoutUserInput, RequestInfoUncheckedUpdateWithoutUserInput>
    create: XOR<RequestInfoCreateWithoutUserInput, RequestInfoUncheckedCreateWithoutUserInput>
  }

  export type RequestInfoUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestInfoWhereUniqueInput
    data: XOR<RequestInfoUpdateWithoutUserInput, RequestInfoUncheckedUpdateWithoutUserInput>
  }

  export type RequestInfoUpdateManyWithWhereWithoutUserInput = {
    where: RequestInfoScalarWhereInput
    data: XOR<RequestInfoUpdateManyMutationInput, RequestInfoUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestInfoScalarWhereInput = {
    AND?: RequestInfoScalarWhereInput | RequestInfoScalarWhereInput[]
    OR?: RequestInfoScalarWhereInput[]
    NOT?: RequestInfoScalarWhereInput | RequestInfoScalarWhereInput[]
    requestId?: IntFilter<"RequestInfo"> | number
    userId?: StringFilter<"RequestInfo"> | string
    templateId?: IntFilter<"RequestInfo"> | number
    instantName?: StringFilter<"RequestInfo"> | string
    requestStatus?: StringFilter<"RequestInfo"> | string
    requestDate?: DateTimeFilter<"RequestInfo"> | Date | string
    endDate?: DateTimeFilter<"RequestInfo"> | Date | string
    lastEditDate?: DateTimeFilter<"RequestInfo"> | Date | string
    note?: StringFilter<"RequestInfo"> | string
    isApprove?: BoolFilter<"RequestInfo"> | boolean
  }

  export type InstanceInfoUpsertWithWhereUniqueWithoutUserInput = {
    where: InstanceInfoWhereUniqueInput
    update: XOR<InstanceInfoUpdateWithoutUserInput, InstanceInfoUncheckedUpdateWithoutUserInput>
    create: XOR<InstanceInfoCreateWithoutUserInput, InstanceInfoUncheckedCreateWithoutUserInput>
  }

  export type InstanceInfoUpdateWithWhereUniqueWithoutUserInput = {
    where: InstanceInfoWhereUniqueInput
    data: XOR<InstanceInfoUpdateWithoutUserInput, InstanceInfoUncheckedUpdateWithoutUserInput>
  }

  export type InstanceInfoUpdateManyWithWhereWithoutUserInput = {
    where: InstanceInfoScalarWhereInput
    data: XOR<InstanceInfoUpdateManyMutationInput, InstanceInfoUncheckedUpdateManyWithoutUserInput>
  }

  export type InstanceInfoScalarWhereInput = {
    AND?: InstanceInfoScalarWhereInput | InstanceInfoScalarWhereInput[]
    OR?: InstanceInfoScalarWhereInput[]
    NOT?: InstanceInfoScalarWhereInput | InstanceInfoScalarWhereInput[]
    instanceId?: IntFilter<"InstanceInfo"> | number
    userId?: StringFilter<"InstanceInfo"> | string
    requestId?: IntFilter<"InstanceInfo"> | number
    username?: StringFilter<"InstanceInfo"> | string
    password?: StringFilter<"InstanceInfo"> | string
    machineState?: StringFilter<"InstanceInfo"> | string
    ipAddr?: StringFilter<"InstanceInfo"> | string
    createDate?: DateTimeFilter<"InstanceInfo"> | Date | string
    expireDate?: DateTimeFilter<"InstanceInfo"> | Date | string
    updateBy?: StringFilter<"InstanceInfo"> | string
    updateDate?: DateTimeFilter<"InstanceInfo"> | Date | string
  }

  export type RequestEditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestEditLogWhereUniqueInput
    update: XOR<RequestEditLogUpdateWithoutUserInput, RequestEditLogUncheckedUpdateWithoutUserInput>
    create: XOR<RequestEditLogCreateWithoutUserInput, RequestEditLogUncheckedCreateWithoutUserInput>
  }

  export type RequestEditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestEditLogWhereUniqueInput
    data: XOR<RequestEditLogUpdateWithoutUserInput, RequestEditLogUncheckedUpdateWithoutUserInput>
  }

  export type RequestEditLogUpdateManyWithWhereWithoutUserInput = {
    where: RequestEditLogScalarWhereInput
    data: XOR<RequestEditLogUpdateManyMutationInput, RequestEditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestEditLogScalarWhereInput = {
    AND?: RequestEditLogScalarWhereInput | RequestEditLogScalarWhereInput[]
    OR?: RequestEditLogScalarWhereInput[]
    NOT?: RequestEditLogScalarWhereInput | RequestEditLogScalarWhereInput[]
    logNo?: IntFilter<"RequestEditLog"> | number
    userId?: StringFilter<"RequestEditLog"> | string
    requestId?: IntFilter<"RequestEditLog"> | number
    jsonData?: JsonFilter<"RequestEditLog">
    timestamp?: DateTimeFilter<"RequestEditLog"> | Date | string
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    requests?: RequestInfoCreateNestedManyWithoutUserInput
    instances?: InstanceInfoCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestInfoUncheckedCreateNestedManyWithoutUserInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    requests?: RequestInfoUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestInfoUncheckedUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    instances?: InstanceInfoCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type InstanceOsTemplateCreateWithoutRequestsInput = {
    osTemplate: OsTemplateCreateNestedOneWithoutInstancesOsInput
    instance: InstanceTemplateCreateNestedOneWithoutOsTemplatesInput
  }

  export type InstanceOsTemplateUncheckedCreateWithoutRequestsInput = {
    templateId?: number
    osId: number
    instanceId: number
  }

  export type InstanceOsTemplateCreateOrConnectWithoutRequestsInput = {
    where: InstanceOsTemplateWhereUniqueInput
    create: XOR<InstanceOsTemplateCreateWithoutRequestsInput, InstanceOsTemplateUncheckedCreateWithoutRequestsInput>
  }

  export type NotificationInfoCreateWithoutRequestInput = {
    sendDate: Date | string
    isSend: boolean
    messageSubject: string
    message: string
  }

  export type NotificationInfoUncheckedCreateWithoutRequestInput = {
    notificationId?: number
    sendDate: Date | string
    isSend: boolean
    messageSubject: string
    message: string
  }

  export type NotificationInfoCreateOrConnectWithoutRequestInput = {
    where: NotificationInfoWhereUniqueInput
    create: XOR<NotificationInfoCreateWithoutRequestInput, NotificationInfoUncheckedCreateWithoutRequestInput>
  }

  export type NotificationInfoCreateManyRequestInputEnvelope = {
    data: NotificationInfoCreateManyRequestInput | NotificationInfoCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type RequestEditLogCreateWithoutRequestInput = {
    jsonData: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
    user: UserCreateNestedOneWithoutEditLogsInput
  }

  export type RequestEditLogUncheckedCreateWithoutRequestInput = {
    logNo?: number
    userId: string
    jsonData: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type RequestEditLogCreateOrConnectWithoutRequestInput = {
    where: RequestEditLogWhereUniqueInput
    create: XOR<RequestEditLogCreateWithoutRequestInput, RequestEditLogUncheckedCreateWithoutRequestInput>
  }

  export type RequestEditLogCreateManyRequestInputEnvelope = {
    data: RequestEditLogCreateManyRequestInput | RequestEditLogCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type InstanceInfoCreateWithoutRequestInput = {
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date | string
    expireDate: Date | string
    updateBy: string
    updateDate: Date | string
    user: UserCreateNestedOneWithoutInstancesInput
  }

  export type InstanceInfoUncheckedCreateWithoutRequestInput = {
    instanceId?: number
    userId: string
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date | string
    expireDate: Date | string
    updateBy: string
    updateDate: Date | string
  }

  export type InstanceInfoCreateOrConnectWithoutRequestInput = {
    where: InstanceInfoWhereUniqueInput
    create: XOR<InstanceInfoCreateWithoutRequestInput, InstanceInfoUncheckedCreateWithoutRequestInput>
  }

  export type InstanceInfoCreateManyRequestInputEnvelope = {
    data: InstanceInfoCreateManyRequestInput | InstanceInfoCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    instances?: InstanceInfoUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InstanceOsTemplateUpsertWithoutRequestsInput = {
    update: XOR<InstanceOsTemplateUpdateWithoutRequestsInput, InstanceOsTemplateUncheckedUpdateWithoutRequestsInput>
    create: XOR<InstanceOsTemplateCreateWithoutRequestsInput, InstanceOsTemplateUncheckedCreateWithoutRequestsInput>
    where?: InstanceOsTemplateWhereInput
  }

  export type InstanceOsTemplateUpdateToOneWithWhereWithoutRequestsInput = {
    where?: InstanceOsTemplateWhereInput
    data: XOR<InstanceOsTemplateUpdateWithoutRequestsInput, InstanceOsTemplateUncheckedUpdateWithoutRequestsInput>
  }

  export type InstanceOsTemplateUpdateWithoutRequestsInput = {
    osTemplate?: OsTemplateUpdateOneRequiredWithoutInstancesOsNestedInput
    instance?: InstanceTemplateUpdateOneRequiredWithoutOsTemplatesNestedInput
  }

  export type InstanceOsTemplateUncheckedUpdateWithoutRequestsInput = {
    templateId?: IntFieldUpdateOperationsInput | number
    osId?: IntFieldUpdateOperationsInput | number
    instanceId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationInfoUpsertWithWhereUniqueWithoutRequestInput = {
    where: NotificationInfoWhereUniqueInput
    update: XOR<NotificationInfoUpdateWithoutRequestInput, NotificationInfoUncheckedUpdateWithoutRequestInput>
    create: XOR<NotificationInfoCreateWithoutRequestInput, NotificationInfoUncheckedCreateWithoutRequestInput>
  }

  export type NotificationInfoUpdateWithWhereUniqueWithoutRequestInput = {
    where: NotificationInfoWhereUniqueInput
    data: XOR<NotificationInfoUpdateWithoutRequestInput, NotificationInfoUncheckedUpdateWithoutRequestInput>
  }

  export type NotificationInfoUpdateManyWithWhereWithoutRequestInput = {
    where: NotificationInfoScalarWhereInput
    data: XOR<NotificationInfoUpdateManyMutationInput, NotificationInfoUncheckedUpdateManyWithoutRequestInput>
  }

  export type NotificationInfoScalarWhereInput = {
    AND?: NotificationInfoScalarWhereInput | NotificationInfoScalarWhereInput[]
    OR?: NotificationInfoScalarWhereInput[]
    NOT?: NotificationInfoScalarWhereInput | NotificationInfoScalarWhereInput[]
    notificationId?: IntFilter<"NotificationInfo"> | number
    requestId?: IntFilter<"NotificationInfo"> | number
    sendDate?: DateTimeFilter<"NotificationInfo"> | Date | string
    isSend?: BoolFilter<"NotificationInfo"> | boolean
    messageSubject?: StringFilter<"NotificationInfo"> | string
    message?: StringFilter<"NotificationInfo"> | string
  }

  export type RequestEditLogUpsertWithWhereUniqueWithoutRequestInput = {
    where: RequestEditLogWhereUniqueInput
    update: XOR<RequestEditLogUpdateWithoutRequestInput, RequestEditLogUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestEditLogCreateWithoutRequestInput, RequestEditLogUncheckedCreateWithoutRequestInput>
  }

  export type RequestEditLogUpdateWithWhereUniqueWithoutRequestInput = {
    where: RequestEditLogWhereUniqueInput
    data: XOR<RequestEditLogUpdateWithoutRequestInput, RequestEditLogUncheckedUpdateWithoutRequestInput>
  }

  export type RequestEditLogUpdateManyWithWhereWithoutRequestInput = {
    where: RequestEditLogScalarWhereInput
    data: XOR<RequestEditLogUpdateManyMutationInput, RequestEditLogUncheckedUpdateManyWithoutRequestInput>
  }

  export type InstanceInfoUpsertWithWhereUniqueWithoutRequestInput = {
    where: InstanceInfoWhereUniqueInput
    update: XOR<InstanceInfoUpdateWithoutRequestInput, InstanceInfoUncheckedUpdateWithoutRequestInput>
    create: XOR<InstanceInfoCreateWithoutRequestInput, InstanceInfoUncheckedCreateWithoutRequestInput>
  }

  export type InstanceInfoUpdateWithWhereUniqueWithoutRequestInput = {
    where: InstanceInfoWhereUniqueInput
    data: XOR<InstanceInfoUpdateWithoutRequestInput, InstanceInfoUncheckedUpdateWithoutRequestInput>
  }

  export type InstanceInfoUpdateManyWithWhereWithoutRequestInput = {
    where: InstanceInfoScalarWhereInput
    data: XOR<InstanceInfoUpdateManyMutationInput, InstanceInfoUncheckedUpdateManyWithoutRequestInput>
  }

  export type UserCreateWithoutEditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoCreateNestedManyWithoutUserInput
    instances?: InstanceInfoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoUncheckedCreateNestedManyWithoutUserInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEditLogsInput, UserUncheckedCreateWithoutEditLogsInput>
  }

  export type RequestInfoCreateWithoutEditLogsInput = {
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    user: UserCreateNestedOneWithoutRequestsInput
    template: InstanceOsTemplateCreateNestedOneWithoutRequestsInput
    notifications?: NotificationInfoCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoUncheckedCreateWithoutEditLogsInput = {
    requestId?: number
    userId: string
    templateId: number
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    notifications?: NotificationInfoUncheckedCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoCreateOrConnectWithoutEditLogsInput = {
    where: RequestInfoWhereUniqueInput
    create: XOR<RequestInfoCreateWithoutEditLogsInput, RequestInfoUncheckedCreateWithoutEditLogsInput>
  }

  export type UserUpsertWithoutEditLogsInput = {
    update: XOR<UserUpdateWithoutEditLogsInput, UserUncheckedUpdateWithoutEditLogsInput>
    create: XOR<UserCreateWithoutEditLogsInput, UserUncheckedCreateWithoutEditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEditLogsInput, UserUncheckedUpdateWithoutEditLogsInput>
  }

  export type UserUpdateWithoutEditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUncheckedUpdateManyWithoutUserNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RequestInfoUpsertWithoutEditLogsInput = {
    update: XOR<RequestInfoUpdateWithoutEditLogsInput, RequestInfoUncheckedUpdateWithoutEditLogsInput>
    create: XOR<RequestInfoCreateWithoutEditLogsInput, RequestInfoUncheckedCreateWithoutEditLogsInput>
    where?: RequestInfoWhereInput
  }

  export type RequestInfoUpdateToOneWithWhereWithoutEditLogsInput = {
    where?: RequestInfoWhereInput
    data: XOR<RequestInfoUpdateWithoutEditLogsInput, RequestInfoUncheckedUpdateWithoutEditLogsInput>
  }

  export type RequestInfoUpdateWithoutEditLogsInput = {
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    template?: InstanceOsTemplateUpdateOneRequiredWithoutRequestsNestedInput
    notifications?: NotificationInfoUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoUncheckedUpdateWithoutEditLogsInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: IntFieldUpdateOperationsInput | number
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationInfoUncheckedUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type InstanceOsTemplateCreateWithoutInstanceInput = {
    osTemplate: OsTemplateCreateNestedOneWithoutInstancesOsInput
    requests?: RequestInfoCreateNestedManyWithoutTemplateInput
  }

  export type InstanceOsTemplateUncheckedCreateWithoutInstanceInput = {
    templateId?: number
    osId: number
    requests?: RequestInfoUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type InstanceOsTemplateCreateOrConnectWithoutInstanceInput = {
    where: InstanceOsTemplateWhereUniqueInput
    create: XOR<InstanceOsTemplateCreateWithoutInstanceInput, InstanceOsTemplateUncheckedCreateWithoutInstanceInput>
  }

  export type InstanceOsTemplateCreateManyInstanceInputEnvelope = {
    data: InstanceOsTemplateCreateManyInstanceInput | InstanceOsTemplateCreateManyInstanceInput[]
    skipDuplicates?: boolean
  }

  export type InstanceOsTemplateUpsertWithWhereUniqueWithoutInstanceInput = {
    where: InstanceOsTemplateWhereUniqueInput
    update: XOR<InstanceOsTemplateUpdateWithoutInstanceInput, InstanceOsTemplateUncheckedUpdateWithoutInstanceInput>
    create: XOR<InstanceOsTemplateCreateWithoutInstanceInput, InstanceOsTemplateUncheckedCreateWithoutInstanceInput>
  }

  export type InstanceOsTemplateUpdateWithWhereUniqueWithoutInstanceInput = {
    where: InstanceOsTemplateWhereUniqueInput
    data: XOR<InstanceOsTemplateUpdateWithoutInstanceInput, InstanceOsTemplateUncheckedUpdateWithoutInstanceInput>
  }

  export type InstanceOsTemplateUpdateManyWithWhereWithoutInstanceInput = {
    where: InstanceOsTemplateScalarWhereInput
    data: XOR<InstanceOsTemplateUpdateManyMutationInput, InstanceOsTemplateUncheckedUpdateManyWithoutInstanceInput>
  }

  export type InstanceOsTemplateScalarWhereInput = {
    AND?: InstanceOsTemplateScalarWhereInput | InstanceOsTemplateScalarWhereInput[]
    OR?: InstanceOsTemplateScalarWhereInput[]
    NOT?: InstanceOsTemplateScalarWhereInput | InstanceOsTemplateScalarWhereInput[]
    templateId?: IntFilter<"InstanceOsTemplate"> | number
    osId?: IntFilter<"InstanceOsTemplate"> | number
    instanceId?: IntFilter<"InstanceOsTemplate"> | number
  }

  export type InstanceOsTemplateCreateWithoutOsTemplateInput = {
    instance: InstanceTemplateCreateNestedOneWithoutOsTemplatesInput
    requests?: RequestInfoCreateNestedManyWithoutTemplateInput
  }

  export type InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput = {
    templateId?: number
    instanceId: number
    requests?: RequestInfoUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type InstanceOsTemplateCreateOrConnectWithoutOsTemplateInput = {
    where: InstanceOsTemplateWhereUniqueInput
    create: XOR<InstanceOsTemplateCreateWithoutOsTemplateInput, InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput>
  }

  export type InstanceOsTemplateCreateManyOsTemplateInputEnvelope = {
    data: InstanceOsTemplateCreateManyOsTemplateInput | InstanceOsTemplateCreateManyOsTemplateInput[]
    skipDuplicates?: boolean
  }

  export type InstanceOsTemplateUpsertWithWhereUniqueWithoutOsTemplateInput = {
    where: InstanceOsTemplateWhereUniqueInput
    update: XOR<InstanceOsTemplateUpdateWithoutOsTemplateInput, InstanceOsTemplateUncheckedUpdateWithoutOsTemplateInput>
    create: XOR<InstanceOsTemplateCreateWithoutOsTemplateInput, InstanceOsTemplateUncheckedCreateWithoutOsTemplateInput>
  }

  export type InstanceOsTemplateUpdateWithWhereUniqueWithoutOsTemplateInput = {
    where: InstanceOsTemplateWhereUniqueInput
    data: XOR<InstanceOsTemplateUpdateWithoutOsTemplateInput, InstanceOsTemplateUncheckedUpdateWithoutOsTemplateInput>
  }

  export type InstanceOsTemplateUpdateManyWithWhereWithoutOsTemplateInput = {
    where: InstanceOsTemplateScalarWhereInput
    data: XOR<InstanceOsTemplateUpdateManyMutationInput, InstanceOsTemplateUncheckedUpdateManyWithoutOsTemplateInput>
  }

  export type OsTemplateCreateWithoutInstancesOsInput = {
    osName: string
    imageLocation: string
    supportedPlatform: string
  }

  export type OsTemplateUncheckedCreateWithoutInstancesOsInput = {
    osId?: number
    osName: string
    imageLocation: string
    supportedPlatform: string
  }

  export type OsTemplateCreateOrConnectWithoutInstancesOsInput = {
    where: OsTemplateWhereUniqueInput
    create: XOR<OsTemplateCreateWithoutInstancesOsInput, OsTemplateUncheckedCreateWithoutInstancesOsInput>
  }

  export type InstanceTemplateCreateWithoutOsTemplatesInput = {
    name: string
    cpuAmount: number
    ramAmount: number
    gpuAmount: number
    storageAmount: number
  }

  export type InstanceTemplateUncheckedCreateWithoutOsTemplatesInput = {
    instanceId?: number
    name: string
    cpuAmount: number
    ramAmount: number
    gpuAmount: number
    storageAmount: number
  }

  export type InstanceTemplateCreateOrConnectWithoutOsTemplatesInput = {
    where: InstanceTemplateWhereUniqueInput
    create: XOR<InstanceTemplateCreateWithoutOsTemplatesInput, InstanceTemplateUncheckedCreateWithoutOsTemplatesInput>
  }

  export type RequestInfoCreateWithoutTemplateInput = {
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    user: UserCreateNestedOneWithoutRequestsInput
    notifications?: NotificationInfoCreateNestedManyWithoutRequestInput
    editLogs?: RequestEditLogCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoUncheckedCreateWithoutTemplateInput = {
    requestId?: number
    userId: string
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    notifications?: NotificationInfoUncheckedCreateNestedManyWithoutRequestInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoCreateOrConnectWithoutTemplateInput = {
    where: RequestInfoWhereUniqueInput
    create: XOR<RequestInfoCreateWithoutTemplateInput, RequestInfoUncheckedCreateWithoutTemplateInput>
  }

  export type RequestInfoCreateManyTemplateInputEnvelope = {
    data: RequestInfoCreateManyTemplateInput | RequestInfoCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type OsTemplateUpsertWithoutInstancesOsInput = {
    update: XOR<OsTemplateUpdateWithoutInstancesOsInput, OsTemplateUncheckedUpdateWithoutInstancesOsInput>
    create: XOR<OsTemplateCreateWithoutInstancesOsInput, OsTemplateUncheckedCreateWithoutInstancesOsInput>
    where?: OsTemplateWhereInput
  }

  export type OsTemplateUpdateToOneWithWhereWithoutInstancesOsInput = {
    where?: OsTemplateWhereInput
    data: XOR<OsTemplateUpdateWithoutInstancesOsInput, OsTemplateUncheckedUpdateWithoutInstancesOsInput>
  }

  export type OsTemplateUpdateWithoutInstancesOsInput = {
    osName?: StringFieldUpdateOperationsInput | string
    imageLocation?: StringFieldUpdateOperationsInput | string
    supportedPlatform?: StringFieldUpdateOperationsInput | string
  }

  export type OsTemplateUncheckedUpdateWithoutInstancesOsInput = {
    osId?: IntFieldUpdateOperationsInput | number
    osName?: StringFieldUpdateOperationsInput | string
    imageLocation?: StringFieldUpdateOperationsInput | string
    supportedPlatform?: StringFieldUpdateOperationsInput | string
  }

  export type InstanceTemplateUpsertWithoutOsTemplatesInput = {
    update: XOR<InstanceTemplateUpdateWithoutOsTemplatesInput, InstanceTemplateUncheckedUpdateWithoutOsTemplatesInput>
    create: XOR<InstanceTemplateCreateWithoutOsTemplatesInput, InstanceTemplateUncheckedCreateWithoutOsTemplatesInput>
    where?: InstanceTemplateWhereInput
  }

  export type InstanceTemplateUpdateToOneWithWhereWithoutOsTemplatesInput = {
    where?: InstanceTemplateWhereInput
    data: XOR<InstanceTemplateUpdateWithoutOsTemplatesInput, InstanceTemplateUncheckedUpdateWithoutOsTemplatesInput>
  }

  export type InstanceTemplateUpdateWithoutOsTemplatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpuAmount?: IntFieldUpdateOperationsInput | number
    ramAmount?: IntFieldUpdateOperationsInput | number
    gpuAmount?: IntFieldUpdateOperationsInput | number
    storageAmount?: IntFieldUpdateOperationsInput | number
  }

  export type InstanceTemplateUncheckedUpdateWithoutOsTemplatesInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpuAmount?: IntFieldUpdateOperationsInput | number
    ramAmount?: IntFieldUpdateOperationsInput | number
    gpuAmount?: IntFieldUpdateOperationsInput | number
    storageAmount?: IntFieldUpdateOperationsInput | number
  }

  export type RequestInfoUpsertWithWhereUniqueWithoutTemplateInput = {
    where: RequestInfoWhereUniqueInput
    update: XOR<RequestInfoUpdateWithoutTemplateInput, RequestInfoUncheckedUpdateWithoutTemplateInput>
    create: XOR<RequestInfoCreateWithoutTemplateInput, RequestInfoUncheckedCreateWithoutTemplateInput>
  }

  export type RequestInfoUpdateWithWhereUniqueWithoutTemplateInput = {
    where: RequestInfoWhereUniqueInput
    data: XOR<RequestInfoUpdateWithoutTemplateInput, RequestInfoUncheckedUpdateWithoutTemplateInput>
  }

  export type RequestInfoUpdateManyWithWhereWithoutTemplateInput = {
    where: RequestInfoScalarWhereInput
    data: XOR<RequestInfoUpdateManyMutationInput, RequestInfoUncheckedUpdateManyWithoutTemplateInput>
  }

  export type UserCreateWithoutInstancesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstancesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: string
    createDate?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    requests?: RequestInfoUncheckedCreateNestedManyWithoutUserInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstancesInput, UserUncheckedCreateWithoutInstancesInput>
  }

  export type RequestInfoCreateWithoutInstancesInput = {
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    user: UserCreateNestedOneWithoutRequestsInput
    template: InstanceOsTemplateCreateNestedOneWithoutRequestsInput
    notifications?: NotificationInfoCreateNestedManyWithoutRequestInput
    editLogs?: RequestEditLogCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoUncheckedCreateWithoutInstancesInput = {
    requestId?: number
    userId: string
    templateId: number
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    notifications?: NotificationInfoUncheckedCreateNestedManyWithoutRequestInput
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoCreateOrConnectWithoutInstancesInput = {
    where: RequestInfoWhereUniqueInput
    create: XOR<RequestInfoCreateWithoutInstancesInput, RequestInfoUncheckedCreateWithoutInstancesInput>
  }

  export type UserUpsertWithoutInstancesInput = {
    update: XOR<UserUpdateWithoutInstancesInput, UserUncheckedUpdateWithoutInstancesInput>
    create: XOR<UserCreateWithoutInstancesInput, UserUncheckedCreateWithoutInstancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstancesInput, UserUncheckedUpdateWithoutInstancesInput>
  }

  export type UserUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    requests?: RequestInfoUncheckedUpdateManyWithoutUserNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RequestInfoUpsertWithoutInstancesInput = {
    update: XOR<RequestInfoUpdateWithoutInstancesInput, RequestInfoUncheckedUpdateWithoutInstancesInput>
    create: XOR<RequestInfoCreateWithoutInstancesInput, RequestInfoUncheckedCreateWithoutInstancesInput>
    where?: RequestInfoWhereInput
  }

  export type RequestInfoUpdateToOneWithWhereWithoutInstancesInput = {
    where?: RequestInfoWhereInput
    data: XOR<RequestInfoUpdateWithoutInstancesInput, RequestInfoUncheckedUpdateWithoutInstancesInput>
  }

  export type RequestInfoUpdateWithoutInstancesInput = {
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    template?: InstanceOsTemplateUpdateOneRequiredWithoutRequestsNestedInput
    notifications?: NotificationInfoUpdateManyWithoutRequestNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoUncheckedUpdateWithoutInstancesInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: IntFieldUpdateOperationsInput | number
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationInfoUncheckedUpdateManyWithoutRequestNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoCreateWithoutNotificationsInput = {
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    user: UserCreateNestedOneWithoutRequestsInput
    template: InstanceOsTemplateCreateNestedOneWithoutRequestsInput
    editLogs?: RequestEditLogCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoUncheckedCreateWithoutNotificationsInput = {
    requestId?: number
    userId: string
    templateId: number
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
    editLogs?: RequestEditLogUncheckedCreateNestedManyWithoutRequestInput
    instances?: InstanceInfoUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestInfoCreateOrConnectWithoutNotificationsInput = {
    where: RequestInfoWhereUniqueInput
    create: XOR<RequestInfoCreateWithoutNotificationsInput, RequestInfoUncheckedCreateWithoutNotificationsInput>
  }

  export type RequestInfoUpsertWithoutNotificationsInput = {
    update: XOR<RequestInfoUpdateWithoutNotificationsInput, RequestInfoUncheckedUpdateWithoutNotificationsInput>
    create: XOR<RequestInfoCreateWithoutNotificationsInput, RequestInfoUncheckedCreateWithoutNotificationsInput>
    where?: RequestInfoWhereInput
  }

  export type RequestInfoUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: RequestInfoWhereInput
    data: XOR<RequestInfoUpdateWithoutNotificationsInput, RequestInfoUncheckedUpdateWithoutNotificationsInput>
  }

  export type RequestInfoUpdateWithoutNotificationsInput = {
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    template?: InstanceOsTemplateUpdateOneRequiredWithoutRequestsNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoUncheckedUpdateWithoutNotificationsInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: IntFieldUpdateOperationsInput | number
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestInfoCreateManyUserInput = {
    requestId?: number
    templateId: number
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
  }

  export type InstanceInfoCreateManyUserInput = {
    instanceId?: number
    requestId: number
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date | string
    expireDate: Date | string
    updateBy: string
    updateDate: Date | string
  }

  export type RequestEditLogCreateManyUserInput = {
    logNo?: number
    requestId: number
    jsonData: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestInfoUpdateWithoutUserInput = {
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    template?: InstanceOsTemplateUpdateOneRequiredWithoutRequestsNestedInput
    notifications?: NotificationInfoUpdateManyWithoutRequestNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoUncheckedUpdateWithoutUserInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationInfoUncheckedUpdateManyWithoutRequestNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoUncheckedUpdateManyWithoutUserInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InstanceInfoUpdateWithoutUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestInfoUpdateOneRequiredWithoutInstancesNestedInput
  }

  export type InstanceInfoUncheckedUpdateWithoutUserInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    requestId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceInfoUncheckedUpdateManyWithoutUserInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    requestId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEditLogUpdateWithoutUserInput = {
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestInfoUpdateOneRequiredWithoutEditLogsNestedInput
  }

  export type RequestEditLogUncheckedUpdateWithoutUserInput = {
    logNo?: IntFieldUpdateOperationsInput | number
    requestId?: IntFieldUpdateOperationsInput | number
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEditLogUncheckedUpdateManyWithoutUserInput = {
    logNo?: IntFieldUpdateOperationsInput | number
    requestId?: IntFieldUpdateOperationsInput | number
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationInfoCreateManyRequestInput = {
    notificationId?: number
    sendDate: Date | string
    isSend: boolean
    messageSubject: string
    message: string
  }

  export type RequestEditLogCreateManyRequestInput = {
    logNo?: number
    userId: string
    jsonData: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type InstanceInfoCreateManyRequestInput = {
    instanceId?: number
    userId: string
    username: string
    password: string
    machineState: string
    ipAddr: string
    createDate: Date | string
    expireDate: Date | string
    updateBy: string
    updateDate: Date | string
  }

  export type NotificationInfoUpdateWithoutRequestInput = {
    sendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSend?: BoolFieldUpdateOperationsInput | boolean
    messageSubject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationInfoUncheckedUpdateWithoutRequestInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
    sendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSend?: BoolFieldUpdateOperationsInput | boolean
    messageSubject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationInfoUncheckedUpdateManyWithoutRequestInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
    sendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSend?: BoolFieldUpdateOperationsInput | boolean
    messageSubject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type RequestEditLogUpdateWithoutRequestInput = {
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEditLogsNestedInput
  }

  export type RequestEditLogUncheckedUpdateWithoutRequestInput = {
    logNo?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEditLogUncheckedUpdateManyWithoutRequestInput = {
    logNo?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    jsonData?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceInfoUpdateWithoutRequestInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInstancesNestedInput
  }

  export type InstanceInfoUncheckedUpdateWithoutRequestInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceInfoUncheckedUpdateManyWithoutRequestInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    machineState?: StringFieldUpdateOperationsInput | string
    ipAddr?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: StringFieldUpdateOperationsInput | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceOsTemplateCreateManyInstanceInput = {
    templateId?: number
    osId: number
  }

  export type InstanceOsTemplateUpdateWithoutInstanceInput = {
    osTemplate?: OsTemplateUpdateOneRequiredWithoutInstancesOsNestedInput
    requests?: RequestInfoUpdateManyWithoutTemplateNestedInput
  }

  export type InstanceOsTemplateUncheckedUpdateWithoutInstanceInput = {
    templateId?: IntFieldUpdateOperationsInput | number
    osId?: IntFieldUpdateOperationsInput | number
    requests?: RequestInfoUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type InstanceOsTemplateUncheckedUpdateManyWithoutInstanceInput = {
    templateId?: IntFieldUpdateOperationsInput | number
    osId?: IntFieldUpdateOperationsInput | number
  }

  export type InstanceOsTemplateCreateManyOsTemplateInput = {
    templateId?: number
    instanceId: number
  }

  export type InstanceOsTemplateUpdateWithoutOsTemplateInput = {
    instance?: InstanceTemplateUpdateOneRequiredWithoutOsTemplatesNestedInput
    requests?: RequestInfoUpdateManyWithoutTemplateNestedInput
  }

  export type InstanceOsTemplateUncheckedUpdateWithoutOsTemplateInput = {
    templateId?: IntFieldUpdateOperationsInput | number
    instanceId?: IntFieldUpdateOperationsInput | number
    requests?: RequestInfoUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type InstanceOsTemplateUncheckedUpdateManyWithoutOsTemplateInput = {
    templateId?: IntFieldUpdateOperationsInput | number
    instanceId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestInfoCreateManyTemplateInput = {
    requestId?: number
    userId: string
    instantName: string
    requestStatus: string
    requestDate: Date | string
    endDate: Date | string
    lastEditDate: Date | string
    note: string
    isApprove: boolean
  }

  export type RequestInfoUpdateWithoutTemplateInput = {
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    notifications?: NotificationInfoUpdateManyWithoutRequestNestedInput
    editLogs?: RequestEditLogUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoUncheckedUpdateWithoutTemplateInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationInfoUncheckedUpdateManyWithoutRequestNestedInput
    editLogs?: RequestEditLogUncheckedUpdateManyWithoutRequestNestedInput
    instances?: InstanceInfoUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestInfoUncheckedUpdateManyWithoutTemplateInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    instantName?: StringFieldUpdateOperationsInput | string
    requestStatus?: StringFieldUpdateOperationsInput | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    isApprove?: BoolFieldUpdateOperationsInput | boolean
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