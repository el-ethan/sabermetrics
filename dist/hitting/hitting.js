"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obp = obp;
exports.ops = ops;

function obp(stats) {
  var hits = stats.hits,
      basesOnBalls = stats.basesOnBalls,
      hitByPitch = stats.hitByPitch,
      atBats = stats.atBats,
      sacrificeFlies = stats.sacrificeFlies;

  var _obp = (hits + basesOnBalls + hitByPitch) / (atBats + basesOnBalls + sacrificeFlies + hitByPitch);

  return parseFloat(_obp.toFixed(3));
}

function ops(stats) {
  var onBasePercentage = stats.onBasePercentage,
      slugging = stats.slugging;
  return onBasePercentage + slugging;
}