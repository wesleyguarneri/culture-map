import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/core/maybe.js
function n(n2, u2) {
  if (null == n2) throw new Error(u2 ?? "value is None");
}
function u(n2) {
  return n2?.destroy(), null;
}
function r(n2) {
  return n2?.dispose(), null;
}
function l(n2) {
  return n2?.remove(), null;
}
function e(n2) {
  return n2?.abort(), null;
}
function t(n2) {
  return n2?.release(), null;
}
function o(n2, u2, r2) {
  return null != n2 && null != u2 ? null != r2 ? r2(n2, u2) : n2.equals(u2) : n2 === u2;
}
function i(n2, u2) {
  return n2?.[u2];
}
function f(n2, u2) {
  let r2;
  return n2.some((n3, l2) => (r2 = u2(n3, l2), null != r2)), r2 ?? void 0;
}

export {
  n,
  u,
  r,
  l,
  e,
  t,
  o,
  i,
  f
};
//# sourceMappingURL=chunk-6WGE3IUL.js.map
