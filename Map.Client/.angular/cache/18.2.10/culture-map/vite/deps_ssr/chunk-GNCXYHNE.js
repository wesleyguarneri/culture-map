import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/views/ViewingMode.js
var l;
function o(o2) {
  return "global" === o2 ? l.Global : l.Local;
}
function a(o2) {
  return o2 === l.Global ? "global" : "local";
}
!function(l2) {
  l2[l2.Global = 1] = "Global", l2[l2.Local = 2] = "Local";
}(l || (l = {}));

export {
  l,
  o,
  a
};
//# sourceMappingURL=chunk-GNCXYHNE.js.map