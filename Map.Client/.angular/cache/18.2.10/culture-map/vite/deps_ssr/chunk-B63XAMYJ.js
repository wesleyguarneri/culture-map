import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a2,
  i
} from "./chunk-THUD7LGO.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  G
} from "./chunk-MZM4INJV.js";
import {
  a
} from "./chunk-NXK752PZ.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js
function c() {
  return n.getLogger("esri.geometry.Mesh");
}
function p(e) {
  return !a3(e);
}
function a3(e) {
  return null != e.origin;
}
function g(e) {
  return a3(e.vertexSpace);
}
function u(e, r) {
  if (!a3(e)) return null;
  const [n2, i2, t] = e.origin;
  return new _({
    x: n2,
    y: i2,
    z: t,
    spatialReference: r
  });
}
function s(r, n2) {
  const {
    x: o,
    y: p2,
    z: a4,
    spatialReference: g2
  } = r, u2 = [o, p2, a4 ?? 0];
  void 0 !== n2?.geographic && (a(c(), "option: geographic", {
    replacement: "Use the `vertexSpace` option instead.",
    version: "4.29",
    warnOnce: true
  }), n2.vertexSpace && c().warn("Deprecated geographic flag ignored since vertexSpace option is provided."));
  return "local" === (n2?.vertexSpace ?? l(n2?.geographic) ?? f(g2)) ? new a2({
    origin: u2
  }) : new i({
    origin: u2
  });
}
function f(e) {
  return e.isGeographic || e.isWebMercator ? "local" : "georeferenced";
}
function l(e) {
  return null == e ? void 0 : e ? "local" : "georeferenced";
}
function m(e, r) {
  return e.type === r.type && (e.origin === r.origin || null != e.origin && null != r.origin && G(e.origin, r.origin));
}

export {
  p,
  a3 as a,
  g,
  u,
  s,
  m
};
//# sourceMappingURL=chunk-B63XAMYJ.js.map
