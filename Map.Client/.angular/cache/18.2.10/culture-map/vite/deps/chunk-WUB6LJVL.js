import {
  a as a2
} from "./chunk-QXSES7JX.js";
import {
  p
} from "./chunk-63QCTVYB.js";
import {
  v
} from "./chunk-7KRERHHR.js";
import {
  a as a3,
  e as e2,
  i,
  t
} from "./chunk-T4AP6CTC.js";
import {
  o as o2
} from "./chunk-7ZJ6P7J7.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  s as s2
} from "./chunk-NKCPFCP3.js";
import {
  n as n2
} from "./chunk-V5C6HSAM.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a,
  u2 as u
} from "./chunk-DDYVXG4F.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js
var t2;
var p2 = t2 = class extends p {
  constructor() {
    super(...arguments), this.showLegend = null;
  }
  clone() {
    return new t2({
      title: this.title,
      showLegend: this.showLegend
    });
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p2.prototype, "showLegend", void 0), p2 = t2 = e([a("esri.renderers.visualVariables.support.VisualVariableLegendOptions")], p2);
var i2 = p2;

// ../../../node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js
var a4 = new n2({
  colorInfo: "color",
  transparencyInfo: "opacity",
  rotationInfo: "rotation",
  sizeInfo: "size"
});
var u2 = class extends f {
  constructor(e4) {
    super(e4), this.index = null, this.type = null, this.field = null, this.valueExpression = null, this.valueExpressionTitle = null, this.legendOptions = null;
  }
  castField(e4) {
    return null == e4 ? e4 : "function" == typeof e4 ? (n.getLogger(this).error(".field: field must be a string value"), null) : u(e4);
  }
  get arcadeRequired() {
    return !!this.valueExpression;
  }
  clone() {
  }
  getAttributeHash() {
    return `${this.type}-${this.field}-${this.valueExpression}`;
  }
};
e([y()], u2.prototype, "index", void 0), e([y({
  type: a4.apiValues,
  readOnly: true,
  json: {
    read: a4.read,
    write: a4.write
  }
})], u2.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u2.prototype, "field", void 0), e([s2("field")], u2.prototype, "castField", null), e([y({
  type: String,
  json: {
    write: true
  }
})], u2.prototype, "valueExpression", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u2.prototype, "valueExpressionTitle", void 0), e([y({
  readOnly: true
})], u2.prototype, "arcadeRequired", null), e([y({
  type: i2,
  json: {
    write: true
  }
})], u2.prototype, "legendOptions", void 0), u2 = e([a("esri.renderers.visualVariables.VisualVariable")], u2);
var c = u2;

// ../../../node_modules/@arcgis/core/renderers/visualVariables/support/castSizeVariable.js
function e3(e4) {
  return o2(e4);
}

// ../../../node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js
var t3;
var i3 = t3 = class extends i2 {
  constructor() {
    super(...arguments), this.customValues = null;
  }
  clone() {
    return new t3({
      title: this.title,
      showLegend: this.showLegend,
      customValues: this.customValues?.slice(0)
    });
  }
};
e([y({
  type: [Number],
  json: {
    write: true
  }
})], i3.prototype, "customValues", void 0), i3 = t3 = e([a("esri.renderers.visualVariables.support.SizeVariableLegendOptions")], i3);
var a5 = i3;

// ../../../node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js
var z;
var v2 = new n2({
  width: "width",
  depth: "depth",
  height: "height",
  widthAndDepth: "width-and-depth",
  all: "all"
});
var w = new n2({
  unknown: "unknown",
  inch: "inches",
  foot: "feet",
  yard: "yards",
  mile: "miles",
  "nautical-mile": "nautical-miles",
  millimeter: "millimeters",
  centimeter: "centimeters",
  decimeter: "decimeters",
  meter: "meters",
  kilometer: "kilometers",
  "decimal-degree": "decimal-degrees"
});
function g(e4) {
  if (null != e4) return "string" == typeof e4 || "number" == typeof e4 ? e3(e4) : "size" === e4.type ? e2(e4) ? e4 : (delete (e4 = __spreadValues({}, e4)).type, new f2(e4)) : void 0;
}
function V(e4, t4, i4) {
  if ("object" != typeof e4) return e4;
  const s3 = new f2();
  return s3.read(e4, i4), s3;
}
var f2 = z = class extends c {
  constructor(e4) {
    super(e4), this.axis = null, this.legendOptions = null, this.normalizationField = null, this.scaleBy = null, this.target = null, this.type = "size", this.useSymbolValue = null, this.valueExpression = null, this.valueRepresentation = null, this.valueUnit = null;
  }
  get cache() {
    return {
      ipData: this._interpolateData(),
      hasExpression: !!this.valueExpression,
      compiledFunc: null,
      isScaleDriven: null != this.valueExpression && v.test(this.valueExpression)
    };
  }
  set index(e4) {
    e2(this.maxSize) && (this.maxSize.index = `visualVariables[${e4}].maxSize`), e2(this.minSize) && (this.minSize.index = `visualVariables[${e4}].minSize`), this._set("index", e4);
  }
  get inputValueType() {
    return t(this);
  }
  set maxDataValue(e4) {
    e4 && this.stops && (n.getLogger(this).warn("cannot set maxDataValue when stops is not null."), e4 = null), this._set("maxDataValue", e4);
  }
  set maxSize(e4) {
    e4 && this.stops && (n.getLogger(this).warn("cannot set maxSize when stops is not null."), e4 = null), this._set("maxSize", e4);
  }
  castMaxSize(e4) {
    return g(e4);
  }
  readMaxSize(e4, t4, i4) {
    return V(e4, t4, i4);
  }
  set minDataValue(e4) {
    e4 && this.stops && (n.getLogger(this).warn("cannot set minDataValue when stops is not null."), e4 = null), this._set("minDataValue", e4);
  }
  set minSize(e4) {
    e4 && this.stops && (n.getLogger(this).warn("cannot set minSize when stops is not null."), e4 = null), this._set("minSize", e4);
  }
  castMinSize(e4) {
    return g(e4);
  }
  readMinSize(e4, t4, i4) {
    return V(e4, t4, i4);
  }
  get arcadeRequired() {
    return !!this.valueExpression || null != this.minSize && "object" == typeof this.minSize && this.minSize.arcadeRequired || null != this.maxSize && "object" == typeof this.maxSize && this.maxSize.arcadeRequired;
  }
  set stops(e4) {
    null == this.minDataValue && null == this.maxDataValue && null == this.minSize && null == this.maxSize ? e4 && Array.isArray(e4) && (e4 = e4.filter((e5) => !!e5)).sort((e5, t4) => e5.value - t4.value) : e4 && (n.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."), e4 = null), this._set("stops", e4);
  }
  get transformationType() {
    return a3(this, this.inputValueType);
  }
  readValueExpression(e4, t4) {
    return e4 || t4.expression && "$view.scale";
  }
  writeValueExpressionWebScene(e4, i4, s3, r2) {
    if ("$view.scale" === e4) {
      if (r2?.messages) {
        const e5 = this.index, i5 = "string" == typeof e5 ? e5 : `visualVariables[${e5}]`;
        r2.messages.push(new s("property:unsupported", this.type + "VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.", {
          instance: this,
          propertyName: i5 + ".valueExpression",
          context: r2
        }));
      }
    } else i4[s3] = e4;
  }
  readValueUnit(e4) {
    return e4 ? w.read(e4) : null;
  }
  clone() {
    return new z({
      axis: this.axis,
      field: this.field,
      valueExpression: this.valueExpression,
      valueExpressionTitle: this.valueExpressionTitle,
      maxDataValue: this.maxDataValue,
      maxSize: e2(this.maxSize) ? this.maxSize.clone() : this.maxSize,
      minDataValue: this.minDataValue,
      minSize: e2(this.minSize) ? this.minSize.clone() : this.minSize,
      normalizationField: this.normalizationField,
      stops: this.stops?.map((e4) => e4.clone()),
      target: this.target,
      useSymbolValue: this.useSymbolValue,
      valueRepresentation: this.valueRepresentation,
      valueUnit: this.valueUnit,
      legendOptions: this.legendOptions?.clone()
    });
  }
  flipSizes() {
    if (this.transformationType === i.ClampedLinear) {
      const {
        minSize: e4,
        maxSize: t4
      } = this;
      return this.minSize = t4, this.maxSize = e4, this;
    }
    if (this.transformationType === i.Stops) {
      const e4 = this.stops;
      if (!e4) return this;
      const t4 = e4.map((e5) => e5.size).reverse(), i4 = e4.length;
      for (let s3 = 0; s3 < i4; s3++) e4[s3].size = t4[s3];
      return this;
    }
    return this;
  }
  getAttributeHash() {
    return `${super.getAttributeHash()}-${this.target}-${this.normalizationField}`;
  }
  _interpolateData() {
    return this.stops?.map((e4) => e4.value || 0);
  }
};
e([y({
  readOnly: true
})], f2.prototype, "cache", null), e([y({
  type: v2.apiValues,
  json: {
    type: v2.jsonValues,
    origins: {
      "web-map": {
        read: false
      }
    },
    read: v2.read,
    write: v2.write
  }
})], f2.prototype, "axis", void 0), e([y()], f2.prototype, "index", null), e([y({
  type: String,
  readOnly: true
})], f2.prototype, "inputValueType", null), e([y({
  type: a5,
  json: {
    write: true
  }
})], f2.prototype, "legendOptions", void 0), e([y({
  type: Number,
  value: null,
  json: {
    write: true
  }
})], f2.prototype, "maxDataValue", null), e([y({
  type: Number,
  value: null,
  json: {
    write: true
  }
})], f2.prototype, "maxSize", null), e([s2("maxSize")], f2.prototype, "castMaxSize", null), e([o("maxSize")], f2.prototype, "readMaxSize", null), e([y({
  type: Number,
  value: null,
  json: {
    write: true
  }
})], f2.prototype, "minDataValue", null), e([y({
  type: Number,
  value: null,
  json: {
    write: true
  }
})], f2.prototype, "minSize", null), e([s2("minSize")], f2.prototype, "castMinSize", null), e([o("minSize")], f2.prototype, "readMinSize", null), e([y({
  type: String,
  json: {
    write: true
  }
})], f2.prototype, "normalizationField", void 0), e([y({
  readOnly: true
})], f2.prototype, "arcadeRequired", null), e([y({
  type: String
})], f2.prototype, "scaleBy", void 0), e([y({
  type: [a2],
  value: null,
  json: {
    write: true
  }
})], f2.prototype, "stops", null), e([y({
  type: ["outline"],
  json: {
    write: true
  }
})], f2.prototype, "target", void 0), e([y({
  type: String,
  readOnly: true
})], f2.prototype, "transformationType", null), e([y({
  type: ["size"],
  json: {
    type: ["sizeInfo"]
  }
})], f2.prototype, "type", void 0), e([y({
  type: Boolean,
  json: {
    write: true,
    origins: {
      "web-map": {
        read: false
      }
    }
  }
})], f2.prototype, "useSymbolValue", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], f2.prototype, "valueExpression", void 0), e([o("valueExpression", ["valueExpression", "expression"])], f2.prototype, "readValueExpression", null), e([r("web-scene", "valueExpression")], f2.prototype, "writeValueExpressionWebScene", null), e([y({
  type: ["radius", "diameter", "area", "width", "distance"],
  json: {
    write: true
  }
})], f2.prototype, "valueRepresentation", void 0), e([y({
  type: w.apiValues,
  json: {
    write: w.write,
    origins: {
      "web-map": {
        read: false
      },
      "web-scene": {
        write: true
      },
      "portal-item": {
        write: true
      }
    }
  }
})], f2.prototype, "valueUnit", void 0), e([o("valueUnit")], f2.prototype, "readValueUnit", null), f2 = z = e([a("esri.renderers.visualVariables.SizeVariable")], f2);
var b = f2;

export {
  c,
  a5 as a,
  b
};
//# sourceMappingURL=chunk-WUB6LJVL.js.map
