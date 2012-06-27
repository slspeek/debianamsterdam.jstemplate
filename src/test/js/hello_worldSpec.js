/*global expect:false, calculate:false, describe:false, it:false */
describe("Hello World tests", function () {
    "use strict";
    it("42 = 13 + 29", function () {
        expect(calculate(13, 29)).toEqual(42);
    });
});
