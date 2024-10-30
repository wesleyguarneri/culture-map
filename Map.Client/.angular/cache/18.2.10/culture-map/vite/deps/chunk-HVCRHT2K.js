import {
  o as o3
} from "./chunk-WTF7K3GK.js";
import {
  n as n5
} from "./chunk-5NCKEQLF.js";
import {
  i as i3,
  o as o2
} from "./chunk-ATQ5GYTB.js";
import {
  n as n4
} from "./chunk-TF6BJDRY.js";
import {
  R
} from "./chunk-Z3GMSC63.js";
import {
  f as f3,
  i as i2,
  s as s3
} from "./chunk-YA5CTHMT.js";
import {
  n as n3,
  p as p2
} from "./chunk-2N3BR7QT.js";
import {
  d as d2
} from "./chunk-HD65DNIO.js";
import {
  y as y3
} from "./chunk-7MZZCQ64.js";
import {
  c
} from "./chunk-DR5TVNEL.js";
import {
  b
} from "./chunk-DTUSTSEJ.js";
import {
  n
} from "./chunk-JCWFGRHQ.js";
import {
  i as i4
} from "./chunk-JILEJ6R2.js";
import {
  n as n2
} from "./chunk-GAW5JHG4.js";
import {
  i
} from "./chunk-OEKKQXBD.js";
import {
  p,
  y as y2
} from "./chunk-S3IO7V4Q.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r as r2
} from "./chunk-MFOQYQFG.js";
import {
  W2 as W,
  d2 as d
} from "./chunk-JJS7PR2U.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  v
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a,
  g2 as g,
  r2 as r
} from "./chunk-DDYVXG4F.js";
import {
  k,
  s as s2
} from "./chunk-HJY2YILU.js";
import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  O,
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/operations/identify.js
function o4(e3, r3) {
  const {
    dpi: n6,
    gdbVersion: s4,
    geometry: o5,
    geometryPrecision: a5,
    height: m3,
    historicMoment: p4,
    layerOption: f5,
    mapExtent: y4,
    maxAllowableOffset: u3,
    returnFieldName: c2,
    returnGeometry: d4,
    returnUnformattedValues: g2,
    returnZ: x,
    spatialReference: h,
    timeExtent: b2,
    tolerance: E,
    width: O2
  } = e3.toJSON(), {
    dynamicLayers: S3,
    layerDefs: j,
    layerIds: N
  } = l(e3), $ = null != r3?.geometry ? r3.geometry : null, I = {
    historicMoment: p4,
    geometryPrecision: a5,
    maxAllowableOffset: u3,
    returnFieldName: c2,
    returnGeometry: d4,
    returnUnformattedValues: g2,
    returnZ: x,
    tolerance: E
  }, R3 = $?.toJSON() || o5;
  I.imageDisplay = `${O2},${m3},${n6}`, s4 && (I.gdbVersion = s4), R3 && (delete R3.spatialReference, I.geometry = JSON.stringify(R3), I.geometryType = p(R3));
  const U3 = h ?? R3?.spatialReference ?? y4?.spatialReference;
  if (U3 && (I.sr = d(U3)), I.time = b2 ? [b2.start, b2.end].join(",") : null, y4) {
    const {
      xmin: e4,
      ymin: t,
      xmax: r4,
      ymax: i5
    } = y4;
    I.mapExtent = `${e4},${t},${r4},${i5}`;
  }
  return j && (I.layerDefs = j), S3 && !j && (I.dynamicLayers = S3), I.layers = "popup" === f5 ? "visible" : f5, N && !S3 && (I.layers += `:${N.join(",")}`), I;
}
function l(e3) {
  const {
    mapExtent: t,
    floors: i5,
    width: o5,
    sublayers: l2,
    layerIds: m3,
    layerOption: p4,
    gdbVersion: f5
  } = e3, y4 = l2?.find((e4) => null != e4.layer)?.layer?.serviceSublayers, u3 = "popup" === p4, c2 = {}, d4 = i3({
    extent: t,
    width: o5,
    spatialReference: t?.spatialReference
  }), g2 = [], x = (e4) => {
    const t2 = 0 === d4, r3 = 0 === e4.minScale || d4 <= e4.minScale, i6 = 0 === e4.maxScale || d4 >= e4.maxScale;
    if (e4.visible && (t2 || r3 && i6)) if (e4.sublayers) e4.sublayers.forEach(x);
    else {
      if (false === m3?.includes(e4.id) || u3 && (!e4.popupTemplate || !e4.popupEnabled)) return;
      g2.unshift(e4);
    }
  };
  if (l2?.forEach(x), l2 && !g2.length) c2.layerIds = [];
  else {
    const e4 = n4(g2, y4, f5), t2 = g2.map((e5) => {
      const t3 = n5(i5, e5);
      return e5.toExportImageJSON(t3);
    });
    if (e4) c2.dynamicLayers = JSON.stringify(t2);
    else {
      if (l2) {
        let e6 = g2.map(({
          id: e7
        }) => e7);
        m3 && (e6 = e6.filter((e7) => m3.includes(e7))), c2.layerIds = e6;
      } else m3?.length && (c2.layerIds = m3);
      const e5 = a2(i5, g2);
      if (null != e5 && e5.length) {
        const t3 = {};
        for (const r3 of e5) r3.definitionExpression && (t3[r3.id] = r3.definitionExpression);
        Object.keys(t3).length && (c2.layerDefs = JSON.stringify(t3));
      }
    }
  }
  return c2;
}
function a2(t, r3) {
  const i5 = !!t?.length, s4 = r3.filter((e3) => null != e3.definitionExpression || i5 && null != e3.floorInfo);
  return s4.length ? s4.map((r4) => {
    const i6 = n5(t, r4), s5 = n(i6, r4.definitionExpression);
    return {
      id: r4.id,
      definitionExpression: s5 ?? void 0
    };
  }) : null;
}

