import {
  e
} from "./chunk-3ZXOUEQG.js";
import {
  S,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js
function s(t2, n2, r, o, a, s2 = 2) {
  const e3 = 1 / (Math.abs(r) + Math.abs(o) + Math.abs(a)), c2 = r * e3, f2 = o * e3, h = a <= 0 ? (c2 >= 0 ? 1 : -1) * (1 - Math.abs(f2)) : c2, u2 = a <= 0 ? (f2 >= 0 ? 1 : -1) * (1 - Math.abs(c2)) : f2, l = n2 * s2;
  t2[l] = i(h), t2[l + 1] = i(u2);
}
function e2(t2) {
  const n2 = t2.length / 3, r = new Int16Array(2 * n2);
  let o = 0;
  for (let a = 0; a < n2; ++a) s(r, a, t2[o++], t2[o++], t2[o++]);
  return r;
}
function c(t2, r) {
  const a = t2.length / 3, e3 = new Int16Array(2 * a);
  let c2 = 0;
  const f2 = n();
  for (let o = 0; o < a; ++o) f2[0] = t2[c2++], f2[1] = t2[c2++], f2[2] = t2[c2++], S(f2, f2, r), s(e3, o, f2[0], f2[1], f2[2]);
  return e3;
}
function f(t2, n2, o, a = 2) {
  const s2 = o * a, e3 = u(n2[s2]), c2 = u(n2[s2 + 1]), f2 = 1 - Math.abs(e3) - Math.abs(c2);
  t2[2] = f2, f2 < 0 ? (t2[0] = (e3 >= 0 ? 1 : -1) * (1 - Math.abs(c2)), t2[1] = (c2 >= 0 ? 1 : -1) * (1 - Math.abs(e3))) : (t2[0] = e3, t2[1] = c2), z(t2, t2);
}
function i(n2) {
  return e(Math.round(32767 * n2), -32767, 32767);
}
function u(n2) {
  return e(n2 / 32767, -1, 1);
}

export {
  s,
  e2 as e,
  c,
  f
};
//# sourceMappingURL=chunk-ENQEWBGS.js.map
