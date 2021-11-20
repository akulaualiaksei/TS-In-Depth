import * as Interfaces from "../interfaces";
import {format, logger, logMethod, logParameter, sealed, writable} from "../decorator";

// class UniversityLibrarian implements Librarian, A {
// class UniversityLibrarian implements Interfaces.Librarian {
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
//
// export { UniversityLibrarian };
// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    email: string;
    department: string;

    constructor() {
        console.log('test');
    }

    // @logMethod
    assistCustomer(/*@logParameter */ custName: string):void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };
