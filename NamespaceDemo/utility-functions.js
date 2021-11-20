var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        Fees.calculateLateFee = function (daysLate) { return 0.25 * daysLate; };
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    Utility.maxBooksAllowed = function (age) { return age < 12 ? 3 : 10; };
    Utility.privateFunc = function () { return console.log('This is private function'); };
})(Utility || (Utility = {}));
