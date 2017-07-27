
describe("To Uppercase", function() {
    var convert = require('../../lib/gp_sql_formatter/Convert');
    var compare = require('../../lib/gp_sql_formatter/Compare');
    var action = require('../../lib/gp_sql_formatter/Action');
    it("compare", function() {
         const result = convert.Convert(
            ["foo", "bar"], ["BAR"],
            compare.isOneKeyword, action.toUpperCase
        );
        expect(result).toEqual(["foo", "BAR"]);
    })
});