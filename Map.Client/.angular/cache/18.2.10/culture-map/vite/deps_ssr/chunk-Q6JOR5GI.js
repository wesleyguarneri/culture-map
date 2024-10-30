import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2,
  t,
  u
} from "./chunk-XNA3CM7P.js";
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import {
  r
} from "./chunk-3FR2T2I2.js";
import {
  J,
  K,
  W,
  _
} from "./chunk-LM3JDV4W.js";
import {
  I2 as I,
  J as J2,
  M,
  x
} from "./chunk-I2TVVMQ6.js";
import {
  P,
  d,
  w
} from "./chunk-LZSLQ24Q.js";
import {
  b
} from "./chunk-AUUN7RFQ.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3
} from "./chunk-UDMPWVPF.js";
import {
  a as a2,
  f2 as f,
  k
} from "./chunk-AIZ3T7E3.js";
import {
  e
} from "./chunk-6WGE3IUL.js";
import {
  a,
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/featureEditing.js
var o = {
  setAttribute() {
  },
  rollback() {
  },
  commit() {
  }
};
var r2;
function i(e3, n3) {
  const i3 = n3.attributes[e3.objectIdField];
  if (null == i3) return o;
  const s2 = e3.sessions.get(i3);
  if (s2) return s2;
  const l2 = a(n3.attributes), u3 = /* @__PURE__ */ new Set(), a7 = e3.i3sOverrides.createInteractiveEditSession(i3), d3 = /* @__PURE__ */ new Map(), f4 = (e4, t2) => {
    const n4 = d3.get(e4);
    if (null == n4) {
      const n5 = t2.indexOf(i3);
      return d3.set(e4, n5), n5;
    }
    return n4;
  };
  let c3 = r2.EDITING;
  const I3 = {
    setAttribute(t2, o2) {
      if (c3 !== r2.EDITING) return;
      const i4 = e3.fieldsIndex.get(t2);
      if (!i4) return;
      const s3 = e3.attributeStorageInfo.findIndex((e4) => e4.name === i4.name);
      if (s3 < 0) return;
      if (!(t2 in l2)) throw new Error(`Attribute "${t2}" is not an attribute of the edited feature.`);
      a7.setAttribute(s3, o2);
      const d4 = e3.attributeStorageInfo[s3];
      let I4 = false;
      u3.add(t2), e3.forEachNode((t3, r3) => {
        const i5 = f4(t3, r3);
        if (-1 === i5) return;
        const s4 = e3.getAttributeData(t3.index);
        if (s4) {
          const r4 = s4[d4.name];
          r4 && (r4[i5] = o2, e3.setAttributeData(t3.index, s4, n3), I4 = true);
        }
      }), I4 && e3.clearMemCache();
    },
    rollback() {
      if (c3 === r2.EDITING) {
        for (const e4 of u3) this.setAttribute(e4, l2[e4]);
        a7.remove(), c3 = r2.ROLLED_BACK, e3.sessions.delete(i3);
      }
    },
    commit() {
      c3 === r2.EDITING && (a7.remove(), c3 = r2.COMMITTED, e3.sessions.delete(i3));
    }
  };
  return e3.sessions.set(i3, I3), I3;
}
function s(e3, t2, n3) {
  const {
    gidToFeatureInfo: o2,
    oidToFeatureInfo: r3,
    fieldsIndex: i3,
    objectIdField: s2,
    globalIdField: l2,
    featureOrIdentifierList: u3
  } = n3;
  if (!n3.featuresResolved && null != u3) {
    for (const e4 of u3) {
      const t3 = {
        feature: null,
        oid: -1,
        gid: null
      };
      if ("attributes" in e4) {
        t3.feature = e4;
        const n4 = e4.attributes;
        if (null != n4) for (const e5 in n4) {
          if (-1 !== t3.oid && null != t3.gid) break;
          const o3 = i3.normalizeFieldName(e5);
          o3 === s2 && (t3.oid = n4[e5] ?? -1), o3 === l2 && (t3.gid = n4[e5]);
        }
      } else t3.oid = e4.objectId ?? -1, t3.gid = e4.globalId;
      null != t3.gid && o2.set(t3.gid, t3), -1 !== t3.oid && r3.set(t3.oid, t3);
    }
    n3.featuresResolved = true;
  }
  return (-1 !== e3 ? r3.get(e3) : null) ?? (null != t2 ? o2.get(t2) : null);
}
function l(e3, t2, n3, o2, r3 = null, i3 = true) {
  const l2 = [], u3 = {
    gidToFeatureInfo: /* @__PURE__ */ new Map(),
    oidToFeatureInfo: /* @__PURE__ */ new Map(),
    featuresResolved: null == n3,
    fieldsIndex: e3.fieldsIndex,
    objectIdField: e3.objectIdField,
    globalIdField: e3.globalIdField,
    featureOrIdentifierList: n3
  };
  for (const a7 of t2) {
    if (null != a7.error) continue;
    const e4 = a7.objectId ?? -1, t3 = a7.globalId, n4 = (-1 === e4 || i3 ? s(e4, t3, u3) : null) ?? {
      feature: null,
      oid: e4,
      gid: t3
    }, d3 = {
      oid: -1 === e4 ? n4.oid : e4,
      gid: t3 ?? n4.gid,
      feature: n4.feature,
      result: a7
    };
    if (l2.push(d3), -1 === d3.oid && null != d3.gid && null != r3 && (d3.oid = r3.get(d3.gid) ?? -1), -1 === d3.oid && null != d3.gid) {
      let e5 = o2.get(d3.gid);
      null == e5 && (e5 = [], o2.set(d3.gid, e5)), e5.push(d3);
    }
  }
  return l2;
}
function u2(e3, t2) {
  return __async(this, null, function* () {
    const n3 = /* @__PURE__ */ new Map(), o2 = l(e3, t2.addedFeatures, t2.edits?.addFeatures, n3), r3 = l(e3, t2.updatedFeatures, t2.edits?.updateFeatures, n3), i3 = l(e3, t2.deletedFeatures, t2.edits?.deleteFeatures, n3, t2.globalIdToObjectId, false);
    return n3.size > 0 && (yield a4(e3, n3)), {
      adds: o2.filter((e4) => -1 !== e4.oid),
      updates: r3.filter((e4) => -1 !== e4.oid),
      deletes: i3.filter((e4) => -1 !== e4.oid)
    };
  });
}
function a4(t2, o2) {
  return __async(this, null, function* () {
    const r3 = t2.i3sOverrides.layer.associatedLayer;
    if (null == r3?.globalIdField) return;
    const i3 = r3.createQuery(), {
      objectIdField: s2,
      globalIdField: l2
    } = r3;
    i3.where = Array.from(o2.keys()).map((e3) => `${l2}='${e3}'`).join(" OR "), i3.returnGeometry = false, i3.outFields = [s2, l2], i3.cacheHint = false;
    const u3 = yield b(r(r3, i3));
    if (!u3.ok) return;
    const a7 = u3.value.features;
    for (const e3 of a7) {
      const t3 = e3.attributes[l2], n3 = e3.attributes[s2];
      if (null == t3 || null == n3 || -1 === n3) continue;
      const r4 = o2.get(t3);
      if (null != r4) for (const e4 of r4) e4.oid = n3;
    }
  });
}
function d2(e3, t2) {
  const n3 = /* @__PURE__ */ new Map(), o2 = (e4) => {
    for (const {
      oid: t3,
      feature: o3
    } of e4) {
      const e5 = o3?.geometry;
      "mesh" === e5?.type && n3.set(t3, e5);
    }
  };
  o2(t2.adds), o2(t2.updates);
  for (const r3 of t2.deletes) n3.set(r3.oid, null);
  for (const [r3, i3] of n3) e3.i3sOverrides.updateGeometry(r3, i3);
}
function f2(e3, t2) {
  const n3 = I2(e3, t2), o2 = c(e3, t2);
  if (0 === n3.size && 0 === o2.size) return;
  const r3 = /* @__PURE__ */ new Map();
  for (let c3 = 0; c3 < e3.attributeStorageInfo.length; c3++) r3.set(e3.attributeStorageInfo[c3].name, c3);
  let i3 = false;
  n3.forEach((t3, n4) => {
    const o3 = e3.getAttributeData(n4);
    let s3 = false;
    t3.forEach((t4, n5) => {
      const l3 = null != o3 ? o3[n5] : null, u4 = r3.get(n5);
      for (const {
        featureIndex: o4,
        value: r4,
        featureId: a8
      } of t4) l3 && (l3[o4] = r4, s3 = true, i3 = true), e3.i3sOverrides.updateAttributeValue(a8, u4, r4);
    }), s3 && e3.setAttributeData(n4, o3, null);
  }), i3 && e3.clearMemCache();
  const {
    fieldsIndex: s2,
    i3sOverrides: l2,
    objectIdField: u3,
    globalIdField: a7
  } = e3, d3 = l2.layer.associatedLayer?.infoFor3D, f4 = new Set(d3 ? [...Object.values(d3.assetMapFieldRoles), ...Object.values(d3.transformFieldRoles)] : []);
  for (const [c3, I3] of o2) {
    l2.featureAdded(c3);
    const {
      attributes: e4
    } = I3;
    for (const t3 in e4) {
      if (t3 !== u3 && t3 !== a7 && f4.has(t3)) continue;
      const n4 = s2.normalizeFieldName(t3), o3 = null != n4 ? r3.get(n4) : null;
      if (null == o3) continue;
      const i4 = e4[t3];
      l2.updateAttributeValue(c3, o3, i4);
    }
  }
}
function c(e3, t2) {
  const n3 = /* @__PURE__ */ new Map(), o2 = t2.adds;
  if (!o2 || 0 === o2.length || null == e3.globalIdField) return n3;
  for (const r3 of o2) {
    const e4 = r3.oid, t3 = r3.feature;
    "mesh" === t3?.geometry?.type && n3.set(e4, t3);
  }
  return n3;
}
function I2(e3, t2) {
  const n3 = t2.updates;
  if (!n3 || 0 === n3.length) return new p();
  const o2 = new p(), r3 = /* @__PURE__ */ new Map();
  for (let i3 = 0; i3 < e3.attributeStorageInfo.length; i3++) r3.set(e3.attributeStorageInfo[i3].name, i3);
  return e3.forEachNode((t3, r4) => {
    for (const i3 of n3) {
      if (null == i3.feature) continue;
      const n4 = i3.feature, s2 = i3.oid, l2 = r4.indexOf(s2);
      for (const r5 in n4.attributes) {
        const i4 = e3.fieldsIndex.normalizeFieldName(r5), u3 = g(o2, t3.index, i4), a7 = n4.attributes[r5];
        u3.push({
          featureIndex: l2,
          featureId: s2,
          value: a7
        });
      }
    }
  }), o2;
}
function g(e3, t2, n3) {
  const o2 = b2(e3, t2), r3 = null != n3 && o2.get(n3);
  if (r3) return r3;
  const i3 = new Array();
  return o2.set(n3, i3), i3;
}
function b2(e3, t2) {
  const n3 = e3.get(t2);
  if (n3) return n3;
  const o2 = new m();
  return e3.set(t2, o2), o2;
}
!function(e3) {
  e3[e3.EDITING = 0] = "EDITING", e3[e3.ROLLED_BACK = 1] = "ROLLED_BACK", e3[e3.COMMITTED = 2] = "COMMITTED";
}(r2 || (r2 = {}));
var m = Map;
var p = Map;

// ../../../node_modules/@arcgis/core/views/3d/layers/support/fieldProperties.js
function i2() {
  return {
    requiredFields: {
      type: [String],
      readOnly: true
    },
    availableFields: {
      type: [String],
      readOnly: true,
      get: function() {
        const {
          layer: i3,
          layer: {
            fieldsIndex: t2
          },
          requiredFields: l2
        } = this;
        return i3.outFields ? I(t2, [...x(t2, i3.outFields), ...l2]) : I(t2, l2);
      }
    }
  };
}

// ../../../node_modules/@arcgis/core/core/AsyncUpdate.js
var c2 = (s2) => {
  let c3 = class extends s2 {
    constructor() {
      super(...arguments), this._numUpdating = 0;
    }
    get updating() {
      return this._numUpdating > 0;
    }
    autoUpdateAsync(t2, s3) {
      const i3 = k((s4) => __async(this, null, function* () {
        ++this._numUpdating;
        try {
          const r3 = yield s4;
          this.destroyed || this._set(t2, r3);
        } catch (o2) {
          n.getLogger(this).warn(`Async update of "${String(t2)}" failed. Async update functions should not throw exceptions.`);
        }
        --this._numUpdating;
      }));
      return d(s3, i3, P);
    }
  };
  return e2([y({
    readOnly: true
  })], c3.prototype, "updating", null), e2([y()], c3.prototype, "_numUpdating", void 0), c3 = e2([a3("esri.core.AsyncUpdate")], c3), c3;
};
var a5 = class extends c2(S) {
};
a5 = e2([a3("esri.core.AsyncUpdate")], a5);

// ../../../node_modules/@arcgis/core/views/3d/layers/support/SceneLayerViewRequiredFields.js
var a6 = class extends c2(S) {
  get layer() {
    return this.layerView.layer;
  }
  get requiredFields() {
    const {
      layerView: {
        layer: {
          fieldsIndex: e3
        },
        definitionExpressionFields: r3
      },
      rendererFields: s2,
      labelingFields: t2,
      viewFilterFields: i3
    } = this;
    return I(e3, [...r3 ?? [], ...s2 ?? [], ...t2 ?? [], ...i3 ?? []]);
  }
  constructor(e3) {
    super(e3);
  }
  initialize() {
    this.addHandles([this.autoUpdateAsync("rendererFields", () => __async(this, null, function* () {
      const {
        fieldsIndex: e3,
        renderer: r3
      } = this.layer;
      return r3 ? this._getFieldsAsync((s2) => r3.collectRequiredFields(s2, e3)) : null;
    })), this.autoUpdateAsync("labelingFields", () => __async(this, null, function* () {
      const {
        layer: e3
      } = this;
      return e3.labelsVisible ? this._getFieldsAsync((r3) => J2(r3, e3)) : null;
    })), this.autoUpdateAsync("viewFilterFields", () => {
      const {
        layer: e3,
        mergedFilter: r3
      } = this.layerView;
      return this._getFieldsAsync((s2) => M(s2, e3, r3));
    })]);
  }
  _getFieldsAsync(e3) {
    return __async(this, null, function* () {
      const r3 = /* @__PURE__ */ new Set();
      try {
        return yield e3(r3), Array.from(r3).sort();
      } catch (s2) {
        return n.getLogger(this).error(s2), null;
      }
    });
  }
};
e2([y()], a6.prototype, "layerView", void 0), e2([y()], a6.prototype, "layer", null), e2([y()], a6.prototype, "requiredFields", null), e2([y()], a6.prototype, "rendererFields", void 0), e2([y()], a6.prototype, "labelingFields", void 0), e2([y()], a6.prototype, "viewFilterFields", void 0), a6 = e2([a3("esri.views.3d.layers.support.SceneLayerViewRequiredFields")], a6);

// ../../../node_modules/@arcgis/core/views/layers/SceneLayerView.js
var f3 = class extends y2 {
  constructor() {
    super(...arguments), this.layer = null, this.filter = null, this._geometryEngine = null, this._projectionEngineLoaded = false, this._abortController = new AbortController();
  }
  get availableFields() {
    return [];
  }
  get maximumNumberOfFeatures() {
    return 0;
  }
  set maximumNumberOfFeatures(e3) {
    throw new Error("Not implemented");
  }
  get maximumNumberOfFeaturesExceeded() {
    return false;
  }
  get layerFilter() {
    return t(this._layerFilter);
  }
  get _layerFilter() {
    const e3 = this.layer?.filter;
    if (null == e3 || e3.geometries.length < 1) return null;
    const o2 = this._geometryEngine;
    if (null == o2 || !this._projectionEngineLoaded && this._filterNeedsProjectionEngine) return n2;
    const i3 = e3.geometries.at(0).spatialReference, l2 = e3.geometries.toArray().map((e4) => {
      try {
        e4 = o2.simplify(e4);
      } catch (t2) {
        return n.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."), null;
      }
      if (null == e4) return null;
      if (e4.spatialReference.equals(i3)) return e4;
      try {
        return K(e4, i3);
      } catch (t2) {
        return n.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."), null;
      }
    }).filter(O).sort((e4, t2) => e4.extent.xmin - t2.extent.xmin), s2 = /* @__PURE__ */ new Set(), a7 = new Array(), m2 = new Array();
    for (let t2 of l2) {
      const e4 = t2.extent.xmin;
      if (a7.length = 0, s2.forEach((r3) => {
        if (e4 >= r3.extent.xmax) return m2.push(r3), void s2.delete(r3);
        t2.extent.ymin <= r3.extent.ymax && t2.extent.ymax >= r3.extent.ymin && o2.intersects(t2, r3) && a7.push(r3);
      }), a7.length > 0) {
        a7.push(t2);
        try {
          t2 = o2.union(a7);
        } catch (p2) {
          n.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");
          continue;
        }
        a7.pop(), a7.forEach((e5) => s2.delete(e5));
      }
      s2.add(t2);
    }
    return s2.forEach((e4) => m2.push(e4)), m2.length > 0 ? {
      spatialRelationship: e3.spatialRelationship,
      geometries: m2
    } : null;
  }
  get _filterNeedsProjectionEngine() {
    const e3 = this.layer.filter;
    if (null == e3 || e3.geometries.length <= 1) return false;
    const t2 = e3.geometries.at(0).spatialReference;
    return e3.geometries.some(({
      spatialReference: e4
    }) => !e4.equals(t2) && !J(e4, t2));
  }
  get layerFilterUpdating() {
    return u(this._layerFilter);
  }
  initialize() {
    const {
      signal: e3
    } = this._abortController;
    w(() => this.destroyed || !this._geometryEngine && this.layer?.filter?.geometries?.length, e3).then(() => __async(this, null, function* () {
      a2(e3), this._geometryEngine = yield import("./geometryEngine-QYJS33R6.js");
    })).catch(f), this._projectionEngineLoaded = _(), w(() => this.destroyed || !this._projectionEngineLoaded && this._filterNeedsProjectionEngine, e3).then(() => __async(this, null, function* () {
      a2(e3), yield W(), this._projectionEngineLoaded = true;
    })).catch(f);
  }
  destroy() {
    this._abortController = e(this._abortController);
  }
  highlight(e3) {
    throw new Error("Not implemented");
  }
  queryFeatures(e3, t2) {
    throw new Error("Not implemented");
  }
  queryObjectIds(e3, t2) {
    throw new Error("Not implemented");
  }
  queryFeatureCount(e3, t2) {
    throw new Error("Not implemented");
  }
  createQuery() {
    throw new Error("Not implemented");
  }
  queryExtent(e3, t2) {
    throw new Error("Not implemented");
  }
};
e2([y()], f3.prototype, "layer", void 0), e2([y()], f3.prototype, "availableFields", null), e2([y()], f3.prototype, "maximumNumberOfFeatures", null), e2([y({
  readOnly: true
})], f3.prototype, "maximumNumberOfFeaturesExceeded", null), e2([y()], f3.prototype, "filter", void 0), e2([y({
  readOnly: true
})], f3.prototype, "layerFilter", null), e2([y({
  readOnly: true
})], f3.prototype, "_layerFilter", null), e2([y()], f3.prototype, "_geometryEngine", void 0), e2([y()], f3.prototype, "_projectionEngineLoaded", void 0), e2([y()], f3.prototype, "_filterNeedsProjectionEngine", null), e2([y()], f3.prototype, "layerFilterUpdating", null), f3 = e2([a3("esri.views.layers.SceneLayerView")], f3);
var w2 = f3;

export {
  i,
  u2 as u,
  d2 as d,
  f2 as f,
  i2,
  a6 as a,
  w2 as w
};
//# sourceMappingURL=chunk-Q6JOR5GI.js.map
