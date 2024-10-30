import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/fontUtils.js
var t = "arial-unicode-ms";
var n = "woff2";
var r = /* @__PURE__ */ new Map();
var o = /* @__PURE__ */ new Set();
var s2 = class {
  constructor(e, t2) {
    this.fontFace = e, this.promise = t2;
  }
};
function c(t2) {
  return __async(this, null, function* () {
    const c2 = l(t2), a = f(t2), i2 = r.get(c2);
    if (i2) return i2.promise;
    const u2 = new FontFace(t2.family, `url('${s.fontsUrl}/woff2/${a}.${n}') format('${n}')`, {
      style: t2.style,
      weight: t2.weight
    }), d2 = document.fonts;
    if (d2.has(u2) && "loading" === u2.status) return u2.loaded;
    const h2 = u2.load().then(() => (d2.add(u2), u2));
    return r.set(c2, new s2(u2, h2)), o.add(u2), h2;
  });
}
function i(e) {
  return o.has(e);
}
function u(e) {
  if (!e) return t;
  const n2 = e.toLowerCase().split(" ").join("-");
  switch (n2) {
    case "serif":
      return "noto-serif";
    case "sans-serif":
      return "arial-unicode-ms";
    case "monospace":
      return "ubuntu-mono";
    case "fantasy":
      return "cabin-sketch";
    case "cursive":
      return "redressed";
    default:
      return n2;
  }
}
function f(e) {
  const t2 = d(e) + h(e);
  return u(e.family) + (t2.length > 0 ? t2 : "-regular");
}
function l(e) {
  const n2 = d(e) + h(e);
  return (e.family || t) + (n2.length > 0 ? n2 : "-regular");
}
function d(e) {
  if (!e.weight) return "";
  switch (e.weight.toLowerCase()) {
    case "bold":
    case "bolder":
      return "-bold";
  }
  return "";
}
function h(e) {
  if (!e.style) return "";
  switch (e.style.toLowerCase()) {
    case "italic":
    case "oblique":
      return "-italic";
  }
  return "";
}

export {
  t,
  c,
  i,
  u,
  f
};
//# sourceMappingURL=chunk-G3WMCIUE.js.map
