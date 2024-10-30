import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b as b2,
  c
} from "./chunk-EPLJRYUV.js";
import {
  m as m2,
  p as p2
} from "./chunk-RR7OQLEK.js";
import {
  d as d2
} from "./chunk-IEB4ZCRH.js";
import {
  a as a3,
  p as p3
} from "./chunk-WVSTX2NW.js";
import {
  y as y2
} from "./chunk-ZPMUEGLK.js";
import {
  l
} from "./chunk-GNFDYYU3.js";
import {
  B,
  h3 as h,
  h4 as h2,
  h5 as h3,
  j3 as j,
  w2 as w
} from "./chunk-ZREJ3Y2F.js";
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  n as n5
} from "./chunk-OYIDHTXG.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  n as n4,
  r as r2
} from "./chunk-XNLAOXPY.js";
import {
  h2 as h4,
  w2
} from "./chunk-I2TVVMQ6.js";
import {
  i as i2
} from "./chunk-JKPUNUQA.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  m,
  p
} from "./chunk-BXONKQKI.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  s as s3
} from "./chunk-66YQWHHE.js";
import {
  n as n3
} from "./chunk-Y2HYKTTT.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  d
} from "./chunk-LZSLQ24Q.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  N,
  a3 as a2,
  b,
  s3 as s2,
  u2 as u,
  u3 as u2
} from "./chunk-UDMPWVPF.js";
import {
  a,
  n,
  n2,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js
var t;
var p4 = t = class extends f {
  constructor(r3) {
    super(r3), this.minValue = 0, this.maxValue = 0;
  }
  clone() {
    return new t({
      minValue: this.minValue,
      maxValue: this.maxValue
    });
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], p4.prototype, "minValue", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p4.prototype, "maxValue", void 0), p4 = t = e([a2("esri.renderers.support.AuthoringInfoClassBreakInfo")], p4);

// ../../../node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js
var n6;
var a4 = n6 = class extends f {
  constructor(o3) {
    super(o3), this.field = "", this.normalizationField = "", this.label = "", this.classBreakInfos = new Array();
  }
  clone() {
    return new n6({
      field: this.field,
      normalizationField: this.normalizationField,
      label: this.label,
      classBreakInfos: a(this.classBreakInfos)
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], a4.prototype, "field", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a4.prototype, "normalizationField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a4.prototype, "label", void 0), e([y({
  type: [p4],
  json: {
    write: true
  }
})], a4.prototype, "classBreakInfos", void 0), a4 = n6 = e([a2("esri.renderers.support.AuthoringInfoFieldInfo")], a4);

