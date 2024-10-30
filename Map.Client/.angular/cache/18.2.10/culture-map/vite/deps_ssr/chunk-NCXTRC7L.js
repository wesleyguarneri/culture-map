import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r as r2
} from "./chunk-B76NC7GX.js";
import {
  m
} from "./chunk-6ZLH7XBS.js";
import {
  c
} from "./chunk-2TNGEJGS.js";
import {
  d,
  p
} from "./chunk-VYTPFEL2.js";
import {
  e,
  o,
  r,
  z
} from "./chunk-MZM4INJV.js";

// ../../../node_modules/@arcgis/core/views/3d/support/geometryUtils/ray.js
function m2(e2, n, o2 = m()) {
  return g(e2, d(n), o2), z(o2.direction, o2.direction), o2;
}
function g(r3, n, t) {
  return l(r3, r3.screenToRender(n, p(c.get())), t);
}
function l(r3, t, c2) {
  const i = p(r2(c.get(), t));
  if (i[2] = 0, !r3.unprojectFromRenderScreen(i, c2.origin)) return null;
  const s = p(r2(c.get(), t));
  s[2] = 1;
  const m3 = r3.unprojectFromRenderScreen(s, c.get());
  return null == m3 ? null : (e(c2.direction, m3, c2.origin), c2);
}
function p2(r3, n, t) {
  return f(r3, r3.screenToRender(n, p(c.get())), t);
}
function f(r3, e2, n) {
  r(n.origin, r3.eye);
  const t = o(c.get(), e2[0], e2[1], 1), s = r3.unprojectFromRenderScreen(t, c.get());
  return null == s ? null : (e(n.direction, s, n.origin), n);
}

export {
  m2 as m,
  g,
  l,
  p2 as p,
  f
};
//# sourceMappingURL=chunk-NCXTRC7L.js.map
