import {
  a
} from "./chunk-J55F4AC2.js";
import {
  r
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/symbols/support/symbolLayerUtils3D.js
function t(r2, {
  isPrimitive: t2,
  width: n2,
  depth: o2,
  height: s2
}) {
  const c2 = t2 ? 10 : 1;
  if (null == n2 && null == s2 && null == o2) return [c2 * r2[0], c2 * r2[1], c2 * r2[2]];
  const i2 = r(n2, o2, s2);
  let u2;
  for (let e = 0; e < 3; e++) {
    const t3 = i2[e];
    if (null != t3) {
      u2 = t3 / r2[e];
      break;
    }
  }
  for (let e = 0; e < 3; e++) null == i2[e] && (i2[e] = r2[e] * u2);
  return i2;
}
var n = a(-0.5, -0.5, -0.5, 0.5, 0.5, 0.5);
var o = a(-0.5, -0.5, 0, 0.5, 0.5, 1);
var s = a(-0.5, -0.5, 0, 0.5, 0.5, 0.5);
function c(e) {
  switch (e) {
    case "sphere":
    case "cube":
    case "diamond":
      return n;
    case "cylinder":
    case "cone":
    case "inverted-cone":
      return o;
    case "tetrahedron":
      return s;
    default:
      return;
  }
}
var i = ["butt", "square", "round"];
var u = [...i, "none"];
var a2 = ["miter", "bevel", "round"];

export {
  t,
  c,
  i,
  u,
  a2 as a
};
//# sourceMappingURL=chunk-UF6JOUSJ.js.map