import {
  S,
  g
} from "./chunk-MAO5BVLA.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/renderers/support/rendererConversion.js
function t(r) {
  return null == r || "simple" === r.type || "unique-value" === r.type || "class-breaks" === r.type || "dictionary" === r.type || "heatmap" === r.type;
}
function s2(r, n) {
  if (null == r) return null;
  if (!t(r)) return new s("renderer-conversion-3d:unsupported-renderer", `Unsupported renderer of type '${r.type || r.declaredClass}'`, {
    renderer: r
  });
  switch (r.type) {
    case "simple":
      return a(r, n);
    case "unique-value":
      return u(r, n);
    case "class-breaks":
      return i(r, n);
    case "dictionary":
    case "heatmap":
      return null;
  }
  return null;
}
function l(r, n) {
  if (!n) return null;
  let o;
  if (o = Array.isArray(n) ? n : [n], o.length > 0) {
    const n2 = o.map((r2) => r2.details.symbol.type || r2.details.symbol.declaredClass).filter((r2) => !!r2);
    n2.sort();
    const t2 = [];
    return n2.forEach((r2, e) => {
      0 !== e && r2 === n2[e - 1] || t2.push(r2);
    }), new s("renderer-conversion-3d:unsupported-symbols", `Renderer contains symbols (${t2.join(", ")}) which are not supported in 3D`, {
      renderer: r,
      symbolErrors: o
    });
  }
  return null;
}
function a(r, e) {
  const t2 = __spreadProps(__spreadValues(__spreadValues({}, S), e), {
    cimFallbackEnabled: true
  });
  return l(r, g(r.symbol, t2).error);
}
function u(e, t2) {
  const s3 = __spreadProps(__spreadValues(__spreadValues({}, S), t2), {
    cimFallbackEnabled: true
  }), a2 = e.uniqueValueInfos?.map((r) => g(r.symbol, s3).error).filter(O), u2 = g(e.defaultSymbol, s3);
  return u2.error && a2?.unshift(u2.error), l(e, a2);
}
function i(e, t2) {
  const s3 = __spreadProps(__spreadValues(__spreadValues({}, S), t2), {
    cimFallbackEnabled: true
  }), a2 = e.classBreakInfos.map((r) => g(r.symbol, s3).error).filter(O), u2 = g(e.defaultSymbol, s3);
  return u2.error && a2.unshift(u2.error), l(e, a2);
}

export {
  t,
  s2 as s
};
//# sourceMappingURL=chunk-AXXQSWHU.js.map
