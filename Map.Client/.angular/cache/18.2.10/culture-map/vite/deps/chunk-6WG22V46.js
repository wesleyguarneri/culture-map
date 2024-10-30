import {
  D,
  F,
  H,
  R,
  l,
  s as s2,
  v
} from "./chunk-ZR5BOILP.js";
import {
  o
} from "./chunk-TCPN7AEH.js";
import {
  B,
  C,
  D as D2,
  H as H2
} from "./chunk-L4TOCXR5.js";
import {
  o as o2
} from "./chunk-JILEJ6R2.js";
import {
  u
} from "./chunk-K226GFDN.js";
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

// ../../../node_modules/@arcgis/core/views/2d/arcade/callExpressionWithFeature.js
function s3(e, t, o3, n2, a2) {
  if (null == e) return null;
  const s4 = e.referencesGeometry() && a2 ? i(t, n2, a2) : t, u3 = e.repurposeFeature(s4);
  try {
    return e.evaluate(__spreadProps(__spreadValues({}, o3), {
      $feature: u3
    }), e.services);
  } catch (c2) {
    return n.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", c2), null;
  }
}
var u2 = /* @__PURE__ */ new Map();
function i(e, r, t) {
  const {
    transform: o3,
    hasZ: n2,
    hasM: a2
  } = t;
  u2.has(r) || u2.set(r, c(r));
  const s4 = u2.get(r)(e.geometry, o3, n2, a2);
  return __spreadProps(__spreadValues({}, e), {
    geometry: s4
  });
}
function c(s4) {
  const u3 = {};
  switch (s4) {
    case "esriGeometryPoint":
      return (e, r, t, o3) => C(r, u3, e, t, o3);
    case "esriGeometryPolygon":
      return (e, r, t, o3) => D2(r, u3, e, t, o3);
    case "esriGeometryPolyline":
      return (e, r, t, n2) => H2(r, u3, e, t, n2);
    case "esriGeometryMultipoint":
      return (e, r, o3, n2) => B(r, u3, e, o3, n2);
    default:
      return n.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s("mapview-arcade", `Unable to handle geometryType: ${s4}`)), (e) => e;
  }
}