// ../../../node_modules/@arcgis/core/rest/support/IdentifyParameters.js
var a3;
var u = a3 = class extends f {
  static from(t) {
    return g(a3, t);
  }
  constructor(t) {
    super(t), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.historicMoment = null, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = true, this.returnGeometry = false, this.returnM = false, this.returnUnformattedValues = true, this.returnZ = false, this.spatialReference = null, this.sublayers = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
  writeHistoricMoment(t, e3) {
    e3.historicMoment = t && t.getTime();
  }
};
e2([y({
  type: Number,
  json: {
    write: true
  }
})], u.prototype, "dpi", void 0), e2([y()], u.prototype, "floors", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], u.prototype, "gdbVersion", void 0), e2([y({
  types: n2,
  json: {
    read: y2,
    write: true
  }
})], u.prototype, "geometry", void 0), e2([y({
  type: Number,
  json: {
    write: true
  }
})], u.prototype, "geometryPrecision", void 0), e2([y({
  type: Number,
  json: {
    write: true
  }
})], u.prototype, "height", void 0), e2([y({
  type: Date
})], u.prototype, "historicMoment", void 0), e2([r2("historicMoment")], u.prototype, "writeHistoricMoment", null), e2([y({
  type: [Number],
  json: {
    write: true
  }
})], u.prototype, "layerIds", void 0), e2([y({
  type: ["top", "visible", "all", "popup"],
  json: {
    write: true
  }
})], u.prototype, "layerOption", void 0), e2([y({
  type: w,
  json: {
    write: true
  }
})], u.prototype, "mapExtent", void 0), e2([y({
  type: Number,
  json: {
    write: true
  }
})], u.prototype, "maxAllowableOffset", void 0), e2([y({
  type: Boolean,
  json: {
    write: true
  }
})], u.prototype, "returnFieldName", void 0), e2([y({
  type: Boolean,
  json: {
    write: true
  }
})], u.prototype, "returnGeometry", void 0), e2([y({
  type: Boolean,
  json: {
    write: true
  }
})], u.prototype, "returnM", void 0), e2([y({
  type: Boolean,
  json: {
    write: true
  }
})], u.prototype, "returnUnformattedValues", void 0), e2([y({
  type: Boolean,
  json: {
    write: true
  }
})], u.prototype, "returnZ", void 0), e2([y({
  type: f2,
  json: {
    write: true
  }
})], u.prototype, "spatialReference", void 0), e2([y()], u.prototype, "sublayers", void 0), e2([y({
  type: c,
  json: {
    write: true
  }
})], u.prototype, "timeExtent", void 0), e2([y({
  type: Number,
  json: {
    write: true
  }
})], u.prototype, "tolerance", void 0), e2([y({
  type: Number,
  json: {
    write: true
  }
})], u.prototype, "width", void 0), u = a3 = e2([a("esri.rest.support.IdentifyParameters")], u);
var d3 = u;

