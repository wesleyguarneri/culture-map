import {
  f as f3,
  g
} from "./chunk-XCVOKQAA.js";
import {
  n as n2
} from "./chunk-L7ZKWTWL.js";
import {
  e as e2,
  n as n3
} from "./chunk-WDDCGJTI.js";
import {
  V
} from "./chunk-ZE47C44H.js";
import {
  I
} from "./chunk-W5ERGD4Y.js";
import {
  I as I2,
  J as J2
} from "./chunk-7B5YPLFX.js";
import {
  u as u2
} from "./chunk-KVKFHRJ3.js";
import {
  a as a2
} from "./chunk-VWML4J2J.js";
import {
  e
} from "./chunk-BQZBOYBD.js";
import {
  b
} from "./chunk-TRSGUVSM.js";
import {
  J
} from "./chunk-DUTZNK67.js";
import {
  h
} from "./chunk-XTVPEVHA.js";
import {
  D,
  E,
  f as f2,
  u
} from "./chunk-IHVSZYZS.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  O,
  o,
  r
} from "./chunk-AXVPJBVW.js";
import {
  n,
  t
} from "./chunk-OXEPWRM7.js";
import {
  s3 as s2
} from "./chunk-JJS7PR2U.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  a2 as a,
  c3 as c,
  has,
  p,
  w
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/I3SProjectionUtil.js
function n4(r2, a3, n5, s4, e4) {
  const h2 = "east-north-up" === n5 ? t(r2) : c2(r2, a3, s4), m = e();
  return u2(s4, h2, m, e4), m;
}
var s3 = 1;
var e3 = 5 - s3;
function c2(t2, o2, i) {
  const n5 = n(), c3 = t2[3], h2 = 2 ** (Math.ceil(Math.log(c3) * Math.LOG2E / e3) * e3 + s3);
  if (i.isGeographic) {
    const o3 = h2 / s2(i).radius * 180 / Math.PI, r2 = Math.round(t2[1] / o3), s4 = Math.max(-90, Math.min(90, r2 * o3)), e4 = o3 / Math.cos((Math.abs(s4) - o3 / 2) / 180 * Math.PI), c4 = Math.round(t2[0] / e4) * e4;
    n5[0] = c4, n5[1] = s4;
  } else {
    const o3 = Math.round(t2[0] / h2), r2 = Math.round(t2[1] / h2);
    n5[0] = o3 * h2, n5[1] = r2 * h2;
  }
  const m = t2[2] + o2, M = Math.round(m / h2);
  return n5[2] = M * h2, n5;
}

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js
function U2(e4) {
  return e4 ? parseInt(e4.substring(e4.lastIndexOf("/") + 1, e4.length), 10) : void 0;
}
function N(e4) {
  if (has("disable-feature:i3s-draco") || !e4) return false;
  for (const t2 of e4) for (const e5 of t2.geometryBuffers) if ("draco" === e5.compressedAttributes?.encoding) return true;
  return false;
}
function k(e4, t2, r2, o2) {
  r2.traverse(t2, (t3) => {
    const r3 = t3.serviceMbsInIndexSR;
    return (null != r3 && O2(e4, r3)) !== F.OUTSIDE && (o2(t3), true);
  });
}
function D2(e4, t2, r2) {
  let o2 = 0, n5 = 0;
  for (let i = 0; i < t2.length && o2 < e4.length; i++) e4[o2] === t2[i] && (r2(i) && (e4[n5] = e4[o2], n5++), o2++);
  e4.length = n5;
}
function W(e4, r2, o2) {
  let n5 = 0, i = 0;
  for (; n5 < o2.length; ) {
    w(e4, o2[n5]) >= 0 === r2 && (o2[i] = o2[n5], i++), n5++;
  }
  o2.length = i;
}
var _ = u();
function q(e4, t2) {
  if (0 === t2.rotationScale[1] && 0 === t2.rotationScale[2] && 0 === t2.rotationScale[3] && 0 === t2.rotationScale[5] && 0 === t2.rotationScale[6] && 0 === t2.rotationScale[7]) return _[0] = (e4[0] - t2.position[0]) / t2.rotationScale[0], _[1] = (e4[1] - t2.position[1]) / t2.rotationScale[4], _[2] = (e4[2] - t2.position[0]) / t2.rotationScale[0], _[3] = (e4[3] - t2.position[1]) / t2.rotationScale[4], _;
}
var F;
function O2(e4, t2) {
  const r2 = t2[0], o2 = t2[1], n5 = t2[3], i = e4[0] - r2, a3 = r2 - e4[2], s4 = e4[1] - o2, l = o2 - e4[3], c3 = Math.max(i, a3, 0), u3 = Math.max(s4, l, 0), f4 = c3 * c3 + u3 * u3;
  if (f4 > n5 * n5) return F.OUTSIDE;
  if (f4 > 0) return F.INTERSECTS_CENTER_OUTSIDE;
  return -Math.max(i, a3, s4, l) > n5 ? F.INSIDE : F.INTERSECTS_CENTER_INSIDE;
}
function L(e4, t2, r2) {
  const o2 = [], n5 = r2?.missingFields, i = r2?.originalFields;
  for (const a3 of e4) {
    const e5 = a3.toLowerCase();
    let r3 = false;
    for (const n6 of t2) if (e5 === n6.name.toLowerCase()) {
      o2.push(n6.name), r3 = true, i && i.push(a3);
      break;
    }
    !r3 && n5 && n5.push(a3);
  }
  return o2;
}
function A(e4, t2, r2, n5, i, a3) {
  return __async(this, null, function* () {
    if (0 === t2.length) return [];
    const s4 = e4.attributeStorageInfo;
    if (null != e4.associatedLayer) try {
      return yield P(e4.associatedLayer, t2, r2, n5, a3);
    } catch (l) {
      if (e4.associatedLayer.loaded) throw l;
    }
    if (s4) {
      const l = K(t2, r2, i);
      if (null == l) throw new s("scenelayer:features-not-loaded", "Tried to query attributes for unloaded features");
      const c3 = e4.parsedUrl.path;
      return (yield Promise.all(l.map((t3) => G(c3, s4, t3.node, t3.indices, n5, e4.apiKey, e4.customParameters, a3).then((e5) => {
        for (let r3 = 0; r3 < t3.graphics.length; r3++) {
          const o2 = t3.graphics[r3], n6 = e5[r3];
          if (o2.attributes) for (const e6 in o2.attributes) e6 in n6 || (n6[e6] = o2.attributes[e6]);
          o2.attributes = n6;
        }
        return t3.graphics;
      })))).flat();
    }
    throw new s("scenelayer:no-attribute-source", "This scene layer does not have a source for attributes available");
  });
}
function K(e4, t2, r2) {
  const o2 = /* @__PURE__ */ new Map(), n5 = [], i = r2();
  for (const a3 of e4) {
    const e5 = a3.attributes[t2];
    for (let t3 = 0; t3 < i.length; t3++) {
      const r3 = i[t3], s4 = r3.featureIds.indexOf(e5);
      if (s4 >= 0) {
        let e6 = o2.get(r3.node);
        e6 || (e6 = {
          node: r3.node,
          indices: [],
          graphics: []
        }, n5.push(e6), o2.set(r3.node, e6)), e6.indices.push(s4), e6.graphics.push(a3);
        for (let r4 = t3; r4 > 0; r4--) i[r4] = i[r4 - 1];
        i[0] = r3;
        break;
      }
    }
  }
  return n5;
}
function P(e4, t2, r2, o2, n5) {
  return __async(this, null, function* () {
    t2.sort((e5, t3) => e5.attributes[r2] - t3.attributes[r2]);
    const i = t2.map((e5) => e5.attributes[r2]), a3 = [], s4 = L(o2, e4.fields, {
      originalFields: a3
    }), l = yield B(e4, i, s4, n5);
    for (let c3 = 0; c3 < t2.length; c3++) {
      const e5 = t2[c3], r3 = l[c3], o3 = {};
      if (e5.attributes) for (const t3 in e5.attributes) o3[t3] = e5.attributes[t3];
      for (let t3 = 0; t3 < a3.length; t3++) o3[a3[t3]] = r3[s4[t3]];
      e5.attributes = o3;
    }
    return t2;
  });
}
function B(e4, t2, n5, i) {
  const a3 = e4.capabilities.query.maxRecordCount;
  if (null != a3 && t2.length > a3) {
    const o2 = p(t2, a3);
    return Promise.all(o2.map((t3) => B(e4, t3, n5, i))).then((e5) => e5.flat());
  }
  const s4 = new b({
    objectIds: t2,
    outFields: n5,
    orderByFields: [e4.objectIdField]
  });
  return e4.queryFeatures(s4, i).then((e5) => {
    if (e5 && e5.features && e5.features.length === t2.length) return e5.features.map((e6) => e6.attributes);
    throw new s("scenelayer:feature-not-in-associated-layer", "Feature not found in associated feature layer");
  });
}
function G(e4, t2, r2, o2, n5, i, a3, s4) {
  return $(e4, t2, r2.resources.attributes, o2, n5, i, a3, s4);
}
function $(t2, r2, o2, n5, i, a3, s4, l) {
  return __async(this, null, function* () {
    const c3 = [];
    for (const e4 of r2) if (e4 && i.includes(e4.name)) {
      const r3 = `${t2}/nodes/${o2}/attributes/${e4.key}/0`;
      c3.push({
        url: r3,
        storageInfo: e4
      });
    }
    const u3 = yield Promise.allSettled(c3.map((t3) => U(t3.url, {
      responseType: "array-buffer",
      query: __spreadProps(__spreadValues({}, s4), {
        token: a3
      }),
      signal: l?.signal
    }).then((e4) => I(t3.storageInfo, e4.data)))), f4 = [];
    for (const e4 of n5) {
      const t3 = {};
      for (let r3 = 0; r3 < u3.length; r3++) {
        const o3 = u3[r3];
        if ("fulfilled" === o3.status) {
          const n6 = o3.value;
          t3[c3[r3].storageInfo.name] = Q(n6, e4);
        }
      }
      f4.push(t3);
    }
    return f4;
  });
}
!function(e4) {
  e4[e4.OUTSIDE = 0] = "OUTSIDE", e4[e4.INTERSECTS_CENTER_OUTSIDE = 1] = "INTERSECTS_CENTER_OUTSIDE", e4[e4.INTERSECTS_CENTER_INSIDE = 2] = "INTERSECTS_CENTER_INSIDE", e4[e4.INSIDE = 3] = "INSIDE";
}(F || (F = {}));
var z = -32768;
var V2 = -(2 ** 31);
function Q(e4, t2) {
  if (!e4) return null;
  const r2 = e4[t2];
  if (c(e4)) return r2 === z ? null : r2;
  if (a(e4)) return r2 === V2 ? null : r2;
  return r2 != r2 ? null : r2;
}
function Z(e4) {
  const t2 = e4.store, r2 = t2.indexCRS || t2.geographicCRS, n5 = void 0 === r2 ? t2.indexWKT : void 0;
  if (n5) {
    if (!e4.spatialReference) throw new s("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference", "Found indexWKT in the scene layer store but no layer spatial reference", {});
    if (n5 !== e4.spatialReference.wkt) throw new s("layerview:store-spatial-reference-wkt-index-incompatible", "The indexWKT of the scene layer store does not match the WKT of the layer spatial reference", {});
  }
  const i = r2 ? new f(U2(r2)) : e4.spatialReference;
  return i.equals(e4.spatialReference) ? e4.spatialReference : i;
}
function H(e4) {
  const t2 = e4.store, r2 = t2.vertexCRS || t2.projectedCRS, n5 = void 0 === r2 ? t2.vertexWKT : void 0;
  if (n5) {
    if (!e4.spatialReference) throw new s("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference", "Found vertexWKT in the scene layer store but no layer spatial reference", {});
    if (n5 !== e4.spatialReference.wkt) throw new s("layerview:store-spatial-reference-wkt-vertex-incompatible", "The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference", {});
  }
  const i = r2 ? new f(U2(r2)) : e4.spatialReference;
  return i.equals(e4.spatialReference) ? e4.spatialReference : i;
}
function J3(e4, t2) {
  return null == t2 ? "@null" : t2 === a2(t2) ? "@ECEF" : e4.equals(t2) ? "" : null != t2.wkid ? "@" + t2.wkid : null;
}
function X(e4, t2, r2) {
  if (!J(e4, t2)) throw new s("layerview:spatial-reference-incompatible", "The spatial reference of this scene layer is incompatible with the spatial reference of the view", {});
  if ("local" === r2 && !ee(e4, t2)) throw new s("layerview:spatial-reference-incompatible", "The spatial reference of this scene layer is incompatible with the spatial reference of the view", {});
}
function Y(e4, t2, r2) {
  if (e4.serviceUpdateTimeStamp?.lastUpdate !== t2.serviceUpdateTimeStamp?.lastUpdate || !r2.isEmpty || e4.associatedLayer?.url !== t2.associatedLayer?.url) throw new s("layerview:recycle-failed");
}
function ee(e4, t2) {
  return e4.equals(t2) || e4.isWGS84 && t2.isWebMercator || e4.isWebMercator && t2.isWGS84;
}
function te(e4, t2, r2) {
  const o2 = Z(e4), n5 = H(e4);
  X(o2, t2, r2), X(n5, t2, r2);
}
function re(e4) {
  return (null == e4.geometryType || "triangles" === e4.geometryType) && (null == e4.topology || "PerAttributeArray" === e4.topology) && null != e4.vertexAttributes?.position;
}
function oe(e4) {
  if (null == e4.store?.defaultGeometrySchema || !re(e4.store.defaultGeometrySchema)) throw new s("scenelayer:unsupported-geometry-schema", "The geometry schema of this scene layer is not supported.", {
    url: e4.parsedUrl.path
  });
}
function ne(e4, t2) {
  te(e4, t2.spatialReference, t2.viewingMode);
}
function ie(e4) {
  return null != e4.geometryType && "points" === e4.geometryType && (null == e4.topology || "PerAttributeArray" === e4.topology) && (null == e4.encoding || "" === e4.encoding || "lepcc-xyz" === e4.encoding) && null != e4.vertexAttributes?.position;
}
function ae(e4) {
  if (null == e4.store?.defaultGeometrySchema || !ie(e4.store.defaultGeometrySchema)) throw new s("pointcloud:unsupported-geometry-schema", "The geometry schema of this point cloud scene layer is not supported.", {});
}
function se(e4, t2) {
  X(e4.spatialReference, t2.spatialReference, t2.viewingMode);
}
function le(e4) {
  return "simple" === e4.type || "class-breaks" === e4.type || "unique-value" === e4.type;
}
function ce(e4) {
  return "mesh-3d" === e4.type;
}
function ue(e4) {
  if (null == e4 || !le(e4)) return true;
  if (("unique-value" === e4.type || "class-breaks" === e4.type) && null == e4.defaultSymbol) return true;
  const t2 = e4.getSymbols();
  if (0 === t2.length) return true;
  for (const r2 of t2) {
    if (!ce(r2) || 0 === r2.symbolLayers.length) return true;
    for (const e5 of r2.symbolLayers.items) if ("fill" !== e5.type || null == e5.material?.color || "replace" !== e5.material.colorMixMode) return true;
  }
  return false;
}
var fe = g({
  color: [0, 0, 0, 0],
  opacity: 0
});
var pe = class {
  constructor() {
    this.edgeMaterial = null, this.material = null, this.castShadows = true;
  }
};
function me(e4) {
  const t2 = new pe();
  let r2 = false, o2 = false;
  for (const n5 of e4.symbolLayers.items) if ("fill" === n5.type && n5.enabled) {
    const e5 = n5.material, i = n5.edges;
    if (null != e5 && !r2) {
      const o3 = e5.color, i2 = e2(e5.colorMixMode);
      t2.material = null != o3 ? {
        color: [o3.r / 255, o3.g / 255, o3.b / 255],
        alpha: o3.a,
        colorMixMode: i2
      } : {
        color: [1, 1, 1],
        alpha: 1,
        colorMixMode: n3.Multiply
      }, t2.castShadows = n5.castShadows, r2 = true;
    }
    null == i || o2 || (t2.edgeMaterial = f3(i, {}), o2 = true);
  }
  return t2.material || (t2.material = {
    color: [1, 1, 1],
    alpha: 1,
    colorMixMode: n3.Multiply
  }), t2;
}
function de(e4, t2) {
  return (0 | e4) + (0 | t2) | 0;
}
function he(e4, t2, r2, o2, n5, i, s4) {
  if (!i || 0 === i.length || null == t2 || !e4.serviceMbsInIndexSR) return null;
  const f4 = n4(e4.serviceMbsInIndexSR, n5, "none", r2, t2);
  h(ve, f4);
  let p2 = null;
  const m = () => {
    if (!p2) if (p2 = be, D(we), null != e4.serviceObbInIndexSR) {
      e4.serviceObbInIndexSR.transform(Te, r2, t2, n5, s4), Te.getCorners(p2);
      for (const e5 of p2) O(e5, e5, ve), f2(we, e5);
    } else {
      const o3 = e4.serviceMbsInIndexSR;
      if (!o3) return;
      const i2 = o3[3];
      n2(V(o3), r2, Ie, t2), O(Ie, Ie, ve), Ie[2] += n5;
      for (let e5 = 0; e5 < 8; ++e5) {
        const t3 = 1 & e5 ? i2 : -i2, r3 = 2 & e5 ? i2 : -i2, o4 = 4 & e5 ? i2 : -i2, n6 = p2[e5];
        r(n6, [Ie[0] + t3, Ie[1] + r3, Ie[2] + o4]), f2(we, n6);
      }
    }
  };
  let h2 = 1 / 0, w2 = -1 / 0;
  const T = (e5) => {
    if ("replace" !== e5.type) return;
    const r3 = e5.geometry;
    if (!r3?.hasZ) return;
    D(Se);
    const n6 = r3.spatialReference || o2, i2 = r3.rings.reduce((e6, r4) => r4.reduce((e7, r5) => (o(Ie, r5[0], r5[1], r5[2]), n2(Ie, n6, Ie, t2), O(Ie, Ie, ve), f2(Se, Ie), Math.min(Ie[2], e7)), e6), 1 / 0);
    m(), E(we, Se) && (h2 = Math.min(h2, i2), w2 = Math.max(w2, i2));
  };
  if (i.forEach((e5) => T(e5)), h2 === 1 / 0) return null;
  const E2 = (e5, t3, r3) => {
    O(Ie, r3, f4), e5[t3] = Ie[0], e5[t3 + 1] = Ie[1], e5[t3 + 2] = Ie[2], t3 += 24, r3[2] = h2, O(Ie, r3, f4), e5[t3] = Ie[0], e5[t3 + 1] = Ie[1], e5[t3 + 2] = Ie[2], t3 += 24, r3[2] = w2, O(Ie, r3, f4), e5[t3] = Ie[0], e5[t3 + 1] = Ie[1], e5[t3 + 2] = Ie[2];
  };
  for (let a3 = 0; a3 < 8; ++a3) E2(Ee.data, 3 * a3, p2[a3]);
  return J2(Ee);
}
function ye(e4) {
  return e4[3] >= 0;
}
function ge(e4) {
  null != e4 && (e4[3] = -1);
}
var be = [n(), n(), n(), n(), n(), n(), n(), n()];
var Se = u();
var we = u();
var Te = new I2();
var Ie = n();
var Ee = {
  data: new Array(72),
  size: 3,
  exclusive: true,
  stride: 3
};
var ve = e();

export {
  n4 as n,
  N,
  k,
  D2 as D,
  W,
  q,
  F,
  O2 as O,
  L,
  A,
  $,
  Q,
  Z,
  H,
  J3 as J,
  X,
  Y,
  te,
  oe,
  ne,
  ae,
  se,
  ue,
  fe,
  me,
  de,
  he,
  ye,
  ge
};
//# sourceMappingURL=chunk-VCFSVEDB.js.map
