import {
  $,
  Ae,
  De,
  K,
  Q,
  W,
  Z,
  _ as _3,
  ee,
  g as g2,
  ne,
  re,
  te,
  ve,
  we
} from "./chunk-7VSW2U7Y.js";
import {
  t
} from "./chunk-S2OEQYU7.js";
import {
  a as a2
} from "./chunk-TKHURHLF.js";
import {
  m
} from "./chunk-XTCHBO6P.js";
import {
  d as d2
} from "./chunk-NE4OJEWH.js";
import {
  u as u6
} from "./chunk-ATQ5GYTB.js";
import {
  a
} from "./chunk-SLCHZ6DD.js";
import {
  l
} from "./chunk-YYETZJJB.js";
import {
  n as n3
} from "./chunk-L7ZKWTWL.js";
import {
  i as i2
} from "./chunk-Q4KYZS3X.js";
import {
  u as u4
} from "./chunk-KVKFHRJ3.js";
import {
  n as n4,
  u as u5
} from "./chunk-JYODC3YQ.js";
import {
  e as e2
} from "./chunk-BQZBOYBD.js";
import {
  e as e3
} from "./chunk-TYQXPPSP.js";
import {
  d
} from "./chunk-HD65DNIO.js";
import {
  E,
  I,
  N,
  P,
  S as S2,
  h,
  i,
  o as o2,
  s as s3,
  w as w2
} from "./chunk-J55F4AC2.js";
import {
  H as H2,
  I as I2
} from "./chunk-DUTZNK67.js";
import {
  u as u2
} from "./chunk-T6GCUITX.js";
import {
  H,
  u as u3
} from "./chunk-IHVSZYZS.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _ as _2,
  n
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  S,
  e,
  g,
  o,
  r,
  u,
  x
} from "./chunk-AXVPJBVW.js";
import {
  n as n2
} from "./chunk-OXEPWRM7.js";
import {
  _
} from "./chunk-XNUH25NY.js";
import {
  s as s2
} from "./chunk-HJY2YILU.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/support/viewpointUtils.js
var it = 0.66;
function st(t2) {
  return 360 - a.normalize(t2);
}
function ct(t2) {
  return a.normalize(360 - t2);
}
function lt(t2, e4, n5) {
  const a3 = e4.camera;
  if (null != a3) return ut(a3, W(t2));
  const {
    targetGeometry: r2
  } = e4;
  if (null == r2) return null;
  const {
    camera: o3,
    mode: i3
  } = pt(t2, e4.rotation, n5);
  if ("point" === r2.type) return gt(t2, e4, r2, o3, i3);
  const s4 = r2.extent;
  return null == s4 ? null : we(t2, s4, o3.heading, o3.tilt, i3);
}
function mt(t2, e4, n5, a3) {
  return __async(this, null, function* () {
    const r2 = e4.camera;
    if (null != r2) return ft(r2, W(t2), a3);
    const {
      targetGeometry: o3
    } = e4;
    if (null == o3) throw new Error("Viewpoint has no targetGeometry!");
    const {
      camera: i3,
      mode: s4
    } = pt(t2, e4.rotation, n5);
    if ("point" === o3.type) return yt(t2, e4, o3, i3, s4, a3);
    const c = o3.extent;
    if (null == c) throw new Error("Target geometry has no extent!");
    return ve(t2, c, i3.heading, i3.tilt, s4, a3);
  });
}
function ut(t2, e4) {
  const n5 = t2.position;
  let a3;
  try {
    a3 = H2(n5, e4);
  } catch (o3) {
    return null;
  }
  if (!a3) return null;
  const r2 = t2.clone();
  return r2.position = a3.clone(), r2;
}
function ft(t2, e4, n5) {
  return __async(this, null, function* () {
    const a3 = t2.position, r2 = yield I2(a3, e4, {
      signal: n5
    });
    s2(n5);
    const o3 = t2.clone();
    return o3.position = r2.clone(), o3;
  });
}
function pt(t2, e4, n5) {
  const a3 = Q(t2, t2.state.camera);
  let r2 = K.ADJUST;
  return null != e4 && (a3.heading = st(e4), r2 = K.LOCKED), null != n5 && (a3.tilt = n5), {
    camera: a3,
    mode: r2
  };
}
function gt(t2, e4, n5, a3, r2) {
  const o3 = t2.spatialReference;
  let i3;
  try {
    i3 = H2(n5.clone(), o3);
  } catch (c) {
    return null;
  }
  if (!i3) return null;
  const s4 = null != e4.scale ? $(t2, e4.scale, i3.latitude) : t2.state.camera.distance;
  return te(t2, i3, s4, a3, r2);
}
function yt(t2, e4, n5, a3, r2, o3) {
  return __async(this, null, function* () {
    const s4 = t2.spatialReference, c = yield I2(n5.clone(), s4, {
      signal: o3
    });
    s2(o3);
    const l2 = null != e4.scale ? $(t2, e4.scale, c.latitude) : t2.state.camera.distance;
    return ne(t2, c, l2, a3, r2, o3);
  });
}
function ht(t2, e4, a3 = null) {
  return null == a3 && (a3 = new m()), vt(t2, null, e4.clone(), a3);
}
function dt(e4, a3, r2) {
  return __async(this, null, function* () {
    const i3 = Ot(e4, a3);
    if (!i3) throw new s("viewpointutils-create:no-target", "Missing target for creating viewpoint");
    const s4 = new d2({
      fov: e4.camera.fov
    }), c = new m({
      camera: s4
    });
    if (i3.target instanceof m) {
      return Pt(yield Gt(e4, i3.target, i3, r2, c));
    }
    if (i3.target instanceof d2) return Pt(yield St(e4, i3.target, r2, c));
    const l2 = null != i3.scale || null != i3.zoom;
    if (i3.target instanceof w) {
      const t2 = i3.target.xmin === i3.target.xmax || i3.target.ymin === i3.target.ymax;
      return Pt(l2 || t2 ? yield Tt(e4, i3, i3.target.center, s4, r2, c) : yield At(e4, i3, i3.target, s4, r2, c));
    }
    const m2 = new Ut(), u7 = l2 ? xt(e4, i3) : void 0;
    if (yield zt(e4, i3.target, u7, m2, r2), isFinite(m2.boundingBox[0])) {
      let t2;
      if (E(m2.boundingBox, Vt), Yt.x = Vt[0], Yt.y = Vt[1], Yt.z = Vt[2], Yt.spatialReference = e4.spatialReference, isFinite(Yt.z) && m2.hasZ ? t2 = w2(m2.boundingBox) : (Yt.z = void 0, t2 = H(S2(m2.boundingBox, Jt))), l2 || t2) return Pt(yield Tt(e4, i3, Yt, s4, r2, c));
      const n5 = Dt(e4, m2.screenSpaceObjects);
      return Pt(yield Ft(e4, i3, Yt, m2.boundingBox, n5, s4, r2, c));
    }
    return i3.position ? Pt(yield Mt(e4, i3, s4, c, r2)) : Pt(yield Zt(e4, i3, s4, r2, c));
  });
}
function wt(t2, e4) {
  return null == e4.scale && null != e4.zoom ? Ae(t2, e4.zoom) : e4.scale;
}
function xt(t2, e4) {
  const n5 = wt(t2, e4);
  return n5 ? u6(n5) : void 0;
}
function jt(t2, e4) {
  let n5 = false;
  return null != e4.heading ? (t2.heading = e4.heading, n5 = true) : null != e4.rotation && (t2.heading = st(e4.rotation), n5 = true), null != e4.tilt && (t2.tilt = e4.tilt, n5 = true), null != e4.fov && (t2.fov = e4.fov), n5;
}
function vt(t2, e4, n5, a3) {
  const r2 = t2.spatialReference || f.WGS84;
  if (e4 ??= Z(t2, n5), null == e4) return a3;
  const o3 = new _2({
    spatialReference: r2
  });
  if (!t(e4.center, t2.renderSpatialReference, o3)) return a3;
  a3.targetGeometry = o3;
  const {
    latitude: i3
  } = o3;
  return a3.scale = null != i3 ? _3(t2, e4.distance, i3) : De(t2, e4), a3.rotation = ct(n5.heading), a3.camera = n5, a3;
}
function bt(t2, e4, n5, a3) {
  return __async(this, null, function* () {
    const r2 = () => new s("viewpointutils:invalid-geometry", "The target is missing a valid geometry");
    if (!e4) throw r2();
    "mesh" === e4.type && (e4 = e4.extent);
    const i3 = t2.basemapTerrain.spatialReference;
    if (!e4.hasZ && t2.basemapTerrain) {
      let n6;
      switch (e4.type) {
        case "point":
          n6 = e4;
          break;
        case "multipoint":
        case "polyline":
          n6 = e4.extent?.center;
          break;
        case "extent":
          n6 = e4.center;
          break;
        case "polygon":
          n6 = e4.centroid;
      }
      null != n6 && i3 && t2.elevationProvider ? (n6 = yield I2(n6, i3, {
        signal: a3
      }), Vt[2] = a2(t2.elevationProvider, n6) ?? 0) : Vt[2] = 0;
    }
    const s4 = qt[e4.type], c = new Array();
    if (s4(e4, e4.hasZ ? (t3) => {
      c.push([t3[0], t3[1], t3[2]]);
    } : (t3) => {
      c.push([t3[0], t3[1]]);
    }, Vt), 0 === c.length) throw r2();
    const l2 = e4.spatialReference, m2 = t2.spatialReference, u7 = yield I2(new u2({
      spatialReference: l2,
      hasZ: e4.hasZ,
      hasM: false,
      points: c
    }), m2, {
      signal: a3
    });
    if (e4.hasZ && (n5.hasZ = true), e4.hasZ) for (const [o3, f2, p] of u7.points) Vt[0] = o3, Vt[1] = f2, Vt[2] = p, h(n5.boundingBox, Vt);
    else for (const [o3, f2] of u7.points) Vt[0] = o3, Vt[1] = f2, h(n5.boundingBox, Vt);
  });
}
function Rt(t2, e4, n5, r2, o3) {
  return __async(this, null, function* () {
    const i3 = yield _(t2.whenViewForGraphic(e4));
    if (false === i3.ok || null == i3.value || !("whenGraphicBounds" in i3.value)) return void (yield bt(t2, e4.geometry, r2, o3));
    const s4 = i3.value, c = yield _(s4.whenGraphicBounds(e4, {
      minDemResolution: n5
    }));
    if (false === c.ok || !c.value) return void (yield bt(t2, e4.geometry, r2, o3));
    const {
      screenSpaceObjects: l2,
      boundingBox: m2
    } = c.value;
    o2(r2.boundingBox, m2), l2 && l2.forEach((t3) => {
      r2.screenSpaceObjects.push(t3);
    }), isFinite(m2[2]) && (r2.hasZ = true);
  });
}
function zt(t2, n5, a3, r2, o3) {
  return __async(this, null, function* () {
    if (Array.isArray(n5) && 2 === n5.length) {
      const e4 = n5[0], a4 = n5[1];
      if ("number" == typeof e4 && "number" == typeof a4) return Yt.x = e4, Yt.y = a4, Yt.z = void 0, Yt.spatialReference = t2.spatialReference?.isGeographic ? t2.spatialReference : f.WGS84, void (yield bt(t2, Yt, r2, o3));
    }
    n5 && "map" in n5 && "function" == typeof n5.map ? yield Promise.allSettled(n5.map((e4) => zt(t2, e4, a3, r2, o3))) : n5 instanceof n ? yield bt(t2, n5, r2, o3) : n5 instanceof d && (yield Rt(t2, n5, a3, r2, o3));
  });
}
function Gt(t2, e4, n5, a3, r2) {
  return __async(this, null, function* () {
    if (e4.camera) return St(t2, e4.camera, a3, r2);
    r2.scale = e4.scale, r2.rotation = e4.rotation, r2.targetGeometry = null != e4.targetGeometry ? e4.targetGeometry.clone() : null, r2.camera = null, null != n5.heading ? r2.rotation = ct(n5.heading) : null != n5.rotation && (r2.rotation = n5.rotation);
    const o3 = wt(t2, n5);
    return null != o3 && (r2.scale = o3), r2.camera = yield mt(t2, r2, n5.tilt, a3), r2;
  });
}
function St(t2, e4, n5, a3) {
  return __async(this, null, function* () {
    const r2 = t2.spatialReference, o3 = yield I2(e4.position, r2, {
      signal: n5
    }), i3 = e4.clone();
    return i3.position = o3, vt(t2, null, i3, a3);
  });
}
function Bt(t2, e4, n5, a3, r2, o3, i3) {
  return __async(this, null, function* () {
    const s4 = t2.renderSpatialReference;
    return yield i2(e4, Nt, s4, 0, {
      signal: i3
    }), yield i2(n5, Lt, s4, 0, {
      signal: i3
    }), o3.targetGeometry = new _2(e4), r2.position = new _2(n5), e(Kt, Nt, Lt), re(t2, Lt, Kt, a3.up, r2), o3.scale = _3(t2, x(Lt, Nt), o3.targetGeometry.latitude), o3.rotation = ct(r2.heading), o3.camera = r2, o3;
  });
}
function Tt(t2, e4, n5, a3, r2, o3) {
  return __async(this, null, function* () {
    o3.targetGeometry = n5.clone();
    const i3 = g2(t2);
    if (e4.position) return Bt(t2, o3.targetGeometry, e4.position, i3, a3, o3, r2);
    if (e4.zoomFactor) {
      const a4 = i3.distance / e4.zoomFactor, r3 = g(Vt, i3.viewForward, -a4);
      i3.eye = u(Vt, i3.center, r3), o3.scale = _3(t2, a4, n5.latitude);
    }
    Q(t2, i3, a3);
    const s4 = jt(a3, e4) ? K.LOCKED : K.ADJUST;
    if (!e4.zoomFactor) {
      const c = wt(t2, e4);
      null == c ? (yield i2(n5, Vt, t2.renderSpatialReference, 0, {
        signal: r2
      }), l(i3.frustum, Vt) ? o3.scale = _3(t2, x(i3.eye, Vt), n5.latitude) : o3.scale = De(t2, i3)) : o3.scale = c, o3.camera = yield ee(t2, o3.targetGeometry, o3.scale, a3, s4, r2);
    }
    return o3;
  });
}
function Mt(t2, e4, n5, a3, r2) {
  return __async(this, null, function* () {
    const o3 = g2(t2);
    r(Kt, o3.viewForward), re(t2, o3.eye, Kt, o3.up, Wt);
    const i3 = t2.spatialReference, {
      position: s4
    } = e4;
    if (s4) {
      const t3 = yield I2(s4, i3, {
        signal: r2
      });
      n5.position = t3;
    } else n5.position = new _2();
    return n5.heading = null != e4.heading ? e4.heading : Wt.heading, n5.tilt = null != e4.tilt ? e4.tilt : Wt.tilt, vt(t2, null, n5, a3);
  });
}
function Zt(t2, e4, n5, a3, r2) {
  return __async(this, null, function* () {
    if (null != e4.heading || null != e4.rotation || null != e4.scale || null != e4.tilt || null != e4.zoom || null != e4.zoomFactor) {
      const o3 = g2(t2), {
        spatialReference: i3,
        renderSpatialReference: s4
      } = t2, c = new _2({
        spatialReference: i3
      });
      return t(o3.center, s4, c) ? Tt(t2, e4, c, n5, a3, r2) : r2;
    }
    return r2.scale = t2.scale, r2.camera = t2.camera.clone(), jt(r2.camera, e4), r2;
  });
}
function At(t2, e4, n5, a3, r2, o3) {
  return __async(this, null, function* () {
    o3.targetGeometry = n5.clone();
    const i3 = g2(t2);
    Q(t2, i3, a3);
    const s4 = jt(a3, e4) ? K.LOCKED : K.ADJUST;
    return o3.camera = yield ve(t2, n5, a3.heading, a3.tilt, s4, r2), o3;
  });
}
function Et(t2, e4, n5, a3, r2) {
  let o3 = 0;
  null != n5.z ? o3 = n5.z : t2.basemapTerrain && t2.elevationProvider && (o3 = a2(t2.elevationProvider, n5)), o(Vt, n5.x, n5.y, o3), u4(t2.spatialReference, Vt, Ct, t2.renderSpatialReference), n4(kt, Ct), u5(kt, kt), P(It);
  const i3 = [[0, 1, 2], [3, 1, 2], [0, 4, 2], [3, 4, 2], [0, 1, 5], [3, 1, 5], [0, 4, 5], [3, 4, 5]];
  for (let s4 = 0; s4 < i3.length; s4++) {
    const e5 = i3[s4];
    let n6 = a3[e5[2]];
    isFinite(n6) || (n6 = o3), o(Vt, a3[e5[0]], a3[e5[1]], n6), n3(Vt, t2.spatialReference, Vt, t2.renderSpatialReference), h(It, S(Vt, Vt, kt));
  }
  const l2 = s3(It), m2 = N(It), u7 = I(It), f2 = 1 / Math.tan(e4.fovX / 2), p = 1 / Math.tan(e4.fovY / 2), g3 = 0.5 * Math.sqrt(l2 * l2 + u7 * u7) * Math.max(p, f2) + 0.5 * m2, y = 0.5 * m2 * p + 0.5 * Math.max(l2, u7);
  return Math.max(g3, y) / r2;
}
function Ft(t2, e4, n5, a3, r2, o3, i3, s4) {
  return __async(this, null, function* () {
    s4.targetGeometry = n5.clone();
    const c = g2(t2), l2 = Et(t2, c, n5, a3, r2);
    Q(t2, c, o3);
    const m2 = jt(o3, e4) ? K.LOCKED : K.ADJUST;
    return s4.scale = _3(t2, l2, s4.targetGeometry.latitude), s4.camera = yield ee(t2, s4.targetGeometry, s4.scale, o3, m2, i3), s4;
  });
}
function Ot(t2, e4) {
  if (!e4 || !t2.spatialReference) return null;
  const n5 = {
    target: void 0
  };
  return "declaredClass" in e4 || Array.isArray(e4) ? n5.target = e4 : (Object.assign(n5, e4), !n5.target && "center" in e4 && e4.center && (n5.target = e4.center)), n5;
}
function Pt(t2) {
  return null != t2?.camera && (t2.rotation = ct(t2.camera.heading)), t2;
}
function Dt(t2, e4) {
  const n5 = it;
  if (!e4.length) return n5;
  let a3 = Number.NEGATIVE_INFINITY;
  for (let r2 = 0; r2 < e4.length; r2++) {
    const t3 = e4[r2].screenSpaceBoundingRect;
    a3 = Math.max(a3, Math.abs(t3[0]), Math.abs(t3[1]), Math.abs(t3[2]), Math.abs(t3[3]));
  }
  return n5 - a3 / Math.min(t2.width, t2.height) * 2;
}
var Ut = class {
  constructor() {
    this.hasZ = false, this.boundingBox = P(), this.screenSpaceObjects = new Array();
  }
};
var Vt = n2();
var Ct = e2();
var kt = e3();
var It = i();
var Jt = u3();
var Kt = n2();
var Lt = n2();
var Nt = n2();
var Wt = {
  heading: 0,
  tilt: 0
};
var Yt = new _2();
var qt = {
  point(t2, e4, n5) {
    n5[0] = t2.x, n5[1] = t2.y, null != t2.z && (n5[2] = t2.z), e4(n5);
  },
  polygon(t2, e4, n5) {
    const a3 = t2.hasZ;
    for (let r2 = 0; r2 < t2.rings.length; r2++) {
      const o3 = t2.rings[r2];
      for (let t3 = 0; t3 < o3.length; t3++) n5[0] = o3[t3][0], n5[1] = o3[t3][1], a3 && (n5[2] = o3[t3][2]), e4(n5);
    }
  },
  polyline(t2, e4, n5) {
    const a3 = t2.hasZ;
    for (let r2 = 0; r2 < t2.paths.length; r2++) {
      const o3 = t2.paths[r2];
      for (let t3 = 0; t3 < o3.length; t3++) n5[0] = o3[t3][0], n5[1] = o3[t3][1], a3 && (n5[2] = o3[t3][2]), e4(n5);
    }
  },
  multipoint(t2, e4, n5) {
    const a3 = t2.points, r2 = t2.hasZ;
    for (let o3 = 0; o3 < a3.length; o3++) n5[0] = a3[o3][0], n5[1] = a3[o3][1], r2 && (n5[2] = a3[o3][2]), e4(n5);
  },
  extent(t2, e4, n5) {
    null != t2.zmin && null != t2.zmax ? (e4(o(n5, t2.xmin, t2.ymin, t2.zmin)), e4(o(n5, t2.xmax, t2.ymin, t2.zmin)), e4(o(n5, t2.xmin, t2.ymax, t2.zmin)), e4(o(n5, t2.xmax, t2.ymax, t2.zmin)), e4(o(n5, t2.xmin, t2.ymin, t2.zmax)), e4(o(n5, t2.xmax, t2.ymin, t2.zmax)), e4(o(n5, t2.xmin, t2.ymax, t2.zmax)), e4(o(n5, t2.xmax, t2.ymax, t2.zmax))) : (e4(o(n5, t2.xmin, t2.ymin, n5[2])), e4(o(n5, t2.xmax, t2.ymin, n5[2])), e4(o(n5, t2.xmin, t2.ymax, n5[2])), e4(o(n5, t2.xmax, t2.ymax, n5[2])));
  }
};

export {
  lt,
  mt,
  ht,
  dt
};
//# sourceMappingURL=chunk-O6QYO3QA.js.map
