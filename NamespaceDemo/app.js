/// <reference path="utility-functions.ts" />
var util = Utility.Fees;
// const res = Utility.Fees.calculateLateFee(10);
var res = util.calculateLateFee(10);
console.log(res);
var res2 = Utility.maxBooksAllowed(25);
console.log(res2);
