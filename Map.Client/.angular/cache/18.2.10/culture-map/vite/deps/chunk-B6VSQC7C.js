// ../../../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f32.js
function n() {
  return new Float32Array(4);
}
function t(n2) {
  const t2 = new Float32Array(4);
  return t2[0] = n2[0], t2[1] = n2[1], t2[2] = n2[2], t2[3] = n2[3], t2;
}
function r(n2, t2, r2, e2) {
  const o2 = new Float32Array(4);
  return o2[0] = n2, o2[1] = t2, o2[2] = r2, o2[3] = e2, o2;
}
function e(n2, t2) {
  return new Float32Array(n2, t2, 4);
}
function o() {
  return n();
}
function u() {
  return r(1, 1, 1, 1);
}
function c() {
  return r(1, 0, 0, 0);
}
function i() {
  return r(0, 1, 0, 0);
}
function a() {
  return r(0, 0, 1, 0);
}
function f() {
  return r(0, 0, 0, 1);
}
var l = o();
var _ = u();
var s = c();
var y = i();
var w = a();
var N = f();
var T = Object.freeze(Object.defineProperty({
  __proto__: null,
  ONES: _,
  UNIT_W: N,
  UNIT_X: s,
  UNIT_Y: y,
  UNIT_Z: w,
  ZEROS: l,
  clone: t,
  create: n,
  createView: e,
  fromValues: r,
  ones: u,
  unitW: f,
  unitX: c,
  unitY: i,
  unitZ: a,
  zeros: o
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t,
  r
};
//# sourceMappingURL=chunk-B6VSQC7C.js.map
