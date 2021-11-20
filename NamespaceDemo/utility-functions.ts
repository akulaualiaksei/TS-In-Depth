namespace Utility {
    export namespace Fees {
        export const calculateLateFee = (daysLate: number): number => 0.25 * daysLate;
    }

    export const maxBooksAllowed = (age: number): number => age < 12 ? 3 : 10;

    export const privateFunc = ():void => console.log('This is private function');
}
