// ../../../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
function n() {
  return [0, 0, 0, 0];
}
function t(n2) {
  return [n2[0], n2[1], n2[2], n2[3]];
}
function r(n2, t2, r2, e2) {
  return [n2, t2, r2, e2];
}
function e(t2, r2 = n()) {
  const e2 = Math.min(4, t2.length);
  for (let n2 = 0; n2 < e2; ++n2) r2[n2] = t2[n2];
  return r2;
}
function u(n2, t2) {
  return new Float64Array(n2, t2, 4);
}
function o() {
  return n();
}
function i() {
  return r(1, 1, 1, 1);
}
function c() {
  return r(1, 0, 0, 0);
}
function f() {
  return r(0, 1, 0, 0);
}
function a() {
  return r(0, 0, 1, 0);
}
function l() {
  return r(0, 0, 0, 1);
}
var _ = o();
var s = i();
var N = c();
var T = f();
var m = a();
var y = l();
var I = Object.freeze(Object.defineProperty({
  __proto__: null,
  ONES: s,
  UNIT_W: y,
  UNIT_X: N,
  UNIT_Y: T,
  UNIT_Z: m,
  ZEROS: _,
  clone: t,
  create: n,
  createView: u,
  fromArray: e,
  fromValues: r,
  ones: i,
  unitW: l,
  unitX: c,
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
  _,
  s
};
//# sourceMappingURL=chunk-IMVP5ADD.js.map
