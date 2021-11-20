// import * as assert from "assert";
import {Category} from "./enums";
// import {RefBook, UL} from './classes';
import {logSearchResults} from "./functions";
// import * as func from './functions';


// func.showHello('greeting', 'TypeScript');


// showHello('greeting', 'TypeScript');
//
// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }

// ===============================

// let myTuple : [number | string, (number | string)];
// let myTuple: (number | string)[];
// myTuple = [1, 1];
// type Book = {
//     id: number,
//     title: string,
//     category: Category,
//     author: string,
//     available: boolean,
// };

// enum Category { JavaScript, CSS, HTML, Typescript, Angular, React, NodeJS };

// type PersonBook = Person & Book;
// type BookOrUndefined = Book | undefined;

// interface Book {
//     id: number;
//     title: string;
//     category: Category;
//     author: string;
//     available: boolean;
//     pages?: number;
//     // markDamaged?: (reason: string) => void;
//     markDamaged?: DamageLogger;
//     // markDamaged?(reason: string):void;
// };
//
// // type DamageLogger = (reason: string) => void;
// interface DamageLogger {
//     (reason: string): void;
// }
//
// interface Person {
//     name: string;
//     email: string;
// }
//
// interface Author extends Person{
//     numBooksPublished: number;
// }
//
// interface Librarian extends Person {
//     department: string;
//     assistCustomer: (custName: string) => void;
// }

// type BookProperties = keyof Book;

// const getAllBooks = (): readonly Book[] => {
//     const books: readonly Book[] = <const> [
//         { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
//         { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
//         { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
//         { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
//     ];
//
//     return books;
// }
//
// const logFirstAvailable = (books: readonly Book[] = getAllBooks()): void => {
//     console.log(`Number of books: ${books.length}`);
//
//     const title = books.find(book => book.available === true)?.title
//     console.log(`First available book: ${title}`);
// }
//
// const getBookTitlesByCategory = (category: Category = Category.JavaScript): string[] => {
//     const books = getAllBooks();
//
//     return books.filter(book => book.category === category).map(book => book.title);
// }
//
// const logBookTitles = (titles: string[]): void => {
//     titles.forEach(title => console.log(title));
// }
//
// const getBookAuthorByIndex = (index: number): [title: string, author: string] => {
//     const books = getAllBooks();
//
//     const {title, author } = books[index];
//     return [title, author];
// }
//
// const calcTotalPages = ():bigint => {
//     const data = [
//     { lib: 'libName1', books: 1_000_000, avgPagesPerBook: 250 },
//     { lib: 'libName2', books: 5_000_000, avgPagesPerBook: 300 },
//     { lib: 'libName3', books: 3_000_000, avgPagesPerBook: 200 }
//     ];
//
//     return data.reduce((acc: bigint, obj) => {
//         return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook)
//     }, 0n);
// }
//
// const createCustomerID = (name: string, id: number) : string => {
//     return `${id}-${name}`;
// }
//
// const createCustomer= (name: string, age?: number, city?:string): void => {
//     console.log(`name ${name}`);
//     if (age) console.log(`age ${age}`);
//     if (city) console.log(`city ${city}`);
// }
//
// const getBookByID = (id: number): BookOrUndefined => {
//     const books: readonly Book[]= getAllBooks();
//
//     return books.find(book => book.id === id);
// }
//
// const checkoutBooks = (customer: string, ...booksIDs: number[]): string[] => {
//     console.log(`customer name ${customer}`);
//
//     return booksIDs.map(id => getBookByID(id)).filter(book => book.available).map(book => book.title);
// }
//
// function getTitles(author: string): string[];
// function getTitles(available: boolean): string[];
// function getTitles(id: number, available: boolean): string[];
// function getTitles(...args: any): string[] {
//     const books = getAllBooks();
//
//     if (args.length === 1) {
//         const [arg] = args;
//
//         if(typeof arg === 'string') {
//             return books.filter(book => book.author === arg).map(book => book.title);
//         } else if (typeof arg === 'boolean') {
//             return books.filter(book => book.available === arg).map(book => book.title);
//         }
//     } else if (args.length === 2) {
//         const [id, available] = args;
//
//         if (typeof id === 'number' && typeof available==='boolean') {
//             return books.filter(book => book.id === id && book.available === available).map(book => book.title);
//         }
//     }
//     return [];
// }
//
// function assertStringValue (value: any): asserts value is string {
//     if (typeof value !== 'string') {
//         throw new Error('value should have been a string');
//     }
// }
//
// const bookTitleTransform = (title: any): string => {
//     assertStringValue(title);
//
//     return [...title].reverse().join('')
// }
//
// const printBook = (book: Book): void => {
//     console.log(`${book.title} by ${book.author}`);
// }
//
// const getProperty = (book: Book, prop: BookProperties): any => {
//     if (typeof book[prop] === 'function') {
//         return book[prop]['name'];
//     }
//     return book[prop];
// }