// ../../../node_modules/@arcgis/core/renderers/support/AuthoringInfoSizeStop.js
var t2;
var p5 = t2 = class extends f {
  constructor(r3) {
    super(r3), this.label = null, this.size = null, this.value = null;
  }
  clone() {
    return new t2({
      label: this.label,
      value: this.value,
      size: this.size
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p5.prototype, "label", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p5.prototype, "size", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p5.prototype, "value", void 0), p5 = t2 = e([a2("esri.renderers.support.AuthoringInfoSizeStop")], p5);
var i3 = p5;

// ../../../node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js
var a5;
var p6 = new n3({
  percentTotal: "percent-of-total",
  ratio: "ratio",
  percent: "percent"
});
var u3 = new n3({
  sizeInfo: "size",
  colorInfo: "color",
  transparencyInfo: "opacity",
  rotationInfo: "rotation"
});
var m3 = {
  key: (e3) => "number" == typeof e3 ? "number" : "string",
  typeMap: {
    number: Number,
    string: String
  },
  base: null
};
var c2 = ["high-to-low", "above-and-below", "centered-on", "extremes"];
var y3 = [.../* @__PURE__ */ new Set([...["high-to-low", "above-and-below", "centered-on", "extremes", "above", "below"], ...["high-to-low", "above-and-below", "above", "below", "reference-size"]])];
var h5 = ["seconds", "minutes", "hours", "days", "months", "years"];
var S2 = ["circle", "diamond", "hexagon-flat", "hexagon-pointy", "square"];
var d3 = a5 = class extends f {
  constructor(e3) {
    super(e3), this.endTime = null, this.field = null, this.maxSliderValue = null, this.minSliderValue = null, this.startTime = null, this.type = null, this.units = null;
  }
  castEndTime(e3) {
    return "string" == typeof e3 || "number" == typeof e3 ? e3 : null;
  }
  get normalizationField() {
    return "reference-size" === this.theme ? this._get("normalizationField") : null;
  }
  set normalizationField(e3) {
    this._set("normalizationField", e3);
  }
  get referenceSizeScale() {
    return "reference-size" === this.theme ? this._get("referenceSizeScale") : null;
  }
  set referenceSizeScale(e3) {
    this._set("referenceSizeScale", e3);
  }
  get referenceSizeSymbolStyle() {
    return "reference-size" === this.theme ? this._get("referenceSizeSymbolStyle") : null;
  }
  set referenceSizeSymbolStyle(e3) {
    this._set("referenceSizeSymbolStyle", e3);
  }
  castStartTime(e3) {
    return "string" == typeof e3 || "number" == typeof e3 ? e3 : null;
  }
  get sizeStops() {
    return "reference-size" === this.theme ? this._get("sizeStops") : null;
  }
  set sizeStops(e3) {
    this._set("sizeStops", e3);
  }
  get style() {
    return "color" === this.type ? this._get("style") : null;
  }
  set style(e3) {
    this._set("style", e3);
  }
  get theme() {
    return "color" === this.type || "size" === this.type ? this._get("theme") || "high-to-low" : null;
  }
  set theme(e3) {
    this._set("theme", e3);
  }
  clone() {
    return new a5({
      endTime: this.endTime,
      field: this.field,
      maxSliderValue: this.maxSliderValue,
      minSliderValue: this.minSliderValue,
      normalizationField: this.normalizationField,
      referenceSizeScale: this.referenceSizeScale,
      referenceSizeSymbolStyle: this.referenceSizeSymbolStyle,
      sizeStops: a(this.sizeStops),
      startTime: this.startTime,
      style: this.style,
      theme: this.theme,
      type: this.type,
      units: this.units
    });
  }
};
e([y({
  types: m3,
  json: {
    write: true
  }
})], d3.prototype, "endTime", void 0), e([s3("endTime")], d3.prototype, "castEndTime", null), e([y({
  type: String,
  json: {
    write: true
  }
})], d3.prototype, "field", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], d3.prototype, "maxSliderValue", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], d3.prototype, "minSliderValue", void 0), e([y({
  type: String,
  json: {
    origins: {
      "web-scene": {
        write: false
      }
    },
    write: true
  }
})], d3.prototype, "normalizationField", null), e([y({
  type: Number,
  value: null,
  json: {
    origins: {
      "web-scene": {
        write: false
      }
    },
    write: true
  }
})], d3.prototype, "referenceSizeScale", null), e([y({
  type: S2,
  value: null,
  json: {
    origins: {
      "web-scene": {
        write: false
      }
    },
    write: true
  }
})], d3.prototype, "referenceSizeSymbolStyle", null), e([y({
  types: m3,
  json: {
    write: true
  }
})], d3.prototype, "startTime", void 0), e([s3("startTime")], d3.prototype, "castStartTime", null), e([y({
  type: [i3],
  json: {
    origins: {
      "web-scene": {
        write: false
      }
    },
    write: true
  }
})], d3.prototype, "sizeStops", null), e([y({
  type: p6.apiValues,
  value: null,
  json: {
    type: p6.jsonValues,
    read: p6.read,
    write: p6.write
  }
})], d3.prototype, "style", null), e([y({
  type: y3,
  value: null,
  json: {
    type: y3,
    origins: {
      "web-scene": {
        type: c2,
        write: {
          writer: (e3, t4) => {
            c2.includes(e3) && (t4.theme = e3);
          }
        }
      }
    },
    write: true
  }
})], d3.prototype, "theme", null), e([y({
  type: u3.apiValues,
  json: {
    type: u3.jsonValues,
    read: u3.read,
    write: u3.write
  }
})], d3.prototype, "type", void 0), e([y({
  type: h5,
  json: {
    type: h5,
    write: true
  }
})], d3.prototype, "units", void 0), d3 = a5 = e([a2("esri.renderers.support.AuthoringInfoVisualVariable")], d3);
var f2 = d3;

// ../../../node_modules/@arcgis/core/renderers/support/AuthoringInfo.js
var c3;
var h6 = new n3({
  esriClassifyDefinedInterval: "defined-interval",
  esriClassifyEqualInterval: "equal-interval",
  esriClassifyManual: "manual",
  esriClassifyNaturalBreaks: "natural-breaks",
  esriClassifyQuantile: "quantile",
  esriClassifyStandardDeviation: "standard-deviation"
});
var y4 = new n3({
  classedSize: "class-breaks-size",
  classedColor: "class-breaks-color",
  univariateColorSize: "univariate-color-size",
  relationship: "relationship",
  predominance: "predominance",
  dotDensity: "dot-density",
  flow: "flow"
});
var m4 = new n3({
  classedSize: "class-breaks-size",
  classedColor: "class-breaks-color",
  univariateColorSize: "univariate-color-size",
  relationship: "relationship",
  predominance: "predominance",
  dotDensity: "dot-density"
});
var f3 = ["inches", "feet", "yards", "miles", "nautical-miles", "millimeters", "centimeters", "decimeters", "meters", "kilometers", "decimal-degrees"];
var v = ["high-to-low", "above-and-below", "above", "below"];
var w3 = ["flow-line", "wave-front"];
var b3 = ["caret", "circle-caret", "arrow", "circle-arrow", "plus-minus", "circle-plus-minus", "square", "circle", "triangle", "happy-sad", "thumb", "custom"];
var g = c3 = class extends f {
  constructor(e3) {
    super(e3), this.colorRamp = null, this.fadeRatio = null, this.isAutoGenerated = false, this.lengthUnit = null, this.maxSliderValue = null, this.minSliderValue = null, this.visualVariables = null;
  }
  get classificationMethod() {
    const e3 = this._get("classificationMethod"), t4 = this.type;
    return t4 && "relationship" !== t4 ? "class-breaks-size" === t4 || "class-breaks-color" === t4 ? e3 || "manual" : null : e3;
  }
  set classificationMethod(e3) {
    this._set("classificationMethod", e3);
  }
  readColorRamp(e3) {
    return e3 ? p2(e3) : void 0;
  }
  get fields() {
    return this.type && "predominance" !== this.type ? null : this._get("fields");
  }
  set fields(e3) {
    this._set("fields", e3);
  }
  get field1() {
    return this.type && "relationship" !== this.type ? null : this._get("field1");
  }
  set field1(e3) {
    this._set("field1", e3);
  }
  get field2() {
    return this.type && "relationship" !== this.type ? null : this._get("field2");
  }
  set field2(e3) {
    this._set("field2", e3);
  }
  get flowTheme() {
    return "flow" === this.type ? this._get("flowTheme") : null;
  }
  set flowTheme(e3) {
    this._set("flowTheme", e3);
  }
  get focus() {
    return this.type && "relationship" !== this.type ? null : this._get("focus");
  }
  set focus(e3) {
    this._set("focus", e3);
  }
  get numClasses() {
    return this.type && "relationship" !== this.type ? null : this._get("numClasses");
  }
  set numClasses(e3) {
    this._set("numClasses", e3);
  }
  get statistics() {
    return "univariate-color-size" === this.type && "above-and-below" === this.univariateTheme ? this._get("statistics") : null;
  }
  set statistics(e3) {
    this._set("statistics", e3);
  }
  get standardDeviationInterval() {
    const e3 = this.type;
    return e3 && "relationship" !== e3 && "class-breaks-size" !== e3 && "class-breaks-color" !== e3 || this.classificationMethod && "standard-deviation" !== this.classificationMethod ? null : this._get("standardDeviationInterval");
  }
  set standardDeviationInterval(e3) {
    this._set("standardDeviationInterval", e3);
  }
  get type() {
    return this._get("type");
  }
  set type(e3) {
    let t4 = e3;
    "classed-size" === e3 ? t4 = "class-breaks-size" : "classed-color" === e3 && (t4 = "class-breaks-color"), this._set("type", t4);
  }
  get univariateSymbolStyle() {
    return "univariate-color-size" === this.type && "above-and-below" === this.univariateTheme ? this._get("univariateSymbolStyle") : null;
  }
  set univariateSymbolStyle(e3) {
    this._set("univariateSymbolStyle", e3);
  }
  get univariateTheme() {
    return "univariate-color-size" === this.type ? this._get("univariateTheme") : null;
  }
  set univariateTheme(e3) {
    this._set("univariateTheme", e3);
  }
  clone() {
    return new c3({
      classificationMethod: this.classificationMethod,
      colorRamp: a(this.colorRamp),
      fadeRatio: a(this.fadeRatio),
      fields: this.fields?.slice(0),
      field1: a(this.field1),
      field2: a(this.field2),
      isAutoGenerated: this.isAutoGenerated,
      focus: this.focus,
      numClasses: this.numClasses,
      maxSliderValue: this.maxSliderValue,
      minSliderValue: this.minSliderValue,
      lengthUnit: this.lengthUnit,
      statistics: this.statistics,
      standardDeviationInterval: this.standardDeviationInterval,
      type: this.type,
      visualVariables: this.visualVariables && this.visualVariables.map((e3) => e3.clone()),
      univariateSymbolStyle: this.univariateSymbolStyle,
      univariateTheme: this.univariateTheme,
      flowTheme: this.flowTheme
    });
  }
};
e([y({
  type: h6.apiValues,
  value: null,
  json: {
    type: h6.jsonValues,
    read: h6.read,
    write: h6.write,
    origins: {
      "web-document": {
        default: "manual",
        type: h6.jsonValues,
        read: h6.read,
        write: h6.write
      }
    }
  }
})], g.prototype, "classificationMethod", null), e([y({
  types: m2,
  json: {
    write: true
  }
})], g.prototype, "colorRamp", void 0), e([o("colorRamp")], g.prototype, "readColorRamp", null), e([y({
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false,
        read: false
      }
    }
  }
})], g.prototype, "fadeRatio", void 0), e([y({
  type: [String],
  value: null,
  json: {
    write: true
  }
})], g.prototype, "fields", null), e([y({
  type: a4,
  value: null,
  json: {
    write: true
  }
})], g.prototype, "field1", null), e([y({
  type: a4,
  value: null,
  json: {
    write: true
  }
})], g.prototype, "field2", null), e([y({
  type: w3,
  value: null,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false
      }
    }
  }
})], g.prototype, "flowTheme", null), e([y({
  type: ["HH", "HL", "LH", "LL"],
  value: null,
  json: {
    write: true
  }
})], g.prototype, "focus", null), e([y({
  type: Boolean,
  json: {
    write: true,
    default: false,
    origins: {
      "web-scene": {
        write: false
      }
    }
  }
})], g.prototype, "isAutoGenerated", void 0), e([y({
  type: Number,
  value: null,
  json: {
    type: N,
    write: true
  }
})], g.prototype, "numClasses", null), e([y({
  type: f3,
  json: {
    type: f3,
    read: false,
    write: false,
    origins: {
      "web-scene": {
        read: true,
        write: true
      }
    }
  }
})], g.prototype, "lengthUnit", void 0), e([y({
  type: Number,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false,
        read: false
      }
    }
  }
})], g.prototype, "maxSliderValue", void 0), e([y({
  type: Number,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false,
        read: false
      }
    }
  }
})], g.prototype, "minSliderValue", void 0), e([y({
  type: Object,
  value: null,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false,
        read: false
      }
    }
  }
})], g.prototype, "statistics", null), e([y({
  type: [0.25, 0.33, 0.5, 1],
  value: null,
  json: {
    type: [0.25, 0.33, 0.5, 1],
    write: true
  }
})], g.prototype, "standardDeviationInterval", null), e([y({
  type: y4.apiValues,
  value: null,
  json: {
    type: y4.jsonValues,
    read: y4.read,
    write: y4.write,
    origins: {
      "web-scene": {
        type: m4.jsonValues,
        write: {
          writer: m4.write,
          overridePolicy: (e3) => ({
            enabled: "flow" !== e3
          })
        }
      }
    }
  }
})], g.prototype, "type", null), e([y({
  type: [f2],
  json: {
    write: true
  }
})], g.prototype, "visualVariables", void 0), e([y({
  type: b3,
  value: null,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false
      }
    }
  }
})], g.prototype, "univariateSymbolStyle", null), e([y({
  type: v,
  value: null,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false
      }
    }
  }
})], g.prototype, "univariateTheme", null), g = c3 = e([a2("esri.renderers.support.AuthoringInfo")], g);
var j2 = g;

