const assert = require("chai").assert;
const computeGeometries = require("../codelabone2.js");

describe("computeGeometries", function () {
    
      it("check that the function returns expected values", function () {
        let expected = [
          [12.571428571428571, 12.571428571428571],
          [12, 14],
          [20, 18],
          [0, 594],
        ];
        assert.deepEqual(computeGeometries(2, [3, 4], [4, 5], [3, 7]), expected);
  });
  });

