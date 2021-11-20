/// <reference path="utility-functions.ts" />

import util = Utility.Fees;
// const res = Utility.Fees.calculateLateFee(10);
const res = util.calculateLateFee(10);
console.log(res);

const res2 = Utility.maxBooksAllowed(25);
console.log(res2);
