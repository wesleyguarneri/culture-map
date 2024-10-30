import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  $,
  B,
  D,
  F,
  M,
  Z,
  d,
  g,
  h,
  j,
  p,
  w,
  x,
  y
} from "./chunk-WYPPXVX7.js";
import {
  s
} from "./chunk-T2SCEBLQ.js";
import {
  a
} from "./chunk-HKAONIBH.js";

// ../../../node_modules/@arcgis/core/core/quantityFormatUtils.js
function g2(t, a2, n, u = 2, i = "abbr") {
  return g(t, s(a2, n).value, n, u, i);
}
function L(t, e, n, u = 2, i = "abbr") {
  return p(t, s(e, n).value, n, u, i);
}
function M2(t, r, e = 2, a2 = "abbr") {
  return D(t, r.value, r.unit, e, a2);
}
function d2(t, r, e = 2, a2 = "abbr") {
  return x(t, r.value, r.unit, e, a2);
}
function w2(t, r, e = 2, a2 = "abbr") {
  return y(t, r.value, r.unit, e, a2);
}
function I(t, r, e = 2, a2 = "abbr") {
  return F(t, r.value, r.unit, e, a2);
}
function R(t, r, e = 2, a2 = "abbr") {
  return $(t, r.value, r.unit, e, a2);
}
function y2(t, r, e = 2, a2 = "abbr") {
  return d(t, r.value, r.unit, e, a2);
}
function V(t, r, e = 2, a2 = "abbr") {
  return h(t, r.value, r.unit, e, a2);
}
function j2(t, r, e = 2, a2 = "abbr") {
  return B(t, r.value, r.unit, e, a2);
}
function D2(t, r, e = 2, a2 = "abbr") {
  return M(t, r.value, r.unit, e, a2);
}
function A(t, r, e = 2, a2 = "abbr") {
  return j(t, r.value, r.unit, e, a2);
}
function U(r, e, a2, n = a, u = true) {
  return w(r.value, r.unit, r.rotationType, e, a2, n, u);
}
function q(t, r, e) {
  return Z(t.value, t.unit, t.rotationType, r, e);
}
function x2(t, r, e, a2, n = "abbr") {
  switch (a2 = a2 ?? 2, e) {
    case "imperial":
      return y2(t, r, a2, n);
    case "metric":
      return M2(t, r, a2, n);
    default:
      return g2(t, r, e, a2, n);
  }
}
function C(t, r, e, a2 = 2, n = "abbr") {
  switch (e) {
    case "imperial":
      return V(t, r, a2, n);
    case "metric":
      return d2(t, r, a2, n);
    default:
      return L(t, r, e, a2, n);
  }
}
function F2(t, r, e, a2 = 2, n = "abbr") {
  switch (e) {
    case "imperial":
      return j2(t, r, a2, n);
    case "metric":
      return w2(t, r, a2, n);
    default:
      return g2(t, r, e, a2, n);
  }
}
function S2(t, r, e, a2 = 2, n = "abbr") {
  switch (e) {
    case "imperial":
      return D2(t, r, a2, n);
    case "metric":
      return I(t, r, a2, n);
    default:
      return L(t, r, e, a2, n);
  }
}
function k(t, r, e, a2 = 2, n = "abbr") {
  switch (e) {
    case "imperial":
      return A(t, r, a2, n);
    case "metric":
      return R(t, r, a2, n);
    default:
      return g2(t, r, e, a2, n);
  }
}

export {
  g2 as g,
  M2 as M,
  w2 as w,
  y2 as y,
  j2 as j,
  U,
  q,
  x2 as x,
  C,
  F2 as F,
  S2 as S,
  k
};
//# sourceMappingURL=chunk-2I3RVFNX.js.map
