import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-62ZEBDPC.js";
import {
  l,
  o as o2
} from "./chunk-HUOFTIIK.js";
import {
  O,
  R,
  X
} from "./chunk-KYLW5XXS.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var A = l(R.SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE_MINUS_SRC_ALPHA);
var N = l(R.ONE, R.ZERO, R.ONE, R.ONE_MINUS_SRC_ALPHA);
function c(r) {
  return r === o.FrontFace ? null : N;
}
function l2(r) {
  return r === o.FrontFace ? o2 : null;
}
var E = 5e5;
var O2 = {
  factor: -1,
  units: -2
};
function _(n) {
  return n ? O2 : null;
}
function f(r, o3 = O.LESS) {
  return r === o.NONE || r === o.FrontFace ? o3 : O.LEQUAL;
}
function s(r) {
  return r === o.ColorAlpha ? {
    buffers: [X.COLOR_ATTACHMENT0, X.COLOR_ATTACHMENT1]
  } : null;
}

export {
  A,
  c,
  l2 as l,
  E,
  O2 as O,
  _,
  f,
  s
};
//# sourceMappingURL=chunk-XUZTWNKD.js.map
