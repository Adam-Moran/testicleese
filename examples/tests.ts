import assert = require('assert');
import * as testicleese from '../src/index'

testicleese.describe("MyJSUtilities", () => {
 
    testicleese.it("should be able to lower case a string", function () {
        assert.ok(true);
    });

    testicleese.it("should be able to upper case a string", function () {
        assert.ok(false);
    });
});

testicleese.describe("MyJSUtilities2", () => {
 
    testicleese.it("second Cat Test", function () {
        assert.ok(true);
    });
});