// ../../../node_modules/@arcgis/core/symbols/cim/OverrideHelper.js
var m = (e) => {
  if (!e) return [0, 0, 0, 0];
  const {
    r,
    g: i2,
    b: t,
    a: s4
  } = e;
  return [r, i2, t, 255 * s4];
};
var y = class _y {
  static findApplicableOverrides(e, r, i2) {
    if (e && r) {
      if (e.primitiveName) {
        let t = false;
        for (const r2 of i2) if (r2.primitiveName === e.primitiveName) {
          t = true;
          break;
        }
        if (!t) for (const s4 of r) s4.primitiveName === e.primitiveName && i2.push(s4);
      }
      switch (e.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          if (e.effects) for (const t of e.effects) _y.findApplicableOverrides(t, r, i2);
          if (e.symbolLayers) for (const t of e.symbolLayers) _y.findApplicableOverrides(t, r, i2);
          break;
        case "CIMTextSymbol":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke":
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
        case "CIMVectorMarker":
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
          if (e.effects) for (const t of e.effects) _y.findApplicableOverrides(t, r, i2);
          if (e.markerPlacement && _y.findApplicableOverrides(e.markerPlacement, r, i2), "CIMVectorMarker" === e.type) {
            if (e.markerGraphics) for (const t of e.markerGraphics) _y.findApplicableOverrides(t, r, i2), _y.findApplicableOverrides(t.symbol, r, i2);
          } else "CIMCharacterMarker" === e.type ? _y.findApplicableOverrides(e.symbol, r, i2) : "CIMHatchFill" === e.type ? _y.findApplicableOverrides(e.lineSymbol, r, i2) : "CIMPictureMarker" === e.type && _y.findApplicableOverrides(e.animatedSymbolProperties, r, i2);
      }
    }
  }
  static findEffectOverrides(e, r) {
    if (!e) return null;
    if ("CIMGeometricEffectDashes" === e.type && D(e), !r || !e.primitiveName) return {
      type: "cim-effect-param",
      effect: e,
      overrides: []
    };
    const i2 = H(e), t = e.primitiveName, c2 = [];
    for (const s4 of r) s4.primitiveName === t && c2.push(H(s4));
    return {
      type: "cim-effect-param",
      effect: i2,
      overrides: R(c2)
    };
  }
  static resolveSymbolOverrides(e, r, t, s4, o3, a2, l2) {
    return __async(this, null, function* () {
      if (!e?.symbol) return null;
      let {
        symbol: n2,
        primitiveOverrides: p
      } = e;
      const f = !!p;
      if (!f && !s4) return n2;
      n2 = a(n2), p = a(p);
      let m2 = true;
      if (r || (r = {
        attributes: {}
      }, m2 = false), f) {
        if (m2 || (p = p.filter((e2) => !e2.valueExpressionInfo?.expression.includes("$feature"))), l2 || (p = p.filter((e2) => !e2.valueExpressionInfo?.expression.includes("$view"))), p.length > 0) {
          const e2 = {
            spatialReference: t,
            fields: F(r.attributes),
            geometryType: o3
          };
          yield _y.createRenderExpressions(p, e2), _y.evaluateOverrides(p, r, o3 ?? "esriGeometryPoint", a2, l2);
        }
        _y.applyOverrides(n2, p);
      }
      return s4 && _y.applyDictionaryTextOverrides(n2, r, s4, null), n2;
    });
  }
  static createRenderExpressions(e, r) {
    return __async(this, null, function* () {
      const i2 = [];
      for (const s4 of e) {
        const e2 = s4.valueExpressionInfo;
        if (!e2 || _y._expressionToRenderExpression.has(e2.expression)) continue;
        const o3 = o2(e2.expression, r.spatialReference, r.fields);
        i2.push(o3), o3.then((r2) => _y._expressionToRenderExpression.set(e2.expression, r2));
      }
      i2.length > 0 && (yield Promise.all(i2));
    });
  }
  static evaluateOverrides(e, i2, t, s4, o3) {
    const a2 = {
      $view: {
        scale: o3?.scale
      }
    };
    for (const c2 of e) {
      c2.value && "object" == typeof c2.value && o(c2.value) && ("Color" === c2.propertyName || "StrokeColor" === c2.propertyName) && (c2.value = m(c2.value));
      const e2 = c2.valueExpressionInfo;
      if (!e2) continue;
      const o4 = _y._expressionToRenderExpression.get(e2.expression);
      o4 && (c2.value = s3(o4, i2, a2, t, s4));
    }
  }
  static applyDictionaryTextOverrides(e, r, i2, t, s4 = "Normal") {
    if (e?.type) switch (e.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
      case "CIMTextSymbol":
        {
          const o3 = e.symbolLayers;
          if (!o3) return;
          for (const a2 of o3) a2 && "CIMVectorMarker" === a2.type && _y.applyDictionaryTextOverrides(a2, r, i2, t, "CIMTextSymbol" === e.type ? e.textCase : s4);
        }
        break;
      case "CIMVectorMarker":
        {
          const s5 = e.markerGraphics;
          if (!s5) return;
          for (const e2 of s5) e2 && _y.applyDictionaryTextOverrides(e2, r, i2, t);
        }
        break;
      case "CIMMarkerGraphic": {
        const o3 = e.textString;
        if (o3 && o3.includes("[")) {
          const a2 = l(o3, i2);
          e.textString = s2(r, a2, t, s4);
        }
      }
    }
  }
  static applyOverrides(e, r, i2, t) {
    if (e.primitiveName) {
      for (const s4 of r) if (s4.primitiveName === e.primitiveName) {
        const r2 = v(s4.propertyName);
        if (t && t.push({
          cim: e,
          nocapPropertyName: r2,
          value: e[r2]
        }), i2) {
          let r3 = false;
          for (const t2 of i2) t2.primitiveName === e.primitiveName && (r3 = true);
          r3 || i2.push(s4);
        }
        null != s4.value && (e[r2] = s4.value);
      }
    }
    switch (e.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        if (e.effects) for (const s4 of e.effects) _y.applyOverrides(s4, r, i2, t);
        if (e.symbolLayers) for (const s4 of e.symbolLayers) _y.applyOverrides(s4, r, i2, t);
        break;
      case "CIMTextSymbol":
        break;
      case "CIMSolidStroke":
      case "CIMSolidFill":
      case "CIMVectorMarker":
        if (e.effects) for (const s4 of e.effects) _y.applyOverrides(s4, r, i2, t);
        if ("CIMVectorMarker" === e.type && e.markerGraphics) for (const s4 of e.markerGraphics) _y.applyOverrides(s4, r, i2, t), _y.applyOverrides(s4.symbol, r, i2, t);
    }
  }
  static restoreOverrides(e) {
    for (const r of e) r.cim[r.nocapPropertyName] = r.value;
  }
  static buildOverrideKey(e) {
    let r = "";
    for (const i2 of e) void 0 !== i2.value && (r += `${i2.primitiveName}${i2.propertyName}${JSON.stringify(i2.value)}`);
    return r;
  }
  static toValue(r, i2) {
    if ("DashTemplate" === r) return i2.split(" ").map((e) => Number(e));
    if ("Color" === r) {
      const r2 = new u(i2).toRgba();
      return r2[3] *= 255, r2;
    }
    return i2;
  }
};
y._expressionToRenderExpression = /* @__PURE__ */ new Map();

export {
  s3 as s,
  y
};
//# sourceMappingURL=chunk-6WG22V46.js.map
