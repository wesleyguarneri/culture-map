import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  h as h3
} from "./chunk-IFQJT5WB.js";
import {
  C,
  S as S2,
  U as U2,
  a as a3,
  b as b2,
  c as c3,
  d as d3,
  e as e7,
  g as g3,
  i as i2,
  j as j3,
  k,
  l as l4,
  n as n5,
  q,
  s as s2,
  u as u4,
  v as v2,
  x as x2
} from "./chunk-JJGFAKU4.js";
import {
  v as v3
} from "./chunk-VYV5FW7C.js";
import {
  g as g4
} from "./chunk-7JFTMCGE.js";
import {
  r as r7
} from "./chunk-DVWZMNZY.js";
import {
  O as O3,
  b,
  e as e6,
  ee,
  j as j2
} from "./chunk-73EW5OP6.js";
import {
  l as l3
} from "./chunk-NCXTRC7L.js";
import {
  f as f4
} from "./chunk-FJ65I6KE.js";
import {
  a as a2
} from "./chunk-F2LQGEBE.js";
import {
  d as d2
} from "./chunk-N7TLJ6LV.js";
import {
  z as z2
} from "./chunk-JP4VYCP3.js";
import {
  H as H2,
  J,
  W,
  ds,
  ms,
  ss
} from "./chunk-377KSYNB.js";
import {
  g as g2
} from "./chunk-VFAQK3MV.js";
import {
  f as f3
} from "./chunk-IQWWKVQ4.js";
import {
  at,
  ct,
  gt,
  it
} from "./chunk-LEBOC3ZD.js";
import {
  e as e5
} from "./chunk-FSYMZVRK.js";
import {
  t as t6,
  u as u3
} from "./chunk-WOWVQEU2.js";
import {
  r as r4
} from "./chunk-K7U66W6G.js";
import {
  I
} from "./chunk-WQMUOLHB.js";
import {
  E
} from "./chunk-4WON4QDF.js";
import {
  r as r5,
  r2 as r6,
  t as t4
} from "./chunk-22UDIQGJ.js";
import {
  t as t3
} from "./chunk-Z5ZLX3BE.js";
import {
  t as t5
} from "./chunk-LA4GCRJY.js";
import {
  h as h2
} from "./chunk-UE7ZYRIH.js";
import {
  O as O2
} from "./chunk-E5RXQH35.js";
import {
  S,
  _ as _4,
  l as l2
} from "./chunk-HUOFTIIK.js";
import {
  e as e4
} from "./chunk-EPIUUGS2.js";
import {
  O,
  R as R4
} from "./chunk-KYLW5XXS.js";
import {
  o as o4
} from "./chunk-HITI6WDM.js";
import {
  n as n4
} from "./chunk-LGS63R4F.js";
import {
  m
} from "./chunk-6ZLH7XBS.js";
import {
  F,
  G,
  R as R2
} from "./chunk-NAG6YX7T.js";
import {
  t as t2
} from "./chunk-MNBTLVRM.js";
import {
  R as R3
} from "./chunk-CSK4VZQ7.js";
import {
  U,
  c as c2,
  f as f2,
  j,
  m as m2,
  o as o3
} from "./chunk-2TNGEJGS.js";
import {
  e as e3
} from "./chunk-D7C26LZP.js";
import {
  e as e2
} from "./chunk-YGAXDKHF.js";
import {
  u as u2
} from "./chunk-KUBMHTYA.js";
import {
  r as r3
} from "./chunk-VSQZQLTQ.js";
import {
  a
} from "./chunk-K43CZ3M5.js";
import {
  H
} from "./chunk-LM3JDV4W.js";
import {
  R,
  _ as _3,
  c,
  f,
  i,
  l,
  o as o2,
  x
} from "./chunk-KOI252FF.js";
import {
  p
} from "./chunk-VYTPFEL2.js";
import {
  n as n3
} from "./chunk-UFQD6AL4.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  M,
  h
} from "./chunk-2OZSYJDX.js";
import {
  P as P2,
  _ as _2,
  e,
  g,
  o,
  r as r2,
  s,
  u,
  v,
  z
} from "./chunk-MZM4INJV.js";
import {
  n as n2,
  r,
  t
} from "./chunk-J4GMQHGL.js";
import {
  P,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/analysis/Slice/settings.js
var t7 = r3(0, 0, 0, 0.04);
function c4({
  accentColor: r8
}) {
  return F(r8, 0.5);
}
function e8({
  accentColor: r8
}) {
  return F(r8, 0.7);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/SlicePlaneMaterialTechnique.js
var h4 = class extends n4 {
  constructor() {
    super(...arguments), this.backgroundColor = r3(1, 0, 0, 0.5), this.gridColor = r3(0, 1, 0, 0.5), this.gridWidth = 4;
  }
};
var u5 = class _u extends r5 {
  initializeProgram(e9) {
    return new r6(e9.rctx, _u.shader.get().build(this.configuration), O2);
  }
  initializePipeline() {
    return S({
      blending: l2(R4.ONE, R4.ONE, R4.ONE_MINUS_SRC_ALPHA, R4.ONE_MINUS_SRC_ALPHA),
      depthTest: {
        func: O.LESS
      },
      colorWrite: _4
    });
  }
};
u5.shader = new t4(g4, () => import("./SlicePlaneMaterial.glsl-ZK5VAH6Y.js"));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/SlicePlaneMaterial.js
var l5 = class extends e5 {
  constructor(t8) {
    super(t8, new m3()), this.produces = /* @__PURE__ */ new Map([[E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (e9) => e9 === o4.Color]]), this._configuration = new t5();
  }
  createBufferWriter() {
    return new r4(f3);
  }
  createGLMaterial(r8) {
    return new f5(r8);
  }
  getConfiguration() {
    return this._configuration;
  }
};
var f5 = class extends t3 {
  constructor(r8) {
    super(r8), this.ensureTechnique(u5, null);
  }
  beginSlot() {
    return this.technique;
  }
};
var m3 = class extends h4 {
  constructor() {
    super(...arguments), this.renderOccluded = h2.Occlude, this.isDecoration = false;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/SlicePlaneVisualElement.js
var l6 = class extends a2 {
  constructor(r8) {
    super(r8), this._material = null, this._renderOccluded = h2.OccludeAndTransparent, this._gridWidth = 1, this._gridColor = r3(1, 0, 0, 1), this._backgroundColor = r3(1, 0, 0, 1), this.applyProperties(r8);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(r8) {
    r8 !== this._renderOccluded && (this._renderOccluded = r8, this._updateMaterial());
  }
  get gridWidth() {
    return this._gridWidth;
  }
  set gridWidth(r8) {
    this._gridWidth !== r8 && (this._gridWidth = r8, this._updateMaterial());
  }
  get gridColor() {
    return this._gridColor;
  }
  set gridColor(e9) {
    a(this._gridColor, e9), this._updateMaterial();
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e9) {
    a(this._backgroundColor, e9), this._updateMaterial();
  }
  createExternalResources() {
    this._material = new l5(this._materialParameters);
  }
  destroyExternalResources() {
    this._material = null;
  }
  forEachExternalMaterial(r8) {
    null != this._material && r8(this._material);
  }
  createGeometries(r8) {
    if (null != this._material) {
      const e9 = ct(this._material);
      r8.addGeometry(e9);
    }
  }
  get _materialParameters() {
    return {
      backgroundColor: this._backgroundColor,
      gridWidth: this._gridWidth,
      gridColor: this._gridColor,
      renderOccluded: this._renderOccluded,
      isDecoration: this.isDecoration
    };
  }
  _updateMaterial() {
    null != this._material && this._material.setParameters(this._materialParameters);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/analysis/Slice/sliceToolUtils.js
function ei(i3, t8, e9, n6, o5, r8, s3, a4) {
  return ni(t8, s3.worldUpAtPosition(i3, c2.get()), o5, r8, a4.basis1, a4.basis2), g(a4.basis1, a4.basis1, e9), g(a4.basis2, a4.basis2, n6), r2(a4.origin, i3), U(a4.basis2, a4.basis1, a4.origin, a4.plane), a4;
}
function ni(i3, t8, e9, n6, o5, r8) {
  const s3 = P2(i3, t8), a4 = c2.get(), c5 = c2.get();
  switch (n6 === Mi.HORIZONTAL_OR_VERTICAL ? Math.abs(s3) > e7 ? Mi.HORIZONTAL : Mi.VERTICAL : n6) {
    case Mi.VERTICAL: {
      const n7 = Math.abs(s3) <= i2 ? i3 : e9.viewUp;
      _2(a4, n7, t8), r2(c5, t8);
      break;
    }
    case Mi.HORIZONTAL:
      _2(a4, e9.viewUp, t8), _2(c5, t8, a4);
      break;
    case Mi.TILTED: {
      const n7 = Math.abs(s3) <= i2 ? t8 : e9.viewUp;
      _2(a4, n7, i3), _2(c5, i3, a4);
      break;
    }
  }
  const l7 = _2(c2.get(), a4, c5);
  P2(l7, e9.viewForward) > 0 && g(c5, c5, -1), z(o5, a4), z(r8, c5);
}
function oi(i3, t8, e9) {
  const n6 = t8.worldUpAtPosition(i3.origin, c2.get()), o5 = i3.basis1, r8 = Oi(i3, n6), s3 = Math.round(r8 / Ni) * Ni;
  return ms(i3, s3 - r8, o5, e9);
}
function ri(i3, t8, e9, n6, o5, r8) {
  const s3 = r2(c2.get(), o5.origin);
  u(s3, s3, g(c2.get(), o5.basis1, i3.direction[0] < 0 ? 1 : -1)), u(s3, s3, g(c2.get(), o5.basis2, i3.direction[1] < 0 ? 1 : -1));
  const a4 = s(o5.basis1), c5 = s(o5.basis2), l7 = e(c2.get(), e9, s3), m4 = e(c2.get(), t8, s3);
  let p2 = 0, I3 = 0;
  if (Ei(i3)) {
    const t9 = hi(o5), e10 = hi(r8);
    p2 = a4 - 0.5 * i3.direction[0] * P2(o5.basis1, m4) / a4, I3 = c5 - 0.5 * i3.direction[1] * P2(o5.basis2, m4) / c5;
    const n7 = e10 / t9;
    p2 *= n7, I3 *= n7;
  }
  const h5 = p2 + 0.5 * i3.direction[0] * P2(o5.basis1, l7) / a4, E2 = I3 + 0.5 * i3.direction[1] * P2(o5.basis2, l7) / c5, A = g(c2.get(), o5.basis1, h5 / a4), j5 = g(c2.get(), o5.basis2, E2 / c5);
  (h5 <= 0 || Ti(r8.origin, A, n6) <= u4) && r2(A, r8.basis1), (E2 <= 0 || Ti(r8.origin, j5, n6) <= u4) && r2(j5, r8.basis2);
  const R5 = r2(c2.get(), s3);
  return u(R5, R5, g(c2.get(), A, i3.direction[0] < 0 ? -1 : 1)), u(R5, R5, g(c2.get(), j5, i3.direction[1] < 0 ? -1 : 1)), H2(R5, A, j5, r8);
}
function si(i3, t8) {
  return v2 * Math.min(t8.width, t8.height) * t8.computeRenderPixelSizeAt(i3);
}
function ai(i3, t8, e9, n6) {
  const o5 = _2(c2.get(), t8, e9);
  return _2(o5, o5, t8), j(i3, o5, n6);
}
function ci(i3, t8) {
  return O3(i3.basis1, i3.basis2, i3.origin, t8);
}
function li(i3, t8, e9, n6) {
  const o5 = t8.worldUpAtPosition(i3.origin, c2.get()), r8 = c2.get();
  switch (e9) {
    case _i.HEADING:
      r2(r8, o5);
      break;
    case _i.TILT:
      r2(r8, i3.basis1);
  }
  return j(i3.origin, r8, n6);
}
function ui(i3, t8, e9, n6) {
  const s3 = bi(e9, fi.NEGATIVE_X), a4 = f2.get();
  x(a4, t8, s3.edge * Math.PI / 2);
  const c5 = z(c2.get(), s3.basis);
  let l7 = g(c2.get(), c5, s3.direction * n6.computeScreenPixelSizeAt(s3.position) * C);
  u(l7, l7, s3.position);
  const d4 = n6.projectToRenderScreen(l7, p(c2.get())), g6 = di(n6, d4);
  l3(n6, d4, yi), z(yi.direction, yi.direction);
  const m4 = c2.get();
  !g6 && ss(e9, yi, m4) && (l7 = m4), a4[12] = 0, a4[13] = 0, a4[14] = 0, i3.modelTransform = a4, i3.renderLocation = t(l7), g6 ? i3.state |= Si : i3.state &= ~Si;
}
function di(i3, t8) {
  const [e9, n6, o5, r8] = i3.viewport, s3 = Math.min(o5, r8) / 16;
  let a4 = true;
  return t8[0] < e9 + s3 ? (t8[0] = e9 + s3, a4 = false) : t8[0] > e9 + o5 - s3 && (t8[0] = e9 + o5 - s3, a4 = false), t8[1] < n6 + s3 ? (t8[1] = n6 + s3, a4 = false) : t8[1] > n6 + r8 - s3 && (t8[1] = n6 + r8 - s3, a4 = false), a4;
}
function gi(i3, t8, e9, n6) {
  const o5 = s(n6.basis1), r8 = s(n6.basis2), l7 = Ii(n6), d4 = hi(n6), g6 = o(c2.get(), 0, 0, 0);
  u(g6, g(c2.get(), n6.basis1, t8.direction[0]), g(c2.get(), n6.basis2, t8.direction[1])), u(g6, n6.origin, g6);
  let m4 = 0, p2 = 1;
  if (Ei(t8)) 1 === t8.direction[0] && -1 === t8.direction[1] ? m4 = Ni : 1 === t8.direction[0] && 1 === t8.direction[1] ? m4 = Math.PI : -1 === t8.direction[0] && 1 === t8.direction[1] && (m4 = 3 * Math.PI / 2), p2 = d4;
  else {
    const i4 = 0 !== t8.direction[0] ? 1 : 2;
    m4 = 1 === i4 ? Ni : 0, p2 = (1 === i4 ? r8 : o5) - l7;
  }
  const T = R(f2.get(), m4);
  f(T, T, o(c2.get(), p2, p2, p2)), c(T, e9, T), T[12] = 0, T[13] = 0, T[14] = 0, i3.modelTransform = T, i3.renderLocation = g6;
}
function mi(i3, t8, e9, n6) {
  const o5 = n6.worldUpAtPosition(e9.origin, c2.get()), r8 = bi(e9, fi.POSITIVE_X), a4 = R(f2.get(), r8.edge * Math.PI / 2);
  l(a4, a4, -Oi(e9, o5)), c(a4, t8, a4), a4[12] = 0, a4[13] = 0, a4[14] = 0, i3.modelTransform = a4, i3.renderLocation = r8.position;
}
function pi(i3, t8, e9) {
  const n6 = bi(e9, fi.POSITIVE_Y), o5 = R(f2.get(), n6.edge * Math.PI / 2);
  l(o5, o5, Ni), c(o5, t8, o5), o5[12] = 0, o5[13] = 0, o5[14] = 0, i3.modelTransform = o5, i3.renderLocation = n6.position;
}
var fi;
function bi(i3, t8) {
  switch (t8) {
    case fi.POSITIVE_X:
      return {
        basis: i3.basis1,
        direction: 1,
        position: u(c2.get(), i3.origin, i3.basis1),
        edge: t8
      };
    case fi.POSITIVE_Y:
      return {
        basis: i3.basis2,
        direction: 1,
        position: u(c2.get(), i3.origin, i3.basis2),
        edge: t8
      };
    case fi.NEGATIVE_X:
      return {
        basis: i3.basis1,
        direction: -1,
        position: e(c2.get(), i3.origin, i3.basis1),
        edge: t8
      };
    case fi.NEGATIVE_Y:
      return {
        basis: i3.basis2,
        direction: -1,
        position: e(c2.get(), i3.origin, i3.basis2),
        edge: t8
      };
  }
}
function Ti(i3, t8, e9) {
  const n6 = e9.projectToRenderScreen(u(c2.get(), i3, t8), p(c2.get())), r8 = e9.projectToRenderScreen(e(c2.get(), i3, t8), p(c2.get()));
  return v(e(n6, n6, r8));
}
function Ii(i3) {
  const t8 = s(i3.basis1), e9 = s(i3.basis2);
  return g3 * Math.min(t8, e9);
}
function hi(i3) {
  return Ii(i3);
}
function Ei(i3) {
  return 0 !== i3.direction[0] && 0 !== i3.direction[1];
}
function Ai(i3) {
  const t8 = [[-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], [-1, -1, 0]];
  return new f4({
    view: i3,
    attached: false,
    color: e8(i3.effectiveTheme),
    width: j3,
    renderOccluded: h2.OccludeAndTransparent,
    geometry: [t8],
    isDecoration: true
  });
}
function ji(i3) {
  return new l6({
    view: i3,
    attached: false,
    backgroundColor: t7,
    gridColor: c4(i3.effectiveTheme),
    gridWidth: 4,
    renderOccluded: h2.OccludeAndTransparent,
    isDecoration: true
  });
}
function Ri(t8, n6, o5, r8 = new h3()) {
  if (null == t8) return null;
  const {
    renderCoordsHelper: s3
  } = n6, a4 = s3.fromRenderCoords(t8.origin, new _({
    spatialReference: n6.spatialReference
  }));
  if (null == a4) return null;
  const c5 = H(a4, o5);
  if (null == c5) return null;
  r8.position = c5;
  const l7 = 2 * s(t8.basis1), u6 = 2 * s(t8.basis2), d4 = v3.renderUnitScaleFactor(n6.spatialReference, o5);
  r8.width = l7 * d4, r8.height = u6 * d4;
  const g6 = s3.worldUpAtPosition(t8.origin, c2.get());
  return r8.tilt = M(Oi(t8, g6)), r8.heading = s3.headingAtPosition(t8.origin, t8.basis1) - 90, r8;
}
function Oi(i3, t8) {
  return m2(t8, i3.basis2, i3.basis1) + Ni;
}
function Pi(i3, e9, o5, r8, s3, a4, c5 = W()) {
  return a4.toRenderCoords(i3, c5.origin) ? (a4.worldBasisAtPosition(c5.origin, n3.X, c5.basis1), a4.worldBasisAtPosition(c5.origin, n3.Y, c5.basis2), U(c5.basis2, c5.basis1, c5.origin, c5.plane), ms(c5, -h(e9), ds(c5), c5), ms(c5, h(o5), c5.basis1, c5), g(c5.basis1, c5.basis1, r8 / 2), g(c5.basis2, c5.basis2, s3 / 2), J(c5), c5) : (n.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${i3.spatialReference.wkid} is not supported`), null);
}
function Li(i3, t8) {
  if (null == i3?.position) return null;
  const e9 = r7(i3.position, t8.spatialReference, t8.elevationProvider);
  if (null == e9) return null;
  const n6 = v3.renderUnitScaleFactor(i3.position.spatialReference, t8.spatialReference), o5 = i3.width * n6, r8 = i3.height * n6;
  return {
    position: e9,
    heading: i3.heading,
    tilt: i3.tilt,
    renderWidth: o5,
    renderHeight: r8
  };
}
function Vi(i3, t8, e9, n6 = W()) {
  if (null == i3) return null;
  const o5 = Pi(i3.position, i3.heading, i3.tilt, i3.renderWidth, i3.renderHeight, t8.renderCoordsHelper, n6);
  return e9.tiltEnabled || null == o5 || oi(o5, t8.renderCoordsHelper, o5), o5;
}
!function(i3) {
  i3[i3.POSITIVE_X = 0] = "POSITIVE_X", i3[i3.POSITIVE_Y = 1] = "POSITIVE_Y", i3[i3.NEGATIVE_X = 2] = "NEGATIVE_X", i3[i3.NEGATIVE_Y = 3] = "NEGATIVE_Y";
}(fi || (fi = {}));
var Ci = u3.Custom1;
var _i;
var Mi;
!function(i3) {
  i3[i3.HEADING = 1] = "HEADING", i3[i3.TILT = 2] = "TILT";
}(_i || (_i = {})), function(i3) {
  i3[i3.HORIZONTAL_OR_VERTICAL = 0] = "HORIZONTAL_OR_VERTICAL", i3[i3.HORIZONTAL = 1] = "HORIZONTAL", i3[i3.VERTICAL = 2] = "VERTICAL", i3[i3.TILTED = 3] = "TILTED";
}(Mi || (Mi = {}));
var Si = u3.Custom2;
var yi = m();
var Ni = Math.PI / 2;
var Hi = u3.Custom1;
var Ui = u3.Custom2;
function xi(i3) {
  return null != ("building-scene-3d" === i3.type ? i3 : null);
}

// ../../../node_modules/@arcgis/core/views/3d/analysis/Slice/ShiftManipulator.js
var H3;
!function(e9) {
  e9[e9.CENTER_ON_CALLOUT = 0] = "CENTER_ON_CALLOUT", e9[e9.CENTER_ON_ARROW = 1] = "CENTER_ON_ARROW";
}(H3 || (H3 = {}));
var I2 = class extends ee {
  constructor(a4, n6) {
    const s3 = new z2({
      width: 1,
      renderOccluded: h2.OccludeAndTransparent,
      isDecoration: true
    }), i3 = new d2({
      cullFace: e4.Back,
      renderOccluded: h2.Opaque,
      isDecoration: true
    }), c5 = new d2({
      cullFace: e4.Back,
      renderOccluded: h2.Opaque,
      isDecoration: true
    }), l7 = new d2({
      cullFace: e4.Back,
      renderOccluded: h2.Opaque,
      isDecoration: true
    }), m4 = new d2({
      writeDepth: false,
      cullFace: e4.Front,
      renderOccluded: h2.Transparent,
      isDecoration: true
    });
    super(__spreadValues({
      view: a4
    }, S3({
      offsetMode: n6,
      tubeMaterial: i3,
      tipMaterial: c5,
      capMaterial: l7,
      outlineMaterial: m4,
      calloutMaterial: s3
    }))), this._themeHandle = d(() => a4.effectiveTheme.accentColor, (r8) => {
      const o5 = G(r8), a5 = u2.toUnitRGBA(r8), n7 = u2.toUnitRGBA(o5), p2 = u2.toUnitRGBA(u2.blendColors(o5, r8, 0.4)), u6 = u2.toUnitRGBA(u2.blendColors(o5, r8, 0.14));
      s3.setParameters({
        color: a5
      }), i3.setParameters({
        color: u6
      }), c5.setParameters({
        color: n7
      }), l7.setParameters({
        color: p2
      }), m4.setParameters({
        color: a5
      });
    }, P);
  }
  destroy() {
    this._themeHandle.remove(), super.destroy();
  }
};
function S3({
  offsetMode: e9,
  tubeMaterial: t8,
  tipMaterial: r8,
  capMaterial: o5,
  outlineMaterial: a4,
  calloutMaterial: n6
}) {
  const s3 = e9 === H3.CENTER_ON_CALLOUT ? C : 0, i3 = [r(s3, 0, -S2 / 2), r(s3, 0, S2 / 2)], c5 = J2(i3), l7 = W2({
    vertices: i3,
    padding: 0,
    materials: {
      tube: t8,
      tip: r8,
      cap: o5
    }
  }), m4 = W2({
    vertices: i3,
    padding: U2,
    materials: {
      tube: a4,
      tip: a4,
      cap: a4
    }
  }), p2 = gt(n6, [[s3, 0, 0], [s3 - C, 0, 0]]), u6 = gt(n6, [[s3, 0, 0], [s3 - C, 0, 0]]);
  return {
    renderObjects: [...l7.normal.map((e10) => new e6(e10, t6.Unfocused | Ci)), ...m4.normal.map((e10) => new e6(e10, t6.Unfocused | Ci)), new e6(p2, t6.Unfocused | Ci | Si), ...l7.focused.map((e10) => new e6(e10, t6.Focused | Ci)), ...m4.focused.map((e10) => new e6(e10, t6.Focused | Ci)), new e6(u6, t6.Focused | Ci | Si)],
    autoScaleRenderObjects: false,
    collisionType: {
      type: "line",
      paths: [c5]
    },
    collisionPriority: 1,
    radius: n5,
    state: Ci
  };
}
function W2({
  vertices: e9,
  padding: t8,
  materials: r8
}) {
  const o5 = (o6) => {
    const M3 = e9.slice(0), C2 = e(c2.get(), M3[0], M3[1]);
    z(C2, C2);
    const T = e(c2.get(), M3[M3.length - 1], M3[M3.length - 2]);
    if (z(T, T), t8 > 0) {
      const e10 = g(n2(), T, -t8);
      M3[M3.length - 1] = u(e10, e10, M3[M3.length - 1]);
      const r9 = g(n2(), C2, -t8);
      M3[0] = u(r9, r9, M3[0]);
    }
    const E2 = o6 ? c3 : 1, N = x2 * E2, F2 = n5 * E2, y = o2(f2.get());
    if (t8 > 0) {
      const e10 = N / 4, r9 = o(c2.get(), 0, e10, 0), o7 = 1 + t8 / e10;
      i(y, y, r9), f(y, y, o(c2.get(), o7, o7, o7)), i(y, y, g(r9, r9, -1 / o7));
    }
    const B = o2(e2()), D = r(0, 1, 0), P3 = _3(e2(), R3(o3.get(), D, T));
    P3[12] = M3[M3.length - 1][0], P3[13] = M3[M3.length - 1][1], P3[14] = M3[M3.length - 1][2], c(P3, P3, y);
    const x3 = r8.tube, k2 = z3(l4 * (o6 ? a3 : 1) + t8, M3, x3);
    k2.transformation = B;
    const G2 = [k2], q2 = r8.tip, H4 = at(q2, N, F2, 24, false, false, true);
    H4.transformation = P3, G2.push(H4);
    const I3 = r8.cap, S4 = at(I3, N, F2, 24, false, true, false);
    S4.transformation = P3, G2.push(S4);
    const W3 = _3(e2(), R3(o3.get(), D, C2));
    return W3[12] = M3[0][0], W3[13] = M3[0][1], W3[14] = M3[0][2], c(W3, W3, y), G2.push(H4.instantiate({
      transformation: W3
    })), G2.push(S4.instantiate({
      transformation: W3
    })), G2;
  };
  return {
    normal: o5(false),
    focused: o5(true)
  };
}
function z3(e9, t8, r8) {
  const o5 = [], a4 = 12;
  for (let n6 = 0; n6 < a4; n6++) {
    const t9 = n6 / a4 * 2 * Math.PI;
    o5.push([Math.cos(t9) * e9, Math.sin(t9) * e9]);
  }
  return it(r8, o5, t8, [], [], false);
}
function J2(e9, t8) {
  const r8 = e(n2(), e9[e9.length - 1], e9[e9.length - 2]);
  z(r8, r8), g(r8, r8, x2), u(r8, r8, e9[e9.length - 1]);
  {
    const t9 = e(n2(), e9[0], e9[1]);
    return z(t9, t9), g(t9, t9, x2), u(t9, t9, e9[0]), [t9, ...e9, r8];
  }
}

// ../../../node_modules/@arcgis/core/views/3d/analysis/Slice/RotateManipulator.js
var g5 = class extends ee {
  constructor(n6, s3) {
    const a4 = new g2({
      transparent: true,
      writeDepth: false,
      renderOccluded: h2.Opaque,
      isDecoration: true
    }), c5 = j2.calloutWidth, m4 = new z2({
      width: c5,
      renderOccluded: h2.OccludeAndTransparent,
      isDecoration: true
    });
    super(__spreadValues({
      view: n6
    }, j4({
      imageMaterial: a4,
      calloutMaterial: m4
    }))), this._currentTexture = null, this._themeHandle = d(() => n6.effectiveTheme.accentColor, (i3) => {
      const o5 = R2(i3, 0.5), n7 = G(i3), l7 = this._currentTexture, c6 = s3(o5, n7);
      a4.setParameters({
        textureId: c6.texture.id
      }), m4.setParameters({
        color: u2.toUnitRGBA(i3)
      }), this._currentTexture = c6, l7?.release();
    }, P);
  }
  destroy() {
    this._themeHandle.remove(), this._currentTexture?.release(), super.destroy();
  }
};
function j4({
  imageMaterial: e9,
  calloutMaterial: t8
}) {
  const {
    focusMultiplier: r8,
    calloutLength: i3,
    discRadius: o5
  } = j2, s3 = o5 * r8, d4 = (e10, t9) => {
    const r9 = [0, 1, 2, 2, 3, 0];
    return new I(t9, [[e3.POSITION, new t2([i3 - e10, -e10, 0, i3 + e10, -e10, 0, i3 + e10, e10, 0, i3 - e10, e10, 0], r9, 3, true)], [e3.UV0, new t2([0, 0, 1, 0, 1, 1, 0, 1], r9, 2, true)]]);
  }, f6 = gt(t8, [[0, 0, 0], [i3 - o5, 0, 0]]), b3 = gt(t8, [[0, 0, 0], [i3 - s3, 0, 0]]), g6 = Ci;
  return {
    autoScaleRenderObjects: false,
    collisionPriority: 1,
    collisionType: {
      type: "disc",
      direction: [0, 0, 1],
      offset: [i3, 0, 0]
    },
    focusMultiplier: r8,
    radius: o5,
    renderObjects: [new e6(d4(o5, e9), t6.Unfocused | g6), new e6(f6, t6.Unfocused | g6), new e6(d4(s3, e9), t6.Focused | g6), new e6(b3, t6.Focused | g6)],
    state: g6
  };
}

// ../../../node_modules/@arcgis/core/views/3d/analysis/Slice/ResizeManipulator.js
var v4 = class extends ee {
  constructor(o5, i3) {
    const s3 = Ei(i3), m4 = s3 ? b2 : d3, f6 = m4 * s2, d4 = d3, u6 = {
      renderOccluded: h2.OccludeAndTransparent,
      isDecoration: true
    }, j5 = new z2(__spreadProps(__spreadValues({}, u6), {
      width: m4
    })), h5 = new z2(__spreadProps(__spreadValues({}, u6), {
      width: f6
    })), v5 = new z2(__spreadProps(__spreadValues({}, u6), {
      width: d4
    }));
    super(__spreadValues(__spreadValues({
      view: o5
    }, b), M2({
      isCorner: s3,
      unfocusedMaterial: j5,
      focusedMaterial: h5,
      outlineMaterial: v5
    }))), this._themeHandle = d(() => o5.effectiveTheme.accentColor, (r8) => {
      const t8 = u2.toUnitRGBA(r8);
      j5.setParameters({
        color: t8
      }), h5.setParameters({
        color: t8
      }), v5.setParameters({
        color: t8
      });
    }, P);
  }
  destroy() {
    this._themeHandle.remove(), super.destroy();
  }
};
function M2({
  isCorner: e9,
  unfocusedMaterial: r8,
  focusedMaterial: t8,
  outlineMaterial: n6
}) {
  const a4 = e9 ? [r(1, 0, 0), r(0, 0, 0), r(0, 1, 0)] : [r(1, 0, 0), r(-1, 0, 0)];
  return {
    renderObjects: [new e6(gt(r8, a4), t6.Unfocused | Hi), new e6(gt(t8, a4), t6.Focused | Hi), new e6(gt(n6, a4), Ui)],
    collisionType: {
      type: "line",
      paths: [a4]
    },
    radius: e9 ? k : q,
    state: Hi
  };
}

export {
  t7 as t,
  c4 as c,
  e8 as e,
  ei,
  ri,
  si,
  ai,
  ci,
  li,
  ui,
  gi,
  mi,
  pi,
  hi,
  Ei,
  Ai,
  ji,
  Ri,
  Li,
  Vi,
  Ci,
  _i,
  Mi,
  Si,
  Hi,
  Ui,
  xi,
  H3 as H,
  I2 as I,
  g5 as g,
  v4 as v
};
//# sourceMappingURL=chunk-DADJKEQ4.js.map
