import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l as l5,
  s as s4
} from "./chunk-MHXYSS6C.js";
import {
  r as r4
} from "./chunk-PPFE3CUD.js";
import {
  c as c2,
  t as t2
} from "./chunk-OPYMVWCV.js";
import {
  a
} from "./chunk-INUNNFZT.js";
import {
  T
} from "./chunk-K6JW77RY.js";
import {
  d as d2
} from "./chunk-Z3B4X2BG.js";
import {
  n as n4,
  r as r3
} from "./chunk-HKAONIBH.js";
import {
  n as n3
} from "./chunk-ZFES27RA.js";
import {
  l as l4
} from "./chunk-GNCXYHNE.js";
import {
  c,
  i
} from "./chunk-GK5M6FUR.js";
import {
  f as f3,
  l as l3
} from "./chunk-Y7SJWJAL.js";
import {
  e as e2
} from "./chunk-YGAXDKHF.js";
import {
  I,
  K
} from "./chunk-LM3JDV4W.js";
import {
  R,
  b as b2,
  l as l2,
  p as p3
} from "./chunk-KOI252FF.js";
import {
  b
} from "./chunk-GCVQXAS4.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _,
  d
} from "./chunk-TIRJMGGG.js";
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import {
  M,
  h,
  l,
  m
} from "./chunk-2OZSYJDX.js";
import {
  O,
  P,
  U,
  _ as _2,
  e,
  g,
  j,
  p as p2,
  r as r2,
  s as s3,
  u,
  x,
  z
} from "./chunk-MZM4INJV.js";
import {
  n as n2,
  r,
  t
} from "./chunk-J4GMQHGL.js";
import {
  G,
  S2 as S,
  f2 as f,
  p,
  s3 as s2
} from "./chunk-6SSA7P3A.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/camera/intersectionUtils.js
function u2(e3, r5, t3, n5) {
  return null != e3.renderCoordsHelper.fromRenderCoords(r5.eye, M2, n5) && b(t3, M2);
}
function f4(e3, r5) {
  return e3.elevationProvider ? e3.elevationProvider.getElevation(r5[0], r5[1], r5[2], e3.renderCoordsHelper.spatialReference, "ground") ?? 0 : 0;
}
function g2(o, s5, a2, c3) {
  const l6 = o.state.camera.clone();
  s5 && a2 && c3 && (l6.eye = s5, l6.center = a2, l6.up = c3), p4(o, l6.ray, b3) || r2(b3, l6.center);
  const d4 = o.state.constraints, u4 = d4.minimumPoiDistance;
  if (p2(l6.eye, b3) < u4) {
    const r5 = d4.collision.enabled;
    r2(j2, l6.viewForward), g(j2, j2, u4), r5 ? l6.eye = e(M2, b3, j2) : u(b3, l6.eye, j2);
    const s6 = o.renderCoordsHelper, a3 = s6.getAltitude(l6.eye), c4 = d4.collision.elevationMargin;
    r5 && a3 < c4 && (e(j2, b3, l6.eye), l6.eye = s6.setAltitude(M2, c4, l6.eye), u(b3, l6.eye, j2));
  }
  return l6.center = b3, l6;
}
function m2(e3, t3, n5) {
  if (!e3.state.isGlobal || !e3.stateManager.constraintsManager) return false;
  const i2 = f4(e3, t3), o = e3.stateManager.constraintsManager.nearFarHeuristic, {
    far: s5
  } = o.compute(t3, n5, e3.renderDataExtent, i2, w2), a2 = s5 * s5;
  return p2(t3, n5) > a2;
}
function p4(e3, r5, t3) {
  let n5 = v[e3.viewingMode];
  n5 || (n5 = T(e3.state.viewingMode), n5.options.backfacesTerrain = !e3.state.isGlobal, n5.options.invisibleTerrain = true, v[e3.viewingMode] = n5);
  const {
    isGlobal: i2
  } = e3.state;
  return !(!e3.sceneIntersectionHelper.intersectRay(r5, n5, t3) || m2(e3, r5.origin, t3)) || !(!e3.renderCoordsHelper.intersectManifold(r5, 0, t3) || m2(e3, r5.origin, t3)) || !!i2 && y(r5, t3, s2(e3.spatialReference).radius);
}
function y(e3, r5, n5) {
  const a2 = P(e3.origin, e3.origin) - n5 * n5, c3 = a2 > 0 ? Math.sqrt(a2) / 3 : 1;
  return g(r5, e3.direction, c3 / s3(e3.direction)), u(r5, r5, e3.origin), true;
}
var v = {};
var M2 = n2();
var b3 = n2();
var j2 = n2();
var w2 = {
  near: 0,
  far: 0
};

