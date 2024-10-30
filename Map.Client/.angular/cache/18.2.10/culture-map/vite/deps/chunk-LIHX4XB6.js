import {
  d as d2
} from "./chunk-D2ARYYTS.js";
import {
  A
} from "./chunk-MID6GR72.js";
import {
  C,
  L
} from "./chunk-3RL4VAAQ.js";
import {
  $,
  Z,
  w
} from "./chunk-6MR4UDDL.js";
import {
  i
} from "./chunk-YTFX4PFO.js";
import {
  l as l2
} from "./chunk-DSMB46HB.js";
import {
  e as e2
} from "./chunk-73Y7XDLH.js";
import {
  t as t3
} from "./chunk-634JLXD4.js";
import {
  l
} from "./chunk-L3T5PF4P.js";
import {
  j
} from "./chunk-SJX5DIA7.js";
import {
  t
} from "./chunk-SG5TCCCK.js";
import {
  s as s2
} from "./chunk-DCMO5DPK.js";
import {
  t as t2
} from "./chunk-UWJIHV6Q.js";
import {
  b as b2
} from "./chunk-ZUSCOMQM.js";
import {
  b,
  c,
  d,
  y as y2
} from "./chunk-DSEUCBVP.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  f as f3
} from "./chunk-M2NS3MSU.js";
import {
  o as o2
} from "./chunk-4ZZRP4MA.js";
import {
  n as n3
} from "./chunk-5I6J67HP.js";
import {
  m
} from "./chunk-BDM2D6IC.js";
import {
  n as n2
} from "./chunk-EDSMXTFO.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  U,
  V as V2
} from "./chunk-SYATLP3H.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3
} from "./chunk-DDYVXG4F.js";
import {
  a as a2
} from "./chunk-HJY2YILU.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfo.js
var e3 = class extends f {
  constructor() {
    super(...arguments), this.type = null;
  }
};
e([y({
  type: String,
  readOnly: true,
  json: {
    write: true
  }
})], e3.prototype, "type", void 0), e3 = e([a3("esri.layers.support.BuildingFilterAuthoringInfo")], e3);
var p = e3;

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoType.js
var i2;
var p2 = i2 = class extends f {
  constructor() {
    super(...arguments), this.filterType = null, this.filterValues = null;
  }
  clone() {
    return new i2({
      filterType: this.filterType,
      filterValues: a(this.filterValues)
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p2.prototype, "filterType", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], p2.prototype, "filterValues", void 0), p2 = i2 = e([a3("esri.layers.support.BuildingFilterAuthoringInfoType")], p2);
var l3 = p2;

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoBlock.js
var c2;
var l4 = V.ofType(l3);
var m2 = c2 = class extends f {
  clone() {
    return new c2({
      filterTypes: a(this.filterTypes)
    });
  }
};
e([y({
  type: l4,
  json: {
    write: true
  }
})], m2.prototype, "filterTypes", void 0), m2 = c2 = e([a3("esri.layers.support.BuildingFilterAuthoringInfoBlock")], m2);
var n4 = m2;

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoCheckbox.js
var p3;
var l5 = V.ofType(n4);
var n5 = p3 = class extends p {
  constructor() {
    super(...arguments), this.type = "checkbox";
  }
  clone() {
    return new p3({
      filterBlocks: a(this.filterBlocks)
    });
  }
};
e([y({
  type: ["checkbox"]
})], n5.prototype, "type", void 0), e([y({
  type: l5,
  json: {
    write: true
  }
})], n5.prototype, "filterBlocks", void 0), n5 = p3 = e([a3("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")], n5);
var m3 = n5;

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilterMode.js
var t4 = class extends f {
};
e([y({
  readOnly: true,
  json: {
    read: false
  }
})], t4.prototype, "type", void 0), t4 = e([a3("esri.layers.support.BuildingFilterMode")], t4);
var p4 = t4;

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilterModeSolid.js
var t5;
var p5 = t5 = class extends p4 {
  constructor() {
    super(...arguments), this.type = "solid";
  }
  clone() {
    return new t5();
  }
};
e([y({
  type: ["solid"],
  readOnly: true,
  json: {
    write: true
  }
})], p5.prototype, "type", void 0), p5 = t5 = e([a3("esri.layers.support.BuildingFilterModeSolid")], p5);
var i3 = p5;

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilterModeWireFrame.js
var c3;
var m4 = c3 = class extends p4 {
  constructor() {
    super(...arguments), this.type = "wire-frame", this.edges = null;
  }
  clone() {
    return new c3({
      edges: a(this.edges)
    });
  }
};
e([o2({
  wireFrame: "wire-frame"
})], m4.prototype, "type", void 0), e([y(t3)], m4.prototype, "edges", void 0), m4 = c3 = e([a3("esri.layers.support.BuildingFilterModeWireFrame")], m4);
var a4 = m4;

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilterModeXRay.js
var t6;
var p6 = t6 = class extends p4 {
  constructor() {
    super(...arguments), this.type = "x-ray";
  }
  clone() {
    return new t6();
  }
};
e([y({
  type: ["x-ray"],
  readOnly: true,
  json: {
    write: true
  }
})], p6.prototype, "type", void 0), p6 = t6 = e([a3("esri.layers.support.BuildingFilterModeXRay")], p6);
var c4 = p6;

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilterBlock.js
var d3;
var a5 = {
  nonNullable: true,
  types: {
    key: "type",
    base: p4,
    typeMap: {
      solid: i3,
      "wire-frame": a4,
      "x-ray": c4
    }
  },
  json: {
    read: (e4) => {
      switch (e4?.type) {
        case "solid":
          return i3.fromJSON(e4);
        case "wireFrame":
          return a4.fromJSON(e4);
        case "x-ray":
          return c4.fromJSON(e4);
        default:
          return;
      }
    },
    write: {
      enabled: true,
      isRequired: true
    }
  }
};
var m5 = d3 = class extends f {
  constructor() {
    super(...arguments), this.filterExpression = null, this.filterMode = new i3(), this.title = "";
  }
  clone() {
    return new d3({
      filterExpression: this.filterExpression,
      filterMode: a(this.filterMode),
      title: this.title
    });
  }
};
e([y({
  type: String,
  json: {
    write: {
      enabled: true,
      isRequired: true
    }
  }
})], m5.prototype, "filterExpression", void 0), e([y(a5)], m5.prototype, "filterMode", void 0), e([y({
  type: String,
  json: {
    write: {
      enabled: true,
      isRequired: true
    }
  }
})], m5.prototype, "title", void 0), m5 = d3 = e([a3("esri.layers.support.BuildingFilterBlock")], m5);
var c5 = m5;

// ../../../node_modules/@arcgis/core/layers/support/BuildingFilter.js
var d4;
var u = V.ofType(c5);
var m6 = d4 = class extends f {
  constructor() {
    super(...arguments), this.description = null, this.filterBlocks = null, this.id = n3(), this.name = null;
  }
  clone() {
    return new d4({
      description: this.description,
      filterBlocks: a(this.filterBlocks),
      id: this.id,
      name: this.name,
      filterAuthoringInfo: a(this.filterAuthoringInfo)
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], m6.prototype, "description", void 0), e([y({
  type: u,
  json: {
    write: {
      enabled: true,
      isRequired: true
    }
  }
})], m6.prototype, "filterBlocks", void 0), e([y({
  types: {
    key: "type",
    base: p,
    typeMap: {
      checkbox: m3
    }
  },
  json: {
    read: (o3) => "checkbox" === o3?.type ? m3.fromJSON(o3) : null,
    write: true
  }
})], m6.prototype, "filterAuthoringInfo", void 0), e([y({
  type: String,
  constructOnly: true,
  json: {
    write: {
      enabled: true,
      isRequired: true
    }
  }
})], m6.prototype, "id", void 0), e([y({
  type: String,
  json: {
    write: {
      enabled: true,
      isRequired: true
    }
  }
})], m6.prototype, "name", void 0), m6 = d4 = e([a3("esri.layers.support.BuildingFilter")], m6);
var f4 = m6;

// ../../../node_modules/@arcgis/core/layers/support/BuildingSummaryStatistics.js
var p7 = class extends f {
  constructor() {
    super(...arguments), this.fieldName = null, this.modelName = null, this.label = null, this.min = null, this.max = null, this.mostFrequentValues = null, this.subLayerIds = null;
  }
};
e([y({
  type: String
})], p7.prototype, "fieldName", void 0), e([y({
  type: String
})], p7.prototype, "modelName", void 0), e([y({
  type: String
})], p7.prototype, "label", void 0), e([y({
  type: Number
})], p7.prototype, "min", void 0), e([y({
  type: Number
})], p7.prototype, "max", void 0), e([y({
  json: {
    read: (e4) => Array.isArray(e4) && (e4.every((e5) => "string" == typeof e5) || e4.every((e5) => "number" == typeof e5)) ? e4.slice() : null
  }
})], p7.prototype, "mostFrequentValues", void 0), e([y({
  type: [Number]
})], p7.prototype, "subLayerIds", void 0), p7 = e([a3("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")], p7);
var n6 = class extends m.LoadableMixin(n2(f)) {
  constructor() {
    super(...arguments), this.url = null;
  }
  get fields() {
    return this.loaded || "loading" === this.loadStatus ? this._get("fields") : (n.getLogger(this).error("building summary statistics are not loaded"), null);
  }
  load(e4) {
    const t7 = null != e4 ? e4.signal : null;
    return this.addResolvingPromise(this._fetchService(t7)), Promise.resolve(this);
  }
  _fetchService(e4) {
    return __async(this, null, function* () {
      const r = (yield U(this.url, {
        query: {
          f: "json"
        },
        responseType: "json",
        signal: e4
      })).data;
      this.read(r, {
        origin: "service"
      });
    });
  }
};
e([y({
  constructOnly: true,
  type: String
})], n6.prototype, "url", void 0), e([y({
  readOnly: true,
  type: [p7],
  json: {
    read: {
      source: "summary"
    }
  }
})], n6.prototype, "fields", null), n6 = e([a3("esri.layers.support.BuildingSummaryStatistics")], n6);
var u2 = n6;

// ../../../node_modules/@arcgis/core/layers/BuildingSceneLayer.js
var C2 = V.ofType(f4);
var R = a(d2.sublayersProperty);
var U2 = R.json?.origins;
U2 && (U2["web-scene"] = {
  type: [A],
  write: {
    enabled: true,
    overridePolicy: () => ({
      enabled: false
    })
  }
}, U2["portal-item"] = {
  type: [A],
  write: {
    enabled: true,
    overridePolicy: () => ({
      enabled: false
    })
  }
});
var M = class extends L(l2(b2(j(t2(S(e2(i(f3)))))))) {
  constructor(e4) {
    super(e4), this.operationalLayerType = "BuildingSceneLayer", this.allSublayers = new l({
      getCollections: () => [this.sublayers],
      getChildrenFunction: (e5) => "building-group" === e5.type ? e5.sublayers : null
    }), this.sublayers = null, this._sublayerOverrides = null, this.filters = new C2(), this.activeFilterId = null, this.summaryStatistics = null, this.outFields = null, this.legendEnabled = true, this.type = "building-scene";
  }
  normalizeCtorArgs(e4) {
    return "string" == typeof e4 ? {
      url: e4
    } : e4 ?? {};
  }
  destroy() {
    this.allSublayers.destroy();
  }
  readSublayers(e4, r, t7) {
    const s3 = d2.readSublayers(e4, r, t7);
    return d2.forEachSublayer(s3, (e5) => e5.layer = this), this._sublayerOverrides && (this.applySublayerOverrides(s3, this._sublayerOverrides), this._sublayerOverrides = null), s3;
  }
  applySublayerOverrides(e4, {
    overrides: r,
    context: t7
  }) {
    d2.forEachSublayer(e4, (e5) => e5.read(r.get(e5.id), t7));
  }
  readSublayerOverrides(e4, r) {
    const t7 = /* @__PURE__ */ new Map();
    for (const i4 of e4) null != i4 && "object" == typeof i4 && "number" == typeof i4.id ? t7.set(i4.id, i4) : r.messages?.push(new s("building-scene-layer:invalid-sublayer-override", "Invalid value for sublayer override. Not an object or no id specified.", {
      value: i4
    }));
    return {
      overrides: t7,
      context: r
    };
  }
  writeSublayerOverrides(e4, r, t7) {
    const s3 = [];
    d2.forEachSublayer(this.sublayers, (e5) => {
      const r2 = e5.write({}, t7);
      Object.keys(r2).length > 1 && s3.push(r2);
    }), s3.length > 0 && (r.sublayers = s3);
  }
  writeUnappliedOverrides(e4, r) {
    r.sublayers = [], e4.overrides.forEach((e5) => {
      r.sublayers.push(a(e5));
    });
  }
  write(e4, r) {
    return e4 = super.write(e4, r), !r || "web-scene" !== r.origin && "portal-item" !== r.origin || (this.sublayers ? this.writeSublayerOverrides(this.sublayers, e4, r) : this._sublayerOverrides && this.writeUnappliedOverrides(this._sublayerOverrides, e4)), e4;
  }
  read(e4, r) {
    if (super.read(e4, r), r && ("web-scene" === r.origin || "portal-item" === r.origin) && null != e4 && Array.isArray(e4.sublayers)) {
      const t7 = this.readSublayerOverrides(e4.sublayers, r);
      this.sublayers ? this.applySublayerOverrides(this.sublayers, t7) : this._sublayerOverrides = t7;
    }
  }
  readSummaryStatistics(e4, r) {
    if ("string" == typeof r.statisticsHRef) {
      const e5 = V2(this.parsedUrl?.path, r.statisticsHRef);
      return new u2({
        url: e5
      });
    }
    return null;
  }
  set elevationInfo(e4) {
    this._set("elevationInfo", e4), this._validateElevationInfo();
  }
  load(e4) {
    const r = null != e4 ? e4.signal : null, t7 = this.loadFromPortal({
      supportedTypes: ["Scene Service"]
    }, e4).catch(a2).then(() => this._fetchService(r)).then(() => this._fetchAssociatedFeatureService(r));
    return this.addResolvingPromise(t7), Promise.resolve(this);
  }
  loadAll() {
    return t(this, (e4) => {
      d2.forEachSublayer(this.sublayers, (r) => {
        "building-group" !== r.type && e4(r);
      }), this.summaryStatistics && e4(this.summaryStatistics);
    });
  }
  saveAs(e4, r) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(C.SAVE_AS, __spreadProps(__spreadValues({}, r), {
        getTypeKeywords: () => this._getTypeKeywords(),
        portalItemLayerType: "building-scene"
      }), e4);
    });
  }
  save() {
    return __async(this, null, function* () {
      const e4 = {
        getTypeKeywords: () => this._getTypeKeywords(),
        portalItemLayerType: "building-scene"
      };
      return this._debouncedSaveOperations(C.SAVE, e4);
    });
  }
  validateLayer(e4) {
    if (!e4.layerType || "Building" !== e4.layerType) throw new s("buildingscenelayer:layer-type-not-supported", "BuildingSceneLayer does not support this layer type", {
      layerType: e4.layerType
    });
  }
  _getTypeKeywords() {
    return ["Building"];
  }
  _fetchAssociatedFeatureService(e4) {
    return __async(this, null, function* () {
      try {
        const {
          portalItem: r
        } = yield s2(`${this.url}/layers/${this.layerId}`, {
          sceneLayerItem: this.portalItem,
          customParameters: this.customParameters,
          apiKey: this.apiKey,
          signal: e4
        });
        this.associatedFeatureServiceItem = r;
      } catch (r) {
        n.getLogger(this).warn("Associated feature service item could not be loaded", r);
      }
    });
  }
  _validateElevationInfo() {
    const e4 = this.elevationInfo, r = "Building scene layers";
    $(n.getLogger(this), Z(r, "absolute-height", e4)), $(n.getLogger(this), w(r, e4));
  }
};
e([y({
  type: ["BuildingSceneLayer"]
})], M.prototype, "operationalLayerType", void 0), e([y({
  readOnly: true
})], M.prototype, "allSublayers", void 0), e([y(R)], M.prototype, "sublayers", void 0), e([o("service", "sublayers")], M.prototype, "readSublayers", null), e([y({
  type: C2,
  nonNullable: true,
  json: {
    write: true
  }
})], M.prototype, "filters", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], M.prototype, "activeFilterId", void 0), e([y({
  readOnly: true,
  type: u2
})], M.prototype, "summaryStatistics", void 0), e([o("summaryStatistics", ["statisticsHRef"])], M.prototype, "readSummaryStatistics", null), e([y({
  type: [String],
  json: {
    read: false
  }
})], M.prototype, "outFields", void 0), e([y(b)], M.prototype, "fullExtent", void 0), e([y(y2)], M.prototype, "legendEnabled", void 0), e([y({
  type: ["show", "hide", "hide-children"]
})], M.prototype, "listMode", void 0), e([y(c(f2))], M.prototype, "spatialReference", void 0), e([y(d)], M.prototype, "elevationInfo", null), e([y({
  json: {
    read: false
  },
  readOnly: true
})], M.prototype, "type", void 0), e([y()], M.prototype, "associatedFeatureServiceItem", void 0), M = e([a3("esri.layers.BuildingSceneLayer")], M);
var H = M;

export {
  i3 as i,
  c4 as c,
  c5 as c2,
  f4 as f,
  H
};
//# sourceMappingURL=chunk-LIHX4XB6.js.map
