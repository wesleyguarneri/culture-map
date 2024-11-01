import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  D,
  G2 as G,
  I,
  T2 as T,
  p2 as p,
  u
} from "./chunk-JJS7PR2U.js";

// ../../../node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js
var p2 = new f(T);
var l = new f(G);
var f2 = new f(p);
var w = new f(u);
function a(e) {
  const t = c.get(e);
  if (t) return t;
  let s = p2;
  if (e) if (e === l) s = l;
  else if (e === f2) s = f2;
  else {
    const t2 = e.wkid, n = e.latestWkid;
    if (null != t2 || null != n) I(t2) || I(n) ? s = l : (D(t2) || D(n)) && (s = f2);
    else {
      const t3 = e.wkt2 ?? e.wkt;
      if (t3) {
        const e2 = t3.toUpperCase();
        e2 === k ? s = l : e2 === m && (s = f2);
      }
    }
  }
  return c.set(e, s), s;
}
var c = /* @__PURE__ */ new Map();
var k = l.wkt.toUpperCase();
var m = f2.wkt.toUpperCase();

export {
  l,
  f2 as f,
  w,
  a
};
//# sourceMappingURL=chunk-VWML4J2J.js.map
