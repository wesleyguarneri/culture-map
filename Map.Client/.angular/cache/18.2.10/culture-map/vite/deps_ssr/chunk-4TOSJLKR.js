import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
function e() {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1];
}
function r(e2) {
  return [e2[0], e2[1], e2[2], e2[3], e2[4], e2[5], e2[6], e2[7], e2[8]];
}
function t(e2, r2, t2, n2, o2, u2, c, a, l) {
  return [e2, r2, t2, n2, o2, u2, c, a, l];
}
function n(e2, r2) {
  return new Float64Array(e2, r2, 9);
}
var o = e();
var u = Object.freeze(Object.defineProperty({
  __proto__: null,
  IDENTITY: o,
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
  t,
  o
};
//# sourceMappingURL=chunk-4TOSJLKR.js.map