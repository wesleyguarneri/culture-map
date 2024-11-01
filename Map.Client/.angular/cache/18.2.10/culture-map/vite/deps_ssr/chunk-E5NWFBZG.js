import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n
} from "./chunk-VSQZQLTQ.js";
import {
  _
} from "./chunk-K43CZ3M5.js";
import {
  e as e2,
  u
} from "./chunk-VYTPFEL2.js";
import {
  e
} from "./chunk-2OZSYJDX.js";

// ../../../node_modules/@arcgis/core/renderers/support/heatmapUtils.js
var c = 2.4;
function e3(t) {
  return e2(t * c);
}
function a(t) {
  return u(t) / c;
}
function s(r, o, i, c2) {
  let {
    color: e4,
    ratio: a2
  } = o, {
    color: s2,
    ratio: f2
  } = i;
  if (f2 === a2) {
    const t = 1e-6;
    1 === f2 ? a2 -= t : f2 += t;
  }
  const l2 = e((c2 - a2) / (f2 - a2), 0, 1);
  _(r, e4.toArray(), s2.toArray(), l2);
}
function f(t) {
  const r = 512, o = new Uint8ClampedArray(4 * r);
  if (t = t.filter(({
    ratio: t2
  }) => t2 >= 0 && t2 <= 1).sort((t2, r2) => t2.ratio - r2.ratio).map(({
    color: t2,
    ratio: r2
  }) => ({
    color: t2,
    ratio: Math.max(r2, 1e-3)
  })), t.length < 1) return o;
  let n2 = t[0], c2 = t[0], e4 = 1;
  const a2 = n();
  for (let i = 0; i < r; i++) {
    const f2 = (i + 0.5) / r;
    for (; f2 > c2.ratio && e4 < t.length; ) n2 = c2, c2 = t[e4++];
    s(a2, n2, c2, f2), o.set(a2, 4 * i);
  }
  return o;
}
function l(t, r, o) {
  const n2 = Math.sqrt(t ** 2 + r ** 2) / o;
  return n2 > 1 ? 0 : 3 / (Math.PI * o ** 2) * (1 - n2 ** 2) ** 2;
}
function u2(t) {
  return "function" == typeof t ? t : t ? (r) => +r[t] : () => 1;
}

export {
  c,
  e3 as e,
  a,
  f,
  l,
  u2 as u
};
//# sourceMappingURL=chunk-E5NWFBZG.js.map
