import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a,
  b
} from "./chunk-ZSJNH2BT.js";
import {
  o
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  L,
  W2 as W
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/views/draw/support/helpMessageUtils3d.js
function i(o2, i2) {
  const l = o2?.geometry;
  if (!o2 || "mesh" !== l?.type || !i2) return;
  const {
    renderCoordsHelper: p,
    elevationProvider: u
  } = i2, {
    camera: h
  } = i2.state, {
    extent: d
  } = l, {
    center: x,
    spatialReference: g
  } = d, v = W(g), j = L(g), z = W(p.spatialReference), y = d.width * v, C = d.height * j, R = (d.zmax ?? 0) * j, U = R - (d.zmin ?? 0) * j, b2 = Math.max(y, C, U) / z, {
    x: w,
    y: P
  } = x, S = x.z ?? 0;
  o(f, w, P, S), p.toRenderCoords(f, g, f);
  const T = b2 / h.computeScreenPixelSizeAt(f);
  if (T > h.width * a2) return "meshTooClose";
  if (T < m) return "meshTooFar";
  const k = a(o2), {
    absoluteZ: A
  } = b(w, P, R, g, i2, k);
  return A < (u.getElevation(w, P, S, g, "ground") ?? 0) * j + U * c ? "meshUnderground" : "mesh";
}
var m = 20;
var a2 = 1;
var c = 0.1;
var f = n();

export {
  i
};
//# sourceMappingURL=chunk-DDGVA4UY.js.map