// ../../../node_modules/@arcgis/core/renderers/Renderer.js
var n7 = new n3({
  simple: "simple",
  uniqueValue: "unique-value",
  classBreaks: "class-breaks",
  heatmap: "heatmap",
  dotDensity: "dot-density",
  dictionary: "dictionary",
  pieChart: "pie-chart"
}, {
  ignoreUnknown: true
});
var a6 = class extends f {
  constructor(r3) {
    super(r3), this.authoringInfo = null, this.type = null;
  }
  getRequiredFields(r3) {
    return __async(this, null, function* () {
      if (!this.collectRequiredFields) return [];
      const e3 = /* @__PURE__ */ new Set();
      return yield this.collectRequiredFields(e3, r3), Array.from(e3).sort();
    });
  }
  getSymbol(r3, e3) {
  }
  getSymbolAsync(r3, e3) {
    return __async(this, null, function* () {
    });
  }
  getSymbols() {
    return [];
  }
  getAttributeHash() {
    return JSON.stringify(this);
  }
  getMeshHash() {
    return JSON.stringify(this);
  }
};
e([y({
  type: j2,
  json: {
    write: true
  }
})], a6.prototype, "authoringInfo", void 0), e([y({
  type: n7.apiValues,
  readOnly: true,
  json: {
    type: n7.jsonValues,
    read: false,
    write: {
      writer: n7.write,
      ignoreOrigin: true
    }
  }
})], a6.prototype, "type", void 0), a6 = e([a2("esri.renderers.Renderer")], a6);
var p7 = a6;

