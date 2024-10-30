import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2,
  v
} from "./chunk-B76NC7GX.js";
import {
  x
} from "./chunk-ZSJNH2BT.js";
import {
  e
} from "./chunk-XP2AJZUL.js";
import {
  c,
  i,
  s
} from "./chunk-VYTPFEL2.js";
import {
  r
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/interactive/support/viewUtils.js
function p(e3, r2, o, c2) {
  o.projectToRenderScreen(e3, R), o.projectToRenderScreen(r2, h), e2(c2, h, R), v(c2, c2);
}
function l(e3, r2, o, t, n2 = n()) {
  const i2 = r(j, e3);
  return i2[2] = x(t, i2, r2, o) || 0, t.renderCoordsHelper.toRenderCoords(i2, r2, n2), n2;
}
function d(r2, o, t, n2) {
  return "2d" === n2.type ? (u.x = r2[0], u.y = r2[1], u.spatialReference = o, n2.toScreen(u)) : (l(r2, o, t, n2, j), n2.state.camera.projectToScreen(j, v2), c(v2[0], v2[1]));
}
var u = e(0, 0, 0, null);
var j = n();
var R = s();
var h = s();
var v2 = i();

export {
  p,
  l,
  d
};
//# sourceMappingURL=chunk-CP2IGGT7.js.map
