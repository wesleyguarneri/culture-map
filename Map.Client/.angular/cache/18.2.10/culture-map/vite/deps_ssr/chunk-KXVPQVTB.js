import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l
} from "./chunk-ARN5GJBK.js";
import {
  y as y3
} from "./chunk-MPLS4PY6.js";
import {
  w
} from "./chunk-AGBPYPP3.js";
import {
  p as p2
} from "./chunk-GZ64OOAB.js";
import {
  A,
  j,
  p,
  v as v2
} from "./chunk-WR2NVDOI.js";
import {
  r as r2
} from "./chunk-JTDKNK44.js";
import {
  B,
  j as j2
} from "./chunk-EKHRAAS6.js";
import {
  Z
} from "./chunk-5R3HARKC.js";
import {
  e as e2
} from "./chunk-BKSTWG4S.js";
import {
  d
} from "./chunk-ZREJ3Y2F.js";
import {
  i as i2
} from "./chunk-DL2B6IFJ.js";
import {
  S
} from "./chunk-IUPJR3FF.js";
import {
  y as y2
} from "./chunk-TGZW6QWO.js";
import {
  d as d2
} from "./chunk-OYIDHTXG.js";
import {
  u as u3
} from "./chunk-KUBMHTYA.js";
import {
  a as a3,
  c,
  e as e3
} from "./chunk-E5NWFBZG.js";
import {
  o
} from "./chunk-6EIBUVMG.js";
import {
  h2 as h,
  w2
} from "./chunk-I2TVVMQ6.js";
import {
  i as i3,
  u as u4
} from "./chunk-JKPUNUQA.js";
import {
  o as o2
} from "./chunk-VYTPFEL2.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  s as s3
} from "./chunk-66YQWHHE.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  i,
  v
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2,
  s3 as s2,
  t,
  u2 as u,
  u3 as u2
} from "./chunk-UDMPWVPF.js";
import {
  b
} from "./chunk-AIZ3T7E3.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/renderers/support/DictionaryLoader.js
var p3 = "esri.renderers.support.DictionaryLoader";
var d3 = {
  type: "CIMSimpleLineCallout",
  lineSymbol: {
    type: "CIMLineSymbol",
    symbolLayers: [{
      type: "CIMSolidStroke",
      width: 0.5,
      color: [0, 0, 0, 255]
    }]
  }
};
var g = class {
  constructor(e5, t3, i6) {
    this.config = null, this.fieldMap = null, this.url = null, this._ongoingRequests = /* @__PURE__ */ new Map(), this._symbolCache = new e2(100), this._dictionaryVersion = null, this._fieldIndex = null, this._dictionaryPromise = null, this.url = e5, this.config = t3, this.fieldMap = i6;
  }
  getSymbolFields() {
    return this._symbolFields;
  }
  getSymbolAsync(t3, i6) {
    return __async(this, null, function* () {
      let s5;
      this._dictionaryPromise || (this._dictionaryPromise = this.fetchResources(i6));
      try {
        s5 = yield this._dictionaryPromise;
      } catch (f4) {
        if (b(f4)) return this._dictionaryPromise = null, null;
      }
      const r3 = this._dictionaryVersion?.since(4, 0), o4 = {};
      if (this.fieldMap) for (const e5 of this._symbolFields) {
        const i7 = B(this.fieldMap[e5], this._fieldIndex);
        if (i7) {
          const s6 = t3.attributes[i7];
          o4[e5] = r3 ? s6 : null != s6 ? "" + t3.attributes[i7] : "";
        } else o4[e5] = "";
      }
      let l2 = null;
      try {
        l2 = s5?.(o4, i6);
      } catch (y5) {
        return null;
      }
      if (!l2 || "string" != typeof l2 || "invalid" === l2) return null;
      const a4 = l2.split(";"), c5 = [], m3 = [];
      for (const n3 of a4) if (n3) if (n3.includes("po:")) {
        const t4 = n3.substr(3).split("|");
        if (3 === t4.length) {
          const i7 = t4[0], s6 = t4[1];
          let r4 = t4[2];
          if ("DashTemplate" === s6) r4 = r4.split(" ").map((e5) => Number(e5));
          else if ("Color" === s6) {
            const t5 = new u3(r4).toRgba();
            r4 = [t5[0], t5[1], t5[2], 255 * t5[3]];
          } else r4 = Number(r4);
          m3.push({
            primitiveName: i7,
            propertyName: s6,
            value: r4,
            defaultValue: null
          });
        }
      } else if (n3.includes("|")) {
        for (const e5 of n3.split("|")) if (this._itemNames.has(e5)) {
          c5.push(e5);
          break;
        }
      } else this._itemNames.has(n3) && c5.push(n3);
      const u8 = null == t3.geometry || !t3.geometry.hasZ && "point" === t3.geometry.type;
      return this._cimPartsToCIMSymbol(t3, c5, m3, u8, i6);
    });
  }
  fetchResources(e5) {
    return __async(this, null, function* () {
      if (this._dictionaryPromise) return this._dictionaryPromise;
      if (!this.url) return void n.getLogger(p3).error("no valid URL!");
      const s5 = U(this.url + "/resources/styles/dictionary-info.json", {
        responseType: "json",
        query: {
          f: "json"
        },
        signal: null != e5 ? e5.signal : null
      }), [{
        data: o4
      }] = yield Promise.all([s5, i3()]);
      if (!o4) throw this._dictionaryPromise = null, new s("esri.renderers.DictionaryRenderer", "Bad dictionary data!");
      const {
        authoringInfo: n3,
        dictionary_version: u8,
        expression: f4,
        itemsNames: h3
      } = o4, y5 = f4;
      let d5 = false;
      u8 && (this._dictionaryVersion = r2.parse(u8), d5 = this._dictionaryVersion.since(4, 0)), this._refSymbolUrlTemplate = this.url + "/" + o4.cimRefTemplateUrl, this._itemNames = new Set(h3), this._symbolFields = n3.symbol;
      const g2 = {};
      if (this.config) {
        const e6 = this.config;
        for (const t3 in e6) g2[t3] = e6[t3];
      }
      if (n3.configuration) for (const t3 of n3.configuration) g2.hasOwnProperty(t3.name) || (g2[t3.name] = t3.value);
      const _2 = [];
      if (e5?.fields && this.fieldMap) for (const t3 in this.fieldMap) {
        const i6 = this.fieldMap[t3], s6 = e5.fields.filter((e6) => e6.name.toLowerCase() === i6?.toLowerCase());
        s6.length > 0 && _2.push(__spreadProps(__spreadValues({}, s6[0]), {
          type: d5 ? s6[0].type : "esriFieldTypeString"
        }));
      }
      _2.length > 0 && (this._fieldIndex = new Z(_2));
      const b2 = u4(y5, null != e5 ? e5.spatialReference : null, _2, g2).then((e6) => {
        const t3 = {
          scale: 0
        };
        return (i6, s6) => {
          if (null == e6) return null;
          const r3 = e6.repurposeFeature({
            geometry: null,
            attributes: i6
          });
          return t3.scale = null != s6 ? s6.scale ?? void 0 : void 0, e6.evaluate({
            $feature: r3,
            $view: t3
          }, e6.services);
        };
      }).catch((e6) => (n.getLogger(p3).error("Creating dictionary expression failed:", e6), null));
      return this._dictionaryPromise = b2, b2;
    });
  }
  _cimPartsToCIMSymbol(e5, t3, i6, r3, o4) {
    return __async(this, null, function* () {
      const n3 = new Array(t3.length);
      for (let s5 = 0; s5 < t3.length; s5++) n3[s5] = this._getSymbolPart(t3[s5], o4);
      let l2 = yield Promise.all(n3);
      const a4 = this.fieldMap;
      if (a4) {
        l2 = a(l2);
        for (const t4 of l2) y3.applyDictionaryTextOverrides(t4, e5, a4, this._fieldIndex, j2(t4));
      }
      return new d({
        data: _(l2, i6, r3)
      });
    });
  }
  _getSymbolPart(e5, i6) {
    return __async(this, null, function* () {
      const s5 = this._symbolCache.get(e5);
      if (s5) return s5;
      if (this._ongoingRequests.has(e5)) return this._ongoingRequests.get(e5).then((e6) => e6.data);
      const r3 = this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi, e5), o4 = U(r3, __spreadValues({
        responseType: "json",
        query: {
          f: "json"
        }
      }, i6));
      this._ongoingRequests.set(e5, o4), o4.finally(() => this._ongoingRequests.delete(e5));
      try {
        const t3 = yield o4;
        return this._symbolCache.put(e5, t3.data), t3.data;
      } catch (n3) {
        throw n3;
      }
    });
  }
};
function _(e5, t3, i6) {
  if (!e5 || 0 === e5.length) return null;
  const s5 = __spreadValues({}, e5[0]);
  if (e5.length > 1) {
    s5.symbolLayers = [];
    for (const t4 of e5) {
      const e6 = t4;
      s5.symbolLayers.unshift(...e6.symbolLayers);
    }
  }
  return i6 && (s5.callout = d3), {
    type: "CIMSymbolReference",
    symbol: s5,
    primitiveOverrides: t3
  };
}

