import {
  m
} from "./chunk-XTCHBO6P.js";
import {
  e as e2
} from "./chunk-JKPO26TR.js";
import {
  M,
  c,
  f as f2,
  h as h2,
  i,
  s as s2,
  u as u3
} from "./chunk-IJVN5N2Q.js";
import {
  B,
  S,
  e,
  j,
  l,
  o,
  q,
  r as r2,
  u as u2,
  v as v2,
  x,
  y
} from "./chunk-VS26W5Y5.js";
import {
  P,
  v
} from "./chunk-Z3GMSC63.js";
import {
  n as n2,
  r
} from "./chunk-DY7FJHTG.js";
import {
  J,
  K,
  W as W2,
  _ as _2
} from "./chunk-DUTZNK67.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _,
  n
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  h
} from "./chunk-3ZXOUEQG.js";
import {
  u
} from "./chunk-POILQGXA.js";
import {
  G,
  N,
  W2 as W,
  s2 as s
} from "./chunk-JJS7PR2U.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/viewpointUtils.js
var O = 96;
var Q = 39.37;
var T = 180 / Math.PI;
function B2(t) {
  return t.wkid ? t : t.spatialReference || f.WGS84;
}
function D(t, e3) {
  return e3.type ? o(t, e3.x, e3.y) : r2(t, e3);
}
function W3(t) {
  return W(t);
}
function H(t, e3, n3 = 0) {
  let o2 = t.width, a = t.height;
  if (0 !== n3) {
    const e4 = h(n3), i3 = Math.abs(Math.cos(e4)), c3 = Math.abs(Math.sin(e4));
    o2 = t.width * i3 + t.height * c3, a = t.width * c3 + t.height * i3;
  }
  const i2 = Math.max(1, e3[0]), c2 = Math.max(1, e3[1]);
  return Math.max(o2 / i2, a / c2) * ct(t.spatialReference);
}
function J2(t, r3, n3, o2) {
  return __async(this, null, function* () {
    let a, i2;
    if (!t) return null;
    if (Array.isArray(t) && !t.length) return null;
    if (V.isCollection(t) && (t = t.toArray()), Array.isArray(t) && t.length && "object" == typeof t[0]) {
      const e3 = t.every((t2) => "attributes" in t2), a2 = t.some((t2) => !t2.geometry);
      let i3 = t;
      if (e3 && a2 && r3 && r3.allLayerViews) {
        const e4 = /* @__PURE__ */ new Map();
        for (const r4 of t) {
          const t2 = r4.layer, n5 = e4.get(t2) || [], o4 = r4.attributes[t2.objectIdField];
          null != o4 && n5.push(o4), e4.set(t2, n5);
        }
        const n4 = [];
        e4.forEach((t2, e5) => {
          const o4 = r3.allLayerViews.find((t3) => t3.layer.id === e5.id);
          if (o4 && "queryFeatures" in o4) {
            const r4 = e5.createQuery();
            r4.objectIds = t2, r4.returnGeometry = true, n4.push(o4.queryFeatures(r4));
          }
        });
        const o3 = yield Promise.all(n4), a3 = [];
        for (const t2 of o3) if (t2 && t2.features && t2.features.length) for (const e5 of t2.features) null != e5.geometry && a3.push(e5.geometry);
        i3 = a3;
      }
      for (const t2 of i3) o2 = yield J2(t2, r3, n3, o2);
      return o2;
    }
    if (Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]) a = new _(t);
    else if (t instanceof n) a = t;
    else if ("geometry" in t) {
      if (t.geometry) a = t.geometry;
      else if (t.layer) {
        const e3 = t.layer, n4 = r3.allLayerViews.find((t2) => t2.layer.id === e3.id);
        if (n4 && "queryFeatures" in n4) {
          const r4 = e3.createQuery();
          r4.objectIds = [t.attributes[e3.objectIdField]], r4.returnGeometry = true;
          const o3 = yield n4.queryFeatures(r4);
          a = o3?.features?.[0]?.geometry;
        }
      }
    }
    if (null == a) return null;
    switch (a.type) {
      case "point":
        i2 = new w({
          xmin: a.x,
          ymin: a.y,
          xmax: a.x,
          ymax: a.y,
          spatialReference: a.spatialReference
        });
        break;
      case "extent":
      case "multipoint":
      case "polygon":
      case "polyline":
        i2 = v(a);
        break;
      default:
        i2 = a.extent;
    }
    if (!i2) return null;
    _2() || J(i2.spatialReference, n3) || (yield W2());
    const c2 = K(i2, n3);
    if (!c2) return null;
    if (o2) {
      const t2 = c2.center, e3 = t2.clone();
      e3.x = P(t2.x, o2.center.x, n3), e3.x !== t2.x && c2.centerAt(e3), o2 = o2.union(c2);
    } else o2 = c2;
    return o2;
  });
}
function K2(t) {
  if (t && (!Array.isArray(t) || "number" != typeof t[0]) && ("object" == typeof t || Array.isArray(t) && "object" == typeof t[0])) {
    if ("layer" in t && null != t.layer?.minScale && null != t.layer.maxScale) {
      const e3 = t.layer;
      return {
        min: e3.minScale,
        max: e3.maxScale
      };
    }
    if (Array.isArray(t) && t.length && t.every((t2) => "layer" in t2)) {
      let e3 = 0, r3 = 0;
      for (const n3 of t) {
        const t2 = n3.layer;
        t2?.minScale && t2.maxScale && (e3 = t2.minScale < e3 ? t2.minScale : e3, r3 = t2.maxScale > r3 ? t2.maxScale : r3);
      }
      return e3 && r3 ? {
        min: e3,
        max: r3
      } : null;
    }
  }
}
function X(t, e3) {
  return G(B2(t), e3) ? t : K(t, e3);
}
function Y(e3, r3) {
  return __async(this, null, function* () {
    if (!e3 || !r3) return new m({
      targetGeometry: new _(),
      scale: 0,
      rotation: 0
    });
    let n3 = r3.spatialReference;
    const {
      constraints: o2,
      padding: a,
      viewpoint: i2,
      size: c2
    } = r3, s3 = [a ? c2[0] - a.left - a.right : c2[0], a ? c2[1] - a.top - a.bottom : c2[1]];
    let u4 = null;
    e3 instanceof m ? u4 = e3 : e3.viewpoint ? u4 = e3.viewpoint : e3.target && "esri.Viewpoint" === e3.target.declaredClass && (u4 = e3.target);
    let l2 = null;
    u4?.targetGeometry ? l2 = u4.targetGeometry : e3 instanceof w ? l2 = e3 : e3 instanceof n ? l2 = yield J2(e3, r3, n3) : e3 && (l2 = (yield J2(e3.center, r3, n3)) || (yield J2(e3.target, r3, n3)) || (yield J2(e3, r3, n3))), !l2 && i2?.targetGeometry ? l2 = i2.targetGeometry : !l2 && r3.extent && (l2 = r3.extent), n3 || (n3 = B2(r3.spatialReference || r3.extent || l2)), _2() || G(l2.spatialReference, n3) || J(l2.spatialReference, n3) || (yield W2());
    const f3 = X(l2, n3), m2 = "center" in f3 ? f3.center : f3;
    false !== r3.pickClosestTarget && "point" === m2.type && "point" === i2.targetGeometry?.type && (m2.x = P(m2.x, i2.targetGeometry.x, m2.spatialReference));
    let y2 = 0;
    u4 ? y2 = u4.rotation : e3.hasOwnProperty("rotation") ? y2 = e3.rotation : i2 && (y2 = i2.rotation);
    let p = 0;
    p = null != u4?.targetGeometry && "point" === u4.targetGeometry.type ? u4.scale : "scale" in e3 && e3.scale ? e3.scale : "zoom" in e3 && -1 !== e3.zoom && o2 && o2.effectiveLODs ? o2.zoomToScale(e3.zoom) : Array.isArray(l2) || "point" === l2.type || "extent" === l2.type && 0 === l2.width && 0 === l2.height ? i2.scale : H(X(l2.extent, n3), s3, y2);
    const g = K2(e3.target ?? e3);
    g && (g.min && g.min < p ? p = g.min : g.max && g.max > p && (p = g.max));
    let x2 = new m({
      targetGeometry: m2,
      scale: p,
      rotation: y2
    });
    return o2 && (x2 = o2.fit(x2), o2.constrainByGeometry(x2), o2.rotationEnabled || (x2.rotation = i2.rotation)), x2;
  });
}
function Z(t, e3) {
  const r3 = t.targetGeometry, n3 = e3.targetGeometry;
  return r3.x = n3.x, r3.y = n3.y, r3.spatialReference = n3.spatialReference, t.scale = e3.scale, t.rotation = e3.rotation, t;
}
function $(t, e3, r3) {
  return r3 ? o(t, 0.5 * (e3[0] - r3.right + r3.left), 0.5 * (e3[1] - r3.bottom + r3.top)) : l(t, e3, 0.5);
}
var _3 = function() {
  const t = n2();
  return function(e3, r3, n3) {
    const o2 = r3.targetGeometry;
    D(t, o2);
    const a = 0.5 * ot(r3);
    return e3.xmin = t[0] - a * n3[0], e3.ymin = t[1] - a * n3[1], e3.xmax = t[0] + a * n3[0], e3.ymax = t[1] + a * n3[1], e3.spatialReference = o2.spatialReference, e3;
  };
}();
function tt(t, e3, r3, n3, o2) {
  return xt(t, e3, r3.center), t.scale = H(r3, n3), o2?.constraints?.constrain(t), t;
}
function et(t, e3, r3, n3) {
  return lt(t, e3, r3, n3), u3(t, t);
}
var rt = function() {
  const t = n2();
  return function(e3, r3, n3) {
    return B(e3, st(e3, r3), $(t, r3, n3));
  };
}();
var nt = function() {
  const t = e2(), e3 = n2();
  return function(r3, n3, o2, s3) {
    const u4 = ot(n3), l2 = it(n3);
    return o(e3, u4, u4), h2(t, e3), s2(t, t, l2), i(t, t, rt(e3, o2, s3)), i(t, t, [0, s3.top - s3.bottom]), o(r3, t[4], t[5]);
  };
}();
function ot(t) {
  return t.scale * at(t.targetGeometry?.spatialReference);
}
function at(t) {
  return null != t && N(t) ? 1 / (W3(t) * Q * O) : 1;
}
function it(t) {
  return u(t.rotation) || 0;
}
function ct(t) {
  return N(t) ? W3(t) * Q * O : 1;
}
function st(t, e3) {
  return l(t, e3, 0.5);
}
var ut = function() {
  const t = n2(), e3 = n2(), r3 = n2();
  return function(n3, o2, a, l2, f3, m2) {
    return x(t, o2), l(e3, a, 0.5 * m2), o(r3, 1 / l2 * m2, -1 / l2 * m2), f2(n3, e3), f3 && s2(n3, n3, f3), c(n3, n3, r3), i(n3, n3, t), n3;
  };
}();
var lt = function() {
  const t = n2();
  return function(e3, r3, n3, o2) {
    const a = ot(r3), i2 = it(r3);
    return D(t, r3.targetGeometry), ut(e3, t, n3, a, i2, o2);
  };
}();
var ft = function() {
  const t = n2();
  return function(e3, r3, n3, o2) {
    const a = ot(r3);
    return D(t, r3.targetGeometry), ut(e3, t, n3, a, 0, o2);
  };
}();
function mt(t) {
  const e3 = s(t);
  return e3 ? e3.valid[1] - e3.valid[0] : 0;
}
function yt(t, e3) {
  return Math.round(mt(t) / e3);
}
var pt = function() {
  const t = n2(), e3 = n2(), r3 = [0, 0, 0];
  return function(n3, o2, a) {
    e(t, n3, o2), v2(t, t), e(e3, n3, a), v2(e3, e3), y(r3, t, e3);
    let i2 = Math.acos(j(t, e3) / (q(t) * q(e3))) * T;
    return r3[2] < 0 && (i2 = -i2), isNaN(i2) && (i2 = 0), i2;
  };
}();
var gt = function() {
  const t = n2();
  return function(e3, r3, n3, o2) {
    const a = e3.targetGeometry;
    return Z(e3, r3), nt(t, r3, n3, o2), a.x += t[0], a.y += t[1], e3;
  };
}();
var xt = function(t, e3, r3) {
  Z(t, e3);
  const n3 = t.targetGeometry;
  return n3.x = r3.x, n3.y = r3.y, n3.spatialReference = r3.spatialReference, t;
};
var ht = function() {
  const t = n2();
  return function(e3, r3, n3, o2, a) {
    a || (a = "center"), B(t, n3, o2), l(t, t, 0.5);
    const i2 = t[0], c2 = t[1];
    switch (a) {
      case "center":
        o(t, 0, 0);
        break;
      case "left":
        o(t, -i2, 0);
        break;
      case "top":
        o(t, 0, c2);
        break;
      case "right":
        o(t, i2, 0);
        break;
      case "bottom":
        o(t, 0, -c2);
        break;
      case "top-left":
        o(t, -i2, c2);
        break;
      case "bottom-left":
        o(t, -i2, -c2);
        break;
      case "top-right":
        o(t, i2, c2);
        break;
      case "bottom-right":
        o(t, i2, -c2);
    }
    return kt(e3, r3, t), e3;
  };
}();
function bt(t, e3, r3) {
  return Z(t, e3), t.rotation += r3, t;
}
function wt(t, e3, r3) {
  return Z(t, e3), t.rotation = r3, t;
}
var dt = function() {
  const t = n2();
  return function(e3, r3, n3, o2, a) {
    return Z(e3, r3), isNaN(n3) || 0 === n3 || (At(t, o2, r3, a), e3.scale = r3.scale * n3, St(t, t, e3, a), kt(e3, e3, o(t, t[0] - o2[0], o2[1] - t[1]))), e3;
  };
}();
function jt(t, e3, r3) {
  return Z(t, e3), t.scale = r3, t;
}
var Gt = function() {
  const t = n2();
  return function(e3, r3, n3, o2, a, i2) {
    return Z(e3, r3), isNaN(n3) || 0 === n3 || (At(t, a, r3, i2), e3.scale = r3.scale * n3, e3.rotation += o2, St(t, t, e3, i2), kt(e3, e3, o(t, t[0] - a[0], a[1] - t[1]))), e3;
  };
}();
var Rt = function() {
  const t = n2(), e3 = n2();
  return function(r3, n3, o2, a, i2, c2, s3) {
    return rt(e3, c2, s3), u2(t, i2, e3), a ? Gt(r3, n3, o2, a, t, c2) : dt(r3, n3, o2, t, c2);
  };
}();
var At = function() {
  const t = e2();
  return function(e3, r3, n3, o2) {
    return S(e3, r3, et(t, n3, o2, 1));
  };
}();
var St = function() {
  const t = e2();
  return function(e3, r3, n3, o2) {
    return S(e3, r3, lt(t, n3, o2, 1));
  };
}();
var kt = function() {
  const t = n2(), e3 = e2();
  return function(r3, n3, o2) {
    Z(r3, n3);
    const a = ot(n3), i2 = r3.targetGeometry;
    return M(e3, it(n3)), c(e3, e3, r(a, a)), S(t, o2, e3), i2.x += t[0], i2.y += t[1], r3;
  };
}();

export {
  H,
  Y,
  Z,
  $,
  _3 as _,
  tt,
  rt,
  ot,
  at,
  ct,
  ut,
  lt,
  ft,
  mt,
  yt,
  pt,
  gt,
  xt,
  ht,
  bt,
  wt,
  jt,
  Gt,
  Rt,
  kt
};
//# sourceMappingURL=chunk-3HIWR7QD.js.map