// ../../../node_modules/@arcgis/core/rest/support/IdentifyResult.js
var u2 = class extends f {
  constructor(r3) {
    super(r3), this.displayFieldName = null, this.feature = null, this.layerId = null, this.layerName = null;
  }
  readFeature(r3, t) {
    return d2.fromJSON({
      attributes: __spreadValues({}, t.attributes),
      geometry: __spreadValues({}, t.geometry)
    });
  }
  writeFeature(r3, e3) {
    if (!r3) return;
    const {
      attributes: t,
      geometry: o5
    } = r3;
    t && (e3.attributes = __spreadValues({}, t)), null != o5 && (e3.geometry = o5.toJSON(), e3.geometryType = i.toJSON(o5.type));
  }
};
e2([y({
  type: String,
  json: {
    write: true
  }
})], u2.prototype, "displayFieldName", void 0), e2([y({
  type: d2
})], u2.prototype, "feature", void 0), e2([o("feature", ["attributes", "geometry"])], u2.prototype, "readFeature", null), e2([r2("feature")], u2.prototype, "writeFeature", null), e2([y({
  type: Number,
  json: {
    write: true
  }
})], u2.prototype, "layerId", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], u2.prototype, "layerName", void 0), u2 = e2([a("esri.rest.support.IdentifyResult")], u2);
var m = u2;

// ../../../node_modules/@arcgis/core/rest/identify.js
function f4(u3, i5, f5) {
  return __async(this, null, function* () {
    const c2 = (i5 = a4(i5)).geometry ? [i5.geometry] : [], l2 = f3(u3);
    return l2.path += "/identify", R(c2).then((e3) => {
      const t = o4(i5, {
        geometry: e3?.[0]
      }), u4 = s3(__spreadValues(__spreadProps(__spreadValues({}, l2.query), {
        f: "json"
      }), t)), a5 = i2(u4, f5);
      return U(l2.path, a5).then(m2).then((r3) => p3(r3, i5.sublayers));
    });
  });
}
function m2(r3) {
  const e3 = r3.data;
  return e3.results = e3.results || [], e3.exceededTransferLimit = Boolean(e3.exceededTransferLimit), e3.results = e3.results.map((r4) => m.fromJSON(r4)), e3;
}
function a4(r3) {
  return r3 = d3.from(r3);
}
function p3(r3, e3) {
  if (!e3?.length) return r3;
  const t = /* @__PURE__ */ new Map();
  function o5(r4) {
    t.set(r4.id, r4), r4.sublayers && r4.sublayers.forEach(o5);
  }
  e3.forEach(o5);
  for (const s4 of r3.results) s4.feature.sourceLayer = t.get(s4.layerId);
  return r3;
}