// ../../../node_modules/@arcgis/core/renderers/support/randomRotationExpression.js
function e2(e3) {
  return e3.match(t3)?.[1]?.replace(/\\'/g, "'") ?? null;
}
var t3 = /^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/;

// ../../../node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js
var i4;
var a7 = i4 = class extends c {
  constructor(t4) {
    super(t4), this.type = "color", this.normalizationField = null;
  }
  get cache() {
    return {
      ipData: this._interpolateData(),
      hasExpression: !!this.valueExpression,
      compiledFunc: null
    };
  }
  set stops(t4) {
    t4 && Array.isArray(t4) && (t4 = t4.filter((t5) => !!t5)).sort((t5, o3) => t5.value - o3.value), this._set("stops", t4);
  }
  clone() {
    return new i4({
      field: this.field,
      normalizationField: this.normalizationField,
      valueExpression: this.valueExpression,
      valueExpressionTitle: this.valueExpressionTitle,
      stops: this.stops && this.stops.map((t4) => t4.clone()),
      legendOptions: this.legendOptions?.clone()
    });
  }
  getAttributeHash() {
    return `${super.getAttributeHash()}-${this.normalizationField}`;
  }
  _interpolateData() {
    return this.stops && this.stops.map((t4) => t4.value || 0);
  }
};
e([y({
  readOnly: true
})], a7.prototype, "cache", null), e([y({
  type: ["color"],
  json: {
    type: ["colorInfo"]
  }
})], a7.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a7.prototype, "normalizationField", void 0), e([y({
  type: [a3],
  json: {
    write: true
  }
})], a7.prototype, "stops", null), a7 = i4 = e([a2("esri.renderers.visualVariables.ColorVariable")], a7);
var p8 = a7;

// ../../../node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js
var l2;
var u4 = l2 = class extends f {
  constructor(r3) {
    super(r3), this.label = null, this.opacity = null, this.value = null;
  }
  readOpacity(r3, o3) {
    return r2(o3.transparency);
  }
  writeOpacity(r3, o3, t4) {
    o3[t4] = n4(r3);
  }
  clone() {
    return new l2({
      label: this.label,
      opacity: this.opacity,
      value: this.value
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], u4.prototype, "label", void 0), e([y({
  type: Number,
  json: {
    type: N,
    write: {
      target: "transparency"
    }
  }
})], u4.prototype, "opacity", void 0), e([o("opacity", ["transparency"])], u4.prototype, "readOpacity", null), e([r("opacity")], u4.prototype, "writeOpacity", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], u4.prototype, "value", void 0), u4 = l2 = e([a2("esri.renderers.visualVariables.support.OpacityStop")], u4);
var n8 = u4;

// ../../../node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js
var i5;
var a8 = i5 = class extends c {
  constructor(t4) {
    super(t4), this.type = "opacity", this.normalizationField = null;
  }
  get cache() {
    return {
      ipData: this._interpolateData(),
      hasExpression: !!this.valueExpression,
      compiledFunc: null
    };
  }
  set stops(t4) {
    t4 && Array.isArray(t4) && (t4 = t4.filter((t5) => !!t5)).sort((t5, s4) => t5.value - s4.value), this._set("stops", t4);
  }
  clone() {
    return new i5({
      field: this.field,
      normalizationField: this.normalizationField,
      valueExpression: this.valueExpression,
      valueExpressionTitle: this.valueExpressionTitle,
      stops: this.stops && this.stops.map((t4) => t4.clone()),
      legendOptions: this.legendOptions?.clone()
    });
  }
  getAttributeHash() {
    return `${super.getAttributeHash()}-${this.normalizationField}`;
  }
  _interpolateData() {
    return this.stops && this.stops.map((t4) => t4.value || 0);
  }
};
e([y({
  readOnly: true
})], a8.prototype, "cache", null), e([y({
  type: ["opacity"],
  json: {
    type: ["transparencyInfo"]
  }
})], a8.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a8.prototype, "normalizationField", void 0), e([y({
  type: [n8],
  json: {
    write: true
  }
})], a8.prototype, "stops", null), a8 = i5 = e([a2("esri.renderers.visualVariables.OpacityVariable")], a8);
var p9 = a8;

// ../../../node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js
var p10;
var a9 = p10 = class extends c {
  constructor(e3) {
    super(e3), this.axis = null, this.type = "rotation", this.rotationType = "geographic", this.valueExpressionTitle = null;
  }
  get cache() {
    return {
      hasExpression: !!this.valueExpression,
      compiledFunc: null
    };
  }
  writeValueExpressionTitleWebScene(e3, o3, s4, r3) {
    if (r3?.messages) {
      const e4 = `visualVariables[${this.index}]`;
      r3.messages.push(new s("property:unsupported", this.type + "VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.", {
        instance: this,
        propertyName: e4 + ".valueExpressionTitle",
        context: r3
      }));
    }
  }
  clone() {
    return new p10({
      axis: this.axis,
      rotationType: this.rotationType,
      field: this.field,
      valueExpression: this.valueExpression,
      valueExpressionTitle: this.valueExpressionTitle,
      legendOptions: this.legendOptions?.clone()
    });
  }
};
e([y({
  readOnly: true
})], a9.prototype, "cache", null), e([y({
  type: ["heading", "tilt", "roll"],
  json: {
    origins: {
      "web-scene": {
        default: "heading",
        write: true
      }
    }
  }
})], a9.prototype, "axis", void 0), e([y({
  type: ["rotation"],
  json: {
    type: ["rotationInfo"]
  }
})], a9.prototype, "type", void 0), e([y({
  type: ["geographic", "arithmetic"],
  json: {
    write: true,
    origins: {
      "web-document": {
        write: true,
        default: "geographic"
      }
    }
  }
})], a9.prototype, "rotationType", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a9.prototype, "valueExpressionTitle", void 0), e([r("web-scene", "valueExpressionTitle")], a9.prototype, "writeValueExpressionTitleWebScene", null), a9 = p10 = e([a2("esri.renderers.visualVariables.RotationVariable")], a9);
var n9 = a9;

// ../../../node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js
var b4 = {
  color: p8,
  size: b2,
  opacity: p9,
  rotation: n9
};
var u5 = new n3({
  colorInfo: "color",
  transparencyInfo: "opacity",
  rotationInfo: "rotation",
  sizeInfo: "size"
});
var h7 = /^\[([^\]]+)\]$/i;
var m5 = class extends S {
  constructor() {
    super(...arguments), this.colorVariables = null, this.opacityVariables = null, this.rotationVariables = null, this.sizeVariables = null;
  }
  set visualVariables(r3) {
    if (this._resetVariables(), r3 = r3 && r3.filter((r4) => !!r4), r3?.length) {
      for (const s4 of r3) switch (s4.type) {
        case "color":
          this.colorVariables.push(s4);
          break;
        case "opacity":
          this.opacityVariables.push(s4);
          break;
        case "rotation":
          this.rotationVariables.push(s4);
          break;
        case "size":
          this.sizeVariables.push(s4);
      }
      if (this.sizeVariables.length) {
        this.sizeVariables.some((r4) => !!r4.target) && r3.sort((r4, s4) => {
          let o3 = null;
          return o3 = r4.target === s4.target ? 0 : r4.target ? 1 : -1, o3;
        });
      }
      for (let s4 = 0; s4 < r3.length; s4++) {
        r3[s4].index = s4;
      }
      this._set("visualVariables", r3);
    } else this._set("visualVariables", r3);
  }
  readVariables(r3, s4, o3) {
    const {
      rotationExpression: a10,
      rotationType: i7
    } = s4, l5 = a10?.match(h7), n13 = l5?.[1];
    if (n13 && (r3 || (r3 = []), r3.push({
      type: "rotationInfo",
      rotationType: i7,
      field: n13
    })), r3) return r3.map((r4) => {
      const s5 = u5.read(r4.type), a11 = b4[s5];
      a11 || (n2.getLogger(this).warn(`Unknown variable type: ${s5}`), o3?.messages && o3.messages.push(new s2("visual-variable:unsupported", `visualVariable of type '${s5}' is not supported`, {
        definition: r4,
        context: o3
      })));
      const i8 = new a11();
      return i8.read(r4, o3), i8;
    });
  }
  writeVariables(r3, s4) {
    const o3 = [];
    for (const e3 of r3) {
      const r4 = e3.toJSON(s4);
      r4 && o3.push(r4);
    }
    return o3;
  }
  _resetVariables() {
    this.colorVariables = [], this.opacityVariables = [], this.rotationVariables = [], this.sizeVariables = [];
  }
};
e([y()], m5.prototype, "visualVariables", null), m5 = e([a2("esri.renderers.visualVariables.VisualVariableFactory")], m5);
var V = m5;

// ../../../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js
var m6 = {
  base: c,
  key: "type",
  typeMap: {
    opacity: p9,
    color: p8,
    rotation: n9,
    size: b2
  }
};
var v2 = (l5) => {
  let u7 = class extends l5 {
    constructor() {
      super(...arguments), this._vvFactory = new V();
    }
    set visualVariables(r3) {
      this._vvFactory.visualVariables = r3, this._set("visualVariables", this._vvFactory.visualVariables);
    }
    readVisualVariables(r3, a10, s4) {
      return this._vvFactory.readVariables(r3, a10, s4);
    }
    writeVisualVariables(r3, a10, s4, i7) {
      a10[s4] = this._vvFactory.writeVariables(r3, i7);
    }
    get arcadeRequiredForVisualVariables() {
      if (!this.visualVariables) return false;
      for (const r3 of this.visualVariables) if (r3.arcadeRequired) return true;
      return false;
    }
    hasVisualVariables(r3, a10) {
      return r3 ? this.getVisualVariablesForType(r3, a10).length > 0 : this.getVisualVariablesForType("size", a10).length > 0 || this.getVisualVariablesForType("color", a10).length > 0 || this.getVisualVariablesForType("opacity", a10).length > 0 || this.getVisualVariablesForType("rotation", a10).length > 0;
    }
    getVisualVariablesForType(r3, a10) {
      const s4 = this.visualVariables;
      return s4 ? s4.filter((s5) => s5.type === r3 && ("string" == typeof a10 ? s5.target === a10 : false !== a10 || !s5.target)) : [];
    }
    collectVVRequiredFields(r3, a10) {
      return __async(this, null, function* () {
        let s4 = [];
        this.visualVariables && (s4 = s4.concat(this.visualVariables));
        for (const i7 of s4) i7 && (i7.field && w2(r3, a10, i7.field), i7.normalizationField && w2(r3, a10, i7.normalizationField), i7.valueExpression && (y5(i7.valueExpression, r3, a10) || (yield h4(r3, a10, i7.valueExpression))));
      });
    }
  };
  return e([y({
    types: [m6],
    value: null,
    json: {
      write: true
    }
  })], u7.prototype, "visualVariables", null), e([o("visualVariables", ["visualVariables", "rotationType", "rotationExpression"])], u7.prototype, "readVisualVariables", null), e([r("visualVariables")], u7.prototype, "writeVisualVariables", null), u7 = e([a2("esri.renderers.mixins.VisualVariablesMixin")], u7), u7;
};
function y5(r3, a10, s4) {
  const i7 = e2(r3);
  return null != i7 && (w2(a10, s4, i7), true);
}

// ../../../node_modules/@arcgis/core/renderers/support/commonProperties.js
var y6 = {
  types: h3,
  json: {
    write: {
      writer: l
    },
    origins: {
      "web-scene": {
        types: w,
        write: {
          writer: l
        },
        read: {
          reader: u2({
            types: w
          })
        }
      }
    }
  }
};
var n10 = n({
  json: {
    origins: {
      "web-scene": {
        write: {
          isRequired: true
        }
      }
    }
  }
}, y6);
var m7 = {
  types: {
    base: n5,
    key: "type",
    typeMap: {
      "simple-fill": j.typeMap["simple-fill"],
      "picture-fill": j.typeMap["picture-fill"],
      "polygon-3d": j.typeMap["polygon-3d"]
    }
  },
  json: {
    write: {
      writer: l
    },
    origins: {
      "web-scene": {
        type: h,
        write: {
          writer: l
        }
      }
    }
  }
};
var w4 = {
  cast: (e3) => null == e3 || "string" == typeof e3 || "number" == typeof e3 ? e3 : `${e3}`,
  json: {
    type: String,
    write: {
      writer: (e3, r3) => {
        r3.value = e3?.toString();
      }
    }
  }
};

// ../../../node_modules/@arcgis/core/renderers/support/UniqueValue.js
var c4 = class extends i(f) {
  constructor(o3) {
    super(o3), this.value = null, this.value2 = null, this.value3 = null;
  }
};
e([y(w4)], c4.prototype, "value", void 0), e([y(w4)], c4.prototype, "value2", void 0), e([y(w4)], c4.prototype, "value3", void 0), c4 = e([a2("esri.renderers.support.UniqueValue")], c4);
var l3 = c4;

// ../../../node_modules/@arcgis/core/renderers/support/UniqueValueClass.js
var n11 = class extends i(f) {
  constructor(r3) {
    super(r3), this.description = null, this.label = null, this.symbol = null, this.values = null;
  }
  castValues(r3) {
    if (null == r3) return null;
    const o3 = typeof (r3 = Array.isArray(r3) ? r3 : [r3])[0];
    return "string" === o3 || "number" === o3 ? r3.map((r4) => new l3({
      value: r4
    })) : "object" === o3 ? r3[0] instanceof l3 ? r3 : r3.map((r4) => new l3(r4)) : null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], n11.prototype, "description", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], n11.prototype, "label", void 0), e([y(y6)], n11.prototype, "symbol", void 0), e([y({
  type: [l3],
  json: {
    type: [[String]],
    read: {
      reader: (r3) => r3 ? r3.map((r4) => new l3({
        value: r4[0],
        value2: r4[1],
        value3: r4[2]
      })) : null
    },
    write: {
      writer: (r3, e3) => {
        const t4 = [];
        for (const s4 of r3) {
          const r4 = [s4.value, s4.value2, s4.value3].filter(O).map((r5) => r5.toString());
          t4.push(r4);
        }
        e3.values = t4;
      }
    }
  }
})], n11.prototype, "values", void 0), e([s3("values")], n11.prototype, "castValues", null), n11 = e([a2("esri.renderers.support.UniqueValueClass")], n11);
var u6 = n11;

