import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  ot,
  tt
} from "./chunk-XLEC46FY.js";
import {
  s as s2
} from "./chunk-AIZ3T7E3.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js
function a(e) {
  const t = m(e);
  return null != t ? t.toDataURL() : "";
}
function i(n, r) {
  return __async(this, null, function* () {
    const a2 = m(n);
    if (null == a2) throw new s("imageToArrayBuffer", "Unsupported image type");
    const i2 = o(n), s4 = yield new Promise((e) => a2.toBlob(e, i2));
    if (s2(r), !s4) throw new s("imageToArrayBuffer", "Failed to encode image");
    const c2 = yield s4.arrayBuffer();
    return s2(r), {
      data: c2,
      type: i2
    };
  });
}
function o(e) {
  if (!(e instanceof HTMLImageElement)) return "image/png";
  const t = e.src;
  if (tt(t)) {
    const e2 = ot(t);
    return "image/jpeg" === e2?.mediaType ? e2.mediaType : "image/png";
  }
  return /\.png$/i.test(t) ? "image/png" : /\.(jpg|jpeg)$/i.test(t) ? "image/jpeg" : "image/png";
}
function m(e) {
  if (e instanceof HTMLCanvasElement) return e;
  if (e instanceof HTMLVideoElement) return null;
  const t = document.createElement("canvas");
  t.width = e.width, t.height = e.height;
  const n = t.getContext("2d");
  return e instanceof HTMLImageElement ? n.drawImage(e, 0, 0, e.width, e.height) : e instanceof ImageData && n.putImageData(e, 0, 0), t;
}
function s3(e) {
  const t = [], n = new Uint8Array(e);
  for (let r = 0; r < n.length; r++) t.push(String.fromCharCode(n[r]));
  return "data:application/octet-stream;base64," + btoa(t.join(""));
}
function c(e) {
  if (e.byteLength < 8) return false;
  const t = new Uint8Array(e);
  return 137 === t[0] && 80 === t[1] && 78 === t[2] && 71 === t[3] && 13 === t[4] && 10 === t[5] && 26 === t[6] && 10 === t[7];
}

export {
  a,
  i,
  s3 as s,
  c
};
//# sourceMappingURL=chunk-RVGJHCZ2.js.map