// ../../../node_modules/@arcgis/core/geometry/support/planetGCSUtils.js
function f5(f7) {
  return G(f7, l3) || f(f7) ? {
    wkid: S.GCSMARS2000
  } : G(f7, f3) || p(f7) ? {
    wkid: S.GCSMOON2000
  } : f2.WGS84;
}

// ../../../node_modules/@arcgis/core/views/3d/support/cameraUtilsInternal.js
var f6 = n2();
var m3 = n2();
function u3() {
  return {
    direction: n2(),
    up: n2()
  };
}
function h2(l6, u4, h4, p5, b5) {
  let j3 = z(f6, l6), d4 = P(j3, p5);
  const g4 = d4 > 0;
  d4 = Math.abs(d4), d4 > 0.99 && (d4 = Math.abs(P(u4, p5)), d4 < 0.99 ? (r2(j3, u4), g4 && g(j3, j3, -1)) : j3 = null);
  let v4 = 0;
  if (j3) {
    g(m3, p5, P(p5, j3)), e(j3, j3, m3);
    const o = P(j3, b5) / (s3(j3) * s3(b5));
    _2(m3, j3, b5);
    v4 = (P(m3, p5) > 0 ? 1 : -1) * M(m(o));
  }
  const x3 = M(m(-P(p5, l6) / s3(l6)));
  return h4 ? (h4.heading = v4, h4.tilt = x3, h4) : {
    heading: v4,
    tilt: x3
  };
}

