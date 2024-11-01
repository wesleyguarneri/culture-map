import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  m,
  n2 as n3,
  p,
  v,
  y as y2
} from "./chunk-WR2NVDOI.js";
import {
  p as p2
} from "./chunk-WVSTX2NW.js";
import {
  B
} from "./chunk-ZREJ3Y2F.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  h2 as h,
  w2 as w
} from "./chunk-I2TVVMQ6.js";
import {
  i
} from "./chunk-JKPUNUQA.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  s
} from "./chunk-66YQWHHE.js";
import {
  n as n2
} from "./chunk-Y2HYKTTT.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a as a2,
  a3,
  b,
  u2 as u
} from "./chunk-UDMPWVPF.js";
import {
  a,
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/renderers/support/ClassBreakInfo.js
var i2;
var l = i2 = class extends f {
  constructor(e2) {
    super(e2), this.description = null, this.label = null, this.minValue = null, this.maxValue = 0, this.symbol = null;
  }
  clone() {
    return new i2({
      description: this.description,
      label: this.label,
      minValue: this.minValue,
      maxValue: this.maxValue,
      symbol: this.symbol?.clone() ?? null
    });
  }
  getMeshHash() {
    const e2 = JSON.stringify(this.symbol);
    return `${this.minValue}.${this.maxValue}.${e2}`;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "description", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "label", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "classMinValue"
    },
    write: {
      target: "classMinValue"
    }
  }
})], l.prototype, "minValue", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "classMaxValue"
    },
    write: {
      target: "classMaxValue"
    }
  }
})], l.prototype, "maxValue", void 0), e([y(n3)], l.prototype, "symbol", void 0), l = i2 = e([a3("esri.renderers.support.ClassBreakInfo")], l);
var a4 = l;