// // class ReferenceItem {
// //     // title: string;
// //     // year: number;
// //     //
// //     // constructor(newTitle: string, newYear: number) {
// //     //     console.log('create new ReferenceItem');
// //     //     this.title = newTitle;
// //     //     this.year = newYear;
// //     // }
// //
// //     private _publisher: string;
// //
// //     #id: number;
// //
// //     static department: string = 'classic value';
// //
// //     get publisher():string {
// //         return this._publisher.toUpperCase();
// //     }
// //
// //     set publisher(newPublisher) {
// //         this._publisher = newPublisher;
// //     }
// //
// //     constructor(id: number, public title: string, protected year: number) {
// //         console.log('create new ReferenceItem');
// //         this.#id = id;
// //     }
// //
// //     printItem():void {
// //         console.log(`${this.title} was published in ${this.year}`);
// //         console.log(`department: ${ReferenceItem.department}`);
// //     }
// //
// //     getId():number {
// //         return this.#id;
// //     }
// // }
//
// abstract class ReferenceItem {
//     // title: string;
//     // year: number;
//     //
//     // constructor(newTitle: string, newYear: number) {
//     //     console.log('create new ReferenceItem');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }
//
//     private _publisher: string;
//
//     #id: number;
//
//     static department: string = 'classic value';
//
//     get publisher():string {
//         return this._publisher.toUpperCase();
//     }
//
//     set publisher(newPublisher) {
//         this._publisher = newPublisher;
//     }
//
//     constructor(id: number, public title: string, protected year: number) {
//         console.log('create new ReferenceItem');
//         this.#id = id;
//     }
//
//     printItem():void {
//         console.log(`${this.title} was published in ${this.year}`);
//         console.log(`department: ${ReferenceItem.department}`);
//     }
//
//     getId():number {
//         return this.#id;
//     }
//
//     abstract printCitation(): void;
// }
//
// class Encyclopedia extends ReferenceItem {
//     constructor(id: number, title: string, year: number, public edition: number) {
//         super(id, title, year);
//         console.log('create new ReferenceItem');
//     }
//
//     printItem():void {
//         super.printItem();
//         console.log(`Edition: ${this.edition} (${this.year})`)
//     }
//
//     printCitation() {
//         console.log(`${this.title} - ${this.year}`);
//     }
// }
//
// // interface A {
// //     a: number;
// // }
//
// // class UniversityLibrarian implements Librarian, A {
// class UniversityLibrarian implements Librarian{
//     name: string;
//     email: string;
//     department: string;
//
//     a: 10;
//
//     assistCustomer(custName: string):void {
//         console.log(`${this.name} is assisting ${custName}`);
//     }
// }


// =======================
// Task 02.01

// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
//
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator:  (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('example', 123));
// createCustomer('Anna');
// createCustomer('Boris', 30);
// createCustomer('Boris', 30, 'Kiev');
// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(undefined));
// console.log(getBookTitlesByCategory(null));
// logFirstAvailable();
// console.log(getBookByID(1));
// console.log(checkoutBooks('Anna', 1, 2, 3, 4));
// console.log(checkoutBooks('Anna', ...[1, 2, 3, 4]));

// 03.03

// getTitles(true);
// getTitles(1, true);

// Task 03.04

// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(100));

// task 04.01

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: ((reason: string) => console.log(`Damaged: ${reason}`)),
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// task 04.02

// const logDamage: Logger = (reason: string):void => console.log(`Damaged: ${reason}`);

// task 04.03

// const favoriteAuthor: Author = {
//     name: 'name',
//     email: 'email@asd.com',
//     numBooksPublished: 2,
// }
//
// const favoriteLibrarian: Librarian = {
//     name: 'eada',
//     email: 'aasd@sad.asd',
//     department: 'asdasd',
//     assistCustomer: null,
// }

// task 04.04

// const offer: any = {
//     book: {
//         title: 'test title'
//     },
// };
//
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// 04.05

// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));

// 05.01

// const ref: ReferenceItem = new ReferenceItem(1,'TypeScript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abs';
// console.log(ref.publisher);
// console.log(ref.getId());

// 05.02

// const refBook = new Encyclopedia(1, 'TS', 2021, 2);
// const refBook = new RefBook(1, 'TS', 2021, 2);
// console.log(refBook);
// refBook.printItem();
// const p1 = Object.getPrototypeOf(refBook);
// console.log(p1);
// const p2 = Object.getPrototypeOf(p1);
// console.log(p2);

