// ../../../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
function n() {
  return [0, 0];
}
function t(n2) {
  return [n2[0], n2[1]];
}
function r(n2, t2) {
  return [n2, t2];
}
function e(t2, r2 = n()) {
  const e2 = Math.min(2, t2.length);
  for (let n2 = 0; n2 < e2; ++n2) r2[n2] = t2[n2];
  return r2;
}
function o(n2, t2) {
  return new Float64Array(n2, t2, 2);
}
function u() {
  return n();
}
function c() {
  return r(1, 1);
}
function i() {
  return r(1, 0);
}
function f() {
  return r(0, 1);
}
var a = u();
var l = c();
var s = i();
var _ = f();
var m = Object.freeze(Object.defineProperty({
  __proto__: null,
  ONES: l,
  UNIT_X: s,
  UNIT_Y: _,
  ZEROS: a,
  clone: t,
  create: n,
  createView: o,
  fromArray: e,
  fromValues: r,
  ones: c,
  unitX: i,
  unitY: f,
  zeros: u
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  n,
  t,
  r,
  e,
  a,
  l,
  s,
  _
};
//# sourceMappingURL=chunk-DY7FJHTG.js.map
