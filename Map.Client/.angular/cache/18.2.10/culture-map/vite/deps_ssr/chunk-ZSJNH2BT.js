import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r
} from "./chunk-2EJFYNM7.js";
import {
  ee,
  j
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/support/elevationInfoUtils.js
function o(e) {
  return e ? j2 : z;
}
function r2(e, n) {
  return n?.mode ? n.mode : o(e).mode;
}
function u(e, n) {
  return null != n ? n : o(e);
}
function i(e, n) {
  return r2(null != e && e.hasZ, n);
}
function s(e, n) {
  return u(null != e && !!e.hasZ, n);
}
function l(e) {
  const n = g(e);
  return i(e.geometry, n);
}
function a(e) {
  const n = g(e), t = i(e.geometry, n), o2 = null != n && "on-the-ground" !== t ? R(n) : 0, r3 = n?.featureExpressionInfo;
  return {
    mode: t,
    offset: o2,
    featureExpressionInfo: r3
  };
}
function f(e) {
  return v(a(e));
}
function c(e) {
  return v(e) || d(e);
}
function d(e) {
  return "0" === e?.featureExpressionInfo?.expression;
}
function v(e) {
  if (!e) return false;
  if ("on-the-ground" === e.mode) return false;
  const n = e?.featureExpressionInfo ? e.featureExpressionInfo.expression : null;
  return !(!n || "0" === n);
}
function g(e) {
  return e.layer && "elevationInfo" in e.layer ? e.layer.elevationInfo : null;
}
function h(t, o2) {
  if (!t?.offset) return 0;
  const {
    offset: r3,
    unit: u2
  } = t;
  if ("decimal-degrees" === u2) return 0;
  const i2 = "unknown" !== u2 && u2 ? u2 : "meters", s2 = ee(o2);
  return s2 ? j(r3, i2, s2) : 0;
}
function p(e, n, t) {
  if (!t?.mode) return;
  const o2 = e.hasZ ? e.z : 0, r3 = h(t, e.spatialReference);
  switch (t.mode) {
    case "absolute-height":
      return o2 - r3;
    case "on-the-ground":
      return 0;
    case "relative-to-ground":
      return o2 - ((n.elevationProvider.getElevation(e.x, e.y, o2, e.spatialReference, "ground") ?? 0) + r3);
    case "relative-to-scene":
      return o2 - ((n.elevationProvider.getElevation(e.x, e.y, o2, e.spatialReference, "scene") ?? 0) + r3);
  }
}
function m(e, n, t, o2 = null) {
  return E(e, n.x, n.y, n.hasZ ? n.z : 0, n.spatialReference, t, o2);
}
function x(e, n, t, o2, r3 = null) {
  return E(e, n[0], n[1], n.length > 2 ? n[2] : 0, t, o2, r3);
}
function E(e, n, t, o2, r3, u2, i2 = null) {
  if (null == u2) return;
  const s2 = null != i2 ? i2.mode : "absolute-height";
  if ("on-the-ground" === s2) return 0;
  const {
    absoluteZ: l2
  } = b(n, t, o2, r3, e, u2);
  return I(l2, n, t, o2, r3, e, i2, s2);
}
function b(e, n, t, o2, r3, u2) {
  const i2 = h(u2, o2);
  switch (u2.mode) {
    case "absolute-height":
      return {
        absoluteZ: t + i2,
        elevation: 0
      };
    case "on-the-ground": {
      const t2 = r3.elevationProvider.getElevation(e, n, 0, o2, "ground") ?? 0;
      return {
        absoluteZ: t2,
        elevation: t2
      };
    }
    case "relative-to-ground": {
      const u3 = r3.elevationProvider.getElevation(e, n, t, o2, "ground") ?? 0;
      return {
        absoluteZ: t + u3 + i2,
        elevation: u3
      };
    }
    case "relative-to-scene": {
      const u3 = r3.elevationProvider.getElevation(e, n, t, o2, "scene") ?? 0;
      return {
        absoluteZ: t + u3 + i2,
        elevation: u3
      };
    }
  }
}
function I(e, n, t, o2, r3, u2, i2, s2) {
  const l2 = h(i2, r3);
  switch (s2) {
    case "absolute-height":
      return e - l2;
    case "relative-to-ground":
      return e - ((u2.elevationProvider.getElevation(n, t, o2, r3, "ground") ?? 0) + l2);
    case "relative-to-scene":
      return e - ((u2.elevationProvider.getElevation(n, t, o2, r3, "scene") ?? 0) + l2);
  }
}
function y(e, n) {
  if (null == n) return false;
  const {
    mode: t
  } = n;
  return null != t && ("scene" === e && "relative-to-scene" === t || "ground" === e && "absolute-height" !== t);
}
function Z(e, n, t) {
  return t && t.mode !== n ? `${e} only support ${n} elevation mode` : null;
}
function P(e, n, t) {
  return t?.mode === n ? `${e} do not support ${n} elevation mode` : null;
}
function w(e, n) {
  return null != n?.featureExpressionInfo && "0" !== n.featureExpressionInfo.expression ? `${e} do not support featureExpressionInfo` : null;
}
function $(e, n) {
  n && e.warn(".elevationInfo=", n);
}
function R(e) {
  return (e?.offset ?? 0) * r(e?.unit);
}
var j2 = {
  mode: "absolute-height",
  offset: 0
};
var z = {
  mode: "on-the-ground",
  offset: null
};

export {
  r2 as r,
  u,
  i,
  s,
  l,
  a,
  f,
  c,
  d,
  v,
  h,
  p,
  m,
  x,
  E,
  b,
  y,
  Z,
  P,
  w,
  $,
  R,
  j2 as j,
  z
};
//# sourceMappingURL=chunk-ZSJNH2BT.js.map
