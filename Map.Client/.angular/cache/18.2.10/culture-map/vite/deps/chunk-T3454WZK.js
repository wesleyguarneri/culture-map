// ../../../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f32.js
function e() {
  const e2 = new Float32Array(9);
  return e2[0] = 1, e2[4] = 1, e2[8] = 1, e2;
}
function r(e2) {
  const r2 = new Float32Array(9);
  return r2[0] = e2[0], r2[1] = e2[1], r2[2] = e2[2], r2[3] = e2[3], r2[4] = e2[4], r2[5] = e2[5], r2[6] = e2[6], r2[7] = e2[7], r2[8] = e2[8], r2;
}
function t(e2, r2, t2, n2, o2, a, c, u, l) {
  const f = new Float32Array(9);
  return f[0] = e2, f[1] = r2, f[2] = t2, f[3] = n2, f[4] = o2, f[5] = a, f[6] = c, f[7] = u, f[8] = l, f;
}
function n(e2, r2) {
  return new Float32Array(e2, r2, 9);
}
var o = Object.freeze(Object.defineProperty({
  __proto__: null,
  clone: r,
  create: e,
  createView: n,
  fromValues: t
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  e,
  r,
  t
};
//# sourceMappingURL=chunk-T3454WZK.js.map
