import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o3
} from "./chunk-2EJFYNM7.js";
import {
  h2 as h
} from "./chunk-I2TVVMQ6.js";
import {
  o as o2
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  i,
  n
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
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  o
} from "./chunk-6WGE3IUL.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js
var i2;
var p = i2 = class extends f {
  constructor(r2) {
    super(r2);
  }
  collectRequiredFields(r2, s) {
    return __async(this, null, function* () {
      return h(r2, s, this.expression);
    });
  }
  clone() {
    return new i2({
      expression: this.expression,
      title: this.title
    });
  }
  equals(r2) {
    return this.expression === r2.expression && this.title === r2.title;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "expression", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "title", void 0), p = i2 = e([a("esri.symbols.support.FeatureExpressionInfo")], p);
var n2 = p;

// ../../../node_modules/@arcgis/core/symbols/support/ElevationInfo.js
var l;
var m = i()({
  onTheGround: "on-the-ground",
  relativeToGround: "relative-to-ground",
  relativeToScene: "relative-to-scene",
  absoluteHeight: "absolute-height"
});
var d = new n({
  foot: "feet",
  kilometer: "kilometers",
  meter: "meters",
  mile: "miles",
  "us-foot": "us-feet",
  yard: "yards"
});
var c = l = class extends f {
  constructor(e2) {
    super(e2), this.offset = null;
  }
  readFeatureExpressionInfo(e2, o4) {
    return null != e2 ? e2 : o4.featureExpression && 0 === o4.featureExpression.value ? {
      expression: "0"
    } : void 0;
  }
  writeFeatureExpressionInfo(e2, o4, r2, t) {
    o4[r2] = e2.write({}, t), "0" === e2.expression && (o4.featureExpression = {
      value: 0
    });
  }
  get mode() {
    const {
      offset: e2,
      featureExpressionInfo: o4
    } = this;
    return this._isOverridden("mode") ? this._get("mode") : null != e2 || o4 ? "relative-to-ground" : "on-the-ground";
  }
  set mode(e2) {
    this._override("mode", e2);
  }
  set unit(e2) {
    this._set("unit", e2);
  }
  write(e2, o4) {
    return this.offset || this.mode || this.featureExpressionInfo || this.unit ? super.write(e2, o4) : null;
  }
  clone() {
    return new l({
      mode: this.mode,
      offset: this.offset,
      featureExpressionInfo: this.featureExpressionInfo ? this.featureExpressionInfo.clone() : void 0,
      unit: this.unit
    });
  }
  equals(e2) {
    return this.mode === e2.mode && this.offset === e2.offset && this.unit === e2.unit && o(this.featureExpressionInfo, e2.featureExpressionInfo);
  }
};
e([y({
  type: n2,
  json: {
    write: true
  }
})], c.prototype, "featureExpressionInfo", void 0), e([o2("featureExpressionInfo", ["featureExpressionInfo", "featureExpression"])], c.prototype, "readFeatureExpressionInfo", null), e([r("featureExpressionInfo", {
  featureExpressionInfo: {
    type: n2
  },
  "featureExpression.value": {
    type: [0]
  }
})], c.prototype, "writeFeatureExpressionInfo", null), e([y({
  type: m.apiValues,
  nonNullable: true,
  json: {
    type: m.jsonValues,
    read: m.read,
    write: {
      writer: m.write,
      isRequired: true
    }
  }
})], c.prototype, "mode", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], c.prototype, "offset", void 0), e([y({
  type: o3,
  json: {
    type: String,
    read: d.read,
    write: d.write
  }
})], c.prototype, "unit", null), c = l = e([a("esri.symbols.support.ElevationInfo")], c);
var h2 = c;

export {
  h2 as h
};
//# sourceMappingURL=chunk-BGLJ2FAH.js.map
