// ../../../node_modules/@arcgis/core/core/handleUtils.js
var n = {
  remove: () => {
  }
};
function e(e2) {
  return e2 ? {
    remove() {
      e2 && (e2(), e2 = void 0);
    }
  } : n;
}
function r(n2) {
  n2.forEach((n3) => n3?.remove());
}
function o(n2) {
  return e(() => r(n2));
}
function t(n2) {
  return e(() => n2()?.remove());
}
function u(n2) {
  return e(() => n2?.abort());
}
function l(n2) {
  return e(null != n2 ? () => n2.destroy() : void 0);
}

export {
  e,
  r,
  o,
  t,
  u,
  l
};
//# sourceMappingURL=chunk-7DA6A5LD.js.map
