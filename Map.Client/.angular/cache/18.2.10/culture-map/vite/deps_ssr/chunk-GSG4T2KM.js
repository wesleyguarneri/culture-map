import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js
function e() {
  return [0, 0, 0, 1];
}
function r(e2) {
  return [e2[0], e2[1], e2[2], e2[3]];
}
function t(e2, r2, t2, n2) {
  return [e2, r2, t2, n2];
}
function n(e2, r2) {
  return new Float64Array(e2, r2, 4);
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
//# sourceMappingURL=chunk-GSG4T2KM.js.map