// 05.03

// const refBook = new Encyclopedia(1, 'TS', 2021, 2);
// refBook.printCitation();
// console.log(refBook);

// 05.04

// const favoriteLibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// favoriteLibrarian.a;

// 05.05
// const personBook: PersonBook = {
//     name: 'name',
//     email: 'email',
//     id: 1,
//     author: 'author',
//     available: false,
//     category: Category.CSS,
//     title: 'title',
// }

// 06.03

// const refBook = new RefBook(1, 'TS', 2021, 2);
// console.log(refBook);
// refBook.printItem();
// const p1 = Object.getPrototypeOf(refBook);
// console.log(p1);
// const p2 = Object.getPrototypeOf(p1);
// console.log(p2);
//
// printRefBook(refBook);
// const newLibrarian = new UniversityLibrarian();
// printRefBook(newLibrarian);

// 06.04

// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// favoriteLibrarian.a;
//
// const refBook = new RefBook(1, 'TS', 2021, 2);
// console.log(refBook);
// refBook.printItem();
// const p1 = Object.getPrototypeOf(refBook);
// console.log(p1);
// const p2 = Object.getPrototypeOf(p1);
// console.log(p2);
//
// printRefBook(refBook);
// const newLibrarian = new UL.UniversityLibrarian();
// printRefBook(newLibrarian);

// 06.05

// const flag = false;
// const flag = true;

// if (flag) {
//     const modules = await import('./classes');
//     const reader = new modules.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);
//     console.log(reader);
// }
// if (flag) {
//     import('./classes').then(
//         modules => {
//             const reader = new modules.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         }
//     )
//
// }

//06.06
// import {Library} from "./classes/library";
// import {Library} from "./classes";
// import type { Library } from "./classes/library";

// const lib: Library = new Library();
// const lib: Library = {
//     id: 1,
//     name: 'name',
//     address: 'address',
// }

// 07.01

// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const res: Book[] = purge<Book>(inventory);
// let res = purge<Book>(inventory);
// console.log(res);
// const res2 = purge([1,2,3,4])
// console.log(res2);

// 07.02

// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];
//
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(item => magazineShelf.add(item));
// console.log(magazineShelf.getFirst().title);

// 07.03

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
// console.log(getProperty<Book, 'id'>(getAllBooks()[0], 'id'));
// console.log(getProperty(getAllBooks()[0], 'id'));

// 07.04
// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     title: 'title',
//     category: Category.CSS,
//     author: 'author',
//     available: false,
//     markDamaged: null,
//     pages: 100,
// };
//
// const updatedBook: UpdatedBook = {};

// let params: Parameters<CreateCustomerFunctionType>;
// let params: Parameters<typeof createCustomer> = ['Anna', 30, 'asd'];
// createCustomer(...params);

// 07.05
// in types.ts

// 08.01

// const ul = new UL.UniversityLibrarian();
// console.log(ul);
// UL.UniversityLibrarian['a'] = 'A';
// ul.assistCustomer = null;
// ul.assistCustomer = function () {};
// const pr = Object.getPrototypeOf(ul);
// pr.assistCustomer = null;
// pr.assistCustomer2 = function () {};

// 08.02

// const ul = new UL.UniversityLibrarian();
// ul.name = 'Anna';
// ul['printLibrarian']();
// console.log(ul);
// ul.assistCustomer('Boris');

// 08.03

// const ul = new UL.UniversityLibrarian();
// ul.assistFaculty = null;
// ul.teachCommunity = null;

// 08.04

// const enc = new RefBook(1, 'TS', 2021, 3);
// enc.printItem();

// 08.05

// const ul = new UniversityLibrarian();
// ul.name = 'Anna';
// ul.assistCustomer('Boris');
// console.log(ul);

// 08.06

// const ul = new UniversityLibrarian();
// ul.name = 'Anna';
// console.log(ul.name);
// ul.assistCustomer('Boris');
// console.log(ul);

// 08.07

// const enc = new RefBook(1, 'ts', 2021, 3)
// enc.copies = 1;
// // enc.copies = 10.12;
// console.log(enc);

// 09.01

// console.log('beg')
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('end')

// 09.02

// console.log('beg')
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(len => {
//             // async
//             console.log(len);
//             return Promise.resolve(len);
//     }).then(len => console.log(len))
//     .catch(err => console.log(err))
// getBooksByCategoryPromise(Category.Software).then(titles => console.log(titles)).catch(err => console.log(err))
// console.log('end')

// 09.03
console.log('beg')
logSearchResults(Category.JavaScript).catch(err => console.log(err));
// logSearchResults(Category.Software).catch(err => console.log(err));
// logSearchResults(Category.Software);
console.log('end')