// ../../../node_modules/@arcgis/core/chunks/cameraUtilsPlanar.js
var T2 = r(0, 1, 0);
var d3 = r(0, 0, 1);
var g3 = e2();
var y2 = n2();
var x2 = n2();
function h3(t3, i2, c3, s5 = u3()) {
  const {
    direction: m4,
    up: l6
  } = s5;
  return R(g3, -h(i2)), l2(g3, g3, h(c3)), O(m4, d3, g3), g(m4, m4, -1), O(l6, T2, g3), s5;
}
function b4(t3, e3, o, r5) {
  return h2(e3, o, r5, d3, T2);
}
function v2(t3, e3, o, r5) {
  const i2 = h3(t3, o, r5), n5 = n2();
  return g(n5, i2.direction, -e3), u(n5, n5, t3), {
    up: i2.up,
    eye: n5,
    heading: o,
    tilt: r5
  };
}
function R2(e3) {
  return M(e3);
}
function _3(t3) {
  return h(t3);
}
function E(t3, e3, o, r5, i2) {
  const n5 = t3.renderSpatialReference, a2 = t3.map && t3.spatialReference || e3.spatialReference;
  return c(e3, y2, n5), c(e3, x2, n5), y2[0] -= o / 2, x2[0] += o / 2, y2[1] -= r5 / 2, x2[1] += r5 / 2, n3(y2, n5, y2, a2), n3(x2, n5, x2, a2), i2 ? (i2.xmin = y2[0], i2.ymin = y2[1], i2.xmax = x2[0], i2.ymax = x2[1], i2.spatialReference = a2) : i2 = new w(y2[0], y2[1], x2[0], x2[1], a2), i2;
}
var H = Object.freeze(Object.defineProperty({
  __proto__: null,
  directionToHeadingTilt: b4,
  eyeForCenterWithHeadingTilt: v2,
  eyeTiltToLookAtTilt: _3,
  headingTiltToDirectionUp: h3,
  lookAtTiltToEyeTilt: R2,
  toExtent: E
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/chunks/cameraUtilsSpherical.js
var I2 = r(0, 0, 1);
var P2 = z(n2(), r(1, 1, 1));
var U2 = new n4(-180, 180);
var v3 = e2();
var w3 = n2();
var q = n2();
function S2(t3, e3, i2, a2 = u3()) {
  _2(w3, t3, I2), 0 === P(w3, w3) && _2(w3, t3, P2), p3(v3, -h(e3), t3), b2(v3, v3, -h(i2), w3);
  const {
    up: s5,
    direction: p5
  } = a2;
  return _2(s5, w3, t3), z(s5, s5), O(s5, s5, v3), z(p5, t3), j(p5, p5), O(p5, p5, v3), a2;
}
function _4(t3, e3, o, i2) {
  const a2 = w3, r5 = q;
  return z(a2, t3), _2(q, a2, I2), 0 === P(q, q) && _2(q, a2, P2), _2(r5, q, a2), h2(e3, o, i2, a2, r5);
}
function k(t3, e3, i2, r5) {
  const n5 = {
    eye: n2(),
    up: null,
    tilt: r5,
    heading: i2
  }, s5 = w3;
  s5[0] = t3[0], s5[1] = t3[2], s5[2] = -t3[1];
  const c3 = e3, l6 = h(i2), m4 = h(r5), f7 = Math.sin(l6), h4 = Math.cos(l6), y3 = Math.sin(m4), d4 = Math.cos(m4), g4 = s3(s5);
  let j3;
  if (Math.abs(m4) < 1e-8) j3 = c3 + g4;
  else {
    const t4 = g4 / y3, e4 = l(c3 / t4), o = Math.PI - m4 - e4;
    j3 = t4 * Math.sin(o);
  }
  const T3 = d4 * c3, b5 = c3 * c3 * (y3 * y3), x3 = h4 * h4 * b5, R3 = j3 - T3, I4 = R3 * R3, P3 = x3 * (x3 + I4 - s5[1] * s5[1]);
  if (P3 < 0) return g(n5.eye, s5, j3 / g4), n5.tilt = 0, H2(n5, t3);
  const U3 = Math.sqrt(P3), v4 = s5[1] * R3, q3 = x3 + I4;
  let S3;
  if (S3 = h4 > 0 ? -U3 + v4 : U3 + v4, Math.abs(q3) < 1e-8) return g4 < 1e-8 ? (n5.eye[0] = 0, n5.eye[1] = 0, n5.eye[2] = c3) : g(n5.eye, s5, j3 / g4), n5.tilt = 0, E2(n5.eye), H2(n5, t3);
  n5.eye[1] = S3 / q3;
  const _6 = f7 * f7 * b5, k3 = y3 * c3, W3 = h4 * k3 * n5.eye[1], z3 = n5.eye[1] * n5.eye[1], A2 = 1 - z3, C2 = Math.sqrt(A2), G3 = x3 * z3 + _6 - 2 * W3 * C2 * R3 + A2 * I4;
  return Math.abs(G3) < 1e-8 ? (g(n5.eye, s5, j3 / g4), n5.tilt = 0, E2(n5.eye), H2(n5, t3)) : (n5.eye[0] = (A2 * (j3 * s5[0] - T3 * s5[0]) - k3 * C2 * (s5[0] * n5.eye[1] * h4 + s5[2] * f7)) / G3, n5.eye[2] = (A2 * (j3 * s5[2] - T3 * s5[2]) - k3 * C2 * (s5[2] * n5.eye[1] * h4 - s5[0] * f7)) / G3, g(n5.eye, n5.eye, j3), E2(n5.eye), H2(n5, t3));
}
function E2(t3) {
  const e3 = t3[1];
  t3[1] = -t3[2], t3[2] = e3;
}
function H2(t3, e3) {
  const o = S2(e3, t3.heading, t3.tilt);
  return t3.up = o.up, t3;
}
function W(t3, e3, o) {
  const r5 = s3(e3), n5 = Math.sqrt(o * o + r5 * r5 - 2 * o * r5 * Math.cos(Math.PI - t3)), s5 = l(o / (n5 / Math.sin(t3)));
  return M(t3 - s5);
}
function z2(t3, e3, i2) {
  const r5 = h(t3), n5 = s3(e3);
  return l(i2 / (n5 / Math.sin(r5))) + r5;
}
function A(t3, a2, r5, n5, s5) {
  let c3, l6, m4, f7;
  const h4 = a2.latitude, p5 = s2(t3.spatialReference).radius, u4 = a2.longitude, y3 = l5(h4, r5, p5) / 2;
  c3 = u4 - y3, l6 = u4 + y3;
  const M3 = h(h4), b5 = (1 + Math.sin(M3)) / (1 - Math.sin(M3)), x3 = (b5 + 1) * Math.tan(n5 / p5 / 2), I4 = x3 * x3;
  function P3(t4) {
    const o = Math.PI / 2;
    return (t4 = r3.normalize(t4, -o)) > o && (t4 = Math.PI - t4), t4;
  }
  if (m4 = 1.5 * Math.PI - 2 * Math.atan(0.5 * (x3 + Math.sqrt(4 * b5 + I4))), f7 = m4 + n5 / p5, m4 = P3(m4), f7 = P3(f7), f7 < m4) {
    const t4 = f7;
    f7 = m4, m4 = t4;
  }
  if (m4 = Math.max(M(m4), -90), f7 = Math.min(M(f7), 90), l6 = U2.monotonic(c3, l6), l6 - c3 > 180) {
    const t4 = (l6 - c3 - 180) / 2;
    c3 += t4, l6 -= t4;
  }
  const v4 = t3.spatialReference && t3.spatialReference.isGeographic ? t3.spatialReference : f2.WGS84;
  return s5 ? (s5.xmin = c3, s5.ymin = m4, s5.xmax = l6, s5.ymax = f7, s5.spatialReference = v4) : s5 = new w(c3, m4, l6, f7, v4), t3.spatialReference && t3.spatialReference.isWebMercator && d(s5, false, s5), s5;
}
var C = Object.freeze(Object.defineProperty({
  __proto__: null,
  directionToHeadingTilt: _4,
  eyeForCenterWithHeadingTilt: k,
  eyeTiltToLookAtTilt: z2,
  headingTiltToDirectionUp: S2,
  lookAtTiltToEyeTilt: W,
  toExtent: A
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/views/3d/support/cameraUtils.js
var H3 = () => n.getLogger("esri.views.3d.support.cameraUtils");
var L = 39.37;
var G2 = 96;
var E3 = 1;
var O2 = 8;
var q2 = 5;
var I3 = 1;
var k2 = n2();
var F = {
  heading: 0,
  tilt: 0
};
var J = n2();
var V = new n4(-20037508342788905e-9, 20037508342788905e-9);
var X = new n4(-180, 180);
var K2;
function W2(e3) {
  return e3.spatialReference ?? f2.WGS84;
}
function Y(e3) {
  return "global" === e3.viewingMode ? C : H;
}
function N(e3, t3, n5, r5, o) {
  return Y(e3).headingTiltToDirectionUp(t3, n5, r5, o);
}
function Z(e3, t3) {
  if (null == t3) return null;
  const n5 = e3.renderSpatialReference, o = Y(e3).headingTiltToDirectionUp, i2 = n2();
  if (!c(t3.position, i2, n5)) return null;
  const c3 = o(i2, t3.heading, t3.tilt);
  g(c3.direction, c3.direction, e3.state.camera.distance), u(c3.direction, c3.direction, i2);
  const s5 = g2(e3, i2, c3.direction, c3.up);
  return s5.fov = h(t3.fov), s5.row = t3.layout.row, s5.rows = t3.layout.rows, s5.column = t3.layout.column, s5.columns = t3.layout.columns, s5;
}
!function(e3) {
  e3[e3.LOCKED = 0] = "LOCKED", e3[e3.ADJUST = 1] = "ADJUST";
}(K2 || (K2 = {}));
var B = n2();
function Q(t3, n5, r5) {
  const i2 = t3.renderSpatialReference, a2 = re(t3, n5.eye, n5.viewForward, n5.up, F);
  let l6 = W2(t3);
  return n3(n5.eye, i2, B, l6) || (l6 = f2.WGS84, n3(n5.eye, i2, B, l6)), null == r5 ? r5 = new d2(new _(B, l6), a2.heading, a2.tilt, M(n5.fov)) : (r5.position.x = B[0], r5.position.y = B[1], r5.position.z = B[2], r5.position.spatialReference = l6, r5.heading = a2.heading, r5.tilt = a2.tilt, r5.fov = M(n5.fov)), r5.layout.row = n5.row, r5.layout.rows = n5.rows, r5.layout.column = n5.column, r5.layout.columns = n5.columns, r5;
}
function $(e3, t3, n5) {
  const o = e3.state.camera, i2 = o.width / 2 / o.pixelRatio;
  e3.renderCoordsHelper.viewingMode === l4.Global && null != n5 && (t3 *= Math.cos(h(n5))), t3 /= e3.renderCoordsHelper.unitInMeters;
  return i2 / (G2 * L / t3) / Math.tan(o.fovX / 2);
}
function _5(e3, t3, n5) {
  const o = e3.state.camera, i2 = t3 * Math.tan(o.fovX / 2), a2 = o.width / 2 / o.pixelRatio;
  let l6 = G2 * L / (a2 / i2);
  return e3.renderCoordsHelper.viewingMode === l4.Global && null != n5 && (l6 /= Math.cos(h(n5))), l6 * e3.renderCoordsHelper.unitInMeters;
}
function ee(e3, t3, n5, r5, o, i2) {
  return __async(this, null, function* () {
    return ne(e3, t3, $(e3, n5, t3.latitude), r5, o, i2);
  });
}
function te(e3, t3, n5, r5, o, i2) {
  return Ue(e3, ce(e3, r5.heading, r5.tilt, t3, n5, o), r5.fov, i2);
}
function ne(e3, t3, n5, r5, o, a2) {
  return __async(this, null, function* () {
    const l6 = yield se(e3, r5.heading, r5.tilt, t3, n5, o, a2);
    return s(a2), be(e3, l6, r5.fov, a2);
  });
}
function re(e3, t3, n5, r5, o) {
  return Y(e3).directionToHeadingTilt(t3, n5, r5, o);
}
function oe(e3, t3) {
  return !!(e3.basemapTerrain && e3.renderCoordsHelper.fromRenderCoords(t3, J, e3.spatialReference) && e3.elevationProvider && (a(e3.elevationProvider, J) ?? 0) > J[2] - I3);
}
function ie(e3, t3, n5) {
  return __async(this, null, function* () {
    if (oe(e3, t3)) return true;
    const {
      elevationProvider: r5,
      spatialReference: o,
      renderCoordsHelper: a2
    } = e3;
    if (null == r5 || !a2.fromRenderCoords(t3, J, o)) return false;
    const [l6, c3, s5] = J, u4 = (yield r5.queryElevation(l6, c3, s5, o, "ground", n5)) ?? 0;
    return s(n5), u4 > s5 - I3;
  });
}
function ae(e3, t3, n5) {
  return __async(this, null, function* () {
    const r5 = n2();
    if (null == t3) return r2(r5, e3.state.camera.center);
    if (t3 instanceof _) {
      const {
        renderSpatialReference: o,
        basemapTerrain: a2,
        elevationProvider: l6
      } = e3, c3 = t3.spatialReference;
      if (yield i(t3, r5, o, 0, {
        signal: n5
      }), s(n5), null == t3.z && null != a2 && null != l6) {
        const o2 = yield l6.queryElevation(t3.x, t3.y, t3.z ?? 0, c3, "ground", n5);
        s(n5), null != o2 && e3.renderCoordsHelper.setAltitude(r5, o2);
      }
      return r5;
    }
    return r2(r5, t3);
  });
}
function le(e3, t3) {
  const n5 = n2();
  if (null == t3) return r2(n5, e3.state.camera.center);
  if (t3 instanceof _) {
    if (!c(t3, n5, e3.renderSpatialReference)) return null;
    const {
      basemapTerrain: r5,
      elevationProvider: o
    } = e3;
    if (null == t3.z && null != r5 && null != o) {
      const r6 = a(o, t3);
      null != r6 && e3.renderCoordsHelper.setAltitude(n5, r6);
    }
    return n5;
  }
  return r2(n5, t3);
}
function ce(e3, t3, n5, r5, o, i2) {
  return ue(e3, t3, n5, r5 instanceof _ ? r5 : null, le(e3, r5), o, i2);
}
function se(e3, t3, n5, r5, o, a2, l6) {
  return __async(this, null, function* () {
    const c3 = r5 instanceof _ ? r5 : null, s5 = yield ae(e3, r5, l6);
    return s(l6), fe(e3, t3, n5, c3, s5, o, a2, l6);
  });
}
function ue(e3, t3, n5, r5, o, i2, a2) {
  if (null == o) return null;
  if (!r5 && (r5 = new _({
    spatialReference: W2(e3)
  }), !t2(o, e3.renderSpatialReference, r5))) return null;
  const l6 = me(e3, t3, n5, o, i2, a2);
  if (pe(e3, n5, a2) && oe(e3, l6.eye)) {
    const {
      tilt: a3,
      mode: l7
    } = de(e3, n5, o, i2);
    return ue(e3, t3, a3, r5, o, i2, l7);
  }
  return he(l6, o);
}
function fe(e3, t3, n5, r5, o, a2, l6, c3) {
  return __async(this, null, function* () {
    r5 || (r5 = new _({
      spatialReference: W2(e3)
    }), (yield c2(o, e3.renderSpatialReference, r5, {
      signal: c3
    })) || (r5 = null)), s(c3);
    const s5 = me(e3, t3, n5, o, a2, l6);
    if (pe(e3, n5, l6) && (yield ie(e3, s5.eye, c3))) {
      s(c3);
      const {
        tilt: l7,
        mode: s6
      } = de(e3, n5, o, a2);
      return fe(e3, t3, l7, r5, o, a2, s6, c3);
    }
    return he(s5, o);
  });
}
function me(e3, t3, n5, r5, o, i2) {
  const a2 = je(e3, t3, n5, r5, o = Math.max(o, e3.state.constraints.minimumPoiDistance), i2);
  return (0, Y(e3).eyeForCenterWithHeadingTilt)(r5, o, a2.heading, a2.tilt);
}
function pe(e3, t3, n5) {
  const r5 = e3.map.ground.navigationConstraint;
  return n5 === K2.ADJUST && "global" === e3.viewingMode && t3 > 0 && (null == r5 || "stay-above" === r5.type);
}
function de(e3, t3, n5, r5) {
  const o = Ce(e3, n5, r5, Se(e3, r5, t3, n5));
  return {
    tilt: o,
    mode: t3 - o < 1 ? K2.LOCKED : K2.ADJUST
  };
}
function he(e3, t3) {
  return __spreadProps(__spreadValues({}, e3), {
    center: t(t3)
  });
}
function ge(e3, t3) {
  const {
    state: n5,
    spatialReference: r5
  } = e3, o = t3.spatialReference;
  return n5.isGlobal && r4(o, l4.Global) || n5.isLocal && r5.equals(o);
}
function ye(e3, t3) {
  let n5, r5, o;
  if (e3.state.isGlobal) {
    const e4 = new _(t3.xmin, t3.ymin, t3.spatialReference), i3 = new _(t3.xmax, t3.ymax, t3.spatialReference), a3 = t3.spatialReference.isGeographic ? X : V;
    n5 = new _({
      x: a3.center(e4.x, i3.x),
      y: (i3.y + e4.y) / 2,
      z: null != t3.zmax && null != t3.zmin ? (t3.zmax + t3.zmin) / 2 : void 0,
      spatialReference: t3.spatialReference
    });
    const l7 = s2(t3.spatialReference), c4 = s4(n5, e4, i3);
    r5 = c4.lon, o = c4.lat, a3.diff(e4.x, i3.x) > a3.range / 2 && (r5 += l7.halfCircumference), r5 = Math.min(r5, l7.halfCircumference), o = Math.min(o, l7.halfCircumference);
  } else {
    const i3 = e3.renderSpatialReference ?? t3.spatialReference;
    i3.equals(t3.spatialReference) || (t3 = K(t3, i3)), r5 = t3.xmax - t3.xmin, o = t3.ymax - t3.ymin;
    const a3 = null != t3.zmax && null != t3.zmin ? (t3.zmax + t3.zmin) / 2 : void 0;
    n5 = new _({
      x: t3.xmin + 0.5 * r5,
      y: t3.ymin + 0.5 * o,
      z: a3,
      spatialReference: i3
    });
  }
  const i2 = null != t3.zmax && null != t3.zmin ? t3.zmax - t3.zmin : 0, a2 = e3.state.camera, l6 = 1 / Math.tan(a2.fovX / 2), c3 = 1 / Math.tan(a2.fovY / 2), s5 = 1 / Math.tan(a2.fov / 2);
  return {
    center: n5,
    distance: Math.max(0.5 * r5 * l6, 0.5 * o * c3, 0.5 * i2 * s5) / E3
  };
}
function ve(e3, t3, n5, r5, o, a2) {
  return __async(this, null, function* () {
    const l6 = ge(e3, t3) ? t3 : yield I(t3, e3.spatialReference, {
      signal: a2
    });
    s(a2);
    const {
      center: c3,
      distance: s5
    } = ye(e3, l6), u4 = yield se(e3, n5, r5, c3, s5, o, a2);
    return s(a2), be(e3, u4, e3.camera.fov, a2);
  });
}
function we(e3, t3, n5, r5, o, i2) {
  let a2;
  try {
    a2 = ge(e3, t3) ? t3 : K(t3, e3.spatialReference);
  } catch (u4) {
    return null;
  }
  const {
    center: l6,
    distance: c3
  } = ye(e3, a2), s5 = ce(e3, n5, r5, l6, c3, o);
  return null == s5 ? null : Ue(e3, s5, e3.camera.fov, i2);
}
function Re(e3, t3, n5) {
  const r5 = e3.renderSpatialReference, o = new _({
    spatialReference: W2(e3)
  });
  if (!t2(n5, r5, o)) return null;
  const i2 = Math.tan(t3.fovX / 2), a2 = Math.tan(t3.fovY / 2), l6 = U(t3.eye, n5), s5 = 2 * l6 * i2 * E3, u4 = 2 * l6 * a2 * E3;
  return "global" === e3.viewingMode ? A(e3, o, s5, u4) : E(e3, o, s5, u4);
}
function xe(e3, t3, n5) {
  const r5 = e3.pointsOfInterest.centerOnSurfaceFrequent.distance;
  if (Math.log(n5 / r5) / Math.LN2 > O2) return true;
  const o = t3, i2 = e3.pointsOfInterest.centerOnSurfaceFrequent.renderLocation;
  return x(o, i2) / (Math.tan(0.5 * e3.state.camera.fov) * r5) > q2;
}
function je(e3, t3, n5, r5, o, i2) {
  let a2 = 0;
  return i2 === K2.ADJUST && xe(e3, r5, o) ? (t3 = 0, a2 = Te(e3, o, n5, r5)) : a2 = ze(e3, r5, o, n5), a2 = e3.state.constraints.clampTilt(o, a2), {
    heading: t3,
    tilt: n5 = Ce(e3, r5, o, a2)
  };
}
var Me = 0.7;
function Te(e3, t3, n5, r5) {
  const o = ze(e3, r5, t3, n5);
  if (!e3.state.constraints.tilt) return o;
  const i2 = e3.state.constraints.tilt(t3);
  i2.max = Math.min(i2.max, 0.5 * Math.PI);
  const a2 = i2.min * (1 - Me) + i2.max * Me;
  return Math.min(o, a2);
}
function Se(e3, t3, n5, r5) {
  let o = ze(e3, r5, t3, n5);
  if (!e3.state.constraints.tilt) return o;
  const i2 = e3.state.constraints.tilt(t3);
  return o = Math.min(o, 0.5 * Math.PI), i2.min * (1 - Me) + o * Me;
}
function Ce(e3, t3, n5, r5) {
  return Y(e3).lookAtTiltToEyeTilt(r5, t3, n5);
}
function ze(e3, t3, n5, r5) {
  return Y(e3).eyeTiltToLookAtTilt(r5, t3, n5);
}
function Ue(t3, n5, r5, o) {
  if (null == n5) return null;
  const i2 = t3.renderSpatialReference, a2 = new _({
    spatialReference: W2(t3)
  });
  return t2(n5.eye, i2, a2) ? (o ??= new d2(), o.position = a2, o.heading = n5.heading, o.tilt = n5.tilt, o.fov = r5, o) : null;
}
function be(t3, n5, r5, o) {
  return __async(this, null, function* () {
    const a2 = t3.renderSpatialReference, l6 = new _({
      spatialReference: W2(t3)
    });
    return yield c2(n5.eye, a2, l6, {
      signal: o
    }), s(o), new d2(l6, n5.heading, n5.tilt, r5);
  });
}
function Pe(e3, t3) {
  const n5 = e3.basemapTerrain?.tilingScheme;
  if (n5) return n5.levelAtScale(t3);
  H3().error("#scaleToZoom()", "Cannot compute zoom from scale without a tiling scheme");
}
function Ae(e3, t3) {
  const n5 = e3.basemapTerrain?.tilingScheme;
  if (n5) return n5.scaleAtLevel(t3);
  H3().error("#zoomToScale()", "Cannot compute scale from zoom without a tiling scheme");
}
function De(e3, t3) {
  const {
    renderSpatialReference: n5
  } = e3, r5 = f5(n5);
  let o = null;
  try {
    n3(t3.center, n5, k2, r5) && (o = k2[1]);
  } catch {
  }
  return _5(e3, t3.distance, o);
}

export {
  u2 as u,
  f4 as f,
  g2 as g,
  u3 as u2,
  K2 as K,
  W2 as W,
  N,
  Z,
  Q,
  $,
  _5 as _,
  ee,
  te,
  ne,
  re,
  ce,
  ve,
  we,
  Re,
  Pe,
  Ae,
  De
};
//# sourceMappingURL=chunk-6HPSJYGF.js.map
