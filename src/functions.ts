import {Book, Callback, LibMgrCallback} from "./interfaces";
import {Category} from "./enums";
import {BookOrUndefined, BookProperties, Unpromisify} from "./types";
import RefBook from './classes/encyclopedia';

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
};

export const getAllBooks = (): readonly Book[] => {
    const books: readonly Book[] = <const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

export const logFirstAvailable = (books: readonly Book[] = getAllBooks()): void => {
    console.log(`Number of books: ${books.length}`);

    const title = books.find(book => book.available === true)?.title
    console.log(`First available book: ${title}`);
}

export const getBookTitlesByCategory = (category: Category = Category.JavaScript): string[] => {
    const books = getAllBooks();

    return books.filter(book => book.category === category).map(book => book.title);
}

export const logBookTitles = (titles: string[]): void => {
    titles.forEach(title => console.log(title));
}

export const getBookAuthorByIndex = (index: number): [title: string, author: string] => {
    const books = getAllBooks();

    const {title, author } = books[index];
    return [title, author];
}

export const calcTotalPages = ():bigint => {
    const data = [
        { lib: 'libName1', books: 1_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000, avgPagesPerBook: 200 }
    ];

    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook)
    }, 0n);
}

export const createCustomerID = (name: string, id: number) : string => {
    return `${id}-${name}`;
}

export const createCustomer= (name: string, age?: number, city?:string): void => {
    console.log(`name ${name}`);
    if (age) console.log(`age ${age}`);
    if (city) console.log(`city ${city}`);
}

export const getBookByID = (id: number): BookOrUndefined => {
    const books: readonly Book[]= getAllBooks();

    return books.find(book => book.id === id);
}

export const checkoutBooks = (customer: string, ...booksIDs: number[]): string[] => {
    console.log(`customer name ${customer}`);

    return booksIDs.map(id => getBookByID(id)).filter(book => book.available).map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if(typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available==='boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
    return [];
}

export function assertStringValue (value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function assertRefBookInstance (condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not instance of RefBook');
    }
}

export const bookTitleTransform = (title: any): string => {
    assertStringValue(title);

    return [...title].reverse().join('')
}

export const printBook = (book: Book): void => {
    console.log(`${book.title} by ${book.author}`);
}

export const printRefBook = (data: any): void => {
    assertRefBookInstance(data instanceof RefBook);

    data.printItem();
}

// export const getProperty = (book: Book, prop: BookProperties): any => {
//     if (typeof book[prop] === 'function') {
//         return book[prop]['name'];
//     }
//     return book[prop];
// }
export const getProperty = <TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string => {
    if (typeof obj[prop] === 'function') {
        return obj[prop]['name'];
    }
    return obj[prop];
}

export const purge = <T>(inventory: T[]):T[] => {
    return inventory.slice(2);
}

// export const getBooksByCategory = (category: Category, callback: LibMgrCallback): void => {
export const getBooksByCategory = (category: Category, callback: Callback<string[]>): void => {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('not found');
            }
        } catch (err) {
            callback(err, null);
        }
    }
    , 2000);
}

export const logCategorySearch = (err: Error, titles: string[]): void => {
    if (err) {
        console.log(err);
    } else {
        console.log(titles);
    }
}

export const getBooksByCategoryPromise = (category: Category): Promise<string[]> => {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
                const titles = getBookTitlesByCategory(category);
                if (titles.length > 0) {
                    resolve(titles);
                } else {
                    reject('not found');
                }
            }
            , 2000);
    })
}

// export const logSearchResults = async (category: Category): Promise<undefined> => {
export const logSearchResults = async (category: Category): Promise<void> => {
    // const titles: Unpromisify<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(category);
    const titles = await getBooksByCategoryPromise(category);
    // const titles1 = await getBooksByCategoryPromise(category);
    // const titles2 = await getBooksByCategoryPromise(category);
    // const titles3 = await Promise.all([getBooksByCategoryPromise(category), getBooksByCategoryPromise(category)]);
    console.log(titles);
    // console.log(titles1, titles2, titles3);
    // return undefined;
}
