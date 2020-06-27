"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whip = whip;

function whip(walks, hitsAllowed, inningsPitched) {
  return (walks + hitsAllowed) / inningsPitched;
}