// ../../../node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var p4;
var c2 = p4 = class extends v2(p) {
  constructor(e5) {
    super(e5), this.config = null, this.fieldMap = null, this.scaleExpression = null, this.scaleExpressionTitle = null, this.url = null, this.type = "dictionary";
  }
  get _loader() {
    return new g(this.url, this.config, this.fieldMap);
  }
  writeData(e5, r3) {
    e5 && (r3.scalingExpressionInfo = {
      expression: e5,
      returnType: "number"
    });
  }
  writeVisualVariables(e5, r3, s5, i6) {
    i6?.origin || super.writeVisualVariables(e5, r3, s5, i6);
  }
  clone() {
    return new p4({
      config: a(this.config),
      scaleExpression: this.scaleExpression,
      scaleExpressionTitle: this.scaleExpressionTitle,
      fieldMap: a(this.fieldMap),
      url: a(this.url),
      visualVariables: a(this.visualVariables)
    });
  }
  getSymbolAsync(e5, r3) {
    return __async(this, null, function* () {
      return this._loader.getSymbolAsync(e5, r3);
    });
  }
  collectRequiredFields(e5, r3) {
    return __async(this, null, function* () {
      yield this.collectVVRequiredFields(e5, r3), this.scaleExpression && (yield h(e5, r3, this.scaleExpression));
      for (const s5 in this.fieldMap) {
        const i6 = this.fieldMap[s5];
        r3.has(i6) && e5.add(i6);
      }
    });
  }
  get arcadeRequired() {
    return true;
  }
  getSymbol() {
    return null;
  }
  getSymbols() {
    return [];
  }
  getAttributeHash() {
    return this.visualVariables && this.visualVariables.reduce((e5, r3) => e5 + r3.getAttributeHash(), "");
  }
  getMeshHash() {
    return `${this.url}-${JSON.stringify(this.fieldMap)}`;
  }
  getSymbolFields() {
    return this._loader.getSymbolFields();
  }
};
e([y({
  type: g
})], c2.prototype, "_loader", null), e([y({
  type: Object,
  json: {
    read: {
      source: "configuration"
    },
    write: {
      target: "configuration"
    }
  }
})], c2.prototype, "config", void 0), e([y({
  type: Object,
  json: {
    write: true
  }
})], c2.prototype, "fieldMap", void 0), e([y({
  type: String,
  json: {
    read: {
      source: "scalingExpressionInfo.expression"
    },
    write: true
  }
})], c2.prototype, "scaleExpression", void 0), e([r("scaleExpression")], c2.prototype, "writeData", null), e([y({
  type: String,
  json: {
    read: {
      source: "scalingExpressionInfo.title"
    },
    write: {
      target: "scalingExpressionInfo.title",
      overridePolicy(e5) {
        return {
          enabled: !!e5 && !!this.scaleExpression
        };
      }
    }
  }
})], c2.prototype, "scaleExpressionTitle", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], c2.prototype, "url", void 0), e([r("visualVariables")], c2.prototype, "writeVisualVariables", null), c2 = p4 = e([a2("esri.renderers.DictionaryRenderer")], c2);
var u5 = c2;

