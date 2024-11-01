import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/layers/support/infoFor3D.js
var n = [["binary", "application/octet-stream", "bin", ""]];
function t(n2, t2) {
  return null != d(t2.name, n2?.supportedFormats ?? []);
}
function r(n2, t2) {
  if (!n2) return false;
  const r2 = c(t2, n2.supportedFormats ?? []);
  return null != r2 && n2.editFormats.includes(r2);
}
function o(n2) {
  return a(n2?.supportedFormats ?? []).flatMap(w).map((n3) => `.${n3}`);
}
function u(n2, t2) {
  return m(p(n2, t2));
}
function i(n2, t2) {
  return m(d(n2, t2));
}
function s(n2, t2) {
  return l(f(n2, t2));
}
function c(n2, t2) {
  return i(n2.name, t2) ?? u(n2.type, t2);
}
function a(t2) {
  return [...n, ...t2];
}
function f(n2, t2) {
  return a(t2).find((t3) => m(t3) === n2);
}
function p(n2, t2) {
  const r2 = n2.toLowerCase();
  return a(t2).find((n3) => l(n3) === r2);
}
function d(n2, t2) {
  const r2 = n2.toLowerCase();
  return a(t2).find((n3) => w(n3).some((n4) => r2.endsWith(n4)));
}
function m(n2) {
  return n2?.[0];
}
function l(n2) {
  return n2?.[1].toLowerCase();
}
function w(n2) {
  return n2?.[2].split(",").map((n3) => n3.toLowerCase()) ?? [];
}
function F(n2) {
  return n2.tables?.find((n3) => "assetMaps" === n3.role);
}

export {
  t,
  r,
  o,
  u,
  i,
  s,
  c,
  F
};
//# sourceMappingURL=chunk-YT63GLYW.js.map
