// ../../../node_modules/@arcgis/core/views/support/layerViewUtils.js
function n(n2) {
  return n2 && "function" == typeof n2.highlight;
}
function e(n2) {
  return n2 && "function" == typeof n2.maskOccludee;
}
function t(n2, e2, t2) {
  return null == n2 || n2 >= t2 && (0 === e2 || n2 <= e2);
}
function c(n2, e2) {
  if (e2 && n2) {
    const {
      minScale: c2,
      maxScale: i2
    } = n2;
    if (u(c2, i2)) return t(e2, c2, i2);
  }
  return true;
}
function u(n2, e2) {
  return null != n2 && n2 > 0 || null != e2 && e2 > 0;
}
function i(n2) {
  return !n2?.minScale || !n2.maxScale || n2.minScale >= n2.maxScale;
}
function l(n2) {
  return null != n2 && "object" == typeof n2 && "createQuery" in n2 && "queryFeatures" in n2 && "layer" in n2 && "view" in n2;
}

export {
  n,
  e,
  t,
  c,
  u,
  i,
  l
};
//# sourceMappingURL=chunk-D3AKDIJC.js.map
