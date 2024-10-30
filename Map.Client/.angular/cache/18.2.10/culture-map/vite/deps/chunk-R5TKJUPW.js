import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/support/hitTestSelectUtils.js
function t(t2, e2) {
  return __async(this, null, function* () {
    if ("2d" === t2.type) return t2.hitTest(e2);
    const r2 = yield t2.hitTest(e2);
    if (0 === r2.results.length) return r2;
    const s2 = r2.results[0], u = (s2.distance ?? 0) * (1 + n), i = r2.results.findIndex((t3) => (t3.distance ?? 0) > u);
    return -1 !== i && (r2.results = r2.results.slice(0, i)), s2 && r2.ground.distance > u && (r2.ground.mapPoint = null), r2;
  });
}
var n = 0.05;
function e(t2) {
  return "graphic" === t2?.type;
}
function r(t2) {
  return t2.find(e) ?? null;
}
function s(t2) {
  return t2.filter(e);
}

export {
  t,
  r,
  s
};
//# sourceMappingURL=chunk-R5TKJUPW.js.map
