import {
  o as o5,
  p as p4,
  r as r4,
  s as s4
} from "./chunk-QRVAQWLH.js";
import {
  M,
  y as y2
} from "./chunk-TMPIWG43.js";
import {
  d as d6
} from "./chunk-EU7GCI2A.js";
import {
  u as u2
} from "./chunk-WE6VW4MG.js";
import {
  r as r5
} from "./chunk-5QM72RFD.js";
import {
  n as n6,
  r as r6,
  t as t3
} from "./chunk-WQXGIEVZ.js";
import {
  E as E3,
  Et,
  J,
  Rt,
  d as d5,
  f as f2,
  g as g3,
  gt,
  v,
  w,
  xt
} from "./chunk-T3EGKTN6.js";
import {
  E,
  E2,
  N as N3,
  a as a2,
  d as d4,
  h as h2,
  n as n5,
  p as p3,
  s as s3
} from "./chunk-ZFPMGEAK.js";
import {
  I,
  N as N2,
  j as j3
} from "./chunk-67V5AGVJ.js";
import {
  t as t2
} from "./chunk-D3AKDIJC.js";
import {
  f,
  o as o4
} from "./chunk-IIVUY2T7.js";
import {
  o as o3
} from "./chunk-5NCKEQLF.js";
import {
  r as r3,
  s as s2
} from "./chunk-SLCHZ6DD.js";
import {
  _,
  b,
  d as d2,
  e as e4,
  j as j2,
  m,
  p as p2
} from "./chunk-VS26W5Y5.js";
import {
  h
} from "./chunk-PVO5NM6Q.js";
import {
  j
} from "./chunk-6MR4UDDL.js";
import {
  d as d3
} from "./chunk-XQCKIDQO.js";
import {
  n as n4
} from "./chunk-DY7FJHTG.js";
import {
  K,
  N
} from "./chunk-DUTZNK67.js";
import {
  c as c2,
  r as r2
} from "./chunk-JM7HAEY6.js";
import {
  n as n2
} from "./chunk-JCWFGRHQ.js";
import {
  A as A2,
  G,
  e as e3,
  o as o2,
  p,
  q,
  r,
  u
} from "./chunk-AXVPJBVW.js";
import {
  n as n3,
  t
} from "./chunk-OXEPWRM7.js";
import {
  e as e2
} from "./chunk-POILQGXA.js";
import {
  L,
  W2 as W
} from "./chunk-JJS7PR2U.js";
import {
  A,
  C,
  d,
  x
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
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
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  c2 as c,
  g as g2,
  s
} from "./chunk-HJY2YILU.js";
import {
  l
} from "./chunk-7DA6A5LD.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  O,
  g
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/FeatureSnappingLayerSource.js
var i = class extends S {
  constructor(o7) {
    super(o7), this.layer = null, this.enabled = true, this.updating = false, this.availability = 1, this.sublayerSources = new V();
  }
};
e([y({
  constructOnly: true
})], i.prototype, "layer", void 0), e([y()], i.prototype, "enabled", void 0), e([y()], i.prototype, "updating", void 0), e([y()], i.prototype, "availability", void 0), e([y()], i.prototype, "sublayerSources", void 0), i = e([a("esri.views.interactive.snapping.FeatureSnappingLayerSource")], i);
var p5 = i;

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SnappingOptions.js
var u3 = class extends S {
  constructor(e5) {
    super(e5), this.enabled = false, this.enabledToggled = false, this.forceDisabled = false, this.selfEnabled = true, this.featureEnabled = true, this.attributeRulesEnabled = false, this.featureSources = new V(), this.distance = p4.distance, this.touchSensitivityMultiplier = p4.touchSensitivityMultiplier;
  }
  get effectiveEnabled() {
    return !this.forceDisabled && (this.enabledToggled ? !this.enabled : this.enabled);
  }
  get effectiveSelfEnabled() {
    return this.effectiveEnabled && this.selfEnabled;
  }
  get effectiveFeatureEnabled() {
    return this.effectiveEnabled && this.featureEnabled;
  }
  get _effectiveFeatureSources() {
    const e5 = this.featureSources;
    e5.some(p6) && n.getLogger(this).warnOnce("Do not configure SubtypeGroupLayer sources in SnappingOptions.featureSources directly. Create a FeatureSnappingLayerSource for each SubtypeSublayer.");
    const t4 = e5.filter(d7), i3 = this._get("_effectiveFeatureSources")?.filter(p6) ?? new V();
    for (const r9 of t4) {
      const e6 = i3.find((e7) => e7.layer === r9.layer.parent);
      if (e6) e6.sublayerSources.includes(r9) || e6.sublayerSources.add(r9);
      else if (r9.layer.parent) {
        const e7 = new p5({
          layer: r9.layer.parent
        });
        e7.sublayerSources.add(r9), i3.add(e7);
      }
    }
    for (const r9 of i3) {
      const e6 = r9.sublayerSources.filter((e7) => !t4.includes(e7));
      r9.sublayerSources.removeMany(e6);
    }
    i3.removeMany(i3.filter((e6) => 0 === e6.sublayerSources.length));
    const a3 = e5.filter(f3), l3 = this._get("_effectiveFeatureSources") ?? new V(), {
      added: u5,
      removed: c4
    } = g(l3.toArray(), [...a3, ...i3]);
    return l3.removeMany(c4), l3.addMany(u5), l3;
  }
};
e([y()], u3.prototype, "enabled", void 0), e([y()], u3.prototype, "enabledToggled", void 0), e([y()], u3.prototype, "forceDisabled", void 0), e([y()], u3.prototype, "selfEnabled", void 0), e([y()], u3.prototype, "featureEnabled", void 0), e([y()], u3.prototype, "attributeRulesEnabled", void 0), e([y({
  type: V.ofType(p5)
})], u3.prototype, "featureSources", void 0), e([y()], u3.prototype, "distance", void 0), e([y()], u3.prototype, "touchSensitivityMultiplier", void 0), e([y({
  readOnly: true
})], u3.prototype, "effectiveEnabled", null), e([y({
  readOnly: true
})], u3.prototype, "effectiveSelfEnabled", null), e([y({
  readOnly: true
})], u3.prototype, "effectiveFeatureEnabled", null), e([y({
  readOnly: true
})], u3.prototype, "_effectiveFeatureSources", null), u3 = e([a("esri.views.interactive.snapping.SnappingOptions")], u3);
var c3 = u3;
function p6(e5) {
  return "subtype-group" === e5.layer.type;
}
function f3(e5) {
  return "subtype-group" !== e5.layer.type;
}
function d7(e5) {
  return "subtype-sublayer" === e5.layer.type;
}

