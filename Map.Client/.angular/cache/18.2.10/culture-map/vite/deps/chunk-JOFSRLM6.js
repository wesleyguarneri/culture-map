import {
  n as n4,
  t,
  u as u4
} from "./chunk-UKXHREMM.js";
import {
  o as o4
} from "./chunk-33OC6OD3.js";
import {
  a as a3
} from "./chunk-KGPFLNKT.js";
import {
  o as o3
} from "./chunk-37FUJHR2.js";
import {
  e as e4
} from "./chunk-62WUYJJN.js";
import {
  $
} from "./chunk-4MXR7W7N.js";
import {
  n as n3
} from "./chunk-SSMSHZ2C.js";
import {
  e as e3
} from "./chunk-YZNT6QWD.js";
import {
  d as d2
} from "./chunk-XQCKIDQO.js";
import {
  d
} from "./chunk-UFVMJL32.js";
import {
  D,
  Q,
  W as W2
} from "./chunk-VCFSVEDB.js";
import {
  n as n2
} from "./chunk-L7ZKWTWL.js";
import {
  Z as Z2
} from "./chunk-ZE47C44H.js";
import {
  b
} from "./chunk-TRSGUVSM.js";
import {
  Z
} from "./chunk-Q7SRMLJZ.js";
import {
  S as S3,
  i
} from "./chunk-J55F4AC2.js";
import {
  K,
  W
} from "./chunk-DUTZNK67.js";
import {
  O
} from "./chunk-XWXBNAOW.js";
import {
  E,
  a as a2,
  h,
  m,
  u as u3
} from "./chunk-IHVSZYZS.js";
import {
  w as w3
} from "./chunk-NYQ5CYNR.js";
import {
  g
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  e as e2
} from "./chunk-3ZXOUEQG.js";
import {
  S as S2,
  o as o2,
  u as u2
} from "./chunk-AXVPJBVW.js";
import {
  r
} from "./chunk-OXEPWRM7.js";
import {
  C,
  X,
  s3,
  w as w2
} from "./chunk-JJS7PR2U.js";
import {
  s as s2
} from "./chunk-L5YS4GSA.js";
import {
  w
} from "./chunk-6WHTZNUH.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y as y2
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  v,
  y
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/I3SMeshViewFilter.js
var B = "esri.views.3d.layers.i3s.I3SMeshViewFilter";
var L = () => n.getLogger(B);
var P = class extends S {
  constructor(e5) {
    super(e5), this._projectionEngineLoaded = false;
  }
  initialize() {
    w(() => this.viewFilter?.geometry || null != this.layerFilter).then(() => this.loadAsyncModule(import("./geometryEngine-EGTOXQKL.js").then((e5) => {
      this.destroyed || (this._geometryEngine = e5);
    })));
  }
  get sortedObjectIds() {
    if (null == this.viewFilter?.objectIds) return null;
    const e5 = e4(this.viewFilter.objectIds);
    return e5.sort(), e5;
  }
  get parsedWhereClause() {
    const e5 = this.viewFilter?.where;
    if (null == e5 || !e5) return null;
    try {
      return O.create(e5, this.layerFieldsIndex);
    } catch (t2) {
      L().error(`Failed to parse filter where clause: ${t2}`);
    }
    return null;
  }
  addFilters(e5, t2, r2, i2) {
    const s4 = this.sortedObjectIds;
    null != s4 && e5.push((e6) => W2(s4, true, e6)), this.addSqlFilter(e5, this.parsedWhereClause), this.addTimeFilter(e5, this.viewFilter?.timeExtent);
    const n6 = t(this._layerMaskGeometries), a4 = this._geometryEngine;
    if (null != n6 && null != this.layerFilter && null != a4) {
      const s5 = this.layerFilter.spatialRelationship;
      e5.push((e6, o6) => N(a4, e6, o6, i2, t2, r2, n6, s5));
    }
    const l2 = t(this._viewMaskGeometries);
    if (null != l2 && null != this.viewFilter && null != a4) {
      const s5 = this.viewFilter.spatialRelationship;
      e5.push((e6, n7) => N(a4, e6, n7, i2, t2, r2, l2, s5));
    }
  }
  isMBSGeometryVisible(e5, t2, r2) {
    const i2 = t(this._layerMaskGeometries), s4 = this._geometryEngine;
    if (null != i2 && null != this.layerFilter && null != s4) {
      const n7 = this.layerFilter.spatialRelationship, o6 = i2[0].spatialReference || t2;
      if (!a3(e5, r2, $2, o6)) return L().warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"), true;
      return q(s4, $2, i2, o6, n7);
    }
    const n6 = t(this._viewMaskGeometries);
    if (null != n6 && null != this.viewFilter && null != s4) {
      const i3 = this.viewFilter.spatialRelationship, o6 = n6[0].spatialReference || t2;
      if (!a3(e5, r2, $2, o6)) return L().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"), true;
      return q(s4, $2, n6, o6, i3);
    }
    return true;
  }
  get parsedGeometry() {
    const e5 = t(this._viewMaskGeometries), t2 = t(this._layerMaskGeometries);
    return null == e5 || null == t2 ? e5 || t2 : t2.concat(e5);
  }
  get _layerMaskGeometries() {
    const e5 = this.layerFilter;
    return null == e5 ? null : null == this._geometryEngine ? n4 : "disjoint" === e5.spatialRelationship ? e5.geometries.map((e6) => ({
      type: "polygon",
      rings: e6.rings,
      spatialReference: e6.spatialReference,
      cache: {}
    })) : [e5.geometries.reduce((e6, t2) => (e6.rings = [...e6.rings, ...t2.rings], e6), {
      type: "polygon",
      rings: [],
      spatialReference: e5.geometries[0].spatialReference,
      cache: {}
    })];
  }
  get _viewMaskGeometries() {
    if (null == this.viewFilter) return null;
    const {
      geometry: e5
    } = this.viewFilter;
    if (null == e5) return null;
    if (null == this.viewFilter || null == this._geometryEngine) return n4;
    const {
      distance: t2,
      units: r2
    } = this.viewFilter, i2 = this.viewFilter.spatialRelationship, s4 = "mesh" === e5.type ? e5.extent : e5;
    if (null == t2 || 0 === t2) return V(this._geometryEngine, s4, i2);
    const n6 = r2 || X(s4.spatialReference);
    if (s4.spatialReference.isWGS84) {
      const e6 = this._geometryEngine.geodesicBuffer(s4, t2, n6);
      return V(this._geometryEngine, e6, i2);
    }
    const o6 = g(s4, f.WGS84);
    if (null != o6) {
      const e6 = g(this._geometryEngine.geodesicBuffer(o6, t2, n6), s4.spatialReference);
      return V(this._geometryEngine, e6, i2);
    }
    if (!this._projectionEngineLoaded && (this.loadAsyncModule(W().then(() => this._projectionEngineLoaded = true)), !this._projectionEngineLoaded)) return null;
    let l2 = null;
    try {
      l2 = K(s4, f.WGS84);
    } catch (c) {
    }
    if (l2) try {
      l2 = K(this._geometryEngine.geodesicBuffer(l2, t2, n6), s4.spatialReference);
    } catch (c) {
      l2 = null;
    }
    return l2 || L().error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${s4.spatialReference.wkid}) to WGS84.`), V(this._geometryEngine, l2, i2);
  }
  get updating() {
    return u4(this._layerMaskGeometries) || u4(this._viewMaskGeometries);
  }
  static checkSupport(e5) {
    return null != e5 && (!!K2(e5.spatialRelationship) || (L().warn(`Filters with spatialRelationship other than ${U.join(", ")} are not supported for mesh scene layers`), false));
  }
};
e([y2()], P.prototype, "layerFilter", void 0), e([y2({
  type: d2
})], P.prototype, "viewFilter", void 0), e([y2()], P.prototype, "layerFieldsIndex", void 0), e([y2()], P.prototype, "loadAsyncModule", void 0), e([y2()], P.prototype, "addSqlFilter", void 0), e([y2()], P.prototype, "addTimeFilter", void 0), e([y2({
  readOnly: true
})], P.prototype, "sortedObjectIds", null), e([y2({
  readOnly: true
})], P.prototype, "parsedWhereClause", null), e([y2({
  readOnly: true
})], P.prototype, "parsedGeometry", null), e([y2({
  readOnly: true
})], P.prototype, "_layerMaskGeometries", null), e([y2({
  readOnly: true
})], P.prototype, "_viewMaskGeometries", null), e([y2()], P.prototype, "updating", null), e([y2()], P.prototype, "_projectionEngineLoaded", void 0), e([y2()], P.prototype, "_geometryEngine", void 0), P = e([a(B)], P);
var U = /* @__PURE__ */ ((e5) => e5)(["contains", "intersects", "disjoint"]);
function K2(e5) {
  return null != e5 && U.includes(e5);
}
var W3;
function V(e5, t2, s4) {
  if (null == t2) return null;
  if ("disjoint" === s4 && "polygon" === t2.type) {
    const s5 = t2.rings.length, n6 = t2.spatialReference, o6 = new Array(s5);
    for (let e6 = 0; e6 < s5; ++e6) {
      const r2 = a2(1 / 0, 1 / 0, -1 / 0, -1 / 0);
      h(r2, t2.rings[e6]), o6[e6] = {
        type: "polygon",
        rings: [t2.rings[e6]],
        spatialReference: n6,
        cache: {},
        aabr: r2
      };
    }
    o6.sort((e6, t3) => e6.aabr[0] - t3.aabr[0]);
    const a4 = /* @__PURE__ */ new Set(), l2 = new v();
    for (let t3 = 0; t3 < o6.length; ++t3) {
      const i2 = o6[t3], s6 = i2.aabr[0];
      a4.forEach((t4) => {
        if (s6 >= t4.aabr[2]) return void a4.delete(t4);
        if (i2.aabr[1] > t4.aabr[3] || i2.aabr[3] < t4.aabr[1] || !e5.intersects(i2, t4)) return;
        i2.rings = i2.rings.concat(t4.rings), m(i2.aabr, t4.aabr, i2.aabr), i2.cache = {}, a4.delete(t4);
        const n7 = y(o6, t4, o6.length, l2);
        o6.splice(n7, 1);
      }), a4.add(i2);
    }
    for (const e6 of o6) e6.aabr = void 0;
    return o6;
  }
  return [t2];
}
function q(e5, t2, r2, i2, s4) {
  if (t2[3] >= 0.5 * (t2[2] + s3(i2).radius)) return true;
  const n6 = H(e5, t2, i2);
  return r2.every((t3) => Z3(e5, t3, n6, s4) !== W3.DISCARD);
}
function N(e5, t2, r2, i2, s4, n6, o6, a4) {
  const l2 = o6[0].spatialReference || s4.spatialReference;
  if (!a3(r2.node.serviceMbsInIndexSR, n6, $2, l2)) return void L().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");
  const c = H(e5, $2, l2), p2 = z(a4, s4, l2, i2, r2.objectHandle);
  for (const u5 of o6) {
    if (0 === t2.length) return;
    switch (Z3(e5, u5, c, a4)) {
      case W3.DISCARD:
        return void (t2.length = 0);
      case W3.KEEP:
        continue;
    }
    D(t2, r2.featureIds, (t3) => X2(e5, u5, t3, p2));
  }
}
!function(e5) {
  e5[e5.KEEP = 0] = "KEEP", e5[e5.DISCARD = 1] = "DISCARD", e5[e5.TEST = 2] = "TEST";
}(W3 || (W3 = {}));
var $2 = Z2(0, 0, 0, 0);
function z(e5, t2, r2, i2, s4) {
  const n6 = t2.renderSpatialReference, o6 = /* @__PURE__ */ new Map(), a4 = {
    type: "polygon",
    rings: [[[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]],
    spatialReference: r2
  };
  a4.rings[0][3] = a4.rings[0][0];
  const l2 = {
    indices: null,
    data: null,
    stride: 0,
    startIndex: 0,
    endIndex: 0
  };
  let c, p2;
  switch (e5) {
    case "intersects":
      c = (e6, t3, r3) => e6.intersects(t3, r3) ? W3.KEEP : W3.TEST, p2 = J;
      break;
    case "contains":
      c = (e6, t3, r3) => e6.contains(t3, r3) ? W3.TEST : W3.DISCARD, p2 = J;
      break;
    default:
      c = (e6, t3, r3) => e6.disjoint(t3, r3) ? W3.TEST : W3.DISCARD, p2 = Q2;
  }
  return {
    collection: i2,
    object: s4,
    type: e5,
    maskSR: r2,
    renderSR: n6,
    aabbCache: o6,
    triangle: a4,
    positions: l2,
    triangleTest: c,
    geometryTest: p2
  };
}
function H(e5, t2, r2) {
  const i2 = {
    type: "point",
    x: t2[0],
    y: t2[1],
    hasZ: false,
    hasM: false,
    spatialReference: r2
  }, s4 = !C(r2) && !w2(r2), o6 = Number.isNaN(t2[3]) ? 0 : e2(t2[3], 0, 2 * s2.radius), a4 = s4 ? e5.buffer(i2, o6, 1) : e5.geodesicBuffer(i2, o6, 1);
  return a4.type = "polygon", a4;
}
function Z3(e5, t2, r2, i2) {
  switch (i2) {
    case "intersects":
    case "contains":
      return J(e5, t2, r2);
    case "disjoint":
      return Q2(e5, t2, r2);
  }
}
function J(e5, t2, r2) {
  return e5.intersects(t2, r2) ? e5.contains(t2, r2) ? W3.KEEP : W3.TEST : W3.DISCARD;
}
function Q2(e5, t2, r2) {
  return e5.intersects(t2, r2) ? e5.contains(t2, r2) ? W3.DISCARD : W3.TEST : W3.KEEP;
}
function X2(e5, t2, r2, i2) {
  const {
    collection: s4,
    object: n6,
    renderSR: o6,
    maskSR: a4,
    geometryTest: l2,
    aabbCache: c
  } = i2;
  let p2 = c.get(r2);
  if (!p2) {
    const e6 = s4.getObjectTransform(n6);
    s4.getComponentAabb(n6, r2, Y);
    const t3 = [r(Y[0], Y[1], 0), r(Y[0], Y[4], 0), r(Y[3], Y[4], 0), r(Y[3], Y[1], 0)];
    for (let r3 = 0; r3 < 4; ++r3) S2(t3[r3], t3[r3], e6.rotationScale), u2(t3[r3], t3[r3], e6.position), n2(t3[r3], o6, t3[r3], a4);
    p2 = {
      type: "polygon",
      rings: [t3],
      spatialReference: a4,
      cache: {}
    }, p2.rings[0][4] = p2.rings[0][0], c.set(r2, p2);
  }
  switch (l2(e5, t2, p2)) {
    case W3.DISCARD:
      return false;
    case W3.KEEP:
      return true;
  }
  const {
    triangle: u5,
    triangleTest: g2,
    positions: h3
  } = i2, j = u5.rings[0][0], S4 = u5.rings[0][1], R = u5.rings[0][2], E2 = s4.getObjectTransform(n6);
  s4.getComponentPositions(n6, r2, h3);
  const {
    indices: w4,
    data: v2,
    stride: F,
    startIndex: _,
    endIndex: I
  } = h3;
  for (let y4 = _; y4 < I; y4 += 3) {
    const r3 = F * w4[y4], i3 = F * w4[y4 + 1], s5 = F * w4[y4 + 2];
    switch (o2(j, v2[r3], v2[r3 + 1], v2[r3 + 2]), o2(S4, v2[i3], v2[i3 + 1], v2[i3 + 2]), o2(R, v2[s5], v2[s5 + 1], v2[s5 + 2]), S2(j, j, E2.rotationScale), S2(S4, S4, E2.rotationScale), S2(R, R, E2.rotationScale), u2(j, j, E2.position), u2(S4, S4, E2.position), u2(R, R, E2.position), n2(j, o6, j, a4), n2(S4, o6, S4, a4), n2(R, o6, R, a4), g2(e5, t2, u5)) {
      case W3.DISCARD:
        return false;
      case W3.KEEP:
        return true;
    }
  }
  return "intersects" !== i2.type;
}
var Y = i();

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/I3SQueryEngine.js
var p = $;
var d3 = class extends S {
  get spatialReference() {
    return this.layerView.view.spatialReference;
  }
  get layer() {
    return this.layerView.i3slayer;
  }
  get defaultQueryJSON() {
    return new b({
      outSpatialReference: this.spatialReference
    }).toJSON();
  }
  get _dataQueryEngine() {
    return this._ensureDataQueryEngine();
  }
  constructor(e5) {
    super(e5);
  }
  initialize() {
    this.addHandles(this.layerView.on("visible-geometry-changed", () => this.spatialIndex.events.emit("changed")));
  }
  destroy() {
    this._dataQueryEngineInstance = u(this._dataQueryEngineInstance), this._set("layerView", null);
  }
  executeQueryForCount(e5, r2) {
    return __async(this, null, function* () {
      return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e5), r2);
    });
  }
  executeQueryForExtent(e5, r2) {
    return __async(this, null, function* () {
      const {
        count: t2,
        extent: s4
      } = yield this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e5), r2);
      return {
        count: t2,
        extent: w3.fromJSON(s4)
      };
    });
  }
  executeQueryForIds(e5, r2) {
    return __async(this, null, function* () {
      return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e5), r2);
    });
  }
  executeQuery(e5, r2) {
    return __async(this, null, function* () {
      const s4 = this._ensureQueryJSON(e5);
      if (s4.returnGeometry) throw new s("unsupported-query", "returnGeometry is not supported when querying a mesh scene layer view, it is only supported when directly querying a scene layer");
      if (s4.returnCentroid) throw new s("unsupported-query", "returnCentroid is not yet supported for mesh scene layer queries");
      const n6 = yield this._dataQueryEngine.executeQuery(s4, r2), o6 = d.fromJSON(n6);
      return o6.features.forEach((e6) => e6.geometry = null), o6;
    });
  }
  _ensureQueryJSON(e5) {
    return null == e5 ? this.defaultQueryJSON : e5.toJSON();
  }
  _ensureDataQueryEngine() {
    if (this._dataQueryEngineInstance) return this._dataQueryEngineInstance;
    const e5 = this.layer.objectIdField || o3, r2 = "esriGeometryPolygon", t2 = this.layer.fieldsIndex?.toJSON() || new Z([]), s4 = this.layerView.view.resourceController.scheduler, n6 = this.spatialReference.toJSON(), o6 = this.priority, i2 = this.spatialIndex;
    return this._dataQueryEngineInstance = new p({
      hasZ: true,
      hasM: false,
      geometryType: r2,
      fieldsIndex: t2,
      timeInfo: null,
      spatialReference: n6,
      objectIdField: e5,
      featureStore: i2,
      scheduler: s4,
      priority: o6
    }), this._dataQueryEngineInstance;
  }
};
e([y2({
  constructOnly: true
})], d3.prototype, "layerView", void 0), e([y2({
  constructOnly: true
})], d3.prototype, "priority", void 0), e([y2({
  constructOnly: true
})], d3.prototype, "spatialIndex", void 0), e([y2()], d3.prototype, "spatialReference", null), e([y2()], d3.prototype, "layer", null), e([y2()], d3.prototype, "defaultQueryJSON", null), d3 = e([a("esri.views.3d.layers.i3s.I3SQueryEngine")], d3);

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/I3SQueryFeatureAdapter.js
var o5 = class {
  constructor(t2) {
    this._objectIdField = t2.objectIdField, this._getFeatureExtent = t2.getFeatureExtent;
  }
  getObjectId(t2) {
    return t2.id;
  }
  getAttributes(t2) {
    const {
      meta: e5,
      index: r2
    } = t2, o6 = {};
    this._objectIdField && (o6[this._objectIdField] = t2.id);
    const n6 = e5.attributeInfo?.attributeData;
    if (null != n6) for (const s4 of Object.keys(n6)) o6[s4] = Q(n6[s4], r2);
    return o6;
  }
  getAttribute(t2, e5) {
    if (e5 === this._objectIdField) return t2.id;
    const {
      meta: r2,
      index: o6
    } = t2, n6 = r2.attributeInfo?.attributeData;
    return null != n6 ? Q(n6[e5], o6) : null;
  }
  getGeometry(t2) {
    if (t2.geometry) return t2.geometry;
    const [e5, i2, o6, s4, a4] = this._getFeatureExtent(t2, n5);
    return new e3([5], [e5, i2, o6, s4, i2, o6, s4, a4, o6, e5, a4, o6, e5, i2, o6]);
  }
  getCentroid(t2, i2) {
    if (t2.geometry) return n3(new e3(), t2.geometry, i2.hasZ, i2.hasM);
    const [o6, s4, a4, u5, d5, c] = this._getFeatureExtent(t2, n5);
    return new e3([0], [(o6 + u5) / 2, (s4 + d5) / 2, (a4 + c) / 2]);
  }
  cloneWithGeometry(t2, e5) {
    const {
      id: r2,
      index: i2,
      meta: o6
    } = t2;
    return {
      id: r2,
      index: i2,
      meta: o6,
      geometry: e5
    };
  }
};
var n5 = i();

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/I3SQueryFeatureStore.js
var f2 = i();
var h2 = class extends S {
  constructor(e5) {
    super(e5), this.events = new o();
  }
  forEach(e5) {
    this.forAllFeatures((r2) => (e5(r2), o4.CONTINUE));
  }
  forEachBounds(e5, r2) {
    const t2 = this.getFeatureExtent;
    for (const o6 of e5) r2(t2(o6, f2));
  }
  forEachInBounds(e5, r2) {
    this.forAllFeatures((t2) => {
      const o6 = this.getFeatureExtent(t2, d4);
      return E(e5, S3(o6, y3)) && r2(t2), o4.CONTINUE;
    }, (r3) => {
      if (a3(r3.node.serviceMbsInIndexSR, this.sourceSpatialReference, l, this.viewSpatialReference), l[0] >= e5[0] && l[2] <= e5[2] && l[1] >= e5[1] && l[3] <= e5[3]) return o4.CONTINUE;
      const t2 = Math.max(e5[0], Math.min(l[0], e5[2])), o6 = Math.max(e5[1], Math.min(l[1], e5[3])), s4 = l[0] - t2, n6 = l[1] - o6;
      return s4 * s4 + n6 * n6 <= l[3] * l[3] ? o4.CONTINUE : o4.SKIP;
    });
  }
};
e([y2({
  constructOnly: true
})], h2.prototype, "featureAdapter", void 0), e([y2({
  constructOnly: true
})], h2.prototype, "forAllFeatures", void 0), e([y2({
  constructOnly: true
})], h2.prototype, "getFeatureExtent", void 0), e([y2({
  constructOnly: true
})], h2.prototype, "sourceSpatialReference", void 0), e([y2({
  constructOnly: true
})], h2.prototype, "viewSpatialReference", void 0), h2 = e([a("esri.views.3d.layers.i3s.I3SQueryFeatureStore")], h2);
var l = Z2(0, 0, 0, 0);
var d4 = i();
var y3 = u3();

export {
  P,
  d3 as d,
  o5 as o,
  h2 as h
};
//# sourceMappingURL=chunk-JOFSRLM6.js.map
