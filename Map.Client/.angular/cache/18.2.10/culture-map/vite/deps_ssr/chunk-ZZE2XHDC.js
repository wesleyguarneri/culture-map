import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l as l2
} from "./chunk-JEWURWPQ.js";
import {
  l
} from "./chunk-T2SCEBLQ.js";
import {
  S
} from "./chunk-LVERV6OU.js";
import {
  i
} from "./chunk-Q47GASPN.js";
import {
  n as n2
} from "./chunk-ZFES27RA.js";
import {
  F,
  K,
  b,
  v as v2
} from "./chunk-2TNGEJGS.js";
import {
  o,
  q,
  v
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  se
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/views/support/euclideanAreaMeasurementUtils.js
function g(t, o2 = U()) {
  return h(t, o2);
}
function j(t, o2 = U()) {
  return h(t, o2, false);
}
function h(r, g2, j2 = r.hasZ) {
  const h2 = l2(r.spatialReference), U2 = se(h2);
  if (null == U2) return null;
  const q3 = (t, o2) => !(o2.length < 2) && (o(t, o2[0], o2[1], j2 && o2[2] || 0), true);
  let v3 = 0;
  for (const t of r.rings) {
    const o2 = t.length;
    if (o2 < 3) continue;
    const {
      positionsWorldCoords: a
    } = g2;
    for (; a.length < o2; ) a.push(n());
    const j3 = y, U3 = o(d, 0, 0, 0), x = 1 / o2;
    for (let n3 = 0; n3 < o2; n3++) {
      if (!q3(j3, t[n3])) return null;
      if (!n2(j3, r.spatialReference, a[n3], h2)) return null;
      q(U3, U3, a[n3], x);
    }
    const C = b(a[0], a[1], U3, v2());
    if (0 === v(F(C))) continue;
    for (let t2 = 0; t2 < o2; t2++) K(C, U3, a[t2], a[t2]);
    const R = k(a);
    for (let t2 = 0; t2 < R.length; t2 += 3) v3 += S(a[R[t2]], a[R[t2 + 1]], a[R[t2 + 2]]);
  }
  return l(v3, U2);
}
var y = n();
var d = n();
function U() {
  return {
    positionsWorldCoords: []
  };
}
function k(t) {
  return i(q2(t), [], 2);
}
function q2(t) {
  const o2 = new Float64Array(2 * t.length);
  for (let r = 0; r < t.length; ++r) {
    const n3 = t[r], e = 2 * r;
    o2[e] = n3[0], o2[e + 1] = n3[1];
  }
  return o2;
}

export {
  g,
  j,
  U,
  k
};
//# sourceMappingURL=chunk-ZZE2XHDC.js.map
