import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  m
} from "./chunk-2OZSYJDX.js";
import {
  A,
  P,
  _,
  e,
  g,
  o,
  s,
  u,
  z
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/support/mathUtils.js
function m2(t) {
  const n2 = t[0] * t[0] + t[4] * t[4] + t[8] * t[8], s2 = t[1] * t[1] + t[5] * t[5] + t[9] * t[9], o2 = t[2] * t[2] + t[6] * t[6] + t[10] * t[10];
  return Math.sqrt(Math.max(n2, s2, o2));
}
function g2(t, s2) {
  const o2 = Math.sqrt(s2[0] * s2[0] + s2[4] * s2[4] + s2[8] * s2[8]), r = Math.sqrt(s2[1] * s2[1] + s2[5] * s2[5] + s2[9] * s2[9]), a = Math.sqrt(s2[2] * s2[2] + s2[6] * s2[6] + s2[10] * s2[10]);
  return o(t, o2, r, a), t;
}
function b(t, r, a) {
  a = a || t;
  const c = P(t, r);
  o(a, t[0] - c * r[0], t[1] - c * r[1], t[2] - c * r[2]), z(a, a);
}
function j(t, s2, a) {
  Math.abs(t[0]) > Math.abs(t[1]) ? o(s2, 0, 1, 0) : o(s2, 1, 0, 0), _(a, t, s2), _(s2, a, t), z(a, a), z(s2, s2);
}
function p(t, n2, s2, o2, r, a) {
  const c = t + (n2 - t) * r;
  return c + (s2 + (o2 - s2) * r - c) * a;
}
function q(t, n2, o2, r = n()) {
  const f = s(t), e2 = s(n2), M = P(t, n2) / (f * e2);
  if (M < 0.9999999999999999) {
    const s2 = Math.acos(M), a = ((1 - o2) * f + o2 * e2) / Math.sin(s2), u2 = a / f * Math.sin((1 - o2) * s2), h = a / e2 * Math.sin(o2 * s2);
    return g(A2, t, u2), g(B, n2, h), u(r, A2, B);
  }
  return A(r, t, n2, o2);
}
function x(t, n2, r, e2 = n(), M = n()) {
  const l = s(t), m3 = s(n2), g3 = P(t, n2) / (l * m3);
  if (g3 < 0.9999999999999999) {
    const s2 = Math.acos(g3), o2 = Math.sin(s2), a = Math.sin(r * s2), u2 = Math.sin((1 - r) * s2), f = (1 - r) * l + r * m3;
    {
      const s3 = f / o2, r2 = s3 / m3 * a;
      g(A2, t, s3 / l * u2), g(B, n2, r2), u(e2, A2, B);
    }
    {
      const h = 1 / l * (-Math.cos((1 - r) * s2) * s2 * f + u2 * (-l + m3));
      g(A2, t, h);
      const e3 = 1 / m3 * (Math.cos(r * s2) * s2 * f + a * (-l + m3));
      g(B, n2, e3), u(M, A2, B), g(M, M, 1 / o2);
    }
    return M;
  }
  return A(e2, t, n2, r), e(M, n2, t), z(M, M), M;
}
function v(n2, a, c) {
  n2 = z(A2, n2), a = z(B, a);
  const i = m(P(n2, a));
  if (c) {
    const t = _(z2, n2, a);
    if (P(t, c) < 0) return -i;
  }
  return i;
}
function k(t) {
  const n2 = t.length;
  return (s2) => {
    if (s2 <= t[0][0]) return t[0][1];
    if (s2 >= t[n2 - 1][0]) return t[n2 - 1][1];
    let o2 = 1;
    for (; s2 > t[o2][0]; ) o2++;
    const r = t[o2 - 1][0], a = t[o2][0], c = (a - s2) / (a - r);
    return c * t[o2 - 1][1] + (1 - c) * t[o2][1];
  };
}
function U(t, n2, a, c) {
  e(w, n2, t), e(y, a, t), _(c, w, y), z(c, c), c[3] = -P(t, c);
}
function d(t, s2) {
  if (o(s2, 0, 0, 0), t.length > 0) {
    for (let n2 = 0; n2 < t.length; ++n2) u(s2, s2, t[n2]);
    g(s2, s2, 1 / t.length);
  }
}
var w = n();
var y = n();
var z2 = n();
var A2 = n();
var B = n();

export {
  m2 as m,
  g2 as g,
  b,
  j,
  p,
  q,
  x,
  v,
  k,
  U,
  d
};
//# sourceMappingURL=chunk-OYGNGIHQ.js.map
