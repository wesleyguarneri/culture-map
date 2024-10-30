import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f as f2
} from "./chunk-4UXMYOWI.js";
import {
  N as N2
} from "./chunk-2H3S7IXI.js";
import {
  A,
  b,
  k as k2,
  w as w3,
  y as y4
} from "./chunk-2B3WLK32.js";
import {
  h as h2,
  u as u5,
  y as y3
} from "./chunk-JARG4EKD.js";
import {
  h as h3
} from "./chunk-2CXNO3UO.js";
import {
  l as l3
} from "./chunk-EJXWYKCR.js";
import {
  M,
  N,
  X
} from "./chunk-MIIC4I55.js";
import {
  a as a5,
  g as g3,
  s as s3,
  u as u4
} from "./chunk-B63XAMYJ.js";
import {
  a as a4,
  i as i2
} from "./chunk-THUD7LGO.js";
import {
  G as G2,
  J,
  L,
  S as S2,
  Y,
  k,
  q,
  v as v2,
  w as w2
} from "./chunk-A45QR3VT.js";
import {
  I as I2
} from "./chunk-CSK4VZQ7.js";
import {
  e as e5,
  o as o2
} from "./chunk-GSG4T2KM.js";
import {
  c as c4
} from "./chunk-GK5M6FUR.js";
import {
  u as u3
} from "./chunk-MRP3FBLV.js";
import {
  a as a3
} from "./chunk-Y7SJWJAL.js";
import {
  n as n5
} from "./chunk-A2FDYA6M.js";
import {
  e as e3
} from "./chunk-YGAXDKHF.js";
import {
  e as e4
} from "./chunk-4TOSJLKR.js";
import {
  l
} from "./chunk-DL2B6IFJ.js";
import {
  D,
  c as c2,
  i
} from "./chunk-VOOO6FU5.js";
import {
  D as D2,
  I,
  O as O2,
  c as c3,
  f,
  p
} from "./chunk-KOI252FF.js";
import {
  j
} from "./chunk-MRPCXIVS.js";
import {
  m
} from "./chunk-4L4Y34YK.js";
import {
  n as n2
} from "./chunk-2HDBQXAR.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _,
  n as n3
} from "./chunk-TIRJMGGG.js";
import {
  O,
  S,
  e as e2,
  g as g2,
  o,
  u as u2,
  y as y2,
  z
} from "./chunk-MZM4INJV.js";
import {
  _ as _2,
  l as l2,
  n as n4,
  r
} from "./chunk-J4GMQHGL.js";
import {
  G,
  Rt
} from "./chunk-XLEC46FY.js";
import {
  d,
  v
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  a,
  t
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  c2 as c,
  g,
  h,
  s as s2,
  u
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshErrors.js
var t2 = "Mesh must be loaded before applying operations";
var e6 = "Provided component is not part of the list of components";
var n6 = "Expected polygon to be a Polygon instance";
var s4 = "Expected location to be a Point instance";
var i3 = class extends s {
  constructor() {
    super("invalid-input:location", s4);
  }
};

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/bounds.js
function o3([e7, n7, r2, I4, o4, m5], u9, a7, s5) {
  i4 ??= new Float64Array(24);
  const T3 = i4;
  return T3[0] = e7, T3[1] = n7, T3[2] = r2, T3[3] = e7, T3[4] = o4, T3[5] = r2, T3[6] = I4, T3[7] = o4, T3[8] = r2, T3[9] = I4, T3[10] = n7, T3[11] = r2, T3[12] = e7, T3[13] = n7, T3[14] = m5, T3[15] = e7, T3[16] = o4, T3[17] = m5, T3[18] = I4, T3[19] = o4, T3[20] = m5, T3[21] = I4, T3[22] = n7, T3[23] = m5, J({
    positions: T3,
    transform: u9,
    vertexSpace: a7,
    inSpatialReference: s5,
    outSpatialReference: s5,
    outPositions: T3
  }), N3(T3, s5);
}
var i4 = null;
function m2(e7) {
  if (0 === e7.length) return D;
  const t4 = i([Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, -Number.POSITIVE_INFINITY, -Number.POSITIVE_INFINITY, -Number.POSITIVE_INFINITY]);
  return c2(t4, e7), t4;
}
function N3(n7, r2) {
  const [I4, t4, o4, i5, N5, u9] = m2(n7);
  return new w({
    xmin: I4,
    ymin: t4,
    zmin: o4,
    xmax: i5,
    ymax: N5,
    zmax: u9,
    spatialReference: r2
  });
}

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js
function t3(o4, t4, i5, a7) {
  if (void 0 !== a7) {
    a(o4(), "option: geographic", {
      replacement: "Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",
      version: "4.30",
      warnOnce: true
    });
    const c7 = "local" === t4.type;
    if (!a5(t4) || a7 === c7) return i5.isGeographic || i5.isWebMercator && a7;
    o4().warnOnce(`Specifying the 'geographic' parameter (${a7}) for a Mesh vertex space of type "${t4.type}" is not supported. This parameter will be ignored.`);
  }
  switch (t4.type) {
    case "georeferenced":
      return i5.isGeographic;
    case "local":
      return i5.isGeographic || i5.isWebMercator;
  }
}

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js
var g4 = () => n.getLogger("esri.geometry.support.meshUtils.centerAt");
function u6(e7, t4, r2) {
  if (!e7.vertexAttributes?.position) return;
  const {
    vertexSpace: i5
  } = e7, o4 = r2?.origin ?? e7.anchor, n7 = t3(g4, i5, o4.spatialReference, r2?.geographic);
  a5(i5) ? x(e7, t4, o4) : n7 ? v3(e7, t4, o4) : R(e7, t4, o4);
}
function x(e7, o4, s5) {
  const {
    vertexSpace: c7
  } = e7;
  if (!a5(c7)) return;
  const f5 = b2, m5 = h4;
  if (!c4(o4, m5, e7.spatialReference)) return void S2(g4(), o4.spatialReference, e7.spatialReference, L);
  if (!c4(s5, f5, e7.spatialReference)) {
    const t4 = e7.origin;
    return f5[0] = t4.x, f5[1] = t4.y, f5[2] = t4.z, void S2(g4(), s5.spatialReference, e7.spatialReference, L);
  }
  const u9 = e2(A2, m5, f5);
  c7.origin = u2(n4(), c7.origin, u9);
}
function v3(e7, t4, r2) {
  const i5 = r(r2.x, r2.y, r2.z ?? 0), n7 = M(e7, new a4({
    origin: i5
  }));
  if (!n7) return;
  const a7 = r(t4.x, t4.y, t4.z ?? 0), f5 = M({
    vertexAttributes: n7,
    spatialReference: e7.spatialReference,
    vertexSpace: new a4({
      origin: a7
    })
  }, new i2());
  if (!f5) return;
  const {
    position: p4,
    normal: l4,
    tangent: g7
  } = f5;
  e7.vertexAttributes.position = p4, e7.vertexAttributes.normal = l4, e7.vertexAttributes.tangent = g7, e7.vertexAttributesChanged();
}
function R(e7, t4, r2) {
  const i5 = b2, o4 = h4;
  if (c4(t4, o4, e7.spatialReference)) {
    if (!c4(r2, i5, e7.spatialReference)) {
      const t5 = e7.origin;
      return i5[0] = t5.x, i5[1] = t5.y, i5[2] = t5.z, void S2(g4(), r2.spatialReference, e7.spatialReference, L);
    }
    j2(e7.vertexAttributes.position, o4, i5), e7.vertexAttributesChanged();
  } else S2(g4(), t4.spatialReference, e7.spatialReference, L);
}
function j2(e7, t4, r2) {
  if (e7) for (let i5 = 0; i5 < e7.length; i5 += 3) for (let o4 = 0; o4 < 3; o4++) e7[i5 + o4] += t4[o4] - r2[o4];
}
var h4 = n4();
var b2 = n4();
var A2 = n4();

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js
function c5(e7, n7, r2) {
  return __async(this, null, function* () {
    const {
      source: o4
    } = n7, {
      loadGLTFMesh: i5
    } = yield h(import("./loadGLTFMesh-QUY7I7TU.js"), r2), a7 = yield f3(o4, r2);
    s2(r2);
    const c7 = i5(new _({
      x: 0,
      y: 0,
      z: 0,
      spatialReference: e7.spatialReference
    }), a7.url, {
      resolveFile: u7(a7),
      signal: r2?.signal,
      expectedType: a7.type
    });
    c7.then(() => a7.dispose(), () => a7.dispose());
    const {
      vertexAttributes: m5,
      components: p4
    } = yield c7;
    e7.vertexAttributes = m5, e7.components = p4;
  });
}
function u7(e7) {
  const t4 = Rt(e7.url);
  return (s5) => {
    const n7 = G(s5, t4, t4), r2 = n7 ? n7.replace(/^ *\.\//, "") : null;
    return (r2 ? e7.files.get(r2) : null) ?? s5;
  };
}
function f3(t4, s5) {
  return __async(this, null, function* () {
    if (Array.isArray(t4)) {
      if (!t4.length) throw new s("mesh-load-external:missing-assets", "There must be at least one file to load");
      return t4[0] instanceof File ? h5(t4) : y5(t4, s5);
    }
    return p2(t4);
  });
}
function m3(e7, t4) {
  return __async(this, null, function* () {
    const {
      parts: n7,
      assetMimeType: r2,
      assetName: o4
    } = e7;
    if (1 === n7.length) return new j3(n7[0].partUrl);
    const i5 = yield e7.toBlob(t4);
    return s2(t4), j3.fromBlob(i5, x2(o4, r2));
  });
}
function p2(e7) {
  return j3.fromBlob(e7, x2(e7.name, e7.type));
}
function h5(e7) {
  return T(e7.map((e8) => ({
    name: e8.name,
    mimeType: e8.type,
    source: p2(e8)
  })));
}
function y5(e7, t4) {
  return __async(this, null, function* () {
    const i5 = yield g(e7.map((e8) => __async(this, null, function* () {
      const n7 = yield m3(e8);
      return s2(t4), {
        name: e8.assetName,
        mimeType: e8.assetMimeType,
        source: n7
      };
    })));
    if (c(t4)) throw i5.forEach((e8) => e8.source.dispose()), u();
    return T(i5);
  });
}
var w4 = /^model\/gltf\+json$/;
var d2 = /^model\/gltf-binary$/;
var g5 = /\.gltf$/i;
var b3 = /\.glb$/i;
function T(t4) {
  const s5 = /* @__PURE__ */ new Map();
  let n7, r2 = null;
  for (const {
    name: e7,
    mimeType: o4,
    source: i5
  } of t4) null === r2 && (w4.test(o4) || g5.test(e7) ? (r2 = i5.url, n7 = "gltf") : (d2.test(o4) || b3.test(e7)) && (r2 = i5.url, n7 = "glb")), s5.set(e7, i5.url), i5.files.forEach((e8, t5) => s5.set(t5, e8));
  if (null == r2) throw new s("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new j3(r2, () => t4.forEach(({
    source: e7
  }) => e7.dispose()), s5, n7);
}
var j3 = class _j {
  constructor(e7, t4 = () => {
  }, s5 = /* @__PURE__ */ new Map(), n7) {
    this.url = e7, this.dispose = t4, this.files = s5, this.type = n7;
  }
  static fromBlob(e7, t4) {
    const s5 = URL.createObjectURL(e7);
    return new _j(s5, () => URL.revokeObjectURL(s5), void 0, t4);
  }
};
function x2(e7, t4) {
  return w4.test(t4) || g5.test(e7) ? "gltf" : d2.test(t4) || g5.test(e7) ? "glb" : void 0;
}

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/Metadata.js
var a6 = class extends l {
  constructor(e7) {
    super(e7), this.externalSources = new V(), this._explicitDisplaySource = null, this.addHandles(v(() => this.externalSources, "after-remove", ({
      item: e8
    }) => {
      e8 === this._explicitDisplaySource && (this._explicitDisplaySource = null);
    }, {
      sync: true,
      onListenerRemove: () => this._explicitDisplaySource = null
    }));
  }
  get displaySource() {
    return this._explicitDisplaySource ?? this._implicitDisplaySource;
  }
  set displaySource(e7) {
    if (null != e7 && !u5(e7)) throw new Error("Cannot use this source for display: it is not in a supported format.");
    this._explicitDisplaySource = e7, e7 && this.externalSources.every((r2) => !y3(r2, e7)) && this.externalSources.add(e7);
  }
  clearSources() {
    this.externalSources.removeAll();
  }
  getExternalSourcesOnService(e7) {
    return this.externalSources.items.filter((r2) => h2(r2, e7));
  }
  get _implicitDisplaySource() {
    return this.externalSources.find(u5);
  }
};
e([y()], a6.prototype, "externalSources", void 0), e([y()], a6.prototype, "displaySource", null), e([y()], a6.prototype, "_implicitDisplaySource", null), e([y()], a6.prototype, "_explicitDisplaySource", void 0), a6 = e([a2("esri.geometry.support.meshUtils.Metadata")], a6);

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js
function c6() {
  const {
    faceDescriptions: t4,
    faceVertexOffsets: e7,
    uvScales: r2
  } = F, n7 = 4 * t4.length, o4 = new Float64Array(3 * n7), s5 = new Float32Array(3 * n7), a7 = new Float32Array(2 * n7), i5 = new Uint32Array(2 * t4.length * 3);
  let l4 = 0, c7 = 0, f5 = 0, u9 = 0;
  for (let h7 = 0; h7 < t4.length; h7++) {
    const n8 = t4[h7], p4 = l4 / 3;
    for (const t5 of e7) i5[u9++] = p4 + t5;
    const m5 = n8.corners;
    for (let t5 = 0; t5 < 4; t5++) {
      const e8 = m5[t5];
      let i6 = 0;
      a7[f5++] = 0.25 * r2[t5][0] + n8.uvOrigin[0], a7[f5++] = n8.uvOrigin[1] - 0.25 * r2[t5][1];
      for (let t6 = 0; t6 < 3; t6++) 0 !== n8.axis[t6] ? (o4[l4++] = 0.5 * n8.axis[t6], s5[c7++] = n8.axis[t6]) : (o4[l4++] = 0.5 * e8[i6++], s5[c7++] = 0);
    }
  }
  return {
    position: o4,
    normal: s5,
    uv: a7,
    faces: i5
  };
}
function f4(t4, e7) {
  const r2 = t4.components[0], n7 = r2.faces, s5 = b4[e7], a7 = 6 * s5, i5 = new Array(6), l4 = new Array(n7.length - 6);
  let c7 = 0, f5 = 0;
  for (let o4 = 0; o4 < n7.length; o4++) o4 >= a7 && o4 < a7 + 6 ? i5[c7++] = n7[o4] : l4[f5++] = n7[o4];
  if (null != t4.vertexAttributes.uv) {
    const e8 = new Float32Array(t4.vertexAttributes.uv), r3 = 4 * s5 * 2, n8 = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let t5 = 0; t5 < n8.length; t5++) e8[r3 + t5] = n8[t5];
    t4.vertexAttributes.uv = e8;
  }
  return t4.components = [new h3({
    faces: i5,
    material: r2.material
  }), new h3({
    faces: l4
  })], t4;
}
function u8(t4 = 0) {
  const e7 = Math.round(8 * 2 ** t4), r2 = 2 * e7, n7 = (e7 - 1) * (r2 + 1) + 2 * r2, o4 = new Float64Array(3 * n7), s5 = new Float32Array(3 * n7), a7 = new Float32Array(2 * n7), i5 = new Uint32Array(3 * ((e7 - 1) * r2 * 2));
  let l4 = 0, c7 = 0, f5 = 0, u9 = 0;
  for (let h7 = 0; h7 <= e7; h7++) {
    const t5 = h7 / e7 * Math.PI + 0.5 * Math.PI, n8 = Math.cos(t5), p4 = Math.sin(t5);
    O3[2] = p4;
    const m5 = 0 === h7 || h7 === e7, w6 = m5 ? r2 - 1 : r2;
    for (let v5 = 0; v5 <= w6; v5++) {
      const t6 = v5 / w6 * 2 * Math.PI;
      O3[0] = -Math.sin(t6) * n8, O3[1] = Math.cos(t6) * n8;
      for (let e8 = 0; e8 < 3; e8++) o4[l4] = 0.5 * O3[e8], s5[l4] = O3[e8], ++l4;
      a7[c7++] = (v5 + (m5 ? 0.5 : 0)) / r2, a7[c7++] = h7 / e7, 0 !== h7 && v5 !== r2 && (h7 !== e7 && (i5[f5++] = u9, i5[f5++] = u9 + 1, i5[f5++] = u9 - r2), 1 !== h7 && (i5[f5++] = u9, i5[f5++] = u9 - r2, i5[f5++] = u9 - r2 - 1)), u9++;
    }
  }
  return {
    position: o4,
    normal: s5,
    uv: a7,
    faces: i5
  };
}
function h6(t4 = 0) {
  const e7 = 5, r2 = Math.round(16 * 2 ** t4), n7 = (e7 - 1) * (r2 + 1) + 2 * r2, o4 = new Float64Array(3 * n7), s5 = new Float32Array(3 * n7), a7 = new Float32Array(2 * n7), i5 = new Uint32Array(3 * (4 * r2));
  let l4 = 0, c7 = 0, f5 = 0, u9 = 0, h7 = 0;
  for (let p4 = 0; p4 <= e7; p4++) {
    const t5 = 0 === p4 || p4 === e7, n8 = p4 <= 1 || p4 >= e7 - 1, m5 = 2 === p4 || 4 === p4, w6 = t5 ? r2 - 1 : r2;
    for (let v5 = 0; v5 <= w6; v5++) {
      const g7 = v5 / w6 * 2 * Math.PI, A4 = t5 ? 0 : 0.5;
      O3[0] = A4 * Math.sin(g7), O3[1] = A4 * -Math.cos(g7), O3[2] = p4 <= 2 ? 0.5 : -0.5;
      for (let t6 = 0; t6 < 3; t6++) o4[l4++] = O3[t6], s5[c7++] = n8 ? 2 === t6 ? p4 <= 1 ? 1 : -1 : 0 : 2 === t6 ? 0 : O3[t6] / A4;
      a7[f5++] = (v5 + (t5 ? 0.5 : 0)) / r2, a7[f5++] = p4 <= 1 ? 1 * p4 / 3 : p4 <= 3 ? 1 * (p4 - 2) / 3 + 1 / 3 : 1 * (p4 - 4) / 3 + 2 / 3, m5 || 0 === p4 || v5 === r2 || (p4 !== e7 && (i5[u9++] = h7, i5[u9++] = h7 + 1, i5[u9++] = h7 - r2), 1 !== p4 && (i5[u9++] = h7, i5[u9++] = h7 - r2, i5[u9++] = h7 - r2 - 1)), h7++;
    }
  }
  return {
    position: o4,
    normal: s5,
    uv: a7,
    faces: i5
  };
}
function p3(t4, e7) {
  const r2 = "number" == typeof e7 ? e7 : null != e7 ? e7.width : 1, n7 = "number" == typeof e7 ? e7 : null != e7 ? e7.height : 1;
  switch (t4) {
    case "up":
    case "down":
      return {
        width: r2,
        depth: n7
      };
    case "north":
    case "south":
      return {
        width: r2,
        height: n7
      };
    case "east":
    case "west":
      return {
        depth: r2,
        height: n7
      };
  }
}
function m4(t4) {
  const e7 = A3.facingAxisOrderSwap[t4], r2 = A3.position, n7 = A3.normal, o4 = new Float64Array(r2.length), s5 = new Float32Array(n7.length);
  let a7 = 0;
  for (let i5 = 0; i5 < 4; i5++) {
    const t5 = a7;
    for (let i6 = 0; i6 < 3; i6++) {
      const l4 = e7[i6], c7 = Math.abs(l4) - 1, f5 = l4 >= 0 ? 1 : -1;
      o4[a7] = r2[t5 + c7] * f5, s5[a7] = n7[t5 + c7] * f5, a7++;
    }
  }
  return {
    position: o4,
    normal: s5,
    uv: new Float32Array(A3.uv),
    faces: new Uint32Array(A3.faces),
    isPlane: true
  };
}
var w5 = 1;
var v4 = 2;
var g6 = 3;
var A3 = {
  position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0],
  normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  uv: [0, 1, 1, 1, 1, 0, 0, 0],
  faces: [0, 1, 2, 0, 2, 3],
  facingAxisOrderSwap: {
    east: [g6, w5, v4],
    west: [-g6, -w5, v4],
    north: [-w5, g6, v4],
    south: [w5, -g6, v4],
    up: [w5, v4, g6],
    down: [w5, -v4, -g6]
  }
};
function x3(t4, e7, r2) {
  t4.isPlane || y6(t4), M2(t4, d3(r2?.size, r2?.unit, e7.spatialReference));
  const n7 = s3(e7, r2), l4 = e7.spatialReference.isGeographic ? s3(e7) : n7, c7 = M({
    vertexAttributes: t4,
    vertexSpace: l4,
    spatialReference: e7.spatialReference
  }, n7, {
    allowBufferReuse: true
  });
  return {
    vertexAttributes: new l3(__spreadProps(__spreadValues({}, c7), {
      uv: t4.uv
    })),
    vertexSpace: n7,
    components: [new h3({
      faces: t4.faces,
      material: r2?.material || null
    })],
    spatialReference: e7.spatialReference
  };
}
function y6(t4) {
  for (let e7 = 0; e7 < t4.position.length; e7 += 3) t4.position[e7 + 2] += 0.5;
}
function d3(t4, e7, r2) {
  const n7 = X(e7, r2);
  if (null == t4 && 1 === n7) return null;
  if (null == t4) return [n7, n7, n7];
  if ("number" == typeof t4) {
    const e8 = t4 * n7;
    return [e8, e8, e8];
  }
  return [null != t4.width ? t4.width * n7 : n7, null != t4.depth ? t4.depth * n7 : n7, null != t4.height ? t4.height * n7 : n7];
}
function M2(t4, n7) {
  if (null != n7) {
    S3[0] = n7[0], S3[4] = n7[1], S3[8] = n7[2];
    for (let r2 = 0; r2 < t4.position.length; r2 += 3) {
      for (let e7 = 0; e7 < 3; e7++) O3[e7] = t4.position[r2 + e7];
      S(O3, O3, S3);
      for (let e7 = 0; e7 < 3; e7++) t4.position[r2 + e7] = O3[e7];
    }
    if (n7[0] !== n7[1] || n7[1] !== n7[2]) {
      S3[0] = 1 / n7[0], S3[4] = 1 / n7[1], S3[8] = 1 / n7[2];
      for (let n8 = 0; n8 < t4.normal.length; n8 += 3) {
        for (let e7 = 0; e7 < 3; e7++) O3[e7] = t4.normal[n8 + e7];
        S(O3, O3, S3), z(O3, O3);
        for (let e7 = 0; e7 < 3; e7++) t4.normal[n8 + e7] = O3[e7];
      }
    }
  }
}
var F = {
  faceDescriptions: [{
    axis: [0, -1, 0],
    uvOrigin: [0, 0.625],
    corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]]
  }, {
    axis: [1, 0, 0],
    uvOrigin: [0.25, 0.625],
    corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]]
  }, {
    axis: [0, 1, 0],
    uvOrigin: [0.5, 0.625],
    corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]]
  }, {
    axis: [-1, 0, 0],
    uvOrigin: [0.75, 0.625],
    corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]]
  }, {
    axis: [0, 0, 1],
    uvOrigin: [0, 0.375],
    corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]]
  }, {
    axis: [0, 0, -1],
    uvOrigin: [0, 0.875],
    corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]]
  }],
  uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]],
  faceVertexOffsets: [0, 1, 2, 0, 2, 3]
};
var b4 = {
  south: 0,
  east: 1,
  north: 2,
  west: 3,
  up: 4,
  down: 5
};
var O3 = n4();
var S3 = e4();

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js
var O4 = () => n.getLogger("esri.geometry.support.meshUtils.rotate");
function B(t4, e7, r2) {
  if (!t4.vertexAttributes?.position || 0 === e7[3]) return;
  const {
    spatialReference: o4,
    vertexSpace: i5
  } = t4, n7 = r2?.origin ?? t4.anchor, s5 = r2?.geographic, a7 = t3(O4, i5, o4, s5);
  g3(t4) ? G3(t4, e7, n7) : a7 ? H(t4, e7, n7) : I3(t4, e7, n7);
}
function G3(t4, e7, r2) {
  t4.transform ??= new N2();
  const {
    vertexSpace: l4,
    transform: c7,
    spatialReference: f5
  } = t4, [g7, x4, A4] = l4.origin, R2 = new _({
    x: g7,
    y: x4,
    z: A4,
    spatialReference: f5
  }), d4 = K;
  if (R2.equals(r2)) o(d4, 0, 0, 0);
  else if (!N(d4, r2, t4)) return void S2(O4(), r2.spatialReference, f5, L);
  I2(Z, y4(e7), A(e7));
  const y7 = D2(N4, Z, l2, _2, d4), {
    localMatrix: U
  } = c7, q3 = c3(N4, y7, U);
  c7.scale = O2(n4(), q3), f(q3, q3, y2(K, c7.scale));
  const z3 = c7.rotationAxis;
  c7.rotation = k2(q3), 0 === c7.rotationAngle && (c7.rotationAxis = z3), c7.translation = I(n4(), q3);
}
function H(t4, r2, o4) {
  const i5 = t4.spatialReference, n7 = a3(i5), s5 = Y2;
  if (!c4(o4, s5, n7) && (S2(O4(), o4.spatialReference, n7, "Falling back to mesh origin"), !c4(t4.origin, s5, n7))) return void S2(O4(), t4.origin.spatialReference, n7);
  const a7 = t4.vertexAttributes.position, l4 = t4.vertexAttributes.normal, c7 = t4.vertexAttributes.tangent, m5 = new Float64Array(a7.length), f5 = null != l4 ? new Float32Array(l4.length) : null, p4 = null != c7 ? new Float32Array(c7.length) : null;
  u3(n7, s5, W, n7), n5(X2, W);
  const u9 = Q;
  S(y4(Q), y4(r2), X2), u9[3] = r2[3], w2(a7, i5, m5) && (null == l4 || null == f5 || v2(l4, a7, m5, i5, f5)) && (null == c7 || null == p4 || Y(c7, a7, m5, i5, p4)) ? (J2(m5, u9, 3, s5), G2(m5, a7, i5) && (null == l4 || null == f5 || (J2(f5, u9, 3), k(f5, a7, m5, i5, l4))) && (null == c7 || null == p4 || (J2(p4, u9, 4), q(p4, a7, m5, i5, c7))) ? t4.vertexAttributesChanged() : S2(O4(), n7, i5)) : S2(O4(), i5, n7);
}
function I3(t4, e7, r2) {
  const o4 = Y2;
  if (!c4(r2, o4, t4.spatialReference)) {
    const e8 = t4.origin;
    return o4[0] = e8.x, o4[1] = e8.y, o4[2] = e8.z, void S2(O4(), r2.spatialReference, t4.spatialReference, L);
  }
  J2(t4.vertexAttributes.position, e7, 3, o4), J2(t4.vertexAttributes.normal, e7, 3), J2(t4.vertexAttributes.tangent, e7, 4), t4.vertexAttributesChanged();
}
function J2(t4, e7, r2, o4 = l2) {
  if (null != t4) {
    p(W, A(e7), y4(e7));
    for (let e8 = 0; e8 < t4.length; e8 += r2) {
      for (let r3 = 0; r3 < 3; r3++) K[r3] = t4[e8 + r3] - o4[r3];
      O(K, K, W);
      for (let r3 = 0; r3 < 3; r3++) t4[e8 + r3] = K[r3] + o4[r3];
    }
  }
}
var K = n4();
var N4 = e3();
var Q = b();
var W = e3();
var X2 = e4();
var Y2 = n4();
var Z = e5();

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/scale.js
var k3 = () => n.getLogger("esri.geometry.support.meshUtils.scale");
function q2(e7, t4, r2) {
  if (!e7.vertexAttributes?.position) return;
  const {
    vertexSpace: o4,
    spatialReference: i5
  } = e7, n7 = r2?.origin ?? e7.anchor, s5 = r2?.geographic, a7 = t3(k3, o4, i5, s5);
  g3(e7) ? z2(e7, t4, n7) : a7 ? L2(e7, t4, n7) : M3(e7, t4, n7);
}
function z2(e7, s5, f5) {
  e7.transform ??= new N2();
  const {
    vertexSpace: g7,
    transform: x4,
    spatialReference: h7
  } = e7, [A4, d4, y7] = g7.origin, w6 = new _({
    x: A4,
    y: d4,
    z: y7,
    spatialReference: h7
  }), F2 = T2;
  if (w6.equals(f5)) o(F2, 0, 0, 0);
  else if (!N(F2, f5, e7)) return void S2(k3(), f5.spatialReference, h7, L);
  const S4 = o(V2, s5, s5, s5), U = D2(D3, o2, l2, S4, F2), {
    localMatrix: q3
  } = x4, z3 = c3(D3, U, q3);
  x4.scale = O2(n4(), z3), f(z3, z3, y2(T2, x4.scale));
  const L3 = x4.rotationAxis;
  x4.rotation = k2(z3), 0 === x4.rotationAngle && (x4.rotationAxis = L3), x4.translation = I(n4(), z3);
}
function L2(e7, t4, r2) {
  const o4 = e7.spatialReference, i5 = a3(o4), n7 = E;
  if (!c4(r2, n7, i5) && (S2(k3(), r2.spatialReference, i5, "Falling back to mesh origin"), !c4(e7.origin, n7, i5))) return void S2(k3(), e7.origin.spatialReference, i5);
  const s5 = e7.vertexAttributes.position, a7 = e7.vertexAttributes.normal, l4 = e7.vertexAttributes.tangent, c7 = new Float64Array(s5.length), f5 = null != a7 ? new Float32Array(a7.length) : null, m5 = null != l4 ? new Float32Array(l4.length) : null;
  w2(s5, o4, c7) && (null == a7 || null == f5 || v2(a7, s5, c7, o4, f5)) && (null == l4 || null == m5 || Y(l4, s5, c7, o4, m5)) ? (P(c7, t4, n7), G2(c7, s5, o4) && (null == a7 || null == f5 || k(f5, s5, c7, o4, a7)) && (null == l4 || null == m5 || q(m5, s5, c7, o4, l4)) ? e7.vertexAttributesChanged() : S2(k3(), i5, o4)) : S2(k3(), o4, i5);
}
function M3(e7, t4, r2) {
  const o4 = E;
  if (!c4(r2, o4, e7.spatialReference)) {
    const t5 = e7.origin;
    return o4[0] = t5.x, o4[1] = t5.y, o4[2] = t5.z, void S2(k3(), r2.spatialReference, e7.spatialReference, L);
  }
  P(e7.vertexAttributes.position, t4, o4), e7.vertexAttributesChanged();
}
function P(e7, t4, r2 = l2) {
  if (e7) for (let o4 = 0; o4 < e7.length; o4 += 3) {
    for (let t5 = 0; t5 < 3; t5++) T2[t5] = e7[o4 + t5] - r2[t5];
    g2(T2, T2, t4);
    for (let t5 = 0; t5 < 3; t5++) e7[o4 + t5] = T2[t5] + r2[t5];
  }
}
var T2 = n4();
var V2 = n4();
var D3 = e3();
var E = n4();