// ../../../node_modules/@arcgis/core/renderers/support/UniqueValueGroup.js
var i6 = class extends i(f) {
  constructor(o3) {
    super(o3), this.heading = null, this.classes = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i6.prototype, "heading", void 0), e([y({
  type: [u6],
  json: {
    write: true
  }
})], i6.prototype, "classes", void 0), i6 = e([a2("esri.renderers.support.UniqueValueGroup")], i6);
var c5 = i6;

// ../../../node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js
var l4;
var p11 = l4 = class extends f {
  constructor(o3) {
    super(o3), this.description = null, this.label = null, this.symbol = null, this.value = null;
  }
  clone() {
    return new l4({
      value: this.value,
      description: this.description,
      label: this.label,
      symbol: this.symbol ? this.symbol.clone() : null
    });
  }
  getMeshHash() {
    const o3 = JSON.stringify(this.symbol?.toJSON());
    return `${this.value}.${o3}`;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p11.prototype, "description", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p11.prototype, "label", void 0), e([y(n10)], p11.prototype, "symbol", void 0), e([y(w4)], p11.prototype, "value", void 0), p11 = l4 = e([a2("esri.renderers.support.UniqueValueInfo")], p11);
var n12 = p11;

// ../../../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js
var E;
var M = "esri.renderers.UniqueValueRenderer";
var N2 = () => n2.getLogger(M);
var R = "uvInfos-watcher";
var P = "uvGroups-watcher";
var C2 = ",";
var $ = b(n12);
function z(e3) {
  const {
    field1: t4,
    field2: s4,
    field3: i7,
    fieldDelimiter: o3,
    uniqueValueInfos: l5,
    valueExpression: r3
  } = e3, u7 = !(!t4 || !s4);
  return [{
    classes: (l5 ?? []).map((e4) => {
      const {
        symbol: l6,
        label: n13,
        value: a10,
        description: p12
      } = e4, [f4, d4, c6] = u7 ? a10?.toString()?.split(o3 || "") || [] : [a10], h8 = [];
      return (t4 || r3) && h8.push(f4), s4 && h8.push(d4), i7 && h8.push(c6), {
        symbol: l6,
        label: n13,
        values: [h8],
        description: p12
      };
    })
  }];
}
var k = E = class extends v2(p7) {
  constructor(e3) {
    super(e3), this._valueInfoMap = {}, this._isDefaultSymbolDerived = false, this._isInfosSource = null, this.type = "unique-value", this.backgroundFillSymbol = null, this.orderByClassesEnabled = false, this.valueExpressionTitle = null, this.legendOptions = null, this.defaultLabel = null, this.portal = null, this.styleOrigin = null, this.diff = {
      uniqueValueInfos(e4, t4) {
        if (!e4 && !t4) return;
        if (!e4 || !t4) return {
          type: "complete",
          oldValue: e4,
          newValue: t4
        };
        let s4 = false;
        const i7 = {
          type: "collection",
          added: [],
          removed: [],
          changed: [],
          unchanged: []
        };
        for (let o3 = 0; o3 < t4.length; o3++) {
          const l5 = e4.find((e5) => e5.value === t4[o3].value);
          l5 ? d2(l5, t4[o3]) ? (i7.changed.push({
            type: "complete",
            oldValue: l5,
            newValue: t4[o3]
          }), s4 = true) : i7.unchanged.push({
            oldValue: l5,
            newValue: t4[o3]
          }) : (i7.added.push(t4[o3]), s4 = true);
        }
        for (let o3 = 0; o3 < e4.length; o3++) {
          t4.find((t5) => t5.value === e4[o3].value) || (i7.removed.push(e4[o3]), s4 = true);
        }
        return s4 ? i7 : void 0;
      }
    }, this._set("uniqueValueInfos", []), this._set("uniqueValueGroups", []);
  }
  get _cache() {
    return {
      compiledFunc: null
    };
  }
  set field(e3) {
    this._set("field", e3), this._updateFieldDelimiter(), this._updateUniqueValues();
  }
  castField(e3) {
    return null == e3 || "function" == typeof e3 ? e3 : u(e3);
  }
  writeField(e3, t4, i7, o3) {
    "string" == typeof e3 ? t4[i7] = e3 : o3?.messages ? o3.messages.push(new s("property:unsupported", "UniqueValueRenderer.field set to a function cannot be written to JSON")) : N2().error(".field: cannot write field to JSON since it's not a string value");
  }
  set field2(e3) {
    this._set("field2", e3), this._updateFieldDelimiter(), this._updateUniqueValues();
  }
  set field3(e3) {
    this._set("field3", e3), this._updateUniqueValues();
  }
  set valueExpression(e3) {
    this._set("valueExpression", e3), this._updateUniqueValues();
  }
  set defaultSymbol(e3) {
    this._isDefaultSymbolDerived = false, this._set("defaultSymbol", e3);
  }
  set fieldDelimiter(e3) {
    this._set("fieldDelimiter", e3), this._updateUniqueValues();
  }
  readPortal(e3, t4, s4) {
    return s4.portal || C.getDefault();
  }
  readStyleOrigin(e3, t4, s4) {
    if (t4.styleName) return Object.freeze({
      styleName: t4.styleName
    });
    if (t4.styleUrl) {
      const e4 = p(t4.styleUrl, s4);
      return Object.freeze({
        styleUrl: e4
      });
    }
  }
  writeStyleOrigin(e3, t4, s4, i7) {
    e3.styleName ? t4.styleName = e3.styleName : e3.styleUrl && (t4.styleUrl = m(e3.styleUrl, i7));
  }
  set uniqueValueGroups(e3) {
    this.styleOrigin ? N2().error("#uniqueValueGroups=", "Cannot modify unique value groups of a UniqueValueRenderer created from a web style") : (this._set("uniqueValueGroups", e3), this._updateInfosFromGroups(), this._isInfosSource = false, this._watchUniqueValueGroups());
  }
  set uniqueValueInfos(e3) {
    this.styleOrigin ? N2().error("#uniqueValueInfos=", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style") : (this._set("uniqueValueInfos", e3), this._updateValueInfoMap(), this._updateGroupsFromInfos(), this._isInfosSource = true, this._watchUniqueValueInfos());
  }
  addUniqueValueInfo(e3, s4) {
    if (this.styleOrigin) return void N2().error("#addUniqueValueInfo()", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style");
    let i7;
    i7 = "object" == typeof e3 ? $(e3) : new n12({
      value: e3,
      symbol: B(s4)
    }), this.uniqueValueInfos?.push(i7), this._valueInfoMap[i7.value] = i7, this._updateGroupsFromInfos(), this._isInfosSource = true, this._watchUniqueValueInfos();
  }
  removeUniqueValueInfo(e3) {
    if (this.styleOrigin) return void N2().error("#removeUniqueValueInfo()", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style");
    const t4 = this.uniqueValueInfos;
    if (t4) for (let s4 = 0; s4 < t4.length; s4++) {
      const i7 = t4[s4];
      if (String(i7.value) === String(e3)) {
        delete this._valueInfoMap[e3], t4.splice(s4, 1);
        break;
      }
    }
    this._updateGroupsFromInfos(), this._isInfosSource = true, this._watchUniqueValueInfos();
  }
  getUniqueValueInfo(e3, t4) {
    return __async(this, null, function* () {
      let s4 = t4;
      return this.valueExpression && null == t4?.arcade && (s4 = __spreadProps(__spreadValues({}, s4), {
        arcade: yield i2()
      })), this._getUniqueValueInfo(e3, s4);
    });
  }
  getSymbol(e3, t4) {
    if (this.valueExpression && null == t4?.arcade) return void N2().error("#getSymbol()", "Please use getSymbolAsync if valueExpression is used");
    const s4 = this._getUniqueValueInfo(e3, t4);
    return s4?.symbol || this.defaultSymbol;
  }
  getSymbolAsync(e3, t4) {
    return __async(this, null, function* () {
      let s4 = t4;
      if (this.valueExpression && null == s4?.arcade) {
        const e4 = yield i2(), {
          arcadeUtils: t5
        } = e4;
        t5.hasGeometryOperations(this.valueExpression) && (yield t5.enableGeometryOperations()), s4 = __spreadProps(__spreadValues({}, s4), {
          arcade: e4
        });
      }
      const i7 = this._getUniqueValueInfo(e3, s4);
      return i7?.symbol || this.defaultSymbol;
    });
  }
  getSymbols() {
    const e3 = [];
    for (const t4 of this.uniqueValueInfos ?? []) t4.symbol && e3.push(t4.symbol);
    return this.defaultSymbol && e3.push(this.defaultSymbol), e3;
  }
  getAttributeHash() {
    return this.visualVariables && this.visualVariables.reduce((e3, t4) => e3 + t4.getAttributeHash(), "");
  }
  getMeshHash() {
    const e3 = JSON.stringify(this.backgroundFillSymbol), t4 = JSON.stringify(this.defaultSymbol), s4 = this.uniqueValueInfos?.reduce((e4, t5) => e4 + t5.getMeshHash(), "");
    return `${e3}.${t4}.${s4}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`;
  }
  clone() {
    const e3 = new E({
      field: this.field,
      field2: this.field2,
      field3: this.field3,
      defaultLabel: this.defaultLabel,
      defaultSymbol: a(this.defaultSymbol),
      orderByClassesEnabled: this.orderByClassesEnabled,
      valueExpression: this.valueExpression,
      valueExpressionTitle: this.valueExpressionTitle,
      fieldDelimiter: this.fieldDelimiter,
      visualVariables: a(this.visualVariables),
      legendOptions: a(this.legendOptions),
      authoringInfo: a(this.authoringInfo),
      backgroundFillSymbol: a(this.backgroundFillSymbol)
    });
    this._isDefaultSymbolDerived && (e3._isDefaultSymbolDerived = true), e3._set("portal", this.portal);
    const t4 = a(this.uniqueValueInfos), s4 = a(this.uniqueValueGroups);
    return this.styleOrigin && (e3._set("styleOrigin", Object.freeze(a(this.styleOrigin))), Object.freeze(t4), Object.freeze(s4)), e3._set("uniqueValueInfos", t4), e3._updateValueInfoMap(), e3._set("uniqueValueGroups", s4), e3._isInfosSource = this._isInfosSource, e3._watchUniqueValueInfosAndGroups(), e3;
  }
  get arcadeRequired() {
    return this.arcadeRequiredForVisualVariables || !!this.valueExpression;
  }
  collectRequiredFields(e3, t4) {
    return __async(this, null, function* () {
      const s4 = [this.collectVVRequiredFields(e3, t4), this.collectSymbolFields(e3, t4)];
      yield Promise.all(s4);
    });
  }
  collectSymbolFields(e3, t4) {
    return __async(this, null, function* () {
      const s4 = [...this.getSymbols().map((s5) => s5.collectRequiredFields(e3, t4)), h4(e3, t4, this.valueExpression)];
      w2(e3, t4, this.field), w2(e3, t4, this.field2), w2(e3, t4, this.field3), yield Promise.all(s4);
    });
  }
  populateFromStyle() {
    return y2(this.styleOrigin, {
      portal: this.portal
    }).then((e3) => {
      const t4 = [];
      return this._valueInfoMap = {}, e3?.data && Array.isArray(e3.data.items) && e3.data.items.forEach((s4) => {
        const i7 = new h2({
          styleUrl: e3.styleUrl,
          styleName: e3.styleName,
          portal: this.portal,
          name: s4.name
        });
        this.defaultSymbol || s4.name !== e3.data.defaultItem || (this.defaultSymbol = i7, this._isDefaultSymbolDerived = true);
        const o3 = new n12({
          value: s4.name,
          symbol: i7
        });
        t4.push(o3), this._valueInfoMap[s4.name] = o3;
      }), this._set("uniqueValueInfos", Object.freeze(t4)), this._updateGroupsFromInfos(true), this._isInfosSource = null, this._watchUniqueValueInfos(), !this.defaultSymbol && this.uniqueValueInfos?.length && (this.defaultSymbol = this.uniqueValueInfos[0].symbol, this._isDefaultSymbolDerived = true), this;
    });
  }
  _updateFieldDelimiter() {
    this.field && this.field2 && !this.fieldDelimiter && this._set("fieldDelimiter", C2);
  }
  _updateUniqueValues() {
    null != this._isInfosSource && (this._isInfosSource ? this._updateGroupsFromInfos() : this._updateInfosFromGroups());
  }
  _updateValueInfoMap() {
    this._valueInfoMap = {};
    const {
      uniqueValueInfos: e3
    } = this;
    if (e3) for (const t4 of e3) this._valueInfoMap[t4.value + ""] = t4;
  }
  _watchUniqueValueInfosAndGroups() {
    this._watchUniqueValueInfos(), this._watchUniqueValueGroups();
  }
  _watchUniqueValueInfos() {
    this.removeHandles(R);
    const {
      uniqueValueInfos: e3
    } = this;
    if (e3) {
      const t4 = [];
      for (const s4 of e3) t4.push(d(() => ({
        symbol: s4.symbol,
        value: s4.value,
        label: s4.label,
        description: s4.description
      }), (e4, t5) => {
        e4 !== t5 && (this._updateGroupsFromInfos(), this._isInfosSource = true);
      }, {
        sync: true
      }));
      this.addHandles(t4, R);
    }
  }
  _watchUniqueValueGroups() {
    this.removeHandles(P);
    const {
      uniqueValueGroups: e3
    } = this;
    if (e3) {
      const t4 = [];
      for (const s4 of e3) {
        t4.push(d(() => ({
          classes: s4.classes
        }), (e4, t5) => {
          e4 !== t5 && (this._updateInfosFromGroups(), this._isInfosSource = false);
        }, {
          sync: true
        }));
        for (const e4 of s4.classes ?? []) t4.push(d(() => ({
          symbol: e4.symbol,
          values: e4.values,
          label: e4.label,
          description: e4.description
        }), (e5, t5) => {
          e5 !== t5 && (this._updateInfosFromGroups(), this._isInfosSource = false);
        }, {
          sync: true
        }));
      }
      this.addHandles(t4, P);
    }
  }
  _updateInfosFromGroups() {
    if (!this.uniqueValueGroups) return this._set("uniqueValueInfos", null), this._updateValueInfoMap(), void this._watchUniqueValueInfos();
    const e3 = [], {
      field: t4,
      field2: s4,
      field3: i7,
      fieldDelimiter: o3,
      uniqueValueGroups: l5,
      valueExpression: r3
    } = this;
    if (!t4 && !r3) return this._set("uniqueValueInfos", e3), this._updateValueInfoMap(), void this._watchUniqueValueInfos();
    const u7 = !(!t4 || !s4);
    for (const n13 of l5) for (const t5 of n13.classes ?? []) {
      const {
        symbol: l6,
        label: r4,
        values: n14,
        description: a10
      } = t5;
      for (const t6 of n14 ?? []) {
        const {
          value: n15,
          value2: p12,
          value3: f4
        } = t6, d4 = [n15];
        s4 && d4.push(p12), i7 && d4.push(f4);
        const c6 = u7 ? d4.join(o3 || "") : d4[0] ?? void 0;
        e3.push(new n12({
          symbol: l6,
          label: r4,
          value: c6,
          description: a10
        }));
      }
    }
    this._set("uniqueValueInfos", e3), this._updateValueInfoMap(), this._watchUniqueValueInfos();
  }
  _updateGroupsFromInfos(e3 = false) {
    if (!this.uniqueValueInfos) return this._set("uniqueValueGroups", null), void this._watchUniqueValueGroups();
    const {
      field: t4,
      field2: s4,
      valueExpression: i7,
      fieldDelimiter: o3,
      uniqueValueInfos: l5
    } = this;
    if (!t4 && !i7 || !l5.length) return this._set("uniqueValueGroups", []), void this._watchUniqueValueGroups();
    const r3 = !(!t4 || !s4), u7 = l5.map((e4) => {
      const {
        symbol: t5,
        label: s5,
        value: i8,
        description: l6
      } = e4, [u8, n14, a10] = r3 ? i8?.toString()?.split(o3 || "") || [] : [i8];
      return new u6({
        symbol: t5,
        label: s5,
        description: l6,
        values: [new l3({
          value: u8,
          value2: n14,
          value3: a10
        })]
      });
    }), n13 = [new c5({
      classes: u7
    })];
    e3 && Object.freeze(n13), this._set("uniqueValueGroups", n13), this._watchUniqueValueGroups();
  }
  _getUniqueValueInfo(e3, t4) {
    return this.valueExpression ? this._getUnqiueValueInfoForExpression(e3, t4) : this._getUnqiueValueInfoForFields(e3);
  }
  _getUnqiueValueInfoForExpression(e3, t4) {
    const {
      viewingMode: s4,
      scale: i7,
      spatialReference: o3,
      arcade: l5,
      timeZone: r3
    } = t4 ?? {};
    let u7 = this._cache.compiledFunc;
    const n13 = l5.arcadeUtils;
    if (!u7) {
      const e4 = n13.createSyntaxTree(this.valueExpression);
      u7 = n13.createFunction(e4), this._cache.compiledFunc = u7;
    }
    const a10 = n13.executeFunction(u7, n13.createExecContext(e3, n13.getViewInfo({
      viewingMode: s4,
      scale: i7,
      spatialReference: o3
    }), r3));
    return this._valueInfoMap[a10 + ""];
  }
  _getUnqiueValueInfoForFields(e3) {
    const t4 = this.field, s4 = e3.attributes;
    let i7;
    if (this.field2) {
      const e4 = this.field2, o3 = this.field3, l5 = [];
      t4 && l5.push(s4[t4]), e4 && l5.push(s4[e4]), o3 && l5.push(s4[o3]), i7 = l5.join(this.fieldDelimiter || "");
    } else t4 && (i7 = s4[t4]);
    return this._valueInfoMap[i7 + ""];
  }
  static fromPortalStyle(e3, t4) {
    const s4 = new E(t4?.properties);
    s4._set("styleOrigin", Object.freeze({
      styleName: e3
    })), s4._set("portal", t4?.portal || C.getDefault());
    const i7 = s4.populateFromStyle();
    return i7.catch((t5) => {
      N2().error(`#fromPortalStyle('${e3}'[, ...])`, "Failed to create unique value renderer from style name", t5);
    }), i7;
  }
  static fromStyleUrl(e3, t4) {
    const s4 = new E(t4?.properties);
    s4._set("styleOrigin", Object.freeze({
      styleUrl: e3
    }));
    const i7 = s4.populateFromStyle();
    return i7.catch((t5) => {
      N2().error(`#fromStyleUrl('${e3}'[, ...])`, "Failed to create unique value renderer from style URL", t5);
    }), i7;
  }
};
e([y({
  readOnly: true
})], k.prototype, "_cache", null), e([o2({
  uniqueValue: "unique-value"
})], k.prototype, "type", void 0), e([y(m7)], k.prototype, "backgroundFillSymbol", void 0), e([y({
  value: null,
  json: {
    type: String,
    read: {
      source: "field1"
    },
    write: {
      target: "field1"
    }
  }
})], k.prototype, "field", null), e([s3("field")], k.prototype, "castField", null), e([r("field")], k.prototype, "writeField", null), e([y({
  type: String,
  value: null,
  json: {
    write: true
  }
})], k.prototype, "field2", null), e([y({
  type: String,
  value: null,
  json: {
    write: true
  }
})], k.prototype, "field3", null), e([y({
  type: Boolean,
  json: {
    name: "drawInClassOrder",
    default: false,
    write: true,
    origins: {
      "web-scene": {
        write: false
      }
    }
  }
})], k.prototype, "orderByClassesEnabled", void 0), e([y({
  type: String,
  value: null,
  json: {
    write: true
  }
})], k.prototype, "valueExpression", null), e([y({
  type: String,
  json: {
    write: true
  }
})], k.prototype, "valueExpressionTitle", void 0), e([y({
  type: p3,
  json: {
    write: true
  }
})], k.prototype, "legendOptions", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], k.prototype, "defaultLabel", void 0), e([y(n(__spreadValues({}, y6), {
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: !this._isDefaultSymbolDerived
        };
      }
    },
    origins: {
      "web-scene": {
        write: {
          overridePolicy() {
            return {
              enabled: !this._isDefaultSymbolDerived
            };
          }
        }
      }
    }
  }
}))], k.prototype, "defaultSymbol", null), e([y({
  type: String,
  value: null,
  json: {
    write: true
  }
})], k.prototype, "fieldDelimiter", null), e([y({
  type: C,
  readOnly: true
})], k.prototype, "portal", void 0), e([o("portal", ["styleName"])], k.prototype, "readPortal", null), e([y({
  readOnly: true,
  json: {
    write: {
      enabled: false,
      overridePolicy: () => ({
        enabled: true
      })
    }
  }
})], k.prototype, "styleOrigin", void 0), e([o("styleOrigin", ["styleName", "styleUrl"])], k.prototype, "readStyleOrigin", null), e([r("styleOrigin", {
  styleName: {
    type: String
  },
  styleUrl: {
    type: String
  }
})], k.prototype, "writeStyleOrigin", null), e([y({
  type: [c5],
  json: {
    read: {
      source: ["uniqueValueGroups", "uniqueValueInfos"],
      reader: (e3, t4, s4) => (t4.uniqueValueGroups || z(t4)).map((e4) => c5.fromJSON(e4, s4))
    },
    write: {
      overridePolicy() {
        return this.styleOrigin ? {
          enabled: false
        } : {
          enabled: true
        };
      }
    }
  }
})], k.prototype, "uniqueValueGroups", null), e([y({
  type: [n12],
  json: {
    read: false,
    write: {
      overridePolicy() {
        return this.styleOrigin ? {
          enabled: false
        } : {
          enabled: true
        };
      }
    }
  }
})], k.prototype, "uniqueValueInfos", null), k = E = e([a2(M)], k);
var A = k;

export {
  j2 as j,
  p7 as p,
  e2 as e,
  n9 as n,
  v2 as v,
  y6 as y,
  n10 as n2,
  m7 as m,
  n12 as n3,
  A
};
//# sourceMappingURL=chunk-WR2NVDOI.js.map
