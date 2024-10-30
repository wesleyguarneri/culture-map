import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  m
} from "./chunk-T2SCEBLQ.js";
import {
  a
} from "./chunk-HKAONIBH.js";
import {
  E
} from "./chunk-EFLOBCAZ.js";
import {
  l
} from "./chunk-THZPD5CT.js";
import {
  e
} from "./chunk-2OZSYJDX.js";
import {
  A3 as A,
  F,
  J,
  K,
  T3 as T,
  j,
  v
} from "./chunk-6SSA7P3A.js";
import {
  r
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/core/unitFormatUtils.js
function b(t, n, i) {
  return t.units[n][i];
}
function g(t, n, i, r2 = 2, o = "abbr") {
  return `${l(n, {
    minimumFractionDigits: r2,
    maximumFractionDigits: r2,
    signDisplay: n > 0 ? "never" : "exceptZero"
  })} ${b(t, i, o)}`;
}
function p(t, n, i, r2 = 2, o = "abbr") {
  return `${l(n, {
    minimumFractionDigits: r2,
    maximumFractionDigits: r2,
    signDisplay: "exceptZero"
  })} ${b(t, i, o)}`;
}
function D(t, n, i, r2 = 2, o = "abbr") {
  const u = v(n, i);
  return g(t, j(n, i, u), u, r2, o);
}
function x(t, n, i, r2 = 2, o = "abbr") {
  const u = v(n, i);
  return p(t, j(n, i, u), u, r2, o);
}
function y(t, n, i, r2 = 2, o = "abbr") {
  const e2 = F(n, i);
  return g(t, j(n, i, e2), e2, r2, o);
}
function F2(t, n, i, r2 = 2, o = "abbr") {
  const e2 = F(n, i);
  return p(t, j(n, i, e2), e2, r2, o);
}
function d(t, n, i, r2 = 2, o = "abbr") {
  const e2 = J(n, i);
  return g(t, j(n, i, e2), e2, r2, o);
}
function h(t, n, i, r2 = 2, o = "abbr") {
  const e2 = J(n, i);
  return p(t, j(n, i, e2), e2, r2, o);
}
function B(t, n, i, r2 = 2, o = "abbr") {
  const e2 = T(n, i);
  return g(t, j(n, i, e2), e2, r2, o);
}
function M(t, n, i, r2 = 2, o = "abbr") {
  const e2 = T(n, i);
  return p(t, j(n, i, e2), e2, r2, o);
}
function $(t, n, i, r2 = 2, o = "abbr") {
  const e2 = K(n, i);
  return g(t, j(n, i, e2), e2, r2, o);
}
function j2(t, n, i, r2 = 2, o = "abbr") {
  const e2 = A(n, i);
  return g(t, j(n, i, e2), e2, r2, o);
}
var U = (t, n) => ({
  style: "unit",
  unitDisplay: "narrow",
  unit: "degree",
  maximumFractionDigits: n,
  minimumFractionDigits: n,
  signDisplay: t > 0 ? "never" : "exceptZero"
});
function w(t, i, o, e2, u, c = a, a2 = true) {
  let m2 = c.normalize(m(j(t, i, "degrees"), o, e2), 0, a2);
  const f = U(m2, u ?? 2);
  return m2 = I(m2, f), l(m2, f);
}
function Z(t, n, i, r2, o) {
  i !== r2 && (t = -t);
  const e2 = {
    style: "unit",
    unitDisplay: "narrow",
    unit: "degree",
    maximumFractionDigits: o = o ?? 2,
    minimumFractionDigits: o,
    signDisplay: "exceptZero"
  };
  let u = j(t, n, "degrees") % 360;
  return u = I(u, e2), l(u, e2);
}
var z = /* @__PURE__ */ new Map();
function I(t, n) {
  const i = JSON.stringify(n);
  let r2 = z.get(i);
  return r2 || (r2 = new Intl.NumberFormat("en-US", n), z.set(i, r2)), /^[-+]?360\.?0*°?$/.test(r2.format(t)) ? 0 : t;
}
var O = ["B", "kB", "MB", "GB", "TB"];
function T2(n, r2) {
  let e2 = 0 === (r2 = Math.round(r2)) ? 0 : Math.floor(Math.log(r2) / Math.log(E.KILOBYTES));
  e2 = e(e2, 0, O.length - 1);
  const s = l(r2 / E.KILOBYTES ** e2, {
    maximumFractionDigits: 2
  });
  return r(n.units.bytes[O[e2]], {
    fileSize: s
  });
}

export {
  b,
  g,
  p,
  D,
  x,
  y,
  F2 as F,
  d,
  h,
  B,
  M,
  $,
  j2 as j,
  w,
  Z,
  T2 as T
};
//# sourceMappingURL=chunk-WYPPXVX7.js.map