// ../../../node_modules/@arcgis/core/views/interactive/snapping/FeatureSnappingSourceInfo.js
var f4 = class extends S {
  set attributeRulesEnabled(e5) {
    this._set("attributeRulesEnabled", e5), e5 && this.loadRules();
  }
  get layerView() {
    return this.view?.allLayerViews?.find((e5) => e5.layer === this.layer);
  }
  get valid() {
    const {
      _valid: e5,
      snappingSource: t4,
      layer: r9
    } = this;
    return !(!t4 || !r9) && e5;
  }
  get subtypeFilter() {
    const {
      layer: e5,
      snappingSource: t4
    } = this;
    if (!c2(e5) || !e5.subtypes?.length || !t4) return {
      mode: "not-in-use",
      filter: null
    };
    const r9 = t4.layerSource.sublayerSources.filter((e6) => e6.enabled && e6.layer.visible && t2(this.view?.scale, e6.layer.effectiveScaleRange.minScale, e6.layer.effectiveScaleRange.maxScale)).map((e6) => e6.layer.subtypeCode);
    if (!r9.length) return {
      mode: "none-visible",
      filter: null
    };
    if (r9.length === e5.subtypes.length) return {
      mode: "all-visible",
      filter: null
    };
    const i3 = e5.fieldsIndex.get(e5.subtypeField)?.name ?? e5.subtypeField;
    return 1 === r9.length ? {
      mode: "in-use",
      filter: `${i3} = ${r9.getItemAt(0)}`
    } : {
      mode: "in-use",
      filter: `${i3} IN (${r9.join(", ")})`
    };
  }
  get floorFilter() {
    const {
      view: e5,
      layer: t4
    } = this;
    return e5 && t4 ? o3({
      view: e5,
      layer: t4
    }) : null;
  }
  constructor(e5) {
    super(e5), this.layer = null, this.snappingSource = null, this.rulesTable = null, this._valid = null;
  }
  initialize() {
    if (!this.snappingSource || !this.layer) return void (this._valid = false);
    const {
      layer: e5,
      snappingSource: t4
    } = this;
    if ("refresh" in e5) {
      const r9 = e5;
      this.addHandles(r9.on("refresh", () => t4.refresh()));
    }
    this.loadRules(), this.addHandles([d(() => t4.updating, (e6) => t4.layerSource.updating = e6, A), d(() => t4.availability, (e6) => t4.layerSource.availability = e6, A)]);
  }
  getFetchCandidatesParameters(e5, t4, r9) {
    if (!this.valid) return [];
    const {
      layer: i3,
      layerView: l3,
      floorFilter: o7,
      rulesTable: a3,
      subtypeFilter: u5
    } = this, y3 = __spreadProps(__spreadValues({
      distance: r9,
      mode: this.view?.type ?? "2d",
      point: e5,
      coordinateHelper: t4.coordinateHelper
    }, h3()), {
      filter: l3 && "filter" in l3 ? l3.filter : null
    });
    if (o7 && (y3.filter = m2(y3.filter, o7)), "not-in-use" !== u5.mode && "all-visible" !== u5.mode) {
      if ("none-visible" === u5.mode) return [];
      y3.filter ? y3.filter.where = n2(y3.filter.where, u5.mode) : y3.filter = new d3({
        where: u5.filter
      });
    }
    if (!this.attributeRulesEnabled) return [y3];
    const f7 = t4.feature, v3 = "subtype-sublayer" === f7?.sourceLayer?.type ? f7.sourceLayer.parent : f7?.sourceLayer;
    if (a3 && f7 && v(this.view?.map) && (r2(i3) || c2(i3)) && i3.layerId && (r2(v3) || c2(v3)) && this.view.map.utilityNetworks?.find((e6) => e6.isUtilityLayer(v3))) {
      if ("loaded" !== a3.loadStatus) return [];
      const e6 = [], t5 = i3.layerId, r10 = a3.getFeatureSQL(v3, f7)?.[t5];
      if (!r10) return [];
      const l4 = r10.anyVertex;
      let s5 = r10.endVertex;
      return s5 && l4 && s5 === l4 && (s5 = ""), s5 && e6.push(__spreadProps(__spreadValues({}, y3), {
        returnEdge: false,
        vertexMode: "ends",
        filter: m2(y3.filter, s5)
      })), l4 && e6.push(__spreadProps(__spreadValues({}, y3), {
        returnEdge: false,
        vertexMode: "all",
        filter: m2(y3.filter, l4)
      })), e6;
    }
    return [y3];
  }
  loadRules() {
    return __async(this, null, function* () {
      this._valid = null;
      const {
        layer: e5,
        view: t4,
        attributeRulesEnabled: i3
      } = this;
      if (i3 && e5 && t4 && v(t4?.map) && (r2(e5) || c2(e5))) try {
        yield Promise.allSettled(t4.map.utilityNetworks?.map((e6) => e6.load()) ?? []);
        const r9 = t4.map.utilityNetworks?.find((t5) => t5.isUtilityLayer(e5));
        r9 && (this.rulesTable = yield r9.getRulesTable(), yield this.rulesTable?.load());
      } catch (l3) {
        return this._valid = false, void n.getLogger("esri.views.interactive.snapping.FeatureSnappingSourceInfo").error("Failed to load rules table for snapping source", e5.title);
      }
      this._valid = true;
    });
  }
  remove() {
    this.destroy();
  }
  destroy() {
    this.snappingSource?.destroy();
  }
};
function h3() {
  return {
    returnEdge: true,
    vertexMode: "all"
  };
}
function m2(e5, t4) {
  return null == e5 ? new d3({
    where: t4
  }) : e5.where ? new d3({
    where: n2(e5.where, t4)
  }) : new d3({
    where: t4
  });
}
e([y({
  constructOnly: true
})], f4.prototype, "layer", void 0), e([y({
  constructOnly: true
})], f4.prototype, "snappingSource", void 0), e([y({
  constructOnly: true
})], f4.prototype, "view", void 0), e([y({
  value: false
})], f4.prototype, "attributeRulesEnabled", null), e([y()], f4.prototype, "layerView", null), e([y()], f4.prototype, "rulesTable", void 0), e([y()], f4.prototype, "valid", null), e([y()], f4.prototype, "subtypeFilter", null), e([y()], f4.prototype, "floorFilter", null), e([y()], f4.prototype, "_valid", void 0), f4 = e([a("esri.views.interactive.snapping.FeatureSnappingSourceInfo")], f4);

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/RightAngleSnappingCandidate.js
var n7 = class extends t3 {
  constructor({
    targetPoint: e5,
    constraint: i3,
    previousVertex: r9,
    otherVertex: s5,
    otherVertexType: n8,
    isDraped: o7,
    selfSnappingType: h6,
    objectId: a3,
    domain: x3
  }) {
    super(e5, i3, o7, x3 ?? E2.SELF), this.previousVertex = r9, this.otherVertex = s5, this.otherVertexType = n8, this.selfSnappingType = h6 ?? p7.None, this.objectId = a3 ?? null;
  }
  get hints() {
    const t4 = this.previousVertex, i3 = this.otherVertexType === o6.CENTER ? this.otherVertex : this.targetPoint, n8 = this.otherVertexType === o6.CENTER ? this.targetPoint : this.otherVertex;
    return [new n5(E3.TARGET, i3, n8, this.isDraped, this.domain), new n5(E3.REFERENCE, t4, i3, this.isDraped, this.domain), new s4(this.previousVertex, i3, n8, this.isDraped, this.domain)];
  }
};
var o6;
var p7;
!function(t4) {
  t4[t4.NEXT = 0] = "NEXT", t4[t4.CENTER = 1] = "CENTER";
}(o6 || (o6 = {})), function(t4) {
  t4[t4.None = 0] = "None", t4[t4.LastVertex = 1] = "LastVertex", t4[t4.FirstVertex = 2] = "FirstVertex", t4[t4.ExistingEdge = 3] = "ExistingEdge";
}(p7 || (p7 = {}));

