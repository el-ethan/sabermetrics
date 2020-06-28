"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whip = whip;
exports.k9 = k9;

function whip(walks, hitsAllowed, inningsPitched) {
  return (walks + hitsAllowed) / inningsPitched;
}

function k9(strikeouts, inningsPitched) {
  return strikeouts * 9 / inningsPitched;
}