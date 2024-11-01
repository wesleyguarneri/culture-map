import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  W2 as W
} from "./chunk-JJS7PR2U.js";

// ../../../node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js
function t(t2, e2) {
  return e2 ? "xoffset" in e2 && e2.xoffset ? Math.max(t2, Math.abs(e2.xoffset)) : "yoffset" in e2 && e2.yoffset ? Math.max(t2, Math.abs(e2.yoffset || 0)) : t2 : t2;
}
function e(t2) {
  let e2 = 0, n2 = 0;
  for (let r3 = 0; r3 < t2.length; r3++) {
    const o2 = t2[r3].size;
    "number" == typeof o2 && (e2 += o2, n2++);
  }
  return e2 / n2;
}
function n(t2, n2) {
  return "number" == typeof t2 ? t2 : t2?.stops?.length ? e(t2.stops) : n2;
}
function r(t2, e2) {
  if (!e2) return t2;
  const r3 = e2.filter((t3) => "size" === t3.type).map((e3) => {
    const {
      maxSize: r4,
      minSize: o3
    } = e3;
    return (n(r4, t2) + n(o3, t2)) / 2;
  });
  let o2 = 0;
  const s = r3.length;
  if (0 === s) return t2;
  for (let n2 = 0; n2 < s; n2++) o2 += r3[n2];
  const f = Math.floor(o2 / s);
  return Math.max(f, t2);
}
function o(e2) {
  const n2 = e2?.renderer, o2 = e2?.pointerType, s = "touch" === o2 ? 9 : 6;
  if (!n2) return s;
  const f = "visualVariables" in n2 ? r(s, n2.visualVariables) : s;
  if ("simple" === n2.type) return t(f, n2.symbol);
  if ("unique-value" === n2.type) {
    let e3 = f;
    return n2.uniqueValueInfos?.forEach((n3) => {
      e3 = t(e3, n3.symbol);
    }), e3;
  }
  if ("class-breaks" === n2.type) {
    let e3 = f;
    return n2.classBreakInfos.forEach((n3) => {
      e3 = t(e3, n3.symbol);
    }), e3;
  }
  return "dot-density" === n2.type || n2.type, f;
}

// ../../../node_modules/@arcgis/core/views/support/drapedUtils.js
function r2(t2, r3, i2, a2 = new w()) {
  let o2 = 0;
  if ("2d" === i2.type) o2 = r3 * (i2.resolution ?? 0);
  else if ("3d" === i2.type) {
    const n2 = i2.overlayPixelSizeInMapUnits(t2), a3 = i2.basemapSpatialReference;
    o2 = null == a3 || a3.equals(i2.spatialReference) ? r3 * n2 : W(a3) / W(i2.spatialReference);
  }
  const s = t2.x - o2, l = t2.y - o2, m = t2.x + o2, p = t2.y + o2, {
    spatialReference: c
  } = i2;
  return a2.xmin = Math.min(s, m), a2.ymin = Math.min(l, p), a2.xmax = Math.max(s, m), a2.ymax = Math.max(l, p), a2.spatialReference = c, a2;
}
function i(e2, n2, i2) {
  const o2 = i2.toMap(e2);
  if (null == o2) return false;
  return r2(o2, o(), i2, a).intersects(n2);
}
var a = new w();

export {
  o,
  r2 as r,
  i
};
//# sourceMappingURL=chunk-WTF7K3GK.js.map
