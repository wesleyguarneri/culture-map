import {
  I,
  v,
  x
} from "./chunk-ZWCV4HKG.js";
import {
  e
} from "./chunk-NQVBBKAN.js";
import {
  n
} from "./chunk-IMVP5ADD.js";
import {
  j
} from "./chunk-XTVPEVHA.js";
import {
  M,
  h
} from "./chunk-3ZXOUEQG.js";
import {
  _,
  r,
  w,
  z
} from "./chunk-AXVPJBVW.js";
import {
  m,
  s,
  y
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js
function b(r2 = C) {
  return [r2[0], r2[1], r2[2], r2[3]];
}
function q(r2, t, n2 = b()) {
  return r(y2(n2), r2), n2[3] = t, n2;
}
function d(r2, t, n2 = n()) {
  return _(n2, r2, t), z(n2, n2), n2[3] = -w(r2, t), n2;
}
function k(t, i = b()) {
  const c = j(D, t);
  return B(i, M(v(i, c))), i;
}
function U(t, n2, e2 = b()) {
  return I(D, y2(t), A(t)), I(E, y2(n2), A(n2)), x(D, E, D), B(e2, M(v(y2(e2), D)));
}
function w2(r2, t, n2, o = b()) {
  return q(s, r2, G), q(m, t, H), q(y, n2, I2), U(G, H, G), U(G, I2, o), o;
}
function y2(r2) {
  return r2;
}
function z2(r2) {
  return r2[3];
}
function A(r2) {
  return h(r2[3]);
}
function B(r2, t) {
  return r2[3] = t, r2;
}
var C = [0, 0, 1, 0];
var D = e();
var E = e();
var F = b();
var G = b();
var H = b();
var I2 = b();

export {
  b,
  q,
  d,
  k,
  w2 as w,
  y2 as y,
  z2 as z,
  A,
  C
};
//# sourceMappingURL=chunk-6A3XUATG.js.map