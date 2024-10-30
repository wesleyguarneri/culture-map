import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  v
} from "./chunk-SNHVHW2N.js";
import {
  s as s2
} from "./chunk-44ZUWZXU.js";
import {
  _,
  e,
  s
} from "./chunk-MZM4INJV.js";
import {
  n,
  t
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/geometry/support/triangle.js
function j2(t2) {
  return t2 ? {
    p0: t(t2.p0),
    p1: t(t2.p1),
    p2: t(t2.p2)
  } : {
    p0: n(),
    p1: n(),
    p2: n()
  };
}
function S(t2, e2, n2) {
  const r2 = e2[0] - t2[0], o = e2[1] - t2[1], c2 = n2[0] - t2[0], s3 = n2[1] - t2[1];
  return 0.5 * Math.abs(r2 * s3 - o * c2);
}
function d(t2, e2, o) {
  return e(M, e2, t2), e(O, o, t2), 0.5 * s(_(M, M, O));
}
var w = new s2(v);
var x = new s2(() => j2());
var M = n();
var O = n();

export {
  S,
  d
};
//# sourceMappingURL=chunk-LVERV6OU.js.map