// ../../../node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js
var n2;
var u6 = n2 = class extends f {
  constructor(e5) {
    super(e5), this.color = null, this.field = null, this.label = null, this.valueExpression = null, this.valueExpressionTitle = null;
  }
  castField(e5) {
    return null == e5 ? e5 : "function" == typeof e5 ? (n.getLogger(this).error(".field: field must be a string value"), null) : u(e5);
  }
  getAttributeHash() {
    return `${this.field}-${this.valueExpression}`;
  }
  clone() {
    return new n2({
      color: this.color?.clone(),
      field: this.field,
      label: this.label,
      valueExpression: this.valueExpression,
      valueExpressionTitle: this.valueExpressionTitle
    });
  }
};
e([y({
  type: u3,
  json: {
    type: [Number],
    write: true
  }
})], u6.prototype, "color", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u6.prototype, "field", void 0), e([s3("field")], u6.prototype, "castField", null), e([y({
  type: String,
  json: {
    write: true
  }
})], u6.prototype, "label", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u6.prototype, "valueExpression", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u6.prototype, "valueExpressionTitle", void 0), u6 = n2 = e([a2("esri.renderers.support.AttributeColorInfo")], u6);
var c3 = u6;

// ../../../node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js
var e4;
var p5 = e4 = class extends f {
  constructor() {
    super(...arguments), this.unit = null;
  }
  clone() {
    return new e4({
      unit: this.unit
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p5.prototype, "unit", void 0), p5 = e4 = e([a2("esri.renderers.support.DotDensityLegendOptions")], p5);
var i4 = p5;

// ../../../node_modules/@arcgis/core/renderers/DotDensityRenderer.js
var h2;
var m = h2 = class extends v2(p) {
  constructor(t3) {
    super(t3), this.attributes = null, this.backgroundColor = new u3([0, 0, 0, 0]), this.dotBlendingEnabled = true, this.dotShape = "square", this.dotSize = 1, this.legendOptions = null, this.outline = new d2(), this.dotValue = null, this.referenceScale = null, this.seed = 1, this.type = "dot-density";
  }
  calculateDotValue(t3) {
    if (null == this.referenceScale) return this.dotValue;
    const e5 = t3 / this.referenceScale * this.dotValue;
    return e5 < 1 ? 1 : e5;
  }
  getSymbol() {
    return new S({
      outline: this.outline
    });
  }
  getSymbolAsync() {
    return __async(this, null, function* () {
      return this.getSymbol();
    });
  }
  getSymbols() {
    return [this.getSymbol()];
  }
  getAttributeHash() {
    return this.attributes?.reduce((t3, e5) => t3 + e5.getAttributeHash(), "") ?? "";
  }
  getMeshHash() {
    return JSON.stringify(this.outline);
  }
  clone() {
    return new h2({
      attributes: a(this.attributes),
      backgroundColor: a(this.backgroundColor),
      dotBlendingEnabled: a(this.dotBlendingEnabled),
      dotShape: a(this.dotShape),
      dotSize: a(this.dotSize),
      dotValue: a(this.dotValue),
      legendOptions: a(this.legendOptions),
      outline: a(this.outline),
      referenceScale: a(this.referenceScale),
      seed: a(this.seed),
      visualVariables: a(this.visualVariables),
      authoringInfo: a(this.authoringInfo)
    });
  }
  getControllerHash() {
    const t3 = this.attributes?.map((t4) => t4.field || t4.valueExpression || "");
    return `${t3}-${this.outline && JSON.stringify(this.outline.toJSON()) || ""}`;
  }
  collectRequiredFields(t3, e5) {
    return __async(this, null, function* () {
      yield this.collectVVRequiredFields(t3, e5);
      for (const o4 of this.attributes ?? []) o4.valueExpression && (yield h(t3, e5, o4.valueExpression)), o4.field && t3.add(o4.field);
    });
  }
};
e([y({
  type: [c3],
  json: {
    write: true
  }
})], m.prototype, "attributes", void 0), e([y({
  type: u3,
  json: {
    write: true
  }
})], m.prototype, "backgroundColor", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], m.prototype, "dotBlendingEnabled", void 0), e([y({
  type: String,
  json: {
    write: false
  }
})], m.prototype, "dotShape", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], m.prototype, "dotSize", void 0), e([y({
  type: i4,
  json: {
    write: true
  }
})], m.prototype, "legendOptions", void 0), e([y({
  type: d2,
  json: {
    default: null,
    write: true
  }
})], m.prototype, "outline", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], m.prototype, "dotValue", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], m.prototype, "referenceScale", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], m.prototype, "seed", void 0), e([o({
  dotDensity: "dot-density"
})], m.prototype, "type", void 0), m = h2 = e([a2("esri.renderers.DotDensityRenderer")], m);
var y4 = m;