// ../../../node_modules/@arcgis/core/views/layers/support/MapServiceLayerViewHelper.js
var S2 = null;
function U2(e3, t) {
  return "tile" === t.type || "map-image" === t.type;
}
var _ = class extends S {
  constructor(e3) {
    super(e3), this._featuresResolutions = /* @__PURE__ */ new WeakMap(), this.highlightGraphics = null, this.highlightGraphicUpdated = null, this.updateHighlightedFeatures = k((e4) => __async(this, null, function* () {
      this.destroyed || this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e4).catch(() => {
      }));
    }));
  }
  initialize() {
    const e3 = (e4) => {
      this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e4).catch(() => {
      })), this.updateHighlightedFeatures(this._highlightGeometriesResolution);
    };
    this.addHandles([v(() => this.highlightGraphics, "change", (t) => e3(t.added), {
      onListenerAdd: (t) => e3(t)
    })]);
  }
  fetchPopupFeaturesAtLocation(e3, t) {
    return __async(this, null, function* () {
      const {
        layerView: {
          layer: r3,
          view: {
            scale: s4
          }
        }
      } = this;
      if (!e3) throw new s("fetchPopupFeatures:invalid-area", "Nothing to fetch without area", {
        layer: r3
      });
      const i5 = R2(r3.sublayers, s4, t);
      if (!i5.length) return [];
      const a5 = yield T(r3, i5);
      if (!((r3.capabilities?.operations?.supportsIdentify ?? true) && r3.version >= 10.5) && !a5) throw new s("fetchPopupFeatures:not-supported", "query operation is disabled for this service", {
        layer: r3
      });
      return a5 ? this._fetchPopupFeaturesUsingQueries(e3, i5, t) : this._fetchPopupFeaturesUsingIdentify(e3, i5, t);
    });
  }
  clearHighlights() {
    this.highlightGraphics?.removeAll();
  }
  highlight(e3) {
    const r3 = this.highlightGraphics;
    if (!r3) return e();
    let o5 = null;
    if (e3 instanceof d2 ? o5 = [e3] : V.isCollection(e3) && e3.length > 0 ? o5 = e3.toArray() : Array.isArray(e3) && e3.length > 0 && (o5 = e3), o5 = o5?.filter(O), !o5?.length) return e();
    for (const t of o5) {
      const e4 = t.sourceLayer;
      null != e4 && "geometryType" in e4 && "point" === e4.geometryType && (t.visible = false);
    }
    return r3.addMany(o5), e(() => r3.removeMany(o5 ?? []));
  }
  _updateHighlightedFeaturesSymbols(e3) {
    return __async(this, null, function* () {
      const {
        layerView: {
          view: t
        },
        highlightGraphics: r3,
        highlightGraphicUpdated: s4
      } = this;
      if (r3 && s4) for (const i5 of e3) {
        const e4 = i5.sourceLayer && "renderer" in i5.sourceLayer && i5.sourceLayer.renderer;
        i5.sourceLayer && "geometryType" in i5.sourceLayer && "point" === i5.sourceLayer.geometryType && e4 && "getSymbolAsync" in e4 && e4.getSymbolAsync(i5).then((o5) => __async(this, null, function* () {
          o5 ||= new y3();
          let a5 = null;
          const n6 = "visualVariables" in e4 ? e4.visualVariables?.find((e5) => "size" === e5.type) : void 0;
          n6 && (S2 || (S2 = (yield import("./visualVariableUtils-YDPTPXKG.js")).getSize), a5 = S2(n6, i5, {
            view: t.type,
            scale: t.scale,
            shape: "simple-marker" === o5.type ? o5.style : null
          })), a5 ||= "width" in o5 && "height" in o5 && null != o5.width && null != o5.height ? Math.max(o5.width, o5.height) : "size" in o5 ? o5.size : 16, r3.includes(i5) && (i5.symbol = new y3({
            style: "square",
            size: a5,
            xoffset: "xoffset" in o5 ? o5.xoffset : 0,
            yoffset: "yoffset" in o5 ? o5.yoffset : 0
          }), s4(i5, "symbol"), i5.visible = true);
        }));
      }
    });
  }
  _updateHighlightedFeaturesGeometries(e3) {
    return __async(this, null, function* () {
      const {
        layerView: {
          layer: t,
          view: r3
        },
        highlightGraphics: s4,
        highlightGraphicUpdated: i5
      } = this;
      if (this._highlightGeometriesResolution = e3, !i5 || !s4?.length || !t.capabilities.operations.supportsQuery) return;
      const o5 = this._getTargetResolution(e3), a5 = /* @__PURE__ */ new Map();
      for (const c2 of s4) if (!this._featuresResolutions.has(c2) || this._featuresResolutions.get(c2) > o5) {
        const e4 = c2.sourceLayer;
        r(a5, e4, () => /* @__PURE__ */ new Map()).set(c2.getObjectId(), c2);
      }
      const l2 = Array.from(a5, ([e4, t2]) => {
        const s5 = e4.createQuery();
        return s5.objectIds = [...t2.keys()], s5.outFields = [e4.objectIdField], s5.returnGeometry = true, s5.maxAllowableOffset = o5, s5.outSpatialReference = r3.spatialReference, e4.queryFeatures(s5);
      }), p4 = yield Promise.all(l2);
      if (!this.destroyed) for (const {
        features: n6
      } of p4) for (const e4 of n6) {
        const t2 = e4.sourceLayer, r4 = a5.get(t2).get(e4.getObjectId());
        r4 && s4.includes(r4) && (r4.geometry = e4.geometry, i5(r4, "geometry"), this._featuresResolutions.set(r4, o5));
      }
    });
  }
  _getTargetResolution(e3) {
    const t = e3 * W(this.layerView.view.spatialReference), r3 = t / 16;
    return r3 <= 10 ? 0 : e3 / t * r3;
  }
  _fetchPopupFeaturesUsingIdentify(e3, t, r3) {
    return __async(this, null, function* () {
      const s4 = yield this._createIdentifyParameters(e3, t, r3);
      if (null == s4) return [];
      const {
        results: i5
      } = yield f4(this.layerView.layer.parsedUrl, s4, r3);
      return i5.map((e4) => e4.feature);
    });
  }
  _createIdentifyParameters(e3, t, r3) {
    return __async(this, null, function* () {
      const {
        floors: s4,
        layer: i5,
        timeExtent: o5,
        view: {
          spatialReference: a5,
          scale: n6
        }
      } = this.layerView;
      if (!t.length) return null;
      yield Promise.all(t.map(({
        sublayer: e4
      }) => e4.load(r3).catch(() => {
      })));
      const l2 = Math.min(has("mapservice-popup-identify-max-tolerance"), i5.allSublayers.reduce((e4, t2) => t2.renderer ? o3({
        renderer: t2.renderer,
        pointerType: r3?.pointerType
      }) : e4, 2)), p4 = this.createFetchPopupFeaturesQueryGeometry(e3, l2), c2 = o2(n6, a5), u3 = Math.round(p4.width / c2), h = new w({
        xmin: p4.center.x - c2 * u3,
        ymin: p4.center.y - c2 * u3,
        xmax: p4.center.x + c2 * u3,
        ymax: p4.center.y + c2 * u3,
        spatialReference: p4.spatialReference
      });
      return new d3({
        floors: s4,
        gdbVersion: "gdbVersion" in i5 ? i5.gdbVersion : void 0,
        geometry: e3,
        height: u3,
        layerOption: "popup",
        mapExtent: h,
        returnGeometry: true,
        spatialReference: a5,
        sublayers: i5.sublayers,
        timeExtent: o5,
        tolerance: l2,
        width: u3
      });
    });
  }
  _fetchPopupFeaturesUsingQueries(e3, t, r3) {
    return __async(this, null, function* () {
      const {
        layerView: {
          floors: i5,
          timeExtent: o5
        }
      } = this, a5 = t.map((_0) => __async(this, [_0], function* ({
        sublayer: t2,
        popupTemplate: s4
      }) {
        if (yield t2.load(r3).catch(() => {
        }), t2.capabilities && !t2.capabilities.operations.supportsQuery) return [];
        const a6 = t2.createQuery(), n6 = o3({
          renderer: t2.renderer,
          pointerType: r3?.pointerType
        }), l2 = this.createFetchPopupFeaturesQueryGeometry(e3, n6), c2 = /* @__PURE__ */ new Set(), [h] = yield Promise.all([n3(t2, s4), t2.renderer?.collectRequiredFields(c2, t2.fieldsIndex)]);
        s2(r3), b(c2, t2.fieldsIndex, h);
        const y4 = Array.from(c2).sort();
        a6.geometry = l2, a6.outFields = y4, a6.timeExtent = o5;
        const m3 = n5(i5, t2);
        a6.where = n(a6.where, m3);
        const f5 = this._getTargetResolution(l2.width / n6), d4 = yield A(s4);
        s2(r3);
        const v2 = "point" === t2.geometryType || d4 && d4.arcadeUtils.hasGeometryOperations(s4);
        v2 || (a6.maxAllowableOffset = f5);
        let {
          features: j
        } = yield t2.queryFeatures(a6, r3);
        const x = v2 ? 0 : f5;
        j = yield V2(t2, j, r3);
        for (const e4 of j) this._featuresResolutions.set(e4, x);
        return j;
      }));
      return (yield Promise.allSettled(a5)).reduce((e4, t2) => "fulfilled" === t2.status ? [...e4, ...t2.value] : e4, []).filter(O);
    });
  }
};
function R2(e3, t, r3) {
  const s4 = [];
  if (!e3) return s4;
  const i5 = (e4) => {
    const o5 = 0 === e4.minScale || t <= e4.minScale, a5 = 0 === e4.maxScale || t >= e4.maxScale;
    if (e4.visible && o5 && a5) {
      if (e4.sublayers) e4.sublayers.forEach(i5);
      else if (e4.popupEnabled) {
        const t2 = p2(e4, __spreadProps(__spreadValues({}, r3), {
          defaultPopupTemplateEnabled: false
        }));
        null != t2 && s4.unshift({
          sublayer: e4,
          popupTemplate: t2
        });
      }
    }
  };
  return e3.map(i5), s4;
}
function A(e3) {
  return e3.expressionInfos?.length || Array.isArray(e3.content) && e3.content.some((e4) => "expression" === e4.type) ? i4() : Promise.resolve();
}
function T(e3, t) {
  return __async(this, null, function* () {
    if (e3.capabilities?.operations?.supportsQuery) return true;
    try {
      return yield Promise.any(t.map(({
        sublayer: e4
      }) => e4.load().then(() => e4.capabilities.operations.supportsQuery)));
    } catch {
      return false;
    }
  });
}
function V2(e3, t, r3) {
  return __async(this, null, function* () {
    const s4 = e3.renderer;
    return s4 && "defaultSymbol" in s4 && !s4.defaultSymbol && (t = s4.valueExpression ? yield Promise.all(t.map((e4) => s4.getSymbolAsync(e4, r3).then((t2) => t2 ? e4 : null))).then((e4) => e4.filter((e5) => null != e5)) : t.filter((e4) => null != s4.getSymbol(e4))), t;
  });
}
e2([y({
  constructOnly: true
})], _.prototype, "createFetchPopupFeaturesQueryGeometry", void 0), e2([y({
  constructOnly: true
})], _.prototype, "layerView", void 0), e2([y({
  constructOnly: true
})], _.prototype, "highlightGraphics", void 0), e2([y({
  constructOnly: true
})], _.prototype, "highlightGraphicUpdated", void 0), e2([y({
  constructOnly: true
})], _.prototype, "updatingHandles", void 0), _ = e2([a("esri.views.layers.support.MapServiceLayerViewHelper")], _);

export {
  U2 as U,
  _
};
//# sourceMappingURL=chunk-HVCRHT2K.js.map
