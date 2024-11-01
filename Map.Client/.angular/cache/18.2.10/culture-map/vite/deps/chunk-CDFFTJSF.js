import {
  o as o3
} from "./chunk-HUHWKEOY.js";
import {
  o as o2
} from "./chunk-3UOXF3CT.js";
import {
  o
} from "./chunk-3ZXOUEQG.js";

// ../../../node_modules/@arcgis/core/symbols/cim/rasterizingUtils.js
var r = (o4) => "vertical" === o4 || "horizontal" === o4 || "cross" === o4 || "esriSFSCross" === o4 || "esriSFSVertical" === o4 || "esriSFSHorizontal" === o4;
function e(o4, a, e2) {
  const i2 = a.style, n = o(Math.ceil(e2)), s = r(i2) ? 8 * n : 16 * n, l = 2 * n;
  o4.width = s, o4.height = s;
  const h = o4.getContext("2d");
  h.strokeStyle = "#FFFFFF", h.lineWidth = n, h.beginPath(), "vertical" !== i2 && "cross" !== i2 && "esriSFSCross" !== i2 && "esriSFSVertical" !== i2 || (h.moveTo(s / 2, -l), h.lineTo(s / 2, s + l)), "horizontal" !== i2 && "cross" !== i2 && "esriSFSCross" !== i2 && "esriSFSHorizontal" !== i2 || (h.moveTo(-l, s / 2), h.lineTo(s + l, s / 2)), "backward-diagonal" !== i2 && "diagonal-cross" !== i2 && "esriSFSDiagonalCross" !== i2 && "esriSFSBackwardDiagonal" !== i2 || (h.moveTo(-l, -l), h.lineTo(s + l, s + l), h.moveTo(s - l, -l), h.lineTo(s + l, l), h.moveTo(-l, s - l), h.lineTo(l, s + l)), "forward-diagonal" !== i2 && "diagonal-cross" !== i2 && "esriSFSForwardDiagonal" !== i2 && "esriSFSDiagonalCross" !== i2 || (h.moveTo(s + l, -l), h.lineTo(-l, s + l), h.moveTo(l, -l), h.lineTo(-l, l), h.moveTo(s + l, s - l), h.lineTo(s - l, s + l)), h.stroke();
  const c = h.getImageData(0, 0, o4.width, o4.height), m = new Uint8Array(c.data);
  let S;
  for (let t = 0; t < m.length; t += 4) S = m[t + 3] / 255, m[t] = m[t] * S, m[t + 1] = m[t + 1] * S, m[t + 2] = m[t + 2] * S;
  return [m, o4.width, o4.height, n];
}
function i(t, r2) {
  null == t && (t = []);
  const e2 = "Butt" === r2, i2 = "Square" === r2, n = !e2 && !i2;
  t.length % 2 == 1 && (t = [...t, ...t]);
  const s = o3, l = 2 * s;
  let h = 0;
  for (const o4 of t) h += o4;
  const c = Math.round(h * s), m = new Float32Array(c * l), S = 0.5 * s;
  let F = 0, g = 0, T = 0.5, d = true;
  for (const o4 of t) {
    for (F = g, g += o4 * s; T <= g; ) {
      let o5 = 0.5;
      for (; o5 < l; ) {
        const t2 = (o5 - 0.5) * c + T - 0.5, a = n ? (o5 - s) * (o5 - s) : Math.abs(o5 - s);
        m[t2] = d ? e2 ? Math.max(Math.max(F + S - T, a), Math.max(T - g + S, a)) : a : n ? Math.min((T - F) * (T - F) + a, (T - g) * (T - g) + a) : i2 ? Math.min(Math.max(T - F, a), Math.max(g - T, a)) : Math.min(Math.max(T - F + S, a), Math.max(g + S - T, a)), o5++;
      }
      T++;
    }
    d = !d;
  }
  const f = m.length, M = new Uint8Array(4 * f);
  for (let a = 0; a < f; ++a) {
    const t2 = (n ? Math.sqrt(m[a]) : m[a]) / s;
    o2(t2, M, 4 * a);
  }
  return [M, c, l];
}

export {
  e,
  i
};
//# sourceMappingURL=chunk-CDFFTJSF.js.map