// ../../../node_modules/@arcgis/core/renderers/support/HeatmapLegendOptions.js
var p6 = class extends i2(f) {
  constructor() {
    super(...arguments), this.minLabel = null, this.maxLabel = null, this.title = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p6.prototype, "minLabel", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p6.prototype, "maxLabel", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p6.prototype, "title", void 0), p6 = e([a2("esri.renderers.support.HeatmapLegendOptions")], p6);

// ../../../node_modules/@arcgis/core/renderers/HeatmapRenderer.js
var j3;
function D(t3) {
  if (null != t3) {
    const {
      maxDensity: e5,
      minDensity: i6,
      radius: s5
    } = t3;
    if (null != e5 || null != i6 || null != s5) {
      const _a = t3, {
        blurRadius: e6,
        maxPixelIntensity: i7,
        minPixelIntensity: s6
      } = _a, r3 = __objRest(_a, [
        "blurRadius",
        "maxPixelIntensity",
        "minPixelIntensity"
      ]);
      return r3;
    }
  }
  return t3;
}
var I = j3 = class extends p {
  constructor(t3) {
    super(t3), this.authoringInfo = null, this.colorStops = [new l({
      ratio: 0,
      color: new u3("rgba(255, 140, 0, 0)")
    }), new l({
      ratio: 0.75,
      color: new u3("rgba(255, 140, 0, 1)")
    }), new l({
      ratio: 0.9,
      color: new u3("rgba(255, 0,   0, 1)")
    })], this.field = null, this.legendOptions = null, this.maxDensity = 0.04, this.minDensity = 0, this.radius = 18, this.referenceScale = 0, this.type = "heatmap", this.valueExpression = null, this.valueExpressionTitle = null, this._warnedProps = {
      blurRadius: false,
      maxPixelIntensity: false,
      minPixelIntensity: false
    };
  }
  normalizeCtorArgs(t3) {
    return D(t3);
  }
  get blurRadius() {
    return a3(this.radius);
  }
  set blurRadius(t3) {
    const e5 = this.maxPixelIntensity, i6 = this.minPixelIntensity;
    this._set("radius", e3(t3)), this._warnAboutDeprecatedGaussianBlurProp("blurRadius", "radius"), this._set("maxDensity", e5 * this._pixelIntensityToDensity), this._set("minDensity", i6 * this._pixelIntensityToDensity);
  }
  get maxPixelIntensity() {
    return this.maxDensity / this._pixelIntensityToDensity;
  }
  set maxPixelIntensity(t3) {
    this._set("maxDensity", t3 * this._pixelIntensityToDensity), this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity", "maxDensity");
  }
  get minPixelIntensity() {
    return this.minDensity / this._pixelIntensityToDensity;
  }
  set minPixelIntensity(t3) {
    this._set("minDensity", t3 * this._pixelIntensityToDensity), this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity", "minDensity");
  }
  get _pixelIntensityToDensity() {
    return 24 / (c ** 2 * this.blurRadius ** 4);
  }
  _warnAboutDeprecatedGaussianBlurProp(t3, e5) {
    if (this._warnedProps[t3]) return;
    "user" === t(this).getDefaultOrigin() && (this._warnedProps[t3] = true, v(() => {
      i(n.getLogger(this), t3, {
        replacement: `${String(e5)} (suggested value: ${this._get(e5)})`,
        version: "4.24"
      });
    }));
  }
  read(t3, e5) {
    t3 = D(t3), super.read(t3, e5);
  }
  getSymbol() {
    return new y2();
  }
  getSymbolAsync() {
    return __async(this, null, function* () {
      return this.getSymbol();
    });
  }
  getSymbols() {
    return [this.getSymbol()];
  }
  collectRequiredFields(t3, e5) {
    return __async(this, null, function* () {
      const i6 = this.field, s5 = this.valueExpression;
      i6 && "string" == typeof i6 && w2(t3, e5, i6), s5 && "string" == typeof s5 && (yield h(t3, e5, s5));
    });
  }
  getAttributeHash() {
    return null;
  }
  getMeshHash() {
    return `${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`;
  }
  clone() {
    return new j3({
      authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
      colorStops: a(this.colorStops),
      field: this.field,
      legendOptions: a(this.legendOptions),
      maxDensity: this.maxDensity,
      minDensity: this.minDensity,
      radius: this.radius,
      referenceScale: this.referenceScale,
      valueExpression: this.valueExpression,
      valueExpressionTitle: this.valueExpressionTitle
    });
  }
};
e([y({
  type: j,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false,
        read: false
      }
    }
  }
})], I.prototype, "authoringInfo", void 0), e([y({
  type: Number,
  json: {
    origins: {
      "portal-item": {
        write: true
      },
      "web-map": {
        write: true
      }
    }
  }
})], I.prototype, "blurRadius", null), e([y({
  type: [l],
  json: {
    write: true
  }
})], I.prototype, "colorStops", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], I.prototype, "field", void 0), e([y({
  type: p6,
  json: {
    write: true
  }
})], I.prototype, "legendOptions", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], I.prototype, "maxDensity", void 0), e([y({
  type: Number,
  json: {
    origins: {
      "portal-item": {
        write: true
      },
      "web-map": {
        write: true
      }
    }
  }
})], I.prototype, "maxPixelIntensity", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], I.prototype, "minDensity", void 0), e([y({
  type: Number,
  json: {
    origins: {
      "portal-item": {
        write: true
      },
      "web-map": {
        write: true
      }
    }
  }
})], I.prototype, "minPixelIntensity", null), e([y({
  type: Number,
  cast: o2,
  json: {
    write: true
  }
})], I.prototype, "radius", void 0), e([y({
  type: Number,
  range: {
    min: 0
  },
  json: {
    default: 0,
    write: true
  }
})], I.prototype, "referenceScale", void 0), e([o({
  heatmap: "heatmap"
})], I.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true,
    origins: {
      "web-document": {
        write: false
      },
      "portal-item": {
        write: false
      }
    }
  }
})], I.prototype, "valueExpression", void 0), e([y({
  type: String
})], I.prototype, "valueExpressionTitle", void 0), e([y({
  readOnly: true
})], I.prototype, "_pixelIntensityToDensity", null), I = j3 = e([a2("esri.renderers.HeatmapRenderer")], I);
var S2 = I;

