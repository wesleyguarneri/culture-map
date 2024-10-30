import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/geometry/support/buffer/math/common.js
var e = () => n.getLogger("esri.views.3d.support.buffer.math");

// ../../../node_modules/@arcgis/core/chunks/vec4.js
function e2(t, e3, r2) {
  if (t.count !== e3.count) return;
  const f2 = t.count, n3 = r2[0], o2 = r2[1], u2 = r2[2], s2 = r2[3], c2 = r2[4], i = r2[5], a = r2[6], d = r2[7], l = r2[8], p = r2[9], y = r2[10], m = r2[11], B = r2[12], h = r2[13], g = r2[14], S = r2[15], M = t.typedBuffer, b = t.typedBufferStride, j = e3.typedBuffer, v = e3.typedBufferStride;
  for (let _ = 0; _ < f2; _++) {
    const t2 = _ * b, e4 = _ * v, r3 = j[e4], f3 = j[e4 + 1], w = j[e4 + 2], V = j[e4 + 3];
    M[t2] = n3 * r3 + c2 * f3 + l * w + B * V, M[t2 + 1] = o2 * r3 + i * f3 + p * w + h * V, M[t2 + 2] = u2 * r3 + a * f3 + y * w + g * V, M[t2 + 3] = s2 * r3 + d * f3 + m * w + S * V;
  }
}
function r(e3, r2, f2, n3 = 4, o2 = n3) {
  if (e3.length / n3 != r2.length / o2) return void e().error("source and destination buffers need to have the same number of elements");
  const u2 = e3.length / n3, s2 = f2[0], c2 = f2[1], i = f2[2], a = f2[3], d = f2[4], l = f2[5], p = f2[6], y = f2[7], m = f2[8], B = f2[9], h = f2[10], g = f2[11], S = f2[12], M = f2[13], b = f2[14], j = f2[15];
  let v = 0, _ = 0;
  for (let t = 0; t < u2; t++) {
    const t2 = r2[v], f3 = r2[v + 1], u3 = r2[v + 2], w = r2[v + 3];
    e3[_] = s2 * t2 + d * f3 + m * u3 + S * w, e3[_ + 1] = c2 * t2 + l * f3 + B * u3 + M * w, e3[_ + 2] = i * t2 + p * f3 + h * u3 + b * w, e3[_ + 3] = a * t2 + y * f3 + g * u3 + j * w, v += o2, _ += n3;
  }
}
function f(t, e3, r2) {
  n2(t.typedBuffer, e3.typedBuffer, r2, t.typedBufferStride, e3.typedBufferStride);
}
function n2(t, e3, r2, f2 = 4, n3 = f2) {
  if (t.length / f2 != e3.length / n3) return;
  const o2 = t.length / f2, u2 = r2[0], s2 = r2[1], c2 = r2[2], i = r2[3], a = r2[4], d = r2[5], l = r2[6], p = r2[7], y = r2[8];
  let m = 0, B = 0;
  for (let h = 0; h < o2; h++) {
    const r3 = e3[m], o3 = e3[m + 1], h2 = e3[m + 2], g = e3[m + 3];
    t[B] = u2 * r3 + i * o3 + l * h2, t[B + 1] = s2 * r3 + a * o3 + p * h2, t[B + 2] = c2 * r3 + d * o3 + y * h2, t[B + 3] = g, m += n3, B += f2;
  }
}
function o(t, e3) {
  const r2 = Math.min(t.count, e3.count), f2 = t.typedBuffer, n3 = t.typedBufferStride, o2 = e3.typedBuffer, u2 = e3.typedBufferStride;
  for (let s2 = 0; s2 < r2; s2++) {
    const t2 = s2 * n3, e4 = s2 * u2, r3 = o2[e4], c2 = o2[e4 + 1], i = o2[e4 + 2], a = r3 * r3 + c2 * c2 + i * i;
    if (a > 0) {
      const e5 = 1 / Math.sqrt(a);
      f2[t2] = e5 * r3, f2[t2 + 1] = e5 * c2, f2[t2 + 2] = e5 * i;
    }
  }
}
function u(t, e3, r2) {
  s(t.typedBuffer, e3, r2, t.typedBufferStride);
}
function s(t, e3, r2, f2 = 4) {
  const n3 = Math.min(t.length / f2, e3.count), o2 = e3.typedBuffer, u2 = e3.typedBufferStride;
  let s2 = 0, c2 = 0;
  for (let i = 0; i < n3; i++) t[c2] = r2 * o2[s2], t[c2 + 1] = r2 * o2[s2 + 1], t[c2 + 2] = r2 * o2[s2 + 2], t[c2 + 3] = r2 * o2[s2 + 3], s2 += u2, c2 += f2;
}
var c = Object.freeze(Object.defineProperty({
  __proto__: null,
  normalize: o,
  scale: s,
  scaleView: u,
  transformMat3: n2,
  transformMat3View: f,
  transformMat4: r,
  transformMat4View: e2
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  f,
  n2 as n,
  o,
  u,
  s
};
//# sourceMappingURL=chunk-MYCEJRPQ.js.map
