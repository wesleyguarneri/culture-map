import {
  o as o2
} from "./chunk-VS26W5Y5.js";
import {
  c,
  i,
  r,
  u
} from "./chunk-JYODC3YQ.js";
import {
  e
} from "./chunk-TYQXPPSP.js";
import {
  S,
  o
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/core/perspectiveUtils.js
var f = n();
var n2 = e();
var l = e();
var u2 = e();
function p(r2, s, i2) {
  return o(f, s[0], s[1], 1), S(f, f, u(n2, i2)), 0 === f[2] ? o2(r2, f[0], f[1]) : o2(r2, f[0] / f[2], f[1] / f[2]);
}
function j(t, i2, m) {
  return x(l, i2[0], i2[1], i2[2], i2[3], i2[4], i2[5], i2[6], i2[7]), x(u2, m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7]), i(t, c(l, l), u2), 0 !== t[8] && (t[0] /= t[8], t[1] /= t[8], t[2] /= t[8], t[3] /= t[8], t[4] /= t[8], t[5] /= t[8], t[6] /= t[8], t[7] /= t[8], t[8] /= t[8]), t;
}
function x(m, o3, c2, l2, u3, p2, j2, x2, b) {
  r(m, o3, l2, p2, c2, u3, j2, 1, 1, 1), o(f, x2, b, 1), c(n2, m);
  const [g, h, v] = S(f, f, u(n2, n2));
  return r(n2, g, 0, 0, 0, h, 0, 0, 0, v), i(m, n2, m);
}

export {
  p,
  j
};
//# sourceMappingURL=chunk-M6OMH2UP.js.map
