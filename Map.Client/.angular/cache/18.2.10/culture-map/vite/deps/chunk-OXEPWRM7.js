// ../../../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
function n() {
  return [0, 0, 0];
}
function t(n2) {
  return [n2[0], n2[1], n2[2]];
}
function r(n2, t2, r2) {
  return [n2, t2, r2];
}
function e(t2, r2 = n()) {
  const e2 = Math.min(3, t2.length);
  for (let n2 = 0; n2 < e2; ++n2) r2[n2] = t2[n2];
  return r2;
}
function u(n2, t2) {
  return new Float64Array(n2, t2, 3);
}
function o() {
  return n();
}
function c() {
  return r(1, 1, 1);
}
function i() {
  return r(1, 0, 0);
}
function f() {
  return r(0, 1, 0);
}
function a() {
  return r(0, 0, 1);
}
var l = o();
var _ = c();
var s = i();
var m = f();
var y = a();
var N = Object.freeze(Object.defineProperty({
  __proto__: null,
  ONES: _,
  UNIT_X: s,
  UNIT_Y: m,
  UNIT_Z: y,
  ZEROS: l,
  clone: t,
  create: n,
  createView: u,
  fromArray: e,
  fromValues: r,
  ones: c,
  unitX: i,
  unitY: f,
  unitZ: a,
  zeros: o
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  n,
  t,
  r,
  e,
  o,
  a,
  l,
  _,
  s,
  m,
  y
};
//# sourceMappingURL=chunk-OXEPWRM7.js.map