// ../../../node_modules/@arcgis/core/views/interactive/snapping/FeatureSnappingEngine.js
var P = class extends S {
  get updating() {
    return this._snappingSources.some((e5) => null == e5?.valid || true === e5.valid && true === e5.snappingSource?.updating) || this._updatingHandles.updating;
  }
  constructor(e5) {
    super(e5), this.options = null, this._domain = E2.FEATURE, this._updatingHandles = new h(), this._sourceModules = {
      featureService: {
        module: null,
        loader: null
      },
      featureCollection: {
        module: null,
        loader: null
      },
      graphics: {
        module: null,
        loader: null
      },
      notes: {
        module: null,
        loader: null
      },
      scene: {
        module: null,
        loader: null
      }
    };
  }
  initialize() {
    const e5 = x(() => this.options?._effectiveFeatureSources, (e6, t4) => this._createSourceInfo(e6, t4));
    this._snappingSources = e5, this.addHandles([l(e5), d(() => ({
      rulesEnabled: !!this.options?.attributeRulesEnabled,
      sources: this._snappingSources.filter(O)
    }), ({
      rulesEnabled: e6,
      sources: t4
    }) => {
      for (const r9 of t4) r9.attributeRulesEnabled = e6;
    }, C)]);
  }
  destroy() {
    this._set("options", null), this._updatingHandles.destroy();
  }
  fetchCandidates(e5, t4, r9, a3) {
    return __async(this, null, function* () {
      if (!(t4 & this._domain && null != this.options && this.options.effectiveFeatureEnabled)) return [];
      const i3 = [], o7 = this._computeScreenSizeDistanceParameters(e5, r9);
      for (const n8 of this._snappingSources) {
        if (!n8?.valid || !n8.snappingSource?.layerSource?.enabled || n8.layerView?.suspended) continue;
        const t5 = n8.getFetchCandidatesParameters(e5, r9, o7);
        for (const e6 of t5) i3.push(n8.snappingSource.fetchCandidates(e6, a3).then((e7) => e7.filter((e8) => !this._candidateIsExcluded(n8.snappingSource, e8, r9.excludeFeature))));
      }
      const c4 = (yield g2(i3)).flat();
      return this._addRightAngleCandidates(c4, e5, o7, r9), s(a3), f2(e5, c4), c4;
    });
  }
  _addRightAngleCandidates(e5, t4, r9, a3) {
    const n8 = null != a3.vertexHandle ? a3.vertexHandle.rightEdge?.rightVertex?.pos : null != a3.editGeometryOperations && "polygon" === a3.editGeometryOperations.data.type ? a3.editGeometryOperations.data.components[0]?.getFirstVertex()?.pos : null, s5 = null != a3.vertexHandle ? a3.vertexHandle.leftEdge?.leftVertex?.pos : null != a3.editGeometryOperations ? a3.editGeometryOperations.data.components[0]?.getLastVertex()?.pos : null, {
      view: i3
    } = this, o7 = N3(n8, i3, a3), c4 = N3(s5, i3, a3), u5 = e5.length;
    for (let l3 = 0; l3 < u5; l3++) this._addRightAngleCandidate(e5[l3], c4, t4, r9, e5), this._addRightAngleCandidate(e5[l3], o7, t4, r9, e5);
  }
  _addRightAngleCandidate(e5, t4, r9, a3, n8) {
    if (null == t4 || !A3(e5)) return;
    const s5 = e5.constraint.closestTo(t4), i3 = (s5[0] - r9[0]) / a3.x, o7 = (s5[1] - r9[1]) / a3.y, {
      start: c4,
      end: u5
    } = e5.constraint;
    if (i3 * i3 + o7 * o7 <= 1) {
      const r10 = b(s3(s5), s3(c4)) > b(s3(s5), s3(u5)) ? c4 : u5, a4 = new n7({
        targetPoint: p3(s5),
        otherVertex: t4,
        otherVertexType: o6.NEXT,
        previousVertex: r10,
        constraint: new Et(t4, s5),
        objectId: e5.objectId,
        isDraped: e5.isDraped,
        domain: E2.FEATURE
      });
      n8.push(a4);
    }
  }
  _computeScreenSizeDistanceParameters(e5, t4) {
    let r9 = null != this.options ? this.options.distance * ("touch" === t4.pointer ? this.options.touchSensitivityMultiplier : 1) : 0;
    return null == this.view ? {
      x: r9,
      y: r9,
      z: r9,
      distance: r9
    } : "2d" === this.view.type ? (r9 *= this.view.resolution, {
      x: r9,
      y: r9,
      z: r9,
      distance: r9
    }) : this._computeScreenSizeDistanceParameters3D(e5, r9, this.view, t4);
  }
  _computeScreenSizeDistanceParameters3D(e5, t4, r9, a3) {
    const {
      spatialReference: n8
    } = a3;
    r9.renderCoordsHelper.toRenderCoords(e5, n8, D);
    const s5 = r9.state.camera.computeScreenPixelSizeAt(D), i3 = s5 * r9.renderCoordsHelper.unitInMeters, o7 = i3 / W(n8), c4 = i3 / L(n8), p8 = t4 * o7, d8 = t4 * c4, m4 = d6(e5, n8, j, r9), g6 = m4 ? z(m4, e5, o7, 0, 0, r9, a3) : 0, h6 = m4 ? z(m4, e5, 0, o7, 0, r9, a3) : 0, S2 = m4 ? z(m4, e5, 0, 0, c4, r9, a3) : 0;
    return {
      x: 0 === g6 ? 0 : p8 / g6,
      y: 0 === h6 ? 0 : p8 / h6,
      z: 0 === S2 ? 0 : d8 / S2,
      distance: s5 * t4
    };
  }
  _candidateIsExcluded(e5, t4, r9) {
    if (null == r9) return false;
    const a3 = this._getCandidateObjectId(t4);
    if (null == a3) return false;
    const n8 = e5.layerSource.layer;
    return "graphics" === n8.type ? r9.uid === a3 : r9.sourceLayer === n8 && !(!r9.attributes || !("objectIdField" in n8)) && r9.attributes[n8.objectIdField] === a3;
  }
  _getCandidateObjectId(e5) {
    return e5 instanceof n6 ? e5.objectId : null;
  }
  _createSourceInfo(e5, t4) {
    return __async(this, null, function* () {
      const r9 = e5.layer;
      r9.loaded || (yield r9.load(), s(t4));
      const {
        view: a3
      } = this, n8 = yield this._createFeatureSnappingSourceType(e5);
      return s(t4), new f4(null == n8 ? {} : {
        snappingSource: n8,
        view: a3,
        layer: r9
      });
    });
  }
  _createFeatureSnappingSourceType(e5) {
    return __async(this, null, function* () {
      switch (e5.layer.type) {
        case "feature":
        case "geojson":
        case "csv":
        case "oriented-imagery":
        case "subtype-group":
        case "wfs":
          return this._createFeatureSnappingSourceFeatureLayer(e5);
        case "graphics":
          return this._createFeatureSnappingSourceGraphicsLayer(e5);
        case "map-notes":
          return this._createFeatureSnappingSourceMapNotesLayer(e5);
        case "scene":
        case "building-scene":
          return this._createFeatureSnappingSourceSceneLayer(e5);
      }
      return null;
    });
  }
  _createFeatureSnappingSourceSceneLayer(e5) {
    return __async(this, null, function* () {
      const {
        view: t4
      } = this;
      if (null == t4 || "3d" !== t4.type) return null;
      return new (yield this._getSourceModule("scene")).SceneLayerSnappingSource({
        layerSource: e5,
        view: t4
      });
    });
  }
  _createFeatureSnappingSourceFeatureLayer(e5) {
    return __async(this, null, function* () {
      switch (e5.layer.source?.type) {
        case "feature-layer":
        case "oriented-imagery":
          return new (yield this._getSourceModule("featureService")).FeatureServiceSnappingSource({
            spatialReference: this.spatialReference,
            view: this.view,
            layerSource: e5
          });
        case "memory":
        case "csv":
        case "geojson":
        case "wfs":
          if ("mesh" === e5.layer.geometryType) return null;
          return new (yield this._getSourceModule("featureCollection")).FeatureCollectionSnappingSource({
            layerSource: e5,
            view: this.view
          });
      }
      return null;
    });
  }
  _createFeatureSnappingSourceGraphicsLayer(e5) {
    return __async(this, null, function* () {
      return new (yield this._getSourceModule("graphics")).GraphicsSnappingSource({
        getGraphicsLayers: () => [e5.layer],
        spatialReference: this.spatialReference,
        view: this.view,
        layerSource: e5
      });
    });
  }
  _createFeatureSnappingSourceMapNotesLayer(e5) {
    return __async(this, null, function* () {
      return new (yield this._getSourceModule("notes")).GraphicsSnappingSource({
        getGraphicsLayers: () => e5.layer.sublayers?.toArray() ?? [],
        spatialReference: this.spatialReference,
        view: this.view,
        layerSource: e5
      });
    });
  }
  _getSourceModule(e5) {
    return __async(this, null, function* () {
      const t4 = this._sourceModules[e5];
      if (null == t4.loader) {
        const t5 = this._loadSourceModule(e5), r9 = {
          module: null,
          loader: t5
        };
        this._sourceModules[e5] = r9;
        const a3 = yield t5, n8 = {
          module: a3,
          loader: t5
        };
        return this._sourceModules[e5] = n8, a3;
      }
      return null == t4.module ? t4.loader : t4.module;
    });
  }
  _loadSourceModule(e5) {
    const t4 = this._updatingHandles;
    switch (e5) {
      case "featureService":
        return t4.addPromise(import("./FeatureServiceSnappingSource-FLIBGV6B.js"));
      case "featureCollection":
        return t4.addPromise(import("./FeatureCollectionSnappingSource-A7WUBXXF.js"));
      case "graphics":
      case "notes":
        return t4.addPromise(import("./GraphicsSnappingSource-TD64DICF.js"));
      case "scene":
        return t4.addPromise(import("./SceneLayerSnappingSource-MHYLYYCL.js"));
    }
  }
  get test() {
  }
};
function A3(e5) {
  return (e5 instanceof r6 || e5 instanceof r5) && !U(e5);
}
function U({
  constraint: {
    start: e5,
    end: t4
  }
}) {
  const r9 = p(e5, t4), a3 = b(s3(e5), s3(t4));
  return r9 < e2() || a3 / r9 < T;
}
function z(e5, t4, r9, a3, n8, s5, {
  spatialReference: i3
}) {
  const o7 = r(O2, t4);
  o7[0] += r9, o7[1] += a3, o7[2] += n8;
  const c4 = d6(o7, i3, j, s5);
  return c4 ? g3(c4, e5) : 1 / 0;
}
e([y({
  constructOnly: true
})], P.prototype, "spatialReference", void 0), e([y({
  constructOnly: true
})], P.prototype, "view", void 0), e([y()], P.prototype, "options", void 0), e([y({
  readOnly: true
})], P.prototype, "updating", null), e([y()], P.prototype, "_snappingSources", void 0), P = e([a("esri.views.interactive.snapping.FeatureSnappingEngine")], P);
var D = n3();
var O2 = n3();
var T = 1e-4;

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SnappingAlgorithm.js
var l2 = class {
  constructor(e5, t4) {
    this.view = e5, this.options = t4, this.squaredShortLineThreshold = p4.shortLineThreshold * p4.shortLineThreshold;
  }
  snap(e5, t4) {
    return null != t4.vertexHandle ? "vertex" !== t4.vertexHandle.type ? [] : this.snapExistingVertex(e5, t4) : this.snapNewVertex(e5, t4);
  }
  edgeExceedsShortLineThreshold(e5, t4) {
    return this.exceedsShortLineThreshold(N3(e5.leftVertex.pos, this.view, t4), N3(e5.rightVertex.pos, this.view, t4), t4);
  }
  exceedsShortLineThreshold(e5, t4, {
    spatialReference: s5
  }) {
    return 0 === this.squaredShortLineThreshold || d5(d6(t4, s5, j, this.view), d6(e5, s5, j, this.view)) > this.squaredShortLineThreshold;
  }
  isVertical(r9, s5, {
    spatialReference: h6
  }) {
    const n8 = W(h6);
    return m(s3(r9), s3(s5)) * n8 < p4.verticalLineThresholdMeters;
  }
  squaredProximityThreshold(e5) {
    return "touch" === e5 ? this._squaredTouchProximityThreshold : this._squaredMouseProximityThreshold;
  }
  get _squaredMouseProximityThreshold() {
    return this.options.distance * this.options.distance;
  }
  get _squaredTouchProximityThreshold() {
    const {
      distance: e5,
      touchSensitivityMultiplier: t4
    } = this.options, r9 = e5 * t4;
    return r9 * r9;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/LineSnappingCandidate.js
var r7 = class extends t3 {
  constructor({
    lineStart: e5,
    lineEnd: r9,
    targetPoint: o7,
    isDraped: a3
  }) {
    super(o7, new Rt(e5, r9), a3, E2.SELF), this._referenceLineHint = new n5(E3.REFERENCE_EXTENSION, e5, r9, a3, this.domain);
  }
  get hints() {
    return [this._referenceLineHint, new n5(E3.TARGET, this._lineEndClosestToTarget(), this.targetPoint, this.isDraped, this.domain)];
  }
  _lineEndClosestToTarget() {
    return this.constraint.closestEndTo(this.targetPoint);
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/LineSnapper.js
var E4 = class extends l2 {
  snapNewVertex(e5, t4) {
    const r9 = t4.editGeometryOperations.data.components[0], s5 = r9.edges.length, o7 = [];
    if (s5 < 1) return o7;
    const {
      spatialReference: n8
    } = t4, a3 = d6(e5, n8, j, this.view), {
      view: p8
    } = this, d8 = r9.edges[s5 - 1];
    let h6 = d8;
    do {
      if (this.edgeExceedsShortLineThreshold(h6, t4)) {
        const r10 = w(h6, p8, t4);
        this._processCandidateProposal(r10.left, r10.right, e5, a3, t4, o7);
      }
      h6 = h6.leftVertex.leftEdge;
    } while (h6 && h6 !== d8);
    return o7;
  }
  snapExistingVertex(e5, t4) {
    const r9 = [], s5 = t4.vertexHandle, o7 = s5.component;
    if (o7.edges.length < 2) return r9;
    const {
      view: a3
    } = this, {
      spatialReference: p8
    } = t4, d8 = d6(e5, p8, j, a3), h6 = s5.leftEdge, c4 = s5.rightEdge;
    h6 && c4 && this.edgeExceedsShortLineThreshold(h6, t4) && this.edgeExceedsShortLineThreshold(c4, t4) && this._processCandidateProposal(N3(h6.leftVertex.pos, a3, t4), N3(c4.rightVertex.pos, a3, t4), e5, d8, t4, r9);
    const g6 = o7.edges[0];
    let m4 = g6;
    do {
      if (m4 !== s5.leftEdge && m4 !== s5.rightEdge && this.edgeExceedsShortLineThreshold(m4, t4)) {
        const s6 = w(m4, a3, t4);
        this._processCandidateProposal(s6.left, s6.right, e5, d8, t4, r9);
      }
      m4 = m4.rightVertex.rightEdge;
    } while (m4 && m4 !== g6);
    return r9;
  }
  _processCandidateProposal(e5, t4, r9, s5, n8, d8) {
    const {
      spatialReference: l3,
      pointer: g6
    } = n8, m4 = n3();
    v2(m4, e5, t4, r9, n8);
    const u5 = p3(a2(m4));
    d5(s5, d6(u5, l3, j, this.view)) < this.squaredProximityThreshold(g6) && d8.push(new r7({
      lineStart: e5,
      lineEnd: t4,
      targetPoint: u5,
      isDraped: "on-the-ground" === n8.elevationInfo?.mode
    }));
  }
};
function v2(e5, t4, r9, s5, o7) {
  w2(e5, t4, r9, s5, o7) || P2(e5, s5, t4, r9);
}
function w2(o7, i3, n8, a3, {
  spatialReference: p8
}) {
  const d8 = y2(i3, n8, p8, p8);
  if (null == d8) return false;
  const l3 = y2(n8, a3, p8, p8);
  if (null == l3) return false;
  const h6 = u2(n8, a3, p8);
  if (null == h6) return false;
  const c4 = Math.abs(s2.shortestSignedDiff(d8, l3)) > Math.PI / 2 ? r3.normalize(d8 + Math.PI) : d8;
  return M(o7, n8, p8, f(h6, "meters"), o4(c4, "radians", "geographic"), "geodesic"), o7[2] = a3[2], true;
}
function P2(e5, t4, r9, s5) {
  J(t4, {
    start: r9,
    end: s5,
    type: j3.LINE
  }, e5), e5[2] = t4[2];
}

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/ParallelLineSnappingCandidate.js
var g4 = class extends t3 {
  constructor({
    referenceLine: i3,
    lineStart: f7,
    targetPoint: o7,
    isDraped: d8
  }) {
    const h6 = t(f7), {
      left: g6,
      right: p8
    } = i3;
    e3(h6, u(h6, h6, p8), g6), super(o7, new Rt(f7, a2(h6)), d8, E2.SELF), this._referenceLines = [{
      edge: i3,
      fadeLeft: true,
      fadeRight: true
    }];
  }
  get hints() {
    return [new n5(E3.TARGET, this.constraint.start, this.targetPoint, this.isDraped, this.domain), new r4(this.constraint.start, this.targetPoint, this.isDraped, this.domain), ...this._referenceLines.map((e5) => new n5(E3.REFERENCE, e5.edge.left, e5.edge.right, this.isDraped, this.domain, e5.fadeLeft, e5.fadeRight))];
  }
  addReferenceLine(e5) {
    const t4 = {
      edge: e5,
      fadeLeft: true,
      fadeRight: true
    };
    this._referenceLines.forEach((r9) => {
      G(e5.right, r9.edge.left) && (r9.fadeLeft = false, t4.fadeRight = false), G(e5.right, r9.edge.right) && (r9.fadeRight = false, t4.fadeRight = false), G(e5.left, r9.edge.right) && (r9.fadeRight = false, t4.fadeLeft = false), G(e5.left, r9.edge.left) && (r9.fadeLeft = false, t4.fadeLeft = false);
    }), this._referenceLines.push(t4);
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/ParallelLineSnapper.js
var f5 = class extends l2 {
  snapNewVertex(e5, t4) {
    const s5 = t4.editGeometryOperations.data.components[0], o7 = s5.edges.length, n8 = s5.vertices.length, l3 = [];
    if (o7 < 2) return l3;
    const {
      view: a3
    } = this, h6 = d6(e5, t4.spatialReference, j, a3), d8 = N3(s5.vertices[n8 - 1].pos, a3, t4), g6 = N3(s5.vertices[0].pos, a3, t4), f7 = s5.edges[o7 - 1];
    let m4 = f7;
    do {
      if (this.edgeExceedsShortLineThreshold(m4, t4)) {
        const r9 = w(m4, a3, t4);
        this._checkEdgeForParallelLines(r9, d8, e5, h6, t4, l3), this._checkEdgeForParallelLines(r9, g6, e5, h6, t4, l3);
      }
      m4 = m4.leftVertex.leftEdge;
    } while (m4 && m4 !== f7);
    return l3;
  }
  snapExistingVertex(e5, t4) {
    const s5 = [], o7 = t4.vertexHandle, n8 = o7.component;
    if (n8.edges.length < 3) return s5;
    const {
      view: l3
    } = this, a3 = d6(e5, t4.spatialReference, j, l3), h6 = o7.leftEdge, d8 = o7.rightEdge, g6 = n8.vertices[0], f7 = N3(g6.pos, l3, t4), m4 = n8.vertices.length, u5 = n8.vertices[m4 - 1], v3 = N3(u5.pos, l3, t4), x3 = n8.edges[0];
    let E5 = x3;
    do {
      if (E5 !== h6 && E5 !== d8 && this.edgeExceedsShortLineThreshold(E5, t4)) {
        const r9 = w(E5, l3, t4);
        h6 && this._checkEdgeForParallelLines(r9, N3(h6.leftVertex.pos, l3, t4), e5, a3, t4, s5), d8 && this._checkEdgeForParallelLines(r9, N3(d8.rightVertex.pos, l3, t4), e5, a3, t4, s5), o7 === g6 ? this._checkEdgeForParallelLines(r9, v3, e5, a3, t4, s5) : o7 === u5 && this._checkEdgeForParallelLines(r9, f7, e5, a3, t4, s5);
      }
      E5 = E5.rightVertex.rightEdge;
    } while (E5 && E5 !== x3);
    return s5;
  }
  _checkEdgeForParallelLines(t4, i3, a3, c4, f7, v3) {
    const x3 = t4.left, E5 = t4.right;
    if (I(u4, s3(i3), s3(x3), s3(E5)), b(u4, s3(i3)) < p4.parallelLineThreshold) return;
    I(u4, s3(a3), s3(x3), s3(E5), s3(i3));
    const {
      spatialReference: L3,
      pointer: P4
    } = f7, j4 = p3(d4(u4[0], u4[1], a3[2]));
    if (d5(c4, d6(j4, L3, j, this.view)) < this.squaredProximityThreshold(P4)) {
      if (this.isVertical(j4, i3, f7) || this.isVertical(x3, E5, f7)) return;
      if (m3(t4, v3)) return;
      v3.push(new g4({
        referenceLine: t4,
        lineStart: i3,
        targetPoint: j4,
        isDraped: "on-the-ground" === f7.elevationInfo?.mode
      }));
    }
  }
};
function m3(t4, r9) {
  const i3 = t4.left, o7 = t4.right;
  for (const n8 of r9) if (I(u4, s3(o7), s3(n8.constraint.start), s3(n8.constraint.end), s3(i3)), b(u4, s3(o7)) < p4.parallelLineThreshold) return n8.addReferenceLine(t4), true;
  return false;
}
var u4 = n4();

// ../../../node_modules/@arcgis/core/views/interactive/snapping/RightAngleSnapper.js
var R = class extends l2 {
  snapNewVertex(e5, t4) {
    const r9 = t4.editGeometryOperations.data.components[0], i3 = [];
    if (r9.vertices.length < 2) return i3;
    const {
      view: s5
    } = this, n8 = d6(e5, t4.spatialReference, j, s5), o7 = r9.vertices.at(-1);
    this._checkForSnappingCandidate(p7.LastVertex, i3, o7.leftEdge, o7, o7.leftEdge.leftVertex, e5, n8, t4);
    const a3 = r9.vertices[0];
    return this._checkForSnappingCandidate(p7.FirstVertex, i3, a3.rightEdge, a3, a3.rightEdge.rightVertex, e5, n8, t4), i3;
  }
  snapExistingVertex(e5, t4) {
    const r9 = [], i3 = t4.vertexHandle;
    if (i3.component.vertices.length < 3) return r9;
    const {
      view: s5
    } = this, n8 = d6(e5, t4.spatialReference, j, s5), o7 = i3.leftEdge, a3 = i3.rightEdge;
    if (o7?.leftVertex.leftEdge) {
      const i4 = o7.leftVertex.leftEdge;
      this._checkForSnappingCandidate(p7.ExistingEdge, r9, i4, i4.rightVertex, i4.leftVertex, e5, n8, t4);
    }
    if (a3?.rightVertex.rightEdge) {
      const i4 = a3.rightVertex.rightEdge;
      this._checkForSnappingCandidate(p7.ExistingEdge, r9, i4, i4.leftVertex, i4.rightVertex, e5, n8, t4);
    }
    return r9;
  }
  _checkForSnappingCandidate(e5, t4, r9, i3, s5, n8, o7, a3) {
    if (!this.edgeExceedsShortLineThreshold(r9, a3)) return;
    const c4 = this.view, p8 = N3(i3.pos, c4, a3), g6 = N3(s5.pos, c4, a3);
    _2(T2, g6, p8, n8, a3), this._checkForSnappingCandidateAlongProjectedRay(e5, t4, g6, p8, T2, n8, o7, a3);
  }
  _checkForSnappingCandidateAlongProjectedRay(e5, t4, r9, a3, p8, g6, d8, E5) {
    const {
      spatialReference: v3,
      pointer: w3
    } = E5, y3 = e4(M2, s3(g6), s3(a3)), F2 = j2(p8, y3) / p2(p8), R2 = d2(M2, s3(a3), p8, F2), _3 = p3(d4(R2[0], R2[1], g6[2]));
    if (d5(d8, d6(_3, v3, j, this.view)) > this.squaredProximityThreshold(w3) || this.isVertical(_3, a3, E5) || this.isVertical(a3, r9, E5)) return;
    const P4 = q(n3(), a3, p8, Math.sign(F2));
    t4.push(new n7({
      targetPoint: _3,
      constraint: new Et(a3, a2(P4)),
      previousVertex: r9,
      otherVertex: a3,
      otherVertexType: o6.CENTER,
      selfSnappingType: e5,
      isDraped: "on-the-ground" === E5.elevationInfo?.mode
    }));
  }
};
function _2(e5, t4, r9, i3, s5) {
  P3(e5, t4, r9, i3, s5) || U2(e5, t4, r9);
}
function P3(i3, s5, n8, o7, {
  spatialReference: a3
}) {
  const c4 = y2(s5, n8, a3, a3);
  if (null == c4) return false;
  const g6 = y2(n8, o7, a3, a3);
  if (null == g6) return false;
  const l3 = Math.sign(r3.shortestSignedDiff(c4, g6)) * Math.PI * 0.5, f7 = o4(c4 + l3, "radians", "geographic"), d8 = n3(), m4 = u2(n8, o7, a3);
  return null != m4 && (M(d8, n8, a3, f(m4, "meters"), f7, "geodesic"), e3(i3, d8, n8), true);
}
function U2(e5, t4, r9) {
  const s5 = e4(M2, s3(r9), s3(t4));
  o2(e5, s5[1], -s5[0], 0);
}
var M2 = n4();
var T2 = n3();

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/RightAngleTriangleSnappingCandidate.js
var g5 = class extends t3 {
  constructor({
    targetPoint: e5,
    point1: m4,
    point2: a3,
    isDraped: h6
  }) {
    super(e5, new xt(a2(A2(n3(), m4, a3, 0.5)), 0.5 * m(s3(m4), s3(a3))), h6, E2.SELF), this._p1 = m4, this._p2 = a3;
  }
  get hints() {
    return [new n5(E3.REFERENCE, this.targetPoint, this._p1, this.isDraped, this.domain), new n5(E3.REFERENCE, this.targetPoint, this._p2, this.isDraped, this.domain), new s4(this._p1, this.targetPoint, this._p2, this.isDraped, this.domain)];
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/RightAngleTriangleSnapper.js
var h4 = class extends l2 {
  snapNewVertex(e5, t4) {
    const i3 = t4.editGeometryOperations.data.components[0], r9 = [], s5 = i3.vertices.length;
    if ("polygon" !== t4.editGeometryOperations.data.type || s5 < 2) return r9;
    const {
      view: n8
    } = this, p8 = i3.vertices[0], a3 = i3.vertices[s5 - 1], d8 = N3(p8.pos, n8, t4), l3 = N3(a3.pos, n8, t4);
    return this._processCandidateProposal(d8, l3, e5, t4, r9), r9;
  }
  snapExistingVertex(e5, t4) {
    const i3 = [], r9 = t4.vertexHandle, s5 = r9.component;
    if (s5.edges.length < 2) return i3;
    if ("polyline" === t4.editGeometryOperations.data.type && (0 === r9.index || r9.index === s5.vertices.length - 1)) return i3;
    const {
      view: n8
    } = this, p8 = N3(r9.leftEdge.leftVertex.pos, n8, t4), a3 = N3(r9.rightEdge.rightVertex.pos, n8, t4);
    return this._processCandidateProposal(p8, a3, e5, t4, i3), i3;
  }
  _processCandidateProposal(i3, o7, a3, h6, g6) {
    if (!this.exceedsShortLineThreshold(i3, o7, h6)) return;
    const v3 = _(f6, s3(i3), s3(o7), 0.5), x3 = 0.5 * m(s3(i3), s3(o7)), u5 = N2(f6, s3(a3), v3, x3), j4 = p3(d4(u5[0], u5[1], a3[2])), {
      spatialReference: y3,
      pointer: w3
    } = h6, P4 = d6(a3, y3, j, this.view);
    if (d5(P4, d6(j4, y3, j, this.view)) < this.squaredProximityThreshold(w3)) {
      if (this.isVertical(i3, j4, h6) || this.isVertical(j4, o7, h6)) return;
      g6.push(new g5({
        targetPoint: j4,
        point1: i3,
        point2: o7,
        isDraped: "on-the-ground" === h6.elevationInfo?.mode
      }));
    }
  }
};
var f6 = n4();

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SelfSnappingEngine.js
var h5 = class extends S {
  constructor(o7) {
    super(o7), this.updating = false, this._snappers = new V(), this._domain = E2.SELF;
  }
  initialize() {
    this._snappers.push(new f5(this.view, this.options), new E4(this.view, this.options), new R(this.view, this.options), new h4(this.view, this.options));
  }
  set options(o7) {
    this._set("options", o7);
    for (const s5 of this._snappers) s5.options = o7;
  }
  fetchCandidates(o7, s5, t4) {
    return __async(this, null, function* () {
      if (!(s5 & this._domain && this.options.effectiveSelfEnabled)) return [];
      const i3 = [];
      for (const r9 of this._snappers.items) for (const s6 of r9.snap(o7, t4)) i3.push(s6);
      return f2(o7, i3), i3;
    });
  }
};
e([y({
  readOnly: true
})], h5.prototype, "updating", void 0), e([y({
  constructOnly: true
})], h5.prototype, "view", void 0), e([y()], h5.prototype, "options", null), h5 = e([a("esri.views.interactive.snapping.SelfSnappingEngine")], h5);

// ../../../node_modules/@arcgis/core/views/interactive/snapping/snappingFactory.js
function i2(i3, p8) {
  return [new h5({
    view: i3,
    options: p8
  }), new P({
    view: i3,
    options: p8,
    spatialReference: i3.spatialReference
  })];
}

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/IntersectionSnappingCandidate.js
var r8 = class extends t3 {
  constructor(s5, n8, r9, o7) {
    super(s5, new gt(s5), o7, E2.ALL), this.first = n8, this.second = r9;
  }
  get hints() {
    return this.first.targetPoint = this.targetPoint, this.second.targetPoint = this.targetPoint, [...this.first.hints, ...this.second.hints, new o5(this.targetPoint, this.isDraped, this.domain)];
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SnappingManager.js
var I2 = class extends o.EventedMixin(S) {
  constructor(t4) {
    super(t4), this.options = new c3(), this.snappingEnginesFactory = i2, this._engines = [], this._currentMainCandidate = null, this._currentOtherActiveCandidates = [], this._currentSnappedType = x2.MAIN;
  }
  initialize() {
    this.addHandles([d(() => {
      const {
        effectiveFeatureEnabled: t4,
        effectiveSelfEnabled: e5,
        touchSensitivityMultiplier: n8,
        distance: i3
      } = this.options;
      return {
        effectiveFeatureEnabled: t4,
        effectiveSelfEnabled: e5,
        touchSensitivityMultiplier: n8,
        distance: i3
      };
    }, () => {
      this.doneSnapping(), this.emit("changed");
    }, C), d(() => this.options, (t4) => {
      for (const e5 of this._engines) e5.options = t4;
    }, C), d(() => ({
      viewReady: this.view.ready,
      viewSpatialReference: this.view.spatialReference,
      snappingEnginesFactory: this.snappingEnginesFactory
    }), ({
      viewReady: t4,
      snappingEnginesFactory: e5
    }) => this._recreateEngines(t4, e5), A)]);
  }
  destroy() {
    this._destroyEngines();
  }
  get updating() {
    return this._engines.some((t4) => t4.updating);
  }
  _recreateEngines(t4, e5) {
    if (this._destroyEngines(), !t4) return;
    const {
      view: n8,
      options: i3
    } = this;
    this._engines = e5(n8, i3);
  }
  _destroyEngines() {
    for (const t4 of this._engines) t4.destroy();
    this._engines = [];
  }
  get _squaredMouseProximityThreshold() {
    return this.options.distance * this.options.distance;
  }
  get _squaredTouchProximityThreshold() {
    const {
      distance: t4,
      touchSensitivityMultiplier: e5
    } = this.options, n8 = t4 * e5;
    return n8 * n8;
  }
  snap(t4) {
    return H(t4) ? this._snapMultiPoint(t4) : this._snapSinglePoint(t4);
  }
  update(t4) {
    const {
      point: e5,
      context: n8
    } = t4;
    this._removeVisualization();
    const i3 = this._currentMainCandidate;
    if (null == i3) return e5;
    const s5 = this._selectUpdateInput(t4);
    if (null == s5) return e5;
    const {
      spatialReference: r9
    } = n8, a3 = K(s5, r9);
    if (null == a3) return e5;
    const {
      view: o7
    } = this, {
      elevationInfo: p8,
      visualizer: d8
    } = n8, h6 = [], g6 = E(a3, o7, p8), _3 = i3.constraint.closestTo(g6);
    if (!this._arePointsWithinScreenThreshold(g6, _3, n8) || !F(i3, n8.drawConstraints)) return this._resetSnappingState(), e5;
    i3.targetPoint = p3(_3), h6.push(...i3.hints);
    for (const c4 of this._currentOtherActiveCandidates) F(c4, n8.drawConstraints) && (c4.targetPoint = p3(_3), h6.push(...c4.hints));
    return null != d8 && this.addHandles(d8.draw(h6, {
      spatialReference: r9,
      elevationInfo: L2(n8),
      view: o7,
      selfSnappingZ: n8.selfSnappingZ
    }), A4), h2(_3, o7, e5, n8);
  }
  doneSnapping() {
    this._removeVisualization(), this._resetSnappingState();
  }
  _selectUpdateInput({
    point: t4,
    scenePoint: e5
  }) {
    switch (this._currentSnappedType) {
      case x2.MAIN:
        return t4;
      case x2.SCENE:
        return e5;
    }
  }
  _resetSnappingState() {
    this._currentMainCandidate = null, this._currentOtherActiveCandidates = [], this._currentSnappedType = x2.MAIN;
  }
  _removeVisualization() {
    this.removeHandles(A4);
  }
  _snapSinglePoint(_0) {
    return __async(this, arguments, function* ({
      point: t4,
      context: e5,
      signal: n8
    }) {
      const {
        view: i3
      } = this, {
        elevationInfo: s5
      } = e5, r9 = E(t4, i3, s5), a3 = yield this._fetchCandidates(r9, E2.ALL, e5, n8);
      return this._createSnapResult(r9, x2.MAIN, a3, i3, t4, e5, n8);
    });
  }
  _snapMultiPoint(_0) {
    return __async(this, arguments, function* ({
      point: t4,
      scenePoint: e5,
      context: n8,
      signal: i3
    }) {
      const {
        view: s5
      } = this, {
        coordinateHelper: r9,
        elevationInfo: a3,
        spatialReference: o7
      } = n8;
      yield N(e5.spatialReference, o7);
      const p8 = K(e5, o7), h6 = E(p8, s5, a3), u5 = yield this._fetchCandidates(h6, E2.FEATURE, n8, i3);
      if (u5.length > 0) {
        const t5 = yield this._fetchCandidates(h6, E2.SELF, n8, i3);
        return this._createSnapResult(h6, x2.SCENE, [...u5, ...t5], s5, p8, n8, i3);
      }
      const f7 = E(t4, s5, a3), g6 = yield this._fetchCandidates(f7, E2.SELF, n8, i3);
      return this._createSnapResult(f7, x2.MAIN, g6, s5, {
        z: r9.hasZ() && t4.hasZ ? t4.z ?? 0 : void 0,
        m: r9.hasM() && t4.hasM ? t4.m ?? 0 : void 0
      }, n8, i3);
    });
  }
  _fetchCandidates(t4, e5, n8, i3) {
    return __async(this, null, function* () {
      return (yield Promise.all(this._engines.map((s5) => s5.fetchCandidates(t4, e5, n8, i3)))).flat();
    });
  }
  _createSnapResult(t4, e5, n8, s5, r9, a3, o7) {
    return {
      get valid() {
        return !c(o7);
      },
      apply: () => {
        const {
          spatialReference: i3
        } = a3, {
          snappedPoint: o8,
          hints: p8
        } = this._processCandidates(t4, e5, n8, a3);
        return this._removeVisualization(), null != a3.visualizer && this.addHandles(a3.visualizer.draw(p8, {
          spatialReference: i3,
          elevationInfo: j,
          view: s5,
          selfSnappingZ: a3.selfSnappingZ
        }), A4), h2(o8, s5, r9, a3);
      }
    };
  }
  _processCandidates(t4, e5, n8, i3) {
    if (n8.length < 1) return this.doneSnapping(), {
      snappedPoint: t4,
      hints: []
    };
    this._currentSnappedType !== e5 && this._resetSnappingState(), f2(t4, n8);
    const s5 = this._currentMainCandidate;
    if (null != s5) {
      const r9 = N4(s5, n8);
      if (r9 >= 0) {
        if (!(n8[r9] instanceof r8)) return this._intersectWithOtherCandidates(r9, n8, t4, e5, i3);
        if (this._arePointsWithinScreenThreshold(t4, s5.targetPoint, i3)) return this._updateSnappingCandidate(s5, e5, n8, i3);
      }
    }
    return this._intersectWithOtherCandidates(0, n8, t4, e5, i3);
  }
  _intersectWithOtherCandidates(t4, e5, n8, i3, s5) {
    const {
      coordinateHelper: r9
    } = s5, a3 = e5[t4], o7 = [];
    for (let p8 = 0; p8 < e5.length; ++p8) {
      if (p8 === t4) continue;
      const i4 = e5[p8], s6 = a3.constraint.intersect(i4.constraint);
      if (s6) for (const t5 of s6.closestPoints(a3.targetPoint)) o7.push([new r8(p3(t5), a3, i4, i4.isDraped), this._squaredScreenDistance(n8, t5, r9)]);
    }
    return o7.length > 0 && (o7.sort((t5, e6) => t5[1] - e6[1]), o7[0][1] < this._squaredPointProximityThreshold(s5.pointer)) ? this._updateSnappingCandidate(o7[0][0], i3, e5, s5) : F(a3, s5.drawConstraints) ? this._updateSnappingCandidate(a3, i3, e5, s5) : {
      snappedPoint: n8,
      hints: []
    };
  }
  _updateSnappingCandidate(t4, e5, n8, i3) {
    this.doneSnapping(), this._currentMainCandidate = t4, this._currentSnappedType = e5;
    const s5 = this._currentMainCandidate.targetPoint, r9 = [];
    r9.push(...t4.hints);
    for (const a3 of n8) {
      if (t4 instanceof r8) {
        if (a3.constraint.equals(t4.first.constraint) || a3.constraint.equals(t4.second.constraint)) continue;
      } else if (a3.constraint.equals(t4.constraint)) continue;
      const e6 = a3.constraint.closestTo(s5);
      this._squaredScreenDistance(e6, s5, i3.coordinateHelper) < z2() && (a3.targetPoint = s5, this._currentOtherActiveCandidates.push(a3), r9.push(...a3.hints));
    }
    return {
      snappedPoint: s5,
      hints: r9
    };
  }
  _squaredPointProximityThreshold(t4) {
    return "touch" === t4 ? this._squaredTouchProximityThreshold : this._squaredMouseProximityThreshold;
  }
  _arePointsWithinScreenThreshold(t4, e5, n8) {
    return this._squaredScreenDistance(t4, e5, n8.coordinateHelper) < this._squaredPointProximityThreshold(n8.pointer);
  }
  _squaredScreenDistance(t4, e5, n8) {
    return d5(this._toScreen(t4, n8), this._toScreen(e5, n8));
  }
  _toScreen(t4, e5) {
    return d6(t4, e5.spatialReference, j, this.view);
  }
  get test() {
  }
};
var x2;
e([y({
  constructOnly: true
})], I2.prototype, "view", void 0), e([y()], I2.prototype, "options", void 0), e([y({
  readOnly: true
})], I2.prototype, "updating", null), e([y()], I2.prototype, "snappingEnginesFactory", void 0), e([y()], I2.prototype, "_engines", void 0), e([y()], I2.prototype, "_squaredMouseProximityThreshold", null), e([y()], I2.prototype, "_squaredTouchProximityThreshold", null), I2 = e([a("esri.views.interactive.snapping.SnappingManager")], I2), function(t4) {
  t4[t4.MAIN = 0] = "MAIN", t4[t4.SCENE = 1] = "SCENE";
}(x2 || (x2 = {}));
var A4 = "visualization-handle";
function z2() {
  return p4.satisfiesConstraintScreenThreshold * p4.satisfiesConstraintScreenThreshold;
}
function F(t4, e5) {
  return !e5 || null == e5.direction && null == e5.distance || !(t4 instanceof r5 || t4 instanceof r6 || t4 instanceof r7 || t4 instanceof g4 || t4 instanceof g5) && (!(t4 instanceof n7) || null == e5.direction && t4.selfSnappingType === p7.LastVertex);
}
function N4(t4, e5) {
  return t4 instanceof r8 ? O3(e5, t4.first) >= 0 && O3(e5, t4.second) >= 0 ? 0 : -1 : O3(e5, t4);
}
function O3(t4, e5) {
  let n8 = -1;
  for (let i3 = 0; i3 < t4.length; ++i3) if (e5.constraint.equals(t4[i3].constraint)) {
    n8 = i3;
    break;
  }
  return n8;
}
function H(t4) {
  return null != t4.scenePoint;
}
function L2({
  coordinateHelper: t4,
  elevationInfo: e5
}) {
  return t4.hasZ() ? j : e5;
}

export {
  p5 as p,
  c3 as c,
  P,
  I2 as I
};
//# sourceMappingURL=chunk-STVIJ4IV.js.map