// ../../../node_modules/@arcgis/core/geometry/Mesh.js
var H2;
var K2 = "esri.geometry.Mesh";
function J3() {
  return n.getLogger(K2);
}
var Q2 = {
  base: null,
  key: "type",
  defaultKeyValue: "georeferenced",
  typeMap: {
    georeferenced: i2,
    local: a4
  }
};
var X3 = H2 = class extends m.LoadableMixin(n2(n3)) {
  constructor(e7) {
    super(e7), this.components = null, this.vertexSpace = new i2(), this.transform = null, this.metadata = new a6(), this.hasZ = true, this.hasM = false, this.vertexAttributes = new l3(), this.type = "mesh";
  }
  initialize() {
    (0 === this.metadata.externalSources.length || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.addHandles(d(() => ({
        vertexAttributes: this.vertexAttributes,
        components: this.components?.map((e7) => e7.clone())
      }), () => this._clearSources(), {
        once: true,
        sync: true
      }));
    });
  }
  get hasExtent() {
    return this.loaded ? this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0) : null != this.metadata.displaySource?.extent;
  }
  get _transformedExtent() {
    const {
      components: e7,
      spatialReference: t4,
      vertexAttributes: r2,
      vertexSpace: o4
    } = this, s5 = r2.position;
    if (0 === s5.length || e7 && 0 === e7.length) return new w({
      xmin: 0,
      ymin: 0,
      zmin: 0,
      xmax: 0,
      ymax: 0,
      zmax: 0,
      spatialReference: t4
    });
    if (a5(o4)) {
      const {
        _untransformedBounds: e8,
        transform: r3
      } = this;
      return o3(e8, r3, o4, t4);
    }
    return N3(s5, t4);
  }
  get _untransformedBounds() {
    return m2(this.vertexAttributes.position);
  }
  get anchor() {
    const e7 = u4(this.vertexSpace, this.spatialReference);
    if (null != e7) return e7;
    const {
      center: t4,
      zmin: r2
    } = this._transformedExtent;
    return new _({
      x: t4.x,
      y: t4.y,
      z: r2,
      spatialReference: this.spatialReference
    });
  }
  get origin() {
    const e7 = u4(this.vertexSpace, this.spatialReference);
    return null != e7 ? e7 : this._transformedExtent.center;
  }
  get extent() {
    return this.loaded || null == this.metadata?.displaySource?.extent ? this._transformedExtent : this.metadata.displaySource.extent.clone();
  }
  addComponent(e7) {
    this._checkIfLoaded("addComponent()") && (this.components || (this.components = []), this.components.push(h3.from(e7)), this.notifyChange("components"));
  }
  removeComponent(e7) {
    if (this._checkIfLoaded("removeComponent()")) {
      if (this.components) {
        const t4 = this.components.indexOf(e7);
        if (-1 !== t4) return this.components.splice(t4, 1), void this.notifyChange("components");
      }
      J3().error("removeComponent()", e6);
    }
  }
  rotate(e7, t4, r2, o4) {
    return w3(e7, t4, r2, Y3), B(this, Y3, o4), this;
  }
  offset(e7, t4, r2) {
    if (!this._checkIfLoaded("offset()")) return this;
    const {
      vertexSpace: o4,
      vertexAttributes: s5
    } = this, n7 = s5?.position;
    if (!n7) return this;
    if (a5(o4)) {
      const [s6, n8, i5] = o4.origin;
      o4.origin = r(s6 + e7, n8 + t4, i5 + r2);
    } else {
      for (let o5 = 0; o5 < n7.length; o5 += 3) n7[o5] += e7, n7[o5 + 1] += t4, n7[o5 + 2] += r2;
      this.vertexAttributesChanged();
    }
    return this;
  }
  scale(e7, t4) {
    return this._checkIfLoaded("scale()") ? (q2(this, e7, t4), this) : this;
  }
  centerAt(e7, t4) {
    return this._checkIfLoaded("centerAt()") ? (u6(this, e7, t4), this) : this;
  }
  load(e7) {
    const {
      metadata: {
        displaySource: t4
      }
    } = this;
    return t4 && this.addResolvingPromise(c5(this, t4, e7)), Promise.resolve(this);
  }
  addExternalSources(e7) {
    this.metadata.externalSources.addMany(e7);
  }
  updateDisplaySource(e7) {
    this.metadata.displaySource = e7;
  }
  clone() {
    return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(), this.vertexSpace.clone());
  }
  cloneAndModifyVertexAttributes(e7, t4) {
    let r2 = null;
    if (this.components) {
      const e8 = /* @__PURE__ */ new Map(), t5 = /* @__PURE__ */ new Map();
      r2 = this.components.map((r3) => r3.cloneWithDeduplication(e8, t5));
    }
    const o4 = {
      components: r2,
      spatialReference: this.spatialReference,
      vertexAttributes: e7,
      vertexSpace: t4,
      transform: this.transform?.clone() ?? null,
      metadata: this.metadata.clone()
    };
    return new H2(o4);
  }
  cloneShallow() {
    return new H2({
      components: this.components,
      spatialReference: this.spatialReference,
      vertexAttributes: this.vertexAttributes,
      vertexSpace: this.vertexSpace.clone(),
      transform: this.transform,
      metadata: this.metadata
    });
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  toBinaryGLTF(e7) {
    return __async(this, null, function* () {
      const [{
        toBinaryGLTF: t4
      }] = yield Promise.all([import("./gltfexport-4RZVFS2H.js"), this.load(e7)]);
      return s2(e7), yield t4(this, e7);
    });
  }
  get memoryUsage() {
    let e7 = 0;
    if (e7 += this.vertexAttributes.memoryUsage, null != this.components) for (const t4 of this.components) e7 += t4.memoryUsage;
    return e7;
  }
  _clearSources() {
    this.metadata.clearSources();
  }
  _checkIfLoaded(e7) {
    return !!this.loaded || (J3().error(e7, t2), false);
  }
  static createBox(e7, t4) {
    if (!(e7 instanceof _)) return J3().error(".createBox()", s4), null;
    const r2 = new H2(x3(c6(), e7, t4));
    return t4?.imageFace && "all" !== t4.imageFace ? f4(r2, t4.imageFace) : r2;
  }
  static createSphere(e7, t4) {
    return e7 instanceof _ ? new H2(x3(u8(t4?.densificationFactor || 0), e7, t4)) : (J3().error(".createSphere()", s4), null);
  }
  static createCylinder(e7, t4) {
    return e7 instanceof _ ? new H2(x3(h6(t4?.densificationFactor || 0), e7, t4)) : (J3().error(".createCylinder()", s4), null);
  }
  static createPlane(e7, t4) {
    if (!(e7 instanceof _)) return J3().error(".createPlane()", s4), null;
    const r2 = t4?.facing ?? "up", o4 = p3(r2, t4?.size);
    return new H2(x3(m4(r2), e7, __spreadProps(__spreadValues({}, t4), {
      size: o4
    })));
  }
  static createFromPolygon(e7, t4) {
    if (!(e7 instanceof j)) return J3().error(".createFromPolygon()", n6), null;
    const r2 = f2(e7);
    return new H2({
      vertexAttributes: new l3({
        position: r2.position
      }),
      components: [new h3({
        faces: r2.faces,
        shading: "flat",
        material: t4?.material ?? null
      })],
      spatialReference: e7.spatialReference,
      vertexSpace: new i2()
    });
  }
  static createFromGLTF(e7, t4, r2) {
    return __async(this, null, function* () {
      if (!(e7 instanceof _)) {
        const e8 = new i3();
        throw J3().error(".createfromGLTF()", e8.message), e8;
      }
      const {
        loadGLTFMesh: o4
      } = yield h(import("./loadGLTFMesh-QUY7I7TU.js"), r2);
      return new H2(yield o4(e7, t4, r2));
    });
  }
  static createFromFiles(e7, o4, s5) {
    return __async(this, null, function* () {
      t(J3(), "`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'", {
        replacement: "SceneLayer.convertMesh",
        version: "4.29"
      });
      const n7 = (e8) => J3().error(".createFromFiles()", e8.message);
      if (!(e7 instanceof _)) {
        const e8 = new i3();
        throw n7(e8), e8;
      }
      if (!s5?.layer) throw new s("invalid:no-layer", "SceneLayer required for file to mesh conversion.");
      return s5.layer.convertMesh(o4, __spreadValues({
        location: e7
      }, s5));
    });
  }
  static createWithExternalSource(e7, t4, r2) {
    const o4 = r2?.extent ?? null, {
      spatialReference: s5
    } = e7, n7 = r2?.transform?.clone() ?? new N2(), i5 = s3(e7, r2), a7 = {
      source: t4,
      extent: o4
    }, c7 = new a6();
    return c7.externalSources.push(a7), new H2({
      metadata: c7,
      transform: n7,
      vertexSpace: i5,
      spatialReference: s5
    });
  }
  static createIncomplete(e7, t4) {
    const {
      spatialReference: o4
    } = e7, s5 = t4?.transform?.clone() ?? new N2(), n7 = s3(e7, t4), i5 = new H2({
      transform: s5,
      vertexSpace: n7,
      spatialReference: o4
    });
    return i5.addResolvingPromise(Promise.reject(new s("mesh-incomplete", "Mesh resources are not complete"))), i5;
  }
};
e([y({
  type: [h3],
  json: {
    write: true
  }
})], X3.prototype, "components", void 0), e([y({
  nonNullable: true,
  types: Q2,
  constructOnly: true,
  json: {
    write: true
  }
})], X3.prototype, "vertexSpace", void 0), e([y({
  type: N2,
  json: {
    write: true
  }
})], X3.prototype, "transform", void 0), e([y({
  constructOnly: true
})], X3.prototype, "metadata", void 0), e([y()], X3.prototype, "hasExtent", null), e([y()], X3.prototype, "_transformedExtent", null), e([y()], X3.prototype, "_untransformedBounds", null), e([y()], X3.prototype, "anchor", null), e([y()], X3.prototype, "origin", null), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], X3.prototype, "extent", null), e([y({
  readOnly: true,
  json: {
    read: false,
    write: true,
    default: true
  }
})], X3.prototype, "hasZ", void 0), e([y({
  readOnly: true,
  json: {
    read: false,
    write: true,
    default: false
  }
})], X3.prototype, "hasM", void 0), e([y({
  type: l3,
  nonNullable: true,
  json: {
    write: true
  }
})], X3.prototype, "vertexAttributes", void 0), X3 = H2 = e([a2(K2)], X3);
var Y3 = b();
var $ = X3;

export {
  $
};
//# sourceMappingURL=chunk-KSVRNA4R.js.map
