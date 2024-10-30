import {
  e,
  i,
  l,
  n as n2
} from "./chunk-T4AP6CTC.js";
import {
  d
} from "./chunk-HD65DNIO.js";
import {
  n as n3
} from "./chunk-N6TJI25E.js";
import {
  m
} from "./chunk-K64AAM77.js";
import {
  u
} from "./chunk-K226GFDN.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js
var c = () => n.getLogger("esri.renderers.visualVariables.support.visualVariableUtils");
var u2 = (e2) => c().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${e2}`);
var f = () => c().error("Use of arcade expressions requires an arcade context");
var p = new d();
var d2 = Math.PI;
var v = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
function m2(a, i2, n4) {
  const t = "visualVariables" in a && a.visualVariables ? a.visualVariables.find((e2) => "color" === e2.type) : a;
  if (!t) return;
  if ("esri.renderers.visualVariables.ColorVariable" !== t.declaredClass) return void u2("ColorVariable");
  const r = "number" == typeof i2, s = r ? null : i2, l2 = s?.attributes;
  let o = r ? i2 : null;
  const c2 = t.field, {
    ipData: p2,
    hasExpression: d3
  } = t.cache;
  let v2 = t.cache.compiledFunc;
  if (!c2 && !d3) {
    const e2 = t.stops;
    return e2 && e2[0] && e2[0].color;
  }
  if ("number" != typeof o) if (d3) {
    if (null == n4?.arcade) return void f();
    const e2 = {
      viewingMode: n4.viewingMode,
      scale: n4.scale,
      spatialReference: n4.spatialReference
    }, a2 = n4.arcade.arcadeUtils, i3 = a2.getViewInfo(e2), r2 = a2.createExecContext(s, i3, n4.timeZone);
    if (!v2) {
      const e3 = a2.createSyntaxTree(t.valueExpression);
      v2 = a2.createFunction(e3), t.cache.compiledFunc = v2;
    }
    o = a2.executeFunction(v2, r2);
  } else l2 && (o = l2[c2]);
  const m3 = t.normalizationField, b2 = null != l2 && null != m3 ? parseFloat(l2[m3]) : void 0;
  if (null != o && (!m3 || r || !isNaN(b2) && 0 !== b2)) {
    isNaN(b2) || r || (o /= b2);
    const a2 = U(o, p2);
    if (a2) {
      const i3 = a2[0], r2 = a2[1], s2 = i3 === r2 ? t.stops[i3].color : u.blendColors(t.stops[i3].color, t.stops[r2].color, a2[2], null != n4 ? n4.color : void 0);
      return new u(s2);
    }
  }
}
function b(e2, a, i2) {
  const n4 = "visualVariables" in e2 && e2.visualVariables ? e2.visualVariables.find((e3) => "opacity" === e3.type) : e2;
  if (!n4) return;
  if ("esri.renderers.visualVariables.OpacityVariable" !== n4.declaredClass) return void u2("OpacityVariable");
  const t = "number" == typeof a, r = t ? null : a, s = r?.attributes;
  let l2 = t ? a : null;
  const o = n4.field, {
    ipData: c2,
    hasExpression: p2
  } = n4.cache;
  let d3 = n4.cache.compiledFunc;
  if (!o && !p2) {
    const e3 = n4.stops;
    return e3 && e3[0] && e3[0].opacity;
  }
  if ("number" != typeof l2) if (p2) {
    if (null == i2?.arcade) return void f();
    const e3 = {
      viewingMode: i2.viewingMode,
      scale: i2.scale,
      spatialReference: i2.spatialReference
    }, a2 = i2.arcade.arcadeUtils, t2 = a2.getViewInfo(e3), s2 = a2.createExecContext(r, t2, i2.timeZone);
    if (!d3) {
      const e4 = a2.createSyntaxTree(n4.valueExpression);
      d3 = a2.createFunction(e4), n4.cache.compiledFunc = d3;
    }
    l2 = a2.executeFunction(d3, s2);
  } else s && (l2 = s[o]);
  const v2 = n4.normalizationField, m3 = null != s && null != v2 ? parseFloat(s[v2]) : void 0;
  if (null != l2 && (!v2 || t || !isNaN(m3) && 0 !== m3)) {
    isNaN(m3) || t || (l2 /= m3);
    const e3 = U(l2, c2);
    if (e3) {
      const a2 = e3[0], i3 = e3[1];
      if (a2 === i3) return n4.stops[a2].opacity;
      {
        const t2 = n4.stops[a2].opacity;
        return t2 + (n4.stops[i3].opacity - t2) * e3[2];
      }
    }
  }
}
function h(e2, a, i2) {
  const n4 = "visualVariables" in e2 && e2.visualVariables ? e2.visualVariables.find((e3) => "rotation" === e3.type) : e2;
  if (!n4) return;
  if ("esri.renderers.visualVariables.RotationVariable" !== n4.declaredClass) return void u2("RotationVariable");
  const t = n4.axis || "heading", r = "heading" === t && "arithmetic" === n4.rotationType ? 90 : 0, s = "heading" === t && "arithmetic" === n4.rotationType ? -1 : 1, l2 = "number" == typeof a ? null : a, o = l2?.attributes, c2 = n4.field, {
    hasExpression: p2
  } = n4.cache;
  let d3 = n4.cache.compiledFunc, v2 = 0;
  if (!c2 && !p2) return v2;
  if (p2) {
    if (null == i2?.arcade) return void f();
    const e3 = {
      viewingMode: i2.viewingMode,
      scale: i2.scale,
      spatialReference: i2.spatialReference
    }, a2 = i2.arcade.arcadeUtils, t2 = a2.getViewInfo(e3), r2 = a2.createExecContext(l2, t2, i2.timeZone);
    if (!d3) {
      const e4 = a2.createSyntaxTree(n4.valueExpression);
      d3 = a2.createFunction(e4), n4.cache.compiledFunc = d3;
    }
    v2 = a2.executeFunction(d3, r2);
  } else o && (v2 = o[c2] || 0);
  return v2 = "number" != typeof v2 || isNaN(v2) ? null : r + s * v2, v2;
}
function V(e2, a, i2) {
  const n4 = "number" == typeof a, t = n4 ? null : a, r = t?.attributes;
  let l2 = n4 ? a : null;
  const {
    isScaleDriven: c2
  } = e2.cache;
  let u3 = e2.cache.compiledFunc;
  if (c2) {
    const a2 = null != i2 ? i2.scale : void 0, n5 = null != i2 ? i2.view : void 0;
    l2 = null == a2 || "3d" === n5 ? x(e2) : a2;
  } else if (!n4) switch (e2.inputValueType) {
    case n2.Expression: {
      if (null == i2?.arcade) return void f();
      const a2 = {
        viewingMode: i2.viewingMode,
        scale: i2.scale,
        spatialReference: i2.spatialReference
      }, n5 = i2.arcade.arcadeUtils, r2 = n5.getViewInfo(a2), s = n5.createExecContext(t, r2, i2.timeZone);
      if (!u3) {
        const a3 = n5.createSyntaxTree(e2.valueExpression);
        u3 = n5.createFunction(a3), e2.cache.compiledFunc = u3;
      }
      l2 = n5.executeFunction(u3, s);
      break;
    }
    case n2.Field:
      r && (l2 = r[e2.field]);
      break;
    case n2.Unknown:
      l2 = null;
  }
  if (!l(l2)) return null;
  if (n4 || !e2.normalizationField) return l2;
  const p2 = r ? parseFloat(r[e2.normalizationField]) : null;
  return l(p2) && 0 !== p2 ? l2 / p2 : null;
}
function x(e2) {
  let a = null, i2 = null;
  const n4 = e2.stops;
  return n4 ? (a = n4[0].value, i2 = n4[n4.length - 1].value) : (a = e2.minDataValue || 0, i2 = e2.maxDataValue || 0), (a + i2) / 2;
}
function y(e2, a, i2) {
  const n4 = "visualVariables" in e2 && e2.visualVariables ? e2.visualVariables.find((e3) => "size" === e3.type) : e2;
  if (!n4) return;
  if ("esri.renderers.visualVariables.SizeVariable" !== n4.declaredClass) return void u2("SizeVariable");
  const t = k(V(n4, a, i2), n4, a, i2, n4.cache.ipData);
  return null == t || isNaN(t) ? 0 : t;
}
function g(e2, a, i2) {
  return null == e2 ? null : e(e2) ? y(e2, a, i2) : l(e2) ? e2 : null;
}
function w(e2, a, i2) {
  return l(i2) && e2 > i2 ? i2 : l(a) && e2 < a ? a : e2;
}
function z(e2, a, i2, n4) {
  return e2 + ((g(a.minSize, i2, n4) || a.minDataValue) ?? 0);
}
function F(e2, a, i2) {
  const n4 = e2.stops;
  let t = n4?.length && n4[0].size;
  return null == t && (t = e2.minSize), g(t, a, i2);
}
function S(e2, a, i2, n4) {
  const t = (e2 - a.minDataValue) / (a.maxDataValue - a.minDataValue), r = g(a.minSize, i2, n4), s = g(a.maxSize, i2, n4), l2 = null != n4 ? n4.shape : void 0;
  if (e2 <= a.minDataValue) return r;
  if (e2 >= a.maxDataValue) return s;
  if (null == r || null == s) return null;
  if ("area" === a.scaleBy && l2) {
    const e3 = "circle" === l2, a2 = e3 ? d2 * (r / 2) ** 2 : r * r, i3 = a2 + t * ((e3 ? d2 * (s / 2) ** 2 : s * s) - a2);
    return e3 ? 2 * Math.sqrt(i3 / d2) : Math.sqrt(i3);
  }
  return r + t * (s - r);
}
function E(e2, a, i2, n4) {
  const t = null != n4 ? n4.shape : void 0, r = e2 / a.minDataValue, s = g(a.minSize, i2, n4), l2 = g(a.maxSize, i2, n4);
  let o = null;
  return o = "circle" === t ? 2 * Math.sqrt(r * (s / 2) ** 2) : "square" === t || "diamond" === t || "image" === t ? Math.sqrt(r * s ** 2) : r * s, w(o, s, l2);
}
function C(e2, a, i2, n4, t) {
  const [r, s, l2] = U(e2, t);
  if (r === s) return g(a.stops?.[r].size, i2, n4);
  {
    const e3 = g(a.stops?.[r].size, i2, n4);
    return e3 + (g(a.stops?.[s].size, i2, n4) - e3) * l2;
  }
}
function D(e2, a, i2, n4) {
  const r = (n4?.resolution ?? 1) * m[a.valueUnit], s = g(a.minSize, i2, n4), l2 = g(a.maxSize, i2, n4), {
    valueRepresentation: o
  } = a;
  let c2 = null;
  return c2 = "area" === o ? 2 * Math.sqrt(e2 / d2) / r : "radius" === o || "distance" === o ? 2 * e2 / r : e2 / r, w(c2, s, l2);
}
function M(e2) {
  return e2;
}
function k(e2, a, i2, n4, t) {
  switch (a.transformationType) {
    case i.Additive:
      return z(e2, a, i2, n4);
    case i.Constant:
      return F(a, i2, n4);
    case i.ClampedLinear:
      return S(e2, a, i2, n4);
    case i.Proportional:
      return E(e2, a, i2, n4);
    case i.Stops:
      return C(e2, a, i2, n4, t);
    case i.RealWorldSize:
      return D(e2, a, i2, n4);
    case i.Identity:
      return M(e2);
    case i.Unknown:
      return null;
  }
}
function N(e2, a, i2) {
  const {
    isScaleDriven: n4
  } = e2.cache;
  if (!(n4 && "3d" === i2 || a)) return null;
  const t = {
    scale: a,
    view: i2
  };
  let r = g(e2.minSize, p, t), s = g(e2.maxSize, p, t);
  if (null != r || null != s) {
    if (r > s) {
      const e3 = s;
      s = r, r = e3;
    }
    return {
      minSize: r,
      maxSize: s
    };
  }
}
function R(e2, a, i2) {
  if (!e2.visualVariables) return;
  const n4 = [], t = [], r = [], s = [], l2 = [];
  for (const o of e2.visualVariables) switch (o.type) {
    case "color":
      t.push(o);
      break;
    case "opacity":
      r.push(o);
      break;
    case "rotation":
      l2.push(o);
      break;
    case "size":
      s.push(o);
  }
  return t.forEach((e3) => {
    const t2 = m2(e3, a, i2);
    n4.push({
      variable: e3,
      value: t2
    });
  }), r.forEach((e3) => {
    const t2 = b(e3, a, i2);
    n4.push({
      variable: e3,
      value: t2
    });
  }), l2.forEach((e3) => {
    const t2 = h(e3, a, i2);
    n4.push({
      variable: e3,
      value: t2
    });
  }), s.forEach((e3) => {
    const t2 = y(e3, a, i2);
    n4.push({
      variable: e3,
      value: t2
    });
  }), n4.filter((e3) => null != e3.value);
}
function U(e2, a) {
  if (!a) return;
  let i2 = 0, n4 = a.length - 1;
  return a.some((a2, t) => e2 < a2 ? (n4 = t, true) : (i2 = t, false)), [i2, n4, (e2 - a[i2]) / (a[n4] - a[i2])];
}
function T(e2, a, n4) {
  const t = ["proportional", "proportional", "proportional"];
  for (const r of e2) {
    const e3 = r.useSymbolValue ? "symbol-value" : y(r, a, n4);
    switch (r.axis) {
      case "width":
        t[0] = e3;
        break;
      case "depth":
        t[1] = e3;
        break;
      case "height":
        t[2] = e3;
        break;
      case "width-and-depth":
        t[0] = e3, t[1] = e3;
        break;
      case "all":
      case void 0:
      case null:
        t[0] = e3, t[1] = e3, t[2] = e3;
        break;
      default:
        n3(r.axis);
    }
  }
  return t;
}

export {
  v,
  m2 as m,
  b,
  h,
  y,
  g,
  k,
  N,
  R,
  T
};
//# sourceMappingURL=chunk-7KRERHHR.js.map
