var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        Fees.calculateLateFee = function (daysLate) { return 0.25 * daysLate; };
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    Utility.maxBooksAllowed = function (age) { return age < 12 ? 3 : 10; };
    Utility.privateFunc = function () { return console.log('This is private function'); };
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var util = Utility.Fees;
// const res = Utility.Fees.calculateLateFee(10);
var res = util.calculateLateFee(10);
console.log(res);
var res2 = Utility.maxBooksAllowed(25);
console.log(res2);