// ../../../node_modules/@arcgis/core/renderers/support/OthersCategory.js
var i5 = class extends i2(f) {
  constructor() {
    super(...arguments), this.color = new u3([0, 0, 0, 0]), this.label = null, this.threshold = 0;
  }
};
e([y({
  type: u3,
  json: {
    write: true
  }
})], i5.prototype, "color", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i5.prototype, "label", void 0), e([y({
  type: Number,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], i5.prototype, "threshold", void 0), i5 = e([a2("esri.renderers.support.OthersCategory")], i5);

// ../../../node_modules/@arcgis/core/renderers/support/PieChartLegendOptions.js
var p7 = class extends i2(f) {
  constructor() {
    super(...arguments), this.title = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p7.prototype, "title", void 0), p7 = e([a2("esri.renderers.support.PieChartLegendOptions")], p7);

// ../../../node_modules/@arcgis/core/renderers/PieChartRenderer.js
var f2 = class extends v2(i2(p)) {
  constructor(t3) {
    super(t3), this.attributes = null, this.backgroundFillSymbol = null, this.defaultColor = new u3([0, 0, 0, 0]), this.defaultLabel = null, this.holePercentage = 0, this.othersCategory = new i5(), this.legendOptions = null, this.outline = null, this.size = 12, this.type = "pie-chart";
  }
  getSymbol() {
    return new y2({
      size: this.size ? this.size / 2 + (this.outline?.width || 0) : 0
    });
  }
  getSymbolAsync() {
    return __async(this, null, function* () {
      return this.getSymbol();
    });
  }
  getSymbols() {
    return [this.getSymbol(), this.backgroundFillSymbol].filter(O);
  }
  getAttributeHash() {
    return this.visualVariables && this.visualVariables.reduce((t3, e5) => t3 + e5.getAttributeHash(), "");
  }
  getMeshHash() {
    return this.getSymbols().reduce((t3, e5) => t3 + JSON.stringify(e5), "");
  }
  collectRequiredFields(t3, e5) {
    return __async(this, null, function* () {
      yield this.collectVVRequiredFields(t3, e5);
      for (const o4 of this.attributes) o4.valueExpression && (yield h(t3, e5, o4.valueExpression)), o4.field && t3.add(o4.field);
    });
  }
};
e([y({
  type: [c3],
  json: {
    write: true
  }
})], f2.prototype, "attributes", void 0), e([y({
  type: S,
  json: {
    default: null,
    write: true
  }
})], f2.prototype, "backgroundFillSymbol", void 0), e([y({
  type: u3,
  json: {
    write: true
  }
})], f2.prototype, "defaultColor", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], f2.prototype, "defaultLabel", void 0), e([y({
  type: Number,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], f2.prototype, "holePercentage", void 0), e([y({
  type: i5,
  json: {
    write: true
  }
})], f2.prototype, "othersCategory", void 0), e([y({
  type: p7,
  json: {
    write: true
  }
})], f2.prototype, "legendOptions", void 0), e([y({
  type: d2,
  json: {
    default: null,
    write: true
  }
})], f2.prototype, "outline", void 0), e([y({
  type: Number,
  cast: o2,
  json: {
    write: true
  }
})], f2.prototype, "size", void 0), e([o({
  pieChart: "pie-chart"
})], f2.prototype, "type", void 0), f2 = e([a2("esri.renderers.PieChartRenderer")], f2);
var j4 = f2;

// ../../../node_modules/@arcgis/core/renderers/support/types.js
var m2 = {
  key: "type",
  base: p,
  typeMap: {
    heatmap: S2,
    simple: p2,
    "unique-value": A,
    "class-breaks": w,
    "dot-density": y4,
    dictionary: u5,
    "pie-chart": j4
  },
  errorContext: "renderer"
};
var u7 = {
  key: "type",
  base: p,
  typeMap: {
    simple: p2,
    "unique-value": A,
    "class-breaks": w,
    heatmap: S2
  },
  errorContext: "renderer",
  validate: p8
};
function p8(e5) {
  switch (e5.type) {
    case "simple":
      return c4(e5);
    case "unique-value":
      return f3(e5);
    case "class-breaks":
      return d4(e5);
    case "heatmap":
      return e5;
  }
}
function c4(r3) {
  if (r3.symbol) return r3;
  n.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.");
}
function f3(r3) {
  const s5 = r3.uniqueValueInfos, t3 = s5?.filter(({
    symbol: r4,
    label: s6
  }, t4) => (r4 || n.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${t4}] ${s6}) without a symbol from web scene.`), !!r4));
  return t3?.length !== s5?.length && (r3.uniqueValueInfos = t3), r3;
}
function d4(r3) {
  const s5 = r3.classBreakInfos, t3 = s5?.filter(({
    symbol: r4,
    label: s6
  }, t4) => (r4 || n.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${t4}] ${s6}) without a symbol from web scene.`), !!r4));
  return t3?.length !== s5?.length && (r3.classBreakInfos = t3), r3;
}

// ../../../node_modules/@arcgis/core/renderers/support/jsonUtils.js
function t2(e5, r3) {
  return o3(e5, null, r3);
}
var s4 = u2({
  types: m2
});
function o3(r3, n3, t3) {
  return r3 ? r3 && (r3.styleName || r3.styleUrl) && "uniqueValue" !== r3.type ? (t3?.messages && t3.messages.push(new s2("renderer:unsupported", "Only UniqueValueRenderer can be referenced from a web style, but found '" + r3.type + "'", {
    definition: r3,
    context: t3
  })), null) : s4(r3, n3, t3) : null;
}

export {
  m2 as m,
  u7 as u,
  t2 as t,
  o3 as o
};
//# sourceMappingURL=chunk-KXVPQVTB.js.map
