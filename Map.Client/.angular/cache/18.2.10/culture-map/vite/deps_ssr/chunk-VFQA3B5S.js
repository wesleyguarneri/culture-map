import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  E,
  _,
  f as f2,
  g,
  u,
  x
} from "./chunk-WFNAKG2H.js";
import {
  i
} from "./chunk-GNFDYYU3.js";
import {
  a as a3
} from "./chunk-X36BR2QB.js";
import {
  F,
  P
} from "./chunk-ZREJ3Y2F.js";
import {
  b
} from "./chunk-7V4JSBFA.js";
import {
  o as o2
} from "./chunk-VYTPFEL2.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
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
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js
var l;
var n3 = l = class extends f {
  constructor() {
    super(...arguments), this.expression = null, this.title = null, this.value = null;
  }
  readExpression(r2, e2) {
    return e2.value ? E(e2.value) : r2;
  }
  writeExpression(r2, e2, o3) {
    null != this.value && (r2 = E(this.value)), null != r2 && (e2[o3] = r2);
  }
  clone() {
    return new l({
      expression: this.expression,
      title: this.title,
      value: this.value
    });
  }
};
e([y({
  type: String,
  json: {
    write: {
      writerEnsuresNonNull: true
    }
  }
})], n3.prototype, "expression", void 0), e([o("expression", ["expression", "value"])], n3.prototype, "readExpression", null), e([r("expression")], n3.prototype, "writeExpression", null), e([y({
  type: String,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false
      }
    }
  }
})], n3.prototype, "title", void 0), e([y({
  json: {
    read: false,
    write: false
  }
})], n3.prototype, "value", void 0), n3 = l = e([a2("esri.layers.support.LabelExpressionInfo")], n3);
var a4 = n3;

