#!/usr/bin/node
const Utils = {}

Utils.calculateNumber = function (type, a, b) {
  a = Math.round(a)
  b = Math.round(b)
  if (type === 'SUM') {
    return a + b;
  } else if (type === 'SUBTRACT') {
    return a - b;
  } else if (type == 'DIVIDE') {
    return b != 0 ? a / b : 'Error';
  }
}

module.exports = Utils;
