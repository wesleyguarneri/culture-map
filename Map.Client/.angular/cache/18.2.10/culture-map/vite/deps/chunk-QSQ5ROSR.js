import {
  l2 as l
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/grouping.js
function e(e2, o2) {
  let r2;
  if ("string" == typeof e2) r2 = l(e2 + `-seed(${o2})`);
  else {
    let t = 12;
    r2 = e2 ^ o2;
    do {
      r2 = 107 * (r2 >> 8 ^ r2) + t | 0;
    } while (0 != --t);
  }
  return (1 + r2 / (1 << 31)) / 2;
}
function o(t) {
  return Math.floor(e(t, r) * n);
}
var r = 53290320;
var n = 10;

export {
  e,
  o
};
//# sourceMappingURL=chunk-QSQ5ROSR.js.map
