import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-3ZXOUEQG.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js
var n;
function e2(t) {
  switch (t) {
    case "multiply":
    default:
      return n.Multiply;
    case "ignore":
      return n.Ignore;
    case "replace":
      return n.Replace;
    case "tint":
      return n.Tint;
  }
}
function r(e4, r2, a) {
  if (null == e4 || r2 === n.Ignore) return a[0] = 255, a[1] = 255, a[2] = 255, void (a[3] = 255);
  const c = e(Math.round(e4[3] * i), 0, i), p = 0 === c || r2 === n.Tint ? 0 : r2 === n.Replace ? u : l;
  a[0] = e(Math.round(e4[0] * o2), 0, o2), a[1] = e(Math.round(e4[1] * o2), 0, o2), a[2] = e(Math.round(e4[2] * o2), 0, o2), a[3] = c + p;
}
!function(t) {
  t[t.Multiply = 1] = "Multiply", t[t.Ignore = 2] = "Ignore", t[t.Replace = 3] = "Replace", t[t.Tint = 4] = "Tint";
}(n || (n = {}));
var o2 = 255;
var i = 85;
var u = i;
var l = 2 * i;

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js
function e3(e4) {
  e4.vertex.code.add(o`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.int(n.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.int(n.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.int(n.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.int(n.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);
}

export {
  n,
  e2 as e,
  r,
  e3 as e2
};
//# sourceMappingURL=chunk-WDDCGJTI.js.map
