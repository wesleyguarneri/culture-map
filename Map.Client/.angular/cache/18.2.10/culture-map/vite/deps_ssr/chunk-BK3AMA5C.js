import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/core/devEnvironmentUtils.js
function c(c2) {
  return c2 = c2 || globalThis.location.hostname, l.some((a2) => null != c2?.match(a2));
}
function a(c2, a2) {
  return c2 && (a2 = a2 || globalThis.location.hostname) ? null != a2.match(t) || null != a2.match(s) ? c2.replace("static.arcgis.com", "staticdev.arcgis.com") : null != a2.match(o) || null != a2.match(i) ? c2.replace("static.arcgis.com", "staticqa.arcgis.com") : c2 : c2;
}
var t = /^devext\.arcgis\.com$/;
var o = /^qaext\.arcgis\.com$/;
var s = /^[\w-]*\.mapsdevext\.arcgis\.com$/;
var i = /^[\w-]*\.mapsqa\.arcgis\.com$/;
var l = [/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/, t, o, /^jsapps\.esri\.com$/, s, i];

export {
  c,
  a
};
//# sourceMappingURL=chunk-BK3AMA5C.js.map
