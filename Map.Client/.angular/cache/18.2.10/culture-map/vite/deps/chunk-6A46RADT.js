import {
  o as o2
} from "./chunk-PPQDPHZN.js";
import {
  V
} from "./chunk-ZE47C44H.js";
import {
  U
} from "./chunk-4OGGMTIH.js";
import {
  P,
  _,
  g,
  o,
  p,
  r,
  u,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/analysis/support/measurementUtils.js
function g2(s, o3) {
  const i = V(o3);
  o(i, 0, 0, 0);
  for (let t = 0; t < s.length; ++t) u(i, i, s[t]);
  g(i, i, 1 / s.length);
  let f = 0;
  for (let t = 0; t < s.length; ++t) f = Math.max(f, p(i, s[t]));
  o3[3] = Math.sqrt(f);
}
function h(t, r2) {
  if (t.length < 3) throw new Error("need at least 3 points to fit a plane");
  U(t[0], t[1], t[2], r2);
}
function p2(t, r2) {
  return P(t, r2) + t[3];
}
function m(t, r2, e, n2) {
  const s = b;
  return r(s.rings[0][0], t), r(s.rings[0][1], r2), r(s.rings[0][2], e), r(s.rings[0][3], t), s.spatialReference = n2, o2(s);
}
function j(e, n2 = null, l = true) {
  const a = 1e-6, u2 = (t, r2) => {
    if (0 === r2[0] && 0 === r2[1] && 0 === r2[2]) return false;
    for (let e2 = 0; e2 < t.length; ++e2) if (P(r2, t[e2]) < -a) return false;
    return true;
  };
  if (0 === e.length) return false;
  if (1 === e.length) return n2 && r(n2, e[0]), true;
  o(x, 0, 0, 0);
  for (let t = 0; t < e.length; ++t) u(x, x, e[t]);
  if (z(x, x), u2(e, x)) return n2 && r(n2, x), true;
  if (!l) return false;
  for (let t = 0; t < e.length; ++t) for (let r2 = 0; r2 < e.length; ++r2) if (t !== r2 && (_(x, e[t], e[r2]), z(x, x), u2(e, x))) return n2 && r(n2, x), true;
  return false;
}
function M(t) {
  return "mouse" !== t.pointerType || 0 === t.button;
}
var b = {
  hasM: false,
  hasZ: true,
  rings: [[n(), n(), n(), n()]],
  spatialReference: null,
  type: "polygon"
};
var x = n();

export {
  g2 as g,
  h,
  p2 as p,
  m,
  j,
  M
};
//# sourceMappingURL=chunk-6A46RADT.js.map