// ../../../node_modules/@arcgis/core/layers/support/LabelClass.js
var S;
var L = new n2({
  esriServerPointLabelPlacementAboveCenter: "above-center",
  esriServerPointLabelPlacementAboveLeft: "above-left",
  esriServerPointLabelPlacementAboveRight: "above-right",
  esriServerPointLabelPlacementBelowCenter: "below-center",
  esriServerPointLabelPlacementBelowLeft: "below-left",
  esriServerPointLabelPlacementBelowRight: "below-right",
  esriServerPointLabelPlacementCenterCenter: "center-center",
  esriServerPointLabelPlacementCenterLeft: "center-left",
  esriServerPointLabelPlacementCenterRight: "center-right",
  esriServerLinePlacementAboveAfter: "above-after",
  esriServerLinePlacementAboveAlong: "above-along",
  esriServerLinePlacementAboveBefore: "above-before",
  esriServerLinePlacementAboveStart: "above-start",
  esriServerLinePlacementAboveEnd: "above-end",
  esriServerLinePlacementBelowAfter: "below-after",
  esriServerLinePlacementBelowAlong: "below-along",
  esriServerLinePlacementBelowBefore: "below-before",
  esriServerLinePlacementBelowStart: "below-start",
  esriServerLinePlacementBelowEnd: "below-end",
  esriServerLinePlacementCenterAfter: "center-after",
  esriServerLinePlacementCenterAlong: "center-along",
  esriServerLinePlacementCenterBefore: "center-before",
  esriServerLinePlacementCenterStart: "center-start",
  esriServerLinePlacementCenterEnd: "center-end",
  esriServerPolygonPlacementAlwaysHorizontal: "always-horizontal"
}, {
  ignoreUnknown: true
});
function P2(e2, r2, t2) {
  return {
    enabled: !b(t2?.layer)
  };
}
function x2(e2) {
  return !e2 || "service" !== e2.origin && !("map-image" === e2.layer?.type);
}
function g2(e2) {
  return "map-image" === e2?.type;
}
function E2(e2) {
  return !!g2(e2) && !!e2.capabilities?.exportMap?.supportsArcadeExpressionForLabeling;
}
function j(e2) {
  return x2(e2) || E2(e2?.layer);
}
var A = S = class extends f {
  static evaluateWhere(e2, r2) {
    const t2 = (e3, r3, t3) => {
      switch (r3) {
        case "=":
          return e3 == t3;
        case "<>":
          return e3 != t3;
        case ">":
          return e3 > t3;
        case ">=":
          return e3 >= t3;
        case "<":
          return e3 < t3;
        case "<=":
          return e3 <= t3;
      }
      return false;
    };
    try {
      if (null == e2) return true;
      const o3 = e2.split(" ");
      if (3 === o3.length) return t2(r2[o3[0]], o3[1], o3[2]);
      if (7 === o3.length) {
        const e3 = t2(r2[o3[0]], o3[1], o3[2]), i3 = o3[3], l3 = t2(r2[o3[4]], o3[5], o3[6]);
        switch (i3) {
          case "AND":
            return e3 && l3;
          case "OR":
            return e3 || l3;
        }
      }
      return false;
    } catch (o3) {
    }
  }
  constructor(e2) {
    super(e2), this.type = "label", this.name = null, this.allowOverrun = false, this.deconflictionStrategy = "static", this.labelExpression = null, this.labelExpressionInfo = null, this.labelPlacement = null, this.labelPosition = "curved", this.maxScale = 0, this.minScale = 0, this.repeatLabel = true, this.repeatLabelDistance = null, this.symbol = a3, this.useCodedValues = void 0, this.where = null;
  }
  readLabelExpression(e2, r2) {
    const t2 = r2.labelExpressionInfo;
    if (!t2 || !t2.value && !t2.expression) return e2;
  }
  writeLabelExpression(e2, r2, t2) {
    if (this.labelExpressionInfo) {
      if (null != this.labelExpressionInfo.value) e2 = u(this.labelExpressionInfo.value);
      else if (null != this.labelExpressionInfo.expression) {
        const r3 = _(this.labelExpressionInfo.expression);
        r3 && (e2 = "[" + r3 + "]");
      }
    }
    null != e2 && (r2[t2] = e2);
  }
  writeLabelExpressionInfo(e2, r2, t2, o3) {
    if (null == e2 && null != this.labelExpression && x2(o3)) e2 = new a4({
      expression: this.getLabelExpressionArcade()
    });
    else if (!e2) return;
    const i3 = e2.toJSON(o3);
    i3.expression && (r2[t2] = i3);
  }
  writeMaxScale(e2, r2) {
    (e2 || this.minScale) && (r2.maxScale = e2);
  }
  writeMinScale(e2, r2) {
    (e2 || this.maxScale) && (r2.minScale = e2);
  }
  getLabelExpression() {
    return x(this);
  }
  getLabelExpressionArcade() {
    return f2(this);
  }
  getLabelExpressionSingleField() {
    return g(this);
  }
  hash() {
    return JSON.stringify(this);
  }
  clone() {
    return new S({
      allowOverrun: this.allowOverrun,
      deconflictionStrategy: this.deconflictionStrategy,
      labelExpression: this.labelExpression,
      labelExpressionInfo: a(this.labelExpressionInfo),
      labelPosition: this.labelPosition,
      labelPlacement: this.labelPlacement,
      maxScale: this.maxScale,
      minScale: this.minScale,
      name: this.name,
      repeatLabel: this.repeatLabel,
      repeatLabelDistance: this.repeatLabelDistance,
      symbol: a(this.symbol),
      where: this.where,
      useCodedValues: this.useCodedValues
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], A.prototype, "name", void 0), e([y({
  type: Boolean,
  json: {
    write: true,
    default: false,
    origins: {
      "web-scene": {
        write: false
      },
      "portal-item": {
        default: false,
        write: {
          overridePolicy: P2
        }
      }
    }
  }
})], A.prototype, "allowOverrun", void 0), e([y({
  type: String,
  json: {
    write: true,
    default: "static",
    origins: {
      "web-scene": {
        write: false
      },
      "portal-item": {
        default: "static",
        write: {
          overridePolicy: P2
        }
      }
    }
  }
})], A.prototype, "deconflictionStrategy", void 0), e([y({
  type: String,
  json: {
    write: {
      overridePolicy(e2, r2, t2) {
        return this.labelExpressionInfo && "service" === t2?.origin && E2(t2.layer) ? {
          enabled: false
        } : {
          allowNull: true
        };
      }
    }
  }
})], A.prototype, "labelExpression", void 0), e([o("labelExpression")], A.prototype, "readLabelExpression", null), e([r("labelExpression")], A.prototype, "writeLabelExpression", null), e([y({
  type: a4,
  json: {
    write: {
      overridePolicy: (e2, r2, t2) => j(t2) ? {
        allowNull: true
      } : {
        enabled: false
      }
    }
  }
})], A.prototype, "labelExpressionInfo", void 0), e([r("labelExpressionInfo")], A.prototype, "writeLabelExpressionInfo", null), e([y({
  type: L.apiValues,
  json: {
    type: L.jsonValues,
    read: L.read,
    write: L.write
  }
})], A.prototype, "labelPlacement", void 0), e([y({
  type: ["curved", "parallel"],
  json: {
    write: true,
    origins: {
      "web-map": {
        write: false
      },
      "web-scene": {
        write: false
      },
      "portal-item": {
        write: false
      }
    }
  }
})], A.prototype, "labelPosition", void 0), e([y({
  type: Number
})], A.prototype, "maxScale", void 0), e([r("maxScale")], A.prototype, "writeMaxScale", null), e([y({
  type: Number
})], A.prototype, "minScale", void 0), e([r("minScale")], A.prototype, "writeMinScale", null), e([y({
  type: Boolean,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false
      },
      "portal-item": {
        write: {
          overridePolicy: P2
        }
      }
    }
  }
})], A.prototype, "repeatLabel", void 0), e([y({
  type: Number,
  cast: o2,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false
      },
      "portal-item": {
        write: {
          overridePolicy: P2
        }
      }
    }
  }
})], A.prototype, "repeatLabelDistance", void 0), e([y({
  types: F,
  json: {
    origins: {
      "web-scene": {
        types: P,
        write: i,
        default: null
      }
    },
    write: i,
    default: null
  }
})], A.prototype, "symbol", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], A.prototype, "useCodedValues", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], A.prototype, "where", void 0), A = S = e([a2("esri.layers.support.LabelClass")], A);
var C = A;

