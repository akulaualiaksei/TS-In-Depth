import {Author, Book, Person} from "./interfaces";
import {createCustomer, getBooksByCategoryPromise} from "./functions";

type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;
type BookProperties = keyof Book;

// export type DamageLogger = (reason: string) => void;
// export type BookProperties = keyof Book;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
// export type CreateCustomerFunctionType = (name: string, age?: number, city?:string) => void;
export type CreateCustomerFunctionType = typeof createCustomer;
// export const t = typeof createCustomer;

// 07.05
export type fn = (p1: string, p2: number, p3: boolean) => symbol;
export type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
export type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
export type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

export type Unpromisify<T> = T extends Promise<infer R> ? R: never;
export type FT = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;

export { PersonBook, BookProperties, BookOrUndefined };
