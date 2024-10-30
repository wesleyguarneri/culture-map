import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s
} from "./chunk-44ZUWZXU.js";
import {
  c
} from "./chunk-2TNGEJGS.js";
import {
  K,
  P,
  _,
  e,
  g,
  r,
  u,
  z
} from "./chunk-MZM4INJV.js";
import {
  n,
  t
} from "./chunk-J4GMQHGL.js";
import {
  h
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/geometry/support/ray.js
function m(i) {
  return i ? j(t(i.origin), t(i.direction)) : j(n(), n());
}
function j(i, r2) {
  return {
    origin: i,
    direction: r2
  };
}
function p(r2, n2) {
  return h(r2.origin, n2.origin) && h(r2.direction, n2.direction);
}
function l(i, r2) {
  const n2 = q.get();
  return n2.origin = i, n2.direction = r2, n2;
}
function b(i, r2 = m()) {
  return v(i.origin, i.direction, r2);
}
function k(i, r2, t2 = m()) {
  return r(t2.origin, i), e(t2.direction, r2, i), t2;
}
function v(i, r2, o = m()) {
  return r(o.origin, i), r(o.direction, r2), o;
}
function x(i, r2) {
  const n2 = _(c.get(), z(c.get(), i.direction), e(c.get(), r2, i.origin));
  return P(n2, n2);
}
function S(i, r2, n2) {
  const t2 = P(i.direction, e(n2, r2, i.origin));
  return u(n2, i.origin, g(n2, i.direction, t2)), n2;
}
function h2(i, r2, n2, o) {
  const t2 = i.direction, c2 = r2.direction, a = K(w, r2.origin, i.origin), f = P(t2, c2), d = P(c2, a), m2 = P(t2, a), j2 = P(t2, t2), p2 = P(c2, c2), l2 = (f * d + m2 * p2) / (j2 * p2 - f * f), b2 = (f * m2 - d * j2) / (j2 * p2 - f * f);
  return u(n2, i.origin, g(w, t2, l2)), u(o, r2.origin, g(w, c2, b2)), [n2, o];
}
var q = new s(() => m());
var w = n();

export {
  m,
  p,
  l,
  b,
  k,
  v,
  x,
  S,
  h2 as h
};
//# sourceMappingURL=chunk-6ZLH7XBS.js.map
