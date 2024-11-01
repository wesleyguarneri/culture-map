import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js
var e = 16;
function n(t) {
  return Math.ceil(t / e) * e;
}
function i(t) {
  return Math.floor(t / e) * e;
}
function r(t, e2) {
  const n2 = 1048576, i2 = 4096, r2 = 2;
  let h2 = t.width * t.height;
  if (h2 < i2) return t instanceof ImageData ? a(t) : t;
  let c = t.width, u = t.height;
  do {
    c = Math.ceil(c / r2), u = Math.ceil(u / r2), h2 = c * u;
  } while (h2 > n2 || null != e2 && (c > e2 || u > e2));
  return o(t, c, u);
}
function h(t, e2) {
  const n2 = Math.max(t.width, t.height);
  if (n2 <= e2) return t;
  const i2 = e2 / n2;
  return o(t, Math.round(t.width * i2), Math.round(t.height * i2));
}
function o(t, e2, n2) {
  if (t instanceof ImageData) return o(a(t), e2, n2);
  const i2 = document.createElement("canvas");
  i2.width = e2, i2.height = n2;
  return i2.getContext("2d").drawImage(t, 0, 0, i2.width, i2.height), i2;
}
function a(e2) {
  const n2 = document.createElement("canvas");
  n2.width = e2.width, n2.height = e2.height;
  const i2 = n2.getContext("2d");
  if (null == i2) throw new s("Failed to create 2d context from HTMLCanvasElement");
  return i2.putImageData(e2, 0, 0), n2;
}

export {
  n,
  i,
  r,
  h
};
//# sourceMappingURL=chunk-FBMJVQWQ.js.map