// ../../../node_modules/@arcgis/core/layers/support/labelingInfo.js
var t = () => n.getLogger("esri.layers.support.labelingInfo");
var n4 = /\[([^[\]]+)\]/gi;
function l2(e2, o3, t2) {
  return e2 ? e2.map((e3) => {
    const l3 = new C();
    if (l3.read(e3, t2), l3.labelExpression) {
      const e4 = o3.fields || o3.layerDefinition?.fields || this.fields;
      l3.labelExpression = l3.labelExpression.replaceAll(n4, (o4, r2) => `[${s2(r2, e4)}]`);
    }
    return l3;
  }) : null;
}
function s2(e2, o3) {
  if (!o3) return e2;
  const r2 = e2.toLowerCase();
  for (let t2 = 0; t2 < o3.length; t2++) {
    const e3 = o3[t2].name;
    if (e3.toLowerCase() === r2) return e3;
  }
  return e2;
}
var i2 = {
  esriGeometryPoint: ["above-right", "above-center", "above-left", "center-center", "center-left", "center-right", "below-center", "below-left", "below-right"],
  esriGeometryPolygon: ["always-horizontal"],
  esriGeometryPolyline: ["center-along", "above-along", "below-along"],
  esriGeometryMultipoint: null,
  esriGeometryEnvelope: null
};
function a5(o3, r2) {
  const n5 = [];
  for (const l3 of o3) {
    const o4 = l3.labelPlacement, s3 = i2[r2];
    if (!l3.symbol) return t().warn("No ILabelClass symbol specified."), [];
    if (!s3) return t().error(new s("labeling:unsupported-geometry-type", `Unable to create labels for layer, geometry type '${r2}' is not supported`)), [];
    if (s3.includes(o4)) n5.push(l3);
    else {
      const e2 = s3[0];
      o4 && t().warn(`Found invalid label placement type ${o4} for ${r2}. Defaulting to ${e2}`);
      const i3 = l3.clone();
      i3.labelPlacement = e2, n5.push(i3);
    }
  }
  return n5;
}

export {
  C,
  l2 as l,
  a5 as a
};
//# sourceMappingURL=chunk-VFQA3B5S.js.map
