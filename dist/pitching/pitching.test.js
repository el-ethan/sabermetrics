"use strict";

var _pitching = require("./pitching");

describe('WHIP', function () {
  it("Calculates Mariano Rivera's career WHIP correctly based on his career BB, H, and IP", function () {
    var walks = 286;
    var hitsAllowed = 998;
    var inningsPitched = 1283.2;
    expect((0, _pitching.whip)(walks, hitsAllowed, inningsPitched)).toBeCloseTo(1.0);
  });
});