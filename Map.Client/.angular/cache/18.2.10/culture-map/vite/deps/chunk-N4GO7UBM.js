import {
  t
} from "./chunk-7WP676SE.js";
import {
  h
} from "./chunk-ONPREQKF.js";

// ../../../node_modules/@arcgis/core/chunks/geometryEngineJSON.js
function t2(n) {
  return h.extendedSpatialReferenceInfo(n);
}
function r(t3, r2, i2) {
  return h.clip(t, t3, r2, i2);
}
function i(t3, r2, i2) {
  return h.cut(t, t3, r2, i2);
}
function a(t3, r2, i2) {
  return h.contains(t, t3, r2, i2);
}
function o(t3, r2, i2) {
  return h.crosses(t, t3, r2, i2);
}
function s(t3, r2, i2, a2) {
  return h.distance(t, t3, r2, i2, a2);
}
function u(t3, r2, i2) {
  return h.equals(t, t3, r2, i2);
}
function c(t3, r2, i2) {
  return h.intersects(t, t3, r2, i2);
}
function f(t3, r2, i2) {
  return h.touches(t, t3, r2, i2);
}
function l(t3, r2, i2) {
  return h.within(t, t3, r2, i2);
}
function p(t3, r2, i2) {
  return h.disjoint(t, t3, r2, i2);
}
function g(t3, r2, i2) {
  return h.overlaps(t, t3, r2, i2);
}
function d(t3, r2, i2, a2) {
  return h.relate(t, t3, r2, i2, a2);
}
function m(t3, r2) {
  return h.isSimple(t, t3, r2);
}
function h2(t3, r2) {
  return h.simplify(t, t3, r2);
}
function y(t3, r2, i2 = false) {
  return h.convexHull(t, t3, r2, i2);
}
function x(t3, r2, i2) {
  return h.difference(t, t3, r2, i2);
}
function S(t3, r2, i2) {
  return h.symmetricDifference(t, t3, r2, i2);
}
function w(t3, r2, i2) {
  return h.intersect(t, t3, r2, i2);
}
function A(t3, r2, i2 = null) {
  return h.union(t, t3, r2, i2);
}
function D(t3, r2, i2, a2, o2, s2, u2) {
  return h.offset(t, t3, r2, i2, a2, o2, s2, u2);
}
function R(t3, r2, i2, a2, o2 = false) {
  return h.buffer(t, t3, r2, i2, a2, o2);
}
function j(t3, r2, i2, a2, o2, s2, u2) {
  return h.geodesicBuffer(t, t3, r2, i2, a2, o2, s2, u2);
}
function E(t3, r2, i2, a2 = true) {
  return h.nearestCoordinate(t, t3, r2, i2, a2);
}
function L(t3, r2, i2) {
  return h.nearestVertex(t, t3, r2, i2);
}
function T(t3, r2, i2, a2, o2) {
  return h.nearestVertices(t, t3, r2, i2, a2, o2);
}
function b(n, t3, r2, i2) {
  if (null == t3 || null == i2) throw new Error("Illegal Argument Exception");
  const a2 = h.rotate(t3, r2, i2);
  return a2.spatialReference = n, a2;
}
function v(n, t3, r2) {
  if (null == t3 || null == r2) throw new Error("Illegal Argument Exception");
  const i2 = h.flipHorizontal(t3, r2);
  return i2.spatialReference = n, i2;
}
function z(n, t3, r2) {
  if (null == t3 || null == r2) throw new Error("Illegal Argument Exception");
  const i2 = h.flipVertical(t3, r2);
  return i2.spatialReference = n, i2;
}
function I(t3, r2, i2, a2, o2) {
  return h.generalize(t, t3, r2, i2, a2, o2);
}
function V(t3, r2, i2, a2) {
  return h.densify(t, t3, r2, i2, a2);
}
function H(t3, r2, i2, a2, o2 = 0) {
  return h.geodesicDensify(t, t3, r2, i2, a2, o2);
}
function B(t3, r2, i2) {
  return h.planarArea(t, t3, r2, i2);
}
function _(t3, r2, i2) {
  return h.planarLength(t, t3, r2, i2);
}
function q(t3, r2, i2, a2) {
  return h.geodesicArea(t, t3, r2, i2, a2);
}
function C(t3, r2, i2, a2) {
  return h.geodesicLength(t, t3, r2, i2, a2);
}
function P(t3, r2, i2) {
  return null == r2 || null == i2 ? [] : h.intersectLinesToPoints(t, t3, r2, i2);
}
function G(n, t3) {
  h.changeDefaultSpatialReferenceTolerance(n, t3);
}
function M(n) {
  h.clearDefaultSpatialReferenceTolerance(n);
}
var O = Object.freeze(Object.defineProperty({
  __proto__: null,
  buffer: R,
  changeDefaultSpatialReferenceTolerance: G,
  clearDefaultSpatialReferenceTolerance: M,
  clip: r,
  contains: a,
  convexHull: y,
  crosses: o,
  cut: i,
  densify: V,
  difference: x,
  disjoint: p,
  distance: s,
  equals: u,
  extendedSpatialReferenceInfo: t2,
  flipHorizontal: v,
  flipVertical: z,
  generalize: I,
  geodesicArea: q,
  geodesicBuffer: j,
  geodesicDensify: H,
  geodesicLength: C,
  intersect: w,
  intersectLinesToPoints: P,
  intersects: c,
  isSimple: m,
  nearestCoordinate: E,
  nearestVertex: L,
  nearestVertices: T,
  offset: D,
  overlaps: g,
  planarArea: B,
  planarLength: _,
  relate: d,
  rotate: b,
  simplify: h2,
  symmetricDifference: S,
  touches: f,
  union: A,
  within: l
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t2 as t,
  r,
  i,
  a,
  o,
  s,
  u,
  c,
  f,
  l,
  p,
  g,
  d,
  m,
  h2 as h,
  y,
  x,
  S,
  w,
  A,
  D,
  R,
  j,
  E,
  L,
  T,
  b,
  v,
  z,
  I,
  V,
  H,
  B,
  _,
  q,
  C,
  P,
  G,
  M,
  O
};
//# sourceMappingURL=chunk-N4GO7UBM.js.map
