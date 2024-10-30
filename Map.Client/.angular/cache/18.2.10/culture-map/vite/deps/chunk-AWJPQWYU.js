// ../../../node_modules/@arcgis/core/chunks/vec3.js
function t(t2, r2, f2) {
  e(t2.typedBuffer, r2.typedBuffer, f2, t2.typedBufferStride, r2.typedBufferStride);
}
function e(t2, e2, r2, f2 = 3, n2 = f2) {
  if (t2.length / f2 !== Math.ceil(e2.length / n2)) return t2;
  const o2 = t2.length / f2, i2 = r2[0], u2 = r2[1], l2 = r2[2], a2 = r2[4], s2 = r2[5], c = r2[6], d = r2[8], p = r2[9], h = r2[10], y = r2[12], B = r2[13], g = r2[14];
  let m = 0, M = 0;
  for (let S = 0; S < o2; S++) {
    const r3 = e2[m], o3 = e2[m + 1], S2 = e2[m + 2];
    t2[M] = i2 * r3 + a2 * o3 + d * S2 + y, t2[M + 1] = u2 * r3 + s2 * o3 + p * S2 + B, t2[M + 2] = l2 * r3 + c * o3 + h * S2 + g, m += n2, M += f2;
  }
  return t2;
}
function r(t2, e2, r2) {
  f(t2.typedBuffer, e2.typedBuffer, r2, t2.typedBufferStride, e2.typedBufferStride);
}
function f(t2, e2, r2, f2 = 3, n2 = f2) {
  if (t2.length / f2 !== Math.ceil(e2.length / n2)) return;
  const o2 = t2.length / f2, i2 = r2[0], u2 = r2[1], l2 = r2[2], a2 = r2[3], s2 = r2[4], c = r2[5], d = r2[6], p = r2[7], h = r2[8];
  let y = 0, B = 0;
  for (let g = 0; g < o2; g++) {
    const r3 = e2[y], o3 = e2[y + 1], g2 = e2[y + 2];
    t2[B] = i2 * r3 + a2 * o3 + d * g2, t2[B + 1] = u2 * r3 + s2 * o3 + p * g2, t2[B + 2] = l2 * r3 + c * o3 + h * g2, y += n2, B += f2;
  }
}
function n(t2, e2, r2) {
  o(t2.typedBuffer, e2.typedBuffer, r2, t2.typedBufferStride, e2.typedBufferStride);
}
function o(t2, e2, r2, f2 = 3, n2 = f2) {
  const o2 = Math.min(t2.length / f2, e2.length / n2);
  let i2 = 0, u2 = 0;
  for (let l2 = 0; l2 < o2; l2++) t2[u2] = r2 * e2[i2], t2[u2 + 1] = r2 * e2[i2 + 1], t2[u2 + 2] = r2 * e2[i2 + 2], i2 += n2, u2 += f2;
  return t2;
}
function i(t2, e2, r2, f2 = 3, n2 = f2) {
  const o2 = t2.length / f2;
  if (o2 !== Math.ceil(e2.length / n2)) return t2;
  let i2 = 0, u2 = 0;
  for (let l2 = 0; l2 < o2; l2++) t2[u2] = e2[i2] + r2[0], t2[u2 + 1] = e2[i2 + 1] + r2[1], t2[u2 + 2] = e2[i2 + 2] + r2[2], i2 += n2, u2 += f2;
  return t2;
}
function u(t2, e2) {
  l(t2.typedBuffer, e2.typedBuffer, t2.typedBufferStride, e2.typedBufferStride);
}
function l(t2, e2, r2 = 3, f2 = r2) {
  const n2 = Math.min(t2.length / r2, e2.length / f2);
  let o2 = 0, i2 = 0;
  for (let u2 = 0; u2 < n2; u2++) {
    const n3 = e2[o2], u3 = e2[o2 + 1], l2 = e2[o2 + 2], a2 = n3 * n3 + u3 * u3 + l2 * l2;
    if (a2 > 0) {
      const e3 = 1 / Math.sqrt(a2);
      t2[i2] = e3 * n3, t2[i2 + 1] = e3 * u3, t2[i2 + 2] = e3 * l2;
    }
    o2 += f2, i2 += r2;
  }
}
function a(t2, e2, r2) {
  const f2 = Math.min(t2.count, e2.count), n2 = t2.typedBuffer, o2 = t2.typedBufferStride, i2 = e2.typedBuffer, u2 = e2.typedBufferStride;
  let l2 = 0, a2 = 0;
  for (let s2 = 0; s2 < f2; s2++) n2[a2] = i2[l2] >> r2, n2[a2 + 1] = i2[l2 + 1] >> r2, n2[a2 + 2] = i2[l2 + 2] >> r2, l2 += u2, a2 += o2;
}
var s = Object.freeze(Object.defineProperty({
  __proto__: null,
  normalize: l,
  normalizeView: u,
  scale: o,
  scaleView: n,
  shiftRight: a,
  transformMat3: f,
  transformMat3View: r,
  transformMat4: e,
  transformMat4View: t,
  translate: i
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t,
  e,
  r,
  f,
  n,
  o,
  i,
  u,
  l
};
//# sourceMappingURL=chunk-AWJPQWYU.js.map