// ../../../node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var B2;
var V = "log";
var F = "percent-of-total";
var S = "field";
var E = new n2({
  esriNormalizeByLog: V,
  esriNormalizeByPercentOfTotal: F,
  esriNormalizeByField: S
});
var j = b(a4);
var z = B2 = class extends v(p) {
  constructor(e2) {
    super(e2), this._compiledValueExpression = {
      valueExpression: null,
      compiledFunction: null
    }, this.backgroundFillSymbol = null, this.classBreakInfos = null, this.defaultLabel = null, this.defaultSymbol = null, this.field = null, this.isMaxInclusive = true, this.legendOptions = null, this.normalizationField = null, this.normalizationTotal = null, this.type = "class-breaks", this.valueExpression = null, this.valueExpressionTitle = null, this._set("classBreakInfos", []);
  }
  readClassBreakInfos(e2, s2, t) {
    if (!Array.isArray(e2)) return;
    let o3 = s2.minValue;
    return e2.map((e3) => {
      const s3 = new a4();
      return s3.read(e3, t), null == s3.minValue && (s3.minValue = o3), null == s3.maxValue && (s3.maxValue = s3.minValue), o3 = s3.maxValue, s3;
    });
  }
  writeClassBreakInfos(e2, s2, t, o3) {
    const i3 = e2.map((e3) => e3.write({}, o3));
    this._areClassBreaksConsecutive() && i3.forEach((e3) => delete e3.classMinValue), s2[t] = i3;
  }
  castField(e2) {
    return null == e2 ? e2 : "function" == typeof e2 ? (n.getLogger(this).error(".field: field must be a string value"), null) : u(e2);
  }
  get minValue() {
    return this.classBreakInfos && this.classBreakInfos[0] && this.classBreakInfos[0].minValue || 0;
  }
  get normalizationType() {
    let e2 = this._get("normalizationType");
    const s2 = !!this.normalizationField, t = null != this.normalizationTotal;
    return s2 || t ? (e2 = s2 && S || t && F || null, s2 && t && n.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")) : e2 !== S && e2 !== F || (e2 = null), e2;
  }
  set normalizationType(e2) {
    this._set("normalizationType", e2);
  }
  addClassBreakInfo(e2, t, i3) {
    let r2 = null;
    r2 = "number" == typeof e2 ? new a4({
      minValue: e2,
      maxValue: t,
      symbol: B(i3)
    }) : j(a(e2)), this.classBreakInfos.push(r2), 1 === this.classBreakInfos.length && this.notifyChange("minValue");
  }
  removeClassBreakInfo(e2, s2) {
    const t = this.classBreakInfos.length;
    for (let o3 = 0; o3 < t; o3++) {
      const t2 = [this.classBreakInfos[o3].minValue, this.classBreakInfos[o3].maxValue];
      if (t2[0] === e2 && t2[1] === s2) {
        this.classBreakInfos.splice(o3, 1);
        break;
      }
    }
  }
  getBreakIndex(e2, s2) {
    return this.valueExpression && null == s2?.arcade && n.getLogger(this).warn(""), this.valueExpression ? this._getBreakIndexForExpression(e2, s2) : this._getBreakIndexForField(e2);
  }
  getClassBreakInfo(e2, s2) {
    return __async(this, null, function* () {
      let t = s2;
      this.valueExpression && null == s2?.arcade && (t = __spreadProps(__spreadValues({}, t), {
        arcade: yield i()
      }));
      const o3 = this.getBreakIndex(e2, t);
      return -1 !== o3 ? this.classBreakInfos[o3] : null;
    });
  }
  getSymbol(e2, s2) {
    if (this.valueExpression && null == s2?.arcade) return void n.getLogger(this).error("#getSymbol()", "Please use getSymbolAsync if valueExpression is used");
    const t = this.getBreakIndex(e2, s2);
    return t > -1 ? this.classBreakInfos[t].symbol : this.defaultSymbol;
  }
  getSymbolAsync(e2, s2) {
    return __async(this, null, function* () {
      let t = s2;
      if (this.valueExpression && null == s2?.arcade) {
        const e3 = yield i(), {
          arcadeUtils: s3
        } = e3;
        s3.hasGeometryOperations(this.valueExpression) && (yield s3.enableGeometryOperations()), t = __spreadProps(__spreadValues({}, t), {
          arcade: e3
        });
      }
      const o3 = this.getBreakIndex(e2, t);
      return o3 > -1 ? this.classBreakInfos[o3].symbol : this.defaultSymbol;
    });
  }
  getSymbols() {
    const e2 = [];
    return this.classBreakInfos.forEach((s2) => {
      s2.symbol && e2.push(s2.symbol);
    }), this.defaultSymbol && e2.push(this.defaultSymbol), e2;
  }
  getAttributeHash() {
    return this.visualVariables && this.visualVariables.reduce((e2, s2) => e2 + s2.getAttributeHash(), "");
  }
  getMeshHash() {
    const e2 = JSON.stringify(this.backgroundFillSymbol), s2 = JSON.stringify(this.defaultSymbol), t = `${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;
    return `${e2}.${s2}.${this.classBreakInfos.reduce((e3, s3) => e3 + s3.getMeshHash(), "")}.${t}.${this.field}.${this.valueExpression}`;
  }
  get arcadeRequired() {
    return this.arcadeRequiredForVisualVariables || !!this.valueExpression;
  }
  clone() {
    return new B2({
      field: this.field,
      backgroundFillSymbol: this.backgroundFillSymbol?.clone(),
      defaultLabel: this.defaultLabel,
      defaultSymbol: this.defaultSymbol?.clone(),
      valueExpression: this.valueExpression,
      valueExpressionTitle: this.valueExpressionTitle,
      classBreakInfos: a(this.classBreakInfos),
      isMaxInclusive: this.isMaxInclusive,
      normalizationField: this.normalizationField,
      normalizationTotal: this.normalizationTotal,
      normalizationType: this.normalizationType,
      visualVariables: a(this.visualVariables),
      legendOptions: a(this.legendOptions),
      authoringInfo: a(this.authoringInfo)
    });
  }
  collectRequiredFields(e2, s2) {
    return __async(this, null, function* () {
      const t = [this.collectVVRequiredFields(e2, s2), this.collectSymbolFields(e2, s2)];
      yield Promise.all(t);
    });
  }
  collectSymbolFields(e2, s2) {
    return __async(this, null, function* () {
      const t = [...this.getSymbols().map((t2) => t2.collectRequiredFields(e2, s2)), h(e2, s2, this.valueExpression)];
      w(e2, s2, this.field), w(e2, s2, this.normalizationField), yield Promise.all(t);
    });
  }
  _getBreakIndexForExpression(e2, s2) {
    const {
      viewingMode: t,
      scale: o3,
      spatialReference: i3,
      arcade: r2,
      timeZone: a5
    } = s2 ?? {}, {
      valueExpression: l2
    } = this;
    let n4 = this._compiledValueExpression.valueExpression === l2 ? this._compiledValueExpression.compiledFunction : null;
    const u2 = r2.arcadeUtils;
    if (!n4) {
      const e3 = u2.createSyntaxTree(l2);
      n4 = u2.createFunction(e3), this._compiledValueExpression.compiledFunction = n4;
    }
    this._compiledValueExpression.valueExpression = l2;
    const c = u2.executeFunction(n4, u2.createExecContext(e2, u2.getViewInfo({
      viewingMode: t,
      scale: o3,
      spatialReference: i3
    }), a5));
    return this._getBreakIndexfromInfos(c);
  }
  _getBreakIndexForField(e2) {
    const s2 = this.field, t = e2.attributes, o3 = this.normalizationType;
    let i3 = parseFloat(t[s2]);
    if (o3) {
      const e3 = this.normalizationTotal, s3 = parseFloat(this.normalizationField ? t[this.normalizationField] : void 0);
      if (o3 === V) i3 = Math.log(i3) * Math.LOG10E;
      else if (o3 !== F || null == e3 || isNaN(e3)) {
        if (o3 === S && !isNaN(s3)) {
          if (isNaN(i3) || isNaN(s3)) return -1;
          i3 /= s3;
        }
      } else i3 = i3 / e3 * 100;
    }
    return this._getBreakIndexfromInfos(i3);
  }
  _getBreakIndexfromInfos(e2) {
    const s2 = this.isMaxInclusive;
    if (null != e2 && "number" == typeof e2 && !isNaN(e2)) for (let t = 0; t < this.classBreakInfos.length; t++) {
      const o3 = [this.classBreakInfos[t].minValue, this.classBreakInfos[t].maxValue];
      if (o3[0] <= e2 && (s2 ? e2 <= o3[1] : e2 < o3[1])) return t;
    }
    return -1;
  }
  _areClassBreaksConsecutive() {
    const e2 = this.classBreakInfos, s2 = e2.length;
    for (let t = 1; t < s2; t++) if (e2[t - 1].maxValue !== e2[t].minValue) return false;
    return true;
  }
};
e([y(m)], z.prototype, "backgroundFillSymbol", void 0), e([y({
  type: [a4]
})], z.prototype, "classBreakInfos", void 0), e([o("classBreakInfos")], z.prototype, "readClassBreakInfos", null), e([r("classBreakInfos")], z.prototype, "writeClassBreakInfos", null), e([y({
  type: String,
  json: {
    write: true
  }
})], z.prototype, "defaultLabel", void 0), e([y(y2)], z.prototype, "defaultSymbol", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], z.prototype, "field", void 0), e([s("field")], z.prototype, "castField", null), e([y({
  type: Boolean
})], z.prototype, "isMaxInclusive", void 0), e([y({
  type: p2,
  json: {
    write: true
  }
})], z.prototype, "legendOptions", void 0), e([y({
  type: Number,
  readOnly: true,
  value: null,
  json: {
    read: false,
    write: {
      overridePolicy() {
        return 0 !== this.classBreakInfos.length && this._areClassBreaksConsecutive() ? {
          enabled: true
        } : {
          enabled: false
        };
      }
    }
  }
})], z.prototype, "minValue", null), e([y({
  type: String,
  json: {
    write: true
  }
})], z.prototype, "normalizationField", void 0), e([y({
  type: Number,
  cast: (e2) => a2(e2),
  json: {
    write: true
  }
})], z.prototype, "normalizationTotal", void 0), e([y({
  type: E.apiValues,
  value: null,
  json: {
    type: E.jsonValues,
    read: E.read,
    write: E.write
  }
})], z.prototype, "normalizationType", null), e([o2({
  classBreaks: "class-breaks"
})], z.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], z.prototype, "valueExpression", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], z.prototype, "valueExpressionTitle", void 0), z = B2 = e([a3("esri.renderers.ClassBreaksRenderer")], z);
var w2 = z;

export {
  a4 as a,
  w2 as w
};
//# sourceMappingURL=chunk-AGBPYPP3.js.map
