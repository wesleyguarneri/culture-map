import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d,
  e,
  j,
  l,
  p,
  q,
  u
} from "./chunk-B76NC7GX.js";
import {
  n
} from "./chunk-BZHHBBFX.js";

// ../../../node_modules/@arcgis/core/views/support/geometry2dUtils.js
function m2(t2, n2) {
  return t2[0] * n2[1] - t2[1] * n2[0];
}
function E(t2, n2, o) {
  const c = j(o, n2) / p(o);
  return l(t2, o, c);
}
function I(t2, n2, r2, e2, s = r2) {
  return e(x, e2, r2), e(g, n2, s), E(A, g, x), u(t2, s, A);
}
function N(t2, n2, r2, e2) {
  e(x, n2, r2);
  const s = e2 / q(x);
  return d(t2, r2, x, s);
}
function b(t2, n2) {
  const r2 = t2.start, e2 = t2.end, s = n2.start, c = n2.end, i = e(x, e2, r2), f = e(M, c, s), a = m2(i, f);
  if (Math.abs(a) <= v) return [];
  const p2 = e(g, r2, s), h = m2(f, p2) / a, E2 = m2(i, p2) / a;
  if (h >= 0) {
    if (E2 >= 0 || n2.type === j2.LINE) return [d(A, r2, i, h)];
  } else if (t2.type === j2.LINE && (E2 >= 0 || n2.type === j2.LINE)) return [d(A, r2, i, h)];
  return [];
}
function d2(t2, n2, s) {
  const c = [], i = e(x, t2.end, t2.start), f = e(M, t2.start, n2), a = p(i), p2 = 2 * j(i, f), m3 = p2 * p2 - 4 * a * (p(f) - s * s);
  if (0 === m3) {
    const n3 = -p2 / (2 * a);
    (t2.type === j2.LINE || n3 >= 0) && c.push(d(A, t2.start, i, n3));
  } else if (m3 > 0) {
    const n3 = Math.sqrt(m3), r2 = (-p2 + n3) / (2 * a);
    (t2.type === j2.LINE || r2 >= 0) && c.push(d(A, t2.start, i, r2));
    const e2 = (-p2 - n3) / (2 * a);
    (t2.type === j2.LINE || e2 >= 0) && c.push(d(g, t2.start, i, e2));
  }
  return c;
}
var j2;
!function(t2) {
  t2[t2.RAY = 0] = "RAY", t2[t2.LINE = 1] = "LINE";
}(j2 || (j2 = {}));
var v = 1e-6;
var x = n();
var M = n();
var g = n();
var A = n();

export {
  I,
  N,
  b,
  d2 as d,
  j2 as j
};
//# sourceMappingURL=chunk-XUM2DDAI.js.map
